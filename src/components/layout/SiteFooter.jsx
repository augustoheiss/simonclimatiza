import React from 'react';
import { Link } from 'react-router-dom';
import { CONTATO } from '../../data/contato';

export default function SiteFooter() {
  return (
    <footer className="tema-laudo bg-laudo border-t border-filete">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-[1.4fr_1fr_1fr] text-sm">
        <div>
          <img src="/images/logo-simon.jpg" alt="Simon Climatização" className="h-10 w-auto mix-blend-multiply mb-3" />
          <p className="text-aco-escuro max-w-sm leading-relaxed">
            Manutenção, PMOC e instalação de sistemas VRF, chillers e câmaras frias para edifícios corporativos e
            indústrias.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <p className="text-base font-semibold text-tinta mb-2">Páginas</p>
          <ul className="space-y-1.5 text-aco-escuro">
            <li><Link className="hover:text-tinta" to="/servicos">Serviços</Link></li>
            <li><Link className="hover:text-tinta" to="/academia">Academia</Link></li>
            <li><Link className="hover:text-tinta" to="/validar">Validar certificado</Link></li>
            <li><Link className="hover:text-tinta" to="/termos">Termos de uso e LGPD</Link></li>
          </ul>
        </nav>

        <div>
          <p className="text-base font-semibold text-tinta mb-2">Contato</p>
          <ul className="space-y-1.5 text-aco-escuro">
            <li>{CONTATO.whatsappExibicao}</li>
            <li>{CONTATO.email}</li>
            <li>{CONTATO.cidade}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-filete">
        <p className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-sm text-aco-escuro">
          © {new Date().getFullYear()} {CONTATO.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
