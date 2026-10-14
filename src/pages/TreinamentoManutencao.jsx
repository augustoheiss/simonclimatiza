import React, { useRef, useState, useEffect } from 'react';
import { cursoManutencaoHVAC } from '../data/cursoManutencaoHVAC';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DOMPurify from 'dompurify';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
  Thermometer,
  Zap,
  Wrench,
  Building,
  BookOpen,
  Play,
  Headphones,
  FileText,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Activity,
  AlertTriangle,
  Rocket,
  Star,
  Target,
  Award,
  Video,
  Handshake,
  Table2,
  Info,
  Layers,
  Coffee,
} from 'lucide-react';
import ConversaView from '../components/conversa/ConversaView';
import ConversaErrorBoundary from '../components/conversa/ConversaErrorBoundary';
import { temConversa, resolverAbaInicial } from '../data/conversas/manifesto';
import useProgress from '../hooks/useProgress';
import { useConversasCurso } from '../hooks/useConversaProgress';
import ProtecaoAcademia from '../components/ProtecaoAcademia';
import '../styles/academia-prose.css';

// ─── Animation Variants ─────────────────────────────────────────────────────
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
    transition: { staggerChildren: 0.15 },
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

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
};

// ─── Safe HTML renderer ─────────────────────────────────────────────────────
function SafeHTML({ html, className = '' }) {
  if (!html) return null;
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(html, {
          FORCE_BODY: true,
          ADD_TAGS: ['style', 'input', 'label'],
          ADD_ATTR: ['checked', 'name', 'id', 'for', 'class', 'style', 'type', 'disabled', 'value'],
        }),
      }}
    />
  );
}

// ─── 7-Tab Definitions (+ Papo de Balcão) ───────────────────────────────────
const LESSON_TABS = [
  { id: 'conversa', label: 'Papo de Balcão', icon: Coffee },
  { id: 'conteudo', label: 'Conteúdo Técnico', icon: BookOpen },
  { id: 'tabelas', label: 'Tabelas & Parâmetros', icon: Table2 },
  { id: 'infobox', label: 'Info de Campo', icon: Info },
  { id: 'video', label: 'Videoaula', icon: Play },
  { id: 'podcast', label: 'Podcast', icon: Headphones },
  { id: 'slides', label: 'Slides & Infográfico', icon: Layers },
  { id: 'fontes', label: 'Fontes & Pesquisa', icon: FileText },
];

// ─── Module Colors (Emerald-based palette) ──────────────────────────────────
const moduleColors = [
  { accent: '#10b981', border: 'rgba(16,185,129,0.4)', bg: 'rgba(16,185,129,0.08)' },  // M01 Emerald
  { accent: '#06b6d4', border: 'rgba(6,182,212,0.4)', bg: 'rgba(6,182,212,0.08)' },    // M02 Cyan
  { accent: '#3b82f6', border: 'rgba(59,130,246,0.4)', bg: 'rgba(59,130,246,0.08)' },   // M03 Blue
  { accent: '#8b5cf6', border: 'rgba(139,92,246,0.4)', bg: 'rgba(139,92,246,0.08)' },   // M04 Violet
  { accent: '#f59e0b', border: 'rgba(245,158,11,0.4)', bg: 'rgba(245,158,11,0.08)' },   // M05 Amber
  { accent: '#ef4444', border: 'rgba(239,68,68,0.4)', bg: 'rgba(239,68,68,0.08)' },     // M06 Red
  { accent: '#14b8a6', border: 'rgba(20,184,166,0.4)', bg: 'rgba(20,184,166,0.08)' },   // M07 Teal
  { accent: '#f97316', border: 'rgba(249,115,22,0.4)', bg: 'rgba(249,115,22,0.08)' },   // M08 Orange
];

// ─── Module icons mapping ───────────────────────────────────────────────────
const MODULE_ICONS = {
  'shield-check': ShieldCheck,
  'stethoscope': Stethoscope,
  'wrench': Wrench,
  'thermometer': Thermometer,
  'zap': Zap,
  'building': Building,
  'activity': Activity,
  'handshake': Handshake,
};

