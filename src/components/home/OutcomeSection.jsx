import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, ShieldCheck, Wind, Sparkles } from 'lucide-react';

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

export default function OutcomeSection() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 bg-white border-t border-sky-100 relative overflow-hidden"
      aria-label="Os resultados da engenharia térmica de precisão"
    >
      {/* Ambient Atmospheric Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/60 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100/50 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-extrabold tracking-widest uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            A Visão do Futuro com Engenharia
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 max-w-4xl mx-auto leading-tight">
            Imagine uma Operação{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-teal-500">
              Blindada, Silenciosa e Altamente Lucrativa
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Quando os critérios da engenharia substituem a improvisação, cada máquina se torna um ativo de máxima performance.
          </p>
        </motion.div>

        {/* 3 Outcome Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            {
              icon: <TrendingDown className="w-7 h-7" aria-hidden="true" />,
              accent: 'from-sky-500 to-blue-600',
              textAccent: 'text-sky-500',
              tag: 'ROI Imediato',
              title: 'Eficiência Termodinâmica Perfeita',
              body: 'Nossas calibrações preditivas fazem o compressor trabalhar na zona ideal de rendimento. A eliminação do consumo excessivo paga integralmente o contrato de gestão.',
              metric: '−40%',
              metricLabel: 'desperdício energético',
            },
            {
              icon: <ShieldCheck className="w-7 h-7" aria-hidden="true" />,
              accent: 'from-blue-600 to-indigo-600',
              textAccent: 'text-blue-600',
              tag: 'Escudo Legal Pleno',
              title: 'Seu CNPJ Blindado de Ponta a Ponta',
              body: 'PMOC digital auditável em tempo real, laudos microbiológicos de pureza do ar e ART em dia. Diante de qualquer fiscalização sanitária, sua empresa está 100% resguardada.',
              metric: '100%',
              metricLabel: 'conforme a Lei 13.589',
            },
            {
              icon: <Wind className="w-7 h-7" aria-hidden="true" />,
              accent: 'from-teal-400 to-sky-500',
              textAccent: 'text-teal-500',
              tag: 'Produtividade & Ar Puro',
              title: 'Erradicação da Síndrome do Edifício Doente',
              body: 'Com higienização técnica e biocidas aprovados pela Anvisa, eliminamos ácaros e fungos. O absenteísmo da equipe despenca em um ambiente termicamente perfeito.',
              metric: '3×',
              metricLabel: 'durabilidade dos ativos',
            },
          ].map(({ icon, accent, textAccent, tag, title, body, metric, metricLabel }, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="relative group bg-white/80 backdrop-blur-xl border border-sky-100 rounded-3xl p-7 sm:p-8 shadow-md hover:shadow-2xl hover:shadow-sky-900/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className={`absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-br ${accent} opacity-10 rounded-full blur-[50px] group-hover:opacity-20 transition-opacity pointer-events-none`} aria-hidden="true" />

              <div>
                <div className={`w-13 h-13 bg-gradient-to-br ${accent} rounded-2xl flex items-center justify-center mb-5 text-white shadow-md`}>
                  {icon}
                </div>
                <span className={`text-xs font-extrabold uppercase tracking-widest ${textAccent} mb-2 block`}>{tag}</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 leading-snug">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{body}</p>
              </div>

              <div className="pt-5 border-t border-sky-100 flex items-baseline gap-2">
                <span className={`text-3xl font-black ${textAccent}`}>{metric}</span>
                <span className="text-slate-500 text-xs font-semibold">{metricLabel}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* New Paradigm Quote Banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto px-4"
        >
          <blockquote className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-7xl text-sky-200 font-serif leading-none select-none pointer-events-none" aria-hidden="true">“</div>
            <p className="text-slate-700 text-lg sm:text-xl md:text-2xl leading-relaxed font-light italic pt-4">
              A climatização deixou de ser um eletrodoméstico e tornou-se{' '}
              <strong className="text-slate-900 not-italic font-bold">infraestrutura crítica de negócios</strong>. Com a engenharia correta, você não gasta com manutenção;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 not-italic font-extrabold">você lucra com a eficiência.</span>
            </p>
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
}
