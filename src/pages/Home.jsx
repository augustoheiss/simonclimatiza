import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  Flame,
  Wind,
  DollarSign,
  AlertTriangle,
  Scale,
  ShieldCheck,
  Zap,
  Thermometer,
  CheckCircle2,
  TrendingDown,
  FlaskConical,
} from 'lucide-react';

// Variantes de animação reutilizáveis
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay },
  }),
};

export default function Home() {
  return (
    <div className="w-full bg-white text-slate-900">

      {/* ──────────────────────────────────────────────────
          1. HERO SECTION — O Choque de Realidade
      ────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center py-32 px-6 md:px-12 overflow-hidden"
        style={{ backgroundImage: 'url(/images/arpuro-home.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'local' }}
      >

        {/* Overlay claro e elegante — preserva o Light Theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-sky-50/80 to-white/72 pointer-events-none" />

        {/* Grade decorativa de fundo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)] opacity-40 pointer-events-none" />

        {/* Brilho suave de céu azul ao fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-sky-300/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* Coluna esquerda — copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase mb-6">
              <Activity className="w-3.5 h-3.5" />
              Engenharia Térmica de Alta Performance
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight text-slate-900">
              Climatização não é{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                conforto.
              </span>
              <br />
              É{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Infraestrutura Crítica.
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
              Blindamos o seu patrimônio contra falhas catastróficas, passivos
              jurídicos milionários e riscos biológicos invisíveis. Substituímos
              o amadorismo pela precisão termodinâmica — sem exceções.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-600/30"
              >
                Proteger meu Edifício <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-sky-400 text-slate-600 hover:text-sky-600 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
              >
                Solicitar Diagnóstico de Risco
              </Link>
            </div>
          </motion.div>

          {/* Coluna direita — card de credenciais */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="relative"
          >
            <div className="absolute inset-0 bg-sky-300/20 blur-[90px] rounded-full pointer-events-none" />
            <div className="relative z-10 bg-white border border-sky-100 rounded-2xl p-8 shadow-xl shadow-sky-900/8 backdrop-blur-sm">

              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-sky-500 flex-shrink-0" />
                <span className="text-lg font-bold text-slate-900">
                  A Promessa da Simon Climatização
                </span>
              </div>

              <ul className="space-y-4">
                {[
                  { icon: <Zap className="w-4 h-4 text-sky-500" />, text: 'Domínio absoluto em sistemas VRF e VRV' },
                  { icon: <Thermometer className="w-4 h-4 text-sky-500" />, text: 'Maestria em Chillers Industriais de grande porte' },
                  { icon: <Scale className="w-4 h-4 text-sky-500" />, text: 'Adequação jurídica completa — PMOC certificado' },
                  { icon: <TrendingDown className="w-4 h-4 text-sky-500" />, text: 'Redução de até 40% na conta de energia elétrica' },
                  { icon: <FlaskConical className="w-4 h-4 text-sky-500" />, text: 'Assepsia laboratorial do ar circulante' },
                ].map(({ icon, text }, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <span className="mt-0.5 flex-shrink-0">{icon}</span>
                    {text}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-sky-100 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">
                  Laudos & certificações disponíveis sob demanda
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          2. SEÇÃO DO ANTAGONISTA — A Dor e o Medo
      ────────────────────────────────────────────────── */}
      <section
        className="py-28 px-6 md:px-12 border-t border-sky-100 relative overflow-hidden"
        style={{ backgroundImage: 'url(/images/arisolado-home-02.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay frio e denso — transmite sensação de ar abafado */}
        <div className="absolute inset-0 bg-blue-50/90 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-500 text-xs font-bold tracking-widest uppercase mb-5">
              ⚠ O Custo Oculto da Incompetência
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-slate-900">
              O que acontece quando{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                o amador entra no seu edifício.
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              A manutenção barata não é uma economia. É um financiamento silencioso
              de desastres futuros — elétricos, biológicos e financeiros.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 — Fogo/Elétrica */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="group bg-white border border-red-100 rounded-2xl p-8 shadow-lg shadow-red-900/5 hover:border-red-300 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-red-50 border border-red-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Flame className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Fiação Derretendo. Incêndio Estrutural.
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Instalações feitas por "profissionais de confiança" usam bitolas
                subdimensionadas sem proteção dedicada. O resultado: a resistência
                elétrica corrói o isolamento por dentro, derrete a fiação e
                transforma a sua infraestrutura em um{' '}
                <span className="text-red-500 font-semibold">
                  estopim de incêndio estrutural
                </span>{' '}
                pronto para disparar.
              </p>
              <div className="mt-6 pt-5 border-t border-red-100 flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5" /> Risco de Perda Total
              </div>
            </motion.div>

            {/* Card 2 — Saúde/Biológico */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              className="group bg-white border border-orange-100 rounded-2xl p-8 shadow-lg shadow-orange-900/5 hover:border-orange-300 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wind className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Síndrome do Edifício Doente.
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                O ar-condicionado sujo é o{' '}
                <span className="text-orange-500 font-semibold">
                  vilão biológico invisível
                </span>{' '}
                do seu escritório. Fungos, esporos e bactérias circulam pelo duto
                e atingem os pulmões de cada colaborador — gerando espirros
                crônicos, alergias, afastamentos médicos e{' '}
                <span className="text-orange-500 font-semibold">
                  passivos trabalhistas severos
                </span>{' '}
                que a sua empresa terá que responder.
              </p>
              <div className="mt-6 pt-5 border-t border-orange-100 flex items-center gap-2 text-orange-500 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5" /> Passivo Trabalhista
              </div>
            </motion.div>

            {/* Card 3 — Financeiro */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
              className="group bg-white border border-yellow-100 rounded-2xl p-8 shadow-lg shadow-yellow-900/5 hover:border-yellow-300 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-yellow-50 border border-yellow-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-7 h-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Falência Prematura do Maquinário.
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Vácuo malfeito deixa umidade residual que reage com o óleo
                sintético e forma{' '}
                <span className="text-yellow-600 font-semibold">
                  borra ácida corrosiva
                </span>{' '}
                que destrói o compressor por dentro. Somado ao subdimensionamento
                que força o equipamento a trabalhar no limite, o resultado é a
                conta de luz estratosférica e um compressor trocado antes do prazo
                em 3 anos.
              </p>
              <div className="mt-6 pt-5 border-t border-yellow-100 flex items-center gap-2 text-yellow-600 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5" /> Prejuízo Comprovado
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          3. O PESO DA LEI — Urgência / PMOC
      ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 border-t border-sky-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-white p-10 md:p-14 shadow-2xl shadow-red-100/60"
          >
            {/* Brilho vermelho de fundo */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-300/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-50 border border-red-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-red-500 uppercase tracking-widest mb-0.5">
                    Alerta Jurídico Obrigatório
                  </span>
                  <span className="text-lg font-bold text-slate-900">
                    Lei Federal nº 13.589/2018 — PMOC
                  </span>
                </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6 text-slate-900">
                O PMOC não é opcional.{' '}
                <span className="text-red-500">
                  A ausência dele é uma multa esperando para acontecer.
                </span>
              </h2>

              <p className="text-slate-700 text-base leading-relaxed max-w-3xl mb-8">
                A Lei Federal obriga todo edifício público ou privado de uso
                coletivo a manter e executar um{' '}
                <strong className="text-slate-900">
                  Plano de Manutenção, Operação e Controle (PMOC)
                </strong>{' '}
                para todos os sistemas de climatização. Fiscalizada pela{' '}
                <strong className="text-slate-900">Vigilância Sanitária</strong>, a
                ausência ou irregularidade do PMOC sujeita o proprietário ou
                gestor predial a sanções administrativas que podem chegar a:
              </p>

              {/* Destaque da multa */}
              <div className="inline-flex items-baseline gap-3 bg-red-50 border border-red-200 rounded-xl px-8 py-5 mb-8">
                <span className="text-4xl md:text-5xl font-black text-red-600 tracking-tight">
                  R$ 1.500.000,00
                </span>
                <span className="text-slate-500 text-sm font-medium">
                  em multas aplicáveis
                </span>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mb-10">
                Além das multas, a ausência de PMOC pode resultar em interdição
                do imóvel, responsabilização civil e criminal dos gestores e
                total invalidade de seguros patrimoniais contratados.
              </p>

              <Link
                to="/contato"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-red-500/25 hover:shadow-red-600/30"
              >
                Regularizar meu PMOC agora <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          4. A SOLUÇÃO DE ELITE — Paz de Espírito
      ────────────────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-12 border-t border-sky-100 relative overflow-hidden bg-sky-50/30">

        {/* Brilho azul de fundo */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-300/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase mb-5">
              A Engenharia Faz a Diferença
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-slate-900">
              Da Caos à{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Engenharia de Precisão.
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Enquanto amadores improvisar, nós operamos com protocolos técnicos
              rigorosos. O resultado é visível na conta de luz, na qualidade do
              ar e na durabilidade dos seus ativos.
            </p>
          </motion.div>

          {/* Manifesto — Biomimética e Engenharia de Precisão */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            className="mb-16 max-w-4xl mx-auto"
          >
            <blockquote className="border-l-4 border-sky-500 pl-6 md:pl-8 py-2 relative">
              <div className="absolute -left-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-sky-500 to-blue-600 rounded-full" />
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-light italic">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700 font-semibold not-italic">
                  Decodificamos a pureza da natureza
                </span>{' '}
                para elevar o padrão do seu ambiente corporativo. Onde a força
                da máquina encontra a sabedoria da natureza. Analisamos
                ecossistemas perfeitos para calibrar nossos sistemas,
                transformando infraestruturas brutas em{' '}
                <span className="text-slate-900 font-semibold not-italic">
                  pulmões artificiais
                </span>{' '}
                que garantem ar puro, segurança biológica e foco total para a
                sua equipe.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light italic mt-4">
                Unimos a vitalidade do ar livre à nossa engenharia de precisão,
                fazendo com que a máquina trabalhe{' '}
                <span className="text-slate-900 font-semibold not-italic">
                  silenciosamente a favor da saúde, do conforto e da máxima
                  produtividade humana.
                </span>
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <div className="w-8 h-px bg-sky-400" />
                <cite className="text-sky-600 text-xs font-bold uppercase tracking-widest not-italic">
                  Filosofia Simon Climatização
                </cite>
              </footer>
            </blockquote>
          </motion.div>

          {/* Métricas de destaque */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              {
                value: '40%',
                label: 'de redução no consumo de energia elétrica',
                desc: 'Manutenção preditiva e calibração precisa eliminam o desperdício energético crônico.',
                colorValue: 'text-sky-500',
                borderHover: 'hover:border-sky-300',
              },
              {
                value: '100%',
                label: 'de conformidade com a legislação sanitária',
                desc: 'PMOC emitido, assinado e auditável — protegendo o gestor predial de ponta a ponta.',
                colorValue: 'text-blue-600',
                borderHover: 'hover:border-blue-300',
              },
              {
                value: '3x',
                label: 'maior vida útil dos equipamentos',
                desc: 'Protocolos laboratoriais de limpeza e verificação eliminam a degradação precoce.',
                colorValue: 'text-teal-500',
                borderHover: 'hover:border-teal-300',
              },
            ].map(({ value, label, desc, colorValue, borderHover }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                className={`bg-white border border-sky-100 rounded-2xl p-8 text-center shadow-lg shadow-sky-900/5 ${borderHover} transition-all duration-300`}
              >
                <div className={`text-5xl font-black ${colorValue} mb-3`}>
                  {value}
                </div>
                <div className="text-slate-900 font-semibold text-base mb-3 leading-snug">
                  {label}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Grid de serviços de elite */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

            {/* Coluna — Sistemas */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-sky-100 rounded-2xl p-8 shadow-lg shadow-sky-900/5"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Thermometer className="w-5 h-5 text-sky-500" />
                Expertise em Sistemas de Alta Complexidade
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Sistemas VRF / VRV',
                    desc: 'Controle independente de zonas com eficiência energética máxima em edifícios comerciais e corporativos.',
                  },
                  {
                    title: 'Chillers Industriais',
                    desc: 'Dimensionamento, instalação e manutenção de chillers de grande porte para indústrias, hospitais e data centers.',
                  },
                  {
                    title: 'Splits e Fan Coils',
                    desc: 'Gestão integrada de frotas com rastreabilidade de cada intervenção e histórico completo de ativos.',
                  },
                  {
                    title: 'Câmaras Frias e Controle de Processo',
                    desc: 'Refrigeração industrial com precisão de temperatura para ambientes críticos e perecíveis.',
                  },
                ].map(({ title, desc }, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-slate-900 font-semibold text-sm mb-0.5">
                        {title}
                      </span>
                      <span className="text-slate-500 text-sm leading-relaxed">
                        {desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Coluna — Diferenciais */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              className="bg-white border border-sky-100 rounded-2xl p-8 shadow-lg shadow-sky-900/5"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FlaskConical className="w-5 h-5 text-sky-500" />
                Assepsia Laboratorial do Ar
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Nosso protocolo de higienização vai além da limpeza estética.
                Utilizamos agentes biocidas aprovados pela ANVISA, aferição de
                qualidade do ar pós-limpeza e emissão de laudo técnico
                assinado por engenheiro responsável.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Eliminação de fungos, bactérias e biofilmes',
                  'Análise microbiológica do ar disponível',
                  'Laudo técnico com ART do engenheiro',
                  'Controle de umidade relativa e temperatura',
                  'Rastreabilidade 100% digital de cada serviço',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
                <p className="text-sky-700 text-sm font-medium">
                  "Transformamos o ar do seu edifício em um ativo de saúde — não
                  em um vetor de doenças."
                </p>
              </div>
            </motion.div>

          </div>

          {/* CTA Final */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-slate-900">
              Pronto para eliminar o risco do seu patrimônio?
            </h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Solicite um diagnóstico técnico gratuito. Nossa equipe identifica
              os pontos críticos do seu sistema e entrega um plano de ação
              objetivo — sem enrolação.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-10 py-5 rounded-xl transition-all duration-200 text-lg shadow-xl shadow-sky-500/25 hover:shadow-sky-600/30"
            >
              Agendar Diagnóstico de Risco Gratuito <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
