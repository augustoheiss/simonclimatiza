// Trava a rolagem da página enquanto um <dialog> modal está aberto (a página de trás não pode rolar,
// em especial no iOS Safari).
//
// Recebe o elemento (document.documentElement) para ser testável sem navegador.
// Funciona com contagem: o valor original de `overflow` é guardado na PRIMEIRA trava e só volta quando a
// ÚLTIMA solta. Assim, o ciclo efeito → cleanup → efeito do React Strict Mode (e dois diálogos seguidos)
// nunca deixa a página destravada nem com um valor errado.

const travas = new WeakMap(); // elemento -> { quantidade, original }

export function travarRolagem(elemento) {
  let estado = travas.get(elemento);
  if (!estado) {
    estado = { quantidade: 0, original: elemento.style.overflow };
    travas.set(elemento, estado);
  }
  estado.quantidade += 1;
  elemento.style.overflow = 'hidden';

  let solta = false;
  return function soltar() {
    if (solta) return; // soltar duas vezes a mesma trava não conta duas vezes
    solta = true;
    estado.quantidade -= 1;
    if (estado.quantidade === 0) {
      elemento.style.overflow = estado.original;
      travas.delete(elemento);
    }
  };
}
