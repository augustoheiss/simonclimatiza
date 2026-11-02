import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, ShieldCheck, AlertCircle, KeyRound, Home } from 'lucide-react';
import certBg from '../assets/fundo-certificado.png';

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

  // ── Não autenticado → tela de bloqueio VIP 100dvh Zero-Scroll (Tema Cristal Glacial do Certificado) ──
  return (
    <div className="h-dvh w-screen bg-gradient-to-b from-sky-50 via-white to-sky-100/60 flex items-center justify-center px-6 py-8 relative overflow-y-auto select-none text-slate-900">
      {/* Textura sutil do Certificado */}
      <div
        className="absolute inset-0 opacity-[0.16] pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url(${certBg})` }}
      />

      <div className="relative z-10 w-full max-w-md rounded-3xl bg-white border-2 border-[#1a3a5c]/80 p-1.5 shadow-2xl shadow-sky-900/15">
        <div className="rounded-2xl border border-sky-300 bg-gradient-to-b from-sky-50/80 via-white to-sky-50/40 p-6 sm:p-8">
          {/* Lock icon */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-sky-50 border-2 border-sky-200 flex items-center justify-center shadow-md p-3.5">
                <Lock size={28} className="text-[#0284c7]" strokeWidth={2} />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center shadow-md">
                <ShieldCheck size={11} className="text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-mono font-extrabold uppercase tracking-widest bg-sky-100 text-[#0369a1] border border-sky-300 mb-2">
              CAD WORKSPACE &bull; ACESSO VIP
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-[#1a3a5c] tracking-tight leading-tight">
              Academia Simon
            </h1>
            <p className="mt-1.5 text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto font-medium">
              Digite sua credencial de acesso para abrir a bancada interativa de treinamentos, módulos e aulas.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="codigo-academia"
              className="block text-xs font-extrabold text-[#1a3a5c] uppercase tracking-widest mb-2"
            >
              <KeyRound size={12} className="inline mr-1.5 -mt-0.5 text-[#0284c7]" />
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
                w-full bg-white border-2 rounded-xl px-4 py-3.5 text-[#1a3a5c] placeholder-slate-400
                text-sm font-mono font-bold tracking-wider
                focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-200
                ${
                  erro
                    ? 'border-red-400 focus:ring-red-300'
                    : 'border-sky-200 focus:ring-sky-400 focus:border-[#0284c7]'
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
                className="flex items-start gap-2 mt-3 text-red-600 font-semibold text-xs leading-relaxed"
              >
                <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                <span>{erro}</span>
              </div>
            )}

            <button
              type="submit"
              className="
                w-full mt-5 bg-[#0369a1] hover:bg-[#0284c7] active:bg-[#1a3a5c]
                text-white font-black text-xs uppercase tracking-wider
                px-6 py-3.5 rounded-xl
                transition-all duration-200
                shadow-lg shadow-sky-600/20
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
                className="w-full mt-3 py-2.5 rounded-xl border border-sky-200 bg-white text-[#1a3a5c] hover:bg-sky-50 text-xs font-extrabold transition-colors cursor-pointer"
              >
                Voltar
              </button>
            ) : (
              <Link
                to="/"
                className="w-full mt-3 py-2.5 rounded-xl border border-sky-200 bg-white text-[#1a3a5c] hover:bg-sky-50 text-xs font-extrabold transition-colors flex items-center justify-center gap-1.5"
              >
                <Home size={13} className="text-[#0284c7]" />
                <span>Voltar para a Página Inicial</span>
              </Link>
            )}
          </form>

          {/* Footer hint */}
          <p className="text-center text-slate-500 text-[11px] font-medium mt-4">
            Área exclusiva para alunos e membros convidados da Academia Simon.
          </p>
        </div>
      </div>
    </div>
  );
}
