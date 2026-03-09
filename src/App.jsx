import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-950 flex flex-col font-sans">
        
        {/* Menu de Navegação Global */}
        <nav className="bg-slate-950/80 backdrop-blur-md p-6 sticky top-0 z-50 border-b border-slate-800">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-cyan-500 font-bold text-xl tracking-tighter">SIMON<span className="text-slate-100 font-light">CLIMATIZA</span></div>
            <div className="flex gap-8">
              <Link to="/" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors uppercase tracking-wider text-sm">Início</Link>
              <Link to="/servicos" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors uppercase tracking-wider text-sm">Serviços</Link>
              <Link to="/contato" className="text-slate-300 hover:text-cyan-400 font-medium transition-colors uppercase tracking-wider text-sm">Contato</Link>
            </div>
          </div>
        </nav>

        {/* O palco onde o React troca as telas */}
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        {/* Rodapé Global */}
        <footer className="bg-slate-950 p-6 text-center text-slate-500 text-sm border-t border-slate-900">
          &copy; {new Date().getFullYear()} Simon Climatiza. Engenharia Térmica de Alta Performance.
        </footer>
        
      </div>
    </HashRouter>
  );
}