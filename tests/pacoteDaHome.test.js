import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// O que a Home carrega para TODO visitante (pacote de entrada) não pode puxar o conteúdo do laudo, que só deve
// baixar quando alguém abre o laudo. Estes testes leem o código-fonte: não precisam de build nem de navegador.
const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ler = (rel) => fs.readFileSync(path.join(RAIZ, rel), 'utf8');

// Arquivos que ficam no pacote de entrada da Home (importados de forma estática, sem React.lazy).
const NO_PACOTE_DE_ENTRADA = [
  'src/components/home/HeroSection.jsx',
  'src/components/home/BridgeProcessSection.jsx',
  'src/components/home/RoiCalculatorSection.jsx',
  'src/pages/Home.jsx',
];

const importaConteudoDoLaudo = (codigo) => /from\s+['"][^'"]*\/data\/laudoExemplo['"]/.test(codigo);

test('nenhum arquivo do pacote de entrada importa o conteúdo do laudo (data/laudoExemplo)', () => {
  for (const arquivo of NO_PACOTE_DE_ENTRADA) {
    assert.equal(
      importaConteudoDoLaudo(ler(arquivo)),
      false,
      `${arquivo} importa data/laudoExemplo, o que leva o texto do laudo para todo visitante`,
    );
  }
});

test('a lista de fotos autorizadas fica num arquivo próprio, pequeno', () => {
  const caminho = path.join(RAIZ, 'src/data/fotosAutorizadas.js');
  assert.ok(fs.existsSync(caminho), 'src/data/fotosAutorizadas.js não existe');
  const codigo = fs.readFileSync(caminho, 'utf8');
  assert.match(codigo, /export const IDS_AUTORIZADOS_HOME = \[/);
  assert.ok(codigo.length < 1500, `fotosAutorizadas.js tem ${codigo.length} bytes; deveria ser só a lista`);
  assert.doesNotMatch(codigo, /Evacuação e carga|Vácuo atingido/);
});

test('laudoExemplo.js continua exportando IDS_AUTORIZADOS_HOME, para quem já importava de lá', async () => {
  const { IDS_AUTORIZADOS_HOME: viaLaudo } = await import('../src/data/laudoExemplo.js');
  const { IDS_AUTORIZADOS_HOME: direto } = await import('../src/data/fotosAutorizadas.js');
  assert.deepEqual(viaLaudo, direto);
});

// data/servicos.js tem o texto de TODOS os serviços (8 KB) e só a página /servicos, que carrega sob demanda, o usa.
// Importá-lo de algo que roda na Home levaria esse texto para todo visitante, só para ler 5 frases.
const importaServicos = (codigo) => /from\s+['"][^'"]*\/servicos(\.js)?['"]/.test(codigo);

test('nada que a Home carrega estaticamente importa data/servicos (8 KB de texto que só /servicos usa)', () => {
  const arquivos = [
    ...NO_PACOTE_DE_ENTRADA,
    'src/components/home/ChecklistPmoc.jsx',
    'src/components/home/SomadorCapacidade.jsx',
    'src/data/checklistPmoc.js',
    'src/utils/checklistPmoc.js',
    'src/utils/capacidade.js',
  ];
  for (const arquivo of arquivos) {
    assert.equal(importaServicos(ler(arquivo)), false, `${arquivo} importa data/servicos e o leva para o pacote de entrada`);
  }
});

test('o texto do checklist nunca diverge do protocolo de PMOC em servicos.js (fonte única verificada)', async () => {
  const { SERVICOS } = await import('../src/data/servicos.js');
  const { CHECKLIST_ITENS } = await import('../src/data/checklistPmoc.js');
  const protocolo = SERVICOS.find((s) => s.id === 'pmoc').protocolo;
  assert.equal(CHECKLIST_ITENS.length, protocolo.length);
  CHECKLIST_ITENS.forEach((item, i) => {
    assert.equal(item.texto, protocolo[i], `item ${i}: o texto do checklist diverge do protocolo de servicos.js`);
    assert.equal(item.origem, `servicos.pmoc.protocolo[${i}]`);
  });
});

test('o laudo e o método leem a MESMA lista (uma fonte só)', () => {
  assert.match(ler('src/components/home/BridgeProcessSection.jsx'), /data\/fotosAutorizadas/);
  assert.match(ler('src/components/home/LaudoExemplo.jsx'), /IDS_AUTORIZADOS_HOME/);
});
