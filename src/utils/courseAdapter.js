// src/utils/courseAdapter.js
// Adaptador Universal dos 5 Treinamentos da Simon Climatização para o "Simon AutoCAD Workbench".
// Unifica estruturas de dados heterogêneas (modulos/aulas, partes/topicos, aulas diretas) e
// organiza a Trilha Pedagógica "Física na Veia -> Prática Imediata de Instalação/Bancada".

import { cursoInstalacaoHVAC } from '../data/cursoInstalacaoHVAC.js';
import { cursoManutencaoHVAC } from '../data/cursoManutencaoHVAC.js';
import { cursoTVRProCO380V } from '../data/cursoTVRProCO380V.js';
import { cursoVRF, cursoTVRPro } from '../data/treinamentos.js';
import { NOTAS_CURSOS_CAD } from '../data/bancada/notasDeBancada.js';
import { temConversa } from '../data/conversas/manifesto.js';

const INSTALACAO_SLIDE_MAP = {
  '01-01': { folder: 'modulo01/modulo01-01', count: 15, ext: 'png' },
  '01-02': { folder: 'modulo01/modulo01-02', count: 15, ext: 'png' },
  '01-03': { folder: 'modulo01/modulo01-03', count: 15, ext: 'png' },
  '01-04': { folder: 'modulo01/modulo01-04', count: 15, ext: 'png' },
  '02-01': { folder: 'modulo02/modulo02-01', count: 13, ext: 'png' },
  '02-02': { folder: 'modulo02/modulo02-02', count: 15, ext: 'png' },
  '02-03': { folder: 'modulo02/modulo02-03', count: 15, ext: 'png' },
  '03-01': { folder: 'modulo03/modulo03-01', count: 15, ext: 'png' },
  '03-02': { folder: 'modulo03/modulo03-02', count: 15, ext: 'png' },
  '03-03': { folder: 'modulo03/modulo03-03', count: 15, ext: 'png' },
  '04-01': { folder: 'modulo04/modulo04-01', count: 14, ext: 'png' },
  '04-02': { folder: 'modulo04/modulo04-02', count: 13, ext: 'png' },
  '04-03': { folder: 'modulo04/modulo04-03', count: 15, ext: 'png' },
  '05-01': { folder: 'modulo05/modulo05-01', count: 15, ext: 'png' },
  '05-02': { folder: 'modulo05/modulo05-02', count: 15, ext: 'png' },
  '05-03': { folder: 'modulo05/modulo05-03', count: 15, ext: 'png' },
  '05-04': { folder: 'modulo05/modulo05-04', count: 15, ext: 'png' },
  '06-01': { folder: 'modulo06/modulo06-01', count: 15, ext: 'png' },
  '07-01': { folder: 'modulo07/modulo07-01', count: 12, ext: 'png' },
  '07-02': { folder: 'modulo07/modulo07-02', count: 15, ext: 'png' },
  apresentacao: { folder: 'aula01-apresentacao', count: 15, ext: 'jpg' },
};

