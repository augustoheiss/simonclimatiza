// src/components/workbench/CadTopRibbon.jsx
// Barra Superior de Comando (Estilo AutoCAD Ribbon + Tema Cristal Glacial do Certificado).
// Centraliza todas as ferramentas da Workstation em botões diretos sem rolagem de página.

import React, { useRef } from 'react';
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
import { SimonDirectModeToggle } from '../ui/SimonActionGate';
import { useHorizontalOverflow } from '../../hooks/useHorizontalOverflow';
import certBg from '../../assets/fundo-textura-leve.webp';

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
  mobileDrawerOpen = false,
  mobileDrawerTriggerRef,
  directMode = false,
  onSetDirectMode,
}) {
  const navigate = useNavigate();
  const tablistRef = useRef(null);

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
      label: 'Bancada',
      labelCompleto: 'Bancada Prática',
      icon: Wrench,
      corAtiva: isLightMode
        ? 'bg-[#0369a1] text-white border-[#1a3a5c] shadow-sky-600/20'
        : 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-emerald-500/20',
      disponivel: true,
    },
    {
      id: 'conversa',
      atalho: 'F2',
      label: 'Papo de Balcão',
      labelCompleto: 'Papo de Balcão',
      icon: Coffee,
      corAtiva: isLightMode
        ? 'bg-amber-700 text-white border-amber-900 shadow-amber-600/20'
        : 'bg-amber-400 text-slate-950 border-amber-300 shadow-amber-500/20',
      disponivel: Boolean(aulaAtiva?.possuiConversa),
    },
    {
      id: 'midia',
      atalho: 'F3',
      label: 'Vídeo e slides',
      labelCompleto: 'Vídeo e slides',
      icon: Play,
      corAtiva: isLightMode
        ? 'bg-[#0369a1] text-white border-[#1a3a5c] shadow-sky-600/20'
        : 'bg-sky-400 text-slate-950 border-sky-300 shadow-sky-500/20',
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
      label: 'Teoria completa',
      labelCompleto: 'Raio-X 100% Teoria',
      icon: BookOpen,
      corAtiva: isLightMode
        ? 'bg-indigo-700 text-white border-indigo-900 shadow-indigo-600/20'
        : 'bg-indigo-400 text-slate-950 border-indigo-300 shadow-indigo-500/20',
      disponivel: true,
    },
    {
      id: 'tabelas',
      atalho: 'F5',
      label: 'Tabelas e campo',
      labelCompleto: 'Tabelas e campo',
      icon: Table2,
      corAtiva: isLightMode
        ? 'bg-teal-700 text-white border-teal-900 shadow-teal-600/20'
        : 'bg-cyan-400 text-slate-950 border-cyan-300 shadow-cyan-500/20',
      disponivel: true,
    },
    {
      id: 'briefing',
      atalho: 'F6',
      label: 'Mapa do curso',
      labelCompleto: 'Mapa do curso',
      icon: Compass,
      corAtiva: isLightMode
        ? 'bg-[#1a3a5c] text-white border-sky-950 shadow-slate-900/20'
        : 'bg-violet-400 text-slate-950 border-violet-300 shadow-violet-500/20',
      disponivel: true,
    },
  ].filter((f) => f.disponivel);

  const { hasOverflowLeft, hasOverflowRight } = useHorizontalOverflow(
    tablistRef,
    `${curso?.id}-${aulaAtiva?.id}-${ferramentas.length}`
  );

  const podeConcluir = aulaAtiva && String(aulaAtiva.id) !== 'apresentacao';

  return (
    <header
      className={`relative flex-shrink-0 border-b-2 select-none z-40 overflow-hidden ${
        isLightMode
          ? 'bg-white border-sky-200 text-slate-900 shadow-2xs'
          : 'bg-slate-950 border-slate-800 text-slate-100'
      }`}
    >
      {isLightMode && (
        <div
          className="absolute inset-0 opacity-[0.10] pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url(${certBg})` }}
        />
      )}

      {/* ── MOBILE (< md): UMA ÚNICA BARRA COMPACTA COM CONCLUIR SEMPRE VISÍVEL ── */}
      <div
        className={`relative z-10 md:hidden px-2 py-2 flex items-center justify-between gap-1.5 ${
          isLightMode ? 'bg-sky-50/90' : 'bg-slate-900/95'
        }`}
      >
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <Link
            to="/academia"
            aria-label="Voltar ao catálogo da Academia"
            title="Catálogo da Academia"
            className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border transition-colors ${
              isLightMode
                ? 'bg-white border-sky-200 text-[#1a3a5c] hover:bg-sky-50'
                : 'bg-slate-950 border-slate-700 text-slate-200 hover:text-sky-300'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-emerald-700" aria-hidden="true" />
          </Link>

          <button
            ref={mobileDrawerTriggerRef}
            type="button"
            onClick={onOpenMobileModules}
            aria-expanded={mobileDrawerOpen}
            className="inline-flex items-center gap-1 px-2.5 py-2 rounded-lg bg-[#0369a1] hover:bg-[#0284c7] text-white text-xs font-bold cursor-pointer"
          >
            <PanelLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Aulas</span>
          </button>
        </div>

        <div className="flex-1 min-w-0">
          <select
            value={viewportAtivo}
            onChange={(e) => onSelectViewport(e.target.value)}
            aria-label="Área de estudo da aula"
            className={`w-full min-w-0 px-2 py-2 rounded-lg border text-xs font-bold truncate cursor-pointer focus:outline-none focus:ring-1 focus:ring-sky-500 ${
              isLightMode
                ? 'bg-white border-sky-300 text-[#1a3a5c]'
                : 'bg-slate-950 border-sky-500/40 text-sky-200'
            }`}
          >
            {ferramentas.map((f) => (
              <option key={f.id} value={f.id}>
                {f.atalho} · {f.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isLightMode ? 'Ativar tema escuro' : 'Ativar tema claro'}
            className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border transition-colors cursor-pointer ${
              isLightMode
                ? 'bg-white border-sky-200 text-[#1a3a5c]'
                : 'bg-slate-950 border-slate-700 text-slate-200'
            }`}
          >
            {isLightMode ? (
              <Moon className="w-4 h-4 text-[#0369a1]" aria-hidden="true" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
            )}
          </button>

          {podeConcluir && (
            <button
              type="button"
              onClick={onToggleConcluirAula}
              className={`inline-flex items-center gap-1 px-2.5 py-2 rounded-lg border text-xs font-bold transition-all cursor-pointer flex-shrink-0 ${
                aulaConcluida
                  ? isLightMode
                    ? 'bg-emerald-100 border-emerald-500 text-emerald-900'
                    : 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                  : isLightMode
                  ? 'bg-white border-sky-300 text-[#1a3a5c]'
                  : 'bg-slate-950 border-slate-700 text-slate-100'
              }`}
            >
              <CheckCircle2
                className={`w-3.5 h-3.5 flex-shrink-0 ${
                  aulaConcluida
                    ? isLightMode
                      ? 'text-emerald-700'
                      : 'text-emerald-300'
                    : isLightMode
                    ? 'text-[#0369a1]'
                    : 'text-slate-300'
                }`}
                aria-hidden="true"
              />
              <span>{aulaConcluida ? 'Concluída' : 'Concluir'}</span>
            </button>
          )}
        </div>
      </div>

      {/* ── DESKTOP (md+): RIBBON EM DUAS LINHAS COM CONCLUIR ANCORADO FORA DO SCROLL ── */}
      <div className="hidden md:block relative z-10">
        {/* Linha 1: Navegação, curso, progresso e tema */}
        <div
          className={`px-3 py-1.5 border-b flex items-center justify-between gap-2 text-xs ${
            isLightMode
              ? 'bg-sky-50/80 border-sky-200'
              : 'bg-slate-900/90 border-slate-800/80'
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <Link
              to="/"
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-bold transition-colors flex-shrink-0 ${
                isLightMode
                  ? 'bg-white border-sky-200 text-[#1a3a5c] hover:bg-sky-50'
                  : 'bg-slate-950 border-slate-800 text-slate-200 hover:text-sky-300 hover:border-sky-500/40'
              }`}
              title="Ir para o painel principal do site"
            >
              <Home className="w-3.5 h-3.5 text-[#0284c7]" aria-hidden="true" />
              <span>Site</span>
            </Link>

            <Link
              to="/academia"
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-bold transition-colors flex-shrink-0 ${
                isLightMode
                  ? 'bg-white border-sky-200 text-[#1a3a5c] hover:bg-sky-50'
                  : 'bg-slate-950 border-slate-800 text-slate-200 hover:text-sky-300 hover:border-sky-500/40'
              }`}
              title="Ir para o catálogo da Academia"
            >
              <GraduationCap className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
              <span>Catálogo</span>
            </Link>

            <span className="text-sky-300" aria-hidden="true">|</span>

            <div className="flex items-center gap-1.5 min-w-0">
              <label
                htmlFor="cad-curso-select"
                className={`hidden xl:inline text-xs font-bold flex-shrink-0 ${
                  isLightMode ? 'text-[#0369a1]' : 'text-sky-300'
                }`}
              >
                Curso ativo:
              </label>
              <select
                id="cad-curso-select"
                value={curso?.id || 'instalacao-hvac'}
                onChange={handleTrocarCurso}
                aria-label="Trocar treinamento ativo"
                className={`px-2.5 py-1 rounded-lg border text-xs font-bold cursor-pointer focus:outline-none focus:ring-1 focus:ring-sky-400 max-w-[260px] lg:max-w-[300px] truncate ${
                  isLightMode
                    ? 'bg-white border-sky-300 text-[#1a3a5c]'
                    : 'bg-slate-950 border-sky-500/40 text-sky-200'
                }`}
              >
                {TODOS_CURSOS_LISTA.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nomeCurto} ({c.todasAulas.length} aulas)
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {typeof onSetDirectMode === 'function' && (
              <SimonDirectModeToggle
                directMode={directMode}
                setDirectMode={onSetDirectMode}
              />
            )}

            {progresso && (
              <div
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs ${
                  isLightMode
                    ? 'bg-white border-sky-200 text-[#1a3a5c]'
                    : 'bg-slate-950/70 border-slate-800 text-slate-200'
                }`}
              >
                <span className={isLightMode ? 'text-slate-600 font-semibold' : 'text-slate-300 font-semibold'}>
                  Progresso:
                </span>
                <span
                  className={`font-extrabold [font-variant-numeric:tabular-nums] ${
                    isLightMode ? 'text-emerald-800' : 'text-emerald-300'
                  }`}
                >
                  {progresso.concluidas}/{progresso.total} ({progresso.porcentagem}%)
                </span>
              </div>
            )}

            {progresso?.concluido && (
              <Link
                to={`/academia/certificado/${curso.certificadoId}`}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs shadow-sm"
              >
                <Award className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Certificado</span>
              </Link>
            )}

            <button
              type="button"
              onClick={onToggleTheme}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                isLightMode
                  ? 'bg-white border-sky-200 text-[#1a3a5c] hover:bg-sky-50'
                  : 'bg-slate-950 border-slate-800 text-slate-200 hover:text-white'
              }`}
              title={
                isLightMode
                  ? 'Mudar para modo escuro'
                  : 'Mudar para modo claro'
              }
            >
              {isLightMode ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#0369a1]" aria-hidden="true" />
                  <span className="hidden lg:inline">Modo escuro</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                  <span className="hidden lg:inline">Modo claro</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Linha 2: Módulos à esquerda | Abas F1..F6 roláveis no centro | Split + Inspetor + Concluir ancorados à direita */}
        <div className="px-2.5 py-1.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              type="button"
              onClick={onToggleLeftTree}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                leftTreeOpen
                  ? isLightMode
                    ? 'bg-sky-100 border-sky-300 text-[#0369a1]'
                    : 'bg-sky-500/20 border-sky-400/60 text-sky-300'
                  : isLightMode
                  ? 'bg-white border-sky-200 text-[#1a3a5c] hover:bg-sky-50'
                  : 'bg-slate-900 border-slate-700 text-slate-200 hover:text-white'
              }`}
              title="Mostrar ou ocultar lista de módulos e aulas"
            >
              <PanelLeft className="w-4 h-4" aria-hidden="true" />
              <span>Módulos</span>
            </button>
          </div>

          {/* Área central rolável com fade indicativo nas bordas quando houver overflow */}
          <div className="relative flex-1 min-w-0">
            <div
              ref={tablistRef}
              className="cad-scroll-strip flex items-center gap-1.5 overflow-x-auto pb-0.5"
              role="tablist"
              aria-label="Ferramentas da aula"
            >
              {ferramentas.map((ferr) => {
                const Icon = ferr.icon;
                const ativo = viewportAtivo === ferr.id;
                return (
                  <button
                    key={ferr.id}
                    type="button"
                    role="tab"
                    aria-selected={ativo}
                    title={ferr.labelCompleto}
                    onClick={() => onSelectViewport(ferr.id)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex-shrink-0 ${
                      ativo
                        ? `${ferr.corAtiva} shadow-sm`
                        : isLightMode
                        ? 'bg-white hover:bg-sky-50 text-[#1a3a5c] border-sky-200 hover:border-sky-300 shadow-2xs'
                        : 'bg-slate-900/90 hover:bg-slate-800 text-slate-200 border-slate-700'
                    }`}
                  >
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded font-bold ${
                        ativo
                          ? 'bg-white/20 text-current'
                          : isLightMode
                          ? 'bg-sky-100 text-[#0369a1]'
                          : 'bg-slate-800 text-sky-300'
                      }`}
                    >
                      {ferr.atalho}
                    </span>
                    <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{ferr.label}</span>
                  </button>
                );
              })}
            </div>
            {hasOverflowLeft && (
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-y-0 left-0 w-7 bg-gradient-to-r ${
                  isLightMode ? 'from-white to-transparent' : 'from-slate-950 to-transparent'
                }`}
              />
            )}
            {hasOverflowRight && (
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l ${
                  isLightMode ? 'from-white to-transparent' : 'from-slate-950 to-transparent'
                }`}
              />
            )}
          </div>

          <div className="flex items-center gap-1.5 flex-shrink-0">
            <button
              type="button"
              onClick={onToggleSplitView}
              className={`hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                splitViewAtivo
                  ? 'bg-amber-600 text-white border-amber-800'
                  : isLightMode
                  ? 'bg-white border-sky-200 text-[#1a3a5c] hover:bg-sky-50'
                  : 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
              }`}
              title="Dividir tela entre conteúdo e tabelas de campo"
            >
              <Columns className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Dividir tela</span>
            </button>

            <button
              type="button"
              onClick={onToggleRightDock}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                rightDockOpen
                  ? isLightMode
                    ? 'bg-sky-100 border-sky-300 text-[#0369a1]'
                    : 'bg-sky-500/20 border-sky-400/60 text-sky-300'
                  : isLightMode
                  ? 'bg-white border-sky-200 text-[#1a3a5c] hover:bg-sky-50'
                  : 'bg-slate-900 border-slate-700 text-slate-200 hover:text-white'
              }`}
              title="Mostrar ou ocultar painel de tabelas e campo"
            >
              <PanelRight className="w-4 h-4" aria-hidden="true" />
              <span className="hidden xl:inline">Inspetor</span>
            </button>

            {podeConcluir && (
              <button
                type="button"
                onClick={onToggleConcluirAula}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-extrabold transition-all cursor-pointer flex-shrink-0 ${
                  aulaConcluida
                    ? isLightMode
                      ? 'bg-emerald-100 border-emerald-500 text-emerald-900'
                      : 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                    : isLightMode
                    ? 'bg-white border-sky-300 text-[#1a3a5c] hover:border-emerald-600'
                    : 'bg-slate-900 border-slate-700 text-slate-100 hover:border-emerald-400'
                }`}
                title="Marcar ou desmarcar aula como concluída"
              >
                <CheckCircle2
                  className={`w-3.5 h-3.5 ${
                    aulaConcluida
                      ? isLightMode
                        ? 'text-emerald-700'
                        : 'text-emerald-300'
                      : isLightMode
                      ? 'text-[#0369a1]'
                      : 'text-slate-300'
                  }`}
                  aria-hidden="true"
                />
                <span>{aulaConcluida ? 'Concluída' : 'Concluir aula'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
