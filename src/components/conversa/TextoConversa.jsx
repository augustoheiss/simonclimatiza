// src/components/conversa/TextoConversa.jsx
import React from 'react';

/**
 * TextoConversa — Formatador inline seguro para falas e enunciados do "Papo de Balcão".
 *
 * Converte apenas `**negrito**`, `` `código` `` e quebras de linha `\n` em elementos React.
 * NUNCA usa `dangerouslySetInnerHTML` nem interpreta HTML.
 */
export default function TextoConversa({ texto, className = '' }) {
  if (!texto || typeof texto !== 'string') return null;

  const linhas = texto.split('\n');

  return (
    <span className={className}>
      {linhas.map((linha, idxLinha) => (
        <React.Fragment key={idxLinha}>
          {idxLinha > 0 && <br />}
          {parseInlineTokens(linha, idxLinha)}
        </React.Fragment>
      ))}
    </span>
  );
}

function parseInlineTokens(linha, idxLinha) {
  // Captura `código` ou **negrito**
  const regex = /(`[^`]+`|\*\*[^*]+\*\*)/g;
  const partes = linha.split(regex);

  return partes.map((parte, idxParte) => {
    if (!parte) return null;
    const key = `${idxLinha}-${idxParte}`;

    if (parte.startsWith('`') && parte.endsWith('`') && parte.length > 2) {
      return (
        <code
          key={key}
          className="px-1.5 py-0.5 mx-0.5 rounded bg-slate-800/90 text-sky-300 font-mono text-[0.85em] border border-slate-700"
        >
          {parte.slice(1, -1)}
        </code>
      );
    }

    if (parte.startsWith('**') && parte.endsWith('**') && parte.length > 4) {
      return (
        <strong key={key} className="font-extrabold text-white">
          {parte.slice(2, -2)}
        </strong>
      );
    }

    return <React.Fragment key={key}>{parte}</React.Fragment>;
  });
}
