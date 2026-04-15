import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import AcademiaCatalogo from './pages/AcademiaCatalogo';
import AcademiaPlayer from './pages/AcademiaPlayer';
import Certificados from './pages/Certificados';
import Validar from './pages/Validar';
import Termos from './pages/Termos';
import ProtecaoAcademia from './components/ProtecaoAcademia';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col font-sans">

        {/* Menu de Navegação Global */}
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-sky-100 shadow-sm shadow-sky-900/5">
          <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo-simon.jpg"
                alt="Logo Simon Climatização"
                className="h-14 w-auto mix-blend-multiply"
              />
            </Link>

            {/* Links de navegação */}
            <div className="flex gap-8">
              <Link
                to="/"
                className="text-slate-600 hover:text-sky-500 font-medium transition-colors uppercase tracking-wider text-sm"
              >
                Início
              </Link>
              <Link
                to="/servicos"
                className="text-slate-600 hover:text-sky-500 font-medium transition-colors uppercase tracking-wider text-sm"
              >
                Serviços
              </Link>
              <Link
                to="/academia"
                className="text-slate-600 hover:text-sky-500 font-medium transition-colors uppercase tracking-wider text-sm"
              >
                Academia
              </Link>
              <Link
                to="/certificados"
                className="text-slate-600 hover:text-sky-500 font-medium transition-colors uppercase tracking-wider text-sm"
              >
                Certificados
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-1.5 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-200 text-sm shadow-md shadow-sky-500/20"
              >
                Contato
              </Link>
            </div>
          </div>
        </nav>

        {/* Páginas */}
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/academia" element={<ProtecaoAcademia><AcademiaCatalogo /></ProtecaoAcademia>} />
            <Route path="/academia/:id" element={<ProtecaoAcademia><AcademiaPlayer /></ProtecaoAcademia>} />
            <Route path="/certificados" element={<ProtecaoAcademia><Certificados /></ProtecaoAcademia>} />
            <Route path="/validar" element={<Validar />} />
            <Route path="/termos" element={<Termos />} />
          </Routes>
        </main>

        {/* Rodapé Global */}
        <footer className="bg-sky-50 border-t border-sky-100 p-6 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Simon Climatiza. Engenharia Térmica de Alta Performance.</p>
          <Link
            to="/termos"
            className="inline-block mt-2 text-xs text-slate-400 hover:text-sky-500 transition-colors duration-200 underline underline-offset-2 decoration-slate-300 hover:decoration-sky-400"
          >
            Termos de Uso e Privacidade
          </Link>
        </footer>

      </div>
    </BrowserRouter>
  );
}
