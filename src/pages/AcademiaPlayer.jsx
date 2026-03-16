import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  PlayCircle,
  Headphones,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  BookOpen,
} from 'lucide-react';
import { cursoVRF } from '../data/treinamentos';

// Strips the "Aula XX - " / "Aula XX: " prefix from lesson titles
function stripAulaPrefix(titulo) {
  return titulo.replace(/^Aula \d+[\s\-:]+/i, '');
}

export default function AcademiaPlayer() {
  const [activeAula, setActiveAula] = useState(cursoVRF.aulas[0]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const slides = activeAula.slides ?? [];
  const totalSlides = slides.length;

  function handleAulaChange(aula) {
    setActiveAula(aula);
    setCurrentSlideIndex(0);
    setSidebarOpen(false);
  }

  function handlePrevSlide() {
    setCurrentSlideIndex((i) => Math.max(0, i - 1));
  }

  function handleNextSlide() {
    setCurrentSlideIndex((i) => Math.min(totalSlides - 1, i + 1));
  }

  return (
    <div className="flex-grow flex flex-col md:flex-row bg-slate-50">

      {/* ── Mobile top bar ── */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200 sticky top-0 z-30">
        <span className="font-bold text-slate-800 text-sm truncate mr-4 max-w-[220px]">
          {cursoVRF.titulo}
        </span>
        <button
          onClick={() => setSidebarOpen((v) => !v)}
          aria-label={sidebarOpen ? 'Fechar menu de aulas' : 'Abrir menu de aulas'}
          aria-expanded={sidebarOpen}
          className="flex-shrink-0 p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
        >
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Sidebar ── */}
      <aside
        className={`
          ${sidebarOpen ? 'flex' : 'hidden'} md:flex
          flex-col bg-white border-b md:border-b-0 md:border-r border-slate-200
          w-full md:w-[300px] md:flex-shrink-0 md:sticky md:top-0 md:self-start
          md:max-h-[calc(100vh-73px)] md:overflow-y-auto
        `}
        aria-label="Navegação do curso"
      >
        {/* Course title block */}
        <div className="p-5 border-b border-slate-100 hidden md:block">
          <Link
            to="/academia"
            className="inline-flex items-center gap-1.5 text-sky-500 hover:text-sky-600 text-xs font-semibold mb-3 transition-colors"
            aria-label="Voltar ao catálogo da Academia"
          >
            <ChevronLeft size={14} />
            Voltar ao Catálogo
          </Link>
          <h2 className="font-extrabold text-slate-900 text-sm leading-snug">
            {cursoVRF.titulo}
          </h2>
          <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
            <BookOpen size={11} />
            {cursoVRF.aulas.length} aulas
          </p>
        </div>

        {/* Lesson list */}
        <nav aria-label="Lista de aulas do curso">
          {cursoVRF.aulas.map((aula) => {
            const isActive = aula.id === activeAula.id;
            return (
              <button
                key={aula.id}
                onClick={() => handleAulaChange(aula)}
                aria-pressed={isActive}
                aria-label={`Selecionar ${aula.titulo}`}
                className={`
                  w-full text-left px-5 py-4 text-sm border-l-4 transition-all duration-150
                  ${isActive
                    ? 'bg-sky-50 border-sky-500 text-sky-700'
                    : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }
                `}
              >
                <span className={`block text-[10px] font-extrabold uppercase tracking-widest mb-1 ${isActive ? 'text-sky-400' : 'text-slate-400'}`}>
                  Aula {String(aula.id).padStart(2, '0')}
                </span>
                <span className={`line-clamp-2 leading-snug ${isActive ? 'font-semibold' : ''}`}>
                  {stripAulaPrefix(aula.titulo)}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ── Main content ── */}
      <main className="flex-grow min-w-0" aria-live="polite" aria-atomic="false">
        <AnimatePresence mode="wait">
          <motion.article
            key={activeAula.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="px-6 md:px-12 lg:px-16 py-10 max-w-5xl mx-auto"
          >

            {/* ── Lesson header ── */}
            <header className="mb-10">
              <span className="inline-block text-[11px] font-extrabold text-sky-500 uppercase tracking-widest mb-3">
                Aula {String(activeAula.id).padStart(2, '0')} de {cursoVRF.aulas.length}
              </span>
              <h1 className="text-3xl font-bold text-slate-900 leading-tight">
                {activeAula.titulo}
              </h1>
              <div className="mt-5 text-slate-600 leading-relaxed whitespace-pre-line text-[15px]">
                {activeAula.descricao}
              </div>
            </header>

            {/* ── Slide carousel ── */}
            {slides.length > 0 && (
              <section aria-label={`Slides da aula ${activeAula.id}`} className="mb-2">

                {/* Slide viewer */}
                <div className="relative bg-slate-100 rounded-xl overflow-hidden shadow-md select-none">
                  <img
                    src={slides[currentSlideIndex]}
                    alt={`Slide ${currentSlideIndex + 1} de ${totalSlides} — ${activeAula.titulo}`}
                    className="w-full object-contain max-h-[600px] mx-auto block"
                    draggable="false"
                  />

                  {/* Prev button */}
                  <button
                    onClick={handlePrevSlide}
                    disabled={currentSlideIndex === 0}
                    aria-label={`Slide anterior — slide ${currentSlideIndex} de ${totalSlides}`}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white disabled:opacity-0 disabled:pointer-events-none text-slate-700 rounded-full p-2.5 shadow-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  >
                    <ChevronLeft size={22} aria-hidden="true" />
                  </button>

                  {/* Next button */}
                  <button
                    onClick={handleNextSlide}
                    disabled={currentSlideIndex === totalSlides - 1}
                    aria-label={`Próximo slide — slide ${currentSlideIndex + 2} de ${totalSlides}`}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white disabled:opacity-0 disabled:pointer-events-none text-slate-700 rounded-full p-2.5 shadow-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  >
                    <ChevronRight size={22} aria-hidden="true" />
                  </button>

                  {/* Slide counter */}
                  <div
                    aria-live="polite"
                    aria-atomic="true"
                    className="absolute bottom-3 right-3 bg-slate-900/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm"
                  >
                    {currentSlideIndex + 1} / {totalSlides}
                  </div>
                </div>

                {/* Dot navigation */}
                <div
                  role="tablist"
                  aria-label="Navegação por slides"
                  className="flex justify-center gap-1.5 mt-4 flex-wrap px-2"
                >
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === currentSlideIndex}
                      aria-label={`Ir para o slide ${i + 1} de ${totalSlides}`}
                      onClick={() => setCurrentSlideIndex(i)}
                      className={`
                        h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-1
                        ${i === currentSlideIndex
                          ? 'bg-sky-500 w-6'
                          : 'bg-slate-300 hover:bg-slate-400 w-2'
                        }
                      `}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* ── Infographic ── */}
            {activeAula.infografico && (
              <section
                className="mt-12"
                aria-label={`Infográfico da aula ${activeAula.id}`}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1 h-5 bg-sky-500 rounded-full flex-shrink-0" aria-hidden="true" />
                  <h2 className="text-base font-bold text-slate-700">
                    Infográfico de Referência
                  </h2>
                </div>
                <img
                  src={activeAula.infografico}
                  alt={`Infográfico de referência da aula ${activeAula.id}: ${stripAulaPrefix(activeAula.titulo)}`}
                  className="shadow-lg rounded-xl max-w-3xl mx-auto w-full"
                />
              </section>
            )}

            {/* ── Media center ── */}
            <section
              className="mt-12 border-t border-slate-200 pt-8"
              aria-label="Central de mídia da aula"
            >
              <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-5">
                Central de Mídia
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={activeAula.linkVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Assistir a aula ${activeAula.id} completa no YouTube`}
                  className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 shadow-md shadow-red-600/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                >
                  <PlayCircle size={22} aria-hidden="true" />
                  Assistir Aula Completa
                </a>

                <a
                  href={activeAula.linkPodcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ouvir a aula ${activeAula.id} em formato podcast`}
                  className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 shadow-md shadow-slate-900/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  <Headphones size={22} aria-hidden="true" />
                  Ouvir em Podcast
                </a>
              </div>
            </section>

          </motion.article>
        </AnimatePresence>
      </main>

    </div>
  );
}
