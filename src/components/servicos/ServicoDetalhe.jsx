import React from 'react';
import { Link } from 'react-router-dom';
import ProvasGaleria from './ProvasGaleria';

// Um serviço completo: o que é, como é feito, o que se espera e o que a Simon garante.
// `servico` vem de src/data/servicos.js.
export default function ServicoDetalhe({ servico }) {
  return (
    <article id={servico.id} className="border-t-2 border-tinta pt-6" aria-labelledby={`${servico.id}-titulo`}>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <header>
          <p className="text-sm font-semibold text-refrigerante-escuro">{servico.tag}</p>
          <h3 id={`${servico.id}-titulo`} className="mt-1 text-2xl sm:text-3xl text-tinta">
            {servico.title}
          </h3>
          <p className="texto-corrido mt-3 text-aco-escuro leading-relaxed">{servico.description}</p>

          <Link
            to="/contato"
            state={{ servicoSelecionado: servico.rotuloContato }}
            className="mt-6 inline-flex items-center rounded-md bg-refrigerante-escuro hover:bg-tinta text-white font-semibold px-5 py-2.5 transition-colors"
          >
            Pedir diagnóstico deste serviço
          </Link>
        </header>

        <div className="space-y-6">
          <section aria-label={`Como é feito: ${servico.title}`}>
            <p className="font-semibold text-tinta">Como é feito</p>
            <ol className="mt-2 space-y-2 list-decimal pl-5 marker:text-refrigerante-escuro marker:font-semibold">
              {servico.protocolo.map((passo) => (
                <li key={passo} className="text-tinta leading-relaxed pl-1">
                  {passo}
                </li>
              ))}
            </ol>
          </section>

          <dl className="grid gap-4 sm:grid-cols-2 border-y border-filete py-4">
            <div>
              <dt className="text-sm font-semibold text-aco-escuro">O que se espera</dt>
              <dd className="mt-1 text-tinta leading-relaxed">{servico.resultado}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-aco-escuro">Garantia</dt>
              <dd className="mt-1 text-tinta leading-relaxed">{servico.garantia}</dd>
            </div>
          </dl>

          <ProvasGaleria servicoRef={servico.id} />
        </div>
      </div>
    </article>
  );
}
