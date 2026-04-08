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
  Scale,
  Activity,
  TrendingDown,
  Building,
} from 'lucide-react';

// ─── Service Data ──────────────────────────────────────────────────────────────
const servicosData = [
  {
    id: 'vrf-vrv',
    icon: Activity,
    titulo: 'Sistemas VRF / VRV',
    resumo: 'Controle independente e eficiência energética máxima para grandes edifícios.',
    resultado:
      'Temperatura perfeita em cada zona e contas de energia até 40% menores.',
    detalhe:
      'Instalação e calibração de fluxo de refrigerante variável. Garantimos a estanqueidade perfeita das linhas de cobre, vácuo profundo e comunicação de dados impecável entre evaporadoras e condensadoras para garantir o desempenho ideal exigido pelos fabricantes.',
    acento: 'sky',
    gradiente: 'from-sky-500 to-blue-600',
  },
  {
    id: 'chillers',
    icon: Factory,
    titulo: 'Chillers Industriais',
    resumo: 'Potência em larga escala para indústrias, hospitais e grandes processos.',
    resultado:
      'Continuidade operacional garantida e longevidade máxima do maquinário.',
    detalhe:
      'Manutenção preventiva e corretiva em compressores parafuso e centrífugos. Análise de óleo, tratamento da água de condensação, aferição de chillers de condensação a ar e a água. Foco na longevidade de equipamentos de alto custo.',
    acento: 'blue',
    gradiente: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'camaras-frias',
    icon: Snowflake,
    titulo: 'Câmaras Frias & Refrigeração',
    resumo: 'Precisão térmica inegociável para perecíveis e insumos críticos.',
    resultado:
      'Estoque sempre preservado com precisão de temperatura laboratorial.',
    detalhe:
      'Dimensionamento de carga térmica, isolamento em EPS/PUR, configuração de degelo e superaquecimento/subresfriamento preciso. Seu maquinário operando dentro da margem de segurança laboratorial.',
    acento: 'teal',
    gradiente: 'from-teal-400 to-cyan-600',
  },
  {
    id: 'split-inverter',
    icon: Wind,
    titulo: 'Sistemas Split e Inverter',
    resumo: 'Conforto residencial e comercial de alto padrão.',
    resultado:
      'Silêncio absoluto, ar puro e conforto total sem interrupções.',
    detalhe:
      'Instalação com rigor normativo. Uso de terminais elétricos, pressurização com nitrogênio, isolamento blindado e fluidos refrigerantes ecológicos para máxima performance e silêncio.',
    acento: 'sky',
    gradiente: 'from-sky-400 to-sky-600',
  },
  {
    id: 'pmoc',
    icon: ShieldCheck,
    titulo: 'Manutenção HVAC & PMOC',
    resumo: 'O passaporte para a legalidade e saúde respiratória do seu prédio.',
    resultado:
      'Conformidade total com a Vigilância Sanitária e ar saudável para toda a equipe.',
    detalhe:
      'Inspeções completas com emissão de PMOC (Plano de Manutenção, Operação e Controle) com ART. Higienização com biocidas padrão ANVISA e manutenção regular para conformidade legal e performance contínua.',
    acento: 'green',
    gradiente: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'emergencia',
    icon: Clock,
    titulo: 'Atendimento Expresso (Plantão)',
    resumo: 'Resposta rápida e cirúrgica para sistemas que precisam de atenção imediata.',
    resultado:
      'Restauração rápida do conforto e retorno ao ritmo operacional em tempo mínimo.',
    detalhe:
      'Diagnóstico de falhas via software, detecção de microvazamentos, reparo de placas inverter e substituição ágil de periféricos para restabelecimento imediato da climatização.',
    acento: 'blue',
    gradiente: 'from-blue-600 to-violet-600',
  },
];

