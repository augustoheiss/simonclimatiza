import { useEffect, useState } from 'react';

export function calcularEstadoOverflow(el, tolerancia = 2) {
  if (!el || typeof el !== 'object') {
    return { hasOverflowLeft: false, hasOverflowRight: false };
  }
  const { scrollLeft = 0, scrollWidth = 0, clientWidth = 0 } = el;
  const scrollable = scrollWidth > clientWidth + tolerancia;
  return {
    hasOverflowLeft: scrollable && scrollLeft > tolerancia,
    hasOverflowRight: scrollable && scrollLeft + clientWidth < scrollWidth - tolerancia,
  };
}

/**
 * Monitora uma faixa horizontal rolável e indica se há conteúdo oculto à esquerda ou à direita.
 */
export function useHorizontalOverflow(scrollRef, depsKey = '') {
  const [estado, setEstado] = useState({ hasOverflowLeft: false, hasOverflowRight: false });

  useEffect(() => {
    const el = scrollRef?.current;
    if (!el) return undefined;

    const atualizar = () => {
      const proximo = calcularEstadoOverflow(el);
      setEstado((anterior) =>
        anterior.hasOverflowLeft === proximo.hasOverflowLeft &&
        anterior.hasOverflowRight === proximo.hasOverflowRight
          ? anterior
          : proximo
      );
    };

    const rafId = requestAnimationFrame(atualizar);
    el.addEventListener('scroll', atualizar, { passive: true });

    let observer = null;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(atualizar);
      observer.observe(el);
    }

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener('scroll', atualizar);
      observer?.disconnect();
    };
  }, [scrollRef, depsKey]);

  return estado;
}
