// src/components/conversa/beats/BeatCalculadoraCampo.jsx
import React, { useState } from 'react';
import { Calculator, CheckCircle2, XCircle, Gauge } from 'lucide-react';
import Balao from '../Balao';
import TextoConversa from '../TextoConversa';

/**
 * BeatCalculadoraCampo — Simulador interativo de cálculo de campo no balcão
 * (ex.: cálculo de Sobreaquecimento, Sub-resfriamento, ΔT, queda de pressão Gay-Lussac).
 *
 * Permite ao técnico digitar o valor numérico ou tocar em um dos botões rápidos
 * (`opcoesRapidas`) para acessibilidade mobile com uma mão só.
 */
export default function BeatCalculadoraCampo({
  beat,
  respostaSalva,
  onResponder,
  modoTranscricao = false,
}) {
  const [valorInput, setValorInput] = useState('');

  const tolerancia = typeof beat.tolerancia === 'number' ? beat.tolerancia : 0.15;
  const alvoNumerico = Number(beat.respostaCorreta);

  const verificarAcerto = (val) => {
    const num = Number(String(val).replace(',', '.'));
    if (Number.isNaN(num)) return false;
    return Math.abs(num - alvoNumerico) <= tolerancia;
  };

  const respondido =
    modoTranscricao ||
    (respostaSalva !== undefined && respostaSalva !== null && respostaSalva !== '');

  const valorEfetivo = modoTranscricao ? beat.respostaCorreta : respostaSalva;
  const acertou = respondido ? verificarAcerto(valorEfetivo) : false;

  const submeterValor = (val) => {
    if (respondido) return;
    const textoVal = String(val).trim();
    if (!textoVal) return;
    const ok = verificarAcerto(textoVal);
    onResponder?.(beat.id, textoVal, ok);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    submeterValor(valorInput);
  };

  const falasFeedback = acertou
    ? beat.explicacaoSucesso || []
    : beat.explicacaoErro || beat.explicacaoSucesso || [];

  return (
    <div
      className="my-5 rounded-2xl border p-4 sm:p-6 shadow-lg"
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.92)',
        borderColor: 'rgba(56, 189, 248, 0.35)',
      }}
      role="region"
      aria-label={beat.titulo || 'Simulador de Cálculo de Campo'}
    >
      {/* Cabeçalho do Simulador */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-sky-500/15 text-sky-300 border border-sky-400/30">
          <Calculator className="w-3.5 h-3.5" aria-hidden="true" />
          {beat.titulo || 'Cálculo no Guardanapo'}
        </span>
        {beat.formula && (
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-amber-300 border border-slate-700">
            {beat.formula}
          </span>
        )}
      </div>

      {/* Enunciado */}
      <div className="text-sm sm:text-[15px] text-slate-100 leading-relaxed mb-4">
        <TextoConversa texto={beat.enunciado} />
      </div>

      {/* Visor de Leituras do Manifold / Termômetro */}
      {Array.isArray(beat.leituras) && beat.leituras.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
          {beat.leituras.map((leitura, idx) => (
            <div
              key={idx}
              className="rounded-xl px-3.5 py-2.5 bg-slate-900/90 border border-slate-700/80 flex flex-col justify-between"
            >
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                <Gauge className="w-3 h-3 text-sky-400" aria-hidden="true" />
                {leitura.rotulo}
              </span>
              <span className="text-base sm:text-lg font-mono font-extrabold text-sky-300 mt-0.5">
                {leitura.valor}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Botões de Resposta Rápida (1 toque no mobile) */}
      {Array.isArray(beat.opcoesRapidas) && beat.opcoesRapidas.length > 0 && (
        <div className="mb-3">
          <span className="block text-xs text-slate-400 mb-2 font-medium">
            Toque no resultado calculado ou digite abaixo:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {beat.opcoesRapidas.map((op, idx) => {
              const opStr = String(op);
              const selecionado = respondido && String(valorEfetivo) === opStr;
              const ehCorreta = verificarAcerto(op);

              let estiloBtn =
                'bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 border-slate-600/80';
              if (respondido) {
                if (ehCorreta) {
                  estiloBtn =
                    'bg-emerald-950/80 text-emerald-200 border-emerald-500/70 font-bold';
                } else if (selecionado && !ehCorreta) {
                  estiloBtn = 'bg-rose-950/80 text-rose-200 border-rose-500/70';
                } else {
                  estiloBtn = 'bg-slate-900/50 text-slate-500 border-slate-800 opacity-60';
                }
              }

              return (
                <button
                  key={opStr}
                  type="button"
                  disabled={respondido}
                  onClick={() => submeterValor(opStr)}
                  className={`px-3 py-2.5 rounded-xl border text-sm font-mono font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    respondido ? 'cursor-default' : 'cursor-pointer'
                  } ${estiloBtn}`}
                >
                  <span className="text-[10px] text-slate-400 mr-0.5">[{idx + 1}]</span>
                  <span>
                    {opStr} {beat.unidade || ''}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Campo numérico direto */}
      {!respondido && (
        <form onSubmit={handleSubmitForm} className="flex flex-wrap items-center gap-2 mt-2">
          <label htmlFor={`calc-input-${beat.id}`} className="sr-only">
            Digite o valor calculado em {beat.unidade || 'unidades'}
          </label>
          <div className="relative flex items-center">
            <input
              id={`calc-input-${beat.id}`}
              type="text"
              inputMode="decimal"
              value={valorInput}
              onChange={(e) => setValorInput(e.target.value)}
              placeholder={`Ex.: ${beat.respostaCorreta}`}
              className="w-36 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-600 text-slate-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            {beat.unidade && (
              <span className="ml-2 text-xs font-mono font-bold text-slate-400">
                {beat.unidade}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={!valorInput.trim()}
            className="px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-slate-950 transition-all cursor-pointer"
          >
            Conferir Cálculo
          </button>
        </form>
      )}

      {/* Feedback pós-resposta */}
      {respondido && (
        <div className="mt-4 pt-3 border-t border-slate-800/90" aria-live="polite">
          <div className="flex items-center gap-2 mb-2">
            {acertou ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                Cálculo exato: {beat.respostaCorreta} {beat.unidade || ''}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-400">
                <XCircle className="w-4 h-4" aria-hidden="true" />
                Você anotou {valorEfetivo} {beat.unidade || ''} — o valor correto é{' '}
                {beat.respostaCorreta} {beat.unidade || ''}
              </span>
            )}
          </div>

          {falasFeedback.map((f, i) => (
            <Balao
              key={`${beat.id}-fb-${i}`}
              quem={f.quem || 'bia'}
              emocao={f.emocao}
              texto={f.texto}
              fonte={f.fonte || beat.fonte}
              compacto
            />
          ))}
        </div>
      )}
    </div>
  );
}
