import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, Scale } from 'lucide-react';

const comparisonData = [
  {
    criterion: 'Procedimento de Vácuo',
    simon: 'Alto vácuo profundo (< 500 microns) com vacuômetro digital e retenção estática.',
    others: 'Vácuo "no relógio" ou expurgo no próprio gás refrigerante, gerando umidade e acidez.',
  },
  {
    criterion: 'Teste de Estanqueidade',
    simon: 'Pressurização com Nitrogênio (N2) em alta pressão e teste de perda de carga.',
    others: 'Teste rápido e empírico com esponja e sabão, incapaz de achar microvazamentos.',
  },
  {
    criterion: 'Responsabilidade Legal (PMOC)',
    simon: 'Engenheiro Mecânico credenciado com Anotação de Responsabilidade Técnica (ART).',
    others: 'Recibo ou carimbo sem validade jurídica perante fiscalização da Vigilância Sanitária.',
  },
  {
    criterion: 'Higienização e Pureza do Ar',
    simon: 'Biocidas hospitalares regulamentados pela Anvisa e laudos microbiológicos periódicos.',
    others: 'Limpeza superficial com água e sabão neutro, mantendo fungos e bactérias no duto.',
  },
  {
    criterion: 'Diagnóstico Termodinâmico',
    simon: 'Aferição de superaquecimento e subresfriamento com manifolds digitais e termografia.',
    others: '"Completar gás" às cegas, sobrecarregando o compressor e encurtando sua vida útil.',
  },
];

export default function ComparisonTableSection() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 bg-white border-t border-sky-100 relative overflow-hidden"
      aria-label="Tabela Comparativa: Engenharia Simon vs. Mercado Tradicional"
    >
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold tracking-widest uppercase mb-4 shadow-xs">
            <Scale className="w-3.5 h-3.5" />
            Critérios Técnicos Inegociáveis
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 leading-tight">
            Engenharia de Precisão vs.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Instalação Comoditizada
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Veja a diferença prática entre o improviso do mercado e a metodologia científica aplicada pela Simon Climatiza.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="bg-white rounded-3xl border border-sky-100 shadow-xl shadow-sky-900/5 overflow-hidden">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-900 text-white font-bold text-sm sm:text-base">
            <div className="md:col-span-4 p-4 sm:p-5 flex items-center">
              <span>Critério Técnico de Engenharia</span>
            </div>
            <div className="md:col-span-4 p-4 sm:p-5 bg-gradient-to-r from-sky-600 to-blue-600 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-200" />
                Padrão Simon Climatiza
              </span>
            </div>
            <div className="md:col-span-4 p-4 sm:p-5 text-slate-400 bg-slate-950 flex items-center">
              <span>Mercado Tradicional / Comoditizado</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 text-sm transition-colors hover:bg-sky-50/30"
              >
                {/* Criterion Title */}
                <div className="md:col-span-4 p-4 sm:p-5 font-bold text-slate-900 flex items-center bg-slate-50/50 md:bg-transparent">
                  {row.criterion}
                </div>

                {/* Simon Standard */}
                <div className="md:col-span-4 p-4 sm:p-5 text-slate-800 bg-sky-50/40 md:border-x md:border-sky-100 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-sky-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium leading-relaxed">{row.simon}</span>
                </div>

                {/* Traditional Market */}
                <div className="md:col-span-4 p-4 sm:p-5 text-slate-500 flex items-start gap-2.5 bg-white">
                  <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-relaxed">{row.others}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
