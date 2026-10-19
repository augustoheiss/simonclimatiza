// src/components/workbench/CadBenchView.jsx
// Viewport Principal da "Bancada Prática & Raio-X CAD" (Zero-Scroll Click-Driven).
// Cada tópico da aula é um botão técnico estilo AutoCAD. Clicar em um botão abre:
// [1] Visão Prática, Filosófica e Bem-Humorada do Simon + Diálogos Ancorados da Turma
// [2] Especificação Técnica 100% Detalhada dividida em Sub-Botões (<h3>/<h4>) sem paredão de texto
// [3] Desafios Práticos de Bancada, Causos Reais e Filosofia de Oficina

import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import {
  Wrench,
  Flame,
  Gauge,
  BookOpen,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Coffee,
  AlertTriangle,
  Cpu,
  Target,
  Layers,
  Table2,
  Info,
  Play,
} from 'lucide-react';
import { ELENCO } from '../conversa/elenco';
import TextoConversa from '../conversa/TextoConversa';
import BeatEscolha from '../conversa/beats/BeatEscolha';
import BeatQuiz from '../conversa/beats/BeatQuiz';
import BeatMitoVerdade from '../conversa/beats/BeatMitoVerdade';
import BeatCauso from '../conversa/beats/BeatCauso';
import BeatFilosofia from '../conversa/beats/BeatFilosofia';
import BeatCalculadoraCampo from '../conversa/beats/BeatCalculadoraCampo';
import BeatInspecaoVisual from '../conversa/beats/BeatInspecaoVisual';
import BeatSaideira from '../conversa/beats/BeatSaideira';

