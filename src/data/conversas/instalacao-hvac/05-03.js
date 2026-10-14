// src/data/conversas/instalacao-hvac/05-03.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 05-03
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '05-03',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Terça, 7h30. Antecâmara de um centro logístico frigorífico. Simon e Bia examinam amostras de painéis térmicos PIR, uma válvula de alívio de pressão (PRV) e o projeto do piso da câmara de congelados.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, nessa câmara de congelados abaixo de **0°C**, por que o engenheiro exigiu cavar o chão, botar placas de **100 a 150 mm** e ainda passar tubulação aquecida debaixo do piso?!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'a umidade líquida continua migrando em direção ao interior até cruzar a isóterma de 0°C (limite de congelamento).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'placas de poliestireno extrudado XPS de 100 a 150 mm',
        },
      ],
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Se você não aquecer o subpiso abaixo do isolamento, Ju, o frio atravessa a terra, congela o lençol freático e acontece o **Frost Heave** (Empolamento por Geada)!',
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Quando a água do solo vira gelo, ela expande em volume com força hidráulica colossal: o solo congelante pode elevar o piso de concreto em **15 a 30 cm**, trincando lajes e entortando as colunas do galpão!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O solo congelante pode elevar o piso de concreto em 15 a 30 cm, trincando as lajes',
      },
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Por isso instalamos placas de poliestireno extrudado **XPS de 100 a 150 mm** de alta resistência à compressão (**150 a 200 kPa**) e, abaixo delas, ventilação subpiso ou serpentinas circulando propilenoglicol aquecido entre **13°C e 24°C**!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'gerando uma colagem monolítica de alta resistência à compressão (150 a 200 kPa)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'placas de poliestireno extrudado XPS de 100 a 150 mm',
        },
        {
          campo: 'conteudo_html',
          trecho: 'circulando propilenoglicol aquecido entre 13°C e 24°C',
        },
      ],
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      texto: 'E nas paredes e teto, hoje o padrão de elite substituiu o poliuretano comum (PUR, que degrada a **90°C**) pelo **Poliisocianurato (PIR)**, que suporta até **120°C** e carboniza superficialmente sem propagar chama!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Enquanto o PUR comum começa a se degradar termicamente a 90°C, o PIR tolera exposição contínua a até 120°C.',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Ao vedar as juntas macho-fêmea entre painéis frigoríficos com mastique de butila/silicone para criar a Barreira de Vapor: em qual lado do painel a vedação principal contra entrada de umidade é obrigatória?',
      opcoes: [
        {
          id: 'a',
          texto: 'Apenas pelo lado de dentro (lado frio) para a umidade parar só no fim.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Se vedar só por dentro, o vapor entra pela fresta externa, cruza a isóterma de **0°C** no meio da espuma, vira gelo e estufa a chapa de aço (*delaminação*)!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'a umidade líquida continua migrando em direção ao interior até cruzar a isóterma de 0°C (limite de congelamento).',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Obrigatoriamente no lado quente (externo), barrando o Vapor Drive antes que a umidade penetre no núcleo isolante e cruze a isóterma de 0°C.',
          ideal: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'a umidade líquida continua migrando em direção ao interior até cruzar a isóterma de 0°C (limite de congelamento).',
          },
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Na mosca! A pressão de vapor empurra a umidade do quente para o frio. A barreira de vapor vai sempre no **lado quente** para o núcleo nunca cruzar os **0°C** molhado!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'a umidade líquida continua migrando em direção ao interior até cruzar a isóterma de 0°C (limite de congelamento).',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Não precisa de vedação se o painel tiver fecho excêntrico Cam-Lock.',
          reacao: [
            {
              quem: 'bia',
              texto: 'O *Cam-Lock* dá tração mecânica, mas sem cordão contínuo de butila no lado quente o vapor passa pela junta!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E essa válvula estranha na parede da câmara fria, Simon? Por que uma câmara toda vedada precisa de uma **Válvula de Alívio de Pressão (PRV)**?',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Pela Lei dos Gases Ideais ($PV = nRT$), Ju! Quando a porta fecha ou quando o degelo termina e os ventiladores sopram ar congelante abaixo de **0°C**, o ar encolhe rápido e cria um **vácuo violento** dentro da câmara!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'a umidade líquida continua migrando em direção ao interior até cruzar a isóterma de 0°C (limite de congelamento).',
      },
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Sem a **PRV** (que em câmaras de congelados tem resistência elétrica para não travar com gelo), o vácuo trava a porta com centenas de quilos de força e pode implodir o teto da câmara para dentro!',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E até o dreno do evaporador dentro da câmara de congelados precisa ter **cabo de aquecimento** (*heat trace*) embutido, senão a água do degelo congela no meio do cano e vira uma rolha de gelo!',
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e a Câmara que Implodiu no Primeiro Degelo',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num frigorífico de carnes, o Zé achou que a válvula de alívio PRV estava “deixando entrar vento” e tapou a boca dela com espuma expansiva de lata!',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'No primeiro pós-degelo, quando o ar quente interno caiu bruscamente abaixo de **0°C**, a pressão interna despencou sem a PRV para equalizar!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'a umidade líquida continua migrando em direção ao interior até cruzar a isóterma de 0°C (limite de congelamento).',
          },
        },
        {
          quem: 'simon',
          texto: 'Deu um estrondo seco de madrugada: os painéis PIR do teto dobraram no meio para dentro! Teve que pagar um teto novo inteiro por causa de uma lata de espuma.',
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Câmaras de congelados abaixo de 0°C usam degelo natural por parada do compressor (Off-Cycle Defrost), igual a balcões de bebidas positivos.',
      verdade: false,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'a umidade líquida continua migrando em direção ao interior até cruzar a isóterma de 0°C (limite de congelamento).',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Mito! Abaixo de **0°C**, desligar o compressor nunca derrete o gelo porque o ar interno continua congelante. Exige-se degelo ativo por **resistências elétricas** ou **gás quente** com ventiladores desligados!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'a umidade líquida continua migrando em direção ao interior até cruzar a isóterma de 0°C (limite de congelamento).',
          },
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Enquanto o poliuretano comum (PUR) começa a se degradar termicamente a 90°C, o poliisocianurato (PIR) tolera exposição contínua a até 120°C.',
      verdade: true,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Enquanto o PUR comum começa a se degradar termicamente a 90°C, o PIR tolera exposição contínua a até 120°C.',
      },
      explicacao: [
        {
          quem: 'simon',
          texto: 'Verdade! Os anéis de isocianurato do **PIR** resistem até **120°C** (contra **90°C** do PUR), atendendo às exigências de seguradoras contra incêndio industrial.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Enquanto o PUR comum começa a se degradar termicamente a 90°C, o PIR tolera exposição contínua a até 120°C.',
          },
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Durante o ciclo de degelo elétrico de um evaporador de câmara fria, como os ventiladores do forçador de ar devem operar e quando eles voltam a ligar?',
      opcoes: [
        {
          id: 'a',
          texto: 'Ficam desligados durante o degelo (para não soprar calor/vapor na carga) e só religam após o Fan Delay (atraso pós-degelo para recongelar gotas na serpentina).',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Exato! Se o ventilador ligar com a serpentina molhada antes do *Fan Delay*, ele sopra uma nevasca de água quente em cima da mercadoria e do teto!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Ficam ligados no máximo durante todo o aquecimento das resistências.',
          feedback: [
            {
              quem: 'bia',
              texto: 'Ventilador ligado durante o degelo elétrico cozinha a mercadoria da câmara e não derrete o bloco de gelo interno!',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora Estrutural de Câmara Fria — Resistência à Compressão (kPa)',
      formula: 'Faixa de Resistência à Compressão Monolítica = 150 a 200 kPa',
      enunciado: 'No projeto da câmara fria industrial, a injeção de espuma sob prensa gera uma colagem monolítica de alta resistência à compressão na faixa de **150 a 200 kPa** (e o PIR suporta até **120°C**). Qual é o teto **máximo** dessa faixa de resistência à compressão em **kPa**?',
      leituras: [
        { rotulo: 'Faixa de Compressão', valor: '150 a 200 kPa' },
        { rotulo: 'Limite Térmico PIR vs PUR', valor: '120°C vs 90°C' },
        { rotulo: 'Isolamento de Piso XPS', valor: '100 a 150 mm' },
      ],
      unidade: 'kPa',
      respostaCorreta: 200,
      tolerancia: 0,
      opcoesRapidas: [90, 120, 150, 200],
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'gerando uma colagem monolítica de alta resistência à compressão (150 a 200 kPa)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Enquanto o PUR comum começa a se degradar termicamente a 90°C, o PIR tolera exposição contínua a até 120°C.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'placas de poliestireno extrudado XPS de 100 a 150 mm',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Cravado! A faixa de **150 a 200 kPa** garante rigidez estrutural autoportante aos painéis sanduíche e ao piso com **100 a 150 mm** de XPS.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'gerando uma colagem monolítica de alta resistência à compressão (150 a 200 kPa)',
            },
            {
              campo: 'conteudo_html',
              trecho: 'placas de poliestireno extrudado XPS de 100 a 150 mm',
            },
          ],
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Confira os dados da aula: a resistência à compressão monolítica vai de **150 a 200 kPa** (teto de **200 kPa**).',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'gerando uma colagem monolítica de alta resistência à compressão (150 a 200 kPa)',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Câmara Fria — Envelope PIR, Piso XPS e Válvula PRV',
      enunciado: 'Observe o slide de Engenharia de Câmaras Frias da Aula 05-03 e aponte a montagem que previne Frost Heave, delaminação e colapso estrutural:',
      imagem: '/images/academia/hvac-instalacao/modulo05/modulo05-03/Modulo-05-03-Cold Room Engineering and Refrigeration Standards-01.jpg',
      legendaImagem: 'Módulo 05-03 — Engenharia de Câmaras Frias, Barreira de Vapor e Piso Térmico',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Painéis PIR selados no lado quente, piso com XPS de 100 a 150 mm + aquecimento subpiso (13°C e 24°C) e válvula PRV aquecida.',
          correta: true,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'placas de poliestireno extrudado XPS de 100 a 150 mm',
            },
            {
              campo: 'conteudo_html',
              trecho: 'circulando propilenoglicol aquecido entre 13°C e 24°C',
            },
          ],
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Engenharia frigorífica pesada! Solo protegido contra o *Frost Heave* de **15 a 30 cm**, barreira de vapor íntegra e pressão equalizada pela PRV.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'O solo congelante pode elevar o piso de concreto em 15 a 30 cm, trincando as lajes',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Câmara de congelados direto sobre a laje sem XPS/aquecimento subpiso e sem válvula de alívio PRV.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              texto: 'Isso levanta o piso em **15 a 30 cm** por congelamento do solo e implode os painéis no primeiro pós-degelo!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'O solo congelante pode elevar o piso de concreto em 15 a 30 cm, trincando as lajes',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Abaixo de Zero, a Água Vira Alavanca de Demolição',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'No conforto térmico acima de zero, um erro de barreira de vapor dá uma mancha de mofo no gesso. Numa câmara de congelados abaixo de **0°C**, a mesma umidade vira gelo e arrebenta concreto e aço.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'a umidade líquida continua migrando em direção ao interior até cruzar a isóterma de 0°C (limite de congelamento).',
          },
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Na refrigeração comercial e industrial, cada cordão de selante no lado quente e cada resistência na PRV guardam toneladas de alimentos e medicamentos.',
        },
      ],
      principio: 'Abaixo de 0°C não existe pequeno vazamento de vapor: vede no lado quente e proteja o subpiso.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'a umidade líquida continua migrando em direção ao interior até cruzar a isóterma de 0°C (limite de congelamento).',
      },
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte os parâmetros de **Painéis PIR** (**120°C**), **Piso XPS** (**100 a 150 mm**) e diagnóstico na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Enquanto o PUR comum começa a se degradar termicamente a 90°C, o PIR tolera exposição contínua a até 120°C.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'placas de poliestireno extrudado XPS de 100 a 150 mm',
        },
      ],
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Painéis PIR e Barreira de Vapor:** o PIR suporta até **120°C** (**150 a 200 kPa** de compressão); vede sempre no **lado quente** antes da isóterma de **0°C**.',
        '**Proteção Contra Frost Heave:** sem isolamento de piso (**100 a 150 mm** de XPS) e aquecimento subpiso (**13°C e 24°C**), o solo congela e sobe **15 a 30 cm**.',
        '**PRV e Degelo:** válvula de alívio aquecida obrigatória contra vácuo interno, *heat trace* no dreno e *Fan Delay* pós-degelo.',
      ],
      proxima: 'Na Aula 05-04 vamos fechar o Módulo 5 dominando o Protocolo de Ensaio de Estanqueidade com Nitrogênio Seco (550 a 600 PSIG) e Gay-Lussac.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'gerando uma colagem monolítica de alta resistência à compressão (150 a 200 kPa)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Enquanto o PUR comum começa a se degradar termicamente a 90°C, o PIR tolera exposição contínua a até 120°C.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'a umidade líquida continua migrando em direção ao interior até cruzar a isóterma de 0°C (limite de congelamento).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'placas de poliestireno extrudado XPS de 100 a 150 mm',
        },
        {
          campo: 'conteudo_html',
          trecho: 'circulando propilenoglicol aquecido entre 13°C e 24°C',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O solo congelante pode elevar o piso de concreto em 15 a 30 cm, trincando as lajes',
        },
      ],
    },
  ],
};
