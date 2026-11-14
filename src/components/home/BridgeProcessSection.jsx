import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { METODO_FOTOS, etapasComFoto } from '../../data/metodoFotos';
import { IDS_AUTORIZADOS_HOME } from '../../data/fotosAutorizadas';

// Aqui a numeração é uma sequência real: as etapas acontecem nesta ordem.
// Os três textos ficam SEMPRE visíveis; a foto só acompanha a etapa escolhida.
const ETAPAS = [
  {
    titulo: 'Auditoria e diagnóstico',
    corpo:
      'Levantamos a carga térmica (sol, ocupação, equipamentos) e os pontos de perda de rendimento elétrico. Cada ponto de desperdício é medido, não estimado.',
  },
  {
    titulo: 'Execução dentro das normas',
    corpo:
      'Vácuo profundo em mícrons (abaixo de 500), pressurização com nitrogênio e instalação conforme as normas ABNT e os manuais dos fabricantes de VRF e chillers.',
  },
  {
    titulo: 'Gestão preventiva e PMOC',
    corpo:
      'Controle digital dos equipamentos, com histórico e ART. A equipe antecipa falhas antes de o sistema parar.',
  },
];

function ConteudoEtapa({ numero, etapa }) {
  return (
    <>
      <span className="valor-medido text-sm font-semibold text-refrigerante-escuro">Etapa {numero}</span>
      <h3 className="mt-1 font-serif-laudo text-xl font-semibold text-tinta">{etapa.titulo}</h3>
      <p className="mt-2 text-aco-escuro leading-relaxed">{etapa.corpo}</p>
    </>
  );
}

// `idsAutorizados`: fotos que podem aparecer (padrão: IDS_AUTORIZADOS_HOME). Sem nenhuma foto autorizada a seção
// volta ao layout de texto de antes, sem botão e sem aria-pressed.
export default function BridgeProcessSection({ idsAutorizados = IDS_AUTORIZADOS_HOME }) {
  const { fotoPorEtapa, etapaInicial, temFoto } = etapasComFoto(METODO_FOTOS, idsAutorizados);
  const [escolhida, setEscolhida] = useState(null);
  // A etapa ativa é a escolhida, se ainda tiver foto; senão, a primeira que tem.
  const ativa = escolhida !== null && fotoPorEtapa[escolhida] ? escolhida : etapaInicial;
  const foto = ativa === null ? null : fotoPorEtapa[ativa];

  const botaoDePedir = (
    <Link
      to="/contato"
      className="mt-10 inline-flex items-center rounded-md bg-refrigerante-escuro hover:bg-tinta text-white font-semibold px-6 py-3 transition-colors"
    >
      Pedir uma auditoria técnica
    </Link>
  );

  return (
    <section id="metodo" className="tema-laudo secao-laudo secao-laudo--papel" aria-labelledby="metodo-titulo">
      <div className="miolo">
        <h2 id="metodo-titulo" className="text-3xl sm:text-4xl text-tinta max-w-[40rem]">
          Como o trabalho é feito
        </h2>
        <p className="texto-corrido mt-4 text-lg text-aco-escuro">
          Três etapas, sempre nesta ordem. Cada uma termina com registro das medições.
        </p>

        {!temFoto ? (
          <>
            <ol className="mt-10 grid gap-8 md:grid-cols-3">
              {ETAPAS.map((e, i) => (
                <li key={e.titulo} className="relative border-t-2 border-refrigerante-escuro pt-4">
                  <ConteudoEtapa numero={i + 1} etapa={e} />
                </li>
              ))}
            </ol>
            {botaoDePedir}
          </>
        ) : (
          <>
            <div className="metodo-corpo mt-10">
              <ol className="metodo-etapas">
                {ETAPAS.map((e, i) => {
                  const comFoto = fotoPorEtapa[i] !== null;
                  return (
                    <li key={e.titulo}>
                      {comFoto ? (
                        <button
                          type="button"
                          className="metodo-etapa"
                          aria-pressed={i === ativa}
                          onClick={() => setEscolhida(i)}
                        >
                          <span className="metodo-etapa-camera" aria-hidden="true">
                            <Camera className="w-[18px] h-[18px]" />
                          </span>
                          <ConteudoEtapa numero={i + 1} etapa={e} />
                        </button>
                      ) : (
                        <div className="metodo-etapa metodo-etapa-texto">
                          <ConteudoEtapa numero={i + 1} etapa={e} />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ol>

              <figure className="metodo-palco">
                <div className="metodo-foto">
                  <img
                    key={foto.src}
                    src={foto.src}
                    alt={foto.alt}
                    width={foto.largura}
                    height={foto.altura}
                    loading="lazy"
                  />
                </div>
                <figcaption aria-live="polite">{foto.legenda}</figcaption>
              </figure>
            </div>
            {botaoDePedir}
          </>
        )}
      </div>
    </section>
  );
}
