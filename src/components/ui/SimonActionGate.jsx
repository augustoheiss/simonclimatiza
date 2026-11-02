import React, { useState, useEffect, useCallback } from 'react';
import {
  CheckCircle2,
  X,
  Compass,
  Sparkles,
  Layers,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import certBg from '../../assets/fundo-certificado.png';

/**
 * Hook para gerenciar ações na bancada:
 * - Botões COM título visível (padrão no Simon Climatiza): abrem direto no 1º clique!
 * - Botões SOMENTE ÍCONE (`iconOnly: true`, sem título visível): exibem o card de inspeção
 *   mostrando o que o ícone faz e pedem confirmação antes de executar.
 */
export function useSimonActionGate() {
  const [pendingAction, setPendingAction] = useState(null);

  const requestAction = useCallback((actionSpec) => {
    if (!actionSpec) return;
    if (actionSpec.isAlreadyActive) {
      return;
    }
    // Se o botão já possui título visível (não é apenas um ícone isolado), abre direto!
    if (!actionSpec.iconOnly) {
      if (typeof actionSpec.onConfirm === 'function') {
        actionSpec.onConfirm();
      }
      return;
    }
    // Somente se for um botão apenas de ícone (iconOnly: true), exibe a funcionalidade e pede confirmação
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

/**
 * Mantido como no-op caso seja importado em algum cabeçalho, pois botões com título já abrem direto.
 */
export function SimonDirectModeToggle() {
  return null;
}

/**
 * Modal / Popover de Inspeção de Função e Confirmação (Exibido apenas para botões que são somente ícone)
 */
export function SimonActionGate({ action, onConfirm, onCancel }) {
  useEffect(() => {
    if (!action) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCancel?.();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        onConfirm?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [action, onConfirm, onCancel]);

  if (!action) return null;

  const {
    code = 'CAD-ICO',
    category = 'Inspeção de Ferramenta (Ícone)',
    title = 'Executar Função na Bancada',
    subtitle = '',
    description = 'Esta ferramenta atualiza a bancada central interativa sem necessidade de rolar a página.',
    highlights = [],
    confirmLabel = 'Confirmar e Abrir Função',
    badgeColor = 'sky',
    meta = null,
  } = action;

  const badgeStyles = {
    sky: 'bg-sky-100 text-[#0369a1] border-sky-300',
    emerald: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    amber: 'bg-amber-100 text-amber-800 border-amber-300',
    indigo: 'bg-indigo-100 text-indigo-800 border-indigo-300',
  };

  return (
    <div
      className="fixed inset-0 z-[120] bg-sky-950/35 backdrop-blur-[3px] flex items-center justify-center p-4 animate-fade-in"
      onClick={onCancel}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white border-2 border-[#1a3a5c]/80 shadow-[0_24px_60px_rgba(12,74,110,0.25)] overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Textura do Certificado no fundo */}
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url(${certBg})` }}
        />

        {/* Moldura dupla interna estilo Certificado Simon */}
        <div className="relative z-10 m-1.5 rounded-xl border border-sky-300/80 bg-gradient-to-b from-sky-50/80 via-white/95 to-sky-50/60 overflow-hidden">
          {/* Top Bar */}
          <div className="px-5 py-3.5 bg-gradient-to-r from-sky-100/90 via-white to-sky-100/80 border-b border-sky-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span
                className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-extrabold uppercase tracking-widest border ${
                  badgeStyles[badgeColor] || badgeStyles.sky
                }`}
              >
                {code}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1a3a5c] truncate flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#0284c7] shrink-0" />
                {category}
              </span>
            </div>

            <button
              type="button"
              onClick={onCancel}
              className="w-7 h-7 rounded-lg bg-white hover:bg-sky-50 text-slate-500 hover:text-slate-900 border border-sky-200 flex items-center justify-center transition-colors shrink-0"
              title="Cancelar (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 space-y-4">
            <div>
              {subtitle && (
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#0284c7] mb-0.5">
                  {subtitle}
                </div>
              )}
              <h3 className="text-lg sm:text-xl font-extrabold text-[#1a3a5c] leading-snug">
                {title}
              </h3>
            </div>

            {/* O que esta função exibe */}
            <div className="p-3.5 rounded-xl bg-sky-50/90 border border-sky-200/90 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#0369a1] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />O que este botão executa:
                </span>
                {meta && (
                  <span className="text-[10px] font-mono font-bold text-slate-600 bg-white px-2 py-0.5 rounded border border-sky-200">
                    {meta}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {description}
              </p>
            </div>

            {/* Entregáveis / Recursos da Função */}
            {Array.isArray(highlights) && highlights.length > 0 && (
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#0284c7]" />
                  Componentes carregados ao confirmar:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-0.5">
                  {highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2 rounded-lg bg-white border border-sky-200/80 text-xs text-slate-700 font-semibold shadow-2xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7] shrink-0 mt-0.5" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pergunta de Confirmação Sekundo */}
            <div className="pt-2 border-t border-sky-200/80 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2 text-xs font-bold text-[#1a3a5c]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  Deseja confirmar e ativar esta função?
                </span>
                <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                  [Enter] Confirmar &bull; [Esc] Cancelar
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onCancel}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={onConfirm}
                  autoFocus
                  className="px-5 py-2.5 rounded-xl bg-[#0369a1] hover:bg-[#0284c7] text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-sky-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>{confirmLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SimonActionGate;
