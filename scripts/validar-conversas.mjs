// scripts/validar-conversas.mjs
// Validador estático e semântico dos roteiros "Papo de Balcão" (Seção 4.1 do Master Plan).
// Execução: `npm run validar:conversas`

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { cursoInstalacaoHVAC } from '../src/data/cursoInstalacaoHVAC.js';
import { cursoManutencaoHVAC } from '../src/data/cursoManutencaoHVAC.js';
import { cursoTVRProCO380V } from '../src/data/cursoTVRProCO380V.js';
import { ELENCO } from '../src/components/conversa/elenco.js';
import { MANIFESTO_CONVERSAS } from '../src/data/conversas/manifesto.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const CONVERSAS_DIR = path.join(ROOT_DIR, 'src', 'data', 'conversas');

const ELENCO_KEYS = new Set(Object.keys(ELENCO));
const KEBAB_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const HTML_TAG_REGEX = /<\/?[a-z][\s\S]*?>/i;
const MOJIBAKE_REGEX = /\uFFFD|Ã§|Ã£|Ã¡|Ã©|Ã­|Ã³|Ãº|Ãª|Ã´|Ã€|Ã‰|Ã“/;

// Lista proibida (R3: palavrões/ofensas + R4: álcool/boteco em conteúdo de segurança NR-10/NR-35)
const PALAVRAS_PROIBIDAS = [
  'porra',
  'caralho',
  'merda',
  'bosta',
  'cacete',
  'puta',
  'viado',
  'corno',
  'vagabundo',
  'idiota',
  'imbecil',
  'retardado',
  'cerveja',
  'chopp',
  'chope',
  'cachaça',
  'cachaca',
  'pinga',
  'whisky',
  'vodka',
  'bebedeira',
  'bêbado',
  'bebado',
  'porre',
  'ressaca',
  'boteco',
  'buteco',
];

// Regex para detectar números acompanhados de unidades técnicas que exigem ancoragem (`fonte`)
const NUMERO_UNIDADE_REGEX =
  /(?:R\$\s*\d+(?:[.,]\d+)*|\b\d+(?:[.,]\d+)?\s*(?:°C|°F|psig|PSI|PSIA|kPa|Vcc|V|A|HP|kW|BTU\/lb|BTU\/h|BTU|TR|µm|mícrons|microns|%|mm|cm|m³\/h|m³|CFM|ppm|UFC\/m³|MΩ|kHz|RPM|SCFH)\b)/g;

/**
 * Normaliza HTML/entidades e espaços em branco para comparação literal de trechos.
 */
function normalizarTextoFonte(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/<\/?(?:strong|em|b|i|code|sub|sup|span|small|a)\b[^>]*>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&gt;/gi, '>')
    .replace(/&lt;/gi, '<')
    .replace(/&amp;/gi, '&')
    .replace(/&le;/gi, '≤')
    .replace(/&ge;/gi, '≥')
    .replace(/&mu;/gi, 'μ')
    .replace(/&Delta;/gi, 'Δ')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Constrói índice `{ ["cursoId/aulaId"]: objetoAula }` a partir dos 3 cursos dedicados.
 */
function construirIndiceCursos() {
  const mapa = new Map();

  // 1. Instalação HVAC
  if (cursoInstalacaoHVAC.apresentacao) {
    mapa.set(`instalacao-hvac/${cursoInstalacaoHVAC.apresentacao.id}`, cursoInstalacaoHVAC.apresentacao);
  }
  for (const mod of cursoInstalacaoHVAC.modulos || []) {
    for (const aula of mod.aulas || []) {
      mapa.set(`instalacao-hvac/${aula.id}`, aula);
    }
  }

  // 2. Manutenção HVAC
  if (cursoManutencaoHVAC.apresentacao) {
    mapa.set(`manutencao-hvac/${cursoManutencaoHVAC.apresentacao.id}`, cursoManutencaoHVAC.apresentacao);
  }
  for (const mod of cursoManutencaoHVAC.modulos || []) {
    for (const aula of mod.aulas || []) {
      mapa.set(`manutencao-hvac/${aula.id}`, aula);
    }
  }

  // 3. TVR Pro CO 380V
  for (const parte of cursoTVRProCO380V.partes || []) {
    for (const topico of parte.topicos || []) {
      mapa.set(`tvr-pro-co-380v/${topico.id}`, topico);
    }
  }

  return mapa;
}

