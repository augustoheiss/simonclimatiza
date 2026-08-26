import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

const faqs = [
  {
    question: 'O que é o PMOC e a minha empresa é realmente obrigada por lei a manter?',
    answer:
      'Sim. Pela Lei Federal 13.589/2018 e Portaria 3.523/GM do Ministério da Saúde, todos os edifícios públicos e privados de uso coletivo climatizados (acima de 5 TR ou 60.000 BTUs) são obrigados a ter um Plano de Manutenção, Operação e Controle (PMOC). O não cumprimento configura infração sanitária sujeita a multas de R$ 2.000,00 a R$ 1.500.000,00 e processos trabalhistas.',
  },
  {
    question: 'Já temos equipe interna de manutenção predial. Por que contratar a Simon?',
    answer:
      'Equipes prediais internas executam apenas reparos pontuais. A legislação exige que o PMOC seja emitido e assinado por Engenheiro Mecânico credenciado no CREA/CFT com recolhimento de ART. A Simon traz engenharia termodinâmica especializada, instrumentação digital em mícrons, termografia e biocidas padrão Anvisa que eliminam a responsabilidade civil e criminal dos gestores.',
  },
  {
    question: 'Como a gestão preventiva da Simon consegue reduzir até 40% na conta de luz?',
    answer:
      'Máquinas com microvazamentos, umidade no circuito ou serpentinas obstruídas perdem rendimento térmico. O compressor precisa puxar corrente elétrica máxima para resfriar o ambiente. Com nossa calibração termodinâmica, vácuo profundo e equalização de fluxo, os compressores voltam à curva de eficiência original do fabricante.',
  },
  {
    question: 'Como funciona o atendimento para chamados emergenciais em ambientes críticos?',
    answer:
      'Para edifícios corporativos e industriais com contrato de gestão Simon, disponibilizamos canal direto com engenheiro de plantão e SLA de resposta rápida para evitar interrupções operacionais em salas de servidores (CPD), salas de reuniões e processos produtivos.',
  },
  {
    question: 'Como iniciar uma auditoria ou diagnóstico técnico com a Simon?',
    answer:
      'Basta preencher o formulário no site ou falar diretamente no WhatsApp da equipe de engenharia. Agendamos uma visita técnica não invasiva para mapear o parque de máquinas, verificar a conformidade do PMOC e apresentar um relatório executivo de oportunidades de economia.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 bg-slate-50 border-t border-sky-100 relative overflow-hidden"
      aria-label="Perguntas Frequentes sobre Gestão Térmica e PMOC"
    >
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-extrabold tracking-widest uppercase mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            Quebra de Dúvidas Técnicas &amp; Jurídicas
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 leading-tight">
            Perguntas Frequentes de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Gestores e Síndicos
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Tudo o que você precisa saber sobre adequação legal, economia de energia e contratos de gestão Simon.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-sky-100 shadow-sm overflow-hidden transition-all duration-200 hover:border-sky-300"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-inset"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-sky-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500 mb-3">Possui uma dúvida técnica específica sobre o seu maquinário?</p>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20com%20o%20Engenheiro."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-bold text-sm underline underline-offset-4 decoration-sky-300 hover:decoration-sky-500 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            Falar diretamente com um Engenheiro no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
