// src/data/conversas/tvrpro/2.js
// Roteiro "Papo de Balcão" — Instalação e Comissionamento TVR Pro DC Inverter · Aula 02

export default {
  schema: 1,
  cursoId: 'tvrpro',
  aulaId: '2',
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
      texto: 'Cobertura técnica do edifício. Simon e Bia conferem na trena a base de concreto recém-construída para receber os módulos do TVR Pro.',
    },
    {
      id: 'fala-bia-escala-90hp',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Juninho, olha a força da escala do **TVR Pro**: combinando módulos externos num único sistema unificado, alcançamos até **90HP**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Com essa modularidade inteligente, o sistema alcança uma capacidade monstruosa de até 90HP.',
      },
    },
    {
      id: 'fala-simon-64-internas',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'E a regra de ouro desse coração mecânico é que um único sistema modular **TVR Pro** gerencia simultaneamente até **64 unidades** internas conectadas!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A grande regra de ouro é que um único sistema modular TVR Pro suporta o gerenciamento simultâneo de até 64 unidades internas conectadas.',
      },
    },
    {
      id: 'fala-juninho-simultaneidade-pergunta',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E sobre a soma das capacidades dessas internas: ouvi dizer que dá pra colocar até **130%** da capacidade da condensadora em qualquer obra. É verdade?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Para maximizar o investimento, utilizamos o conceito do limite inteligente de 130%. Em edifícios corporativos ou residenciais com zonas diversas, a carga varia, o que significa que a capacidade total das unidades internas pode atingir até 130% da capacidade combinada da unidade externa.',
      },
    },
    {
      id: 'escolha-simultaneidade-datacenter',
      tipo: 'escolha',
      pergunta: 'Um cliente pediu para projetar um sistema TVR Pro para um **Data Center** onde todas as unidades internas operam na potência máxima juntas o tempo todo. Qual índice máximo de combinação você deve aplicar?',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Para maximizar o investimento, utilizamos o conceito do limite inteligente de 130%.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'onde todas as unidades operam na potência máxima juntas (como em data centers), a capacidade total das internas deve ser obrigatoriamente ≤100% da externa.',
        },
      ],
      opcoes: [
        {
          id: 'a',
          texto: 'Aplicar o limite de 130%, pois o compressor Inverter multiplica a capacidade no calor extremo.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Armadilha fatal! O limite de **130%** só vale quando há variação de ocupação entre zonas diversas. Em Data Center vai faltar fôlego!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Para maximizar o investimento, utilizamos o conceito do limite inteligente de 130%.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Limitar a capacidade total das internas a obrigatoriamente ≤100% da capacidade da unidade externa.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Alerta crítico respeitado! Onde todas as unidades operam na potência máxima juntas, como em data centers, a soma das internas deve ser **≤100%** da externa.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Alerta Crítico: Em ambientes de alta carga térmica constante, clima extremo, ou onde todas as unidades operam na potência máxima juntas (como em data centers), a capacidade total das internas deve ser obrigatoriamente ≤100% da externa.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Instalar sem calcular capacidade e desligar metade dos servidores no verão.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'risada',
              texto: 'Desligar servidor de Data Center no verão dá demissão por justa causa na mesma hora!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-simon-fundacao-fisica',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Agora olha para o chão da cobertura: o local precisa de frente livre maior que um metro, longe de ondas eletromagnéticas ou gases sulfurosos corrosivos, e sem encarar o vento principal.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O local de instalação deve garantir espaço livre para dissipação de ar (frente livre > 1m) e evitar áreas com emissão de ondas eletromagnéticas ou gases sulfurosos corrosivos. A entrada de ar nunca deve estar direcionada para o vento principal.',
      },
    },
    {
      id: 'fala-bia-base-200mm',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'E a base de concreto é inegociável: altura mínima obrigatória de **200mm**, superfície **100%** plana, borracha espessa antivibração, chumbadores **M12** e vala perimetral de drenagem.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A base de concreto é absolutamente crítica: deve ter uma altura obrigatória de no mínimo 200mm.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A base precisa ter uma superfície 100% plana para distribuir o peso, com isolamento de borracha espessa para anular vibrações e fixação usando parafusos de ancoragem M12. Uma vala perimetral de drenagem também deve ser construída.',
        },
      ],
    },
    {
      id: 'fala-juninho-defletores',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E aqueles defletores de vento e protetores de neve que vêm no projeto de regiões frias ou ventosas? São só acessórios opcionais?',
    },
    {
      id: 'fala-simon-armaduras',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Não são opcionais; são **armaduras de sobrevivência**! Impedem sufocamento ou congelamento do condensador, cuidando sempre para não estrangular o fluxo de ar nominal.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O Escudo Contra os Elementos: Protetores de neve e defletores de vento não são opcionais; são armaduras de sobrevivência. Eles impedem falhas por sufocamento ou congelamento do condensador, mas é vital garantir que o fluxo de ar nominal não seja estrangulado.',
      },
    },
    {
      id: 'causo-cpd-130',
      tipo: 'causo',
      titulo: 'O Projetista "Espertinho" que Usou 130% no CPD do Hospital',
      falas: [
        {
          quem: 'simon',
          emocao: 'bem-humorado',
          texto: 'Teve um projetista que quis economizar na condensadora de um centro de dados aplicando o limite de **130%** de combinação.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Para maximizar o investimento, utilizamos o conceito do limite inteligente de 130%.',
          },
        },
        {
          quem: 'juninho',
          emocao: 'surpreso',
          texto: 'Mas no centro de dados todas as máquinas rodam no talo dia e noite!',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Exato! Na primeira tarde quente, todas pediram carga máxima ao mesmo tempo e faltou condensadora. Tivemos que entrar para corrigir o projeto respeitando a trava de **≤100%**!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'onde todas as unidades operam na potência máxima juntas (como em data centers), a capacidade total das internas deve ser obrigatoriamente ≤100% da externa.',
          },
        },
      ],
    },
    {
      id: 'mito-base-direto-laje',
      tipo: 'mitoVerdade',
      afirmacao: 'Para economizar concreto na cobertura, os módulos externos do TVR Pro podem ser apoiados diretamente no piso da laje sem base elevada de 200mm e sem parafusos M12.',
      verdade: false,
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A base de concreto é absolutamente crítica: deve ter uma altura obrigatória de no mínimo 200mm.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A base precisa ter uma superfície 100% plana para distribuir o peso, com isolamento de borracha espessa para anular vibrações e fixação usando parafusos de ancoragem M12.',
        },
      ],
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito grave! A base de concreto precisa ter no mínimo **200mm** de altura, ser **100%** plana, contar com borracha espessa, ancoragem **M12** e vala de drenagem.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'A base de concreto é absolutamente crítica: deve ter uma altura obrigatória de no mínimo 200mm.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'A base precisa ter uma superfície 100% plana para distribuir o peso, com isolamento de borracha espessa para anular vibrações e fixação usando parafusos de ancoragem M12.',
            },
          ],
        },
        {
          quem: 'simon',
          emocao: 'neutro',
          texto: 'Sem essa elevação, a água da chuva empoça no chassi e a vibração passa direto para a estrutura do prédio.',
        },
      ],
    },
    {
      id: 'calc-altura-base',
      tipo: 'calculadora',
      titulo: 'Gabarito de Fundação Física — Altura Mínima da Base TVR Pro',
      formula: 'Altura da Base de Concreto ≥ 200mm (Superfície 100% plana + M12)',
      enunciado: 'Para proteger a unidade externa contra empoçamento e garantir estabilidade estrutural, qual é a altura mínima obrigatória da base de concreto em milímetros (**mm**)?',
      leituras: [
        { rotulo: 'Capacidade Modular Máx.', valor: '90HP (até 64 unidades)' },
        { rotulo: 'Parafusos de Ancoragem', valor: 'M12 com borracha espessa' },
      ],
      unidade: 'mm',
      respostaCorreta: 200,
      tolerancia: 0.1,
      opcoesRapidas: [50, 100, 200, 500],
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A base de concreto é absolutamente crítica: deve ter uma altura obrigatória de no mínimo 200mm.',
      },
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Na régua! Base de concreto com no mínimo **200mm** de altura, superfície **100%** plana e parafusos **M12**.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'A base de concreto é absolutamente crítica: deve ter uma altura obrigatória de no mínimo 200mm.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'A base precisa ter uma superfície 100% plana para distribuir o peso, com isolamento de borracha espessa para anular vibrações e fixação usando parafusos de ancoragem M12.',
            },
          ],
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Olha o padrão de ouro da Aula 02: a base de concreto deve ter altura obrigatória de no mínimo **200mm**!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'A base de concreto é absolutamente crítica: deve ter uma altura obrigatória de no mínimo 200mm.',
          },
        },
      ],
    },
    {
      id: 'inspecao-escala-aula2',
      tipo: 'inspecao',
      titulo: 'Inspeção de Projeto — Limites Modulares e Fundação',
      enunciado: 'Analise o infográfico da Aula 02 e indique o conjunto **correto** de especificações da Arquitetura da Escala do TVR Pro:',
      imagem: '/images/academia/tvrpro/aula02/infografico.jpg',
      legendaImagem: 'Infográfico Aula 02 — A Arquitetura da Escala TVR Pro',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Com essa modularidade inteligente, o sistema alcança uma capacidade monstruosa de até 90HP.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Para maximizar o investimento, utilizamos o conceito do limite inteligente de 130%.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A base de concreto é absolutamente crítica: deve ter uma altura obrigatória de no mínimo 200mm.',
        },
      ],
      pontos: [
        {
          id: 'p1',
          rotulo: 'Até 90HP, até 64 unidades internas, simultaneidade de até 130% (ou ≤100% em alta carga constante) e base de no mínimo 200mm com M12.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Excelente! Todos os números de projeto e fundação estão gravados na ponta da língua.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'Com essa modularidade inteligente, o sistema alcança uma capacidade monstruosa de até 90HP.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Para maximizar o investimento, utilizamos o conceito do limite inteligente de 130%.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'A base de concreto é absolutamente crítica: deve ter uma altura obrigatória de no mínimo 200mm.',
                },
              ],
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Entrada de ar apontada diretamente contra o vento principal e instalação próxima a gases sulfurosos corrosivos.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Jamais! Deve-se evitar gases sulfurosos corrosivos e nunca direcionar a entrada de ar contra o vento principal.',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-estatistica-ocupacao',
      tipo: 'filosofia',
      titulo: 'Simultaneidade Não É Milagre, É Estatística Honesta',
      principio: 'Simultaneidade de 130% não é multiplicação mágica de potência; é estatística de ocupação. Quando todas as salas pedem carga máxima juntas, só 100% de condensadora entrega 100% de frio.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Para maximizar o investimento, utilizamos o conceito do limite inteligente de 130%.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'onde todas as unidades operam na potência máxima juntas (como em data centers), a capacidade total das internas deve ser obrigatoriamente ≤100% da externa.',
        },
      ],
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'É igual aqui na padaria: eu tenho quarenta cadeiras, mas se os quarenta clientes pedirem pão na chapa no mesmo segundo, a chapa tem que dar conta do recado!',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Perfeito, Dona Marta! O bom engenheiro sabe quando o prédio reveza as cadeiras e quando todo mundo senta na mesa ao mesmo tempo.',
        },
      ],
    },
    {
      id: 'quiz-64-unidades',
      tipo: 'quiz',
      enunciado: 'Qual é o número máximo de unidades internas conectadas que um único sistema modular TVR Pro suporta gerenciar simultaneamente?',
      opcoes: [
        {
          id: 'a',
          texto: 'Até 64 unidades internas conectadas.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Regra de ouro cravada! Até **64 unidades** internas gerenciadas por um único coração mecânico modular de até **90HP**.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'Com essa modularidade inteligente, o sistema alcança uma capacidade monstruosa de até 90HP.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'A grande regra de ouro é que um único sistema modular TVR Pro suporta o gerenciamento simultâneo de até 64 unidades internas conectadas.',
                },
              ],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Apenas quatro unidades internas por prédio.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'neutro',
              texto: 'Quatro internas é porte de multi-split residencial! O TVR Pro gerencia até 64 unidades internas.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Apenas uma unidade interna por módulo externo.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'A grande vantagem do VRF modular é consolidar até 64 unidades internas num único sistema!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-pronto-tubos',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Base de **200mm** conferida na trena, borracha no lugar e chumbadores **M12** prontos! E agora, como a gente puxa a tubulação pra alimentar até **64 unidades**?',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A grande regra de ouro é que um único sistema modular TVR Pro suporta o gerenciamento simultâneo de até 64 unidades internas conectadas.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A base de concreto é absolutamente crítica: deve ter uma altura obrigatória de no mínimo 200mm.',
        },
      ],
    },
    {
      id: 'fala-bia-chamada-aula3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Na Aula 03 vamos entrar nas regras críticas de engenharia de tubulação: distâncias máximas, os três cadeados do refnet e os sifões de óleo!',
    },
    {
      id: 'fala-simon-fecho',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'bem-humorado',
      texto: 'Prepara o nível de bolha porque refnet torto na minha obra não passa nem na porta!',
    },
    {
      id: 'ref-conteudo-tvr2',
      tipo: 'referencia',
      texto: 'Revise os slides de modularidade, simultaneidade e fundação física na aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Com essa modularidade inteligente, o sistema alcança uma capacidade monstruosa de até 90HP.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A grande regra de ouro é que um único sistema modular TVR Pro suporta o gerenciamento simultâneo de até 64 unidades internas conectadas.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Para maximizar o investimento, utilizamos o conceito do limite inteligente de 130%.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'onde todas as unidades operam na potência máxima juntas (como em data centers), a capacidade total das internas deve ser obrigatoriamente ≤100% da externa.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A base de concreto é absolutamente crítica: deve ter uma altura obrigatória de no mínimo 200mm.',
        },
      ],
      pontos: [
        '**Escala gigante:** combine módulos para atingir até **90HP** e gerenciar simultaneamente até **64 unidades** internas.',
        '**Simultaneidade consciente:** use até **130%** em zonas variadas, mas trave obrigatoriamente em **≤100%** em cargas máximas constantes como data centers.',
        '**Padrão de ouro na fundação:** construa base de concreto de no mínimo **200mm**, **100%** plana, com borracha antivibração, chumbadores **M12** e vala de drenagem.',
      ],
      proxima: 'Na Aula 03 dominaremos as regras críticas de tubulação: comprimentos máximos, regra dos três cadeados com size-up, sifões de óleo e nivelamento das refnets.',
    },
  ],
};
