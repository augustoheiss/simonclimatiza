import React from 'react';

// Índice de âncoras da Home. Aparece no desktop; no celular a página já é curta o bastante para rolar.
export default function IndiceSecoes({ secoes }) {
  return (
    <nav
      aria-label="Seções desta página"
      className="tema-laudo hidden lg:block sticky top-16 z-30 bg-papel/95 backdrop-blur border-b border-filete"
    >
      <ul className="max-w-6xl mx-auto px-6 h-11 flex items-center gap-6 overflow-x-auto text-sm">
        {secoes.map((s) => (
          <li key={s.id} className="shrink-0">
            <a href={`#${s.id}`} className="text-aco-escuro hover:text-tinta font-medium">
              {s.nome}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
