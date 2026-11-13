import React from 'react';
import { Link } from 'react-router-dom';
import { linkWhatsApp } from '../../data/contato';

// Antes esta seção anunciava "vagas limitadas" e "durabilidade vitalícia". Não havia limite de vagas
// confirmado nem como sustentar "vitalícia", então o texto agora só diz o que a Simon faz.
export default function ScarcityCtaSection() {
  return (
    <section id="diagnostico" className="tema-laudo secao-laudo secao-laudo--branca" aria-labelledby="diagnostico-titulo">
      <div className="miolo">
        <h2 id="diagnostico-titulo" className="text-3xl sm:text-4xl text-tinta max-w-[40rem]">
          Atendimento por agenda, com engenheiro responsável
        </h2>

        <blockquote className="mt-6 max-w-[40rem] border-l-4 border-refrigerante-escuro pl-5 text-lg text-tinta leading-relaxed">
          A engenharia de precisão exige tempo em cada instalação. Por isso a Simon atende uma carteira de clientes corporativos que consegue acompanhar de perto, para os equipamentos render mais e durar mais.
          <footer className="mt-3 text-sm text-aco-escuro">Corpo de engenharia, Simon Climatização</footer>
        </blockquote>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={linkWhatsApp('Olá! Gostaria de agendar um diagnóstico técnico.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-refrigerante-escuro hover:bg-tinta text-white font-semibold px-6 py-3 transition-colors"
          >
            Agendar diagnóstico pelo WhatsApp
          </a>
          <Link
            to="/contato"
            className="inline-flex items-center justify-center rounded-md border border-aco-escuro/50 text-tinta hover:bg-papel font-semibold px-6 py-3 transition-colors"
          >
            Enviar pelo formulário
          </Link>
        </div>

        <ul className="mt-6 space-y-1 text-aco-escuro">
          <li>Retorno em até 24 horas úteis.</li>
          <li>Visita técnica para mapear os equipamentos e verificar a situação do PMOC.</li>
          <li>Seus dados são usados só para este contato.</li>
        </ul>
      </div>
    </section>
  );
}
