// src/components/workbench/CadModuleTree.jsx
// Árvore de Camadas e Módulos (Estilo AutoCAD Layer Manager).
// Permite alternar com 1 clique entre a "Rota Prática do Simon (Física -> Instalação)"
// e a "Grade Sequencial Original", abrindo qualquer aula ou mídia sem rolar a página.

import React, { useState, useMemo } from 'react';
import {
  Flame,
  ListOrdered,
  Search,
  CheckCircle2,
  Circle,
  Coffee,
  Play,
  Layers,
  ChevronDown,
  ChevronRight,
  Wrench,
  X,
} from 'lucide-react';

export default function CadModuleTree({
  curso,
  aulaAtiva,
  onSelectAula,
  isAulaConcluida,
  conversasCurso = {},
  isLightMode = false,
  onCloseMobileDrawer,
}) {
  // Por padrão, inicia na "Rota Prática do Simon: Física -> Instalação"
  const [modoTrilha, setModoTrilha] = useState('pratica'); // 'pratica' | 'original'
  const [busca, setBusca] = useState('');
  const [camadasAbertas, setCamadasAbertas] = useState(() => {
    const iniciais = {};
    (curso?.trilhasPraticas || []).forEach((t, i) => {
      iniciais[t.id] = i < 2; // Abre Layer 01 (Física) e Layer 02 (Instalação/Bancada) por padrão
    });
    (curso?.modulosOriginais || []).forEach((m, i) => {
      iniciais[m.id] = i < 2;
    });
    return iniciais;
  });

  const gruposAtivos = useMemo(() => {
    const base =
      modoTrilha === 'pratica' && curso?.trilhasPraticas?.length > 0
        ? curso.trilhasPraticas
        : curso?.modulosOriginais || [];

    if (!busca.trim()) return base;

    const termo = busca.toLowerCase().trim();
    return base
      .map((grupo) => ({
        ...grupo,
        aulas: (grupo.aulas || []).filter(
          (a) =>
            String(a.id).toLowerCase().includes(termo) ||
            a.titulo.toLowerCase().includes(termo) ||
            (a.moduloTitulo && a.moduloTitulo.toLowerCase().includes(termo))
        ),
      }))
      .filter((g) => g.aulas.length > 0);
  }, [curso, modoTrilha, busca]);

  const toggleCamada = (id) => {
    setCamadasAbertas((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside
      className={`h-full flex flex-col overflow-hidden w-full md:w-[310px] lg:w-[340px] flex-shrink-0 select-none ${
        isLightMode
          ? 'bg-slate-100 border-r border-slate-300 text-slate-900'
          : 'bg-slate-950 border-r border-slate-800 text-slate-100'
      }`}
      aria-label="Gerenciador de Módulos e Camadas CAD"
    >
      {/* ── Cabeçalho do Layer Manager + Seletor de Modo Pedagógico ── */}
      <div
        className={`p-3 border-b space-y-2.5 flex-shrink-0 ${
          isLightMode ? 'bg-slate-200/70 border-slate-300' : 'bg-slate-900/90 border-slate-800'
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-mono font-black uppercase tracking-widest text-sky-400">
            LAYERS · MÓDULOS ({curso?.todasAulas?.length || 0} AULAS)
          </span>
          {onCloseMobileDrawer && (
            <button
              type="button"
              onClick={onCloseMobileDrawer}
              className="md:hidden p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Botões de Alternância Pedagógica: Rota Prática Simon vs Sequência Original */}
        <div className="grid grid-cols-2 gap-1 p-1 rounded-lg bg-slate-950/80 border border-slate-800">
          <button
            type="button"
            onClick={() => setModoTrilha('pratica')}
            className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-[11px] font-extrabold transition-all cursor-pointer ${
              modoTrilha === 'pratica'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Ordem preferida do Professor Simon: Fundamentos da Física direto para a Prática de Instalação/Bancada"
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Física ➔ Prática</span>
          </button>

          <button
            type="button"
            onClick={() => setModoTrilha('original')}
            className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-[11px] font-extrabold transition-all cursor-pointer ${
              modoTrilha === 'original'
                ? 'bg-sky-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Ordem sequencial numérica dos módulos da apostila"
          >
            <ListOrdered className="w-3.5 h-3.5" />
            <span>Ordem Apostila</span>
          </button>
        </div>

        {/* Busca Instantânea de Aulas */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Filtrar aula, código ou tema..."
            className={`w-full pl-8 pr-7 py-1.5 rounded-lg text-xs border focus:outline-none focus:ring-1 focus:ring-sky-400 ${
              isLightMode
                ? 'bg-white border-slate-300 text-slate-800 placeholder-slate-400'
                : 'bg-slate-950 border-slate-800 text-slate-200 placeholder-slate-500'
            }`}
          />
          {busca && (
            <button
              type="button"
              onClick={() => setBusca('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* ── Árvore de Camadas / Módulos (Scroll interno isolado) ── */}
      <div className="flex-1 min-h-0 overflow-y-auto p-2 space-y-2">
        {gruposAtivos.map((grupo) => {
          const contemAulaAtiva = (grupo.aulas || []).some((a) => a.idStr === aulaAtiva?.idStr);
          const aberto = busca.trim().length > 0 || camadasAbertas[grupo.id] || contemAulaAtiva;
          const corGrupo = grupo.cor || curso?.corPrimaria || '#0ea5e9';

          return (
            <div
              key={grupo.id}
              className={`rounded-xl border overflow-hidden transition-all ${
                isLightMode
                  ? 'bg-white border-slate-300'
                  : contemAulaAtiva
                  ? 'bg-slate-900/90 border-sky-500/40'
                  : 'bg-slate-900/50 border-slate-800/80'
              }`}
            >
              {/* Cabeçalho da Layer / Módulo */}
              <button
                type="button"
                onClick={() => toggleCamada(grupo.id)}
                className="w-full p-2.5 text-left flex items-start gap-2 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="mt-0.5 text-slate-400 flex-shrink-0">
                  {aberto ? (
                    <ChevronDown className="w-4 h-4 text-sky-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span
                      className="text-[10px] font-mono font-black uppercase tracking-wider px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: `${corGrupo}20`,
                        color: corGrupo,
                      }}
                    >
                      {grupo.codigo}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {grupo.aulas?.length || 0} aulas
                    </span>
                  </div>
                  <h3
                    className={`text-xs font-extrabold mt-1 leading-snug ${
                      isLightMode ? 'text-slate-800' : 'text-slate-200'
                    }`}
                  >
                    {grupo.titulo}
                  </h3>
                </div>
              </button>

              {/* Lista de Aulas da Layer */}
              {aberto && (
                <div className="px-2 pb-2 pt-1 space-y-1 border-t border-slate-800/50">
                  {(grupo.aulas || []).map((aula) => {
                    const ativa = aula.idStr === aulaAtiva?.idStr;
                    const concluida = isAulaConcluida?.(curso.id, aula.id);
                    const papoFeito = !!conversasCurso?.[aula.id]?.concluida;

                    return (
                      <div
                        key={aula.idStr}
                        className={`rounded-lg border transition-all ${
                          ativa
                            ? isLightMode
                              ? 'bg-sky-50 border-sky-500 shadow-sm'
                              : 'bg-sky-500/15 border-sky-400/70 shadow-sm'
                            : isLightMode
                            ? 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                            : 'bg-slate-950/70 hover:bg-slate-900 border-slate-800/80'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => {
                            onSelectAula?.(aula);
                            onCloseMobileDrawer?.();
                          }}
                          className="w-full p-2 text-left flex items-start gap-2 cursor-pointer"
                        >
                          {concluida ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          ) : (
                            <Circle
                              className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                                ativa ? 'text-sky-400' : 'text-slate-600'
                              }`}
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span
                                className={`text-[10px] font-mono font-bold ${
                                  ativa ? 'text-sky-400' : 'text-slate-500'
                                }`}
                              >
                                [{String(aula.id).toUpperCase()}]
                              </span>
                              {aula.possuiConversa && (
                                <span
                                  className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                                    papoFeito
                                      ? 'bg-emerald-500/20 text-emerald-300'
                                      : 'bg-amber-500/20 text-amber-300'
                                  }`}
                                >
                                  ☕ Balcão
                                </span>
                              )}
                            </div>
                            <p
                              className={`text-xs leading-snug mt-0.5 line-clamp-2 ${
                                ativa
                                  ? isLightMode
                                    ? 'font-extrabold text-sky-900'
                                    : 'font-extrabold text-white'
                                  : isLightMode
                                  ? 'font-medium text-slate-700'
                                  : 'font-medium text-slate-300'
                              }`}
                            >
                              {aula.titulo.replace(/^Aula \d+[\s\-:]+/i, '')}
                            </p>
                          </div>
                        </button>

                        {/* Sub-botões diretos de ferramenta quando a aula está ativa */}
                        {ativa && (
                          <div className="px-2 pb-2 pt-1 flex items-center gap-1 border-t border-sky-500/20">
                            <button
                              type="button"
                              onClick={() => {
                                onSelectAula?.(aula, 'bancada');
                                onCloseMobileDrawer?.();
                              }}
                              className="flex-1 py-1 px-1.5 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-[10px] font-bold flex items-center justify-center gap-1 cursor-pointer"
                              title="Abrir Bancada Prática"
                            >
                              <Wrench className="w-3 h-3" />
                              <span>Prática</span>
                            </button>
                            {aula.possuiConversa && (
                              <button
                                type="button"
                                onClick={() => {
                                  onSelectAula?.(aula, 'conversa');
                                  onCloseMobileDrawer?.();
                                }}
                                className="flex-1 py-1 px-1.5 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[10px] font-bold flex items-center justify-center gap-1 cursor-pointer"
                                title="Abrir Papo de Balcão"
                              >
                                <Coffee className="w-3 h-3" />
                                <span>Papo</span>
                              </button>
                            )}
                            {(aula.videoUrl || aula.slides?.length > 0) && (
                              <button
                                type="button"
                                onClick={() => {
                                  onSelectAula?.(aula, 'midia');
                                  onCloseMobileDrawer?.();
                                }}
                                className="flex-1 py-1 px-1.5 rounded bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-[10px] font-bold flex items-center justify-center gap-1 cursor-pointer"
                                title="Abrir Vídeo / Slides"
                              >
                                {aula.videoUrl ? (
                                  <Play className="w-3 h-3" />
                                ) : (
                                  <Layers className="w-3 h-3" />
                                )}
                                <span>Mídia</span>
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
