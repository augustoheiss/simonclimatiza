// src/components/workbench/CadTopRibbon.jsx
// Barra Superior de Comando (Estilo AutoCAD Ribbon).
// Centraliza todas as ferramentas da Workstation em botões diretos sem rolagem de página.

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Wrench,
  Coffee,
  Play,
  BookOpen,
  Table2,
  Compass,
  Columns,
  Sun,
  Moon,
  CheckCircle2,
  PanelLeft,
  PanelRight,
  Award,
  Home,
  GraduationCap,
} from 'lucide-react';
import { listarTodosCursosNormalizados } from '../../utils/courseAdapter';

const TODOS_CURSOS_LISTA = listarTodosCursosNormalizados();

export default function CadTopRibbon({
  curso,
  aulaAtiva,
  viewportAtivo, // 'bancada' | 'conversa' | 'midia' | 'raiox' | 'tabelas' | 'briefing'
  onSelectViewport,
  leftTreeOpen,
  onToggleLeftTree,
  rightDockOpen,
  onToggleRightDock,
  splitViewAtivo,
  onToggleSplitView,
  isLightMode,
  onToggleTheme,
  progresso,
  aulaConcluida,
  onToggleConcluirAula,
  onOpenMobileModules,
}) {
  const navigate = useNavigate();

  const handleTrocarCurso = (e) => {
    const novoCursoId = e.target.value;
    const alvo = TODOS_CURSOS_LISTA.find((c) => c.id === novoCursoId);
    if (alvo?.rotaUrl) {
      navigate(alvo.rotaUrl);
    }
  };

  const ferramentas = [
    {
      id: 'bancada',
      atalho: 'F1',
      label: 'Bancada Prática',
      icon: Wrench,
      corAtiva: 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-emerald-500/20',
      disponivel: true,
    },
    {
      id: 'conversa',
      atalho: 'F2',
      label: 'Papo de Balcão',
      icon: Coffee,
      corAtiva: 'bg-amber-400 text-slate-950 border-amber-300 shadow-amber-500/20',
      disponivel: Boolean(aulaAtiva?.possuiConversa),
    },
    {
      id: 'midia',
      atalho: 'F3',
      label: 'Vídeo / Slides',
      icon: Play,
      corAtiva: 'bg-sky-400 text-slate-950 border-sky-300 shadow-sky-500/20',
      disponivel: Boolean(
        aulaAtiva?.videoUrl ||
          aulaAtiva?.podcastUrl ||
          (aulaAtiva?.slides && aulaAtiva.slides.length > 0) ||
          (aulaAtiva?.fontes && aulaAtiva.fontes.length > 0)
      ),
    },
    {
      id: 'raiox',
      atalho: 'F4',
      label: 'Raio-X 100% Teoria',
      icon: BookOpen,
      corAtiva: 'bg-indigo-400 text-slate-950 border-indigo-300 shadow-indigo-500/20',
      disponivel: true,
    },
    {
      id: 'tabelas',
      atalho: 'F5',
      label: 'Tabelas & Campo',
      icon: Table2,
      corAtiva: 'bg-cyan-400 text-slate-950 border-cyan-300 shadow-cyan-500/20',
      disponivel: true,
    },
    {
      id: 'briefing',
      atalho: 'F6',
      label: 'Mapa do Curso',
      icon: Compass,
      corAtiva: 'bg-violet-400 text-slate-950 border-violet-300 shadow-violet-500/20',
      disponivel: true,
    },
  ].filter((f) => f.disponivel);

  return (
    <header
      className={`flex-shrink-0 border-b select-none z-40 ${
        isLightMode
          ? 'bg-slate-200 border-slate-300 text-slate-900'
          : 'bg-slate-950 border-slate-800 text-slate-100'
      }`}
    >
      {/* ── LINHA 1: BARRA DE SISTEMA CAD + SELETOR DE TREINAMENTO + STATUS DE PROGRESSO ── */}
      <div
        className={`px-3 py-1.5 border-b flex items-center justify-between gap-2 text-xs ${
          isLightMode ? 'bg-slate-100 border-slate-300' : 'bg-slate-900/90 border-slate-800/80'
        }`}
      >
        {/* Esquerda: Navegação Global + Seletor Rápido dos 5 Cursos */}
        <div className="flex items-center gap-2 min-w-0">
          <Link
            to="/"
            className={`inline-flex items-center gap-1 px-2 py-1 rounded border text-[11px] font-bold transition-colors ${
              isLightMode
                ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                : 'bg-slate-950 border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40'
            }`}
            title="Ir para o Painel Principal do Site"
          >
            <Home className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">Site</span>
          </Link>

          <Link
            to="/academia"
            className={`inline-flex items-center gap-1 px-2 py-1 rounded border text-[11px] font-bold transition-colors ${
              isLightMode
                ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                : 'bg-slate-950 border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40'
            }`}
            title="Ir para o Hub de Cursos da Academia"
          >
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Hub Academia</span>
          </Link>

          <span className="text-slate-600 hidden sm:inline">|</span>

          {/* Seletor Direto de Treinamento estilo Projeto CAD */}
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="hidden lg:inline text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold">
              PROJETO ATIVO:
            </span>
            <select
              value={curso?.id || 'instalacao-hvac'}
              onChange={handleTrocarCurso}
              aria-label="Trocar treinamento ativo"
              className={`px-2.5 py-1 rounded-md border text-xs font-extrabold cursor-pointer focus:outline-none focus:ring-1 focus:ring-sky-400 max-w-[200px] sm:max-w-[280px] truncate ${
                isLightMode
                  ? 'bg-white border-slate-300 text-slate-900'
                  : 'bg-slate-950 border-sky-500/40 text-sky-300'
              }`}
            >
              {TODOS_CURSOS_LISTA.map((c) => (
                <option key={c.id} value={c.id}>
                  [{c.codigoCad}] {c.nomeCurto} ({c.todasAulas.length} aulas)
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Direita: Progresso do Curso + Botão Certificado + Tema */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {progresso && (
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded bg-slate-950/70 border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-slate-400">
                PROGRESSO:
              </span>
              <span className="text-[11px] font-mono font-extrabold text-emerald-400">
                {progresso.concluidas}/{progresso.total} ({progresso.porcentagem}%)
              </span>
            </div>
          )}

          {progresso?.concluido && (
            <Link
              to={`/academia/certificado/${curso.certificadoId}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-sm"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Certificado</span>
            </Link>
          )}

          {/* Alternador Tema Dark CAD Blueprint / Light Technical Paper */}
          <button
            type="button"
            onClick={onToggleTheme}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded border text-[11px] font-bold transition-all cursor-pointer ${
              isLightMode
                ? 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'
                : 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white'
            }`}
            title={isLightMode ? 'Mudar para Tema Escuro CAD Blueprint' : 'Mudar para Tema Claro Papel Técnico'}
          >
            {isLightMode ? (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
                <span className="hidden xl:inline">CAD Escuro</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden xl:inline">Papel Claro</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── LINHA 2: RIBBON DE FERRAMENTAS DO VIEWPORT (F1 A F6) + CONTROLES DE JANELA CAD ── */}
      <div className="px-2.5 py-1.5 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
        {/* Esquerda: Botão para abrir/fechar Árvore de Módulos (Layers) */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {/* Desktop toggle */}
          <button
            type="button"
            onClick={onToggleLeftTree}
            className={`hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-extrabold transition-all cursor-pointer ${
              leftTreeOpen
                ? 'bg-sky-500/20 border-sky-400/60 text-sky-300'
                : isLightMode
                ? 'bg-white border-slate-300 text-slate-700'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title="Mostrar/Ocultar Árvore de Módulos e Aulas (Layers)"
          >
            <PanelLeft className="w-4 h-4" />
            <span className="hidden lg:inline">Módulos</span>
          </button>

          {/* Mobile drawer trigger */}
          <button
            type="button"
            onClick={onOpenMobileModules}
            className="md:hidden inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-sky-500 text-slate-950 text-xs font-black cursor-pointer"
          >
            <PanelLeft className="w-4 h-4" />
            <span>Aulas</span>
          </button>
        </div>

        {/* Centro: Os 6 Botões de Ferramenta de Viewport estilo AutoCAD */}
        <div className="flex items-center gap-1.5 flex-shrink-0" role="tablist" aria-label="Ferramentas da Aula">
          {ferramentas.map((ferr) => {
            const Icon = ferr.icon;
            const ativo = viewportAtivo === ferr.id;
            return (
              <button
                key={ferr.id}
                type="button"
                role="tab"
                aria-selected={ativo}
                onClick={() => onSelectViewport(ferr.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-extrabold transition-all cursor-pointer flex-shrink-0 ${
                  ativo
                    ? `${ferr.corAtiva} shadow-md`
                    : isLightMode
                    ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                    : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border-slate-800'
                }`}
              >
                <span
                  className={`text-[10px] font-mono px-1 py-0.2 rounded ${
                    ativo
                      ? 'bg-black/20 text-current font-black'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {ferr.atalho}
                </span>
                <Icon className="w-3.5 h-3.5" />
                <span>{ferr.label}</span>
              </button>
            );
          })}
        </div>

        {/* Direita: Controles de Split-Screen, Dock Direito e Marcar Aula Concluída */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            type="button"
            onClick={onToggleSplitView}
            className={`hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-extrabold transition-all cursor-pointer ${
              splitViewAtivo
                ? 'bg-amber-400 text-slate-950 border-amber-300'
                : isLightMode
                ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
            title="Dividir Tela estilo AutoCAD (Bancada/Papo à esquerda + Tabelas/Medidas à direita)"
          >
            <Columns className="w-3.5 h-3.5" />
            <span>Split CAD</span>
          </button>

          <button
            type="button"
            onClick={onToggleRightDock}
            className={`hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-extrabold transition-all cursor-pointer ${
              rightDockOpen
                ? 'bg-sky-500/20 border-sky-400/60 text-sky-300'
                : isLightMode
                ? 'bg-white border-slate-300 text-slate-700'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title="Mostrar/Ocultar Dock Inspetor de Tabelas e Campo"
          >
            <PanelRight className="w-4 h-4" />
            <span className="hidden xl:inline">Inspetor</span>
          </button>

          {aulaAtiva && String(aulaAtiva.id) !== 'apresentacao' && (
            <button
              type="button"
              onClick={onToggleConcluirAula}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-extrabold transition-all cursor-pointer ${
                aulaConcluida
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                  : isLightMode
                  ? 'bg-white border-slate-300 text-slate-700 hover:border-emerald-500'
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-emerald-400 hover:text-emerald-300'
              }`}
              title="Marcar ou desmarcar aula como concluída"
            >
              <CheckCircle2
                className={`w-3.5 h-3.5 ${
                  aulaConcluida ? 'text-emerald-400' : 'text-slate-500'
                }`}
              />
              <span className="hidden sm:inline">
                {aulaConcluida ? 'Concluída' : 'Concluir'}
              </span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
