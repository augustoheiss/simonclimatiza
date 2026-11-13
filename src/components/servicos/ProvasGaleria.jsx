import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FIELD_CATEGORIES, SIMON_FIELD_POSTS, getFieldProofsByServiceId } from '../../data/instagramSimonArchive';

const POR_PAGINA = 6;

// Itens que ficam fora da galeria pública até o Simon autorizar. Para liberar um, tire o id desta lista.
//  post-13  : a tela do controlador mostra o nome de um cliente (shopping).
//  extra-01 : dois homens com o rosto visível (palestra no SENAI).
//  extra-03 : grupo de alunos com o rosto visível (capacitação no SENAI).
// Revisão feita olhando miniaturas de 330 px: detalhes pequenos (uma placa de carro distante, por exemplo)
// podem ter escapado. Vale uma segunda olhada do Simon antes de ampliar o acervo.
const IDS_SEM_AUTORIZACAO = ['post-13', 'extra-01', 'extra-03'];
const POSTS = SIMON_FIELD_POSTS.filter((p) => !IDS_SEM_AUTORIZACAO.includes(p.id));

// Cliente nomeado na legenda original só aparece com autorização do Simon (ver plano, G12).
const ocultaCliente = (texto = '') =>
  texto.replace(/\s*[—-]\s*Shopping Diadema/gi, '').replace(/Shopping Diadema/gi, 'shopping');

const miniatura = (item) => item.slideImage || item.imageUrl || item.coverImage;

