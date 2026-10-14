// src/components/conversa/beats/BeatQuiz.jsx
import React, { useEffect, useRef } from 'react';
import Balao from '../Balao';
import TextoConversa from '../TextoConversa';
import { Wrench, CheckCircle2, XCircle } from 'lucide-react';

/**
 * BeatQuiz — Momento "Desafio do Balcão" (diagnóstico aplicado de campo).
 * Exige exatamente 1 opção `correta: true` e exibe feedback técnico imediato
 * na voz do elenco.
 */
export default function BeatQuiz({
  beat,
  respostaSalva,
  onResponder,
  autoFocusOpcoes = false,
}) {
  const primeiraOpcaoRef = useRef(null);
  const opcaoSelecionada = beat.opcoes?.find((o) => o.id === respostaSalva) || null;
  const acertou = Boolean(opcaoSelecionada?.correta);

  useEffect(() => {
    if (autoFocusOpcoes && !respostaSalva && primeiraOpcaoRef.current) {
      primeiraOpcaoRef.current.focus();
    }
  }, [autoFocusOpcoes, respostaSalva]);

  return (
    <div
      role="group"
      aria-labelledby={`quiz-${beat.id}`}
      className="my-5 rounded-2xl border border-amber-500/40 bg-slate-900/95 p-5 shadow-lg"
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-400">
          <Wrench className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          <span>Desafio do Balcão · Diagnóstico de Campo</span>
        </div>
        {opcaoSelecionada && (
          <span
            className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
              acertou
                ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
                : 'bg-rose-950/80 border-rose-500/50 text-rose-300'
            }`}
          >
            {acertou ? 'Diagnóstico Certeiro' : 'Reveja os Sinais'}
          </span>
        )}
      </div>

      <p
        id={`quiz-${beat.id}`}
        className="text-sm sm:text-base font-bold text-slate-100 leading-snug mb-4"
      >
        <TextoConversa texto={beat.enunciado} />
      </p>

      <div className="grid grid-cols-1 gap-2.5">
        {(beat.opcoes || []).map((opcao, idx) => {
          const selecionada = respostaSalva === opcao.id;
          const jaRespondeu = Boolean(respostaSalva);

          let estilo =
            'border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-800 hover:border-amber-400/50';
          if (selecionada && opcao.correta) {
            estilo = 'border-emerald-500 bg-emerald-950/55 text-emerald-100';
          } else if (selecionada && !opcao.correta) {
            estilo = 'border-rose-500 bg-rose-950/45 text-rose-100';
          } else if (jaRespondeu && opcao.correta) {
            estilo = 'border-emerald-500/50 bg-emerald-950/25 text-emerald-200';
          }

          return (
            <button
              key={opcao.id}
              ref={idx === 0 ? primeiraOpcaoRef : null}
              type="button"
              onClick={() => onResponder(beat.id, opcao.id)}
              aria-pressed={selecionada}
              className={`w-full text-left px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer flex items-start gap-3 focus:outline-none focus:ring-2 focus:ring-amber-400 ${estilo}`}
            >
              <span
                className="w-6 h-6 rounded-lg bg-slate-900/90 border border-slate-600 flex items-center justify-center text-xs font-extrabold uppercase flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                {opcao.id}
              </span>
              <span className="flex-1 leading-relaxed">
                <TextoConversa texto={opcao.texto} />
              </span>
              {jaRespondeu && opcao.correta && (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  <span className="sr-only">Correta</span>
                </span>
              )}
              {selecionada && !opcao.correta && (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-400 flex-shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4" aria-hidden="true" />
                  <span className="sr-only">Incorreta</span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback imediato no personagem */}
      {opcaoSelecionada && Array.isArray(opcaoSelecionada.feedback) && (
        <div
          aria-live="polite"
          className="mt-4 pt-3 border-t border-slate-800"
        >
          {opcaoSelecionada.feedback.map((fala, i) => (
            <Balao
              key={`${opcaoSelecionada.id}-fb-${i}`}
              quem={fala.quem}
              emocao={fala.emocao}
              texto={fala.texto}
              fonte={fala.fonte || beat.fonte}
              compacto
            />
          ))}
        </div>
      )}
    </div>
  );
}
