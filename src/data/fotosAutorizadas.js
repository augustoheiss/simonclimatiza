// Fotos do acervo que podem aparecer na Home (laudo de exemplo e método). Fica num arquivo próprio e pequeno
// para a Home importar só a lista sem levar junto o texto do laudo, que só baixa quando alguém abre o laudo.
//
// Lista de PERMISSÃO: uma foto nova só aparece depois de alguém liberar. A galeria de /servicos usa a lista
// inversa (IDS_SEM_AUTORIZACAO em src/components/servicos/ProvasGaleria.jsx, de bloqueio).
// post-13, extra-01 e extra-03 ficam fora das duas listas por decisão anterior.
// post-01 já aparece no hero em produção (recorte prova-vacuo-balanca.webp) desde a Fase 2; o Simon ainda não
// confirmou o uso como vitrine (pendência G-B do plano de 2026-11-14).
export const IDS_AUTORIZADOS_HOME = ['post-01'];
