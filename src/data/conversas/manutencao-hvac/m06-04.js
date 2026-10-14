// Conversa: Manutenção de Câmaras Frias (m06-04)
// Cenário: Bancada de Oficina — Lei de Ohm no Degelo, Klixon (-5°C / 22°C), Choque Térmico e Portaria CVS 5/2013

const F_OHM_220 = {
  campo: 'conteudo_html',
  trecho: 'Cálculo da Lei de Ohm: R = 220² / 500 = 96.8 Ω Medição Medida: 96.8 Ω (Normal) Diagnóstico: ✔ Aprovado - Filamento saudável para operação em 220V.',
};

const F_OHM_120 = {
  campo: 'conteudo_html',
  trecho: 'uma resistência de aquecimento de 500 W operando a uma tensão de 120 V deve apresentar uma resistência de referência de exatamente: R = 120^2 / 500 = 14.400 / 500 = 28,8 Ω',
};

const F_KLIXON = {
  campo: 'conteudo_html',
  trecho: 'Coloque o Klixon em banho térmico salino frio (-5°C) ou morno (22°C)',
};

const F_PESCADO = {
  campo: 'tabelas_html',
  trecho: 'Pescado Cru Refrigerado Máximo 2.0°C 3 Dias',
};

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm06-04',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'bancada-oficina',
  duracaoMin: 10,
  beats: [
    {
      id: 'abertura-camara',
      tipo: 'fala',
      quem: 'narrador',
      texto: 'Na bancada da oficina, Simon analisa uma resistência tubular de inox de câmara fria e um termostato bimetálico Klixon redondo, enquanto Juninho prepara o multímetro.',
    },
    {
      id: 'juninho-pergunta-resistencia',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'duvida',
      texto: 'Mestre Simon, o açougueiro reclamou que o evaporador da câmara virou uma pedra de gelo só. Como eu sei se essa resistência de degelo de 500 W em 220V está boa ou alterada?',
      fonte: [F_OHM_220, F_OHM_120],
    },
    {
      id: 'simon-explica-lei-ohm',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'aprovando',
      texto: 'Não basta testar se apita continuidade, Juninho! Tem que aplicar a Lei de Ohm: divida a tensão ao quadrado pela potência. Em 220V com 500 W, a conta dá exatos 96.8 Ω!',
      fonte: [F_OHM_220, F_OHM_120],
    },
    {
      id: 'bia-explica-120v-comparacao',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'pensativo',
      texto: 'E olha como a tensão muda tudo: se a mesma resistência de 500 W for projetada para operar em 120 V, a resistência de referência cai para 28,8 Ω!',
      fonte: F_OHM_120,
    },
    {
      id: 'calculadora-degelo-ohm',
      tipo: 'calculadora',
      titulo: 'Validação Ôhmica de Resistência de Degelo (R = V² / P)',
      formula: 'R = V² / P = 220² / 500',
      enunciado: 'Você desconectou uma resistência de degelo nominal de 500 W / 220V para aferição ôhmica a frio. Qual valor em Ohms (Ω) confirma que o filamento está saudável?',
      unidade: 'Ω',
      respostaCorreta: 96.8,
      tolerancia: 1.0,
      leituras: [
        { rotulo: 'Tensão Nominal (V)', valor: '220V' },
        { rotulo: 'Potência Nominal (P)', valor: '500 W' },
      ],
      opcoesRapidas: [14.4, 28.8, 96.8, 220.0],
      fonte: [F_OHM_220, F_OHM_120],
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'aprovando',
          texto: 'Exato! 220 ao quadrado (48.400) dividido por 500 W resulta em 96.8 Ω. Se der infinito está aberta, e se fugir muito disso está com espiras em curto!',
          fonte: [F_OHM_220, F_OHM_120],
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'serio',
          texto: 'Eleve 220V ao quadrado (220 × 220 = 48.400) e divida pelos 500 W de potência para encontrar 96.8 Ω.',
          fonte: [F_OHM_220, F_OHM_120],
        },
      ],
    },
    {
      id: 'causo-mangueira-facao',
      tipo: 'causo',
      titulo: 'O Degelo a Facão e Mangueira de Água Quente',
      falas: [
        {
          quem: 'simon',
          emocao: 'rindo',
          texto: 'Num supermercado antigo, o encarregado da noite perdeu a paciência com o bloco de gelo no evaporador e resolveu fazer um "degelo expresso" por conta própria.',
        },
        {
          quem: 'juninho',
          emocao: 'assustado',
          texto: 'Ele bateu com barra de ferro nas aletas de alumínio, mestre?',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Usou chave de fenda como picareta e ainda engatou uma mangueira de água quente da higienização direto na serpentina gelada! O choque térmico trincou as soldas do distribuidor na hora.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Além de furar o tubo e inundar o circuito frigorífico com água, jogar água quente num evaporador congelado faz a pressão interna de baixa subir de forma explosiva!',
        },
      ],
    },
    {
      id: 'mito-verdade-agua-quente-degelo',
      tipo: 'mitoVerdade',
      afirmacao: 'Quando o evaporador de uma câmara fria bloqueia totalmente por gelo, o método técnico recomendado para acelerar o reparo é jogar água quente diretamente sobre a serpentina.',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Mito proibido! O choque térmico violento dilata o alumínio e o cobre em velocidades diferentes, rompendo soldas e elevando perigosamente a pressão interna.',
        },
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'E jamais use objetos pontiagudos como facas ou chaves de fenda para picar o gelo: derreta de forma controlada com ventilação e calor moderado verificando o dreno.',
        },
      ],
    },
    {
      id: 'marta-pergunta-klixon',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'curioso',
      texto: 'E essa pecinha redonda chamada Klixon, Simon? O que acontece quando ela trava na câmara fria?',
      fonte: F_KLIXON,
    },
    {
      id: 'simon-explica-klixon-banho',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'pensativo',
      texto: 'O Klixon é o termostato bimetálico de fim de degelo e segurança, Dona Marta! Na bancada nós testamos ele em banho térmico salino frio (-5°C) e em banho morno (22°C).',
      fonte: F_KLIXON,
    },
    {
      id: 'bia-detalha-klixon',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'No frio (-5°C) o disco bimetálico fecha o contato permitindo que a resistência aqueça; quando o gelo derrete e a serpentina chega no morno (22°C), ele abre para não cozinhar a câmara!',
      fonte: F_KLIXON,
    },
    {
      id: 'escolha-teste-klixon',
      tipo: 'escolha',
      pergunta: 'Como validar na bancada se um termostato bimetálico de degelo (Klixon) está atuando corretamente antes de instalá-lo no evaporador?',
      fonte: F_KLIXON,
      opcoes: [
        {
          id: 'a',
          texto: 'Medir continuidade apenas em temperatura ambiente de verão; se estiver aberto, jogar no lixo imediatamente.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: 'Calma! A 22°C ou mais, o contato de degelo do Klixon DEVE estar aberto mesmo! Ele só fecha quando resfriado abaixo do ponto de congelamento.',
              fonte: F_KLIXON,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Submergir o Klixon em banho térmico salino frio (-5°C) para confirmar fechamento e em banho morno (22°C) para confirmar abertura.',
          ideal: true,
          fonte: F_KLIXON,
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Exato! O ensaio nos dois banhos (-5°C e 22°C) comprova tanto o fechamento no gelo quanto o desligamento de segurança no fim do degelo.',
              fonte: F_KLIXON,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Jumpear definitivamente os fios do Klixon para que a resistência de degelo nunca desligue por temperatura.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'assustado',
              texto: 'Perigo de incêndio e perda de carga! Sem o limite térmico do Klixon, a resistência ferve a bandeja, enche a câmara de vapor e estraga os alimentos.',
              fonte: F_KLIXON,
            },
          ],
        },
      ],
    },
    {
      id: 'referencia-tabela-cvs',
      tipo: 'referencia',
      texto: 'Consulte na aba de tabelas os limites sanitários rigorosos de conservação alimentar, como Pescado Cru Refrigerado a no máximo 2.0°C por até 3 Dias.',
      alvo: { aba: 'tabelas' },
      fonte: F_PESCADO,
    },
    {
      id: 'juninho-comenta-pescado',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'Puxa, Pescado Cru Refrigerado exige no máximo 2.0°C e validade de apenas 3 Dias! Qualquer falha no degelo já coloca tudo a perder.',
      fonte: F_PESCADO,
    },
    {
      id: 'bia-explica-gaxeta-cortina',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Por isso inspecionamos também as gaxetas magnéticas da porta e as cortinas de PVC: infiltração de ar úmido externo é o maior vilão do bloqueio por gelo!',
    },
    {
      id: 'inspecao-camara-fria',
      tipo: 'inspecao',
      titulo: 'Inspeção de Câmara Fria: Degelo e Conformidade Sanitária',
      enunciado: 'Avalie quatro itens registrados na manutenção de uma câmara frigorífica comercial. Qual deles representa uma não-conformidade que exige correção?',
      fonte: [F_OHM_220, F_OHM_120, F_KLIXON, F_PESCADO],
      pontos: [
        {
          id: 'a',
          rotulo: 'Resistência de degelo de 500 W / 220V apresentando leitura ôhmica de 96.8 Ω',
          fonte: [F_OHM_220, F_OHM_120],
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Filamento 100 por cento íntegro! A leitura bate cravado com R = 220² / 500 = 96.8 Ω.',
              fonte: [F_OHM_220, F_OHM_120],
            },
          ],
        },
        {
          id: 'b',
          rotulo: 'Resistência de aquecimento de 500 W / 120 V apresentando leitura ôhmica de 28,8 Ω',
          fonte: F_OHM_120,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Aprovado! Em 120 V, R = 120² / 500 resulta exatamente em 28,8 Ω.',
              fonte: F_OHM_120,
            },
          ],
        },
        {
          id: 'c',
          rotulo: 'Klixon permanecendo com contato fechado no banho morno a 22°C sem cortar o aquecimento',
          correta: true,
          fonte: F_KLIXON,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Defeito grave! Se o Klixon não abre em 22°C, o degelo continua aquecendo o evaporador já limpo, jogando vapor quente nos alimentos!',
              fonte: F_KLIXON,
            },
          ],
        },
        {
          id: 'd',
          rotulo: 'Câmara de pescado cru refrigerado operando dentro do limite máximo de 2.0°C (prazo de 3 Dias)',
          fonte: F_PESCADO,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Conformidade sanitária exemplar! Pescado cru refrigerado exige máximo de 2.0°C.',
              fonte: F_PESCADO,
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-gelo-iglu',
      tipo: 'filosofia',
      titulo: 'Gelo no Evaporador é Cobertor de Iglu',
      principio: 'Bloco de gelo na serpentina não significa que a máquina está gelando demais; significa que o ar parou de passar e o gelo virou isolante térmico.',
      fonte: F_KLIXON,
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Em câmara fria, saber derreter o gelo na hora certa e cortar o calor aos 22°C no Klixon é o que garante o pescado a 2.0°C e o lucro do cliente salvo.',
          fonte: [F_KLIXON, F_PESCADO],
        },
      ],
    },
    {
      id: 'quiz-ohm-120v',
      tipo: 'quiz',
      enunciado: 'Aplicando a Lei de Ohm (R = V² / P), qual deve ser a resistência elétrica de referência de uma resistência de aquecimento de 500 W projetada para operar em 120 V?',
      fonte: F_OHM_120,
      opcoes: [
        {
          id: 'a',
          texto: 'Exatamente 28,8 Ω (14.400 dividido por 500 W).',
          correta: true,
          fonte: F_OHM_120,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Matemática afiada! 120 ao quadrado dá 14.400, que dividido por 500 W resulta exatamente em 28,8 Ω.',
              fonte: F_OHM_120,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Exatamente 96.8 Ω, pois a tensão de alimentação não altera a resistência nominal do elemento.',
          fonte: F_OHM_220,
          feedback: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: '96.8 Ω é para a resistência de 500 W em 220V! Se ligar uma de 96.8 Ω em 120 V, ela não vai entregar os 500 W necessários.',
              fonte: [F_OHM_220, F_OHM_120],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Zero ohms (curto-circuito franco entre fase e neutro).',
          feedback: [
            {
              quem: 'bia',
              emocao: 'serio',
              texto: 'Zero ohms desarma o disjuntor instantaneamente! Toda resistência de aquecimento possui impedância finita calculada por V² / P.',
            },
          ],
        },
      ],
    },
    {
      id: 'marta-comemora-fim-mod06',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'aprovando',
      texto: 'Passamos por Split Inverter, VRF, Chiller e Câmara Fria sem deixar passar um parafuso solto! Essa equipe vale ouro.',
    },
    {
      id: 'juninho-guarda-klixon',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'empolgado',
      texto: 'E nunca mais eu testo resistência de degelo só no apito de continuidade: agora calculo os 96.8 Ω em 220V na ponta do lápis!',
      fonte: F_OHM_220,
    },
    {
      id: 'simon-abre-mod07',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'empolgado',
      texto: 'Fechamos o Módulo 6 com chave de ouro! No Módulo 7 entramos na elite da Engenharia de Confiabilidade: Análise de Vibração, Termografia Avançada e CMMS!',
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Valide resistências de degelo pela Lei de Ohm (R = V² / P): para 500 W, deve medir 96.8 Ω em 220V ou 28,8 Ω em 120 V.',
        'Teste o termostato bimetálico Klixon em banho frio (-5°C) e morno (22°C) e jamais jogue água quente na serpentina congelada.',
        'Garanta a segurança alimentar estrita no controle de temperatura (ex.: Pescado Cru Refrigerado a no máximo 2.0°C por até 3 Dias).',
      ],
      proxima: 'No Módulo 7, vamos dominar a Análise de Vibração Mecânica: acelerômetros Stud vs Stinger, espectro FFT de alta resolução e diagnóstico de rolamentos!',
      fonte: [F_OHM_220, F_OHM_120, F_KLIXON, F_PESCADO],
    },
  ],
};
