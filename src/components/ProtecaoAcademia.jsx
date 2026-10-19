import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, ShieldCheck, AlertCircle, KeyRound, Home } from 'lucide-react';

const CHAVE_STORAGE = 'simon_academia_auth';
const SENHA_MESTRE = 'SIMON-VIP';

export default function ProtecaoAcademia({ children, onVoltar }) {
  const [isAutenticado, setIsAutenticado] = useState(
    () => localStorage.getItem(CHAVE_STORAGE) === 'true'
  );
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [tentativas, setTentativas] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (senha.trim().toUpperCase() === SENHA_MESTRE) {
      localStorage.setItem(CHAVE_STORAGE, 'true');
      setIsAutenticado(true);
      setErro('');
    } else {
      setTentativas((t) => t + 1);
      setErro(
        tentativas >= 2
          ? 'Código inválido. Solicite seu código de convite (SIMON-VIP) ao administrador.'
          : 'Código de acesso incorreto. Tente novamente.'
      );
      setSenha('');
    }
  }

  // ── Autenticado → renderiza o conteúdo protegido (Estação AutoCAD da Academia) ──
  if (isAutenticado) {
    return children;
  }

  // ── Não autenticado → tela de bloqueio VIP 100dvh Zero-Scroll ──
  return (
    <div className="h-dvh w-screen bg-slate-950 flex items-center justify-center px-6 py-8 relative overflow-y-auto select-none">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Lock icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-18 h-18 rounded-2xl bg-slate-900 border border-slate-700/70 flex items-center justify-center shadow-2xl shadow-sky-500/10 p-4">
              <Lock size={30} className="text-sky-400" strokeWidth={1.8} />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40">
              <ShieldCheck size={11} className="text-slate-950" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-7">
          <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-black uppercase tracking-widest bg-sky-500/15 text-sky-400 border border-sky-500/30 mb-2">
            CAD WORKSPACE · ACESSO VIP
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
            Academia Simon
          </h1>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
            Digite sua credencial de acesso para abrir a bancada interativa de treinamentos, módulos e aulas.
          </p>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl"
        >
          <label
            htmlFor="codigo-academia"
            className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5"
          >
            <KeyRound size={12} className="inline mr-1.5 -mt-0.5 text-sky-400" />
            Credencial de Acesso VIP
          </label>

          <input
            id="codigo-academia"
            type="password"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
              if (erro) setErro('');
            }}
            placeholder="Digite seu código VIP..."
            autoComplete="off"
            autoFocus
            className={`
              w-full bg-slate-950 border rounded-xl px-4 py-3.5 text-white placeholder-slate-600
              text-sm font-mono font-bold tracking-wider
              focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-200
              ${
                erro
                  ? 'border-red-500/60 focus:ring-red-500/40'
                  : 'border-slate-700 focus:ring-sky-500/50 focus:border-sky-500/50'
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
              w-full mt-5 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600
              text-slate-950 font-black text-xs uppercase tracking-wider
              px-6 py-3.5 rounded-xl
              transition-all duration-200
              shadow-lg shadow-emerald-500/20
              cursor-pointer
              disabled:opacity-50 disabled:cursor-not-allowed
            "
            disabled={!senha.trim()}
          >
            Liberar Bancada de Treinamentos
          </button>

          {typeof onVoltar === 'function' ? (
            <button
              type="button"
              onClick={onVoltar}
              className="w-full mt-3 py-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-semibold transition-colors cursor-pointer"
            >
              Voltar
            </button>
          ) : (
            <Link
              to="/"
              className="w-full mt-3 py-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              <Home size={13} />
              <span>Voltar para a Página Inicial</span>
            </Link>
          )}
        </form>

        {/* Footer hint */}
        <p className="text-center text-slate-500 text-xs mt-5">
          Área exclusiva para alunos e membros convidados da Academia Simon.
        </p>
      </div>
    </div>
  );
}
