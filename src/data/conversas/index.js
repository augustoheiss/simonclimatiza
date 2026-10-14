// src/data/conversas/index.js
import { PAPO_ATIVO, temConversa, resolverAbaInicial } from './manifesto';

/**
 * Carregador sob demanda (lazy chunks via Vite `import.meta.glob`).
 * Cada arquivo `./<cursoId>/<aulaId>.js` vira um chunk separado no build,
 * evitando inflar o bundle principal.
 */
const modulosConversa = import.meta.glob('./*/*.js', { eager: false });

/**
 * Carrega de forma assíncrona o roteiro de conversa de `cursoId/aulaId`.
 * @param {string} cursoId
 * @param {string|number} aulaId
 * @returns {Promise<object|null>}
 */
export async function carregarConversa(cursoId, aulaId) {
  if (!PAPO_ATIVO || !temConversa(cursoId, aulaId)) {
    return null;
  }

  const caminho = `./${String(cursoId)}/${String(aulaId)}.js`;
  const importador = modulosConversa[caminho];

  if (!importador) {
    if (import.meta.env?.DEV) {
      console.warn(`[Papo de Balcão] Roteiro listado no manifesto mas arquivo ausente: ${caminho}`);
    }
    return null;
  }

  const modulo = await importador();
  const roteiro = modulo?.default || null;

  if (
    !roteiro ||
    roteiro.schema !== 1 ||
    roteiro.cursoId !== String(cursoId) ||
    roteiro.aulaId !== String(aulaId) ||
    roteiro.status !== 'publicado' ||
    !Array.isArray(roteiro.beats)
  ) {
    if (import.meta.env?.DEV) {
      console.error(`[Papo de Balcão] Roteiro inválido em runtime para ${caminho}`, roteiro);
    }
    return null;
  }

  return roteiro;
}

export { PAPO_ATIVO, temConversa, resolverAbaInicial };
