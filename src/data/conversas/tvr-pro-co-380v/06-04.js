// src/data/conversas/tvr-pro-co-380v/06-04.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 06-04
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

const F_TERM = {
  campo: 'conteudo_html',
  trecho: 'Terminação: dois resistores de 120Ω (extremidades). Resistência total P↔Q (OFF) = ≈60Ω (paralelo).',
};
const F_SEP_CM = {
  campo: 'conteudo_html',
  trecho: 'Separação mínima paralelo: 5-30 cm',
};
const F_VP_VQ = {
  campo: 'conteudo_html',
  trecho: 'V(P) ref. E e V(Q) ref. E = 2,5-2,7V DC (Midea)',
};
const F_GND = {
  campo: 'conteudo_html',
  trecho: '2V = ground loop severo',
};
const F_CAP_LETAL = {
  campo: 'conteudo_html',
  trecho: 'PERIGO LETAL: Capacitores armazenam 450-650V DC com sistema desligado.',
};
const F_RES_10K = {
  campo: 'conteudo_html',
  trecho: 'Nunca curto direto P-N — usar resistor 10kΩ/10W se necessário',
};
const F_DIODO = {
  campo: 'conteudo_html',
  trecho: 'Forward bias saudável = 0,35-0,70V | Reverse = OL | Curto = 0V (bip)',
};
const F_PN_FWD = {
  campo: 'conteudo_html',
  trecho: 'DC Bus Interno: P→N forward = 0,7-1,2V (2 FWDs série) | Reverso = OL',
};
const F_MEGGER = {
  campo: 'tabelas_html',
  trecho: 'Isolação (Megger 500V) > 100 MΩ Cada fase ↔ chassis',
};
const F_ISOL_MIN = {
  campo: 'tabelas_html',
  trecho: 'Isolação mín aceitável ≥ 100 kΩ Abaixo → substituir',
};
const F_RISER = {
  campo: 'conteudo_html',
  trecho: 'Riser vertical (sucção): velocidade mínima ≥ 1.500 FPM (7,62 m/s)',
};
const F_VACUO = {
  campo: 'conteudo_html',
  trecho: 'Vácuo mínimo: 500 microns (0,5 mmHg)',
};
const F_HF = {
  campo: 'conteudo_html',
  trecho: 'Pathway B — PVE/FV50S: R410A decompõe > 250°C → HF (ácido fluorídrico) + CO₂.',
};
const F_CU = {
  campo: 'conteudo_html',
  trecho: 'Cu²⁺/Cu⁰ = +0,34V (mais nobre, catódico)',
};
const F_FE = {
  campo: 'conteudo_html',
  trecho: 'Fe²⁺/Fe⁰ = −0,44V (menos nobre, anódico)',
};

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '06-04',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'resenha-pos-obra',
  duracaoMin: 13,
  beats: [
    // ── 1. CHEGADA ──────────────────────────────────────────────────────────
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Sábado, 11h30. Resenha de encerramento na oficina com multímetro True-RMS, megôhmetro e vacuômetro digital sobre a bancada.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, na aula 06-01 vimos que um resistor terminador do barramento RS-485 mede **120Ω**. Mas quando o barramento inteiro está montado com os dois terminadores nas pontas, quanto dá entre P e Q desligado?',
      fonte: F_TERM,
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Agora você entrou na engenharia de campo avançada, Ju! Dois resistores de **120Ω** em paralelo nas duas extremidades do cabo dão resistência equivalente total P↔Q = **≈60Ω**!',
      fonte: F_TERM,
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Se medir **120Ω** com o barramento todo conectado, falta 1 resistor na outra ponta! E com o sistema ligado, V(P) e V(Q) para E batem **2,5-2,7V** DC e diferença de terra > **2V** indica ground loop severo!',
      fonte: [F_TERM, F_VP_VQ, F_GND],
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Você vai fazer o teste estático de diodos no módulo IGBT/IPM do compressor (onde os capacitores armazenam 450-650V DC). Qual procedimento de segurança é obrigatório antes de encostar as pontas de prova?',
      fonte: [F_CAP_LETAL, F_RES_10K],
      opcoes: [
        {
          id: 'a',
          texto: 'Desligar LOTO, aguardar a descarga dos 450-650V DC dos capacitores e nunca dar curto direto P-N (usar resistor 10kΩ/10W se necessário).',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Procedimento padrão ouro! Capacitores guardam **450-650V** DC; aguarde a descarga segura e jamais feche curto com chave de fenda (use resistor **10kΩ**/10W)!',
              fonte: [F_CAP_LETAL, F_RES_10K],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Encostar uma chave de fenda direto entre P e N para descarregar no estalo.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Proibido! Curto direto nos **450-650V** DC derrete a trilha e danifica os capacitores. Use resistor de **10kΩ**/10W.',
              fonte: [F_CAP_LETAL, F_RES_10K],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Testar na escala de diodo com a máquina energizada.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Risco letal! Com **450-650V** DC no barramento, você explode o multímetro. Desligue tudo e aguarde a descarga completa.',
              fonte: F_CAP_LETAL,
            },
          ],
        },
      ],
    },

    // ── 3. PAPO RETO ────────────────────────────────────────────────────────
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'neutro',
      texto: 'Com o barramento descarregado e cabos soltos, fazemos as 5 fases do teste de diodo no módulo inverter: em polarização direta (forward bias), cada diodo saudável dá **0,35-0,70V**, reverso dá `OL` e curto dá **0V** (bip)!',
      fonte: F_DIODO,
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Na Fase 5 (DC Bus interno P→N), como há 2 diodos em série, o forward saudável mede **0,7-1,2V** e o reverso dá `OL`. Já no compressor, o Megger em **500V** exige isolação > **100 MΩ** (mínimo aceitável ≥ **100 kΩ**)!',
      fonte: [F_PN_FWD, F_MEGGER, F_ISOL_MIN],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Agora olha a física do retorno de óleo nas prumadas verticais (risers de sucção): para o gás arrastar o óleo parede acima sem escorrer, a velocidade mínima precisa ser ≥ **1.500 FPM** (7,62 m/s), com sifão P-trap a cada 10 metros!',
      fonte: F_RISER,
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E por que o manual bate tanto na tecla do vácuo mínimo de **500 microns** (**0,5 mmHg**) mesmo o óleo do TVR Pro CO sendo PVE (`FV50S`) que não hidrolisa como o POE?',
      fonte: F_VACUO,
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Porque existe o Pathway B da degradação química! Mesmo no óleo PVE (`FV50S`), pontos quentes > **250°C** decompõem o R410A gerando ácido fluorídrico (`HF`), que reage com a água residual!',
      fonte: F_HF,
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Esse ácido ataca o cobre e cria o copper plating eletroquímico: o cobre (`Cu²⁺/Cu⁰` = +**0,34V**) se deposita sobre o ferro do eixo (`Fe²⁺/Fe⁰` = −**0,44V**), comendo as folgas micrométricas do scroll até travar o rotor!',
      fonte: [F_CU, F_FE],
    },
    {
      id: 'fala-9b',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'Quer dizer que a reação entre o íon de cobre e o aço do eixo acontece sozinha, sem nem precisar de corrente elétrica externa?',
    },
    {
      id: 'fala-9c',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Exatamente! Como o potencial do cobre (+**0,34V**) é mais nobre que o do ferro (−**0,44V**), a deposição galvânica é espontânea!',
      fonte: [F_CU, F_FE],
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Vácuo "No Ouvido" que Virou Copper Plating e Erro xL5',
      fonte: [F_VACUO, F_CU, F_FE],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Fomos fazer perícia num compressor que travou com erro `xL5` (rotor bloqueado) com menos de um ano de uso. Na instalação, o montador fez vácuo "pelo barulho da bomba", sem vacuômetro para garantir os **500 microns** (**0,5 mmHg**).',
          fonte: F_VACUO,
        },
        {
          quem: 'juninho',
          emocao: 'surpreso',
          texto: 'E quando vocês serraram a carcaça do compressor queimado, o que tinha lá dentro?',
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'O eixo de aço (`Fe²⁺/Fe⁰` = −**0,44V**) e as espirais do scroll estavam cor-de-rosa, cobertos por cobre depositado (`Cu²⁺/Cu⁰` = +**0,34V**)! As folgas originais sumiram e o scroll engripou!',
          fonte: [F_CU, F_FE],
        },
        {
          quem: 'bia',
          emocao: 'serio',
          texto: 'A física e a química não perdoam atalho: vácuo abaixo de **500 microns** (**0,5 mmHg**) com teste de estanqueidade não é burocracia, é sobrevivência mecânica!',
          fonte: F_VACUO,
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Com todo o barramento RS-485 conectado e o sistema desligado, os dois resistores terminadores de 120Ω nas extremidades resultam em uma resistência total P↔Q de aproximadamente 60Ω em paralelo.',
      verdade: true,
      fonte: F_TERM,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Verdade! Dois resistores de **120Ω** em paralelo resultam em P↔Q = **≈60Ω**. Se medir **120Ω**, um dos terminadores está desconectado ou com cabo rompido.',
          fonte: F_TERM,
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Como o óleo PVE (FV50S) não sofre hidrólise ácida de ésteres, sistemas TVR Pro CO dispensam o vácuo de 500 microns (0,5 mmHg).',
      verdade: false,
      fonte: [F_VACUO, F_HF],
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! O vácuo de **500 microns** (**0,5 mmHg**) continua obrigatório: acima de **250°C** o R410A gera `HF`, que com umidade provoca copper plating e destrói o scroll.',
          fonte: [F_VACUO, F_HF],
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO + INTERAÇÃO ────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'No teste estático da ponte IGBT/IPM e no teste de isolação do compressor com Megger (500V), quais são os valores que indicam componentes saudáveis?',
      fonte: [F_DIODO, F_PN_FWD, F_MEGGER, F_ISOL_MIN],
      opcoes: [
        {
          id: 'a',
          texto: 'Diodo forward = 0,35-0,70V (P→N = 0,7-1,2V), reverse = OL, e isolação no Megger 500V > 100 MΩ.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Mestre do diagnóstico! Diodo individual **0,35-0,70V**, barramento P→N **0,7-1,2V** e Megger **500V** > **100 MΩ**!',
              fonte: [F_DIODO, F_PN_FWD, F_MEGGER],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Diodo forward = 0V (bip nos dois sentidos) e isolação abaixo de 100 kΩ.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: '**0V** (bip) no diodo é IGBT em curto, e isolação abaixo de **100 kΩ** condena o compressor!',
              fonte: [F_DIODO, F_ISOL_MIN],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Diodo forward = 500V e isolação = 60Ω.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: '**500V** é a tensão de teste do Megger (> **100 MΩ**) e **60Ω** é a resistência do barramento RS-485.',
              fonte: [F_MEGGER, F_TERM],
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Resistência Equivalente do Barramento RS-485 (P↔Q)',
      enunciado: 'Um barramento RS-485 possui dois resistores de terminação de 120Ω instalados em paralelo (um na ODU master e outro na última IDU). Qual é a resistência total equivalente em Ω medida entre P e Q com o sistema desligado?',
      formula: 'R_eq = 120Ω / 2',
      unidade: 'Ω',
      respostaCorreta: 60,
      tolerancia: 2,
      opcoesRapidas: [30, 60, 120, 240],
      leituras: [
        { rotulo: 'Terminador 1 (ODU Master)', valor: '120Ω' },
        { rotulo: 'Terminador 2 (Última IDU)', valor: '120Ω' },
      ],
      fonte: F_TERM,
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Cálculo impecável! Dois resistores de **120Ω** em paralelo resultam em **≈60Ω** entre P e Q.',
          fonte: F_TERM,
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Dois resistores iguais de **120Ω** em paralelo dividem o valor por 2: a resistência total P↔Q é **≈60Ω**.',
          fonte: F_TERM,
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'A Ciência que Sustenta a Chave de Boca',
      principio: 'Princípio de Ofício: O técnico completo une a mão calejada da obra ao rigor da física, da elétrica e da química.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Depois de tantos anos de balcão, aprendi uma coisa: quem sabe o "como" trabalha todo dia; quem entende o "porquê" resolve o que ninguém mais consegue.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Essa frase fecha o nosso curso com chave de ouro, Dona Marta. Dos **60Ω** do RS-485 aos **500 microns** que evitam o copper plating, entender o porquê é a nossa assinatura de excelência!',
          fonte: [F_TERM, F_VACUO],
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer guardar o protocolo completo de 5 fases do IGBT/IPM e a matriz eletroquímica do copper plating? Confira a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Diagnóstico RS-485:** 2 terminadores de **120Ω** em paralelo = **≈60Ω** (OFF); V(P)/V(Q) ref. E = **2,5-2,7V** DC; ground loop > **2V** severo; separação mínima **5-30 cm**.',
        '**Protocolo IGBT/IPM e Megger:** capacitores guardam **450-650V** DC (usar resistor **10kΩ**/10W); diodo forward = **0,35-0,70V** (P→N = **0,7-1,2V**); Megger **500V** > **100 MΩ** (mínimo ≥ **100 kΩ**).',
        '**Física e Química do Sistema:** riser vertical ≥ **1.500 FPM**; vácuo mínimo **500 microns** (**0,5 mmHg**) para evitar decomposição > **250°C** (`HF`) e copper plating (+**0,34V** vs −**0,44V**).',
      ],
      proxima: 'Parabéns por concluir todas as 16 aulas do TVR Pro CO! Agora enfrente os Desafios da Rodada (Boss Quizzes) de cada Parte!',
      fonte: [F_TERM, F_VP_VQ, F_GND, F_SEP_CM, F_CAP_LETAL, F_RES_10K, F_DIODO, F_PN_FWD, F_MEGGER, F_ISOL_MIN, F_RISER, F_VACUO, F_HF, F_CU, F_FE],
    },
  ],
};
