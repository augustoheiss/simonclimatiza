// src/data/conversas/tvr-pro-co-380v/03-01.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 03-01
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

const F_DELAY_12 = {
  campo: 'conteudo_html',
  trecho: 'Atraso inicial (primeira energização): 12 minutos — Permite que a unidade master faça a busca de endereços (address search) de todas as unidades internas no barramento de comunicação.',
};
const F_DELAY_7 = {
  campo: 'conteudo_html',
  trecho: 'Atraso de reinício: mínimo 7 minutos — Após qualquer parada do compressor (exceto durante oil return). Previne short cycling e permite equalização de pressão.',
};
const F_SV2 = {
  campo: 'conteudo_html',
  trecho: 'SV2: Controlada pela temperatura de descarga (abre a >100°C',
};
const F_PC_ALTA = {
  campo: 'conteudo_html',
  trecho: 'Pc ≥ 2.7 MPa → Velocidade aumenta em 1 step',
};
const F_PC_BAIXA = {
  campo: 'conteudo_html',
  trecho: 'Pc ≤ 2.1 MPa → Velocidade diminui em 1 step',
};
const F_TIMELINE = {
  campo: 'conteudo_html',
  trecho: 'Para um sistema 18-22HP (Classe B) sendo ligado pela primeira vez:',
};

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '03-01',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 11,
  beats: [
    // ── 1. CHEGADA ──────────────────────────────────────────────────────────
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Quarta, 8h00. Primeira energização de um sistema 18-22HP (Classe B). Juninho olha o relógio, olha a condensadora parada e já começa a suar frio.',
      fonte: F_TIMELINE,
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'alerta',
      texto: 'Simon do céu! Subi o disjuntor há 5 minutos, liguei os controles lá dentro e o compressor não deu nem sinal de vida! Queimou a placa?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'risada',
      texto: 'Guarda a chave de fenda no bolso, Ju! Na primeira energização, o TVR Pro CO espera 12 minutos inteiros antes de partir o compressor!',
      fonte: F_DELAY_12,
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Esses 12 minutos não são defeito: a placa master está fazendo a busca de endereços (address search) de todas as unidades internas no barramento!',
      fonte: F_DELAY_12,
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'O sistema já estava rodando, atingiu o setpoint nas salas e desligou o compressor. Dois minutos depois, alguém baixa a temperatura no controle. O que acontece?',
      fonte: F_DELAY_7,
      opcoes: [
        {
          id: 'a',
          texto: 'O compressor aguarda o atraso mínimo de 7 minutos para equalizar pressões e evitar short cycling (exceto após oil return).',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Exato! O atraso mínimo de reinício é de 7 minutos para equalizar o circuito. A única exceção é após o ciclo de oil return, quando o reinício é imediato!',
              fonte: F_DELAY_7,
            },
          ],
        },
        {
          id: 'b',
          texto: 'O compressor parte no mesmo segundo em rotação máxima.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Partir contra pressão alta arrebentaria o compressor! Por isso existe o atraso mínimo de 7 minutos.',
              fonte: F_DELAY_7,
            },
          ],
        },
        {
          id: 'c',
          texto: 'A placa faz outra busca de endereços de 12 minutos a cada parada.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Os 12 minutos são só na primeira energização (boot). Em parada normal, o atraso mínimo de reinício é de 7 minutos.',
              fonte: [F_DELAY_12, F_DELAY_7],
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
      texto: 'Para diagnosticar qualquer falha, pense nos 5 blocos do fluxograma mestre: 1) Stop Operation, 2) Startup Control, 3) Normal Operation, 4) Protection Control e 5) Special Control.',
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'neutro',
      texto: 'E no Bloco 1 (Stop Operation), a máquina para por 3 motivos: desligamento anormal (com erro no display), parada normal por setpoint ou redução de carga em multi-módulo.',
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Quando entra no Bloco 2 (Startup Control), os compressores `BP1`/`BP2` sobem suave em rampa de 1 step/s (1 rps por segundo), e a `EXVA` modula de 0 a 3000 steps.',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E como o ventilador `FAN1`/`FAN2` sabe a velocidade certa logo na partida?',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Nos primeiros 90 segundos o ventilador roda em velocidade fixa. Passados os 90 segundos, a placa lê a pressão de descarga `Pc` a cada 10 segundos!',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Olha a janela de pressão `Pc`: se `Pc` ≥ **2.7 MPa**, o ventilador sobe 1 step; se `Pc` ≤ **2.1 MPa**, desce 1 step; entre **2.1 MPa** e **2.7 MPa**, mantém o step!',
      fonte: [F_PC_ALTA, F_PC_BAIXA],
    },
    {
      id: 'fala-9b',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Dá até pra ouvir o ventilador mudando de rotação de 10 em 10 segundos depois que passa o primeiro minuto e meio!',
    },
    {
      id: 'fala-9c',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Exatamente, Ju! Ouvir essa mudança após 90 segundos é o teste rápido de campo que confirma que o sensor de alta pressão e o fan estão conversando.',
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Apressadinho que Resetava o Disjuntor a Cada 10 Minutos',
      fonte: F_DELAY_12,
      falas: [
        {
          quem: 'simon',
          emocao: 'risada',
          texto: 'Um instalador me ligou desesperado dizendo que a condensadora de **22HP** estava morta havia uma hora após a entrega elétrica.',
          fonte: F_TIMELINE,
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'E o que ele estava fazendo lá no quadro elétrico, Simon?',
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Toda vez que dava 8 ou 10 minutos e o compressor não partia, ele desligava e religava o disjuntor pra "resetar"! Zerava o cronômetro dos 12 minutos toda vez!',
          fonte: F_DELAY_12,
        },
        {
          quem: 'bia',
          emocao: 'risada',
          texto: 'Mandamos ele tirar a mão do disjuntor e tomar um café. Deu 12 minutos cravados, terminou o address search e o sistema partiu redondo!',
          fonte: F_DELAY_12,
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Após o término de um ciclo automático de oil return, o compressor precisa aguardar obrigatoriamente 7 minutos parado antes de voltar à operação normal.',
      verdade: false,
      fonte: F_DELAY_7,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Mito! O atraso mínimo de 7 minutos se aplica após paradas do compressor, EXCETO durante o oil return, quando a transição de retorno é imediata.',
          fonte: F_DELAY_7,
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Durante a partida, após os 90 segundos iniciais em velocidade fixa, o ventilador DC aumenta 1 step sempre que a pressão Pc for maior ou igual a 2.7 MPa.',
      verdade: true,
      fonte: F_PC_ALTA,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Verdade! Com `Pc` ≥ **2.7 MPa** o ventilador sobe 1 step a cada leitura de 10s; com `Pc` ≤ **2.1 MPa** ele reduz 1 step.',
          fonte: [F_PC_ALTA, F_PC_BAIXA],
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO + INTERAÇÃO ────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Passados os primeiros 90 segundos de partida, o sensor indica pressão de descarga Pc operando entre 2.1 MPa e 2.7 MPa. Qual ação o controle toma na velocidade do ventilador DC?',
      fonte: [F_PC_ALTA, F_PC_BAIXA],
      opcoes: [
        {
          id: 'a',
          texto: 'Mantém a velocidade inalterada, pois Pc está na faixa normal entre 2.1 MPa e 2.7 MPa.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Certeiro! Entre **2.1 MPa** e **2.7 MPa** a velocidade mantém-se inalterada.',
              fonte: [F_PC_ALTA, F_PC_BAIXA],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Aumenta a velocidade em 1 step imediatamente.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Só aumenta 1 step quando `Pc` ≥ **2.7 MPa**!',
              fonte: F_PC_ALTA,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Diminui a velocidade em 1 step.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Só diminui 1 step quando `Pc` ≤ **2.1 MPa**!',
              fonte: F_PC_BAIXA,
            },
          ],
        },
      ],
    },
    {
      id: 'insp-1',
      tipo: 'inspecao',
      titulo: 'Auditoria da Sequência de Partida (Timeline)',
      enunciado: 'Em um sistema 18-22HP ligado pela primeira vez, qual comportamento comprova que o controle de partida (Startup Control) está saudável?',
      fonte: [F_TIMELINE, F_DELAY_12, F_SV2, F_PC_ALTA],
      pontos: [
        {
          id: 'p1',
          rotulo: 'Aguardar 12 min de busca de endereços, partir fan fixo por 90s e ajustar por Pc (≥ 2.7 MPa sobe 1 step)',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Perfeito! Timeline completa do Startup Control validada sem falso alarme.',
              fonte: [F_DELAY_12, F_PC_ALTA],
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Desligar o disjuntor se o compressor não partir nos primeiros 3 minutos após energizar',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Jamais! O atraso inicial de primeira energização leva 12 minutos.',
              fonte: F_DELAY_12,
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Forçar abertura da SV2 com descarga fria logo na partida',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'serio',
              texto: 'A `SV2` só abre quando a temperatura de descarga passa de **100°C**.',
              fonte: F_SV2,
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'A Paciência Técnica dos 12 Minutos',
      principio: 'Princípio de Ofício: Saber esperar o tempo da máquina evita criar um defeito que não existia.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Massa de fermentação natural tem hora certa pra crescer. Se você cutuca antes do tempo achando que deu errado, aí mesmo é que o pão sola.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Sabedoria pura, Dona Marta. No VRF, respeitar os 12 minutos do boot e os 7 minutos de equalização é prova de maturidade técnica.',
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer rever a timeline completa da partida e os 5 blocos de controle? Abra a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Atrasos obrigatórios:** 12 minutos no primeiro boot (address search) e mínimo de 7 minutos entre paradas (exceto oil return).',
        '**Rampa suave:** compressores sobem a 1 step/s (1 rps/s), `SV4` abre após 200s e `SV2` vigia descarga (> **100°C** abre).',
        '**Controle de Fan na partida:** 90s em velocidade fixa; depois lê `Pc` a cada 10s (≥ **2.7 MPa** sobe 1 step, ≤ **2.1 MPa** desce 1 step).',
      ],
      proxima: 'No Tópico 03-02 vamos ver o regime de Operação Normal: rotação de 7 horas entre compressores, EXVA em 2112 steps e velocidades dos ventiladores!',
      fonte: [F_DELAY_12, F_DELAY_7, F_SV2, F_PC_ALTA, F_PC_BAIXA],
    },
  ],
};
