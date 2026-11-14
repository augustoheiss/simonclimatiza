import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { calcularEstadoOverflow } from '../src/hooks/useHorizontalOverflow.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function ler(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), 'utf8');
}

const ARQUIVOS_FASE4_UI = [
  'src/App.jsx',
  'src/components/FloatingWhatsApp.jsx',
  'src/components/ProtecaoAcademia.jsx',
  'src/components/ui/SimonActionGate.jsx',
  'src/components/workbench/CadTopRibbon.jsx',
  'src/components/workbench/CadBenchView.jsx',
  'src/components/workbench/CadModuleTree.jsx',
  'src/components/workbench/CadInspectorDock.jsx',
  'src/components/workbench/SimonCadWorkbench.jsx',
  'src/components/conversa/Balao.jsx',
  'src/components/conversa/ConversaView.jsx',
  'src/components/conversa/DesafioModuloModal.jsx',
  'src/components/conversa/beats/BeatCalculadoraCampo.jsx',
  'src/components/conversa/beats/BeatCauso.jsx',
  'src/components/conversa/beats/BeatEscolha.jsx',
  'src/components/conversa/beats/BeatFilosofia.jsx',
  'src/components/conversa/beats/BeatInspecaoVisual.jsx',
  'src/components/conversa/beats/BeatMitoVerdade.jsx',
  'src/components/conversa/beats/BeatQuiz.jsx',
  'src/components/conversa/beats/BeatSaideira.jsx',
  'src/pages/AcademiaCatalogo.jsx',
];

describe('Fase 4 — utilitário useHorizontalOverflow', () => {
  it('retorna falso para ambos os lados quando não há transbordo horizontal', () => {
    assert.deepEqual(
      calcularEstadoOverflow({ scrollLeft: 0, scrollWidth: 800, clientWidth: 800 }),
      { hasOverflowLeft: false, hasOverflowRight: false },
    );
  });

  it('detecta transbordo à direita no início da rolagem', () => {
    assert.deepEqual(
      calcularEstadoOverflow({ scrollLeft: 0, scrollWidth: 1000, clientWidth: 600 }),
      { hasOverflowLeft: false, hasOverflowRight: true },
    );
  });

  it('detecta transbordo em ambos os lados no meio da rolagem', () => {
    assert.deepEqual(
      calcularEstadoOverflow({ scrollLeft: 40, scrollWidth: 1000, clientWidth: 600 }),
      { hasOverflowLeft: true, hasOverflowRight: true },
    );
  });

  it('oculta fade direito dentro da tolerância no fim da rolagem', () => {
    assert.deepEqual(
      calcularEstadoOverflow({ scrollLeft: 399, scrollWidth: 1000, clientWidth: 600 }),
      { hasOverflowLeft: true, hasOverflowRight: false },
    );
  });

  it('lida com entradas nulas sem lançar erro', () => {
    assert.deepEqual(calcularEstadoOverflow(null), {
      hasOverflowLeft: false,
      hasOverflowRight: false,
    });
  });
});

describe('Fase 4 — invariantes de tipografia, acessibilidade e contrato da Academia/Bancada', () => {
  it('elimina classes micro-fonte (< 12px) em todos os arquivos JSX da Academia, Bancada e Conversa', () => {
    const regexMicro = /\btext-\[(?:9|10|11)px\]/;
    for (const rel of ARQUIVOS_FASE4_UI) {
      const conteudo = ler(rel);
      assert.equal(
        regexMicro.test(conteudo),
        false,
        `${rel} ainda contém classe tipográfica menor que 12px`,
      );
    }
  });

  it('remove jargões antigos de interface em inglês nos painéis da Academia e Bancada', () => {
    const proibidos = [
      'LAYERS • MÓDULOS',
      'LAYERS &bull; MÓDULOS',
      'HUD TELEMETRIA',
      'AUTOCAD WORKSPACE',
      'Zero-Roll-Down',
      'WORKSTATION ELITE',
      'Sair VIP',
    ];
    for (const rel of [
      'src/pages/AcademiaCatalogo.jsx',
      'src/components/workbench/CadModuleTree.jsx',
      'src/components/workbench/CadBenchView.jsx',
      'src/components/workbench/SimonCadWorkbench.jsx',
      'src/components/workbench/CadTopRibbon.jsx',
    ]) {
      const conteudo = ler(rel);
      for (const termo of proibidos) {
        assert.equal(
          conteudo.includes(termo),
          false,
          `${rel} não deve conter o jargão "${termo}"`,
        );
      }
    }
  });

  it('evita landmarks <main> duplicados no Workbench e no Catálogo', () => {
    const wbMainCount = (ler('src/components/workbench/SimonCadWorkbench.jsx').match(/<main\b/g) || [])
      .length;
    const catMainCount = (ler('src/pages/AcademiaCatalogo.jsx').match(/<main\b/g) || []).length;
    assert.equal(wbMainCount, 0, 'SimonCadWorkbench não deve renderizar <main> interno aninhado');
    assert.equal(catMainCount, 0, 'AcademiaCatalogo não deve renderizar <main> aninhado no painel 3');
  });

  it('passa cursoId, aulaId e irParaAba do CadBenchView para o BeatSaideira', () => {
    const bench = ler('src/components/workbench/CadBenchView.jsx');
    assert.match(bench, /<BeatSaideira[\s\S]*?cursoId=\{cursoId\}[\s\S]*?aulaId=\{aulaId\}[\s\S]*?irParaAba=\{irParaAba\}/);

    const saideira = ler('src/components/conversa/beats/BeatSaideira.jsx');
    assert.match(saideira, /\[cursoId,\s*aulaId\]\.filter\(Boolean\)\.join\('\/'\)/);
  });

  it('conecta useModalFocusTrap nos modais DesafioModuloModal, SimonActionGate e no drawer do SimonCadWorkbench', () => {
    for (const rel of [
      'src/components/conversa/DesafioModuloModal.jsx',
      'src/components/ui/SimonActionGate.jsx',
      'src/components/workbench/SimonCadWorkbench.jsx',
    ]) {
      const conteudo = ler(rel);
      assert.match(conteudo, /useModalFocusTrap/, `${rel} deve usar useModalFocusTrap`);
    }
  });

  it('garante altura fluida mobile (min-h-dvh) no wrapper de AcademiaCatalogo e ocultação do FloatingWhatsApp na rota CAD', () => {
    const catalogo = ler('src/pages/AcademiaCatalogo.jsx');
    assert.match(catalogo, /min-h-dvh lg:h-dvh/);

    const app = ler('src/App.jsx');
    assert.match(app, /!isCadWorkspaceRoute\s*&&\s*<FloatingWhatsApp\s*\/>/);
  });
});
