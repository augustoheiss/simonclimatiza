import React, { useState } from 'react';
import { linkWhatsApp } from '../../data/contato';

const faqs = [
  {
    question: 'O que é o PMOC e a minha empresa é realmente obrigada por lei a manter?',
    answer:
      'Sim. Pela Lei Federal 13.589/2018 e Portaria 3.523/GM do Ministério da Saúde, todos os edifícios públicos e privados de uso coletivo climatizados (acima de 5 TR ou 60.000 BTUs) são obrigados a ter um Plano de Manutenção, Operação e Controle (PMOC). O não cumprimento configura infração sanitária sujeita a multas de R$ 2.000,00 a R$ 1.500.000,00 e processos trabalhistas.',
  },
  {
    question: 'Já temos equipe interna de manutenção predial. Por que contratar a Simon?',
    answer:
      'Equipes prediais internas executam apenas reparos pontuais. A legislação exige que o PMOC seja emitido e assinado por Engenheiro Mecânico credenciado no CREA/CFT com recolhimento de ART. A Simon traz engenharia termodinâmica especializada, instrumentação digital em mícrons, termografia e biocidas padrão Anvisa que ajudam o gestor a cumprir as obrigações legais do edifício.',
  },
  {
    question: 'Como a gestão preventiva da Simon pode reduzir a conta de luz?',
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

  return (
    <section id="faq" className="tema-laudo secao-laudo secao-laudo--branca" aria-labelledby="faq-titulo">
      <div className="miolo">
        <h2 id="faq-titulo" className="text-3xl sm:text-4xl text-tinta max-w-[40rem]">
          Perguntas frequentes
        </h2>

        <div className="mt-8 max-w-[44rem] divide-y divide-filete border-y border-filete">
          {faqs.map((item, i) => {
            const aberto = openIndex === i;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(aberto ? null : i)}
                    aria-expanded={aberto}
                    aria-controls={`faq-resposta-${i}`}
                    className="w-full flex items-start justify-between gap-4 py-4 text-left font-serif-laudo text-lg font-semibold text-tinta hover:text-refrigerante-escuro"
                  >
                    <span>{item.question}</span>
                    <span aria-hidden="true" className="valor-medido shrink-0 text-refrigerante-escuro">
                      {aberto ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                <div id={`faq-resposta-${i}`} role="region" hidden={!aberto} className="pb-5 text-aco-escuro leading-relaxed">
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-aco-escuro">Tem uma dúvida técnica sobre o seu equipamento?</p>
        <a
          href={linkWhatsApp('Olá, gostaria de tirar uma dúvida técnica com o engenheiro.')}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block font-semibold text-refrigerante-escuro hover:text-tinta underline underline-offset-4"
        >
          Perguntar ao engenheiro pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
