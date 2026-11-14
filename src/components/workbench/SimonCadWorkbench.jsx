// src/components/workbench/SimonCadWorkbench.jsx
// Motor Unificado "Simon AutoCAD Workbench" (100dvh Zero-Scroll).
// Tema Padrão: Cristal Glacial & Prancheta do Certificado (claro, técnico e elegante).
// Interatividade: Protocolo Sekundo / AutoCAD Interativo (inspeciona cada função F1..F6 / aula e pede confirmação).

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import {
  Play,
  Headphones,
  Layers,
  FileText,
  ChevronLeft,
  ChevronRight,
  Flame,
  Award,
  X,
} from 'lucide-react';
import {
  obterCursoNormalizado,
  listarTodosCursosNormalizados,
} from '../../utils/courseAdapter';
import { parseAulaParaBancadaCad } from '../../utils/cadContentParser';
import { carregarConversa } from '../../data/conversas';
import useProgress from '../../hooks/useProgress';
import { useConversasCurso } from '../../hooks/useConversaProgress';
import { useModalFocusTrap } from '../../hooks/useModalFocusTrap';
import ConversaView from '../conversa/ConversaView';
import ConversaErrorBoundary from '../conversa/ConversaErrorBoundary';
import CadTopRibbon from './CadTopRibbon';
import CadModuleTree from './CadModuleTree';
import CadBenchView from './CadBenchView';
import CadInspectorDock from './CadInspectorDock';
import { SimonActionGate } from '../ui/SimonActionGate';
import { useSimonActionGate } from '../../hooks/useSimonActionGate';
import '../../styles/academia-prose.css';

const TODOS_CURSOS_LISTA = listarTodosCursosNormalizados();

const VIEWPORT_META = {
  bancada: {
    code: 'F1 · BANCADA',
    title: 'Bancada Prática do Professor Simon',
    description:
      'Exibe a decomposição prática da aula em blocos interativos, com a fala direta de oficina do Simon, grandezas físicas e ações práticas na ferramenta.',
    highlights: [
      'Blocos Técnicos e Sub-camadas Clicáveis',
      'Fala Sincera e Filosofia de Oficina do Simon',
      'Grandezas Físicas e Parâmetros de Instrumentação',
    ],
  },
  conversa: {
    code: 'F2 · BALCÃO',
    title: 'Simulador Interativo "Papo de Balcão"',
    description:
      'Inicia o diálogo técnico simulado entre o Professor Simon e o técnico em campo, com tomada de decisão e verificação de diagnóstico.',
    highlights: [
      'Diálogo Realista de Atendimento e Diagnóstico',
      'Escolhas Técnicas com Feedback Imediato',
      'Integração com Tabelas e Infobox da Aula',
    ],
  },
  midia: {
    code: 'F3 · MÍDIA',
    title: 'Estúdio Multimídia (Videoaula, Podcast, Slides e Pranchas)',
    description:
      'Abre a central multimídia da aula com player de vídeo, episódio em áudio/podcast, lâminas de slides, infográfico e pranchas de pesquisa.',
    highlights: [
      'Player de Videoaula e Podcast',
      'Visualizador de Slides Técnicos e Infográfico',
      'Pranchas de Pesquisa Documental',
    ],
  },
  raiox: {
    code: 'F4 · RAIO-X',
    title: 'Raio-X 100% Teoria & Engenharia Detalhada',
    description:
      'Exibe 100% do conteúdo técnico, fórmulas termodinâmicas, procedimentos passo a passo e tabelas da apostila organizados em sub-botões sem rolagem longa.',
    highlights: [
      'Texto Técnico Integral Sem Cortes',
      'Navegação por Blocos e Sub-tópicos CAD',
      'Acesso Rápido às Tabelas de Engenharia',
    ],
  },
  tabelas: {
    code: 'F5 · DADOS',
    title: 'Tabelas de Engenharia, Alertas & Checklist Prático',
    description:
      'Abre em tela cheia o inspetor de tabelas técnicas da aula, caixas de alerta (perigo, atenção, dica) e o checklist de verificação em campo.',
    highlights: [
      'Tabelas de Pressão, Temperatura e Superaquecimento',
      'Alertas Críticos de Segurança e Boas Práticas',
      'Checklist Operacional de Campo',
    ],
  },
  briefing: {
    code: 'F6 · MAPA',
    title: 'Mapa Geral do Curso, Trilhas Práticas & Certificado',
    description:
      'Mostra a visão executiva do treinamento, as camadas práticas do Professor Simon e o acesso à emissão do Certificado Oficial com QR Code.',
    highlights: [
      'Visão Geral da Carga Horária e Progresso',
      'Matriz Clicável das Trilhas Práticas',
      'Acesso ao Painel de Emissão de Certificado',
    ],
  },
};

