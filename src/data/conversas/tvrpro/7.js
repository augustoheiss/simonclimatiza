// src/data/conversas/tvrpro/7.js
// Roteiro "Papo de Balcão" — Instalação e Comissionamento TVR Pro DC Inverter · Aula 07

export default {
  schema: 1,
  cursoId: 'tvrpro',
  aulaId: '7',
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
      texto: 'Quadro de comando do Trane TVR Pro aberto. Bia segura uma chave de fenda com isolamento elétrico apontando para os seletores ENC1, ENC3 e S12.',
    },
    {
      id: 'fala-bia-main-board',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Hora de dar vida ao **TVR Pro**, Juninho! A Placa Principal (**Main Board**) tem três setores: Identidade de Hardware (chaves rotativas e DIP), Diagnóstico (**DSP1 e DSP2**) e Software (**SW3 a SW6**).',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A interface é dividida em três setores: Identidade de Hardware (as chaves rotativas e DIP), a Interface de Diagnóstico (os monitores digitais DSP1 e DSP2), e a Navegação de Software (os botões SW3 a SW6).',
      },
    },
    {
      id: 'fala-simon-enderecamento-frota',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'No endereçamento, o seletor **ENC1** define Mestre (0) ou Escravas (1 e 2), e a combinação da chave **S12** com o seletor **ENC3** informa a quantidade exata de internas (até **64 unidades**)!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'O seletor ENC1 define a hierarquia da unidade externa: Mestre (0) ou Escravas (1 e 2).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Para o sistema funcionar, o "cérebro" precisa saber o tamanho exato da sua frota. Utilizamos a combinação da chave S12 e do seletor ENC3 para informar ao sistema a quantidade exata de unidades internas conectadas, suportando o máximo de 64 unidades.',
        },
      ],
    },
    {
      id: 'fala-juninho-telemetria',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Que massa! E o que os displays digitais **DSP1 e DSP2** mostram quando a máquina está parada em standby e depois que ela decola?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Em estado de standby, os displays DSP1 e DSP2 mostram o endereço da unidade externa e o número de evaporadoras ativas na rede.',
      },
    },
    {
      id: 'fala-bia-dsp1-dsp2',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Em standby, **DSP1 e DSP2** mostram o endereço da externa e o número de evaporadoras ativas; em operação normal, viram tacômetros exibindo a rotação dos compressores (em Hz)!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Em estado de standby, os displays DSP1 e DSP2 mostram o endereço da unidade externa e o número de evaporadoras ativas na rede.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Durante a operação normal, esses mesmos displays se tornam tacômetros, exibindo a rotação dos compressores (em Hz) em tempo real.',
        },
      ],
    },
    {
      id: 'escolha-pre-aquecimento-12h',
      tipo: 'escolha',
      pergunta: 'É sexta-feira às 18h, você acabou de fechar a elétrica e o cliente exige que você dê partida nos compressores imediatamente para testar o gelo. Qual é o seu posicionamento pelo Checklist Pré-Voo da Aula 07?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A Regra de Ouro: A fonte de alimentação geral deve obrigatoriamente ser ligada 12 horas antes da partida. Isso permite o aquecimento do cárter, vaporizando o refrigerante misturado ao óleo e prevenindo um golpe de líquido letal para o compressor.',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Ligar e dar partida imediata nos compressores para agradar o cliente.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Partida a frio com refrigerante líquido misturado ao óleo do cárter provoca golpe de líquido letal para o compressor!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'A Regra de Ouro: A fonte de alimentação geral deve obrigatoriamente ser ligada 12 horas antes da partida. Isso permite o aquecimento do cárter, vaporizando o refrigerante misturado ao óleo e prevenindo um golpe de líquido letal para o compressor.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Cumprir a Regra de Ouro: energizar a alimentação geral obrigatoriamente 12 horas antes da partida para aquecer o cárter e vaporizar o refrigerante do óleo.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Postura firme de engenheiro! As **12 horas** de aquecimento do cárter são inegociáveis para expulsar o refrigerante líquido do óleo antes da partida.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'A Regra de Ouro: A fonte de alimentação geral deve obrigatoriamente ser ligada 12 horas antes da partida. Isso permite o aquecimento do cárter, vaporizando o refrigerante misturado ao óleo e prevenindo um golpe de líquido letal para o compressor.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Aquecer o cárter do compressor por fora com maçarico para economizar as 12 horas.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Maçarico na carcaça carboniza o óleo e derrete os chicotes! Quem aquece é a resistência de cárter durante **12 horas**.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'A Regra de Ouro: A fonte de alimentação geral deve obrigatoriamente ser ligada 12 horas antes da partida.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'fala-simon-megometro-valvulas',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'E antes mesmo de energizar no Checklist Pré-Voo: o teste de isolamento com **megômetro (500V DC)** deve atestar resistência superior a **2 MΩ**, e as válvulas devem estar **100%** abertas!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Antes da partida, o teste de isolamento do circuito com megômetro (500V DC) deve atestar resistência superior a 2 MΩ.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'As válvulas de gás e líquido devem estar 100% abertas.',
        },
      ],
    },
    {
      id: 'fala-bia-amaciamento-50h',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Depois da decolagem, lembre-se do Voo de Cruzeiro: a máquina requer **50 horas** de amaciamento mecânico contínuo para atingir a estabilidade termodinâmica total.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A máquina requer um período de 50 horas de amaciamento mecânico contínuo para atingir a estabilidade termodinâmica total, sendo normal um consumo de energia maior nessa primeira etapa.',
      },
    },
    {
      id: 'fala-juninho-cliques-partida',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E aqueles cliques de válvulas solenoides e ruídos repentinos na rampa de aceleração inicial? São normais também?',
    },
    {
      id: 'fala-simon-ruidos-normais',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Perfeitamente normais! O sucesso absoluto do comissionamento é alcançado quando a telemetria nos displays não apresenta nenhum código de erro.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O sucesso absoluto é alcançado quando a telemetria não apresentar nenhum código de erro.',
      },
    },
    {
      id: 'causo-contagem-frota-errada',
      tipo: 'causo',
      titulo: 'A Decolagem Abortada por Uma Evaporadora Esquecida no ENC3',
      falas: [
        {
          quem: 'simon',
          emocao: 'bem-humorado',
          texto: 'Num prédio de dez andares, o técnico cumpriu as **12 horas** de cárter, mediu mais de **2 MΩ** no megômetro (**500V DC**), mas na hora de partir a máquina não decolava de jeito nenhum!',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Antes da partida, o teste de isolamento do circuito com megômetro (500V DC) deve atestar resistência superior a 2 MΩ.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'A fonte de alimentação geral deve obrigatoriamente ser ligada 12 horas antes da partida.',
            },
          ],
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'O que estava travando a partida, Simon?',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Tinham trinta e duas internas instaladas na rede, mas na combinação da chave **S12** com o seletor **ENC3** ele configurou trinta e uma! Uma contagem incorreta da frota impede a decolagem.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Utilizamos a combinação da chave S12 e do seletor ENC3 para informar ao sistema a quantidade exata de unidades internas conectadas, suportando o máximo de 64 unidades. Uma contagem incorreta impedirá a decolagem.',
          },
        },
      ],
    },
    {
      id: 'mito-partida-sem-12h',
      tipo: 'mitoVerdade',
      afirmacao: 'Se as válvulas de gás e líquido estiverem 100% abertas e o megômetro (500V DC) indicar mais de 2 MΩ, não é necessário aguardar as 12 horas de alimentação ligada antes da partida.',
      verdade: false,
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Antes da partida, o teste de isolamento do circuito com megômetro (500V DC) deve atestar resistência superior a 2 MΩ.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'As válvulas de gás e líquido devem estar 100% abertas.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A Regra de Ouro: A fonte de alimentação geral deve obrigatoriamente ser ligada 12 horas antes da partida.',
        },
      ],
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! Mesmo com mais de **2 MΩ** no megômetro (**500V DC**) e válvulas **100%** abertas, é obrigatório energizar **12 horas** antes da partida para aquecer o cárter.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Antes da partida, o teste de isolamento do circuito com megômetro (500V DC) deve atestar resistência superior a 2 MΩ.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'As válvulas de gás e líquido devem estar 100% abertas.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'A Regra de Ouro: A fonte de alimentação geral deve obrigatoriamente ser ligada 12 horas antes da partida.',
            },
          ],
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Sem essas doze horas de pré-aquecimento, o refrigerante condensado no óleo causa golpe de líquido letal na partida.',
        },
      ],
    },
    {
      id: 'calc-isolamento-megger',
      tipo: 'calculadora',
      titulo: 'Checklist Pré-Voo — Isolamento Mínimo no Megômetro (500V DC)',
      formula: 'Teste com Megômetro (500V DC) > 2 MΩ',
      enunciado: 'Antes da partida do **TVR Pro**, o teste de isolamento do circuito elétrico com megômetro ajustado em **500V DC** deve atestar resistência superior a quantos Megaohms (**MΩ**)?',
      leituras: [
        { rotulo: 'Tensão de Teste Megger', valor: '500V DC' },
        { rotulo: 'Abertura das Válvulas', valor: '100% abertas' },
        { rotulo: 'Pré-Aquecimento / Amaciamento', valor: '12 horas / 50 horas' },
      ],
      unidade: 'MΩ',
      respostaCorreta: 2,
      tolerancia: 0.1,
      opcoesRapidas: [0.5, 1, 2, 10],
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Antes da partida, o teste de isolamento do circuito com megômetro (500V DC) deve atestar resistência superior a 2 MΩ.',
      },
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Aprovado para o voo! Isolamento superior a **2 MΩ** medido com megômetro em **500V DC**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Antes da partida, o teste de isolamento do circuito com megômetro (500V DC) deve atestar resistência superior a 2 MΩ.',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Confira no Checklist Pré-Voo: com o megômetro em **500V DC**, a resistência de isolamento deve ser superior a **2 MΩ**!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Antes da partida, o teste de isolamento do circuito com megômetro (500V DC) deve atestar resistência superior a 2 MΩ.',
          },
        },
      ],
    },
    {
      id: 'inspecao-controle-aula7',
      tipo: 'inspecao',
      titulo: 'Inspeção de Comissionamento — Placa Principal e Checklist Pré-Voo',
      enunciado: 'Observe o infográfico da Aula 07 e selecione a alternativa **correta** sobre a parametrização e partida do Trane TVR Pro:',
      imagem: '/images/academia/tvrpro/aula07/infografico.jpg',
      legendaImagem: 'Infográfico Aula 07 — O Centro de Controle: Dando Vida ao Trane TVR Pro',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Utilizamos a combinação da chave S12 e do seletor ENC3 para informar ao sistema a quantidade exata de unidades internas conectadas, suportando o máximo de 64 unidades.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Antes da partida, o teste de isolamento do circuito com megômetro (500V DC) deve atestar resistência superior a 2 MΩ.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'As válvulas de gás e líquido devem estar 100% abertas.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A Regra de Ouro: A fonte de alimentação geral deve obrigatoriamente ser ligada 12 horas antes da partida.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A máquina requer um período de 50 horas de amaciamento mecânico contínuo para atingir a estabilidade termodinâmica total',
        },
      ],
      pontos: [
        {
          id: 'p1',
          rotulo: 'Configurar ENC1 (Mestre 0 / Escravas 1, 2) e S12+ENC3 (até 64 unidades), medir >2 MΩ (500V DC), abrir válvulas 100%, aquecer cárter por 12 horas e amaciar por 50 horas.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Plano de voo impecável! Do endereçamento na placa até as cinquenta horas de amaciamento.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Antes da partida, o teste de isolamento do circuito com megômetro (500V DC) deve atestar resistência superior a 2 MΩ.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Dar partida com as válvulas de serviço fechadas e sem aguardar o pré-aquecimento do cárter.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Válvulas fechadas e cárter frio provocam destruição imediata do compressor na partida!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-dizer-nao',
      tipo: 'filosofia',
      titulo: 'O Caráter de Dizer "Não" pela Vida da Máquina',
      principio: 'Dizer "não" a um cliente apressado que quer partir o VRF sem as 12 horas de aquecimento de cárter exige mais firmeza moral do que conhecimento técnico.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Às vezes o cliente fica de cara feia na sexta-feira porque você pediu as doze horas de espera, né Simon?',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Fica por meia hora, Dona Marta. Mas no sábado de manhã a máquina parte redonda, sem quebrar, e ele lembra pra sempre que contratou um profissional sério.',
        },
      ],
    },
    {
      id: 'quiz-enderecamento-enc1-enc3',
      tipo: 'quiz',
      enunciado: 'Na Placa Principal (Main Board) do TVR Pro, quais seletores definem respectivamente a hierarquia da unidade externa (Mestre 0 ou Escravas 1 e 2) e a quantidade exata de unidades internas da frota (até 64 unidades)?',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'O seletor ENC1 define a hierarquia da unidade externa: Mestre (0) ou Escravas (1 e 2).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Utilizamos a combinação da chave S12 e do seletor ENC3 para informar ao sistema a quantidade exata de unidades internas conectadas, suportando o máximo de 64 unidades.',
        },
      ],
      opcoes: [
        {
          id: 'a',
          texto: 'O seletor ENC1 define a hierarquia externa (0, 1, 2), e a combinação da chave S12 com o seletor ENC3 informa a quantidade de internas.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Cravado! **ENC1** para hierarquia das ODUs e **S12 + ENC3** para o tamanho exato da frota de até **64 unidades**.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'O seletor ENC1 define a hierarquia da unidade externa: Mestre (0) ou Escravas (1 e 2).',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Utilizamos a combinação da chave S12 e do seletor ENC3 para informar ao sistema a quantidade exata de unidades internas conectadas, suportando o máximo de 64 unidades.',
                },
              ],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Os visores DSP1 e DSP2 são girados com alicate para mudar o endereço.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'DSP1 e DSP2 são monitores digitais de diagnóstico e telemetria, não chaves rotativas!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Não existe endereçamento na placa principal do TVR Pro.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'neutro',
              texto: 'O endereçamento em ENC1 e S12+ENC3 é obrigatório para que o sistema reconheça a frota e decole.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-animado-aula7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Olha os displays **DSP1 e DSP2** mostrando a rotação em Hz limpinha, sem nenhum código de erro! Agora é monitorar as **50 horas** de amaciamento!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A máquina requer um período de 50 horas de amaciamento mecânico contínuo para atingir a estabilidade termodinâmica total',
      },
    },
    {
      id: 'fala-simon-chamada-aula8',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Na Aula 08 vamos fechar o curso consolidando as **5 Leis da Instalação Impecável** no Checklist Final!',
    },
    {
      id: 'fala-bia-convite-aula8',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'bem-humorado',
      texto: 'E logo em seguida tem o Desafio da Rodada para carimbar sua certificação na linha TVR Pro!',
    },
    {
      id: 'ref-conteudo-tvr7',
      tipo: 'referencia',
      texto: 'Consulte o mapeamento completo da Main Board, chaves ENC/DIP e checklist pré-voo na aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Utilizamos a combinação da chave S12 e do seletor ENC3 para informar ao sistema a quantidade exata de unidades internas conectadas, suportando o máximo de 64 unidades.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Antes da partida, o teste de isolamento do circuito com megômetro (500V DC) deve atestar resistência superior a 2 MΩ.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'As válvulas de gás e líquido devem estar 100% abertas.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A Regra de Ouro: A fonte de alimentação geral deve obrigatoriamente ser ligada 12 horas antes da partida.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A máquina requer um período de 50 horas de amaciamento mecânico contínuo para atingir a estabilidade termodinâmica total',
        },
      ],
      pontos: [
        '**Identidade e frota:** ajuste **ENC1** (Mestre 0 / Escravas 1, 2) e **S12 + ENC3** para a contagem exata de até **64 unidades** internas, acompanhando **DSP1 e DSP2**.',
        '**Checklist pré-voo e Regra das 12h:** confirme isolamento acima de **2 MΩ** no megômetro (**500V DC**), abra as válvulas **100%** e ligue a alimentação **12 horas** antes da partida.',
        '**Estabilização em voo:** acompanhe o período de **50 horas** de amaciamento contínuo até a estabilidade termodinâmica sem códigos de erro.',
      ],
      proxima: 'Na Aula 08 faremos a grande revisão das 5 Leis da Instalação Impecável e o Checklist de Sucesso antes do Desafio da Rodada!',
    },
  ],
};
