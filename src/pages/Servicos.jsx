import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Factory,
  Snowflake,
  Wind,
  ShieldCheck,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Wrench,
  Zap,
  CheckCircle2,
  HeartPulse,
} from 'lucide-react';

// Para ativar as imagens de fundo do Hero, coloque os arquivos em:
//   public/images/dor-ar-viciado.jpg
//   public/images/solucao-clima-perfeito.jpg
// Enquanto não existem, os gradients de overlay garantem o visual completo.
const dorArViciado = '/images/dor-ar-viciado.jpg';
const solucaoClimaPerfeito = '/images/solucao-clima-perfeito.jpg';

// ─── Dados dos serviços ────────────────────────────────────────────────────────
const servicosData = [
  {
    id: 'vrf-vrv',
    icon: Building2,
    titulo: 'Sistemas VRF / VRV',
    resumo: 'Controle independente e eficiência energética máxima para grandes edifícios.',
    dorResolvida:
      'Fim das brigas por temperatura no escritório e contas de luz exorbitantes.',
    detalhe:
      'Instalação e calibração de fluxo de refrigerante variável. Garantimos a estanqueidade perfeita das linhas de cobre, vácuo profundo e comunicação de dados impecável entre evaporadoras e condensadoras para garantir o desempenho ideal exigido pelos fabricantes.',
    acento: 'cyan',
  },
  {
    id: 'chillers',
    icon: Factory,
    titulo: 'Chillers Industriais',
    resumo: 'Potência em larga escala para indústrias, hospitais e grandes processos.',
    dorResolvida:
      'Proteção absoluta contra paradas de produção e perda de maquinário sensível.',
    detalhe:
      'Manutenção preventiva e corretiva em compressores parafuso e centrífugos. Análise de óleo, tratamento da água de condensação, aferição de chillers de condensação a ar e a água. Foco na longevidade de equipamentos de alto custo.',
    acento: 'blue',
  },
  {
    id: 'camaras-frias',
    icon: Snowflake,
    titulo: 'Câmaras Frias & Refrigeração',
    resumo: 'Precisão térmica inegociável para perecíveis e insumos críticos.',
    dorResolvida:
      'A segurança de que seu estoque (alimentos ou medicamentos) nunca será perdido na madrugada.',
    detalhe:
      'Dimensionamento de carga térmica, isolamento em EPS/PUR, configuração de degelo e superaquecimento/subresfriamento preciso. Seu maquinário operando dentro da margem de segurança laboratorial.',
    acento: 'teal',
  },
  {
    id: 'split-inverter',
    icon: Wind,
    titulo: 'Sistemas Split e Inverter',
    resumo: 'Conforto residencial e comercial de alto padrão.',
    dorResolvida:
      'Silêncio absoluto, ar puro e uma noite de sono ou dia de trabalho sem interrupções.',
    detalhe:
      'Instalação com rigor normativo. Uso de terminais elétricos, pressurização com nitrogênio, isolamento blindado e fluidos refrigerantes ecológicos.',
    acento: 'sky',
  },
  {
    id: 'pmoc',
    icon: ShieldCheck,
    titulo: 'Manutenção HVAC & PMOC',
    resumo: 'O passaporte para a legalidade e saúde respiratória do seu prédio.',
    dorResolvida:
      'Zero risco de multas da Vigilância Sanitária e eliminação da Síndrome do Edifício Doente.',
    detalhe:
      'Inspeções completas com emissão de PMOC (Plano de Manutenção, Operação e Controle) com ART. Higienização com biocidas padrão ANVISA e manutenção regular para evitar quebras inesperadas.',
    acento: 'green',
  },
  {
    id: 'emergencia',
    icon: AlertTriangle,
    titulo: 'Reparo de Emergência (Plantão)',
    resumo: 'Intervenção rápida e cirúrgica para sistemas parados.',
    dorResolvida:
      'Minimização do tempo de inatividade e estresse. Nós devolvemos o seu controle climático.',
    detalhe:
      'Diagnóstico de falhas via software, detecção de microvazamentos, reparo de placas inverter e substituição ágil de periféricos para restabelecimento imediato da climatização.',
    acento: 'orange',
  },
];

