// src/utils/cadContentParser.js
// Decompositor Determinístico de Conteúdo Técnico para o "Simon AutoCAD Workbench".
// Invariante Semântico: 100% do conteúdo de `conteudo_html`, `tabelas_html`, `infobox_campo` e `descricao`
// é preservado integralmente, porém fatiado em Nós de Bancada Interativos (Zero-Scroll) e enriquecido
// com a filosofia prática/bem-humorada do Professor Simon e os beats do Papo de Balcão.

import { gerarNotaBancadaParaNo } from '../data/bancada/notasDeBancada.js';

const REGEX_GRANDEZAS =
  /(?:R\$\s*\d+(?:[.,]\d+)*|\b\d+(?:[.,]\d+)?(?:\s*(?:a|até|-|–)\s*\d+(?:[.,]\d+)?)?\s*(?:°C|°F|K|psig|PSI|PSIA|bar|kPa|MPa|mmHg|Vcc|Vca|V|A|mA|HP|kW|W|BTU\/lb|BTU\/h|BTU|TR|µm|mícrons|microns|%|mm²|mm|cm|m³\/h|m³|m\/s|CFM|FPM|SCFH|L\/min|ppm|UFC\/m³|MΩ|kΩ|Ω|Hz|kHz|RPM|N·m|ft·lbs|kgf·cm|cSt)\b)/gi;

/**
 * Remove tags HTML e decodifica entidades comuns para inspeção de texto plano e ancoragem.
 */
export function extrairTextoPlano(html) {
  if (!html || typeof html !== 'string') return '';
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<\/?(?:strong|em|b|i|code|sub|sup|span|small|a)\b[^>]*>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&gt;/gi, '>')
    .replace(/&lt;/gi, '<')
    .replace(/&amp;/gi, '&')
    .replace(/&le;/gi, '≤')
    .replace(/&ge;/gi, '≥')
    .replace(/&mu;/gi, 'μ')
    .replace(/&Delta;/gi, 'Δ')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extrai grandezas físicas únicas (números + unidades técnicas) de um bloco de texto.
 */
export function extrairGrandezasFisicas(textoPlano, limite = 8) {
  if (!textoPlano) return [];
  const encontrados = textoPlano.match(REGEX_GRANDEZAS) || [];
  const unicos = [];
  const vistos = new Set();
  for (const item of encontrados) {
    const limpo = item.replace(/\s+/g, ' ').trim();
    const chave = limpo.toLowerCase();
    if (!vistos.has(chave) && limpo.length >= 2) {
      vistos.add(chave);
      unicos.push(limpo);
      if (unicos.length >= limite) break;
    }
  }
  return unicos;
}

/**
 * Extrai destaques práticos (itens de lista ou termos em `<strong>`) de um fragmento HTML
 * para criar botões/pílulas de leitura rápida na bancada.
 */
function extrairDestaquesPraticos(html, textoPlano) {
  const destaques = [];
  if (!html) return destaques;

  // 1. Tenta extrair itens <li> curtos ou cabeçalhos internos
  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let match;
  while ((match = liRegex.exec(html)) !== null && destaques.length < 5) {
    const txt = extrairTextoPlano(match[1]);
    if (txt.length > 12 && txt.length <= 180) {
      destaques.push(txt);
    }
  }

  // 2. Se não houver <li> suficientes, extrai sentenças com `<strong>`
  if (destaques.length < 3) {
    const strongRegex = /<strong[^>]*>([\s\S]*?)<\/strong>/gi;
    while ((match = strongRegex.exec(html)) !== null && destaques.length < 5) {
      const termo = extrairTextoPlano(match[1]).replace(/:$/, '');
      if (termo.length > 3 && termo.length <= 70 && !destaques.some((d) => d.includes(termo))) {
        destaques.push(termo);
      }
    }
  }

  // 3. Fallback para as primeiras frases do texto plano
  if (destaques.length === 0 && textoPlano) {
    const frases = textoPlano
      .split(/(?<=[.!?])\s+/)
      .map((f) => f.trim())
      .filter((f) => f.length > 20 && f.length < 180);
    destaques.push(...frases.slice(0, 3));
  }

  return destaques;
}

/**
 * Divide um bloco HTML de seção `<h2>` em sub-nós clicáveis baseados em `<h3>` ou `<h4>`
 * para que o aluno navegue por botões internos sem precisar rolar um bloco longo.
 */
