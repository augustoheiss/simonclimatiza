// src/data/conversas/tvrpro/6.js
// Roteiro "Papo de Balcão" — Instalação e Comissionamento TVR Pro DC Inverter · Aula 06

export default {
  schema: 1,
  cursoId: 'tvrpro',
  aulaId: '6',
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
      texto: 'Corredor técnico da obra. Bia mostra um rolo de cabo blindado de três vias e um resistor de terminação ao lado das eletrocalhas.',
    },
    {
      id: 'fala-simon-inimigas-mortais',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Juninho, dentro do **TVR Pro** moram duas redes que são **"inimigas mortais"** e nunca podem dividir o mesmo conduíte: **A Potência (O Músculo)** e **A Comunicação (Os Nervos)**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Um sistema massivo como o TVR Pro abriga duas redes distintas que habitam a mesma máquina, mas que são "inimigas mortais" e nunca devem compartilhar o mesmo conduíte:',
      },
    },
    {
      id: 'fala-bia-distancia-500mm',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'A Potência opera em **380-415V** ruidosa. Para correntes entre **>10A e <50A**, é obrigatório manter distância física maior que **500mm** dos cabos de comunicação contra ruído eletromagnético (EMI)!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: '1. A Potência (O Músculo): Uma rede de força bruta (380-415V) que alimenta compressores e ventiladores, sendo agressiva e ruidosa.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Para correntes de potência entre >10A e <50A, é obrigatório manter uma distância física maior que 500mm dos cabos de comunicação. A sobreposição ou proximidade gera ruído eletromagnético (EMI), causando erros fantasmas e falhas sistêmicas.',
        },
      ],
    },
    {
      id: 'fala-juninho-topologia-pergunta',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E na hora de passar o cabo de comunicação de uma evaporadora para a outra no andar, posso puxar tudo saindo de uma caixinha central em formato de estrela?',
    },
    {
      id: 'escolha-topologia-rede',
      tipo: 'escolha',
      pergunta: 'Qual é o único método de topologia aprovado na Aula 06 para interligar a rede de comunicação do TVR Pro e como deve ser finalizada a última unidade interna?',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Além disso, a última unidade interna da rede deve receber um Resistor de 120 Ohms para evitar o "eco" ou reflexão de sinal, que paralisaria o sistema.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Alerta de Erro Fatal: Jamais conecte os cabos de potência de 380V nos bornes de comunicação.',
        },
      ],
      opcoes: [
        {
          id: 'a',
          texto: 'Ligação em Estrela (Star) ou Loop Fechado, sem nenhum componente no final.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Proibidíssimo! Instalações em Estrela ou Loop Fechado destroem a integridade dos pacotes de dados na rede!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Instalações em "Estrela" (Star) ou "Loop Fechado" são totalmente proibidas, pois destroem a integridade dos pacotes de dados.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Topologia Daisy Chain (Em Cadeia) linear, instalando um Resistor de 120 Ohms na última unidade interna para evitar eco de sinal.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Padrão sênior! Conexão linear **Daisy Chain (Em Cadeia)** e um **Resistor de 120 Ohms** na última interna eliminando a reflexão de sinal.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'O único método aprovado para as conexões é o Daisy Chain (Em Cadeia), onde o sinal flui de unidade para unidade linearmente.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Além disso, a última unidade interna da rede deve receber um Resistor de 120 Ohms para evitar o "eco" ou reflexão de sinal, que paralisaria o sistema.',
                },
              ],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Ligar os cabos de 380V diretamente nos bornes P, Q, E para amplificar o sinal.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Erro fatal! Conectar **380V** nos bornes de comunicação queima imediatamente todas as placas da rede em cadeia!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Alerta de Erro Fatal: Jamais conecte os cabos de potência de 380V nos bornes de comunicação. Essa ação resultará na queima imediata de todas as placas conectadas em cadeia, gerando um prejuízo irreversível.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'fala-simon-bornes-h1h2-pqe',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Presta atenção nas vias exclusivas da medula: os bornes **H1, H2, E** comunicam exclusivamente Unidades Externas (**ODU - ODU**); já os bornes **P, Q, E** ligam a Mestre às Internas (**ODU - IDU**).',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Medula e Periféricos: A ligação possui vias exclusivas. Os bornes H1, H2, E são exclusivos para a comunicação entre Unidades Externas (ODU - ODU). Para conectar a Unidade Mestre às Unidades Internas (ODU - IDU), utiliza-se os bornes periféricos P, Q, E.',
      },
    },
    {
      id: 'fala-bia-cabo-blindado',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'E o cabo precisa ser obrigatoriamente **blindado de 3 vias** com bitola mínima de **0,75 mm²**, aterramento correto e extensão máxima de **1200 metros**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'É estritamente obrigatório o uso de cabo blindado de 3 vias com bitola mínima de 0,75 mm² e aterramento correto, não podendo ultrapassar a extensão máxima de 1200 metros.',
      },
    },
    {
      id: 'fala-juninho-erro-fatal-380',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'alerta',
      texto: 'E aquele alerta de erro fatal dá até arrepio: se alguém encostar **380V** nos bornes **P, Q, E**, frita todas as placas em cadeia!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Alerta de Erro Fatal: Jamais conecte os cabos de potência de 380V nos bornes de comunicação. Essa ação resultará na queima imediata de todas as placas conectadas em cadeia, gerando um prejuízo irreversível.',
      },
    },
    {
      id: 'causo-eletrocalha-colada',
      tipo: 'causo',
      titulo: 'O Fantasma do Erro Intermitente na Eletrocalha Compartilhada',
      falas: [
        {
          quem: 'simon',
          emocao: 'bem-humorado',
          texto: 'Num centro empresarial, o eletricista amarrou o cabo **P, Q, E** com enforca-gato coladinho nos cabos trifásicos de **380V** que puxavam trinta Amperes.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Jamais conecte os cabos de potência de 380V nos bornes de comunicação.',
          },
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Sem respeitar os **500mm** de distância para correntes entre **>10A e <50A**, o ruído eletromagnético (EMI) tomou conta da linha!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Para correntes de potência entre >10A e <50A, é obrigatório manter uma distância física maior que 500mm dos cabos de comunicação. A sobreposição ou proximidade gera ruído eletromagnético (EMI), causando erros fantasmas e falhas sistêmicas.',
          },
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Toda vez que os compressores aceleravam, o sistema dava erro fantasma! Separamos a infraestrutura em mais de **500mm**, colocamos o **Resistor de 120 Ohms** no fim da fila e o barramento ficou uma seda.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Para correntes de potência entre >10A e <50A, é obrigatório manter uma distância física maior que 500mm dos cabos de comunicação.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Além disso, a última unidade interna da rede deve receber um Resistor de 120 Ohms para evitar o "eco" ou reflexão de sinal, que paralisaria o sistema.',
            },
          ],
        },
      ],
    },
    {
      id: 'mito-mesmo-conduite',
      tipo: 'mitoVerdade',
      afirmacao: 'Para deixar a instalação mais limpa, os cabos de potência de 380-415V e os cabos de comunicação P, Q, E podem ser passados juntos dentro do mesmo conduíte.',
      verdade: false,
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Um sistema massivo como o TVR Pro abriga duas redes distintas que habitam a mesma máquina, mas que são "inimigas mortais" e nunca devem compartilhar o mesmo conduíte:',
        },
        {
          campo: 'conteudo_html',
          trecho: '1. A Potência (O Músculo): Uma rede de força bruta (380-415V) que alimenta compressores e ventiladores, sendo agressiva e ruidosa.',
        },
      ],
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! Potência (**380-415V**) e Comunicação (**P, Q, E** / **H1, H2, E**) são inimigas mortais e nunca devem compartilhar o mesmo conduíte.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Um sistema massivo como o TVR Pro abriga duas redes distintas que habitam a mesma máquina, mas que são "inimigas mortais" e nunca devem compartilhar o mesmo conduíte:',
            },
            {
              campo: 'conteudo_html',
              trecho: '1. A Potência (O Músculo): Uma rede de força bruta (380-415V) que alimenta compressores e ventiladores, sendo agressiva e ruidosa.',
            },
          ],
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Para correntes entre **>10A e <50A**, mantenha distância física maior que **500mm**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Para correntes de potência entre >10A e <50A, é obrigatório manter uma distância física maior que 500mm dos cabos de comunicação.',
          },
        },
      ],
    },
    {
      id: 'calc-afastamento-emi',
      tipo: 'calculadora',
      titulo: 'Gabarito Anti-EMI — Afastamento entre Potência e Comunicação',
      formula: 'Corrente >10A e <50A → Distância Física > 500mm',
      enunciado: 'Para circuitos de potência com corrente entre **>10A e <50A**, a distância física mínima obrigatória em relação aos cabos de comunicação deve ser maior que quantos milímetros (**mm**)?',
      leituras: [
        { rotulo: 'Faixa de Corrente', valor: '>10A e <50A' },
        { rotulo: 'Bitola Mín. Cabo Blindado', valor: '0,75 mm² (máx. 1200 metros)' },
        { rotulo: 'Terminador Final', valor: 'Resistor de 120 Ohms' },
      ],
      unidade: 'mm',
      respostaCorreta: 500,
      tolerancia: 0.1,
      opcoesRapidas: [50, 120, 500, 1200],
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Para correntes de potência entre >10A e <50A, é obrigatório manter uma distância física maior que 500mm dos cabos de comunicação.',
      },
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Exato! Mais de **500mm** de separação física para correntes entre **>10A e <50A**, barrando o ruído eletromagnético (EMI).',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Para correntes de potência entre >10A e <50A, é obrigatório manter uma distância física maior que 500mm dos cabos de comunicação.',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Olha a zona de segurança na Aula 06: para correntes entre **>10A e <50A**, a distância física deve ser maior que **500mm**!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Para correntes de potência entre >10A e <50A, é obrigatório manter uma distância física maior que 500mm dos cabos de comunicação.',
          },
        },
      ],
    },
    {
      id: 'inspecao-nervoso-aula6',
      tipo: 'inspecao',
      titulo: 'Inspeção do Sistema Nervoso — Cabeamento e Topologia TVR Pro',
      enunciado: 'Observe o infográfico da Aula 06 e aponte a especificação **correta** para a rede de comunicação do TVR Pro:',
      imagem: '/images/academia/tvrpro/aula06/infografico.jpg',
      legendaImagem: 'Infográfico Aula 06 — O Sistema Nervoso do TVR Pro',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Para correntes de potência entre >10A e <50A, é obrigatório manter uma distância física maior que 500mm dos cabos de comunicação.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'É estritamente obrigatório o uso de cabo blindado de 3 vias com bitola mínima de 0,75 mm² e aterramento correto, não podendo ultrapassar a extensão máxima de 1200 metros. Além disso, a última unidade interna da rede deve receber um Resistor de 120 Ohms para evitar o "eco" ou reflexão de sinal, que paralisaria o sistema.',
        },
      ],
      pontos: [
        {
          id: 'p1',
          rotulo: 'Topologia Daisy Chain, cabo blindado 3 vias ≥0,75 mm² (até 1200m), afastamento >500mm (para >10A e <50A), H1/H2/E (ODU-ODU), P/Q/E (ODU-IDU) e Resistor de 120 Ohms no fim.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Infraestrutura de dados blindada! Com essa disciplina você nunca vai sofrer com erro fantasma de comunicação.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Para correntes de potência entre >10A e <50A, é obrigatório manter uma distância física maior que 500mm dos cabos de comunicação.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Conectar as evaporadoras nos bornes H1, H2, E em topologia Estrela usando fio paralelo sem blindagem.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'H1, H2, E são exclusivos para ODU-ODU, e a rede de internas exige cabo blindado em Daisy Chain nos bornes P, Q, E!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-forca-e-conversa',
      tipo: 'filosofia',
      titulo: 'Força Bruta e Conversa Delicada Não Dividem o Mesmo Travesseiro',
      principio: 'Trezentos e oitenta Volts é grito de motor; comunicação P, Q, E é sussurro digital. Meio metro de distância na calha é o respeito físico que garante a paz no barramento.',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Muita gente acha que fio é tudo igual porque tudo é cobre encapado. Mas misturar potência com sinal de dados é tentar ouvir um violino ao lado de uma britadeira.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'E o pequeno **Resistor de 120 Ohms** na última evaporadora mostra como um componente de centavos segura a estabilidade de um prédio milionário.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Além disso, a última unidade interna da rede deve receber um Resistor de 120 Ohms para evitar o "eco" ou reflexão de sinal, que paralisaria o sistema.',
          },
        },
      ],
    },
    {
      id: 'quiz-bornes-h1h2-pqe',
      tipo: 'quiz',
      enunciado: 'Pela regra de Medula e Periféricos da Aula 06, qual é a diferença de aplicação entre os bornes H1, H2, E e os bornes P, Q, E no TVR Pro?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Alerta de Erro Fatal: Jamais conecte os cabos de potência de 380V nos bornes de comunicação.',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'H1, H2, E são exclusivos para comunicação entre Unidades Externas (ODU - ODU), enquanto P, Q, E conectam a Unidade Mestre às Unidades Internas (ODU - IDU).',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Distinção cirúrgica! **H1, H2, E** conversa entre condensadoras; **P, Q, E** leva o comando da Mestre para as evaporadoras.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Os bornes H1, H2, E são exclusivos para a comunicação entre Unidades Externas (ODU - ODU). Para conectar a Unidade Mestre às Unidades Internas (ODU - IDU), utiliza-se os bornes periféricos P, Q, E.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Ambos servem para ligar a rede elétrica trifásica de 380V.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Jamais ligue 380V em H1/H2/E ou P/Q/E! São bornes exclusivos de comunicação de dados.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Alerta de Erro Fatal: Jamais conecte os cabos de potência de 380V nos bornes de comunicação.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'H1, H2, E ligam as lâmpadas da casa de máquinas e P, Q, E ligam a bomba de incêndio.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'neutro',
              texto: 'São barramentos de comunicação dedicados do ecossistema VRF (ODU-ODU e ODU-IDU).',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-resumo-aula6',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Gravado: potência (**380-415V**) longe mais de **500mm** dos dados, **Daisy Chain** com cabo blindado de **0,75 mm²** até **1200 metros** e **Resistor de 120 Ohms** no fim!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: '1. A Potência (O Músculo): Uma rede de força bruta (380-415V) que alimenta compressores e ventiladores, sendo agressiva e ruidosa.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Para correntes de potência entre >10A e <50A, é obrigatório manter uma distância física maior que 500mm dos cabos de comunicação.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'É estritamente obrigatório o uso de cabo blindado de 3 vias com bitola mínima de 0,75 mm² e aterramento correto, não podendo ultrapassar a extensão máxima de 1200 metros. Além disso, a última unidade interna da rede deve receber um Resistor de 120 Ohms',
        },
      ],
    },
    {
      id: 'fala-marta-cafe-blindado',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'bem-humorado',
      texto: 'Com tanta blindagem e distância de segurança, até a fofoca da vizinhança vai parar de dar interferência aqui no balcão!',
    },
    {
      id: 'fala-simon-chamada-aula7',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Agora que os nervos estão conectados, na Aula 07 vamos dar vida ao Centro de Controle: endereçamento ENC1, ENC3 e S12, megômetro e pré-aquecimento!',
    },
    {
      id: 'fala-bia-apoio-aula7',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'bem-humorado',
      texto: 'Prepara a chave de fenda isolada e o megômetro de quinhentos Volts!',
    },
    {
      id: 'ref-conteudo-tvr6',
      tipo: 'referencia',
      texto: 'Revise os diagramas de topologia Daisy Chain, blindagem e separação elétrica na aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: '1. A Potência (O Músculo): Uma rede de força bruta (380-415V) que alimenta compressores e ventiladores, sendo agressiva e ruidosa.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Para correntes de potência entre >10A e <50A, é obrigatório manter uma distância física maior que 500mm dos cabos de comunicação.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'É estritamente obrigatório o uso de cabo blindado de 3 vias com bitola mínima de 0,75 mm² e aterramento correto, não podendo ultrapassar a extensão máxima de 1200 metros. Além disso, a última unidade interna da rede deve receber um Resistor de 120 Ohms',
        },
      ],
      pontos: [
        '**Separação contra EMI:** mantenha mais de **500mm** entre cabos de potência (**380-415V**, entre **>10A e <50A**) e cabos de comunicação.',
        '**Topologia e vias exclusivas:** use apenas **Daisy Chain**, respeitando **H1, H2, E** (ODU-ODU) e **P, Q, E** (ODU-IDU), jamais aplicando **380V** nos bornes de dados.',
        '**Blindagem e terminação:** utilize cabo blindado de 3 vias de no mínimo **0,75 mm²** (máximo **1200 metros**) e instale o **Resistor de 120 Ohms** na última unidade interna.',
      ],
      proxima: 'Na Aula 07 daremos vida ao Centro de Controle: chaves ENC1, S12 e ENC3, displays DSP1 e DSP2, teste de isolamento com megômetro, pré-aquecimento de cárter e amaciamento.',
    },
  ],
};
