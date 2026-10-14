// src/components/conversa/beats/BeatEscolha.jsx
import React, { useEffect, useRef } from 'react';
import Balao from '../Balao';
import TextoConversa from '../TextoConversa';
import { HelpCircle, CheckCircle2, Sparkles } from 'lucide-react';

/**
 * BeatEscolha — Momento "Aposta" (pré-teste / geração).
 * O aluno escolhe uma resposta antes da explicação formal, e recebe uma reação
 * curta (padrão weave: 1–3 falas) que reconverge ao tronco principal.
 */
export default function BeatEscolha({
  beat,
  respostaSalva,
  onResponder,
  autoFocusOpcoes = false,
}) {
  const primeiraOpcaoRef = useRef(null);
  const opcaoSelecionada = beat.opcoes?.find((o) => o.id === respostaSalva) || null;

  useEffect(() => {
    if (autoFocusOpcoes && !respostaSalva && primeiraOpcaoRef.current) {
      primeiraOpcaoRef.current.focus();
    }
  }, [autoFocusOpcoes, respostaSalva]);

  return (
    <div
      role="group"
      aria-labelledby={`pergunta-${beat.id}`}
      className="my-5 rounded-2xl border border-sky-500/35 bg-slate-900/90 p-5 shadow-lg"
    >
      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-sky-400 mb-2">
        <HelpCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
        <span>Sua Aposta no Balcão</span>
      </div>

      <p
        id={`pergunta-${beat.id}`}
        className="text-sm sm:text-base font-bold text-slate-100 leading-snug mb-4"
      >
        <TextoConversa texto={beat.pergunta} />
      </p>

      <div className="grid grid-cols-1 gap-2.5">
        {(beat.opcoes || []).map((opcao, idx) => {
          const selecionada = respostaSalva === opcao.id;
          const jaRespondeu = Boolean(respostaSalva);
          const destacarIdeal = jaRespondeu && opcao.ideal;

          let estiloBotao =
            'border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-800 hover:border-sky-400/50';
          if (selecionada && opcao.ideal) {
            estiloBotao = 'border-emerald-500 bg-emerald-950/50 text-emerald-100';
          } else if (selecionada && !opcao.ideal) {
            estiloBotao = 'border-amber-500 bg-amber-950/40 text-amber-100';
          } else if (destacarIdeal) {
            estiloBotao = 'border-emerald-500/50 bg-emerald-950/25 text-emerald-200';
          }

          return (
            <button
              key={opcao.id}
              ref={idx === 0 ? primeiraOpcaoRef : null}
              type="button"
              onClick={() => onResponder(beat.id, opcao.id)}
              aria-pressed={selecionada}
              className={`w-full text-left px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer flex items-start gap-3 focus:outline-none focus:ring-2 focus:ring-sky-400 ${estiloBotao}`}
            >
              <span
                className="w-6 h-6 rounded-lg bg-slate-900/80 border border-slate-600 flex items-center justify-center text-xs font-extrabold uppercase flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                {opcao.id}
              </span>
              <span className="flex-1 leading-relaxed">
                <TextoConversa texto={opcao.texto} />
              </span>
              {destacarIdeal && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  <span className="hidden sm:inline">Visão de Elite</span>
                </span>
              )}
              {selecionada && !opcao.ideal && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 flex-shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className="hidden sm:inline">Sua escolha</span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Reação do elenco (Weave: 1–3 falas) */}
      {opcaoSelecionada && Array.isArray(opcaoSelecionada.reacao) && (
        <div
          aria-live="polite"
          className="mt-4 pt-3 border-t border-slate-800"
        >
          {opcaoSelecionada.reacao.map((fala, i) => (
            <Balao
              key={`${opcaoSelecionada.id}-reacao-${i}`}
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
