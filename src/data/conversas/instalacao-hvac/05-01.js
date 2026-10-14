// src/data/conversas/instalacao-hvac/05-01.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 05-01
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '05-01',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'obra-forro',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Sexta, 7h30. Salão corporativo em obras. No teto, uma unidade Cassete de 4 vias e uma evaporadora Built-In dutada suspensa em varões roscados.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, o eletricista quer instalar uma luminária pendente grandona bem na frente da aleta do Cassete, a uns 20 centímetros da saída de ar. Tem problema?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Embarga essa luminária agora, Ju! As unidades Cassete dependem do **Efeito Coanda**: o jato de ar frio cola no forro de gesso por baixa pressão e viaja longe antes de descer suavemente!',
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Se tiver uma viga, sanca ou luminária no caminho, rompe a camada limite do Efeito Coanda! O ar gelado bate no obstáculo e mergulha direto de volta para a grade central de retorno!',
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Aí o sensor de retorno acha que a sala já gelou e desliga o compressor com o salão fervendo! Para evitar essa quebra de camada, exige-se distância livre de **500mm a 1000mm** de qualquer obstáculo.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Para evitar essa quebra de camada, exige-se distância de 500mm a 1000mm de qualquer obstáculo.',
      },
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      texto: 'E olha a geometria hidráulica do Cassete: a bomba centrífuga interna eleva o condensado verticalmente em **850 mm a 910 mm** acima da bandeja (a famosa *Lift Trap*) antes de cair com **1%** de declive!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'As unidades cassete operam com bombas centrífugas internas capazes de elevar a água condensada verticalmente em 850 mm a 910 mm acima da bandeja.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A linha de descarga do dreno deve subir verticalmente logo na saída da boia antes de inclinar horizontalmente com no mínimo 1% (1:100) de declive',
        },
      ],
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Em uma unidade evaporadora Built-In Dutada (oculta no forro): por que é proibido deixar o retorno aberto sugando ar solto direto do entreforro (Open Plenum) sem duto de retorno?',
      opcoes: [
        {
          id: 'a',
          texto: 'Porque o ar do entreforro é limpo demais e esfria rápido demais.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'ironico',
              texto: 'Limpo demais?! Já olhou o que tem em cima de um forro comercial antigo, Ju?',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Porque o entreforro não é selado: a máquina suga poeira de fibra mineral, calor da laje superior, ar não tratado de frestas e contaminantes biológicos/VOCs, destruindo a eficiência e a qualidade do ar.',
          ideal: true,
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Na mosca! O retorno deve ser **100% dutado** desde a grelha do ambiente até a caixa plenum traseira da máquina, isolado termicamente!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Porque o ventilador centrífugo só funciona sem filtro.',
          reacao: [
            {
              quem: 'bia',
              texto: 'Jamais opere sem filtro: a serpentina entope e perde toda a troca térmica!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E na saída e entrada da unidade Built-In, para não passar vibração da máquina para os dutos de chapa, instalamos o **colarinho de lona flexível** (*Canvas Connector*)!',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Mas atenção à regra da lona: ela deve ter comprimento menor que **250 mm** (10 polegadas) e ficar perfeitamente alinhada e esticada, sem dobrar nem colapsar na sucção!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'comprimento menor que 250 mm (10 polegadas) e estar perfeitamente alinhados',
      },
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E na fixação dos 4 varões roscados no teto: sempre use sistema de **porca e contraporca travadas** (*Double-Nut Locking*) com arruela e coxim de borracha para a vibração nunca desenroscar o nível!',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Bia, e quando a gente instala os dutos num Built-In Inverter, a máquina adivinha sozinha o tamanho do duto ou a gente precisa configurar a pressão estática (TESP) no controle?',
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e o Built-In que “Assoviava” nas Portas',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num apartamento de alto padrão, o Zé instalou um Built-In com apenas dois metros de duto retinho, mas configurou a **Pressão Estática Externa (TESP)** na placa para o valor máximo industrial!',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Com TESP alta demais para um duto curto de baixa perda, a vazão (CFM) disparou! Parecia uma turbina de avião nas grelhas e a velocidade do ar arrancava água da bandeja!',
        },
        {
          quem: 'simon',
          texto: 'E se configurar TESP baixa demais num duto longo, a vazão morre e a serpentina congela! Por isso ajustamos a curva de pressão estática pela tabela OEM ou ativamos o *Auto-ESP* no comissionamento.',
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Unidades Piso-Teto instaladas na posição horizontal junto ao forro podem ficar inclinadas para a frente para jogar o ar mais rápido no chão.',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          texto: 'Mito! Se inclinar para a frente contra o caimento da bandeja de dreno, a água acumula na borda frontal e escorre pela carcaça em cima do cliente!',
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'As bombas centrífugas internas de unidades Cassete são projetadas para elevar a água condensada verticalmente em 850 mm a 910 mm acima da bandeja antes do trecho horizontal.',
      verdade: true,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'As unidades cassete operam com bombas centrífugas internas capazes de elevar a água condensada verticalmente em 850 mm a 910 mm acima da bandeja.',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Verdade! Respeite o teto de elevação vertical de **850 mm a 910 mm** da bomba interna e, a partir do ponto alto, desça com no mínimo **1%** de declividade.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'As unidades cassete operam com bombas centrífugas internas capazes de elevar a água condensada verticalmente em 850 mm a 910 mm acima da bandeja.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'A linha de descarga do dreno deve subir verticalmente logo na saída da boia antes de inclinar horizontalmente com no mínimo 1% (1:100) de declive',
            },
          ],
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Por que a conexão flexível de lona (Canvas Connector) entre a saída da evaporadora Built-In e o duto metálico deve ter menos de 250 mm e ficar esticada sem dobras?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'comprimento menor que 250 mm (10 polegadas) e estar perfeitamente alinhados',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Porque lonas longas ou frouxas colapsam/vibram com a pressão do ar, gerando perda de carga severa (TESP alta), turbulência e ruído aerodinâmico.',
          correta: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'comprimento menor que 250 mm (10 polegadas) e estar perfeitamente alinhados',
          },
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! Comprimento menor que **250 mm** (10 polegadas) e alinhamento perfeito desacoplam a vibração mecânica sem estrangular o fluxo de ar!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'comprimento menor que 250 mm (10 polegadas) e estar perfeitamente alinhados',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Para poder fazer curvas de 90 graus usando só a lona mole.',
          feedback: [
            {
              quem: 'simon',
              texto: 'Usar lona flexível como curva de 90 graus estrangula a boca do ventilador!',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora Hidráulica de Cassete — Teto de Elevação Vertical (Lift Trap)',
      formula: 'Elevação Máxima da Bomba Interna = 850 mm a 910 mm',
      enunciado: 'Você está montando a subida vertical (*Lift Trap*) na saída da bomba centrífuga de uma unidade Cassete antes de entrar na queda horizontal de **1%**. Pelo texto técnico da aula (faixa de **850 mm a 910 mm**), qual é o limite **máximo** dessa elevação em **mm**?',
      leituras: [
        { rotulo: 'Faixa de Elevação (Cassete)', valor: '850 mm a 910 mm' },
        { rotulo: 'Declive Horizontal Pós-Subida', valor: '1% (1:100)' },
        { rotulo: 'Lona Flexível Máxima', valor: '250 mm' },
      ],
      unidade: 'mm',
      respostaCorreta: 910,
      tolerancia: 1,
      opcoesRapidas: [250, 500, 850, 910],
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'As unidades cassete operam com bombas centrífugas internas capazes de elevar a água condensada verticalmente em 850 mm a 910 mm acima da bandeja.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A linha de descarga do dreno deve subir verticalmente logo na saída da boia antes de inclinar horizontalmente com no mínimo 1% (1:100) de declive',
        },
        {
          campo: 'conteudo_html',
          trecho: 'comprimento menor que 250 mm (10 polegadas) e estar perfeitamente alinhados',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Cravado! O teto da faixa de **850 mm a 910 mm** garante que a bomba centrífuga vença a coluna hidrostática sem perder vazão.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'As unidades cassete operam com bombas centrífugas internas capazes de elevar a água condensada verticalmente em 850 mm a 910 mm acima da bandeja.',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Confira os números da aula: a bomba interna do Cassete eleva de **850 mm a 910 mm** acima da bandeja; o limite superior é **910 mm**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'As unidades cassete operam com bombas centrífugas internas capazes de elevar a água condensada verticalmente em 850 mm a 910 mm acima da bandeja.',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção Comercial — Cassete, Built-In e Efeito Coanda',
      enunciado: 'Observe o slide de Instalação Comercial de Elite da Aula 05-01 e aponte a montagem que garante aerodinâmica e drenagem perfeitas:',
      imagem: '/images/academia/hvac-instalacao/modulo05/modulo05-01/Modulo-05-01-Elite Commercial HVAC Installation Training-01.jpg',
      legendaImagem: 'Módulo 05-01 — Unidades Cassete, Built-In Dutadas e Piso-Teto',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Cassete nivelado com 500mm a 1000mm livres para o Efeito Coanda, Lift Trap até 910 mm e Built-In com retorno dutado e lona < 250 mm.',
          correta: true,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Para evitar essa quebra de camada, exige-se distância de 500mm a 1000mm de qualquer obstáculo.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'As unidades cassete operam com bombas centrífugas internas capazes de elevar a água condensada verticalmente em 850 mm a 910 mm acima da bandeja.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'comprimento menor que 250 mm (10 polegadas) e estar perfeitamente alinhados',
            },
          ],
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Padrão arquitetônico de elite! Coanda livre (**500mm a 1000mm**), elevação respeitando **850 mm a 910 mm** e lona alinhada abaixo de **250 mm**.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'exige-se distância de 500mm a 1000mm de qualquer obstáculo.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'elevar a água condensada verticalmente em 850 mm a 910 mm acima da bandeja.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'comprimento menor que 250 mm (10 polegadas)',
                },
              ],
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Cassete colado em viga que rebate o ar frio para o retorno e Built-In sugando poeira solta do entreforro sem duto de retorno.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              texto: 'Quebra do Efeito Coanda + *Open Plenum* sujo = cliente reclamando de calor, poeira e conta de luz alta!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'A Climatização Mais Bonita é Aquela que Ninguém Vê nem Ouve',
      falas: [
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Em obras de arquitetura de alto padrão, o nosso maior elogio é o silêncio. Quando um Built-In está nivelado na contraporca, com a lona abaixo de **250 mm** e a TESP calibrada, o ar acaricia a sala sem fazer alarde.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'comprimento menor que 250 mm (10 polegadas) e estar perfeitamente alinhados',
          },
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Dialogar com o arquiteto e mostrar por que precisamos de **500mm a 1000mm** livres pro Efeito Coanda é o que transforma o instalador num consultor respeitado na obra.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Para evitar essa quebra de camada, exige-se distância de 500mm a 1000mm de qualquer obstáculo.',
          },
        },
      ],
      principio: 'Conforto de alto padrão exige domínio invisível da aerodinâmica no entreforro.',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte os parâmetros de **Efeito Coanda** (**500mm a 1000mm**), **Lift Trap** (**850 mm a 910 mm**) e **TESP** na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Para evitar essa quebra de camada, exige-se distância de 500mm a 1000mm de qualquer obstáculo.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'As unidades cassete operam com bombas centrífugas internas capazes de elevar a água condensada verticalmente em 850 mm a 910 mm acima da bandeja.',
        },
      ],
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Cassete e Efeito Coanda:** mantenha **500mm a 1000mm** livres de obstáculos no teto e respeite a subida *Lift Trap* de **850 mm a 910 mm** seguida de **1%** de queda.',
        '**Built-In Dutado:** retorno **100% dutado** (proibido *Open Plenum*), lona flexível menor que **250 mm** e ajuste obrigatório da pressão estática (**TESP**).',
        '**Suspensão Segura:** varões roscados travados com porca/contraporca (*Double-Nut*) e amortecedores elastoméricos.',
      ],
      proxima: 'Na Aula 05-02 vamos dominar a dinâmica dos fluidos em redes VRF: Refnets, Vórtices de Dean e caixas BS de Recuperação de Calor.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Para evitar essa quebra de camada, exige-se distância de 500mm a 1000mm de qualquer obstáculo.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'As unidades cassete operam com bombas centrífugas internas capazes de elevar a água condensada verticalmente em 850 mm a 910 mm acima da bandeja.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A linha de descarga do dreno deve subir verticalmente logo na saída da boia antes de inclinar horizontalmente com no mínimo 1% (1:100) de declive',
        },
        {
          campo: 'conteudo_html',
          trecho: 'comprimento menor que 250 mm (10 polegadas) e estar perfeitamente alinhados',
        },
      ],
    },
  ],
};
