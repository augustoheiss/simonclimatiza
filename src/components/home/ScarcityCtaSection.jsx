import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, Lock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

export default function ScarcityCtaSection() {
  return (
    <section
      className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-sky-50/60 via-sky-50/90 to-white border-t border-sky-100 relative overflow-hidden text-center"
      aria-label="Vagas limitadas para auditoria técnica boutique"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-sky-200/40 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Scarcity Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-sky-200 text-slate-800 text-xs sm:text-sm font-extrabold mb-7 shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" aria-hidden="true" />
            <span>Atendimento Boutique &bull; Vagas de Auditoria Limitadas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
            Não atendemos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              todo mundo.
            </span>
            <br />
            E isso é uma garantia para o seu edifício.
          </h2>
        </motion.div>

        {/* Founder's Manifesto Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          className="relative bg-white/90 backdrop-blur-xl border border-sky-200 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-sky-900/10 mb-10 text-left"
        >
          <div className="absolute -top-5 left-8 text-6xl text-sky-200 font-serif leading-none select-none pointer-events-none" aria-hidden="true">“</div>
          
          <blockquote className="relative z-10">
            <p className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed font-light">
              Devido à{' '}
              <strong className="text-slate-900 font-bold">engenharia de precisão microscópica</strong> e ao rigor técnico inegociável exigidos para sistemas de alta performance, atendemos deliberadamente uma carteira <strong className="text-slate-900 font-bold">estritamente seleta</strong> de clientes corporativos por mês. Não entramos em leilões de preço. Nossa missão é dedicar atenção obsessiva para garantir a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 font-bold">durabilidade vitalícia do seu patrimônio.</span>
            </p>
            
            <footer className="mt-6 flex items-center gap-3">
              <div className="w-8 h-px bg-sky-400" aria-hidden="true" />
              <cite className="text-sky-700 text-xs sm:text-sm font-extrabold uppercase tracking-widest not-italic">
                Corpo de Engenharia, Simon Climatização
              </cite>
            </footer>
          </blockquote>
        </motion.div>

        {/* Final CTA Button & Guarantees */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          className="flex flex-col items-center"
        >
          <Link
            to="/contato"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:via-blue-700 hover:to-indigo-700 text-white font-extrabold px-10 sm:px-14 py-4 sm:py-5 rounded-2xl transition-all duration-200 text-base sm:text-lg shadow-2xl shadow-sky-500/30 hover:shadow-sky-600/40 hover:-translate-y-1 active:translate-y-0"
          >
            <span>Solicitar Vaga para Diagnóstico Técnico</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
          </Link>

          {/* Micro-assurances */}
          <div className="mt-5 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-sky-500" />
              Retorno garantido em até 24h úteis
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-500" />
              Avaliação Técnica Especializada
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-sky-500" />
              Sigilo absoluto de dados
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
