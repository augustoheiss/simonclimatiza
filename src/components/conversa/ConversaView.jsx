// src/components/conversa/ConversaView.jsx
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Coffee,
  Clock,
  ChevronRight,
  FastForward,
  ListChecks,
  RotateCcw,
  ExternalLink,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { carregarConversa } from '../../data/conversas';
import useConversaProgress from '../../hooks/useConversaProgress';
import { CENARIOS, ELENCO } from './elenco';
import Balao from './Balao';
import TextoConversa from './TextoConversa';
import BeatEscolha from './beats/BeatEscolha';
import BeatQuiz from './beats/BeatQuiz';
import BeatMitoVerdade from './beats/BeatMitoVerdade';
import BeatCauso from './beats/BeatCauso';
import BeatSaideira from './beats/BeatSaideira';
import BeatCalculadoraCampo from './beats/BeatCalculadoraCampo';
import BeatInspecaoVisual from './beats/BeatInspecaoVisual';

const TIPOS_INTERATIVOS = new Set(['escolha', 'quiz', 'mitoVerdade', 'calculadora', 'inspecao']);

const ABA_LABELS = {
  conteudo: 'Conteúdo Técnico',
  tabelas: 'Tabelas & Parâmetros',
  infobox: 'Info de Campo',
  slides: 'Slides & Infográfico',
  video: 'Videoaula',
  podcast: 'Podcast',
  fontes: 'Fontes & Pesquisa',
};

