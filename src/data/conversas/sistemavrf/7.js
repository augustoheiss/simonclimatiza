// src/data/conversas/sistemavrf/7.js
// Roteiro "Papo de Balcão" — Dominando o Sistema VRF (TVR Ultra) · Aula 07

export default {
  schema: 1,
  cursoId: 'sistemavrf',
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
      texto: 'Casa de máquinas no topo do prédio. A tampa da condensadora está aberta exibindo o diagrama elétrico colado no metal e o visor piscando E2.',
    },
    {
      id: 'fala-juninho-panico',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'alerta',
      texto: 'Simon, olha esse emaranhado de fios e o display piscando **Erro E2**! Quando bato o olho nesse mapa elétrico gigante dá até tontura!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Você já se sentiu perdido olhando para um emaranhado de fios e códigos de erro piscando? Assumimos o papel de detetives para desvendar os mistérios do diagnóstico do TVR Ultra.',
      },
    },
    {
      id: 'fala-simon-quatro-familias',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Sem pânico, detetive! O segredo para ler qualquer diagrama elétrico do **TVR Ultra** é agrupar os componentes em **quatro famílias lógicas**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Ensinamos um método à prova de falhas para ler diagramas elétricos sem pânico, agrupando os componentes em "famílias" lógicas: a Família da Visão (sensores), dos Músculos (válvulas atuadoras), do Sopro (ventiladores) e da Fala (portas de comunicação).',
      },
    },
    {
      id: 'fala-bia-detalhe-familias',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Olha como fica fácil: **Família da Visão** (sensores), **dos Músculos** (válvulas atuadoras), **do Sopro** (ventiladores) e **da Fala** (portas de comunicação)!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'agrupando os componentes em "famílias" lógicas: a Família da Visão (sensores), dos Músculos (válvulas atuadoras), do Sopro (ventiladores) e da Fala (portas de comunicação).',
      },
    },
    {
      id: 'escolha-erro-e2',
      tipo: 'escolha',
      pergunta: 'O sistema está apresentando o **Erro E2** (falha de comunicação). Seguindo o método das famílias lógicas da Aula 07, qual família e quais cabos você vai investigar primeiro?',
      opcoes: [
        {
          id: 'a',
          texto: 'A Família do Sopro, trocando as hélices dos ventiladores da condensadora.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Hélice de ventilador não resolve falha de comunicação! Para o **Erro E2**, você precisa investigar a Família da Fala.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'A Família da Fala (portas de comunicação), rastreando o problema pelos cabos de comunicação P, Q e E.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Elementar, meu caro Juninho! O **Erro E2** mora na **Família da Fala**, e o rastreamento segue a trilha dos cabos **P, Q e E**.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Acompanhe um estudo de caso real focado na resolução do Erro E2, rastreando o problema pelos cabos de comunicação P, Q e E.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'A Família dos Músculos, cortando o tubo de cobre da válvula de 4 vias.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'risada',
              texto: 'Larga esse cortador de tubo! **Erro E2** é falha na linha de conversa entre as unidades, não entupimento mecânico.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-simon-rastreamento-pqe',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Nos bornes **P, Q e E**, o sinal precisa correr em cadeia de uma máquina para a outra, mantendo a polaridade P com P, Q com Q e a malha E aterrada certinha.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'rastreando o problema pelos cabos de comunicação P, Q e E.',
      },
    },
    {
      id: 'fala-bia-metodo-detetive',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Quando dá **Erro E2**, o trocador de peças já quer comprar placa nova no escuro. O detetive testa continuidade, checa se alguma interna foi desligada e acha onde o cabo **P, Q e E** foi interrompido.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Acompanhe um estudo de caso real focado na resolução do Erro E2, rastreando o problema pelos cabos de comunicação P, Q e E. Pare de apenas "trocar peças" no escuro e aprenda a entender o fluxo de informação da máquina como um verdadeiro Mestre do Diagnóstico!',
      },
    },
    {
      id: 'fala-juninho-visao-musculos',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'E se o erro for de leitura térmica, eu vou direto na **Família da Visão** (sensores); se for válvula travada, vou na **Família dos Músculos**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'a Família da Visão (sensores), dos Músculos (válvulas atuadoras), do Sopro (ventiladores) e da Fala (portas de comunicação).',
      },
    },
    {
      id: 'causo-fio-invertido-forro',
      tipo: 'causo',
      titulo: 'O Mistério da Emenda Escondida no Gesso',
      falas: [
        {
          quem: 'simon',
          emocao: 'bem-humorado',
          texto: 'Num hospital, o **TVR Ultra** entrou em **Erro E2** logo depois que o pessoal da iluminação mexeu no forro do corredor.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Acompanhe um estudo de caso real focado na resolução do Erro E2, rastreando o problema pelos cabos de comunicação P, Q e E.',
          },
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'Eles cortaram o cabo de comunicação achando que era fio de lâmpada?',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Cortaram e depois emendaram o fio **P** no **Q** no escuro! Fomos rastreando a **Família da Fala** pelos bornes **P, Q e E**, achamos a inversão na metade do corredor e salvamos o dia sem gastar um centavo em placa.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'rastreando o problema pelos cabos de comunicação P, Q e E. Pare de apenas "trocar peças" no escuro',
          },
        },
      ],
    },
    {
      id: 'mito-trocar-pecas-escuro',
      tipo: 'mitoVerdade',
      afirmacao: 'Diante de um diagrama elétrico complexo do TVR Ultra, o método mais rápido e profissional de diagnóstico é ir trocando as placas eletrônicas por tentativa e erro até o código sumir.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! Trocar peças no escuro gera prejuízo e não resolve defeitos de cabeamento ou sensores.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Pare de apenas "trocar peças" no escuro e aprenda a entender o fluxo de informação da máquina como um verdadeiro Mestre do Diagnóstico!',
          },
        },
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'O verdadeiro Mestre do Diagnóstico divide o mapa elétrico nas quatro famílias lógicas e segue o fluxo de informação com o multímetro.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'agrupando os componentes em "famílias" lógicas: a Família da Visão (sensores), dos Músculos (válvulas atuadoras), do Sopro (ventiladores) e da Fala (portas de comunicação).',
          },
        },
      ],
    },
    {
      id: 'inspecao-mapa-aula7',
      tipo: 'inspecao',
      titulo: 'Inspeção de Detetive — As 4 Famílias do Diagrama Elétrico',
      enunciado: 'Observe o infográfico da Aula 07 e selecione a opção que relaciona corretamente as **quatro famílias lógicas** do diagrama elétrico do TVR Ultra:',
      imagem: '/images/academia/vrf/aula07/infografico.jpg',
      legendaImagem: 'Infográfico Aula 07 — Guia do Detetive TVR Ultra',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Visão (sensores), Músculos (válvulas atuadoras), Sopro (ventiladores) e Fala (portas de comunicação P, Q e E).',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Lupa de ouro! Com essa divisão, qualquer diagrama elétrico deixa de ser um bicho de sete cabeças.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'agrupando os componentes em "famílias" lógicas: a Família da Visão (sensores), dos Músculos (válvulas atuadoras), do Sopro (ventiladores) e da Fala (portas de comunicação).',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Visão (ventiladores), Músculos (cabos P, Q e E), Sopro (sensores) e Fala (compressores).',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Trocou as bolas! Visão são os sensores, Músculos são as válvulas atuadoras, Sopro são os ventiladores e Fala são as portas de comunicação.',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-detetive-oficio',
      tipo: 'filosofia',
      titulo: 'A Diferença entre o Trocador de Peças e o Mestre do Diagnóstico',
      principio: 'Qualquer um pode desparafusar uma placa e colocar outra no lugar; o valor de um técnico está em saber exatamente qual fio medir antes de tocar na chave de fenda.',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Quando você para de "trocar peças no escuro" e aprende a ler o diagrama elétrico, você conquista respeito em qualquer casa de máquinas do país.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Pare de apenas "trocar peças" no escuro e aprenda a entender o fluxo de informação da máquina como um verdadeiro Mestre do Diagnóstico!',
          },
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'O diagrama elétrico colado na tampa não é enfeite de fábrica: é a bússola que o engenheiro que projetou a máquina deixou de presente para você.',
        },
      ],
    },
    {
      id: 'quiz-familias-diagrama',
      tipo: 'quiz',
      enunciado: 'No método de leitura de diagramas elétricos da Aula 07, a qual "família lógica" pertencem as válvulas atuadoras (como EEVs e solenoides) do TVR Ultra?',
      opcoes: [
        {
          id: 'a',
          texto: 'À Família dos Músculos, pois executam o trabalho físico de abrir, fechar e modular o fluxo a comando da placa.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Na mosca! Sensores são a Visão, válvulas atuadoras são os Músculos, ventiladores são o Sopro e portas de comunicação são a Fala.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'agrupando os componentes em "famílias" lógicas: a Família da Visão (sensores), dos Músculos (válvulas atuadoras), do Sopro (ventiladores) e da Fala (portas de comunicação).',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'À Família da Fala, junto com os cabos P, Q e E.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'neutro',
              texto: 'A Família da Fala reúne as portas de comunicação. As válvulas atuadoras formam a Família dos Músculos!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'À Família da Visão, que mede a temperatura ambiente.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Quem enxerga temperatura e pressão na Família da Visão são os sensores!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-confiante',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Olhando agora para o diagrama dividido em Visão, Músculos, Sopro e Fala, parece que acenderam a luz na sala!',
    },
    {
      id: 'fala-simon-convite-aula8',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Então prepara o multímetro, porque na Aula 08 vamos fazer o grande encerramento da série testando sensores na tabela ôhmica e desvendando os códigos **P1** e **PL**!',
    },
    {
      id: 'fala-bia-fecho',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'bem-humorado',
      texto: 'E depois da Aula 08 tem o Desafio da Rodada valendo o selo de certificação do curso!',
    },
    {
      id: 'fala-juninho-revisao-familias',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Deixa eu repetir pra nunca mais esquecer: **Visão** (sensores), **Músculos** (válvulas atuadoras), **Sopro** (ventiladores) e **Fala** (portas de comunicação)!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'agrupando os componentes em "famílias" lógicas: a Família da Visão (sensores), dos Músculos (válvulas atuadoras), do Sopro (ventiladores) e da Fala (portas de comunicação).',
      },
    },
    {
      id: 'fala-simon-elogio-juninho',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Decorou com inteligência! Quando chegar diante de uma condensadora dando **Erro E2**, você já vai direto na Família da Fala medir **P, Q e E**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Acompanhe um estudo de caso real focado na resolução do Erro E2, rastreando o problema pelos cabos de comunicação P, Q e E.',
      },
    },
    {
      id: 'fala-bia-fluxo-informacao',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Entender o fluxo de informação da máquina é o que separa o palpiteiro do verdadeiro Mestre do Diagnóstico.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Pare de apenas "trocar peças" no escuro e aprenda a entender o fluxo de informação da máquina como um verdadeiro Mestre do Diagnóstico!',
      },
    },
    {
      id: 'fala-marta-orgulho',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'animado',
      texto: 'Assim dá gosto de ver! Ninguém mais fica perdido olhando pra fio colorido.',
    },
    {
      id: 'ref-conteudo-7',
      tipo: 'referencia',
      texto: 'Acompanhe os mapas elétricos e o estudo de caso do Erro E2 nos slides da aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'agrupando os componentes em "famílias" lógicas: a Família da Visão (sensores), dos Músculos (válvulas atuadoras), do Sopro (ventiladores) e da Fala (portas de comunicação). Acompanhe um estudo de caso real focado na resolução do Erro E2, rastreando o problema pelos cabos de comunicação P, Q e E.',
      },
      pontos: [
        '**Leitura de diagramas sem pânico:** divida o esquema elétrico nas famílias da **Visão** (sensores), **Músculos** (válvulas), **Sopro** (ventiladores) e **Fala** (comunicação).',
        '**Resolução do Erro E2:** rastreie metodicamente a falha pelos cabos de comunicação **P, Q e E**.',
        '**Diagnóstico de elite:** abandone o vício de trocar peças no escuro e siga o fluxo lógico de informação da máquina.',
      ],
      proxima: 'Na Aula 08 encerraremos o curso com troubleshooting avançado de P1 e PL, teste de termistores no multímetro e o Desafio da Rodada!',
    },
  ],
};
