import test from 'node:test';
import assert from 'node:assert/strict';
import { METODO_FOTOS, etapasComFoto } from '../src/data/metodoFotos.js';

const todos = ['post-09', 'post-01', 'post-08'];

test('com as 3 fotos autorizadas, as 3 etapas têm foto e a primeira começa ativa', () => {
  const r = etapasComFoto(METODO_FOTOS, todos);
  assert.deepEqual(r.fotoPorEtapa.map((f) => f?.etapa ?? null), [1, 2, 3]);
  assert.equal(r.etapaInicial, 0);
  assert.equal(r.temFoto, true);
});

test('só post-01 autorizado: apenas a etapa 2 tem foto e ela começa ativa', () => {
  const r = etapasComFoto(METODO_FOTOS, ['post-01']);
  assert.deepEqual(r.fotoPorEtapa.map((f) => f?.etapa ?? null), [null, 2, null]);
  assert.equal(r.etapaInicial, 1, 'a etapa inicial é a primeira que TEM foto, não a primeira da lista');
  assert.equal(r.temFoto, true);
});

test('nenhuma foto autorizada: nenhuma etapa tem foto e a seção volta ao texto', () => {
  const r = etapasComFoto(METODO_FOTOS, []);
  assert.deepEqual(r.fotoPorEtapa, [null, null, null]);
  assert.equal(r.etapaInicial, null);
  assert.equal(r.temFoto, false);
});

test('id inexistente equivale a nenhuma foto, sem erro', () => {
  const r = etapasComFoto(METODO_FOTOS, ['post-99']);
  assert.equal(r.temFoto, false);
  assert.equal(r.etapaInicial, null);
});

test('devolve sempre 3 posições, na ordem das etapas, qualquer que seja a lista', () => {
  for (const ids of [todos, ['post-08'], [], ['post-99']]) {
    assert.equal(etapasComFoto(METODO_FOTOS, ids).fotoPorEtapa.length, 3);
  }
});

test('a lista de fotos vazia também não quebra', () => {
  const r = etapasComFoto([], todos);
  assert.equal(r.temFoto, false);
  assert.equal(r.fotoPorEtapa.length, 3);
});
