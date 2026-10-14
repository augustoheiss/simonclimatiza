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
  // Curso 1: Instalação de Ar-Condicionado e Climatização (21 aulas)
  'instalacao-hvac/apresentacao': 'publicado',
  'instalacao-hvac/01-01': 'publicado',
  'instalacao-hvac/01-02': 'publicado',
  'instalacao-hvac/01-03': 'publicado',
  'instalacao-hvac/01-04': 'publicado',
  'instalacao-hvac/02-01': 'publicado',
  'instalacao-hvac/02-02': 'publicado',
  'instalacao-hvac/02-03': 'publicado',
  'instalacao-hvac/03-01': 'publicado',
  'instalacao-hvac/03-02': 'publicado',
  'instalacao-hvac/03-03': 'publicado',
  'instalacao-hvac/04-01': 'publicado',
  'instalacao-hvac/04-02': 'publicado',
  'instalacao-hvac/04-03': 'publicado',
  'instalacao-hvac/05-01': 'publicado',
  'instalacao-hvac/05-02': 'publicado',
  'instalacao-hvac/05-03': 'publicado',
  'instalacao-hvac/05-04': 'publicado',
  'instalacao-hvac/06-01': 'publicado',
  'instalacao-hvac/07-01': 'publicado',
  'instalacao-hvac/07-02': 'publicado',

  // Curso 2: Manutenção e Diagnóstico em Climatização (26 aulas)
  'manutencao-hvac/apresentacao': 'publicado',
  'manutencao-hvac/m01-01': 'publicado',
  'manutencao-hvac/m01-02': 'publicado',
  'manutencao-hvac/m01-03': 'publicado',
  'manutencao-hvac/m02-01': 'publicado',
  'manutencao-hvac/m02-02': 'publicado',
  'manutencao-hvac/m02-03': 'publicado',
  'manutencao-hvac/m03-01': 'publicado',
  'manutencao-hvac/m03-02': 'publicado',
  'manutencao-hvac/m03-03': 'publicado',
  'manutencao-hvac/m03-04': 'publicado',
  'manutencao-hvac/m04-01': 'publicado',
  'manutencao-hvac/m04-02': 'publicado',
  'manutencao-hvac/m04-03': 'publicado',
  'manutencao-hvac/m05-01': 'publicado',
  'manutencao-hvac/m05-02': 'publicado',
  'manutencao-hvac/m06-01': 'publicado',
  'manutencao-hvac/m06-02': 'publicado',
  'manutencao-hvac/m06-03': 'publicado',
  'manutencao-hvac/m06-04': 'publicado',
  'manutencao-hvac/m07-01': 'publicado',
  'manutencao-hvac/m07-02': 'publicado',
  'manutencao-hvac/m07-03': 'publicado',
  'manutencao-hvac/m08-01': 'publicado',
  'manutencao-hvac/m08-02': 'publicado',
  'manutencao-hvac/m08-03': 'publicado',

  // Curso 3: TVR Pro Cooling Only 380V (16 aulas)
  'tvr-pro-co-380v/01-01': 'publicado',
  'tvr-pro-co-380v/01-02': 'publicado',
  'tvr-pro-co-380v/02-01': 'publicado',
  'tvr-pro-co-380v/02-02': 'publicado',
  'tvr-pro-co-380v/02-03': 'publicado',
  'tvr-pro-co-380v/03-01': 'publicado',
  'tvr-pro-co-380v/03-02': 'publicado',
  'tvr-pro-co-380v/03-03': 'publicado',
  'tvr-pro-co-380v/03-04': 'publicado',
  'tvr-pro-co-380v/04-01': 'publicado',
  'tvr-pro-co-380v/05-01': 'publicado',
  'tvr-pro-co-380v/05-02': 'publicado',
  'tvr-pro-co-380v/06-01': 'publicado',
  'tvr-pro-co-380v/06-02': 'publicado',
  'tvr-pro-co-380v/06-03': 'publicado',
  'tvr-pro-co-380v/06-04': 'publicado',

  // Curso 4: Sistema VRF — Engenharia e Diagnóstico (8 aulas)
  'sistemavrf/1': 'publicado',
  'sistemavrf/2': 'publicado',
  'sistemavrf/3': 'publicado',
  'sistemavrf/4': 'publicado',
  'sistemavrf/5': 'publicado',
  'sistemavrf/6': 'publicado',
  'sistemavrf/7': 'publicado',
  'sistemavrf/8': 'publicado',

  // Curso 5: Linha TVR Pro — Guia Mestre de Engenharia (8 aulas)
  'tvrpro/1': 'publicado',
  'tvrpro/2': 'publicado',
  'tvrpro/3': 'publicado',
  'tvrpro/4': 'publicado',
  'tvrpro/5': 'publicado',
  'tvrpro/6': 'publicado',
  'tvrpro/7': 'publicado',
  'tvrpro/8': 'publicado',
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
