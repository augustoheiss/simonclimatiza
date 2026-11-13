import React from 'react';

const RISCOS = [
  {
    titulo: 'Conta de energia mais alta',
    corpo:
      'Máquinas subdimensionadas ou com trocadores obstruídos trabalham em esforço contínuo. O consumo de energia pode chegar a até 40% a mais todos os meses.',
  },
  {
    titulo: 'Multa por falta de PMOC',
    corpo:
      'O Plano de Manutenção, Operação e Controle assinado por engenheiro mecânico é exigido pela Lei 13.589/2018. A vistoria sanitária pode aplicar multas de até R$ 1.500.000,00 e abrir processos por insalubridade.',
  },
  {
    titulo: 'Quebra no pior momento',
    corpo:
      'Vácuo mal feito e falta de teste de estanqueidade com nitrogênio deixam umidade no circuito. Ela danifica compressores caros, em geral nos dias mais quentes do ano.',
  },
];

export default function PainSection({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      id="risco"
      className="tema-laudo secao-laudo secao-laudo--papel"
      aria-labelledby="risco-titulo"
    >
      <div className="miolo">
        <h2 id="risco-titulo" className="text-3xl sm:text-4xl text-tinta max-w-[40rem]">
          O que a manutenção feita sem padrão custa
        </h2>
        <p className="texto-corrido mt-4 text-lg text-aco-escuro">
          Máquinas fora de ajuste gastam mais energia e deixam a empresa exposta a risco jurídico. Três pontos aparecem com mais frequência.
        </p>

        <dl className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3">
          {RISCOS.map((r) => (
            <div key={r.titulo} className="border-t-2 border-alerta pt-4">
              <dt className="font-serif-laudo text-xl font-semibold text-tinta">{r.titulo}</dt>
              <dd className="mt-2 text-aco-escuro leading-relaxed">{r.corpo}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-12 texto-corrido text-lg text-tinta">
          Muita gente acredita que manutenção é lavar filtros e completar gás. Intervenção sem medição tira o sistema do ponto de projeto. Um compressor queimado ou uma máquina parada no verão custa muito mais que a manutenção preventiva.
        </p>
      </div>
    </section>
  );
}
