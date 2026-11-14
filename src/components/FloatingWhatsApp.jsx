import React, { useEffect, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, CheckCircle2 } from 'lucide-react';
import { CONTATO, linkWhatsApp } from '../data/contato';

export default function FloatingWhatsApp() {
  // O balão só aparece depois de 8 s, para não cobrir o conteúdo logo na chegada.
  const [tooltipVisible, setTooltipVisible] = useState(false);

  // Aparece uma vez e some sozinho, para não ficar cobrindo o conteúdo.
  useEffect(() => {
    const abrir = setTimeout(() => setTooltipVisible(true), 8000);
    const fechar = setTimeout(() => setTooltipVisible(false), 20000);
    return () => {
      clearTimeout(abrir);
      clearTimeout(fechar);
    };
  }, []);

  useEffect(() => {
    if (!tooltipVisible) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setTooltipVisible(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [tooltipVisible]);

  const href = linkWhatsApp(
    'Olá! Estava navegando no site da Simon Climatiza e gostaria de tirar uma dúvida técnica sobre serviços de engenharia e PMOC.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Interactive Tooltip / Nudge Card */}
      <AnimatePresence>
        {tooltipVisible && (
          <Motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md border border-sky-200 text-slate-800 p-3.5 rounded-2xl shadow-xl shadow-slate-900/10 mb-3 max-w-xs relative"
          >
            <button
              type="button"
              onClick={() => setTooltipVisible(false)}
              aria-label="Fechar notificação de atendimento"
              className="absolute -top-3 -left-3 w-8 h-8 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full flex items-center justify-center text-xs transition-colors border border-slate-300 cursor-pointer shadow-xs"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>

            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 font-bold text-sm">
                SC
              </div>
              <div className="w-3 h-3 bg-emerald-500 border-2 border-white rounded-full absolute bottom-0 right-0" />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1">
                <span className="text-[13px] font-bold text-slate-900">Engenharia de Plantão</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
              </div>
              <p className="text-xs text-slate-700 leading-snug">
                Dúvidas sobre PMOC ou sistemas VRF? Fale direto no WhatsApp.
              </p>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <Motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Conversar com a ${CONTATO.nome} pelo WhatsApp`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative group w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-tr from-emerald-500 to-teal-400 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 relative z-10" aria-hidden="true" />

      </Motion.a>
    </div>
  );
}
