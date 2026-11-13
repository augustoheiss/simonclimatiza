// Serviços: uma página que se lê de cima para baixo. Os textos ficam em src/data/servicos.js.

import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICOS, PILARES } from '../data/servicos';
import ServicoDetalhe from '../components/servicos/ServicoDetalhe';
import SobreSimonSection from '../components/servicos/SobreSimonSection';
import IndiceSecoes from '../components/layout/IndiceSecoes';
import { linkWhatsApp } from '../data/contato';

const SECOES = [
  { id: 'inicio', nome: 'Início' },
  { id: 'servicos', nome: 'Os 6 serviços' },
  { id: 'especialista', nome: 'Especialista' },
  { id: 'provas', nome: 'Provas de campo' },
  { id: 'diagnostico', nome: 'Diagnóstico' },
];

export default function Servicos() {
  return (
    <>
      <IndiceSecoes secoes={SECOES} />

      <section id="inicio" className="tema-laudo secao-laudo secao-laudo--papel" aria-labelledby="servicos-h1" style={{ borderTop: 0 }}>
        <div className="miolo">
          <h1 id="servicos-h1" className="text-4xl sm:text-5xl text-tinta max-w-[40rem]">
            Serviços de engenharia térmica para quem não pode parar
          </h1>
          <p className="texto-corrido mt-5 text-lg text-aco-escuro">
            Implantamos protocolos de engenharia térmica, conformidade com o PMOC e gestão preventiva dos equipamentos, para proteger a operação e o orçamento.
          </p>

          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {PILARES.map((p) => (
              <li key={p.title} className="border-t-2 border-refrigerante-escuro pt-4">
                <h2 className="font-serif-laudo text-xl font-semibold text-tinta">{p.title}</h2>
                <p className="mt-2 text-aco-escuro leading-relaxed">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="servicos" className="tema-laudo secao-laudo secao-laudo--branca" aria-labelledby="servicos-titulo">
        <div className="miolo">
          <h2 id="servicos-titulo" className="text-3xl sm:text-4xl text-tinta max-w-[40rem]">
            Os seis serviços
          </h2>
          <div className="mt-10 space-y-16">
            {SERVICOS.map((s) => (
              <ServicoDetalhe key={s.id} servico={s} />
            ))}
          </div>
        </div>
      </section>

      <section id="especialista" className="tema-laudo secao-laudo secao-laudo--papel" aria-labelledby="especialista-titulo">
        <div className="miolo">
          <h2 id="especialista-titulo" className="text-3xl sm:text-4xl text-tinta max-w-[40rem]">
            Quem responde pelo trabalho
          </h2>
          <div className="mt-8">
            <SobreSimonSection mode="especialista" />
          </div>
        </div>
      </section>

      <section id="provas" className="tema-laudo secao-laudo secao-laudo--branca" aria-labelledby="provas-titulo">
        <div className="miolo">
          <h2 id="provas-titulo" className="text-3xl sm:text-4xl text-tinta max-w-[40rem]">
            Provas de campo
          </h2>
          <p className="texto-corrido mt-4 text-lg text-aco-escuro">
            Fotos e vídeos de serviços reais, com as leituras dos instrumentos, publicados no perfil @simonclimatiza.
          </p>
          <div className="mt-8">
            <SobreSimonSection mode="provas" />
          </div>
        </div>
      </section>

      <section id="diagnostico" className="tema-laudo secao-laudo secao-laudo--papel" aria-labelledby="diagnostico-titulo">
        <div className="miolo">
          <h2 id="diagnostico-titulo" className="text-3xl sm:text-4xl text-tinta max-w-[40rem]">
            Peça um diagnóstico técnico
          </h2>
          <p className="texto-corrido mt-4 text-lg text-aco-escuro">
            Um engenheiro faz a visita, mapeia os equipamentos e confere a situação do PMOC.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={linkWhatsApp('Olá! Gostaria de agendar um diagnóstico técnico.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-refrigerante-escuro hover:bg-tinta text-white font-semibold px-6 py-3 transition-colors"
            >
              Agendar pelo WhatsApp
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center rounded-md border border-aco-escuro/50 text-tinta hover:bg-laudo font-semibold px-6 py-3 transition-colors"
            >
              Enviar pelo formulário
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
