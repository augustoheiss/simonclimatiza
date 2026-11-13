import React from 'react';
import { Link } from 'react-router-dom';
import LeituraCampo from './LeituraCampo';
import { linkWhatsApp } from '../../data/contato';

// Hero da Home. Fica dentro do modo CAD até a Fase 3, por isso rola sozinho dentro do painel.
// `onScrollToPain` é mantido porque Home.jsx ainda passa essa propriedade.
export default function HeroSection({ onScrollToPain }) {
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

          {onScrollToPain && (
            <button
              type="button"
              onClick={onScrollToPain}
              className="mt-5 text-refrigerante-escuro hover:text-tinta underline underline-offset-4 font-medium"
            >
              Ver o risco de multa sem PMOC
            </button>
          )}

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
    </section>
  );
}
