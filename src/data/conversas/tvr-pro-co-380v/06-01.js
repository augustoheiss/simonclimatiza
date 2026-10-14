// src/data/conversas/tvr-pro-co-380v/06-01.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 06-01
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

const F_PREF = {
  campo: 'conteudo_html',
  trecho: 'Em unidades single compressor (8-16HP), o prefixo será sempre 1.',
};
const F_E5 = {
  campo: 'conteudo_html',
  trecho: '165V trigger, > 180V recover)',
};
const F_P1 = {
  campo: 'conteudo_html',
  trecho: 'P1: Alta pressão descarga (> 4.4 MPa)',
};
const F_P2 = {
  campo: 'conteudo_html',
  trecho: '0.05 MPa)',
};
const F_P4 = {
  campo: 'conteudo_html',
  trecho: 'P4: Temperatura de descarga (> 120°C)',
};
const F_PQ_120 = {
  campo: 'conteudo_html',
  trecho: 'Referência de medição: P→Q = 120Ω | P→E = ∞ | Q→E = ∞',
};
const F_INT_220 = {
  campo: 'conteudo_html',
  trecho: 'Interferência de fios de alta tensão (220V+)? → Separar fios',
};
const F_CABO = {
  campo: 'infobox_campo',
  trecho: 'Usar cabo 3 vias blindado (three-core shielded cable), conectar em daisy chain, e separar dos cabos de força (220V/380V).',
};

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '06-01',
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
      texto: 'Quinta, 8h00. O display de 7 segmentos da condensadora pisca um código começando com o número 2, e Juninho já saca o bloco de notas.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, no manual está escrito código `xH0`, `xF1`, `xL0`, mas aqui no display está piscando `2H0`! Quem é esse "x" na frente do código?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Essa é a primeira chave do diagnóstico, Ju! O prefixo `x` identifica o sistema do compressor: `1` é o Compressor A e `2` é o Compressor B! Em single compressor (**8-16HP**), o prefixo é sempre `1`.',
      fonte: F_PREF,
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'E os códigos são divididos em 3 famílias claras: Série `E` (Erros de Sistema/ Sensores/ Comunicação), Série `H` (Módulos/ Inversor/ Fases) e Série `P`/`L` (Proteções de Pressão, Temperatura e DC Bus)!',
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'O display da condensadora mostra erro `E2` (falha de comunicação entre ODU e IDUs nos bornes P, Q, E). Com o sistema desligado, qual medição de resistência nos bornes de comunicação é a referência do manual?',
      fonte: [F_PQ_120, F_INT_220],
      opcoes: [
        {
          id: 'a',
          texto: 'P→Q = 120Ω (resistor de terminação) | P→E = ∞ (isolado) | Q→E = ∞ (isolado).',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Na mosca! P→Q medindo **120Ω** no resistor terminador e isolamento infinito (∞) de P e Q para a malha E!',
              fonte: F_PQ_120,
            },
          ],
        },
        {
          id: 'b',
          texto: 'P→Q = 0Ω (curto direto) e P→E = 0Ω.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Curto entre P e Q ou para o terra E derruba a rede! A referência correta é P→Q = **120Ω** | P→E = ∞ | Q→E = ∞.',
              fonte: F_PQ_120,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Jogar 220V AC nos bornes P e Q para testar continuidade.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Nunca! Jogar **220V** na linha P-Q frita os transceivers RS-485 de todas as placas na hora!',
              fonte: F_INT_220,
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
      texto: 'Vamos diferenciar os 4 erros de comunicação que mais caem em campo: `E0`, `E1`, `E2` e `xH0`! Cada um aponta para um barramento diferente.',
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: '`E0` é falha entre condensadoras (`H1, H2, E`) num sistema multi-módulo; `E1` é entre a placa de display e a Main PCB; e `E2` é entre a ODU e as unidades internas (`P, Q, E`).',
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Já o `xH0` é interno à caixa elétrica: falha de comunicação entre a Main PCB e o chip DSP do módulo inverter (`1H0` para compressor A, `2H0` para compressor B)!',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Por que dá tanto erro `E2` em obra onde o instalador economizou no cabo de comando?',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Porque existem 3 regras sagradas no barramento RS-485: usar cabo 3 vias blindado, ligar sempre em daisy chain (entra e sai, nunca em estrela!) e separar dos cabos de força (**220V**/**380V**)!',
      fonte: F_CABO,
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Além disso, se o comprimento total passar de 1200m ou se o cabo correr colado em linha de alta tensão (**220V**+), o ruído derruba os pacotes e dispara `E2`.',
      fonte: F_INT_220,
    },
    {
      id: 'fala-9b',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'E no erro `xH0` dentro da condensadora, o que a gente olha primeiro?',
    },
    {
      id: 'fala-9c',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'neutro',
      texto: 'Primeiro confere o endereço `S7` do módulo inverter (0 para A, 1 para B), depois o cabo entre `CN26` da Main PCB e `CN8/CN9` do inverter, e os LEDs `LED1`/`LED2`!',
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'A Caixa de Passagem "Polvo" em Estrela que Dava Erro E2',
      fonte: [F_CABO, F_PQ_120],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Fomos chamados num prédio onde o erro `E2` aparecia toda tarde quando ligavam os elevadores. O instalador jurava que tinha usado cabo blindado.',
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'E onde estava a armadilha, Simon?',
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Abrimos o forro do corredor: ele puxou 8 cabos das evaporadoras para uma única caixa de passagem central, emendou tudo num bolo só (ligação em estrela!) e ainda passou na mesma eletrocalha de **380V**!',
          fonte: F_CABO,
        },
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Refizemos o cabeamento em daisy chain (unidade a unidade), separamos da força de **220V**/**380V**, conferimos os **120Ω** de terminação e o `E2` sumiu para sempre!',
          fonte: [F_CABO, F_PQ_120],
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Em unidades single compressor (8-16HP), os códigos de erro com prefixo "x" (como xH0 ou xF1) apresentarão sempre o prefixo 1 no display.',
      verdade: true,
      fonte: F_PREF,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Verdade! Em unidades single compressor (**8-16HP**), só existe o sistema do compressor 1, portanto o prefixo será sempre `1`.',
          fonte: F_PREF,
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Para facilitar a instalação das unidades internas, o cabo de comunicação P-Q-E pode ser ligado em topologia estrela e compartilhando o mesmo eletroduto dos cabos de 380V.',
      verdade: false,
      fonte: F_CABO,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! O manual exige cabo 3 vias blindado conectado estritamente em daisy chain e separado dos cabos de força (**220V**/**380V**).',
          fonte: F_CABO,
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO + INTERAÇÃO ────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Assinale a alternativa que associa corretamente os códigos de proteção E5, P1, P2 e P4 aos seus respectivos gatilhos (triggers):',
      fonte: [F_E5, F_P1, F_P2, F_P4],
      opcoes: [
        {
          id: 'a',
          texto: 'E5: tensão < 165V (recupera > 180V) | P1: Pc > 4.4 MPa | P2: Pe < 0.05 MPa | P4: descarga > 120°C.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Gabaritou os 4 grandes! `E5` (< **165V** / > **180V**), `P1` (> **4.4 MPa**), `P2` (< **0.05 MPa**) e `P4` (> **120°C**).',
              fonte: [F_E5, F_P1, F_P2, F_P4],
            },
          ],
        },
        {
          id: 'b',
          texto: 'E5: alta pressão | P1: baixa pressão | P2: descarga > 120°C | P4: tensão < 165V.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Misturou os códigos! `E5` é tensão (< **165V**), `P1` é alta pressão (> **4.4 MPa**), `P2` é baixa pressão (< **0.05 MPa**) e `P4` é descarga (> **120°C**).',
              fonte: [F_E5, F_P1, F_P2, F_P4],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Todos os quatro códigos indicam falha de comunicação P-Q-E.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Falha P-Q-E é `E2`. Já `E5`, `P1`, `P2` e `P4` são proteções de tensão (< **165V**), alta pressão (> **4.4 MPa**), baixa pressão (< **0.05 MPa**) e descarga (> **120°C**).',
              fonte: [F_E5, F_P1, F_P2, F_P4],
            },
          ],
        },
      ],
    },
    {
      id: 'insp-1',
      tipo: 'inspecao',
      titulo: 'Inspeção do Barramento RS-485 (Erro E2)',
      enunciado: 'Ao investigar um erro E2 intermitente entre a condensadora e as evaporadoras, qual condição encontrada na obra é a causa raiz da interferência?',
      fonte: [F_CABO, F_PQ_120],
      pontos: [
        {
          id: 'p1',
          rotulo: 'Cabo sem blindagem amarrado junto aos cabos de força de 220V/380V e derivado em estrela',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Achou o vilão! É obrigatório usar cabo 3 vias blindado em daisy chain e separado dos cabos de força (**220V**/**380V**).',
              fonte: F_CABO,
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Medição no resistor terminador indicando P→Q = 120Ω e P→E = ∞',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'neutro',
              texto: 'P→Q = **120Ω** com P→E = ∞ é a referência normal do resistor de terminação.',
              fonte: F_PQ_120,
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Uso de cabo 3 vias blindado em daisy chain separado da rede elétrica',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'neutro',
              texto: 'Essa é a instalação padrão ouro recomendada pelo fabricante!',
              fonte: F_CABO,
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'Comunicação Limpa Não Aceita Atalho',
      principio: 'Princípio de Ofício: Atalho no cabeamento de comunicação cobra juros altos no comissionamento.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Se dois garçons gritam pedidos diferentes ao mesmo tempo no balcão, a cozinha erra o prato. Conversa boa precisa de ordem, um depois do outro.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Perfeito, Dona Marta! O daisy chain com cabo blindado longe dos **380V** é a fila organizada pra nenhuma placa gritar por cima da outra.',
          fonte: F_CABO,
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer consultar a Tabela Mestra de Códigos de Erro (Séries E, H, P e L)? Abra a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Prefixo "x" nos códigos:** `1` = Compressor A, `2` = Compressor B (em unidades **8-16HP**, o prefixo é sempre `1`).',
        '**Quarteto de Comunicação:** `E0` (entre ODUs `H1/H2/E`), `E1` (display ↔ Main PCB), `E2` (ODU ↔ IDUs `P/Q/E`) e `xH0` (Main PCB ↔ DSP inverter).',
        '**Regra RS-485:** cabo 3 vias blindado, topologia daisy chain, longe de **220V**/**380V**, e referência de terminação P→Q = **120Ω** (P→E = ∞, Q→E = ∞).',
      ],
      proxima: 'No Tópico 06-02 vamos destrinchar os erros E4 a H9 e F1/C7: sensores, bobinas de compressor, EXVA e DC bus!',
      fonte: [F_PREF, F_CABO, F_PQ_120],
    },
  ],
};
