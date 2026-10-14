// src/components/conversa/beats/BeatFilosofia.jsx
import React from 'react';
import Balao from '../Balao';
import TextoConversa from '../TextoConversa';
import { Compass, Sparkles } from 'lucide-react';

/**
 * BeatFilosofia — Momento 6: "Filosofia de Balcão · Sabedoria de Ofício".
 * Conecta a física, a termodinâmica e as normas técnicas à ética do invisível,
 * ao orgulho do artesão e à responsabilidade moral do engenheiro de campo.
 */
export default function BeatFilosofia({ beat }) {
  const falas = Array.isArray(beat.falas) && beat.falas.length > 0
    ? beat.falas
    : beat.texto
    ? [{ quem: beat.quem || 'simon', emocao: beat.emocao || 'filosofico', texto: beat.texto, fonte: beat.fonte }]
    : [];

  return (
    <section
      aria-label={`Filosofia de Balcão: ${beat.titulo || 'Sabedoria de Ofício'}`}
      className="my-5 rounded-2xl border border-violet-500/40 bg-gradient-to-br from-slate-900 via-indigo-950/35 to-amber-950/25 p-5 shadow-lg"
    >
      <div className="flex items-center gap-2.5 mb-3 pb-2.5 border-b border-violet-500/25">
        <div className="w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-400/40 flex items-center justify-center flex-shrink-0">
          <Compass className="w-4 h-4 text-violet-300" aria-hidden="true" />
        </div>
        <div>
          <span className="block text-[10px] font-extrabold uppercase tracking-widest text-violet-300">
            Filosofia de Balcão · Sabedoria de Ofício
          </span>
          <h4 className="text-sm sm:text-base font-extrabold text-white">
            {beat.titulo || 'A Ética do que Ninguém Vê no Forro'}
          </h4>
        </div>
      </div>

      <div>
        {falas.map((fala, i) => (
          <Balao
            key={`${beat.id}-filo-${i}`}
            quem={fala.quem || 'simon'}
            emocao={fala.emocao || 'filosofico'}
            texto={fala.texto}
            fonte={fala.fonte || beat.fonte}
            compacto
          />
        ))}
      </div>

      {beat.principio && (
        <div className="mt-3 px-4 py-2.5 rounded-xl bg-slate-950/70 border border-amber-400/30 flex items-start gap-2.5 text-xs sm:text-sm text-amber-200 italic">
          <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            <TextoConversa texto={beat.principio} />
          </span>
        </div>
      )}
    </section>
  );
}
