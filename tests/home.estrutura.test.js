import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Lê o código-fonte da Home: não precisa de build nem de navegador.
const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const home = fs.readFileSync(path.join(RAIZ, 'src/pages/Home.jsx'), 'utf8');

const idsDoIndice = [...home.matchAll(/\{\s*id:\s*'([^']+)'/g)].map((m) => m[1]);

test('cada âncora do índice da Home tem uma seção com esse id na página', () => {
  const componentes = [...home.matchAll(/<([A-Z][A-Za-z]+Section|ChecklistPmoc)\b/g)].map((m) => m[1]);
  assert.ok(componentes.length >= 8, 'a Home deveria compor as seções');
  for (const id of idsDoIndice) {
    if (id === 'inicio') continue; // o hero fica dentro de <div id="inicio"> na própria Home
    const dono = fs
      .readdirSync(path.join(RAIZ, 'src/components/home'))
      .filter((f) => f.endsWith('.jsx'))
      .some((f) => fs.readFileSync(path.join(RAIZ, 'src/components/home', f), 'utf8').includes(`id="${id}"`));
    assert.ok(dono, `o índice aponta para #${id}, mas nenhum componente de home/ tem id="${id}"`);
  }
});

test('o checklist está na Home e a âncora "checklist" está no índice (os dois juntos)', () => {
  assert.match(home, /<ChecklistPmoc\s*\/>/);
  assert.ok(idsDoIndice.includes('checklist'), 'âncora "checklist" ausente do índice');
});

test('o checklist vem logo depois da calculadora e antes do comparativo, no código e no índice', () => {
  const iCalc = home.indexOf('<RoiCalculatorSection />');
  const iCheck = home.indexOf('<ChecklistPmoc />');
  const iComp = home.indexOf('<ComparisonTableSection />');
  assert.ok(iCalc > 0 && iCheck > iCalc && iComp > iCheck, 'ordem dos componentes');
  const posicao = (id) => idsDoIndice.indexOf(id);
  assert.ok(posicao('calculadora') < posicao('checklist') && posicao('checklist') < posicao('comparativo'), 'ordem do índice');
});

test('o índice mantém as 9 âncoras de antes e só acrescenta uma (nada some)', () => {
  const antes = ['inicio', 'risco', 'entrega', 'metodo', 'calculadora', 'comparativo', 'especialista', 'faq', 'diagnostico'];
  for (const id of antes) assert.ok(idsDoIndice.includes(id), `sumiu a âncora #${id}`);
  assert.equal(idsDoIndice.length, antes.length + 1);
});

test('o índice não tem ids repetidos', () => {
  assert.equal(new Set(idsDoIndice).size, idsDoIndice.length);
});
