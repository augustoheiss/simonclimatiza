// src/pages/AcademiaCatalogo.jsx
// Hub de Projetos CAD da Academia Simon (Zero-Scroll 100dvh).
// Substitui a listagem de rolagem vertical por um Painel Seletor de Treinamentos onde
// cada botão abre diretamente o curso, o módulo, a aula, o vídeo, o papo de balcão ou as tabelas.

import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  Flame,
  Wrench,
  Coffee,
  Play,
  Layers,
  Table2,
  BookOpen,
  Award,
  CheckCircle2,
  ArrowRight,
  Home,
  Cpu,
  ListOrdered,
} from 'lucide-react';
import { listarTodosCursosNormalizados } from '../utils/courseAdapter';
import { MANIFESTO_PEDAGOGICO_SIMON } from '../data/bancada/notasDeBancada';
import useProgress from '../hooks/useProgress';

const CURSOS_CAD = listarTodosCursosNormalizados();

export default function AcademiaCatalogo() {
  const navigate = useNavigate();
  const { isAulaConcluida, getProgressoCurso } = useProgress();

  const [cursoSelecionadoId, setCursoSelecionadoId] = useState(CURSOS_CAD[0].id);
  const [modoTrilha, setModoTrilha] = useState('pratica'); // 'pratica' | 'original'
  const [indiceGrupoAtivo, setIndiceGrupoAtivo] = useState(0);

  const cursoAtivo = useMemo(
    () => CURSOS_CAD.find((c) => c.id === cursoSelecionadoId) || CURSOS_CAD[0],
    [cursoSelecionadoId]
  );

  const grupos = useMemo(
    () =>
      modoTrilha === 'pratica' && cursoAtivo.trilhasPraticas?.length > 0
        ? cursoAtivo.trilhasPraticas
        : cursoAtivo.modulosOriginais || [],
    [cursoAtivo, modoTrilha]
  );

  const grupoAtivo = grupos[indiceGrupoAtivo] || grupos[0] || null;

  const handleSelectCurso = (id) => {
    setCursoSelecionadoId(id);
    setIndiceGrupoAtivo(0);
  };

  const abrirAulaNoWorkbench = (aula, view = 'bancada') => {
    navigate(`${cursoAtivo.rotaUrl}?aula=${encodeURIComponent(aula.id)}&view=${view}`);
  };

  const totalCertificaveis = cursoAtivo.todasAulas.filter(
    (a) => String(a.id) !== 'apresentacao'
  ).length;
  const progressoCurso = getProgressoCurso(cursoAtivo.id, totalCertificaveis);

  return (
    <div className="h-dvh w-screen overflow-hidden flex flex-col bg-slate-950 text-slate-100 select-none font-sans">
      {/* ── RIBBON SUPERIOR DO HUB ACADEMIA CAD ── */}
      <header className="flex-shrink-0 px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-sky-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-sky-400" />
            <span>Painel Principal</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase bg-sky-500/20 text-sky-400 border border-sky-500/30">
              ACADEMIA SIMON · CAD LAUNCHER
            </span>
            <h1 className="text-sm md:text-base font-extrabold text-white hidden sm:inline">
              Central Interativa de Treinamentos (Zero-Scroll)
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/certificados"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/30 text-amber-300 text-xs font-extrabold transition-all"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Certificados</span>
          </Link>

          <button
            type="button"
            onClick={() => navigate(cursoAtivo.rotaUrl)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Abrir Workstation Completa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ── CORPO DO LAUNCHER (COLUNA DE CURSOS + MATRIZ DE MÓDULOS E AULAS) ── */}
      <div className="flex-1 min-h-0 flex flex-col md:flex-row overflow-hidden">
        {/* Coluna Esquerda: Botões dos 5 Treinamentos Oficiais */}
        <aside className="w-full md:w-[320px] lg:w-[360px] flex-shrink-0 bg-slate-950 border-b md:border-b-0 md:border-r border-slate-800 p-3 flex flex-col gap-2 overflow-y-auto">
          <div className="px-1 py-1 flex items-center justify-between">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-sky-400">
              1. SELECIONE O TREINAMENTO ({CURSOS_CAD.length})
            </span>
            <span className="text-[10px] font-mono text-slate-500">CLIQUE DIRETO</span>
          </div>

          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-1 md:pb-0 no-scrollbar">
            {CURSOS_CAD.map((curso) => {
              const ativo = curso.id === cursoAtivo.id;
              const totCert = curso.todasAulas.filter((a) => String(a.id) !== 'apresentacao').length;
              const prog = getProgressoCurso(curso.id, totCert);

              return (
                <button
                  key={curso.id}
                  type="button"
                  onClick={() => handleSelectCurso(curso.id)}
                  className={`min-w-[230px] md:min-w-0 w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex-shrink-0 ${
                    ativo
                      ? 'bg-sky-500/15 border-sky-400 shadow-lg shadow-sky-950/60'
                      : 'bg-slate-900/70 hover:bg-slate-900 border-slate-800/90 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span
                      className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: `${curso.corPrimaria}25`,
                        color: curso.corSecundaria,
                      }}
                    >
                      {curso.codigoCad}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-400">
                      {curso.todasAulas.length} aulas · {prog.porcentagem}%
                    </span>
                  </div>
                  <h2 className="text-sm font-extrabold text-white leading-snug">
                    {curso.nomeCurto}
                  </h2>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                    {curso.subtitulo}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Card Filosofia Pedagógica do Professor Simon */}
          <div className="hidden md:block mt-auto rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5">
            <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-amber-400 mb-1">
              <Flame className="w-3.5 h-3.5" />
              <span>Filosofia do Professor Simon</span>
            </div>
            <p className="text-[11px] text-amber-100/90 leading-relaxed">
              “{MANIFESTO_PEDAGOGICO_SIMON.citacaoSimon}”
            </p>
          </div>
        </aside>

        {/* Painel Central: Camadas/Módulos e Matriz de Botões de Aulas do Curso Ativo */}
        <main className="flex-1 min-w-0 h-full flex flex-col overflow-hidden bg-[#090f1d]">
          {/* Cabeçalho do Curso Selecionado + Alternador Física->Prática vs Módulos */}
          <div className="flex-shrink-0 p-4 bg-slate-900/80 border-b border-slate-800 space-y-3">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    2. ESCOLHA A CAMADA / MÓDULO E CLIQUE NA AULA OU FERRAMENTA
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Progresso: {progressoCurso.concluidas}/{progressoCurso.total} ({progressoCurso.porcentagem}%)
                  </span>
                </div>
                <h2 className="text-lg md:text-xl font-black text-white truncate">
                  {cursoAtivo.titulo}
                </h2>
                <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                  “{cursoAtivo.filosofiaCurso}”
                </p>
              </div>

              {/* Botões de Alternância de Trilha */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setModoTrilha('pratica');
                    setIndiceGrupoAtivo(0);
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer ${
                    modoTrilha === 'pratica'
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>Trilha Prática Simon (Física ➔ Instalação)</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setModoTrilha('original');
                    setIndiceGrupoAtivo(0);
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer ${
                    modoTrilha === 'original'
                      ? 'bg-sky-500 text-slate-950 border-sky-400 shadow-sm'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  <ListOrdered className="w-3.5 h-3.5" />
                  <span>Ordem de Módulos</span>
                </button>
              </div>
            </div>

            {/* Botões de Seleção de Camada / Módulo (Sem Scroll Vertical) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {grupos.map((g, idx) => {
                const ativo = idx === indiceGrupoAtivo;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setIndiceGrupoAtivo(idx)}
                    className={`px-3 py-2 rounded-xl border text-left transition-all flex-shrink-0 cursor-pointer ${
                      ativo
                        ? 'bg-sky-500 text-slate-950 border-sky-400 font-black shadow-md'
                        : 'bg-slate-950/90 hover:bg-slate-900 text-slate-300 border-slate-800 font-bold'
                    }`}
                  >
                    <span className="block text-[9px] font-mono uppercase opacity-80">
                      {g.codigo} · {g.aulas?.length || 0} Aulas
                    </span>
                    <span className="text-xs truncate block max-w-[220px]">{g.titulo}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid de Botões de Aulas do Módulo/Camada Selecionada */}
          <div className="flex-1 min-h-0 overflow-y-auto p-4">
            {grupoAtivo && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-extrabold text-sky-400 uppercase">
                      {grupoAtivo.codigo} — {grupoAtivo.titulo}
                    </span>
                    {grupoAtivo.descricao && (
                      <p className="text-xs text-slate-400">{grupoAtivo.descricao}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                  {(grupoAtivo.aulas || []).map((aula) => {
                    const concluida = isAulaConcluida(cursoAtivo.id, aula.id);
                    return (
                      <div
                        key={aula.idStr}
                        className={`rounded-2xl border p-4 flex flex-col justify-between transition-all ${
                          concluida
                            ? 'bg-emerald-950/20 border-emerald-500/40'
                            : 'bg-slate-900/90 hover:bg-slate-900 border-slate-800 hover:border-sky-500/40'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black bg-sky-500/20 text-sky-300 border border-sky-500/30">
                              AULA [{String(aula.id).toUpperCase()}]
                            </span>
                            {concluida && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Concluída
                              </span>
                            )}
                          </div>

                          <h3 className="text-sm font-extrabold text-white leading-snug mb-3">
                            {aula.titulo.replace(/^Aula \d+[\s\-:]+/i, '')}
                          </h3>
                        </div>

                        {/* Botões Diretos de Acionamento por Função (Estilo AutoCAD) */}
                        <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-1.5">
                          <button
                            type="button"
                            onClick={() => abrirAulaNoWorkbench(aula, 'bancada')}
                            className="px-2.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-[11px] flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <Wrench className="w-3.5 h-3.5" />
                            <span>Bancada Prática</span>
                          </button>

                          {aula.possuiConversa && (
                            <button
                              type="button"
                              onClick={() => abrirAulaNoWorkbench(aula, 'conversa')}
                              className="px-2.5 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[11px] flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Coffee className="w-3.5 h-3.5" />
                              <span>Papo de Balcão</span>
                            </button>
                          )}

                          {(aula.videoUrl || aula.slides?.length > 0) && (
                            <button
                              type="button"
                              onClick={() => abrirAulaNoWorkbench(aula, 'midia')}
                              className="px-2.5 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 text-sky-300 font-bold text-[11px] flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Play className="w-3.5 h-3.5" />
                              <span>Vídeo / Slides</span>
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => abrirAulaNoWorkbench(aula, 'raiox')}
                            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-[11px] flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>100% Teoria CAD</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