// ─── Mapa de classes Tailwind (Light Theme) ───────────────────────────────────
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
  orange: {
    badge: 'bg-orange-50 border-orange-200 text-orange-600',
    iconBg: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-500',
    dot: 'bg-orange-500',
    glow: 'bg-orange-200/20',
    border: 'hover:border-orange-400',
    highlight: 'text-orange-500',
    cardBorder: 'border-orange-200',
    detailGlow: 'bg-orange-200/20',
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
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)] opacity-50 pointer-events-none z-0" />

      {/* Brilho de fundo colorido */}
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] ${cores.glow} rounded-full blur-[150px] pointer-events-none z-0`} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 pt-16 md:pt-20">

        {/* Breadcrumb */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0.1}>
          <button
            onClick={onVoltar}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm font-medium transition-colors duration-200 mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Menu de Serviços
          </button>
        </motion.div>

        {/* Ícone + Badge */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.15} className="mb-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${cores.badge} border text-xs font-bold tracking-widest uppercase mb-6`}>
            <Wrench className="w-3.5 h-3.5" />
            Detalhe do Serviço
          </div>

          <div className={`w-20 h-20 ${cores.iconBg} border rounded-2xl flex items-center justify-center mb-6`}>
            <IconeServico className={`w-10 h-10 ${cores.iconColor}`} />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-slate-900">
            {servico.titulo}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            {servico.resumo}
          </p>
        </motion.div>

        {/* Card: Dor Resolvida */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.3}>
          <div className="bg-white border border-sky-100 rounded-2xl p-8 mb-6 shadow-lg shadow-sky-900/5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <HeartPulse className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <span className="block text-xs font-bold text-green-600 uppercase tracking-widest mb-2">
                  Problema que Eliminamos
                </span>
                <p className="text-slate-900 text-lg font-semibold leading-relaxed">
                  {servico.dorResolvida}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card: Detalhes Técnicos */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.45}>
          <div className={`bg-white border ${cores.cardBorder} rounded-2xl p-8 mb-6 shadow-lg shadow-sky-900/5`}>
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 ${cores.iconBg} border rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`}>
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

        {/* Lista de garantias genéricas */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.55}>
          <div className="bg-sky-50/50 border border-sky-100 rounded-2xl p-8 mb-8">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-5">
              Nossa Garantia em Cada Serviço
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Profissionais certificados e treinados',
                'Relatório técnico de cada intervenção',
                'Peças originais e refrigerantes homologados',
                'Suporte pós-serviço garantido',
                'Adequação às normas ABNT e ANVISA',
                'Rastreabilidade digital 100%',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                  <CheckCircle2 className={`w-4 h-4 ${cores.iconColor} flex-shrink-0`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>

      {/* ── Barra de ação fixa no rodapé ── */}
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
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Menu de Serviços
          </button>
          <Link
            to="/contato"
            state={{ servicoSelecionado: servico?.titulo || servico?.title || '' }}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 text-sm shadow-xl shadow-sky-500/25 hover:shadow-sky-600/35"
          >
            Solicitar Orçamento para este Serviço
            <ArrowRight className="w-4 h-4" />
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
    >
      {/* Ícone */}
      <div className={`w-14 h-14 ${cores.iconBg} border rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <IconeServico className={`w-7 h-7 ${cores.iconColor}`} />
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
        {servico.titulo}
      </h3>

      <p className="text-slate-600 text-sm leading-relaxed mb-5">
        {servico.resumo}
      </p>

      {/* Dor resolvida */}
      <div className="bg-sky-50 border border-sky-100 rounded-lg px-4 py-3 mb-5">
        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
          Resolve
        </span>
        <p className={`text-sm font-medium ${cores.highlight} leading-snug`}>
          {servico.dorResolvida}
        </p>
      </div>

      {/* CTA do card */}
      <div className={`flex items-center gap-2 text-xs font-bold ${cores.highlight} uppercase tracking-wider group-hover:gap-3 transition-all duration-200`}>
        Ver detalhes técnicos
        <ChevronRight className="w-4 h-4" />
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

        {/* ─── HERO SECTION: A Dor vs. A Solução ─────────────────────────────── */}
        <section className="relative overflow-hidden">

          {/* Grade decorativa de fundo */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_50%,transparent_100%)] opacity-40 pointer-events-none z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">

            {/* Esquerda — A Dor */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0}
              className="relative overflow-hidden min-h-[50vh] md:min-h-[70vh] flex items-end"
              style={{
                backgroundImage: `url(${dorArViciado})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay avermelhado */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/95 via-red-900/70 to-slate-900/60" />
              <div className="absolute inset-0 bg-slate-950/20" />

              <div className="relative z-10 p-8 md:p-12 pb-12">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/80 border border-red-700/50 text-red-300 text-xs font-bold tracking-widest uppercase mb-5">
                  <AlertTriangle className="w-3 h-3" />
                  O Problema
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-4 text-white">
                  O Custo Invisível da{' '}
                  <span className="text-red-400">Má Climatização</span>
                </h2>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-md">
                  Ar viciado reduz a concentração em até{' '}
                  <strong className="text-red-300">20%</strong>. Sistemas mal dimensionados
                  multiplicam a conta de luz. Equipamentos sem manutenção se tornam vetores
                  biológicos — silenciosos, invisíveis e devastadores para a saúde da sua equipe
                  e para a integridade do seu patrimônio.
                </p>
              </div>
            </motion.div>

            {/* Direita — A Solução */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="relative overflow-hidden min-h-[50vh] md:min-h-[70vh] flex items-end"
              style={{
                backgroundImage: `url(${solucaoClimaPerfeito})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay azul céu */}
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/95 via-sky-800/60 to-slate-900/50" />
              <div className="absolute inset-0 bg-slate-950/20" />

              <div className="relative z-10 p-8 md:p-12 pb-12">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/80 border border-sky-600/50 text-sky-300 text-xs font-bold tracking-widest uppercase mb-5">
                  <Zap className="w-3 h-3" />
                  A Solução
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-4 text-white">
                  A Engenharia do{' '}
                  <span className="text-sky-300">Conforto Perfeito</span>
                </h2>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-md">
                  Ambientes climatizados com precisão termodinâmica{' '}
                  <strong className="text-sky-200">impulsionam resultados</strong>. Colaboradores
                  mais focados, equipamentos com vida útil triplicada, conformidade legal garantida
                  e uma conta de energia que finalmente faz sentido. Isso é climatização de
                  engenharia — não improviso.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ─── GRID DE SERVIÇOS ────────────────────────────────────────────────── */}
        <section className="py-24 px-6 md:px-12 border-t border-sky-100 relative bg-sky-50/30">

          {/* Brilho suave de fundo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-sky-300/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">

            {/* Cabeçalho da seção */}
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
                Clique em qualquer serviço para ver o protocolo técnico completo, o problema que
                ele resolve e como solicitá-lo.
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

            {/* CTA de Contato abaixo do grid */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <div className="bg-white border border-sky-100 rounded-2xl px-8 py-10 max-w-2xl mx-auto shadow-lg shadow-sky-900/5">
                <h3 className="text-xl md:text-2xl font-extrabold mb-3 text-slate-900">
                  Não tem certeza qual serviço precisa?
                </h3>
                <p className="text-slate-600 text-base mb-7 leading-relaxed">
                  Fale com nossos engenheiros. Fazemos um diagnóstico gratuito e indicamos a
                  solução técnica mais adequada para o seu cenário.
                </p>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/20 hover:shadow-sky-600/30"
                >
                  Falar com um Engenheiro <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

          </div>
        </section>

      </motion.div>
    </AnimatePresence>
  );
}
