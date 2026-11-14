import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

function obterElementosFocaveis(container) {
  if (!container) return [];
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
    (el) => el.getClientRects().length > 0 && !el.hasAttribute('inert')
  );
}

/**
 * Gerencia acessibilidade de diálogos e gavetas modais:
 * - Captura o elemento focado antes da abertura e devolve o foco ao fechar;
 * - Move o foco inicial para `initialFocusRef` (ou 1o elemento focável / container);
 * - Prende Tab / Shift+Tab dentro do container;
 * - Fecha ao pressionar Escape.
 */
export function useModalFocusTrap(isOpen, containerRef, onClose, initialFocusRef = null) {
  const onCloseRef = useRef(onClose);
  const previousFocusRef = useRef(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      if (wasOpenRef.current) {
        wasOpenRef.current = false;
        const prev = previousFocusRef.current;
        previousFocusRef.current = null;
        if (prev && typeof prev.focus === 'function' && prev.isConnected) {
          requestAnimationFrame(() => prev.focus());
        }
      }
      return undefined;
    }

    wasOpenRef.current = true;
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const rafId = requestAnimationFrame(() => {
      const container = containerRef?.current;
      if (!container) return;
      const target =
        initialFocusRef?.current && container.contains(initialFocusRef.current)
          ? initialFocusRef.current
          : obterElementosFocaveis(container)[0] || container;
      if (typeof target?.focus === 'function') {
        target.focus();
      }
    });

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        onCloseRef.current?.();
        return;
      }

      if (event.key !== 'Tab') return;
      const container = containerRef?.current;
      if (!container) return;
      const focusables = obterElementosFocaveis(container);
      if (focusables.length === 0) {
        event.preventDefault();
        container.focus?.();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey) {
        if (active === first || !container.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last || !container.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [isOpen, containerRef, initialFocusRef]);
}
