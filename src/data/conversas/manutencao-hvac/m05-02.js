// Conversa: Manutenção e Diagnóstico de Sistemas de Controle (m05-02)
// Cenário: Bancada de Oficina — Multiplicador 10x, Curvas NTC 10k Tipo II vs III e Redes RS-485 / BACnet

const F_NTC_CURVA = {
  campo: 'infobox_campo',
  trecho: 'Outra dor comum em campo é a substituição incorreta de sensores NTC Tipo II por Tipo III (que possuem a mesma resistência a 25°C, mas diferem radicalmente nas extremidades frias e quentes), cegando a lógica de controle PID',
};

const F_GELO = {
  campo: 'infobox_campo',
  trecho: 'meça a impedância do sensor fora da placa em banho de gelo a 0°C para validar a calibração real.',
};

const F_TAB_NTC = {
  campo: 'tabelas_html',
  trecho: 'Temp (°C) Temp (°F) Resistência NTC 10k Tipo II (Ω) Resistência NTC 10k Tipo III (Ω) Resistência RTD PT1000 (Ω) 0 32 32,191 29,490 1,000.0 25 77 10,000 10,000 1,097.4',
};

const F_TENSAO_BUS = {
  campo: 'tabelas_html',
  trecho: 'Tensão de Sinal Nominal 16 VDC (Pulsos de 2V a 4V) 29 VDC 5 VDC (RS-485 diferencial)',
};

const F_10VOLTAS = {
  campo: 'conteudo_html',
  trecho: 'Como a medição de correntes tão baixas (por exemplo, de 0,2 a 0,6 A) com um alicate amperímetro padrão pode ser imprecisa, a técnica do multiplicador é de uso estrito no campo [1]. O técnico enrola exatamente dez (10) voltas de fio ao redor das garras indutivas de um alicate amperímetro e conecta o laço em série entre os terminais R e W na sub-base para medir a corrente de comando amplificada, dividindo o valor final por 10 [1].',
};

const F_CALC_10V = {
  campo: 'conteudo_html',
  trecho: 'Corrente Lida no Alicate (10 Voltas) 2.0 A 3.5 A 4.8 A 6.0 A Painel de Cálculo e Recomendação de Campo Corrente Real do Circuito (Medida / 10): 0.20 A',
};

const F_CALC_035 = {
  campo: 'conteudo_html',
  trecho: 'Corrente Real do Circuito (Medida / 10): 0.35 A Ajuste de Calibração Alvo (Dial): 0.35',
};

