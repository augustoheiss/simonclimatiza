import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  AlertTriangle,
  Wrench,
  TrendingDown,
  Lock,
  Wind,
  GraduationCap,
  BookOpen,
  Users,
  ChevronDown,
  Send,
  Phone,
  Mail,
  MapPin,
  Star,
} from 'lucide-react';

// ─── Animation Variants ────────────────────────────────────────────────────────
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// ─── Lead Form Component ────────────────────────────────────────────────────────
function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    need: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Me chamo ${formData.name}.\nTenho interesse em: ${formData.need}.\nEmail: ${formData.email}`
    );
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-sky-50 border border-sky-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-sky-500" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicitação enviada!</h3>
        <p className="text-slate-600">Você será redirecionado ao nosso WhatsApp. Em breve entraremos em contato.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="lead-name" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Nome Completo *
        </label>
        <input
          id="lead-name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="João Silva"
          className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all text-sm"
        />
      </div>
      <div>
        <label htmlFor="lead-email" className="block text-sm font-semibold text-slate-700 mb-1.5">
          E-mail Corporativo *
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="joao@suaempresa.com.br"
          className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all text-sm"
        />
      </div>
      <div>
        <label htmlFor="lead-whatsapp" className="block text-sm font-semibold text-slate-700 mb-1.5">
          WhatsApp *
        </label>
        <input
          id="lead-whatsapp"
          name="whatsapp"
          type="tel"
          required
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder="(11) 99999-9999"
          className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all text-sm"
        />
      </div>
      <div>
        <label htmlFor="lead-need" className="block text-sm font-semibold text-slate-700 mb-1.5">
          Qual é a sua necessidade? *
        </label>
        <div className="relative">
          <select
            id="lead-need"
            name="need"
            required
            value={formData.need}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all text-sm appearance-none cursor-pointer"
          >
            <option value="" disabled>Selecione uma opção...</option>
            <option value="PMOC — Compliance Sanitário">PMOC — Compliance Sanitário</option>
            <option value="Sistema VRF / VRV">Sistema VRF / VRV</option>
            <option value="Manutenção Preditiva">Manutenção Preditiva</option>
            <option value="Diagnóstico Técnico">Diagnóstico Técnico Gratuito</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" aria-hidden="true" />
        </div>
      </div>
      <button
        type="submit"
        id="lead-submit-btn"
        className="w-full inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/30 hover:shadow-sky-600/35 text-base"
      >
        <Send className="w-4 h-4" aria-hidden="true" />
        Solicitar Diagnóstico Gratuito
      </button>
      <p className="text-xs text-slate-400 text-center">
        Seus dados são confidenciais. Sem spam, apenas engenharia de precisão.
      </p>
    </form>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────────
export default function Home() {
  const painSectionRef = useRef(null);

  const scrollToPain = () => {
    painSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white text-slate-900">

      {/* ════════════════════════════════════════════════════════════════════════
          1. HERO — Above the Fold (The Hook)
      ════════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center py-32 px-6 md:px-12 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/home-servicos.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'local',
        }}
        aria-label="Simon Climatização — Engenharia Térmica B2B e Compliance Sanitário"
      >
        {/* Gradient overlay for WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-sky-50/78 to-white/50 pointer-events-none" aria-hidden="true" />

        {/* Decorative engineering grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)] opacity-35 pointer-events-none" aria-hidden="true" />

        {/* Ambient sky glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-sky-300/15 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column — Copy */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              {/* Pre-headline badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase mb-7">
                <Activity className="w-3.5 h-3.5" aria-hidden="true" />
                Engenharia Térmica B2B &amp; Compliance Sanitário
              </div>

              <h1 className="text-4xl md:text-[3.25rem] font-extrabold leading-[1.1] mb-6 tracking-tight text-slate-900">
                Pare de Perder Dinheiro com o Improviso.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                  Eleve sua Climatização para a Engenharia de Precisão.
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                Para gestores corporativos e industriais: transformamos a infraestrutura do seu edifício em um ativo de saúde e conformidade. Reduza sua conta de energia em até{' '}
                <strong className="text-slate-800">40%</strong> e blinde seu CNPJ contra multas milionárias da Vigilância Sanitária.
              </p>

              {/* Bullet points */}
              <ul className="space-y-3 mb-10" role="list">
                {[
                  'Fim do desperdício: Redução drástica na conta de luz com tecnologia Inverter/VRF calibrada.',
                  'Blindagem jurídica total: PMOC 100% digital, certificado e assinado por Engenheiro (Lei 13.589).',
                  'Ar com pureza laboratorial: Erradicação de bactérias e da Síndrome do Edifício Doente.',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.2 + i * 0.1}
                    className="flex items-start gap-3 text-slate-700 text-sm font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contato"
                  id="hero-primary-cta"
                  className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-600/35 hover:-translate-y-0.5"
                >
                  Agendar Diagnóstico Técnico Gratuito
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <button
                  onClick={scrollToPain}
                  id="hero-secondary-cta"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-sky-400 text-slate-600 hover:text-sky-600 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base bg-white/60 backdrop-blur-sm hover:bg-sky-50/60"
                >
                  Entender meu Risco Legal
                </button>
              </div>
            </motion.div>

            {/* Right Column — Credentials card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.25}
              className="relative"
            >
              <div className="absolute inset-0 bg-sky-300/20 blur-[90px] rounded-full pointer-events-none" aria-hidden="true" />
              <div className="relative z-10 bg-white/85 backdrop-blur-xl border border-sky-100 rounded-3xl p-8 shadow-2xl shadow-sky-900/10">

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-sky-50 border border-sky-200 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <ShieldCheck className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-sky-500 uppercase tracking-widest mb-0.5">Atendimento B2B</span>
                    <span className="text-lg font-bold text-slate-900">A Promessa Simon</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8" role="list">
                  {[
                    { icon: <Zap className="w-4 h-4 text-sky-500" aria-hidden="true" />, text: 'Domínio absoluto em sistemas VRF e VRV, Chiller e HVAC, Split e Central' },
                    { icon: <TrendingDown className="w-4 h-4 text-sky-500" aria-hidden="true" />, text: 'Redução de até 40% na conta de energia elétrica' },
                    { icon: <Lock className="w-4 h-4 text-sky-500" aria-hidden="true" />, text: 'Adequação jurídica completa — PMOC certificado' },
                    { icon: <Wind className="w-4 h-4 text-sky-500" aria-hidden="true" />, text: 'Pureza laboratorial do ar com biocidas ANVISA' },
                    { icon: <GraduationCap className="w-4 h-4 text-sky-500" aria-hidden="true" />, text: 'Engenheiros que formam a elite técnica do Brasil' },
                  ].map(({ icon, text }, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                      <span className="mt-0.5 flex-shrink-0">{icon}</span>
                      {text}
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-sky-100 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" aria-hidden="true" />
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">
                    Laudos &amp; ART disponíveis sob demanda
                  </span>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          2. CURRENT PAIN — The "Before" (The Cost of Incompetence)
      ════════════════════════════════════════════════════════════════════════ */}
      <section
        ref={painSectionRef}
        id="risco-legal"
        className="py-24 px-6 md:px-12 bg-slate-50 border-t border-sky-100"
        aria-label="Os custos do ar-condicionado comoditizado"
      >
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold tracking-widest uppercase mb-5">
              O Problema Real
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-slate-900 max-w-4xl mx-auto leading-tight">
              O Custo Silencioso (e Perigoso) do{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Ar-Condicionado Comoditizado
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Enquanto você lê isso, seu sistema de climatização pode estar te custando muito mais do que aparece na conta de luz.
            </p>
          </motion.div>

          {/* Pain Cards — 3 columns */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
          >
            {[
              {
                icon: <TrendingDown className="w-7 h-7" aria-hidden="true" />,
                accent: 'text-orange-500',
                bg: 'bg-orange-50',
                border: 'border-orange-200',
                title: 'A Hemorragia Financeira',
                subtitle: 'O Ralo Energético',
                body: 'Máquinas subdimensionadas ou instaladas sem critérios de engenharia trabalham em esforço extremo. O resultado é um consumo monstruoso que corrói o fluxo de caixa da sua empresa silenciosamente todos os meses.',
              },
              {
                icon: <AlertTriangle className="w-7 h-7" aria-hidden="true" />,
                accent: 'text-red-500',
                bg: 'bg-red-50',
                border: 'border-red-200',
                title: 'A Bomba-Relógio Jurídica',
                subtitle: 'A Roleta-Russa do PMOC',
                body: 'A ausência do Plano de Manutenção assinado não é detalhe burocrático. É infração sanitária federal. Uma blitz surpresa pode aplicar multas de até R$ 1.500.000,00 e gerar processos trabalhistas por insalubridade.',
              },
              {
                icon: <Wrench className="w-7 h-7" aria-hidden="true" />,
                accent: 'text-amber-600',
                bg: 'bg-amber-50',
                border: 'border-amber-200',
                title: 'O Colapso no Verão',
                subtitle: 'Gambiarras e Quebras Prematuras',
                body: 'O mercado está cheio de "instaladores" que ignoram o alto vácuo profundo e a pressurização com nitrogênio. Essa negligência derrete placas eletrônicas e queima compressores caríssimos exatamente nos dias de maior calor.',
              },
            ].map(({ icon, accent, bg, border, title, subtitle, body }, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className={`bg-white border ${border} rounded-2xl p-8 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-14 h-14 ${bg} border ${border} rounded-2xl flex items-center justify-center mb-5 ${accent}`}>
                  {icon}
                </div>
                <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{title}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{subtitle}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Belief Deconstruction — Full width */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-white p-10 md:p-12 shadow-xl shadow-sky-100/60"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-sky-300/15 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1.5 h-12 bg-gradient-to-b from-sky-400 to-blue-600 rounded-full" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Desconstrução do Mito</span>
              </div>
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed">
                <strong className="text-slate-900">Muitos gestores acreditam que manutenção é apenas "lavar filtros" ou "completar o gás".</strong>{' '}
                Na verdade, intervenções empíricas descalibram a termodinâmica do sistema. O custo de uma máquina parada é{' '}
                <em className="text-sky-600 not-italic font-bold">infinitamente maior</em> que uma gestão técnica de excelência.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          3. DESIRED OUTCOME — The "After" (The Engineering Paradigm)
      ════════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 md:px-12 bg-white border-t border-sky-100 relative overflow-hidden"
        aria-label="Os resultados da engenharia de precisão"
      >
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/60 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100/50 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-6xl mx-auto relative z-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase mb-5">
              A Visão do Futuro
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-slate-900 max-w-4xl mx-auto leading-tight">
              Imagine uma Operação{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-400">
                Blindada, Silenciosa e Altamente Lucrativa
              </span>
            </h2>
          </motion.div>

          {/* Outcome Cards — Glassmorphism */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {[
              {
                icon: <TrendingDown className="w-7 h-7" aria-hidden="true" />,
                accent: 'from-sky-500 to-blue-600',
                textAccent: 'text-sky-500',
                tag: 'ROI Imediato',
                title: 'Eficiência Termodinâmica Perfeita',
                body: 'Nossas intervenções preditivas fazem a máquina trabalhar leve. A eliminação de até 40% do desperdício energético paga integralmente o nosso contrato de gestão.',
                metric: '−40%',
                metricLabel: 'consumo energético',
              },
              {
                icon: <ShieldCheck className="w-7 h-7" aria-hidden="true" />,
                accent: 'from-blue-600 to-indigo-600',
                textAccent: 'text-blue-600',
                tag: 'Escudo Legal Impenetrável',
                title: 'Seu CNPJ Protegido de Ponta a Ponta',
                body: 'Entregamos um ecossistema rastreável: PMOC digital, laudos microbiológicos de pureza do ar e ART em dia. Diante de qualquer fiscalização, sua empresa é intocável.',
                metric: '100%',
                metricLabel: 'conforme a lei',
              },
              {
                icon: <Wind className="w-7 h-7" aria-hidden="true" />,
                accent: 'from-teal-400 to-sky-500',
                textAccent: 'text-teal-500',
                tag: 'Produtividade Inabalável',
                title: 'Fim da Síndrome do Edifício Doente',
                body: 'Com biocidas nível Anvisa, erradicamos patógenos (como a Acanthamoeba). O absenteísmo médico da sua equipe despenca e a produtividade atinge o ápice em um ar puro e laboratorial.',
                metric: '3×',
                metricLabel: 'vida útil dos ativos',
              },
            ].map(({ icon, accent, textAccent, tag, title, body, metric, metricLabel }, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="relative group bg-white/70 backdrop-blur-xl border border-sky-100 rounded-3xl p-8 shadow-xl shadow-sky-900/8 hover:shadow-2xl hover:shadow-sky-900/12 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${accent} opacity-8 rounded-full blur-[60px] group-hover:opacity-12 transition-opacity pointer-events-none`} aria-hidden="true" />

                <div className={`w-14 h-14 bg-gradient-to-br ${accent} rounded-2xl flex items-center justify-center mb-5 text-white shadow-lg`}>
                  {icon}
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${textAccent} mb-2 block`}>{tag}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{body}</p>

                <div className="pt-5 border-t border-sky-100 flex items-baseline gap-2">
                  <span className={`text-3xl font-black ${textAccent}`}>{metric}</span>
                  <span className="text-slate-500 text-xs font-medium">{metricLabel}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* New Paradigm Quote */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <blockquote className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-8xl text-sky-200 font-serif leading-none select-none pointer-events-none" aria-hidden="true">"</div>
              <p className="text-slate-700 text-xl md:text-2xl leading-relaxed font-light italic pt-6">
                A climatização deixou de ser um eletrodoméstico e tornou-se{' '}
                <strong className="text-slate-900 not-italic">infraestrutura crítica</strong>. Com a engenharia correta, você não gasta com manutenção;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 not-italic font-bold">você lucra com a eficiência.</span>
              </p>
            </blockquote>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          4. THE SOLUTION & EXPERTISE — The "Bridge"
      ════════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 md:px-12 border-t border-sky-100 bg-slate-900 relative overflow-hidden"
        aria-label="A metodologia Simon Climatização"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] opacity-60 pointer-events-none" aria-hidden="true" />

        <div className="max-w-6xl mx-auto relative z-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-900/50 border border-sky-700 text-sky-400 text-xs font-bold tracking-widest uppercase mb-5">
              A Promessa Simon Climatização
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-white max-w-4xl mx-auto leading-tight">
              Onde a Máquina Encontra a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
                Sabedoria da Engenharia
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Nosso processo é cirúrgico. Cada etapa foi projetada para eliminar variáveis de risco e maximizar o retorno sobre o seu ativo.
            </p>
          </motion.div>

          {/* 3-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative">

            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-12 left-[33.33%] right-[33.33%] h-px bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 pointer-events-none" aria-hidden="true" />

            {[
              {
                step: '01',
                icon: <Activity className="w-6 h-6" aria-hidden="true" />,
                title: 'Auditoria Termodinâmica',
                body: 'Mapeamento de carga térmica (radiação, eletrônicos) e gargalos elétricos. Identificamos cada ponto de desperdício com precisão científica.',
                accent: 'from-sky-500 to-sky-600',
              },
              {
                step: '02',
                icon: <Wrench className="w-6 h-6" aria-hidden="true" />,
                title: 'Intervenção Cirúrgica',
                body: 'Retrofit com nivelamento a laser, alto vácuo em mícrons e infraestrutura normatizada (VRF/Chillers). Zero gambiarras, 100% engenharia.',
                accent: 'from-blue-500 to-blue-600',
              },
              {
                step: '03',
                icon: <ShieldCheck className="w-6 h-6" aria-hidden="true" />,
                title: 'Gestão Preditiva (PMOC)',
                body: 'Controle digital com histórico de ativos, prevenindo falhas antes que ocorram. Seu sistema gerido como infraestrutura crítica de missão.',
                accent: 'from-teal-400 to-sky-500',
              },
            ].map(({ step, icon, title, body, accent }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-all duration-300 group"
              >
                {/* Step number */}
                <div className={`w-14 h-14 bg-gradient-to-br ${accent} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  {icon}
                </div>

                <div className="absolute top-6 right-8 text-6xl font-black text-white/5 select-none pointer-events-none" aria-hidden="true">
                  {step}
                </div>

                <span className="block text-xs font-bold uppercase tracking-widest text-sky-400 mb-2">Etapa {step}</span>
                <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/contato"
              id="bridge-cta"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-10 py-5 rounded-xl transition-all duration-200 text-base shadow-xl shadow-sky-500/25 hover:shadow-sky-400/35 hover:-translate-y-0.5"
            >
              Iniciar minha Auditoria Técnica
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          5. AUTHORITY — Academia Simon
      ════════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 md:px-12 bg-white border-t border-sky-100 relative overflow-hidden"
        aria-label="Academia Simon — Autoridade técnica"
      >
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-sky-50/80 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Copy */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase mb-7">
                <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
                Academia Simon
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
                Quem Ensina a Elite Técnica do Brasil,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                  Domina o Mercado.
                </span>
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                A Simon Climatização não apenas executa projetos complexos, nós formamos os especialistas do setor. Através da{' '}
                <strong className="text-slate-900">Academia Simon</strong>, somos criadores de treinamentos avançados como o{' '}
                <em className="text-sky-600 not-italic font-semibold">"Dominando o Sistema VRF (TVR Ultra)"</em>. Ensinamos desde mecânica dos fluidos até decodificação de placas Inverter.
              </p>

              <ul className="space-y-3 mb-8" role="list">
                {[
                  'Mecânica dos fluidos aplicada a sistemas de refrigeração',
                  'Decodificação e manutenção de placas Inverter',
                  'Dimensionamento e comissionamento de sistemas VRF',
                  'Gestão preditiva com PMOC digital',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 className="w-4.5 h-4.5 text-sky-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Authority Punchline */}
              <div className="relative overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-6">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-sky-300/20 rounded-full blur-[50px] pointer-events-none" aria-hidden="true" />
                <div className="relative z-10 flex items-start gap-4">
                  <Star className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-slate-800 text-sm font-semibold leading-relaxed">
                    "Quando você contrata a Simon, o seu edifício é gerido pelos engenheiros que ensinam a concorrência."
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/academia"
                  id="academia-cta"
                  className="inline-flex items-center gap-2 border border-sky-300 hover:border-sky-500 text-sky-600 hover:text-sky-700 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm bg-sky-50/50 hover:bg-sky-50"
                >
                  <BookOpen className="w-4 h-4" aria-hidden="true" />
                  Conhecer a Academia Simon
                </Link>
              </div>
            </motion.div>

            {/* Right — Course Card Mockup */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              className="relative"
            >
              <div className="absolute inset-0 bg-sky-300/15 blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />

              {/* Course card */}
              <div className="relative z-10 bg-white border border-sky-100 rounded-3xl shadow-2xl shadow-sky-900/10 overflow-hidden">

                {/* Thumbnail placeholder */}
                <div
                  className="h-52 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center relative overflow-hidden"
                  aria-label="Miniatura do curso VRF"
                >
                  {/* Abstract tech lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a5f_1px,transparent_1px),linear-gradient(to_bottom,#1e3a5f_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-40" aria-hidden="true" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/20 rounded-full blur-[80px]" aria-hidden="true" />

                  <div className="relative z-10 text-center px-6">
                    <div className="w-16 h-16 bg-sky-500/20 border border-sky-400/30 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-8 h-8 text-sky-400" aria-hidden="true" />
                    </div>
                    <span className="text-white/60 text-xs uppercase tracking-widest font-bold">Curso Premium</span>
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                      <div className="w-0 h-0 border-l-[18px] border-l-white border-y-[11px] border-y-transparent ml-1.5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-bold">
                    <Activity className="w-3 h-3" aria-hidden="true" />
                    Bestseller
                  </div>
                </div>

                {/* Card content */}
                <div className="p-7">
                  <span className="block text-xs font-bold uppercase tracking-widest text-sky-500 mb-2">Academia Simon</span>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug">
                    Dominando o Sistema VRF (TVR Ultra)
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    Do dimensionamento à decodificação de falhas: o treinamento técnico mais completo de sistemas VRF do Brasil.
                  </p>

                  <ul className="space-y-2 mb-6" role="list">
                    {['Mecânica dos fluidos aplicada', 'Decodificação de placas Inverter', 'Comissionamento profissional'].map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 text-xs font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-5 border-t border-sky-100">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" aria-hidden="true" />
                        ))}
                      </div>
                      <span className="text-slate-500 text-xs">(4.9)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                      <Users className="w-3.5 h-3.5" aria-hidden="true" />
                      Elite técnica
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          6. SCARCITY TRIGGER & FINAL CTA
      ════════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 md:px-12 bg-sky-50 border-t border-sky-100 relative overflow-hidden"
        aria-label="Vagas limitadas — Atendimento boutique"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-sky-200/40 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Scarcity badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-sky-200 text-slate-700 text-sm font-bold mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" aria-hidden="true" />
              Atendimento Boutique. Vagas Limitadas.
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-slate-900 leading-tight">
              Não atendemos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                todo mundo.
              </span>
              <br />E isso é uma garantia para você.
            </h2>
          </motion.div>

          {/* Founder's Message */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative bg-white/80 backdrop-blur-xl border border-sky-200 rounded-3xl p-10 md:p-12 shadow-2xl shadow-sky-900/10 mb-10 text-left"
          >
            <div className="absolute -top-4 left-10 text-6xl text-sky-200 font-serif leading-none select-none pointer-events-none" aria-hidden="true">"</div>
            <blockquote className="relative z-10">
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-light">
                Devido à{' '}
                <strong className="text-slate-900">engenharia de precisão microscópica</strong> e ao rigor técnico inegociável exigidos para sistemas de alta performance, atendemos deliberadamente uma carteira <strong className="text-slate-900">estritamente seleta</strong> de clientes corporativos por mês. Não entramos em leilões de preço. Nossa missão é dedicar atenção obsessiva para garantir a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 font-semibold">durabilidade vitalícia do seu patrimônio.</span>
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="w-8 h-px bg-sky-400" aria-hidden="true" />
                <cite className="text-sky-600 text-xs font-bold uppercase tracking-widest not-italic">Fundadores, Simon Climatização</cite>
              </footer>
            </blockquote>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
          >
            <Link
              to="/contato"
              id="scarcity-cta"
              className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-bold px-12 py-5 rounded-2xl transition-all duration-200 text-lg shadow-2xl shadow-sky-500/30 hover:shadow-sky-600/40 hover:-translate-y-1"
            >
              Solicitar Vaga para Diagnóstico Técnico
              <ArrowRight className="w-6 h-6" aria-hidden="true" />
            </Link>
            <p className="mt-4 text-slate-500 text-sm">
              Resposta em até 24 horas úteis. Sem compromisso.
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
