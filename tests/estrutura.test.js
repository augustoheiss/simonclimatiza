import test from 'node:test';
import assert from 'node:assert/strict';

test('npm test descobre os testes do projeto', () => {
  // O objetivo é provar que `npm test` encontra este arquivo e o executa.
  assert.ok(typeof test === 'function');
});

test('o node lê os dados como módulo', async () => {
  const { LEITURAS_CAMPO } = await import('../src/data/leituraCampo.js');
  assert.equal(LEITURAS_CAMPO.length, 2);
  assert.equal(LEITURAS_CAMPO[1].linhas[2].valor, '10,820');
});
