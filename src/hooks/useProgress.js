import { useCallback, useMemo, useSyncExternalStore } from 'react';

/**
 * useProgress — Custom hook for localStorage-based course progress tracking.
 *
 * Storage shape: { [cursoId]: [aulaId1, aulaId2, ...] }
 * Key: "simon_progresso"
 *
 * Unifies course IDs between catalog routes (`instalacao-hvac-completo`,
 * `manutencao-hvac-completo`) and internal reader IDs (`instalacao-hvac`,
 * `manutencao-hvac`) so both the Lesson Readers and `Certificados.jsx`
 * read and update the exact same progress state.
 */

const STORAGE_KEY = 'simon_progresso';

const COURSE_ID_ALIASES = {
  'instalacao-hvac': ['instalacao-hvac', 'instalacao-hvac-completo'],
  'instalacao-hvac-completo': ['instalacao-hvac', 'instalacao-hvac-completo'],
  'manutencao-hvac': ['manutencao-hvac', 'manutencao-hvac-completo'],
  'manutencao-hvac-completo': ['manutencao-hvac', 'manutencao-hvac-completo'],
};

function getEquivalentIds(cursoId) {
  return COURSE_ID_ALIASES[cursoId] || [cursoId];
}

/* ── External store for cross-component reactivity ── */

let listeners = [];

function subscribe(listener) {
  listeners = [...listeners, listener];
  const onStorage = (e) => {
    if (e.key === STORAGE_KEY) listener();
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', onStorage);
  }
  return () => {
    listeners = listeners.filter((l) => l !== listener);
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', onStorage);
    }
  };
}

export function notifyProgressListeners() {
  listeners.forEach((l) => l());
}

function getSnapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY) || '{}';
  } catch {
    return '{}';
  }
}

/* ── Helper: parse & save storage safely ── */
export function parseProgressStorage() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

export function saveProgressStorage(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Ignore storage quota / private mode errors
  }
  notifyProgressListeners();
}

export function marcarAulaConcluidaDireto(cursoId, aulaId) {
  if (!cursoId || aulaId === undefined || aulaId === null) return;
  const data = parseProgressStorage();
  const ids = getEquivalentIds(cursoId);
  let alterado = false;
  for (const id of ids) {
    const current = data[id] || [];
    if (!current.includes(aulaId)) {
      data[id] = [...current, aulaId];
      alterado = true;
    }
  }
  if (alterado) {
    saveProgressStorage(data);
  }
}

/* ── Hook ── */

export default function useProgress() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, () => '{}');
  const progress = useMemo(() => {
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }, [raw]);

  /** Mark a lesson as completed */
  const marcarAulaComoConcluida = useCallback((cursoId, aulaId) => {
    marcarAulaConcluidaDireto(cursoId, aulaId);
  }, []);

  /** Unmark a lesson */
  const desmarcarAula = useCallback((cursoId, aulaId) => {
    const data = parseProgressStorage();
    for (const id of getEquivalentIds(cursoId)) {
      const current = data[id] || [];
      data[id] = current.filter((item) => item !== aulaId);
    }
    saveProgressStorage(data);
  }, []);

  /** Toggle a lesson's completion state */
  const toggleAula = useCallback((cursoId, aulaId) => {
    const data = parseProgressStorage();
    const ids = getEquivalentIds(cursoId);
    const primary = data[ids[0]] || [];
    const jaConcluida = primary.includes(aulaId);

    for (const id of ids) {
      const current = data[id] || [];
      if (jaConcluida) {
        data[id] = current.filter((item) => item !== aulaId);
      } else if (!current.includes(aulaId)) {
        data[id] = [...current, aulaId];
      }
    }
    saveProgressStorage(data);
  }, []);

  /** Get progress info for a course */
  const getProgressoCurso = useCallback(
    (cursoId, totalAulas) => {
      const ids = getEquivalentIds(cursoId);
      const setUnico = new Set();
      for (const id of ids) {
        for (const aId of progress[id] || []) {
          if (aId !== 'apresentacao') {
            setUnico.add(aId);
          }
        }
      }
      const concluidas = [...setUnico];
      const count = concluidas.length;
      const total = totalAulas;
      const percentual = total > 0 ? Math.min(100, Math.round((count / total) * 100)) : 0;
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
      for (const id of getEquivalentIds(cursoId)) {
        const concluidas = progress[id] || [];
        if (concluidas.includes(aulaId)) return true;
      }
      return false;
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
