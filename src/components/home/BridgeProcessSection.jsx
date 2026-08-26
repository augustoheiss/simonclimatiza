import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Wrench, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

export default function BridgeProcessSection() {
  const steps = [
    {
      step: '01',
      icon: Activity,
      title: 'Auditoria Termodinâmica',
      subtitle: 'Diagnóstico & Carga Térmica',
      body: 'Mapeamento de carga térmica (radiação, insolação, maquinário) e gargalos de rendimento elétrico. Identificamos cada ponto de desperdício com precisão científica.',
      accent: 'from-sky-500 to-sky-600',
    },
    {
      step: '02',
      icon: Wrench,
      title: 'Intervenção Cirúrgica',
      subtitle: 'Execução 100% Normatizada',
      body: 'Alto vácuo em mícrons (< 500 microns), pressurização com nitrogênio e infraestrutura conforme normas ABNT e manuais dos fabricantes (VRF/Chillers).',
      accent: 'from-blue-500 to-blue-600',
    },
    {
      step: '03',
      icon: ShieldCheck,
      title: 'Gestão Preditiva (PMOC)',
      subtitle: 'Controle Digital & ART',
      body: 'Controle digital de ativos com histórico em tempo real, antecipando falhas antes do colapso térmico. Seu sistema gerido com o rigor de uma missão crítica.',
      accent: 'from-teal-400 to-sky-500',
    },
  ];

  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 border-t border-sky-100 bg-slate-900 relative overflow-hidden text-white"
      aria-label="A metodologia cirúrgica da Simon Climatização"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-900/60 border border-sky-700 text-sky-400 text-xs font-extrabold tracking-widest uppercase mb-4 shadow-xs">
            A Metodologia Simon
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white max-w-4xl mx-auto leading-tight">
            Onde a Máquina Encontra a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-cyan-400">
              Sabedoria da Engenharia
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Nosso processo é cirúrgico. Cada etapa foi desenhada para eliminar variáveis de risco e maximizar a vida útil e o retorno financeiro do seu maquinário.
          </p>
        </motion.div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7 sm:p-8 hover:bg-white/8 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.accent} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>

                  <div className="absolute top-6 right-8 text-6xl font-black text-white/5 select-none pointer-events-none" aria-hidden="true">
                    {item.step}
                  </div>

                  <span className="block text-xs font-bold uppercase tracking-widest text-sky-400 mb-1">
                    Etapa {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <h4 className="text-xs font-semibold text-slate-400 mb-4">{item.subtitle}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold px-9 py-4 rounded-xl transition-all duration-200 text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-400/35 hover:-translate-y-0.5"
          >
            <span>Iniciar Auditoria Técnica com Engenheiro</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