function extrairSubNosDeBloco(htmlBloco, tituloBloco) {
  if (!htmlBloco) return [];

  const regexSub = /<h([34])[^>]*>([\s\S]*?)<\/h\1>/gi;
  const matches = [...htmlBloco.matchAll(regexSub)];

  if (matches.length === 0) {
    return [
      {
        id: 'sub-unico',
        titulo: tituloBloco || 'Especificação Principal',
        html: htmlBloco,
        grandezas: extrairGrandezasFisicas(extrairTextoPlano(htmlBloco), 6),
      },
    ];
  }

  const subNos = [];
  const preambulo = htmlBloco.slice(0, matches[0].index).trim();
  if (extrairTextoPlano(preambulo).length > 20) {
    subNos.push({
      id: 'sub-intro',
      titulo: 'Fundamento & Visão Geral',
      html: preambulo,
      grandezas: extrairGrandezasFisicas(extrairTextoPlano(preambulo), 5),
    });
  }

  for (let i = 0; i < matches.length; i++) {
    const atual = matches[i];
    const proximo = matches[i + 1];
    const inicio = atual.index;
    const fim = proximo ? proximo.index : htmlBloco.length;
    const fatiaHtml = htmlBloco.slice(inicio, fim).trim();
    const tituloSub = extrairTextoPlano(atual[2]) || `Subtópico ${i + 1}`;

    subNos.push({
      id: `sub-${i + 1}`,
      titulo: tituloSub,
      html: fatiaHtml,
      grandezas: extrairGrandezasFisicas(extrairTextoPlano(fatiaHtml), 5),
    });
  }

  return subNos;
}

/**
 * Converte descrições em texto puro (como nos cursos `sistemavrf` e `tvrpro`)
 * em blocos HTML estruturados com `<h2>` e listas, mantendo 100% do texto literal original.
 */
function converterDescricaoParaHtmlEstruturado(descricao, tituloAula) {
  if (!descricao || typeof descricao !== 'string') return '';
  const linhas = descricao
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  if (linhas.length === 0) return '';

  const blocos = [];
  let blocoAtual = {
    titulo: 'Visão Geral & Fundamento de Campo',
    paragrafos: [],
  };

  for (const linha of linhas) {
    // Detecta marcadores principais ("• Pilar 1: ...", "• Eixo 1: ...", "• Etapa 1: ...", "Fase 1: ...", "Os Agentes de Trânsito: ...")
    const matchPilar = linha.match(/^(?:•\s*)?((?:Pilar|Eixo|Etapa|Fase)\s*\d+[^:]*|[A-ZÀ-Ú][^:]{3,48}):\s*(.*)$/);
    const isSubBullet = /^◦\s+/.test(linha) || /^\d+\.\s+/.test(linha);

    if (matchPilar && !isSubBullet) {
      if (blocoAtual.paragrafos.length > 0) {
        blocos.push(blocoAtual);
      }
      const tituloDetectado = matchPilar[1].replace(/^•\s*/, '').trim();
      const restoLinha = matchPilar[2]?.trim();
      blocoAtual = {
        titulo: tituloDetectado,
        paragrafos: restoLinha ? [`<p><strong>${tituloDetectado}:</strong> ${restoLinha}</p>`] : [],
      };
    } else if (isSubBullet) {
      const limpo = linha.replace(/^◦\s*/, '');
      blocoAtual.paragrafos.push(`<div class="cad-step-bullet"><p>${limpo}</p></div>`);
    } else {
      blocoAtual.paragrafos.push(`<p>${linha}</p>`);
    }
  }

  if (blocoAtual.paragrafos.length > 0) {
    blocos.push(blocoAtual);
  }

  return blocos
    .map((b) => `<h2>${b.titulo}</h2>\n${b.paragrafos.join('\n')}`)
    .join('\n\n');
}

/**
 * Decompõe `tabelas_html` em pranchas individuais clicáveis para que o técnico
 * alterne entre tabelas no Dock ou no Canvas sem rolar páginas gigantes.
 */
