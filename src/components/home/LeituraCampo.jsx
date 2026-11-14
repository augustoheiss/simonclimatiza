import React, { useState } from 'react';
import { LEITURAS_CAMPO } from '../../data/leituraCampo';

// Painel do hero: mostra uma leitura real de instrumento. Os valores "assentam" uma única vez
// (CSS, em index.css). Com prefers-reduced-motion a animação não roda.
export default function LeituraCampo() {
  const [indice, setIndice] = useState(0);
  const leitura = LEITURAS_CAMPO[indice];

  return (
    <figure className="bg-laudo border border-filete rounded-md shadow-[0_1px_0_var(--color-filete)] overflow-hidden">
      <div className="flex items-start justify-between gap-3 px-5 pt-4 pb-3 border-b border-filete">
        <div>
          <figcaption className="font-serif-laudo text-lg font-semibold text-tinta leading-tight">
            {leitura.titulo}
          </figcaption>
          <p className="text-sm text-aco-escuro mt-0.5">{leitura.instrumento}</p>
        </div>
        <span className="shrink-0 text-[0.8125rem] font-semibold text-alerta-escuro border border-alerta-escuro/40 rounded px-2 py-0.5">
          Exemplo de leitura de campo
        </span>
      </div>

      <dl key={leitura.id} className="divide-y divide-filete">
        {leitura.linhas.map((linha, i) => (
          <div
            key={linha.rotulo}
            className="leitura-linha flex items-baseline justify-between gap-4 px-5 py-3"
            style={{ '--atraso': `${i * 120}ms` }}
          >
            <dt className="text-sm text-aco-escuro">{linha.rotulo}</dt>
            <dd className="text-right shrink-0">
              <span className="valor-medido text-2xl font-semibold text-tinta">{linha.valor}</span>
              <span className="text-sm text-aco-escuro ml-1">{linha.unidade}</span>
              {linha.nota && <span className="block text-[0.8125rem] text-aco-escuro">{linha.nota}</span>}
            </dd>
          </div>
        ))}
      </dl>

      <div className="flex items-center justify-between gap-3 px-5 py-3 bg-papel border-t border-filete">
        <p className="text-[0.8125rem] text-aco-escuro">Registrado em campo pela equipe Simon.</p>
        <div className="flex" role="group" aria-label="Escolher leitura">
          {/* O botão tem 44 × 44 px (alvo de toque); a bolinha desenhada dentro mantém o tamanho de antes. */}
          {LEITURAS_CAMPO.map((l, i) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setIndice(i)}
              aria-pressed={i === indice}
              aria-label={l.titulo}
              className="group inline-flex h-11 w-11 items-center justify-center rounded-md"
            >
              <span
                aria-hidden="true"
                className={`block h-2.5 w-6 rounded-full transition-colors ${
                  i === indice ? 'bg-refrigerante-escuro' : 'bg-filete group-hover:bg-aco'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </figure>
  );
}
