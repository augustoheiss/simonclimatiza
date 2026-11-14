import test from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { carregarComponente } from './_apoio/renderizar.js';

// Estrutura e texto do markup. Clique, troca de foto e layout de celular são conferidos no navegador.
const BridgeProcessSection = await carregarComponente('src/components/home/BridgeProcessSection.jsx');
const render = (idsAutorizados) =>
  renderToStaticMarkup(
    React.createElement(MemoryRouter, null, React.createElement(BridgeProcessSection, { idsAutorizados })),
  );

const TEXTOS_DAS_ETAPAS = [
  'Auditoria e diagnóstico',
  'Levantamos a carga térmica (sol, ocupação, equipamentos) e os pontos de perda de rendimento elétrico. Cada ponto de desperdício é medido, não estimado.',
  'Execução dentro das normas',
  'Vácuo profundo em mícrons (abaixo de 500), pressurização com nitrogênio e instalação conforme as normas ABNT e os manuais dos fabricantes de VRF e chillers.',
  'Gestão preventiva e PMOC',
  'Controle digital dos equipamentos, com histórico e ART. A equipe antecipa falhas antes de o sistema parar.',
];

const TODOS = ['post-09', 'post-01', 'post-08'];

test('os 3 textos das etapas aparecem por inteiro em qualquer estado (nenhuma informação sai)', () => {
  for (const ids of [TODOS, ['post-01'], []]) {
    const html = render(ids);
    for (const trecho of TEXTOS_DAS_ETAPAS) {
      assert.ok(html.includes(trecho), `faltou "${trecho.slice(0, 40)}…" com ids=${JSON.stringify(ids)}`);
    }
    assert.match(html, /Como o trabalho é feito/);
    assert.match(html, /Pedir uma auditoria técnica/);
  }
});

test('com as 3 fotos: 3 botões aria-pressed, só o primeiro pressionado, e UMA só imagem', () => {
  const html = render(TODOS);
  const botoes = html.match(/<button[^>]*aria-pressed="(true|false)"[^>]*>/g) ?? [];
  assert.equal(botoes.length, 3);
  assert.deepEqual(botoes.map((b) => b.match(/aria-pressed="(\w+)"/)[1]), ['true', 'false', 'false']);
  const imagens = html.match(/<img[^>]*\/images\/laudo\/metodo-[^"]+"/g) ?? [];
  assert.equal(imagens.length, 1, 'só a foto ativa é renderizada (RT-04: nada de fotos empilhadas)');
  assert.match(imagens[0], /metodo-1\.webp/);
});

test('só post-01: só a etapa 2 vira botão, começa pressionada, e a foto é a da etapa 2', () => {
  const html = render(['post-01']);
  const botoes = html.match(/<button[^>]*aria-pressed="(true|false)"[^>]*>/g) ?? [];
  assert.equal(botoes.length, 1);
  assert.match(botoes[0], /aria-pressed="true"/);
  const imagens = html.match(/<img[^>]*\/images\/laudo\/metodo-[^"]+"/g) ?? [];
  assert.equal(imagens.length, 1);
  assert.match(imagens[0], /metodo-2\.webp/);
  // As outras duas etapas continuam aparecendo, como texto.
  assert.match(html, /Etapa 1/);
  assert.match(html, /Etapa 3/);
});

test('nenhuma foto: volta ao layout de texto, sem botão, sem aria-pressed e sem imagem', () => {
  for (const ids of [[], ['post-99']]) {
    const html = render(ids);
    assert.equal((html.match(/aria-pressed/g) ?? []).length, 0);
    assert.equal((html.match(/<button/g) ?? []).length, 0);
    assert.equal((html.match(/\/images\/laudo\//g) ?? []).length, 0);
    assert.doesNotMatch(html, /<figure/);
    assert.match(html, /Etapa 1/);
  }
});

test('a numeração "Etapa 1/2/3" continua em todos os estados (é uma sequência real)', () => {
  for (const ids of [TODOS, ['post-01'], []]) {
    const html = render(ids);
    for (const n of [1, 2, 3]) assert.match(html, new RegExp(`Etapa ${n}`));
  }
});

test('aria-live fica só na legenda da foto, nunca nos botões nem na figura inteira', () => {
  const html = render(TODOS);
  const vivos = html.match(/aria-live="polite"/g) ?? [];
  assert.equal(vivos.length, 1);
  const i = html.indexOf('aria-live="polite"');
  assert.match(html.slice(Math.max(0, i - 40), i), /<figcaption[^>]*$/);
});

test('o link de pedir auditoria continua apontando para /contato', () => {
  const html = render(TODOS);
  assert.match(html, /<a[^>]*href="\/contato"[^>]*>[^<]*Pedir uma auditoria técnica/);
});

test('a imagem tem texto alternativo, largura, altura e carregamento preguiçoso', () => {
  const html = render(TODOS);
  const img = html.match(/<img[^>]*metodo-1\.webp[^>]*>/)[0];
  assert.match(img, /alt="Tablet de serviço/);
  assert.match(img, /width="615"/);
  assert.match(img, /height="610"/);
  assert.match(img, /loading="lazy"/);
});

test('nenhum texto proibido nos três estados', () => {
  for (const ids of [TODOS, ['post-01'], []]) {
    const html = render(ids);
    assert.doesNotMatch(html, /10\.820|display (usa|mostra|exibe)/i);
    assert.doesNotMatch(html, /o que falta/i);
  }
});
