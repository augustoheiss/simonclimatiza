// Ajudante de teste: transpila um componente .jsx com o esbuild que já acompanha o Vite e o renderiza
// para texto com react-dom/server. Não precisa de DOM nem de dependência nova.
// A saída compilada vai para node_modules/.cache/testes-jsx (ignorada pelo git) porque o `import 'react'`
// do arquivo gerado só resolve de dentro do projeto.
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..', '..');
const CACHE = path.join(RAIZ, 'node_modules', '.cache', 'testes-jsx');

let contador = 0;

// caminhoJsx: caminho do componente relativo à raiz do projeto, ex.: 'src/components/home/LaudoExemplo.jsx'.
// Devolve o componente padrão já compilado.
export async function carregarComponente(caminhoJsx) {
  fs.mkdirSync(CACHE, { recursive: true });
  const saida = path.join(CACHE, `${path.basename(caminhoJsx, '.jsx')}-${process.pid}-${contador++}.mjs`);
  await build({
    entryPoints: [path.join(RAIZ, caminhoJsx)],
    outfile: saida,
    bundle: true,
    format: 'esm',
    platform: 'node',
    jsx: 'transform',
    // Pacotes de node_modules ficam de fora do arquivo gerado: o Node os carrega direto, e os que trazem
    // trechos CommonJS (lucide-react) não quebram no bundle ESM.
    external: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    // Imagens e CSS que o componente importe viram caminho de texto; o markup não depende deles.
    loader: { '.png': 'dataurl', '.jpg': 'dataurl', '.webp': 'dataurl', '.svg': 'dataurl', '.css': 'empty' },
    logLevel: 'error',
  });
  const modulo = await import(pathToFileURL(saida).href);
  return modulo.default;
}

export function renderizar(Componente, props = {}) {
  return renderToStaticMarkup(React.createElement(Componente, props));
}
