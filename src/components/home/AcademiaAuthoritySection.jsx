import React from 'react';
import { Link } from 'react-router-dom';

// Só entram aqui fatos que o acervo do projeto comprova (src/data/instagramSimonArchive.js
// e src/data/treinamentos.js). Nota de avaliação, selo "bestseller" e contagem de alunos foram
// removidos porque não há nenhuma fonte para eles.
const TEMAS = [
  'Mecânica dos fluidos e termodinâmica aplicadas à climatização',
  'Diagnóstico de códigos de erro e reparo de placas Inverter',
  'Comissionamento e carga térmica de sistemas VRF e VRV',
  'Gestão preventiva e emissão de PMOC conforme a Lei 13.589',
];

export default function AcademiaAuthoritySection() {
  return (
    <section id="especialista" className="tema-laudo secao-laudo secao-laudo--papel" aria-labelledby="especialista-titulo">
      <div className="miolo grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-start">
        <div>
          <h2 id="especialista-titulo" className="text-3xl sm:text-4xl text-tinta">
            Quem responde pelo serviço também ensina o ofício
          </h2>
          <p className="texto-corrido mt-4 text-lg text-aco-escuro">
            O responsável técnico da Simon tem 21 anos de campo e é instrutor de manutenção e instalação na formação de técnicos, incluindo atuação em laboratório didático do SENAI.
          </p>
          <p className="texto-corrido mt-4 text-aco-escuro">
            A mesma experiência vira cursos na Academia Simon, para quem quer aprender a fazer o serviço do jeito certo.
          </p>

          <ul className="mt-6 space-y-2 text-tinta">
            {TEMAS.map((t) => (
              <li key={t} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-refrigerante-escuro" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/academia"
            className="mt-8 inline-flex items-center rounded-md border border-aco-escuro/50 text-tinta hover:bg-laudo font-semibold px-6 py-3 transition-colors"
          >
            Ver os cursos da Academia
          </Link>
        </div>

        <aside className="bg-laudo border border-filete rounded-md p-6">
          <p className="font-serif-laudo text-lg font-semibold text-tinta">Academia Simon</p>
          <dl className="mt-4 divide-y divide-filete">
            <div className="flex items-baseline justify-between py-3">
              <dt className="text-aco-escuro">Cursos</dt>
              <dd className="valor-medido text-2xl font-semibold text-tinta">5</dd>
            </div>
            <div className="flex items-baseline justify-between py-3">
              <dt className="text-aco-escuro">Anos de experiência em campo</dt>
              <dd className="valor-medido text-2xl font-semibold text-tinta">21</dd>
            </div>
          </dl>
          <p className="mt-3 text-sm text-aco-escuro">
            Cursos de instalação, manutenção, VRF e TVR Pro, com certificado e validação pública.
          </p>
        </aside>
      </div>
    </section>
  );
}
