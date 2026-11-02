import React, { useState, useMemo } from 'react';
import {
  Award,
  CheckCircle2,
  Play,
  Film,
  Image as ImageIcon,
  ShieldCheck,
  GraduationCap,
  Wrench,
  Gauge,
  Sparkles,
  ExternalLink,
  X,
  ChevronRight,
  Layers,
  Filter,
  Instagram,
  Eye
} from 'lucide-react';
import {
  SIMON_PROFILE,
  SIMON_HIGHLIGHTS,
  FIELD_CATEGORIES,
  SIMON_FIELD_POSTS,
  getFieldProofsByServiceId
} from '../../data/instagramSimonArchive';
import {
  SimonActionGate,
  useSimonActionGate
} from '../ui/SimonActionGate';
import certBg from '../../assets/fundo-certificado.png';

/**
 * Modal de Inspeção de Mídia (Vídeo MP4 / Imagem HD + Legenda Original + OCR Técnico)
 * Tema: Cristal Glacial & Prancheta do Certificado
 */
function MediaInspectorModal({ item, onClose }) {
  if (!item) return null;

  const isVideo = Boolean(item.videoUrl);
  const imgSrc = item.slideImage || item.imageUrl || item.coverImage;
  const title = item.title;
  const badge = item.instrumentBadge || item.category;
  const caption = item.caption || item.technicalSummary;
  const ocr = item.visualTextOcr;

  return (
    <div
      className="fixed inset-0 z-[110] bg-sky-950/45 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white border-2 border-[#1a3a5c]/80 rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(12,74,110,0.28)] grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-sky-50 text-[#1a3a5c] border-2 border-sky-200 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
          aria-label="Fechar visualização"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Mídia (7 colunas) */}
        <div className="lg:col-span-7 bg-gradient-to-br from-sky-100/80 via-sky-50 to-white border-b lg:border-b-0 lg:border-r-2 border-sky-200 flex items-center justify-center min-h-[280px] sm:min-h-[420px] max-h-[55vh] lg:max-h-[85vh] overflow-hidden relative p-3">
          {isVideo ? (
            <video
              src={item.videoUrl}
              poster={imgSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full max-h-[52vh] lg:max-h-[80vh] object-contain rounded-xl border border-sky-200 bg-slate-950 shadow-md"
            />
          ) : (
            <img
              src={imgSrc}
              alt={title}
              className="w-full h-full max-h-[52vh] lg:max-h-[80vh] object-contain rounded-xl border border-sky-200 bg-white shadow-md"
            />
          )}
        </div>

        {/* Detalhes Técnicos + Legenda + OCR (5 colunas) */}
        <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between overflow-y-auto max-h-[35vh] lg:max-h-[85vh] bg-gradient-to-b from-sky-50/60 via-white to-sky-50/40 text-slate-900">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-extrabold uppercase tracking-wider bg-sky-100 text-[#0369a1] border border-sky-300">
                {badge}
              </span>
              {(item.shortcode || item.date) && (
                <span className="text-xs font-mono font-bold text-slate-500">
                  {item.shortcode ? `#${item.shortcode} • ` : ''}
                  {item.date}
                </span>
              )}
            </div>

            <h3 className="text-xl font-extrabold text-[#1a3a5c] mb-4 leading-snug">
              {title}
            </h3>

            {caption && (
              <div className="mb-5">
                <span className="block text-[11px] font-mono uppercase tracking-widest text-[#0369a1] font-extrabold mb-1.5">
                  Descrição Técnica &amp; Legenda (@simonclimatiza)
                </span>
                <div className="p-3.5 rounded-2xl bg-white border border-sky-200 text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-2xs">
                  {caption}
                </div>
              </div>
            )}

            {ocr && (
              <div className="mb-5">
                <span className="block text-[11px] font-mono uppercase tracking-widest text-amber-800 font-extrabold mb-1.5">
                  Inspeção Visual &amp; Leitura Técnica (OCR)
                </span>
                <div className="p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200 text-slate-800 text-xs leading-relaxed font-medium">
                  {ocr}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-sky-200 flex items-center justify-between gap-3 mt-4">
            <a
              href={item.permalink || SIMON_PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0369a1] hover:text-[#1a3a5c] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Ver no {SIMON_PROFILE.handle}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#0369a1] hover:bg-[#0284c7] text-white text-xs font-extrabold transition-colors cursor-pointer"
            >
              Fechar Inspeção
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Sub-componente compacto para exibir provas reais de um serviço específico
 * dentro da bancada interativa de /servicos
 */
export function ProvasDeCampoServico({ servicoRef, tituloServico }) {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const {
    pendingAction,
    requestAction,
    confirmAction,
    cancelAction,
    directMode,
    setDirectMode
  } = useSimonActionGate();

  const provas = useMemo(() => {
    const { highlights, posts } = getFieldProofsByServiceId(servicoRef);
    return [...highlights, ...posts].slice(0, 6);
  }, [servicoRef]);

  if (!provas.length) return null;

  return (
    <div>
      <SimonActionGate
        action={pendingAction}
        onConfirm={confirmAction}
        onCancel={cancelAction}
        directMode={directMode}
        onToggleDirectMode={setDirectMode}
      />

      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0369a1]">
          <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
          Provas Reais de Campo ({SIMON_PROFILE.handle}) — {tituloServico}
        </span>
        <span className="text-[11px] text-slate-500 font-semibold">
          Clique para inspecionar e confirmar abertura
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {provas.map((item) => {
          const isVideo = Boolean(item.videoUrl);
          const thumb = item.slideImage || item.imageUrl || item.coverImage;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                requestAction({
                  code: isVideo ? 'VID-MP4' : 'IMG-OCR',
                  category: `Prova Real de Campo · ${tituloServico || item.instrumentBadge}`,
                  title: item.title,
                  subtitle: `${item.instrumentBadge} (${item.date})`,
                  description:
                    item.caption ||
                    item.technicalSummary ||
                    item.visualTextOcr,
                  highlights: [
                    isVideo
                      ? 'Reprodução de Vídeo Técnico MP4 Original'
                      : 'Fotografia Técnica em Alta Resolução',
                    'Transcrição da Legenda Original do Instagram',
                    `OCR: ${(item.visualTextOcr || '').slice(0, 65)}...`
                  ],
                  confirmLabel: isVideo
                    ? 'Confirmar e Assistir Vídeo'
                    : 'Confirmar e Inspecionar Foto',
                  badgeColor: isVideo ? 'sky' : 'emerald',
                  meta: item.date,
                  onConfirm: () => setSelectedMedia(item)
                })
              }
              className="group relative rounded-xl overflow-hidden border-2 border-sky-200 bg-white aspect-4/3 text-left focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-xs hover:border-[#0284c7] transition-all cursor-pointer"
              title={item.title}
            >
              <img
                src={thumb}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c]/90 via-[#1a3a5c]/25 to-transparent flex flex-col justify-end p-2.5">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span className="px-1.5 py-0.5 rounded bg-sky-500/90 text-white text-[9px] font-mono font-bold uppercase truncate">
                    {item.instrumentBadge}
                  </span>
                  {isVideo && (
                    <span className="w-5 h-5 rounded-full bg-white/95 text-[#0369a1] flex items-center justify-center shrink-0 shadow">
                      <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                    </span>
                  )}
                </div>
                <p className="text-[11px] font-bold text-white leading-tight line-clamp-2">
                  {item.title}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <MediaInspectorModal
        item={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </div>
  );
}

/**
 * Seção "Sobre o Especialista & Bastidores Reais (@simonclimatiza)"
 * Suporta:
 * - mode="especialista" -> Exibe apenas o Bloco 1 (21 anos + SENAI + Instrumentação) para Zero-Scroll
 * - mode="provas" -> Exibe os 9 Stories + 28 Provas de Campo em sub-abas sem rolagem longa
 * - mode="completo" -> Exibe tudo
 */
export default function SobreSimonSection({ mode = 'completo' }) {
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos');
  const [storyAtivo, setStoryAtivo] = useState(SIMON_HIGHLIGHTS[0]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [subAbaProvas, setSubAbaProvas] = useState('acervo'); // 'acervo' | 'stories'

  const {
    pendingAction,
    requestAction,
    confirmAction,
    cancelAction,
    directMode,
    setDirectMode
  } = useSimonActionGate();

  const postsFiltrados = useMemo(() => {
    if (categoriaAtiva === 'todos') return SIMON_FIELD_POSTS;
    return SIMON_FIELD_POSTS.filter((post) => post.category === categoriaAtiva);
  }, [categoriaAtiva]);

  const fotosDocencia = useMemo(
    () => SIMON_FIELD_POSTS.filter((p) => p.category === 'docencia-senai'),
    []
  );

  const showEspecialista = mode === 'completo' || mode === 'especialista';
  const showProvas = mode === 'completo' || mode === 'provas';

  return (
    <section
      id="sobre-simon-especialista"
      className="relative py-5 sm:py-7 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-sky-50/70 via-white to-sky-50/50 text-slate-900 overflow-hidden"
      aria-label="Sobre o Especialista Simon Climatiza e Acervo Técnico de Campo"
    >
      {/* Textura sutil do Certificado */}
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url(${certBg})` }}
      />

      {/* Modal Sekundo de Inspeção e Confirmação */}
      <SimonActionGate
        action={pendingAction}
        onConfirm={confirmAction}
        onCancel={cancelAction}
        directMode={directMode}
        onToggleDirectMode={setDirectMode}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-6">
        {/* ═══════════════════════════════════════════════════════════════════════
            BLOCO 1: QUEM É SIMON — 21 ANOS DE CAMPO & INSTRUTOR SENAI (TEMA CLARO CERTIFICADO)
        ═══════════════════════════════════════════════════════════════════════ */}
        {showEspecialista && (
          <div className="rounded-3xl bg-white border-2 border-[#1a3a5c]/80 p-1.5 shadow-xl shadow-sky-900/5">
            <div className="rounded-2xl border border-sky-300/90 bg-gradient-to-br from-sky-50/80 via-white to-sky-50/50 p-5 sm:p-7">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Coluna Esquerda: Perfil Oficial + Bio + Credenciais (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-[#0369a1] text-xs font-extrabold uppercase tracking-widest">
                    <Award className="w-3.5 h-3.5 text-[#0284c7]" />
                    Sobre o Especialista &bull; Direto do Campo
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <img
                      src={SIMON_PROFILE.avatarUrl}
                      alt={SIMON_PROFILE.name}
                      className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-[#0284c7] shadow-md bg-white shrink-0"
                    />
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-[#1a3a5c]">
                          {SIMON_PROFILE.name}
                        </h2>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-extrabold">
                          {SIMON_PROFILE.handle}
                        </span>
                      </div>
                      <p className="text-[#0369a1] font-extrabold text-xs sm:text-sm mt-1">
                        {SIMON_PROFILE.summaryHeadline}
                      </p>
                      <p className="text-slate-600 text-xs mt-0.5 font-medium">
                        {SIMON_PROFILE.category} &bull; {SIMON_PROFILE.phoneDisplay}
                      </p>
                    </div>
                  </div>

                  {/* Bio Oficial */}
                  <blockquote className="p-4 rounded-2xl bg-white border-2 border-sky-200 text-slate-700 text-xs sm:text-sm leading-relaxed shadow-2xs space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {SIMON_PROFILE.bioBullets.map((b, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200 text-[#1a3a5c] text-xs font-bold"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-600 pt-1">{SIMON_PROFILE.summaryText}</p>
                  </blockquote>

                  {/* 4 Pilares de Autoridade do Especialista */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SIMON_PROFILE.authorityPillars.map((pilar, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-white border border-sky-200 hover:border-[#0284c7] transition-colors shadow-2xs"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded bg-sky-100 border border-sky-300 text-[#0369a1] text-xs font-mono font-black">
                            {pilar.stat}
                          </span>
                          <h3 className="font-extrabold text-xs sm:text-sm text-[#1a3a5c] truncate">
                            {pilar.label}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {pilar.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coluna Direita: Mosaico Docente SENAI + Instrumentação (5 cols) */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-white border-2 border-sky-200 p-4 shadow-md space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#0369a1] flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-[#0284c7]" />
                        Docência SENAI &amp; Bancada (Clique p/ Inspecionar)
                      </span>
                      <span className="text-[11px] font-bold text-slate-500">
                        28 Provas Reais
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {fotosDocencia.slice(0, 4).map((post) => (
                        <button
                          key={post.id}
                          type="button"
                          onClick={() =>
                            requestAction({
                              code: 'DOC-SENAI',
                              category: 'Registro Oficial · Docência & Formação Técnica',
                              title: post.title,
                              subtitle: `Publicação ${SIMON_PROFILE.handle} (#${post.shortcode})`,
                              description: post.caption,
                              highlights: [
                                'Fotografia Original em Alta Definição',
                                'Legenda Oficial Publicada no Instagram',
                                `OCR: ${(post.visualTextOcr || '').slice(0, 65)}...`
                              ],
                              confirmLabel: 'Confirmar e Ampliar Registro',
                              badgeColor: 'emerald',
                              meta: post.date,
                              onConfirm: () => setSelectedMedia(post)
                            })
                          }
                          className="group relative rounded-xl overflow-hidden border-2 border-sky-200 aspect-4/3 text-left focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                        >
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c]/90 via-[#1a3a5c]/20 to-transparent flex flex-col justify-end p-2.5">
                            <span className="text-[9px] font-mono font-extrabold uppercase text-sky-200 truncate">
                              {post.instrumentBadge}
                            </span>
                            <p className="text-xs font-bold text-white leading-tight line-clamp-2">
                              {post.title}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Arsenal de Instrumentos Digitais */}
                    <div className="p-3 rounded-xl bg-sky-50/80 border border-sky-200">
                      <span className="block text-[10px] font-mono font-black uppercase tracking-wider text-[#0369a1] mb-1.5">
                        Instrumentação Digital &amp; Softwares de Diagnóstico:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {SIMON_PROFILE.instrumentsUsed.slice(0, 6).map((inst, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-white border border-sky-200 text-[10px] font-bold text-[#1a3a5c]"
                          >
                            {inst}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-between gap-3">
                      <div className="text-xs text-slate-700 leading-snug font-medium">
                        <strong className="text-[#1a3a5c]">“Ser feliz fazendo o que ama!”</strong>{' '}
                        — Formando profissionais e entregando engenharia térmica.
                      </div>
                      <a
                        href={SIMON_PROFILE.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 px-3 py-1.5 rounded-lg bg-[#0369a1] hover:bg-[#0284c7] text-white text-xs font-extrabold transition-colors inline-flex items-center gap-1 shadow-xs"
                      >
                        <span>{SIMON_PROFILE.handle}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════════
            BLOCO 2 & 3: STORIES GUARDADOS E 28 PROVAS DE CAMPO (TEMA CLARO CERTIFICADO)
        ═══════════════════════════════════════════════════════════════════════ */}
        {showProvas && (
          <div className="rounded-3xl bg-white border-2 border-[#1a3a5c]/80 p-1.5 shadow-xl shadow-sky-900/5">
            <div className="rounded-2xl border border-sky-300/90 bg-gradient-to-b from-sky-50/70 via-white to-sky-50/40 p-4 sm:p-6 space-y-5">
              {/* Sub-barra de comando para alternar entre as 28 Provas de Campo e os 9 Stories sem rolar a página */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-sky-200">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#0369a1] font-extrabold block">
                    Acervo Técnico Verificado ({SIMON_PROFILE.handle})
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#1a3a5c]">
                    Bastidores de Engenharia: 28 Provas de Campo &amp; 9 Destaques de Stories em Vídeo
                  </h3>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={() =>
                      requestAction({
                        isAlreadyActive: subAbaProvas === 'acervo',
                        code: 'ACV-28',
                        category: 'Bancada de Provas Reais (@simonclimatiza)',
                        title: 'Galeria Interativa: 28 Trabalhos, Legendas e Textos OCR',
                        description:
                          'Exibe a grade filtrável com todas as 28 publicações técnicas do Simon: VRF/VRV, Chillers, Instrumentação Testo, PMOC e Aulas no SENAI.',
                        highlights: [
                          'Filtro por Categorias de Engenharia',
                          'Transcrição Integral de Legendas e Leitura OCR',
                          'Inspeção Fotográfica em Alta Definição'
                        ],
                        confirmLabel: 'Abrir 28 Provas de Campo',
                        badgeColor: 'sky',
                        onConfirm: () => setSubAbaProvas('acervo')
                      })
                    }
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                      subAbaProvas === 'acervo'
                        ? 'bg-[#0369a1] text-white border-[#1a3a5c] shadow-sm'
                        : 'bg-white text-[#1a3a5c] border-sky-200 hover:bg-sky-50'
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>1. 28 Provas de Campo (Fotos &amp; OCR)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      requestAction({
                        isAlreadyActive: subAbaProvas === 'stories',
                        code: 'STR-09',
                        category: 'Destaques Salvos em Vídeo (@simonclimatiza)',
                        title: '9 Destaques de Stories Guardados (Vídeos MP4 + OCR)',
                        description:
                          'Abre o inspecionador interativo dos 9 Destaques de Stories salvos no perfil oficial da Simon Climatização, com vídeos MP4 originais.',
                        highlights: [
                          'VRV III Daikin, Micro Vazamento, Chiller York e Chillers Trane',
                          'Vácuo em VRF, Ar Condicionado (Testo 440), VRF LG e Serviços',
                          'Player de Vídeo MP4 Integrado + Transcrição OCR'
                        ],
                        confirmLabel: 'Abrir 9 Stories em Vídeo',
                        badgeColor: 'amber',
                        onConfirm: () => setSubAbaProvas('stories')
                      })
                    }
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                      subAbaProvas === 'stories'
                        ? 'bg-[#0369a1] text-white border-[#1a3a5c] shadow-sm'
                        : 'bg-white text-[#1a3a5c] border-sky-200 hover:bg-sky-50'
                    }`}
                  >
                    <Film className="w-3.5 h-3.5" />
                    <span>2. 9 Stories Guardados (Vídeos MP4)</span>
                  </button>
                </div>
              </div>

              {/* SUB-ABA 2: 9 STORIES GUARDADOS (COM VÍDEOS MP4) */}
              {subAbaProvas === 'stories' && (
                <div className="space-y-4">
                  {/* Carrossel de Bolinhas estilo Instagram Highlights em Tema Claro */}
                  <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                    {SIMON_HIGHLIGHTS.map((story) => {
                      const isSelected = storyAtivo?.id === story.id;
                      return (
                        <button
                          key={story.id}
                          type="button"
                          onClick={() =>
                            requestAction({
                              isAlreadyActive: isSelected,
                              code: 'STORY-MP4',
                              category: 'Destaque de Story Guardado (@simonclimatiza)',
                              title: `Story: ${story.title}`,
                              subtitle: `${story.instrumentBadge} • ${story.date}`,
                              description: story.technicalSummary,
                              highlights: [
                                'Vídeo MP4 Original do Story Salvo',
                                `Leitura OCR: ${story.visualTextOcr.slice(0, 70)}...`
                              ],
                              confirmLabel: `Carregar Story "${story.title}"`,
                              badgeColor: 'sky',
                              onConfirm: () => setStoryAtivo(story)
                            })
                          }
                          className="group flex flex-col items-center gap-1.5 shrink-0 focus:outline-none cursor-pointer"
                        >
                          <div
                            className={`p-1 rounded-full transition-all ${
                              isSelected
                                ? 'bg-gradient-to-tr from-[#0369a1] via-[#0284c7] to-amber-500 scale-105 shadow-md shadow-sky-500/20'
                                : 'bg-sky-100 hover:bg-sky-200 border border-sky-300'
                            }`}
                          >
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white bg-white">
                              <img
                                src={story.coverImage}
                                alt={story.title}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          </div>
                          <span
                            className={`text-xs font-extrabold tracking-tight ${
                              isSelected
                                ? 'text-[#0369a1]'
                                : 'text-slate-600 group-hover:text-[#1a3a5c]'
                            }`}
                          >
                            {story.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Painel de Detalhe do Story Selecionado com Vídeo MP4 */}
                  {storyAtivo && (
                    <div className="rounded-2xl bg-white border-2 border-sky-200 p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center shadow-sm">
                      <div className="md:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-[280px] aspect-9/16 max-h-[340px] rounded-2xl overflow-hidden border-2 border-[#0284c7] shadow-md bg-slate-950">
                          {storyAtivo.videoUrl ? (
                            <video
                              key={storyAtivo.videoUrl}
                              src={storyAtivo.videoUrl}
                              poster={storyAtivo.slideImage || storyAtivo.coverImage}
                              controls
                              playsInline
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <img
                              src={storyAtivo.slideImage || storyAtivo.coverImage}
                              alt={storyAtivo.title}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                      </div>

                      <div className="md:col-span-7 space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-[#0369a1] text-xs font-extrabold uppercase tracking-wider">
                            {storyAtivo.instrumentBadge}
                          </span>
                          <span className="text-xs text-slate-500 font-mono font-bold">
                            {storyAtivo.date} &bull; ID #{storyAtivo.highlightId}
                          </span>
                        </div>

                        <h4 className="text-lg sm:text-xl font-black text-[#1a3a5c]">
                          Destaque Oficial: {storyAtivo.title}
                        </h4>

                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                          {storyAtivo.technicalSummary}
                        </p>

                        <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200 text-xs text-slate-800 leading-relaxed">
                          <strong className="text-amber-900 font-mono uppercase text-[10px] block mb-1">
                            Texto Visual Extraído do Story (OCR):
                          </strong>
                          {storyAtivo.visualTextOcr}
                        </div>

                        <div className="pt-1">
                          <button
                            type="button"
                            onClick={() => setSelectedMedia(storyAtivo)}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0369a1] hover:bg-[#0284c7] text-white text-xs font-extrabold shadow-xs cursor-pointer"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Ampliar Vídeo em Tela Cheia</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* SUB-ABA 1: 28 PROVAS DE CAMPO FILTRÁVEIS */}
              {subAbaProvas === 'acervo' && (
                <div className="space-y-4">
                  {/* Filtros de Categoria com Confirmação Sekundo */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                    <span className="text-[10px] font-mono font-black uppercase text-[#1a3a5c] mr-1 flex items-center gap-1 shrink-0">
                      <Filter className="w-3.5 h-3.5 text-[#0284c7]" />
                      FILTRAR ACERVO:
                    </span>
                    {FIELD_CATEGORIES.map((cat) => {
                      const active = categoriaAtiva === cat.id;
                      const count =
                        cat.id === 'todos'
                          ? SIMON_FIELD_POSTS.length
                          : SIMON_FIELD_POSTS.filter((p) => p.category === cat.id).length;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() =>
                            requestAction({
                              isAlreadyActive: active,
                              code: `FLT-${cat.id.slice(0, 4).toUpperCase()}`,
                              category: 'Filtro de Categoria do Acervo (@simonclimatiza)',
                              title: `Filtrar por: ${cat.label}`,
                              description: `Atualiza a bancada de provas reais para exibir os registros técnicos da categoria "${cat.label}".`,
                              highlights: [
                                `Total na categoria: ${count} registros verificados`,
                                'Fotos HD, Legendas Originais e Leitura Técnica OCR'
                              ],
                              confirmLabel: `Aplicar Filtro (${count})`,
                              badgeColor: 'sky',
                              onConfirm: () => setCategoriaAtiva(cat.id)
                            })
                          }
                          className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 border shrink-0 cursor-pointer ${
                            active
                              ? 'bg-[#0369a1] text-white border-[#1a3a5c] shadow-xs'
                              : 'bg-white text-[#1a3a5c] border-sky-200 hover:bg-sky-50'
                          }`}
                        >
                          <span>{cat.label}</span>
                          <span
                            className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                              active
                                ? 'bg-white/20 text-white'
                                : 'bg-sky-100 text-[#0369a1]'
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Grid de Cards do Acervo em Tema Claro Certificado */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {postsFiltrados.map((post) => (
                      <article
                        key={post.id}
                        onClick={() =>
                          requestAction({
                            code: 'IMG-OCR',
                            category: `Inspeção de Prova de Campo · ${post.instrumentBadge}`,
                            title: post.title,
                            subtitle: `Publicação ${SIMON_PROFILE.handle} (#${post.shortcode} · ${post.date})`,
                            description: post.caption,
                            highlights: [
                              'Fotografia Técnica de Campo em Alta Definição',
                              `OCR Visual: ${(post.visualTextOcr || '').slice(0, 75)}...`
                            ],
                            confirmLabel: 'Confirmar e Abrir Inspeção',
                            badgeColor: 'emerald',
                            meta: post.date,
                            onConfirm: () => setSelectedMedia(post)
                          })
                        }
                        className="group cursor-pointer rounded-2xl bg-white border-2 border-sky-200 hover:border-[#0284c7] overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                      >
                        <div>
                          {/* Imagem */}
                          <div className="relative aspect-4/3 overflow-hidden bg-sky-50 border-b border-sky-100">
                            <img
                              src={post.imageUrl}
                              alt={post.title}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c]/80 via-transparent to-transparent" />

                            {/* Badge Instrumento */}
                            <span className="absolute top-2.5 left-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-sky-200 text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#0369a1] shadow-2xs truncate">
                              {post.instrumentBadge}
                            </span>

                            <span className="absolute bottom-2 left-2.5 text-[10px] font-mono font-bold text-white">
                              {post.date}
                            </span>
                          </div>

                          {/* Corpo do Card */}
                          <div className="p-3.5">
                            <h4 className="font-extrabold text-[#1a3a5c] text-xs sm:text-sm mb-1.5 leading-snug group-hover:text-[#0284c7] transition-colors line-clamp-2">
                              {post.title}
                            </h4>

                            <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-2.5">
                              {post.caption}
                            </p>

                            {/* Resumo OCR */}
                            {post.visualTextOcr && (
                              <div className="p-2 rounded-xl bg-sky-50/90 border border-sky-200/80 text-[11px] text-slate-700 line-clamp-2">
                                <strong className="text-[#0369a1] font-mono uppercase text-[9px] block mb-0.5">
                                  Leitura Visual / OCR:
                                </strong>
                                {post.visualTextOcr}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="px-3.5 py-2.5 bg-sky-50/60 border-t border-sky-100 flex items-center justify-between text-xs font-extrabold text-[#0369a1] group-hover:text-[#1a3a5c]">
                          <span className="inline-flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-[#0284c7]" />
                            Inspecionar foto e ficha OCR
                          </span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal de Inspeção de Vídeo / Imagem / OCR */}
      <MediaInspectorModal
        item={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </section>
  );
}
