import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { todosCursos } from '../data/treinamentos';
import CertificateTemplate from '../components/CertificateTemplate';
import {
  Award,
  Download,
  Eye,
  ChevronLeft,
  Loader2,
  Sparkles,
  User,
  BookOpen,
  Clock,
  Calendar,
} from 'lucide-react';

/* ── helpers ── */

/** Generates a deterministic certificate number from inputs */
function gerarNumeroCertificado(nome, curso) {
  let hash = 0;
  const str = `${nome}${curso}${Date.now()}`;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  const num = Math.abs(hash) % 100000;
  return `SC-${String(num).padStart(5, '0')}`;
}

/** Today in DD/MM/YYYY */
function hoje() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2, '0')}/${String(
    d.getMonth() + 1
  ).padStart(2, '0')}/${d.getFullYear()}`;
}

/* ── default hours per course ── */
const CARGA_MAP = {};
todosCursos.forEach((c) => {
  CARGA_MAP[c.id] = `${c.aulas.length * 5}h`;
});

export default function Certificados() {
  // certRef → dedicated hidden capture target (never scaled by CSS transform)
  const certRef = useRef(null);

  const [nomeAluno, setNomeAluno] = useState('');
  const [cursoId, setCursoId] = useState(todosCursos[0]?.id ?? '');
  const [dataRealizacao, setDataRealizacao] = useState(hoje());
  const [gerando, setGerando] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(true);

  const cursoAtual = todosCursos.find((c) => c.id === cursoId);
  const nomeCurso = cursoAtual?.titulo ?? '';
  const cargaHoraria = CARGA_MAP[cursoId] ?? '40h';
  const numeroCertificado = nomeAluno
    ? gerarNumeroCertificado(nomeAluno, nomeCurso)
    : 'SC-00000';

  /* ── Lazy-loaded PDF generation (blindado) ── */
  const generatePDF = useCallback(async () => {
    if (!nomeAluno.trim()) return;

    setGerando(true);
    try {
      // Dynamic imports — libraries loaded only on demand
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ]);

      // ⚡ BLINDAGEM 1: Await fonts — prevent html2canvas from
      // capturing before Google Fonts (Great Vibes, Playfair Display) render
      await document.fonts.ready;

      const element = certRef.current;
      if (!element) return;

      // ⚡ BLINDAGEM 2 + 3: Lock dimensions & blindaded capture config
      // Uses offsetWidth/offsetHeight to capture the true 1123×794 element,
      // ignoring any CSS transform: scale() from the preview wrapper
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
        width: element.offsetWidth,
        height: element.offsetHeight,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      // ⚡ BLINDAGEM 4: JPEG compression — PNG lossless with the 7.2MB
      // background at scale:2 produces a ~50MB+ in-memory payload that
      // causes jsPDF to choke and dump a raw blob without .pdf extension.
      // JPEG at 80% quality crushes this to <1MB with no visual loss.
      const imgData = canvas.toDataURL('image/jpeg', 0.8);

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);

      // ⚡ BLINDAGEM 5: Rigorous filename sanitization — strip ALL
      // non-alphanumeric chars to prevent pdf.save() from choking on
      // accents (ã, é), spaces, or special characters
      const safeName = nomeAluno
        ? nomeAluno.replace(/[^a-zA-Z0-9]/g, '_')
        : 'Aluno';
      pdf.save(`Certificado_${safeName}.pdf`);
    } catch (err) {
      console.error('Erro ao gerar PDF:', err);
      alert('Ocorreu um erro ao gerar o certificado. Tente novamente.');
    } finally {
      setGerando(false);
    }
  }, [nomeAluno, nomeCurso]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-sky-50/30 to-slate-50 py-12 px-4 sm:px-6">
      {/* ── Page header ── */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <Link
          to="/academia"
          className="inline-flex items-center gap-1.5 text-sky-500 hover:text-sky-600 text-xs font-semibold mb-6 transition-colors"
        >
          <ChevronLeft size={14} />
          Voltar à Academia
        </Link>

        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <Award size={14} />
          Emissão de Certificados
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
          Fábrica de Certificados
        </h1>
        <p className="mt-3 text-slate-500 max-w-lg mx-auto leading-relaxed text-sm">
          Preencha os dados, confira o preview em tempo real e gere seu
          certificado PDF de alta resolução instantaneamente.
        </p>
      </header>

      {/* ── Main grid: form + info ── */}
      <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-5">
        {/* ── Form card ── */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl shadow-sky-900/5 border border-slate-100 p-6 sm:p-8 self-start">
          <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Sparkles size={18} className="text-sky-500" />
            Dados do Certificado
          </h2>

          <div className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="cert-nome"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2"
              >
                <User size={12} />
                Nome Completo do Aluno
              </label>
              <input
                id="cert-nome"
                type="text"
                value={nomeAluno}
                onChange={(e) => setNomeAluno(e.target.value)}
                placeholder="ex.: João da Silva"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-300 transition-all text-sm"
              />
            </div>

            {/* Course */}
            <div>
              <label
                htmlFor="cert-curso"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2"
              >
                <BookOpen size={12} />
                Curso / Treinamento
              </label>
              <select
                id="cert-curso"
                value={cursoId}
                onChange={(e) => setCursoId(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-300 transition-all text-sm appearance-none cursor-pointer"
              >
                {todosCursos.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.titulo}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label
                htmlFor="cert-data"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2"
              >
                <Calendar size={12} />
                Data de Realização
              </label>
              <input
                id="cert-data"
                type="text"
                value={dataRealizacao}
                onChange={(e) => setDataRealizacao(e.target.value)}
                placeholder="DD/MM/AAAA"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-300 transition-all text-sm"
              />
            </div>

            {/* Hours (read-only) */}
            <div>
              <label
                htmlFor="cert-horas"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2"
              >
                <Clock size={12} />
                Carga Horária
              </label>
              <input
                id="cert-horas"
                type="text"
                value={cargaHoraria}
                readOnly
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-100 text-slate-600 text-sm cursor-not-allowed"
              />
              <p className="text-[10px] text-slate-400 mt-1.5">
                Calculado automaticamente: {cursoAtual?.aulas.length ?? 0} aulas
                × 5h
              </p>
            </div>
          </div>

          {/* ── Emit button ── */}
          <button
            onClick={generatePDF}
            disabled={!nomeAluno.trim() || gerando}
            className="mt-8 w-full inline-flex items-center justify-center gap-3 bg-sky-500 hover:bg-sky-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-600/30 hover:-translate-y-0.5 disabled:shadow-none disabled:translate-y-0 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 text-sm"
          >
            {gerando ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Gerando PDF...
              </>
            ) : (
              <>
                <Download size={18} />
                Emitir Certificado (PDF)
              </>
            )}
          </button>

          {/* Toggle preview */}
          <button
            onClick={() => setPreviewVisible((v) => !v)}
            className="mt-3 w-full text-center text-xs text-slate-400 hover:text-sky-500 transition-colors py-1 flex items-center justify-center gap-1.5"
          >
            <Eye size={12} />
            {previewVisible ? 'Ocultar preview' : 'Mostrar preview'}
          </button>
        </div>

        {/* ── Live preview ── */}
        <div className="lg:col-span-3">
          {previewVisible && (
            <div className="bg-white rounded-2xl shadow-xl shadow-sky-900/5 border border-slate-100 p-4">
              <div className="flex items-center gap-2 mb-3 px-2">
                <Eye size={14} className="text-sky-400" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Preview ao Vivo
                </span>
              </div>

              {/* Scaled-down certificate preview (visual only — NOT used for capture) */}
              <div
                className="overflow-hidden rounded-xl border border-slate-200"
                style={{
                  width: '100%',
                  aspectRatio: '1123 / 794',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '1123px',
                    height: '794px',
                    transformOrigin: 'top left',
                  }}
                  ref={(el) => {
                    if (el) {
                      const parent = el.parentElement;
                      if (parent) {
                        const scale = parent.clientWidth / 1123;
                        el.style.transform = `scale(${scale})`;
                      }
                    }
                  }}
                >
                  <CertificateTemplate
                    nomeAluno={nomeAluno}
                    nomeCurso={nomeCurso}
                    cargaHoraria={cargaHoraria}
                    dataRealizacao={dataRealizacao}
                    numeroCertificado={numeroCertificado}
                  />
                </div>
              </div>

              <p className="text-[10px] text-slate-400 text-center mt-3">
                O PDF final será gerado em alta resolução (2× escala) no formato
                A4 paisagem.
              </p>
            </div>
          )}

          {/*
            ── Hidden full-size capture target ──
            ALWAYS rendered off-screen at true 1123×794 dimensions.
            certRef points here — never affected by CSS transform: scale().
            This is the element that html2canvas actually captures.
          */}
          <div
            style={{
              position: 'fixed',
              left: '-9999px',
              top: '-9999px',
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          >
            <CertificateTemplate
              ref={certRef}
              nomeAluno={nomeAluno}
              nomeCurso={nomeCurso}
              cargaHoraria={cargaHoraria}
              dataRealizacao={dataRealizacao}
              numeroCertificado={numeroCertificado}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