// ─── Accent Map ────────────────────────────────────────────────────────────────
const acentoMap = {
  sky: {
    badge: 'bg-sky-50 border-sky-200 text-sky-600',
    iconBg: 'bg-sky-50 border-sky-100',
    iconColor: 'text-sky-500',
    glow: 'bg-sky-300/20',
    glowHover: 'group-hover:bg-sky-300/30',
    borderHover: 'hover:border-sky-300',
    resultBorder: 'border-l-sky-500',
    resultBg: 'bg-sky-50',
    resultText: 'text-sky-800',
    highlight: 'text-sky-500',
    cardBorder: 'border-sky-200',
    ringFocus: 'focus-visible:ring-sky-500',
  },
  blue: {
    badge: 'bg-blue-50 border-blue-200 text-blue-600',
    iconBg: 'bg-blue-50 border-blue-100',
    iconColor: 'text-blue-500',
    glow: 'bg-blue-300/20',
    glowHover: 'group-hover:bg-blue-300/30',
    borderHover: 'hover:border-blue-300',
    resultBorder: 'border-l-blue-500',
    resultBg: 'bg-blue-50',
    resultText: 'text-blue-800',
    highlight: 'text-blue-500',
    cardBorder: 'border-blue-200',
    ringFocus: 'focus-visible:ring-blue-500',
  },
  teal: {
    badge: 'bg-teal-50 border-teal-200 text-teal-600',
    iconBg: 'bg-teal-50 border-teal-100',
    iconColor: 'text-teal-500',
    glow: 'bg-teal-300/20',
    glowHover: 'group-hover:bg-teal-300/30',
    borderHover: 'hover:border-teal-300',
    resultBorder: 'border-l-teal-500',
    resultBg: 'bg-teal-50',
    resultText: 'text-teal-800',
    highlight: 'text-teal-500',
    cardBorder: 'border-teal-200',
    ringFocus: 'focus-visible:ring-teal-500',
  },
  green: {
    badge: 'bg-emerald-50 border-emerald-200 text-emerald-600',
    iconBg: 'bg-emerald-50 border-emerald-100',
    iconColor: 'text-emerald-600',
    glow: 'bg-emerald-200/20',
    glowHover: 'group-hover:bg-emerald-200/30',
    borderHover: 'hover:border-emerald-300',
    resultBorder: 'border-l-emerald-500',
    resultBg: 'bg-emerald-50',
    resultText: 'text-emerald-800',
    highlight: 'text-emerald-600',
    cardBorder: 'border-emerald-200',
    ringFocus: 'focus-visible:ring-emerald-500',
  },
};

// ─── Animation Variants ────────────────────────────────────────────────────────
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

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

// ─── Detail View ───────────────────────────────────────────────────────────────
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
      {/* Decorative background grid */}
      <div
        className="fixed inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)] opacity-50 pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] ${cores.glow} rounded-full blur-[150px] pointer-events-none z-0`}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 pt-16 md:pt-20">

        {/* Back button */}
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

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.15} className="mb-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${cores.badge} border text-xs font-bold tracking-widest uppercase mb-6`}>
            <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
            Protocolo Técnico Completo
          </div>

          <div className={`w-20 h-20 bg-gradient-to-br ${servico.gradiente} rounded-2xl flex items-center justify-center mb-6 shadow-xl`} aria-hidden="true">
            <IconeServico className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-slate-900">
            {servico.titulo}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            {servico.resumo}
          </p>
        </motion.div>

        {/* Result card */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.3}>
          <div className={`border-l-4 ${cores.resultBorder} ${cores.resultBg} rounded-r-2xl p-7 mb-6 shadow-md`}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white border border-current/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                <HeartPulse className={`w-5 h-5 ${cores.highlight}`} />
              </div>
              <div>
                <span className={`block text-xs font-bold ${cores.highlight} uppercase tracking-widest mb-2`}>
                  Resultado Entregue
                </span>
                <p className="text-slate-900 text-lg font-semibold leading-relaxed">
                  {servico.resultado}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical protocol card */}
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

        {/* Guarantees */}
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

      {/* Sticky bottom action bar */}
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