export function decomporTabelasHtml(tabelasHtml) {
  if (!tabelasHtml || typeof tabelasHtml !== 'string' || !tabelasHtml.trim()) {
    return [];
  }

  // Procura títulos <h2>, <h3>, <h4> ou blocos <table
  const regexCabecalhoTabela = /<h([234])[^>]*>([\s\S]*?)<\/h\1>/gi;
  const matches = [...tabelasHtml.matchAll(regexCabecalhoTabela)];

  if (matches.length <= 1) {
    const tituloUnico = matches[0] ? extrairTextoPlano(matches[0][2]) : 'Tabela de Engenharia & Parâmetros';
    return [
      {
        id: 'tab-01',
        codigo: 'TBL-01',
        titulo: tituloUnico,
        html: tabelasHtml,
        grandezas: extrairGrandezasFisicas(extrairTextoPlano(tabelasHtml), 8),
      },
    ];
  }

  const pranchas = [];
  const preambulo = tabelasHtml.slice(0, matches[0].index).trim();

  for (let i = 0; i < matches.length; i++) {
    const atual = matches[i];
    const proximo = matches[i + 1];
    const inicio = i === 0 && preambulo ? 0 : atual.index;
    const fim = proximo ? proximo.index : tabelasHtml.length;
    const htmlFatia = tabelasHtml.slice(inicio, fim).trim();
    const titulo = extrairTextoPlano(atual[2]) || `Tabela Técnica ${i + 1}`;

    pranchas.push({
      id: `tab-${String(i + 1).padStart(2, '0')}`,
      codigo: `TBL-${String(i + 1).padStart(2, '0')}`,
      titulo,
      html: htmlFatia,
      grandezas: extrairGrandezasFisicas(extrairTextoPlano(htmlFatia), 6),
    });
  }

  return pranchas;
}

/**
 * Decompõe `infobox_campo` em cartões táticos de bancada.
 */
export function decomporInfoboxCampo(infoboxHtml) {
  if (!infoboxHtml || typeof infoboxHtml !== 'string' || !infoboxHtml.trim()) {
    return [];
  }

  const regexHeading = /<h([234])[^>]*>([\s\S]*?)<\/h\1>/gi;
  const matches = [...infoboxHtml.matchAll(regexHeading)];

  if (matches.length <= 1) {
    const titulo = matches[0] ? extrairTextoPlano(matches[0][2]) : 'Protocolo & Alerta de Campo';
    return [
      {
        id: 'info-01',
        codigo: 'FLD-01',
        titulo,
        html: infoboxHtml,
        grandezas: extrairGrandezasFisicas(extrairTextoPlano(infoboxHtml), 6),
      },
    ];
  }

  const cards = [];
  const preambulo = infoboxHtml.slice(0, matches[0].index).trim();

  for (let i = 0; i < matches.length; i++) {
    const atual = matches[i];
    const proximo = matches[i + 1];
    const inicio = i === 0 && preambulo ? 0 : atual.index;
    const fim = proximo ? proximo.index : infoboxHtml.length;
    const htmlFatia = infoboxHtml.slice(inicio, fim).trim();
    const titulo = extrairTextoPlano(atual[2]) || `Diretriz de Campo ${i + 1}`;

    cards.push({
      id: `info-${String(i + 1).padStart(2, '0')}`,
      codigo: `FLD-${String(i + 1).padStart(2, '0')}`,
      titulo,
      html: htmlFatia,
      grandezas: extrairGrandezasFisicas(extrairTextoPlano(htmlFatia), 6),
    });
  }

  return cards;
}

/**
 * Vincula os `beats` do roteiro "Papo de Balcão" (`src/data/conversas/<curso>/<aula>.js`)
 * diretamente aos Nós de Bancada onde seus trechos-fonte (`fonte.trecho`) aparecem!
 * Garante que TODO o material técnico tenha diálogos bem-humorados, causos, filosofia
 * e desafios práticos da turma do Simon acoplados.
 */
