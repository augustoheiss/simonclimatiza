// src/data/conversas/tvr-pro-co-380v/03-02.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 03-02
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

const F_EXVA = {
  campo: 'conteudo_html',
  trecho: 'EXVA: Posição de 0 (fechada) a 3000 steps (aberta), controlada pela temperatura de descarga',
};
const F_SV2 = {
  campo: 'conteudo_html',
  trecho: 'SV2: Controlada pela temperatura de descarga (abre >100°C',
};
const F_ROT = {
  campo: 'conteudo_html',
  trecho: 'Rotação com 1 Módulo (18-30HP)',
};
const F_STDBY = {
  campo: 'conteudo_html',
  trecho: 'Posição de standby: 352 × 6 = 2112 steps',
};
const F_FAN_RPM = {
  campo: 'conteudo_html',
  trecho: 'Velocidades máximas por classe: 8-16HP: 1100 rpm (FANA), 18-22HP: 1100/1100 rpm (FANA/FANB), 24-30HP: 950/950 rpm (FANA/FANB).',
};

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '03-02',
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
      texto: 'Quinta, 8h15. Na bancada da oficina, Bia analisa os logs de operação normal de uma condensadora de 18-30HP que trabalhou o dia inteiro.',
      fonte: F_ROT,
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Bia, olha que estranho nesse gráfico da máquina de **30HP**: de manhã o Compressor A rodou mais forte, e depois de 7 horas ele trocou de lugar com o Compressor B!',
      fonte: F_ROT,
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Isso é inteligência embarcada, Ju! Nas unidades dual compressor (**18-30HP**), a placa faz o revezamento automático a cada 7 horas de operação!',
      fonte: F_ROT,
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'E quando há 2 ou 3 módulos externos combinados, além de alternar os compressores internos, o sistema também faz o duty cycling revezando a prioridade entre as condensadoras!',
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Quando todas as unidades internas atingem o setpoint e o sistema entra em Standby, em qual posição (em steps) fica a válvula EXVA da condensadora?',
      fonte: [F_EXVA, F_STDBY],
      opcoes: [
        {
          id: 'a',
          texto: 'Posição de standby em 2112 steps (352 × 6), pronta para equalizar e repartir.',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Na mosca! Em operação ela trabalha de 0 a 3000 steps, mas em standby estaciona em 2112 steps (352 × 6).',
              fonte: [F_EXVA, F_STDBY],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Trava totalmente fechada em 0 steps durante todo o standby.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Em standby ela vai para 2112 steps (352 × 6) para ajudar na equalização de pressão do sistema!',
              fonte: F_STDBY,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Abre além do limite mecânico em 5000 steps.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'O curso total da `EXVA` vai de 0 a 3000 steps, e a posição oficial de standby é 2112 steps (352 × 6).',
              fonte: [F_EXVA, F_STDBY],
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
      texto: 'Em operação normal, a `EXVA` modula entre 0 (fechada) e 3000 steps (aberta) guiada pela temperatura de descarga, e em standby estaciona em 2112 steps (352 × 6).',
      fonte: [F_EXVA, F_STDBY],
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Já os motores de ventilador DC (`FANA` e `FANB`) trabalham em uma tabela de 24 steps de velocidade (steps 0 a 24), ajustados pela pressão de descarga.',
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E no step 24 (velocidade máxima), todas as classes giram na mesma rotação?',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Pegadinha clássica de prova e de campo! Nas classes **8-16HP** e **18-22HP**, o topo no step 24 é 1100 rpm. Já na classe **24-30HP**, o topo é 950/950 rpm!',
      fonte: F_FAN_RPM,
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Porque no gabinete maior de **24-30HP** as hélices têm maior diâmetro e deslocam mais ar com menor rotação (950/950 rpm), reduzindo o ruído e o esforço mecânico!',
      fonte: F_FAN_RPM,
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Enquanto isso, a `SV2` segue firme na guarda térmica: abre se a descarga passar de **100°C** e fecha quando o compressor esfria dez graus.',
      fonte: F_SV2,
    },
    {
      id: 'fala-9b',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'E quando a velocidade dos ventiladores sobe e desce nos chassis de 2 ventiladores, os dois ligam juntos?',
    },
    {
      id: 'fala-9c',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Tem histerese inteligente! Na subida, o `FANA` acelera primeiro antes de acionar o `FANB`; na descida, ambos reduzem juntos antes de desligar o `FANB`.',
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Técnico que Queria 1100 rpm numa Condensadora de 30HP',
      fonte: F_FAN_RPM,
      falas: [
        {
          quem: 'simon',
          emocao: 'risada',
          texto: 'Um colega comprou um tacômetro óptico novo e foi medir os ventiladores no telhado: mediu 1100 rpm numa máquina de **16HP** e depois mediu 950 rpm numa de **30HP**.',
          fonte: F_FAN_RPM,
        },
        {
          quem: 'juninho',
          emocao: 'surpreso',
          texto: 'E ele achou que os dois motores da máquina de **30HP** estavam fracos?',
          fonte: F_FAN_RPM,
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Quase pediu dois motores novos na garantia! Mostrei a Table 3-4.2 do manual pra ele: na classe **24-30HP**, o step 24 máximo é exatamente 950/950 rpm!',
          fonte: F_FAN_RPM,
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Nas unidades da classe 24-30HP, a velocidade máxima dos ventiladores FANA e FANB no step 24 é de 950/950 rpm, menor em rotação que os 1100 rpm das classes 8-16HP e 18-22HP.',
      verdade: true,
      fonte: F_FAN_RPM,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Verdade! Em **8-16HP** (FANA) e **18-22HP** (FANA/FANB) a máxima é 1100 rpm; já em **24-30HP** a máxima no step 24 é 950/950 rpm.',
          fonte: F_FAN_RPM,
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Em uma condensadora dual compressor (18-30HP), o Compressor A é sempre o titular vitalício e o Compressor B só liga quando a carga passa de 90%.',
      verdade: false,
      fonte: F_ROT,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Mito! Nas unidades de **18-30HP**, o sistema executa rotação automática a cada 7 horas para equalizar o desgaste e o óleo entre os dois compressores.',
          fonte: F_ROT,
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO + INTERAÇÃO ────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Qual é a velocidade máxima (step 24) dos ventiladores nas três classes de chassi do TVR Pro CO?',
      fonte: F_FAN_RPM,
      opcoes: [
        {
          id: 'a',
          texto: '8-16HP: 1100 rpm (FANA); 18-22HP: 1100/1100 rpm (FANA/FANB); 24-30HP: 950/950 rpm (FANA/FANB).',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Domínio total da tabela! 1100 rpm nas classes **8-16HP** e **18-22HP**, e 950/950 rpm na classe **24-30HP**.',
              fonte: F_FAN_RPM,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Todas as três classes operam a 1100 rpm no step 24.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Cuidado! Na classe **24-30HP**, a velocidade máxima no step 24 é de 950/950 rpm.',
              fonte: F_FAN_RPM,
            },
          ],
        },
        {
          id: 'c',
          texto: '8-16HP opera a 950 rpm e 24-30HP opera a 1500 rpm.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'É o oposto: **8-16HP** chega a 1100 rpm e **24-30HP** chega a 950/950 rpm.',
              fonte: F_FAN_RPM,
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Posição de Standby da Válvula EXVA',
      enunciado: 'A posição de standby da válvula EXVA é definida pela fórmula 352 × 6 steps. Qual é o valor exato em steps da EXVA em standby?',
      formula: 'Steps_standby = 352 × 6',
      unidade: 'steps',
      respostaCorreta: 2112,
      tolerancia: 1,
      opcoesRapidas: [300, 480, 2112, 3000],
      leituras: [
        { rotulo: 'Fator base da EXVA', valor: '352 steps' },
        { rotulo: 'Multiplicador de standby', valor: '6' },
      ],
      fonte: F_STDBY,
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Exato! 352 × 6 = 2112 steps na posição de standby da `EXVA`.',
          fonte: F_STDBY,
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Multiplique 352 por 6: a posição de standby da `EXVA` é 2112 steps.',
          fonte: F_STDBY,
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'Dividir o Fardo para Ir Mais Longe',
      principio: 'Princípio de Ofício: Nem máquina nem equipe duram quando um só carrega o peso o tempo inteiro.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Na cozinha da padaria a gente reveza quem fica na boca do forno e quem fica no balcão. Se um só fica no calor o dia todo, não aguenta a semana.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'A engenharia copiou a vida, Dona Marta: revezar os compressores a cada 7 horas nas máquinas de **18-30HP** é o que garante anos de vida útil sem fadiga prematura.',
          fonte: F_ROT,
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer conferir a tabela completa dos 24 steps de velocidade dos ventiladores (`FANA`/`FANB`)? Veja a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Rotação de compressores:** em módulos dual (**18-30HP**), os compressores alternam a prioridade a cada 7 horas.',
        '**Curso da EXVA:** opera de 0 a 3000 steps conforme descarga e estaciona em 2112 steps (352 × 6) em standby.',
        '**Velocidade máxima dos ventiladores (step 24):** **8-16HP** = 1100 rpm, **18-22HP** = 1100/1100 rpm e **24-30HP** = 950/950 rpm.',
      ],
      proxima: 'No Tópico 03-03 vamos dominar as 6 proteções críticas: P1, P2, P4, sobrecorrente LNB53/LNB65 e proteção de módulo PL!',
      fonte: [F_ROT, F_EXVA, F_STDBY, F_FAN_RPM],
    },
  ],
};
