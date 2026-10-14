// src/data/conversas/manifesto.js

/**
 * Kill-switch global do formato "Papo de Balcão".
 * Se alterado para `false`, todas as abas de conversa desaparecem imediatamente
 * nos leitores de aula e o comportamento anterior é 100% restaurado.
 */
export const PAPO_ATIVO = true;

/**
 * Mapa síncrono de roteiros publicados (`cursoId/aulaId` -> `'publicado'`).
 * Mantido pequeno e síncrono para que os leitores decidam instantaneamente
 * se a aba "☕ Papo de Balcão" deve aparecer sem baixar os chunks dos roteiros.
 */
export const MANIFESTO_CONVERSAS = {
  'instalacao-hvac/01-01': 'publicado',
  'manutencao-hvac/m01-01': 'publicado',
  'tvr-pro-co-380v/01-01': 'publicado',
};

/**
 * Verifica sincronicamente se uma aula possui roteiro "Papo de Balcão" publicado.
 * @param {string} cursoId
 * @param {string|number} aulaId
 * @returns {boolean}
 */
export function temConversa(cursoId, aulaId) {
  if (!PAPO_ATIVO || !cursoId || aulaId === undefined || aulaId === null) {
    return false;
  }
  const chave = `${String(cursoId)}/${String(aulaId)}`;
  return MANIFESTO_CONVERSAS[chave] === 'publicado';
}

/**
 * Calcula a aba inicial respeitando a precedência do Master Plan (Seção 3.5):
 * 1. `defaultTab` explícito da aula (se existir)
 * 2. `'conversa'` se houver Papo de Balcão publicado para `cursoId/aulaId`
 * 3. `fallbackTab` padrão do leitor (ex.: `'conteudo'`)
 */
export function resolverAbaInicial(cursoId, aula, fallbackTab = 'conteudo') {
  if (aula?.defaultTab) {
    return aula.defaultTab;
  }
  if (aula?.id && temConversa(cursoId, aula.id)) {
    return 'conversa';
  }
  return fallbackTab;
}
