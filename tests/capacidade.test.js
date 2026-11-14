import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LIMITE_PMOC_BTU,
  BTU_POR_TR,
  TAMANHOS_BTU,
  normalizarTR,
  somarCapacidade,
  classificarCapacidade,
} from '../src/utils/capacidade.js';

test('constantes: 60.000 BTU/h é o limite e 1 TR vale 12.000 BTU/h', () => {
  assert.equal(LIMITE_PMOC_BTU, 60000);
  assert.equal(BTU_POR_TR, 12000);
  assert.deepEqual(TAMANHOS_BTU, [9000, 12000, 18000, 24000, 36000, 60000]);
  assert.equal(5 * BTU_POR_TR, LIMITE_PMOC_BTU);
});

test('normalizarTR aceita vírgula e ponto', () => {
  assert.deepEqual(normalizarTR('2,5'), { ok: true, valor: 2.5 });
  assert.deepEqual(normalizarTR('2.5'), { ok: true, valor: 2.5 });
  assert.deepEqual(normalizarTR('  3 '), { ok: true, valor: 3 });
});

test('normalizarTR trata campo vazio como zero, sem erro', () => {
  assert.deepEqual(normalizarTR(''), { ok: true, valor: 0 });
  assert.deepEqual(normalizarTR('   '), { ok: true, valor: 0 });
});

test('normalizarTR rejeita texto que não é número positivo', () => {
  for (const ruim of ['abc', '-1', '1e3', '2,', '02,5x', '2,5,1', ',5', '2 5']) {
    assert.equal(normalizarTR(ruim).ok, false, `deveria rejeitar "${ruim}"`);
  }
});

test('normalizarTR limita a 999 e nunca devolve NaN nem negativo', () => {
  assert.deepEqual(normalizarTR('999999'), { ok: true, valor: 999 });
  for (const t of ['', '0', '2,5', '999999', 'abc', '-1']) {
    const r = normalizarTR(t);
    assert.ok(Number.isFinite(r.valor) && r.valor >= 0, `"${t}" gerou ${r.valor}`);
  }
});

test('somarCapacidade soma aparelhos e TR', () => {
  assert.equal(somarCapacidade({ 9000: 2, 12000: 2 }, 0), 42000);
  assert.equal(somarCapacidade({ 60000: 1 }, 0), 60000);
  assert.equal(somarCapacidade({}, 5), 60000);
  assert.equal(somarCapacidade({}, 2.5), 30000);
  assert.equal(somarCapacidade({ 9000: 2, 12000: 2, 60000: 1 }, 0), 102000);
});

test('somarCapacidade ignora quantidade negativa ou inválida', () => {
  assert.equal(somarCapacidade({ 9000: -3, 12000: NaN, 18000: 1 }, 0), 18000);
});

test('classificarCapacidade: zero é vazio; 59.999 é abaixo; 60.000 é acima', () => {
  assert.equal(classificarCapacidade(0), 'vazio');
  assert.equal(classificarCapacidade(59999), 'abaixo');
  assert.equal(classificarCapacidade(60000), 'acima');
  assert.equal(classificarCapacidade(102000), 'acima');
});

test('5 TR e um aparelho de 60.000 BTU/h caem juntos em "acima" (borda exata)', () => {
  assert.equal(classificarCapacidade(somarCapacidade({}, 5)), 'acima');
  assert.equal(classificarCapacidade(somarCapacidade({ 60000: 1 }, 0)), 'acima');
  assert.equal(classificarCapacidade(somarCapacidade({ 36000: 1, 24000: 1 }, 0)), 'acima');
  assert.equal(classificarCapacidade(somarCapacidade({ 36000: 1, 12000: 1 }, 0)), 'abaixo');
});
