import test from 'node:test';
import assert from 'node:assert/strict';
import { escolherSecaoAtiva } from '../src/utils/secaoAtiva.js';

// medidas: posição de cada seção em relação ao topo da JANELA (topo e fundo, em px). `linha` é a faixa de leitura,
// também em px do topo da janela. `fimDaPagina` é true quando a rolagem chegou ao fim.
const home = [
  { id: 'inicio', topo: -300, fundo: 500 },
  { id: 'risco', topo: 500, fundo: 900 },
  { id: 'entrega', topo: 900, fundo: 1300 },
];

test('devolve a seção que cobre a linha de leitura', () => {
  assert.equal(escolherSecaoAtiva(home, 520, false), 'risco');
  assert.equal(escolherSecaoAtiva(home, 100, false), 'inicio');
  assert.equal(escolherSecaoAtiva(home, 1000, false), 'entrega');
});

test('na fronteira exata vale a seção que COMEÇA ali', () => {
  assert.equal(escolherSecaoAtiva(home, 500, false), 'risco');
  assert.equal(escolherSecaoAtiva(home, 900, false), 'entrega');
});

test('abaixo de todas as seções, devolve a última que já começou (nunca null se há seções)', () => {
  assert.equal(escolherSecaoAtiva(home, 5000, false), 'entrega');
});

test('acima de todas as seções, devolve a primeira', () => {
  assert.equal(escolherSecaoAtiva(home, -900, false), 'inicio');
});

test('no fim da página vale a ÚLTIMA seção, mesmo que a linha caia numa anterior', () => {
  assert.equal(escolherSecaoAtiva(home, 520, true), 'entrega');
});

test('lista vazia ou ausente devolve null', () => {
  assert.equal(escolherSecaoAtiva([], 100, false), null);
  assert.equal(escolherSecaoAtiva(undefined, 100, false), null);
  assert.equal(escolherSecaoAtiva([], 100, true), null);
});

// /servicos: a seção #servicos é MUITO alta e ocupa quase tudo entre o início e o diagnóstico. Com o fim da página
// valendo a última, o visitante que chega ao rodapé vê "Diagnóstico" ativo, e não "Os 6 serviços".
const servicos = [
  { id: 'inicio', topo: -2000, fundo: 400 },
  { id: 'servicos', topo: 400, fundo: 7000 },
  { id: 'especialista', topo: 7000, fundo: 7600 },
  { id: 'provas', topo: 7600, fundo: 8800 },
  { id: 'diagnostico', topo: 8800, fundo: 9300 },
];

test('/servicos: no meio da seção alta, "servicos" continua ativa', () => {
  assert.equal(escolherSecaoAtiva(servicos, 3000, false), 'servicos');
});

test('/servicos: ao chegar ao fim da página, "diagnostico" fica ativa (seção curta do fim)', () => {
  assert.equal(escolherSecaoAtiva(servicos, 8700, true), 'diagnostico');
});

test('seções fora de ordem na lista não confundem o resultado (escolhe pela posição, não pela ordem do array)', () => {
  const embaralhada = [home[2], home[0], home[1]];
  assert.equal(escolherSecaoAtiva(embaralhada, 520, false), 'risco');
  assert.equal(escolherSecaoAtiva(embaralhada, 5000, false), 'entrega');
  assert.equal(escolherSecaoAtiva(embaralhada, 520, true), 'entrega');
});

test('uma única seção é sempre a ativa', () => {
  assert.equal(escolherSecaoAtiva([{ id: 'so', topo: 100, fundo: 900 }], 50, false), 'so');
  assert.equal(escolherSecaoAtiva([{ id: 'so', topo: 100, fundo: 900 }], 500, true), 'so');
});

test('medidas com NaN são ignoradas, sem derrubar o resto', () => {
  const comLixo = [{ id: 'a', topo: NaN, fundo: NaN }, ...home];
  assert.equal(escolherSecaoAtiva(comLixo, 520, false), 'risco');
});