const F_120OHM = {
  campo: 'conteudo_html',
  trecho: 'A instalação de um resistor de terminação de 120Ω nas linhas Data+ e Data- nas duas pontas físicas extremas do barramento absorve a energia restante do pulso elétrico',
};

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm05-02',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'bancada-oficina',
  duracaoMin: 10,
  beats: [
    {
      id: 'abertura-bancada',
      tipo: 'fala',
      quem: 'narrador',
      texto: 'Na bancada da oficina, Simon prepara um copo térmico com gelo picado e água enquanto Juninho tenta medir a corrente de um circuito de comando com o alicate amperímetro.',
    },
    {
      id: 'juninho-reclama-alicate',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'duvida',
      texto: 'Mestre, esse alicate amperímetro está doido! A corrente entre R e W no comando é baixinha, entre 0,2 a 0,6 A, e o visor fica piscando sem precisão nenhuma.',
      fonte: F_10VOLTAS,
    },
    {
      id: 'simon-ensina-10voltas',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'aprovando',
      texto: 'O alicate não tem culpa, Juninho! Para medir correntes de 0,2 a 0,6 A com precisão, usamos a técnica do multiplicador: enrole 10 voltas de fio na garra do alicate e divida a leitura por 10.',
      fonte: F_10VOLTAS,
    },
    {
      id: 'bia-explica-campo-magnetico',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'empolgado',
      texto: 'Física pura! Cada espira multiplica o fluxo magnético no núcleo indutivo da garra. Se o visor mostrar 3.5 A nas 10 voltas, a corrente real do circuito é exatamente 0.35 A!',
      fonte: [F_CALC_10V, F_CALC_035],
    },
    {
      id: 'calculadora-10-voltas',
      tipo: 'calculadora',
      titulo: 'Multiplicador Indutivo de 10 Voltas no Alicate',
      formula: 'I_real = I_lida / 10',
      enunciado: 'Você enrolou 10 voltas do condutor de comando ao redor da garra do alicate amperímetro e leu 3.5 A no display. Qual é a corrente real do circuito em Amperes?',
      unidade: 'A',
      respostaCorreta: 0.35,
      tolerancia: 0.02,
      leituras: [
        { rotulo: 'Voltas na Garra Indutiva', valor: '10 voltas' },
        { rotulo: 'Corrente Lida no Alicate', valor: '3.5 A' },
      ],
      opcoesRapidas: [0.2, 0.35, 0.48, 3.5],
      fonte: [F_10VOLTAS, F_CALC_10V, F_CALC_035],
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'aprovando',
          texto: 'Cravado! Com 3.5 A lidos nas 10 voltas, a corrente real do circuito é 0.35 A, permitindo calibrar o dial do antecipador de calor em 0.35 sem erro.',
          fonte: [F_CALC_10V, F_CALC_035],
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'serio',
          texto: 'Basta dividir a corrente amplificada de 3.5 A pelo número de espiras na garra (10), resultando em 0.35 A.',
          fonte: [F_CALC_10V, F_CALC_035],
        },
      ],
    },
    {
      id: 'marta-pergunta-copo-gelo',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'curioso',
      texto: 'E esse copo cheio de gelo na bancada, Simon? Vai fazer refresco ou é ferramenta de diagnóstico também?',
    },
    {
      id: 'simon-apresenta-ntc-25c',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'rindo',
      texto: 'Esse é o detector de mentiras de sensores NTC, Dona Marta! Muita gente mede um sensor NTC na sombra a 25°C, vê 10,000 Ω no multímetro e acha que qualquer NTC de 10k é igual.',
      fonte: [F_NTC_CURVA, F_TAB_NTC],
    },
    {
      id: 'bia-explica-tipo2-vs-tipo3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Olha a armadilha: a 25°C (77°F), tanto o NTC 10k Tipo II quanto o Tipo III medem exatos 10,000 Ω! Mas a 0°C (32°F), o Tipo II vai para 32,191 Ω enquanto o Tipo III dá 29,490 Ω.',
      fonte: [F_NTC_CURVA, F_TAB_NTC],
    },
    {
      id: 'referencia-tabela-ntc',
      tipo: 'referencia',
      texto: 'Compare na tabela a divergência entre NTC 10k Tipo II (32,191 Ω a 0°C), NTC 10k Tipo III (29,490 Ω a 0°C) e o sensor linear RTD PT1000 (1,000.0 Ω a 0°C).',
      alvo: { aba: 'tabelas' },
      fonte: F_TAB_NTC,
    },
    {
      id: 'causo-sensor-universal',
      tipo: 'causo',
      titulo: 'O Sensor "Universal" que Enganou o PID do Chiller',
      fonte: [F_NTC_CURVA, F_GELO, F_TAB_NTC],
      falas: [
        {
          quem: 'simon',
          emocao: 'pensativo',
          texto: 'Num hotel do centro, o técnico trocou o sensor de água gelada de um chiller por um NTC 10k que ele tinha na maleta. Mediu na mão a 25°C, deu 10,000 Ω e ele comemorou.',
          fonte: [F_NTC_CURVA, F_TAB_NTC],
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'E quando a água começou a gelar perto de 0°C, o que aconteceu com o controle?',
          fonte: F_GELO,
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'A placa esperava a curva Tipo II (32,191 Ω a 0°C), mas ele instalou um Tipo III (29,490 Ω a 0°C). Essa diferença cegou a lógica PID e o chiller desarmava por falso erro de congelamento!',
          fonte: [F_NTC_CURVA, F_TAB_NTC],
        },
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'Se ele tivesse tirado o sensor da placa e medido em banho de gelo a 0°C antes de instalar, teria descoberto na hora que a curva Beta era incompatível.',
          fonte: F_GELO,
        },
      ],
    },
    {
      id: 'mito-verdade-ntc-10k',
      tipo: 'mitoVerdade',
      afirmacao: 'Qualquer sensor termistor NTC que apresente resistência de 10,000 Ω a 25°C pode substituir outro NTC de 10k sem afetar a calibração em baixas temperaturas.',
      verdade: false,
      fonte: [F_NTC_CURVA, F_TAB_NTC, F_GELO],
      explicacao: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Mito clássico! Sensores NTC Tipo II e Tipo III cruzam em 10,000 Ω a 25°C, mas divergem radicalmente no frio: a 0°C o Tipo II mede 32,191 Ω e o Tipo III mede 29,490 Ω.',
          fonte: [F_NTC_CURVA, F_TAB_NTC],
        },
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'Para validar a curva real e o desvio de calibração, meça sempre o sensor fora da placa submerso em banho de gelo a 0°C.',
          fonte: F_GELO,
        },
      ],
    },
    {
      id: 'escolha-teste-ntc',
      tipo: 'escolha',
      pergunta: 'Você suspeita que um sensor NTC 10k Tipo II de água gelada sofreu deriva térmica (drift). Qual é o procedimento padrão de bancada para validar sua precisão?',
      fonte: [F_GELO, F_TAB_NTC],
      opcoes: [
        {
          id: 'a',
          texto: 'Medir o sensor conectado diretamente aos bornes da placa energizada na temperatura ambiente.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'irritado',
              texto: 'Errado! Medir com o sensor plugado na placa lê a impedância paralela do circuito divisor de tensão e falseia o resultado.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Desconectar o sensor da placa, mergulhá-lo em banho de gelo a 0°C e conferir se mede próximo de 32,191 Ω.',
          ideal: true,
          fonte: [F_GELO, F_TAB_NTC],
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Perfeito! O banho de gelo fundente crava 0°C físicos sem depender de outro termômetro e confirma os 32,191 Ω do Tipo II.',
              fonte: [F_GELO, F_TAB_NTC],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Aquecer o sensor com isqueiro até a resistência cair abaixo de 1,000.0 Ω.',
          fonte: F_TAB_NTC,
          reacao: [
            {
              quem: 'simon',
              emocao: 'assustado',
              texto: 'Chama direta derrete o encapsulamento epóxi do termistor e destrói o componente na hora!',
            },
          ],
        },
      ],
    },
    {
      id: 'juninho-pergunta-bacnet',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E quando o controle é digital via rede RS-485 BACnet MS/TP, Bia? O que faz os controladores perderem pacotes no fim do cabo?',
    },
    {
      id: 'bia-explica-rs485-120ohm',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'pensativo',
      texto: 'No barramento diferencial RS-485 de 5 VDC, o pulso bate no fim do cabo e volta como eco! Por isso instalamos um resistor de terminação de 120Ω nas duas pontas extremas.',
      fonte: [F_TENSAO_BUS, F_120OHM],
    },
    {
      id: 'simon-complementa-topologia',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'E lembre que o barramento deve ir de controlador em controlador em cadeia linear (Daisy-Chain), respeitando a polaridade Data+ e Data- e a mesma taxa de comunicação em todos os nós!',
    },
    {
      id: 'inspecao-sistemas-controle',
      tipo: 'inspecao',
      titulo: 'Diagnóstico de Sensores e Barramento de Controle',
      enunciado: 'Analise quatro situações encontradas em uma revisão de controle e automação. Qual delas indica uma falha técnica que exige correção?',
      fonte: [F_TAB_NTC, F_GELO, F_120OHM, F_TENSAO_BUS],
      pontos: [
        {
          id: 'a',
          rotulo: 'Sensor RTD PT1000 medindo exatos 1,000.0 Ω em banho de gelo a 0°C (e 1,097.4 Ω a 25°C)',
          fonte: [F_GELO, F_TAB_NTC],
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Calibração impecável! O PT1000 tem resposta platina linear: 1,000.0 Ω a 0°C e 1,097.4 Ω a 25°C.',
              fonte: F_TAB_NTC,
            },
          ],
        },
        {
          id: 'b',
          rotulo: 'Substituição de um NTC 10k Tipo II (32,191 Ω a 0°C) por um Tipo III (29,490 Ω a 0°C) sem reconfigurar a placa',
          correta: true,
          fonte: [F_NTC_CURVA, F_TAB_NTC],
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Erro grave! Apesar de ambos medirem 10,000 Ω a 25°C, a diferença entre 32,191 Ω e 29,490 Ω a 0°C engana completamente o controlador PID.',
              fonte: [F_NTC_CURVA, F_TAB_NTC],
            },
          ],
        },
        {
          id: 'c',
          rotulo: 'Resistor de terminação de 120Ω instalado apenas nas duas pontas extremas do barramento RS-485',
          fonte: F_120OHM,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Correto! O resistor de 120Ω nas extremidades absorve a energia do pulso e impede reflexões de onda no barramento.',
              fonte: F_120OHM,
            },
          ],
        },
        {
          id: 'd',
          rotulo: 'Sinal diferencial RS-485 operando no nível nominal de 5 VDC em par trançado encadeado',
          fonte: F_TENSAO_BUS,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Dentro do padrão! O barramento RS-485 opera com nível diferencial nominal de 5 VDC.',
              fonte: F_TENSAO_BUS,
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-gelo-0c',
      tipo: 'filosofia',
      titulo: 'O Caráter do Sensor se Revela no Gelo',
      principio: 'Testar um termistor apenas na sombra agradável dos 25°C não prova nada; é no banho de gelo a 0°C que você descobre se ele fala a língua da placa.',
      fonte: [F_NTC_CURVA, F_GELO],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Nunca confiem num sensor só porque deu 10,000 Ω a 25°C. Tirem da placa, mergulhem no banho de gelo a 0°C e confiram a tabela do fabricante antes de fechar o diagnóstico!',
          fonte: [F_NTC_CURVA, F_GELO, F_TAB_NTC],
        },
      ],
    },
    {
      id: 'quiz-terminacao-rs485',
      tipo: 'quiz',
      enunciado: 'Em uma rede de automação predial RS-485 (BACnet MS/TP ou Modbus RTU), qual é a função e o valor dos resistores instalados nas duas extremidades físicas do barramento?',
      fonte: F_120OHM,
      opcoes: [
        {
          id: 'a',
          texto: 'Resistores de terminação de 120Ω nas duas pontas extremas para absorver a energia do pulso e evitar reflexão de sinal.',
          correta: true,
          fonte: F_120OHM,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Exato! Os dois resistores de 120Ω casam a impedância característica do cabo nas extremidades e eliminam ecos de comunicação.',
              fonte: F_120OHM,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Resistores de 10,000 Ω em cada controlador intermediário para elevar a tensão de alimentação.',
          fonte: F_TAB_NTC,
          feedback: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: 'Não misture termistor de 10,000 Ω com terminação de rede! No RS-485 usamos 120Ω apenas nas duas pontas físicas.',
              fonte: [F_TAB_NTC, F_120OHM],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Ligar os cabos em topologia estrela sem resistores para reduzir a resistência total.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'serio',
              texto: 'Topologia estrela cria múltiplas reflexões de onda e derruba o token da rede BACnet MS/TP.',
            },
          ],
        },
      ],
    },
    {
      id: 'marta-elogia-precisao',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'aprovando',
      texto: 'Um pedaço de fio dando 10 voltas no alicate e um copo com gelo a 0°C resolvem defeitos que deixam prédios inteiros no escuro. Isso é engenharia raiz!',
      fonte: [F_10VOLTAS, F_GELO],
    },
    {
      id: 'juninho-guarda-dica-10voltas',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'empolgado',
      texto: 'Já deixei um chicote com 10 voltas pronto na minha maleta de testes para nunca mais sofrer lendo 0.35 A em comando!',
      fonte: [F_10VOLTAS, F_CALC_035],
    },
    {
      id: 'simon-fecha-modulo05',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'empolgado',
      texto: 'Com elétrica de potência e controles afiados, fechamos o Módulo 5! Preparem a bancada que no próximo módulo vamos abrir os Splits Inverter.',
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Para medir correntes baixas (0,2 a 0,6 A), enrole 10 voltas na garra do alicate amperímetro e divida a leitura por 10.',
        'Sensores NTC 10k Tipo II e Tipo III medem 10,000 Ω a 25°C, mas a 0°C divergem (32,191 Ω vs 29,490 Ω); valide sempre em banho de gelo a 0°C fora da placa.',
        'Barramentos RS-485 exigem topologia encadeada e resistor de terminação de 120Ω nas duas extremidades físicas.',
      ],
      proxima: 'No Módulo 6, vamos dominar a manutenção de Split Inverter: descarga segura do barramento CC, bobinas EEV e o perigo do Back-EMF no ventilador BLDC!',
      fonte: [F_10VOLTAS, F_TAB_NTC, F_GELO, F_120OHM],
    },
  ],
};
