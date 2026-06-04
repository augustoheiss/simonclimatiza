import React, { useRef, useState, useEffect } from 'react';
import { cursoTVRProCO380V } from '../data/cursoTVRProCO380V';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DOMPurify from 'dompurify';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Cpu,
  BookOpen,
  Settings,
  Search,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Activity,
  AlertTriangle,
  Wrench,
  Clock,
  Tag,
  BarChart3,
  FileText,
  Shield,
  ChevronRight,
  Table2,
  Info,
  Layers,
} from 'lucide-react';

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

// Page-level transition variants
const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
};

// ─── Icon Resolver ───────────────────────────────────────────────────────────
const ICON_MAP = {
  'book-open': BookOpen,
  cpu: Cpu,
  shield: Shield,
  settings: Settings,
  zap: Zap,
  search: Search,
};

function getIconComponent(name) {
  return ICON_MAP[name] || BookOpen;
}

// ─── Level Badge Colors ──────────────────────────────────────────────────────
const LEVEL_STYLES = {
  basico: {
    bg: 'bg-emerald-500/15',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    label: 'Básico',
    lightBg: 'bg-emerald-50',
    lightBorder: 'border-emerald-200',
    lightText: 'text-emerald-700',
  },
  intermediario: {
    bg: 'bg-amber-500/15',
    border: 'border-amber-500/30',
    text: 'text-amber-400',
    label: 'Intermediário',
    lightBg: 'bg-amber-50',
    lightBorder: 'border-amber-200',
    lightText: 'text-amber-700',
  },
  avancado: {
    bg: 'bg-red-500/15',
    border: 'border-red-500/30',
    text: 'text-red-400',
    label: 'Avançado',
    lightBg: 'bg-red-50',
    lightBorder: 'border-red-200',
    lightText: 'text-red-700',
  },
};

// ─── Part Colors ─────────────────────────────────────────────────────────────
const PART_COLORS = [
  { accent: '#0ea5e9', border: 'rgba(14,165,233,0.4)', bg: 'rgba(14,165,233,0.08)' },
  { accent: '#3b82f6', border: 'rgba(59,130,246,0.4)', bg: 'rgba(59,130,246,0.08)' },
  { accent: '#10b981', border: 'rgba(16,185,129,0.4)', bg: 'rgba(16,185,129,0.08)' },
  { accent: '#f59e0b', border: 'rgba(245,158,11,0.4)', bg: 'rgba(245,158,11,0.08)' },
  { accent: '#8b5cf6', border: 'rgba(139,92,246,0.4)', bg: 'rgba(139,92,246,0.08)' },
  { accent: '#ef4444', border: 'rgba(239,68,68,0.4)', bg: 'rgba(239,68,68,0.08)' },
];

// ─── Helper: find part info for a topic ID ───────────────────────────────────
function findPartForTopic(topicId) {
  for (let pIdx = 0; pIdx < cursoTVRProCO380V.partes.length; pIdx++) {
    const parte = cursoTVRProCO380V.partes[pIdx];
    if (parte.topicos.some(t => t.id === topicId)) {
      return { parte, parteIndex: pIdx };
    }
  }
  return null;
}

// ─── Safe HTML Renderer ──────────────────────────────────────────────────────
function SafeHTML({ html, className = '' }) {
  if (!html || html.trim() === '') return null;
  const clean = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'br', 'hr',
      'table', 'thead', 'tbody', 'tr', 'th', 'td', 'div', 'span', 'a',
    ],
    ALLOWED_ATTR: ['class', 'href', 'target', 'rel'],
  });
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}

