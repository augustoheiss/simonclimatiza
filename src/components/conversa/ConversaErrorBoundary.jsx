// src/components/conversa/ConversaErrorBoundary.jsx
import React from 'react';
import { AlertTriangle, RefreshCw, BookOpen } from 'lucide-react';

/**
 * ConversaErrorBoundary — Circuit breaker ao redor da engine "Papo de Balcão".
 *
 * Se ocorrer falha de rede ao baixar um chunk após deploy ou qualquer exceção
 * em runtime, isola o erro dentro da aba e oferece:
 * 1) Recarregar a página
 * 2) Ir diretamente para a aba "Conteúdo Técnico" (apostila intacta)
 */
export default class ConversaErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (import.meta.env?.DEV) {
      console.error('[Papo de Balcão] Erro capturado pelo ConversaErrorBoundary:', error, info);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.state.hasError &&
      (prevProps.cursoId !== this.props.cursoId || prevProps.aulaId !== this.props.aulaId)
    ) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      const { irParaAba } = this.props;
      return (
        <div
          role="alert"
          className="rounded-2xl border border-amber-500/40 bg-slate-900/95 p-8 text-center max-w-2xl mx-auto my-6"
        >
          <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-400" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">
            Não foi possível abrir o Papo de Balcão agora
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Pode ter ocorrido uma oscilação de rede ao carregar o roteiro desta aula.
            A apostila oficial continua 100% disponível nas outras abas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {typeof irParaAba === 'function' && (
              <button
                type="button"
                onClick={() => {
                  this.setState({ hasError: false });
                  irParaAba('conteudo');
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                Ir para Conteúdo Técnico
              </button>
            )}
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-slate-600 text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" aria-hidden="true" />
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