export function vincularRoteiroAosNos(nos, pranchasTabela, cardsInfobox, roteiro) {
  if (!roteiro || !Array.isArray(roteiro.beats) || nos.length === 0) {
    return {
      nosEnriquecidos: nos,
      filosofiasAula: [],
      causosAula: [],
      desafiosAula: [],
      saideiraAula: null,
    };
  }

  const filosofiasAula = [];
  const causosAula = [];
  const desafiosAula = [];
  let saideiraAula = null;

  // Clona nós para adicionar falas e interações vinculadas
  const nosEnriquecidos = nos.map((no) => ({
    ...no,
    falasTurma: [],
    desafiosNo: [],
    causosNo: [],
    filosofiasNo: [],
  }));

  const falasSemAncoraDireta = [];

  for (const beat of roteiro.beats) {
    if (beat.tipo === 'filosofia') {
      filosofiasAula.push(beat);
    } else if (beat.tipo === 'causo') {
      causosAula.push(beat);
    } else if (beat.tipo === 'saideira') {
      saideiraAula = beat;
    } else if (['escolha', 'quiz', 'mitoVerdade', 'calculadora', 'inspecao'].includes(beat.tipo)) {
      desafiosAula.push(beat);
    }

    // Extrai possíveis trechos de ancoragem do beat
    const fontes = [];
    if (beat.fonte) {
      if (Array.isArray(beat.fonte)) fontes.push(...beat.fonte);
      else fontes.push(beat.fonte);
    }
    if (Array.isArray(beat.falas)) {
      for (const f of beat.falas) {
        if (f.fonte) fontes.push(f.fonte);
      }
    }
    if (Array.isArray(beat.explicacao)) {
      for (const e of beat.explicacao) {
        if (e.fonte) fontes.push(e.fonte);
      }
    }
    if (Array.isArray(beat.opcoes)) {
      for (const op of beat.opcoes) {
        if (op.fonte) fontes.push(op.fonte);
        if (Array.isArray(op.reacao)) {
          for (const r of op.reacao) {
            if (r.fonte) fontes.push(r.fonte);
          }
        }
        if (Array.isArray(op.feedback)) {
          for (const fb of op.feedback) {
            if (fb.fonte) fontes.push(fb.fonte);
          }
        }
      }
    }

    let noAlvoIdx = -1;
    for (const f of fontes) {
      if (f?.trecho) {
        const trechoNorm = extrairTextoPlano(f.trecho).toLowerCase();
        if (trechoNorm.length >= 8) {
          const idx = nosEnriquecidos.findIndex((n) =>
            n.textoPlanoLower.includes(trechoNorm.slice(0, Math.min(45, trechoNorm.length)))
          );
          if (idx >= 0) {
            noAlvoIdx = idx;
            break;
          }
        }
      }
    }

    if (noAlvoIdx >= 0) {
      const alvo = nosEnriquecidos[noAlvoIdx];
      if (beat.tipo === 'fala') alvo.falasTurma.push(beat);
      else if (beat.tipo === 'causo') alvo.causosNo.push(beat);
      else if (beat.tipo === 'filosofia') alvo.filosofiasNo.push(beat);
      else if (['escolha', 'quiz', 'mitoVerdade', 'calculadora', 'inspecao'].includes(beat.tipo)) {
        alvo.desafiosNo.push(beat);
      }
    } else if (beat.tipo === 'fala') {
      falasSemAncoraDireta.push(beat);
    }
  }

  // Distribui falas gerais e desafios nos nós que ainda não possuem interação direta,
  // para que CADA botão de seção técnica tenha comentários práticos da turma!
  if (falasSemAncoraDireta.length > 0 && nosEnriquecidos.length > 0) {
    falasSemAncoraDireta.forEach((fala, idx) => {
      const destino = nosEnriquecidos[idx % nosEnriquecidos.length];
      if (destino.falasTurma.length < 3) {
        destino.falasTurma.push(fala);
      }
    });
  }

  if (desafiosAula.length > 0 && nosEnriquecidos.length > 0) {
    desafiosAula.forEach((desafio, idx) => {
      const jaVinculado = nosEnriquecidos.some((n) => n.desafiosNo.some((d) => d.id === desafio.id));
      if (!jaVinculado) {
        const destino = nosEnriquecidos[idx % nosEnriquecidos.length];
        destino.desafiosNo.push(desafio);
      }
    });
  }

  if (causosAula.length > 0 && nosEnriquecidos.length > 0) {
    causosAula.forEach((causo, idx) => {
      const jaVinculado = nosEnriquecidos.some((n) => n.causosNo.some((c) => c.id === causo.id));
      if (!jaVinculado) {
        nosEnriquecidos[idx % nosEnriquecidos.length].causosNo.push(causo);
      }
    });
  }

  if (filosofiasAula.length > 0 && nosEnriquecidos.length > 0) {
    filosofiasAula.forEach((fil, idx) => {
      const jaVinculado = nosEnriquecidos.some((n) => n.filosofiasNo.some((f) => f.id === fil.id));
      if (!jaVinculado) {
        nosEnriquecidos[idx % nosEnriquecidos.length].filosofiasNo.push(fil);
      }
    });
  }

  return {
    nosEnriquecidos,
    filosofiasAula,
    causosAula,
    desafiosAula,
    saideiraAula,
  };
}

/**
 * Função principal: Decompõe uma aula completa em estrutura CAD interativa Zero-Scroll.
 */
