import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  Scale,
  ShieldCheck,
  Zap,
  Thermometer,
  CheckCircle2,
  TrendingDown,
  FlaskConical,
  Leaf,
} from 'lucide-react';

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
  const manifestoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: manifestoRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <div className="w-full bg-white text-slate-900">

      {/* ──────────────────────────────────────────────────
          1. HERO — Home office de alto padrão
      ────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center py-32 px-6 md:px-12 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/home-servicos.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'local',
        }}
        aria-label="Simon Climatização — Engenharia Térmica de Alta Performance"
      >
        {/* Overlay leve — imagem bem visível, texto legível com contraste WCAG AA */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/88 via-sky-50/68 to-white/38 pointer-events-none" aria-hidden="true" />

        {/* Grade decorativa */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)] opacity-35 pointer-events-none" aria-hidden="true" />

        {/* Brilho sky suave */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-sky-300/12 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* Coluna esquerda — copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase mb-6">
              <Activity className="w-3.5 h-3.5" aria-hidden="true" />
              Engenharia Térmica de Alta Performance
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight text-slate-900">
              Climatização de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Engenharia.
              </span>
              <br />
              Ar puro.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500">
                Produtividade máxima.
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
              Transformamos a climatização do seu edifício em um ativo de saúde,
              eficiência e conformidade. Sistemas de alto desempenho, operados
              com precisão termodinâmica, para ambientes que inspiram excelência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-600/30"
              >
                Elevar meu Ambiente <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-sky-400 text-slate-600 hover:text-sky-600 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
              >
                Diagnóstico Técnico Gratuito
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
            <div className="absolute inset-0 bg-sky-300/18 blur-[90px] rounded-full pointer-events-none" aria-hidden="true" />
            <div className="relative z-10 bg-white border border-sky-100 rounded-2xl p-8 shadow-xl shadow-sky-900/8 backdrop-blur-sm">

              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-sky-500 flex-shrink-0" aria-hidden="true" />
                <span className="text-lg font-bold text-slate-900">
                  A Promessa da Simon Climatização
                </span>
              </div>

              <ul className="space-y-4" role="list">
                {[
                  { icon: <Zap className="w-4 h-4 text-sky-500" aria-hidden="true" />, text: 'Domínio absoluto em sistemas VRF e VRV' },
                  { icon: <Thermometer className="w-4 h-4 text-sky-500" aria-hidden="true" />, text: 'Maestria em Chillers Industriais de grande porte' },
                  { icon: <Scale className="w-4 h-4 text-sky-500" aria-hidden="true" />, text: 'Adequação jurídica completa — PMOC certificado' },
                  { icon: <TrendingDown className="w-4 h-4 text-sky-500" aria-hidden="true" />, text: 'Redução de até 40% na conta de energia elétrica' },
                  { icon: <FlaskConical className="w-4 h-4 text-sky-500" aria-hidden="true" />, text: 'Pureza laboratorial do ar circulante' },
                ].map(({ icon, text }, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <span className="mt-0.5 flex-shrink-0">{icon}</span>
                    {text}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-sky-100 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" aria-hidden="true" />
                <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">
                  Laudos & certificações disponíveis sob demanda
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          2. MANIFESTO — Galpão de excelência + parallax
      ────────────────────────────────────────────────── */}
      <section
        ref={manifestoRef}
        className="relative overflow-hidden py-24 px-6 md:px-12 border-t border-sky-100 min-h-[80vh] flex items-center"
        aria-label="Filosofia Simon Climatização"
      >
        {/* Parallax background — home-servicos-03.jpg */}
        <motion.div
          style={{
            y: imageY,
            backgroundImage: 'url(/images/home-servicos-03.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="absolute inset-[-10%]"
          aria-hidden="true"
        />

        {/* Overlay suave — imagem visível à direita, texto legível à esquerda */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/94 via-sky-50/70 to-white/22 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* Glass card — manifesto */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <div className="backdrop-blur-xl bg-white/82 border border-white/60 rounded-3xl p-10 shadow-2xl shadow-sky-900/10">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50/90 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase mb-7">
                <Leaf className="w-3.5 h-3.5" aria-hidden="true" />
                Filosofia Simon Climatização
              </div>

              <blockquote>
                <div className="border-l-4 border-sky-500 pl-6 py-2 relative">
                  <div className="absolute -left-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-sky-500 to-blue-600 rounded-full" aria-hidden="true" />
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
                    <div className="w-8 h-px bg-sky-400" aria-hidden="true" />
                    <cite className="text-sky-600 text-xs font-bold uppercase tracking-widest not-italic">
                      Filosofia Simon Climatização
                    </cite>
                  </footer>
                </div>
              </blockquote>

            </div>
          </motion.div>

          {/* Coluna direita — métricas flutuantes sobre a imagem */}
          <div className="hidden lg:flex flex-col items-start gap-6" aria-label="Principais resultados">
            {[
              { value: '40%', label: 'redução no consumo energético', color: 'text-sky-600', delay: 0.2 },
              { value: '100%', label: 'conformidade PMOC certificado', color: 'text-blue-700', delay: 0.35 },
              { value: '3×', label: 'maior durabilidade dos equipamentos', color: 'text-teal-600', delay: 0.5 },
            ].map(({ value, label, color, delay }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={delay}
                className="backdrop-blur-xl bg-white/82 border border-white/60 rounded-2xl px-7 py-5 shadow-xl shadow-sky-900/10"
              >
                <span className={`block text-4xl font-black ${color} mb-1`}>{value}</span>
                <span className="text-slate-600 text-sm font-medium">{label}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          3. PMOC — Compliance Legal Institucional
      ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 border-t border-sky-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50/55 via-white to-white p-10 md:p-14 shadow-2xl shadow-sky-100/50"
          >
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-300/18 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-sky-50 border border-sky-200 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Scale className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-sky-600 uppercase tracking-widest mb-0.5">
                    Compliance Regulatório
                  </span>
                  <span className="text-lg font-bold text-slate-900">
                    Lei Federal nº 13.589/2018 — PMOC
                  </span>
                </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6 text-slate-900">
                O PMOC é o seu escudo legal.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                  Conformidade total, tranquilidade garantida.
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
                conformidade ativa com o PMOC protege o proprietário ou gestor
                predial de sanções administrativas que podem chegar a:
              </p>

              <div className="inline-flex items-baseline gap-3 bg-sky-50 border border-sky-200 rounded-xl px-8 py-5 mb-8">
                <span className="text-4xl md:text-5xl font-black text-sky-700 tracking-tight">
                  R$ 1.500.000,00
                </span>
                <span className="text-slate-500 text-sm font-medium">
                  em multas evitáveis com conformidade ativa
                </span>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mb-10">
                Com o PMOC em dia, a integridade do seu imóvel, a plena validade
                dos seguros patrimoniais e a segurança jurídica dos gestores
                ficam completamente asseguradas.
              </p>

              <Link
                to="/contato"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-600/30"
              >
                Certificar meu PMOC agora <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          4. ELITE — Métricas, Expertise e CTA Final
      ────────────────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-12 border-t border-sky-100 relative overflow-hidden bg-sky-50/30">

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-300/18 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

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
              Do Improviso à{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Engenharia de Precisão.
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Operamos com protocolos técnicos rigorosos. O resultado é visível
              na conta de luz, na qualidade do ar e na durabilidade dos seus ativos.
            </p>
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
                <div className={`text-5xl font-black ${colorValue} mb-3`}>{value}</div>
                <div className="text-slate-900 font-semibold text-base mb-3 leading-snug">{label}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Grid de expertise */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-sky-100 rounded-2xl p-8 shadow-lg shadow-sky-900/5"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Thermometer className="w-5 h-5 text-sky-500" aria-hidden="true" />
                Expertise em Sistemas de Alta Complexidade
              </h3>
              <ul className="space-y-4" role="list">
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
                    <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="block text-slate-900 font-semibold text-sm mb-0.5">{title}</span>
                      <span className="text-slate-500 text-sm leading-relaxed">{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              className="bg-white border border-sky-100 rounded-2xl p-8 shadow-lg shadow-sky-900/5"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FlaskConical className="w-5 h-5 text-sky-500" aria-hidden="true" />
                Pureza Laboratorial do Ar
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Nosso protocolo de higienização vai além da limpeza estética.
                Utilizamos agentes biocidas aprovados pela ANVISA, aferição de
                qualidade do ar pós-limpeza e emissão de laudo técnico
                assinado por engenheiro responsável.
              </p>
              <ul className="space-y-3 mb-8" role="list">
                {[
                  'Eliminação de fungos, bactérias e biofilmes',
                  'Análise microbiológica do ar disponível',
                  'Laudo técnico com ART do engenheiro',
                  'Controle de umidade relativa e temperatura',
                  'Rastreabilidade 100% digital de cada serviço',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
                <p className="text-sky-700 text-sm font-medium">
                  "Transformamos o ar do seu edifício em um ativo de saúde e
                  produtividade para toda a sua equipe."
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
              Pronto para transformar o ambiente do seu edifício?
            </h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Solicite um diagnóstico técnico gratuito. Nossa equipe identifica
              as oportunidades de melhoria do seu sistema e entrega um plano de
              ação objetivo — com resultados mensuráveis.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-10 py-5 rounded-xl transition-all duration-200 text-lg shadow-xl shadow-sky-500/25 hover:shadow-sky-600/30"
            >
              Agendar Diagnóstico Técnico Gratuito <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
