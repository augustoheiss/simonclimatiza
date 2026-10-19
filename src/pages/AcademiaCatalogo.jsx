// src/pages/AcademiaCatalogo.jsx
// Estação "AutoCAD" de Treinamentos, Módulos e Aulas da Academia Simon (100dvh Zero-Scroll).
// Acessada após validação da senha SIMON-VIP em ProtecaoAcademia.jsx.
// Permite interagir com os 5 treinamentos, camadas/módulos (Física -> Prática ou Ordem de Módulos),
// aulas, vídeos, slides, blocos técnicos e Papo de Balcão sem rolar a página.

import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  Flame,
  Wrench,
  Coffee,
  Play,
  Layers,
  BookOpen,
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
import { MANIFESTO_PEDAGOGICO_SIMON } from '../data/bancada/notasDeBancada';
import useProgress from '../hooks/useProgress';

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
    setCursoIdx(idx);
    setGrupoIdx(0);
    setAulaSelecionadaId(null);
    setSlidePreviewIdx(0);
  };

  const selecionarGrupo = (idx) => {
    setGrupoIdx(idx);
    setAulaSelecionadaId(null);
    setSlidePreviewIdx(0);
  };

  const selecionarAula = (aula, funcaoOpcional) => {
    setAulaSelecionadaId(aula.idStr);
    setSlidePreviewIdx(0);
    if (funcaoOpcional) setFuncaoPreview(funcaoOpcional);
  };

  const abrirNoWorkbench = (aula, view = 'bancada') => {
    navigate(`${cursoAtual.rotaUrl}?aula=${encodeURIComponent(aula.id)}&view=${view}`);
  };

  function handleLogoutVip() {
    localStorage.removeItem('simon_academia_auth');
    navigate('/');
  }

  return (
    <div className="h-dvh w-screen overflow-hidden flex flex-col bg-slate-950 text-slate-100 select-none font-sans">
      {/* ── 1. RIBBON SUPERIOR DA ACADEMIA SIMON (ESTILO AUTOCAD) ── */}
      <header className="flex-shrink-0 px-3 sm:px-5 py-2.5 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 z-40">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-sky-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-sky-400" />
            <span>Início B2B</span>
          </Link>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                ACADEMIA SIMON · AUTOCAD WORKSPACE
              </span>
              <span className="hidden md:inline text-[11px] font-mono text-slate-400">
                Progresso em {cursoAtual.nomeCurto}: {progressoCurso.count}/{progressoCurso.total} (
                {progressoCurso.percentual}%)
              </span>
            </div>
            <h1 className="text-xs sm:text-sm font-extrabold text-white truncate mt-0.5">
              Central Interativa de Treinamentos, Módulos e Aulas (Zero-Scroll)
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Link
            to="/certificados"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/30 text-amber-300 text-xs font-extrabold transition-all"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Certificados</span>
          </Link>

          <button
            type="button"
            onClick={() => abrirNoWorkbench(aulaAtiva, 'bancada')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Abrir Aula na Bancada Completa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={handleLogoutVip}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-950 hover:bg-red-950/50 border border-slate-800 hover:border-red-500/40 text-slate-400 hover:text-red-300 text-xs font-bold transition-colors cursor-pointer"
            title="Bloquear novamente o acesso SIMON-VIP e voltar ao início"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sair VIP</span>
          </button>
        </div>
      </header>

      {/* ── 2. CORPO AUTOCAD EM 3 PAINÉIS (TREINAMENTOS & MÓDULOS | AULAS | BANCADA DE INSPEÇÃO) ── */}
      <div className="flex-1 min-h-0 flex flex-col lg:flex-row overflow-hidden bg-[#090f1d]">
        {/* ════════════════════════════════════════════════════════════════════
            PAINEL 1 (ESQUERDA): PASSO 1 (TREINAMENTOS) + PASSO 2 (MÓDULOS / CAMADAS)
        ════════════════════════════════════════════════════════════════════ */}
        <aside className="w-full lg:w-[330px] xl:w-[360px] flex-shrink-0 bg-slate-950 border-b lg:border-b-0 lg:border-r border-slate-800 p-3 flex flex-col gap-3 overflow-y-auto">
          {/* PASSO 1: Seletor dos 5 Treinamentos */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-sky-400">
                PASSO 1 · CLIQUE NO TREINAMENTO ({TODOS_CURSOS.length})
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
                    className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                      ativo
                        ? 'bg-sky-500/20 border-sky-400 text-white shadow-sm'
                        : 'bg-slate-900/70 hover:bg-slate-900 border-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="min-w-0">
                      <span className="text-[9px] font-mono font-black text-sky-400 block">
                        [{c.codigoCad}]
                      </span>
                      <span className="text-xs font-extrabold truncate block">{c.nomeCurto}</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-950 text-emerald-400 border border-slate-800 flex-shrink-0">
                      {c.todasAulas.length} aulas · {prog.percentual}%
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* PASSO 2: Alternador Trilha Prática do Simon (Física -> Instalação) vs Ordem de Módulos */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-emerald-400">
                PASSO 2 · MODO &amp; MÓDULOS DO CURSO
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1 p-1 rounded-lg bg-slate-900 border border-slate-800 mb-2">
              <button
                type="button"
                onClick={() => {
                  setModoTrilha('pratica');
                  setGrupoIdx(0);
                }}
                className={`py-1.5 px-2 rounded text-[11px] font-extrabold flex items-center justify-center gap-1 cursor-pointer ${
                  modoTrilha === 'pratica'
                    ? 'bg-emerald-500 text-slate-950'
                    : 'text-slate-400 hover:text-white'
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
                className={`py-1.5 px-2 rounded text-[11px] font-extrabold flex items-center justify-center gap-1 cursor-pointer ${
                  modoTrilha === 'original'
                    ? 'bg-sky-500 text-slate-950'
                    : 'text-slate-400 hover:text-white'
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
                    className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer ${
                      ativo
                        ? 'bg-emerald-500/15 border-emerald-400 text-white'
                        : 'bg-slate-900/50 hover:bg-slate-900 border-slate-800/80 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="font-black text-emerald-400">{g.codigo}</span>
                      <span className="text-slate-400">{g.aulas?.length || 0} aulas</span>
                    </div>
                    <p className="text-xs font-bold mt-0.5 leading-snug line-clamp-2">{g.titulo}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* ════════════════════════════════════════════════════════════════════
            PAINEL 2 (CENTRO): PASSO 3 (BOTÕES DE AULAS DO MÓDULO ATIVO)
        ════════════════════════════════════════════════════════════════════ */}
        <div className="w-full lg:w-[310px] xl:w-[340px] flex-shrink-0 bg-slate-900/60 border-b lg:border-b-0 lg:border-r border-slate-800 p-3 flex flex-col gap-2 overflow-y-auto">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-amber-400">
              PASSO 3 · CLIQUE NA AULA ({aulasDoGrupo.length})
            </span>
            <span className="text-[10px] font-mono text-slate-500">{grupoAtual?.codigo}</span>
          </div>

          <div className="space-y-2">
            {aulasDoGrupo.map((a) => {
              const ativa = a.idStr === aulaAtiva?.idStr;
              const concluida = isAulaConcluida(cursoAtual.id, a.id);

              return (
                <div
                  key={a.idStr}
                  className={`rounded-xl border p-2.5 transition-all ${
                    ativa
                      ? 'bg-sky-500/20 border-sky-400 shadow-md'
                      : concluida
                      ? 'bg-emerald-950/20 border-emerald-500/40'
                      : 'bg-slate-950/80 hover:bg-slate-900 border-slate-800'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => selecionarAula(a)}
                    className="w-full text-left cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-mono font-black text-sky-400">
                        AULA [{String(a.id).toUpperCase()}]
                      </span>
                      <div className="flex items-center gap-1">
                        {concluida && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" title="Concluída" />
                        )}
                        {a.possuiConversa && (
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                            ☕ Papo de Balcão
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xs font-extrabold text-white leading-snug">
                      {a.titulo.replace(/^Aula \d+[\s\-:]+/i, '')}
                    </h3>
                  </button>

                  {/* Botões de Ação Direta na Aula */}
                  <div className="mt-2 pt-2 border-t border-slate-800/80 flex flex-wrap gap-1">
                    <button
                      type="button"
                      onClick={() => abrirNoWorkbench(a, 'bancada')}
                      className="flex-1 py-1 px-2 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-[10px] flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Wrench className="w-3 h-3" />
                      <span>Abrir Bancada</span>
                    </button>
                    {a.possuiConversa && (
                      <button
                        type="button"
                        onClick={() => abrirNoWorkbench(a, 'conversa')}
                        className="flex-1 py-1 px-2 rounded bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[10px] flex items-center justify-center gap-1 cursor-pointer"
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
        <main className="flex-1 min-w-0 h-full flex flex-col overflow-hidden bg-[#070c17]">
          {aulaAtiva && (
            <>
              {/* Barra Superior do Preview da Aula */}
              <div className="flex-shrink-0 p-3.5 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div className="min-w-0">
                  <span className="text-[10px] font-mono font-black uppercase text-sky-400 block">
                    PASSO 4 · INTERAJA COM A AULA SELECIONADA ({cursoAtual.nomeCurto} · AULA{' '}
                    {String(aulaAtiva.id).toUpperCase()})
                  </span>
                  <h2 className="text-sm md:text-base font-black text-white truncate">
                    {aulaAtiva.titulo}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => abrirNoWorkbench(aulaAtiva, 'bancada')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 cursor-pointer flex-shrink-0"
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Abrir em Tela Cheia no CAD Workbench</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Botões de Função da Aula (Sem Rolar a Página) */}
              <div className="flex-shrink-0 px-3.5 py-2 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setFuncaoPreview('resumo')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer flex items-center gap-1.5 ${
                    funcaoPreview === 'resumo'
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>Visão Prática do Simon</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFuncaoPreview('blocos')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer flex items-center gap-1.5 ${
                    funcaoPreview === 'blocos'
                      ? 'bg-sky-500 text-slate-950 border-sky-400'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Botões de Conteúdo ({dadosCadAula.nos.length} Blocos)</span>
                </button>

                {aulaAtiva.videoUrl && (
                  <button
                    type="button"
                    onClick={() => setFuncaoPreview('video')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer flex items-center gap-1.5 ${
                      funcaoPreview === 'video'
                        ? 'bg-amber-400 text-slate-950 border-amber-300'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Assistir Vídeo Aqui</span>
                  </button>
                )}

                {aulaAtiva.slides?.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setFuncaoPreview('slides')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer flex items-center gap-1.5 ${
                      funcaoPreview === 'slides'
                        ? 'bg-indigo-400 text-slate-950 border-indigo-300'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
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
                    className="px-3 py-1.5 rounded-lg text-xs font-extrabold bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 transition-all cursor-pointer flex items-center gap-1.5"
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
                    {/* Card Filosofia Prática do Simon para a Aula */}
                    <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          {dadosCadAula.nos[0]?.notaSimon?.tag || 'FÍSICA & PRÁTICA DE BANCADA'}
                        </span>
                        <span className="text-xs font-bold text-sky-400">
                          Papo Sincero do Professor Simon
                        </span>
                      </div>
                      <p className="text-sm text-slate-200 leading-relaxed mb-3">
                        “{dadosCadAula.nos[0]?.notaSimon?.falaSimon}”
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        <div className="rounded-xl bg-amber-500/10 border border-amber-500/30 p-3">
                          <span className="block text-[10px] font-black uppercase text-amber-400 mb-1">
                            Filosofia de Oficina
                          </span>
                          <p className="text-xs text-amber-100">
                            {dadosCadAula.nos[0]?.notaSimon?.filosofia}
                          </p>
                        </div>
                        <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3">
                          <span className="block text-[10px] font-black uppercase text-emerald-400 mb-1">
                            Ação Prática na Ferramenta
                          </span>
                          <p className="text-xs text-emerald-100">
                            {dadosCadAula.nos[0]?.notaSimon?.acaoPratica}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Grandezas Físicas da Aula */}
                    {dadosCadAula.grandezasGerais.length > 0 && (
                      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                        <span className="block text-[10px] font-mono font-black uppercase tracking-widest text-sky-400 mb-2">
                          GRANDEZAS E PARÂMETROS FÍSICOS DESTA AULA:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {dadosCadAula.grandezasGerais.map((g, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs font-extrabold text-emerald-400"
                            >
                              {g}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Matriz dos Botões de Tópicos que compõem a aula */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono font-black uppercase text-white">
                          BOTÕES DE BLOCOS TÉCNICOS DESTA AULA ({dadosCadAula.nos.length}):
                        </span>
                        <span className="text-[11px] text-slate-400">
                          Clique em qualquer bloco para abrir na Workstation
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {dadosCadAula.nos.map((no) => (
                          <button
                            key={no.id}
                            type="button"
                            onClick={() => abrirNoWorkbench(aulaAtiva, 'bancada')}
                            className="p-3 rounded-xl bg-slate-950 hover:bg-sky-950/40 border border-slate-800 hover:border-sky-500/50 text-left transition-all cursor-pointer flex items-center justify-between gap-2 group"
                          >
                            <div className="min-w-0">
                              <span className="text-[10px] font-mono font-black text-sky-400 block">
                                {no.codigoCad}
                              </span>
                              <span className="text-xs font-bold text-slate-200 group-hover:text-white truncate block">
                                {no.titulo}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 flex-shrink-0" />
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
                        className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 flex flex-col justify-between gap-3"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-mono font-black text-sky-400">
                              {no.codigoCad} · {no.subNos.length} Sub-camada(s)
                            </span>
                            <span className="text-[10px] font-bold text-emerald-400">
                              {no.notaSimon?.tag}
                            </span>
                          </div>
                          <h3 className="text-sm font-extrabold text-white mb-1.5">{no.titulo}</h3>
                          <p className="text-xs text-slate-300 leading-relaxed mb-2">
                            “{no.notaSimon?.falaSimon}”
                          </p>
                        </div>
                        <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
                          <button
                            type="button"
                            onClick={() => abrirNoWorkbench(aulaAtiva, 'bancada')}
                            className="flex-1 py-1.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs cursor-pointer"
                          >
                            Ver na Bancada Prática
                          </button>
                          <button
                            type="button"
                            onClick={() => abrirNoWorkbench(aulaAtiva, 'raiox')}
                            className="flex-1 py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs cursor-pointer"
                          >
                            Ver 100% Detalhado
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {funcaoPreview === 'video' && aulaAtiva.videoUrl && (
                  <div className="max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden border border-sky-500/40 bg-black shadow-2xl">
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
                      className="max-h-[calc(100dvh-260px)] w-auto object-contain rounded-xl border border-slate-700 shadow-xl"
                    />
                    <div className="flex flex-wrap justify-center gap-1">
                      {aulaAtiva.slides.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setSlidePreviewIdx(i)}
                          className={`px-2 py-0.5 rounded text-xs font-mono font-bold cursor-pointer ${
                            i === slidePreviewIdx
                              ? 'bg-indigo-400 text-slate-950'
                              : 'bg-slate-800 text-slate-400 hover:text-white'
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
