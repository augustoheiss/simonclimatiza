// Média do desperdício mensal por aparelho, para a linha nova da calculadora da Home.
// É a divisão do MESMO desperdício estimado que a calculadora já mostra; não é uma segunda estimativa.
// Aparelhos diferentes gastam diferente, então o texto da tela diz "média" e mantém a nota de estimativa.

export function mediaPorAparelho(desperdicioMensal, aparelhos) {
  if (!Number.isFinite(desperdicioMensal) || !Number.isFinite(aparelhos) || aparelhos < 1) return 0;
  return Math.round(desperdicioMensal / aparelhos);
}