export function parseAulaParaBancadaCad(aula, roteiro = null) {
  if (!aula) {
    return {
      nos: [],
      tabelas: [],
      infoboxes: [],
      grandezasGerais: [],
      filosofiasAula: [],
      causosAula: [],
      desafiosAula: [],
      saideiraAula: null,
    };
  }

  const fonteHtmlBruta =
    aula.conteudo_html && aula.conteudo_html.trim()
      ? aula.conteudo_html
      : converterDescricaoParaHtmlEstruturado(aula.descricao || '', aula.titulo);

  // Separa por <h2> preservando 100% do conteúdo
  const regexH2 = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  const matchesH2 = [...fonteHtmlBruta.matchAll(regexH2)];

  const nosBrutos = [];

  if (matchesH2.length === 0) {
    const textoPlano = extrairTextoPlano(fonteHtmlBruta);
    const tituloBase = aula.titulo || 'Fundamento Técnico & Bancada';
    nosBrutos.push({
      id: 'no-01',
      codigoCad: 'BLK-01',
      indice: 1,
      titulo: tituloBase,
      htmlOriginal: fonteHtmlBruta,
      textoPlano,
      textoPlanoLower: textoPlano.toLowerCase(),
      grandezas: extrairGrandezasFisicas(textoPlano, 8),
      destaquesPraticos: extrairDestaquesPraticos(fonteHtmlBruta, textoPlano),
      subNos: extrairSubNosDeBloco(fonteHtmlBruta, tituloBase),
      notaSimon: gerarNotaBancadaParaNo(tituloBase, textoPlano, 0, aula.titulo),
    });
  } else {
    const preambulo = fonteHtmlBruta.slice(0, matchesH2[0].index).trim();
    const preambuloTexto = extrairTextoPlano(preambulo);

    // Se houver conteúdo antes do primeiro <h2>, cria o Bloco 00 ou acopla para não perder 1 caractere
    if (preambuloTexto.length > 40) {
      nosBrutos.push({
        id: 'no-00',
        codigoCad: 'BLK-00',
        indice: 0,
        titulo: 'Briefing Inicial & Contexto de Campo',
        htmlOriginal: preambulo,
        textoPlano: preambuloTexto,
        textoPlanoLower: preambuloTexto.toLowerCase(),
        grandezas: extrairGrandezasFisicas(preambuloTexto, 6),
        destaquesPraticos: extrairDestaquesPraticos(preambulo, preambuloTexto),
        subNos: extrairSubNosDeBloco(preambulo, 'Briefing Inicial & Contexto de Campo'),
        notaSimon: gerarNotaBancadaParaNo('Briefing Inicial', preambuloTexto, 0, aula.titulo),
      });
    }

    for (let i = 0; i < matchesH2.length; i++) {
      const atual = matchesH2[i];
      const proximo = matchesH2[i + 1];
      const inicio = i === 0 && preambuloTexto.length <= 40 ? 0 : atual.index;
      const fim = proximo ? proximo.index : fonteHtmlBruta.length;
      const htmlSecao = fonteHtmlBruta.slice(inicio, fim).trim();
      const tituloLimpo = extrairTextoPlano(atual[1]) || `Bloco Técnico ${i + 1}`;
      const textoPlano = extrairTextoPlano(htmlSecao);
      const numeroBloco = nosBrutos.length + 1;

      nosBrutos.push({
        id: `no-${String(numeroBloco).padStart(2, '0')}`,
        codigoCad: `BLK-${String(numeroBloco).padStart(2, '0')}`,
        indice: numeroBloco,
        titulo: tituloLimpo,
        htmlOriginal: htmlSecao,
        textoPlano,
        textoPlanoLower: textoPlano.toLowerCase(),
        grandezas: extrairGrandezasFisicas(textoPlano, 8),
        destaquesPraticos: extrairDestaquesPraticos(htmlSecao, textoPlano),
        subNos: extrairSubNosDeBloco(htmlSecao, tituloLimpo),
        notaSimon: gerarNotaBancadaParaNo(tituloLimpo, textoPlano, i, aula.titulo),
      });
    }
  }

  const tabelas = decomporTabelasHtml(aula.tabelas_html);
  const infoboxes = decomporInfoboxCampo(aula.infobox_campo);

  const textoTotal =
    nosBrutos.map((n) => n.textoPlano).join(' ') +
    ' ' +
    extrairTextoPlano(aula.tabelas_html) +
    ' ' +
    extrairTextoPlano(aula.infobox_campo);

  const grandezasGerais = extrairGrandezasFisicas(textoTotal, 12);

  const {
    nosEnriquecidos,
    filosofiasAula,
    causosAula,
    desafiosAula,
    saideiraAula,
  } = vincularRoteiroAosNos(nosBrutos, tabelas, infoboxes, roteiro);

  return {
    nos: nosEnriquecidos,
    tabelas,
    infoboxes,
    grandezasGerais,
    filosofiasAula,
    causosAula,
    desafiosAula,
    saideiraAula,
  };
}
