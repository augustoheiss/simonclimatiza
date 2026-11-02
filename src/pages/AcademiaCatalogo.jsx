// src/pages/AcademiaCatalogo.jsx
// Estação "AutoCAD" de Treinamentos, Módulos e Aulas da Academia Simon (100dvh Zero-Scroll).
// Tema: Cristal Glacial & Prancheta do Certificado (claro, técnico e elegante).
// Interatividade: Protocolo Sekundo / AutoCAD Interativo (inspeciona cada botão e pede confirmação).

import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Flame,
  Wrench,
  Coffee,
  Play,
  Layers,
  Award,
  CheckCircle2,
  ArrowRight,
  Home,
  Cpu,
  ListOrdered,
  LogOut,
  ExternalLink,
} from 'lucide-react';
import { listarTodosCursosNormalizados } from '../utils/courseAdapter';
import { parseAulaParaBancadaCad } from '../utils/cadContentParser';
import useProgress from '../hooks/useProgress';
import {
  SimonActionGate,
  SimonDirectModeToggle,
  useSimonActionGate,
} from '../components/ui/SimonActionGate';
import certBg from '../assets/fundo-certificado.png';

const TODOS_CURSOS = listarTodosCursosNormalizados();

export default function AcademiaCatalogo() {
  const navigate = useNavigate();
  const { isAulaConcluida, getProgressoCurso } = useProgress();

  // Estados de seleção estilo AutoCAD: Curso -> Modo/Módulo -> Aula -> Lente de Inspeção
  const [cursoIdx, setCursoIdx] = useState(0);
  const [modoTrilha, setModoTrilha] = useState('pratica'); // 'pratica' (Física->Instalação) | 'original'
  const [grupoIdx, setGrupoIdx] = useState(0);
  const [aulaSelecionadaId, setAulaSelecionadaId] = useState(null);
  const [funcaoPreview, setFuncaoPreview] = useState('resumo'); // 'resumo' | 'blocos' | 'video' | 'slides'
  const [slidePreviewIdx, setSlidePreviewIdx] = useState(0);

  const {
    pendingAction,
    requestAction,
    confirmAction,
    cancelAction,
    directMode,
    setDirectMode,
  } = useSimonActionGate();

  const cursoAtual = TODOS_CURSOS[cursoIdx] || TODOS_CURSOS[0];

  const gruposCurso = useMemo(
    () =>
      modoTrilha === 'pratica' && cursoAtual.trilhasPraticas?.length > 0
        ? cursoAtual.trilhasPraticas
        : cursoAtual.modulosOriginais || [],
    [cursoAtual, modoTrilha]
  );

  const grupoAtual = gruposCurso[grupoIdx] || gruposCurso[0] || null;
  const aulasDoGrupo = grupoAtual?.aulas || [];

  const aulaAtiva = useMemo(() => {
    if (aulaSelecionadaId) {
      const achou = aulasDoGrupo.find((a) => a.idStr === String(aulaSelecionadaId));
      if (achou) return achou;
    }
    return aulasDoGrupo[0] || cursoAtual.primeiraAulaPratica || cursoAtual.todasAulas[0];
  }, [aulasDoGrupo, aulaSelecionadaId, cursoAtual]);

  const dadosCadAula = useMemo(() => parseAulaParaBancadaCad(aulaAtiva), [aulaAtiva]);

  const totalCertificaveis = cursoAtual.todasAulas.filter(
    (a) => String(a.id) !== 'apresentacao'
  ).length;
  const progressoCurso = getProgressoCurso(cursoAtual.id, totalCertificaveis);

  const selecionarCurso = (idx) => {
    const c = TODOS_CURSOS[idx];
    requestAction({
      isAlreadyActive: idx === cursoIdx,
      code: c.codigoCad || `CRS-0${idx + 1}`,
      category: 'PASSO 1 · Seleção de Treinamento Técnico',
      title: c.nomeCurto,
      subtitle: `${c.todasAulas.length} Aulas e Módulos Práticos`,
      description:
        c.descricao ||
        `Carrega na bancada todos os módulos, aulas práticas, vídeos e simuladores do treinamento ${c.nomeCurto}.`,
      highlights: [
        `${c.todasAulas.length} Aulas Técnicas Estruturadas`,
        'Árvore de Módulos (Física ➔ Prática ou Por Módulo)',
        'Simuladores de Conversa (Papo de Balcão) e Quiz',
        'Certificação Oficial com Validação por QR Code',
      ],
      confirmLabel: `Carregar ${c.nomeCurto}`,
      badgeColor: 'sky',
      onConfirm: () => {
        setCursoIdx(idx);
        setGrupoIdx(0);
        setAulaSelecionadaId(null);
        setSlidePreviewIdx(0);
      },
    });
  };

  const selecionarGrupo = (idx) => {
    const g = gruposCurso[idx];
    requestAction({
      isAlreadyActive: idx === grupoIdx,
      code: g?.codigo || `MOD-0${idx + 1}`,
      category: `PASSO 2 · Módulo de ${cursoAtual.nomeCurto}`,
      title: g?.titulo || 'Módulo Técnico',
      description: `Exibe as ${g?.aulas?.length || 0} aulas pertencentes a esta camada/módulo para inspeção na coluna central.`,
      highlights: (g?.aulas || []).slice(0, 4).map((a) => a.titulo),
      confirmLabel: `Abrir Módulo ${g?.codigo || ''}`,
      badgeColor: 'emerald',
      onConfirm: () => {
        setGrupoIdx(idx);
        setAulaSelecionadaId(null);
        setSlidePreviewIdx(0);
      },
    });
  };

  const selecionarAula = (aula, funcaoOpcional) => {
    requestAction({
      isAlreadyActive: aula.idStr === aulaAtiva?.idStr && !funcaoOpcional,
      code: `AULA-${String(aula.id).toUpperCase()}`,
      category: `PASSO 3 · Seleção de Aula (${cursoAtual.nomeCurto})`,
      title: aula.titulo,
      description:
        'Carrega na prancheta à direita a Visão Prática do Professor Simon, grandezas físicas, blocos de conteúdo, slides e vídeo desta aula.',
      highlights: [
        'Visão Prática & Filosofia de Oficina do Simon',
        'Blocos Técnicos Estruturados e Grandezas Físicas',
        aula.possuiConversa
          ? 'Possui Simulador Interativo "Papo de Balcão"'
          : 'Acesso Direto ao CAD Workbench em Tela Cheia',
      ],
      confirmLabel: `Carregar Aula ${String(aula.id).toUpperCase()}`,
      badgeColor: 'sky',
      onConfirm: () => {
        setAulaSelecionadaId(aula.idStr);
        setSlidePreviewIdx(0);
        if (funcaoOpcional) setFuncaoPreview(funcaoOpcional);
      },
    });
  };

  const abrirNoWorkbench = (aula, view = 'bancada') => {
    const viewLabels = {
      bancada: 'Bancada Prática (F2)',
      raiox: 'Raio-X 100% Detalhado (F3)',
      conversa: 'Simulador Papo de Balcão (F6)',
    };
    requestAction({
      code: `WB-${view.toUpperCase()}`,
      category: 'Estação CAD Workbench em Tela Cheia',
      title: `${aula.titulo}`,
      subtitle: `Modo de Abertura: ${viewLabels[view] || view}`,
      description:
        'Abre a estação de trabalho completa (SimonCadWorkbench) com as ferramentas F1 a F6, inspetor lateral de grandezas físicas e controle de conclusão da aula.',
      highlights: [
        'Ferramentas CAD F1 (Vídeo/Slides), F2 (Bancada), F3 (Raio-X)',
        'Ferramentas F4 (Diagrama), F5 (Quiz) e F6 (Papo de Balcão)',
        'Registro Automático de Progresso para o Certificado',
      ],
      confirmLabel: 'Confirmar e Abrir Workbench',
      badgeColor: 'emerald',
      onConfirm: () => {
        navigate(`${cursoAtual.rotaUrl}?aula=${encodeURIComponent(aula.id)}&view=${view}`);
      },
    });
  };

  function handleLogoutVip() {
    localStorage.removeItem('simon_academia_auth');
    navigate('/');
  }

  return (
    <div className="h-dvh w-screen overflow-hidden flex flex-col bg-gradient-to-b from-sky-50/70 via-white to-sky-50/50 text-slate-900 select-none font-sans">
      {/* Modal Sekundo / AutoCAD Interativo de Inspeção e Confirmação */}
      <SimonActionGate
        action={pendingAction}
        onConfirm={confirmAction}
        onCancel={cancelAction}
        directMode={directMode}
        onToggleDirectMode={setDirectMode}
      />

      {/* ── 1. RIBBON SUPERIOR DA ACADEMIA SIMON (TEMA CRISTAL GLACIAL DO CERTIFICADO) ── */}
      <header className="relative flex-shrink-0 px-3 sm:px-5 py-2.5 bg-white/95 border-b-2 border-sky-200 flex flex-wrap items-center justify-between gap-2 z-40 shadow-2xs overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url(${certBg})` }}
        />

        <div className="relative z-10 flex items-center gap-3 min-w-0">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 border border-sky-200 text-xs font-extrabold text-[#1a3a5c] hover:text-[#0284c7] transition-colors shadow-2xs"
          >
            <Home className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Início B2B</span>
          </Link>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-extrabold uppercase bg-sky-100 text-[#0369a1] border border-sky-300">
                ACADEMIA SIMON &bull; AUTOCAD WORKSPACE
              </span>
              <span className="hidden md:inline text-[11px] font-mono font-bold text-slate-600">
                Progresso em {cursoAtual.nomeCurto}: {progressoCurso.count}/{progressoCurso.total} (
                {progressoCurso.percentual}%)
              </span>
            </div>
            <h1 className="text-xs sm:text-sm font-black text-[#1a3a5c] truncate mt-0.5">
              Central Interativa de Treinamentos, Módulos e Aulas (Zero-Roll-Down)
            </h1>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-2 flex-wrap">
          <SimonDirectModeToggle
            directMode={directMode}
            setDirectMode={setDirectMode}
          />

          <Link
            to="/certificados"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-800 text-xs font-extrabold transition-all shadow-2xs"
          >
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Certificados</span>
          </Link>

          <button
            type="button"
            onClick={() => abrirNoWorkbench(aulaAtiva, 'bancada')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0369a1] hover:bg-[#0284c7] text-white text-xs font-black uppercase tracking-wider shadow-md shadow-sky-600/20 cursor-pointer"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Abrir Aula na Bancada Completa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={handleLogoutVip}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white hover:bg-red-50 border border-sky-200 hover:border-red-300 text-slate-600 hover:text-red-700 text-xs font-bold transition-colors cursor-pointer"
            title="Bloquear novamente o acesso SIMON-VIP e voltar ao início"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sair VIP</span>
          </button>
        </div>
      </header>

      {/* ── 2. CORPO AUTOCAD EM 3 PAINÉIS (TEMA CLARO PRANCHETA DO CERTIFICADO) ── */}
      <div className="flex-1 min-h-0 flex flex-col lg:flex-row overflow-hidden bg-white">
        {/* ════════════════════════════════════════════════════════════════════
            PAINEL 1 (ESQUERDA): PASSO 1 (TREINAMENTOS) + PASSO 2 (MÓDULOS / CAMADAS)
        ════════════════════════════════════════════════════════════════════ */}
        <aside className="w-full lg:w-[330px] xl:w-[360px] flex-shrink-0 bg-sky-50/70 border-b lg:border-b-0 lg:border-r-2 border-sky-200 p-3 flex flex-col gap-3 overflow-y-auto">
          {/* PASSO 1: Seletor dos Treinamentos */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#0369a1]">
                PASSO 1 &bull; CLIQUE NO TREINAMENTO ({TODOS_CURSOS.length})
              </span>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {TODOS_CURSOS.map((c, idx) => {
                const ativo = idx === cursoIdx;
                const totCert = c.todasAulas.filter((a) => String(a.id) !== 'apresentacao').length;
                const prog = getProgressoCurso(c.id, totCert);

                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => selecionarCurso(idx)}
                    className={`w-full text-left p-2.5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between gap-2 ${
                      ativo
                        ? 'bg-white border-[#0284c7] text-[#1a3a5c] shadow-sm ring-2 ring-sky-300/40'
                        : 'bg-white/80 hover:bg-white border-sky-200 text-slate-700 hover:border-sky-300'
                    }`}
                  >
                    <div className="min-w-0">
                      <span className="text-[9px] font-mono font-black text-[#0369a1] block">
                        [{c.codigoCad}]
                      </span>
                      <span className="text-xs font-extrabold truncate block text-[#1a3a5c]">
                        {c.nomeCurto}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded-md bg-sky-50 text-[#0369a1] border border-sky-200 flex-shrink-0">
                      {c.todasAulas.length} aulas &bull; {prog.percentual}%
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* PASSO 2: Alternador Trilha Prática do Simon (Física -> Instalação) vs Ordem de Módulos */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-emerald-800">
                PASSO 2 &bull; MODO &amp; MÓDULOS DO CURSO
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-white border border-sky-200 mb-2 shadow-2xs">
              <button
                type="button"
                onClick={() => {
                  setModoTrilha('pratica');
                  setGrupoIdx(0);
                }}
                className={`py-1.5 px-2 rounded-lg text-[11px] font-extrabold flex items-center justify-center gap-1 cursor-pointer transition-colors ${
                  modoTrilha === 'pratica'
                    ? 'bg-[#0369a1] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-[#1a3a5c] hover:bg-sky-50'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Física ➔ Prática</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setModoTrilha('original');
                  setGrupoIdx(0);
                }}
                className={`py-1.5 px-2 rounded-lg text-[11px] font-extrabold flex items-center justify-center gap-1 cursor-pointer transition-colors ${
                  modoTrilha === 'original'
                    ? 'bg-[#0369a1] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-[#1a3a5c] hover:bg-sky-50'
                }`}
              >
                <ListOrdered className="w-3.5 h-3.5" />
                <span>Por Módulo</span>
              </button>
            </div>

            {/* Botões das Camadas / Módulos do Curso */}
            <div className="space-y-1.5">
              {gruposCurso.map((g, idx) => {
                const ativo = idx === grupoIdx;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => selecionarGrupo(idx)}
                    className={`w-full text-left p-2.5 rounded-xl border-2 transition-all cursor-pointer ${
                      ativo
                        ? 'bg-emerald-50/90 border-emerald-500 text-[#1a3a5c] shadow-2xs'
                        : 'bg-white/80 hover:bg-white border-sky-200 text-slate-700 hover:border-sky-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="font-black text-emerald-700">{g.codigo}</span>
                      <span className="text-slate-500 font-bold">{g.aulas?.length || 0} aulas</span>
                    </div>
                    <p className="text-xs font-extrabold mt-0.5 leading-snug line-clamp-2 text-[#1a3a5c]">
                      {g.titulo}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* ════════════════════════════════════════════════════════════════════
            PAINEL 2 (CENTRO): PASSO 3 (BOTÕES DE AULAS DO MÓDULO ATIVO)
        ════════════════════════════════════════════════════════════════════ */}
        <div className="w-full lg:w-[310px] xl:w-[340px] flex-shrink-0 bg-sky-50/35 border-b lg:border-b-0 lg:border-r-2 border-sky-200 p-3 flex flex-col gap-2 overflow-y-auto">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#1a3a5c]">
              PASSO 3 &bull; CLIQUE NA AULA ({aulasDoGrupo.length})
            </span>
            <span className="text-[10px] font-mono font-bold text-[#0369a1]">
              {grupoAtual?.codigo}
            </span>
          </div>

          <div className="space-y-2">
            {aulasDoGrupo.map((a) => {
              const ativa = a.idStr === aulaAtiva?.idStr;
              const concluida = isAulaConcluida(cursoAtual.id, a.id);

              return (
                <div
                  key={a.idStr}
                  className={`rounded-xl border-2 p-2.5 transition-all ${
                    ativa
                      ? 'bg-white border-[#0284c7] shadow-md ring-2 ring-sky-300/40'
                      : concluida
                      ? 'bg-emerald-50/60 border-emerald-300'
                      : 'bg-white/90 hover:bg-white border-sky-200 hover:border-sky-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => selecionarAula(a)}
                    className="w-full text-left cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-mono font-black text-[#0369a1]">
                        AULA [{String(a.id).toUpperCase()}]
                      </span>
                      <div className="flex items-center gap-1">
                        {concluida && (
                          <CheckCircle2
                            className="w-3.5 h-3.5 text-emerald-600"
                            title="Concluída"
                          />
                        )}
                        {a.possuiConversa && (
                          <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">
                            ☕ Papo de Balcão
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xs font-extrabold text-[#1a3a5c] leading-snug">
                      {a.titulo.replace(/^Aula \d+[\s\-:]+/i, '')}
                    </h3>
                  </button>

                  {/* Botões de Ação Direta na Aula */}
                  <div className="mt-2 pt-2 border-t border-sky-100 flex flex-wrap gap-1.5">
                    <button
                      type="button"
                      onClick={() => abrirNoWorkbench(a, 'bancada')}
                      className="flex-1 py-1 px-2 rounded-lg bg-[#0369a1] hover:bg-[#0284c7] text-white font-extrabold text-[10px] flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
                    >
                      <Wrench className="w-3 h-3" />
                      <span>Abrir Bancada</span>
                    </button>
                    {a.possuiConversa && (
                      <button
                        type="button"
                        onClick={() => abrirNoWorkbench(a, 'conversa')}
                        className="flex-1 py-1 px-2 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 font-extrabold text-[10px] flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Coffee className="w-3 h-3" />
                        <span>Papo</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            PAINEL 3 (DIREITA): PASSO 4 (INSPECIONADOR / PREVIEW INTERATIVO DA AULA)
        ════════════════════════════════════════════════════════════════════ */}
        <main className="flex-1 min-w-0 h-full flex flex-col overflow-hidden bg-gradient-to-b from-sky-50/40 via-white to-sky-50/30">
          {aulaAtiva && (
            <>
              {/* Barra Superior do Preview da Aula */}
              <div className="flex-shrink-0 p-3.5 bg-white border-b border-sky-200 flex flex-wrap items-center justify-between gap-2">
                <div className="min-w-0">
                  <span className="text-[10px] font-mono font-black uppercase text-[#0369a1] block">
                    PASSO 4 &bull; INTERAJA COM A AULA SELECIONADA ({cursoAtual.nomeCurto} &bull; AULA{' '}
                    {String(aulaAtiva.id).toUpperCase()})
                  </span>
                  <h2 className="text-sm md:text-base font-black text-[#1a3a5c] truncate">
                    {aulaAtiva.titulo}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => abrirNoWorkbench(aulaAtiva, 'bancada')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0369a1] hover:bg-[#0284c7] text-white font-black text-xs uppercase tracking-wider shadow-md shadow-sky-600/20 cursor-pointer flex-shrink-0"
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Abrir em Tela Cheia no CAD Workbench</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Botões de Função da Aula (Sem Rolar a Página) */}
              <div className="flex-shrink-0 px-3.5 py-2 bg-sky-50/80 border-b border-sky-200 flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    requestAction({
                      isAlreadyActive: funcaoPreview === 'resumo',
                      code: 'PRV-SIMON',
                      category: 'PASSO 4 · Lente de Inspeção da Aula',
                      title: 'Visão Prática & Filosofia de Oficina do Simon',
                      description:
                        'Exibe a fala direta do Professor Simon, a filosofia de bancada, grandezas físicas e o mapa de blocos técnicos desta aula.',
                      highlights: [
                        'Conselho Prático de Campo do Professor Simon',
                        'Grandezas Físicas e Parâmetros de Medição',
                        'Atalhos para os Blocos Técnicos da Aula',
                      ],
                      confirmLabel: 'Exibir Visão Prática',
                      onConfirm: () => setFuncaoPreview('resumo'),
                    })
                  }
                  className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer flex items-center gap-1.5 ${
                    funcaoPreview === 'resumo'
                      ? 'bg-[#0369a1] text-white border-[#1a3a5c] shadow-xs'
                      : 'bg-white text-[#1a3a5c] border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>Visão Prática do Simon</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    requestAction({
                      isAlreadyActive: funcaoPreview === 'blocos',
                      code: 'PRV-BLC',
                      category: 'PASSO 4 · Lente de Inspeção da Aula',
                      title: `Botões de Conteúdo (${dadosCadAula.nos.length} Blocos Técnicos)`,
                      description:
                        'Lista todos os blocos técnicos e sub-camadas que compõem esta aula para abertura direta na Bancada Prática ou no Raio-X.',
                      highlights: dadosCadAula.nos
                        .slice(0, 4)
                        .map((n) => `${n.codigoCad}: ${n.titulo}`),
                      confirmLabel: 'Exibir Blocos Técnicos',
                      onConfirm: () => setFuncaoPreview('blocos'),
                    })
                  }
                  className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer flex items-center gap-1.5 ${
                    funcaoPreview === 'blocos'
                      ? 'bg-[#0369a1] text-white border-[#1a3a5c] shadow-xs'
                      : 'bg-white text-[#1a3a5c] border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Botões de Conteúdo ({dadosCadAula.nos.length} Blocos)</span>
                </button>

                {aulaAtiva.videoUrl && (
                  <button
                    type="button"
                    onClick={() =>
                      requestAction({
                        isAlreadyActive: funcaoPreview === 'video',
                        code: 'PRV-VID',
                        category: 'PASSO 4 · Multimídia da Aula',
                        title: `Assistir Vídeo da Aula: ${aulaAtiva.titulo}`,
                        description:
                          'Carrega o player de vídeo técnico diretamente nesta prancheta sem sair do catálogo.',
                        highlights: ['Reprodução de Vídeo Integrada'],
                        confirmLabel: 'Confirmar e Abrir Vídeo',
                        badgeColor: 'amber',
                        onConfirm: () => setFuncaoPreview('video'),
                      })
                    }
                    className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer flex items-center gap-1.5 ${
                      funcaoPreview === 'video'
                        ? 'bg-[#0369a1] text-white border-[#1a3a5c] shadow-xs'
                        : 'bg-white text-[#1a3a5c] border-sky-200 hover:bg-sky-50'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Assistir Vídeo Aqui</span>
                  </button>
                )}

                {aulaAtiva.slides?.length > 0 && (
                  <button
                    type="button"
                    onClick={() =>
                      requestAction({
                        isAlreadyActive: funcaoPreview === 'slides',
                        code: 'PRV-SLD',
                        category: 'PASSO 4 · Pranchas Visuais',
                        title: `Inspecionar Slides (${aulaAtiva.slides.length} Lâminas)`,
                        description:
                          'Abre o visualizador de lâminas e diagramas técnicos desta aula.',
                        highlights: [`Total de ${aulaAtiva.slides.length} slides técnicos`],
                        confirmLabel: 'Confirmar e Ver Slides',
                        badgeColor: 'indigo',
                        onConfirm: () => setFuncaoPreview('slides'),
                      })
                    }
                    className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer flex items-center gap-1.5 ${
                      funcaoPreview === 'slides'
                        ? 'bg-[#0369a1] text-white border-[#1a3a5c] shadow-xs'
                        : 'bg-white text-[#1a3a5c] border-sky-200 hover:bg-sky-50'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Slides ({aulaAtiva.slides.length})</span>
                  </button>
                )}

                {aulaAtiva.possuiConversa && (
                  <button
                    type="button"
                    onClick={() => abrirNoWorkbench(aulaAtiva, 'conversa')}
                    className="px-3 py-1.5 rounded-lg text-xs font-extrabold bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-900 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Coffee className="w-3.5 h-3.5" />
                    <span>Iniciar Papo de Balcão →</span>
                  </button>
                )}
              </div>

              {/* Conteúdo da Função Ativa na Tela */}
              <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4">
                {funcaoPreview === 'resumo' && (
                  <div className="space-y-4">
                    {/* Card Filosofia Prática do Simon para a Aula (Tema Claro Certificado) */}
                    <div className="rounded-2xl border-2 border-sky-200 bg-white p-5 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-extrabold uppercase bg-sky-100 text-[#0369a1] border border-sky-300">
                          {dadosCadAula.nos[0]?.notaSimon?.tag || 'FÍSICA & PRÁTICA DE BANCADA'}
                        </span>
                        <span className="text-xs font-extrabold text-[#1a3a5c]">
                          Papo Sincero do Professor Simon
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 font-medium leading-relaxed mb-3">
                        “{dadosCadAula.nos[0]?.notaSimon?.falaSimon}”
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        <div className="rounded-xl bg-amber-50/90 border border-amber-200 p-3">
                          <span className="block text-[10px] font-black uppercase text-amber-800 mb-1">
                            Filosofia de Oficina
                          </span>
                          <p className="text-xs text-slate-700 font-medium">
                            {dadosCadAula.nos[0]?.notaSimon?.filosofia}
                          </p>
                        </div>
                        <div className="rounded-xl bg-emerald-50/90 border border-emerald-200 p-3">
                          <span className="block text-[10px] font-black uppercase text-emerald-800 mb-1">
                            Ação Prática na Ferramenta
                          </span>
                          <p className="text-xs text-slate-700 font-medium">
                            {dadosCadAula.nos[0]?.notaSimon?.acaoPratica}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Grandezas Físicas da Aula */}
                    {dadosCadAula.grandezasGerais.length > 0 && (
                      <div className="rounded-2xl border-2 border-sky-200 bg-white p-4 shadow-2xs">
                        <span className="block text-[10px] font-mono font-black uppercase tracking-widest text-[#0369a1] mb-2">
                          GRANDEZAS E PARÂMETROS FÍSICOS DESTA AULA:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {dadosCadAula.grandezasGerais.map((g, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200 font-mono text-xs font-extrabold text-[#1a3a5c]"
                            >
                              {g}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Matriz dos Botões de Tópicos que compõem a aula */}
                    <div className="rounded-2xl border-2 border-sky-200 bg-white p-4 shadow-2xs">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono font-black uppercase text-[#1a3a5c]">
                          BOTÕES DE BLOCOS TÉCNICOS DESTA AULA ({dadosCadAula.nos.length}):
                        </span>
                        <span className="text-[11px] text-slate-500 font-semibold">
                          Clique em qualquer bloco para inspecionar e abrir na Workstation
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {dadosCadAula.nos.map((no) => (
                          <button
                            key={no.id}
                            type="button"
                            onClick={() => abrirNoWorkbench(aulaAtiva, 'bancada')}
                            className="p-3 rounded-xl bg-sky-50/70 hover:bg-sky-100/80 border border-sky-200 hover:border-[#0284c7] text-left transition-all cursor-pointer flex items-center justify-between gap-2 group"
                          >
                            <div className="min-w-0">
                              <span className="text-[10px] font-mono font-black text-[#0369a1] block">
                                {no.codigoCad}
                              </span>
                              <span className="text-xs font-extrabold text-[#1a3a5c] truncate block">
                                {no.titulo}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-[#0284c7] group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {funcaoPreview === 'blocos' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {dadosCadAula.nos.map((no) => (
                      <div
                        key={no.id}
                        className="rounded-xl border-2 border-sky-200 bg-white p-4 flex flex-col justify-between gap-3 shadow-xs"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-mono font-black text-[#0369a1]">
                              {no.codigoCad} &bull; {no.subNos.length} Sub-camada(s)
                            </span>
                            <span className="text-[10px] font-extrabold text-emerald-700">
                              {no.notaSimon?.tag}
                            </span>
                          </div>
                          <h3 className="text-sm font-extrabold text-[#1a3a5c] mb-1.5">
                            {no.titulo}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed mb-2">
                            “{no.notaSimon?.falaSimon}”
                          </p>
                        </div>
                        <div className="flex items-center gap-2 pt-2 border-t border-sky-100">
                          <button
                            type="button"
                            onClick={() => abrirNoWorkbench(aulaAtiva, 'bancada')}
                            className="flex-1 py-1.5 px-3 rounded-lg bg-[#0369a1] hover:bg-[#0284c7] text-white font-black text-xs cursor-pointer"
                          >
                            Ver na Bancada Prática
                          </button>
                          <button
                            type="button"
                            onClick={() => abrirNoWorkbench(aulaAtiva, 'raiox')}
                            className="flex-1 py-1.5 px-3 rounded-lg bg-sky-50 hover:bg-sky-100 text-[#1a3a5c] border border-sky-200 font-bold text-xs cursor-pointer"
                          >
                            Ver 100% Detalhado
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {funcaoPreview === 'video' && aulaAtiva.videoUrl && (
                  <div className="max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden border-2 border-sky-300 bg-black shadow-xl">
                    <iframe
                      src={aulaAtiva.videoUrl}
                      title={`Vídeo: ${aulaAtiva.titulo}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                )}

                {funcaoPreview === 'slides' && aulaAtiva.slides?.length > 0 && (
                  <div className="flex flex-col items-center gap-3">
                    <img
                      src={aulaAtiva.slides[slidePreviewIdx]}
                      alt={`Slide ${slidePreviewIdx + 1}`}
                      className="max-h-[calc(100dvh-260px)] w-auto object-contain rounded-xl border-2 border-sky-200 shadow-lg bg-white"
                    />
                    <div className="flex flex-wrap justify-center gap-1">
                      {aulaAtiva.slides.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setSlidePreviewIdx(i)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold cursor-pointer border ${
                            i === slidePreviewIdx
                              ? 'bg-[#0369a1] text-white border-[#1a3a5c]'
                              : 'bg-white text-slate-600 border-sky-200 hover:bg-sky-50'
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
