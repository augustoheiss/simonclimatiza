import test from 'node:test';
import assert from 'node:assert/strict';
import { carregarComponente, renderizar } from './_apoio/renderizar.js';
import { CHECKLIST_ITENS } from '../src/data/checklistPmoc.js';
import { montarMensagemChecklist } from '../src/utils/checklistPmoc.js';

// Estrutura e texto do estado inicial (nada marcado). Marcar itens e a contagem dependem de eventos e são
// conferidos no navegador; a lógica da mensagem já tem testes em checklistPmoc.test.js.
const ChecklistPmoc = await carregarComponente('src/components/home/ChecklistPmoc.jsx');
const html = () => renderizar(ChecklistPmoc);
const mensagemVazia = montarMensagemChecklist(CHECKLIST_ITENS.map(() => false), CHECKLIST_ITENS);

test('a seção tem id="checklist" e título ligado por aria-labelledby', () => {
  const h = html();
  assert.match(h, /<section[^>]*id="checklist"[^>]*aria-labelledby="checklist-titulo"/);
  assert.match(h, /<h2[^>]*id="checklist-titulo"[^>]*>O que o PMOC da Simon inclui<\/h2>/);
});

test('o subtítulo diz que a lista é o protocolo da Simon, não um mínimo legal (D4)', () => {
  assert.match(html(), /A lista é o protocolo da Simon, não um mínimo legal\./);
});

test('os 5 itens aparecem como caixas de seleção nativas dentro de label, com o texto do protocolo', () => {
  const h = html();
  const caixas = h.match(/<input[^>]*type="checkbox"[^>]*>/g) ?? [];
  assert.equal(caixas.length, 5);
  for (const item of CHECKLIST_ITENS) assert.ok(h.includes(item.texto), `faltou o item: ${item.texto.slice(0, 40)}`);
  assert.equal((h.match(/<label[^>]*checklist-item[^>]*>/g) ?? []).length, 5);
});

test('o CTA é um link real do WhatsApp, com a mensagem do estado vazio, e abre em nova aba com rel seguro', () => {
  const h = html();
  const cta = h.match(/<a[^>]*href="https:\/\/wa\.me\/5511942163150\?text=[^"]*"[^>]*>/)[0];
  assert.ok(cta.includes(`text=${encodeURIComponent(mensagemVazia).replace(/&/g, '&amp;')}`) || cta.includes(encodeURIComponent(mensagemVazia)));
  assert.match(cta, /target="_blank"/);
  assert.match(cta, /rel="noopener noreferrer"/);
});

test('a mensagem exibida no <details> é exatamente a mesma que vai na URL do WhatsApp', () => {
  const h = html();
  const exibida = h.match(/<details[^>]*>[\s\S]*?<p[^>]*id="checklist-mensagem"[^>]*>([^<]*)<\/p>/)[1];
  const url = h.match(/href="(https:\/\/wa\.me\/[^"]+)"/)[1].replace(/&amp;/g, '&');
  assert.equal(decodeURIComponent(url.split('text=')[1]), exibida.replace(/&#x27;/g, "'"));
  assert.equal(exibida, mensagemVazia);
});

test('o <details> mostra a mensagem ANTES do clique (texto do resumo e conteúdo presentes)', () => {
  const h = html();
  assert.match(h, /<details[^>]*>[\s\S]*<summary[^>]*>Ver a mensagem que será enviada<\/summary>/);
});

test('aria-live fica SÓ no resumo da contagem, nunca no painel inteiro, no botão nem no <details>', () => {
  const h = html();
  const vivos = h.match(/aria-live="polite"/g) ?? [];
  assert.equal(vivos.length, 1);
  const i = h.indexOf('aria-live="polite"');
  const tag = h.slice(h.lastIndexOf('<', i), h.indexOf('>', i) + 1);
  assert.match(tag, /checklist-contagem/);
  assert.doesNotMatch(tag, /<a |<details|<button/);
});

test('contagem inicial: 0 de 5', () => {
  assert.match(html(), /<strong[^>]*>0<\/strong>\s*de 5 itens marcados/);
});

test('a lista de itens não marcados NÃO aparece antes de marcar algo', () => {
  assert.doesNotMatch(html(), /Itens do protocolo da Simon que você não marcou/);
});

test('textos proibidos nunca aparecem: "o que falta", "faltam", "mínimo exigido"', () => {
  const h = html();
  assert.doesNotMatch(h, /o que falta|faltam|falta no seu/i);
  assert.doesNotMatch(h, /m[ií]nimo exigido|exigido por lei/i);
});

test('a barra de progresso é decorativa (aria-hidden) e tem 5 segmentos', () => {
  const h = html();
  const barra = h.match(/<div[^>]*checklist-barra[^>]*>/)[0];
  assert.match(barra, /aria-hidden="true"/);
  assert.equal((h.match(/<i[^>]*checklist-seg[^>]*>/g) ?? []).length, 5);
});

test('usa fundo "branca" e cartões em papel (alterna com a calculadora, que é papel)', () => {
  const h = html();
  assert.match(h, /<section[^>]*class="[^"]*secao-laudo--branca[^"]*"/);
  assert.doesNotMatch(h, /<section[^>]*class="[^"]*secao-laudo--papel[^"]*"/);
});
