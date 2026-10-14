// src/components/conversa/Balao.jsx
import React, { useState } from 'react';
import { ELENCO, EMOCOES_LABEL } from './elenco';
import TextoConversa from './TextoConversa';
import { BookCheck } from 'lucide-react';

/**
 * Balao — Renderiza uma fala de personagem ou rubrica de cena com acessibilidade AA.
 *
 * - Anuncia em leitores de tela "Simon diz: ..." (nome em texto visível + sr-only).
 * - Avatar estilizado com fallback automático para iniciais coloridas caso o asset falhe.
 * - Exibe selo discreto de ancoragem técnica quando a fala possui `fonte.trecho`.
 */
export default function Balao({
  quem = 'simon',
  emocao,
  texto,
  fonte,
  compacto = false,
}) {
  const [erroAvatar, setErroAvatar] = useState(false);
  const personagem = ELENCO[quem] || ELENCO.simon;
  const isDireita = personagem.alinhamento === 'direita';
  const isCentro = personagem.alinhamento === 'centro';
  const labelEmocao = emocao ? EMOCOES_LABEL[emocao] || emocao : null;

  if (isCentro) {
    return (
      <div
        role="note"
        aria-label={`Ambientação: ${texto}`}
        className="my-3 mx-auto max-w-2xl px-4 py-3 rounded-xl border text-center text-xs sm:text-sm italic"
        style={{
          backgroundColor: personagem.cores.balaoBg,
          borderColor: personagem.cores.balaoBorder,
          color: personagem.cores.balaoTexto,
        }}
      >
        <span className="mr-1.5 not-italic" aria-hidden="true">
          {personagem.iniciais}
        </span>
        <TextoConversa texto={texto} />
      </div>
    );
  }

  return (
    <div
      className={`flex items-start gap-3 ${compacto ? 'my-2' : 'my-3.5'} ${
        isDireita ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      {/* Avatar com fallback automático para iniciais */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-extrabold text-xs border-2 overflow-hidden select-none shadow-md"
        style={{
          backgroundColor: personagem.cores.avatarBg,
          borderColor: personagem.cores.badgeBorder,
          color: personagem.cores.avatarTexto,
        }}
        aria-hidden="true"
      >
        {!erroAvatar && personagem.avatar ? (
          <img
            src={personagem.avatar}
            alt=""
            className="w-full h-full object-cover"
            onError={() => setErroAvatar(true)}
            loading="lazy"
          />
        ) : (
          <span>{personagem.iniciais}</span>
        )}
      </div>

      {/* Corpo do balão */}
      <div
        className={`flex flex-col max-w-[85%] sm:max-w-[78%] ${
          isDireita ? 'items-end' : 'items-start'
        }`}
      >
        {/* Cabeçalho do personagem (nome em texto explícito p/ acessibilidade) */}
        <div
          className={`flex flex-wrap items-center gap-2 mb-1 ${
            isDireita ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          <span
            className="text-xs font-extrabold tracking-wide px-2 py-0.5 rounded-md border"
            style={{
              backgroundColor: personagem.cores.badgeBg,
              color: personagem.cores.badgeText,
              borderColor: personagem.cores.badgeBorder,
            }}
          >
            {personagem.nome}
            <span className="sr-only"> diz:</span>
          </span>
          <span className="text-[11px] text-slate-400 font-medium">
            {personagem.papel}
          </span>
          {labelEmocao && (
            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              {labelEmocao}
            </span>
          )}
        </div>

        {/* Balão de mensagem */}
        <div
          className={`px-4 py-3 rounded-2xl border shadow-sm text-sm sm:text-[15px] leading-relaxed ${
            isDireita ? 'rounded-tr-sm' : 'rounded-tl-sm'
          }`}
          style={{
            backgroundColor: personagem.cores.balaoBg,
            borderColor: personagem.cores.balaoBorder,
            color: personagem.cores.balaoTexto,
          }}
        >
          <TextoConversa texto={texto} />

          {(() => {
            const fontePrincipal = Array.isArray(fonte) ? fonte[0] : fonte;
            if (!fontePrincipal?.trecho) return null;
            return (
              <div
                className="mt-2 pt-2 border-t flex items-center gap-1.5 text-[11px] text-slate-400"
                style={{ borderColor: 'rgba(148,163,184,0.18)' }}
                title={`Dado ancorado na apostila (${fontePrincipal.campo}): "${fontePrincipal.trecho}"`}
              >
                <BookCheck
                  className="w-3.5 h-3.5 flex-shrink-0"
                  style={{ color: personagem.cores.destaque }}
                  aria-hidden="true"
                />
                <span>
                  Dado oficial da apostila ({fontePrincipal.campo === 'tabelas_html' ? 'Tabelas' : fontePrincipal.campo === 'infobox_campo' ? 'Info de Campo' : 'Conteúdo Técnico'})
                </span>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
