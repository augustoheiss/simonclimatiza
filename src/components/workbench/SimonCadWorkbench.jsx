// src/components/workbench/SimonCadWorkbench.jsx
// Motor Unificado "Simon AutoCAD Workbench" (100dvh Zero-Scroll).
// Substitui páginas de rolagem infinita por uma Workstation Técnica Interativa onde cada
// botão abre um módulo, aula, vídeo, slide, tabela, papo de balcão ou bloco prático na tela.

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Play,
  Headphones,
  Layers,
  FileText,
  ChevronLeft,
  ChevronRight,
  Flame,
  Wrench,
  Award,
  CheckCircle2,
  Coffee,
  BookOpen,
  Sparkles,
  Cpu,
} from 'lucide-react';
import { obterCursoNormalizado } from '../../utils/courseAdapter';
import { parseAulaParaBancadaCad } from '../../utils/cadContentParser';
import { carregarConversa } from '../../data/conversas';
import { MANIFESTO_PEDAGOGICO_SIMON } from '../../data/bancada/notasDeBancada';
import useProgress from '../../hooks/useProgress';
import { useConversasCurso } from '../../hooks/useConversaProgress';
import ConversaView from '../conversa/ConversaView';
import ConversaErrorBoundary from '../conversa/ConversaErrorBoundary';
import CadTopRibbon from './CadTopRibbon';
import CadModuleTree from './CadModuleTree';
import CadBenchView from './CadBenchView';
import CadInspectorDock from './CadInspectorDock';
import '../../styles/academia-prose.css';

