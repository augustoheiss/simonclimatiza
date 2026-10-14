// src/hooks/useConversaProgress.js
import { useCallback, useSyncExternalStore } from 'react';
import { marcarAulaConcluidaDireto } from './useProgress';

/**
 * useConversaProgress — Progresso isolado do "Papo de Balcão" por `cursoId/aulaId`.
 *
 * Chaves no localStorage:
 * - `simon_conversa_v1`: { ["cursoId/aulaId"]: { ultimoBeat, respostas, concluida, atualizadoEm } }
 * - `simon_conversa_prefs_v1`: { modo: "passo" | "transcricao" }
 *
 * Ao concluir a conversa (`marcarConcluida`), sincroniza automaticamente com
 * `simon_progresso` (`useProgress`) para contabilizar no progresso do curso e Certificado.
 */

const STORAGE_KEY = 'simon_conversa_v1';
const PREFS_KEY = 'simon_conversa_prefs_v1';

let memoryProgress = '{}';
let memoryPrefs = '{"modo":"passo"}';
let listeners = [];

function subscribe(listener) {
  listeners = [...listeners, listener];
  const onStorage = (e) => {
    if (e.key === STORAGE_KEY || e.key === PREFS_KEY) {
      listener();
    }
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

function notify() {
  listeners.forEach((l) => l());
}

function readStorage(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? val : fallback;
  } catch {
    return key === PREFS_KEY ? memoryPrefs : memoryProgress;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    if (key === PREFS_KEY) {
      memoryPrefs = value;
    } else {
      memoryProgress = value;
    }
  }
  notify();
}

function getProgressSnapshot() {
  return readStorage(STORAGE_KEY, memoryProgress);
}

function getPrefsSnapshot() {
  return readStorage(PREFS_KEY, memoryPrefs);
}

function parseJsonSafe(raw, fallbackObj) {
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : fallbackObj;
  } catch {
    return fallbackObj;
  }
}

export function buildConversaKey(cursoId, aulaId) {
  return `${String(cursoId)}/${String(aulaId)}`;
}

/**
 * Hook leve para a grade de módulos consultar quais aulas já tiveram o Papo de Balcão concluído.
 */
export function useConversasCurso(cursoId) {
  const rawProgress = useSyncExternalStore(subscribe, getProgressSnapshot, () => '{}');
  const allProgress = parseJsonSafe(rawProgress, {});

  const isConversaConcluida = useCallback(
    (aulaId) => {
      const chave = buildConversaKey(cursoId, aulaId);
      return Boolean(allProgress[chave]?.concluida);
    },
    [allProgress, cursoId]
  );

  return { isConversaConcluida };
}

export default function useConversaProgress(cursoId, aulaId) {
  const chave = buildConversaKey(cursoId, aulaId);
  const rawProgress = useSyncExternalStore(subscribe, getProgressSnapshot, () => '{}');
  const rawPrefs = useSyncExternalStore(subscribe, getPrefsSnapshot, () => '{"modo":"passo"}');

  const allProgress = parseJsonSafe(rawProgress, {});
  const prefs = parseJsonSafe(rawPrefs, { modo: 'passo' });

  const item = allProgress[chave] || {
    ultimoBeat: null,
    respostas: {},
    concluida: false,
    atualizadoEm: null,
  };

  const registrarBeat = useCallback(
    (beatId) => {
      if (!beatId) return;
      const atual = parseJsonSafe(getProgressSnapshot(), {});
      const prev = atual[chave] || { ultimoBeat: null, respostas: {}, concluida: false };
      atual[chave] = {
        ...prev,
        ultimoBeat: beatId,
        atualizadoEm: new Date().toISOString(),
      };
      writeStorage(STORAGE_KEY, JSON.stringify(atual));
    },
    [chave]
  );

  const registrarResposta = useCallback(
    (beatId, valorResposta) => {
      if (!beatId) return;
      const atual = parseJsonSafe(getProgressSnapshot(), {});
      const prev = atual[chave] || { ultimoBeat: null, respostas: {}, concluida: false };
      atual[chave] = {
        ...prev,
        ultimoBeat: beatId,
        respostas: {
          ...(prev.respostas || {}),
          [beatId]: valorResposta,
        },
        atualizadoEm: new Date().toISOString(),
      };
      writeStorage(STORAGE_KEY, JSON.stringify(atual));
    },
    [chave]
  );

  const marcarConcluida = useCallback(
    (ultimoBeatId) => {
      const atual = parseJsonSafe(getProgressSnapshot(), {});
      const prev = atual[chave] || { ultimoBeat: null, respostas: {}, concluida: false };
      atual[chave] = {
        ...prev,
        ultimoBeat: ultimoBeatId || prev.ultimoBeat,
        concluida: true,
        atualizadoEm: new Date().toISOString(),
      };
      writeStorage(STORAGE_KEY, JSON.stringify(atual));
      // Sincroniza conclusão da aula no progresso global do curso
      marcarAulaConcluidaDireto(cursoId, aulaId);
    },
    [chave, cursoId, aulaId]
  );

  const reiniciarConversa = useCallback(() => {
    const atual = parseJsonSafe(getProgressSnapshot(), {});
    delete atual[chave];
    writeStorage(STORAGE_KEY, JSON.stringify(atual));
  }, [chave]);

  const definirModo = useCallback((novoModo) => {
    const modoValido = novoModo === 'transcricao' ? 'transcricao' : 'passo';
    const atuais = parseJsonSafe(getPrefsSnapshot(), { modo: 'passo' });
    writeStorage(PREFS_KEY, JSON.stringify({ ...atuais, modo: modoValido }));
  }, []);

  return {
    chave,
    ultimoBeat: item.ultimoBeat,
    respostas: item.respostas || {},
    concluida: Boolean(item.concluida),
    atualizadoEm: item.atualizadoEm,
    modoPreferido: prefs.modo === 'transcricao' ? 'transcricao' : 'passo',
    registrarBeat,
    registrarResposta,
    marcarConcluida,
    reiniciarConversa,
    definirModo,
  };
}