export default function SimonCadWorkbench({
  cursoId,
  initialLessonId = null,
  initialViewport = 'bancada',
}) {
  const navigate = useNavigate();
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
  const mobileDrawerRef = useRef(null);
  const mobileCloseBtnRef = useRef(null);

  useModalFocusTrap(
    mobileModulesOpen,
    mobileDrawerRef,
    () => setMobileModulesOpen(false),
    mobileCloseBtnRef
  );

  // Tema visual persistido — Padrão: Claro (Cristal Glacial & Prancheta do Certificado)
  const [isLightMode, setIsLightMode] = useState(() => {
    try {
      return localStorage.getItem('simon_cad_theme') !== 'dark';
    } catch {
      return true;
    }
  });

  const {
    pendingAction,
    requestAction,
    confirmAction,
    cancelAction,
    directMode,
    setDirectMode,
  } = useSimonActionGate();

  // Estado para o Estúdio de Mídia [F3]
  const [subAbaMidia, setSubAbaMidia] = useState('slides'); // 'video' | 'podcast' | 'slides' | 'fontes'
  const [slideIdx, setSlideIdx] = useState(0);
  const [fonteIdx, setFonteIdx] = useState(0);

  // Roteiro do Papo de Balcão carregado sob demanda para enriquecer a Bancada Prática
  const [roteiroCarregado, setRoteiroCarregado] = useState({ chave: null, dados: null });
  const chaveRoteiroAtual =
    aulaAtiva && aulaAtiva.possuiConversa ? `${curso.id}:${aulaAtiva.id}` : null;
  const roteiroAulaAtiva =
    chaveRoteiroAtual && roteiroCarregado.chave === chaveRoteiroAtual
      ? roteiroCarregado.dados
      : null;

  const { toggleAula, isAulaConcluida, getProgressoCurso } = useProgress();
  const conversasCurso = useConversasCurso(curso.id);

  const totalAulasCertificaveis = useMemo(
    () => curso.todasAulas.filter((a) => String(a.id) !== 'apresentacao').length,
    [curso]
  );
  const progresso = getProgressoCurso(curso.id, totalAulasCertificaveis);
  const aulaConcluida = aulaAtiva ? isAulaConcluida(curso.id, aulaAtiva.id) : false;

  const [prevParamKey, setPrevParamKey] = useState(`${curso.id}|${paramAula || ''}|${paramView || ''}`);
  const paramKey = `${curso.id}|${paramAula || ''}|${paramView || ''}`;
  if (paramKey !== prevParamKey) {
    setPrevParamKey(paramKey);
    const novaInicial =
      (paramAula && curso.todasAulasMap.get(String(paramAula))) ||
      curso.primeiraAulaPratica ||
      curso.todasAulas[0] ||
      null;
    setAulaAtiva(novaInicial);
    if (paramView) setViewportAtivo(paramView);
    setSlideIdx(0);
    setFonteIdx(0);
  }

  const [prevAulaMidiaId, setPrevAulaMidiaId] = useState(aulaAtiva?.idStr);
  if (aulaAtiva?.idStr !== prevAulaMidiaId) {
    setPrevAulaMidiaId(aulaAtiva?.idStr);
    if (aulaAtiva) {
      setSlideIdx(0);
      setFonteIdx(0);
      if (aulaAtiva.videoUrl) setSubAbaMidia('video');
      else if (aulaAtiva.slides?.length > 0) setSubAbaMidia('slides');
      else if (aulaAtiva.podcastUrl) setSubAbaMidia('podcast');
      else if (aulaAtiva.fontes?.length > 0) setSubAbaMidia('fontes');
    }
  }

  // Carrega o roteiro do Papo de Balcão em background para vincular falas/desafios aos botões da Bancada
  useEffect(() => {
    let cancelado = false;
    if (!chaveRoteiroAtual || !aulaAtiva) return undefined;
    carregarConversa(curso.id, aulaAtiva.id)
      .then((dados) => {
        if (!cancelado) {
          setRoteiroCarregado({ chave: chaveRoteiroAtual, dados: dados || null });
        }
      })
      .catch(() => {
        if (!cancelado) {
          setRoteiroCarregado({ chave: chaveRoteiroAtual, dados: null });
        }
      });
    return () => {
      cancelado = true;
    };
  }, [curso.id, aulaAtiva, chaveRoteiroAtual]);

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

  const handleSelectViewportGated = useCallback(
    (novoViewport) => {
      const meta = VIEWPORT_META[novoViewport] || {
        code: novoViewport.toUpperCase(),
        title: `Ferramenta ${novoViewport}`,
        description: 'Alterna a visualização ativa na bancada principal.',
        highlights: [],
      };
      requestAction({
        isAlreadyActive: viewportAtivo === novoViewport,
        code: meta.code,
        category: `Ferramenta CAD Workbench · ${curso.nomeCurto}`,
        title: meta.title,
        subtitle: aulaAtiva ? `Aula Ativa: ${aulaAtiva.titulo}` : '',
        description: meta.description,
        highlights: meta.highlights,
        confirmLabel: `Ativar ${meta.code}`,
        badgeColor: 'sky',
        onConfirm: () => setViewportAtivo(novoViewport),
      });
    },
    [viewportAtivo, requestAction, curso.nomeCurto, aulaAtiva]
  );

  const handleSelectAula = useCallback(
    (novaAula, viewportOpcional) => {
      if (!novaAula) return;
      requestAction({
        isAlreadyActive:
          novaAula.idStr === aulaAtiva?.idStr &&
          (!viewportOpcional || viewportOpcional === viewportAtivo),
        code: `AULA ${String(novaAula.id).toUpperCase()}`,
        category: `${curso.nomeCurto} · Seleção de Aula na Árvore CAD`,
        title: novaAula.titulo,
        description:
          'Carrega esta aula no canvas central com seus blocos práticos, notas de oficina do Professor Simon, multimídia e tabelas.',
        highlights: [
          'Bancada Prática (F1) e Raio-X Completo (F4)',
          novaAula.possuiConversa
            ? 'Inclui Simulador Interativo Papo de Balcão (F2)'
            : 'Inclui Slides, Infográfico e Tabelas Técnicas',
        ],
        confirmLabel: `Abrir Aula ${String(novaAula.id).toUpperCase()}`,
        badgeColor: 'emerald',
        onConfirm: () => {
          setAulaAtiva(novaAula);
          if (viewportOpcional) {
            setViewportAtivo(viewportOpcional);
          } else if (viewportAtivo === 'briefing') {
            setViewportAtivo('bancada');
          }
        },
      });
    },
    [aulaAtiva, viewportAtivo, requestAction, curso.nomeCurto]
  );

  const handleOpenInspectorTab = useCallback((aba = 'tabelas') => {
    setAbaInspector(aba);
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      setRightDockOpen(true);
    } else {
      setViewportAtivo('tabelas');
    }
  }, []);

  const handleIrParaAbaFromConversa = useCallback(
    (aba) => {
      if (aba === 'tabelas' || aba === 'infobox') {
        handleOpenInspectorTab(aba);
      } else if (
        aba === 'video' ||
        aba === 'slides' ||
        aba === 'podcast' ||
        aba === 'fontes'
      ) {
        setSubAbaMidia(aba);
        setViewportAtivo('midia');
      } else {
        setViewportAtivo('raiox');
      }
    },
    [handleOpenInspectorTab]
  );

  const handleTrocarCursoMobile = useCallback(
    (e) => {
      const novoCursoId = e.target.value;
      const alvo = TODOS_CURSOS_LISTA.find((c) => c.id === novoCursoId);
      if (alvo?.rotaUrl) {
        setMobileModulesOpen(false);
        navigate(alvo.rotaUrl);
      }
    },
    [navigate]
  );

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
        isLightMode
          ? 'bg-gradient-to-b from-sky-50/70 via-white to-sky-50/40 text-slate-900'
          : 'bg-slate-950 text-slate-100'
      }`}
    >
      {/* Modal Sekundo / AutoCAD Interativo de Inspeção e Confirmação */}
      <SimonActionGate
        action={pendingAction}
        onConfirm={confirmAction}
        onCancel={cancelAction}
        directMode={directMode}
        onToggleDirectMode={setDirectMode}
      />

      {/* ── 1. RIBBON SUPERIOR DE COMANDOS (ESTILO AUTOCAD + TEMA CERTIFICADO) ── */}
      <CadTopRibbon
        curso={curso}
        aulaAtiva={aulaAtiva}
        viewportAtivo={viewportAtivo}
        onSelectViewport={handleSelectViewportGated}
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
        mobileDrawerOpen={mobileModulesOpen}
        directMode={directMode}
        onSetDirectMode={setDirectMode}
      />

      {/* ── 2. ÁREA PRINCIPAL DE TRABALHO (ÁRVORE DE MÓDULOS + CONTEÚDO + PAINEL DE TABELAS) ── */}
      <div className="flex-1 min-h-0 flex overflow-hidden relative">
        {/* Árvore Lateral Esquerda (Desktop) */}
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
          <div
            className="fixed inset-0 z-50 md:hidden flex"
            role="dialog"
            aria-modal="true"
            aria-label="Módulos e aulas do curso"
          >
            <div
              className="fixed inset-0 bg-sky-950/60 backdrop-blur-xs"
              onClick={() => setMobileModulesOpen(false)}
            />
            <div
              ref={mobileDrawerRef}
              tabIndex={-1}
              className={`relative z-10 w-[90%] max-w-[360px] h-full flex flex-col overflow-hidden shadow-2xl focus:outline-none ${
                isLightMode ? 'bg-white text-slate-900' : 'bg-slate-950 text-slate-100'
              }`}
            >
              <div
                className={`flex-shrink-0 px-3 py-2.5 border-b flex items-center justify-between gap-2 ${
                  isLightMode
                    ? 'bg-sky-50 border-sky-200'
                    : 'bg-slate-900 border-slate-800'
                }`}
              >
                <div className="flex-1 min-w-0">
                  <label htmlFor="mobile-drawer-curso" className="sr-only">
                    Trocar treinamento ativo
                  </label>
                  <select
                    id="mobile-drawer-curso"
                    value={curso?.id || 'instalacao-hvac'}
                    onChange={handleTrocarCursoMobile}
                    className={`w-full px-2.5 py-1.5 rounded-lg border text-xs font-bold truncate cursor-pointer ${
                      isLightMode
                        ? 'bg-white border-sky-300 text-[#1a3a5c]'
                        : 'bg-slate-950 border-slate-700 text-sky-200'
                    }`}
                  >
                    {TODOS_CURSOS_LISTA.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.nomeCurto} ({c.todasAulas.length} aulas)
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  ref={mobileCloseBtnRef}
                  type="button"
                  onClick={() => setMobileModulesOpen(false)}
                  aria-label="Fechar lista de aulas"
                  className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 cursor-pointer ${
                    isLightMode
                      ? 'bg-white border-sky-200 text-[#1a3a5c] hover:bg-sky-100'
                      : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <div className="flex-1 min-h-0 flex overflow-hidden">
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
          </div>
        )}

        {/* ── ÁREA CENTRAL DE ESTUDO ── */}
        <div
          className={`flex-1 min-w-0 h-full flex overflow-hidden ${
            isLightMode ? 'bg-white' : 'bg-[#090f1d]'
          }`}
        >
          {/* Janela Primária do Canvas */}
          <div
            className={`h-full flex flex-col overflow-hidden ${
              splitViewAtivo
                ? isLightMode
                  ? 'w-full lg:w-3/5 border-r-2 border-sky-200'
                  : 'w-full lg:w-3/5 border-r border-slate-800'
                : 'w-full'
            }`}
          >
            {/* Barra de Identificação da Aula Ativa (fixa apenas no desktop md+; no mobile rola com o conteúdo) */}
            {aulaAtiva && viewportAtivo !== 'briefing' && (
              <div
                className={`hidden md:flex flex-shrink-0 px-4 py-2 border-b items-center justify-between gap-3 ${
                  isLightMode
                    ? 'bg-sky-50/70 border-sky-200'
                    : 'bg-slate-900/70 border-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-md flex-shrink-0 border ${
                      isLightMode
                        ? 'bg-sky-100 text-[#0369a1] border-sky-300'
                        : 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                    }`}
                  >
                    {aulaAtiva.moduloCodigo || 'Aula'} &bull; {String(aulaAtiva.id).toUpperCase()}
                  </span>
                  <h1
                    className={`text-sm md:text-base font-black truncate ${
                      isLightMode ? 'text-[#1a3a5c]' : 'text-white'
                    }`}
                  >
                    {aulaAtiva.titulo}
                  </h1>
                </div>

                {/* Indicadores rápidos de recursos da aula */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span
                    className={`text-xs font-semibold ${
                      isLightMode ? 'text-[#0369a1]' : 'text-slate-300'
                    }`}
                  >
                    {dadosCad.nos.length} blocos &bull; {dadosCad.tabelas.length} tabelas
                  </span>
                </div>
              </div>
            )}

            {/* Corpo do Viewport Selecionado */}
            <div className="flex-1 min-h-0 overflow-hidden">
              {/* [F1] BANCADA PRÁTICA DO SIMON */}
              {viewportAtivo === 'bancada' && (
                <CadBenchView
                  cursoId={curso.id}
                  aulaId={aulaAtiva?.id}
                  aula={aulaAtiva}
                  dadosCad={dadosCad}
                  corCurso={curso.corPrimaria}
                  isLightMode={isLightMode}
                  onSelectViewport={handleSelectViewportGated}
                  onOpenInspectorTab={handleOpenInspectorTab}
                  irParaAba={handleIrParaAbaFromConversa}
                  initialLens="pratica"
                />
              )}

              {/* [F4] RAIO-X 100% TEORIA DETALHADA */}
              {viewportAtivo === 'raiox' && (
                <CadBenchView
                  cursoId={curso.id}
                  aulaId={aulaAtiva?.id}
                  aula={aulaAtiva}
                  dadosCad={dadosCad}
                  corCurso={curso.corPrimaria}
                  isLightMode={isLightMode}
                  onSelectViewport={handleSelectViewportGated}
                  onOpenInspectorTab={handleOpenInspectorTab}
                  irParaAba={handleIrParaAbaFromConversa}
                  initialLens="detalhado"
                />
              )}

              {/* [F2] PAPO DE BALCÃO INTERATIVO */}
              {viewportAtivo === 'conversa' && aulaAtiva && (
                <div className="h-full overflow-y-auto p-3 sm:p-4 md:p-6">
                  <div className="max-w-4xl mx-auto">
                    <div className="md:hidden mb-3">
                      <span
                        className={`inline-block text-xs font-bold mb-1 ${
                          isLightMode ? 'text-[#0369a1]' : 'text-sky-300'
                        }`}
                      >
                        {aulaAtiva.moduloCodigo || 'Aula'} &bull; {String(aulaAtiva.id).toUpperCase()}
                      </span>
                      <h1
                        className={`text-base font-black leading-snug ${
                          isLightMode ? 'text-[#1a3a5c]' : 'text-white'
                        }`}
                      >
                        {aulaAtiva.titulo}
                      </h1>
                    </div>
                    <ConversaErrorBoundary
                      cursoId={curso.id}
                      aulaId={aulaAtiva.id}
                      irParaAba={handleIrParaAbaFromConversa}
                    >
                      <ConversaView
                        cursoId={curso.id}
                        aulaId={aulaAtiva.id}
                        irParaAba={handleIrParaAbaFromConversa}
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
                      isLightMode
                        ? 'bg-sky-50/90 border-sky-200'
                        : 'bg-slate-900 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {aulaAtiva.videoUrl && (
                        <button
                          type="button"
                          onClick={() => setSubAbaMidia('video')}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer border ${
                            subAbaMidia === 'video'
                              ? 'bg-[#0369a1] text-white border-[#1a3a5c]'
                              : isLightMode
                              ? 'bg-white text-[#1a3a5c] border-sky-200 hover:bg-sky-50'
                              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
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
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer border ${
                            subAbaMidia === 'podcast'
                              ? 'bg-[#0369a1] text-white border-[#1a3a5c]'
                              : isLightMode
                              ? 'bg-white text-[#1a3a5c] border-sky-200 hover:bg-sky-50'
                              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
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
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer border ${
                            subAbaMidia === 'slides'
                              ? 'bg-[#0369a1] text-white border-[#1a3a5c]'
                              : isLightMode
                              ? 'bg-white text-[#1a3a5c] border-sky-200 hover:bg-sky-50'
                              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          }`}
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>Slides &amp; Infográfico ({aulaAtiva.slides.length})</span>
                        </button>
                      )}
                      {aulaAtiva.fontes?.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setSubAbaMidia('fontes')}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold cursor-pointer border ${
                            subAbaMidia === 'fontes'
                              ? 'bg-[#0369a1] text-white border-[#1a3a5c]'
                              : isLightMode
                              ? 'bg-white text-[#1a3a5c] border-sky-200 hover:bg-sky-50'
                              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          }`}
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Pranchas de Pesquisa ({aulaAtiva.fontes.length})</span>
                        </button>
                      )}
                    </div>

                    {/* Paginador rápido de slides no topo */}
                    {subAbaMidia === 'slides' && aulaAtiva.slides?.length > 0 && (
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          disabled={slideIdx === 0}
                          onClick={() => setSlideIdx((p) => Math.max(0, p - 1))}
                          className={`p-1.5 rounded border disabled:opacity-30 cursor-pointer ${
                            isLightMode
                              ? 'bg-white border-sky-200 text-[#0369a1]'
                              : 'bg-slate-800 border-slate-700 text-sky-400'
                          }`}
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span
                          className={`text-xs font-bold [font-variant-numeric:tabular-nums] ${
                            isLightMode ? 'text-[#1a3a5c]' : 'text-slate-200'
                          }`}
                        >
                          Slide {slideIdx + 1} / {aulaAtiva.slides.length}
                        </span>
                        <button
                          type="button"
                          disabled={slideIdx >= aulaAtiva.slides.length - 1}
                          onClick={() =>
                            setSlideIdx((p) => Math.min(aulaAtiva.slides.length - 1, p + 1))
                          }
                          className={`p-1.5 rounded border disabled:opacity-30 cursor-pointer ${
                            isLightMode
                              ? 'bg-white border-sky-200 text-[#0369a1]'
                              : 'bg-slate-800 border-slate-700 text-sky-400'
                          }`}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Corpo do Player Multimídia Ajustado ao Viewport */}
                  <div className="flex-1 min-h-0 overflow-y-auto p-4 flex flex-col items-center justify-center">
                    {subAbaMidia === 'video' && aulaAtiva.videoUrl && (
                      <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border-2 border-sky-300 bg-black shadow-xl">
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
                      <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border-2 border-sky-300 bg-black shadow-xl">
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
                          className="max-h-[calc(100dvh-230px)] w-auto object-contain rounded-xl border-2 border-sky-200 shadow-lg bg-white"
                        />
                        {/* Botões numéricos diretos para cada slide */}
                        <div className="flex flex-wrap items-center justify-center gap-1">
                          {aulaAtiva.slides.map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setSlideIdx(i)}
                              className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer border ${
                                i === slideIdx
                                  ? 'bg-[#0369a1] text-white border-[#1a3a5c]'
                                  : isLightMode
                                  ? 'bg-white text-slate-700 border-sky-200 hover:bg-sky-50'
                                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                              }`}
                            >
                              {i === aulaAtiva.slides.length - 1 &&
                              aulaAtiva.slides[i].includes('infografico')
                                ? 'Info'
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
                          className="max-h-[calc(100dvh-230px)] w-auto object-contain rounded-xl border-2 border-sky-200 shadow-lg bg-white"
                        />
                        <div className="flex flex-wrap items-center justify-center gap-1">
                          {aulaAtiva.fontes.map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setFonteIdx(i)}
                              className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer border ${
                                i === fonteIdx
                                  ? 'bg-[#0369a1] text-white border-[#1a3a5c]'
                                  : isLightMode
                                  ? 'bg-white text-slate-700 border-sky-200 hover:bg-sky-50'
                                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                              }`}
                            >
                              Pág. {i + 1}
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

              {/* [F6] MAPA DO CURSO, MANIFESTO DO SIMON & CERTIFICADO */}
              {viewportAtivo === 'briefing' && (
                <div className="h-full overflow-y-auto p-4 md:p-6">
                  <div className="max-w-6xl mx-auto space-y-5">
                    {/* Cabeçalho Executivo do Curso + Filosofia do Professor Simon */}
                    <div
                      className={`rounded-2xl border-2 p-5 md:p-6 ${
                        isLightMode
                          ? 'bg-gradient-to-br from-sky-50 via-white to-sky-50/60 border-sky-200 shadow-sm'
                          : 'bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 border-sky-500/30'
                      }`}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="space-y-2 max-w-3xl">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`px-2.5 py-0.5 rounded-md text-xs font-bold border ${
                                isLightMode
                                  ? 'bg-sky-100 text-[#0369a1] border-sky-300'
                                  : 'bg-sky-500/20 text-sky-300 border-sky-500/30'
                              }`}
                            >
                              Trilha completa &bull; {curso.codigoCad}
                            </span>
                            <span
                              className={`text-xs font-extrabold ${
                                isLightMode ? 'text-emerald-800' : 'text-emerald-300'
                              }`}
                            >
                              {curso.todasAulas.length} Aulas &bull; {curso.cargaHoraria}
                            </span>
                          </div>
                          <h1
                            className={`text-xl md:text-2xl font-black ${
                              isLightMode ? 'text-[#1a3a5c]' : 'text-white'
                            }`}
                          >
                            {curso.titulo}
                          </h1>
                          <p
                            className={`text-[13px] md:text-sm leading-relaxed font-medium ${
                              isLightMode ? 'text-slate-700' : 'text-slate-200'
                            }`}
                          >
                            “{curso.filosofiaCurso}”
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row lg:flex-col gap-2 flex-shrink-0">
                          <button
                            type="button"
                            onClick={() => handleSelectAula(curso.primeiraAulaPratica, 'bancada')}
                            className="px-5 py-3 rounded-xl bg-[#0369a1] hover:bg-[#0284c7] text-white font-extrabold text-[13px] flex items-center justify-center gap-2 shadow-md cursor-pointer"
                          >
                            <Flame className="w-4 h-4" aria-hidden="true" />
                            <span>Iniciar pela Física + Prática</span>
                          </button>

                          <Link
                            to={`/academia/certificado/${curso.certificadoId}`}
                            className={`px-4 py-2.5 rounded-xl font-extrabold text-[13px] text-center flex items-center justify-center gap-2 border ${
                              isLightMode
                                ? 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300'
                                : 'bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border-amber-400/40'
                            }`}
                          >
                            <Award className="w-4 h-4" aria-hidden="true" />
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
                          className={`rounded-2xl border-2 p-4 flex flex-col justify-between ${
                            isLightMode
                              ? 'bg-white border-sky-200 shadow-2xs'
                              : 'bg-slate-900/80 border-slate-800'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span
                                className="text-xs font-extrabold px-2 py-0.5 rounded"
                                style={{
                                  backgroundColor: `${trilha.cor}20`,
                                  color: trilha.cor,
                                }}
                              >
                                {trilha.codigo}
                              </span>
                              <span
                                className={`text-xs font-bold ${
                                  isLightMode ? 'text-slate-600' : 'text-slate-300'
                                }`}
                              >
                                {trilha.aulas.length} aulas
                              </span>
                            </div>
                            <h2
                              className={`text-sm font-extrabold mb-1 ${
                                isLightMode ? 'text-[#1a3a5c]' : 'text-white'
                              }`}
                            >
                              {trilha.titulo}
                            </h2>
                            <p
                              className={`text-[13px] mb-3 ${
                                isLightMode ? 'text-slate-600' : 'text-slate-300'
                              }`}
                            >
                              {trilha.descricao}
                            </p>
                          </div>

                          {/* Botões diretos das aulas dessa camada */}
                          <div
                            className={`flex flex-wrap gap-1.5 pt-2 border-t ${
                              isLightMode ? 'border-sky-100' : 'border-slate-800/60'
                            }`}
                          >
                            {trilha.aulas.map((a) => (
                              <button
                                key={a.idStr}
                                type="button"
                                onClick={() => handleSelectAula(a, 'bancada')}
                                className={`px-2.5 py-1.5 rounded-lg border text-left text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                                  isAulaConcluida(curso.id, a.id)
                                    ? isLightMode
                                      ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                                      : 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                                    : isLightMode
                                    ? 'bg-sky-50/70 hover:bg-sky-100 border-sky-200 text-[#1a3a5c]'
                                    : 'bg-slate-950 hover:bg-sky-950/50 border-slate-800 hover:border-sky-500/40 text-slate-200'
                                }`}
                              >
                                <span
                                  className={`text-xs font-extrabold flex-shrink-0 ${
                                    isLightMode ? 'text-[#0369a1]' : 'text-sky-300'
                                  }`}
                                >
                                  {String(a.id).toUpperCase()}
                                </span>
                                <span className="truncate max-w-[190px]">
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

          {/* Janela Secundária quando o Modo Dividir Tela está ativo */}
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
        </div>

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

      {/* ── 3. BARRA INFERIOR DE NAVEGAÇÃO ENTRE AULAS ── */}
      <footer
        className={`flex-shrink-0 px-3 py-1.5 border-t-2 flex items-center justify-between gap-2 text-xs select-none ${
          isLightMode
            ? 'bg-gradient-to-r from-sky-50 via-white to-sky-50 border-sky-200 text-slate-700'
            : 'bg-slate-950 border-slate-800 text-slate-300'
        }`}
      >
        <div className="hidden sm:flex items-center gap-2.5 min-w-0">
          <span
            className={`inline-flex items-center gap-1.5 font-bold ${
              isLightMode ? 'text-[#1a3a5c]' : 'text-emerald-300'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0284c7]" aria-hidden="true" />
            Bancada ativa
          </span>
          <span className="text-sky-300" aria-hidden="true">|</span>
          <span className="font-semibold truncate">
            {curso.nomeCurto} &bull; Aula {String(aulaAtiva?.id || '').toUpperCase()}
          </span>
        </div>

        {/* Botões Rápidos: Aula Anterior / Próxima Aula */}
        <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-1.5 flex-shrink-0">
          <button
            type="button"
            disabled={!aulaAnterior}
            onClick={() => aulaAnterior && handleSelectAula(aulaAnterior)}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer disabled:opacity-35 ${
              isLightMode
                ? 'bg-white border-sky-200 text-[#1a3a5c] hover:bg-sky-50'
                : 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Aula Ant.</span>
          </button>

          <span className="font-bold text-xs px-2 [font-variant-numeric:tabular-nums]">
            {indiceAulaAtual + 1} / {curso.todasAulas.length}
          </span>

          <button
            type="button"
            disabled={!proximaAula}
            onClick={() => proximaAula && handleSelectAula(proximaAula)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0369a1] hover:bg-[#0284c7] text-white text-xs font-extrabold transition-all cursor-pointer disabled:opacity-35"
          >
            <span>Próx. Aula</span>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </footer>
    </div>
  );
}
