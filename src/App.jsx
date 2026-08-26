import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import AcademiaCatalogo from './pages/AcademiaCatalogo';
import AcademiaPlayer from './pages/AcademiaPlayer';
import TreinamentoHVAC from './pages/TreinamentoHVAC';
import TreinamentoTVRProCO from './pages/TreinamentoTVRProCO';
import TreinamentoManutencao from './pages/TreinamentoManutencao';
import Certificados from './pages/Certificados';
import Validar from './pages/Validar';
import Termos from './pages/Termos';
import ProtecaoAcademia from './components/ProtecaoAcademia';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-sky-500 selection:text-white">

        {/* Global Responsive Navbar */}
        <Navbar />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Pages Content */}
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/academia" element={<ProtecaoAcademia><AcademiaCatalogo /></ProtecaoAcademia>} />
            <Route path="/academia/treinamento-hvac" element={<TreinamentoHVAC />} />
            <Route path="/academia/treinamento-manutencao-hvac" element={<TreinamentoManutencao />} />
            <Route path="/academia/treinamento-tvr-pro-co" element={<ProtecaoAcademia><TreinamentoTVRProCO /></ProtecaoAcademia>} />
            <Route path="/academia/:id" element={<ProtecaoAcademia><AcademiaPlayer /></ProtecaoAcademia>} />
            <Route path="/certificados" element={<ProtecaoAcademia><Certificados /></ProtecaoAcademia>} />
            <Route path="/validar" element={<Validar />} />
            <Route path="/termos" element={<Termos />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <img
                  src="/images/logo-simon.jpg"
                  alt="Logo Simon Climatização"
                  className="h-10 w-auto bg-white p-1 rounded"
                />
                <span className="text-white font-bold text-lg">Simon Climatização</span>
              </div>
              <p className="text-slate-400 max-w-sm text-xs leading-relaxed mb-4">
                Engenharia térmica de precisão, PMOC digital com ART, manutenção de sistemas VRF/VRV, Chillers e Câmaras Frias para edifícios corporativos e indústrias.
              </p>
              <div className="text-xs text-sky-400 font-semibold">
                Responsável Técnico Habilitado &bull; CREA / CFT Ativo
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Navegação</h4>
              <ul className="space-y-2 text-xs">
                <li><Link to="/" className="hover:text-sky-400 transition-colors">Início</Link></li>
                <li><Link to="/servicos" className="hover:text-sky-400 transition-colors">Serviços de Engenharia</Link></li>
                <li><Link to="/academia" className="hover:text-sky-400 transition-colors">Academia Simon HVAC</Link></li>
                <li><Link to="/certificados" className="hover:text-sky-400 transition-colors">Emissão de Certificados</Link></li>
                <li><Link to="/validar" className="hover:text-sky-400 transition-colors">Validação de Autenticidade</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Contato &amp; Legal</h4>
              <ul className="space-y-2 text-xs">
                <li><Link to="/contato" className="hover:text-sky-400 transition-colors">Solicitar Diagnóstico</Link></li>
                <li><Link to="/termos" className="hover:text-sky-400 transition-colors">Termos de Uso &amp; LGPD</Link></li>
                <li className="pt-2 text-slate-500">São Paulo &bull; Atendimento Brasil B2B</li>
              </ul>
            </div>
          </div>

          <div className="max-w-6xl mx-auto pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-3">
            <p>&copy; {new Date().getFullYear()} Simon Climatização. Todos os direitos reservados.</p>
            <p>Engenharia Térmica de Alta Performance.</p>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}
