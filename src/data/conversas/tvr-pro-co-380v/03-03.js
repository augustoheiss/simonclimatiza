// src/data/conversas/tvr-pro-co-380v/03-03.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 03-03
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

const F_PC_ACT = {
  campo: 'conteudo_html',
  trecho: 'Limiar de atuação: Pc > 4.4 MPa',
};
const F_PC_REC = {
  campo: 'tabelas_html',
  trecho: '3.2 MPa',
};
const F_PC_HIST = {
  campo: 'conteudo_html',
  trecho: 'Histerese: 1.2 MPa (4.4 - 3.2)',
};
const F_PE_ACT = {
  campo: 'tabelas_html',
  trecho: '0.05 MPa',
};
const F_PE_REC = {
  campo: 'conteudo_html',
  trecho: 'Limiar de recuperação: Pe > 0.15 MPa',
};
const F_PE_HIST = {
  campo: 'conteudo_html',
  trecho: 'Histerese: 0.10 MPa',
};
const F_DESC_100 = {
  campo: 'conteudo_html',
  trecho: 'Temp. descarga > 100°C → SV2 abre (injeta líquido)',
};
const F_DESC_90 = {
  campo: 'tabelas_html',
  trecho: '90°C Fechada Operando Normal',
};
const F_DESC_120 = {
  campo: 'conteudo_html',
  trecho: 'Temp. descarga > 120°C → Compressor desliga → Erro P4',
};
const F_LNB53 = {
  campo: 'conteudo_html',
  trecho: 'LNB53: Current_max = 48.5 A',
};
const F_LNB65 = {
  campo: 'conteudo_html',
  trecho: 'LNB65: Current_max = 59 A',
};
const F_TF_N1 = {
  campo: 'tabelas_html',
  trecho: 'Nível 1 Tf > 74°C Saída do compressor reduzida Tf',
};
const F_TF_71 = {
  campo: 'tabelas_html',
  trecho: '71°C Nível 2',
};
const F_TF_N2 = {
  campo: 'tabelas_html',
  trecho: 'Nível 2 Tf > 79°C Compressor para — Erro PL Tf',
};
const F_TF_65 = {
  campo: 'tabelas_html',
  trecho: '65°C Nível 3',
};

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '03-03',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 12,
  beats: [
    // ── 1. CHEGADA ──────────────────────────────────────────────────────────
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Sexta, 8h30. Sol rachando na laje técnica. O display da condensadora mostra histórico de proteção e Juninho está com o caderno aberto.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'alerta',
      texto: 'Simon, o cliente falou que a máquina reduziu a potência sozinha antes de dar código `PL` ontem à tarde. A placa pensa em dois estágios antes de desarmar?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Exatamente, Ju! O Bloco 4 (Protection Control) tem 6 escudos eletrônicos, e quase todos tentam salvar a operação reduzindo carga antes de cortar o compressor!',
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Olha o caso do módulo inverter (`Tf`): no Nível 1, se `Tf` passa de **74°C**, a placa reduz a frequência e recupera abaixo de **71°C** (histerese de 3 graus).',
      fonte: [F_TF_N1, F_TF_71],
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Se a ventilação do dissipador do inverter estiver obstruída e a temperatura do módulo (Tf) continuar subindo além do Nível 1 (74°C), em qual temperatura o compressor para com erro PL e quando ele recupera?',
      fonte: [F_TF_N1, F_TF_71, F_TF_N2, F_TF_65, F_DESC_120],
      opcoes: [
        {
          id: 'a',
          texto: 'Para com erro PL quando Tf > 79°C e só recupera quando Tf < 65°C (histerese de 14 graus).',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Cravou os dois estágios! Nível 1 reduz em **74°C**; Nível 2 desarma com erro `PL` acima de **79°C** e exige esfriar abaixo de **65°C** (histerese de 14 graus)!',
              fonte: [F_TF_N1, F_TF_N2, F_TF_65],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Só desarma quando Tf passa de 120°C.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: '**120°C** é o corte da temperatura de descarga do compressor (erro `P4`), não do módulo inverter! O módulo para com `PL` acima de **79°C**.',
              fonte: [F_DESC_120, F_TF_N2],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Desarma em 79°C e religa logo em seguida sem esperar esfriar.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Sem histerese o IGBT queimaria! Ele para acima de **79°C** e só libera abaixo de **65°C** (histerese de 14 graus).',
              fonte: [F_TF_N2, F_TF_65],
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
      texto: 'Agora anota os limites de pressão: na Alta Pressão (`Pc`), o corte atua quando `Pc` > **4.4 MPa** e só recupera quando `Pc` < **3.2 MPa** (histerese de **1.2 MPa**).',
      fonte: [F_PC_ACT, F_PC_REC, F_PC_HIST],
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Na Baixa Pressão (`Pe`), a proteção atua se a sucção cair abaixo de `Pe` < **0.05 MPa**, e recupera somente acima de `Pe` > **0.15 MPa** (histerese de **0.10 MPa**).',
      fonte: [F_PE_ACT, F_PE_REC, F_PE_HIST],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Na Temperatura de Descarga, temos dois degraus: passou de **100°C**, abre a `SV2` (e fecha abaixo de **90°C**); passou de **120°C**, desliga o compressor e crava erro `P4`!',
      fonte: [F_DESC_100, F_DESC_90, F_DESC_120],
    },
    {
      id: 'fala-6b',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'E se o erro primário como `P2`, `P4` ou `PL` acontecer 3 vezes seguidas?',
    },
    {
      id: 'fala-6c',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Aí sobe de nível para erro crítico com reinício manual obrigatório: `P2` vira `H5`, `P4` vira `H6` e `PL` vira `C7`!',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E a proteção de corrente elétrica e defasagem de fases nos compressores `LNB53` e `LNB65`?',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Cada modelo de compressor tem seu teto `Current_max`: no compressor `LNB53` o limite é **48.5 A**, e no compressor maior `LNB65` o limite é **59 A**!',
      fonte: [F_LNB53, F_LNB65],
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Além disso, na partida o sistema monitora perda ou inversão das três fases antes de liberar rampa de potência, protegendo o inversor contra subtensão severa.',
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Dissipador Empoeirado e o Mistério do Erro PL às 15h',
      fonte: [F_TF_N1, F_TF_N2, F_TF_65],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num prédio ao lado de uma avenida em obras, a condensadora perdia rendimento às 14h e parava com código `PL` às 15h todos os dias.',
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'Às 14h era o Nível 1 entrando em ação, Simon?',
        },
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Exato! Às 14h a temperatura `Tf` do módulo passava de **74°C** e capava a frequência. Às 15h batia **79°C** e desarmava por `PL` até esfriar abaixo de **65°C**!',
          fonte: [F_TF_N1, F_TF_N2, F_TF_65],
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Abrimos a caixa elétrica e o dissipador de alumínio do módulo inverter estava rebocado de pó de cimento! Limpamos o dissipador e `Tf` voltou a rodar fresquinho.',
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Quando a temperatura de descarga ultrapassa 100°C, o compressor desliga imediatamente e apresenta o código de erro P4.',
      verdade: false,
      fonte: [F_DESC_100, F_DESC_120],
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! Acima de **100°C** quem entra em ação é a solenoide `SV2` injetando líquido. O desligamento com erro `P4` só ocorre se a descarga ultrapassar **120°C**!',
          fonte: [F_DESC_100, F_DESC_120],
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'A proteção de alta pressão atua quando Pc > 4.4 MPa e só permite recuperação quando Pc cai abaixo de 3.2 MPa (histerese de 1.2 MPa).',
      verdade: true,
      fonte: [F_PC_ACT, F_PC_REC, F_PC_HIST],
      explicacao: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Verdade! Corte em `Pc` > **4.4 MPa** e recuperação em `Pc` < **3.2 MPa**, garantindo histerese de **1.2 MPa**.',
          fonte: [F_PC_ACT, F_PC_REC, F_PC_HIST],
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO + INTERAÇÃO ────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Quais são os limites máximos de corrente (Current_max) para proteção de sobrecorrente nos compressores LNB53 e LNB65, respectivamente?',
      fonte: [F_LNB53, F_LNB65],
      opcoes: [
        {
          id: 'a',
          texto: 'LNB53: Current_max = 48.5 A | LNB65: Current_max = 59 A.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Na mosca! `LNB53` corta em **48.5 A** e `LNB65` corta em **59 A**.',
              fonte: [F_LNB53, F_LNB65],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Ambos têm limite fixo de 48.5 A.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: '**48.5 A** é o limite do `LNB53`. O `LNB65`, de maior deslocamento, tem `Current_max` = **59 A**.',
              fonte: [F_LNB53, F_LNB65],
            },
          ],
        },
        {
          id: 'c',
          texto: 'LNB53 corta em 59 A e LNB65 corta em 48.5 A.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Invertido! O `LNB53` tem limite de **48.5 A** e o `LNB65` tem limite de **59 A**.',
              fonte: [F_LNB53, F_LNB65],
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Histerese da Proteção de Alta Pressão (Pc)',
      enunciado: 'A proteção de alta pressão atua em Pc > 4.4 MPa e recupera em Pc < 3.2 MPa. Qual é a histerese de pressão em MPa entre o desarme e a recuperação?',
      formula: 'Histerese = 4.4 MPa - 3.2 MPa',
      unidade: 'MPa',
      respostaCorreta: 1.2,
      tolerancia: 0.05,
      opcoesRapidas: [0.1, 0.8, 1.2, 3.2],
      leituras: [
        { rotulo: 'Pressão de atuação (corte)', valor: '4.4 MPa' },
        { rotulo: 'Pressão de recuperação', valor: '3.2 MPa' },
      ],
      fonte: [F_PC_ACT, F_PC_REC, F_PC_HIST],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Exato! **1.2 MPa** de histerese (**4.4 MPa** menos **3.2 MPa**).',
          fonte: [F_PC_ACT, F_PC_REC, F_PC_HIST],
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Subtraia **3.2 MPa** de **4.4 MPa**: a histerese é de **1.2 MPa**.',
          fonte: [F_PC_ACT, F_PC_REC, F_PC_HIST],
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'Proteção Não É Inimiga, É Aviso de Amigo',
      principio: 'Princípio de Ofício: Jamais burle um sensor de proteção; ele é o único freio antes da perda total do compressor.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Quando o disjuntor do forno cai, eu não amarro a alavanca com arame; eu chamo quem descubra por que esquentou.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Quem dera todo mundo pensasse assim, Dona Marta! Código de proteção é a máquina pedindo socorro antes de quebrar.',
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer todas as curvas de atuação e histerese das 6 proteções lado a lado? Abra a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Pressões:** Alta Pressão corta em `Pc` > **4.4 MPa** (recupera < **3.2 MPa**, histerese **1.2 MPa**); Baixa Pressão corta em `Pe` < **0.05 MPa** (recupera > **0.15 MPa**, histerese **0.10 MPa**).',
        '**Descarga e Corrente:** descarga > **100°C** abre `SV2` (< **90°C** fecha) e > **120°C** desarma com `P4`; corrente máxima `LNB53` = **48.5 A** e `LNB65` = **59 A**.',
        '**Módulo Inverter (Tf):** Nível 1 reduz frequência em `Tf` > **74°C** (recupera < **71°C**, histerese 3 graus); Nível 2 para com erro `PL` em `Tf` > **79°C** (recupera < **65°C**, histerese 14 graus).',
      ],
      proxima: 'No Tópico 03-04 vamos fechar a Parte 3 estudando os Controles Especiais: Duty Cycling e o ciclo automático de Oil Return!',
      fonte: [F_PC_ACT, F_PC_REC, F_PC_HIST, F_PE_ACT, F_PE_REC, F_PE_HIST, F_DESC_100, F_DESC_90, F_DESC_120, F_LNB53, F_LNB65, F_TF_N1, F_TF_71, F_TF_N2, F_TF_65],
    },
  ],
};
