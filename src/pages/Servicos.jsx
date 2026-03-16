import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Factory,
  Snowflake,
  Wind,
  ShieldCheck,
  Clock,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Wrench,
  Zap,
  CheckCircle2,
  HeartPulse,
} from 'lucide-react';

// ─── Dados dos serviços ────────────────────────────────────────────────────────
const servicosData = [
  {
    id: 'vrf-vrv',
    icon: Building2,
    titulo: 'Sistemas VRF / VRV',
    resumo: 'Controle independente e eficiência energética máxima para grandes edifícios.',
    beneficio:
      'Temperatura perfeita em cada zona e contas de energia até 40% menores.',
    detalhe:
      'Instalação e calibração de fluxo de refrigerante variável. Garantimos a estanqueidade perfeita das linhas de cobre, vácuo profundo e comunicação de dados impecável entre evaporadoras e condensadoras para garantir o desempenho ideal exigido pelos fabricantes.',
    acento: 'cyan',
  },
  {
    id: 'chillers',
    icon: Factory,
    titulo: 'Chillers Industriais',
    resumo: 'Potência em larga escala para indústrias, hospitais e grandes processos.',
    beneficio:
      'Continuidade operacional garantida e longevidade máxima do maquinário.',
    detalhe:
      'Manutenção preventiva e corretiva em compressores parafuso e centrífugos. Análise de óleo, tratamento da água de condensação, aferição de chillers de condensação a ar e a água. Foco na longevidade de equipamentos de alto custo.',
    acento: 'blue',
  },
  {
    id: 'camaras-frias',
    icon: Snowflake,
    titulo: 'Câmaras Frias & Refrigeração',
    resumo: 'Precisão térmica inegociável para perecíveis e insumos críticos.',
    beneficio:
      'Estoque sempre preservado com precisão de temperatura laboratorial.',
    detalhe:
      'Dimensionamento de carga térmica, isolamento em EPS/PUR, configuração de degelo e superaquecimento/subresfriamento preciso. Seu maquinário operando dentro da margem de segurança laboratorial.',
    acento: 'teal',
  },
  {
    id: 'split-inverter',
    icon: Wind,
    titulo: 'Sistemas Split e Inverter',
    resumo: 'Conforto residencial e comercial de alto padrão.',
    beneficio:
      'Silêncio absoluto, ar puro e conforto total sem interrupções.',
    detalhe:
      'Instalação com rigor normativo. Uso de terminais elétricos, pressurização com nitrogênio, isolamento blindado e fluidos refrigerantes ecológicos.',
    acento: 'sky',
  },
  {
    id: 'pmoc',
    icon: ShieldCheck,
    titulo: 'Manutenção HVAC & PMOC',
    resumo: 'O passaporte para a legalidade e saúde respiratória do seu prédio.',
    beneficio:
      'Conformidade total com a Vigilância Sanitária e ar saudável para toda a equipe.',
    detalhe:
      'Inspeções completas com emissão de PMOC (Plano de Manutenção, Operação e Controle) com ART. Higienização com biocidas padrão ANVISA e manutenção regular para garantir performance contínua e conformidade legal.',
    acento: 'green',
  },
  {
    id: 'emergencia',
    icon: Clock,
    titulo: 'Atendimento Expresso (Plantão)',
    resumo: 'Resposta rápida e cirúrgica para sistemas que precisam de atenção imediata.',
    beneficio:
      'Restauração rápida do conforto e retorno ao ritmo operacional em tempo mínimo.',
    detalhe:
      'Diagnóstico de falhas via software, detecção de microvazamentos, reparo de placas inverter e substituição ágil de periféricos para restabelecimento imediato da climatização.',
    acento: 'blue',
  },
];

