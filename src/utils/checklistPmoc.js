// Lógica do checklist de PMOC da Home. Sem React e sem DOM, para ser testada com `npm test`.
//
// Os itens são o protocolo da Simon (src/data/checklistPmoc.js), NÃO um mínimo legal. Por isso a mensagem fala
// em "itens que não marquei" e nunca em "o que falta": dizer "falta" a um visitante sugere que o plano dele é
// ilegal ou incompleto, e só dá para afirmar que ele difere do protocolo da Simon (decisão D4 do plano).
// A mensagem não leva nome, telefone nem e-mail do visitante: só os itens marcados.

// marcados: array de booleanos, um por item, na ordem da lista.
export function resumoChecklist(marcados) {
  const lista = Array.isArray(marcados) ? marcados : [];
  const naoMarcados = lista.flatMap((m, i) => (m ? [] : [i]));
  return { marcados: lista.length - naoMarcados.length, total: lista.length, naoMarcados };
}

const PEDIDO = 'Gostaria de pedir um diagnóstico do meu PMOC.';

// Texto que vai para o WhatsApp. O visitante lê esta mesma string antes de enviar (<details> da seção).
export function montarMensagemChecklist(marcados, itens) {
  const { marcados: n, total, naoMarcados } = resumoChecklist(marcados);
  if (n === 0) return `Olá! ${PEDIDO}`;

  const abertura = `Olá! Marquei ${n} de ${total} itens no checklist de PMOC do site.`;
  const ficaram = naoMarcados.length
    ? ` Itens que não marquei: ${naoMarcados.map((i) => itens[i].texto).join('; ')}.`
    : '';
  return `${abertura}${ficaram} ${PEDIDO}`;
}
