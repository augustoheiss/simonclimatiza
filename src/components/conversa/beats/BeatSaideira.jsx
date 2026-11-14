// src/components/conversa/beats/BeatSaideira.jsx
import React, { useState } from 'react';
import TextoConversa from '../TextoConversa';
import { obterDesafioPorAula } from '../../../data/desafiosModulo';
import { lerStatusDesafioModulo } from '../../../utils/desafioModuloStorage';
import DesafioModuloModal from '../DesafioModuloModal';
import {
  Coffee,
  CheckCircle2,
  BookOpen,
  Table2,
  Info,
  RotateCcw,
  MessageSquareShare,
  Trophy,
} from 'lucide-react';

/**
 * BeatSaideira — Fechamento da conversa (Momento 8):
 * - Resumo de 3 pontos-chave para levar pra obra;
 * - Convite para o "Desafio da Rodada" (Boss Quiz integrador do Módulo);
 * - Ponte direta para as abas da apostila (Conteúdo, Tabelas, Info de Campo);
 * - Botão de recomeçar o papo e botão opcional de enviar feedback via WhatsApp (LGPD-safe).
 */
export default function BeatSaideira({
  beat,
  cursoId,
  aulaId,
  irParaAba,
  onReiniciar,
}) {
  const desafioModulo = obterDesafioPorAula(cursoId, aulaId);
  const [modalDesafioAberto, setModalDesafioAberto] = useState(false);
  const [statusDesafio, setStatusDesafio] = useState(() =>
    desafioModulo ? lerStatusDesafioModulo(cursoId, desafioModulo.moduloId) : null
  );

  const slugRef = [cursoId, aulaId].filter(Boolean).join('/');
  const textoWhatsApp = encodeURIComponent(
    slugRef
      ? `Olá equipe Simon! Acabei de fazer o Papo de Balcão da aula ${slugRef} e queria mandar meu feedback:`
      : 'Olá equipe Simon! Acabei de estudar o Papo de Balcão e queria mandar meu feedback:'
  );

  return (
    <section
      aria-label="Saideira: resumo dos 3 pontos principais da aula"
      className="my-6 rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 p-6 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0">
          <Coffee className="w-5 h-5 text-emerald-400" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <span className="text-xs font-extrabold text-emerald-300 block">
            Saideira do Balcão &bull; Resumo de bolso
          </span>
          <h3 className="text-base sm:text-lg font-extrabold text-white">
            3 regras de ouro para subir na obra hoje
          </h3>
        </div>
      </div>

      <ol className="space-y-2.5 mb-5">
        {(beat.pontos || []).map((ponto, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-emerald-500/20 text-xs sm:text-sm text-slate-100 leading-relaxed"
          >
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <span className="flex-1">
              <TextoConversa texto={ponto} />
            </span>
          </li>
        ))}
      </ol>

      {beat.proxima && (
        <div className="mb-5 px-4 py-3 rounded-xl bg-slate-800/70 border border-slate-700 text-xs sm:text-sm text-slate-300 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" aria-hidden="true" />
          <span>
            <strong className="text-white">Próxima parada:</strong>{' '}
            <TextoConversa texto={beat.proxima} />
          </span>
        </div>
      )}

      {/* Card do Desafio da Rodada (Boss Quiz do Módulo) */}
      {desafioModulo && (
        <div className="mb-5 p-4 rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Trophy className="w-4 h-4 text-amber-400" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-extrabold text-amber-300 block">
                {statusDesafio?.aprovado
                  ? `Rodada paga (${statusDesafio.acertos}/${statusDesafio.total} acertos)`
                  : 'Desafio da rodada · Certificação do módulo'}
              </span>
              <p className="text-sm font-bold text-white">
                {desafioModulo.titulo}
              </p>
              <p className="text-xs text-slate-200 mt-0.5">
                Encare {desafioModulo.questoes?.length || 5} situações práticas encadeadas cobrindo este módulo.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setModalDesafioAberto(true)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors cursor-pointer flex-shrink-0 shadow-md"
          >
            <Trophy className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{statusDesafio?.concluido ? 'Rever Desafio do Módulo' : 'Encarar Desafio do Módulo'}</span>
          </button>
        </div>
      )}

      {/* Pontes para a apostila oficial */}
      <div className="pt-4 border-t border-slate-800">
        <p className="text-xs font-semibold text-slate-300 mb-3">
          Aprofunde na apostila oficial desta aula:
        </p>
        <div className="flex flex-wrap gap-2.5">
          {typeof irParaAba === 'function' && (
            <>
              <button
                type="button"
                onClick={() => irParaAba('conteudo')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                Abrir Conteúdo Técnico
              </button>
              <button
                type="button"
                onClick={() => irParaAba('tabelas')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-600 transition-colors cursor-pointer"
              >
                <Table2 className="w-4 h-4 text-sky-400" aria-hidden="true" />
                Abrir Tabelas & Parâmetros
              </button>
              <button
                type="button"
                onClick={() => irParaAba('infobox')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-600 transition-colors cursor-pointer"
              >
                <Info className="w-4 h-4 text-amber-400" aria-hidden="true" />
                Alertas de Campo
              </button>
            </>
          )}

          {typeof onReiniciar === 'function' && (
            <button
              type="button"
              onClick={onReiniciar}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              Recomeçar papo
            </button>
          )}

          <a
            href={`https://wa.me/?text=${textoWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-emerald-300 hover:bg-emerald-950/50 border border-emerald-500/30 transition-colors"
          >
            <MessageSquareShare className="w-3.5 h-3.5" aria-hidden="true" />
            Avaliar este Papo
          </a>
        </div>
      </div>

      {desafioModulo && (
        <DesafioModuloModal
          desafio={desafioModulo}
          aberto={modalDesafioAberto}
          onFechar={() => setModalDesafioAberto(false)}
          onConcluir={(res) => setStatusDesafio(res)}
        />
      )}
    </section>
  );
}