// ─── Mapa de classes Tailwind (Light Theme — sky / blue / teal / green) ───────
const acentoMap = {
  cyan: {
    badge: 'bg-sky-50 border-sky-200 text-sky-600',
    iconBg: 'bg-sky-50 border-sky-200',
    iconColor: 'text-sky-500',
    dot: 'bg-sky-500',
    glow: 'bg-sky-300/20',
    border: 'hover:border-sky-400',
    highlight: 'text-sky-500',
    cardBorder: 'border-sky-200',
    detailGlow: 'bg-sky-200/20',
  },
  blue: {
    badge: 'bg-blue-50 border-blue-200 text-blue-600',
    iconBg: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-500',
    dot: 'bg-blue-500',
    glow: 'bg-blue-300/20',
    border: 'hover:border-blue-400',
    highlight: 'text-blue-500',
    cardBorder: 'border-blue-200',
    detailGlow: 'bg-blue-200/20',
  },
  teal: {
    badge: 'bg-teal-50 border-teal-200 text-teal-600',
    iconBg: 'bg-teal-50 border-teal-200',
    iconColor: 'text-teal-500',
    dot: 'bg-teal-500',
    glow: 'bg-teal-300/20',
    border: 'hover:border-teal-400',
    highlight: 'text-teal-500',
    cardBorder: 'border-teal-200',
    detailGlow: 'bg-teal-200/20',
  },
  sky: {
    badge: 'bg-sky-50 border-sky-200 text-sky-600',
    iconBg: 'bg-sky-50 border-sky-200',
    iconColor: 'text-sky-500',
    dot: 'bg-sky-500',
    glow: 'bg-sky-300/20',
    border: 'hover:border-sky-400',
    highlight: 'text-sky-500',
    cardBorder: 'border-sky-200',
    detailGlow: 'bg-sky-200/20',
  },
  green: {
    badge: 'bg-green-50 border-green-200 text-green-600',
    iconBg: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    dot: 'bg-green-500',
    glow: 'bg-green-200/20',
    border: 'hover:border-green-400',
    highlight: 'text-green-600',
    cardBorder: 'border-green-200',
    detailGlow: 'bg-green-200/20',
  },
};

// ─── Variantes de animação ─────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut', delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay },
  }),
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

