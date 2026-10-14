// src/components/conversa/beats/BeatInspecaoVisual.jsx
import React, { useState } from 'react';
import { Eye, CheckCircle2, AlertTriangle, ZoomIn } from 'lucide-react';
import Balao from '../Balao';
import TextoConversa from '../TextoConversa';

/**
 * BeatInspecaoVisual — Beat de 2ª geração onde o técnico inspeciona um esquema/slide
 * ou cenário visual de instalação e aponta qual ponto apresenta não-conformidade ou acerto.
 */
export default function BeatInspecaoVisual({
  beat,
  respostaSalva,
  onResponder,
  modoTranscricao = false,
}) {
  const [erroImagem, setErroImagem] = useState(false);
  const [ampliado, setAmpliado] = useState(false);

  const opcoes = beat.pontos || beat.opcoes || [];
  const opcaoCorreta = opcoes.find((o) => o.correta);
  const idEscolhido = modoTranscricao ? opcaoCorreta?.id : respostaSalva;
  const respondido = Boolean(idEscolhido);
  const opcaoSelecionada = opcoes.find((o) => o.id === idEscolhido) || opcaoCorreta;

  const handleEscolher = (opcao) => {
    if (respondido) return;
    onResponder?.(beat.id, opcao.id, Boolean(opcao.correta));
  };

  return (
    <div
      className="my-5 rounded-2xl border p-4 sm:p-6 shadow-lg"
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.92)',
        borderColor: 'rgba(16, 185, 129, 0.35)',
      }}
      role="region"
      aria-label={beat.titulo || 'Inspeção Visual de Campo'}
    >
      {/* Cabeçalho */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
          <Eye className="w-3.5 h-3.5" aria-hidden="true" />
          {beat.titulo || 'Inspeção Visual de Obra'}
        </span>
      </div>

      {/* Enunciado */}
      <div className="text-sm sm:text-[15px] text-slate-100 leading-relaxed mb-4">
        <TextoConversa texto={beat.enunciado} />
      </div>

      {/* Imagem / Slide técnico opcional com zoom acessível */}
      {beat.imagem && !erroImagem && (
        <div className="mb-4 rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950">
          <div className="relative">
            <img
              src={beat.imagem}
              alt={beat.legendaImagem || beat.titulo || 'Esquema técnico para inspeção'}
              onError={() => setErroImagem(true)}
              loading="lazy"
              className={`w-full object-contain transition-all duration-200 ${
                ampliado ? 'max-h-[540px]' : 'max-h-[260px]'
              }`}
            />
            <button
              type="button"
              onClick={() => setAmpliado((v) => !v)}
              className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-900/85 hover:bg-slate-900 text-slate-200 border border-slate-700 cursor-pointer"
            >
              <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
              {ampliado ? 'Reduzir' : 'Ampliar Esquema'}
            </button>
          </div>
          {beat.legendaImagem && (
            <div className="px-3 py-1.5 text-[11px] text-slate-400 border-t border-slate-800 bg-slate-900/60">
              {beat.legendaImagem}
            </div>
          )}
        </div>
      )}

      {/* Lista de pontos de inspeção */}
      <div className="space-y-2.5" role="group" aria-label="Pontos de inspeção">
        {opcoes.map((ponto, idx) => {
          const selecionado = idEscolhido === ponto.id;
          let classes =
            'bg-slate-800/85 hover:bg-slate-800 border-slate-700 text-slate-100';
          if (respondido) {
            if (ponto.correta) {
              classes =
                'bg-emerald-950/75 border-emerald-500/70 text-emerald-100';
            } else if (selecionado && !ponto.correta) {
              classes = 'bg-rose-950/75 border-rose-500/70 text-rose-100';
            } else {
              classes = 'bg-slate-900/50 border-slate-800 text-slate-400 opacity-65';
            }
          }

          return (
            <button
              key={ponto.id}
              type="button"
              disabled={respondido}
              onClick={() => handleEscolher(ponto)}
              className={`w-full text-left px-4 py-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 ${
                respondido ? 'cursor-default' : 'cursor-pointer'
              } ${classes}`}
            >
              <div className="flex items-start gap-2.5">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-slate-900/90 border border-slate-700 text-[11px] font-mono font-bold text-emerald-300 flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">
                  <TextoConversa texto={ponto.rotulo || ponto.texto} />
                </span>
              </div>
              {respondido && ponto.correta && (
                <CheckCircle2
                  className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"
                  aria-label="Ponto correto"
                />
              )}
              {respondido && selecionado && !ponto.correta && (
                <AlertTriangle
                  className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5"
                  aria-label="Ponto incorreto"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Feedback dos personagens */}
      {respondido && Array.isArray(opcaoSelecionada?.feedback) && (
        <div className="mt-4 pt-3 border-t border-slate-800/80" aria-live="polite">
          {opcaoSelecionada.feedback.map((f, i) => (
            <Balao
              key={`${beat.id}-insp-fb-${i}`}
              quem={f.quem || 'simon'}
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
