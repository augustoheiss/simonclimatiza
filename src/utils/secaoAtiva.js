// Decide qual seção do índice (src/components/layout/IndiceSecoes.jsx) está "ativa" enquanto a página rola.
// Sem React e sem DOM, para ser testada com `npm test`. O componente mede as seções no navegador e passa o resultado.
//
// medidas: [{ id, topo, fundo }], posições das seções em relação ao topo da JANELA, em px.
// linha:   posição da faixa de leitura, em px do topo da janela (abaixo do cabeçalho fixo e do índice).
// fimDaPagina: true quando a rolagem chegou ao fim. Aí vale a ÚLTIMA seção: sem isso, numa página com uma seção
//   muito alta (como #servicos em /servicos) a última seção, curta, nunca chegaria a ficar ativa.

export function escolherSecaoAtiva(medidas, linha, fimDaPagina) {
  const validas = (Array.isArray(medidas) ? medidas : [])
    .filter((m) => m && Number.isFinite(m.topo) && Number.isFinite(m.fundo))
    .sort((a, b) => a.topo - b.topo); // pela posição, não pela ordem em que vieram

  if (validas.length === 0) return null;
  if (fimDaPagina) return validas[validas.length - 1].id;

  // A última seção que já começou até a linha de leitura. Na fronteira exata vale a que COMEÇA ali.
  let ativa = validas[0];
  for (const m of validas) {
    if (m.topo <= linha) ativa = m;
  }
  return ativa.id;
}
