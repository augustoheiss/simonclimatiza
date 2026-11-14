import test from 'node:test';
import assert from 'node:assert/strict';
import { carregarComponente, renderizar } from './_apoio/renderizar.js';

// Estes testes cobrem estrutura e texto do markup. Foco, tecla Esc, clique no fundo e rolagem da página
// por trás dependem de um navegador de verdade e são conferidos na Tarefa 5.
const LaudoExemplo = await carregarComponente('src/components/home/LaudoExemplo.jsx');
const props = (extra = {}) => ({ aberto: true, aoFechar: () => {}, retornoFocoRef: { current: null }, idsAutorizados: ['post-01'], ...extra });

test('o laudo é um <dialog> com título ligado por aria-labelledby', () => {
  const html = renderizar(LaudoExemplo, props());
  assert.match(html, /<dialog[^>]*aria-labelledby="laudo-titulo"/);
  assert.match(html, /<h2[^>]*id="laudo-titulo"[^>]*>Evacuação e carga de fluido refrigerante \(R410A\)<\/h2>/);
});

test('o <dialog> recebe m-auto e p-0 (o preflight do Tailwind 4 zera a margem)', () => {
  const html = renderizar(LaudoExemplo, props());
  const abertura = html.match(/<dialog[^>]*>/)[0];
  assert.match(abertura, /\bm-auto\b/);
  assert.match(abertura, /\bp-0\b/);
});

test('mostra o selo "Exemplo de laudo" e o aviso de modelo ilustrativo', () => {
  const html = renderizar(LaudoExemplo, props());
  assert.match(html, /Exemplo de laudo/);
  assert.match(html, /Modelo ilustrativo/);
});

test('os campos de identificação aparecem em branco, sem dado inventado', () => {
  const html = renderizar(LaudoExemplo, props());
  for (const rotulo of ['Cliente', 'Unidade atendida', 'Data do serviço', 'Engenheiro responsável', 'ART nº']) {
    assert.match(html, new RegExp(rotulo));
  }
  assert.equal((html.match(/em branco neste modelo/g) ?? []).length >= 5, true);
});

test('lista as três medições com valor e unidade, nesta ordem', () => {
  const html = renderizar(LaudoExemplo, props());
  const i1 = html.indexOf('Vácuo atingido');
  const i2 = html.indexOf('Variação de pressão depois de isolar');
  const i3 = html.indexOf('Carga de R410A, medida por massa');
  assert.ok(i1 > 0 && i2 > i1 && i3 > i2, 'ordem das medições');
  assert.match(html, />436</);
  assert.match(html, />10,820</);
});

test('cada medição é um botão com aria-pressed; só a primeira começa pressionada', () => {
  const html = renderizar(LaudoExemplo, props());
  const botoes = html.match(/<button[^>]*aria-pressed="(true|false)"[^>]*>/g) ?? [];
  assert.equal(botoes.length, 3);
  assert.deepEqual(botoes.map((b) => b.match(/aria-pressed="(\w+)"/)[1]), ['true', 'false', 'false']);
});

test('com foto autorizada renderiza UMA só imagem (a da medição ativa) e o destaque aria-hidden', () => {
  const html = renderizar(LaudoExemplo, props());
  const imagens = html.match(/<img[^>]*src="\/images\/laudo\/[^"]+"/g) ?? [];
  assert.equal(imagens.length, 1);
  assert.match(imagens[0], /laudo-vacuo\.webp/);
  assert.match(html, /class="[^"]*laudo-destaque[^"]*"[^>]*aria-hidden="true"/);
});

test('sem foto autorizada: nenhuma <img>, nenhum destaque e o laudo continua inteiro', () => {
  const html = renderizar(LaudoExemplo, props({ idsAutorizados: [] }));
  assert.equal((html.match(/<img[^>]*\/images\/laudo\//g) ?? []).length, 0);
  assert.doesNotMatch(html, /laudo-destaque/);
  assert.match(html, /Vácuo atingido/);
  assert.match(html, /Carga de R410A/);
  assert.match(html, /Quanto menor o número, mais seco está o circuito/);
});

test('com id inexistente na lista o resultado é o mesmo do sem foto, sem erro', () => {
  const html = renderizar(LaudoExemplo, props({ idsAutorizados: ['post-99'] }));
  assert.equal((html.match(/<img[^>]*\/images\/laudo\//g) ?? []).length, 0);
});

test('a legenda da medição ativa fica em região aria-live, e só ela', () => {
  const html = renderizar(LaudoExemplo, props());
  const vivos = html.match(/aria-live="polite"/g) ?? [];
  assert.equal(vivos.length, 1);
  const trecho = html.slice(html.indexOf('aria-live="polite"'), html.indexOf('aria-live="polite"') + 400);
  assert.match(trecho, /Quanto menor o número/);
});

test('o botão Fechar tem nome acessível', () => {
  const html = renderizar(LaudoExemplo, props());
  assert.match(html, /<button[^>]*aria-label="Fechar o laudo de exemplo"/);
});

test('texto proibido nunca aparece no markup', () => {
  for (const ids of [['post-01'], []]) {
    const html = renderizar(LaudoExemplo, props({ idsAutorizados: ids }));
    assert.doesNotMatch(html, /10\.820/);
    assert.doesNotMatch(html, /laudo entregue|laudo que você recebe|vêm preenchidos/i);
    assert.doesNotMatch(html, /o que falta/i);
    assert.doesNotMatch(html, /PMOC obrigat/i);
  }
});

test('o botão de WhatsApp do rodapé usa o link do contato único', () => {
  const html = renderizar(LaudoExemplo, props());
  assert.match(html, /href="https:\/\/wa\.me\/5511942163150\?text=/);
  assert.match(html, /rel="noopener noreferrer"/);
});

test('a régua do vácuo preserva valores numéricos quando outra medição está ativa', () => {
  for (const medicaoInicial of [1, 2]) {
    const html = renderizar(LaudoExemplo, props({ medicaoInicial }));
    assert.match(html, /laudo-regua-fill" style="width:[\d.]+%"/);
    assert.match(html, /laudo-regua-limite" style="left:[\d.]+%"/);
    assert.doesNotMatch(html, /null%|NaN%/);
  }
});