export function getYouTubeEmbedUrl(url) {
  if (!url || typeof url !== 'string') return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([a-zA-Z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1` : null;
}

function getInstalacaoSlides(aulaId) {
  const info = INSTALACAO_SLIDE_MAP[String(aulaId)];
  if (!info) return [];
  const base = `/images/academia/hvac-instalacao/${info.folder}`;
  const slides = [];
  for (let i = 1; i <= info.count; i++) {
    slides.push(`${base}/slide${String(i).padStart(2, '0')}.${info.ext}`);
  }
  slides.push(`${base}/infografico.jpg`);
  return slides;
}

function getTVRProCOSlides(topicId, totalSlides) {
  if (!totalSlides || totalSlides <= 0) return [];
  const parteNum = String(topicId).split('-')[0];
  const basePath = `/images/academia/trane-tvrpro-co/parte-${parteNum}/topico${topicId}`;
  const slides = [];
  for (let i = 1; i <= totalSlides; i++) {
    slides.push(`${basePath}/slide${String(i).padStart(2, '0')}.png`);
  }
  slides.push(`${basePath}/infografico.jpg`);
  return slides;
}

function normalizarAula(cursoId, rawAula, moduloInfo) {
  const idStr = String(rawAula.id);
  let slides = [];
  if (cursoId === 'instalacao-hvac') {
    slides = getInstalacaoSlides(idStr);
  } else if (cursoId === 'tvr-pro-co-380v') {
    slides = getTVRProCOSlides(idStr, rawAula.total_slides);
  } else if (Array.isArray(rawAula.slides)) {
    slides = [...rawAula.slides];
    if (rawAula.infografico && !slides.includes(rawAula.infografico)) {
      slides.push(rawAula.infografico);
    }
  }

  const rawVideo =
    rawAula.link_video ||
    rawAula.linkVideo ||
    rawAula.videos?.find((v) => v.tipo === 'videoaula')?.link ||
    null;

  const rawPodcast =
    rawAula.link_podcast ||
    rawAula.linkPodcast ||
    rawAula.videos?.find((v) => v.tipo === 'podcast')?.link ||
    null;

  return {
    ...rawAula,
    id: rawAula.id,
    idStr,
    cursoId,
    titulo: rawAula.titulo,
    moduloId: moduloInfo.id,
    moduloTitulo: moduloInfo.titulo,
    moduloCodigo: moduloInfo.codigo,
    videoUrl: getYouTubeEmbedUrl(rawVideo),
    podcastUrl: getYouTubeEmbedUrl(rawPodcast),
    slides,
    fontes: rawAula.fontes_imagens || [],
    possuiConversa: temConversa(cursoId, rawAula.id),
    possuiTabelas: Boolean(rawAula.tabelas_html && rawAula.tabelas_html.trim()),
    possuiInfobox: Boolean(rawAula.infobox_campo && rawAula.infobox_campo.trim()),
    possuiConteudo: Boolean(
      (rawAula.conteudo_html && rawAula.conteudo_html.trim()) ||
        (rawAula.descricao && rawAula.descricao.trim())
    ),
  };
}

function montarTrilhasPraticas(cursoId, todasAulasMap) {
  const meta = NOTAS_CURSOS_CAD[cursoId];
  if (!meta || !Array.isArray(meta.trilhasPraticas)) return [];

  const usadas = new Set();
  const trilhas = meta.trilhasPraticas.map((trilha, idx) => {
    const aulas = [];
    for (const aId of trilha.aulasIds) {
      const encontrada = todasAulasMap.get(String(aId));
      if (encontrada) {
        aulas.push(encontrada);
        usadas.add(String(aId));
      }
    }
    return {
      id: trilha.id,
      codigo: trilha.codigo || `LAYER 0${idx + 1}`,
      titulo: trilha.titulo,
      descricao: trilha.descricao,
      cor: trilha.cor || meta.corPrimaria,
      aulas,
    };
  });

  // Garantia de Invariante: Nenhuma aula fica de fora da trilha prática
  const restantes = [];
  for (const [chave, aulaObj] of todasAulasMap.entries()) {
    if (!usadas.has(chave)) {
      restantes.push(aulaObj);
    }
  }
  if (restantes.length > 0 && trilhas.length > 0) {
    trilhas[trilhas.length - 1].aulas.push(...restantes);
  }

  return trilhas;
}

export function obterCursoNormalizado(cursoIdInput) {
  const aliasMap = {
    'instalacao-hvac-completo': 'instalacao-hvac',
    'instalacao-hvac': 'instalacao-hvac',
    'manutencao-hvac-completo': 'manutencao-hvac',
    'manutencao-hvac': 'manutencao-hvac',
    'tvr-pro-co-380v': 'tvr-pro-co-380v',
    sistemavrf: 'sistemavrf',
    tvrpro: 'tvrpro',
  };

  const cursoId = aliasMap[cursoIdInput] || 'instalacao-hvac';
  const metaCad = NOTAS_CURSOS_CAD[cursoId] || NOTAS_CURSOS_CAD['instalacao-hvac'];
  const todasAulasMap = new Map();
  const modulosOriginais = [];

  if (cursoId === 'instalacao-hvac') {
    if (cursoInstalacaoHVAC.apresentacao) {
      const modApres = {
        id: 'mod-00',
        codigo: 'MOD 00',
        titulo: 'Apresentação & Fundamento da Apostila',
        descricao: 'Introdução oficial, escopo técnico e diretrizes de estudo.',
      };
      const aulaApres = normalizarAula(cursoId, cursoInstalacaoHVAC.apresentacao, modApres);
      todasAulasMap.set(aulaApres.idStr, aulaApres);
      modulosOriginais.push({ ...modApres, aulas: [aulaApres] });
    }

    for (const mod of cursoInstalacaoHVAC.modulos || []) {
      const modInfo = {
        id: `mod-${mod.id}`,
        codigo: `MOD ${String(mod.id).padStart(2, '0')}`,
        titulo: mod.titulo,
        descricao: mod.descricao || '',
      };
      const aulasNorm = (mod.aulas || []).map((a) => {
        const n = normalizarAula(cursoId, a, modInfo);
        todasAulasMap.set(n.idStr, n);
        return n;
      });
      modulosOriginais.push({ ...modInfo, aulas: aulasNorm });
    }

    const trilhasPraticas = montarTrilhasPraticas(cursoId, todasAulasMap);
    // Na trilha prática do Simon, a primeira aula aberta por padrão é a 01-01 (Física do Ciclo na Prática)
    const primeiraAulaPratica = todasAulasMap.get('01-01') || [...todasAulasMap.values()][0];

    return {
      id: 'instalacao-hvac',
      certificadoId: 'instalacao-hvac-completo',
      rotaUrl: '/academia/treinamento-hvac',
      codigoCad: metaCad.codigoCad,
      nomeCurto: metaCad.nomeCurto,
      titulo: cursoInstalacaoHVAC.titulo || 'Treinamento Completo de Instalação HVAC',
      subtitulo: cursoInstalacaoHVAC.subtitulo || 'Física Aplicada, Maestria do Cobre, Brasagem N₂, Vácuo Profundo e Comissionamento',
      corPrimaria: metaCad.corPrimaria,
      corSecundaria: metaCad.corSecundaria,
      filosofiaCurso: metaCad.filosofiaCurso,
      dicaPraticaInicial: metaCad.dicaPraticaInicial,
      cargaHoraria: '40h',
      modulosOriginais,
      trilhasPraticas,
      todasAulas: [...todasAulasMap.values()],
      todasAulasMap,
      primeiraAulaPratica,
    };
  }

  if (cursoId === 'manutencao-hvac') {
    if (cursoManutencaoHVAC.apresentacao) {
      const modApres = {
        id: 'mod-00',
        codigo: 'MOD 00',
        titulo: 'Apresentação — Gestão de Ativos & Manutenção',
        descricao: 'Visão executiva da Apostila 02 de Manutenção Avançada.',
      };
      const aulaApres = normalizarAula(cursoId, cursoManutencaoHVAC.apresentacao, modApres);
      todasAulasMap.set(aulaApres.idStr, aulaApres);
      modulosOriginais.push({ ...modApres, aulas: [aulaApres] });
    }

    for (const mod of cursoManutencaoHVAC.modulos || []) {
      const modInfo = {
        id: `mod-${mod.id}`,
        codigo: `MOD ${String(mod.id).padStart(2, '0')}`,
        titulo: mod.titulo,
        descricao: mod.descricao || '',
      };
      const aulasNorm = (mod.aulas || []).map((a) => {
        const n = normalizarAula(cursoId, a, modInfo);
        todasAulasMap.set(n.idStr, n);
        return n;
      });
      modulosOriginais.push({ ...modInfo, aulas: aulasNorm });
    }

    const trilhasPraticas = montarTrilhasPraticas(cursoId, todasAulasMap);
    const primeiraAulaPratica = todasAulasMap.get('m02-01') || todasAulasMap.get('m01-01') || [...todasAulasMap.values()][0];

    return {
      id: 'manutencao-hvac',
      certificadoId: 'manutencao-hvac-completo',
      rotaUrl: '/academia/treinamento-manutencao-hvac',
      codigoCad: metaCad.codigoCad,
      nomeCurto: metaCad.nomeCurto,
      titulo: cursoManutencaoHVAC.titulo || 'Treinamento Avançado de Manutenção & Diagnóstico HVAC',
      subtitulo: cursoManutencaoHVAC.subtitulo || 'Sinais Vitais, Diagrama P-H, PMOC, Preditiva e Contratos Recorrentes',
      corPrimaria: metaCad.corPrimaria,
      corSecundaria: metaCad.corSecundaria,
      filosofiaCurso: metaCad.filosofiaCurso,
      dicaPraticaInicial: metaCad.dicaPraticaInicial,
      cargaHoraria: '50h',
      modulosOriginais,
      trilhasPraticas,
      todasAulas: [...todasAulasMap.values()],
      todasAulasMap,
      primeiraAulaPratica,
    };
  }

  if (cursoId === 'tvr-pro-co-380v') {
    for (const parte of cursoTVRProCO380V.partes || []) {
      const modInfo = {
        id: `parte-${parte.id}`,
        codigo: `PARTE ${String(parte.id).padStart(2, '0')}`,
        titulo: parte.titulo,
        descricao: parte.descricao || '',
      };
      const aulasNorm = (parte.topicos || []).map((t) => {
        const n = normalizarAula(cursoId, t, modInfo);
        todasAulasMap.set(n.idStr, n);
        return n;
      });
      modulosOriginais.push({ ...modInfo, aulas: aulasNorm });
    }

    const trilhasPraticas = montarTrilhasPraticas(cursoId, todasAulasMap);
    const primeiraAulaPratica = todasAulasMap.get('02-01') || todasAulasMap.get('01-01') || [...todasAulasMap.values()][0];

    return {
      id: 'tvr-pro-co-380v',
      certificadoId: 'tvr-pro-co-380v',
      rotaUrl: '/academia/treinamento-tvr-pro-co',
      codigoCad: metaCad.codigoCad,
      nomeCurto: metaCad.nomeCurto,
      titulo: cursoTVRProCO380V.titulo || 'TVR Pro CO 380V — Diagnóstico e Service Manual Avançado',
      subtitulo: cursoTVRProCO380V.subtitulo || 'Anatomia VRF, Field Settings, PCB, IPM/Retificador e 75+ Códigos de Erro',
      corPrimaria: metaCad.corPrimaria,
      corSecundaria: metaCad.corSecundaria,
      filosofiaCurso: metaCad.filosofiaCurso,
      dicaPraticaInicial: metaCad.dicaPraticaInicial,
      cargaHoraria: '40h',
      modulosOriginais,
      trilhasPraticas,
      todasAulas: [...todasAulasMap.values()],
      todasAulasMap,
      primeiraAulaPratica,
    };
  }

  // Cursos `sistemavrf` e `tvrpro`
  const fonteBruta = cursoId === 'tvrpro' ? cursoTVRPro : cursoVRF;
  const modUnico = {
    id: 'mod-vrf-01',
    codigo: 'GRADE OFICIAL',
    titulo: fonteBruta.titulo,
    descricao: fonteBruta.descricao,
  };

  const aulasNorm = (fonteBruta.aulas || []).map((a) => {
    const n = normalizarAula(cursoId, a, modUnico);
    todasAulasMap.set(n.idStr, n);
    return n;
  });
  modulosOriginais.push({ ...modUnico, aulas: aulasNorm });

  const trilhasPraticas = montarTrilhasPraticas(cursoId, todasAulasMap);
  const primeiraAulaPratica =
    trilhasPraticas[0]?.aulas[0] || aulasNorm[0] || null;

  return {
    id: cursoId,
    certificadoId: cursoId,
    rotaUrl: `/academia/${cursoId}`,
    codigoCad: metaCad.codigoCad,
    nomeCurto: metaCad.nomeCurto,
    titulo: fonteBruta.titulo,
    subtitulo: fonteBruta.descricao,
    corPrimaria: metaCad.corPrimaria,
    corSecundaria: metaCad.corSecundaria,
    filosofiaCurso: metaCad.filosofiaCurso,
    dicaPraticaInicial: metaCad.dicaPraticaInicial,
    cargaHoraria: '20h',
    modulosOriginais,
    trilhasPraticas,
    todasAulas: aulasNorm,
    todasAulasMap,
    primeiraAulaPratica,
  };
}

export function listarTodosCursosNormalizados() {
  return [
    obterCursoNormalizado('instalacao-hvac'),
    obterCursoNormalizado('manutencao-hvac'),
    obterCursoNormalizado('tvr-pro-co-380v'),
    obterCursoNormalizado('sistemavrf'),
    obterCursoNormalizado('tvrpro'),
  ];
}