// ─── YouTube URL → Embed Helper ──────────────────────────────────────────────
function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  let videoId = null;
  try {
    const parsed = new URL(url);
    if (parsed.hostname === 'youtu.be') {
      videoId = parsed.pathname.slice(1);
    } else if (parsed.hostname.includes('youtube.com')) {
      videoId = parsed.searchParams.get('v');
    }
  } catch {
    // Try regex fallback for edge-case formats
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([a-zA-Z0-9_-]{11})/);
    if (match) videoId = match[1];
  }
  if (!videoId) return null;
  return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&iv_load_policy=3`;
}

// ─── Slide Path Generator ────────────────────────────────────────────────────
function generateSlidePaths(topicId, totalSlides) {
  // Actual filesystem: /images/academia/trane-tvrpro-co/parte-XX/topicoXX-YY/slideNN.png
  const parteNum = topicId.split('-')[0]; // "01" from "01-02"
  const basePath = `/images/academia/trane-tvrpro-co/parte-${parteNum}/topico${topicId}`;
  const slides = [];
  for (let i = 1; i <= totalSlides; i++) {
    slides.push(`${basePath}/slide${String(i).padStart(2, '0')}.png`);
  }
  return slides;
}

// ─── Infographic Path Helper ─────────────────────────────────────────────────
function getInfographicPath(topicId) {
  const parteNum = topicId.split('-')[0];
  return `/images/academia/trane-tvrpro-co/parte-${parteNum}/topico${topicId}/infografico.jpg`;
}

// ═══════════════════════════════════════════════════════════════════════════════
//  LESSON READER VIEW (6-TAB MULTIMEDIA WORKSPACE)
// ═══════════════════════════════════════════════════════════════════════════════
function LessonReaderView({ topico, onBack }) {
  const partInfo = findPartForTopic(topico.id);
  const pc = partInfo ? PART_COLORS[partInfo.parteIndex % PART_COLORS.length] : PART_COLORS[0];
  const ls = LEVEL_STYLES[topico.nivel] || LEVEL_STYLES.basico;
  const hasContent = topico.conteudo_html && topico.conteudo_html.trim() !== '';
  const hasTables = topico.tabelas_html && topico.tabelas_html.trim() !== '';
  const hasInfobox = topico.infobox_campo && topico.infobox_campo.trim() !== '';
  const hasVideo = !!getYouTubeEmbedUrl(topico.link_video);
  const hasPodcast = !!getYouTubeEmbedUrl(topico.link_podcast);
  const hasSlides = topico.total_slides && topico.total_slides > 0;

  // Active tab for content sections
  const [activeTab, setActiveTab] = useState('conteudo');
  // Slide carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidePaths = hasSlides ? generateSlidePaths(topico.id, topico.total_slides) : [];
  // Append infographic as the last "slide"
  const infograficoPath = getInfographicPath(topico.id);
  const allSlideMedia = hasSlides ? [...slidePaths, infograficoPath] : [];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Reset slide index when switching topics
  useEffect(() => {
    setCurrentSlide(0);
  }, [topico.id]);

  const tabs = [
    { id: 'conteudo', label: 'Conteúdo Técnico', icon: <BookOpen className="w-4 h-4" />, show: hasContent },
    { id: 'tabelas', label: 'Tabelas & Parâmetros', icon: <Table2 className="w-4 h-4" />, show: hasTables },
    { id: 'infobox', label: 'Infobox de Campo', icon: <Info className="w-4 h-4" />, show: hasInfobox },
    { id: 'video', label: 'Vídeo Aula', icon: <Zap className="w-4 h-4" />, show: hasVideo },
    { id: 'podcast', label: 'Podcast Técnico', icon: <Activity className="w-4 h-4" />, show: hasPodcast },
    { id: 'slides', label: 'Slides & Infográfico', icon: <Layers className="w-4 h-4" />, show: hasSlides },
  ].filter(t => t.show);

  return (
    <motion.div
      key="lesson-reader"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-screen"
    >
      {/* ── Sticky Top Bar ─────────────────────────────────────────────── */}
      <div
        className="sticky top-[60px] z-40 border-b backdrop-blur-xl"
        style={{ backgroundColor: 'rgba(15,23,42,0.97)', borderColor: 'rgba(51,65,85,0.5)' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center gap-4">
          <button
            onClick={onBack}
            id="lesson-reader-back-btn"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer group"
            aria-label="Voltar para a Grade de Aulas"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">Voltar para a Grade de Aulas</span>
            <span className="sm:hidden">Voltar</span>
          </button>

          <div className="h-5 w-px bg-slate-700 flex-shrink-0" aria-hidden="true" />

          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xs font-bold uppercase tracking-widest flex-shrink-0" style={{ color: pc.accent }}>
              {partInfo?.parte.titulo.replace(/^PARTE \d+ — /, 'Parte ' + partInfo.parte.id + ' · ') || 'Tópico'}
            </span>
          </div>
        </div>
      </div>

      {/* ── Hero Header ────────────────────────────────────────────────── */}
      <section
        className="relative py-16 md:py-20 px-6 md:px-12 overflow-hidden"
        style={{ backgroundColor: '#0f172a' }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none"
          style={{ backgroundColor: `${pc.accent}10` }}
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <span className="hover:text-slate-300 cursor-pointer" onClick={onBack}>Grade de Aulas</span>
            <ChevronRight className="w-3 h-3" />
            <span style={{ color: pc.accent }}>Tópico {topico.id}</span>
          </div>

          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${ls.bg} ${ls.border} ${ls.text}`}
            >
              {ls.label}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              {topico.tempo_estimado}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: pc.accent }}>
              <Layers className="w-3.5 h-3.5" />
              Tópico {topico.id}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-5 tracking-tight" style={{ color: '#ffffff' }}>
            {topico.titulo}
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed max-w-3xl mb-8" style={{ color: '#94a3b8' }}>
            {topico.descricao}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {topico.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium"
                style={{
                  backgroundColor: 'rgba(51,65,85,0.5)',
                  color: '#94a3b8',
                  border: '1px solid rgba(51,65,85,0.8)',
                }}
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content Area ───────────────────────────────────────────────── */}
      {(hasContent || hasTables || hasInfobox || hasVideo || hasPodcast || hasSlides) ? (
        <section className="py-12 md:py-16 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto">

            {/* Tab Switcher — 6 Tabs */}
            {tabs.length > 1 && (
              <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-slate-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* TAB: Conteúdo Técnico */}
            {activeTab === 'conteudo' && hasContent && (
              <motion.div
                key="tab-conteudo"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SafeHTML
                  html={topico.conteudo_html}
                  className="lesson-reader-prose"
                />
              </motion.div>
            )}

            {/* TAB: Tabelas & Parâmetros */}
            {activeTab === 'tabelas' && hasTables && (
              <motion.div
                key="tab-tabelas"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SafeHTML
                  html={topico.tabelas_html}
                  className="lesson-reader-tables"
                />
              </motion.div>
            )}

            {/* TAB: Infobox de Campo */}
            {activeTab === 'infobox' && hasInfobox && (
              <motion.div
                key="tab-infobox"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SafeHTML
                  html={topico.infobox_campo}
                  className="lesson-reader-infoboxes"
                />
              </motion.div>
            )}

            {/* TAB: Vídeo Aula — Embedded iframe (NO redirect) */}
            {activeTab === 'video' && hasVideo && (
              <motion.div
                key="tab-video"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-red-500" />
                    Vídeo Aula — Tópico {topico.id}
                  </h3>
                  <p className="text-sm text-slate-500">Assista diretamente sem sair da plataforma.</p>
                </div>
                <div
                  className="relative w-full rounded-xl shadow-lg overflow-hidden border border-slate-200"
                  style={{ aspectRatio: '16/9' }}
                >
                  <iframe
                    src={getYouTubeEmbedUrl(topico.link_video)}
                    title={`Vídeo Aula — ${topico.titulo}`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            )}

            {/* TAB: Podcast Técnico — Embedded iframe (audio-optimized) */}
            {activeTab === 'podcast' && hasPodcast && (
              <motion.div
                key="tab-podcast"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-red-500" />
                    Podcast Técnico — Tópico {topico.id}
                  </h3>
                  <p className="text-sm text-slate-500">Escute o conteúdo em formato de áudio enquanto trabalha.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-lg">
                  <div
                    className="relative w-full rounded-xl overflow-hidden border border-slate-300"
                    style={{ aspectRatio: '16/9' }}
                  >
                    <iframe
                      src={getYouTubeEmbedUrl(topico.link_podcast)}
                      title={`Podcast Técnico — ${topico.titulo}`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Podcast · Simon Climatização · Tópico {topico.id}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB: Slides & Infográfico — Image Carousel */}
            {activeTab === 'slides' && hasSlides && (
              <motion.div
                key="tab-slides"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-red-500" />
                    Slides & Infográfico — Tópico {topico.id}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {currentSlide < slidePaths.length
                      ? `Slide ${currentSlide + 1} de ${slidePaths.length}`
                      : 'Infográfico Completo'}
                    {' · '}{allSlideMedia.length} imagens no total
                  </p>
                </div>

                {/* Image Display */}
                <div className="relative bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-lg">
                  <div className="relative w-full" style={{ minHeight: '400px' }}>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={allSlideMedia[currentSlide]}
                        src={allSlideMedia[currentSlide]}
                        alt={
                          currentSlide < slidePaths.length
                            ? `Slide ${currentSlide + 1} — Tópico ${topico.id}`
                            : `Infográfico — Tópico ${topico.id}`
                        }
                        className="w-full h-auto object-contain"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </AnimatePresence>
                  </div>

                  {/* Navigation overlay buttons */}
                  <button
                    onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
                    disabled={currentSlide === 0}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
                    aria-label="Slide anterior"
                  >
                    <ArrowLeft className="w-5 h-5 text-slate-700" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => Math.min(allSlideMedia.length - 1, prev + 1))}
                    disabled={currentSlide === allSlideMedia.length - 1}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
                    aria-label="Próximo slide"
                  >
                    <ArrowRight className="w-5 h-5 text-slate-700" />
                  </button>
                </div>

                {/* Slide progress bar */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500 rounded-full transition-all duration-300"
                      style={{ width: `${((currentSlide + 1) / allSlideMedia.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-500 tabular-nums flex-shrink-0">
                    {currentSlide + 1} / {allSlideMedia.length}
                  </span>
                </div>

                {/* Thumbnail strip */}
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                  {allSlideMedia.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        idx === currentSlide
                          ? 'border-red-500 shadow-md shadow-red-500/20'
                          : 'border-slate-200 hover:border-slate-400 opacity-60 hover:opacity-100'
                      }`}
                      aria-label={idx < slidePaths.length ? `Slide ${idx + 1}` : 'Infográfico'}
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.parentElement.style.display = 'none';
                        }}
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

          </div>
        </section>
      ) : (
        /* Empty state for topics without content yet */
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Conteúdo em Preparação
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              O conteúdo técnico detalhado deste tópico está sendo preparado e será adicionado em breve.
              As tabelas de parâmetros, fluxogramas de diagnóstico e infoboxes de campo estarão disponíveis na próxima atualização.
            </p>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para a Grade de Aulas
            </button>
          </div>
        </section>
      )}

      {/* ── Bottom Navigation ──────────────────────────────────────────── */}
      <section
        className="py-12 px-6 md:px-12 border-t"
        style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Grade
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
              <GraduationCap className="w-5 h-5 text-red-500" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold text-slate-900">Simon Climatização</span>
              <span className="text-[10px] text-slate-500">Service Manual Avançado</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── INLINE STYLES for Lesson Reader (scoped via class names) ──── */}
      <style>{`
        /* ── Prose — Main lesson body ──────────────────────────────── */
        .lesson-reader-prose h2 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e2e8f0;
          letter-spacing: -0.01em;
        }
        .lesson-reader-prose h2:first-child { margin-top: 0; }
        .lesson-reader-prose h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #1e293b;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .lesson-reader-prose p {
          font-size: 0.95rem;
          line-height: 1.8;
          color: #334155;
          margin-bottom: 1rem;
        }
        .lesson-reader-prose ul,
        .lesson-reader-prose ol {
          margin: 0.75rem 0 1.25rem 1.5rem;
          color: #334155;
        }
        .lesson-reader-prose li {
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 0.4rem;
        }
        .lesson-reader-prose strong {
          color: #0f172a;
          font-weight: 700;
        }
        .lesson-reader-prose hr {
          border: none;
          border-top: 1px solid #e2e8f0;
          margin: 2.5rem 0;
        }

        /* ── Tables ───────────────────────────────────────────────── */
        .lesson-reader-tables h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .lesson-reader-tables h3:first-child { margin-top: 0; }
        .lesson-reader-tables h3::before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 1.1em;
          background: #ef4444;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .lesson-reader-tables table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 2rem;
          font-size: 0.82rem;
        }
        .lesson-reader-tables thead tr {
          background: #f1f5f9;
        }
        .lesson-reader-tables th {
          padding: 0.75rem 0.875rem;
          font-weight: 700;
          color: #0f172a;
          text-align: left;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 2px solid #e2e8f0;
          white-space: nowrap;
        }
        .lesson-reader-tables td {
          padding: 0.6rem 0.875rem;
          color: #334155;
          border-bottom: 1px solid #f1f5f9;
        }
        .lesson-reader-tables tbody tr:last-child td {
          border-bottom: none;
        }
        .lesson-reader-tables tbody tr:hover {
          background: #f8fafc;
        }
        .lesson-reader-tables td strong {
          color: #0f172a;
          font-weight: 700;
        }

        /* ── Infoboxes ────────────────────────────────────────────── */
        .lesson-reader-infoboxes .infobox {
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          margin-bottom: 1.25rem;
          border-left: 4px solid;
        }
        .lesson-reader-infoboxes .infobox h4 {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .lesson-reader-infoboxes .infobox p {
          font-size: 0.88rem;
          line-height: 1.7;
          margin-bottom: 0.5rem;
        }
        .lesson-reader-infoboxes .infobox p:last-child { margin-bottom: 0; }
        .lesson-reader-infoboxes .infobox ul {
          margin: 0.5rem 0 0 1.25rem;
          font-size: 0.88rem;
        }
        .lesson-reader-infoboxes .infobox li {
          margin-bottom: 0.3rem;
          line-height: 1.6;
        }

        .lesson-reader-infoboxes .infobox-danger {
          background: #fef2f2;
          border-color: #ef4444;
        }
        .lesson-reader-infoboxes .infobox-danger h4 { color: #991b1b; }
        .lesson-reader-infoboxes .infobox-danger p,
        .lesson-reader-infoboxes .infobox-danger li { color: #7f1d1d; }

        .lesson-reader-infoboxes .infobox-warning {
          background: #fffbeb;
          border-color: #f59e0b;
        }
        .lesson-reader-infoboxes .infobox-warning h4 { color: #92400e; }
        .lesson-reader-infoboxes .infobox-warning p,
        .lesson-reader-infoboxes .infobox-warning li { color: #78350f; }

        .lesson-reader-infoboxes .infobox-info {
          background: #eff6ff;
          border-color: #3b82f6;
        }
        .lesson-reader-infoboxes .infobox-info h4 { color: #1e40af; }
        .lesson-reader-infoboxes .infobox-info p,
        .lesson-reader-infoboxes .infobox-info li { color: #1e3a8a; }

        .lesson-reader-infoboxes .infobox-tip {
          background: #f0fdf4;
          border-color: #22c55e;
        }
        .lesson-reader-infoboxes .infobox-tip h4 { color: #166534; }
        .lesson-reader-infoboxes .infobox-tip p,
        .lesson-reader-infoboxes .infobox-tip li { color: #14532d; }
      `}</style>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  MAIN COMPONENT — State Switcher
// ═══════════════════════════════════════════════════════════════════════════════
export default function TreinamentoTVRProCO() {
  const gradeSectionRef = useRef(null);
  const [openParte, setOpenParte] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);

  const scrollToGrade = () => {
    gradeSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleParte = (id) => {
    setOpenParte((prev) => (prev === id ? null : id));
  };

  const openTopic = (topico) => {
    setActiveTopic(topico);
  };

  const closeTopic = () => {
    setActiveTopic(null);
    // Give the animation time to mount, then scroll to the grade section
    setTimeout(() => {
      gradeSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Count totals
  const totalTopicos = cursoTVRProCO380V.partes.reduce((sum, p) => sum + p.topicos.length, 0);

  return (
    <div className="w-full bg-white text-slate-900">
      <AnimatePresence mode="wait">
        {activeTopic ? (
          /* ════════════════════════════════════════════════════════════
             LESSON READER MODE
          ════════════════════════════════════════════════════════════ */
          <LessonReaderView
            key={`lesson-${activeTopic.id}`}
            topico={activeTopic}
            onBack={closeTopic}
          />
        ) : (
          /* ════════════════════════════════════════════════════════════
             LANDING PAGE / DASHBOARD MODE
          ════════════════════════════════════════════════════════════ */
          <motion.div
            key="dashboard"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >

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
        aria-label="TVR Pro CO 380V — Diagnóstico e Service Manual Avançado"
      >
        {/* Layered overlays */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: 'rgba(2, 6, 23, 0.88)' }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(2,6,23,0.98) 0%, rgba(2,6,23,0.92) 40%, rgba(2,6,23,0.55) 70%, rgba(2,6,23,0.35) 100%)' }} aria-hidden="true" />

        {/* Ambient glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/6 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 border border-red-400/30 text-red-300 text-xs font-bold tracking-widest uppercase mb-7">
                <Wrench className="w-3.5 h-3.5" aria-hidden="true" />
                Service Manual Avançado · 380V
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[3.25rem] font-extrabold leading-[1.1] mb-6 tracking-tight" style={{ color: '#ffffff' }}>
                Domine o Diagnóstico do{' '}
                <span style={{ color: '#f87171' }}>
                  TVR Pro CO 380V.
                </span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl" style={{ color: '#cbd5e1' }}>
                O treinamento que transforma técnicos em{' '}
                <strong style={{ color: '#ffffff' }}>especialistas de diagnóstico avançado</strong>.
                De capacidades e nomenclatura até copper plating e pirólise do R410A — o{' '}
                <strong style={{ color: '#ffffff' }}>Service Manual completo</strong> na palma da sua mão.
              </p>

              {/* Bullet points */}
              <ul className="space-y-3 mb-10" role="list">
                {[
                  '75+ códigos de erro com fluxogramas de diagnóstico completos',
                  'Teste de IPM e retificador com modo diodo — step by step',
                  'Comunicação RS-485: ground loops, terminação e osciloscópio',
                  'Contaminação sistêmica: evacuação, hidrólise e copper plating',
                  'Oil return, P-traps e a física da tubulação VRF',
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
                    <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToGrade}
                  id="hero-cta-grade-380v"
                  className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-400 active:bg-red-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-400/35 hover:-translate-y-0.5 cursor-pointer"
                >
                  Ver Grade Completa do Treinamento
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
                <a
                  href="https://wa.me/5511942163150?text=Olá! Tenho interesse no Treinamento TVR Pro CO 380V — Service Manual."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-cta-contato-380v"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-red-400 text-white hover:text-red-300 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base hover:bg-red-500/10"
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
              <div className="absolute inset-0 bg-red-500/10 blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />

              <div className="relative z-10 bg-white/8 backdrop-blur-xl border border-white/15 rounded-3xl p-8 shadow-2xl">

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-red-500/20 border border-red-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-red-400" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-red-400 uppercase tracking-widest mb-0.5">Service Manual Avançado</span>
                    <span className="text-lg font-bold text-white">TVR Pro CO 380V</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: '6', label: 'Partes', icon: <BookOpen className="w-4 h-4" /> },
                    { value: String(totalTopicos), label: 'Tópicos', icon: <FileText className="w-4 h-4" /> },
                    { value: '75+', label: 'Códigos de Erro', icon: <AlertTriangle className="w-4 h-4" /> },
                    { value: '20+', label: 'Fluxogramas', icon: <BarChart3 className="w-4 h-4" /> },
                  ].map(({ value, label, icon }, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                      <div className="flex justify-center mb-2 text-red-400">{icon}</div>
                      <span className="block text-2xl font-black text-white">{value}</span>
                      <span className="text-xs text-slate-400 font-medium">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Course topics preview */}
                <ul className="space-y-3 mb-6" role="list">
                  {[
                    'Capacidades e Nomenclatura (8-90HP)',
                    'Layout de Componentes e Diagramas',
                    'Controle, Operação e Proteção',
                    'Field Settings e Configuração',
                    'PCB, Inversor e Fiação',
                    'Troubleshooting e Diagnóstico Avançado',
                  ].map((topic, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" aria-hidden="true" />
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
          2. FEATURES GRID — 6 Partes do Treinamento
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200"
        aria-label="As 6 partes do treinamento"
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
              Estrutura do Treinamento
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-slate-900 max-w-4xl mx-auto leading-tight">
              6 Partes.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                {totalTopicos} Tópicos.
              </span>{' '}
              Zero Improviso.
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Do reconhecimento em campo ao diagnóstico avançado de contaminação sistêmica — cada tópico foi projetado para resolver problemas reais do dia a dia do técnico.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {cursoTVRProCO380V.partes.map((parte, idx) => {
              const IconComp = getIconComponent(parte.icone);
              const pc = PART_COLORS[idx % PART_COLORS.length];
              return (
                <motion.div
                  key={parte.id}
                  variants={staggerItem}
                  className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: pc.bg, border: `1px solid ${pc.border}`, color: pc.accent }}
                  >
                    <IconComp className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                    Parte {parte.id}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{parte.titulo.replace(/^PARTE \d+ — /, '')}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{parte.descricao}</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <span className="text-xs font-semibold" style={{ color: pc.accent }}>
                      {parte.topicos.length} tópico{parte.topicos.length > 1 ? 's' : ''}
                    </span>
                    <span className="text-xs text-slate-300">·</span>
                    <span className="text-xs text-slate-400">
                      {parte.topicos.reduce((acc, t) => acc + parseInt(t.tempo_estimado), 0)} min
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          3. GRADE CURRICULAR — Accordion Interativo
      ════════════════════════════════════════════════════════════════════ */}
      <section
        ref={gradeSectionRef}
        className="py-24 px-6 md:px-12 relative overflow-hidden"
        style={{ backgroundColor: '#0f172a' }}
        aria-label="Grade Curricular Completa do Treinamento TVR Pro CO 380V"
      >
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/15 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-5xl mx-auto relative z-10">

          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase mb-5" style={{ backgroundColor: 'rgba(239,68,68,0.15)', borderColor: 'rgba(248,113,113,0.3)', color: '#f87171' }}>
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              Grade Curricular Completa
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 leading-tight" style={{ color: '#ffffff' }}>
              6 Partes.{' '}
              <span style={{ color: '#f87171' }}>{totalTopicos} Tópicos.</span>{' '}
              Diagnóstico de Elite.
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
              Clique em cada parte para explorar os tópicos. Clique em um tópico para acessar o conteúdo completo da aula.
            </p>
          </motion.div>

          {/* Accordion Parts */}
          <div className="space-y-4">
            {cursoTVRProCO380V.partes.map((parte, pIdx) => {
              const isOpen = openParte === parte.id;
              const pc = PART_COLORS[pIdx % PART_COLORS.length];
              const IconComp = getIconComponent(parte.icone);

              return (
                <motion.div
                  key={parte.id}
                  variants={staggerItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden border transition-all duration-300"
                  style={{
                    backgroundColor: isOpen ? 'rgba(15,23,42,0.95)' : 'rgba(30,41,59,0.6)',
                    borderColor: isOpen ? pc.border : 'rgba(51,65,85,0.5)',
                  }}
                >
                  {/* Part Header (clickable) */}
                  <button
                    onClick={() => toggleParte(parte.id)}
                    className="w-full flex items-center gap-4 p-6 text-left hover:bg-white/5 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: pc.bg, color: pc.accent, border: `1px solid ${pc.border}` }}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold truncate" style={{ color: '#f1f5f9' }}>
                        {parte.titulo}
                      </h3>
                      <p className="text-xs mt-1 truncate" style={{ color: '#64748b' }}>
                        {parte.topicos.length} tópico{parte.topicos.length > 1 ? 's' : ''} · {parte.topicos.reduce((acc, t) => acc + parseInt(t.tempo_estimado), 0)} min estimados
                      </p>
                    </div>
                    <div style={{ color: pc.accent }} className="flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Expanded Topics */}
                  {isOpen && (
                    <div className="px-6 pb-6 space-y-3">
                      {parte.topicos.map((topico) => {
                        const ls = LEVEL_STYLES[topico.nivel] || LEVEL_STYLES.basico;
                        const hasLessonContent = topico.conteudo_html && topico.conteudo_html.trim() !== '';

                        return (
                          <button
                            key={topico.id}
                            onClick={() => openTopic(topico)}
                            className={`w-full text-left rounded-xl border p-5 transition-all duration-200 cursor-pointer group ${
                              hasLessonContent
                                ? 'hover:border-white/30 hover:bg-white/5'
                                : 'hover:border-slate-600'
                            }`}
                            style={{ backgroundColor: 'rgba(15,23,42,0.7)', borderColor: 'rgba(51,65,85,0.4)' }}
                          >
                            {/* Topic Header */}
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: pc.accent }} aria-hidden="true" />
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: pc.accent }}>
                                    Tópico {topico.id}
                                  </span>
                                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${ls.bg} ${ls.border} ${ls.text} border`}>
                                    {ls.label}
                                  </span>
                                  <span className="inline-flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                                    <Clock className="w-3 h-3" />
                                    {topico.tempo_estimado}
                                  </span>
                                </div>
                                <h4 className="text-sm md:text-base font-semibold mt-0.5 group-hover:text-white transition-colors" style={{ color: '#e2e8f0' }}>
                                  {topico.titulo}
                                </h4>
                              </div>

                              {/* Arrow indicator */}
                              <ChevronRight
                                className="w-4 h-4 mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5"
                                style={{ color: pc.accent }}
                              />
                            </div>

                            {/* Description */}
                            <p className="text-xs leading-relaxed ml-5 mb-3" style={{ color: '#94a3b8' }}>
                              {topico.descricao}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 ml-5">
                              {topico.tags.slice(0, 6).map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium"
                                  style={{
                                    backgroundColor: 'rgba(51,65,85,0.4)',
                                    color: '#64748b',
                                    border: '1px solid rgba(51,65,85,0.6)',
                                  }}
                                >
                                  <Tag className="w-2.5 h-2.5" />
                                  {tag}
                                </span>
                              ))}
                              {topico.tags.length > 6 && (
                                <span className="text-[10px] text-slate-600 self-center">+{topico.tags.length - 6}</span>
                              )}
                            </div>

                            {/* Status indicator */}
                            <div className="flex items-center gap-2 mt-3 ml-5">
                              {hasLessonContent ? (
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400">
                                  <CheckCircle2 className="w-3 h-3" />
                                  Conteúdo disponível — clique para acessar
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-600 italic">
                                  <FileText className="w-3 h-3" />
                                  Conteúdo em preparação
                                </span>
                              )}
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

          {/* Bottom credit bar */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border"
            style={{ backgroundColor: 'rgba(30,41,59,0.6)', borderColor: 'rgba(51,65,85,0.5)' }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(239,68,68,0.15)', border: '1px solid rgba(248,113,113,0.3)' }}>
              <GraduationCap className="w-5 h-5" style={{ color: '#f87171' }} />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold" style={{ color: '#ffffff' }}>Simon Climatização</span>
              <span className="text-xs" style={{ color: '#94a3b8' }}>Engenharia Térmica de Alta Performance</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          4. TABELA DE REFERÊNCIA RÁPIDA
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 md:px-12 bg-white border-t border-slate-200"
        aria-label="Tabela de referência rápida — parâmetros críticos"
      >
        <div className="max-w-5xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase mb-5">
              Referência Rápida
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
              Parâmetros Críticos do Treinamento
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Valores que todo técnico precisa ter na ponta da língua.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left py-4 px-6 font-bold text-slate-900 uppercase tracking-wider text-xs">Parâmetro</th>
                  <th className="text-left py-4 px-6 font-bold text-slate-900 uppercase tracking-wider text-xs">Valor</th>
                  <th className="text-left py-4 px-6 font-bold text-slate-900 uppercase tracking-wider text-xs hidden md:table-cell">Contexto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['Faixa de capacidade ODU', '8 – 90 HP', 'Módulo único a 3 módulos'],
                  ['Refrigerante', 'R-410A', 'Cooling Only (código Y)'],
                  ['DC Bus — Compressor', '450 – 650V DC', 'Módulo inversor'],
                  ['DC Bus — Fan', '540V DC', 'Fan module'],
                  ['Modo diodo — Forward', '0,35 – 0,70V', 'IPM e retificador OK'],
                  ['Modo diodo — Reverse', 'OL (Open)', 'Bloqueio normal'],
                  ['R(P↔Q) rede RS-485', '≈60Ω', '2× 120Ω em paralelo'],
                  ['V bias P-Q', '200 – 500 mV DC', 'Comunicação saudável'],
                  ['Isolação compressor', '> 100 MΩ', 'Megger 500V'],
                  ['Velocidade riser', '≥ 1.500 FPM', 'Retorno de óleo'],
                  ['Vácuo mínimo', '500 microns', 'Evacuação obrigatória'],
                  ['T decomposição R410A', '> 250°C', 'Pirólise com NCGs'],
                  ['Óleo exclusivo', 'FV50S (PVE)', 'Idemitsu Daphne'],
                ].map(([param, valor, contexto], i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-6 font-medium text-slate-700">{param}</td>
                    <td className="py-3 px-6 font-bold text-slate-900">{valor}</td>
                    <td className="py-3 px-6 text-slate-500 hidden md:table-cell">{contexto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          5. CTA FINAL
      ════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 md:px-12 relative overflow-hidden"
        style={{ backgroundColor: '#0f172a' }}
        aria-label="Chamada para ação final"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-500/8 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 border border-red-400/30 text-red-300 text-xs font-bold tracking-widest uppercase mb-8">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            Está pronto para o próximo nível?
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6" style={{ color: '#ffffff' }}>
            Pare de Trocar Peças no Escuro.{' '}
            <span style={{ color: '#f87171' }}>
              Aprenda a Diagnosticar.
            </span>
          </h2>

          <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            Este treinamento é para técnicos que querem sair do achismo e dominar o diagnóstico de elite do TVR Pro CO 380V — com fluxogramas, valores de referência e ciência por trás de cada decisão.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511942163150?text=Olá! Quero acesso ao Treinamento TVR Pro CO 380V — Service Manual Avançado."
              target="_blank"
              rel="noopener noreferrer"
              id="final-cta-contato-380v"
              className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-400 active:bg-red-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-400/35 hover:-translate-y-0.5"
            >
              Quero Acesso ao Treinamento
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <Link
              to="/academia"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base hover:bg-white/5"
            >
              Ver Todos os Treinamentos
            </Link>
          </div>
        </motion.div>
      </section>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
