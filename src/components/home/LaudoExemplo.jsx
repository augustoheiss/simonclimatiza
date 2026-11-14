import React, { useEffect, useRef, useState } from 'react';
import { X, Check } from 'lucide-react';
import { LAUDO_EXEMPLO, IDS_AUTORIZADOS_HOME, META_VACUO_MICRONS, medicoesVisiveis } from '../../data/laudoExemplo';
import { linkWhatsApp } from '../../data/contato';
import { travarRolagem } from '../../utils/travaRolagem';

// Laudo de exemplo da Home: uma folha de modelo ilustrativo em que cada medição aponta o número
// no instrumento. Todo o conteúdo vem de src/data/laudoExemplo.js.
//
// Props:
//   aberto           boolean, fonte única da verdade; o <dialog> acompanha.
//   aoFechar         chamado quando o <dialog> fecha (botão, Esc ou clique no fundo).
//   retornoFocoRef   ref do botão que abriu; recebe o foco ao fechar.
//   idsAutorizados   fotos que podem aparecer (padrão: IDS_AUTORIZADOS_HOME). Sem foto autorizada, o laudo
//                    abre do mesmo jeito, só sem a imagem e sem o destaque.
export default function LaudoExemplo({
  aberto,
  aoFechar,
  retornoFocoRef,
  idsAutorizados = IDS_AUTORIZADOS_HOME,
  medicaoInicial = 0,
}) {
  const dialogRef = useRef(null);
  const fecharRef = useRef(null);
  const [ativa, setAtiva] = useState(medicaoInicial);
  const medicoes = medicoesVisiveis(LAUDO_EXEMPLO, idsAutorizados);
  const atual = medicoes[ativa];
  const foto = atual.semFoto ? null : LAUDO_EXEMPLO.fotos[atual.foto];

  // Abre e fecha o <dialog> nativo conforme `aberto`.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (aberto && !dialog.open) {
      dialog.showModal();
      fecharRef.current?.focus();
    } else if (!aberto && dialog.open) {
      dialog.close();
    }
  }, [aberto]);

  // A página de trás não rola enquanto o laudo está aberto. Fica num efeito próprio, que depende só de
  // `aberto`: no Strict Mode o React roda efeito → cleanup → efeito, e misturar a trava com o `showModal`
  // fazia a primeira abertura ficar destravada (a trava tem contagem, ver src/utils/travaRolagem.js).
  useEffect(() => {
    if (!aberto) return undefined;
    return travarRolagem(document.documentElement);
  }, [aberto]);

  const aoFecharDialog = () => {
    if (aberto) aoFechar?.();
    retornoFocoRef?.current?.focus?.();
  };

  const aoCancelarDialog = (e) => {
    if (aoFechar) {
      e.preventDefault();
      aoFechar();
    }
  };

  const mensagem = 'Olá! Vi o exemplo de laudo no site e gostaria de pedir um diagnóstico técnico.';

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="laudo-titulo"
      onClose={aoFecharDialog}
      onCancel={aoCancelarDialog}
      onClick={(e) => {
        // Só o clique no fundo (o próprio <dialog>) fecha; o clique no conteúdo não.
        if (e.target === dialogRef.current) dialogRef.current.close();
      }}
      className="tema-laudo laudo-dialogo m-auto p-0 border-0 rounded-lg bg-laudo text-tinta"
    >
      <div className="laudo-folha">
        <button
          ref={fecharRef}
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Fechar o laudo de exemplo"
          className="laudo-fechar"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <header className="laudo-cabecalho">
          <img src="/images/logo-simon.jpg" alt="" width="48" height="48" className="laudo-logo" />
          <div>
            <p className="laudo-tipo">{LAUDO_EXEMPLO.tipo}</p>
            <h2 id="laudo-titulo">{LAUDO_EXEMPLO.titulo}</h2>
          </div>
          <span className="laudo-selo">{LAUDO_EXEMPLO.selo}</span>
        </header>

        <p className="laudo-aviso">{LAUDO_EXEMPLO.aviso}</p>

        <dl className="laudo-ident">
          {LAUDO_EXEMPLO.campos.map((c) => (
            <div key={c.rotulo}>
              <dt>{c.rotulo}</dt>
              <dd className="laudo-vazio">{c.valor}</dd>
            </div>
          ))}
          <div>
            <dt>Instrumentos</dt>
            <dd>{LAUDO_EXEMPLO.instrumentos}</dd>
          </div>
        </dl>

        <section className="laudo-medicoes" aria-labelledby="laudo-medicoes-titulo">
          <h3 id="laudo-medicoes-titulo">Medições</h3>
          <p className="laudo-ajuda">
            {foto
              ? 'Escolha uma medição para ver onde ela aparece na foto do instrumento.'
              : 'Escolha uma medição para ler o que ela significa.'}
          </p>

          <div className="laudo-grade">
            <table className="laudo-tabela">
              <caption className="sr-only">Medições do serviço de exemplo</caption>
              <thead>
                <tr>
                  <th scope="col">Medição</th>
                  <th scope="col" className="laudo-num">Valor</th>
                  <th scope="col">Resultado</th>
                </tr>
              </thead>
              <tbody>
                {medicoes.map((m, i) => {
                  const valorNum = Number(String(m.valor).replace(',', '.'));
                  const proporcao = m.meta ? Math.min(100, (valorNum / m.meta.escala) * 100) : 0;
                  const limite = m.meta ? (m.meta.limite / m.meta.escala) * 100 : 0;
                  return (
                    <tr key={m.id} className={i === ativa ? 'laudo-ativa' : undefined}>
                      <th scope="row">
                        <button type="button" aria-pressed={i === ativa} onClick={() => setAtiva(i)}>
                          {m.rotulo}
                        </button>
                      </th>
                      <td className="laudo-num valor-medido">
                        {m.valor}
                        <small>{m.unidade}</small>
                      </td>
                      <td>
                        <span className="laudo-resultado">
                          {m.id !== 'carga' && <Check className="w-4 h-4" aria-hidden="true" />}
                          {m.resultado}
                        </span>
                        {m.meta && (
                          <span className="laudo-regua" aria-hidden="true">
                            <span className="laudo-regua-trilho">
                              <span className="laudo-regua-fill" style={{ width: `${proporcao}%` }} />
                              <span className="laudo-regua-limite" style={{ left: `${limite}%` }} />
                            </span>
                            <span className="laudo-regua-rotulos">
                              <span>0</span>
                              <span style={{ left: `${limite}%` }}>{META_VACUO_MICRONS}</span>
                            </span>
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <figure className="laudo-prova">
              {foto && (
                <div className="laudo-foto">
                  <img
                    key={atual.foto}
                    src={foto.src}
                    alt={foto.alt}
                    width={foto.largura}
                    height={foto.altura}
                    loading="lazy"
                  />
                  <span
                    className="laudo-destaque"
                    aria-hidden="true"
                    style={{
                      left: `${atual.caixa[0]}%`,
                      top: `${atual.caixa[1]}%`,
                      width: `${atual.caixa[2]}%`,
                      height: `${atual.caixa[3]}%`,
                    }}
                  />
                </div>
              )}
              <figcaption aria-live="polite">
                <strong>{atual.rotulo}: {atual.valor} {atual.unidade}.</strong> {atual.legenda}
              </figcaption>
            </figure>
          </div>
        </section>

        <footer className="laudo-rodape">
          <div className="laudo-assinatura">
            <span className="laudo-linha" aria-hidden="true" />
            <p>{LAUDO_EXEMPLO.assinatura}</p>
          </div>
          <a
            className="laudo-botao"
            href={linkWhatsApp(mensagem)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir diagnóstico pelo WhatsApp
          </a>
        </footer>
      </div>
    </dialog>
  );
}