/**
 * Lista todos os arquivos de roteiro `.js` dentro de `src/data/conversas/<curso>/<aula>.js`.
 */
function listarArquivosRoteiro(dir) {
  const encontrados = [];
  if (!fs.existsSync(dir)) return encontrados;

  for (const entrada of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entrada.isDirectory()) {
      const subDir = path.join(dir, entrada.name);
      for (const arq of fs.readdirSync(subDir, { withFileTypes: true })) {
        if (arq.isFile() && arq.name.endsWith('.js')) {
          encontrados.push({
            cursoPasta: entrada.name,
            aulaArquivo: arq.name.replace(/\.js$/, ''),
            caminhoAbsoluto: path.join(subDir, arq.name),
          });
        }
      }
    }
  }
  return encontrados;
}

function extrairNumerosDeMatch(matches) {
  const numeros = [];
  for (const m of matches) {
    const numMatch = m.match(/\d+(?:[.,]\d+)*/);
    if (numMatch) {
      numeros.push(numMatch[0]);
    }
  }
  return numeros;
}

async function executarValidacao() {
  const erros = [];
  const avisos = [];
  const indiceCursos = construirIndiceCursos();
  const arquivos = listarArquivosRoteiro(CONVERSAS_DIR);
  const publicadosEncontrados = new Set();
  const todosArquivosMap = new Set();

  for (const info of arquivos) {
    const chaveEsperada = `${info.cursoPasta}/${info.aulaArquivo}`;
    todosArquivosMap.add(chaveEsperada);
    const relPath = path.relative(ROOT_DIR, info.caminhoAbsoluto);

    // 1. Verificação de Encoding / Mojibake no arquivo bruto
    const conteudoBruto = fs.readFileSync(info.caminhoAbsoluto, 'utf8');
    if (MOJIBAKE_REGEX.test(conteudoBruto)) {
      erros.push(`[${relPath}] Encoding corrompido ou padrão de mojibake detectado.`);
    }

    // 2. Importação do módulo
    let roteiro;
    try {
      const mod = await import(pathToFileURL(info.caminhoAbsoluto).href);
      roteiro = mod.default;
    } catch (err) {
      erros.push(`[${relPath}] Erro ao importar módulo JS: ${err.message}`);
      continue;
    }

    if (!roteiro || typeof roteiro !== 'object') {
      erros.push(`[${relPath}] Export default ausente ou inválido.`);
      continue;
    }

    // 3. Schema e Identidade
    if (roteiro.schema !== 1) {
      erros.push(`[${relPath}] schema deve ser 1 (recebido: ${roteiro.schema}).`);
    }
    if (roteiro.cursoId !== info.cursoPasta) {
      erros.push(`[${relPath}] cursoId "${roteiro.cursoId}" não bate com a pasta "${info.cursoPasta}".`);
    }
    if (roteiro.aulaId !== info.aulaArquivo) {
      erros.push(`[${relPath}] aulaId "${roteiro.aulaId}" não bate com o arquivo "${info.aulaArquivo}".`);
    }
    if (!['rascunho', 'revisado', 'publicado'].includes(roteiro.status)) {
      erros.push(`[${relPath}] status inválido: "${roteiro.status}".`);
    }

    // 4. Regra G-Publicação
    if (roteiro.status === 'publicado') {
      publicadosEncontrados.add(chaveEsperada);
      if (
        !roteiro.revisao ||
        typeof roteiro.revisao.tecnica !== 'string' ||
        !roteiro.revisao.tecnica.trim() ||
        typeof roteiro.revisao.data !== 'string' ||
        !roteiro.revisao.data.trim()
      ) {
        erros.push(
          `[${relPath}] Roteiro com status "publicado" exige revisao.tecnica e revisao.data preenchidos.`
        );
      }
    }

    // 5. Quantidade de Beats (20–60)
    if (!Array.isArray(roteiro.beats)) {
      erros.push(`[${relPath}] "beats" deve ser um array.`);
      continue;
    }
    if (roteiro.beats.length < 20 || roteiro.beats.length > 60) {
      erros.push(
        `[${relPath}] Quantidade de beats (${roteiro.beats.length}) fora do intervalo permitido (20–60).`
      );
    }

    const idsVistos = new Set();

    // Função auxiliar para validar uma âncora `fonte` (objeto único ou array de objetos)
    const validarFonte = (fonteObj, contexto) => {
      if (Array.isArray(fonteObj)) {
        if (fonteObj.length === 0) {
          erros.push(`[${relPath} -> ${contexto}] Array "fonte" vazio.`);
          return null;
        }
        const trechos = fonteObj
          .map((f, idx) => validarFonte(f, `${contexto}[${idx}]`))
          .filter(Boolean);
        return trechos.join(' ');
      }
      if (!fonteObj || typeof fonteObj !== 'object') {
        erros.push(`[${relPath} -> ${contexto}] Objeto "fonte" inválido.`);
        return null;
      }
      const aulaAlvoId = fonteObj.aulaRef || roteiro.aulaId;
      const chaveAulaFonte = `${roteiro.cursoId}/${aulaAlvoId}`;
      const dadosAula = indiceCursos.get(chaveAulaFonte);

      if (!dadosAula) {
        erros.push(
          `[${relPath} -> ${contexto}] Aula de origem "${chaveAulaFonte}" não encontrada nos dados do curso.`
        );
        return null;
      }

      const campoBruto = dadosAula[fonteObj.campo];
      if (!campoBruto || typeof campoBruto !== 'string') {
        erros.push(
          `[${relPath} -> ${contexto}] Campo "${fonteObj.campo}" inexistente ou vazio em "${chaveAulaFonte}".`
        );
        return null;
      }

      if (!fonteObj.trecho || typeof fonteObj.trecho !== 'string' || !fonteObj.trecho.trim()) {
        erros.push(`[${relPath} -> ${contexto}] "fonte.trecho" vazio.`);
        return null;
      }

      const fonteNormalizada = normalizarTextoFonte(campoBruto);
      const trechoNormalizado = normalizarTextoFonte(fonteObj.trecho);

      if (!fonteNormalizada.includes(trechoNormalizado)) {
        erros.push(
          `[${relPath} -> ${contexto}] Âncora literal não encontrada em ${chaveAulaFonte}.${fonteObj.campo}: "${fonteObj.trecho}"`
        );
      }

      return trechoNormalizado;
    };

    // Função auxiliar para validar qualquer texto (tamanho <= 280, sem HTML, lista proibida, números+unidades ancorados)
    const validarTexto = (texto, contexto, fonteEfetiva) => {
      if (typeof texto !== 'string' || !texto.trim()) {
        erros.push(`[${relPath} -> ${contexto}] Texto vazio ou inválido.`);
        return;
      }
      if (texto.length > 280) {
        erros.push(
          `[${relPath} -> ${contexto}] Texto excede 280 caracteres (${texto.length} chars): "${texto.slice(0, 50)}..."`
        );
      }
      if (HTML_TAG_REGEX.test(texto)) {
        erros.push(`[${relPath} -> ${contexto}] Tags HTML não são permitidas no texto.`);
      }

      // Lista proibida (case-insensitive, palavra inteira)
      const textoLower = texto.toLowerCase();
      for (const proibida of PALAVRAS_PROIBIDAS) {
        const regexProibida = new RegExp(`\\b${proibida}\\b`, 'i');
        if (regexProibida.test(textoLower)) {
          erros.push(`[${relPath} -> ${contexto}] Termo proibido pela Bíblia de Voz: "${proibida}".`);
        }
      }

      // Verificação de número + unidade técnica (R1)
      const matchesNumeros = texto.match(NUMERO_UNIDADE_REGEX);
      if (matchesNumeros && matchesNumeros.length > 0) {
        if (!fonteEfetiva) {
          erros.push(
            `[${relPath} -> ${contexto}] Texto contém número técnico (${matchesNumeros.join(', ')}) mas não possui "fonte" ancorada.`
          );
        } else {
          const trechoNorm = validarFonte(fonteEfetiva, contexto);
          if (trechoNorm) {
            const nums = extrairNumerosDeMatch(matchesNumeros);
            for (const num of nums) {
              if (!trechoNorm.includes(num)) {
                erros.push(
                  `[${relPath} -> ${contexto}] Número "${num}" citado no texto não consta literalmente em fonte.trecho ("${fonteEfetiva.trecho}").`
                );
              }
            }
          }
        }
      } else if (fonteEfetiva) {
        validarFonte(fonteEfetiva, contexto);
      }
    };

    // 6. Validação beat a beat
    for (let i = 0; i < roteiro.beats.length; i++) {
      const beat = roteiro.beats[i];
      const ctx = `beat[${i}](${beat?.id || 'sem-id'})`;

      if (!beat.id || !KEBAB_REGEX.test(beat.id)) {
        erros.push(`[${relPath} -> ${ctx}] beat.id deve ser kebab-case válido.`);
      } else if (idsVistos.has(beat.id)) {
        erros.push(`[${relPath} -> ${ctx}] beat.id duplicado: "${beat.id}".`);
      } else {
        idsVistos.add(beat.id);
      }

      if (beat.fonte) {
        validarFonte(beat.fonte, `${ctx}.fonte`);
      }

      switch (beat.tipo) {
        case 'cena':
          validarTexto(beat.texto, `${ctx}.texto`, beat.fonte);
          break;

        case 'fala':
          if (!ELENCO_KEYS.has(beat.quem)) {
            erros.push(`[${relPath} -> ${ctx}] Personagem inválido: "${beat.quem}".`);
          }
          validarTexto(beat.texto, `${ctx}.texto`, beat.fonte);
          break;

        case 'escolha': {
          validarTexto(beat.pergunta, `${ctx}.pergunta`, beat.fonte);
          if (!Array.isArray(beat.opcoes) || beat.opcoes.length < 2 || beat.opcoes.length > 4) {
            erros.push(`[${relPath} -> ${ctx}] "escolha" deve ter entre 2 e 4 opções.`);
          } else {
            for (const op of beat.opcoes) {
              const opCtx = `${ctx}.opcao(${op.id})`;
              validarTexto(op.texto, `${opCtx}.texto`, op.fonte || beat.fonte);
              if (!Array.isArray(op.reacao) || op.reacao.length < 1 || op.reacao.length > 3) {
                erros.push(`[${relPath} -> ${opCtx}] "reacao" deve ter entre 1 e 3 falas (weave).`);
              } else {
                for (let r = 0; r < op.reacao.length; r++) {
                  const falaR = op.reacao[r];
                  if (!ELENCO_KEYS.has(falaR.quem)) {
                    erros.push(`[${relPath} -> ${opCtx}.reacao[${r}]] Personagem inválido: "${falaR.quem}".`);
                  }
                  validarTexto(
                    falaR.texto,
                    `${opCtx}.reacao[${r}]`,
                    falaR.fonte || op.fonte || beat.fonte
                  );
                }
              }
            }
          }
          break;
        }

        case 'quiz': {
          validarTexto(beat.enunciado, `${ctx}.enunciado`, beat.fonte);
          if (!Array.isArray(beat.opcoes) || beat.opcoes.length < 2 || beat.opcoes.length > 4) {
            erros.push(`[${relPath} -> ${ctx}] "quiz" deve ter entre 2 e 4 opções.`);
          } else {
            const corretas = beat.opcoes.filter((o) => o.correta === true);
            if (corretas.length !== 1) {
              erros.push(
                `[${relPath} -> ${ctx}] "quiz" deve ter exatamente 1 opção com correta: true (encontradas: ${corretas.length}).`
              );
            }
            for (const op of beat.opcoes) {
              const opCtx = `${ctx}.opcao(${op.id})`;
              validarTexto(op.texto, `${opCtx}.texto`, op.fonte || beat.fonte);
              if (!Array.isArray(op.feedback) || op.feedback.length < 1 || op.feedback.length > 3) {
                erros.push(`[${relPath} -> ${opCtx}] "feedback" deve ter entre 1 e 3 falas (weave).`);
              } else {
                for (let f = 0; f < op.feedback.length; f++) {
                  const falaF = op.feedback[f];
                  if (!ELENCO_KEYS.has(falaF.quem)) {
                    erros.push(`[${relPath} -> ${opCtx}.feedback[${f}]] Personagem inválido: "${falaF.quem}".`);
                  }
                  validarTexto(
                    falaF.texto,
                    `${opCtx}.feedback[${f}]`,
                    falaF.fonte || op.fonte || beat.fonte
                  );
                }
              }
            }
          }
          break;
        }

        case 'mitoVerdade': {
          validarTexto(beat.afirmacao, `${ctx}.afirmacao`, beat.fonte);
          if (typeof beat.verdade !== 'boolean') {
            erros.push(`[${relPath} -> ${ctx}] "mitoVerdade" exige campo booleano "verdade".`);
          }
          if (!Array.isArray(beat.explicacao) || beat.explicacao.length < 1 || beat.explicacao.length > 3) {
            erros.push(`[${relPath} -> ${ctx}] "explicacao" deve ter entre 1 e 3 falas.`);
          } else {
            for (let e = 0; e < beat.explicacao.length; e++) {
              const falaE = beat.explicacao[e];
              if (!ELENCO_KEYS.has(falaE.quem)) {
                erros.push(`[${relPath} -> ${ctx}.explicacao[${e}]] Personagem inválido: "${falaE.quem}".`);
              }
              validarTexto(falaE.texto, `${ctx}.explicacao[${e}]`, falaE.fonte || beat.fonte);
            }
          }
          break;
        }

        case 'causo': {
          validarTexto(beat.titulo, `${ctx}.titulo`, beat.fonte);
          if (!Array.isArray(beat.falas) || beat.falas.length < 1) {
            erros.push(`[${relPath} -> ${ctx}] "causo" deve possuir array "falas" não vazio.`);
          } else {
            for (let c = 0; c < beat.falas.length; c++) {
              const falaC = beat.falas[c];
              if (!ELENCO_KEYS.has(falaC.quem)) {
                erros.push(`[${relPath} -> ${ctx}.falas[${c}]] Personagem inválido: "${falaC.quem}".`);
              }
              validarTexto(falaC.texto, `${ctx}.falas[${c}]`, falaC.fonte || beat.fonte);
            }
          }
          break;
        }

        case 'referencia': {
          validarTexto(beat.texto, `${ctx}.texto`, beat.fonte);
          if (!beat.alvo || !beat.alvo.aba) {
            erros.push(`[${relPath} -> ${ctx}] "referencia" exige alvo.aba.`);
          }
          break;
        }

        case 'saideira': {
          if (!Array.isArray(beat.pontos) || beat.pontos.length !== 3) {
            erros.push(`[${relPath} -> ${ctx}] "saideira" exige exatamente 3 itens em "pontos".`);
          } else {
            for (let p = 0; p < beat.pontos.length; p++) {
              validarTexto(beat.pontos[p], `${ctx}.pontos[${p}]`, beat.fonte);
            }
          }
          if (beat.proxima) {
            validarTexto(beat.proxima, `${ctx}.proxima`, beat.fonte);
          }
          break;
        }

        case 'calculadora': {
          validarTexto(beat.enunciado, `${ctx}.enunciado`, beat.fonte);
          if (typeof beat.respostaCorreta !== 'number') {
            erros.push(`[${relPath} -> ${ctx}] "calculadora" exige "respostaCorreta" numérico.`);
          }
          for (const listaNome of ['explicacaoSucesso', 'explicacaoErro']) {
            const lista = beat[listaNome];
            if (Array.isArray(lista)) {
              for (let k = 0; k < lista.length; k++) {
                const falaK = lista[k];
                if (!ELENCO_KEYS.has(falaK.quem)) {
                  erros.push(`[${relPath} -> ${ctx}.${listaNome}[${k}]] Personagem inválido: "${falaK.quem}".`);
                }
                validarTexto(falaK.texto, `${ctx}.${listaNome}[${k}]`, falaK.fonte || beat.fonte);
              }
            }
          }
          break;
        }

        case 'inspecao': {
          validarTexto(beat.enunciado, `${ctx}.enunciado`, beat.fonte);
          const listaPontos = beat.pontos || beat.opcoes;
          if (!Array.isArray(listaPontos) || listaPontos.length < 2) {
            erros.push(`[${relPath} -> ${ctx}] "inspecao" exige pelo menos 2 itens em "pontos".`);
          } else {
            const corretas = listaPontos.filter((p) => p.correta === true);
            if (corretas.length !== 1) {
              erros.push(`[${relPath} -> ${ctx}] "inspecao" exige exatamente 1 ponto com correta: true.`);
            }
            for (const pt of listaPontos) {
              const ptCtx = `${ctx}.ponto(${pt.id})`;
              validarTexto(pt.rotulo || pt.texto, `${ptCtx}.rotulo`, pt.fonte || beat.fonte);
              if (Array.isArray(pt.feedback)) {
                for (let f = 0; f < pt.feedback.length; f++) {
                  const falaF = pt.feedback[f];
                  if (!ELENCO_KEYS.has(falaF.quem)) {
                    erros.push(`[${relPath} -> ${ptCtx}.feedback[${f}]] Personagem inválido: "${falaF.quem}".`);
                  }
                  validarTexto(falaF.texto, `${ptCtx}.feedback[${f}]`, falaF.fonte || pt.fonte || beat.fonte);
                }
              }
            }
          }
          break;
        }

        default:
          erros.push(`[${relPath} -> ${ctx}] Tipo de beat desconhecido: "${beat.tipo}".`);
      }
    }
  }

  // 7. Consistência bidirecional com `manifesto.js`
  for (const [chaveManifesto, statusManifesto] of Object.entries(MANIFESTO_CONVERSAS)) {
    if (!todosArquivosMap.has(chaveManifesto)) {
      erros.push(`[manifesto.js] Item "${chaveManifesto}" não possui arquivo correspondente em src/data/conversas/.`);
    } else if (statusManifesto === 'publicado' && !publicadosEncontrados.has(chaveManifesto)) {
      erros.push(
        `[manifesto.js] Item "${chaveManifesto}" consta como publicado no manifesto, mas o arquivo não tem status: "publicado".`
      );
    }
  }

  for (const chavePub of publicadosEncontrados) {
    if (MANIFESTO_CONVERSAS[chavePub] !== 'publicado') {
      erros.push(
        `[manifesto.js] Arquivo "${chavePub}" tem status: "publicado", mas não está registrado em MANIFESTO_CONVERSAS.`
      );
    }
  }

  // Relatório final
  console.log(`\n☕ Validador "Papo de Balcão" — ${arquivos.length} roteiro(s) analisado(s) (${publicadosEncontrados.size} publicado(s)).`);
  if (avisos.length > 0) {
    for (const av of avisos) {
      console.warn(`  ⚠️  ${av}`);
    }
  }

  if (erros.length > 0) {
    console.error(`\n❌ Falha na validação (${erros.length} erro(s) encontrado(s)):`);
    for (const err of erros) {
      console.error(`  • ${err}`);
    }
    process.exit(1);
  }

  console.log('✅ Todos os roteiros, âncoras numéricas, encoding e manifesto estão 100% válidos!\n');
}

executarValidacao();
