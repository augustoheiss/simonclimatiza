import { Link, useNavigate } from 'react-router-dom';
import { cursoVRF } from '../data/treinamentos';
import { PlayCircle, BookOpen, GraduationCap, LogOut } from 'lucide-react';

export default function AcademiaCatalogo() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('simon_academia_auth');
    navigate('/');
  }

  return (
    <div className="bg-slate-50 min-h-screen py-24 px-6">

      {/* Page header */}
      <header className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <GraduationCap size={14} />
          Plataforma de Capacitação
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
          Academia Simon
        </h1>
        <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
          Capacitação de Elite para profissionais de climatização. Domine os sistemas VRF do zero ao diagnóstico avançado.
        </p>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="mt-6 inline-flex items-center gap-2 text-xs text-slate-400 hover:text-red-400 font-medium uppercase tracking-wider transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400/50 rounded-lg px-3 py-1.5"
          aria-label="Sair da área VIP da Academia"
        >
          <LogOut size={14} />
          Sair da Área VIP
        </button>
      </header>

      {/* Course card */}
      <article
        className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row"
        aria-label={`Curso: ${cursoVRF.titulo}`}
      >
        {/* Image */}
        <div className="md:w-2/5 flex-shrink-0 bg-slate-900 overflow-hidden">
          <img
            src={cursoVRF.imagemDestaque}
            alt={`Imagem de destaque do curso ${cursoVRF.titulo}`}
            className="w-full h-72 md:h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-8 md:p-10 md:w-3/5">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                Disponível agora
              </span>
              <span className="text-xs text-slate-400 font-medium">
                <BookOpen size={12} className="inline mr-1" />
                {cursoVRF.aulas.length} aulas
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 leading-snug mb-4">
              {cursoVRF.titulo}
            </h2>

            <p className="text-slate-500 leading-relaxed text-sm">
              {cursoVRF.descricao}
            </p>

            {/* Lesson list preview */}
            <ul className="mt-6 space-y-1.5" aria-label="Aulas do curso">
              {cursoVRF.aulas.slice(0, 4).map((aula) => (
                <li
                  key={aula.id}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-sky-100 text-sky-600 text-xs font-bold flex items-center justify-center">
                    {aula.id}
                  </span>
                  <span className="line-clamp-1">
                    {aula.titulo.replace(/^Aula \d+[\s\-:]+/i, '')}
                  </span>
                </li>
              ))}
              {cursoVRF.aulas.length > 4 && (
                <li className="text-xs text-slate-400 pl-7">
                  + {cursoVRF.aulas.length - 4} aulas adicionais
                </li>
              )}
            </ul>
          </div>

          <div className="mt-8">
            <Link
              to={`/academia/${cursoVRF.id}`}
              className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-600/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              aria-label={`Acessar o treinamento ${cursoVRF.titulo}`}
            >
              <PlayCircle size={20} />
              Acessar Treinamento
            </Link>
          </div>
        </div>
      </article>

    </div>
  );
}
