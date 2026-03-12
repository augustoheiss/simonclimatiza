import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Send,
  MapPin,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from 'lucide-react';

// ─── Variantes de animação ─────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

// ─── Opções de serviço ─────────────────────────────────────────────────────────
const SERVICOS_OPCOES = [
  { value: '', label: 'Selecione um serviço' },
  { value: 'Sistemas VRF / VRV', label: 'Sistemas VRF / VRV' },
  { value: 'Chillers Industriais', label: 'Chillers Industriais' },
  { value: 'Câmaras Frias & Refrigeração', label: 'Câmaras Frias & Refrigeração' },
  { value: 'Sistemas Split e Inverter', label: 'Sistemas Split e Inverter' },
  { value: 'Manutenção HVAC & PMOC', label: 'Manutenção HVAC & PMOC' },
  { value: 'Reparo de Emergência', label: 'Reparo de Emergência' },
  { value: 'Outros', label: 'Outros' },
];

const WHATSAPP_NUMBER = '5511942163150';

export default function Contato() {
  const location = useLocation();

  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  // Estado isolado do select — nunca pode ser undefined
  const [servico, setServico] = useState('');

  // Pré-seleciona o serviço se vier da página de Serviços
  useEffect(() => {
    if (location.state && location.state.servicoSelecionado) {
      setServico(location.state.servicoSelecionado);
    }
  }, [location.state]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleWhatsAppSubmit(e) {
    e.preventDefault();

    const texto = `Olá Simon! Meu nome é ${form.nome || '(não informado)'}.

📧 E-mail: ${form.email || '(não informado)'}
📱 Telefone: ${form.telefone || '(não informado)'}
🔧 Serviço de interesse: ${servico || '(não informado)'}

💬 Mensagem:
${form.mensagem || '(sem mensagem adicional)'}

Aguardo o retorno. Obrigado!`;

    const encoded = encodeURIComponent(texto);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  }

  // ─── Classes compartilhadas ──────────────────────────────────────────────────
  const inputBase =
    'w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 text-sm transition-all duration-200 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30';

  return (
    <div className="w-full bg-white text-slate-900">

      {/* ── Background decorativo ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_50%,transparent_100%)] opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-300/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[120px]" />
      </div>

      {/* ── Hero badge + título ── */}
      <section className="relative pt-24 pb-12 px-6 md:px-12 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase mb-6">
            <MessageCircle className="w-3.5 h-3.5" />
            Fale com um Especialista
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4 text-slate-900">
            Entre em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Contato
            </span>
          </h1>

          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Resposta ágil garantida. Nossa equipe técnica está pronta para
            atender sua demanda.
          </p>
        </motion.div>
      </section>

      {/* ── Conteúdo em duas colunas ── */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-12 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

        {/* ════════════════════════════════════════
            COLUNA ESQUERDA — Câmara Fria / Confiança e Garantia
        ════════════════════════════════════════ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background: câmara fria — transmite rigidez e segurança */}
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'url(/images/camerafria-contatos.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          {/* Overlay translúcido gelado — deixa a imagem sangrar elegantemente */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/88 via-sky-50/82 to-slate-100/88 backdrop-blur-[1px]" />

          <div className="relative z-10 flex flex-col gap-8 p-8 md:p-10 h-full">

          {/* Chamada principal */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug mb-4 tracking-tight text-slate-900">
              Pronto para otimizar sua{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                infraestrutura climática?
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Seja um sistema novo, manutenção preventiva ou uma emergência crítica,
              nossa equipe de engenharia responde com{' '}
              <span className="text-sky-500 font-semibold">agilidade e precisão técnica</span>.
              Preencha o formulário ou acesse nossos canais diretos.
            </p>
          </div>

          {/* Diferenciais rápidos */}
          <div className="flex flex-col gap-3">
            {[
              { icon: Zap, label: 'Resposta em menos de 2 horas úteis' },
              { icon: ShieldCheck, label: 'Diagnóstico técnico sem custo inicial' },
              { icon: CheckCircle2, label: 'Orçamento detalhado e transparente' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-sm text-slate-700">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-sky-500" />
                </div>
                {label}
              </div>
            ))}
          </div>

          {/* Divisor */}
          <div className="border-t border-sky-100" />

          {/* Cards de contato direto */}
          <div className="flex flex-col gap-4">

            {/* WhatsApp / Telefone */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl bg-white/90 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/80 transition-all duration-300 shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0 group-hover:border-green-400 transition-colors">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-0.5">
                  WhatsApp / Telefone
                </p>
                <p className="text-slate-900 font-semibold group-hover:text-sky-600 transition-colors">
                  +55 11 94216-3150
                </p>
              </div>
              <Phone className="w-4 h-4 text-slate-300 ml-auto group-hover:text-sky-500 transition-colors" />
            </a>

            {/* E-mail */}
            <a
              href="mailto:simonclimatiza@gmail.com"
              className="group flex items-center gap-4 p-4 rounded-xl bg-white/90 border border-slate-200 hover:border-sky-300 hover:bg-sky-50/80 transition-all duration-300 shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center flex-shrink-0 group-hover:border-sky-400 transition-colors">
                <Mail className="w-5 h-5 text-sky-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-0.5">
                  E-mail Profissional
                </p>
                <p className="text-slate-900 font-semibold group-hover:text-sky-600 transition-colors">
                  simonclimatiza@gmail.com
                </p>
              </div>
              <Mail className="w-4 h-4 text-slate-300 ml-auto group-hover:text-sky-500 transition-colors" />
            </a>

            {/* Horários */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/90 border border-slate-200 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Horários de Atendimento
                </p>
                <div className="text-sm text-slate-700 space-y-0.5">
                  <p>
                    <span className="text-slate-900 font-semibold">Corporativo:</span>{' '}
                    Seg–Sex, 08h às 18h
                  </p>
                  <p>
                    <span className="text-orange-500 font-semibold">Emergência 24h:</span>{' '}
                    Sáb, Dom e Feriados
                  </p>
                </div>
              </div>
            </div>

            {/* Área de atuação */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/90 border border-slate-200 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-slate-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-0.5">
                  Área de Atuação
                </p>
                <p className="text-sm text-slate-700">
                  Grande São Paulo e interior do estado
                </p>
              </div>
            </div>
          </div>

          {/* Selo de Garantia — ancora a confiança */}
          <div className="mt-auto pt-6 border-t border-sky-200/60">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white/80 border border-sky-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-300 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-sky-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 mb-1">
                  Zero Quebras. Zero Perda de Estoque.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nossos sistemas de refrigeração industrial operam com protocolos
                  de redundância e manutenção preditiva que eliminam falhas
                  catastróficas. Seu inventário está protegido — garantido.
                </p>
              </div>
            </div>
          </div>

          </div>
        </motion.div>

        {/* ════════════════════════════════════════
            COLUNA DIREITA — Formulário inteligente
        ════════════════════════════════════════ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background: ambiente industrial de alta produtividade */}
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'url(/images/industria-contatos-02.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          {/* Overlay branco forte — formulário super legível */}
          <div className="absolute inset-0 bg-white/92 backdrop-blur-sm" />

          <div className="relative z-10 rounded-2xl border border-sky-100 p-8 shadow-xl shadow-sky-900/8 overflow-hidden h-full">

            {/* Brilho interno sutil */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-sky-200/20 rounded-full blur-[60px] pointer-events-none" />

            {/* Header do card */}
            <div className="relative mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Envie sua solicitação
              </h3>
              <p className="text-sm text-slate-500">
                Todos os campos ajudam a agilizar o atendimento.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="relative flex flex-col gap-5">

              {/* Nome Completo */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Ex: João da Silva"
                  className={inputBase}
                />
              </div>

              {/* E-mail + Telefone lado a lado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    E-mail Profissional
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="voce@empresa.com.br"
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="(11) 9 0000-0000"
                    className={inputBase}
                  />
                </div>
              </div>

              {/* Serviço de Interesse */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Serviço de Interesse
                </label>
                <select
                  name="servico"
                  value={servico}
                  onChange={(e) => setServico(e.target.value)}
                  className={`${inputBase} cursor-pointer appearance-none`}
                  style={{ backgroundImage: 'none' }}
                >
                  {SERVICOS_OPCOES.map(({ value, label }) => (
                    <option key={value} value={value} className="bg-white text-slate-900">
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Detalhes do Projeto / Mensagem
                </label>
                <textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Descreva brevemente o equipamento, problema ou projeto. Mais detalhes = atendimento mais rápido."
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Botão de submit */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-600/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-6" />
                Enviar e Falar no WhatsApp
                <Send className="w-4 h-4 opacity-60 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Disclaimer */}
              <p className="text-xs text-slate-400 text-center leading-relaxed">
                Ao enviar, você será redirecionado ao WhatsApp com os dados
                preenchidos. Nenhum dado é armazenado.
              </p>
            </form>
          </div>
        </motion.div>

      </section>

    </div>
  );
}