function SafeCadHTML({ html, isLightMode }) {
  if (!html) return null;
  const clean = DOMPurify.sanitize(html, {
    FORCE_BODY: true,
    ADD_TAGS: ['style', 'input', 'label'],
    ADD_ATTR: ['checked', 'name', 'id', 'for', 'class', 'style', 'type', 'disabled', 'value'],
  });
  return (
    <div
      className={`prose-custom max-w-none text-sm leading-relaxed ${
        isLightMode ? 'text-slate-800' : 'cad-dark-prose text-slate-200'
      }`}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}

export default function CadBenchView({
  aula,
  dadosCad,
  corCurso = '#0ea5e9',
  isLightMode = false,
  onSelectViewport,
  onOpenInspectorTab,
  initialLens = 'pratica', // 'pratica' | 'detalhado' | 'desafios'
}) {
  const {
    nos = [],
    tabelas = [],
    infoboxes = [],
    grandezasGerais = [],
    filosofiasAula = [],
    causosAula = [],
    desafiosAula = [],
    saideiraAula = null,
  } = dadosCad || {};

  const [noIdx, setNoIdx] = useState(0);
  const [subNoIdx, setSubNoIdx] = useState(0);
  const [lenteAtiva, setLenteAtiva] = useState(initialLens);
  const [desafioIdx, setDesafioIdx] = useState(0);
  const [respostasLocais, setRespostasLocais] = useState({});
  const [passosMarcados, setPassosMarcados] = useState({});

  // Reseta índices ao trocar de aula
  useEffect(() => {
    setNoIdx(0);
    setSubNoIdx(0);
    setDesafioIdx(0);
  }, [aula?.id]);

  // Atualiza lente se o botão da Ribbon mudar entre [F1] Bancada Prática e [F4] Raio-X Detalhado
  useEffect(() => {
    setLenteAtiva(initialLens);
  }, [initialLens]);

  const noAtivo = nos[noIdx] || nos[0] || null;
  const subNos = noAtivo?.subNos || [];
  const subNoAtivo = subNos[subNoIdx] || subNos[0] || null;

  const handleSelectNo = (index) => {
    setNoIdx(index);
    setSubNoIdx(0);
  };

  const togglePasso = (chave) => {
    setPassosMarcados((prev) => ({ ...prev, [chave]: !prev[chave] }));
  };

  const registrarRespostaLocal = (beatId, valor) => {
    setRespostasLocais((prev) => ({ ...prev, [beatId]: valor }));
  };

  if (!noAtivo) {
    return (
      <div className="h-full flex items-center justify-center p-8 text-center">
        <div className="max-w-md">
          <Cpu className="w-10 h-10 mx-auto mb-3 text-sky-400 opacity-70" />
          <p className="text-sm font-bold text-slate-300">Selecione uma aula ou ferramenta na barra superior.</p>
        </div>
      </div>
    );
  }

  const todosDesafios = desafiosAula.length > 0 ? desafiosAula : noAtivo.desafiosNo || [];
  const desafioAtual = todosDesafios[desafioIdx] || todosDesafios[0] || null;

  return (
    <div className="h-full flex flex-col overflow-hidden select-none sm:select-text">
      {/* ── SUB-RIBBON DA AULA: SELETOR DE BLOCOS CAD (BOTÕES DE NÓS DA AULA) ── */}
      <div
        className={`flex-shrink-0 border-b px-3 py-2 flex flex-col gap-2 ${
          isLightMode
            ? 'bg-slate-100 border-slate-300'
            : 'bg-slate-900/95 border-slate-800'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border flex-shrink-0"
              style={{
                backgroundColor: `${corCurso}20`,
                borderColor: `${corCurso}60`,
                color: isLightMode ? '#0369a1' : '#38bdf8',
              }}
            >
              BLOCOS DA AULA ({noIdx + 1}/{nos.length})
            </span>
            <span
              className={`text-xs font-bold truncate ${
                isLightMode ? 'text-slate-700' : 'text-slate-300'
              }`}
            >
              Clique em um botão abaixo para abrir o componente técnico na tela:
            </span>
          </div>

          {/* Atalhos Rápidos de Bancada */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {aula?.possuiConversa && (
              <button
                type="button"
                onClick={() => onSelectViewport?.('conversa')}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-500/15 hover:bg-amber-500/25 text-amber-400 border border-amber-500/30 transition-all cursor-pointer"
                title="Abrir diálogo interativo completo do Papo de Balcão"
              >
                <Coffee className="w-3.5 h-3.5" />
                <span>Papo Completo</span>
              </button>
            )}
            {tabelas.length > 0 && (
              <button
                type="button"
                onClick={() => onOpenInspectorTab?.('tabelas')}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-sky-500/15 hover:bg-sky-500/25 text-sky-400 border border-sky-500/30 transition-all cursor-pointer"
              >
                <Table2 className="w-3.5 h-3.5" />
                <span>{tabelas.length} Tabela(s)</span>
              </button>
            )}
            {infoboxes.length > 0 && (
              <button
                type="button"
                onClick={() => onOpenInspectorTab?.('infobox')}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 transition-all cursor-pointer"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Info Campo</span>
              </button>
            )}
          </div>
        </div>

        {/* Matriz Horizontal de Botões de Nós (Tópicos da Aula) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {nos.map((no, idx) => {
            const ativo = idx === noIdx;
            return (
              <button
                key={no.id}
                type="button"
                onClick={() => handleSelectNo(idx)}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg border text-left transition-all flex-shrink-0 cursor-pointer ${
                  ativo
                    ? isLightMode
                      ? 'bg-sky-600 text-white border-sky-700 shadow-sm'
                      : 'bg-sky-500/20 text-sky-200 border-sky-400 shadow-md shadow-sky-950/50'
                    : isLightMode
                    ? 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
                    : 'bg-slate-800/70 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border-slate-700/70'
                }`}
              >
                <span
                  className={`text-[10px] font-mono font-extrabold px-1.5 py-0.5 rounded ${
                    ativo
                      ? isLightMode
                        ? 'bg-sky-800 text-sky-100'
                        : 'bg-sky-400 text-slate-950'
                      : isLightMode
                      ? 'bg-slate-200 text-slate-700'
                      : 'bg-slate-900 text-slate-400'
                  }`}
                >
                  {no.codigoCad}
                </span>
                <span className="text-xs font-bold max-w-[190px] truncate">{no.titulo}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── BARRA DE LENTES DO BLOCO ATIVO (3 MODOS DE INSPECIONAR O TÓPICO) ── */}
      <div
        className={`flex-shrink-0 border-b px-4 py-2 flex flex-wrap items-center justify-between gap-2 ${
          isLightMode
            ? 'bg-white border-slate-200'
            : 'bg-slate-950/90 border-slate-800/80'
        }`}
      >
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setLenteAtiva('pratica')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer border ${
              lenteAtiva === 'pratica'
                ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm'
                : isLightMode
                ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>1. Prática & Papo Sincero</span>
          </button>

          <button
            type="button"
            onClick={() => setLenteAtiva('detalhado')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer border ${
              lenteAtiva === 'detalhado'
                ? 'bg-sky-500 text-slate-950 border-sky-400 shadow-sm'
                : isLightMode
                ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>2. Especificação 100% Detalhada ({subNos.length} {subNos.length === 1 ? 'Prancha' : 'Sub-Botões'})</span>
          </button>

          {(todosDesafios.length > 0 || filosofiasAula.length > 0 || causosAula.length > 0) && (
            <button
              type="button"
              onClick={() => setLenteAtiva('desafios')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer border ${
                lenteAtiva === 'desafios'
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-sm'
                  : isLightMode
                  ? 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>3. Simulador, Causos & Filosofia ({todosDesafios.length + filosofiasAula.length + causosAula.length})</span>
            </button>
          )}
        </div>

        {/* Navegador Rápido Bloco Anterior / Próximo Bloco */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            disabled={noIdx === 0}
            onClick={() => handleSelectNo(Math.max(0, noIdx - 1))}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded border text-xs font-bold transition-all cursor-pointer disabled:opacity-30 ${
              isLightMode
                ? 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Bloco Ant.</span>
          </button>
          <button
            type="button"
            disabled={noIdx >= nos.length - 1}
            onClick={() => handleSelectNo(Math.min(nos.length - 1, noIdx + 1))}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded border text-xs font-bold transition-all cursor-pointer disabled:opacity-30 ${
              isLightMode
                ? 'bg-sky-50 border-sky-300 text-sky-800 hover:bg-sky-100'
                : 'bg-sky-500/15 border-sky-500/40 text-sky-300 hover:bg-sky-500/25'
            }`}
          >
            <span>Próx. Bloco</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── ÁREA CENTRAL DO CANVAS DO BLOCO (CONTEÚDO DA LENTE ATIVA) ── */}
      <div className="flex-1 min-h-0 overflow-y-auto p-4 md:p-5">
        {/* ════════════════════════════════════════════════════════════════════
            LENTE 1: PRÁTICA DE BANCADA & PAPO SINCERO DO SIMON
        ════════════════════════════════════════════════════════════════════ */}
        {lenteAtiva === 'pratica' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            {/* Coluna Esquerda (7 cols): Briefing Sincero do Simon + Diálogo da Turma no Tópico */}
            <div className="lg:col-span-7 space-y-4">
              {/* Card Principal: Tradução Prática & Filosófica do Professor Simon */}
              <div
                className={`rounded-2xl border p-5 relative overflow-hidden ${
                  isLightMode
                    ? 'bg-gradient-to-br from-sky-50 to-white border-sky-200 shadow-sm'
                    : 'bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 border-sky-500/30 shadow-lg'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center flex-shrink-0 text-sky-400 font-black text-sm">
                    SS
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {noAtivo.notaSimon?.tag || 'BANCADA PRÁTICA'}
                      </span>
                      <span className="text-xs font-bold text-sky-400">
                        Prof. Simon Souza · Tradução Direta pro Campo
                      </span>
                    </div>
                    <h2
                      className={`text-base md:text-lg font-extrabold leading-snug mb-2 ${
                        isLightMode ? 'text-slate-900' : 'text-white'
                      }`}
                    >
                      {noAtivo.codigoCad} — {noAtivo.titulo}
                    </h2>
                    <p
                      className={`text-sm leading-relaxed font-medium ${
                        isLightMode ? 'text-slate-700' : 'text-slate-200'
                      }`}
                    >
                      “{noAtivo.notaSimon?.falaSimon}”
                    </p>

                    {/* Filosofia de Oficina & Ação Imediata */}
                    <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div
                        className={`rounded-xl p-3 border ${
                          isLightMode
                            ? 'bg-amber-50/80 border-amber-200 text-amber-950'
                            : 'bg-amber-500/10 border-amber-500/25 text-amber-200'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-amber-400 mb-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Filosofia de Bancada</span>
                        </div>
                        <p className="text-xs leading-relaxed">{noAtivo.notaSimon?.filosofia}</p>
                      </div>

                      <div
                        className={`rounded-xl p-3 border ${
                          isLightMode
                            ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                            : 'bg-emerald-500/10 border-emerald-500/25 text-emerald-200'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-400 mb-1">
                          <Wrench className="w-3.5 h-3.5" />
                          <span>Execução na Ferramenta</span>
                        </div>
                        <p className="text-xs leading-relaxed">{noAtivo.notaSimon?.acaoPratica}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Falas da Turma (Simon, Bia, Juninho) ancoradas exatamente neste tópico */}
              {noAtivo.falasTurma && noAtivo.falasTurma.length > 0 && (
                <div
                  className={`rounded-2xl border p-4 space-y-3 ${
                    isLightMode
                      ? 'bg-white border-slate-200'
                      : 'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Coffee className="w-3.5 h-3.5" />
                      O que a turma fala na bancada sobre "{noAtivo.titulo}"
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectViewport?.('conversa')}
                      className="text-[11px] font-bold text-sky-400 hover:underline cursor-pointer"
                    >
                      Abrir diálogo interativo →
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {noAtivo.falasTurma.slice(0, 4).map((beat) => {
                      const personagem = ELENCO[beat.quem] || ELENCO.simon;
                      return (
                        <div
                          key={beat.id}
                          className={`rounded-xl p-3 border flex items-start gap-3 ${
                            isLightMode
                              ? 'bg-slate-50 border-slate-200'
                              : 'bg-slate-950/70 border-slate-800/90'
                          }`}
                        >
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5"
                            style={{
                              backgroundColor: `${personagem.cor}25`,
                              color: personagem.cor,
                              border: `1px solid ${personagem.cor}50`,
                            }}
                          >
                            {personagem.iniciais}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-xs font-extrabold" style={{ color: personagem.cor }}>
                                {personagem.nome}
                              </span>
                              <span className="text-[10px] text-slate-500">{personagem.papel}</span>
                            </div>
                            <div
                              className={`text-xs leading-relaxed ${
                                isLightMode ? 'text-slate-700' : 'text-slate-200'
                              }`}
                            >
                              <TextoConversa texto={beat.texto} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Coluna Direita (5 cols): HUD de Grandezas Físicas + Checklist Prático + Ponte para Especificação Integral */}
            <div className="lg:col-span-5 space-y-4">
              {/* HUD Digital de Grandezas Físicas e Medidas do Tópico */}
              <div
                className={`rounded-2xl border p-4 ${
                  isLightMode
                    ? 'bg-white border-slate-200'
                    : 'bg-slate-900/90 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-black uppercase tracking-widest text-sky-400 flex items-center gap-1.5">
                    <Gauge className="w-4 h-4" />
                    Parâmetros Físicos & Medidas no Instrumento
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">HUD TELEMETRIA</span>
                </div>

                {(noAtivo.grandezas?.length > 0 ? noAtivo.grandezas : grandezasGerais).length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {(noAtivo.grandezas?.length > 0 ? noAtivo.grandezas : grandezasGerais.slice(0, 6)).map(
                      (grandeza, gIdx) => (
                        <button
                          key={gIdx}
                          type="button"
                          onClick={() => setLenteAtiva('detalhado')}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                            isLightMode
                              ? 'bg-slate-50 hover:bg-sky-50 border-slate-200 hover:border-sky-300'
                              : 'bg-slate-950 hover:bg-sky-950/40 border-slate-800 hover:border-sky-500/40'
                          }`}
                          title="Clique para inspecionar este parâmetro na especificação detalhada"
                        >
                          <span className="block text-[9px] font-mono uppercase text-slate-500">
                            LEITURA #{String(gIdx + 1).padStart(2, '0')}
                          </span>
                          <span
                            className={`text-sm font-mono font-black ${
                              isLightMode ? 'text-sky-700' : 'text-emerald-400'
                            }`}
                          >
                            {grandeza}
                          </span>
                        </button>
                      )
                    )}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400">
                    Conceito estrutural/operacional. Inspecione os pontos-chave abaixo.
                  </p>
                )}
              </div>

              {/* Pontos-Chave Clicáveis de Verificação em Bancada */}
              {noAtivo.destaquesPraticos && noAtivo.destaquesPraticos.length > 0 && (
                <div
                  className={`rounded-2xl border p-4 ${
                    isLightMode
                      ? 'bg-white border-slate-200'
                      : 'bg-slate-900/90 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Checklist de Execução Prática (Clique para validar)
                    </span>
                  </div>
                  <div className="space-y-2">
                    {noAtivo.destaquesPraticos.map((ponto, pIdx) => {
                      const chave = `${noAtivo.id}-p-${pIdx}`;
                      const marcado = !!passosMarcados[chave];
                      return (
                        <button
                          key={chave}
                          type="button"
                          onClick={() => togglePasso(chave)}
                          className={`w-full text-left p-2.5 rounded-xl border flex items-start gap-2.5 transition-all cursor-pointer ${
                            marcado
                              ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                              : isLightMode
                              ? 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                              : 'bg-slate-950/70 hover:bg-slate-950 border-slate-800 text-slate-300'
                          }`}
                        >
                          <CheckCircle2
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              marcado ? 'text-emerald-400' : 'text-slate-500'
                            }`}
                          />
                          <span className="text-xs leading-relaxed font-medium">{ponto}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Botões de Ação Direta para Destravar a Especificação Técnica ou Simulador do Bloco */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setLenteAtiva('detalhado')}
                  className="w-full p-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs flex items-center justify-between shadow-lg shadow-sky-500/15 transition-all cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Abrir Raio-X 100% Detalhado</span>
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                {todosDesafios.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setLenteAtiva('desafios')}
                    className="w-full p-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs flex items-center justify-between shadow-lg shadow-amber-500/15 transition-all cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      <span>Testar na Bancada ({todosDesafios.length})</span>
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            LENTE 2: ESPECIFICAÇÃO TÉCNICA 100% DETALHADA (EM SUB-BOTÕES ZERO-SCROLL)
        ════════════════════════════════════════════════════════════════════ */}
        {lenteAtiva === 'detalhado' && (
          <div className="space-y-4">
            {/* Se houver múltiplos sub-nós (<h3>/<h4>), exibe os botões para não precisar rolar */}
            {subNos.length > 1 && (
              <div
                className={`rounded-xl border p-3 flex flex-wrap items-center gap-1.5 ${
                  isLightMode
                    ? 'bg-slate-100 border-slate-200'
                    : 'bg-slate-900/90 border-slate-800'
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 mr-2">
                  Sub-Camadas de "{noAtivo.titulo}":
                </span>
                {subNos.map((sub, sIdx) => {
                  const ativo = subNoIdx === sIdx;
                  return (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => setSubNoIdx(sIdx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        ativo
                          ? 'bg-sky-500 text-slate-950 border-sky-400'
                          : isLightMode
                          ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {sIdx + 1}. {sub.titulo}
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() => setSubNoIdx(-1)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                    subNoIdx === -1
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                      : isLightMode
                      ? 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  Ver Bloco Completo
                </button>
              </div>
            )}

            {/* Banner compacto da voz do Simon no topo da especificação técnica */}
            <div
              className={`rounded-xl border px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                isLightMode
                  ? 'bg-sky-50 border-sky-200 text-slate-800'
                  : 'bg-sky-950/30 border-sky-500/30 text-slate-200'
              }`}
            >
              <div className="flex items-center gap-2 text-xs">
                <Flame className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>
                  <strong className="text-sky-400">Lembrete do Simon:</strong>{' '}
                  {noAtivo.notaSimon?.acaoPratica}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLenteAtiva('pratica')}
                className="text-[11px] font-bold text-emerald-400 hover:underline flex-shrink-0 cursor-pointer"
              >
                ← Voltar ao Resumo Prático
              </button>
            </div>

            {/* Prancha CAD com o HTML Técnico Integral (da sub-camada ativa ou do bloco inteiro) */}
            <div
              className={`rounded-2xl border p-5 md:p-7 shadow-inner ${
                isLightMode
                  ? 'bg-[#FFFDFB] border-slate-300 text-slate-900'
                  : 'bg-[#FFF8F6] border-sky-500/30 text-slate-900'
              }`}
            >
              <SafeCadHTML
                html={subNoIdx === -1 || !subNoAtivo ? noAtivo.htmlOriginal : subNoAtivo.html}
                isLightMode={true}
              />
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            LENTE 3: SIMULADOR DE BANCADA, CAUSOS REAIS E FILOSOFIA DO SIMON
        ════════════════════════════════════════════════════════════════════ */}
        {lenteAtiva === 'desafios' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            {/* Coluna Esquerda: Simulador Interativo (Quizzes, Calculadoras, Inspeções, Mito/Verdade) */}
            <div className="lg:col-span-7 space-y-4">
              {todosDesafios.length > 0 && desafioAtual ? (
                <div
                  className={`rounded-2xl border p-4 ${
                    isLightMode
                      ? 'bg-white border-slate-200'
                      : 'bg-slate-900/90 border-slate-800'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Target className="w-4 h-4" />
                      Desafio Prático de Bancada ({desafioIdx + 1} de {todosDesafios.length})
                    </span>
                    <div className="flex items-center gap-1">
                      {todosDesafios.map((d, idx) => (
                        <button
                          key={d.id || idx}
                          type="button"
                          onClick={() => setDesafioIdx(idx)}
                          className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer ${
                            idx === desafioIdx
                              ? 'bg-amber-400 text-slate-950'
                              : 'bg-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          #{idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  {desafioAtual.tipo === 'escolha' && (
                    <BeatEscolha
                      beat={desafioAtual}
                      respostaSalva={respostasLocais[desafioAtual.id]}
                      onResponder={(val) => registrarRespostaLocal(desafioAtual.id, val)}
                    />
                  )}
                  {desafioAtual.tipo === 'quiz' && (
                    <BeatQuiz
                      beat={desafioAtual}
                      respostaSalva={respostasLocais[desafioAtual.id]}
                      onResponder={(val) => registrarRespostaLocal(desafioAtual.id, val)}
                    />
                  )}
                  {desafioAtual.tipo === 'mitoVerdade' && (
                    <BeatMitoVerdade
                      beat={desafioAtual}
                      respostaSalva={respostasLocais[desafioAtual.id]}
                      onResponder={(val) => registrarRespostaLocal(desafioAtual.id, val)}
                    />
                  )}
                  {desafioAtual.tipo === 'calculadora' && (
                    <BeatCalculadoraCampo
                      beat={desafioAtual}
                      respostaSalva={respostasLocais[desafioAtual.id]}
                      onResponder={(val) => registrarRespostaLocal(desafioAtual.id, val)}
                    />
                  )}
                  {desafioAtual.tipo === 'inspecao' && (
                    <BeatInspecaoVisual
                      beat={desafioAtual}
                      respostaSalva={respostasLocais[desafioAtual.id]}
                      onResponder={(val) => registrarRespostaLocal(desafioAtual.id, val)}
                    />
                  )}
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center">
                  <p className="text-xs text-slate-400">
                    Para mais interações passo a passo, acione o botão [F2] Papo de Balcão na barra superior.
                  </p>
                </div>
              )}
            </div>

            {/* Coluna Direita: Filosofia de Oficina, Causos Reais e Saideira da Aula */}
            <div className="lg:col-span-5 space-y-4">
              {filosofiasAula.map((fil) => (
                <BeatFilosofia key={fil.id} beat={fil} />
              ))}
              {causosAula.map((causo) => (
                <BeatCauso key={causo.id} beat={causo} />
              ))}
              {saideiraAula && <BeatSaideira beat={saideiraAula} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
