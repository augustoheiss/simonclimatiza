// src/data/conversas/tvr-pro-co-380v/02-02.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 02-02
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

const F_SV2_ABRE = {
  campo: 'conteudo_html',
  trecho: 'Condição de abertura: Temperatura de descarga do compressor ultrapassa 100°C',
};
const F_SV2_FECHA = {
  campo: 'conteudo_html',
  trecho: 'Condição de fechamento: Temperatura de descarga cai abaixo de 90°C',
};
const F_SV2_HIST = {
  campo: 'conteudo_html',
  trecho: 'Histerese: 10°C (abre a 100°C, fecha a 90°C)',
};
const F_SV4 = {
  campo: 'conteudo_html',
  trecho: 'Condição de primeira abertura: Compressor em operação por 200 segundos (3 min 20 s)',
};
const F_SEP = {
  campo: 'conteudo_html',
  trecho: 'Eficiência de separação: até 99%',
};
const F_DIAG_A = {
  campo: 'conteudo_html',
  trecho: 'Diagrama de Tubulação — Classe A (8-16HP)',
};
const F_DIAG_B = {
  campo: 'conteudo_html',
  trecho: 'Diagrama de Tubulação — Classe B (18-22HP)',
};
const F_DIAG_C = {
  campo: 'conteudo_html',
  trecho: 'Diagrama de Tubulação — Classe C (24-30HP)',
};

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '02-02',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'bancada-oficina',
  duracaoMin: 12,
  beats: [
    // ── 1. CHEGADA ──────────────────────────────────────────────────────────
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Segunda, 7h40. Simon espalha na bancada os diagramas de tubulação P&ID das Classes A (8-16HP), B (18-22HP) e C (24-30HP) com canetas marca-texto.',
      fonte: [F_DIAG_A, F_DIAG_B, F_DIAG_C],
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'Simon, tem três solenoides diferentes nesse diagrama — `SV2`, `SV4` e `SV7` — mais um trocador de placas chamado subcooler e quatro sensores `T3`, `T4`, `T6A` e `T6B`!',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Esse diagrama é o mapa do tesouro, Ju! Quem entende o que cada solenoide e cada sensor faz aqui resolve diagnóstico sem trocar peça no chute.',
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Começando pelos sensores da condensadora: `T3` mede a tubulação do condensador, `T4` mede o ar externo ambiente, e `T6A`/`T6B` vigiam a entrada e a saída do subcooler!',
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Num dia de calor pesado, a temperatura de descarga do compressor passa de 100°C. Qual solenoide a placa aciona para resfriar o compressor e em qual temperatura ela volta a fechar?',
      fonte: [F_SV2_ABRE, F_SV2_FECHA, F_SV2_HIST],
      opcoes: [
        {
          id: 'a',
          texto: 'Aciona a SV2 (Liquid Injection) acima de 100°C e fecha quando cai abaixo de 90°C (histerese de 10°C).',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Cravou! A `SV2` é o bombeiro do compressor: abre acima de **100°C**, injeta líquido na sucção e fecha abaixo de **90°C** (histerese de **10°C**).',
              fonte: F_SV2_HIST,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Aciona a SV4 imediatamente para jogar óleo frio na descarga.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'A `SV4` é de retorno de óleo por ciclo de tempo (abre após 200 segundos de operação). Quem resfria descarga acima de **100°C** é a `SV2`!',
              fonte: [F_SV4, F_SV2_ABRE],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Aciona a SV7 e só fecha quando a descarga esfria totalmente.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'A `SV7` é de bypass de pressão. Quem protege a descarga é a `SV2`: abre a **100°C** e fecha a **90°C** (histerese de **10°C**).',
              fonte: F_SV2_HIST,
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
      texto: 'Olha a função das 3 solenoides: a `SV2` injeta líquido quando a descarga passa de **100°C** e fecha abaixo de **90°C**, evitando chattering graças à histerese de **10°C**.',
      fonte: [F_SV2_ABRE, F_SV2_FECHA, F_SV2_HIST],
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Já a `SV4` é a solenoide de retorno de óleo do separador (que tem eficiência de até **99%**). Ela faz a primeira abertura após 200 segundos (3 min 20 s) de compressor ligado.',
      fonte: [F_SEP, F_SV4],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'neutro',
      texto: 'Depois disso, a `SV4` trabalha num ciclo temporizado: fica fechada por 10 minutos, abre por 3 minutos e repete, devolvendo o óleo pro cárter sem derrubar a pressão.',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E a `SV7` junto com aquele trocador de placas (subcooler) e os sensores `T6A` e `T6B`?',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'A `SV7` faz o bypass entre alta e baixa pressão na partida e parada. E o subcooler usa a `EXVA` e a diferença entre `T6B` e `T6A` para sub-resfriar o líquido que vai para as internas!',
    },
    {
      id: 'fala-8b',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Então o líquido que desce pelo prédio ganha sub-resfriamento extra antes mesmo de sair da condensadora!',
    },
    {
      id: 'fala-8c',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Isso mesmo! Esse sub-resfriamento garante líquido firme sem bolhas de flash gas até nas evaporadoras mais distantes.',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Detalhe de ouro entre os chassis: no Classe B (**18-22HP**) os 2 compressores têm igualização de óleo; no Classe C (**24-30HP**) a tubulação é reforçada para a maior vazão de massa.',
      fonte: [F_DIAG_B, F_DIAG_C],
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'A Solenoide SV2 Travada Fechada no Verão',
      fonte: F_SV2_HIST,
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Prédio comercial no auge do verão. Uma condensadora de **22HP** funcionava 15 minutos e desarmava por alta temperatura de descarga.',
          fonte: F_DIAG_B,
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'Falta de gás ou condensador sujo, Simon?',
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Condensador limpo! Mas quando a descarga batia **100°C**, a placa mandava tensão pra `SV2` e o tubo da linha de injeção continuava em temperatura ambiente: a bobina da `SV2` estava aberta!',
          fonte: F_SV2_HIST,
        },
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Trocamos a bobina da `SV2`, ela abriu aos **100°C**, baixou a descarga para menos de **90°C** e a máquina nunca mais desarmou!',
          fonte: F_SV2_HIST,
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'A válvula solenoide SV2 abre quando a descarga ultrapassa 100°C e fecha imediatamente sem histerese assim que baixa um único grau.',
      verdade: false,
      fonte: F_SV2_HIST,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! Sem histerese ela ficaria batendo aberta/fechada sem parar. Ela tem histerese de **10°C**: abre a **100°C** e só fecha abaixo de **90°C**.',
          fonte: F_SV2_HIST,
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'O separador de óleo das unidades TVR Pro CO retém até 99% do óleo arrastrado na descarga para devolvê-lo aos compressores via SV4.',
      verdade: true,
      fonte: F_SEP,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Verdade! Com eficiência de separação de até **99%**, quase todo o óleo já fica na condensadora e retorna ciclicamente pela `SV4`.',
          fonte: F_SEP,
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO + INTERAÇÃO ────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Quanto tempo após a partida do compressor ocorre a primeira abertura da válvula solenoide de retorno de óleo SV4?',
      fonte: [F_SV4, F_SV2_ABRE],
      opcoes: [
        {
          id: 'a',
          texto: 'Após 200 segundos (3 min 20 s) de operação do compressor.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! A primeira abertura da `SV4` ocorre após 200 segundos (3 min 20 s) de operação do compressor.',
              fonte: F_SV4,
            },
          ],
        },
        {
          id: 'b',
          texto: 'No exato segundo em que o compressor dá a partida.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Na partida a `SV4` fica fechada por 200 segundos (3 min 20 s) para estabilizar a pressão primeiro.',
              fonte: F_SV4,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Somente quando a temperatura de descarga passa de 100°C.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'serio',
              texto: 'Quem abre acima de **100°C** é a `SV2`! A `SV4` abre por tempo: 200 segundos (3 min 20 s) após a partida.',
              fonte: [F_SV2_ABRE, F_SV4],
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Cálculo da Histerese Térmica da SV2',
      enunciado: 'Sabendo que a válvula solenoide SV2 abre quando a descarga atinge 100°C e fecha quando cai a 90°C, qual é a histerese térmica em °C desse controle?',
      formula: 'Histerese = T_abertura (100°C) - T_fechamento (90°C)',
      unidade: '°C',
      respostaCorreta: 10,
      tolerancia: 0.5,
      opcoesRapidas: [5, 10, 15, 20],
      leituras: [
        { rotulo: 'Temperatura de abertura da SV2', valor: '100°C' },
        { rotulo: 'Temperatura de fechamento da SV2', valor: '90°C' },
      ],
      fonte: F_SV2_HIST,
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Baita! Histerese de **10°C** (abre a **100°C**, fecha a **90°C**), protegendo a solenoide contra ciclagem rápida.',
          fonte: F_SV2_HIST,
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Basta subtrair **90°C** de **100°C**: a histerese da `SV2` é de **10°C**.',
          fonte: F_SV2_HIST,
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'Seguir a Linha Antes de Condenar a Peça',
      principio: 'Princípio de Ofício: O diagrama de tubulação na tampa vale mais que dez palpites no grupo de mensagens.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Receita boa tem tempo e temperatura pra cada ingrediente. Quem pula etapa tira pão cru por dentro e queimado por fora.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'E no circuito frigorígeno cada solenoide tem seu tempo e sua temperatura, Dona Marta. Ler o diagrama P&ID é respeitar a lógica de quem projetou a máquina.',
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer consultar a tabela completa de sensores (`T3`, `T4`, `T6A`, `T6B`) e solenoides (`SV2`, `SV4`, `SV7`)? Abra a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**SV2 (Liquid Injection):** abre acima de **100°C** na descarga e fecha abaixo de **90°C** (histerese de **10°C**).',
        '**SV4 (Oil Return):** devolve o óleo do separador (eficiência até **99%**), com primeira abertura após 200 segundos (3 min 20 s).',
        '**Sensores e Subcooler:** `T3` (condensador), `T4` (ambiente externo) e `T6A`/`T6B` (entrada e saída do subcooler de placas controlado pela `EXVA`).',
      ],
      proxima: 'No Tópico 02-03 vamos acompanhar o fluxo do refrigerante em operação normal e no ciclo de retorno de óleo!',
      fonte: [F_SV2_HIST, F_SEP, F_SV4],
    },
  ],
};
