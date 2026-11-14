import React, { Suspense, lazy, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import LeituraCampo from './LeituraCampo';
import { linkWhatsApp } from '../../data/contato';

// O laudo carrega sob demanda: quem não abre não baixa. `precarregarLaudo` é chamado ao passar o mouse ou
// focar no botão, para o clique não esperar o pacote chegar.
let moduloLaudoPromise = null;
let moduloLaudoPronto = false;

const precarregarLaudo = () => {
  if (!moduloLaudoPromise) {
    moduloLaudoPromise = import('./LaudoExemplo')
      .then((mod) => {
        moduloLaudoPronto = true;
        return mod;
      })
      .catch((erro) => {
        moduloLaudoPromise = null;
        moduloLaudoPronto = false;
        throw erro;
      });
  }
  return moduloLaudoPromise;
};

const iniciarPrecarregamento = () => {
  precarregarLaudo().catch(() => {});
};

const LaudoExemplo = lazy(precarregarLaudo);

// Hero da Home. Fica dentro do modo CAD até a Fase 3, por isso rola sozinho dentro do painel.
// `onScrollToPain` é mantido porque Home.jsx ainda passa essa propriedade.
export default function HeroSection({ onScrollToPain }) {
  const [laudoAberto, setLaudoAberto] = useState(false);
  const [laudoPedido, setLaudoPedido] = useState(false);
  const [carregandoLaudo, setCarregandoLaudo] = useState(false);
  const botaoLaudoRef = useRef(null);

  const abrirLaudo = () => {
    setLaudoPedido(true);
    setLaudoAberto(true);
    if (!moduloLaudoPronto) {
      setCarregandoLaudo(true);
      precarregarLaudo()
        .catch(() => {})
        .finally(() => {
          setCarregandoLaudo(false);
        });
    }
  };

  return (
    <section className="tema-laudo" aria-labelledby="hero-titulo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-start">
        <div>
          <h1 id="hero-titulo" className="text-4xl sm:text-5xl text-tinta">
            Manutenção e PMOC que você consegue auditar.
          </h1>

          <p className="mt-5 text-lg text-aco-escuro max-w-[34rem]">
            Cuidamos de sistemas VRF, chillers e câmaras frias de edifícios corporativos e indústrias em São Paulo.
            Cada serviço termina com laudo, medições registradas e ART do engenheiro responsável.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={linkWhatsApp('Olá! Gostaria de pedir um diagnóstico técnico.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-refrigerante-escuro hover:bg-tinta text-white font-semibold px-6 py-3 transition-colors"
            >
              Pedir diagnóstico pelo WhatsApp
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center rounded-md border border-aco-escuro/50 text-tinta hover:bg-laudo font-semibold px-6 py-3 transition-colors"
            >
              Enviar pelo formulário
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1">
            <button
              ref={botaoLaudoRef}
              type="button"
              onClick={abrirLaudo}
              onPointerEnter={iniciarPrecarregamento}
              onFocus={iniciarPrecarregamento}
              aria-haspopup="dialog"
              aria-busy={carregandoLaudo || undefined}
              className="inline-flex min-h-[2.75rem] items-center gap-2 text-refrigerante-escuro hover:text-tinta underline underline-offset-4 font-medium"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              {carregandoLaudo ? 'Abrindo…' : 'Ver exemplo de laudo'}
            </button>
            {onScrollToPain && (
              <button
                type="button"
                onClick={onScrollToPain}
                className="inline-flex min-h-[2.75rem] items-center text-refrigerante-escuro hover:text-tinta underline underline-offset-4 font-medium"
              >
                Ver o risco de multa sem PMOC
              </button>
            )}
          </div>

          <p className="mt-8 text-sm text-aco-escuro max-w-[34rem]">
            O PMOC é exigido pela Lei 13.589/2018 em edifícios climatizados de uso coletivo. A multa por descumprimento
            pode chegar a R$ 1.500.000,00.
          </p>
        </div>

        <div className="space-y-5">
          <LeituraCampo />
          <figure>
            <img
              src="/images/prova-vacuo-balanca.webp"
              alt="Cilindro de R410A sobre a balança digital marcando 10,820 kg, ao lado do manifold com os manômetros"
              width="900"
              height="340"
              loading="lazy"
              className="w-full h-auto rounded-md border border-filete"
            />
            <figcaption className="mt-2 text-sm text-aco-escuro">
              Foto do mesmo serviço: carga de 10,820 kg de R410A medida na balança, com o manifold conectado.
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Só monta depois do primeiro pedido; depois disso fica montado e o <dialog> abre e fecha por `aberto`. */}
      {laudoPedido && (
        <Suspense fallback={null}>
          <LaudoExemplo
            aberto={laudoAberto}
            aoFechar={() => setLaudoAberto(false)}
            retornoFocoRef={botaoLaudoRef}
          />
        </Suspense>
      )}
    </section>
  );
}
