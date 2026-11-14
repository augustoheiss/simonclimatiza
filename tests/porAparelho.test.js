import test from 'node:test';
import assert from 'node:assert/strict';
import { mediaPorAparelho } from '../src/utils/porAparelho.js';

// Fórmula da calculadora de hoje (src/components/home/RoiCalculatorSection.jsx):
// desperdício mensal = conta × 0,55 × 0,28. O teste de paridade usa a mesma conta, sem importar o componente.
const desperdicioMensal = (conta) => conta * 0.55 * 0.28;
const desperdicioAnual = (conta) => Math.round(desperdicioMensal(conta) * 12);

test('mediaPorAparelho divide o desperdício mensal e arredonda como Math.round', () => {
  assert.equal(mediaPorAparelho(1309, 12), 109);
  assert.equal(mediaPorAparelho(1309, 2), 655); // 654,5 arredonda para 655
  assert.equal(mediaPorAparelho(3080, 40), 77);
});

test('mediaPorAparelho devolve 0 sem aparelhos ou com número inválido', () => {
  assert.equal(mediaPorAparelho(1309, 0), 0);
  assert.equal(mediaPorAparelho(1309, -3), 0);
  assert.equal(mediaPorAparelho(1309, NaN), 0);
  assert.equal(mediaPorAparelho(NaN, 12), 0);
});

test('paridade: o desperdício anual dos três valores de conta é o que o site mostra hoje', () => {
  assert.equal(desperdicioAnual(8500), 15708);
  assert.equal(desperdicioAnual(20000), 36960);
  assert.equal(desperdicioAnual(40000), 73920);
});

test('a média por aparelho parte do mesmo desperdício mensal da calculadora', () => {
  assert.equal(mediaPorAparelho(desperdicioMensal(8500), 12), 109);
  assert.equal(mediaPorAparelho(desperdicioMensal(8500), 2), 655);
  assert.equal(mediaPorAparelho(desperdicioMensal(20000), 40), 77);
});
