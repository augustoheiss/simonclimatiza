// src/data/conversas/sistemavrf/3.js
// Roteiro "Papo de Balcão" — Dominando o Sistema VRF (TVR Ultra) · Aula 03

export default {
  schema: 1,
  cursoId: 'sistemavrf',
  aulaId: '3',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-abertura',
      tipo: 'cena',
      texto: 'Café no QG Técnico às 07h15. Em cima da bancada, Simon colocou um compressor cortado ao meio mostrando o virabrequim e os mancais.',
    },
    {
      id: 'fala-juninho-impacto',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'Nossa, Simon! Olha o estado desse virabrequim desgastado e desses mancais destruídos! O que aconteceu com esse compressor?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O Preço da Falha: Imagens reais do que acontece quando o sistema sofre com a falta de lubrificação (virabrequins desgastados, mancais destruídos e filtros entupidos).',
      },
    },
    {
      id: 'fala-simon-preco-falha',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Esse é o preço real da falta de lubrificação, Juninho: **virabrequins desgastados, mancais destruídos e filtros entupidos**. Hoje vamos entrar nas artérias de cobre do **TVR Ultra**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O Preço da Falha: Imagens reais do que acontece quando o sistema sofre com a falta de lubrificação (virabrequins desgastados, mancais destruídos e filtros entupidos).',
      },
    },
    {
      id: 'fala-bia-agentes-transito',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Para o fluido e o óleo circularem sem colapso, temos três **Agentes de Trânsito**: o **separador de óleo**, a **válvula de 4 vias** e as **válvulas de expansão**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Os Agentes de Trânsito: O funcionamento visual do separador de óleo, da válvula de 4 vias e das válvulas de expansão.',
      },
    },
    {
      id: 'escolha-inversao-ciclo',
      tipo: 'escolha',
      pergunta: 'O cliente mudou o sistema do modo de resfriamento para o modo de aquecimento no inverno. Qual componente atua como o guarda de trânsito que inverte o sentido do fluxo do gás na unidade externa?',
      opcoes: [
        {
          id: 'a',
          texto: 'O filtro secador da linha de líquido, que gira ao contrário.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'risada',
              texto: 'Filtro secador não tem motor nem muda de lado, Juninho! Quem comanda a inversão de rota é uma válvula dedicada.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'A válvula de 4 vias, que redireciona a descarga do compressor para inverter a lógica entre resfriamento e aquecimento.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! O compressor continua bombeando para o mesmo lado; quem inverte a rota entre resfriamento e aquecimento é a **válvula de 4 vias**.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Os Agentes de Trânsito: O funcionamento visual do separador de óleo, da válvula de 4 vias e das válvulas de expansão.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'O compressor Inverter, que passa a girar de marcha à ré para chupar pela descarga.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Compressor scroll não comprime girando ao contrário! A inversão do ciclo é feita na **válvula de 4 vias**.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-simon-jornadas',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'neutro',
      texto: 'No modo de resfriamento, o gás quente sai do compressor, passa pelo separador de óleo e pela válvula de 4 vias rumo ao trocador externo.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Jornadas Climáticas: O fluxo exato do modo de resfriamento e como o sistema inverte sua lógica no modo de aquecimento.',
      },
    },
    {
      id: 'fala-bia-aquecimento',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Já no modo de aquecimento, a **válvula de 4 vias** inverte a lógica: manda o gás quente direto para as unidades internas aquecerem as salas!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Jornadas Climáticas: O fluxo exato do modo de resfriamento e como o sistema inverte sua lógica no modo de aquecimento.',
      },
    },
    {
      id: 'fala-juninho-oleo-perdido',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Mas Bia, mesmo com o separador de óleo lá na saída, um pouquinho de óleo sempre escapa junto com o refrigerante para a tubulação do prédio, né?',
    },
    {
      id: 'fala-simon-tsunami',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Sempre escapa uma névoa! E é aí que entra o **Tsunami de Refrigerante**: de tempos em tempos, o sistema lava a tubulação para resgatar o óleo perdido e salvar o compressor.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O Tsunami de Refrigerante: Como o sistema lava a tubulação para resgatar o óleo perdido e salvar o compressor.',
      },
    },
    {
      id: 'fala-bia-valvulas-expansao',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Durante esse ciclo de lavagem, as **válvulas de expansão** trabalham coordenadas com o compressor para criar velocidade de arraste suficiente e trazer o óleo de volta pra casa.',
    },
    {
      id: 'causo-mancal-seco',
      tipo: 'causo',
      titulo: 'O Fantasma do Chiado na Madrugada e o Compressor Seco',
      falas: [
        {
          quem: 'simon',
          emocao: 'bem-humorado',
          texto: 'Num hotel, o vigia noturno cismou que o barulho do **Tsunami de Refrigerante** lavando a linha de madrugada era defeito e desligava o disjuntor toda noite!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O Tsunami de Refrigerante: Como o sistema lava a tubulação para resgatar o óleo perdido e salvar o compressor.',
          },
        },
        {
          quem: 'juninho',
          emocao: 'alerta',
          texto: 'Ele abortava o retorno de óleo na marra?!',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Abortava! O óleo foi ficando preso nos andares até o compressor rodar seco. Quando abrimos a carcaça, vimos exatamente aquilo: **virabrequins desgastados, mancais destruídos e filtros entupidos**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O Preço da Falha: Imagens reais do que acontece quando o sistema sofre com a falta de lubrificação (virabrequins desgastados, mancais destruídos e filtros entupidos).',
          },
        },
      ],
    },
    {
      id: 'mito-oleo-parado',
      tipo: 'mitoVerdade',
      afirmacao: 'Como o TVR Ultra possui separador de óleo na descarga, o sistema nunca precisa fazer ciclos de lavagem da tubulação para resgatar óleo.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! Mesmo com um ótimo separador de óleo, uma fração migra para a rede. Por isso existe o **Tsunami de Refrigerante** que lava a tubulação e resgata o óleo.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O Tsunami de Refrigerante: Como o sistema lava a tubulação para resgatar o óleo perdido e salvar o compressor.',
          },
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Sem essa varredura periódica, o cárter seca e os mancais sofrem desgaste irreversível.',
        },
      ],
    },
    {
      id: 'inspecao-raio-x-aula3',
      tipo: 'inspecao',
      titulo: 'Inspeção de Raio-X — Agentes de Trânsito e Falha de Lubrificação',
      enunciado: 'Com base no raio-X termodinâmico da Aula 03, aponte qual conjunto representa os **Agentes de Trânsito** do fluido e a consequência direta da falta de lubrificação:',
      imagem: '/images/academia/vrf/aula03/infografico.jpg',
      legendaImagem: 'Infográfico Aula 03 — Coração Termodinâmico do TVR Ultra',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Agentes: separador de óleo, válvula de 4 vias e válvulas de expansão. Falha: virabrequins desgastados, mancais destruídos e filtros entupidos.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Visão de raio-X afiada! Você domina tanto quem controla o tráfego do fluido quanto a autópsia mecânica da falta de óleo.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Os Agentes de Trânsito: O funcionamento visual do separador de óleo, da válvula de 4 vias e das válvulas de expansão.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Agentes: carenagem plástica e calços de madeira. Falha: aumento da eficiência energética do compressor.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Falta de lubrificação jamais aumenta eficiência; ela destrói virabrequins e mancais!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-orgaos-silenciosos',
      tipo: 'filosofia',
      titulo: 'O Sangue que Precisa Voltar ao Coração',
      principio: 'O refrigerante é o fôlego que leva o frio, mas o óleo é o sangue do compressor: toda viagem pela tubulação precisa ter passagem de volta garantida.',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Olhar para uma peça fundida na bancada ensina humildade. Aquele aço temperado do virabrequim perdeu a luta porque faltou uma película microscópica de óleo.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Por isso entender o ciclo de retorno de óleo é respeitar a própria fisiologia da máquina.',
        },
      ],
    },
    {
      id: 'quiz-tsunami-oleo',
      tipo: 'quiz',
      enunciado: 'Na Aula 03, o que é o fenômeno descrito como o "Tsunami de Refrigerante" no sistema TVR Ultra?',
      opcoes: [
        {
          id: 'a',
          texto: 'A rotina em que o sistema impulsiona o fluxo para lavar a tubulação, resgatar o óleo perdido e salvar o compressor.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Na mosca! Essa onda controlada varre as linhas de cobre trazendo o lubrificante de volta ao cárter.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'O Tsunami de Refrigerante: Como o sistema lava a tubulação para resgatar o óleo perdido e salvar o compressor.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Um vazamento catastrófico de gás quando a tubulação rompe.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Não é vazamento! É o ciclo inteligente de retorno de óleo lavando internamente a tubulação.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'A lavagem externa da serpentina com lavadora de alta pressão.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'neutro',
              texto: 'O tsunami acontece por dentro das artérias de cobre com o próprio fluido refrigerante!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-fechamento',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Quando o cliente perguntar por que a máquina deu uma acelerada rápida sozinha e fez barulho de fluido correndo, já sei explicar o Tsunami de proteção!',
    },
    {
      id: 'fala-bia-proxima',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'E sabe quem decide a hora exata de fazer esse ciclo e monitora a febre do compressor? A placa principal, que veremos na Aula 04!',
    },
    {
      id: 'fala-simon-fecho',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'bem-humorado',
      texto: 'Guarda esse virabrequim na prateleira pra lembrar todo dia por que a gente cuida do óleo como se fosse ouro.',
    },
    {
      id: 'ref-conteudo-3',
      tipo: 'referencia',
      texto: 'Reveja os diagramas de fluxo de resfriamento, aquecimento e retorno de óleo na aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Os Agentes de Trânsito: O funcionamento visual do separador de óleo, da válvula de 4 vias e das válvulas de expansão.',
      },
      pontos: [
        '**Agentes de Trânsito:** separador de óleo, válvula de 4 vias e válvulas de expansão dirigem o fluxo termodinâmico.',
        '**Tsunami de Refrigerante:** o sistema lava periodicamente a tubulação para resgatar o óleo perdido e salvar o compressor.',
        '**Preço da falha de lubrificação:** operar sem retorno de óleo gera virabrequins desgastados, mancais destruídos e filtros entupidos.',
      ],
      proxima: 'Na Aula 04 vamos decodificar a mente do TVR Ultra: revezamento de compressores, degelo e os escudos P1, P4 e P5.',
    },
  ],
};
