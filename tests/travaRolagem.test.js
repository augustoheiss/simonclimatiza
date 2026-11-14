import test from 'node:test';
import assert from 'node:assert/strict';
import { travarRolagem } from '../src/utils/travaRolagem.js';

// Um elemento falso com `style.overflow`, no lugar de document.documentElement.
const falso = (overflowInicial = '') => ({ style: { overflow: overflowInicial } });

test('travar põe overflow:hidden e devolve a função que restaura o valor anterior', () => {
  const el = falso('auto');
  const soltar = travarRolagem(el);
  assert.equal(el.style.overflow, 'hidden');
  soltar();
  assert.equal(el.style.overflow, 'auto');
});

test('restaura o vazio quando não havia valor antes', () => {
  const el = falso();
  const soltar = travarRolagem(el);
  assert.equal(el.style.overflow, 'hidden');
  soltar();
  assert.equal(el.style.overflow, '');
});

test('abrir, fechar e abrir de novo (Strict Mode: efeito → cleanup → efeito) termina travado', () => {
  const el = falso('');
  let soltar = travarRolagem(el);   // 1º efeito
  soltar();                         // cleanup do Strict Mode
  soltar = travarRolagem(el);       // 2º efeito
  assert.equal(el.style.overflow, 'hidden', 'a página tem que ficar travada depois do 2º efeito');
  soltar();
  assert.equal(el.style.overflow, '');
});

test('duas travas aninhadas só soltam quando a última solta (valor original volta)', () => {
  const el = falso('scroll');
  const soltarA = travarRolagem(el);
  const soltarB = travarRolagem(el);
  soltarA();
  assert.equal(el.style.overflow, 'hidden', 'ainda há uma trava ativa');
  soltarB();
  assert.equal(el.style.overflow, 'scroll');
});

test('soltar duas vezes a mesma trava não bagunça o valor', () => {
  const el = falso('auto');
  const soltar = travarRolagem(el);
  soltar();
  soltar();
  assert.equal(el.style.overflow, 'auto');
});
