import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs';
import { carregarComponente, renderizar } from './_apoio/renderizar.js';

test('o ajudante transpila um .jsx e renderiza o markup', async () => {
  const dir = path.resolve('node_modules/.cache/testes-jsx');
  fs.mkdirSync(dir, { recursive: true });
  const amostra = path.join(dir, 'Amostra.jsx');
  fs.writeFileSync(amostra, "import React from 'react';\nexport default function Amostra({ nome }) { return <p className=\"x\">Olá, {nome}</p>; }\n");
  const Amostra = await carregarComponente('node_modules/.cache/testes-jsx/Amostra.jsx');
  assert.equal(renderizar(Amostra, { nome: 'mundo' }), '<p class="x">Olá, mundo</p>');
});