function Detalhe({ item, aoFechar }) {
  const fechar = useRef(null);

  useEffect(() => {
    const anterior = document.activeElement;
    fechar.current?.focus();
    const aoTeclar = (e) => e.key === 'Escape' && aoFechar();
    window.addEventListener('keydown', aoTeclar);
    return () => {
      window.removeEventListener('keydown', aoTeclar);
      anterior?.focus?.();
    };
  }, [aoFechar]);

  const video = item.videoUrl;
  const legenda = ocultaCliente(item.caption || item.technicalSummary);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ocultaCliente(item.title)}
      className="tema-laudo fixed inset-0 z-[110] flex items-center justify-center bg-tinta/60 p-4"
      onClick={aoFechar}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-md bg-laudo"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={fechar}
          type="button"
          onClick={aoFechar}
          className="absolute right-3 top-3 z-10 rounded-md bg-laudo/95 border border-filete px-3 py-1.5 text-sm font-semibold text-tinta hover:bg-papel"
        >
          Fechar
        </button>

        <div className="bg-papel">
          {video ? (
            <video
              src={video}
              poster={miniatura(item)}
              controls
              autoPlay
              playsInline
              className="mx-auto max-h-[60vh] w-full bg-black"
            />
          ) : (
            <img
              src={miniatura(item)}
              alt={ocultaCliente(item.title)}
              className="mx-auto max-h-[60vh] w-full object-contain"
            />
          )}
        </div>

        <div className="p-5 sm:p-6">
          <h3 className="font-serif-laudo text-xl font-semibold text-tinta">{ocultaCliente(item.title)}</h3>
          <p className="mt-1 text-sm text-aco-escuro">
            {item.instrumentBadge}
            {item.date ? `, ${item.date}` : ''}
          </p>
          {legenda && <p className="mt-3 text-tinta leading-relaxed texto-corrido">{legenda}</p>}
          {item.permalink && (
            <a
              href={item.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-semibold text-refrigerante-escuro hover:text-tinta underline underline-offset-4"
            >
              Ver a publicação original no Instagram
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Fotos e vídeos de serviços reais. Vídeo só é carregado quando a pessoa abre o item.
export default function ProvasGaleria({ servicoRef = null }) {
  const [categoria, setCategoria] = useState('todos');
  const [paginas, setPaginas] = useState(1);
  const [aberto, setAberto] = useState(null);

  // Dentro de um serviço, mostra só as provas daquele serviço, sem filtros.
  if (servicoRef) {
    return <ProvasDoServico servicoRef={servicoRef} />;
  }

  const categorias = FIELD_CATEGORIES.filter(
    (c) => c.id === 'todos' || POSTS.some((p) => p.category === c.id)
  );
  const filtrados = useMemo(
    () => (categoria === 'todos' ? POSTS : POSTS.filter((p) => p.category === categoria)),
    [categoria]
  );
  const visiveis = filtrados.slice(0, paginas * POR_PAGINA);
  // O rótulo do arquivo de dados diz "(28)", mas o acervo tem outro total. O número vem da contagem real.
  const nomeCategoria = (c) => (c.id === 'todos' ? `Todos (${POSTS.length})` : c.label);

  return (
    <div>
      <div role="group" aria-label="Filtrar por tipo de serviço" className="flex flex-wrap gap-2">
        {categorias.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={categoria === c.id}
            onClick={() => {
              setCategoria(c.id);
              setPaginas(1);
            }}
            className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
              categoria === c.id
                ? 'bg-tinta text-white border-tinta'
                : 'bg-laudo text-tinta border-filete hover:border-aco'
            }`}
          >
            {nomeCategoria(c)}
          </button>
        ))}
      </div>

      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visiveis.map((item) => (
          <li key={item.id}>
            <button type="button" onClick={() => setAberto(item)} className="group block w-full text-left">
              <span className="relative block overflow-hidden rounded-md border border-filete bg-papel aspect-[4/3]">
                <img
                  src={miniatura(item)}
                  alt=""
                  loading="lazy"
                  width="400"
                  height="300"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {item.videoUrl && (
                  <span className="absolute left-2 top-2 rounded bg-tinta/85 px-2 py-0.5 text-[0.8125rem] font-semibold text-white">
                    Vídeo
                  </span>
                )}
              </span>
              <span className="mt-2 block font-semibold text-tinta group-hover:text-refrigerante-escuro leading-snug">
                {ocultaCliente(item.title)}
              </span>
              <span className="block text-sm text-aco-escuro">{item.instrumentBadge}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        {visiveis.length < filtrados.length && (
          <button
            type="button"
            onClick={() => setPaginas((p) => p + 1)}
            className="rounded-md border border-aco-escuro/50 px-5 py-2.5 font-semibold text-tinta hover:bg-papel"
          >
            Ver mais
          </button>
        )}
        <p className="text-sm text-aco-escuro" aria-live="polite">
          Mostrando {visiveis.length} de {filtrados.length}
        </p>
      </div>

      {aberto && <Detalhe item={aberto} aoFechar={() => setAberto(null)} />}
    </div>
  );
}

function ProvasDoServico({ servicoRef }) {
  const [aberto, setAberto] = useState(null);
  const provas = useMemo(() => {
    const { highlights, posts } = getFieldProofsByServiceId(servicoRef);
    return [...highlights, ...posts].filter((x) => !IDS_SEM_AUTORIZACAO.includes(x.id)).slice(0, 6);
  }, [servicoRef]);

  if (!provas.length) return null;

  return (
    <section aria-label="Provas de campo deste serviço">
      <p className="font-semibold text-tinta">Provas de campo deste serviço</p>
      <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {provas.map((item) => (
          <li key={item.id}>
            <button type="button" onClick={() => setAberto(item)} className="group block w-full text-left">
              <span className="relative block overflow-hidden rounded-md border border-filete bg-papel aspect-[4/3]">
                <img src={miniatura(item)} alt="" loading="lazy" width="300" height="225" className="h-full w-full object-cover" />
                {item.videoUrl && (
                  <span className="absolute left-1.5 top-1.5 rounded bg-tinta/85 px-1.5 py-0.5 text-[0.8125rem] font-semibold text-white">
                    Vídeo
                  </span>
                )}
              </span>
              <span className="mt-1 block text-sm text-tinta group-hover:text-refrigerante-escuro leading-snug">
                {ocultaCliente(item.title)}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {aberto && <Detalhe item={aberto} aoFechar={() => setAberto(null)} />}
    </section>
  );
}
