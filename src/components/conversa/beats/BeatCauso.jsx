// src/components/conversa/beats/BeatCauso.jsx
import React from 'react';
import Balao from '../Balao';
import { AlertOctagon } from 'lucide-react';

/**
 * BeatCauso — Momento "Causo de Obra" (o preço real do erro / Zé Gambiarra).
 * Destaca um caso concreto de campo para fixar as consequências físicas ou financeiras.
 */
export default function BeatCauso({ beat }) {
  return (
    <section
      aria-label={`Causo de Obra: ${beat.titulo}`}
      className="my-5 rounded-2xl border border-amber-500/35 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/25 p-5 shadow-md"
    >
      <div className="flex items-center gap-2.5 mb-3 pb-2.5 border-b border-amber-500/20">
        <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
          <AlertOctagon className="w-4 h-4 text-amber-400" aria-hidden="true" />
        </div>
        <div>
          <span className="block text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
            Causo de Obra · O Preço do Atalho
          </span>
          <h4 className="text-sm sm:text-base font-extrabold text-white">
            {beat.titulo}
          </h4>
        </div>
      </div>

      <div>
        {(beat.falas || []).map((fala, i) => (
          <Balao
            key={`${beat.id}-fala-${i}`}
            quem={fala.quem}
            emocao={fala.emocao}
            texto={fala.texto}
            fonte={fala.fonte || beat.fonte}
            compacto
          />
        ))}
      </div>
    </section>
  );
}
