import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProtecaoAcademia from './components/ProtecaoAcademia';
import SiteHeader from './components/layout/SiteHeader';
import SiteFooter from './components/layout/SiteFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const Servicos = lazy(() => import('./pages/Servicos'));
const Contato = lazy(() => import('./pages/Contato'));
const AcademiaCatalogo = lazy(() => import('./pages/AcademiaCatalogo'));
const AcademiaPlayer = lazy(() => import('./pages/AcademiaPlayer'));
const TreinamentoHVAC = lazy(() => import('./pages/TreinamentoHVAC'));
const TreinamentoTVRProCO = lazy(() => import('./pages/TreinamentoTVRProCO'));
const TreinamentoManutencao = lazy(() => import('./pages/TreinamentoManutencao'));
const Certificados = lazy(() => import('./pages/Certificados'));
const Validar = lazy(() => import('./pages/Validar'));
const Termos = lazy(() => import('./pages/Termos'));

function RouteLoader() {
  return (
    <div className="flex-grow flex items-center justify-center min-h-[60vh]" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-[#176788] border-t-transparent animate-spin" aria-hidden="true" />
        <span className="text-sm text-[#556873]">Carregando…</span>
      </div>
    </div>
  );
}

function AppShell() {
  const location = useLocation();
  const path = location.pathname;

  // Rotas que operam em modo Workstation Técnica 100dvh Zero-Scroll (possuem Ribbon e Status Bar próprias)
  const isCadWorkspaceRoute =
    path === '/academia' ||
    path.startsWith('/academia/treinamento-') ||
    (path.startsWith('/academia/') && !path.startsWith('/academia/certificado/'));

  return (
    <div
      className={
        isCadWorkspaceRoute
          ? 'h-dvh w-screen overflow-hidden flex flex-col font-sans bg-white selection:bg-sky-500 selection:text-white'
          : 'min-h-screen bg-white flex flex-col font-sans selection:bg-sky-500 selection:text-white'
      }
    >
      {!isCadWorkspaceRoute && <SiteHeader />}

      <FloatingWhatsApp />

      <main className="flex-grow flex flex-col min-h-0">
        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/academia" element={<ProtecaoAcademia><AcademiaCatalogo /></ProtecaoAcademia>} />
            <Route path="/academia/treinamento-hvac" element={<ProtecaoAcademia><TreinamentoHVAC /></ProtecaoAcademia>} />
            <Route path="/academia/treinamento-manutencao-hvac" element={<ProtecaoAcademia><TreinamentoManutencao /></ProtecaoAcademia>} />
            <Route path="/academia/treinamento-tvr-pro-co" element={<ProtecaoAcademia><TreinamentoTVRProCO /></ProtecaoAcademia>} />
            <Route path="/academia/certificado/:cursoId" element={<ProtecaoAcademia><Certificados /></ProtecaoAcademia>} />
            <Route path="/academia/:id" element={<ProtecaoAcademia><AcademiaPlayer /></ProtecaoAcademia>} />
            <Route path="/certificados" element={<ProtecaoAcademia><Certificados /></ProtecaoAcademia>} />
            <Route path="/validar" element={<Validar />} />
            <Route path="/termos" element={<Termos />} />
          </Routes>
        </Suspense>
      </main>

      {!isCadWorkspaceRoute && <SiteFooter />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
