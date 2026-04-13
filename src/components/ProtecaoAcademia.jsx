import { useState } from 'react';
import { Lock, ShieldCheck, AlertCircle, KeyRound } from 'lucide-react';

const CHAVE_STORAGE = 'simon_academia_auth';
const SENHA_MESTRE = 'SIMON-VIP';

export default function ProtecaoAcademia({ children }) {
  const [isAutenticado, setIsAutenticado] = useState(
    () => localStorage.getItem(CHAVE_STORAGE) === 'true'
  );
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [tentativas, setTentativas] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (senha.trim() === SENHA_MESTRE) {
      localStorage.setItem(CHAVE_STORAGE, 'true');
      setIsAutenticado(true);
      setErro('');
    } else {
      setTentativas((t) => t + 1);
      setErro(
        tentativas >= 2
          ? 'Código inválido. Solicite seu código de convite ao administrador.'
          : 'Código de acesso incorreto. Tente novamente.'
      );
      setSenha('');
    }
  }

  // ── Autenticado → renderiza o conteúdo protegido ──
  if (isAutenticado) {
    return children;
  }

  // ── Não autenticado → tela de bloqueio luxuosa ──
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6 py-20 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-400/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
      </div>

      <div className="relative w-full max-w-md">

        {/* Lock icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shadow-2xl shadow-sky-500/10">
              <Lock size={32} className="text-sky-400" strokeWidth={1.8} />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center shadow-lg shadow-sky-500/40">
              <ShieldCheck size={11} className="text-white" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
            Acesso Restrito
          </h1>
          <p className="text-sky-400/80 font-semibold text-sm tracking-widest uppercase mt-2">
            Academia Simon
          </p>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
            Digite seu código de convite para acessar o treinamento de elite.
          </p>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl"
        >
          <label
            htmlFor="codigo-academia"
            className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3"
          >
            <KeyRound size={12} className="inline mr-1.5 -mt-0.5" />
            Código de Acesso
          </label>

          <input
            id="codigo-academia"
            type="password"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
              if (erro) setErro('');
            }}
            placeholder="••••••••••"
            autoComplete="off"
            autoFocus
            className={`
              w-full bg-slate-900/70 border rounded-xl px-5 py-4 text-white placeholder-slate-600
              text-sm font-medium tracking-wider
              focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-200
              ${erro
                ? 'border-red-500/60 focus:ring-red-500/40'
                : 'border-slate-600/50 focus:ring-sky-500/50 focus:border-sky-500/50'
              }
            `}
            aria-describedby={erro ? 'erro-senha' : undefined}
            aria-invalid={!!erro}
          />

          {/* Error message */}
          {erro && (
            <div
              id="erro-senha"
              role="alert"
              className="flex items-start gap-2 mt-3 text-red-400 text-xs leading-relaxed animate-pulse"
            >
              <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
              <span>{erro}</span>
            </div>
          )}

          <button
            type="submit"
            className="
              w-full mt-6 bg-sky-500 hover:bg-sky-600 active:bg-sky-700
              text-white font-bold text-sm uppercase tracking-wider
              px-6 py-4 rounded-xl
              transition-all duration-200
              shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40
              hover:-translate-y-0.5 active:translate-y-0
              focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800
              disabled:opacity-50 disabled:cursor-not-allowed
            "
            disabled={!senha.trim()}
          >
            Acessar
          </button>
        </form>

        {/* Footer hint */}
        <p className="text-center text-slate-600 text-xs mt-6">
          Área exclusiva para membros convidados.
        </p>
      </div>
    </div>
  );
}
