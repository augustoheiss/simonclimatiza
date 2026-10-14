// src/data/conversas/instalacao-hvac/03-01.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 03-01
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '03-01',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'bancada-oficina',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Quinta, 7h30. Bancada da oficina. Simon segura um cortador de tubo de roldana, um escareador rotativo, um flangeador excêntrico de embreagem e um torquímetro de garra.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Simon, pra cortar essa barra de cobre de 3/4" rapidinho, posso apertar o cortador meia volta de uma vez ou passar a serrinha manual?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Nem pense nisso, Ju! Serra manual solta milhares de fragmentos que fazem um jateamento de areia (*sandblasting*) nas EEVs e nas espiras do scroll!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'A circulação desses fragmentos metálicos funciona como um processo de jateamento de areia interna (sandblasting), destruindo vedações de expansão eletrônica (EEVs) e riscando as espiras dos compressores scroll.',
      },
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'E se você apertar o cortador de roldana com força bruta de uma vez, provoca o **Encruamento** (*Work Hardening*): o cobre endurece, perde ductilidade e trinca na hora de flangear!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Quando o técnico tenta flangear essa extremidade endurecida, a falta de ductilidade causa rasgos e trincas radiais (splitting), gerando vazamentos invisíveis a curto prazo.',
      },
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Em sistemas de **R-410A** ou **R-32** operando de **400 a 500 PSI**, a rebarba interna age como placa de orifício: gera **Vórtices de Dean** e derruba a velocidade do gás!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Em sistemas modernos de R-410A ou R-32 que operam sob pressões extremas de 400 a 500 PSI, o escareamento inadequado do tubo de cobre reduz a eficiência do sistema, impede o retorno de óleo',
      },
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      texto: 'A ASHRAE exige velocidade mínima de vapor de **700 a 800 FPM** em trechos horizontais e de **1.000 a 1.500 FPM** em risers verticais para arrastar o óleo de volta ao cárter.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A ASHRAE exige velocidades mínimas de vapor de 700 a 800 FPM em trechos horizontais e de 1.000 a 1.500 FPM em risers verticais.',
      },
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Um compressor de **5 TR** bombeia todo o óleo do cárter para a linha em **50** minutos! Se a rebarba reter esse óleo (*oil logging*), em 2 a 5 horas o compressor trava seco.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Um compressor de 5 TR pode bombear todo o óleo do seu cárter para a linha em 50 minutos.',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Na hora de lubrificar e apertar um flange de alta pressão com Nylog ou óleo POE e torquímetro: onde o lubrificante deve ser aplicado e onde ele é PROIBIDO?',
      opcoes: [
        {
          id: 'a',
          texto: 'Passar bastante óleo na rosca da porca de latão para girar mais macio.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Erro fatal! Lubrificar a rosca reduz o atrito de projeto e engana o torquímetro: a porca gira demais e esmaga plasticamente o flange!',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'A lubrificação das roscas reduz severamente o atrito de projeto. Ao aplicar o torquímetro, a porca girará excessivamente para alcançar o valor medido, esmagando plasticamente o flange de cobre.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Aplicar uma gota na face cônica interna e no ombro traseiro do flange, mantendo as roscas 100% secas.',
          ideal: true,
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Perfeito! Roscas secas garantem que o torquímetro mantenha o cobre no **Regime Elástico** da Lei de Hooke, agindo como mola viva entre **4°C** e **60°C**!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Durante as ciclagens térmicas (frio de 4°C e calor de 60°C), os metais dilatam e contraem de forma diferencial.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Apertar no braço até sair água do cobre, sem torquímetro.',
          reacao: [
            {
              quem: 'bia',
              texto: 'Apertar no braço leva o cobre à deformação plástica: na primeira ciclagem fria a **4°C**, abre microvazamento!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Durante as ciclagens térmicas (frio de 4°C e calor de 60°C), os metais dilatam e contraem de forma diferencial.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'bia',
      texto: 'E pra conformar esse flange sem riscar (*galling*) nem afinar o pescoço, usamos o **Flangeador Excêntrico Orbital com Embreagem** (*Clutch*), que pole a face como um espelho.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O cone amassa e pole a boca do cobre gradualmente de forma contínua, deixando a parede interna lisa e espelhada.',
      },
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E quando precisar escarear um tubo já chumbado que não dá pra virar a **90°** para o chão, injete uma purga de nitrogênio pela outra ponta para soprar toda limalha para fora!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'O escareamento deve idealmente ocorrer com a extremidade do tubo de cobre apontada a 90° para o solo para que a gravidade retire todas as limalhas.',
      },
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Entendi, Simon! Então toda vez que eu usar o curvador mecânico em vez de soldar cotovelo de raio curto, além de evitar dois pontos de brasagem eu ainda derrubo a perda de carga pela metade!',
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e o Escareamento de Cabeça pra Cima',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'O Zé cortou um tubo de sucção na escada, escareou com a boca do cano apontada pro teto e deixou os cavacos de cobre caírem lá dentro.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Essas limalhas viajaram pela sucção direto para o estator do compressor! Com a vibração, rasgaram o esmalte de poliimida dos enrolamentos e fecharam curto para a carcaça.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Sob vibração contínua das partidas, esses cavacos afiados desgastam o esmalte isolante de poliimida dos enrolamentos de cobre, provocando um curto-circuito direto para a carcaça',
          },
        },
        {
          quem: 'simon',
          texto: 'E o que não fechou curto imediato foi dissolvido pelo ácido no óleo POE, causando **Copper Plating** nos mancais até travar o rotor!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Cobreado Químico (Copper Plating): A umidade reage com o óleo POE gerando ácidos que dissolvem os cavacos de cobre.',
          },
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Soldar um cotovelo de 90° de raio curto gera menos perda de carga do que dobrar o próprio tubo com curvador mecânico (sweeping).',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          texto: 'Mito! Num tubo de 7/8", um cotovelo 90° de raio curto equivale a 2,60 ft (0,79 m) de perda, enquanto o curvador mecânico cai para 1,36 ft (0,41 m) — quase metade da restrição!',
          fonte: {
            campo: 'tabelas_html',
            trecho: '7/8" 2,60 ft (0,79 m) 1,70 ft (0,51 m) 1,36 ft (0,41 m)',
          },
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Em risers verticais (subidas de linha de sucção), a velocidade recomendada de projeto pela tabela ASHRAE da aula é de 1.200 a 1.500 FPM (mínimo de 1.000 FPM) para vencer a gravidade sobre o óleo.',
      verdade: true,
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Risers Verticais (Subidas) 1.000 FPM (5,0 m/s) 1.200 a 1.500 FPM (6,0 a 7,5 m/s)',
      },
      explicacao: [
        {
          quem: 'simon',
          texto: 'Verdade! Na subida vertical é preciso no mínimo **1.000 FPM** (projeto de **1.200 a 1.500 FPM**), sem jamais passar do teto geral de **3.000 a 4.000 FPM** para não gerar ruído e erosão.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Risers Verticais (Subidas) 1.000 FPM (5,0 m/s) 1.200 a 1.500 FPM (6,0 a 7,5 m/s) Superar a força de gravidade reversa sobre as gotículas de óleo poe/pve acumuladas. Velocidades Máximas Gerais - Máximo 3.000 a 4.000 FPM',
          },
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Ao apertar uma conexão flangeada de latão no evaporador, qual técnica de ferramentas impede que o torque aplicado torça e estrangule o tubo de cobre fino?',
      opcoes: [
        {
          id: 'a',
          texto: 'Double Wrenching: segurar o contra-apoio com uma chave fixa enquanto aplica o torquímetro de garra na porca.',
          correta: true,
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Torquímetro de garra de precisão (Double Wrenching).',
          },
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Isso mesmo! Sempre duas chaves (*Double Wrenching*): uma trava o niple e o torquímetro aperta a porca na faixa elástica exata.',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'Torquímetro de garra de precisão (Double Wrenching).',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Segurar o tubo de cobre com a mão esquerda e girar a porca com alicate bomba d’água.',
          feedback: [
            {
              quem: 'bia',
              texto: 'Alicate bomba d’água sem contra-chave torce o pescoço do cobre na hora!',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora de Bancada — Torque Máximo de Flange 1/4" (N·m)',
      formula: 'Faixa 1/4" = 18 N·m (mín) a 25 N·m (máx)',
      enunciado: 'Você vai torquear a porca da linha de líquido de **1/4"** num split **R-410A** / **R-32** com rosca seca. Pela tabela de especificações de torque da aula, o mínimo é **18 N·m** (13 ft·lbs). Qual é o torque **máximo** recomendado em **N·m** (equivalente a 18 ft·lbs)?',
      leituras: [
        { rotulo: 'Diâmetro do Tubo', valor: '1/4"' },
        { rotulo: 'Torque Mínimo (1/4")', valor: '13 ft·lbs (18 N·m)' },
        { rotulo: 'Torque Máximo (ft·lbs)', valor: '18 ft·lbs' },
      ],
      unidade: 'N·m',
      respostaCorreta: 25,
      tolerancia: 0.5,
      opcoesRapidas: [18, 25, 33, 41],
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Especificações de Torque para Flanges em Alta Pressão (R-410A / R-32)',
        },
        {
          campo: 'tabelas_html',
          trecho: '1/4" 13 ft·lbs (18 N·m) 18 ft·lbs (25 N·m)',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Perfeito! Para tubo de **1/4"**, a janela elástica vai de **18 N·m** a **25 N·m** (13 a 18 ft·lbs) com torquímetro de garra.',
          fonte: {
            campo: 'tabelas_html',
            trecho: '1/4" 13 ft·lbs (18 N·m) 18 ft·lbs (25 N·m)',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Confira na primeira linha da tabela de torque: para 1/4", o mínimo é **18 N·m** (13 ft·lbs) e o máximo recomendado é **25 N·m** (18 ft·lbs).',
          fonte: {
            campo: 'tabelas_html',
            trecho: '1/4" 13 ft·lbs (18 N·m) 18 ft·lbs (25 N·m)',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Bancada — Corte, Escareamento e Flangeamento',
      enunciado: 'Observe o slide de Maestria do Tubo de Cobre e identifique a execução que preserva o sistema vascular do ciclo frigorífico:',
      imagem: '/images/academia/hvac-instalacao/modulo03/modulo03-01/Module03-01-Advanced HVAC Copper Tubing Mastery-01.jpg',
      legendaImagem: 'Módulo 03-01 — Corte Progressivo, Escareamento e Tribologia de Flanges',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Corte progressivo com roldana, escareamento a 90° voltado para o solo, flange excêntrico de embreagem e rosca seca no torquímetro.',
          correta: true,
          fonte: {
            campo: 'infobox_campo',
            trecho: 'O escareamento deve idealmente ocorrer com a extremidade do tubo de cobre apontada a 90° para o solo para que a gravidade retire todas as limalhas.',
          },
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Arte pura no cobre! Zero encruamento, zero cavaco no estator e flange vedando como mola elástica entre **4°C** e **60°C**.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Durante as ciclagens térmicas (frio de 4°C e calor de 60°C), os metais dilatam e contraem de forma diferencial.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Tubo cortado com serra manual, rebarba deixada por dentro e Nylog lambuzado nas roscas de latão.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              texto: 'Isso provoca *sandblasting* no compressor, *oil logging* por Vórtices de Dean e esmagamento plástico do flange!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Paciência na Roldana, Paz no Compressor',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Sabe onde você conhece a alma de um instalador, Ju? No jeito que ele gira o cortador de tubo. O apressado aperta tudo de uma vez e esmaga o cobre; o mestre dá um quarto de volta por giro e deixa a lâmina cantar.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Porque a tubulação é o sistema vascular da máquina. Cada rebarba que você remove de cabeça para baixo é um coágulo a menos no coração do sistema.',
        },
      ],
      principio: 'Trate o tubo de cobre como uma artéria cirúrgica: sem rebarbas, sem cavacos e no regime elástico.',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte as velocidades de arraste ASHRAE, perdas de carga em curvas e a tabela completa de **Torque para Flanges** na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Corte e Escareamento:** avanço progressivo para evitar encruamento, escareamento voltado a **90°** para o solo e proibição total de serras.',
        '**Retorno de Óleo:** elimine rebarbas e priorize curvador mecânico para manter **700 a 800 FPM** horizontais e **1.000 a 1.500 FPM** em risers.',
        '**Flange Elástico:** flangeador orbital com embreagem, gota de POE/Nylog só na face/ombro, **rosca seca** e aperto com *Double Wrenching* no torquímetro.',
      ],
      proxima: 'Na Aula 03-02 vamos acender o maçarico com o protocolo de Brasagem Limpa com Purga de Nitrogênio Seco (2 a 5 SCFH).',
      fonte: [
        {
          campo: 'infobox_campo',
          trecho: 'O escareamento deve idealmente ocorrer com a extremidade do tubo de cobre apontada a 90° para o solo para que a gravidade retire todas as limalhas.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A ASHRAE exige velocidades mínimas de vapor de 700 a 800 FPM em trechos horizontais e de 1.000 a 1.500 FPM em risers verticais.',
        },
      ],
    },
  ],
};
