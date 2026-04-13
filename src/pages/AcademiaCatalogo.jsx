import { Link, useNavigate } from 'react-router-dom';
import { todosCursos } from '../data/treinamentos';
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
      <header className="max-w-5xl mx-auto text-center mb-16">
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

      {/* Course grid */}
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-1 lg:grid-cols-1">
        {todosCursos.map((curso) => (
          <article
            key={curso.id}
            className="grid grid-cols-1 md:grid-cols-12 bg-white shadow-xl rounded-2xl overflow-hidden max-w-5xl mx-auto w-full mb-12 hover:shadow-2xl transition-shadow duration-300"
            aria-label={`Curso: ${curso.titulo}`}
          >
            {/* Image */}
            <div className="md:col-span-5 h-64 md:h-full">
              <img
                src={curso.imagemDestaque}
                alt={`Imagem de destaque do curso ${curso.titulo}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    Disponível agora
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    <BookOpen size={12} className="inline mr-1" />
                    {curso.aulas.length} aulas
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900 leading-snug mb-4">
                  {curso.titulo}
                </h2>

                <p className="text-slate-500 leading-relaxed text-sm">
                  {curso.descricao}
                </p>

                {/* Lesson list preview */}
                <ul className="mt-6 space-y-1.5" aria-label={`Aulas do curso ${curso.titulo}`}>
                  {curso.aulas.slice(0, 4).map((aula) => (
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
                  {curso.aulas.length > 4 && (
                    <li className="text-xs text-slate-400 pl-7">
                      + {curso.aulas.length - 4} aulas adicionais
                    </li>
                  )}
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  to={`/academia/${curso.id}`}
                  className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-600/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                  aria-label={`Acessar o treinamento ${curso.titulo}`}
                >
                  <PlayCircle size={20} />
                  Acessar Treinamento
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
