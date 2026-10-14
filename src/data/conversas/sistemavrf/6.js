// src/data/conversas/sistemavrf/6.js
// Roteiro "Papo de Balcão" — Dominando o Sistema VRF (TVR Ultra) · Aula 06

export default {
  schema: 1,
  cursoId: 'sistemavrf',
  aulaId: '6',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'bancada-oficina',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-abertura',
      tipo: 'cena',
      texto: 'Bancada da oficina às 07h30. Simon espalha o esquema de controle da Placa de Circuito Impresso Principal (PCB) conectada às válvulas e compressores.',
    },
    {
      id: 'fala-simon-corpo-completo',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Juninho, pra dominar o **TVR Ultra** de verdade, você precisa parar de ver peças soltas e enxergar o sistema como um **corpo completo**, com seu próprio sistema nervoso.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Você aprenderá a visualizar o sistema como um corpo completo, com seu próprio sistema nervoso, e entenderá como a Placa de Circuito Impresso Principal (PCB) toma decisões cruciais.',
      },
    },
    {
      id: 'fala-bia-cerebro-eletronico',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'A **Placa de Circuito Impresso Principal (PCB)** é o cérebro eletrônico que comanda toda a operação além da mecânica e da termodinâmica.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Vamos além da mecânica e termodinâmica para mergulhar no cérebro eletrônico que comanda toda a operação.',
      },
    },
    {
      id: 'fala-juninho-analogia',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E como esse cérebro toma decisão quando a carga térmica cai lá na ponta do prédio, tipo de madrugada quando quase todas as salas desligam?',
    },
    {
      id: 'escolha-decisao-pcb',
      tipo: 'escolha',
      pergunta: 'Quando a demanda térmica varia no edifício, como a Placa de Circuito Impresso Principal (PCB) mantém o funcionamento eficiente e seguro do TVR Ultra?',
      opcoes: [
        {
          id: 'a',
          texto: 'Mantendo os compressores sempre no máximo e soltando o gás excedente para a atmosfera.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Soltar gás na atmosfera seria crime ambiental e falência técnica! O sistema é fechado e modulado eletronicamente.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Através da comunicação contínua entre a PCB e os componentes como compressores e válvulas, ajustando a operação com segurança.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exatamente! A comunicação fina entre a **PCB**, os **compressores** e as **válvulas** coordena a vazão, o retorno de óleo e a eficiência energética.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Descubra como a comunicação entre a PCB e os componentes como compressores e válvulas garante o funcionamento eficiente e seguro do equipamento.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Esperando um operador humano girar registros manuais a cada meia hora.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'risada',
              texto: 'Imagina contratar um manobrista de registro para morar na cobertura! Quem faz isso em milissegundos é a **PCB**.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-simon-velocidade-arraste',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Pensa no ciclo de operação em baixa carga: se só uma salinha estiver ligada, a velocidade do gás na prumada principal cai e o óleo começa a querer dormir nas curvas.',
    },
    {
      id: 'fala-bia-coordenacao-valvulas',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Aí a **PCB** lê o tempo de operação, conversa com as válvulas e com os compressores e toma a decisão crucial de elevar a rotação para varrer a linha com segurança!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'entenderá como a Placa de Circuito Impresso Principal (PCB) toma decisões cruciais. Descubra como a comunicação entre a PCB e os componentes como compressores e válvulas garante o funcionamento eficiente e seguro do equipamento.',
      },
    },
    {
      id: 'fala-juninho-corpo-humano',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'É igualzinho ao corpo humano mesmo: o cérebro sente a pressão arterial cair, manda sinal pros vasos e pro coração acelerarem juntos!',
    },
    {
      id: 'fala-simon-validacao',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Por isso que não adianta olhar só o manômetro como se fosse uma geladeira antiga. No VRF, o manômetro mostra o que a **PCB** mandou a válvula e o compressor fazerem!',
    },
    {
      id: 'causo-manometro-enganado',
      tipo: 'causo',
      titulo: 'O Refrigerista Antigo que Quis Domar o VRF no Manifold',
      falas: [
        {
          quem: 'simon',
          emocao: 'bem-humorado',
          texto: 'Um colega das antigas colocou o manifold num **TVR Ultra** bem na hora em que a **PCB** estava modulando as válvulas e reduzindo a rampa do compressor.',
        },
        {
          quem: 'bia',
          emocao: 'risada',
          texto: 'Viu a pressão variar e achou que o compressor estava perdendo compressão?',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Achou! Quase condenou um compressor perfeito porque não entendia que a **Placa de Circuito Impresso Principal (PCB)** toma decisões dinâmicas o tempo todo.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'entenderá como a Placa de Circuito Impresso Principal (PCB) toma decisões cruciais.',
          },
        },
      ],
    },
    {
      id: 'mito-mecanica-isolada',
      tipo: 'mitoVerdade',
      afirmacao: 'No sistema VRF TVR Ultra, os compressores e as válvulas operam de forma puramente mecânica e independente, sem depender de comandos da Placa de Circuito Impresso Principal (PCB).',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! Toda a operação eficiente e segura depende da comunicação constante entre a **PCB** principal e os componentes como compressores e válvulas.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Descubra como a comunicação entre a PCB e os componentes como compressores e válvulas garante o funcionamento eficiente e seguro do equipamento.',
          },
        },
        {
          quem: 'simon',
          emocao: 'neutro',
          texto: 'Sem o cérebro eletrônico comandando o sistema nervoso, a mecânica e a termodinâmica ficariam cegas.',
        },
      ],
    },
    {
      id: 'inspecao-cerebro-aula6',
      tipo: 'inspecao',
      titulo: 'Inspeção Sistêmica — O Corpo e o Sistema Nervoso do TVR Ultra',
      enunciado: 'Observe o infográfico da Aula 06 e aponte a síntese **correta** sobre a arquitetura de inteligência do TVR Ultra:',
      imagem: '/images/academia/vrf/aula06/infografico.jpg',
      legendaImagem: 'Infográfico Aula 06 — O Cérebro do TVR Ultra',
      pontos: [
        {
          id: 'p1',
          rotulo: 'O sistema atua como um corpo completo com sistema nervoso próprio, onde a PCB principal se comunica com compressores e válvulas para decisões seguras.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Perfeito! Enxergar o equipamento como um organismo vivo integrado muda completamente o seu nível de diagnóstico.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Você aprenderá a visualizar o sistema como um corpo completo, com seu próprio sistema nervoso, e entenderá como a Placa de Circuito Impresso Principal (PCB) toma decisões cruciais.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'A PCB principal serve apenas para acender os LEDs de enfeite, enquanto as válvulas abrem por gravidade.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'As válvulas eletrônicas e compressores Inverter respondem diretamente às decisões cruciais da PCB principal!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-estagnacao',
      tipo: 'filosofia',
      titulo: 'O Movimento Consciente contra a Estagnação',
      principio: 'Estagnação é o inimigo da vida mecânica: um sistema inteligente sabe quando economizar fôlego e quando acelerar para manter todo o organismo saudável.',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Tanto na oficina quanto dentro da tubulação de um VRF, ficar parado demais no mesmo ritmo acomoda os problemas nas curvas.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'A inteligência da **PCB** nos ensina isso: monitorar os sinais vitais e agir antes que o equilíbrio se perca.',
        },
      ],
    },
    {
      id: 'quiz-comunicacao-pcb',
      tipo: 'quiz',
      enunciado: 'De acordo com a Aula 06, o que garante que o sistema VRF TVR Ultra vá além da mecânica bruta e opere de maneira eficiente e segura?',
      opcoes: [
        {
          id: 'a',
          texto: 'A tomada de decisões da Placa de Circuito Impresso Principal (PCB) em comunicação direta com compressores e válvulas.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! É a sinapse entre o cérebro eletrônico (**PCB**) e os atuadores (**compressores e válvulas**) que garante eficiência e segurança.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Descubra como a comunicação entre a PCB e os componentes como compressores e válvulas garante o funcionamento eficiente e seguro do equipamento.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'O uso de tubulações de plástico flexível sem isolamento.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'VRF trabalha com cobre de alta pressão e controle eletrônico fino pela PCB!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'A ausência total de sensores e placas eletrônicas.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'neutro',
              texto: 'Ao contrário: é justamente o cérebro eletrônico que comanda toda a operação do TVR Ultra.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-pronto-mapa',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Agora que já entendi o cérebro e o sistema nervoso, quero aprender a ler aquele mapa elétrico cheio de fios da tampa da condensadora!',
    },
    {
      id: 'fala-simon-detetive',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Pois prepara a lupa, porque na Aula 07 nós vamos virar detetives das quatro famílias do diagrama elétrico e caçar o famoso **Erro E2**!',
    },
    {
      id: 'fala-bia-apoio',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'bem-humorado',
      texto: 'Sem trocar peça no escuro, hein Juninho! Método científico na veia.',
    },
    {
      id: 'fala-juninho-resumo-corpo',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Gostei dessa visão de enxergar o **TVR Ultra** como um corpo completo, onde a **PCB** é o cérebro e os fios são os nervos.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Você aprenderá a visualizar o sistema como um corpo completo, com seu próprio sistema nervoso, e entenderá como a Placa de Circuito Impresso Principal (PCB) toma decisões cruciais.',
      },
    },
    {
      id: 'fala-simon-harmonia-corpo',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Quando o técnico entende o cérebro eletrônico, ele sabe que qualquer sintoma mecânico no compressor ou na válvula passa primeiro pela decisão da placa.',
    },
    {
      id: 'fala-marta-cafe-oficina',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'animado',
      texto: 'E o cérebro do técnico também precisa de combustível: passei um café fresquinho aqui no balcão pra vocês!',
    },
    {
      id: 'ref-conteudo-6',
      tipo: 'referencia',
      texto: 'Explore os slides completos sobre o cérebro eletrônico do TVR Ultra na aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Você aprenderá a visualizar o sistema como um corpo completo, com seu próprio sistema nervoso, e entenderá como a Placa de Circuito Impresso Principal (PCB) toma decisões cruciais. Descubra como a comunicação entre a PCB e os componentes como compressores e válvulas garante o funcionamento eficiente e seguro do equipamento.',
      },
      pontos: [
        '**Visão de organismo completo:** enxergue o VRF além da mecânica, integrando termodinâmica e sistema nervoso eletrônico.',
        '**Cérebro de comando:** a **Placa de Circuito Impresso Principal (PCB)** analisa variáveis e toma decisões cruciais em tempo real.',
        '**Sinergia de atuadores:** a comunicação contínua entre a **PCB**, os **compressores** e as **válvulas** garante operação segura e eficiente.',
      ],
      proxima: 'Na Aula 07 entraremos no Guia do Detetive TVR Ultra: leitura de mapas elétricos por famílias e rastreamento do Erro E2 nos cabos P, Q e E.',
    },
  ],
};
