// src/pages/AcademiaPlayer.jsx
// Workstation Interativa Zero-Scroll (Estilo AutoCAD) para os cursos VRF (sistemavrf) e TVR Pro (tvrpro).

import React from 'react';
import { useParams } from 'react-router-dom';
import SimonCadWorkbench from '../components/workbench/SimonCadWorkbench';

export default function AcademiaPlayer() {
  const { id } = useParams();
  const cursoId = id || 'sistemavrf';
  return <SimonCadWorkbench cursoId={cursoId} initialViewport="bancada" />;
}
