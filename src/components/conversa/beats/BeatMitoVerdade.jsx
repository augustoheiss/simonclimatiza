// src/components/conversa/beats/BeatMitoVerdade.jsx
import React, { useEffect, useRef } from 'react';
import Balao from '../Balao';
import TextoConversa from '../TextoConversa';
import { Flame, Check, X } from 'lucide-react';

/**
 * BeatMitoVerdade — Carta interativa "Mito ou Verdade".
 * O aluno julga uma crença comum de obra ("mito" ou "verdade") e recebe
 * a explicação técnica imediata do elenco.
 */
export default function BeatMitoVerdade({
  beat,
  respostaSalva,
  onResponder,
  autoFocusOpcoes = false,
}) {
  const btnMitoRef = useRef(null);
  const respondeu = respostaSalva === 'mito' || respostaSalva === 'verdade';
  const gabarito = beat.verdade ? 'verdade' : 'mito';
  const acertou = respondeu && respostaSalva === gabarito;

  useEffect(() => {
    if (autoFocusOpcoes && !respondeu && btnMitoRef.current) {
      btnMitoRef.current.focus();
    }
  }, [autoFocusOpcoes, respondeu]);

  return (
    <div
      role="group"
      aria-labelledby={`mito-${beat.id}`}
      className="my-5 rounded-2xl border border-violet-500/40 bg-slate-900/90 p-5 shadow-lg"
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-violet-400">
          <Flame className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          <span>Mito ou Verdade de Obra?</span>
        </div>
        {respondeu && (
          <span
            className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
              acertou
                ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
                : 'bg-amber-950/80 border-amber-500/50 text-amber-300'
            }`}
          >
            {acertou
              ? `Boa! É ${beat.verdade ? 'VERDADE' : 'MITO'}`
              : `Cuidado! Na real é ${beat.verdade ? 'VERDADE' : 'MITO'}`}
          </span>
        )}
      </div>

      <blockquote
        id={`mito-${beat.id}`}
        className="text-sm sm:text-base font-bold text-slate-100 italic bg-slate-800/70 border-l-4 border-violet-400 px-4 py-3 rounded-r-xl mb-4"
      >
        “<TextoConversa texto={beat.afirmacao} />”
      </blockquote>

      <div className="grid grid-cols-2 gap-3">
        <button
          ref={btnMitoRef}
          type="button"
          onClick={() => onResponder(beat.id, 'mito')}
          aria-pressed={respostaSalva === 'mito'}
          className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-violet-400 ${
            respostaSalva === 'mito'
              ? !beat.verdade
                ? 'border-emerald-500 bg-emerald-950/60 text-emerald-200'
                : 'border-rose-500 bg-rose-950/60 text-rose-200'
              : 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
          }`}
        >
          <X className="w-4 h-4" aria-hidden="true" />
          <span>É Mito</span>
        </button>

        <button
          type="button"
          onClick={() => onResponder(beat.id, 'verdade')}
          aria-pressed={respostaSalva === 'verdade'}
          className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-violet-400 ${
            respostaSalva === 'verdade'
              ? beat.verdade
                ? 'border-emerald-500 bg-emerald-950/60 text-emerald-200'
                : 'border-rose-500 bg-rose-950/60 text-rose-200'
              : 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
          }`}
        >
          <Check className="w-4 h-4" aria-hidden="true" />
          <span>É Verdade</span>
        </button>
      </div>

      {respondeu && Array.isArray(beat.explicacao) && (
        <div
          aria-live="polite"
          className="mt-4 pt-3 border-t border-slate-800"
        >
          {beat.explicacao.map((fala, i) => (
            <Balao
              key={`${beat.id}-exp-${i}`}
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
