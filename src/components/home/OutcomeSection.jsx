import React from 'react';

const ENTREGAS = [
  {
    titulo: 'Consumo de energia sob controle',
    corpo:
      'A calibração preventiva leva o compressor para a faixa em que ele rende melhor. Menos consumo desnecessário reduz o custo mensal do contrato.',
    medida: 'medido',
    legenda: 'cada ajuste é conferido com instrumento e registrado',
  },
  {
    titulo: 'Documentação pronta para a fiscalização',
    corpo:
      'PMOC digital, laudos de qualidade do ar e ART em dia. Em uma vistoria sanitária, a empresa apresenta os documentos exigidos pela Lei 13.589.',
    medida: 'PMOC + ART',
    legenda: 'assinados por engenheiro responsável',
  },
  {
    titulo: 'Ar limpo e equipamentos que duram mais',
    corpo:
      'Higienização técnica com produtos regulamentados pela Anvisa reduz ácaros e fungos. Manutenção preventiva também aumenta a vida útil dos equipamentos.',
    medida: 'mais tempo',
    legenda: 'de vida útil dos equipamentos',
  },
];

export default function OutcomeSection() {
  return (
    <section id="entrega" className="tema-laudo secao-laudo secao-laudo--branca" aria-labelledby="entrega-titulo">
      <div className="miolo">
        <h2 id="entrega-titulo" className="text-3xl sm:text-4xl text-tinta max-w-[40rem]">
          O que a Simon entrega ao final de cada serviço
        </h2>
        <p className="texto-corrido mt-4 text-lg text-aco-escuro">
          Quando a medição substitui o improviso, cada máquina passa a ser um ativo que dá para acompanhar.
        </p>

        <ul className="mt-10 divide-y divide-filete border-y border-filete">
          {ENTREGAS.map((e) => (
            <li key={e.titulo} className="grid gap-4 py-6 md:grid-cols-[1.4fr_0.6fr] md:gap-10">
              <div>
                <h3 className="font-serif-laudo text-xl font-semibold text-tinta">{e.titulo}</h3>
                <p className="mt-2 text-aco-escuro leading-relaxed texto-corrido">{e.corpo}</p>
              </div>
              <p className="md:text-right">
                <span className="valor-medido block text-2xl font-semibold text-refrigerante-escuro">{e.medida}</span>
                <span className="block text-sm text-aco-escuro">{e.legenda}</span>
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 texto-corrido text-lg text-tinta">
          A climatização deixou de ser eletrodoméstico e virou infraestrutura crítica do negócio. Com a engenharia certa, a manutenção deixa de ser só gasto e passa a gerar economia.
        </p>
      </div>
    </section>
  );
}