// ─── Accent color constants ─────────────────────────────────────────────────
const ACCENT = '#10b981';
const ACCENT_LIGHT = '#34d399';
const ACCENT_BG = 'rgba(16,185,129,0.15)';
const ACCENT_BORDER = 'rgba(52,211,153,0.3)';

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON READER VIEW
// ═══════════════════════════════════════════════════════════════════════════════
function LessonReaderView({ aula, onBack }) {
  const [activeTab, setActiveTab] = useState(() =>
    resolverAbaInicial('manutencao-hvac', aula, 'conteudo')
  );
  const [fonteIndex, setFonteIndex] = useState(0);
  const { toggleAula, isAulaConcluida } = useProgress();
  const concluida = isAulaConcluida('manutencao-hvac', aula.id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [aula]);

  const fontes = aula.fontes_imagens || [];

  // Determine which tabs are available
  const availableTabs = LESSON_TABS.filter(tab => {
    if (tab.id === 'conversa') return temConversa('manutencao-hvac', aula.id);
    if (tab.id === 'conteudo') return !!aula.conteudo_html;
    if (tab.id === 'tabelas') return !!aula.tabelas_html;
    if (tab.id === 'infobox') return !!aula.infobox_campo;
    if (tab.id === 'video') return false; // No videos yet
    if (tab.id === 'podcast') return false; // No podcasts yet
    if (tab.id === 'slides') return false; // No slides yet
    if (tab.id === 'fontes') return fontes.length > 0;
    return true;
  });

  const resolvedTab = availableTabs.find((t) => t.id === activeTab)
    ? activeTab
    : availableTabs[0]?.id || 'conteudo';

  return (
    <motion.div
      key={aula.id}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-screen"
      style={{ backgroundColor: '#0f172a' }}
    >
      {/* ── Top Bar ── */}
      <div className="sticky top-0 z-50 border-b" style={{ backgroundColor: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(12px)', borderColor: 'rgba(51,65,85,0.5)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg border transition-all duration-200 hover:bg-white/5 cursor-pointer flex-shrink-0"
            style={{ borderColor: ACCENT_BORDER, color: ACCENT_LIGHT }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Voltar para a Grade</span>
            <span className="sm:hidden">Voltar</span>
          </button>
          <div className="min-w-0 flex-1">
            <span className="text-xs font-bold uppercase tracking-widest block mb-0.5" style={{ color: ACCENT }}>
              {aula.modulo}
            </span>
            <h1 className="text-base md:text-lg font-bold truncate" style={{ color: '#f1f5f9' }}>
              {aula.titulo}
            </h1>
          </div>
          {aula.id !== 'apresentacao' && (
            <button
              type="button"
              onClick={() => toggleAula('manutencao-hvac', aula.id)}
              className={`inline-flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-lg border transition-all cursor-pointer flex-shrink-0 ${
                concluida
                  ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
                  : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-emerald-400/40 hover:text-emerald-300'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span className="hidden sm:inline">
                {concluida ? 'Aula Concluída' : 'Marcar Concluída'}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* ── Tab Switcher ── */}
      <div className="border-b overflow-x-auto" style={{ borderColor: 'rgba(51,65,85,0.4)', backgroundColor: 'rgba(15,23,42,0.7)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 py-2" role="tablist">
            {availableTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = resolvedTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); if (tab.id === 'fontes') setFonteIndex(0); }}
                  role="tab"
                  aria-selected={isActive}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive ? 'shadow-lg' : 'hover:bg-white/5'
                  }`}
                  style={isActive ? { backgroundColor: ACCENT_BG, borderColor: ACCENT_BORDER, color: ACCENT_LIGHT, border: `1px solid ${ACCENT_BORDER}` } : { color: '#94a3b8', border: '1px solid transparent' }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Tab Content Area ── */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={resolvedTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* ─── PAPO DE BALCÃO ─── */}
            {resolvedTab === 'conversa' && (
              <ConversaErrorBoundary
                cursoId="manutencao-hvac"
                aulaId={aula.id}
                irParaAba={setActiveTab}
              >
                <ConversaView
                  cursoId="manutencao-hvac"
                  aulaId={aula.id}
                  irParaAba={setActiveTab}
                />
              </ConversaErrorBoundary>
            )}

            {/* ─── CONTEÚDO TÉCNICO ─── */}
            {resolvedTab === 'conteudo' && aula.conteudo_html && (
              <div className="rounded-2xl border p-8 md:p-12 shadow-sm" style={{ backgroundColor: '#f0fdf4', borderColor: '#a7f3d0', boxShadow: '0 1px 3px 0 rgba(16,185,129,0.06), 0 0 0 1px rgba(16,185,129,0.03)' }}>
                <SafeHTML
                  html={aula.conteudo_html}
                  className="prose-manut max-w-none text-slate-800"
                />
              </div>
            )}

            {/* ─── TABELAS & PARÂMETROS ─── */}
            {resolvedTab === 'tabelas' && aula.tabelas_html && (
              <div className="rounded-2xl border p-8 md:p-12 overflow-x-auto shadow-sm" style={{ backgroundColor: '#f0fdf4', borderColor: '#a7f3d0', boxShadow: '0 1px 3px 0 rgba(16,185,129,0.06), 0 0 0 1px rgba(16,185,129,0.03)' }}>
                <SafeHTML
                  html={aula.tabelas_html}
                  className="prose-manut max-w-none text-slate-800"
                />
              </div>
            )}

            {/* ─── INFO DE CAMPO ─── */}
            {resolvedTab === 'infobox' && aula.infobox_campo && (
              <div className="rounded-2xl border p-8 md:p-12 shadow-sm" style={{ backgroundColor: '#f0fdf4', borderColor: '#a7f3d0', boxShadow: '0 1px 3px 0 rgba(16,185,129,0.06), 0 0 0 1px rgba(16,185,129,0.03)' }}>
                <SafeHTML
                  html={aula.infobox_campo}
                  className="prose-manut max-w-none text-slate-800"
                />
              </div>
            )}

            {/* ─── FONTES & PESQUISA ─── */}
            {resolvedTab === 'fontes' && fontes.length > 0 && (
              <div className="rounded-2xl border p-6" style={{ backgroundColor: 'rgba(30,41,59,0.5)', borderColor: 'rgba(51,65,85,0.4)' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f59e0b' }}>
                    Fontes de Pesquisa (PDF) — {fonteIndex + 1} de {fontes.length}
                  </span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4" style={{ color: '#f59e0b' }} />
                  <h3 className="text-lg font-bold text-white mb-2">Material de Pesquisa em PDF</h3>
                  <p className="text-sm text-slate-400 mb-4 max-w-md mx-auto">
                    {fontes[fonteIndex].split('/').pop()}
                  </p>
                  <a
                    href={fontes[fonteIndex]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                    style={{ backgroundColor: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', color: '#f59e0b' }}
                  >
                    <FileText className="w-4 h-4" />
                    Abrir PDF
                  </a>
                </div>
                {fontes.length > 1 && (
                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={() => setFonteIndex((p) => Math.max(0, p - 1))}
                      disabled={fonteIndex === 0}
                      className="p-3 rounded-xl border transition-all cursor-pointer disabled:opacity-30 hover:bg-white/5"
                      style={{ borderColor: 'rgba(245,158,11,0.3)', color: '#f59e0b' }}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-sm font-semibold" style={{ color: '#94a3b8' }}>
                      {fonteIndex + 1} / {fontes.length}
                    </span>
                    <button
                      onClick={() => setFonteIndex((p) => Math.min(fontes.length - 1, p + 1))}
                      disabled={fonteIndex === fontes.length - 1}
                      className="p-3 rounded-xl border transition-all cursor-pointer disabled:opacity-30 hover:bg-white/5"
                      style={{ borderColor: 'rgba(245,158,11,0.3)', color: '#f59e0b' }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ─── Fallback: Tab has no content yet ─── */}
            {((resolvedTab === 'conteudo' && !aula.conteudo_html) ||
              (resolvedTab === 'tabelas' && !aula.tabelas_html) ||
              (resolvedTab === 'infobox' && !aula.infobox_campo) ||
              (resolvedTab === 'fontes' && fontes.length === 0)) && (
              <div className="rounded-2xl border p-12 text-center shadow-sm" style={{ backgroundColor: '#f0fdf4', borderColor: '#a7f3d0', boxShadow: '0 1px 3px 0 rgba(16,185,129,0.06), 0 0 0 1px rgba(16,185,129,0.03)' }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-800">Conteúdo em Preparação</h3>
                <p className="text-sm text-slate-500">
                  O conteúdo desta aba está sendo finalizado pela equipe Simon Climatização. Enquanto isso, explore as outras abas disponíveis.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT — TreinamentoManutencao
// ═══════════════════════════════════════════════════════════════════════════════
export default function TreinamentoManutencao() {
  const gradeSectionRef = useRef(null);
  const [openModulo, setOpenModulo] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);
  const { isAulaConcluida, getProgressoCurso } = useProgress();
  const conversasCurso = useConversasCurso('manutencao-hvac');

  // Count total lessons
  const totalAulas = cursoManutencaoHVAC.modulos.reduce((acc, m) => acc + m.aulas.length, 0);
  const totalPDFs = cursoManutencaoHVAC.modulos.reduce((acc, m) => acc + m.aulas.reduce((a2, aula) => a2 + (aula.fontes_imagens?.length || 0), 0), 0);
  const progresso = getProgressoCurso('manutencao-hvac', totalAulas);

  const scrollToGrade = () => {
    gradeSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleModulo = (id) => {
    setOpenModulo((prev) => (prev === id ? null : id));
  };

  const openLesson = (aula) => {
    setActiveTopic(aula);
  };

  const closeLesson = () => {
    setActiveTopic(null);
  };

  // ─── If a lesson is active, render the LessonReaderView (Freemium Gate: apresentacao + m01-01 abertas) ───
  if (activeTopic) {
    const aulaDegustacao = activeTopic.id === 'apresentacao' || activeTopic.id === 'm01-01';
    const reader = (
      <LessonReaderView
        key={`${activeTopic.id}-${activeTopic.defaultTab || ''}`}
        aula={activeTopic}
        onBack={closeLesson}
      />
    );
    return aulaDegustacao ? reader : (
      <ProtecaoAcademia onVoltar={closeLesson}>{reader}</ProtecaoAcademia>
    );
  }

  // ─── Dashboard ───
  return (
    <div className="w-full bg-white text-slate-900">

      {/* ════════════════════════════════════════════════════════════════════
          1. HERO — Above the Fold
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center py-24 md:py-32 px-6 md:px-12 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/home-manutencao-01.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-label="Treinamento Avançado de Manutenção HVAC — Simon Climatização"
      >
        {/* Overlays */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: 'rgba(2, 6, 23, 0.85)' }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(2,6,23,0.98) 0%, rgba(2,6,23,0.90) 40%, rgba(2,6,23,0.50) 70%, rgba(2,6,23,0.30) 100%)' }} aria-hidden="true" />

        {/* Ambient glow — emerald */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column — Copy */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-700/60"
              style={{ backgroundColor: '#0a0f1e' }}
            >
              {/* Pre-headline badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-7" style={{ backgroundColor: ACCENT_BG, border: `1px solid ${ACCENT_BORDER}`, color: ACCENT_LIGHT }}>
                <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
                Academia Simon — Treinamento de Manutenção
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[3.25rem] font-extrabold leading-[1.1] mb-6 tracking-tight" style={{ color: '#ffffff' }}>
                Pare de Apagar Incêndios.{' '}
                <span style={{ color: ACCENT_LIGHT }}>
                  Domine a Manutenção HVAC com a Metodologia de Gestão de Ativos.
                </span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl" style={{ color: '#cbd5e1' }}>
                Para técnicos e empresas que querem sair da manutenção reativa e entrar no{' '}
                <strong style={{ color: '#ffffff' }}>padrão de receita recorrente e eficiência energética</strong> da Simon Climatização.
                8 módulos, {totalAulas} aulas e {totalPDFs}+ PDFs — do TCO ao contrato PMOC.
              </p>

              {/* Bullet points */}
              <ul className="space-y-3 mb-10" role="list">
                {[
                  'Filosofia TCO: transforme manutenção de "custo" em investimento de alto retorno',
                  'Diagnóstico dos 5 Sentidos e Diagrama P-H para troubleshooting cirúrgico',
                  'Protocolos de preventiva: serpentinas, filtros, condensado e circuito frigorífico',
                  'Manutenção preditiva: vibração, termografia e CMMS digital',
                  'Contratos PMOC e receita recorrente: blindagem regulatória e fidelização',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.2 + i * 0.08}
                    className="flex items-start gap-3 text-sm font-medium"
                    style={{ color: '#e2e8f0' }}
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} aria-hidden="true" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToGrade}
                  id="hero-cta-grade-manut"
                  className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  style={{ backgroundColor: ACCENT }}
                >
                  Ver Grade Completa do Treinamento
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
                <a
                  href="https://wa.me/5511942163150?text=Olá! Tenho interesse no Treinamento de Manutenção HVAC."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-cta-contato-manut"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-emerald-400 text-white hover:text-emerald-300 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base hover:bg-emerald-500/10"
                >
                  Falar com um Especialista
                </a>
              </div>
            </motion.div>

            {/* Right Column — Stats Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.25}
              className="relative"
            >
              <div className="absolute inset-0 bg-emerald-500/15 blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />

              <div className="relative z-10 bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl p-8 shadow-2xl">

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ACCENT_BG, border: `1px solid ${ACCENT_BORDER}` }}>
                    <Activity className="w-6 h-6" style={{ color: ACCENT }} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: ACCENT }}>Treinamento Avançado</span>
                    <span className="text-lg font-bold text-white">Manutenção HVAC</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: '8', label: 'Módulos', icon: <BookOpen className="w-4 h-4" /> },
                    { value: String(totalAulas), label: 'Aulas', icon: <Video className="w-4 h-4" /> },
                    { value: `${totalPDFs}+`, label: 'PDFs', icon: <FileText className="w-4 h-4" /> },
                    { value: '100%', label: 'Prático', icon: <Wrench className="w-4 h-4" /> },
                  ].map(({ value, label, icon }, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                      <div className="flex justify-center mb-2" style={{ color: ACCENT }}>{icon}</div>
                      <span className="block text-2xl font-black text-white">{value}</span>
                      <span className="text-xs text-slate-400 font-medium">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Course topics preview */}
                <ul className="space-y-3 mb-6" role="list">
                  {[
                    'Mindset de Manutenção e Framework Regulatório',
                    'Diagnóstico Avançado: Sinais Vitais do Sistema',
                    'Manutenção Preventiva Sistemática',
                    'Circuito Frigorífico: Integridade e Carga',
                    'Manutenção Preditiva e Digital',
                    'Gestão do Cliente e Receita Recorrente',
                  ].map((topic, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT }} aria-hidden="true" />
                      {topic}
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-white/10 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">
                    Padrão Simon Climatização
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          2. CURRENT PAIN — O "Antes" (A Realidade Dolorosa do Campo)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 md:px-12 bg-slate-50 border-t border-emerald-100"
        aria-label="Os problemas reais que técnicos de manutenção enfrentam"
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
              A Realidade do Campo
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-slate-900 max-w-4xl mx-auto leading-tight">
              Você Se Reconhece em Algum{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Desses Cenários?
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              A maioria das empresas de manutenção HVAC opera no modo "apagar incêndios" — e paga o preço com faturamento volátil, multas regulatórias e perda de clientes.
            </p>
          </motion.div>

          {/* Pain Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
          >
            {[
              {
                icon: <AlertTriangle className="w-7 h-7" aria-hidden="true" />,
                accent: 'text-orange-500',
                bg: 'bg-orange-50',
                border: 'border-orange-200',
                title: 'Receita Volátil',
                subtitle: 'O Ciclo Destrutivo do Break-Fix',
                body: 'Faturamento que depende de emergências e picos de calor. Nos meses de clima ameno, a equipe fica ociosa. Sem contratos PMOC, cada chamado é uma roleta-russa financeira que gasta 3–5× mais que a preventiva programada.',
              },
              {
                icon: <ShieldCheck className="w-7 h-7" aria-hidden="true" />,
                accent: 'text-red-500',
                bg: 'bg-red-50',
                border: 'border-red-200',
                title: 'Risco Regulatório',
                subtitle: 'PMOC: A Lei que Poucos Cumprem',
                body: 'A Lei Federal 13.589/2018 obriga PMOC para edifícios com climatização acima de 60.000 BTU/h. Multas de R$ 2.000 a R$ 1.500.000 por não-conformidade. Surtos de Legionella geram responsabilidade criminal pessoal do gestor predial e do RT.',
              },
              {
                icon: <BookOpen className="w-7 h-7" aria-hidden="true" />,
                accent: 'text-amber-600',
                bg: 'bg-amber-50',
                border: 'border-amber-200',
                title: 'Diagnóstico no Escuro',
                subtitle: 'Trocar Peças ≠ Resolver Problemas',
                body: 'Técnicos que "trocam peças" sem entender a raiz da falha destroem a confiança do cliente. Sem domínio do diagrama P-H, dos 5 sentidos e do megômetro, cada diagnóstico é um palpite que custa caro.',
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

          {/* Belief Deconstruction */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-10 md:p-12 shadow-xl shadow-emerald-100/60"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-300/15 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1.5 h-12 bg-gradient-to-b from-emerald-400 to-teal-600 rounded-full" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Desconstrução de Crença</span>
              </div>
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed">
                <strong className="text-slate-900">"Manutenção preventiva é custo desnecessário — o sistema está funcionando bem."</strong>{' '}
                Na verdade, sem manutenção regular, o COP do sistema degrada silenciosamente, resultando em faturas de eletricidade <strong className="text-emerald-600">5% a 30% maiores</strong>. O custo de aquisição do equipamento representa apenas 15% do TCO — os outros 85% são energia e manutenção. Cada real investido em preventiva{' '}
                <em className="text-emerald-600 not-italic font-bold">retorna multiplicado</em>{' '}
                em economia de energia, extensão de vida útil e proteção regulatória.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3. DESIRED OUTCOME — O "Depois"
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 md:px-12 bg-white border-t border-emerald-100 relative overflow-hidden"
        aria-label="A transformação que o treinamento proporciona"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/60 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100/50 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-6xl mx-auto relative z-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-bold tracking-widest uppercase mb-5">
              A Transformação
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-slate-900 max-w-4xl mx-auto leading-tight">
              Imagine Ter a Confiança de um{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                Gestor de Ativos de Elite
              </span>
            </h2>
          </motion.div>

          {/* Outcome Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {[
              {
                icon: <ShieldCheck className="w-7 h-7" aria-hidden="true" />,
                accent: 'from-emerald-500 to-teal-600',
                textAccent: 'text-emerald-500',
                tag: 'Receita Previsível',
                title: 'MRR Sólida com Contratos PMOC de Longo Prazo',
                body: 'Receita Recorrente Mensal garantida por contratos de 3 a 5 anos. Equipe 100% produtiva o ano inteiro. Fim da dependência de emergências e picos climáticos.',
                metric: 'MRR',
                metricLabel: 'receita previsível',
              },
              {
                icon: <Target className="w-7 h-7" aria-hidden="true" />,
                accent: 'from-teal-500 to-cyan-600',
                textAccent: 'text-teal-500',
                tag: 'Diagnóstico Preditivo',
                title: 'Detectar Falhas Semanas Antes da Paralisação',
                body: 'Vibração, termografia e telemetria remota identificam degradação mecânica e elétrica antes da falha catastrófica. Reparos planejados em horário comercial.',
                metric: '100%',
                metricLabel: 'controle preditivo',
              },
              {
                icon: <Award className="w-7 h-7" aria-hidden="true" />,
                accent: 'from-cyan-400 to-emerald-500',
                textAccent: 'text-cyan-500',
                tag: 'Parceria Estratégica',
                title: 'De "Prestador de Serviço" a Consultor de Eficiência',
                body: 'Seja reconhecido como gestor de ativos e consultor energético. Seu serviço se paga pela redução na fatura de eletricidade e extensão da vida útil do sistema.',
                metric: '3×',
                metricLabel: 'valorização profissional',
              },
            ].map(({ icon, accent, textAccent, tag, title, body, metric, metricLabel }, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="relative group bg-white/70 backdrop-blur-xl border border-emerald-100 rounded-3xl p-8 shadow-xl shadow-emerald-900/8 hover:shadow-2xl hover:shadow-emerald-900/12 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${accent} opacity-8 rounded-full blur-[60px] group-hover:opacity-12 transition-opacity pointer-events-none`} aria-hidden="true" />

                <div className={`w-14 h-14 bg-gradient-to-br ${accent} rounded-2xl flex items-center justify-center mb-5 text-white shadow-lg`}>
                  {icon}
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${textAccent} mb-2 block`}>{tag}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{body}</p>

                <div className="pt-5 border-t border-emerald-100 flex items-baseline gap-2">
                  <span className={`text-3xl font-black ${textAccent}`}>{metric}</span>
                  <span className="text-slate-500 text-xs font-medium">{metricLabel}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <blockquote className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-8xl text-emerald-200 font-serif leading-none select-none pointer-events-none" aria-hidden="true">"</div>
              <p className="text-slate-700 text-xl md:text-2xl leading-relaxed font-light italic pt-6">
                A diferença entre apagar incêndios e gestão de ativos não é tecnologia —{' '}
                <strong className="text-slate-900 not-italic">é método.</strong>{' '}
                A metodologia Simon Climatização é a ponte entre{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 not-italic font-bold">a manutenção reativa e a excelência preditiva.</span>
              </p>
            </blockquote>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. APRESENTAÇÃO DA APOSTILA — Handbook Card
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 md:px-12 border-t border-emerald-100 relative overflow-hidden"
        style={{ backgroundColor: '#f8fafc' }}
        aria-label="Apresentação da Apostila"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-100/50 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-bold tracking-widest uppercase mb-5">
              A Ponte Para a Excelência
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-slate-900 max-w-4xl mx-auto leading-tight">
              Apresentando o{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                Treinamento Avançado de Manutenção HVAC
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              A metodologia de gestão de ativos da Simon Climatização, condensada em 8 módulos progressivos que transformam técnicos em especialistas em receita recorrente.
            </p>
          </motion.div>

          {/* Stats Badges */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            {[
              { value: '8', label: 'Módulos Progressivos', icon: <BookOpen className="w-5 h-5" /> },
              { value: String(totalAulas), label: 'Aulas Técnicas', icon: <Video className="w-5 h-5" /> },
              { value: `${totalPDFs}+`, label: 'PDFs de Pesquisa', icon: <FileText className="w-5 h-5" /> },
              { value: '100%', label: 'Prático & Aplicável', icon: <Wrench className="w-5 h-5" /> },
            ].map(({ value, label, icon }, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="text-center bg-white rounded-2xl border border-emerald-100 p-6 shadow-lg shadow-emerald-900/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center mb-3 text-emerald-500">{icon}</div>
                <span className="block text-3xl md:text-4xl font-black text-slate-900">{value}</span>
                <span className="text-xs text-slate-500 font-medium mt-1 block">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Handbook Presentation Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div 
              className="relative overflow-hidden rounded-3xl border p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-300 hover:shadow-emerald-900/20"
              style={{ 
                background: 'linear-gradient(135deg, rgba(30,41,59,0.7) 0%, rgba(15,23,42,0.9) 100%)',
                borderColor: ACCENT_BORDER
              }}
            >
              <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-[60px] pointer-events-none" aria-hidden="true" />

              {/* Left Column: Visual */}
              <div className="flex-shrink-0 relative">
                <div 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center shadow-lg border relative"
                  style={{ 
                    backgroundColor: ACCENT_BG, 
                    borderColor: ACCENT_BORDER,
                    color: ACCENT_LIGHT
                  }}
                >
                  <BookOpen className="w-12 h-12 md:w-16 md:h-16" />
                  <span className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white shadow" style={{ backgroundColor: ACCENT }}>
                    8 Módulos
                  </span>
                </div>
              </div>

              {/* Right Column: Copy & Actions */}
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ backgroundColor: ACCENT_BG, border: `1px solid ${ACCENT_BORDER}`, color: ACCENT_LIGHT }}>
                  Manual de Campo Oficial
                </span>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-4 leading-snug">
                  Apostila de Manutenção Avançada HVAC
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                  Explore o conteúdo teórico completo da Apostila 02 compilado em nossa plataforma interativa. Consulte a metodologia BAB, parâmetros regulatórios e checklists de campo.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button
                    onClick={() => openLesson(cursoManutencaoHVAC.apresentacao)}
                    className="inline-flex items-center justify-center gap-2 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 text-sm shadow-lg hover:-translate-y-0.5 cursor-pointer"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <BookOpen className="w-4 h-4" />
                    Iniciar Leitura Interativa
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. GRADE CURRICULAR — Accordion + Lesson Opener
      ════════════════════════════════════════════════════════════════════ */}
      <section
        ref={gradeSectionRef}
        className="py-24 px-6 md:px-12 relative overflow-hidden"
        style={{ backgroundColor: '#0f172a' }}
        aria-label="Grade Curricular Completa do Treinamento de Manutenção"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/30 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-900/20 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-5xl mx-auto relative z-10">

          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase mb-5" style={{ backgroundColor: ACCENT_BG, borderColor: ACCENT_BORDER, color: ACCENT_LIGHT }}>
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              Grade Curricular Completa
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 leading-tight" style={{ color: '#ffffff' }}>
              8 Módulos.{' '}
              <span style={{ color: ACCENT_LIGHT }}>{totalAulas} Aulas.</span>{' '}
              Zero Atalhos.
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
              Clique em cada módulo para explorar as aulas. Clique em uma aula para abrir o <strong style={{ color: '#e2e8f0' }}>Leitor Interativo</strong> com conteúdo técnico completo e material de pesquisa.
            </p>
          </motion.div>

          {/* Barra de Progresso do Curso */}
          <div className="mb-8 rounded-2xl border p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={{ backgroundColor: 'rgba(30,41,59,0.65)', borderColor: ACCENT_BORDER }}>
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-2">
                <span style={{ color: ACCENT_LIGHT }}>Seu Progresso no Treinamento</span>
                <span className="text-slate-200">{progresso.concluidas} / {progresso.total} aulas ({progresso.porcentagem}%)</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                  style={{ width: `${progresso.porcentagem}%` }}
                />
              </div>
            </div>
            {progresso.concluido && (
              <Link
                to="/academia/certificado/manutencao-hvac-completo"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg flex-shrink-0"
              >
                <Award className="w-4 h-4" />
                Emitir Certificado
              </Link>
            )}
          </div>

          {/* Accordion Modules */}
          <div className="space-y-4">
            {cursoManutencaoHVAC.modulos.map((modulo, mIdx) => {
              const isOpen = openModulo === modulo.id;
              const mc = moduleColors[mIdx % moduleColors.length];
              const IconComponent = MODULE_ICONS[modulo.icone] || BookOpen;

              return (
                <motion.div
                  key={modulo.id}
                  variants={staggerItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden border transition-all duration-300"
                  style={{
                    backgroundColor: isOpen ? 'rgba(15,23,42,0.95)' : 'rgba(30,41,59,0.6)',
                    borderColor: isOpen ? mc.border : 'rgba(51,65,85,0.5)',
                  }}
                >
                  {/* Module Header (clickable) */}
                  <button
                    onClick={() => toggleModulo(modulo.id)}
                    className="w-full flex items-center gap-4 p-6 text-left hover:bg-white/5 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: mc.bg, color: mc.accent, border: `1px solid ${mc.border}` }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold truncate" style={{ color: '#f1f5f9' }}>
                        {modulo.titulo}
                      </h3>
                      <p className="text-xs mt-1 truncate" style={{ color: '#64748b' }}>
                        {modulo.descricao} — {modulo.aulas.length} aula{modulo.aulas.length > 1 ? 's' : ''}
                      </p>
                    </div>
                    <div style={{ color: mc.accent }} className="flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Expanded Lessons */}
                  {isOpen && (
                    <div className="px-6 pb-6 space-y-3">
                      {modulo.aulas.map((aula) => {
                        const aulaConcluida = isAulaConcluida('manutencao-hvac', aula.id);
                        const possuiPapo = temConversa('manutencao-hvac', aula.id);
                        const papoConcluido = !!conversasCurso[aula.id]?.concluida;
                        const isDegustacao = aula.id === 'm01-01';

                        return (
                          <button
                            key={aula.id}
                            onClick={() => openLesson(aula)}
                            className="w-full text-left rounded-xl border p-5 hover:bg-white/5 transition-all duration-200 cursor-pointer group"
                            style={{ backgroundColor: 'rgba(15,23,42,0.7)', borderColor: aulaConcluida ? 'rgba(16,185,129,0.4)' : 'rgba(51,65,85,0.4)' }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: aulaConcluida ? '#10b981' : mc.accent }} aria-hidden="true" />
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: mc.accent }}>
                                    {aula.modulo}
                                  </span>
                                  {isDegustacao && (
                                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                                      🔓 Aula Degustação
                                    </span>
                                  )}
                                  {possuiPapo && (
                                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                                      papoConcluido
                                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
                                        : 'bg-amber-500/20 text-amber-300 border-amber-400/40'
                                    }`}>
                                      <Coffee className="w-3 h-3" />
                                      {papoConcluido ? 'Papo Concluído' : 'Papo de Balcão'}
                                    </span>
                                  )}
                                  {aulaConcluida && (
                                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                                      <CheckCircle2 className="w-3 h-3" />
                                      Concluída
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-sm md:text-base font-semibold mt-1 truncate" style={{ color: '#e2e8f0' }}>
                                  {aula.titulo}
                                </h4>
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                {aula.conteudo_html && <BookOpen className="w-3.5 h-3.5 text-emerald-500" title="Conteúdo Técnico" />}
                                {aula.fontes_imagens?.length > 0 && <FileText className="w-3.5 h-3.5 text-amber-500" title="PDF Disponível" />}
                                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors ml-1" />
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg mb-6" style={{ color: '#94a3b8' }}>
              São <strong style={{ color: '#ffffff' }}>8 módulos, {totalAulas} aulas e {totalPDFs}+ PDFs</strong> prontos para transformar sua operação de manutenção.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 font-bold px-10 py-4 rounded-xl transition-all duration-200 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: ACCENT, color: '#ffffff' }}
            >
              Quero me Inscrever no Treinamento
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          6. CTA FINAL
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 px-6 md:px-12 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #042f2e 0%, #0f172a 40%, #1e293b 100%)' }}
        aria-label="Chamada final para inscrição"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ backgroundColor: ACCENT }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ backgroundColor: '#14b8a6' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="inline-block border text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6" style={{ backgroundColor: ACCENT_BG, borderColor: ACCENT_BORDER, color: ACCENT }}>
              🎯 Decisão de Elite
            </span>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6" style={{ color: '#ffffff' }}>
              Chega de Apagar Incêndios.{' '}
              <span style={{ color: ACCENT_LIGHT }}>Comece a Gerenciar Ativos.</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#94a3b8' }}>
              O mercado HVAC separa profissionais em dois grupos: os que vendem contratos PMOC de longo prazo e os que disputam preço em chamados de emergência. Este treinamento coloca você definitivamente no primeiro grupo.
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: '8', label: 'Módulos', icon: '📦' },
              { value: String(totalAulas), label: 'Aulas Completas', icon: '📚' },
              { value: `${totalPDFs}+`, label: 'PDFs Técnicos', icon: '📄' },
              { value: '100%', label: 'Prático & Aplicável', icon: '🔧' },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-xl border p-4"
                style={{ backgroundColor: 'rgba(15,23,42,0.6)', borderColor: `${ACCENT_BORDER}` }}
              >
                <span className="text-2xl mb-1 block">{stat.icon}</span>
                <span className="text-2xl font-black block" style={{ color: ACCENT_LIGHT }}>{stat.value}</span>
                <span className="text-xs font-medium" style={{ color: '#64748b' }}>{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-3 font-bold px-10 py-5 rounded-xl transition-all duration-300 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
              style={{ background: `linear-gradient(135deg, ${ACCENT}, #14b8a6)`, color: '#ffffff' }}
            >
              <Rocket className="w-5 h-5" aria-hidden="true" />
              Quero me Inscrever Agora
            </Link>
            <button
              onClick={scrollToGrade}
              className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl border transition-all duration-200 text-sm hover:bg-white/5 cursor-pointer"
              style={{ borderColor: 'rgba(51,65,85,0.5)', color: '#94a3b8' }}
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              Rever a Grade Curricular
            </button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          7. MICRO-CTA FINAL — Rodapé
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 px-6 text-center" style={{ backgroundColor: '#0f172a' }}>
        <p className="text-sm mb-4" style={{ color: '#64748b' }}>
          Ainda tem dúvidas? Fale diretamente com nossa equipe técnica.
        </p>
        <a
          href="https://wa.me/5511942163150?text=Olá! Tenho interesse no Treinamento de Manutenção HVAC."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-lg border transition-all duration-200 hover:bg-emerald-500/10"
          style={{ borderColor: ACCENT_BORDER, color: ACCENT }}
        >
          💬 Falar no WhatsApp
        </a>
      </section>
    </div>
  );
}