// ─── Service Card (Bento Grid) ─────────────────────────────────────────────────
function CardServico({ servico, onClick }) {
  const IconeServico = servico.icon;
  const cores = acentoMap[servico.acento];

  return (
    <motion.button
      variants={staggerItem}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={onClick}
      className={`group w-full text-left bg-white border border-slate-100 ${cores.borderHover} rounded-2xl p-7 shadow-lg shadow-sky-900/5 hover:shadow-xl hover:shadow-sky-900/10 transition-all duration-300 cursor-pointer focus:outline-none ${cores.ringFocus} focus-visible:ring-2 relative overflow-hidden`}
      aria-label={`Ver detalhes de ${servico.titulo}`}
    >
      {/* Hover glow blob */}
      <div
        className={`absolute -top-12 -right-12 w-40 h-40 ${cores.glow} ${cores.glowHover} rounded-full blur-[60px] transition-all duration-500 pointer-events-none`}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className={`w-14 h-14 bg-gradient-to-br ${servico.gradiente} rounded-2xl flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}
        aria-hidden="true"
      >
        <IconeServico className="w-7 h-7" />
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
        {servico.titulo}
      </h3>

      <p className="text-slate-500 text-sm leading-relaxed mb-5">
        {servico.resumo}
      </p>

      {/* ROI / Resultado block — distinct visual treatment for B2B scanners */}
      <div className={`border-l-4 ${cores.resultBorder} ${cores.resultBg} rounded-r-xl px-4 py-3 mb-5`} role="note" aria-label="Resultado esperado">
        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
          Resultado
        </span>
        <p className={`text-sm font-semibold ${cores.resultText} leading-snug`}>
          {servico.resultado}
        </p>
      </div>

      {/* Card CTA link */}
      <div className={`flex items-center gap-2 text-xs font-bold ${cores.highlight} uppercase tracking-wider group-hover:gap-3 transition-all duration-200`}>
        Ver detalhes técnicos
        <ChevronRight className="w-4 h-4" aria-hidden="true" />
      </div>
    </motion.button>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
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

        {/* ════════════════════════════════════════════════════════════════════
            1. HERO — Authority Hook & Metrics
        ════════════════════════════════════════════════════════════════════ */}
        <section
          className="relative min-h-[90vh] flex items-center py-28 px-6 md:px-12 overflow-hidden"
          style={{
            backgroundImage: 'url(/images/home-servicos-02.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'local',
          }}
          aria-label="Atendimento Corporativo Especializado — Engenharia Térmica de Alto Padrão"
        >
          {/* Left-fade overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/85 to-white/20 md:to-white/10 pointer-events-none" aria-hidden="true" />

          {/* Engineering grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_50%_80%_at_10%_50%,#000_50%,transparent_100%)] opacity-30 pointer-events-none" aria-hidden="true" />

          {/* Sky glow */}
          <div className="absolute top-0 left-0 w-[600px] h-[500px] bg-sky-300/12 rounded-full blur-[130px] pointer-events-none" aria-hidden="true" />

          <div className="max-w-6xl mx-auto relative z-10 w-full">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="max-w-2xl"
            >
              {/* Pre-headline badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50/90 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase mb-6">
                <Building className="w-3.5 h-3.5" aria-hidden="true" />
                Atendimento Corporativo Especializado
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.08] mb-6 tracking-tight text-slate-900">
                Engenharia Térmica{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                  de Alto Padrão.
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                Soluções técnicas completas para edifícios corporativos, industriais e comerciais. Cada projeto executado com precisão termodinâmica, conformidade total e compromisso com o bem-estar de quem ocupa o espaço.
              </p>

              {/* Glassmorphic Metrics Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10" role="list" aria-label="Principais resultados">
                {[
                  { stat: '+20%', label: 'em concentração e foco', color: 'text-teal-600' },
                  { stat: '−40%', label: 'na conta de energia', color: 'text-sky-600' },
                  { stat: '3×', label: 'maior vida útil', color: 'text-blue-600' },
                ].map(({ stat, label, color }, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.15 + i * 0.1}
                    className="bg-white/85 backdrop-blur-sm border border-sky-100 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-md shadow-sky-900/5"
                    role="listitem"
                  >
                    <span className={`block ${color} font-black text-2xl leading-none flex-shrink-0`}>{stat}</span>
                    <span className="text-slate-500 text-xs leading-snug font-medium">{label}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.4}>
                <Link
                  to="/contato"
                  id="servicos-hero-cta"
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-600/35 hover:-translate-y-0.5"
                >
                  Solicitar Diagnóstico Gratuito
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            2. THREE PILLARS OF ELITE OPERATION (Trust Badges)
        ════════════════════════════════════════════════════════════════════ */}
        <section
          className="py-14 px-6 md:px-12 bg-sky-50/40 border-t border-b border-sky-100"
          aria-label="Os três pilares da operação de elite"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: <Scale className="w-6 h-6 text-sky-500" aria-hidden="true" />,
                  iconBg: 'bg-sky-50 border-sky-200',
                  border: 'border-sky-100 hover:border-sky-300',
                  accentLine: 'bg-sky-500',
                  title: 'Conformidade PMOC Garantida',
                  desc: 'Plano de Manutenção, Operação e Controle emitido com ART, em total conformidade com a Lei Federal nº 13.589/2018.',
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-teal-500" aria-hidden="true" />,
                  iconBg: 'bg-teal-50 border-teal-200',
                  border: 'border-teal-100 hover:border-teal-300',
                  accentLine: 'bg-teal-500',
                  title: 'Manutenção Preventiva de Elite',
                  desc: 'Protocolos rigorosos que preservam seus equipamentos, reduzem consumo e garantem o ar mais puro para a sua equipe.',
                },
                {
                  icon: <Zap className="w-6 h-6 text-blue-500" aria-hidden="true" />,
                  iconBg: 'bg-blue-50 border-blue-200',
                  border: 'border-blue-100 hover:border-blue-300',
                  accentLine: 'bg-blue-500',
                  title: 'Resposta Técnica Imediata',
                  desc: 'Equipe disponível para atendimento planejado e urgente, com diagnóstico preciso e resolução no menor tempo possível.',
                },
              ].map(({ icon, iconBg, border, accentLine, title, desc }, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className={`relative bg-white border ${border} rounded-2xl p-6 shadow-sm shadow-sky-900/5 hover:shadow-md transition-all duration-300 overflow-hidden`}
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-6 right-6 h-0.5 ${accentLine} rounded-full opacity-60`} aria-hidden="true" />

                  <div className={`w-12 h-12 ${iconBg} border rounded-xl flex items-center justify-center mb-4 mt-2`} aria-hidden="true">
                    {icon}
                  </div>
                  <h3 className="text-slate-900 font-bold text-base mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            3. THE TECHNICAL PORTFOLIO — 6 Services Bento Grid
        ════════════════════════════════════════════════════════════════════ */}
        <section
          className="py-24 px-6 md:px-12 border-t border-sky-100 relative bg-slate-50/40"
          aria-label="Portfólio técnico completo — 6 serviços"
        >
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-sky-200/20 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

          <div className="max-w-6xl mx-auto relative z-10">

            {/* Section header */}
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
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-slate-900 leading-tight">
                Selecione o Serviço{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                  que você precisa
                </span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Clique em qualquer serviço para ver o protocolo técnico completo, o resultado que ele entrega e como solicitá-lo.
              </p>
            </motion.div>

            {/* Bento Grid — 2×3 staggered */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {servicosData.map((servico) => (
                <CardServico
                  key={servico.id}
                  servico={servico}
                  onClick={() => setServicoSelecionado(servico)}
                />
              ))}
            </motion.div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            4. FINAL CONSULTIVE CTA — Dark authority section
        ════════════════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden"
          aria-label="Consulta com engenheiro — O Clima Perfeito"
        >
          {/* Background image with dark overlay */}
          <div
            className="absolute inset-0 bg-[url('/images/solucao-clima-perfeito.jpg')] bg-cover bg-center bg-fixed"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-900/82 to-slate-800/65 pointer-events-none"
            aria-hidden="true"
          />

          {/* Decorative grid */}
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a5f_1px,transparent_1px),linear-gradient(to_bottom,#1e3a5f_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_30%,transparent_100%)] opacity-30 pointer-events-none"
            aria-hidden="true"
          />

          {/* Ambient blue glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-600/10 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />

          {/* Content */}
          <div className="relative z-10 w-full py-28 px-6 md:px-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              className="max-w-3xl mx-auto text-center"
            >
              {/* Pre-title badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-300 text-xs font-bold tracking-widest uppercase mb-8">
                <TrendingDown className="w-3.5 h-3.5" aria-hidden="true" />
                Consultoria Técnica Gratuita
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-white">
                O Clima Perfeito Está a um{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
                  Clique de Distância.
                </span>
              </h2>

              <p className="text-sky-100/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Não tem certeza de qual serviço precisa? Fale com nossos engenheiros. Fazemos um diagnóstico gratuito e indicamos a solução técnica mais adequada para o seu cenário. Não deixe o bem-estar, a saúde e a produtividade da sua equipe para depois. Engenharia de precisão para ambientes que exigem o melhor.
              </p>

              {/* Trust row */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[
                  { icon: <CheckCircle2 className="w-4 h-4" aria-hidden="true" />, text: 'Diagnóstico gratuito' },
                  { icon: <CheckCircle2 className="w-4 h-4" aria-hidden="true" />, text: 'Sem compromisso' },
                  { icon: <CheckCircle2 className="w-4 h-4" aria-hidden="true" />, text: 'Resposta em 24h' },
                ].map(({ icon, text }, i) => (
                  <div key={i} className="inline-flex items-center gap-2 text-sky-300 text-sm font-medium">
                    <span className="text-teal-400">{icon}</span>
                    {text}
                  </div>
                ))}
              </div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.18}
              >
                <Link
                  to="/contato"
                  id="servicos-final-cta"
                  className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold py-5 px-10 rounded-2xl shadow-2xl shadow-sky-500/30 hover:shadow-sky-400/40 hover:-translate-y-1 transition-all duration-200 text-base"
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
