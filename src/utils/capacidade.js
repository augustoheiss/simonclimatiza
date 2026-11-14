// Lógica do somador de capacidade da calculadora da Home. Sem React e sem DOM, para ser testada com `npm test`.
//
// A regra do PMOC usa a capacidade de refrigeração SOMADA do edifício: a partir de 60.000 BTU/h (5 TR).
// O limite foi confirmado pelo curso do Simon, não por consulta à lei (pendência G-D do plano de 2026-11-14).
// O somador só classifica; a frase "PMOC obrigatório pela Lei 13.589/2018" continua no bloco de veredito
// da calculadora (RoiCalculatorSection.jsx) e não é repetida aqui.

export const LIMITE_PMOC_BTU = 60000;
export const BTU_POR_TR = 12000;
export const TAMANHOS_BTU = [9000, 12000, 18000, 24000, 36000, 60000];

const TR_MAXIMO = 999;

// Lê o campo "Chillers e VRF, total em TR". Aceita vírgula ou ponto ("2,5" e "2.5"), campo vazio vale 0.
// Texto que ainda não é número ("2," a caminho de "2,5") devolve ok:false; quem chama decide quando avisar
// (o somador só avisa ao sair do campo) e mantém o total anterior enquanto o texto for inválido.
export function normalizarTR(texto) {
  const bruto = String(texto ?? '').trim().replace(',', '.');
  if (bruto === '') return { ok: true, valor: 0 };
  if (!/^\d+(\.\d+)?$/.test(bruto)) return { ok: false, valor: 0 };
  return { ok: true, valor: Math.min(Number(bruto), TR_MAXIMO) };
}

// Aviso do campo de TR. Só aparece quando a pessoa SAI do campo com texto que não é número: durante a
// digitação nunca avisa, porque "2," a caminho de "2,5" ainda não é um erro. Devolve null quando não há aviso.
export function avisoDoCampoTR(texto, { saiuDoCampo }) {
  if (!saiuDoCampo) return null;
  return normalizarTR(texto).ok ? null : 'Digite só números, por exemplo 2,5.';
}

// quantidades: { 9000: 2, 12000: 1, ... } (aparelhos por tamanho em BTU/h); tr: total de chillers/VRF em TR.
export function somarCapacidade(quantidades, tr) {
  const aparelhos = Object.entries(quantidades ?? {}).reduce((soma, [btu, qtd]) => {
    const n = Number(qtd);
    return Number.isFinite(n) && n > 0 ? soma + Number(btu) * n : soma;
  }, 0);
  const trValido = Number.isFinite(tr) && tr > 0 ? tr : 0;
  return Math.round(aparelhos + trValido * BTU_POR_TR);
}

// 'vazio' (nada somado), 'abaixo' (< 60.000 BTU/h) ou 'acima' (>= 60.000 BTU/h, 5 TR já conta como acima).
export function classificarCapacidade(totalBtu) {
  if (!(totalBtu > 0)) return 'vazio';
  return totalBtu >= LIMITE_PMOC_BTU ? 'acima' : 'abaixo';
}
