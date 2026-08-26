import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, AlertTriangle, Wrench, ShieldAlert } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function PainSection({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      id="risco-legal"
      className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 bg-slate-50 border-t border-sky-100"
      aria-label="Os custos ocultos do ar-condicionado comoditizado"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-extrabold tracking-widest uppercase mb-4 shadow-xs">
            <ShieldAlert className="w-3.5 h-3.5" />
            O Problema Real do Mercado
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 max-w-4xl mx-auto leading-tight">
            O Custo Silencioso (e Perigoso) do{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-orange-500">
              Ar-Condicionado Comoditizado
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Enquanto você lê isso, máquinas descalibradas podem estar corroendo o caixa da sua empresa e expondo o seu CNPJ a riscos jurídicos desnecessários.
          </p>
        </motion.div>

        {/* 3 Pain Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            {
              icon: <TrendingDown className="w-7 h-7" aria-hidden="true" />,
              accent: 'text-orange-500',
              bg: 'bg-orange-50',
              border: 'border-orange-200',
              title: 'A Hemorragia Financeira',
              subtitle: 'O Ralo Energético',
              body: 'Máquinas subdimensionadas ou com trocadores obstruídos operam em esforço extremo contínuo. O resultado é um consumo de energia que drena até 40% a mais do fluxo de caixa todos os meses.',
            },
            {
              icon: <AlertTriangle className="w-7 h-7" aria-hidden="true" />,
              accent: 'text-red-500',
              bg: 'bg-red-50',
              border: 'border-red-200',
              title: 'A Bomba-Relógio Jurídica',
              subtitle: 'A Roleta-Russa do PMOC',
              body: 'A ausência do Plano de Manutenção assinado por Engenheiro Mecânico credenciado é infração federal (Lei 13.589/18). Vistorias sanitárias aplicam multas de até R$ 1.500.000,00 e processos por insalubridade.',
            },
            {
              icon: <Wrench className="w-7 h-7" aria-hidden="true" />,
              accent: 'text-amber-600',
              bg: 'bg-amber-50',
              border: 'border-amber-200',
              title: 'O Colapso no Verão',
              subtitle: 'Gambiarras e Quebras Prematuras',
              body: 'O mercado está repleto de técnicos que ignoram o alto vácuo profundo e a estanqueidade com nitrogênio. Essa umidade residual queima compressores caríssimos exatamente nos dias mais quentes do ano.',
            },
          ].map(({ icon, accent, bg, border, title, subtitle, body }, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className={`bg-white border ${border} rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className={`w-13 h-13 ${bg} border ${border} rounded-2xl flex items-center justify-center mb-5 ${accent} shadow-xs`}>
                  {icon}
                </div>
                <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{title}</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">{subtitle}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Belief Deconstruction Banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-sky-50/50 p-8 sm:p-10 shadow-lg shadow-sky-900/5"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-300/15 rounded-full blur-[90px] pointer-events-none" aria-hidden="true" />
          
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-10 bg-gradient-to-b from-sky-400 to-blue-600 rounded-full" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-sky-700">Desconstrução do Mito de Mercado</span>
            </div>
            
            <p className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed">
              <strong className="text-slate-900 font-bold">Muitos gestores acreditam que manutenção é apenas "lavar filtros" ou "completar gás".</strong>{' '}
              Na verdade, intervenções empíricas descalibram a termodinâmica do sistema. O custo de um compressor queimado ou de uma máquina parada no verão é{' '}
              <em className="text-sky-600 not-italic font-extrabold underline decoration-sky-300">infinitamente maior</em> que uma gestão técnica preventiva de excelência.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
