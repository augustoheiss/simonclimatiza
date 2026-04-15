import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  PlayCircle,
  Headphones,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  BookOpen,
  LogOut,
  AlertTriangle,
  Images,
  CheckCircle2,
  Circle,
} from 'lucide-react';
import { todosCursos } from '../data/treinamentos';
import useProgress from '../hooks/useProgress';

// ── Helpers ──

/** Strips the "Aula XX - " / "Aula XX: " prefix from lesson titles */
function stripAulaPrefix(titulo) {
  return titulo.replace(/^Aula \d+[\s\-:]+/i, '');
}

/** Converts youtu.be or youtube.com watch URLs into embeddable URLs */
function getYoutubeEmbedUrl(url) {
  if (!url) return '';
  const videoId =
    url.split('youtu.be/')[1]?.split('?')[0] ||
    url.split('v=')[1]?.split('&')[0];
  return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0` : '';
}

// ── Tab definitions ──
const TABS = [
  { key: 'slides',  label: 'Slides e Material', Icon: Images },
  { key: 'video',   label: 'Aula em Vídeo',     Icon: PlayCircle },
  { key: 'podcast', label: 'Ouvir Podcast',      Icon: Headphones },
];

export default function AcademiaPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const cursoAtual = todosCursos.find((c) => c.id === id);

  const [activeAula, setActiveAula] = useState(cursoAtual?.aulas[0] ?? null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('slides');

  // Progress tracking
  const { toggleAula, isAulaConcluida, getProgressoCurso } = useProgress();
  const progressoAtual = cursoAtual
    ? getProgressoCurso(cursoAtual.id, cursoAtual.aulas.length)
    : null;

  // Reset tab & slide index when the active lesson changes
  useEffect(() => {
    setActiveTab('slides');
    setCurrentSlideIndex(0);
  }, [activeAula]);

  function handleLogout() {
    localStorage.removeItem('simon_academia_auth');
    navigate('/');
  }

  // ── Course not found fallback ──
  if (!cursoAtual) {
    return (
      <div className="flex-grow flex items-center justify-center bg-slate-50 px-6 py-20">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 mb-6">
            <AlertTriangle size={28} className="text-amber-500" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 mb-3">
            Curso não encontrado
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            O treinamento que você procura não existe ou foi removido. Verifique o endereço ou retorne ao catálogo para explorar os cursos disponíveis.
          </p>
          <Link
            to="/academia"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            <ChevronLeft size={18} />
            Voltar ao Catálogo
          </Link>
        </div>
      </div>
    );
  }

  const slides = activeAula?.slides ?? [];
  const totalSlides = slides.length;

  function handleAulaChange(aula) {
    setActiveAula(aula);
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
          {cursoAtual.titulo}
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
            {cursoAtual.titulo}
          </h2>
          <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1">
            <BookOpen size={11} />
            {cursoAtual.aulas.length} aulas
          </p>
          <button
            onClick={handleLogout}
            className="mt-3 inline-flex items-center gap-1.5 text-[10px] text-slate-400 hover:text-red-400 font-semibold uppercase tracking-widest transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400/50 rounded px-2 py-1"
            aria-label="Sair da área VIP da Academia"
          >
            <LogOut size={12} />
            Sair
          </button>
        </div>

        {/* Lesson list */}
        <nav aria-label="Lista de aulas do curso">
          {cursoAtual.aulas.map((aula) => {
            const isActive = aula.id === activeAula?.id;
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
                <div className="flex items-start gap-2">
                  {/* Completion indicator */}
                  {isAulaConcluida(cursoAtual.id, aula.id) ? (
                    <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Circle size={14} className={`flex-shrink-0 mt-0.5 ${isActive ? 'text-sky-300' : 'text-slate-300'}`} />
                  )}
                  <div>
                    <span className={`block text-[10px] font-extrabold uppercase tracking-widest mb-1 ${isActive ? 'text-sky-400' : 'text-slate-400'}`}>
                      Aula {String(aula.id).padStart(2, '0')}
                    </span>
                    <span className={`line-clamp-2 leading-snug ${isActive ? 'font-semibold' : ''}`}>
                      {stripAulaPrefix(aula.titulo)}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ── Main content ── */}
      <main className="flex-grow min-w-0" aria-live="polite" aria-atomic="false">
        <AnimatePresence mode="wait">
          <motion.article
            key={activeAula?.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="px-6 md:px-12 lg:px-16 py-10 max-w-5xl mx-auto"
          >

            {/* ── Lesson header ── */}
            <header className="mb-8">
              <span className="inline-block text-[11px] font-extrabold text-sky-500 uppercase tracking-widest mb-3">
                Aula {String(activeAula?.id).padStart(2, '0')} de {cursoAtual.aulas.length}
              </span>
              <h1 className="text-3xl font-bold text-slate-900 leading-tight">
                {activeAula?.titulo}
              </h1>
              <div className="mt-5 text-slate-600 leading-relaxed whitespace-pre-line text-[15px]">
                {activeAula?.descricao}
              </div>

              {/* ── Lesson completion toggle ── */}
              {activeAula && (
                <button
                  onClick={() => toggleAula(cursoAtual.id, activeAula.id)}
                  className={`
                    mt-6 inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold
                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
                    ${isAulaConcluida(cursoAtual.id, activeAula.id)
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 focus:ring-emerald-400'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 focus:ring-slate-400'
                    }
                  `}
                  aria-label={
                    isAulaConcluida(cursoAtual.id, activeAula.id)
                      ? `Desmarcar aula ${activeAula.id} como concluída`
                      : `Marcar aula ${activeAula.id} como concluída`
                  }
                >
                  {isAulaConcluida(cursoAtual.id, activeAula.id) ? (
                    <>
                      <CheckCircle2 size={18} />
                      Aula Concluída
                    </>
                  ) : (
                    <>
                      <Circle size={18} />
                      Marcar como Concluída
                    </>
                  )}
                </button>
              )}

              {/* ── Course progress bar ── */}
              {progressoAtual && (
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex-grow h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${progressoAtual.percentual}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 whitespace-nowrap">
                    {progressoAtual.count}/{progressoAtual.total}
                  </span>
                </div>
              )}
            </header>

            {/* ── Tab navigation ── */}
            <div
              className="flex gap-1 sm:gap-4 mb-8 border-b border-slate-200 pb-0"
              role="tablist"
              aria-label="Tipo de conteúdo da aula"
            >
              {TABS.map(({ key, label, Icon }) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(key)}
                    className={`
                      inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold
                      border-b-2 -mb-px transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-sky-400/50 rounded-t-lg
                      ${isActive
                        ? 'border-sky-500 text-sky-600'
                        : 'border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-300'
                      }
                    `}
                  >
                    <Icon size={16} aria-hidden="true" />
                    <span className="hidden sm:inline">{label}</span>
                  </button>
                );
              })}
            </div>

            {/* ── Tab content ── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >

                {/* ── SLIDES TAB ── */}
                {activeTab === 'slides' && (
                  <>
                    {/* Slide carousel */}
                    {slides.length > 0 && (
                      <section aria-label={`Slides da aula ${activeAula?.id}`} className="mb-2">

                        {/* Slide viewer */}
                        <div className="relative bg-slate-100 rounded-xl overflow-hidden shadow-md select-none">
                          <img
                            src={slides[currentSlideIndex]}
                            alt={`Slide ${currentSlideIndex + 1} de ${totalSlides} — ${activeAula?.titulo}`}
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

                    {/* Infographic */}
                    {activeAula?.infografico && (
                      <section
                        className="mt-12"
                        aria-label={`Infográfico da aula ${activeAula?.id}`}
                      >
                        <div className="flex items-center gap-2 mb-5">
                          <span className="w-1 h-5 bg-sky-500 rounded-full flex-shrink-0" aria-hidden="true" />
                          <h2 className="text-base font-bold text-slate-700">
                            Infográfico de Referência
                          </h2>
                        </div>
                        <img
                          src={activeAula.infografico}
                          alt={`Infográfico de referência da aula ${activeAula?.id}: ${stripAulaPrefix(activeAula?.titulo)}`}
                          className="shadow-lg rounded-xl max-w-3xl mx-auto w-full"
                        />
                      </section>
                    )}
                  </>
                )}

                {/* ── VIDEO TAB ── */}
                {activeTab === 'video' && (
                  <section aria-label={`Vídeo da aula ${activeAula?.id}`}>
                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-slate-900">
                      <iframe
                        src={getYoutubeEmbedUrl(activeAula?.linkVideo)}
                        title={`Vídeo: ${activeAula?.titulo}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-4 text-xs text-slate-400 text-center">
                      Aula completa em vídeo — reproduza diretamente aqui ou em tela cheia.
                    </p>
                  </section>
                )}

                {/* ── PODCAST TAB ── */}
                {activeTab === 'podcast' && (
                  <section aria-label={`Podcast da aula ${activeAula?.id}`}>
                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-slate-900">
                      <iframe
                        src={getYoutubeEmbedUrl(activeAula?.linkPodcast)}
                        title={`Podcast: ${activeAula?.titulo}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-4 text-xs text-slate-400 text-center">
                      Versão em podcast — ideal para ouvir enquanto trabalha.
                    </p>
                  </section>
                )}

              </motion.div>
            </AnimatePresence>

          </motion.article>
        </AnimatePresence>
      </main>

    </div>
  );
}
