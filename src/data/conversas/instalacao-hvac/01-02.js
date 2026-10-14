// src/data/conversas/instalacao-hvac/01-02.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 01-02
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '01-02',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
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
      texto: 'Resumo perfeito! E atenção à regra de ouro: sistemas com **TXV** ou **EEV** são avaliados pela carga usando **Subarrefecimento** (geralmente **10°F a 12°F** na plaqueta).',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Regra absoluta: Sistemas TXV devem ser carregados e avaliados usando Subarrefecimento — não sobreaquecimento. O alvo está na plaqueta de dados da unidade externa, geralmente 10°F a 12°F.',
      },
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e o “Tubo Suando” na Serpentina Microcanal',
      falas: [
        {
          quem: 'simon',
          texto: 'O Zé regulou uma máquina inverter só colocando a mão no tubo até ficar gelado. Depois tentou fazer pump down numa condensadora microcanal.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Que perigo! Serpentinas microcanal possuem volume interno até **49%** menor que as convencionais de cobre. Fazer pump down nelas estoura os tubos planos de alumínio!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Serpentinas microcanal possuem volume interno até 49% menor que serpentinas convencionais de cobre. Tentar forçar a carga inteira do sistema para dentro do condensador microcanal fará a pressão hidráulica exceder o limiar de ruptura dos tubos planos de alumínio',
          },
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
      afirmacao: 'Carregar todo sistema de orifício fixo para 10°F flat de sobreaquecimento é seguro em qualquer condição climática.',
      verdade: false,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O conceito de carregar todo sistema para 10°F flat é um mito perigoso.',
      },
      explicacao: [
        {
          quem: 'simon',
          texto: 'Mito perigoso! Em orifício fixo o sobreaquecimento alvo é dinâmico conforme o bulbo úmido interno e o bulbo seco externo; valores abaixo de **5°F** trazem risco extremo de slugging.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Valores abaixo de 5°F indicam risco extremo de slugging do compressor.',
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
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora de Campo — Limite Superior de Subarrefecimento (TXV/EEV)',
      formula: 'SC = T_saturação condensador − T_linha de líquido',
      enunciado: 'Para sistemas de alta eficiência com válvula **TXV/EEV**, o alvo de **Subarrefecimento** na plaqueta de dados da unidade externa fica geralmente entre **10°F a 12°F**. Qual é o valor superior dessa faixa padrão em **°F**?',
      leituras: [
        { rotulo: 'Faixa SC (TXV/EEV)', valor: '10°F a 12°F' },
        { rotulo: 'Risco Slugging SH', valor: '< 5°F' },
        { rotulo: 'Vazão Padrão', valor: '400 CFM/ton' },
      ],
      unidade: '°F',
      respostaCorreta: 12,
      tolerancia: 0.1,
      opcoesRapidas: [5, 10, 12, 20],
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'O alvo está na plaqueta de dados da unidade externa, geralmente 10°F a 12°F.',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Valores abaixo de 5°F indicam risco extremo de slugging do compressor.',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Exato! O teto típico de plaqueta para Subarrefecimento em TXV/EEV é **12°F** (faixa **10°F a 12°F**), garantindo coluna de líquido sólido sem inundar o condensador.',
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Confira na plaqueta: a faixa padrão de Subarrefecimento para TXV/EEV é **10°F a 12°F**, portanto o limite superior é **12°F**.',
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Diagnóstico — Matriz dos 4 Quadrantes',
      enunciado: 'Olhando para os sinais vitais do ciclo na Matriz dos 4 Quadrantes, qual combinação crava **Subcarga (Vazamento)** no Quadrante Q1?',
      imagem: '/images/academia/hvac-instalacao/modulo01/modulo01-02/Module01-02-HVAC Thermodynamics Training Guide-01.jpg',
      legendaImagem: 'Módulo 01-02 — Sinais Vitais: Sobreaquecimento e Subarrefecimento',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Q1: Sobreaquecimento Alto (↑) e Subarrefecimento Baixo (↓) — evaporador faminto e condensador sem reserva líquida.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Na mosca! Sobreaquecimento alto com subarrefecimento baixo é assinatura clássica de subcarga (vazamento).',
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Q2: Sobreaquecimento Baixo (↓) e Subarrefecimento Alto (↑) — excesso de fluido acumulado no condensador.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              texto: 'Esse é o Quadrante Q2, que indica **Sobrecarga** de refrigerante, e não subcarga!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Sensação na Palma da Mão é Opinião; Sonda no Cobre é Fato',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'A mão humana foi feita para segurar ferramenta e cumprimentar cliente honesto, não para medir saturação de gás. Na engenharia, opinião queima bobina.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Quando você abraça o tubo com o termopar isolado e espera estabilizar, você respeita a máquina pelo que ela realmente sente, não pelo que a pressa quer ver.',
        },
      ],
      principio: 'Quem mede com precisão assina a obra uma vez só; quem confia no dedômetro vira escravo do retorno.',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Confira a Matriz dos 4 Quadrantes e a tabela de **Sobreaquecimento Alvo** na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Sensível vs. Latente:** sensível baixa o termômetro; latente condensa a umidade na serpentina.',
        '**Aposente o dedômetro:** “beer-can cold” não diagnostica inverter, microcanal nem EEV.',
        '**Dupla de ouro:** Sobreaquecimento protege o compressor contra líquido; Subarrefecimento (geralmente **10°F a 12°F** em TXV) evita *flash gas* na expansão.',
      ],
      proxima: 'Na Aula 01-03 vamos mergulhar nos fluidos refrigerantes, óleos POE e química do circuito.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O alvo está na plaqueta de dados da unidade externa, geralmente 10°F a 12°F.',
      },
    },
  ],
};
