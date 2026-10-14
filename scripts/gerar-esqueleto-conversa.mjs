// scripts/gerar-esqueleto-conversa.mjs
// Gerador assistido de esqueleto editorial para o formato "☕ Papo de Balcão" (Fase 2 - Frente 5).
// Uso:
//   npm run criar:conversa -- --listar
//   npm run criar:conversa -- --curso instalacao-hvac --aula 01-03

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { cursoInstalacaoHVAC } from '../src/data/cursoInstalacaoHVAC.js';
import { cursoManutencaoHVAC } from '../src/data/cursoManutencaoHVAC.js';
import { cursoTVRProCO380V } from '../src/data/cursoTVRProCO380V.js';
import { cursoVRF, cursoTVRPro } from '../src/data/treinamentos.js';
import { MANIFESTO_CONVERSAS } from '../src/data/conversas/manifesto.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const CONVERSAS_DIR = path.join(ROOT_DIR, 'src', 'data', 'conversas');

const NUMERO_UNIDADE_REGEX =
  /(?:R\$\s*\d+(?:[.,]\d+)*|\b\d+(?:[.,]\d+)?\s*(?:°C|°F|psig|PSI|PSIA|kPa|MPa|mmHg|Vcc|V|A|HP|kW|BTU\/lb|BTU\/h|BTU|TR|µm|mícrons|microns|%|mm|cm|m³\/h|m³|CFM|ppm|UFC\/m³|MΩ|kΩ|Ω|kHz|RPM|SCFH|FPM|cSt)\b)/g;

function normalizarTexto(str) {
  if (!str) return '';
  return String(str)
    .replace(/<\/?(?:strong|b|em|i|u|code|span|small|sub|sup)\b[^>]*>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&rarr;|→/gi, '→')
    .replace(/&mdash;|—/gi, '—')
    .replace(/&ndash;|–/gi, '–')
    .replace(/&le;|≤/gi, '≤')
    .replace(/&ge;|≥/gi, '≥')
    .replace(/&Delta;|Δ/gi, 'Δ')
    .replace(/&times;|×/gi, '×')
    .replace(/&deg;/gi, '°')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function indexarCurso(cursoId) {
  const mapa = new Map();
  if (cursoId === 'instalacao-hvac') {
    if (cursoInstalacaoHVAC.apresentacao) {
      mapa.set('apresentacao', cursoInstalacaoHVAC.apresentacao);
    }
    for (const mod of cursoInstalacaoHVAC.modulos || []) {
      for (const aula of mod.aulas || []) {
        mapa.set(String(aula.id), aula);
      }
    }
  } else if (cursoId === 'manutencao-hvac') {
    if (cursoManutencaoHVAC.apresentacao) {
      mapa.set('apresentacao', cursoManutencaoHVAC.apresentacao);
    }
    for (const mod of cursoManutencaoHVAC.modulos || []) {
      for (const aula of mod.aulas || []) {
        mapa.set(String(aula.id), aula);
      }
    }
  } else if (cursoId === 'tvr-pro-co-380v') {
    for (const parte of cursoTVRProCO380V.partes || []) {
      for (const topico of parte.topicos || []) {
        mapa.set(String(topico.id), topico);
      }
    }
  } else if (cursoId === 'sistemavrf') {
    for (const aula of cursoVRF.aulas || []) {
      mapa.set(String(aula.id), { ...aula, conteudo_html: aula.descricao || '' });
    }
  } else if (cursoId === 'tvrpro') {
    for (const aula of cursoTVRPro.aulas || []) {
      mapa.set(String(aula.id), { ...aula, conteudo_html: aula.descricao || '' });
    }
  }
  return mapa;
}

function extrairAncorasNumericas(aula) {
  const campos = ['conteudo_html', 'tabelas_html', 'infobox_campo', 'descricao'];
  const ancoras = [];

  for (const campo of campos) {
    const bruto = aula[campo];
    if (!bruto) continue;
    const limpo = normalizarTexto(bruto);
    // Divide em sentenças ou blocos lógicos
    const fragmentos = limpo
      .split(/(?<=[.!?])\s+|\s{2,}/)
      .map((s) => s.trim())
      .filter((s) => s.length >= 15);

    for (const frag of fragmentos) {
      const matches = frag.match(NUMERO_UNIDADE_REGEX);
      if (matches && matches.length > 0) {
        ancoras.push({
          campo: campo === 'descricao' ? 'conteudo_html' : campo,
          numeros: [...new Set(matches)],
          trecho: frag.slice(0, 220),
        });
      }
    }
  }
  return ancoras;
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--listar') args.listar = true;
    else if (token === '--force') args.force = true;
    else if (token === '--curso') args.curso = argv[++i];
    else if (token === '--aula') args.aula = argv[++i];
  }
  return args;
}

