import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingDown,
  Lock,
  Wind,
  GraduationCap,
  Send,
  ChevronDown,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

function HeroLeadForm() {
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
      `Olá Engenharia Simon! Me chamo ${formData.name}.\nTenho interesse em: ${formData.need || 'Diagnóstico Técnico'}.\nE-mail: ${formData.email}\nWhatsApp: ${formData.whatsapp}`
    );
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="w-14 h-14 bg-sky-50 border border-sky-200 rounded-full flex items-center justify-center mx-auto mb-3">
          <CheckCircle2 className="w-8 h-8 text-sky-500" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">Solicitação Direcionada!</h3>
        <p className="text-slate-600 text-sm">Você será atendido diretamente por um especialista no WhatsApp.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
      <div>
        <label htmlFor="hero-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
          Nome Completo *
        </label>
        <input
          id="hero-name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Ex: Carlos Eduardo"
          className="w-full px-3.5 py-2.5 rounded-xl border border-sky-200 bg-white/90 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="hero-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            E-mail Corporativo *
          </label>
          <input
            id="hero-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="nome@empresa.com.br"
            className="w-full px-3.5 py-2.5 rounded-xl border border-sky-200 bg-white/90 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
          />
        </div>
        <div>
          <label htmlFor="hero-whatsapp" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            WhatsApp *
          </label>
          <input
            id="hero-whatsapp"
            name="whatsapp"
            type="tel"
            required
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            className="w-full px-3.5 py-2.5 rounded-xl border border-sky-200 bg-white/90 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="hero-need" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
          Necessidade Principal *
        </label>
        <div className="relative">
          <select
            id="hero-need"
            name="need"
            required
            value={formData.need}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-sky-200 bg-white/90 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm appearance-none cursor-pointer"
          >
            <option value="" disabled>Selecione seu objetivo...</option>
            <option value="PMOC e Compliance Sanitário (Lei 13.589)">PMOC e Compliance Sanitário (Lei 13.589)</option>
            <option value="Manutenção e Retrofit de Sistema VRF/VRV">Manutenção e Retrofit de Sistema VRF/VRV</option>
            <option value="Chillers Industriais e Câmaras Frias">Chillers Industriais e Câmaras Frias</option>
            <option value="Auditoria e Redução de Conta de Luz">Auditoria e Redução de Conta de Luz (-40%)</option>
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/30 hover:shadow-sky-600/40 text-sm active:translate-y-0.5"
      >
        <Send className="w-4 h-4" aria-hidden="true" />
        Solicitar Parecer Técnico com Engenheiro
      </button>

      <p className="text-[11px] text-slate-400 text-center">
        Dados 100% confidenciais. Sem intermediários, contato direto com a equipe técnica.
      </p>
    </form>
  );
}

export default function HeroSection({ onScrollToPain }) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center py-20 sm:py-28 px-4 sm:px-6 md:px-12 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/home-servicos.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'local',
      }}
      aria-label="Simon Climatização — Engenharia Térmica B2B e Compliance Sanitário"
    >
      {/* Background Overlays for Contrast & Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/94 via-sky-50/85 to-white/70 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)] opacity-35 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-sky-300/15 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column — Strategic Copy (7 cols) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="lg:col-span-7"
          >
            {/* Pre-headline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-extrabold tracking-widest uppercase mb-6 shadow-sm">
              <Activity className="w-3.5 h-3.5 text-sky-500" aria-hidden="true" />
              Engenharia Térmica B2B &amp; Compliance Sanitário
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[3.15rem] font-extrabold leading-[1.15] mb-6 tracking-tight text-slate-900">
              Pare de Perder Dinheiro com o Improviso.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">
                Eleve sua Climatização para a Engenharia de Precisão.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Para gestores de facilities, síndicos e diretores industriais: transformamos seu ar-condicionado em um ativo de saúde e eficiência. Reduza a conta de energia em até{' '}
              <strong className="text-slate-900 font-bold">40%</strong> e blinde sua empresa contra multas de até <strong className="text-slate-900 font-bold">R$ 1.500.000,00</strong> da Vigilância Sanitária (Lei 13.589).
            </p>

            {/* Value Bullets */}
            <ul className="space-y-3 mb-8" role="list">
              {[
                'Fim do desperdício: Calibração termodinâmica com tecnologia Inverter/VRF de alta precisão.',
                'Blindagem jurídica plena: PMOC 100% digital com ART e laudos assinados por Engenheiro.',
                'Ar com pureza laboratorial: Erradicação de ácaros, fungos e bactérias com biocidas Anvisa.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:-translate-y-0.5"
              >
                Agendar Diagnóstico Técnico
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              {onScrollToPain && (
                <button
                  type="button"
                  onClick={onScrollToPain}
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-sky-400 text-slate-700 hover:text-sky-600 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base bg-white/70 backdrop-blur-sm hover:bg-sky-50/70"
                >
                  Entender meu Risco Legal
                </button>
              )}
            </div>
          </motion.div>

          {/* Right Column — Fast Diagnostic Box (5 cols) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400/20 blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />
              
              <div className="relative z-10 bg-white/90 backdrop-blur-xl border border-sky-200 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-sky-900/10">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-sky-100">
                  <div className="w-11 h-11 bg-sky-50 border border-sky-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-sky-600 uppercase tracking-widest">Atendimento B2B Especializado</span>
                    <span className="text-base font-extrabold text-slate-900">Diagnóstico Técnico Rápido</span>
                  </div>
                </div>

                <HeroLeadForm />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
