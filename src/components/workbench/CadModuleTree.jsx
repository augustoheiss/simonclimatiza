// src/components/workbench/CadModuleTree.jsx
// Árvore de Camadas e Módulos (Estilo AutoCAD Layer Manager + Tema Cristal Glacial do Certificado).
// Permite alternar entre a "Rota Prática do Simon (Física -> Instalação)"
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
  isLightMode = true,
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
          ? 'bg-sky-50/70 border-r-2 border-sky-200 text-slate-900'
          : 'bg-slate-950 border-r border-slate-800 text-slate-100'
      }`}
      aria-label="Gerenciador de Módulos e Camadas CAD"
    >
      {/* ── Cabeçalho do Layer Manager + Seletor de Modo Pedagógico ── */}
      <div
        className={`p-3 border-b space-y-2.5 flex-shrink-0 ${
          isLightMode
            ? 'bg-white border-sky-200'
            : 'bg-slate-900/90 border-slate-800'
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-[10px] font-mono font-black uppercase tracking-widest ${
              isLightMode ? 'text-[#0369a1]' : 'text-sky-400'
            }`}
          >
            LAYERS &bull; MÓDULOS ({curso?.todasAulas?.length || 0} AULAS)
          </span>
          {onCloseMobileDrawer && (
            <button
              type="button"
              onClick={onCloseMobileDrawer}
              className={`md:hidden p-1 rounded ${
                isLightMode
                  ? 'hover:bg-sky-50 text-slate-500 hover:text-slate-900'
                  : 'hover:bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Botões de Alternância Pedagógica: Rota Prática Simon vs Sequência Original */}
        <div
          className={`grid grid-cols-2 gap-1 p-1 rounded-xl border ${
            isLightMode
              ? 'bg-sky-50 border-sky-200'
              : 'bg-slate-950/80 border-slate-800'
          }`}
        >
          <button
            type="button"
            onClick={() => setModoTrilha('pratica')}
            className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer ${
              modoTrilha === 'pratica'
                ? isLightMode
                  ? 'bg-[#0369a1] text-white shadow-2xs'
                  : 'bg-emerald-500 text-slate-950 shadow-sm'
                : isLightMode
                ? 'text-slate-600 hover:text-[#1a3a5c]'
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
            className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer ${
              modoTrilha === 'original'
                ? isLightMode
                  ? 'bg-[#0369a1] text-white shadow-2xs'
                  : 'bg-sky-500 text-slate-950 shadow-sm'
                : isLightMode
                ? 'text-slate-600 hover:text-[#1a3a5c]'
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
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Filtrar aula, código ou tema..."
            className={`w-full pl-8 pr-7 py-1.5 rounded-lg text-xs border focus:outline-none focus:ring-1 focus:ring-sky-400 ${
              isLightMode
                ? 'bg-white border-sky-200 text-[#1a3a5c] placeholder-slate-400'
                : 'bg-slate-950 border-slate-800 text-slate-200 placeholder-slate-500'
            }`}
          />
          {busca && (
            <button
              type="button"
              onClick={() => setBusca('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
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
          const corGrupo = grupo.cor || curso?.corPrimaria || '#0284c7';

          return (
            <div
              key={grupo.id}
              className={`rounded-xl border-2 overflow-hidden transition-all ${
                isLightMode
                  ? contemAulaAtiva
                    ? 'bg-white border-[#0284c7] shadow-xs'
                    : 'bg-white border-sky-200/90'
                  : contemAulaAtiva
                  ? 'bg-slate-900/90 border-sky-500/40'
                  : 'bg-slate-900/50 border-slate-800/80'
              }`}
            >
              {/* Cabeçalho da Layer / Módulo */}
              <button
                type="button"
                onClick={() => toggleCamada(grupo.id)}
                className={`w-full p-2.5 text-left flex items-start gap-2 transition-colors cursor-pointer ${
                  isLightMode ? 'hover:bg-sky-50/70' : 'hover:bg-white/5'
                }`}
              >
                <div className="mt-0.5 text-slate-400 flex-shrink-0">
                  {aberto ? (
                    <ChevronDown
                      className={`w-4 h-4 ${
                        isLightMode ? 'text-[#0284c7]' : 'text-sky-400'
                      }`}
                    />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span
                      className="text-[10px] font-mono font-black uppercase tracking-wider px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: `${corGrupo}18`,
                        color: isLightMode ? '#0369a1' : corGrupo,
                      }}
                    >
                      {grupo.codigo}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-500">
                      {grupo.aulas?.length || 0} aulas
                    </span>
                  </div>
                  <h3
                    className={`text-xs font-extrabold mt-1 leading-snug ${
                      isLightMode ? 'text-[#1a3a5c]' : 'text-slate-200'
                    }`}
                  >
                    {grupo.titulo}
                  </h3>
                </div>
              </button>

              {/* Lista de Aulas da Layer */}
              {aberto && (
                <div
                  className={`px-2 pb-2 pt-1 space-y-1.5 border-t ${
                    isLightMode ? 'border-sky-100' : 'border-slate-800/50'
                  }`}
                >
                  {(grupo.aulas || []).map((aula) => {
                    const ativa = aula.idStr === aulaAtiva?.idStr;
                    const concluida = isAulaConcluida?.(curso.id, aula.id);
                    const papoFeito = !!conversasCurso?.[aula.id]?.concluida;

                    return (
                      <div
                        key={aula.idStr}
                        className={`rounded-xl border transition-all ${
                          ativa
                            ? isLightMode
                              ? 'bg-sky-50 border-[#0284c7] shadow-xs ring-1 ring-sky-300/60'
                              : 'bg-sky-500/15 border-sky-400/70 shadow-sm'
                            : isLightMode
                            ? 'bg-white hover:bg-sky-50/50 border-sky-200/80'
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
                            <CheckCircle2
                              className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                                isLightMode ? 'text-emerald-600' : 'text-emerald-400'
                              }`}
                            />
                          ) : (
                            <Circle
                              className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                                ativa
                                  ? isLightMode
                                    ? 'text-[#0284c7]'
                                    : 'text-sky-400'
                                  : 'text-slate-400'
                              }`}
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span
                                className={`text-[10px] font-mono font-extrabold ${
                                  ativa
                                    ? isLightMode
                                      ? 'text-[#0369a1]'
                                      : 'text-sky-400'
                                    : 'text-slate-500'
                                }`}
                              >
                                [{String(aula.id).toUpperCase()}]
                              </span>
                              {aula.possuiConversa && (
                                <span
                                  className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded border ${
                                    papoFeito
                                      ? isLightMode
                                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                        : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                                      : isLightMode
                                      ? 'bg-amber-100 text-amber-800 border-amber-300'
                                      : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
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
                                    ? 'font-extrabold text-[#1a3a5c]'
                                    : 'font-extrabold text-white'
                                  : isLightMode
                                  ? 'font-semibold text-slate-700'
                                  : 'font-medium text-slate-300'
                              }`}
                            >
                              {aula.titulo.replace(/^Aula \d+[\s\-:]+/i, '')}
                            </p>
                          </div>
                        </button>

                        {/* Sub-botões diretos de ferramenta quando a aula está ativa */}
                        {ativa && (
                          <div
                            className={`px-2 pb-2 pt-1.5 flex items-center gap-1 border-t ${
                              isLightMode ? 'border-sky-200/80' : 'border-sky-500/20'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => {
                                onSelectAula?.(aula, 'bancada');
                                onCloseMobileDrawer?.();
                              }}
                              className={`flex-1 py-1 px-1.5 rounded-lg text-[10px] font-extrabold flex items-center justify-center gap-1 cursor-pointer ${
                                isLightMode
                                  ? 'bg-[#0369a1] hover:bg-[#0284c7] text-white'
                                  : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300'
                              }`}
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
                                className={`flex-1 py-1 px-1.5 rounded-lg text-[10px] font-extrabold flex items-center justify-center gap-1 cursor-pointer border ${
                                  isLightMode
                                    ? 'bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-300'
                                    : 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/30'
                                }`}
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
                                className={`flex-1 py-1 px-1.5 rounded-lg text-[10px] font-extrabold flex items-center justify-center gap-1 cursor-pointer border ${
                                  isLightMode
                                    ? 'bg-white hover:bg-sky-100 text-[#0369a1] border-sky-200'
                                    : 'bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border-sky-500/30'
                                }`}
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
