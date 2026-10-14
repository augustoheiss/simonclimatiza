// src/data/conversas/tvr-pro-co-380v/05-02.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 05-02
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

const F_INV = {
  campo: 'conteudo_html',
  trecho: 'Placa de potência que converte alimentação trifásica 380V AC em tensão/frequência variável para controlar a velocidade do compressor.',
};
const F_CN20 = {
  campo: 'conteudo_html',
  trecho: 'CN20: Saída de potência para o fan module — 18-22V DC',
};
const F_CN2 = {
  campo: 'conteudo_html',
  trecho: 'CN2/CN3: Porta de controle do módulo inverter — 220V AC',
};
const F_LED = {
  campo: 'conteudo_html',
  trecho: 'LED1/LED2: Indicadores de operação e erro — 0-3.3V DC',
};
const F_CN8 = {
  campo: 'conteudo_html',
  trecho: 'CN8/CN9: Porta de comunicação com main board — 0-5V DC',
};
const F_CN38 = {
  campo: 'conteudo_html',
  trecho: 'CN38: Alimentação do fan module IPM — 485-645V DC',
};
const F_BUS = {
  campo: 'conteudo_html',
  trecho: 'Barramento DC interno: Opera na faixa de 485 a 645V DC — tensão armazenada nos capacitores eletrolíticos.',
};
const F_SINGLE = {
  campo: 'conteudo_html',
  trecho: '8-16HP — Configuração Single',
};
const F_DUAL = {
  campo: 'conteudo_html',
  trecho: '18-30HP — Configuração Dual',
};

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '05-02',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'bancada-oficina',
  duracaoMin: 11,
  beats: [
    // ── 1. CHEGADA ──────────────────────────────────────────────────────────
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Quarta, 8h00. Na bancada da oficina estão abertos um módulo inverter de compressor e uma placa de ventilador DC (Fan Module IPM).',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'Simon, olha a grossura dos cabos `L1/L2/L3`, `P/N` e `U/V/W` no módulo inverter! E por que tem um cabo saindo do módulo do compressor direto para a placa do ventilador?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Olho vivo, Ju! A placa do ventilador (Fan Module) não tem ponte retificadora própria de alta tensão: ela bebe direto do barramento DC (**485-645V** DC) do módulo inverter!',
      fonte: [F_CN38, F_BUS],
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'São duas ligações vitais entre eles: a porta `CN20` do inverter manda **18-22V** DC para a lógica do fan module, e a porta `CN38` recebe os **485-645V** DC para o IPM do ventilador!',
      fonte: [F_CN20, F_CN38],
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'O ventilador do condensador parou de girar e você suspeita da alimentação da placa do ventilador (Fan Module IPM). Onde nasce a tensão de alta potência (485-645V DC) que chega no conector CN38 do Fan Module?',
      fonte: [F_CN38, F_BUS],
      opcoes: [
        {
          id: 'a',
          texto: 'No barramento DC interno (terminais P e N, 485 a 645V DC) do módulo inverter do compressor.',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Exato! O módulo inverter retifica os **380V** AC para **485 a 645V** DC no barramento P/N e compartilha essa energia com a porta `CN38` do Fan Module!',
              fonte: [F_INV, F_CN38, F_BUS],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Direto da porta de sensores de 0-5V DC da placa principal (Main PCB).',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: '**0-5V** DC é apenas o sinal de comunicação nas portas `CN8`/`CN9`! A potência do IPM na `CN38` opera em **485-645V** DC vindos do módulo inverter.',
              fonte: [F_CN8, F_CN38],
            },
          ],
        },
        {
          id: 'c',
          texto: 'De uma bateria interna soldada na placa do ventilador.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'risada',
              texto: 'Bateria pra tocar motor de condensadora foi boa, Ju! O IPM do fan module recebe **485-645V** DC na `CN38` e **18-22V** DC da `CN20`.',
              fonte: [F_CN38, F_CN20],
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
      emocao: 'serio',
      texto: 'Vamos seguir o caminho da força no módulo inverter: entram **380V** AC trifásicos em `L1/L2/L3`, passam pela ponte retificadora e viram **485 a 645V** DC nos terminais `P` e `N`.',
      fonte: [F_INV, F_BUS],
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Entre o positivo da ponte e o barramento `P` entram os terminais `P1` e `P2`, onde fica conectado o reator DC (indutor de filtro que alisa a corrente contínua).',
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'neutro',
      texto: 'Depois, os transistores IGBT chaveiam esses **485 a 645V** DC e entregam tensão e frequência variáveis nas saídas `U/V/W` (fios vermelho, azul e preto) para o compressor!',
      fonte: F_BUS,
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E as portas de baixa tensão do módulo inverter (`CN2/CN3`, `CN8/CN9`, `LED1/LED2`)?',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: '`CN2/CN3` recebe controle em **220V** AC; `CN8/CN9` comunica com a Main PCB em **0-5V** DC; `LED1/LED2` sinalizam operação e erro em **0-3.3V** DC; e `CN20` manda **18-22V** DC pro Fan Module!',
      fonte: [F_CN2, F_CN8, F_LED, F_CN20],
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Na configuração Single (**8-16HP**) há 1 módulo inverter e 1 fan module (`FANA`). Na Dual (**18-30HP**), tudo é duplicado em paralelo: Inverter A + Fan A e Inverter B + Fan B!',
      fonte: [F_SINGLE, F_DUAL],
    },
    {
      id: 'fala-9b',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E como as duas placas inverter iguais sabem quem é o Compressor A e quem é o Compressor B na configuração Dual?',
    },
    {
      id: 'fala-9c',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Pelo DIP switch `S7` em cada módulo inverter: `S7=0` (OFF) define o módulo A da esquerda e `S7=1` (ON) define o módulo B da direita!',
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Conector CN20 Froxo que Condenou um Motor de Ventilador Bom',
      fonte: [F_CN20, F_CN38, F_DUAL],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Numa máquina de **30HP** (configuração Dual, **18-30HP**), o ventilador B parou de funcionar e o técnico anterior já tinha orçado um motor DC novo e uma placa Fan Module nova.',
          fonte: F_DUAL,
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'E você mediu as tensões de entrada do Fan Module antes de trocar as peças, Simon?',
        },
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Na hora! Tinha **485-645V** DC chegando na `CN38`, mas na entrada de baixa tensão vinda da porta `CN20` do módulo inverter B (que deve entregar **18-22V** DC) estava zerado!',
          fonte: [F_CN38, F_CN20],
        },
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'O plugue da `CN20` no módulo inverter estava apenas mal encaixado depois de uma preventiva! Encaixamos o conector até dar o clique, os **18-22V** DC voltaram e o ventilador partiu na hora!',
          fonte: F_CN20,
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'A porta CN38 da placa do ventilador (Fan Module IPM) recebe tensão de alta potência na faixa de 485-645V DC proveniente do barramento DC.',
      verdade: true,
      fonte: F_CN38,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Verdade! A `CN38` alimenta o IPM do ventilador com **485-645V** DC, enquanto a `CN20` do inverter fornece **18-22V** DC para a lógica.',
          fonte: [F_CN38, F_CN20],
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Nas unidades de 18-30HP (Configuração Dual), um único módulo inverter alimenta simultaneamente os dois compressores em paralelo.',
      verdade: false,
      fonte: [F_SINGLE, F_DUAL],
      explicacao: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Mito! Em **18-30HP** (Configuração Dual), cada compressor possui seu próprio módulo inverter, seu próprio reator DC e seu próprio Fan Module dedicados.',
          fonte: F_DUAL,
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO + INTERAÇÃO ────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Quais são as faixas de tensão normais nas portas CN20 (saída para o fan module), CN8/CN9 (comunicação com Main PCB) e no barramento DC interno (P/N) do módulo inverter?',
      fonte: [F_CN20, F_CN8, F_BUS, F_CN2, F_INV],
      opcoes: [
        {
          id: 'a',
          texto: 'CN20: 18-22V DC | CN8/CN9: 0-5V DC | Barramento DC (P/N): 485 a 645V DC.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Precisão cirúrgica! `CN20` = **18-22V** DC, `CN8/CN9` = **0-5V** DC e barramento DC = **485 a 645V** DC.',
              fonte: [F_CN20, F_CN8, F_BUS],
            },
          ],
        },
        {
          id: 'b',
          texto: 'CN20: 485-645V DC | CN8/CN9: 220V AC | Barramento DC: 18-22V DC.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Trocou tudo! **485-645V** DC é no barramento DC e na `CN38`; a `CN20` entrega **18-22V** DC.',
              fonte: [F_CN38, F_CN20, F_BUS],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Todas operam em 380V AC trifásico.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: '**380V** AC é apenas na entrada trifásica `L1/L2/L3` do módulo inverter.',
              fonte: F_INV,
            },
          ],
        },
      ],
    },
    {
      id: 'insp-1',
      tipo: 'inspecao',
      titulo: 'Rastreamento de Tensão no Conjunto Inverter + Fan Module',
      enunciado: 'Ao inspecionar o conjunto de potência de uma condensadora de 8-16HP, qual ponto apresenta perigo de choque elétrico letal de alta tensão contínua (485-645V DC)?',
      fonte: [F_SINGLE, F_CN38, F_CN20, F_LED],
      pontos: [
        {
          id: 'p1',
          rotulo: 'Terminais do barramento DC (P/N) e conector CN38 do Fan Module IPM (485-645V DC)',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Atenção máxima! Tanto o barramento P/N quanto a porta `CN38` trabalham com **485-645V** DC.',
              fonte: F_CN38,
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Indicadores luminosos LED1/LED2 (0-3.3V DC)',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'neutro',
              texto: 'Os LEDs operam em baixíssima tensão (**0-3.3V** DC); o perigo letal está nos **485-645V** DC da `CN38` e barramento P/N.',
              fonte: [F_LED, F_CN38],
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Porta CN20 de alimentação lógica (18-22V DC)',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'neutro',
              texto: 'A `CN20` opera em **18-22V** DC; quem carrega **485-645V** DC é a porta `CN38` e os terminais P/N.',
              fonte: [F_CN20, F_CN38],
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'Respeito Absoluto à Alta Tensão DC',
      principio: 'Princípio de Ofício: Alta tensão contínua no barramento DC não dá segunda chance; meça sempre a descarga dos capacitores antes de tocar na placa.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Panela de pressão apitando a gente não abre na marra; desliga o fogo, espera a pressão cair toda e confirma antes de destampar.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Capacitor eletrolítico de **485 a 645V** DC é uma panela de pressão elétrica, Dona Marta. Desligou o disjuntor, espera descarregar e confere no multímetro.',
          fonte: F_BUS,
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer revisar a tabela completa de portas do Módulo Inverter e do Fan Module? Acesse a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Conversão de potência:** entra **380V** AC em `L1/L2/L3`, retifica para **485 a 645V** DC no barramento P/N (com reator em `P1/P2`) e sai variável em `U/V/W`.',
        '**Ponte Inverter ↔ Fan Module:** a porta `CN20` fornece **18-22V** DC e a porta `CN38` alimenta o IPM do ventilador com **485-645V** DC.',
        '**Arquitetura escalável:** **8-16HP** = Configuração Single (1 conjunto); **18-30HP** = Configuração Dual (2 conjuntos independentes A e B).',
      ],
      proxima: 'Na Parte 6 (Tópico 06-01) vamos entrar no Diagnóstico e Troubleshooting: tabela geral de erros e falhas de comunicação E0, E1, E2 e H0!',
      fonte: [F_INV, F_BUS, F_CN20, F_CN38, F_SINGLE, F_DUAL],
    },
  ],
};