// ─── Componente de Visão de Detalhes ──────────────────────────────────────────
function DetalheServico({ servico, onVoltar }) {
  const IconeServico = servico.icon;
  const cores = acentoMap[servico.acento];

  return (
    <motion.div
      key={servico.id}
      variants={slideUp}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full min-h-screen bg-white text-slate-900 pb-40"
    >
      {/* Grade decorativa de fundo */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)] opacity-50 pointer-events-none z-0" aria-hidden="true" />

      {/* Brilho de fundo colorido */}
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] ${cores.glow} rounded-full blur-[150px] pointer-events-none z-0`} aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 pt-16 md:pt-20">

        {/* Breadcrumb */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0.1}>
          <button
            onClick={onVoltar}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm font-medium transition-colors duration-200 mb-10 group"
            aria-label="Voltar ao menu de serviços"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" aria-hidden="true" />
            Menu de Serviços
          </button>
        </motion.div>

        {/* Ícone + Badge */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.15} className="mb-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${cores.badge} border text-xs font-bold tracking-widest uppercase mb-6`}>
            <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
            Detalhe do Serviço
          </div>

          <div className={`w-20 h-20 ${cores.iconBg} border rounded-2xl flex items-center justify-center mb-6`} aria-hidden="true">
            <IconeServico className={`w-10 h-10 ${cores.iconColor}`} />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-slate-900">
            {servico.titulo}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            {servico.resumo}
          </p>
        </motion.div>

        {/* Card: Benefício Entregue */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.3}>
          <div className="bg-white border border-sky-100 rounded-2xl p-8 mb-6 shadow-lg shadow-sky-900/5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                <HeartPulse className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <span className="block text-xs font-bold text-green-600 uppercase tracking-widest mb-2">
                  Benefício Entregue
                </span>
                <p className="text-slate-900 text-lg font-semibold leading-relaxed">
                  {servico.beneficio}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card: Detalhes Técnicos */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.45}>
          <div className={`bg-white border ${cores.cardBorder} rounded-2xl p-8 mb-6 shadow-lg shadow-sky-900/5`}>
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 ${cores.iconBg} border rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`} aria-hidden="true">
                <Zap className={`w-5 h-5 ${cores.iconColor}`} />
              </div>
              <div>
                <span className={`block text-xs font-bold ${cores.highlight} uppercase tracking-widest mb-2`}>
                  Protocolo Técnico
                </span>
                <p className="text-slate-700 text-base leading-relaxed">
                  {servico.detalhe}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Garantias */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.55}>
          <div className="bg-sky-50/50 border border-sky-100 rounded-2xl p-8 mb-8">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-5">
              Nossa Garantia em Cada Serviço
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {[
                'Profissionais certificados e treinados',
                'Relatório técnico de cada intervenção',
                'Peças originais e refrigerantes homologados',
                'Suporte pós-serviço garantido',
                'Adequação às normas ABNT e ANVISA',
                'Rastreabilidade digital 100%',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                  <CheckCircle2 className={`w-4 h-4 ${cores.iconColor} flex-shrink-0`} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>

      {/* Barra de ação fixa no rodapé */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-4 bg-gradient-to-t from-white via-white/95 to-transparent"
      >
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
          <button
            onClick={onVoltar}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-slate-300 text-slate-700 font-bold px-6 py-4 rounded-xl transition-all duration-200 text-sm shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Voltar ao Menu de Serviços
          </button>
          <Link
            to="/contato"
            state={{ servicoSelecionado: servico?.titulo || '' }}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 text-sm shadow-xl shadow-sky-500/25 hover:shadow-sky-600/35"
          >
            Solicitar Orçamento para este Serviço
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Componente de Card de Serviço ────────────────────────────────────────────
function CardServico({ servico, onClick }) {
  const IconeServico = servico.icon;
  const cores = acentoMap[servico.acento];

  return (
    <motion.button
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={onClick}
      className={`group w-full text-left bg-white border border-slate-200 ${cores.border} rounded-2xl p-7 shadow-md shadow-sky-900/5 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 hover:shadow-lg`}
      aria-label={`Ver detalhes de ${servico.titulo}`}
    >
      {/* Ícone */}
      <div className={`w-14 h-14 ${cores.iconBg} border rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`} aria-hidden="true">
        <IconeServico className={`w-7 h-7 ${cores.iconColor}`} />
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
        {servico.titulo}
      </h3>

      <p className="text-slate-600 text-sm leading-relaxed mb-5">
        {servico.resumo}
      </p>

      {/* Benefício */}
      <div className="bg-sky-50 border border-sky-100 rounded-lg px-4 py-3 mb-5">
        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
          Resultado
        </span>
        <p className={`text-sm font-medium ${cores.highlight} leading-snug`}>
          {servico.beneficio}
        </p>
      </div>

      {/* CTA do card */}
      <div className={`flex items-center gap-2 text-xs font-bold ${cores.highlight} uppercase tracking-wider group-hover:gap-3 transition-all duration-200`}>
        Ver detalhes técnicos
        <ChevronRight className="w-4 h-4" aria-hidden="true" />
      </div>
    </motion.button>
  );
}

// ─── Componente Principal ─────────────────────────────────────────────────────
export default function Servicos() {
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  if (servicoSelecionado !== null) {
    return (
      <AnimatePresence mode="wait">
        <DetalheServico
          key={servicoSelecionado.id}
          servico={servicoSelecionado}
          onVoltar={() => setServicoSelecionado(null)}
        />
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full bg-white text-slate-900"
      >

        {/* ─── HERO: Atendimento Corporativo Especializado ─────────────────────── */}
        <section
          className="relative min-h-[88vh] flex items-center py-28 px-6 md:px-12 overflow-hidden"
          style={{
            backgroundImage: 'url(/images/home-servicos-02.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'local',
          }}
          aria-label="Atendimento Corporativo Especializado"
        >
          {/* Overlay — text sharp à esquerda, imagem visível à direita */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/82 to-white/20 md:to-white/10 pointer-events-none" aria-hidden="true" />

          {/* Brilho sky suave */}
          <div className="absolute top-0 left-0 w-[600px] h-[500px] bg-sky-300/10 rounded-full blur-[130px] pointer-events-none" aria-hidden="true" />

          <div className="max-w-6xl mx-auto relative z-10 w-full">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50/90 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase mb-6">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                Atendimento Corporativo Especializado
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight text-slate-900">
                Engenharia Térmica{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                  de Alto Padrão.
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                Soluções técnicas completas para edifícios corporativos,
                industriais e comerciais. Cada projeto executado com precisão
                termodinâmica, conformidade total e compromisso com o
                bem-estar de quem ocupa o espaço.
              </p>

              {/* Trust bar — fatos positivos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10" role="list" aria-label="Principais resultados">
                {[
                  { stat: '+20%', label: 'em concentração e foco' },
                  { stat: '−40%', label: 'na conta de energia' },
                  { stat: '3×', label: 'maior vida útil' },
                ].map(({ stat, label }, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.15 + i * 0.1}
                    className="bg-white/85 backdrop-blur-sm border border-sky-100 rounded-xl px-4 py-3 flex items-center gap-3"
                    role="listitem"
                  >
                    <span className="block text-sky-600 font-black text-xl leading-none flex-shrink-0">{stat}</span>
                    <span className="text-slate-500 text-xs leading-snug">{label}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.4}
              >
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-600/30"
                >
                  Solicitar Diagnóstico Gratuito <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─── CONTEXT BAR — PMOC e Manutenção Preventiva ─────────────────────── */}
        <section className="py-12 px-6 md:px-12 bg-sky-50/40 border-t border-b border-sky-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <ShieldCheck className="w-5 h-5 text-sky-500" aria-hidden="true" />,
                  title: 'Conformidade PMOC Garantida',
                  desc: 'Plano de Manutenção, Operação e Controle emitido com ART, em total conformidade com a Lei Federal nº 13.589/2018.',
                  acento: 'border-sky-200',
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-teal-500" aria-hidden="true" />,
                  title: 'Manutenção Preventiva de Elite',
                  desc: 'Protocolos rigorosos que preservam seus equipamentos, reduzem consumo e garantem o ar mais puro para a sua equipe.',
                  acento: 'border-teal-200',
                },
                {
                  icon: <Zap className="w-5 h-5 text-blue-500" aria-hidden="true" />,
                  title: 'Resposta Técnica Imediata',
                  desc: 'Equipe disponível para atendimento planejado e urgente, com diagnóstico preciso e resolução no menor tempo possível.',
                  acento: 'border-blue-200',
                },
              ].map(({ icon, title, desc, acento }, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.12}
                  className={`bg-white border ${acento} rounded-2xl p-6 shadow-sm shadow-sky-900/5`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {icon}
                    <h3 className="text-slate-900 font-bold text-sm">{title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── GRID DE SERVIÇOS ────────────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 border-t border-sky-100 relative bg-sky-50/20">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-sky-300/12 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

          <div className="max-w-6xl mx-auto relative z-10">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase mb-5">
                Portfólio Técnico Completo
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-slate-900">
                Selecione o Serviço{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                  que você precisa
                </span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Clique em qualquer serviço para ver o protocolo técnico completo,
                o resultado que ele entrega e como solicitá-lo.
              </p>
            </motion.div>

            {/* Grid de cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicosData.map((servico, i) => (
                <motion.div
                  key={servico.id}
                  custom={i * 0.08}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <CardServico
                    servico={servico}
                    onClick={() => setServicoSelecionado(servico)}
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ─── CTA FINAL UNIFICADO: Clima Perfeito ─────────────────────────────── */}
        <section
          className="relative overflow-hidden min-h-[520px] flex items-center"
          aria-label="Convite para contato — O Clima Perfeito"
        >
          {/* Background fixo nítido — sem blur */}
          <div
            className="absolute inset-0 bg-[url('/images/solucao-clima-perfeito.jpg')] bg-cover bg-center bg-fixed"
            aria-hidden="true"
          />

          {/* Overlay escuro elegante — contraste WCAG AA para texto branco */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/50 pointer-events-none"
            aria-hidden="true"
          />

          {/* Conteúdo */}
          <div className="relative z-10 w-full py-28 px-6 md:px-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-white">
                O Clima Perfeito Está a um Clique de Distância.
              </h2>

              <p className="text-sky-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Não tem certeza de qual serviço precisa? Fale com nossos
                engenheiros. Fazemos um diagnóstico gratuito e indicamos a
                solução técnica mais adequada para o seu cenário. Não deixe o
                bem-estar, a saúde e a produtividade da sua equipe para depois.
                Engenharia de precisão para ambientes que exigem o melhor.
              </p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.18}
              >
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-sky-500/40 hover:-translate-y-1 transition-all duration-200 text-base"
                >
                  Falar com um Engenheiro Agora
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </motion.div>
    </AnimatePresence>
  );
}
