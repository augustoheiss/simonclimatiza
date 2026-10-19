// src/pages/TreinamentoManutencao.jsx
// Workstation Interativa Zero-Scroll (Estilo AutoCAD) para o Curso Avançado de Manutenção HVAC.

import React from 'react';
import SimonCadWorkbench from '../components/workbench/SimonCadWorkbench';

export default function TreinamentoManutencao() {
  return <SimonCadWorkbench cursoId="manutencao-hvac" initialLessonId="m02-01" initialViewport="bancada" />;
}
