import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { linkWhatsApp } from '../../data/contato';

const LINKS = [
  { nome: 'Início', to: '/', fim: true },
  { nome: 'Serviços', to: '/servicos' },
  { nome: 'Academia', to: '/academia' },
  { nome: 'Validar certificado', to: '/validar' },
  { nome: 'Contato', to: '/contato' },
];

const classeLink = ({ isActive }) =>
  `py-1 text-[0.95rem] font-medium border-b-2 transition-colors ${
    isActive
      ? 'text-tinta border-refrigerante-escuro'
      : 'text-aco-escuro border-transparent hover:text-tinta'
  }`;

export default function SiteHeader() {
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);

  return (
    <header className="tema-laudo sticky top-0 z-40 bg-laudo/95 backdrop-blur border-b border-filete">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-md focus:bg-tinta focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" onClick={fechar} className="flex items-center gap-3 shrink-0">
          <img
            src="/images/logo-simon.jpg"
            alt="Simon Climatização"
            className="h-10 w-auto mix-blend-multiply"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.fim} className={classeLink}>
              {l.nome}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={linkWhatsApp('Olá! Gostaria de pedir um diagnóstico técnico.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-refrigerante-escuro hover:bg-tinta text-white text-sm font-semibold px-4 py-2 transition-colors"
          >
            Chamar no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden p-2 rounded-md text-tinta hover:bg-papel"
          >
            {aberto ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {aberto && (
        <nav id="menu-mobile" aria-label="Principal" className="md:hidden border-t border-filete bg-laudo px-4 py-3">
          <ul>
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.fim}
                  onClick={fechar}
                  className={({ isActive }) =>
                    `block py-3 text-base font-medium border-b border-filete ${
                      isActive ? 'text-tinta' : 'text-aco-escuro'
                    }`
                  }
                >
                  {l.nome}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
