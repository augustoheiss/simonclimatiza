import React, { useRef, useState, useEffect } from 'react';
import { cursoInstalacaoHVAC } from '../data/cursoInstalacaoHVAC';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DOMPurify from 'dompurify';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Thermometer,
  Zap,
  Flame,
  Gauge,
  Rocket,
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
  Wrench,
  TrendingUp,
  Star,
  Target,
  Award,
  Video,
  Image,
  X,
  Table2,
  Info,
  Layers,
} from 'lucide-react';

// ─── Animation Variants (reusing project pattern) ───────────────────────────
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

// Page-level transition variants
const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
};

// ─── Helper: YouTube URL → embed ID ─────────────────────────────────────────
function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([\w-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1` : null;
}

// ─── Slide count map per lesson (aula.id → { folder, count, ext }) ──────────
const SLIDE_MAP = {
  '01-01': { folder: 'modulo01/modulo01-01', count: 15, ext: 'png' },
  '01-02': { folder: 'modulo01/modulo01-02', count: 15, ext: 'png' },
  '01-03': { folder: 'modulo01/modulo01-03', count: 15, ext: 'png' },
  '01-04': { folder: 'modulo01/modulo01-04', count: 15, ext: 'png' },
  '02-01': { folder: 'modulo02/modulo02-01', count: 13, ext: 'png' },
  '02-02': { folder: 'modulo02/modulo02-02', count: 15, ext: 'png' },
  '02-03': { folder: 'modulo02/modulo02-03', count: 15, ext: 'png' },
  '03-01': { folder: 'modulo03/modulo03-01', count: 15, ext: 'png' },
  '03-02': { folder: 'modulo03/modulo03-02', count: 15, ext: 'png' },
  '03-03': { folder: 'modulo03/modulo03-03', count: 15, ext: 'png' },
  '04-01': { folder: 'modulo04/modulo04-01', count: 14, ext: 'png' },
  '04-02': { folder: 'modulo04/modulo04-02', count: 13, ext: 'png' },
  '04-03': { folder: 'modulo04/modulo04-03', count: 15, ext: 'png' },
  '05-01': { folder: 'modulo05/modulo05-01', count: 15, ext: 'png' },
  '05-02': { folder: 'modulo05/modulo05-02', count: 15, ext: 'png' },
  '05-03': { folder: 'modulo05/modulo05-03', count: 15, ext: 'png' },
  '05-04': { folder: 'modulo05/modulo05-04', count: 15, ext: 'png' },
  '06-01': { folder: 'modulo06/modulo06-01', count: 15, ext: 'png' },
  '07-01': { folder: 'modulo07/modulo07-01', count: 12, ext: 'png' },
  '07-02': { folder: 'modulo07/modulo07-02', count: 15, ext: 'png' },
  'apresentacao': { folder: 'aula01-apresentacao', count: 15, ext: 'jpg' },
};

function getSlidePaths(aulaId) {
  const info = SLIDE_MAP[aulaId];
  if (!info) return [];
  const base = `/images/academia/hvac-instalacao/${info.folder}`;
  const slides = [];
  for (let i = 1; i <= info.count; i++) {
    slides.push(`${base}/slide${String(i).padStart(2, '0')}.${info.ext}`);
  }
  slides.push(`${base}/infografico.jpg`);
  return slides;
}

// ─── Safe HTML renderer ─────────────────────────────────────────────────────
function SafeHTML({ html, className = '' }) {
  if (!html) return null;
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
    />
  );
}

// ─── 7-Tab Definitions ──────────────────────────────────────────────────────
const LESSON_TABS = [
  { id: 'conteudo', label: 'Conteúdo Técnico', icon: BookOpen },
  { id: 'tabelas', label: 'Tabelas & Parâmetros', icon: Table2 },
  { id: 'infobox', label: 'Info de Campo', icon: Info },
  { id: 'video', label: 'Videoaula', icon: Play },
  { id: 'podcast', label: 'Podcast', icon: Headphones },
  { id: 'slides', label: 'Slides & Infográfico', icon: Layers },
  { id: 'fontes', label: 'Fontes & Pesquisa', icon: FileText },
];

// ─── Module Colors ──────────────────────────────────────────────────────────
const moduleColors = [
  { accent: '#0ea5e9', border: 'rgba(14,165,233,0.4)', bg: 'rgba(14,165,233,0.08)' },
  { accent: '#3b82f6', border: 'rgba(59,130,246,0.4)', bg: 'rgba(59,130,246,0.08)' },
  { accent: '#6366f1', border: 'rgba(99,102,241,0.4)', bg: 'rgba(99,102,241,0.08)' },
  { accent: '#8b5cf6', border: 'rgba(139,92,246,0.4)', bg: 'rgba(139,92,246,0.08)' },
  { accent: '#14b8a6', border: 'rgba(20,184,166,0.4)', bg: 'rgba(20,184,166,0.08)' },
  { accent: '#f59e0b', border: 'rgba(245,158,11,0.4)', bg: 'rgba(245,158,11,0.08)' },
  { accent: '#10b981', border: 'rgba(16,185,129,0.4)', bg: 'rgba(16,185,129,0.08)' },
];

// ═══════════════════════════════════════════════════════════════════════════════
function LessonReaderView({ aula, onBack }) {
  const [activeTab, setActiveTab] = useState(aula.defaultTab || 'conteudo');
  const [slideIndex, setSlideIndex] = useState(0);
  const [fonteIndex, setFonteIndex] = useState(0);

  // Reset tab when lesson changes
  useEffect(() => {
    setActiveTab(aula.defaultTab || 'conteudo');
    setSlideIndex(0);
    setFonteIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [aula.id, aula.defaultTab]);

  const slides = getSlidePaths(aula.id);
  const fontes = aula.fontes_imagens || [];
  const isApresentacao = aula.id === 'apresentacao';
  const videoUrl = getYouTubeEmbedUrl(
    isApresentacao
      ? (aula.link_video || aula.videos?.find((v) => v.tipo === 'videoaula')?.link)
      : (aula.link_podcast || aula.videos?.find((v) => v.tipo === 'podcast')?.link)
  );
  const podcastUrl = getYouTubeEmbedUrl(
    isApresentacao
      ? (aula.link_podcast || aula.videos?.find((v) => v.tipo === 'podcast')?.link)
      : (aula.link_video || aula.videos?.find((v) => v.tipo === 'videoaula')?.link)
  );

  // Determine which tabs are available
  const availableTabs = LESSON_TABS.filter(tab => {
    if (tab.id === 'conteudo') return !!aula.conteudo_html;
    if (tab.id === 'tabelas') return !!aula.tabelas_html;
    if (tab.id === 'infobox') return !!aula.infobox_campo;
    if (tab.id === 'video') return !!videoUrl;
    if (tab.id === 'podcast') return !!podcastUrl;
    if (tab.id === 'slides') return slides.length > 0;
    if (tab.id === 'fontes') return fontes.length > 0;
    return true;
  });

  // If current tab becomes unavailable, fall back
  useEffect(() => {
    if (!availableTabs.find(t => t.id === activeTab)) {
      // Fall back to first available or 'video'
      const fallback = availableTabs[0]?.id || 'video';
      setActiveTab(fallback);
    }
  }, [aula.id]);

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
      <style dangerouslySetInnerHTML={{ __html: `
        .prose-custom h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0f172a;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.25;
        }
        .prose-custom h3 {
          font-size: 1.35rem;
          font-weight: 700;
          color: #1e293b;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .prose-custom h4 {
          font-size: 1.15rem;
          font-weight: 600;
          color: #334155;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose-custom p {
          margin-top: 0;
          margin-bottom: 1.25rem;
          line-height: 1.75;
          color: #334155;
        }
        .prose-custom ul {
          list-style-type: disc;
          margin-top: 0;
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        .prose-custom ol {
          list-style-type: decimal;
          margin-top: 0;
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        .prose-custom li {
          margin-bottom: 0.5rem;
          line-height: 1.75;
          color: #334155;
        }
        .prose-custom strong {
          font-weight: 700;
          color: #0f172a;
        }
        .prose-custom code {
          font-family: monospace;
          background-color: rgba(220, 38, 38, 0.06);
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          color: #991b1b;
        }
        .prose-custom pre {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin-bottom: 1.25rem;
        }
        .prose-custom a {
          color: #dc2626;
          text-decoration: underline;
          font-weight: 500;
        }
        .prose-custom a:hover {
          color: #b91c1c;
        }
        .prose-custom table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
        }
        .prose-custom th {
          background-color: rgba(220, 38, 38, 0.07);
          font-weight: 700;
          text-align: left;
          padding: 0.75rem 1rem;
          border-bottom: 2px solid #fca5a5;
          color: #0f172a;
          font-size: 0.875rem;
        }
        .prose-custom td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #e2e8f0;
          color: #334155;
          font-size: 0.875rem;
        }
        .prose-custom tr:hover {
          background-color: rgba(220, 38, 38, 0.04);
        }
        .prose-custom .infobox-warning {
          background-color: #fef2f2 !important;
          border: 1px solid #fecaca !important;
          border-radius: 16px !important;
          padding: 1.5rem !important;
          margin-bottom: 1.5rem !important;
        }
        .prose-custom .infobox-warning h3 {
          color: #991b1b !important;
          margin-top: 0 !important;
          margin-bottom: 0.5rem !important;
        }
        .prose-custom .infobox-warning p {
          color: #7f1d1d !important;
          margin-bottom: 0 !important;
        }
        .prose-custom .infobox-tip {
          background-color: #f0f9ff !important;
          border: 1px solid #bae6fd !important;
          border-radius: 16px !important;
          padding: 1.5rem !important;
          margin-bottom: 1.5rem !important;
        }
        .prose-custom .infobox-tip h3 {
          color: #075985 !important;
          margin-top: 0 !important;
          margin-bottom: 0.5rem !important;
        }
        .prose-custom .infobox-tip p {
          color: #0c4a6e !important;
          margin-bottom: 0 !important;
        }
        .prose-custom .infobox-tip ul {
          margin-bottom: 0 !important;
        }
        .prose-custom .infobox-tip li {
          color: #0c4a6e !important;
        }
      ` }} />
      {/* ── Top Bar ── */}
      <div className="sticky top-0 z-50 border-b" style={{ backgroundColor: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(12px)', borderColor: 'rgba(51,65,85,0.5)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg border transition-all duration-200 hover:bg-white/5 cursor-pointer flex-shrink-0"
            style={{ borderColor: 'rgba(56,189,248,0.3)', color: '#38bdf8' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Grade
          </button>
          <div className="min-w-0 flex-1">
            <span className="text-xs font-bold uppercase tracking-widest block mb-0.5" style={{ color: '#0ea5e9' }}>
              {aula.modulo}
            </span>
            <h1 className="text-base md:text-lg font-bold truncate" style={{ color: '#f1f5f9' }}>
              {aula.titulo}
            </h1>
          </div>
        </div>
      </div>

      {/* ── Tab Switcher ── */}
      <div className="border-b overflow-x-auto" style={{ borderColor: 'rgba(51,65,85,0.4)', backgroundColor: 'rgba(15,23,42,0.7)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 py-2" role="tablist">
            {availableTabs.map((tab) => {
              let Icon = tab.icon;
              let label = tab.label;
              if (aula.id === 'apresentacao') {
                if (tab.id === 'video') label = 'Vídeo Parte 1';
                if (tab.id === 'podcast') {
                  label = 'Vídeo Parte 2';
                  Icon = Play;
                }
              }
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); if (tab.id === 'slides') setSlideIndex(0); if (tab.id === 'fontes') setFonteIndex(0); }}
                  role="tab"
                  aria-selected={isActive}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'shadow-lg'
                      : 'hover:bg-white/5'
                  }`}
                  style={isActive ? { backgroundColor: 'rgba(14,165,233,0.15)', borderColor: 'rgba(56,189,248,0.4)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.4)' } : { color: '#94a3b8', border: '1px solid transparent' }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{label}</span>
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
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* ─── CONTEÚDO TÉCNICO ─── */}
            {activeTab === 'conteudo' && aula.conteudo_html && (
              <div className="rounded-2xl border p-8 md:p-12 shadow-sm" style={{ backgroundColor: '#FFF8F6', borderColor: '#FECACA', boxShadow: '0 1px 3px 0 rgba(220, 38, 38, 0.06), 0 0 0 1px rgba(220, 38, 38, 0.03)' }}>
                <SafeHTML
                  html={aula.conteudo_html}
                  className="prose-custom max-w-none text-slate-800"
                />
              </div>
            )}

            {/* ─── TABELAS & PARÂMETROS ─── */}
            {activeTab === 'tabelas' && aula.tabelas_html && (
              <div className="rounded-2xl border p-8 md:p-12 overflow-x-auto shadow-sm" style={{ backgroundColor: '#FFF8F6', borderColor: '#FECACA', boxShadow: '0 1px 3px 0 rgba(220, 38, 38, 0.06), 0 0 0 1px rgba(220, 38, 38, 0.03)' }}>
                <SafeHTML
                  html={aula.tabelas_html}
                  className="prose-custom max-w-none text-slate-800"
                />
              </div>
            )}

            {/* ─── INFO DE CAMPO ─── */}
            {activeTab === 'infobox' && aula.infobox_campo && (
              <div className="rounded-2xl border p-8 md:p-12 shadow-sm" style={{ backgroundColor: '#FFF8F6', borderColor: '#FECACA', boxShadow: '0 1px 3px 0 rgba(220, 38, 38, 0.06), 0 0 0 1px rgba(220, 38, 38, 0.03)' }}>
                <SafeHTML
                  html={aula.infobox_campo}
                  className="prose-custom max-w-none text-slate-800"
                />
              </div>
            )}

            {/* ─── VIDEOAULA ─── */}
            {activeTab === 'video' && videoUrl && (
              <div className="rounded-2xl border overflow-hidden" style={{ borderColor: 'rgba(14,165,233,0.3)' }}>
                <div className="aspect-video bg-black">
                  <iframe
                    src={videoUrl}
                    title={`Videoaula: ${aula.titulo}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="px-6 py-4" style={{ backgroundColor: 'rgba(15,23,42,0.9)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-sky-500/20 border border-sky-400/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Play className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block">
                        {aula.id === 'apresentacao' ? 'Apresentação Parte 1' : 'Videoaula'}
                      </span>
                      <span className="text-sm font-semibold text-slate-200">{aula.titulo}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─── PODCAST ─── */}
            {activeTab === 'podcast' && podcastUrl && (
              <div className="rounded-2xl border overflow-hidden" style={{ borderColor: 'rgba(139,92,246,0.3)' }}>
                <div className="aspect-video bg-black">
                  <iframe
                    src={podcastUrl}
                    title={aula.id === 'apresentacao' ? `Apresentação Parte 2: ${aula.titulo}` : `Podcast: ${aula.titulo}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="px-6 py-4" style={{ backgroundColor: 'rgba(15,23,42,0.9)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-violet-500/20 border border-violet-400/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      {aula.id === 'apresentacao' ? (
                        <Play className="w-4 h-4 text-violet-400" />
                      ) : (
                        <Headphones className="w-4 h-4 text-violet-400" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-violet-400 block">
                        {aula.id === 'apresentacao' ? 'Apresentação Parte 2' : 'Podcast'}
                      </span>
                      <span className="text-sm font-semibold text-slate-200">{aula.titulo}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─── SLIDES & INFOGRÁFICO ─── */}
            {activeTab === 'slides' && slides.length > 0 && (
              <div className="rounded-2xl border p-6" style={{ backgroundColor: 'rgba(30,41,59,0.5)', borderColor: 'rgba(51,65,85,0.4)' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#0ea5e9' }}>
                    Slides — {aula.modulo}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: '#94a3b8' }}>
                    {slideIndex + 1} / {slides.length}
                  </span>
                </div>
                <img
                  src={slides[slideIndex]}
                  alt={`Slide ${slideIndex + 1} - ${aula.titulo}`}
                  className="w-full rounded-xl shadow-2xl"
                />
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => setSlideIndex((p) => Math.max(0, p - 1))}
                    disabled={slideIndex === 0}
                    className="p-3 rounded-xl border transition-all cursor-pointer disabled:opacity-30 hover:bg-white/5"
                    style={{ borderColor: 'rgba(14,165,233,0.3)', color: '#0ea5e9' }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="flex gap-1">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlideIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === slideIndex ? 'bg-sky-400 scale-125' : 'bg-slate-600 hover:bg-slate-500'}`}
                        aria-label={`Ir para slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setSlideIndex((p) => Math.min(slides.length - 1, p + 1))}
                    disabled={slideIndex === slides.length - 1}
                    className="p-3 rounded-xl border transition-all cursor-pointer disabled:opacity-30 hover:bg-white/5"
                    style={{ borderColor: 'rgba(14,165,233,0.3)', color: '#0ea5e9' }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* ─── FONTES & PESQUISA ─── */}
            {activeTab === 'fontes' && fontes.length > 0 && (
              <div className="rounded-2xl border p-6" style={{ backgroundColor: 'rgba(30,41,59,0.5)', borderColor: 'rgba(51,65,85,0.4)' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#f59e0b' }}>
                    Fontes de Pesquisa — Página {fonteIndex + 1} de {fontes.length}
                  </span>
                </div>
                <img
                  src={fontes[fonteIndex]}
                  alt={`Fonte de pesquisa ${fonteIndex + 1} - ${aula.titulo}`}
                  className="w-full rounded-xl shadow-2xl"
                />
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
              </div>
            )}

            {/* ─── Fallback: Tab has no content yet ─── */}
            {((activeTab === 'conteudo' && !aula.conteudo_html) ||
              (activeTab === 'tabelas' && !aula.tabelas_html) ||
              (activeTab === 'infobox' && !aula.infobox_campo) ||
              (activeTab === 'fontes' && fontes.length === 0)) && (
              <div className="rounded-2xl border p-12 text-center shadow-sm" style={{ backgroundColor: '#FFF8F6', borderColor: '#FECACA', boxShadow: '0 1px 3px 0 rgba(220, 38, 38, 0.06), 0 0 0 1px rgba(220, 38, 38, 0.03)' }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-slate-400" />
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
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
export default function TreinamentoHVAC() {
  const gradeSectionRef = useRef(null);
  const [openModulo, setOpenModulo] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null); // null = Dashboard, aulaObj = LessonReader

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

  // ─── If a lesson is active, render the LessonReaderView ───
  if (activeTopic) {
    return <LessonReaderView aula={activeTopic} onBack={closeLesson} />;
  }

  // ─── Otherwise, render the Dashboard ───
  return (
    <div className="w-full bg-white text-slate-900">

      {/* ════════════════════════════════════════════════════════════════════
          1. HERO — Above the Fold
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center py-24 md:py-32 px-6 md:px-12 overflow-hidden"
        style={{
          backgroundImage: 'url(/images/home-servicos.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-label="Treinamento Completo de Instalação HVAC — Simon Climatização"
      >
        {/* Layered overlays for guaranteed text readability */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: 'rgba(2, 6, 23, 0.85)' }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(2,6,23,0.98) 0%, rgba(2,6,23,0.90) 40%, rgba(2,6,23,0.50) 70%, rgba(2,6,23,0.30) 100%)' }} aria-hidden="true" />

        {/* Ambient glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/8 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column — Copy (dark glass card for guaranteed readability) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-700/60"
              style={{ backgroundColor: '#0a0f1e' }}
            >
              {/* Pre-headline badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-widest uppercase mb-7">
                <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
                Academia Simon — Treinamento de Instalação
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[3.25rem] font-extrabold leading-[1.1] mb-6 tracking-tight" style={{ color: '#ffffff' }}>
                Pare de Queimar Compressores.{' '}
                <span style={{ color: '#38bdf8' }}>
                  Domine a Instalação HVAC com a Metodologia de Elite.
                </span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl" style={{ color: '#cbd5e1' }}>
                Para instaladores e técnicos que querem sair do achismo e entrar no{' '}
                <strong style={{ color: '#ffffff' }}>padrão de excelência técnica</strong> da Simon Climatização.
                7 módulos, 22 aulas e mais de 44 vídeos práticos — da termodinâmica ao handover digital.
              </p>

              {/* Bullet points */}
              <ul className="space-y-3 mb-10" role="list">
                {[
                  'Ciclo de refrigeração profissional com diagnóstico real de sobreaquecimento e subarrefecimento',
                  'Brasagem com nitrogênio: a blindagem que protege o compressor contra fuligem interna',
                  'Vácuo profundo de 500 mícrons: a ciência por trás da desidratação extrema',
                  'Comissionamento VRF sem achismo: carga líquida, balança digital e protocolo inflexível',
                  'Handover digital: telemetria que blinda contratos de manutenção',
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
                    <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToGrade}
                  id="hero-cta-grade"
                  className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-400/35 hover:-translate-y-0.5"
                >
                  Ver Grade Completa do Treinamento
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
                <a
                  href="https://wa.me/5511942163150?text=Olá! Tenho interesse no Treinamento de Instalação HVAC."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-cta-contato"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-sky-400 text-white hover:text-sky-300 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base hover:bg-sky-500/10"
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
              <div className="absolute inset-0 bg-sky-500/15 blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />

              <div className="relative z-10 bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl p-8 shadow-2xl">

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-sky-500/20 border border-sky-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-sky-400" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-sky-400 uppercase tracking-widest mb-0.5">Treinamento Completo</span>
                    <span className="text-lg font-bold text-white">Instalação HVAC</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: '7', label: 'Módulos', icon: <BookOpen className="w-4 h-4" /> },
                    { value: '22', label: 'Aulas', icon: <Video className="w-4 h-4" /> },
                    { value: '44+', label: 'Vídeos', icon: <Play className="w-4 h-4" /> },
                    { value: '22', label: 'PDFs', icon: <FileText className="w-4 h-4" /> },
                  ].map(({ value, label, icon }, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                      <div className="flex justify-center mb-2 text-sky-400">{icon}</div>
                      <span className="block text-2xl font-black text-white">{value}</span>
                      <span className="text-xs text-slate-400 font-medium">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Course topics preview */}
                <ul className="space-y-3 mb-6" role="list">
                  {[
                    'Termodinâmica e Ciclo de Refrigeração',
                    'Tubulação de Cobre e Brasagem com N₂',
                    'Elétrica, VRF/VRV e Comunicação',
                    'Vácuo Profundo e Estanqueidade',
                    'Comissionamento e Handover Digital',
                  ].map((topic, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" aria-hidden="true" />
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
        className="py-24 px-6 md:px-12 bg-slate-50 border-t border-sky-100"
        aria-label="Os problemas reais que instaladores enfrentam"
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
              A maioria dos instaladores aprende "na marra" — e paga o preço com equipamentos destruídos, clientes perdidos e reputação comprometida.
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
                title: 'O Achismo que Mata Máquinas',
                subtitle: 'Instalações sem Protocolo',
                body: 'Sem um checklist rigoroso, cada instalação é uma roleta-russa. Pressurização "no olho", vácuo pela metade, carga de gás "por pressão" — e quando o compressor queima em 6 meses, ninguém sabe explicar o porquê.',
              },
              {
                icon: <Flame className="w-7 h-7" aria-hidden="true" />,
                accent: 'text-red-500',
                bg: 'bg-red-50',
                border: 'border-red-200',
                title: 'Compressores Destruídos',
                subtitle: 'A Fuligem que Você Não Vê',
                body: 'Brasagem sem fluxo contínuo de nitrogênio gera fuligem de óxido de cobre que viaja pelo sistema inteiro. Essa "neve negra" invisível entope válvulas, desgasta mancais e queima compressores de R$ 15.000+ silenciosamente.',
              },
              {
                icon: <BookOpen className="w-7 h-7" aria-hidden="true" />,
                accent: 'text-amber-600',
                bg: 'bg-amber-50',
                border: 'border-amber-200',
                title: 'Cursos sem Visão de Campo',
                subtitle: 'A Teoria que Não Instala Nada',
                body: 'Você já fez cursos que ensinam fórmulas de termodinâmica, mas nunca mostram como posicionar uma refnet a 10° de inclinação máxima ou por que o sifão de óleo a cada 10m salva o sistema? A lacuna entre sala de aula e canteiro de obras é onde os prejuízos nascem.',
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
            className="relative overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-white p-10 md:p-12 shadow-xl shadow-sky-100/60"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-sky-300/15 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1.5 h-12 bg-gradient-to-b from-sky-400 to-blue-600 rounded-full" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Desconstrução de Crença</span>
              </div>
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed">
                <strong className="text-slate-900">"Basta fazer um curso teórico e eu já estou pronto para o campo."</strong>{' '}
                Na verdade, a teoria pura sem a visão de campo cria instaladores que sabem recitar o diagrama P-H, mas não sabem por que 500 mícrons salvam o compressor ou como uma rebarba de cobre de 2mm destrói um sistema VRF inteiro. A{' '}
                <em className="text-sky-600 not-italic font-bold">verdadeira competência técnica</em>{' '}
                nasce da fusão entre o "porquê" científico e o "como" prático de quem já viveu centenas de instalações reais.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3. DESIRED OUTCOME — O "Depois" (A Transformação Técnica)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 md:px-12 bg-white border-t border-sky-100 relative overflow-hidden"
        aria-label="A transformação que o treinamento proporciona"
      >
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
              A Transformação
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-slate-900 max-w-4xl mx-auto leading-tight">
              Imagine Ter a Confiança de um{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-400">
                Instalador de Elite
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
                icon: <ShieldCheck className="w-7 h-7" aria-hidden="true" />,
                accent: 'from-sky-500 to-blue-600',
                textAccent: 'text-sky-500',
                tag: 'Execução Impecável',
                title: 'Instalações Zero-Defeito com Protocolo Completo',
                body: 'Cada etapa documentada e executada com precisão: pressurização em degraus até 4.2 MPa, brasagem sob nitrogênio a 0.02 MPa, vácuo de -756 mmHg. Você não torce para dar certo — você sabe que vai dar certo.',
                metric: 'Zero',
                metricLabel: 'retrabalho',
              },
              {
                icon: <Target className="w-7 h-7" aria-hidden="true" />,
                accent: 'from-blue-600 to-indigo-600',
                textAccent: 'text-blue-600',
                tag: 'Diagnóstico Cirúrgico',
                title: 'Precisão Técnica que Inspira Confiança no Cliente',
                body: 'Sobreaquecimento, subarrefecimento, erro de comunicação P-Q-E — você identifica a causa raiz em minutos, não em dias. Seus clientes passam a confiar no seu veredicto técnico como um laudo de engenharia.',
                metric: '100%',
                metricLabel: 'confiança técnica',
              },
              {
                icon: <Award className="w-7 h-7" aria-hidden="true" />,
                accent: 'from-teal-400 to-sky-500',
                textAccent: 'text-teal-500',
                tag: 'Diferenciação de Mercado',
                title: 'Do "Instalador Comum" ao Especialista Requisitado',
                body: 'Quem domina o protocolo completo — do dimensionamento térmico ao handover digital — não disputa preço. Você passa a ser requisitado por construtoras, integradores e clientes premium que sabem o valor da excelência.',
                metric: '3×',
                metricLabel: 'valorização profissional',
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
                A diferença entre um instalador comum e um especialista de elite não é talento —{' '}
                <strong className="text-slate-900 not-italic">é método.</strong>{' '}
                A metodologia Simon Climatização é a ponte definitiva entre{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 not-italic font-bold">a teoria da sala de aula e a excelência no canteiro de obras.</span>
              </p>
            </blockquote>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. PRODUCT INTRO — A Ponte (O Treinamento)
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 md:px-12 border-t border-sky-100 relative overflow-hidden"
        style={{ backgroundColor: '#f8fafc' }}
        aria-label="Apresentação do Treinamento"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-100/50 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase mb-5">
              A Ponte Para a Excelência
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-slate-900 max-w-4xl mx-auto leading-tight">
              Apresentando o{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                Treinamento Completo de Instalação HVAC
              </span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              A metodologia de campo da Simon Climatização, condensada em 7 módulos progressivos que transformam conhecimento em competência real.
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
              { value: '7', label: 'Módulos Progressivos', icon: <BookOpen className="w-5 h-5" /> },
              { value: '22', label: 'Aulas Técnicas', icon: <Video className="w-5 h-5" /> },
              { value: '44+', label: 'Vídeos Práticos', icon: <Play className="w-5 h-5" /> },
              { value: '22', label: 'PDFs de Apresentação', icon: <FileText className="w-5 h-5" /> },
            ].map(({ value, label, icon }, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="text-center bg-white rounded-2xl border border-sky-100 p-6 shadow-lg shadow-sky-900/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center mb-3 text-sky-500">{icon}</div>
                <span className="block text-3xl md:text-4xl font-black text-slate-900">{value}</span>
                <span className="text-xs text-slate-500 font-medium mt-1 block">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* 3-Step Process */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">
              Seu Caminho em <span className="text-sky-500">3 Passos Simples</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  icon: <Play className="w-8 h-8" />,
                  title: 'Assista',
                  description: 'Cada aula combina videoaula técnica + podcast de reforço. Assista no seu ritmo, pause, revise e absorva o conhecimento com dois formatos complementares.',
                  accent: 'from-sky-500 to-blue-600',
                },
                {
                  step: '02',
                  icon: <FileText className="w-8 h-8" />,
                  title: 'Estude',
                  description: 'Aprofunde cada conceito com as apresentações em PDF exclusivas — diagramas técnicos, tabelas de referência e checklists prontos para o campo.',
                  accent: 'from-blue-600 to-indigo-600',
                },
                {
                  step: '03',
                  icon: <Wrench className="w-8 h-8" />,
                  title: 'Aplique',
                  description: 'Leve o protocolo diretamente para o canteiro de obras. Cada módulo foi desenhado para ser aplicado imediatamente na sua próxima instalação real.',
                  accent: 'from-indigo-600 to-violet-600',
                },
              ].map(({ step, icon, title, description, accent }, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="relative text-center group"
                >
                  {/* Connector line */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-sky-200 to-transparent z-0 pointer-events-none" aria-hidden="true" />
                  )}

                  <div className="relative z-10">
                    <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${accent} rounded-3xl flex items-center justify-center text-white shadow-xl mb-6 group-hover:scale-105 transition-transform duration-300`}>
                      {icon}
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-sky-500 mb-2 block">Passo {step}</span>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Specialist Manifesto */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border p-10 md:p-14 shadow-xl mb-16"
            style={{ background: 'linear-gradient(135deg, #0c4a6e 0%, #0e1b2e 50%, #0f172a 100%)' }}
          >
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/15 border border-sky-400/30 text-xs font-bold tracking-widest uppercase mb-8" style={{ color: '#38bdf8' }}>
                <Star className="w-3.5 h-3.5" aria-hidden="true" />
                Manifesto do Especialista
              </div>

              <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#cbd5e1' }}>
                "Eu criei este treinamento porque vi centenas de instalações falharem por{' '}
                <strong style={{ color: '#ffffff' }}>erros que ninguém ensina a evitar</strong>.{' '}
                Não é um curso teórico. É a <em className="not-italic font-bold" style={{ color: '#38bdf8' }}>transferência direta</em>{' '}
                de protocolos que a Simon Climatização desenvolveu em anos de engenharia de campo — cada módulo é uma blindagem contra os erros que destroem equipamentos, reputações e carreiras."
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-sky-500/20 border border-sky-400/30 rounded-full flex items-center justify-center" aria-hidden="true">
                  <GraduationCap className="w-6 h-6" style={{ color: '#38bdf8' }} />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold" style={{ color: '#ffffff' }}>Simon Climatização</span>
                  <span className="text-xs" style={{ color: '#94a3b8' }}>Engenharia Térmica de Alta Performance</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Handbook Presentation Section — Premium Interactive Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <div 
              className="relative overflow-hidden rounded-3xl border p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-300 hover:shadow-sky-900/20"
              style={{ 
                background: 'linear-gradient(135deg, rgba(30,41,59,0.7) 0%, rgba(15,23,42,0.9) 100%)',
                borderColor: 'rgba(14,165,233,0.3)'
              }}
            >
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-sky-500/10 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" aria-hidden="true" />

              {/* Left Column: Visual/Icon Representation */}
              <div className="flex-shrink-0 relative">
                <div 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center shadow-lg border relative"
                  style={{ 
                    backgroundColor: 'rgba(14,165,233,0.1)', 
                    borderColor: 'rgba(14,165,233,0.4)',
                    color: '#38bdf8'
                  }}
                >
                  <BookOpen className="w-12 h-12 md:w-16 md:h-16" />
                  <span className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-sky-500 text-white shadow">
                    PDF 24 Pág.
                  </span>
                </div>
              </div>

              {/* Right Column: Copy & Actions */}
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/20 text-[#38bdf8] text-xs font-bold tracking-widest uppercase mb-4">
                  Manual de Campo Oficial
                </span>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-4 leading-snug">
                  Apresentação da Apostila de Instalação HVAC
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                  Explore o conteúdo teórico completo da Apostila 01 compilado em nossa plataforma interativa. Assista aos vídeos de introdução e consulte os slides esquemáticos oficiais com a metodologia Simon Climatização.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button
                    onClick={() => openLesson(cursoInstalacaoHVAC.apresentacao)}
                    className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-sky-500/20 hover:shadow-sky-400/25 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    Iniciar Leitura Interativa
                  </button>
                  
                  <button
                    onClick={() => openLesson({ ...cursoInstalacaoHVAC.apresentacao, defaultTab: 'video' })}
                    className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-sky-400 text-slate-300 hover:text-sky-300 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 text-sm hover:bg-sky-500/10 cursor-pointer"
                  >
                    <Play className="w-4 h-4" />
                    Assistir Apresentação
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
        aria-label="Grade Curricular Completa do Treinamento"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-900/30 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-5xl mx-auto relative z-10">

          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase mb-5" style={{ backgroundColor: 'rgba(14,165,233,0.15)', borderColor: 'rgba(56,189,248,0.3)', color: '#38bdf8' }}>
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              Grade Curricular Completa
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 leading-tight" style={{ color: '#ffffff' }}>
              7 Módulos.{' '}
              <span style={{ color: '#38bdf8' }}>22 Aulas.</span>{' '}
              Zero Atalhos.
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
              Clique em cada módulo para explorar as aulas. Clique em uma aula para abrir o <strong style={{ color: '#e2e8f0' }}>Leitor Interativo</strong> com vídeo, podcast, slides e conteúdo técnico completo.
            </p>
          </motion.div>

          {/* Accordion Modules */}
          <div className="space-y-4">
            {cursoInstalacaoHVAC.modulos.map((modulo, mIdx) => {
              const isOpen = openModulo === modulo.id;
              const mc = moduleColors[mIdx % moduleColors.length];

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
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-lg"
                      style={{ backgroundColor: mc.bg, color: mc.accent, border: `1px solid ${mc.border}` }}
                    >
                      {String(modulo.id).padStart(2, '0')}
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

                  {/* Expanded Lessons — Now with "Open Lesson" click action */}
                  {isOpen && (
                    <div className="px-6 pb-6 space-y-3">
                      {modulo.aulas.map((aula) => (
                        <button
                          key={aula.id}
                          onClick={() => openLesson(aula)}
                          className="w-full text-left rounded-xl border p-5 hover:bg-white/5 transition-all duration-200 cursor-pointer group"
                          style={{ backgroundColor: 'rgba(15,23,42,0.7)', borderColor: 'rgba(51,65,85,0.4)' }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: mc.accent }} aria-hidden="true" />
                            <div className="flex-1 min-w-0">
                              <span className="text-xs font-bold uppercase tracking-widest block" style={{ color: mc.accent }}>
                                {aula.modulo}
                              </span>
                              <h4 className="text-sm md:text-base font-semibold mt-0.5 truncate" style={{ color: '#e2e8f0' }}>
                                {aula.titulo}
                              </h4>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              {/* Availability indicators */}
                              {aula.conteudo_html && <BookOpen className="w-3.5 h-3.5 text-sky-500" title="Conteúdo Técnico" />}
                              {(aula.link_video || aula.videos?.find(v => v.tipo === 'videoaula')) && <Play className="w-3.5 h-3.5 text-sky-500" title="Videoaula" />}
                              {(aula.link_podcast || aula.videos?.find(v => v.tipo === 'podcast')) && <Headphones className="w-3.5 h-3.5 text-violet-500" title="Podcast" />}
                              {SLIDE_MAP[aula.id] && <Layers className="w-3.5 h-3.5 text-emerald-500" title="Slides" />}
                              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors ml-1" />
                            </div>
                          </div>
                        </button>
                      ))}
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
              São <strong style={{ color: '#ffffff' }}>7 módulos, 22 aulas e mais de 44 vídeos</strong> prontos para transformar sua carreira.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 font-bold px-10 py-4 rounded-xl transition-all duration-200 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: '#0ea5e9', color: '#ffffff' }}
            >
              Quero me Inscrever no Treinamento
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          6. CTA FINAL — Fechamento de Alta Conversão
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 px-6 md:px-12 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0c1426 0%, #0f172a 40%, #1e293b 100%)' }}
        aria-label="Chamada final para inscrição"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ backgroundColor: '#0ea5e9' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ backgroundColor: '#3b82f6' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="inline-block bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
              🎯 Decisão de Elite
            </span>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6" style={{ color: '#ffffff' }}>
              Chega de Improvisar.{' '}
              <span style={{ color: '#38bdf8' }}>Comece a Dominar.</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#94a3b8' }}>
              O mercado HVAC separa profissionais em dois grupos: os que seguem métodos comprovados e os que queimam compressores. Este treinamento coloca você definitivamente no primeiro grupo.
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: '7', label: 'Módulos', icon: '📦' },
              { value: '22', label: 'Aulas Completas', icon: '📚' },
              { value: '44+', label: 'Vídeos + Podcasts', icon: '🎬' },
              { value: '100%', label: 'Prático & Aplicável', icon: '🔧' },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-xl border p-4"
                style={{ backgroundColor: 'rgba(15,23,42,0.6)', borderColor: 'rgba(56,189,248,0.15)' }}
              >
                <span className="text-2xl mb-1 block">{stat.icon}</span>
                <span className="text-2xl font-black block" style={{ color: '#38bdf8' }}>{stat.value}</span>
                <span className="text-xs font-medium" style={{ color: '#64748b' }}>{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-3 font-bold px-10 py-5 rounded-xl transition-all duration-300 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg, #0ea5e9, #3b82f6)', color: '#ffffff' }}
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
          7. FAQ — Perguntas Frequentes
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 md:px-12 bg-slate-50" aria-label="Perguntas Frequentes">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              ❓ Dúvidas Comuns
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Perguntas Frequentes
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
            {[
              {
                q: 'Qual a diferença deste treinamento para cursos "teóricos" de HVAC?',
                a: 'Nosso treinamento é 100% baseado na metodologia de campo da Simon Climatização. Cada aula inclui videoaula técnica, podcast de reflexão, slides com infográficos e material de pesquisa em PDF. Você aprende a executar, não apenas a entender.',
              },
              {
                q: 'Preciso ter experiência prévia em HVAC?',
                a: 'O Módulo 01 cobre os fundamentos termodinâmicos desde o ciclo de refrigeração básico. Profissionais iniciantes podem acompanhar sem problemas. Para quem já atua na área, os módulos avançados (5, 6 e 7) cobrem aplicações comerciais, vácuo profundo e comissionamento digital.',
              },
              {
                q: 'O conteúdo fica disponível para sempre?',
                a: 'Sim. Após a inscrição, você tem acesso vitalício a todos os 7 módulos, 22 aulas, vídeos, podcasts, slides e materiais de pesquisa. Incluindo futuras atualizações de conteúdo.',
              },
              {
                q: 'Como funciona o suporte durante o treinamento?',
                a: 'Você terá acesso ao nosso canal exclusivo no WhatsApp para tirar dúvidas técnicas diretamente com a equipe Simon Climatização. Dúvidas sobre instalações reais são prioridade.',
              },
              {
                q: 'Recebo certificado ao concluir?',
                a: 'Sim. Ao completar todos os módulos e atividades, você recebe o Certificado de Conclusão do Treinamento de Instalação HVAC — Padrão Simon Climatização, reconhecido no mercado de climatização.',
              },
              {
                q: 'Posso acessar as aulas pelo celular?',
                a: 'Absolutamente. A plataforma é 100% responsiva. Vídeos, slides e materiais funcionam perfeitamente em smartphones e tablets. Ideal para consultar no próprio canteiro de obra.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-left font-semibold text-slate-800 text-sm md:text-base select-none list-none">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          8. MICRO-CTA FINAL — Rodapé de fechamento
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 px-6 text-center" style={{ backgroundColor: '#0f172a' }}>
        <p className="text-sm mb-4" style={{ color: '#64748b' }}>
          Ainda tem dúvidas? Fale diretamente com nossa equipe técnica.
        </p>
        <a
          href="https://wa.me/5511942163150?text=Olá! Tenho interesse no Treinamento de Instalação HVAC."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-lg border transition-all duration-200 hover:bg-emerald-500/10"
          style={{ borderColor: 'rgba(16,185,129,0.3)', color: '#10b981' }}
        >
          💬 Falar no WhatsApp
        </a>
      </section>
    </div>
  );
}