export default function ConversaView({
  cursoId,
  aulaId,
  irParaAba,
}) {
  const prefersReducedMotion = useReducedMotion();
  const {
    ultimoBeat,
    respostas,
    concluida,
    modoPreferido,
    registrarBeat,
    registrarResposta,
    marcarConcluida,
    reiniciarConversa,
    definirModo,
  } = useConversaProgress(cursoId, aulaId);

  // Máquina de estados: 'carregando' | 'erro' | 'pronta' | 'revelando' | 'aguardandoResposta' | 'transcricao' | 'concluida'
  const [estado, setEstado] = useState('carregando');
  const [roteiro, setRoteiro] = useState(null);
  const [indiceVisivel, setIndiceVisivel] = useState(0);
  const [avisoRoteiroAtualizado, setAvisoRoteiroAtualizado] = useState(false);
  const [autoFocusInterativo, setAutoFocusInterativo] = useState(false);

  const fimDaConversaRef = useRef(null);
  const timerRevelacaoRef = useRef(null);

  // Limpa timer pendente ao desmontar
  useEffect(() => {
    return () => {
      if (timerRevelacaoRef.current) {
        clearTimeout(timerRevelacaoRef.current);
      }
    };
  }, []);

  // Carregamento assíncrono do roteiro com guarda contra condição de corrida (cursoId/aulaId)
  useEffect(() => {
    let cancelado = false;
    setEstado('carregando');
    setRoteiro(null);
    setAvisoRoteiroAtualizado(false);
    setAutoFocusInterativo(false);

    carregarConversa(cursoId, aulaId)
      .then((dados) => {
        if (cancelado) return;
        if (!dados || !Array.isArray(dados.beats) || dados.beats.length === 0) {
          setEstado('erro');
          return;
        }

        setRoteiro(dados);

        // Restaura progresso por beatId estável
        let idxInicial = 0;
        if (ultimoBeat) {
          const encontrado = dados.beats.findIndex((b) => b.id === ultimoBeat);
          if (encontrado >= 0) {
            idxInicial = encontrado;
          } else {
            // Beat removido após edição do roteiro: recomeça do início com aviso amigável
            setAvisoRoteiroAtualizado(true);
            idxInicial = 0;
          }
        }

        setIndiceVisivel(idxInicial);

        if (modoPreferido === 'transcricao') {
          setEstado('transcricao');
          return;
        }

        const beatAtual = dados.beats[idxInicial];
        if (idxInicial === dados.beats.length - 1 || concluida) {
          setEstado('concluida');
        } else if (
          beatAtual &&
          TIPOS_INTERATIVOS.has(beatAtual.tipo) &&
          !respostas[beatAtual.id]
        ) {
          setEstado('aguardandoResposta');
        } else {
          setEstado('pronta');
        }
      })
      .catch((err) => {
        if (cancelado) return;
        if (import.meta.env?.DEV) {
          console.error('[Papo de Balcão] Falha ao importar roteiro:', err);
        }
        setEstado('erro');
      });

    return () => {
      cancelado = true;
    };
    // Recarrega apenas quando cursoId ou aulaId mudam
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursoId, aulaId]);

  const beats = useMemo(() => roteiro?.beats || [], [roteiro]);
  const totalBeats = beats.length;
  const modoTranscricao = estado === 'transcricao' || modoPreferido === 'transcricao';
  const indiceMaximoExibido = modoTranscricao ? totalBeats - 1 : indiceVisivel;
  const beatAtivo = beats[indiceMaximoExibido] || null;
  const precisaResponderAtual =
    !modoTranscricao &&
    beatAtivo &&
    TIPOS_INTERATIVOS.has(beatAtivo.tipo) &&
    !respostas[beatAtivo.id];

  // Avança para o próximo beat respeitando a máquina de estados e reduced-motion
  const avancarBeat = useCallback(() => {
    if (!roteiro || modoTranscricao) return;
    if (estado === 'revelando' || precisaResponderAtual) return;

    const proximoIndice = indiceVisivel + 1;
    if (proximoIndice >= totalBeats) {
      const ultimoId = beats[totalBeats - 1]?.id;
      marcarConcluida(ultimoId);
      setEstado('concluida');
      return;
    }

    const proximoBeat = beats[proximoIndice];
    const aplicarRevelacao = () => {
      setIndiceVisivel(proximoIndice);
      registrarBeat(proximoBeat.id);

      if (proximoIndice >= totalBeats - 1 || proximoBeat.tipo === 'saideira') {
        marcarConcluida(proximoBeat.id);
        setEstado('concluida');
        setAutoFocusInterativo(false);
      } else if (
        TIPOS_INTERATIVOS.has(proximoBeat.tipo) &&
        !respostas[proximoBeat.id]
      ) {
        setEstado('aguardandoResposta');
        setAutoFocusInterativo(true);
      } else {
        setEstado('pronta');
        setAutoFocusInterativo(false);
      }

      if (!prefersReducedMotion && fimDaConversaRef.current) {
        fimDaConversaRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    };

    if (prefersReducedMotion) {
      aplicarRevelacao();
    } else {
      setEstado('revelando');
      timerRevelacaoRef.current = setTimeout(aplicarRevelacao, 180);
    }
  }, [
    roteiro,
    modoTranscricao,
    estado,
    precisaResponderAtual,
    indiceVisivel,
    totalBeats,
    beats,
    marcarConcluida,
    registrarBeat,
    respostas,
    prefersReducedMotion,
  ]);

  // Atalho de teclado global (Espaço) para avançar quando não está focado em botão/input
  useEffect(() => {
    function handleKeyDown(e) {
      if (modoTranscricao || precisaResponderAtual || estado === 'carregando' || estado === 'erro') {
        return;
      }
      const tag = e.target?.tagName?.toLowerCase();
      if (tag === 'button' || tag === 'input' || tag === 'textarea' || tag === 'a') {
        return;
      }
      if (e.code === 'Space') {
        e.preventDefault();
        avancarBeat();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [avancarBeat, modoTranscricao, precisaResponderAtual, estado]);

  const handleResponder = useCallback(
    (beatId, valor) => {
      registrarResposta(beatId, valor);
      if (!modoTranscricao) {
        setEstado('pronta');
      }
    },
    [registrarResposta, modoTranscricao]
  );

  const handlePularParaSaideira = useCallback(() => {
    if (!beats.length) return;
    const ultimoIdx = beats.length - 1;
    const ultimo = beats[ultimoIdx];
    setIndiceVisivel(ultimoIdx);
    marcarConcluida(ultimo?.id);
    setEstado('concluida');
  }, [beats, marcarConcluida]);

  const handleAlternarModo = useCallback(() => {
    if (modoTranscricao) {
      definirModo('passo');
      setEstado(indiceVisivel >= totalBeats - 1 ? 'concluida' : 'pronta');
    } else {
      definirModo('transcricao');
      setEstado('transcricao');
    }
  }, [modoTranscricao, definirModo, indiceVisivel, totalBeats]);

  const handleReiniciar = useCallback(() => {
    reiniciarConversa();
    definirModo('passo');
    setIndiceVisivel(0);
    setAvisoRoteiroAtualizado(false);
    setAutoFocusInterativo(false);
    const primeiro = beats[0];
    if (primeiro && TIPOS_INTERATIVOS.has(primeiro.tipo)) {
      setEstado('aguardandoResposta');
    } else {
      setEstado('pronta');
    }
  }, [reiniciarConversa, definirModo, beats]);

  // ── Estado: Carregando ──
  if (estado === 'carregando') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-slate-700/80 bg-slate-900/90 p-8 text-center my-4"
      >
        <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center mx-auto mb-3">
          <Coffee className="w-5 h-5 text-sky-400 animate-pulse" aria-hidden="true" />
        </div>
        <p className="text-sm font-semibold text-slate-200">
          Passando o café no balcão…
        </p>
        <p className="text-xs text-slate-400 mt-1">
          Carregando roteiro interativo desta aula
        </p>
      </div>
    );
  }

  // ── Estado: Erro / Indisponível ──
  if (estado === 'erro' || !roteiro) {
    return (
      <div
        role="alert"
        className="rounded-2xl border border-amber-500/40 bg-slate-900/95 p-8 text-center my-4"
      >
        <p className="text-base font-bold text-white mb-2">
          Roteiro indisponível no momento
        </p>
        <p className="text-xs sm:text-sm text-slate-300 mb-5">
          Você pode consultar o material completo na aba Conteúdo Técnico.
        </p>
        {typeof irParaAba === 'function' && (
          <button
            type="button"
            onClick={() => irParaAba('conteudo')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            Abrir Conteúdo Técnico
          </button>
        )}
      </div>
    );
  }

  const infoCenario = CENARIOS[roteiro.cenario] || CENARIOS['padaria-manha'];
  const beatsExibidos = beats.slice(0, indiceMaximoExibido + 1);
  const percentualProgresso =
    totalBeats > 0 ? Math.round(((indiceMaximoExibido + 1) / totalBeats) * 100) : 0;

  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-950/90 shadow-2xl overflow-hidden">
      {/* ── Cabeçalho do Papo de Balcão ── */}
      <header className="px-5 py-4 border-b border-slate-800 bg-slate-900/95">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-xl flex-shrink-0"
              aria-hidden="true"
            >
              {infoCenario.emoji}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                  {infoCenario.titulo}
                </span>
                {roteiro.duracaoMin && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">
                    <Clock className="w-3 h-3 text-sky-400" aria-hidden="true" />
                    ~{roteiro.duracaoMin} min
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                {infoCenario.subtitulo} · Com{' '}
                <strong className="text-sky-300">{ELENCO.simon.nome}</strong>,{' '}
                <strong className="text-amber-300">{ELENCO.juninho.nome}</strong> e{' '}
                <strong className="text-emerald-300">{ELENCO.bia.nome}</strong>
              </p>
            </div>
          </div>

          {/* Controles de ritmo (veterano vs passo a passo) */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleAlternarModo}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-800/90 text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <ListChecks className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
              <span>
                {modoTranscricao ? 'Modo passo a passo' : 'Ver papo inteiro'}
              </span>
            </button>

            {!modoTranscricao && indiceMaximoExibido < totalBeats - 1 && (
              <button
                type="button"
                onClick={handlePularParaSaideira}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-800/90 text-slate-200 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <FastForward className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                <span>Pular pra Saideira</span>
              </button>
            )}

            {(indiceMaximoExibido > 0 || Object.keys(respostas).length > 0) && (
              <button
                type="button"
                onClick={handleReiniciar}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                title="Recomeçar conversa do zero"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">Recomeçar</span>
              </button>
            )}
          </div>
        </div>

        {/* Barra de progresso do roteiro */}
        <div className="mt-3 flex items-center gap-3">
          <div
            className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={indiceMaximoExibido + 1}
            aria-valuemin={1}
            aria-valuemax={totalBeats}
            aria-label="Progresso no Papo de Balcão"
          >
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full transition-all duration-300"
              style={{ width: `${percentualProgresso}%` }}
            />
          </div>
          <span className="text-[11px] font-bold text-slate-400 whitespace-nowrap">
            {indiceMaximoExibido + 1} / {totalBeats}
          </span>
        </div>
      </header>

      {/* ── Aviso amigável quando ultimoBeat salvo deixou de existir ── */}
      {avisoRoteiroAtualizado && (
        <div
          role="status"
          className="mx-5 mt-4 px-4 py-2.5 rounded-xl bg-sky-950/60 border border-sky-500/40 text-xs text-sky-200 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-sky-400 flex-shrink-0" aria-hidden="true" />
          <span>O papo foi atualizado — recomeçamos do início para você não perder nada.</span>
        </div>
      )}

      {/* ── Feed de Beats da Conversa ── */}
      <div className="px-4 sm:px-6 py-5 max-w-4xl mx-auto">
        {beatsExibidos.map((beat, idx) => {
          const isUltimoExibido = idx === beatsExibidos.length - 1;
          const wrapperProps = prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.22 },
              };
          const Wrapper = prefersReducedMotion ? 'div' : motion.div;

          return (
            <Wrapper
              key={beat.id}
              aria-live={isUltimoExibido && !modoTranscricao ? 'polite' : undefined}
              {...wrapperProps}
            >
              {renderBeat({
                beat,
                isUltimoExibido,
                autoFocusInterativo,
                respostas,
                onResponder: handleResponder,
                irParaAba,
                onReiniciar: handleReiniciar,
                cursoId,
                aulaId,
                modoTranscricao,
              })}
            </Wrapper>
          );
        })}

        {/* Indicador de digitação quando `revelando` */}
        {estado === 'revelando' && !prefersReducedMotion && (
          <div
            aria-live="polite"
            className="my-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-400"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            <span>Digitando no balcão…</span>
          </div>
        )}

        <div ref={fimDaConversaRef} />
      </div>

      {/* ── Rodapé de Avanço Passo a Passo ── */}
      {!modoTranscricao && indiceMaximoExibido < totalBeats - 1 && (
        <footer className="px-5 py-4 border-t border-slate-800 bg-slate-900/95 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            {precisaResponderAtual
              ? '👆 Escolha uma opção acima para o Simon e a Bia reagirem.'
              : 'Dica: pressione Espaço ou clique ao lado para avançar no seu ritmo.'}
          </span>

          <button
            type="button"
            onClick={avancarBeat}
            disabled={precisaResponderAtual || estado === 'revelando'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold bg-sky-500 hover:bg-sky-400 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 transition-all cursor-pointer disabled:cursor-not-allowed shadow-lg shadow-sky-500/15 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            <span>
              {precisaResponderAtual ? 'Responda acima para continuar' : 'Próximo balão'}
            </span>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </footer>
      )}
    </div>
  );
}

function renderBeat({
  beat,
  isUltimoExibido,
  autoFocusInterativo,
  respostas,
  onResponder,
  irParaAba,
  onReiniciar,
  cursoId,
  aulaId,
  modoTranscricao,
}) {
  switch (beat.tipo) {
    case 'cena':
      return (
        <Balao
          quem="narrador"
          texto={beat.texto}
          fonte={beat.fonte}
        />
      );

    case 'fala':
      return (
        <Balao
          quem={beat.quem}
          emocao={beat.emocao}
          texto={beat.texto}
          fonte={beat.fonte}
        />
      );

    case 'escolha':
      return (
        <BeatEscolha
          beat={beat}
          respostaSalva={respostas[beat.id]}
          onResponder={onResponder}
          autoFocusOpcoes={isUltimoExibido && autoFocusInterativo}
        />
      );

    case 'quiz':
      return (
        <BeatQuiz
          beat={beat}
          respostaSalva={respostas[beat.id]}
          onResponder={onResponder}
          autoFocusOpcoes={isUltimoExibido && autoFocusInterativo}
        />
      );

    case 'mitoVerdade':
      return (
        <BeatMitoVerdade
          beat={beat}
          respostaSalva={respostas[beat.id]}
          onResponder={onResponder}
          autoFocusOpcoes={isUltimoExibido && autoFocusInterativo}
        />
      );

    case 'calculadora':
      return (
        <BeatCalculadoraCampo
          beat={beat}
          respostaSalva={respostas[beat.id]}
          onResponder={onResponder}
          modoTranscricao={modoTranscricao}
        />
      );

    case 'inspecao':
      return (
        <BeatInspecaoVisual
          beat={beat}
          respostaSalva={respostas[beat.id]}
          onResponder={onResponder}
          modoTranscricao={modoTranscricao}
        />
      );

    case 'causo':
      return <BeatCauso beat={beat} />;

    case 'referencia': {
      const abaAlvo = beat.alvo?.aba || 'tabelas';
      const nomeAba = ABA_LABELS[abaAlvo] || abaAlvo;
      return (
        <div className="my-4 p-4 rounded-xl border border-sky-500/30 bg-sky-950/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
            <TextoConversa texto={beat.texto} />
          </p>
          {typeof irParaAba === 'function' && (
            <button
              type="button"
              onClick={() => irParaAba(abaAlvo)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-400/40 transition-colors cursor-pointer flex-shrink-0"
            >
              <span>Abrir {nomeAba}</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          )}
        </div>
      );
    }

    case 'saideira':
      return (
        <BeatSaideira
          beat={beat}
          cursoId={cursoId}
          aulaId={aulaId}
          irParaAba={irParaAba}
          onReiniciar={onReiniciar}
        />
      );

    default:
      return null;
  }
}
