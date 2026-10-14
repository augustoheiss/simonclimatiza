// src/data/conversas/tvrpro/4.js
// Roteiro "Papo de Balcão" — Instalação e Comissionamento TVR Pro DC Inverter · Aula 04

export default {
  schema: 1,
  cursoId: 'tvrpro',
  aulaId: '4',
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
      texto: 'Bancada de brasagem na oficina. Cilindro de nitrogênio com regulador fino ao lado de varetas de liga BCUP e um parafuso de expansão M12.',
    },
    {
      id: 'fala-simon-tolerancia-zero',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Pauta de hoje, Juninho: **tolerância zero**! Na instalação mecânica e na brasagem do **TVR Pro**, um erro milimétrico não dá falha de software — dá destruição física!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Hoje, nossa pauta é a tolerância zero. Abordaremos a fronteira crítica onde o sucesso e a perda da garantia são definidos: a instalação mecânica e a brasagem do sistema TVR Pro.',
      },
    },
    {
      id: 'fala-bia-ancoragem-3-roscas',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Começando pelo alicerce: base de concreto de no mínimo **200mm** e ancoragem dinâmica com **4 parafusos de expansão M12**, apertados até que exatamente **3 roscas** fiquem visíveis!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A base da unidade externa (ODU) precisa de uma fundação de concreto sólido com no mínimo 200mm de altura e nivelamento perfeito.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A ancoragem dinâmica exige o uso de 4 parafusos de expansão M12, apertados de forma que exatamente 3 roscas fiquem visíveis.',
        },
      ],
    },
    {
      id: 'fala-juninho-neve-negra',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'Até a contagem das **3 roscas** no parafuso **M12** é cravada! E na hora de soldar os tubos de cobre, qual é o "inimigo invisível" que vocês tanto falam?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A ancoragem dinâmica exige o uso de 4 parafusos de expansão M12, apertados de forma que exatamente 3 roscas fiquem visíveis.',
      },
    },
    {
      id: 'fala-simon-oxido-cobre',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'É a **"neve negra"** de óxido! Quando o cobre é aquecido sem proteção, ele oxida por dentro, e essa carepa viaja pelo sistema destruindo o compressor.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Quando o cobre é aquecido sem proteção, ele oxida. Essa "neve negra" de óxido viaja pelo sistema e destrói os componentes internos do compressor.',
      },
    },
    {
      id: 'escolha-pressao-nitrogenio-brasagem',
      tipo: 'escolha',
      pergunta: 'Para criar o escudo obrigatório contra a "neve negra" durante a brasagem dos tubos de cobre do TVR Pro, como você deve regular o fluxo contínuo de nitrogênio?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O escudo obrigatório é o fluxo contínuo de nitrogênio a uma pressão minuciosa de 0.02 a 0.03 MPa. Pressões fora dessa faixa causam porosidade ou permitem a oxidação.',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Soldar sem nitrogênio e soprar com a boca depois que esfriar.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Soprar com a boca joga saliva e não tira a carepa preta que já grudou no cobre quente!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Manter fluxo contínuo de nitrogênio a uma pressão minuciosa de 0.02 a 0.03 MPa durante toda a brasagem.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Precisão cirúrgica! O fluxo contínuo de nitrogênio entre **0.02 a 0.03 MPa** expulsa o oxigênio sem causar porosidade na solda.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Fechar a outra ponta do tubo e injetar nitrogênio em altíssima pressão enquanto derrete a solda.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Pressão alta demais sopra a poça de solda líquida e cria porosidade! A faixa exata é **0.02 a 0.03 MPa**.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-bia-alerta-quimico-fluxo',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'E grava este alerta químico fatal: fluxos à base de **cloro e flúor** destroem instantaneamente o **óleo POE** do compressor! Na solda cobre-cobre com liga **BCUP**, o uso de fluxo é **proibido**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Faremos um alerta crítico fatal: fluxos à base de cloro e flúor destroem instantaneamente o óleo POE do compressor. Na solda de cobre com cobre usando liga BCUP, o uso de fluxo é proibido.',
      },
    },
    {
      id: 'fala-simon-valvula-servico',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'E no fechamento mecânico: abra a **válvula de serviço** até o fim do curso sem forçar além do batente e respeite a matriz de torque para evitar vazamentos crônicos.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Finalizaremos detalhando a válvula de serviço, a forma correta de abertura (até o fim do curso, sem forçar) e a matriz de torque, pois válvulas mal apertadas geram vazamentos crônicos e silenciosos.',
      },
    },
    {
      id: 'fala-juninho-bcup-autofundente',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Caramba! Eu já vi instalador mergulhando vareta foscoper **BCUP** no potinho de fluxo branco antes de soldar cobre com cobre!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Na solda de cobre com cobre usando liga BCUP, o uso de fluxo é proibido.',
      },
    },
    {
      id: 'causo-fluxo-no-poe',
      tipo: 'causo',
      titulo: 'O Potinho de Fluxo que Acidificou o Óleo POE em Três Meses',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num prédio comercial, o soldador cismou de passar pasta de fluxo com cloro e flúor em todas as juntas de cobre com cobre usando liga **BCUP**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'fluxos à base de cloro e flúor destroem instantaneamente o óleo POE do compressor. Na solda de cobre com cobre usando liga BCUP, o uso de fluxo é proibido.',
          },
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'O resíduo entrou na linha e reagiu direto com o óleo sintético POE!',
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Em noventa dias o **óleo POE** virou um caldo ácido que comeu o verniz do compressor! Cobre com cobre na liga **BCUP** já tem fósforo autofundente: zero fluxo e nitrogênio a **0.02 a 0.03 MPa**!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O escudo obrigatório é o fluxo contínuo de nitrogênio a uma pressão minuciosa de 0.02 a 0.03 MPa.',
          },
        },
      ],
    },
    {
      id: 'mito-fluxo-bcup',
      tipo: 'mitoVerdade',
      afirmacao: 'Na brasagem de tubos de cobre com cobre utilizando liga BCUP no TVR Pro, deve-se aplicar bastante fluxo químico à base de cloro e flúor para melhorar a aderência.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito fatal! Fluxos à base de cloro e flúor destroem instantaneamente o óleo POE do compressor. Na solda de cobre com cobre usando liga **BCUP**, o uso de fluxo é proibido!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Faremos um alerta crítico fatal: fluxos à base de cloro e flúor destroem instantaneamente o óleo POE do compressor. Na solda de cobre com cobre usando liga BCUP, o uso de fluxo é proibido.',
          },
        },
        {
          quem: 'simon',
          emocao: 'neutro',
          texto: 'O fósforo presente na própria liga **BCUP** já cumpre o papel desoxidante no cobre-cobre sem contaminar a química do sistema.',
        },
      ],
    },
    {
      id: 'calc-pressao-n2-brasagem',
      tipo: 'calculadora',
      titulo: 'Regulador de Purga — Teto da Faixa de Nitrogênio na Brasagem',
      formula: 'Pressão de Nitrogênio Passante = 0.02 a 0.03 MPa',
      enunciado: 'Pela Aula 04, o escudo obrigatório durante a brasagem exige fluxo contínuo de nitrogênio na faixa de **0.02 a 0.03 MPa**. Qual é o valor superior dessa faixa em **MPa**?',
      leituras: [
        { rotulo: 'Faixa Obrigatória N2', valor: '0.02 a 0.03 MPa' },
        { rotulo: 'Ancoragem ODU', valor: '4 parafusos M12 (3 roscas)' },
      ],
      unidade: 'MPa',
      respostaCorreta: 0.03,
      tolerancia: 0.005,
      opcoesRapidas: [0.01, 0.03, 0.5, 4.2],
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O escudo obrigatório é o fluxo contínuo de nitrogênio a uma pressão minuciosa de 0.02 a 0.03 MPa. Pressões fora dessa faixa causam porosidade ou permitem a oxidação.',
      },
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Exato! O teto da faixa de brasagem é **0.03 MPa** (dentro do intervalo **0.02 a 0.03 MPa**), evitando tanto a oxidação quanto a porosidade.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O escudo obrigatório é o fluxo contínuo de nitrogênio a uma pressão minuciosa de 0.02 a 0.03 MPa. Pressões fora dessa faixa causam porosidade ou permitem a oxidação.',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Atenção à vírgula: na brasagem a pressão é baixinha, de **0.02 a 0.03 MPa** (logo, o limite superior é **0.03 MPa**)!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O escudo obrigatório é o fluxo contínuo de nitrogênio a uma pressão minuciosa de 0.02 a 0.03 MPa.',
          },
        },
      ],
    },
    {
      id: 'inspecao-precisao-aula4',
      tipo: 'inspecao',
      titulo: 'Inspeção de Tolerância Zero — Ancoragem, Brasagem e Química',
      enunciado: 'Observe o infográfico da Aula 04 e aponte a combinação **correta** das regras de instalação mecânica e brasagem do TVR Pro:',
      imagem: '/images/academia/tvrpro/aula04/infografico.jpg',
      legendaImagem: 'Infográfico Aula 04 — Instalação Mecânica e Brasagem do TVR Pro',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A base da unidade externa (ODU) precisa de uma fundação de concreto sólido com no mínimo 200mm de altura e nivelamento perfeito.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A ancoragem dinâmica exige o uso de 4 parafusos de expansão M12, apertados de forma que exatamente 3 roscas fiquem visíveis.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O escudo obrigatório é o fluxo contínuo de nitrogênio a uma pressão minuciosa de 0.02 a 0.03 MPa.',
        },
      ],
      pontos: [
        {
          id: 'p1',
          rotulo: 'Base ≥200mm, 4 parafusos M12 com 3 roscas visíveis, brasagem com N2 a 0.02–0.03 MPa e proibição de fluxo na solda cobre-cobre com liga BCUP.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Tolerância zero aplicada com perfeição! Nem vibração na base, nem neve negra no tubo, nem cloro no óleo POE.',
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Apertar a válvula de serviço forçando além do fim do curso com chave grifo e soldar sem nitrogênio.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Forçar a válvula além do fim do curso danifica a sede de vedação, e soldar sem nitrogênio gera a neve negra de óxido!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-interior-invisivel',
      tipo: 'filosofia',
      titulo: 'A Honestidade do que Fica Dentro do Cobre',
      principio: 'Por fora da solda qualquer lixa dá brilho para a foto; por dentro do tubo, só o nitrogênio passante a 0.02–0.03 MPa garante que o compressor não vai engolir cinzas.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O escudo obrigatório é o fluxo contínuo de nitrogênio a uma pressão minuciosa de 0.02 a 0.03 MPa.',
      },
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Ninguém enxerga dentro do tubo depois de soldado, Juninho — ninguém, exceto o óleo POE e o compressor. Fazer brasagem com nitrogênio é um teste de caráter.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'A vida útil de dez ou quinze anos de um VRF é selada naquele minuto em que o técnico decide buscar o cilindro de nitrogênio em vez de acender o maçarico no atalho.',
        },
      ],
    },
    {
      id: 'quiz-tres-roscas-m12',
      tipo: 'quiz',
      enunciado: 'Para garantir a ancoragem dinâmica correta da unidade externa (ODU) do TVR Pro sem afrouxamento por vibração, como devem ser apertados os 4 parafusos de expansão M12?',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A base da unidade externa (ODU) precisa de uma fundação de concreto sólido com no mínimo 200mm de altura e nivelamento perfeito.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A ancoragem dinâmica exige o uso de 4 parafusos de expansão M12, apertados de forma que exatamente 3 roscas fiquem visíveis.',
        },
      ],
      opcoes: [
        {
          id: 'a',
          texto: 'De forma que exatamente 3 roscas fiquem visíveis acima da porca.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Na mosca! Exatamente **3 roscas** visíveis nos **4 parafusos de expansão M12** sobre a base de **200mm**.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Apenas encostados com a mão sem usar chave.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Sem o aperto preciso deixando 3 roscas visíveis, a vibração dinâmica afrouxa a fixação!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Presos com arame recozido de obra.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'neutro',
              texto: 'A ancoragem exige obrigatoriamente os 4 parafusos de expansão M12 na fundação de concreto.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-solda-limpa',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Olha o interior desse tubo que acabamos de brasar com nitrogênio a **0.02 a 0.03 MPa**: brilhando que nem espelho, zero neve negra!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O escudo obrigatório é o fluxo contínuo de nitrogênio a uma pressão minuciosa de 0.02 a 0.03 MPa.',
      },
    },
    {
      id: 'fala-simon-chamada-aula5',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Coisa linda! Agora que a tubulação está soldada, na Aula 05 vamos pro Comissionamento Físico Nível Master: pressão, vácuo e balança!',
    },
    {
      id: 'fala-bia-aviso-aula5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'bem-humorado',
      texto: 'E prepara a calculadora de compensação térmica porque na Aula 05 cada variação de temperatura faz diferença no manômetro!',
    },
    {
      id: 'ref-conteudo-tvr4',
      tipo: 'referencia',
      texto: 'Confira a matriz de torque, os detalhes de ancoragem M12 e brasagem na aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A base da unidade externa (ODU) precisa de uma fundação de concreto sólido com no mínimo 200mm de altura e nivelamento perfeito.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A ancoragem dinâmica exige o uso de 4 parafusos de expansão M12, apertados de forma que exatamente 3 roscas fiquem visíveis.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O escudo obrigatório é o fluxo contínuo de nitrogênio a uma pressão minuciosa de 0.02 a 0.03 MPa.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Faremos um alerta crítico fatal: fluxos à base de cloro e flúor destroem instantaneamente o óleo POE do compressor. Na solda de cobre com cobre usando liga BCUP, o uso de fluxo é proibido.',
        },
      ],
      pontos: [
        '**Ancoragem dinâmica precisa:** fundação de concreto de no mínimo **200mm** e **4 parafusos de expansão M12** com exatamente **3 roscas** visíveis.',
        '**Escudo contra a neve negra:** execute toda brasagem sob fluxo contínuo de nitrogênio entre **0.02 a 0.03 MPa**.',
        '**Química limpa e torque:** nunca use fluxo na solda cobre-cobre com liga **BCUP** (cloro e flúor destroem o **óleo POE**) e abra as válvulas de serviço sem forçar o fim de curso.',
      ],
      proxima: 'Na Aula 05 faremos o Comissionamento Físico Nível Master: golpe de aríete com nitrogênio seco, teste de estanqueidade com compensação térmica, vácuo profundo e carga líquida na balança.',
    },
  ],
};
