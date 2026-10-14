// src/data/conversas/tvr-pro-co-380v/01-02.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 01-02
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

const F_IDU_CAP = {
  campo: 'conteudo_html',
  trecho: 'Posições 7-8 → "07" — Capacidade (Btu/h × 1000): O valor deve ser lido como o número formado pelos dígitos 7 e 8, multiplicado por 1.000. No exemplo, "07" = 7.000 Btu/h.',
};
const F_IDU_VOLT = {
  campo: 'conteudo_html',
  trecho: 'Posição 10 → "F" — Tensão / Frequência: 380V, 50-60Hz, 1 Fase (1P).',
};
const F_FA_CFM = {
  campo: 'conteudo_html',
  trecho: 'Posições 6-7 → "12" — Capacidade (CFM): A vazão de ar nominal. No exemplo, "12" corresponde a 1200 CFM.',
};
const F_ODU_CAP = {
  campo: 'conteudo_html',
  trecho: 'Posições 7-8 → "77" — Capacidade (Btu/h × 1000): No exemplo, "77" = 77.000 Btu/h (8HP). Para modelos de maior capacidade, como o 30HP: "290" ocupa as posições 6-7-8, pois o campo se expande.',
};
const F_ODU_CORR = {
  campo: 'conteudo_html',
  trecho: 'Posição 13 → "0" — Acabamento / Tratamento: 0 = Standard (acabamento padrão) ou C = Corrosion treatment (tratamento anticorrosivo).',
};
const F_ODU_290 = {
  campo: 'conteudo_html',
  trecho: 'Posições 6-7-8 (290) — Capacidade: 290.000 Btu/h (30HP)',
};

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '01-02',
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
      texto: 'Quinta, 7h30. Na bancada da oficina, Juninho segura três etiquetas de plaqueta de identificação e parece tentar decifrar um código secreto.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'Simon, olha esses códigos: `4TVN1007CF000AA`, `4TVF01277F000AA` e `4TVY0290HE000AA`. Tudo tem 15 posições, mas os números mudam de lugar!',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'bem-humorado',
      texto: 'Calma, Ju! Plaqueta da Trane não é bilhete de loteria. Cada uma das 15 posições tem endereço certo: refrigerante, família, capacidade, tensão e até proteção anticorrosiva.',
      fonte: F_ODU_CORR,
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Começa pelo dígito 1: o `4` no início crava refrigerante **R-410A**. Já as posições 2-3-4 separam quem é quem: `TVN` é interna padrão, `TVF` é Ar Novo e `TVY` é externa!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Posição 1 → "4" — Tipo de Refrigerante: R-410A.',
      },
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Chegou no caminhão a unidade interna `4TVF01277F000AA` (Ar Novo). O instalador pergunta o que significam o "12" nas posições 6-7 e o "77" nas posições 8-9:',
      fonte: [F_FA_CFM, F_ODU_CAP],
      opcoes: [
        {
          id: 'a',
          texto: 'Posições 6-7 ("12") indicam 1200 CFM de vazão; posições 8-9 ("77") indicam 77.000 Btu/h.',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Na mosca! Na família `TVF` de Ar Novo, a plaqueta traz dupla capacidade: **1200 CFM** nas posições 6-7 e **77.000 Btu/h** logo ao lado!',
              fonte: [F_FA_CFM, F_ODU_CAP],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Significa 127.700 Btu/h de capacidade térmica total.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Cuidado! Na unidade `TVF`, os campos são separados: `"12"` é a vazão nominal de **1200 CFM** e `"77"` é a capacidade térmica.',
              fonte: F_FA_CFM,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Significa versão de placa 12 e ano de fabricação 77.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'risada',
              texto: 'Ano 77 foi boa, Ju! Na linha `TVF`, `"12"` é **1200 CFM** de ar externo renovado.',
              fonte: F_FA_CFM,
            },
          ],
        },
      ],
    },

    // ── 3. PAPO RETO ────────────────────────────────────────────────────────
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Na unidade interna padrão `4TVN1007CF000AA`, a posição 5 (`"1"`) indica Somente Frio (Cooling Only), e a posição 10 (`"F"`) indica **380V**, 50-60Hz.',
      fonte: F_IDU_VOLT,
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'E olha as posições 7-8 da interna: `"07"` multiplica por 1.000 e vira **7.000 Btu/h**. Já a posição 9 traz o estilo construtivo: `C` é Cassete, `D` é Duto e `W` é Hi-Wall.',
      fonte: F_IDU_CAP,
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Mas Simon, e na condensadora `4TVY0077HE000AA` comparada com a `4TVY0290HE000AA`? Como um número de três dígitos cabe onde antes só cabiam dois?',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'É o campo elástico da posição 6! Na unidade de **8HP** (`"77"` = **77.000 Btu/h**), a posição 6 fica em `"0"` como reserva.',
      fonte: F_ODU_CAP,
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Quando passa de cem mil Btu/h — como no módulo de **30HP** — o campo se expande para as posições 6-7-8: `"290"` = **290.000 Btu/h** (**30HP**)!',
      fonte: [F_ODU_CAP, F_ODU_290],
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'E nunca ignore a posição 13 da condensadora: `"0"` é Standard (padrão) e `"C"` é Corrosion treatment (tratamento anticorrosivo para orla marítima).',
      fonte: F_ODU_CORR,
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'A Condensadora de Praia com Dígito 0 na Posição 13',
      fonte: F_ODU_CORR,
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Hotel de frente pro mar no litoral. O projeto exigia condensadoras com tratamento anticorrosivo (`"C"` na posição 13 da plaqueta).',
          fonte: F_ODU_CORR,
        },
        {
          quem: 'juninho',
          emocao: 'surpreso',
          texto: 'Deixa eu adivinhar: subiram a máquina pro telhado sem conferir a posição 13?',
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Pior: receberam `4TVY0290HE000AA` com `"0"` (Standard) na posição 13 em vez de `"C"`. Em maresia pesada, serpentina sem proteção começa a esfarelar rápido!',
          fonte: F_ODU_CORR,
        },
        {
          quem: 'bia',
          emocao: 'serio',
          texto: 'Bastavam 10 segundos no recebimento conferindo a posição 13 da plaqueta antes de içar o equipamento no guindaste.',
          fonte: F_ODU_CORR,
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Na condensadora 4TVY0290HE000AA, os dígitos "290" ocupam as posições 6-7-8 porque o campo de capacidade se expande para representar 290.000 Btu/h (30HP).',
      verdade: true,
      fonte: [F_ODU_CAP, F_ODU_290],
      explicacao: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Verdade! Nos modelos menores como **8HP** (`"77"` = **77.000 Btu/h**), a posição 6 é `"0"`. Nos maiores como **30HP**, `"290"` ocupa as posições 6-7-8 (**290.000 Btu/h**).',
          fonte: [F_ODU_CAP, F_ODU_290],
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Na unidade externa TVR Pro CO, o caractere "0" na posição 13 indica que a serpentina recebeu tratamento especial anticorrosivo para maresia.',
      verdade: false,
      fonte: F_ODU_CORR,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Mito! Na posição 13, `"0"` é Standard (acabamento padrão). Para tratamento anticorrosivo (Corrosion treatment), a posição 13 precisa ser `"C"`.',
          fonte: F_ODU_CORR,
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO + INTERAÇÃO ────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Ao inspecionar a plaqueta de uma condensadora `4TVY0077HE000AA`, qual é a capacidade nominal indicada pelos dígitos "77" nas posições 7-8?',
      fonte: F_ODU_CAP,
      opcoes: [
        {
          id: 'a',
          texto: '77.000 Btu/h (correspondente ao módulo de 8HP).',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Exato! Multiplica `"77"` por 1.000 e você tem **77.000 Btu/h**, que é o nosso módulo de **8HP**.',
              fonte: F_ODU_CAP,
            },
          ],
        },
        {
          id: 'b',
          texto: '7.000 Btu/h (correspondente a uma unidade interna pequena).',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: '**7.000 Btu/h** seria o código `"07"` numa unidade interna `4TVN`. `"77"` na condensadora vale **77.000 Btu/h** (**8HP**)!',
              fonte: [F_IDU_CAP, F_ODU_CAP],
            },
          ],
        },
        {
          id: 'c',
          texto: '290.000 Btu/h (correspondente ao módulo de 30HP).',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: '**290.000 Btu/h** (**30HP**) é o modelo `4TVY0290HE000AA`, com `"290"` nas posições 6-7-8.',
              fonte: F_ODU_290,
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Decodificando a Capacidade da Condensadora 30HP',
      enunciado: 'A plaqueta da condensadora de 30HP traz os dígitos "290" nas posições 6-7-8 (capacidade em Btu/h × 1000). Qual é a capacidade nominal total em Btu/h dessa unidade?',
      formula: 'Capacidade (Btu/h) = Código (290) × 1000',
      unidade: 'Btu/h',
      respostaCorreta: 290000,
      tolerancia: 100,
      opcoesRapidas: [77000, 120000, 290000, 380000],
      leituras: [
        { rotulo: 'Dígitos nas posições 6-7-8', valor: '290' },
        { rotulo: 'Classe de potência', valor: '30HP' },
      ],
      fonte: F_ODU_290,
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Conta certeira! `"290"` multiplicado por 1.000 entrega **290.000 Btu/h** (**30HP**).',
          fonte: F_ODU_290,
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Multiplica os dígitos `"290"` das posições 6-7-8 por 1.000: o resultado é **290.000 Btu/h** (**30HP**).',
          fonte: F_ODU_290,
        },
      ],
    },
    {
      id: 'insp-1',
      tipo: 'inspecao',
      titulo: 'Conferência de Recebimento na Plaqueta',
      enunciado: 'Uma obra no litoral exige condensadora de 30HP (290.000 Btu/h) com proteção anticorrosiva na posição 13. Qual ponto de verificação confirma o tratamento anticorrosivo?',
      fonte: [F_ODU_290, F_ODU_CORR, F_IDU_VOLT],
      pontos: [
        {
          id: 'p1',
          rotulo: 'Posição 13 = "C" (Corrosion treatment — tratamento anticorrosivo)',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Olho de águia! O `"C"` na posição 13 confirma o tratamento anticorrosivo de fábrica.',
              fonte: F_ODU_CORR,
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Posição 13 = "0" (Standard — acabamento padrão)',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Posição 13 em `"0"` é acabamento Standard — reprovado para especificação anticorrosiva!',
              fonte: F_ODU_CORR,
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Posição 10 = "F" (380V, 50-60Hz)',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'neutro',
              texto: 'A posição 10 informa tensão (**380V**, 50-60Hz), não o acabamento anticorrosivo da posição 13.',
              fonte: [F_IDU_VOLT, F_ODU_CORR],
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'Ler a Plaqueta Antes de Subir no Guindaste',
      principio: 'Princípio de Ofício: Conferir 15 caracteres no chão economiza um guindaste inteiro no telhado.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Aqui na padaria eu leio o rótulo do saco de farinha na porta do caminhão. Depois que despejou na masseira, não adianta reclamar do fornecedor.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Mesma coisa na obra, Dona Marta. Técnico profissional audita cada dígito da plaqueta no térreo antes de autorizar o içamento.',
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer revisar posição por posição das 3 famílias (`4TVN`, `4TVF` e `4TVY`)? Consulte a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Famílias nas posições 2-3-4:** `TVN` = Interna padrão (ex.: `"07"` = **7.000 Btu/h**), `TVF` = Ar Novo, `TVY` = Externa.',
        '**Dupla capacidade no Ar Novo (`TVF`):** posições 6-7 trazem a vazão (**1200 CFM**) e posições 8-9 a capacidade térmica.',
        '**Campo elástico e anticorrosão na Externa (`TVY`):** de `"77"` (**77.000 Btu/h**, **8HP**) até `"290"` nas posições 6-7-8 (**290.000 Btu/h**, **30HP**), e posição 13 `"C"` para Corrosion treatment.',
      ],
      proxima: 'Na Parte 2 (Tópico 02-01) vamos abrir o gabinete externo e mapear todos os componentes físicos dos 3 chassis!',
      fonte: [F_IDU_CAP, F_FA_CFM, F_ODU_CAP, F_ODU_290, F_ODU_CORR],
    },
  ],
};
