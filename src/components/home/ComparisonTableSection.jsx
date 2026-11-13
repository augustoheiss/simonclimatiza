import React from 'react';

// A coluna da direita descreve práticas, não concorrentes: nenhuma empresa é citada ou acusada.
const LINHAS = [
  {
    criterio: 'Vácuo',
    simon: 'Vácuo profundo (abaixo de 500 mícrons) com vacuômetro digital e teste de retenção.',
    pratica: 'Vácuo pelo tempo, sem medidor, ou purga com o próprio gás refrigerante, o que deixa umidade no circuito.',
  },
  {
    criterio: 'Estanqueidade',
    simon: 'Pressurização com nitrogênio e acompanhamento da perda de pressão.',
    pratica: 'Teste com espuma e sabão, que não detecta microvazamentos.',
  },
  {
    criterio: 'Responsabilidade legal do PMOC',
    simon: 'Engenheiro mecânico habilitado, com Anotação de Responsabilidade Técnica (ART).',
    pratica: 'Documento sem responsável técnico habilitado, sem validade perante a fiscalização sanitária.',
  },
  {
    criterio: 'Higienização',
    simon: 'Produtos regulamentados pela Anvisa e análises microbiológicas periódicas.',
    pratica: 'Limpeza superficial, que mantém fungos e bactérias nos dutos.',
  },
  {
    criterio: 'Diagnóstico',
    simon: 'Medição de superaquecimento e sub-resfriamento com manifold digital e termografia.',
    pratica: 'Completar gás sem medir, o que sobrecarrega o compressor.',
  },
];

export default function ComparisonTableSection() {
  return (
    <section id="comparativo" className="tema-laudo secao-laudo secao-laudo--branca" aria-labelledby="comparativo-titulo">
      <div className="miolo">
        <h2 id="comparativo-titulo" className="text-3xl sm:text-4xl text-tinta max-w-[40rem]">
          O padrão Simon e a prática comum sem padrão
        </h2>
        <p className="texto-corrido mt-4 text-lg text-aco-escuro">
          A diferença está no que é medido e registrado em cada etapa do serviço.
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[40rem] text-left border-collapse">
            <caption className="sr-only">Comparação entre o padrão de serviço da Simon e práticas comuns sem padrão</caption>
            <thead>
              <tr className="border-b-2 border-tinta text-tinta">
                <th scope="col" className="py-3 pr-4 font-semibold w-[22%]">Critério</th>
                <th scope="col" className="py-3 pr-4 font-semibold w-[39%]">Padrão Simon</th>
                <th scope="col" className="py-3 font-semibold w-[39%]">Prática comum sem padrão</th>
              </tr>
            </thead>
            <tbody>
              {LINHAS.map((l) => (
                <tr key={l.criterio} className="border-b border-filete align-top">
                  <th scope="row" className="py-4 pr-4 font-semibold text-tinta">{l.criterio}</th>
                  <td className="py-4 pr-4 text-tinta">{l.simon}</td>
                  <td className="py-4 text-aco-escuro">{l.pratica}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