export default function SimonCadWorkbench({
  cursoId,
  initialLessonId = null,
  initialViewport = 'bancada',
}) {
  const [searchParams] = useSearchParams();
  const paramAula = searchParams.get('aula') || initialLessonId;
  const paramView = searchParams.get('view') || initialViewport;

  const curso = useMemo(() => obterCursoNormalizado(cursoId), [cursoId]);

  const [aulaAtiva, setAulaAtiva] = useState(() => {
    if (paramAula && curso.todasAulasMap.has(String(paramAula))) {
      return curso.todasAulasMap.get(String(paramAula));
    }
    return curso.primeiraAulaPratica || curso.todasAulas[0] || null;
  });

  // Viewports: 'bancada' | 'conversa' | 'midia' | 'raiox' | 'tabelas' | 'briefing'
  const [viewportAtivo, setViewportAtivo] = useState(paramView);
  const [leftTreeOpen, setLeftTreeOpen] = useState(true);
  const [rightDockOpen, setRightDockOpen] = useState(false);
  const [abaInspector, setAbaInspector] = useState('tabelas');
  const [splitViewAtivo, setSplitViewAtivo] = useState(false);
  const [mobileModulesOpen, setMobileModulesOpen] = useState(false);

  // Tema visual persistido ('dark' = CAD Blueprint | 'light' = Papel Técnico)
  const [isLightMode, setIsLightMode] = useState(() => {
    try {
      return localStorage.getItem('simon_cad_theme') === 'light';
    } catch {
      return false;
    }
  });

  // Estado para o Estúdio de Mídia [F3]
  const [subAbaMidia, setSubAbaMidia] = useState('slides'); // 'video' | 'podcast' | 'slides' | 'fontes'
  const [slideIdx, setSlideIdx] = useState(0);
  const [fonteIdx, setFonteIdx] = useState(0);

  // Roteiro do Papo de Balcão carregado sob demanda para enriquecer a Bancada Prática
  const [roteiroAulaAtiva, setRoteiroAulaAtiva] = useState(null);

  const { toggleAula, isAulaConcluida, getProgressoCurso } = useProgress();
  const conversasCurso = useConversasCurso(curso.id);

  const totalAulasCertificaveis = useMemo(
    () => curso.todasAulas.filter((a) => String(a.id) !== 'apresentacao').length,
    [curso]
  );
  const progresso = getProgressoCurso(curso.id, totalAulasCertificaveis);
  const aulaConcluida = aulaAtiva ? isAulaConcluida(curso.id, aulaAtiva.id) : false;

  // Atualiza aula ativa e viewport quando o curso ou query params mudam
  useEffect(() => {
    const novaInicial =
      (paramAula && curso.todasAulasMap.get(String(paramAula))) ||
      curso.primeiraAulaPratica ||
      curso.todasAulas[0] ||
      null;
    setAulaAtiva(novaInicial);
    if (paramView) setViewportAtivo(paramView);
    setSlideIdx(0);
    setFonteIdx(0);
  }, [curso, paramAula, paramView]);

  // Carrega o roteiro do Papo de Balcão em background para vincular falas/desafios aos botões da Bancada
  useEffect(() => {
    let cancelado = false;
    if (!aulaAtiva || !aulaAtiva.possuiConversa) {
      setRoteiroAulaAtiva(null);
      return;
    }
    carregarConversa(curso.id, aulaAtiva.id)
      .then((dados) => {
        if (!cancelado) setRoteiroAulaAtiva(dados || null);
      })
      .catch(() => {
        if (!cancelado) setRoteiroAulaAtiva(null);
      });
    return () => {
      cancelado = true;
    };
  }, [curso.id, aulaAtiva]);

  // Ajusta sub-aba de mídia disponível quando a aula muda
  useEffect(() => {
    if (!aulaAtiva) return;
    setSlideIdx(0);
    setFonteIdx(0);
    if (aulaAtiva.videoUrl) setSubAbaMidia('video');
    else if (aulaAtiva.slides?.length > 0) setSubAbaMidia('slides');
    else if (aulaAtiva.podcastUrl) setSubAbaMidia('podcast');
    else if (aulaAtiva.fontes?.length > 0) setSubAbaMidia('fontes');
  }, [aulaAtiva]);

  // Decomposição CAD da aula ativa (100% do conteúdo preservado em nós interativos)
  const dadosCad = useMemo(
    () => parseAulaParaBancadaCad(aulaAtiva, roteiroAulaAtiva),
    [aulaAtiva, roteiroAulaAtiva]
  );

  const handleToggleTheme = useCallback(() => {
    setIsLightMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('simon_cad_theme', next ? 'light' : 'dark');
      } catch {
        // Ignora erro de storage
      }
      return next;
    });
  }, []);

  const handleSelectAula = useCallback((novaAula, viewportOpcional) => {
    setAulaAtiva(novaAula);
    if (viewportOpcional) {
      setViewportAtivo(viewportOpcional);
    } else if (viewportAtivo === 'briefing') {
      setViewportAtivo('bancada');
    }
  }, [viewportAtivo]);

  const handleOpenInspectorTab = useCallback((aba) => {
    setAbaInspector(aba);
    setRightDockOpen(true);
  }, []);

  // Navegação sequencial entre aulas na barra inferior
  const indiceAulaAtual = useMemo(
    () => curso.todasAulas.findIndex((a) => a.idStr === aulaAtiva?.idStr),
    [curso.todasAulas, aulaAtiva]
  );
  const aulaAnterior = indiceAulaAtual > 0 ? curso.todasAulas[indiceAulaAtual - 1] : null;
  const proximaAula =
    indiceAulaAtual >= 0 && indiceAulaAtual < curso.todasAulas.length - 1
      ? curso.todasAulas[indiceAulaAtual + 1]
      : null;

  return (
    <div
      className={`h-dvh w-screen overflow-hidden flex flex-col font-sans ${
        isLightMode ? 'bg-slate-100 text-slate-900' : 'bg-slate-950 text-slate-100'
      }`}
    >
      {/* ── 1. RIBBON SUPERIOR DE COMANDOS (ESTILO AUTOCAD) ── */}
      <CadTopRibbon
        curso={curso}
        aulaAtiva={aulaAtiva}
        viewportAtivo={viewportAtivo}
        onSelectViewport={setViewportAtivo}
        leftTreeOpen={leftTreeOpen}
        onToggleLeftTree={() => setLeftTreeOpen((v) => !v)}
        rightDockOpen={rightDockOpen}
        onToggleRightDock={() => setRightDockOpen((v) => !v)}
        splitViewAtivo={splitViewAtivo}
        onToggleSplitView={() => setSplitViewAtivo((v) => !v)}
        isLightMode={isLightMode}
        onToggleTheme={handleToggleTheme}
        progresso={progresso}
        aulaConcluida={aulaConcluida}
        onToggleConcluirAula={() => aulaAtiva && toggleAula(curso.id, aulaAtiva.id)}
        onOpenMobileModules={() => setMobileModulesOpen(true)}
      />

      {/* ── 2. ÁREA PRINCIPAL DE TRABALHO (LAYER TREE + CANVAS CENTRAL + INSPECTOR DOCK) ── */}
      <div className="flex-1 min-h-0 flex overflow-hidden relative">
        {/* Layer Tree Lateral Esquerda (Desktop) */}
        {leftTreeOpen && (
          <div className="hidden md:flex h-full flex-shrink-0">
            <CadModuleTree
              curso={curso}
              aulaAtiva={aulaAtiva}
              onSelectAula={handleSelectAula}
              isAulaConcluida={isAulaConcluida}
              conversasCurso={conversasCurso}
              isLightMode={isLightMode}
            />
          </div>
        )}

        {/* Gaveta Mobile de Módulos/Aulas */}
        {mobileModulesOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-xs"
              onClick={() => setMobileModulesOpen(false)}
            />
            <div className="relative z-10 w-[88%] max-w-[340px] h-full">
              <CadModuleTree
                curso={curso}
                aulaAtiva={aulaAtiva}
                onSelectAula={handleSelectAula}
                isAulaConcluida={isAulaConcluida}
                conversasCurso={conversasCurso}
                isLightMode={isLightMode}
                onCloseMobileDrawer={() => setMobileModulesOpen(false)}
              />
            </div>
          </div>
        )}

        {/* ── CANVAS CENTRAL MULTI-VIEWPORT (ZERO SCROLL DE PÁGINA) ── */}
        <main
          className={`flex-1 min-w-0 h-full flex overflow-hidden ${
            isLightMode ? 'bg-slate-50' : 'bg-[#090f1d]'
          }`}
        >
          {/* Janela Primária do Canvas */}
          <div
            className={`h-full flex flex-col overflow-hidden ${
              splitViewAtivo ? 'w-full lg:w-3/5 border-r border-slate-800' : 'w-full'
            }`}
          >
            {/* Barra de Identificação da Aula Ativa dentro do Viewport */}
            {aulaAtiva && viewportAtivo !== 'briefing' && (
              <div
                className={`flex-shrink-0 px-4 py-2 border-b flex items-center justify-between gap-3 ${
                  isLightMode
                    ? 'bg-white border-slate-200'
                    : 'bg-slate-900/70 border-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded flex-shrink-0"
                    style={{
                      backgroundColor: `${curso.corPrimaria}25`,
                      color: curso.corSecundaria,
                      border: `1px solid ${curso.corPrimaria}50`,
                    }}
                  >
                    {aulaAtiva.moduloCodigo || 'AULA'} · {String(aulaAtiva.id).toUpperCase()}
                  </span>
                  <h1
                    className={`text-sm md:text-base font-extrabold truncate ${
                      isLightMode ? 'text-slate-900' : 'text-white'
                    }`}
                  >
                    {aulaAtiva.titulo}
                  </h1>
                </div>

                {/* Indicadores rápidos de recursos da aula */}
                <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0">
                  <span className="text-[10px] font-mono text-slate-400">
                    {dadosCad.nos.length} Blocos · {dadosCad.tabelas.length} Tabelas
                  </span>
                </div>
              </div>
            )}

            {/* Corpo do Viewport Selecionado */}
            <div className="flex-1 min-h-0 overflow-hidden">
              {/* [F1] BANCADA PRÁTICA DO SIMON */}
              {viewportAtivo === 'bancada' && (
                <CadBenchView
                  aula={aulaAtiva}
                  dadosCad={dadosCad}
                  corCurso={curso.corPrimaria}
                  isLightMode={isLightMode}
                  onSelectViewport={setViewportAtivo}
                  onOpenInspectorTab={handleOpenInspectorTab}
                  initialLens="pratica"
                />
              )}

              {/* [F4] RAIO-X 100% TEORIA DETALHADA (EM SUB-BOTÕES) */}
              {viewportAtivo === 'raiox' && (
                <CadBenchView
                  aula={aulaAtiva}
                  dadosCad={dadosCad}
                  corCurso={curso.corPrimaria}
                  isLightMode={isLightMode}
                  onSelectViewport={setViewportAtivo}
                  onOpenInspectorTab={handleOpenInspectorTab}
                  initialLens="detalhado"
                />
              )}

              {/* [F2] PAPO DE BALCÃO INTERATIVO */}
              {viewportAtivo === 'conversa' && aulaAtiva && (
                <div className="h-full overflow-y-auto p-4 md:p-6">
                  <div className="max-w-4xl mx-auto">
                    <ConversaErrorBoundary
                      cursoId={curso.id}
                      aulaId={aulaAtiva.id}
                      irParaAba={(aba) => {
                        if (aba === 'tabelas' || aba === 'infobox') {
                          handleOpenInspectorTab(aba);
                        } else if (aba === 'video' || aba === 'slides' || aba === 'podcast' || aba === 'fontes') {
                          setSubAbaMidia(aba);
                          setViewportAtivo('midia');
                        } else {
                          setViewportAtivo('raiox');
                        }
                      }}
                    >
                      <ConversaView
                        cursoId={curso.id}
                        aulaId={aulaAtiva.id}
                        irParaAba={(aba) => {
                          if (aba === 'tabelas' || aba === 'infobox') {
                            handleOpenInspectorTab(aba);
                          } else if (aba === 'video' || aba === 'slides' || aba === 'podcast' || aba === 'fontes') {
                            setSubAbaMidia(aba);
                            setViewportAtivo('midia');
                          } else {
                            setViewportAtivo('raiox');
                          }
                        }}
                      />
                    </ConversaErrorBoundary>
                  </div>
                </div>
              )}

              {/* [F3] ESTÚDIO MULTIMÍDIA (VÍDEO, PODCAST, SLIDES & INFOGRÁFICO, PESQUISA PDF) */}
              {viewportAtivo === 'midia' && aulaAtiva && (
                <div className="h-full flex flex-col overflow-hidden">
                  {/* Sub-barra de botões de mídia */}
                  <div
                    className={`flex-shrink-0 px-4 py-2 border-b flex flex-wrap items-center justify-between gap-2 ${
                      isLightMode ? 'bg-slate-100 border-slate-300' : 'bg-slate-900 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      {aulaAtiva.videoUrl && (
                        <button
                          type="button"
                          onClick={() => setSubAbaMidia('video')}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer ${
                            subAbaMidia === 'video'
                              ? 'bg-sky-500 text-slate-950'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          <Play className="w-3.5 h-3.5" />
                          <span>Videoaula</span>
                        </button>
                      )}
                      {aulaAtiva.podcastUrl && (
                        <button
                          type="button"
                          onClick={() => setSubAbaMidia('podcast')}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer ${
                            subAbaMidia === 'podcast'
                              ? 'bg-violet-500 text-white'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          <Headphones className="w-3.5 h-3.5" />
                          <span>Podcast / Parte 2</span>
                        </button>
                      )}
                      {aulaAtiva.slides?.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setSubAbaMidia('slides')}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer ${
                            subAbaMidia === 'slides'
                              ? 'bg-emerald-500 text-slate-950'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>Slides & Infográfico ({aulaAtiva.slides.length})</span>
                        </button>
                      )}
                      {aulaAtiva.fontes?.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setSubAbaMidia('fontes')}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer ${
                            subAbaMidia === 'fontes'
                              ? 'bg-amber-400 text-slate-950'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Pranchas de Pesquisa ({aulaAtiva.fontes.length})</span>
                        </button>
                      )}
                    </div>

                    {/* Paginador rápido de slides ou fontes no topo */}
                    {subAbaMidia === 'slides' && aulaAtiva.slides?.length > 0 && (
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          disabled={slideIdx === 0}
                          onClick={() => setSlideIdx((p) => Math.max(0, p - 1))}
                          className="p-1.5 rounded bg-slate-800 text-sky-400 disabled:opacity-30 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-xs font-mono font-bold text-slate-300">
                          Slide {slideIdx + 1} / {aulaAtiva.slides.length}
                        </span>
                        <button
                          type="button"
                          disabled={slideIdx >= aulaAtiva.slides.length - 1}
                          onClick={() =>
                            setSlideIdx((p) => Math.min(aulaAtiva.slides.length - 1, p + 1))
                          }
                          className="p-1.5 rounded bg-slate-800 text-sky-400 disabled:opacity-30 cursor-pointer"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Corpo do Player Multimídia Ajustado ao Viewport */}
                  <div className="flex-1 min-h-0 overflow-y-auto p-4 flex flex-col items-center justify-center">
                    {subAbaMidia === 'video' && aulaAtiva.videoUrl && (
                      <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-sky-500/30 bg-black shadow-2xl">
                        <iframe
                          src={aulaAtiva.videoUrl}
                          title={`Videoaula: ${aulaAtiva.titulo}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    )}

                    {subAbaMidia === 'podcast' && aulaAtiva.podcastUrl && (
                      <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-violet-500/30 bg-black shadow-2xl">
                        <iframe
                          src={aulaAtiva.podcastUrl}
                          title={`Podcast: ${aulaAtiva.titulo}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    )}

                    {subAbaMidia === 'slides' && aulaAtiva.slides?.length > 0 && (
                      <div className="w-full max-w-4xl flex flex-col items-center gap-3">
                        <img
                          src={aulaAtiva.slides[slideIdx]}
                          alt={`Slide ${slideIdx + 1} - ${aulaAtiva.titulo}`}
                          className="max-h-[calc(100dvh-230px)] w-auto object-contain rounded-xl border border-slate-700 shadow-2xl bg-slate-900"
                        />
                        {/* Botões numéricos diretos para cada slide */}
                        <div className="flex flex-wrap items-center justify-center gap-1">
                          {aulaAtiva.slides.map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setSlideIdx(i)}
                              className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold transition-all cursor-pointer ${
                                i === slideIdx
                                  ? 'bg-emerald-500 text-slate-950'
                                  : 'bg-slate-800 text-slate-400 hover:text-white'
                              }`}
                            >
                              {i === aulaAtiva.slides.length - 1 && aulaAtiva.slides[i].includes('infografico')
                                ? 'INFO'
                                : i + 1}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {subAbaMidia === 'fontes' && aulaAtiva.fontes?.length > 0 && (
                      <div className="w-full max-w-4xl flex flex-col items-center gap-3">
                        <img
                          src={aulaAtiva.fontes[fonteIdx]}
                          alt={`Fonte ${fonteIdx + 1} - ${aulaAtiva.titulo}`}
                          className="max-h-[calc(100dvh-230px)] w-auto object-contain rounded-xl border border-amber-500/30 shadow-2xl bg-white"
                        />
                        <div className="flex flex-wrap items-center justify-center gap-1">
                          {aulaAtiva.fontes.map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setFonteIdx(i)}
                              className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold transition-all cursor-pointer ${
                                i === fonteIdx
                                  ? 'bg-amber-400 text-slate-950'
                                  : 'bg-slate-800 text-slate-400 hover:text-white'
                              }`}
                            >
                              Pág {i + 1}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* [F5] TABELAS & INFOBOX EM TELA CHEIA */}
              {viewportAtivo === 'tabelas' && (
                <CadInspectorDock
                  dadosCad={dadosCad}
                  aula={aulaAtiva}
                  abaAtiva={abaInspector}
                  onChangeAba={setAbaInspector}
                  isFullViewport={true}
                  isLightMode={isLightMode}
                />
              )}

              {/* [F6] MAPA DO CURSO, MANIFESTO DO SIMON & CERTIFICADO (SEM SCROLL LONGO) */}
              {viewportAtivo === 'briefing' && (
                <div className="h-full overflow-y-auto p-4 md:p-6">
                  <div className="max-w-6xl mx-auto space-y-5">
                    {/* Cabeçalho Executivo do Curso + Filosofia do Professor Simon */}
                    <div
                      className={`rounded-2xl border p-5 md:p-6 ${
                        isLightMode
                          ? 'bg-white border-slate-300'
                          : 'bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 border-sky-500/30'
                      }`}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="space-y-2 max-w-3xl">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-black uppercase bg-sky-500/20 text-sky-400 border border-sky-500/30">
                              {curso.codigoCad} · WORKSTATION ELITE
                            </span>
                            <span className="text-xs font-bold text-emerald-400">
                              {curso.todasAulas.length} Aulas · {curso.cargaHoraria}
                            </span>
                          </div>
                          <h2
                            className={`text-xl md:text-2xl font-black ${
                              isLightMode ? 'text-slate-900' : 'text-white'
                            }`}
                          >
                            {curso.titulo}
                          </h2>
                          <p
                            className={`text-xs md:text-sm leading-relaxed ${
                              isLightMode ? 'text-slate-600' : 'text-slate-300'
                            }`}
                          >
                            “{curso.filosofiaCurso}”
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row lg:flex-col gap-2 flex-shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              setAulaAtiva(curso.primeiraAulaPratica);
                              setViewportAtivo('bancada');
                            }}
                            className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                          >
                            <Flame className="w-4 h-4" />
                            <span>Iniciar pela Física + Prática</span>
                          </button>

                          <Link
                            to={`/academia/certificado/${curso.certificadoId}`}
                            className="px-4 py-2.5 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/40 font-extrabold text-xs text-center flex items-center justify-center gap-2"
                          >
                            <Award className="w-4 h-4" />
                            <span>Painel de Certificado ({progresso.porcentagem}%)</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Matriz Clicável das Camadas Práticas do Simon */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {curso.trilhasPraticas.map((trilha) => (
                        <div
                          key={trilha.id}
                          className={`rounded-2xl border p-4 flex flex-col justify-between ${
                            isLightMode
                              ? 'bg-white border-slate-300'
                              : 'bg-slate-900/80 border-slate-800'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span
                                className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded"
                                style={{
                                  backgroundColor: `${trilha.cor}20`,
                                  color: trilha.cor,
                                }}
                              >
                                {trilha.codigo}
                              </span>
                              <span className="text-[10px] font-mono text-slate-500">
                                {trilha.aulas.length} aulas
                              </span>
                            </div>
                            <h3
                              className={`text-sm font-extrabold mb-1 ${
                                isLightMode ? 'text-slate-900' : 'text-white'
                              }`}
                            >
                              {trilha.titulo}
                            </h3>
                            <p className="text-xs text-slate-400 mb-3">{trilha.descricao}</p>
                          </div>

                          {/* Botões diretos das aulas dessa camada */}
                          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                            {trilha.aulas.map((a) => (
                              <button
                                key={a.idStr}
                                type="button"
                                onClick={() => {
                                  setAulaAtiva(a);
                                  setViewportAtivo('bancada');
                                }}
                                className={`px-2.5 py-1.5 rounded-lg border text-left text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                                  isAulaConcluida(curso.id, a.id)
                                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                                    : isLightMode
                                    ? 'bg-slate-100 hover:bg-sky-50 border-slate-300 text-slate-800'
                                    : 'bg-slate-950 hover:bg-sky-950/50 border-slate-800 hover:border-sky-500/40 text-slate-200'
                                }`}
                              >
                                <span className="font-mono text-[10px] text-sky-400">
                                  [{String(a.id).toUpperCase()}]
                                </span>
                                <span className="truncate max-w-[170px]">
                                  {a.titulo.replace(/^Aula \d+[\s\-:]+/i, '')}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Janela Secundária quando o Modo Split CAD está ativo */}
          {splitViewAtivo && (
            <div className="hidden lg:flex lg:w-2/5 h-full flex-col overflow-hidden">
              <CadInspectorDock
                dadosCad={dadosCad}
                aula={aulaAtiva}
                abaAtiva={abaInspector}
                onChangeAba={setAbaInspector}
                onCloseDock={() => setSplitViewAtivo(false)}
                isFullViewport={true}
                isLightMode={isLightMode}
              />
            </div>
          )}
        </main>

        {/* Dock Inspetor Direito (quando ativado sem Split-View) */}
        {rightDockOpen && !splitViewAtivo && (
          <div className="hidden md:flex h-full flex-shrink-0">
            <CadInspectorDock
              dadosCad={dadosCad}
              aula={aulaAtiva}
              abaAtiva={abaInspector}
              onChangeAba={setAbaInspector}
              onCloseDock={() => setRightDockOpen(false)}
              isFullViewport={false}
              isLightMode={isLightMode}
            />
          </div>
        )}
      </div>

      {/* ── 3. BARRA INFERIOR DE TELEMETRIA E COMANDO CAD (STATUS BAR) ── */}
      <footer
        className={`flex-shrink-0 px-3 py-1.5 border-t flex items-center justify-between gap-2 text-[11px] select-none ${
          isLightMode
            ? 'bg-slate-200 border-slate-300 text-slate-700'
            : 'bg-slate-950 border-slate-800 text-slate-400'
        }`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="inline-flex items-center gap-1.5 font-mono font-bold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            CAD WORKBENCH PRONTO
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline font-mono truncate">
            COORD: {curso.codigoCad} / {String(aulaAtiva?.id || '').toUpperCase()} / VIEW:{' '}
            {viewportAtivo.toUpperCase()}
          </span>
        </div>

        {/* Botões Rápidos: Aula Anterior / Próxima Aula */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            type="button"
            disabled={!aulaAnterior}
            onClick={() => aulaAnterior && setAulaAtiva(aulaAnterior)}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded border font-bold transition-all cursor-pointer disabled:opacity-30 ${
              isLightMode
                ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Aula Ant.</span>
          </button>

          <span className="font-mono text-[10px] px-1.5">
            {indiceAulaAtual + 1} / {curso.todasAulas.length}
          </span>

          <button
            type="button"
            disabled={!proximaAula}
            onClick={() => proximaAula && setAulaAtiva(proximaAula)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold transition-all cursor-pointer disabled:opacity-30"
          >
            <span>Próx. Aula</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
