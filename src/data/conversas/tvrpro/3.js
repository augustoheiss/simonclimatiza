// src/data/conversas/tvrpro/3.js
// Roteiro "Papo de Balcão" — Instalação e Comissionamento TVR Pro DC Inverter · Aula 03

export default {
  schema: 1,
  cursoId: 'tvrpro',
  aulaId: '3',
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
      texto: 'Bancada da oficina às 07h30. Uma junta de derivação refnet de cobre está sobre a mesa ao lado de um transferidor de ângulo e do projeto isométrico.',
    },
    {
      id: 'fala-bia-alcance-sistema',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Olha o alcance dessa engenharia, Juninho: o **TVR Pro** suporta até **1.000m** de tubulação total, com **175m** reais (**200m** equivalentes) até a interna mais distante!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'O sistema suporta um ecossistema massivo de até 1.000m de tubulação total.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A distância real entre a unidade externa (ODU) e a interna (IDU) mais distante é de 175m, com um comprimento equivalente de 200m.',
        },
      ],
    },
    {
      id: 'fala-simon-tres-cadeados',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'E do primeiro refnet até a unidade mais distante o limite padrão é **40m**, mas podemos estender para **90m** cumprindo a regra dos **"três cadeados"**, incluindo o aumento de diâmetro (**size-up**)!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Aprenderemos a regra dos "três cadeados" para estender a distância do primeiro refnet até a unidade mais distante de 40m para 90m, incluindo a obrigatoriedade do aumento de diâmetro (size-up).',
      },
    },
    {
      id: 'fala-juninho-gravidade-pergunta',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E quando a tubulação sobe ou desce muitos andares no prédio? Como o óleo vence a gravidade sem escorrer tudo pra baixo?',
    },
    {
      id: 'escolha-sifao-oleo',
      tipo: 'escolha',
      pergunta: 'Em um edifício onde a unidade externa (ODU) está no telhado acima das internas e o desnível vertical supera **20m**, qual é a regra vital obrigatória no tubo de gás principal?',
      opcoes: [
        {
          id: 'a',
          texto: 'Subir o tubo reto sem nenhuma curva para o óleo escorregar mais rápido.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Em tubo vertical liso maior que **20m**, o óleo escorre de volta por gravidade nas cargas baixas e deixa o compressor seco lá no telhado!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Instalar sifões de óleo a cada 10m no tubo de gás principal, atuando como degraus para o retorno contínuo do lubrificante.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Regra vital cravada! Acima de **20m** de desnível com a ODU no alto, instalamos sifões de óleo a cada **10m** no tubo de gás principal.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Regra Vital: Quando a ODU está acima das internas e o desnível vertical supera 20m, é obrigatória a instalação de sifões de óleo a cada 10m no tubo de gás principal. Esses sifões atuam como degraus para garantir o retorno do óleo e a lubrificação contínua do compressor.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Instalar uma bomba d’água dentro do tubo de cobre.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'risada',
              texto: 'Quem bombeia o óleo são os degraus dos sifões a cada **10m** somados à velocidade de arraste do gás!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-bia-desnivel-maximo',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Vale guardar também o teto de desnível vertical do sistema: **90m** se a ODU estiver no telhado e **110m** se estiver instalada no térreo.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O desnível máximo permitido depende da posição da ODU: 90m se estiver no telhado e 110m se estiver no térreo.',
      },
    },
    {
      id: 'fala-simon-fisica-refnets',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Agora segura essa peça aqui na mão: a junta de derivação (**refnet**). Ela deve ser instalada rigorosamente na horizontal, com erro angular máximo de apenas **10º**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A precisão no posicionamento das juntas de derivação (refnets) é inegociável. Elas devem ser instaladas rigorosamente na horizontal, com um erro angular máximo de apenas 10º.',
      },
    },
    {
      id: 'fala-juninho-por-que-10-graus',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'Por que tanta exigência com esse ângulo de **10º**, Simon? O que acontece se o instalador soldar o refnet inclinado de lado?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Elas devem ser instaladas rigorosamente na horizontal, com um erro angular máximo de apenas 10º.',
      },
    },
    {
      id: 'fala-bia-divisao-bifasica',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Por causa da divisão bifásica! Qualquer inclinação excessiva força a separação por gravidade: o ramal inferior inunda com líquido e o superior sofre deficiência térmica!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Qualquer inclinação excessiva força a separação por gravidade: o ramal inferior inunda com líquido, enquanto o superior sofre deficiência térmica, causando falhas catastróficas nas unidades internas.',
      },
    },
    {
      id: 'causo-refnet-torto',
      tipo: 'causo',
      titulo: 'O Mistério do Andar que Congelava de um Lado e Suava do Outro',
      falas: [
        {
          quem: 'simon',
          emocao: 'bem-humorado',
          texto: 'Fomos fazer perícia num prédio onde metade das evaporadoras do corredor afogava em líquido e a outra metade não gelava nada.',
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'Era falta de gás ou placa queimada, Simon?',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Subimos na escada e abrimos o forro: o instalador tinha soldado o **refnet** principal inclinado quase a quarenta e cinco graus, muito além dos **10º**! Nivelamos na horizontal e o andar inteiro equalizou na hora.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Elas devem ser instaladas rigorosamente na horizontal, com um erro angular máximo de apenas 10º.',
          },
        },
      ],
    },
    {
      id: 'mito-40m-90m-sem-sizeup',
      tipo: 'mitoVerdade',
      afirmacao: 'É permitido estender a distância do primeiro refnet até a unidade interna mais distante de 40m para 90m sem aumentar o diâmetro da tubulação (sem size-up).',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! Para ir de **40m** até **90m** após o primeiro refnet, é obrigatório cumprir a regra dos "três cadeados", que exige o aumento de diâmetro (**size-up**).',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Aprenderemos a regra dos "três cadeados" para estender a distância do primeiro refnet até a unidade mais distante de 40m para 90m, incluindo a obrigatoriedade do aumento de diâmetro (size-up).',
          },
        },
        {
          quem: 'simon',
          emocao: 'neutro',
          texto: 'Sem aumentar a bitola, a perda de carga estrangula a chegada de fluido na última evaporadora.',
        },
      ],
    },
    {
      id: 'calc-sifoes-10m',
      tipo: 'calculadora',
      titulo: 'Calculadora de Prumada Vertical — Espaçamento de Sifões de Óleo',
      formula: 'Desnível Vertical > 20m (ODU acima) → 1 Sifão a cada 10m',
      enunciado: 'Quando a unidade externa (ODU) está instalada acima das internas e o desnível vertical supera **20m**, a cada quantos metros deve ser instalado um sifão de óleo no tubo de gás principal?',
      leituras: [
        { rotulo: 'Gatilho de Desnível Vertical', valor: 'Acima de 20m' },
        { rotulo: 'Desnível Máx. (Telhado / Térreo)', valor: '90m / 110m' },
        { rotulo: 'Erro Angular Máx. Refnet', valor: '10º na horizontal' },
      ],
      unidade: 'metros',
      respostaCorreta: 10,
      tolerancia: 0.1,
      opcoesRapidas: [5, 10, 20, 40],
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Regra Vital: Quando a ODU está acima das internas e o desnível vertical supera 20m, é obrigatória a instalação de sifões de óleo a cada 10m no tubo de gás principal.',
      },
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Exato! A cada **10m** de subida no tubo de gás principal instalamos um sifão para servir de degrau ao retorno de óleo.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Quando a ODU está acima das internas e o desnível vertical supera 20m, é obrigatória a instalação de sifões de óleo a cada 10m no tubo de gás principal.',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Olha a regra vital do Eixo 2: superou **20m** de desnível vertical, o sifão entra a cada **10m**!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Quando a ODU está acima das internas e o desnível vertical supera 20m, é obrigatória a instalação de sifões de óleo a cada 10m no tubo de gás principal.',
          },
        },
      ],
    },
    {
      id: 'inspecao-tubulacao-aula3',
      tipo: 'inspecao',
      titulo: 'Inspeção Geométrica — Limites de Rede, Sifões e Refnets',
      enunciado: 'Observe o infográfico da Aula 03 e aponte a alternativa **correta** sobre os três eixos fundamentais da tubulação do TVR Pro:',
      imagem: '/images/academia/tvrpro/aula03/infografico.jpg',
      legendaImagem: 'Infográfico Aula 03 — Regras Críticas de Engenharia e Tubulação',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Até 1.000m totais (175m reais / 200m equiv.), sifões a cada 10m quando o desnível supera 20m, e refnets na horizontal com erro máximo de 10º.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Geometria nota dez! Com esses parâmetros você protege a divisão bifásica e o retorno de óleo em qualquer edifício.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Elas devem ser instaladas rigorosamente na horizontal, com um erro angular máximo de apenas 10º.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Refnets instalados inclinados a 45º para forçar o líquido a cair apenas no ramal de baixo.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Inclinar o refnet além de 10º provoca separação por gravidade, inundando o ramal inferior e secando o superior!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-degraus-gravidade',
      tipo: 'filosofia',
      titulo: 'Os Degraus Onde o Óleo Toma Fôlego',
      principio: 'Cem metros de altura desafiam a gravidade a cada segundo. Os sifões a cada dez metros e o nivelamento dos refnets mostram que a grande engenharia mora na obediência aos pequenos ângulos.',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'A física dentro do tubo não perdoa desleixo: dez graus a mais de inclinação num refnet escondido no gesso condenam metade de um andar a passar calor.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Por isso o nível de bolha e a trena são instrumentos tão nobres quanto o próprio computador de diagnóstico.',
        },
      ],
    },
    {
      id: 'quiz-comprimento-equivalente',
      tipo: 'quiz',
      enunciado: 'Pelo Eixo 1 da Aula 03, qual é a distância máxima real e o comprimento equivalente permitido entre a unidade externa (ODU) e a unidade interna (IDU) mais distante no TVR Pro?',
      opcoes: [
        {
          id: 'a',
          texto: 'Distância real de 175m, com comprimento equivalente de 200m (dentro do limite de 1.000m de tubulação total).',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! **175m** reais, **200m** equivalentes considerando as perdas nas curvas e refnets, e até **1.000m** na soma total!',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'O sistema suporta um ecossistema massivo de até 1.000m de tubulação total.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'A distância real entre a unidade externa (ODU) e a interna (IDU) mais distante é de 175m, com um comprimento equivalente de 200m.',
                },
              ],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Apenas quinze metros reais sem curvas.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'neutro',
              texto: 'Quinze metros é limite de split pequeno! O TVR Pro chega a 175m reais e 200m equivalentes.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Cinco quilômetros sem limite de desnível.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'O limite total da rede é de 1.000m e a distância real máxima até a IDU mais longe é de 175m.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-resumo-aula3',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Tudo anotado: **1.000m** totais, **175m** reais (**200m** equivalentes), três cadeados de **40m** para **90m** com size-up, sifão a cada **10m** acima de **20m** e refnet em até **10º**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Elas devem ser instaladas rigorosamente na horizontal, com um erro angular máximo de apenas 10º.',
      },
    },
    {
      id: 'fala-simon-chamada-aula4',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Agora que o traçado está desenhado, na Aula 04 vamos acender o maçarico com nitrogênio passante e ajustar as três roscas do chumbador M12!',
    },
    {
      id: 'fala-marta-cuidado-fogo',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'bem-humorado',
      texto: 'Maçarico só lá na bancada de solda, hein! Aqui perto dos meus pães doces só entra café!',
    },
    {
      id: 'ref-conteudo-tvr3',
      tipo: 'referencia',
      texto: 'Consulte os diagramas de limites geométricos, sifões e nivelamento de refnets na aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'O sistema suporta um ecossistema massivo de até 1.000m de tubulação total.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A distância real entre a unidade externa (ODU) e a interna (IDU) mais distante é de 175m, com um comprimento equivalente de 200m.',
        },
      ],
      pontos: [
        '**Limites de extensão:** até **1.000m** totais, **175m** reais (**200m** equivalentes) e extensão do 1º refnet de **40m** para **90m** com os três cadeados e **size-up**.',
        '**Gravidade e retorno de óleo:** desnível máximo de **90m** (ODU no telhado) ou **110m** (térreo), com sifões a cada **10m** sempre que a subida superar **20m**.',
        '**Física das refnets:** instale rigorosamente na horizontal com erro angular máximo de **10º** para evitar separação bifásica por gravidade.',
      ],
      proxima: 'Na Aula 04 veremos a Anatomia da Precisão: ancoragem M12 com 3 roscas visíveis, brasagem com nitrogênio passante e proibição de fluxo químico em liga BCUP.',
    },
  ],
};
