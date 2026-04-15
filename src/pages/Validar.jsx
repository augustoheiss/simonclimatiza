import { useSearchParams, Link } from 'react-router-dom';
import {
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Award,
  User,
  BookOpen,
  Calendar,
  Hash,
} from 'lucide-react';

/**
 * Validar — Stateless certificate validation page.
 *
 * Reads URL search params (cert, nome, curso, data) and displays
 * a branded validation result without any database lookup.
 * Accessed directly or via QR Code scan.
 */
export default function Validar() {
  const [searchParams] = useSearchParams();

  const cert = searchParams.get('cert');
  const nome = searchParams.get('nome');
  const curso = searchParams.get('curso');
  const data = searchParams.get('data');

  const isValid = cert && nome && curso;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-sky-50/20 to-slate-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        {/* ── Logo / brand header ── */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 transition-colors"
          >
            <img
              src="/images/logo-simon.jpg"
              alt="Logo Simon Climatização"
              className="h-12 w-auto mix-blend-multiply"
            />
          </Link>
        </div>

        {isValid ? (
          /* ── ✅ Valid certificate card ── */
          <div className="bg-white rounded-2xl shadow-2xl shadow-emerald-900/10 border border-emerald-100 overflow-hidden">
            {/* Green header strip */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-5 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={22} className="text-white" />
              </div>
              <div>
                <h1 className="text-white font-extrabold text-lg leading-tight">
                  Certificado Autêntico
                </h1>
                <p className="text-emerald-100 text-xs mt-0.5">
                  Verificação concluída com sucesso
                </p>
              </div>
            </div>

            {/* Certificate details */}
            <div className="p-6 space-y-5">
              {/* Status badge */}
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold px-4 py-2.5 rounded-xl">
                <CheckCircle2 size={18} className="flex-shrink-0" />
                <span>
                  Este certificado é válido e foi emitido pela Simon
                  Climatização e Refrigeração.
                </span>
              </div>

              {/* Data rows */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <User
                    size={16}
                    className="text-sky-500 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Certificado emitido para
                    </p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      {nome}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <BookOpen
                    size={16}
                    className="text-sky-500 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Treinamento Concluído
                    </p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      {curso}
                    </p>
                  </div>
                </div>

                {data && (
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <Calendar
                      size={16}
                      className="text-sky-500 flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Data de Conclusão
                      </p>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">
                        {data}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Hash
                    size={16}
                    className="text-sky-500 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Número do Certificado
                    </p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5 font-mono">
                      {cert}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-center">
              <p className="text-[10px] text-slate-400">
                Simon Climatização e Refrigeração — Engenharia Térmica de Alta
                Performance
              </p>
            </div>
          </div>
        ) : (
          /* ── ⚠️ Invalid / incomplete data card ── */
          <div className="bg-white rounded-2xl shadow-2xl shadow-amber-900/10 border border-amber-100 overflow-hidden">
            {/* Orange header strip */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-5 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={22} className="text-white" />
              </div>
              <div>
                <h1 className="text-white font-extrabold text-lg leading-tight">
                  Dados Insuficientes
                </h1>
                <p className="text-amber-100 text-xs mt-0.5">
                  Não foi possível validar o certificado
                </p>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold px-4 py-2.5 rounded-xl">
                <AlertTriangle size={18} className="flex-shrink-0" />
                <span>
                  A URL de validação está incompleta ou inválida. Certifique-se
                  de que o link foi copiado corretamente ou escaneie o QR Code
                  diretamente no certificado.
                </span>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed">
                Se você possui um certificado emitido pela Simon Climatização,
                utilize o QR Code impresso no documento ou entre em contato
                conosco para obter suporte.
              </p>

              <div className="flex gap-3 mt-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-5 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 hover:-translate-y-0.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  Ir ao Site
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-5 py-3 rounded-xl transition-all duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ── Branding footnote ── */}
        <p className="text-center text-[10px] text-slate-400 mt-8">
          © {new Date().getFullYear()} Simon Climatiza — Sistema de
          Verificação de Autenticidade
        </p>
      </div>
    </div>
  );
}
