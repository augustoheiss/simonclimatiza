// src/components/workbench/CadInspectorDock.jsx
// Painel Inspetor Direito (Estilo AutoCAD Properties / Engineering Prancheta)
// Permite consultar Tabelas Técnicas, Infobox de Campo e Telemetria de Grandezas
// clicando em botões de prancha sem rolar a página principal.

import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import {
  Table2,
  Info,
  Gauge,
  X,
  Maximize2,
  Minimize2,
  ChevronRight,
  ChevronLeft,
  Flame,
  Wrench,
} from 'lucide-react';

function SafeTableHTML({ html }) {
  if (!html) return null;
  const clean = DOMPurify.sanitize(html, {
    FORCE_BODY: true,
    ADD_TAGS: ['style', 'input', 'label'],
    ADD_ATTR: ['checked', 'name', 'id', 'for', 'class', 'style', 'type', 'disabled', 'value'],
  });
  return (
    <div
      className="prose-custom max-w-none text-xs md:text-sm text-slate-900 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}

export default function CadInspectorDock({
  dadosCad,
  aula,
  abaAtiva = 'tabelas', // 'tabelas' | 'infobox' | 'telemetria'
  onChangeAba,
  onCloseDock,
  isFullViewport = false,
  isLightMode = false,
}) {
  const { tabelas = [], infoboxes = [], grandezasGerais = [] } = dadosCad || {};
  const [indiceTabela, setIndiceTabela] = useState(0);
  const [indiceInfobox, setIndiceInfobox] = useState(0);
  const [expandido, setExpandido] = useState(false);

  useEffect(() => {
    setIndiceTabela(0);
    setIndiceInfobox(0);
  }, [aula?.id]);

  // Ajusta aba se a atual estiver vazia
  const abaEfetiva =
    abaAtiva === 'tabelas' && tabelas.length === 0
      ? infoboxes.length > 0
        ? 'infobox'
        : 'telemetria'
      : abaAtiva === 'infobox' && infoboxes.length === 0
      ? tabelas.length > 0
        ? 'tabelas'
        : 'telemetria'
      : abaAtiva;

  const tabelaAtual = tabelas[indiceTabela] || tabelas[0] || null;
  const infoboxAtual = infoboxes[indiceInfobox] || infoboxes[0] || null;

  return (
    <div
      className={`h-full flex flex-col overflow-hidden ${
        isFullViewport
          ? 'w-full'
          : expandido
          ? 'w-full md:w-[540px] lg:w-[620px]'
          : 'w-full md:w-[370px] lg:w-[420px]'
      } ${
        isLightMode
          ? 'bg-slate-50 border-l border-slate-300 text-slate-900'
          : 'bg-slate-900/95 border-l border-slate-800 text-slate-100'
      }`}
    >
      {/* ── Cabeçalho do Inspetor CAD ── */}
      <div
        className={`flex-shrink-0 px-3 py-2 border-b flex items-center justify-between gap-2 ${
          isLightMode ? 'bg-slate-200/80 border-slate-300' : 'bg-slate-950 border-slate-800'
        }`}
      >
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onChangeAba?.('tabelas')}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-extrabold transition-all cursor-pointer ${
              abaEfetiva === 'tabelas'
                ? 'bg-sky-500 text-slate-950 shadow-sm'
                : isLightMode
                ? 'text-slate-600 hover:bg-slate-300/60'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <Table2 className="w-3.5 h-3.5" />
            <span>Tabelas ({tabelas.length})</span>
          </button>

          <button
            type="button"
            onClick={() => onChangeAba?.('infobox')}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-extrabold transition-all cursor-pointer ${
              abaEfetiva === 'infobox'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : isLightMode
                ? 'text-slate-600 hover:bg-slate-300/60'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>Info Campo ({infoboxes.length})</span>
          </button>

          <button
            type="button"
            onClick={() => onChangeAba?.('telemetria')}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-extrabold transition-all cursor-pointer ${
              abaEfetiva === 'telemetria'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : isLightMode
                ? 'text-slate-600 hover:bg-slate-300/60'
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <Gauge className="w-3.5 h-3.5" />
            <span>Medidas ({grandezasGerais.length})</span>
          </button>
        </div>

        {!isFullViewport && (
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setExpandido((v) => !v)}
              className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer hidden md:inline-flex"
              title={expandido ? 'Reduzir largura do Dock' : 'Expandir largura do Dock'}
            >
              {expandido ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            {onCloseDock && (
              <button
                type="button"
                onClick={onCloseDock}
                className="p-1 rounded hover:bg-red-500/20 text-slate-400 hover:text-red-400 cursor-pointer"
                title="Fechar Dock Inspetor"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* ── Corpo do Inspetor ── */}
      <div className="flex-1 min-h-0 overflow-y-auto p-3.5 space-y-3">
        {/* ABA 1: TABELAS & PARÂMETROS */}
        {abaEfetiva === 'tabelas' && (
          <>
            {tabelas.length > 0 && tabelaAtual ? (
              <div className="space-y-3">
                {/* Botões de seleção de tabela se houver mais de uma */}
                {tabelas.length > 1 && (
                  <div className="flex flex-wrap items-center gap-1.5">
                    {tabelas.map((t, idx) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setIndiceTabela(idx)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                          idx === indiceTabela
                            ? 'bg-sky-500 text-slate-950 border-sky-400'
                            : isLightMode
                            ? 'bg-white text-slate-700 border-slate-300'
                            : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {t.codigo}: {t.titulo.slice(0, 28)}
                      </button>
                    ))}
                  </div>
                )}

                <div className="rounded-xl border border-sky-500/30 bg-[#FFF8F6] p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-red-200">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
                      {tabelaAtual.codigo} · PRANCHA DE ENGENHARIA
                    </span>
                    {tabelas.length > 1 && (
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          disabled={indiceTabela === 0}
                          onClick={() => setIndiceTabela((i) => Math.max(0, i - 1))}
                          className="p-1 rounded bg-slate-200 text-slate-700 disabled:opacity-30 cursor-pointer"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-[11px] font-bold text-slate-600">
                          {indiceTabela + 1}/{tabelas.length}
                        </span>
                        <button
                          type="button"
                          disabled={indiceTabela >= tabelas.length - 1}
                          onClick={() => setIndiceTabela((i) => Math.min(tabelas.length - 1, i + 1))}
                          className="p-1 rounded bg-slate-200 text-slate-700 disabled:opacity-30 cursor-pointer"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                  <SafeTableHTML html={tabelaAtual.html} />
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 text-center">
                <Table2 className="w-8 h-8 mx-auto mb-2 text-slate-500" />
                <p className="text-xs font-bold text-slate-300">
                  Os parâmetros numéricos desta aula estão integrados diretamente nos botões da Bancada Prática e na aba Medidas.
                </p>
              </div>
            )}
          </>
        )}

        {/* ABA 2: INFOBOX DE CAMPO */}
        {abaEfetiva === 'infobox' && (
          <>
            {infoboxes.length > 0 && infoboxAtual ? (
              <div className="space-y-3">
                {infoboxes.length > 1 && (
                  <div className="flex flex-wrap items-center gap-1.5">
                    {infoboxes.map((inf, idx) => (
                      <button
                        key={inf.id}
                        type="button"
                        onClick={() => setIndiceInfobox(idx)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                          idx === indiceInfobox
                            ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                            : isLightMode
                            ? 'bg-white text-slate-700 border-slate-300'
                            : 'bg-slate-950 text-slate-300 border-slate-800'
                        }`}
                      >
                        {inf.codigo}: {inf.titulo.slice(0, 26)}
                      </button>
                    ))}
                  </div>
                )}

                <div className="rounded-xl border border-emerald-500/30 bg-[#FFF8F6] p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-red-200">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      {infoboxAtual.codigo} · DIRETRIZ TÁTICA DE CAMPO
                    </span>
                  </div>
                  <SafeTableHTML html={infoboxAtual.html} />
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 text-center">
                <Info className="w-8 h-8 mx-auto mb-2 text-slate-500" />
                <p className="text-xs font-bold text-slate-300">
                  Consulte as notas diretas de bancada do Professor Simon no painel central.
                </p>
              </div>
            )}
          </>
        )}

        {/* ABA 3: TELEMETRIA & GRANDEZAS DA AULA */}
        {abaEfetiva === 'telemetria' && (
          <div className="space-y-3">
            <div
              className={`rounded-xl border p-3.5 ${
                isLightMode ? 'bg-white border-slate-300' : 'bg-slate-950 border-slate-800'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                  Grandezas Críticas desta Aula
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Valores nominais, limites de pressão, temperatura, torque e elétrica extraídos diretamente da especificação da aula:
              </p>
              {grandezasGerais.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {grandezasGerais.map((g, i) => (
                    <div
                      key={i}
                      className={`p-2.5 rounded-lg border ${
                        isLightMode
                          ? 'bg-slate-50 border-slate-200'
                          : 'bg-slate-900 border-slate-800'
                      }`}
                    >
                      <span className="block text-[9px] font-mono text-slate-500">
                        PARAM #{String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-mono font-black text-emerald-400">{g}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500">Nenhuma grandeza numérica isolada nesta aula.</p>
              )}
            </div>

            <div
              className={`rounded-xl border p-3.5 ${
                isLightMode ? 'bg-sky-50 border-sky-200' : 'bg-sky-950/30 border-sky-500/30'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Wrench className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-extrabold text-sky-400">
                  Regra de Bancada do Simon
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                Nunca decore um número solto sem entender qual fenômeno físico o governa. Se a pressão mudou, pergunte primeiro o que aconteceu com a temperatura e com o fluxo de massa!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
