import test from 'node:test';
import assert from 'node:assert/strict';
import { avisoDoCampoTR } from '../src/utils/capacidade.js';

// Regra pedida na revisão: "2," (a caminho de "2,5") NÃO pode disparar aviso enquanto a pessoa digita.
// O aviso só aparece quando ela SAI do campo com texto que não é número.

test('enquanto digita, nunca mostra aviso, nem com texto inválido', () => {
  for (const texto of ['', '2', '2,', '2,5', 'abc', '-1', '1e3', '02,5x']) {
    assert.equal(avisoDoCampoTR(texto, { saiuDoCampo: false }), null, `não deveria avisar digitando "${texto}"`);
  }
});

test('ao sair do campo com número válido ou vazio, não avisa', () => {
  for (const texto of ['', '0', '2', '2,5', '2.5', '  3 ', '999999']) {
    assert.equal(avisoDoCampoTR(texto, { saiuDoCampo: true }), null, `não deveria avisar saindo com "${texto}"`);
  }
});

test('ao sair do campo com texto que não é número, avisa com instrução clara', () => {
  for (const texto of ['abc', '-1', '1e3', '2,', '02,5x', '2,5,1']) {
    const aviso = avisoDoCampoTR(texto, { saiuDoCampo: true });
    assert.equal(aviso, 'Digite só números, por exemplo 2,5.', `deveria avisar saindo com "${texto}"`);
  }
});

test('o texto do aviso diz o que fazer e não pede desculpa', () => {
  const aviso = avisoDoCampoTR('abc', { saiuDoCampo: true });
  assert.match(aviso, /^Digite /);
  assert.doesNotMatch(aviso, /desculp|erro|inválid/i);
});
