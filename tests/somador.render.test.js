import test from 'node:test';
import assert from 'node:assert/strict';
import { carregarComponente, renderizar } from './_apoio/renderizar.js';

// Estrutura e texto do markup do estado inicial. A soma, o foco e o aviso ao sair do campo
// dependem de eventos e são conferidos no navegador (a lógica pura já tem testes em capacidade.test.js).
const SomadorCapacidade = await carregarComponente('src/components/home/SomadorCapacidade.jsx');
const html = () => renderizar(SomadorCapacidade, { aoUsar: () => {}, aoFechar: () => {} });

test('tem uma linha com botões − e + para cada tamanho de aparelho', () => {
  const h = html();
  for (const btu of ['9.000', '12.000', '18.000', '24.000', '36.000', '60.000']) {
    assert.match(h, new RegExp(`Mais um aparelho de ${btu.replace('.', '\\.')} BTU/h`));
    assert.match(h, new RegExp(`Menos um aparelho de ${btu.replace('.', '\\.')} BTU/h`));
  }
});

test('os botões − e + têm pelo menos 40 px (classe de tamanho do projeto) e começam: − desabilitado', () => {
  const h = html();
  const menos = h.match(/<button[^>]*aria-label="Menos um aparelho[^"]*"[^>]*>/g) ?? [];
  assert.equal(menos.length, 6);
  for (const b of menos) assert.match(b, /disabled/);
  const mais = h.match(/<button[^>]*aria-label="Mais um aparelho[^"]*"[^>]*>/g) ?? [];
  for (const b of mais) assert.doesNotMatch(b, /disabled/);
  assert.match(h, /somador-passo/);
});

test('o campo de TR é texto, aceita decimal, começa vazio com placeholder 0', () => {
  const h = html();
  const campo = h.match(/<input[^>]*id="somador-tr"[^>]*>/)[0];
  assert.match(campo, /type="text"/);
  assert.match(campo, /inputMode="decimal"/i);
  assert.match(campo, /placeholder="0"/);
  assert.doesNotMatch(campo, /value="0"/, 'começa vazio: o "0" inicial gerava "02,5" ao digitar');
  assert.match(h, /<label[^>]*for="somador-tr"[^>]*>[^<]*Chillers e VRF, total em TR/);
});

test('o medidor tem papel meter, limites e valor textual', () => {
  const h = html();
  const medidor = h.match(/<div[^>]*role="meter"[^>]*>/)[0];
  assert.match(medidor, /aria-valuemin="0"/);
  assert.match(medidor, /aria-valuemax="120000"/);
  assert.match(medidor, /aria-valuenow="0"/);
  assert.match(medidor, /aria-valuetext="0 BTU\/h"/);
  assert.match(medidor, /aria-label="Capacidade somada, em BTU por hora"/);
});

test('vazio: o botão "Usar este resultado" começa desabilitado', () => {
  const h = html();
  const usar = h.match(/<button[^>]*>[^<]*Usar este resultado na calculadora[^<]*<\/button>/)[0];
  assert.match(usar, /disabled/);
});

test('o somador NÃO imprime sentença legal nem "PMOC obrigatório" (D3)', () => {
  const h = html();
  assert.doesNotMatch(h, /PMOC obrigat/i);
  assert.doesNotMatch(h, /Lei 13\.589/);
  assert.doesNotMatch(h, /obrigat/i);
});

test('explica que a soma não muda o número de aparelhos do controle', () => {
  assert.match(html(), /O número de aparelhos acima não muda com esta soma\./);
});

test('diz o limite e a conversão em linguagem simples', () => {
  const h = html();
  assert.match(h, /1 TR = 12\.000 BTU\/h/);
  assert.match(h, /60\.000 BTU\/h/);
});

test('o aviso do campo de TR só existe como região de aviso, e começa oculto', () => {
  const h = html();
  assert.match(h, /id="somador-tr-aviso"[^>]*hidden/);
});

test('só uma região aria-live ou status no somador, para o leitor de tela não repetir', () => {
  const h = html();
  const vivos = (h.match(/aria-live=|role="status"|role="alert"/g) ?? []).length;
  assert.ok(vivos <= 2, `esperava no máximo 2 regiões anunciando; achei ${vivos}`);
});
