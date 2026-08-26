import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, CheckCircle2, Star, Users, Zap, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

export default function AcademiaAuthoritySection() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 bg-white border-t border-sky-100 relative overflow-hidden"
      aria-label="Academia Simon — Autoridade técnica nacional"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-sky-50/80 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Authority Copy (7 cols) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-extrabold tracking-widest uppercase mb-6 shadow-xs">
              <GraduationCap className="w-3.5 h-3.5 text-sky-500" />
              Autoridade Docente Nacional
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-5 text-slate-900 leading-tight">
              Quem Ensina a Elite Técnica do Brasil,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Domina o Mercado.
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              A Simon Climatização não apenas executa projetos de alta complexidade; nós capacitamos os técnicos e engenheiros do setor em todo o país através da{' '}
              <strong className="text-slate-900 font-bold">Academia Simon</strong>. Nossos treinamentos cobrem desde mecânica dos fluidos aplicada até decodificação avançada de placas Inverter.
            </p>

            <ul className="space-y-3 mb-8" role="list">
              {[
                'Mecânica dos fluidos e termodinâmica aplicada a sistemas de climatização',
                'Decodificação de códigos de erro e reparo de placas eletrônicas Inverter',
                'Comissionamento e cálculo de carga térmica para sistemas VRF/VRV',
                'Gestão preditiva e emissão de PMOC em conformidade com a Lei 13.589',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-4.5 h-4.5 text-sky-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Authority Punchline Quote */}
            <div className="relative overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50/80 to-white p-5 sm:p-6 mb-7 shadow-xs">
              <div className="flex items-start gap-3.5">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-slate-800 text-sm sm:text-base font-bold leading-relaxed">
                  "Quando você contrata a Simon, o seu edifício é gerido e auditado pelos mesmos engenheiros que formam os técnicos do mercado."
                </p>
              </div>
            </div>

            <Link
              to="/academia"
              className="inline-flex items-center gap-2 border border-sky-300 hover:border-sky-500 text-sky-700 hover:text-sky-800 font-bold px-6 py-3.5 rounded-xl transition-all duration-200 text-sm bg-sky-50/60 hover:bg-sky-100/80 shadow-xs"
            >
              <BookOpen className="w-4 h-4 text-sky-600" />
              <span>Conhecer os Cursos da Academia Simon</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Column: Course Mockup Card (5 cols) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-sky-300/15 blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />

              <div className="relative z-10 bg-white border border-sky-100 rounded-3xl shadow-2xl shadow-sky-900/10 overflow-hidden">
                {/* Course Header Banner */}
                <div className="h-48 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center relative overflow-hidden p-6 text-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a5f_1px,transparent_1px),linear-gradient(to_bottom,#1e3a5f_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-40" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-sky-500/20 border border-sky-400/30 rounded-2xl flex items-center justify-center mx-auto mb-2 text-sky-400">
                      <Zap className="w-7 h-7" />
                    </div>
                    <span className="text-white/70 text-xs font-bold uppercase tracking-widest block">Treinamento Avançado</span>
                    <span className="text-white font-extrabold text-lg">Dominando o Sistema VRF</span>
                  </div>

                  <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-500 text-white text-[11px] font-extrabold">
                    Bestseller
                  </div>
                </div>

                {/* Course Card Body */}
                <div className="p-6 sm:p-7">
                  <span className="block text-xs font-bold uppercase tracking-widest text-sky-600 mb-1">
                    Academia Simon HVAC
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    Especialização em Sistemas VRF / TVR Ultra
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                    Do dimensionamento psicrométrico à decodificação de falhas: o treinamento técnico mais respeitado do setor.
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="font-bold text-slate-700">(4.9/5)</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-slate-600">
                      <Users className="w-3.5 h-3.5 text-sky-500" />
                      +500 Alunos Formados
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
