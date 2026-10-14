// src/data/conversas/tvr-pro-co-380v/06-03.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 06-03
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

const F_P1 = {
  campo: 'conteudo_html',
  trecho: 'Trigger: Pressão descarga ≥ 4,3 MPa. Recover: ≤ 4,0 MPa por 2 min.',
};
const F_P2 = {
  campo: 'conteudo_html',
  trecho: 'P2 Trigger: Pressão sucção ≤ 0,05 MPa. Recover: ≥ 0,15 MPa.',
};
const F_P9 = {
  campo: 'conteudo_html',
  trecho: 'Trigger: Pressão descarga ≤ 0,3 MPa. Recover: > 0,3 MPa.',
};
const F_P4 = {
  campo: 'conteudo_html',
  trecho: 'P4 Trigger: T7C1/2 ≥ 120°C. Recover: ≤ 90°C.',
};
const F_P6 = {
  campo: 'conteudo_html',
  trecho: 'Trigger: T3 ≥ 65°C. Recover:',
};
const F_PL = {
  campo: 'conteudo_html',
  trecho: 'PL Trigger: TF1/2 ≥ 80°C. Recover:',
};
const F_PP = {
  campo: 'conteudo_html',
  trecho: 'Trigger: Superheat ≤ 0°C por 20 min OU ≤ 5°C por 60 min.',
};
const F_P7_540 = {
  campo: 'conteudo_html',
  trecho: 'Referência: Tensão DC normal entre P e N no fan module = 540V DC.',
};
const F_COMP_5OHM = {
  campo: 'conteudo_html',
  trecho: 'Resistência entre 3 fases > 5Ω? → Substituir compressor',
};
const F_XL1 = {
  campo: 'infobox_campo',
  trecho: '700V = xL2.',
};
const F_XL2 = {
  campo: 'conteudo_html',
  trecho: 'xL2 — DC Bus High Voltage (> 700V)',
};
const F_OLEO = {
  campo: 'conteudo_html',
  trecho: 'Adicionar óleo FV50S: 8-12HP→4L, 14-16HP→5L, 18-22HP→6L, 24-30HP→9L',
};
const F_NTC = {
  campo: 'infobox_campo',
  trecho: 'A 25°C: sensor ambiente/trocador = ~10 kΩ, sensor topo compressor/descarga = ~55 kΩ.',
};

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '06-03',
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
      texto: 'Sábado, 8h00. Na bancada da oficina estão duas cartelas de sensores NTC, um galão de óleo sintético FV50S e a tabela de códigos P1 a PP e xL0 a xL5.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, tenho dois sensores NTC na mão e os dois estão na temperatura da sala, **25°C**. Um deu **10 kΩ** e o outro deu **55 kΩ** no multímetro. Qual dos dois está pifado?',
      fonte: F_NTC,
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'risada',
      texto: 'Nenhum dos dois, Ju! Os dois estão perfeitos! É que na linha TVR Pro CO existem duas famílias de termistores NTC totalmente diferentes!',
      fonte: F_NTC,
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'A **25°C**, os sensores de ambiente e trocador (`T3`, `T4`, `T6A`, `T6B`) medem **~10 kΩ**, enquanto o sensor de topo/descarga do compressor (`T7C1`/`T7C2`) mede **~55 kΩ**!',
      fonte: F_NTC,
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Uma condensadora apresenta o código `PP` (proteção contra golpe de líquido / insuficiente superaquecimento na descarga). Qual condição dispara o código PP?',
      fonte: [F_PP, F_P4, F_P1],
      opcoes: [
        {
          id: 'a',
          texto: 'Superheat de descarga ≤ 0°C por 20 minutos OU ≤ 5°C por 60 minutos (indicando retorno de líquido ao compressor).',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Diagnóstico fino! Quando o superaquecimento na descarga fica ≤ **0°C** por 20 min ou ≤ **5°C** por 60 min, está voltando refrigerante líquido e lavando o óleo do compressor!',
              fonte: F_PP,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Temperatura de descarga acima de 120°C.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Descarga ≥ **120°C** dispara o código `P4`! O código `PP` é o oposto: descarga fria demais, com superheat ≤ **0°C** por 20 min ou ≤ **5°C** por 60 min.',
              fonte: [F_P4, F_PP],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Pressão de descarga ≥ 4,3 MPa.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Pressão ≥ **4,3 MPa** é `P1`. O código `PP` protege contra retorno de líquido (superheat ≤ **0°C** por 20 min ou ≤ **5°C** por 60 min).',
              fonte: [F_P1, F_PP],
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
      texto: 'Vamos revisar a família `P`: `P1` é alta pressão (≥ **4,3 MPa**, recupera ≤ **4,0 MPa** por 2 min), `P2` é baixa sucção (≤ **0,05 MPa**, recupera ≥ **0,15 MPa**) e `H8` é sensor com leitura ≤ **0,3 MPa**.',
      fonte: [F_P1, F_P2, F_P9],
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Nos térmicos: `P4` é descarga alta (`T7C1/2` ≥ **120°C**, recupera ≤ **90°C**, exigindo checar se a taxa de combinação está < 130 por cento), `P5` é condensador alto (`T3` ≥ **65°C**, recupera < 55 graus) e `PL` é módulo quente (`TF1/2` ≥ **80°C**, recupera < **65°C**).',
      fonte: [F_P4, F_P6, F_PL],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Já o `xP9` é proteção no módulo do ventilador DC, onde a referência normal entre os terminais P e N do fan module é de **540V** DC!',
      fonte: F_P7_540,
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E os códigos `xL0`, `xL1`, `xL2`, `xL4` e `xL5` do módulo inverter, junto com a carga de óleo `FV50S`?',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: '`xL0` é falha do IPM/IGBT, `xL1` é DC Bus baixo (< 350 volts), `xL2` é DC Bus alto (> **700V**), `xL4` é falha de circuito MCE e `xL5` é perda de velocidade/desmagnetização.',
      fonte: [F_XL1, F_XL2],
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'E se precisar repor óleo `FV50S` ou condenar compressor: condene se a resistência entre fases passar de > **5Ω** ou a isolação cair abaixo de < 100 quilo-ohms; e use a tabela de óleo `FV50S` (**8-12HP**→4L, **14-16HP**→5L, **18-22HP**→6L, **24-30HP**→9L)!',
      fonte: [F_COMP_5OHM, F_OLEO],
    },
    {
      id: 'fala-9b',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E quando a gente drena o óleo do compressor queimado nos 8 passos de substituição, o que a cor do óleo revela?',
    },
    {
      id: 'fala-9c',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Se sair claro e transparente, o circuito está limpo; se sair escuro ou preto, houve contaminação e você precisa limpar o sistema e trocar separadores e acumuladores!',
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'A EXV Travada Aberta que Lavou o Óleo e Deu Código PP',
      fonte: [F_PP, F_OLEO],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Numa máquina de **24-30HP**, o sistema começou a apresentar código `PP` após uma hora de operação e o óleo do visor do compressor parecia espumar.',
          fonte: [F_PP, F_OLEO],
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'Tinha alguma válvula de expansão jogando líquido direto na linha de sucção, Simon?',
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'A `SV2` de injeção de líquido tinha travado mecanicamente aberta! O superheat de descarga caía para ≤ **0°C** por 20 minutos e a placa disparava `PP` para evitar calço hidráulico!',
          fonte: F_PP,
        },
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Substituímos a `SV2` travada, revisamos a carga de óleo `FV50S` (que no chassi **24-30HP** leva 9L na referência de reposição) e o superheat voltou ao normal!',
          fonte: F_OLEO,
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'A 25°C, o sensor NTC de ambiente/trocador (T3/T4/T6A/T6B) mede aproximadamente 10 kΩ, enquanto o sensor de topo/descarga do compressor (T7C1/2) mede aproximadamente 55 kΩ.',
      verdade: true,
      fonte: F_NTC,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Verdade! Jamais intercambie os dois: a **25°C**, ambiente/trocador = **~10 kΩ** e topo do compressor/descarga = **~55 kΩ**.',
          fonte: F_NTC,
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Um compressor cuja resistência de isolação para a carcaça está abaixo de 100 quilo-ohms e resistência entre fases acima de 5Ω pode continuar operando normalmente.',
      verdade: false,
      fonte: F_COMP_5OHM,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Mito! Pelo fluxograma do manual, resistência entre fases > **5Ω** ou resistência de isolação < 100 quilo-ohms exige substituição imediata do compressor.',
          fonte: F_COMP_5OHM,
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO + INTERAÇÃO ────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Qual é o volume de referência de óleo sintético FV50S indicado no procedimento de reposição por classe de capacidade (8-12HP, 14-16HP, 18-22HP e 24-30HP)?',
      fonte: F_OLEO,
      opcoes: [
        {
          id: 'a',
          texto: '8-12HP → 4L | 14-16HP → 5L | 18-22HP → 6L | 24-30HP → 9L.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Gabarito de ouro! Óleo `FV50S`: **8-12HP**→4L, **14-16HP**→5L, **18-22HP**→6L e **24-30HP**→9L.',
              fonte: F_OLEO,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Todas as classes utilizam apenas 1 litro de óleo mineral.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'O óleo é sintético `FV50S` e os volumes vão de 4L (**8-12HP**) até 9L (**24-30HP**)!',
              fonte: F_OLEO,
            },
          ],
        },
        {
          id: 'c',
          texto: '8-12HP → 9L e 24-30HP → 4L.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Invertido! **8-12HP** leva 4L e o chassi maior **24-30HP** leva 9L de `FV50S`.',
              fonte: F_OLEO,
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Identificação de Sensor NTC a 25°C',
      enunciado: 'Você está testando um sensor de temperatura de topo/descarga do compressor (T7C1) imerso em água a 25°C. Qual valor aproximado de resistência em kΩ você deve encontrar no multímetro?',
      formula: 'R_descarga(25°C) ≈ 55 kΩ (54,89 kΩ na tabela)',
      unidade: 'kΩ',
      respostaCorreta: 55,
      tolerancia: 1.5,
      opcoesRapidas: [10, 29, 55, 180],
      leituras: [
        { rotulo: 'Temperatura de ensaio', valor: '25°C' },
        { rotulo: 'Tipo de sensor', valor: 'Topo compressor / descarga (T7C1/2)' },
      ],
      fonte: F_NTC,
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Na mosca! A **25°C**, o sensor de descarga mede **~55 kΩ** (enquanto o de ambiente/trocador mede **~10 kΩ**).',
          fonte: F_NTC,
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Lembre-se da regra a **25°C**: sensor de ambiente/trocador = **~10 kΩ**; sensor de topo/descarga do compressor = **~55 kΩ**.',
          fonte: F_NTC,
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'Tabela de Termistor é Bússola de Bolso',
      principio: 'Princípio de Ofício: Medir resistência de NTC sem saber a temperatura ambiente é olhar bússola sem saber onde fica o norte.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Densidade de calda de açúcar muda conforme a temperatura da panela; se medir quente achando que está fria, erra o ponto do doce.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Termistor NTC é igualzinho, Dona Marta! Sempre cruze a temperatura no termômetro com os **~10 kΩ** ou **~55 kΩ** a **25°C** antes de trocar o sensor.',
          fonte: F_NTC,
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer consultar as duas tabelas completas de resistência por temperatura dos sensores NTC? Abra a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Gatilhos Série P:** `P1` ≥ **4,3 MPa**; `P2` ≤ **0,05 MPa**; `P4` ≥ **120°C**; `P5` (`T3`) ≥ **65°C**; `PL` (`TF1/2`) ≥ **80°C**; `PP` = superheat ≤ **0°C** (20 min) ou ≤ **5°C** (60 min).',
        '**Inversor e Óleo FV50S:** `xL1` < 350 volts, `xL2` > **700V**, fan module P-N = **540V** DC, e óleo `FV50S`: **8-12HP**→4L, **14-16HP**→5L, **18-22HP**→6L, **24-30HP**→9L.',
        '**Duas famílias NTC a 25°C:** ambiente/trocador = **~10 kΩ**; topo do compressor/descarga = **~55 kΩ**.',
      ],
      proxima: 'No Tópico 06-04 (última aula do curso!) vamos fechar com chave de ouro: RS-485 avançado, teste de diodo do IGBT/IPM, Megger e química do PVE FV50S!',
      fonte: [F_P1, F_P2, F_P4, F_P6, F_PL, F_PP, F_XL1, F_XL2, F_P7_540, F_OLEO, F_NTC],
    },
  ],
};
