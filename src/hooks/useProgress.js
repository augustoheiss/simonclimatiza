import { useState, useCallback, useSyncExternalStore } from 'react';

/**
 * useProgress — Custom hook for localStorage-based course progress tracking.
 *
 * Storage shape: { [cursoId]: [aulaId1, aulaId2, ...] }
 * Key: "simon_progresso"
 *
 * Provides reactive state via useSyncExternalStore so all mounted
 * components using this hook update when progress changes (even
 * across tabs via the 'storage' event).
 */

const STORAGE_KEY = 'simon_progresso';

/* ── External store for cross-component reactivity ── */

let listeners = [];

function subscribe(listener) {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function notify() {
  listeners.forEach((l) => l());
}

function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY) || '{}';
}

/* ── Helper: parse storage safely ── */
function parseProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  notify();
}

/* ── Hook ── */

export default function useProgress() {
  // Reactive subscription to localStorage changes
  const raw = useSyncExternalStore(subscribe, getSnapshot);
  const progress = JSON.parse(raw);

  /** Mark a lesson as completed */
  const marcarAulaComoConcluida = useCallback((cursoId, aulaId) => {
    const data = parseProgress();
    const current = data[cursoId] || [];
    if (!current.includes(aulaId)) {
      data[cursoId] = [...current, aulaId];
      saveProgress(data);
    }
  }, []);

  /** Unmark a lesson */
  const desmarcarAula = useCallback((cursoId, aulaId) => {
    const data = parseProgress();
    const current = data[cursoId] || [];
    data[cursoId] = current.filter((id) => id !== aulaId);
    saveProgress(data);
  }, []);

  /** Toggle a lesson's completion state */
  const toggleAula = useCallback((cursoId, aulaId) => {
    const data = parseProgress();
    const current = data[cursoId] || [];
    if (current.includes(aulaId)) {
      data[cursoId] = current.filter((id) => id !== aulaId);
    } else {
      data[cursoId] = [...current, aulaId];
    }
    saveProgress(data);
  }, []);

  /** Get progress info for a course */
  const getProgressoCurso = useCallback(
    (cursoId, totalAulas) => {
      const concluidas = progress[cursoId] || [];
      const count = concluidas.length;
      const total = totalAulas;
      const percentual = total > 0 ? Math.round((count / total) * 100) : 0;
      return {
        concluidas,
        count,
        total,
        percentual,
        completo: count >= total && total > 0,
      };
    },
    [progress]
  );

  /** Check if a specific lesson is completed */
  const isAulaConcluida = useCallback(
    (cursoId, aulaId) => {
      const concluidas = progress[cursoId] || [];
      return concluidas.includes(aulaId);
    },
    [progress]
  );

  return {
    marcarAulaComoConcluida,
    desmarcarAula,
    toggleAula,
    getProgressoCurso,
    isAulaConcluida,
  };
}
