// src/data/conversas/instalacao-hvac/01-02.js
// Roteiro em RASCUNHO (status: 'rascunho') para demonstrar o bloqueio de governança G-Publicação:
// Passa 100% no validador técnico, mas NÃO aparece no manifesto nem no front-end até receber revisão assinada.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '01-02',
  status: 'rascunho',
  revisao: {
    tecnica: null,
    data: null,
  },
  cenario: 'bancada-oficina',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Terça, 7h30. Bancada da oficina. Bia coloca as sondas digitais e o psicrômetro na mesa ao lado do manifold antigo do Juninho.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, um colega antigo disse que se o tubo de sucção tiver geladinho igual lata de refrigerante, a carga tá perfeita!',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'ironico',
      texto: 'O famoso teste “beer-can cold” no dedômetro! Esquece isso, Ju — em inverter e EEV, carregar no chute destrói equipamento.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'As metodologias legadas do passado — o teste tátil "beer-can cold" nas linhas de sucção, o carregamento de refrigerante "por pressão" — foram definitivamente substituídas',
      },
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Primeiro fundamento da psicrometria: diferenciar **Calor Sensível** (muda a temperatura de bulbo seco) de **Calor Latente** (mudança de fase / desumidificação).',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Calor sensível é a energia térmica que, quando adicionada ou removida, resulta em uma mudança diretamente quantificável na temperatura',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Considere dois ambientes a 100°F: um deserto seco e uma sala de vapor com 100% de umidade relativa. Por que você se sente muito mais sufocado na sala de vapor?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Considere dois ambientes a 100°F: Deserto seco (Arizona): o suor evapora rapidamente → absorve calor latente massivo da pele → técnico se sente relativamente fresco apesar de 100°F. Sala de vapor (100% umidade relativa): o suor não pode evaporar',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Porque a 100% de umidade o suor não evapora e não retira calor latente da pele.',
          ideal: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Sala de vapor (100% umidade relativa): o suor não pode evaporar → nenhum calor latente é absorvido',
          },
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! No deserto a **100°F** o suor evapora rápido e rouba calor latente da pele; a **100%** de umidade, nada evapora.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Deserto seco (Arizona): o suor evapora rapidamente → absorve calor latente massivo da pele → técnico se sente relativamente fresco apesar de 100°F. Sala de vapor (100% umidade relativa): o suor não pode evaporar',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Porque o termômetro de bulbo seco marca mais graus na sala úmida.',
          reacao: [
            {
              quem: 'simon',
              texto: 'Os dois estão a **100°F** no termômetro comum! A diferença é a umidade travando a evaporação do suor.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Considere dois ambientes a 100°F:',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'É por isso que máquina superdimensionada deixa o cliente “frio e úmido”: ela bate a temperatura rápido e desliga antes de secar o ar.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'possuem tanta capacidade sensível que satisfazem o termostato antes de ter tempo de funcionamento para remover umidade, deixando os ocupantes "frios e úmidos".',
      },
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Agora olha os dois sinais vitais do ciclo: **Sobreaquecimento (SH)** na sucção e **Subarrefecimento (SC)** na linha de líquido.',
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'bia',
      texto: 'O **Sobreaquecimento** diz se o evaporador tá faminto ou inundado, e garante que só chegue vapor seco no compressor.',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E o **Subarrefecimento** garante uma coluna de líquido puro antes da válvula de expansão, sem formar bolhas prematuras (**flash gas**).',
      fonte: {
        campo: 'conteudo_html',
        aulaRef: 'apresentacao',
        trecho: 'Subarrefecimento (líquido) garante que o fluido esteja totalmente condensado em líquido denso antes de atingir a válvula de expansão, evitando ebulição prematura (flash gas).',
      },
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Então SH protege o compressor e SC protege a eficiência da válvula de expansão?',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Resumo perfeito! Se entrar bolha de vapor na TXV ou EEV, a capacidade do sistema despenca.',
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e o “Tubo Suando”',
      falas: [
        {
          quem: 'simon',
          texto: 'O Zé regulou uma máquina inverter só colocando a mão no tubo até ficar gelado. Nem pôs termômetro de grampo nem olhou a pressão.',
        },
        {
          quem: 'bia',
          texto: 'Sem medir Sobreaquecimento e Subarrefecimento com instrumento digital, ele deixou a máquina com sobrecarga severa e perda de eficiência.',
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Calor latente altera a fase física da água (condensação/evaporação) sem alterar a temperatura sensível no termômetro de bulbo seco.',
      verdade: true,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Calor latente representa a energia térmica necessária para facilitar uma mudança de fase física — sólido para líquido (fusão), líquido para gás (evaporação), gás para líquido (condensação) — sem nenhuma mudança na temperatura sensível.',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Verdade! Toda a energia vai para romper ou formar ligações intermoleculares na mudança de fase.',
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Carregar gás “por pressão” ou pelo tato (“beer-can cold”) continua sendo aceitável em sistemas modernos com EEV e compressor inverter.',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          texto: 'Mito! Em sistemas inverter e microcanal, diagnóstico sem psicrometria e medição empírica de SH e SC leva a falha catastrófica.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'compressores inversores de velocidade variável, trocadores de calor microcanal e Válvulas de Expansão Eletrônicas (EEVs) controladas por microprocessador.',
          },
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Um cliente reclama que a sala está na temperatura ajustada no controle, mas a sensação é abafada e “fria e úmida”. Qual fenômeno termodinâmico explica isso?',
      opcoes: [
        {
          id: 'a',
          texto: 'Equipamento superdimensionado que abate o calor sensível rápido demais e desliga antes de remover o calor latente (umidade).',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Perfeito! Sem tempo de corrida na serpentina abaixo do ponto de orvalho, o vapor d’água não condensa.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Esta analogia explica por que equipamentos superdimensionados falham: possuem tanta capacidade sensível que satisfazem o termostato antes de ter tempo de funcionamento para remover umidade, deixando os ocupantes "frios e úmidos".',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Excesso de remoção de calor latente sem mudança de temperatura.',
          feedback: [
            {
              quem: 'simon',
              texto: 'Se tivesse removido calor latente, o ar estaria seco e confortável!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-10',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Por isso sempre levamos termômetro de contato, manifold digital e psicrômetro pra obra.',
    },
    {
      id: 'fala-11',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Quem mede domina o sistema; quem chuta trabalha duas vezes.',
    },
    {
      id: 'fala-12',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Nunca mais confio só na mão no tubo de sucção!',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Confira os detalhes completos de SH, SC e Psicrometria na aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Sensível vs. Latente:** sensível baixa o termômetro; latente condensa a umidade na serpentina.',
        '**Aposente o dedômetro:** “beer-can cold” não diagnostica inverter, microcanal nem EEV.',
        '**Dupla de ouro:** Sobreaquecimento protege o compressor contra líquido; Subarrefecimento evita *flash gas* na expansão.',
      ],
      proxima: 'Na Aula 01-03 vamos mergulhar nos fluidos refrigerantes, óleos POE e química do circuito.',
    },
  ],
};
