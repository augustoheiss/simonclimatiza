import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  GraduationCap,
  Gauge,
  Cpu,
  Play,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  FileText,
  Camera,
  Video,
  Wrench,
  PhoneCall,
} from 'lucide-react';
import {
  SIMON_PROFILE,
  SIMON_HIGHLIGHTS,
  SIMON_FIELD_POSTS,
  FIELD_CATEGORIES,
  getFieldProofsByServiceId,
} from '../../data/instagramSimonArchive';

// ─── Modal de Inspeção de Story / Publicação de Campo ──────────────────────────
function MediaInspectorModal({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const [showVideo, setShowVideo] = useState(Boolean(item?.videoUrl));

  useEffect(() => {
    setShowVideo(Boolean(item?.videoUrl));
  }, [item]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    if (!item) return undefined;
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, handleKeyDown]);

  if (!item) return null;

  const isHighlight = Boolean(item.slideImage);
  const displayImage = isHighlight ? item.slideImage : item.imageUrl;
  const displayTitle = item.title;
  const displayDescription = isHighlight ? item.technicalSummary : item.caption;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Registro de campo: ${displayTitle}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]"
        >
          {/* Coluna Esquerda: Mídia (Vídeo .mp4 ou Foto HD) */}
          <div className="lg:col-span-7 bg-slate-950 flex flex-col items-center justify-center relative min-h-[320px] max-h-[55vh] lg:max-h-[90vh] overflow-hidden">
            {showVideo && item.videoUrl ? (
              <video
                key={item.videoUrl}
                src={item.videoUrl}
                poster={displayImage}
                controls
                autoPlay
                playsInline
                className="w-full h-full max-h-[55vh] lg:max-h-[85vh] object-contain"
              />
            ) : (
              <img
                src={displayImage}
                alt={displayTitle}
                className="w-full h-full max-h-[55vh] lg:max-h-[85vh] object-contain"
              />
            )}

            {/* Alternador Vídeo / Foto quando houver vídeo */}
            {item.videoUrl && (
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-full p-1">
                <button
                  type="button"
                  onClick={() => setShowVideo(true)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                    showVideo
                      ? 'bg-sky-500 text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Video className="w-3.5 h-3.5" aria-hidden="true" />
                  Vídeo Original
                </button>
                <button
                  type="button"
                  onClick={() => setShowVideo(false)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                    !showVideo
                      ? 'bg-sky-500 text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Camera className="w-3.5 h-3.5" aria-hidden="true" />
                  Frame HD
                </button>
              </div>
            )}

            {/* Botões Anterior / Próximo */}
            {hasPrev && (
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-sky-500 text-white border border-slate-700 flex items-center justify-center transition-colors shadow-lg"
                aria-label="Registro anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {hasNext && (
              <button
                type="button"
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-sky-500 text-white border border-slate-700 flex items-center justify-center transition-colors shadow-lg"
                aria-label="Próximo registro"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Coluna Direita: Contexto Técnico, Legenda & Transcrição OCR */}
          <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto text-slate-100 bg-slate-900">
            <div>
              {/* Topo do Modal */}
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <img
                    src={SIMON_PROFILE.avatarUrl}
                    alt={SIMON_PROFILE.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-sky-400"
                  />
                  <div>
                    <span className="block text-sm font-bold text-white">
                      {SIMON_PROFILE.handle}
                    </span>
                    <span className="block text-xs text-sky-400 font-medium">
                      {isHighlight ? 'Story Destacado Oficial' : 'Registro Técnico de Campo'} •{' '}
                      {item.date}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Fechar janela"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Badge de Instrumento */}
              {item.instrumentBadge && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold mb-4">
                  <Gauge className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" aria-hidden="true" />
                  {item.instrumentBadge}
                </div>
              )}

              <h3 className="text-xl font-extrabold text-white leading-snug mb-4">
                {displayTitle}
              </h3>

              {/* Explicação / Legenda */}
              <div className="mb-5">
                <span className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                  Contexto de Engenharia & Legenda
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {displayDescription}
                </p>
              </div>

              {/* Transcrição Visual (OCR) das Telas e Textos Escritos na Imagem */}
              {item.visualTextOcr && (
                <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-4 mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">
                    <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                    Leitura Visual Extraída da Imagem / Visor (OCR)
                  </div>
                  <p className="text-xs font-mono text-slate-300 leading-relaxed whitespace-pre-line">
                    {item.visualTextOcr}
                  </p>
                </div>
              )}
            </div>

            {/* Rodapé do Modal */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <a
                href={SIMON_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold px-4 py-3 rounded-xl transition-colors shadow-lg shadow-sky-500/20"
              >
                <PhoneCall className="w-4 h-4" aria-hidden="true" />
                Falar com Simon: {SIMON_PROFILE.phoneDisplay}
              </a>

              {item.permalink && (
                <a
                  href={item.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-sky-400 px-3 py-2 transition-colors"
                >
                  Ver no Instagram
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Subcomponente Contextual para DetalheServico (/servicos -> card clicado) ─
export function ProvasDeCampoServico({ serviceId, serviceTitle }) {
  const { highlights, posts } = getFieldProofsByServiceId(serviceId);
  const [modalItem, setModalItem] = useState(null);

  if (highlights.length === 0 && posts.length === 0) return null;

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-7 md:p-9 mb-10 border border-slate-800 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-7 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            Acervo Real @simonclimatiza em Campo
          </div>
          <h3 className="text-2xl font-extrabold text-white">
            Bastidores Reais: {serviceTitle}
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Clique nos Stories ou nas fotografias de diagnóstico abaixo para inspecionar os vídeos e leituras reais de instrumentos executados por Simon.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3 flex-shrink-0">
          <img
            src={SIMON_PROFILE.avatarUrl}
            alt={SIMON_PROFILE.name}
            className="w-11 h-11 rounded-full object-cover border-2 border-sky-400"
            loading="lazy"
          />
          <div>
            <span className="block text-xs font-bold text-sky-400 uppercase tracking-wider">
              Especialista Responsável
            </span>
            <span className="block text-sm font-bold text-white">
              Simon • 21 Anos na Área
            </span>
            <span className="block text-xs text-slate-400">
              Instrutor & Especialista HVAC-R
            </span>
          </div>
        </div>
      </div>

      {/* Stories Relacionados */}
      {highlights.length > 0 && (
        <div className="mb-8">
          <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Stories Destacados deste Serviço ({highlights.length})
          </span>
          <div className="flex flex-wrap gap-4">
            {highlights.map((hl) => (
              <button
                key={hl.id}
                type="button"
                onClick={() => setModalItem(hl)}
                className="group flex items-center gap-3 bg-slate-950/90 hover:bg-slate-800/90 border border-slate-800 hover:border-sky-400/60 rounded-2xl p-3 pr-5 text-left transition-all duration-200"
              >
                <div className="relative w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-sky-500 to-teal-400 flex-shrink-0">
                  <img
                    src={hl.coverImage}
                    alt={hl.title}
                    className="w-full h-full rounded-full object-cover border-2 border-slate-950"
                    loading="lazy"
                  />
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-md">
                    <Play className="w-3 h-3 fill-current" />
                  </span>
                </div>
                <div>
                  <span className="block text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                    {hl.title}
                  </span>
                  <span className="block text-xs text-sky-400 font-medium">
                    {hl.instrumentBadge}
                  </span>
                  <span className="block text-[11px] text-slate-400 mt-0.5">
                    Assistir vídeo + leitura OCR
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid de Publicações Relacionadas */}
      {posts.length > 0 && (
        <div>
          <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Relatórios Visuais e Leituras de Instrumentos ({posts.length})
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.slice(0, 6).map((post) => (
              <button
                key={post.id}
                type="button"
                onClick={() => setModalItem(post)}
                className="group text-left bg-slate-950/80 border border-slate-800 hover:border-sky-500/60 rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-2.5 left-2.5 right-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-[11px] font-bold text-sky-300 truncate">
                    <Gauge className="w-3 h-3 text-sky-400 flex-shrink-0" />
                    {post.instrumentBadge}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2 mb-1.5">
                      {post.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {post.caption}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-400 uppercase tracking-wider mt-3">
                    <Eye className="w-3.5 h-3.5" />
                    Inspecionar Leitura OCR
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <MediaInspectorModal
        item={modalItem}
        onClose={() => setModalItem(null)}
        hasPrev={false}
        hasNext={false}
      />
    </div>
  );
}

// ─── Seção Principal: Sobre o Especialista & Bastidores de Campo ──────────────
export default function SobreSimonSection() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos');
  const [modalState, setModalState] = useState({ list: [], index: -1 });

  const postsFiltrados =
    categoriaAtiva === 'todos'
      ? SIMON_FIELD_POSTS
      : SIMON_FIELD_POSTS.filter((post) => post.category === categoriaAtiva);

  const openModalFromList = (list, index) => {
    setModalState({ list, index });
  };

  const closeModal = () => {
    setModalState({ list: [], index: -1 });
  };

  const prevModalItem = () => {
    setModalState((prev) => ({
      ...prev,
      index: prev.index > 0 ? prev.index - 1 : prev.index,
    }));
  };

  const nextModalItem = () => {
    setModalState((prev) => ({
      ...prev,
      index:
        prev.index < prev.list.length - 1 ? prev.index + 1 : prev.index,
    }));
  };

  const currentModalItem =
    modalState.index >= 0 && modalState.index < modalState.list.length
      ? modalState.list[modalState.index]
      : null;

  return (
    <section
      id="sobre-especialista"
      className="py-24 px-6 md:px-12 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800"
      aria-label="Sobre o Especialista Simon Climatiza — 21 Anos de Engenharia em Campo e Docência"
    >
      {/* Grade de Engenharia de Fundo */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-25 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 right-0 w-[650px] h-[650px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ════════════════════════════════════════════════════════════════════
            BLOCO 1: QUEM É SIMON (21 ANOS NA ÁREA + INSTRUTOR SENAI)
        ════════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Coluna Esquerda (7 cols): Bio, Credenciais e Arsenal de Instrumentos */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-widest uppercase mb-6">
              <Award className="w-4 h-4 text-sky-400" aria-hidden="true" />
              Quem Está Por Trás da Engenharia • Sobre Mim
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.12] mb-6 text-white">
              21 Anos em Campo &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-400">
                Docência Técnica em Climatização.
              </span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {SIMON_PROFILE.summaryText}
            </p>

            {/* Card Oficial da Bio @simonclimatiza */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 mb-8 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-sky-400 via-cyan-400 to-teal-400 flex-shrink-0">
                    <img
                      src={SIMON_PROFILE.avatarUrl}
                      alt={SIMON_PROFILE.name}
                      className="w-full h-full rounded-full object-cover border-2 border-slate-950"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-extrabold text-white">
                        {SIMON_PROFILE.name}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold">
                        {SIMON_PROFILE.handle}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {SIMON_PROFILE.category} • São Paulo & Grande SP
                    </p>
                  </div>
                </div>

                <a
                  href={SIMON_PROFILE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors self-start sm:self-auto"
                >
                  Perfil Oficial
                  <ExternalLink className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                </a>
              </div>

              {/* Bio bullets originais */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {SIMON_PROFILE.bioBullets.map((line, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 bg-slate-950/70 border border-slate-800/80 rounded-xl px-4 py-3 text-sm font-semibold text-slate-200"
                  >
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              {/* 4 Pilares Numéricos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SIMON_PROFILE.authorityPillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="bg-slate-950 border border-slate-800/90 rounded-2xl p-3.5"
                  >
                    <span className="block text-xl font-black text-sky-400 leading-none mb-1">
                      {pillar.stat}
                    </span>
                    <span className="block text-xs font-bold text-white mb-1">
                      {pillar.label}
                    </span>
                    <span className="block text-[11px] text-slate-400 leading-snug">
                      {pillar.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instrumentação Digital Comprovada nas Fotos */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">
                <Cpu className="w-4 h-4" aria-hidden="true" />
                Instrumentação Digital & Softwares de Diagnóstico Utilizados em Campo
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SIMON_PROFILE.instrumentsUsed.map((inst, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-slate-300"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-sky-400 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{inst}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Direita (5 cols): Mosaico Real de Simon no SENAI Suíço-Brasileira & Bancada */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">
                <GraduationCap className="w-4 h-4" aria-hidden="true" />
                Simon em Ação: Docência no SENAI Suíço & Laboratório
              </div>

              {/* Foto Principal: Simon com Jaleco SENAI */}
              <div className="relative rounded-2xl overflow-hidden mb-4 border border-slate-800 group">
                <img
                  src={SIMON_PROFILE.instructorHighlights[0].imageUrl}
                  alt={SIMON_PROFILE.instructorHighlights[0].title}
                  className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-sky-500 text-white text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    {SIMON_PROFILE.instructorHighlights[0].badge}
                  </span>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {SIMON_PROFILE.instructorHighlights[0].title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {SIMON_PROFILE.instructorHighlights[0].subtitle}
                  </p>
                </div>
              </div>

              {/* 2 Fotos Secundárias: Turma SENAI + Bancada Samsung Inverter */}
              <div className="grid grid-cols-2 gap-3.5">
                {SIMON_PROFILE.instructorHighlights.slice(1).map((card) => (
                  <div
                    key={card.id}
                    className="relative rounded-2xl overflow-hidden border border-slate-800 group h-44"
                  >
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="inline-block px-2 py-0.5 rounded bg-teal-500/90 text-slate-950 text-[10px] font-extrabold uppercase mb-1">
                        {card.badge}
                      </span>
                      <p className="text-xs font-bold text-white leading-tight line-clamp-2">
                        {card.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Quem ensina domina a norma técnica.</span>
                <span className="text-sky-400 font-bold">
                  SENAI Suíço-Brasileira • SP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            BLOCO 2: OS 9 STORIES DESTACADOS GUARDADOS (@simonclimatiza)
        ════════════════════════════════════════════════════════════════════ */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-7 md:p-9 mb-16 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-400 mb-2">
                <Video className="w-4 h-4" aria-hidden="true" />
                9 Stories Destacados Guardados (Foto HD + Vídeo .MP4 + OCR)
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                Destaques Reais de Campo no Instagram
              </h3>
            </div>
            <p className="text-xs md:text-sm text-slate-400 max-w-md">
              Clique em qualquer círculo abaixo para assistir ao vídeo original do Story e ler a transcrição técnica das telas dos equipamentos.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {SIMON_HIGHLIGHTS.map((hl, index) => (
              <button
                key={hl.id}
                type="button"
                onClick={() => openModalFromList(SIMON_HIGHLIGHTS, index)}
                className="group flex flex-col items-center text-center p-3 rounded-2xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800/80 hover:border-sky-400/60 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label={`Abrir Story Destacado: ${hl.title}`}
              >
                <div className="relative w-16 h-16 md:w-18 md:h-18 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-sky-500 to-teal-400 mb-3 group-hover:scale-105 transition-transform">
                  <img
                    src={hl.coverImage}
                    alt={hl.title}
                    className="w-full h-full rounded-full object-cover border-2 border-slate-950"
                    loading="lazy"
                  />
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-md">
                    <Play className="w-3 h-3 fill-current" />
                  </span>
                </div>
                <span className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                  {hl.title}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  {hl.date}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            BLOCO 3: GALERIA DE PROVAS REAIS DE CAMPO & LEITURAS DE INSTRUMENTOS
        ════════════════════════════════════════════════════════════════════ */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-400 mb-2">
                <Wrench className="w-4 h-4" aria-hidden="true" />
                Diário de Obra & Telemetria Comprovada
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white">
                Provas Reais de Execução em Campo
              </h3>
            </div>

            {/* Abas de Filtro por Especialidade */}
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filtrar registros de campo por categoria"
            >
              {FIELD_CATEGORIES.map((cat) => {
                const isActive = categoriaAtiva === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setCategoriaAtiva(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid de Cards Reais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postsFiltrados.map((post, idx) => (
              <div
                key={post.id}
                onClick={() => openModalFromList(postsFiltrados, idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModalFromList(postsFiltrados, idx);
                  }
                }}
                role="button"
                tabIndex={0}
                className="group bg-slate-900 border border-slate-800 hover:border-sky-500/60 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-900/20 cursor-pointer"
              >
                <div>
                  {/* Imagem + Badge de Instrumento */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {post.videoUrl && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-500 text-white text-[11px] font-bold shadow-lg">
                        <Play className="w-3 h-3 fill-current" />
                        Reel (.MP4)
                      </span>
                    )}

                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/95 backdrop-blur-md border border-slate-700 text-xs font-bold text-sky-300 max-w-full truncate">
                        <Gauge className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                        <span className="truncate">{post.instrumentBadge}</span>
                      </span>
                    </div>
                  </div>

                  {/* Corpo do Card */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span>{SIMON_PROFILE.handle}</span>
                      <span>{post.date}</span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors leading-snug mb-2.5">
                      {post.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                      {post.caption}
                    </p>

                    {/* Preview do OCR */}
                    {post.visualTextOcr && (
                      <div className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-3">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-teal-400 mb-1">
                          Texto / Leitura na Imagem (OCR):
                        </span>
                        <p className="text-[11px] font-mono text-slate-400 line-clamp-2">
                          {post.visualTextOcr}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Rodapé do Card */}
                <div className="px-6 pb-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-sky-400 group-hover:text-sky-300">
                  <span className="inline-flex items-center gap-1.5">
                    <Eye className="w-4 h-4" />
                    Abrir foto HD e leitura completa
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de Inspeção */}
      <MediaInspectorModal
        item={currentModalItem}
        onClose={closeModal}
        onPrev={prevModalItem}
        onNext={nextModalItem}
        hasPrev={modalState.index > 0}
        hasNext={modalState.index < modalState.list.length - 1}
      />
    </section>
  );
}
