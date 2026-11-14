// Home: uma página que se lê de cima para baixo, na ordem em que um gestor decide a contratação.
// As seções ficam em src/components/home/. O modo "estação CAD" agora existe só na Academia.

import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PainSection from '../components/home/PainSection';
import OutcomeSection from '../components/home/OutcomeSection';
import BridgeProcessSection from '../components/home/BridgeProcessSection';
import RoiCalculatorSection from '../components/home/RoiCalculatorSection';
import ChecklistPmoc from '../components/home/ChecklistPmoc';
import ComparisonTableSection from '../components/home/ComparisonTableSection';
import AcademiaAuthoritySection from '../components/home/AcademiaAuthoritySection';
import FaqSection from '../components/home/FaqSection';
import ScarcityCtaSection from '../components/home/ScarcityCtaSection';
import IndiceSecoes from '../components/layout/IndiceSecoes';

const SECOES = [
  { id: 'inicio', nome: 'Início' },
  { id: 'risco', nome: 'Risco' },
  { id: 'entrega', nome: 'O que entregamos' },
  { id: 'metodo', nome: 'Método' },
  { id: 'calculadora', nome: 'Calculadora' },
  { id: 'checklist', nome: 'Checklist' },
  { id: 'comparativo', nome: 'Comparativo' },
  { id: 'especialista', nome: 'Especialista' },
  { id: 'faq', nome: 'Perguntas' },
  { id: 'diagnostico', nome: 'Diagnóstico' },
];

export default function Home() {
  const irParaRisco = () => {
    document.getElementById('risco')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  return (
    <>
      <IndiceSecoes secoes={SECOES} />
      <div id="inicio">
        <HeroSection onScrollToPain={irParaRisco} />
      </div>
      <PainSection />
      <OutcomeSection />
      <BridgeProcessSection />
      <RoiCalculatorSection />
      <ChecklistPmoc />
      <ComparisonTableSection />
      <AcademiaAuthoritySection />
      <FaqSection />
      <ScarcityCtaSection />
    </>
  );
}
