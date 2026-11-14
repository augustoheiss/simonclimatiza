import test from 'node:test';
import assert from 'node:assert/strict';
import { carregarComponente, renderizar } from './_apoio/renderizar.js';

// Estrutura do markup no servidor (sem navegador, sem rolagem). Quem observa a rolagem e marca a seção ativa roda só
// no navegador e é conferido lá; a regra de qual seção vale já tem testes em secaoAtiva.test.js.
const IndiceSecoes = await carregarComponente('src/components/layout/IndiceSecoes.jsx');

const home = [
  { id: 'inicio', nome: 'Início' },
  { id: 'risco', nome: 'Risco' },
  { id: 'checklist', nome: 'Checklist' },
  { id: 'diagnostico', nome: 'Diagnóstico' },
];

test('mantém o nome acessível e a classe de visibilidade (só no desktop) de antes', () => {
  const h = renderizar(IndiceSecoes, { secoes: home });
  assert.match(h, /<nav[^>]*aria-label="Seções desta página"/);
  assert.match(h, /<nav[^>]*class="[^"]*hidden lg:block[^"]*"/);
});

test('cada seção continua sendo um link para #id, com o mesmo texto de antes (nada some)', () => {
  const h = renderizar(IndiceSecoes, { secoes: home });
  for (const s of home) {
    assert.match(h, new RegExp(`<a[^>]*href="#${s.id}"[^>]*>${s.nome}</a>`));
  }
  assert.equal((h.match(/<a /g) ?? []).length, home.length);
});

test('sem rolagem medida (servidor), nenhum link finge estar ativo', () => {
  const h = renderizar(IndiceSecoes, { secoes: home });
  assert.equal((h.match(/aria-current/g) ?? []).length, 0);
});

test('a linha de progresso é decorativa e começa vazia', () => {
  const h = renderizar(IndiceSecoes, { secoes: home });
  const barra = h.match(/<div[^>]*indice-progresso[^>]*>/)[0];
  assert.match(barra, /aria-hidden="true"/);
  assert.match(h, /indice-progresso-barra[^>]*style="[^"]*width:0%/);
});

test('o contêiner da lista continua rolável na horizontal (10 itens sem folga em 1024 px)', () => {
  const h = renderizar(IndiceSecoes, { secoes: home });
  assert.match(h, /<ul[^>]*overflow-x-auto/);
});

test('funciona com a lista de /servicos, que é diferente da da Home', () => {
  const servicos = [
    { id: 'inicio', nome: 'Início' },
    { id: 'servicos', nome: 'Os 6 serviços' },
    { id: 'especialista', nome: 'Especialista' },
    { id: 'provas', nome: 'Provas de campo' },
    { id: 'diagnostico', nome: 'Diagnóstico' },
  ];
  const h = renderizar(IndiceSecoes, { secoes: servicos });
  assert.equal((h.match(/<a /g) ?? []).length, 5);
  assert.match(h, />Os 6 serviços</);
});

test('lista vazia ou ausente não quebra', () => {
  assert.doesNotThrow(() => renderizar(IndiceSecoes, { secoes: [] }));
  assert.doesNotThrow(() => renderizar(IndiceSecoes, {}));
});
