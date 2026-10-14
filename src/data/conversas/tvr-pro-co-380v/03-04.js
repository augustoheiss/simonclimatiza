// src/data/conversas/tvr-pro-co-380v/03-04.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 03-04
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

const F_OIL_140 = {
  campo: 'conteudo_html',
  trecho: 'Primeiro disparo: Quando o tempo de operação acumulado atinge 140 minutos',
};
const F_EXVA_480 = {
  campo: 'conteudo_html',
  trecho: 'EXVA: Posição fixa de 480 steps (abertura parcial controlada)',
};
const F_IDU_300 = {
  campo: 'conteudo_html',
  trecho: 'IDU em Standby: Fan OFF, EXV abre para 300 steps',
};
const F_EXVA_2112 = {
  campo: 'conteudo_html',
  trecho: 'Standby total: EXVA em 2112 steps (352×6)',
};
const F_TAB_OIL = {
  campo: 'tabelas_html',
  trecho: 'Componente Label 8-12HP 14-16HP 18-22HP 24-30HP Controle Oil Return',
};

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '03-04',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'padaria-manha',
  duracaoMin: 11,
  beats: [
    // ── 1. CHEGADA ──────────────────────────────────────────────────────────
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Sábado, 7h30. Café na padaria da Dona Marta antes da revisão preventiva num prédio com sistema multi-módulo.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, o zelador do prédio me perguntou por que, a cada duas horas e pouco, as condensadoras dão uma acelerada juntas por alguns minutos e depois voltam ao normal.',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Esse zelador tem ouvido bom, Ju! Ele escutou o Bloco 5 (Special Control) executando o ciclo automático de retorno de óleo (Oil Return)!',
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'O primeiro disparo do Oil Return acontece quando o tempo de operação acumulado atinge 140 minutos (2 horas e 20 minutos), e depois se repete a cada 2 a 4 horas conforme a condição de operação!',
      fonte: F_OIL_140,
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Durante os 3 a 8 minutos do ciclo de Oil Return, para qual posição fixa vai a válvula EXVA da condensadora e para qual posição vão as EXVs das unidades internas em Standby?',
      fonte: [F_EXVA_480, F_IDU_300],
      opcoes: [
        {
          id: 'a',
          texto: 'A EXVA assume posição fixa de 480 steps e as IDUs em Standby abrem suas EXVs para 300 steps (com Fan OFF).',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Cirúrgico! `EXVA` cravada em 480 steps na condensadora e EXV em 300 steps nas internas em Standby para varrer o óleo de volta ao cárter!',
              fonte: [F_EXVA_480, F_IDU_300],
            },
          ],
        },
        {
          id: 'b',
          texto: 'A EXVA vai para 2112 steps e as EXVs internas fecham em 0 steps.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: '2112 steps é a posição de Standby total da `EXVA`! Durante o Oil Return, a `EXVA` fica fixa em 480 steps e as internas em Standby abrem para 300 steps.',
              fonte: [F_EXVA_2112, F_EXVA_480, F_IDU_300],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Todas as válvulas abrem em 3000 steps com os ventiladores internos no máximo.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Nas internas em Standby o ventilador fica desligado (Fan OFF) e a EXV abre apenas para 300 steps, enquanto a `EXVA` fica fixa em 480 steps.',
              fonte: [F_EXVA_480, F_IDU_300],
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
      texto: 'O Bloco 5 tem duas missões: o Duty Cycling (revezamento entre módulos externos em sistemas com 2 ou 3 condensadoras) e o Automatic Oil Return.',
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'No Duty Cycling, quando a carga térmica cai, a unidade Master rotaciona qual condensadora descansa, evitando que um módulo acumule milhares de horas a mais que os outros.',
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E o que acontece com cada componente durante o Oil Return nas classes **8-12HP**, **14-16HP**, **18-22HP** e **24-30HP**?',
      fonte: F_TAB_OIL,
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Os compressores `BP1`/`BP2` assumem frequência fixa de varredura, a `SV4` permanece aberta durante todo o ciclo e a `EXVA` trava em 480 steps!',
      fonte: F_EXVA_480,
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'neutro',
      texto: 'Enquanto isso, as unidades internas ligadas (Thermo ON) mantêm o ventilador no setting atual e ajustam a EXV, e as em Standby desligam o fan e abrem a EXV para 300 steps.',
      fonte: F_IDU_300,
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Compare os 3 modos da `EXVA` para nunca confundir: Operação Normal = 0 a 3000 steps; Oil Return = fixo em 480 steps; Standby total = 2112 steps (352×6)!',
      fonte: [F_EXVA_480, F_EXVA_2112],
    },
    {
      id: 'fala-9b',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Agora tudo faz sentido! Se eu vir a `EXVA` cravada em 480 steps com a `SV4` aberta, sei na hora que a máquina está no meio do Oil Return!',
      fonte: F_EXVA_480,
    },
    {
      id: 'fala-9c',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'E quando terminar o ciclo de 3 a 8 minutos, ela volta para a operação normal imediatamente, sem esperar os 7 minutos de parada comum.',
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Mistério do Barulho de Refrigerante às 2h20 de Operação',
      fonte: [F_OIL_140, F_IDU_300],
      falas: [
        {
          quem: 'simon',
          emocao: 'bem-humorado',
          texto: 'Num escritório de advocacia, a secretária reclamou que todo dia, exatamente 2h20 depois de ligar o sistema às 8h, a sala de reunião vazia fazia um "chiado" de gás por 5 minutos.',
          fonte: F_OIL_140,
        },
        {
          quem: 'juninho',
          emocao: 'risada',
          texto: '2 horas e 20 minutos são exatamente os 140 minutos do primeiro disparo do Oil Return!',
          fonte: F_OIL_140,
        },
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Bingo! Às 10h20 batiam os 140 minutos acumulados, a EXV da sala vazia abria para 300 steps com ventilador desligado e o fluido varria o óleo de volta!',
          fonte: [F_OIL_140, F_IDU_300],
        },
        {
          quem: 'bia',
          emocao: 'neutro',
          texto: 'Explicamos para o cliente que aquele chiado de 5 minutos era o seguro de vida dos compressores e ninguém precisou desmontar forro à toa.',
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Durante a operação de Oil Return, a válvula EXVA da condensadora permanece em posição fixa de 480 steps.',
      verdade: true,
      fonte: F_EXVA_480,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Verdade! No Oil Return a `EXVA` assume posição fixa de 480 steps para controle preciso do fluxo de retorno.',
          fonte: F_EXVA_480,
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'O primeiro ciclo de Oil Return só acontece após 1400 minutos (quase 24 horas) de operação contínua.',
      verdade: false,
      fonte: F_OIL_140,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! O primeiro disparo ocorre quando o tempo de operação acumulado atinge 140 minutos (2h20min).',
          fonte: F_OIL_140,
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO + INTERAÇÃO ────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Compare a posição da válvula EXVA da condensadora e da EXV de uma unidade interna desligada (Standby) durante o ciclo de Oil Return:',
      fonte: [F_EXVA_480, F_IDU_300, F_EXVA_2112],
      opcoes: [
        {
          id: 'a',
          texto: 'EXVA fixa em 480 steps na condensadora e EXV em 300 steps (com Fan OFF) na unidade interna em Standby.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Perfeito! `EXVA` em 480 steps e EXV das internas em Standby em 300 steps.',
              fonte: [F_EXVA_480, F_IDU_300],
            },
          ],
        },
        {
          id: 'b',
          texto: 'EXVA em 2112 steps e EXV interna em 0 steps.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: '2112 steps é para Standby total do sistema, não durante o Oil Return!',
              fonte: F_EXVA_2112,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Ambas travadas em 300 steps.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: '300 steps é na EXV da unidade interna em Standby; na condensadora, a `EXVA` fica em 480 steps.',
              fonte: [F_EXVA_480, F_IDU_300],
            },
          ],
        },
      ],
    },
    {
      id: 'insp-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Comportamento em Oil Return (8-30HP)',
      enunciado: 'Ao monitorar uma condensadora de 24-30HP aos 140 minutos de operação acumulada, qual conjunto de estados confirma a entrada normal em Oil Return?',
      fonte: [F_OIL_140, F_EXVA_480, F_IDU_300, F_TAB_OIL],
      pontos: [
        {
          id: 'p1',
          rotulo: 'Tempo acumulado = 140 min, EXVA fixa em 480 steps, SV4 aberta e IDUs em Standby com EXV em 300 steps',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Assinatura clássica do Oil Return! Tudo operando conforme a Table 3-6.1.',
              fonte: [F_OIL_140, F_EXVA_480, F_IDU_300],
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'EXVA em 2112 steps e todos os compressores desligados',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'neutro',
              texto: '`EXVA` em 2112 steps indica sistema em Standby total, não em Oil Return.',
              fonte: F_EXVA_2112,
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Ventiladores das unidades internas em Standby ligados em alta rotação',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Nas IDUs em Standby, o ventilador permanece desligado (Fan OFF) enquanto a EXV abre para 300 steps.',
              fonte: F_IDU_300,
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'Devolver o que Mantém a Engrenagem Viva',
      principio: 'Princípio de Ofício: Sem pausa para recuperar o óleo e revisar as ferramentas, até a melhor máquina trava a seco.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'De tempos em tempos eu paro a fatiadeira pra limpar e lubrificar o eixo. Quem acha que parar 5 minutos é perda de tempo acaba perdendo a máquina inteira.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'É exatamente o que o Oil Return faz a cada 140 minutos, Dona Marta: investe alguns minutos trazendo o óleo de volta pra garantir décadas de giro macio.',
          fonte: F_OIL_140,
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer comparar os modos Normal, Oil Return e Standby lado a lado? Veja a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Gatilho do Oil Return:** primeiro disparo aos 140 minutos de operação acumulada, com duração de 3 a 8 minutos e reinício imediato (sem delay de 7 min).',
        '**Válvulas no Oil Return:** `SV4` aberta continuamente, `EXVA` fixa em 480 steps e EXVs das internas em Standby em 300 steps (Fan OFF).',
        '**Três posições da EXVA:** Normal = 0 a 3000 steps; Oil Return = 480 steps; Standby total = 2112 steps (352×6).',
      ],
      proxima: 'Na Parte 4 (Tópico 04-01) vamos aprender a configurar os modos especiais em campo: Modo Noturno (S4) e os 4 níveis de Modo Silencioso (ENC5)!',
      fonte: [F_OIL_140, F_EXVA_480, F_IDU_300, F_EXVA_2112],
    },
  ],
};
