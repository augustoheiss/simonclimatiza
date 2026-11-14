import React, { useEffect, useState } from 'react';
import { escolherSecaoAtiva } from '../../utils/secaoAtiva';

// Índice de âncoras da Home e de /servicos. Aparece no desktop; no celular a página já é curta o bastante para rolar.
// Acompanha a rolagem: a seção que está sendo lida fica sublinhada (aria-current="location") e uma linha fina
// mostra quanto da página já foi lida. Sem IntersectionObserver ou sem rolagem, funciona como um índice comum.
//
// A faixa de leitura fica abaixo do cabeçalho fixo (65 px) e do próprio índice (45 px), como o scroll-margin de
// src/index.css. Quem decide a seção ativa é src/utils/secaoAtiva.js (testado); aqui só se mede e se desenha.
const LINHA_DE_LEITURA = 150;

export default function IndiceSecoes({ secoes = [] }) {
  const [ativa, setAtiva] = useState(null);
  const [lido, setLido] = useState(0);

  useEffect(() => {
    if (!secoes.length) return undefined;
    let quadro = 0;

    const medir = () => {
      quadro = 0;
      const medidas = secoes
        .map(({ id }) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return { id, topo: r.top, fundo: r.bottom };
        })
        .filter(Boolean);
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const fimDaPagina = total > 0 && window.scrollY >= total - 4;
      setAtiva(escolherSecaoAtiva(medidas, LINHA_DE_LEITURA, fimDaPagina));
      setLido(total > 0 ? Math.min(100, Math.max(0, (window.scrollY / total) * 100)) : 0);
    };

    const agendar = () => {
      if (!quadro) quadro = requestAnimationFrame(medir);
    };

    let observador = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observador = new IntersectionObserver(agendar, {
        rootMargin: '-120px 0px -60% 0px',
      });
      secoes.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observador.observe(el);
      });
    }

    medir();
    window.addEventListener('scroll', agendar, { passive: true });
    window.addEventListener('resize', agendar);
    return () => {
      observador?.disconnect();
      window.removeEventListener('scroll', agendar);
      window.removeEventListener('resize', agendar);
      if (quadro) cancelAnimationFrame(quadro);
      setAtiva(null);
    };
  }, [secoes]);

  return (
    <nav
      aria-label="Seções desta página"
      className="tema-laudo hidden lg:block sticky top-16 z-30 bg-papel/95 backdrop-blur border-b border-filete"
    >
      <ul className="max-w-6xl mx-auto px-6 h-11 flex items-center gap-6 overflow-x-auto text-sm">
        {secoes.map((s) => (
          <li key={s.id} className="shrink-0">
            <a
              href={`#${s.id}`}
              aria-current={ativa === s.id ? 'location' : undefined}
              className={`indice-link font-medium ${ativa === s.id ? 'indice-link-ativo' : 'text-aco-escuro hover:text-tinta'}`}
            >
              {s.nome}
            </a>
          </li>
        ))}
      </ul>
      <div className="indice-progresso" aria-hidden="true">
        <div className="indice-progresso-barra" style={{ width: `${lido}%` }} />
      </div>
    </nav>
  );
}
