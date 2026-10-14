// src/data/desafiosModulo/index.js
// Registro dinâmico dos "Desafios da Rodada" (Boss Quizzes integradores de Fim de Módulo).

const arquivosDesafios = import.meta.glob('./*.js', { eager: true });

/**
 * Obtém a lista de desafios de módulo de um determinado curso.
 * @param {string} cursoId
 * @returns {Array}
 */
export function listarDesafiosDoCurso(cursoId) {
  const todos = [];
  for (const [caminho, mod] of Object.entries(arquivosDesafios)) {
    if (caminho.endsWith('index.js')) continue;
    const exportado = mod?.default || mod?.DESAFIOS_MODULO || [];
    if (Array.isArray(exportado)) {
      for (const d of exportado) {
        if (d && d.cursoId === String(cursoId)) {
          todos.push(d);
        }
      }
    }
  }
  return todos;
}

/**
 * Localiza o Desafio da Rodada correspondente ao módulo de uma aula (`cursoId`, `aulaId`).
 * @param {string} cursoId
 * @param {string|number} aulaId
 * @returns {object|null}
 */
export function obterDesafioPorAula(cursoId, aulaId) {
  const lista = listarDesafiosDoCurso(cursoId);
  const idStr = String(aulaId);
  return (
    lista.find(
      (d) =>
        Array.isArray(d.aulasCobertas) &&
        d.aulasCobertas.map(String).includes(idStr)
    ) ||
    lista[0] ||
    null
  );
}
