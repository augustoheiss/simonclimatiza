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
    <div className="w-full bg-slate-950 text-slate-50">

      {/* ──────────────────────────────────────────────────
          1. HERO SECTION — O Choque de Realidade
      ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center py-32 px-6 md:px-12 overflow-hidden">

        {/* Grade tecnológica de fundo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)] opacity-25 pointer-events-none" />

        {/* Brilho de ciano ao fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* Coluna esquerda — copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/60 border border-cyan-700/40 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
              <Activity className="w-3.5 h-3.5" />
              Engenharia Térmica de Alta Performance
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Climatização não é{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                conforto.
              </span>
              <br />
              É{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Infraestrutura Crítica.
              </span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg">
              Blindamos o seu patrimônio contra falhas catastróficas, passivos
              jurídicos milionários e riscos biológicos invisíveis. Substituímos
              o amadorismo pela precisão termodinâmica — sem exceções.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30"
              >
                Proteger meu Edifício <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-cyan-700 text-slate-300 hover:text-cyan-400 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
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
            <div className="absolute inset-0 bg-cyan-500/15 blur-[90px] rounded-full pointer-events-none" />
            <div className="relative z-10 bg-slate-900/80 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">

              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <span className="text-lg font-bold text-slate-100">
                  A Promessa da Simon Climatização
                </span>
              </div>

              <ul className="space-y-4">
                {[
                  { icon: <Zap className="w-4 h-4 text-cyan-400" />, text: 'Domínio absoluto em sistemas VRF e VRV' },
                  { icon: <Thermometer className="w-4 h-4 text-cyan-400" />, text: 'Maestria em Chillers Industriais de grande porte' },
                  { icon: <Scale className="w-4 h-4 text-cyan-400" />, text: 'Adequação jurídica completa — PMOC certificado' },
                  { icon: <TrendingDown className="w-4 h-4 text-cyan-400" />, text: 'Redução de até 40% na conta de energia elétrica' },
                  { icon: <FlaskConical className="w-4 h-4 text-cyan-400" />, text: 'Assepsia laboratorial do ar circulante' },
                ].map(({ icon, text }, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                    <span className="mt-0.5 flex-shrink-0">{icon}</span>
                    {text}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">
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
      <section className="py-28 px-6 md:px-12 bg-slate-950 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold tracking-widest uppercase mb-5">
              ⚠ O Custo Oculto da Incompetência
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
              O que acontece quando{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                o amador entra no seu edifício.
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
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
              className="group bg-gradient-to-b from-red-950/40 to-slate-900/60 border border-red-900/50 rounded-2xl p-8 hover:border-red-600/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-red-950/80 border border-red-800/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Flame className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">
                Fiação Derretendo. Incêndio Estrutural.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Instalações feitas por "profissionais de confiança" usam bitolas
                subdimensionadas sem proteção dedicada. O resultado: a resistência
                elétrica corrói o isolamento por dentro, derrete a fiação e
                transforma a sua infraestrutura em um{' '}
                <span className="text-red-400 font-semibold">
                  estopim de incêndio estrutural
                </span>{' '}
                pronto para disparar.
              </p>
              <div className="mt-6 pt-5 border-t border-red-900/40 flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-wider">
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
              className="group bg-gradient-to-b from-orange-950/40 to-slate-900/60 border border-orange-900/50 rounded-2xl p-8 hover:border-orange-600/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-orange-950/80 border border-orange-800/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wind className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">
                Síndrome do Edifício Doente.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                O ar-condicionado sujo é o{' '}
                <span className="text-orange-400 font-semibold">
                  vilão biológico invisível
                </span>{' '}
                do seu escritório. Fungos, esporos e bactérias circulam pelo duto
                e atingem os pulmões de cada colaborador — gerando espirros
                crônicos, alergias, afastamentos médicos e{' '}
                <span className="text-orange-400 font-semibold">
                  passivos trabalhistas severos
                </span>{' '}
                que a sua empresa terá que responder.
              </p>
              <div className="mt-6 pt-5 border-t border-orange-900/40 flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider">
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
              className="group bg-gradient-to-b from-yellow-950/30 to-slate-900/60 border border-yellow-900/40 rounded-2xl p-8 hover:border-yellow-600/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-yellow-950/80 border border-yellow-800/40 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">
                Falência Prematura do Maquinário.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Vácuo malfeito deixa umidade residual que reage com o óleo
                sintético e forma{' '}
                <span className="text-yellow-400 font-semibold">
                  borra ácida corrosiva
                </span>{' '}
                que destrói o compressor por dentro. Somado ao subdimensionamento
                que força o equipamento a trabalhar no limite, o resultado é a
                conta de luz estratosférica e um compressor trocado antes do prazo
                em 3 anos.
              </p>
              <div className="mt-6 pt-5 border-t border-yellow-900/30 flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5" /> Prejuízo Comprovado
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          3. O PESO DA LEI — Urgência / PMOC
      ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-red-800/50 bg-gradient-to-br from-red-950/60 via-slate-900/80 to-slate-950 p-10 md:p-14 shadow-2xl shadow-red-950/30"
          >
            {/* Brilho vermelho de fundo */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-950/80 border border-red-700/50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-red-400 uppercase tracking-widest mb-0.5">
                    Alerta Jurídico Obrigatório
                  </span>
                  <span className="text-lg font-bold text-slate-100">
                    Lei Federal nº 13.589/2018 — PMOC
                  </span>
                </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6">
                O PMOC não é opcional.{' '}
                <span className="text-red-400">
                  A ausência dele é uma multa esperando para acontecer.
                </span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed max-w-3xl mb-8">
                A Lei Federal obriga todo edifício público ou privado de uso
                coletivo a manter e executar um{' '}
                <strong className="text-slate-100">
                  Plano de Manutenção, Operação e Controle (PMOC)
                </strong>{' '}
                para todos os sistemas de climatização. Fiscalizada pela{' '}
                <strong className="text-slate-100">Vigilância Sanitária</strong>, a
                ausência ou irregularidade do PMOC sujeita o proprietário ou
                gestor predial a sanções administrativas que podem chegar a:
              </p>

              {/* Destaque da multa */}
              <div className="inline-flex items-baseline gap-3 bg-red-900/40 border border-red-700/50 rounded-xl px-8 py-5 mb-8">
                <span className="text-4xl md:text-5xl font-black text-red-400 tracking-tight">
                  R$ 1.500.000,00
                </span>
                <span className="text-slate-400 text-sm font-medium">
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
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-red-900/40 hover:shadow-red-700/30"
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
      <section className="py-28 px-6 md:px-12 border-t border-slate-800/60 relative overflow-hidden">

        {/* Brilho ciano de fundo */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-700/40 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-5">
              A Engenharia Faz a Diferença
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
              Da Caos à{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Engenharia de Precisão.
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Enquanto amadores improvisar, nós operamos com protocolos técnicos
              rigorosos. O resultado é visível na conta de luz, na qualidade do
              ar e na durabilidade dos seus ativos.
            </p>
          </motion.div>

          {/* Métricas de destaque */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              {
                value: '40%',
                label: 'de redução no consumo de energia elétrica',
                desc: 'Manutenção preditiva e calibração precisa eliminam o desperdício energético crônico.',
                color: 'cyan',
              },
              {
                value: '100%',
                label: 'de conformidade com a legislação sanitária',
                desc: 'PMOC emitido, assinado e auditável — protegendo o gestor predial de ponta a ponta.',
                color: 'blue',
              },
              {
                value: '3x',
                label: 'maior vida útil dos equipamentos',
                desc: 'Protocolos laboratoriais de limpeza e verificação eliminam a degradação precoce.',
                color: 'teal',
              },
            ].map(({ value, label, desc, color }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                className={`bg-slate-900/70 border border-slate-800 rounded-2xl p-8 text-center hover:border-${color}-700/50 transition-all duration-300`}
              >
                <div className={`text-5xl font-black text-${color}-400 mb-3`}>
                  {value}
                </div>
                <div className="text-slate-100 font-semibold text-base mb-3 leading-snug">
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
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                <Thermometer className="w-5 h-5 text-cyan-400" />
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
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-slate-100 font-semibold text-sm mb-0.5">
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
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                <FlaskConical className="w-5 h-5 text-cyan-400" />
                Assepsia Laboratorial do Ar
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
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
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-cyan-950/40 border border-cyan-800/30 rounded-xl p-4">
                <p className="text-cyan-300 text-sm font-medium">
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
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              Pronto para eliminar o risco do seu patrimônio?
            </h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Solicite um diagnóstico técnico gratuito. Nossa equipe identifica
              os pontos críticos do seu sistema e entrega um plano de ação
              objetivo — sem enrolação.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-10 py-5 rounded-xl transition-all duration-200 text-lg shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/30"
            >
              Agendar Diagnóstico de Risco Gratuito <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
