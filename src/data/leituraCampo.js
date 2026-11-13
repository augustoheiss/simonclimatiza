// Leituras reais de instrumento, transcritas das publicações do @simonclimatiza em
// src/data/instagramSimonArchive.js (campo visualTextOcr). Cada bloco vem de UMA medição.
// Não digite valores novos à mão: copie do acervo e cite o post em `origem`.
//
// Cliente nomeado na legenda original (shopping) fica de fora de propósito: citar
// cliente numa página comercial depende de autorização do Simon.

export const LEITURAS_CAMPO = [
  {
    id: 'chiller',
    titulo: 'Chiller em operação',
    instrumento: 'Controlador do chiller',
    origem: 'instagram.com/p/DHbmlm8Sp4E',
    linhas: [
      { rotulo: 'Água gelada, saída do evaporador', valor: '7,1', unidade: '°C', nota: 'meta 7,0 °C' },
      { rotulo: 'Água gelada, entrada do evaporador', valor: '10,0', unidade: '°C' },
      { rotulo: 'Corrente do motor', valor: '97,8', unidade: '% da nominal' },
      { rotulo: 'Frequência do compressor', valor: '34,8', unidade: 'Hz' },
    ],
  },
  {
    id: 'vacuo',
    titulo: 'Vácuo e carga de fluido',
    instrumento: 'Testo 552i e balança digital',
    origem: 'instagram.com/p/DYz_yx9nd0D',
    linhas: [
      { rotulo: 'Vácuo atingido', valor: '436', unidade: 'mícrons' },
      { rotulo: 'Variação de pressão depois de isolar', valor: '0', unidade: 'mícron' },
      { rotulo: 'Carga de R410A, medida por massa', valor: '10,820', unidade: 'kg' },
    ],
  },
];
