import React from 'react';
import { Link } from 'react-router-dom';

// Aqui a numeração é uma sequência real: as etapas acontecem nesta ordem.
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

export default function BridgeProcessSection() {
  return (
    <section id="metodo" className="tema-laudo secao-laudo secao-laudo--papel" aria-labelledby="metodo-titulo">
      <div className="miolo">
        <h2 id="metodo-titulo" className="text-3xl sm:text-4xl text-tinta max-w-[40rem]">
          Como o trabalho é feito
        </h2>
        <p className="texto-corrido mt-4 text-lg text-aco-escuro">
          Três etapas, sempre nesta ordem. Cada uma termina com registro das medições.
        </p>

        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {ETAPAS.map((e, i) => (
            <li key={e.titulo} className="relative border-t-2 border-refrigerante-escuro pt-4">
              <span className="valor-medido text-sm font-semibold text-refrigerante-escuro">Etapa {i + 1}</span>
              <h3 className="mt-1 font-serif-laudo text-xl font-semibold text-tinta">{e.titulo}</h3>
              <p className="mt-2 text-aco-escuro leading-relaxed">{e.corpo}</p>
            </li>
          ))}
        </ol>

        <Link
          to="/contato"
          className="mt-10 inline-flex items-center rounded-md bg-refrigerante-escuro hover:bg-tinta text-white font-semibold px-6 py-3 transition-colors"
        >
          Pedir uma auditoria técnica
        </Link>
      </div>
    </section>
  );
}
