// src/components/conversa/DesafioModuloModal.jsx
import React, { useState, useEffect } from 'react';
import { Trophy, CheckCircle2, XCircle, ArrowRight, RotateCcw, X, Award } from 'lucide-react';
import Balao from './Balao';
import TextoConversa from './TextoConversa';

function chaveStorage(cursoId, moduloId) {
  return `simon_modulo_boss_v1_${cursoId}_${moduloId}`;
}

export function lerStatusDesafioModulo(cursoId, moduloId) {
  if (typeof window === 'undefined' || !cursoId || !moduloId) return null;
  try {
    const raw = window.localStorage.getItem(chaveStorage(cursoId, moduloId));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export default function DesafioModuloModal({ desafio, aberto, onFechar, onConcluir }) {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [finalizado, setFinalizado] = useState(false);

  useEffect(() => {
    if (aberto && desafio) {
      setIndiceAtual(0);
      setRespostas({});
      setFinalizado(false);
    }
  }, [aberto, desafio]);

  if (!aberto || !desafio) return null;

  const questoes = Array.isArray(desafio.questoes) ? desafio.questoes : [];
  const totalQuestoes = questoes.length;
  const questaoAtual = questoes[indiceAtual];
  const respostaAtual = questaoAtual ? respostas[questaoAtual.id] : null;
  const opcoesAtuais = questaoAtual?.opcoes || [];
  const opcaoEscolhida = opcoesAtuais.find((o) => o.id === respostaAtual);

  const acertosTotais = questoes.reduce((acc, q) => {
    const idResp = respostas[q.id];
    const op = (q.opcoes || []).find((o) => o.id === idResp);
    return acc + (op?.correta ? 1 : 0);
  }, 0);

  const handleSelecionar = (opcao) => {
    if (!questaoAtual || respostaAtual) return;
    setRespostas((prev) => ({
      ...prev,
      [questaoAtual.id]: opcao.id,
    }));
  };

  const handleAvancar = () => {
    if (indiceAtual + 1 < totalQuestoes) {
      setIndiceAtual((i) => i + 1);
    } else {
      setFinalizado(true);
      try {
        const payload = {
          concluido: true,
          acertos: acertosTotais,
          total: totalQuestoes,
          aprovado: acertosTotais >= Math.ceil(totalQuestoes * 0.6),
          data: new Date().toISOString(),
        };
        window.localStorage.setItem(chaveStorage(desafio.cursoId, desafio.moduloId), JSON.stringify(payload));
        onConcluir?.(payload);
      } catch {
        // Ignora erro de quota
      }
    }
  };

  const handleReiniciar = () => {
    setIndiceAtual(0);
    setRespostas({});
    setFinalizado(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={`Desafio da Rodada: ${desafio.titulo}`}
    >
      <div className="relative w-full max-w-2xl rounded-2xl border-2 border-amber-500/50 bg-slate-900 shadow-2xl overflow-hidden my-8">
        {/* Cabeçalho */}
        <header className="px-5 py-4 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0">
              <Trophy className="w-5 h-5 text-amber-400" aria-hidden="true" />
            </div>
            <div>
              <span className="block text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                Desafio da Rodada · Certificação do Módulo
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-white">
                {desafio.titulo}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onFechar}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Fechar Desafio da Rodada"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Corpo */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {!finalizado && questaoAtual ? (
            <div>
              {desafio.contextoInicial && indiceAtual === 0 && (
                <div className="mb-4 px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <TextoConversa texto={desafio.contextoInicial} />
                </div>
              )}

              <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-3">
                <span>
                  Questão {indiceAtual + 1} de {totalQuestoes}
                </span>
                <span className="text-amber-400">
                  Acertos parciais: {acertosTotais}
                </span>
              </div>

              <div className="mb-4 text-sm sm:text-base font-bold text-white leading-relaxed">
                <TextoConversa texto={questaoAtual.enunciado} />
              </div>

              <div className="space-y-2.5">
                {opcoesAtuais.map((op, idx) => {
                  const selecionada = respostaAtual === op.id;
                  let estilo =
                    'bg-slate-800/90 hover:bg-slate-800 border-slate-700 text-slate-100';
                  if (respostaAtual) {
                    if (op.correta) {
                      estilo =
                        'bg-emerald-950/80 border-emerald-500/70 text-emerald-100';
                    } else if (selecionada && !op.correta) {
                      estilo = 'bg-rose-950/80 border-rose-500/70 text-rose-100';
                    } else {
                      estilo = 'bg-slate-900/50 border-slate-800 text-slate-500 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={op.id}
                      type="button"
                      disabled={Boolean(respostaAtual)}
                      onClick={() => handleSelecionar(op)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 ${
                        respostaAtual ? 'cursor-default' : 'cursor-pointer'
                      } ${estilo}`}
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-slate-950 border border-slate-700 text-[11px] font-mono font-bold text-amber-300 flex-shrink-0 mt-0.5">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-relaxed">
                          <TextoConversa texto={op.texto} />
                        </span>
                      </div>
                      {respostaAtual && op.correta && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      )}
                      {respostaAtual && selecionada && !op.correta && (
                        <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {respostaAtual && opcaoEscolhida && (
                <div className="mt-4 pt-3 border-t border-slate-800">
                  {Array.isArray(opcaoEscolhida.feedback) ? (
                    opcaoEscolhida.feedback.map((f, i) => (
                      <Balao
                        key={i}
                        quem={f.quem || 'simon'}
                        emocao={f.emocao}
                        texto={f.texto}
                        compacto
                      />
                    ))
                  ) : opcaoEscolhida.explicacao ? (
                    <Balao
                      quem={opcaoEscolhida.quem || (opcaoEscolhida.correta ? 'simon' : 'bia')}
                      emocao={opcaoEscolhida.correta ? 'animado' : 'alerta'}
                      texto={opcaoEscolhida.explicacao}
                      compacto
                    />
                  ) : null}

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleAvancar}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors cursor-pointer"
                    >
                      <span>
                        {indiceAtual + 1 < totalQuestoes ? 'Próxima Questão' : 'Ver Resultado da Rodada'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border-2 border-amber-400/50 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="text-lg sm:text-xl font-extrabold text-white mb-1">
                {acertosTotais >= Math.ceil(totalQuestoes * 0.6)
                  ? 'Rodada Paga! Módulo Dominado no Balcão!'
                  : 'Quase lá! Vale passar mais um café nesse módulo'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mb-5">
                Você acertou <strong className="text-amber-300">{acertosTotais}</strong> de{' '}
                <strong className="text-white">{totalQuestoes}</strong> desafios integradores de campo.
              </p>

              <div className="max-w-lg mx-auto text-left mb-6">
                <Balao
                  quem={acertosTotais >= Math.ceil(totalQuestoes * 0.6) ? 'simon' : 'bia'}
                  emocao={acertosTotais >= Math.ceil(totalQuestoes * 0.6) ? 'animado' : 'serio'}
                  texto={
                    acertosTotais >= Math.ceil(totalQuestoes * 0.6)
                      ? desafio.falaSucesso ||
                        'Assino embaixo! Com essa leitura de física e norma, você não cai em conversa fiada nem troca peça no chute.'
                      : desafio.falaReforco ||
                        'Revise os números-chave nos guardanapos das aulas deste módulo e tente de novo para cravar 100%!'
                  }
                  compacto
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReiniciar}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  Refazer Desafio
                </button>
                <button
                  type="button"
                  onClick={onFechar}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Concluir e Voltar à Aula
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