function listarPendentes() {
  const cursos = ['instalacao-hvac', 'manutencao-hvac', 'tvr-pro-co-380v', 'sistemavrf', 'tvrpro'];
  console.log('\n📋 Catálogo de Aulas vs. Roteiros "Papo de Balcão":\n');
  for (const cId of cursos) {
    const mapa = indexarCurso(cId);
    let publicadas = 0;
    let rascunhos = 0;
    const pendentes = [];

    for (const [aulaId, aula] of mapa.entries()) {
      const statusManifesto = MANIFESTO_CONVERSAS[`${cId}/${aulaId}`];
      const arquivoExiste = fs.existsSync(path.join(CONVERSAS_DIR, cId, `${aulaId}.js`));
      if (statusManifesto === 'publicado') publicadas++;
      else if (arquivoExiste) rascunhos++;
      else pendentes.push(`${aulaId} (${aula.titulo})`);
    }

    console.log(
      `• ${cId}: ${publicadas} publicado(s), ${rascunhos} rascunho(s), ${pendentes.length} pendente(s) de ${mapa.size} aulas.`
    );
    if (pendentes.length > 0) {
      console.log(`  Próximas sugeridas: ${pendentes.slice(0, 3).join(' | ')}`);
    }
  }
  console.log('');
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.listar || (!args.curso && !args.aula)) {
    listarPendentes();
    if (!args.curso) {
      console.log(
        '💡 Para gerar um esqueleto pré-ancorado:\n   npm run criar:conversa -- --curso instalacao-hvac --aula 01-03\n'
      );
      return;
    }
  }

  const { curso: cursoId, aula: aulaId, force } = args;
  const mapa = indexarCurso(cursoId);
  if (mapa.size === 0) {
    console.error(`❌ Curso inválido: "${cursoId}". Use instalacao-hvac, manutencao-hvac, tvr-pro-co-380v, sistemavrf ou tvrpro.`);
    process.exit(1);
  }

  const aula = mapa.get(String(aulaId));
  if (!aula) {
    console.error(`❌ Aula "${aulaId}" não encontrada no curso "${cursoId}".`);
    process.exit(1);
  }

  const ancoras = extrairAncorasNumericas(aula);
  const targetDir = path.join(CONVERSAS_DIR, cursoId);
  fs.mkdirSync(targetDir, { recursive: true });
  const targetFile = path.join(targetDir, `${aulaId}.js`);

  if (fs.existsSync(targetFile) && !force) {
    console.error(
      `⚠️ O arquivo ${path.relative(ROOT_DIR, targetFile)} já existe. Use --force para sobrescrever.`
    );
    process.exit(1);
  }

  const comentarioAncoras = ancoras
    .slice(0, 25)
    .map(
      (a, idx) =>
        `// [${idx + 1}] (${a.campo}) Números: ${a.numeros.join(', ')}\n//     trecho: ${JSON.stringify(a.trecho)}`
    )
    .join('\n');

  const primeiraAncora = ancoras[0] || {
    campo: 'conteudo_html',
    trecho: normalizarTexto(aula.conteudo_html || '').slice(0, 120),
  };

  const conteudo = `// src/data/conversas/${cursoId}/${aulaId}.js
// Esqueleto gerado automaticamente por scripts/gerar-esqueleto-conversa.mjs
// Aula: ${aula.titulo}
//
// ── CATÁLOGO DE ÂNCORAS EXTRAÍDAS DA APOSTILA (COPIE PARA SEUS BEATS) ─────────
${comentarioAncoras || '// (Nenhum número com unidade técnica detectado automaticamente)'}
// ─────────────────────────────────────────────────────────────────────────────

export default {
  schema: 1,
  cursoId: '${cursoId}',
  aulaId: '${aulaId}',
  status: 'rascunho',
  revisao: null,
  cenario: 'padaria-manha',
  duracaoMin: 8,
  beats: [
    // ── 1. CHEGADA DO JUNINHO ───────────────────────────────────────────────
    {
      id: 'cena-abertura',
      tipo: 'cena',
      texto: '7h15 na padaria. Juninho chega com a apostila aberta ao lado da xícara de café.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mestre Simon, Bia! Estava estudando o tópico da aula e surgiu uma dúvida prática de obra...',
    },

    // ── 2. APOSTA DO BALCÃO ─────────────────────────────────────────────────
    {
      id: 'escolha-1',
      tipo: 'escolha',
      pergunta: 'Antes de abrir o manual: qual a sua leitura inicial desse cenário?',
      opcoes: [
        {
          id: 'a',
          texto: 'Opção A (substituir pela hipótese correta de campo).',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Boa leitura! É exatamente por aí que começamos o diagnóstico.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Opção B (substituir pelo atalho clássico de amador).',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Cuidado! Esse atalho ignora a física do sistema.',
            },
          ],
        },
      ],
    },

    // ── 3. EXPLICAÇÃO NO GUARDANAPO ─────────────────────────────────────────
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Olha o dado oficial da apostila para ancorar nosso raciocínio.',
      fonte: {
        campo: ${JSON.stringify(primeiraAncora.campo)},
        trecho: ${JSON.stringify(primeiraAncora.trecho)},
      },
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra em Campo',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Descrever o causo real onde o atalho gerou retrabalho.',
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Inserir afirmação de senso comum para o aluno julgar.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          texto: 'Explicação técnica direta do motivo.',
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO ────────────────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Inserir situação diagnóstica de campo.',
      opcoes: [
        {
          id: 'a',
          texto: 'Alternativa correta.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Diagnóstico certeiro!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Alternativa incorreta.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Revise os parâmetros da tabela antes de agir.',
            },
          ],
        },
      ],
    },

    // ── 7. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Regra de Ouro:** Resumo prático para levar para a obra.',
        '**Procedimento:** Segundo ponto inegociável da aula.',
        '**Diagnóstico:** Terceiro ponto-chave do diagnóstico.',
      ],
      proxima: 'Na próxima aula avançaremos para o próximo tópico do módulo.',
    },
  ],
};
`;

  fs.writeFileSync(targetFile, conteudo, 'utf8');
  console.log(
    `\n✅ Esqueleto criado em: ${path.relative(ROOT_DIR, targetFile)} (${ancoras.length} âncora(s) numérica(s) extraída(s) da apostila).`
  );
  console.log(
    `💡 Após revisar com o Simon, altere status para 'publicado' e registre '${cursoId}/${aulaId}': 'publicado' em src/data/conversas/manifesto.js.\n`
  );
}

main();
