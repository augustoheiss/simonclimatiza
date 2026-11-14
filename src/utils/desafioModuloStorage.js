export function chaveDesafioModuloStorage(cursoId, moduloId) {
  return `simon_modulo_boss_v1_${cursoId}_${moduloId}`;
}

export function lerStatusDesafioModulo(cursoId, moduloId) {
  if (typeof window === 'undefined' || !cursoId || !moduloId) return null;
  try {
    const raw = window.localStorage.getItem(chaveDesafioModuloStorage(cursoId, moduloId));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function salvarStatusDesafioModulo(cursoId, moduloId, payload) {
  if (typeof window === 'undefined' || !cursoId || !moduloId) return;
  try {
    window.localStorage.setItem(
      chaveDesafioModuloStorage(cursoId, moduloId),
      JSON.stringify(payload),
    );
  } catch {
    // Ignora erro de cota no localStorage
  }
}
