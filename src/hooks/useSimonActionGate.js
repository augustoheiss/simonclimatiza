import { useState, useCallback } from 'react';

/**
 * Hook para gerenciar ações na bancada:
 * - Botões COM título visível: executam direto no primeiro clique.
 * - Botões SOMENTE ÍCONE (`iconOnly: true`): exibem modal de inspeção e confirmação.
 */
export function useSimonActionGate() {
  const [pendingAction, setPendingAction] = useState(null);

  const requestAction = useCallback((actionSpec) => {
    if (!actionSpec) return;
    if (actionSpec.isAlreadyActive) {
      return;
    }
    if (!actionSpec.iconOnly) {
      if (typeof actionSpec.onConfirm === 'function') {
        actionSpec.onConfirm();
      }
      return;
    }
    setPendingAction(actionSpec);
  }, []);

  const confirmAction = useCallback(() => {
    if (pendingAction && typeof pendingAction.onConfirm === 'function') {
      const fn = pendingAction.onConfirm;
      setPendingAction(null);
      fn();
    } else {
      setPendingAction(null);
    }
  }, [pendingAction]);

  const cancelAction = useCallback(() => {
    setPendingAction(null);
  }, []);

  return {
    pendingAction,
    requestAction,
    confirmAction,
    cancelAction,
    directMode: true,
    setDirectMode: () => {},
  };
}
