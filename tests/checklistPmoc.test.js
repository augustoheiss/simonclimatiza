import test from 'node:test';
import assert from 'node:assert/strict';
import { resumoChecklist, montarMensagemChecklist } from '../src/utils/checklistPmoc.js';

const itens = [
  { texto: 'Cadastramento e tagueamento individual (QR Code) de todo o parque de climatização' },
  { texto: 'Higienização bactericida e fungicida certificada de serpentinas, bandejas e turbinas' },
  { texto: 'Medição periódica de corrente elétrica, tensão, delta-T e pressões de trabalho' },
  { texto: 'Coleta e análise laboratorial da qualidade do ar interior (quando exigido pelo porte)' },
  { texto: 'Emissão mensal de relatórios digitais assinados por Engenheiro Responsável + ART anual' },
];
const nenhum = [false, false, false, false, false];
const todos = [true, true, true, true, true];

test('resumoChecklist: nenhum marcado', () => {
  assert.deepEqual(resumoChecklist(nenhum), { marcados: 0, total: 5, naoMarcados: [0, 1, 2, 3, 4] });
});

test('resumoChecklist: dois marcados dizem quais ficaram de fora', () => {
  assert.deepEqual(resumoChecklist([true, false, true, false, false]), { marcados: 2, total: 5, naoMarcados: [1, 3, 4] });
});

test('resumoChecklist: todos marcados', () => {
  assert.deepEqual(resumoChecklist(todos), { marcados: 5, total: 5, naoMarcados: [] });
});

test('resumoChecklist: lista vazia ou inválida não quebra', () => {
  assert.deepEqual(resumoChecklist([]), { marcados: 0, total: 0, naoMarcados: [] });
  assert.deepEqual(resumoChecklist(undefined), { marcados: 0, total: 0, naoMarcados: [] });
});

test('mensagem com nenhum marcado é o pedido simples, sem contagem', () => {
  assert.equal(montarMensagemChecklist(nenhum, itens), 'Olá! Gostaria de pedir um diagnóstico do meu PMOC.');
});

test('mensagem com dois marcados diz quantos e lista os que NÃO foram marcados', () => {
  const m = montarMensagemChecklist([true, false, true, false, false], itens);
  assert.ok(m.startsWith('Olá! Marquei 2 de 5 itens no checklist de PMOC do site.'));
  assert.match(m, / Itens que não marquei: /);
  assert.ok(m.includes(itens[1].texto));
  assert.ok(m.includes(itens[3].texto));
  assert.ok(m.includes(itens[4].texto));
  assert.ok(!m.includes(itens[0].texto), 'um item marcado não pode aparecer como "não marquei"');
  assert.ok(m.endsWith(' Gostaria de pedir um diagnóstico do meu PMOC.'));
});

test('os itens não marcados saem separados por "; " e na ordem da lista', () => {
  const m = montarMensagemChecklist([true, false, true, false, false], itens);
  const trecho = m.split('Itens que não marquei: ')[1].split(' Gostaria')[0];
  assert.equal(trecho, `${itens[1].texto}; ${itens[3].texto}; ${itens[4].texto}.`);
});

test('mensagem com todos marcados não tem a frase "Itens que não marquei"', () => {
  const m = montarMensagemChecklist(todos, itens);
  assert.match(m, /Marquei 5 de 5 itens/);
  assert.doesNotMatch(m, /Itens que não marquei/);
});

test('regra de texto: nunca "falta" nem "faltam", em nenhum estado', () => {
  for (const marcados of [nenhum, [true, false, true, false, false], todos, [false, false, false, false, true]]) {
    assert.doesNotMatch(montarMensagemChecklist(marcados, itens), /falt/i);
  }
});

test('a mensagem não carrega nome, telefone nem e-mail do visitante', () => {
  const m = montarMensagemChecklist([true, true, false, false, false], itens);
  assert.doesNotMatch(m, /@|\d{4,}|telefone|e-mail|email|nome:/i);
});
