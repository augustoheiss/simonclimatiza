// src/data/conversas/tvrpro/5.js
// Roteiro "Papo de Balcão" — Instalação e Comissionamento TVR Pro DC Inverter · Aula 05

export default {
  schema: 1,
  cursoId: 'tvrpro',
  aulaId: '5',
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
      texto: 'Casa de máquinas na cobertura. Cilindro de nitrogênio seco, bomba de vácuo com válvula de retenção e balança digital de precisão alinhados.',
    },
    {
      id: 'fala-simon-momento-master',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Chegamos ao momento mais importante da obra, Juninho: o **Comissionamento Físico Nível Master** do **TVR Pro** em quatro etapas inflexíveis!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Hoje, chegamos ao momento mais importante de toda a obra: o Comissionamento Físico Nível Master do sistema TVR Pro.',
      },
    },
    {
      id: 'fala-bia-golpe-ariete',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Etapa 1 é a limpeza antes de conectar as internas: expulsar pó, escórias e umidade usando estritamente **Nitrogênio Seco** no procedimento de **"Golpe de Aríete" a 0.5 MPa**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Etapa 1: A Regra de Ouro da Limpeza: Antes de conectar as unidades internas, é obrigatório expulsar pó, escórias e umidade da tubulação. Deve-se utilizar estritamente Nitrogênio Seco, aplicando o procedimento de "Golpe de Aríete" a 0.5 MPa.',
      },
    },
    {
      id: 'fala-simon-proibicao-oxigenio',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'E grava isso com letras de fogo: **nunca utilize oxigênio ou ar comprimido**, pois geram risco iminente de explosão mortal e oxidação severa!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Nunca utilize oxigênio ou ar comprimido, pois geram risco iminente de explosão e oxidação severa.',
      },
    },
    {
      id: 'escolha-estanqueidade-compensacao',
      tipo: 'escolha',
      pergunta: 'Na Etapa 2 (Estanqueidade), você pressurizou o sistema em fases até **4.2 MPa** durante **24 horas**. Como a temperatura ambiente mudou da tarde para a manhã seguinte, como você avalia a leitura do manômetro?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Para localizar desde macro até micro-vazamentos, o sistema deve ser pressurizado em fases, culminando em 4.2 MPa durante 24 horas. É fundamental realizar a compensação térmica da leitura: para cada 1°C de diferença entre a pressurização e a observação, a pressão varia 0.01 MPa.',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Ignorando a temperatura, pois o nitrogênio não sofre dilatação nem contração térmica.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Todo gás fechado num tubo varia de pressão com a temperatura! Sem compensação térmica você confunde frio da manhã com vazamento.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Aplicando a compensação térmica: para cada 1°C de diferença entre a pressurização e a observação, a pressão varia 0.01 MPa.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Física pura! A **4.2 MPa** por **24 horas**, cada **1°C** de variação térmica altera a pressão em exatos **0.01 MPa**.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Para localizar desde macro até micro-vazamentos, o sistema deve ser pressurizado em fases, culminando em 4.2 MPa durante 24 horas. É fundamental realizar a compensação térmica da leitura: para cada 1°C de diferença entre a pressurização e a observação, a pressão varia 0.01 MPa.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Testando apenas por cinco minutos com espuma de detergente na tampa.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Cinco minutos não pegam microvazamento em rede VRF! O protocolo exige **4.2 MPa** durante **24 horas**.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'o sistema deve ser pressurizado em fases, culminando em 4.2 MPa durante 24 horas.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'fala-bia-paradoxo-vacuo',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Na Etapa 3 vem o **Paradoxo do Vácuo**: baixamos a pressão interna até que a água ferva a frio (**0°C**), atingindo **-0.1 MPa (-756 mmHg)** e mantendo a bomba por mais **2 horas**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Etapa 3: Desidratação Extrema (O Paradoxo do Vácuo): O vácuo não serve apenas para retirar o ar, mas sim para baixar a pressão interna até que a água ferva a frio (0°C). O alvo é atingir -0.1 MPa (-756 mmHg) e manter a bomba ligada por mais 2 horas.',
      },
    },
    {
      id: 'fala-simon-valvula-retencao',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'E alerta vital na bomba de vácuo: é obrigatório usar bomba com **válvula de retenção** para que, se acabar a energia, o óleo sujo da bomba não seja sugado para a rede frigorífica!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Alerta vital: É obrigatório o uso de uma bomba de vácuo com válvula de retenção para evitar que, em caso de falta de energia, o óleo sujo da bomba seja sugado para a rede frigorífica.',
      },
    },
    {
      id: 'fala-juninho-carga-r410a',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E depois que o vácuo de **-0.1 MPa (-756 mmHg)** está aprovado, entra a Etapa 4 da carga adicional de **R410A**, né?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O alvo é atingir -0.1 MPa (-756 mmHg) e manter a bomba ligada por mais 2 horas.',
      },
    },
    {
      id: 'fala-bia-carga-liquida-balanca',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Isso! Como o **R410A** é uma mistura zeotrópica, a carga entra rigorosamente no **estado líquido** (cilindro de ponta-cabeça), calculada pela volumetria da linha de líquido e pesada em **balança digital de precisão**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Etapa 4: A Matemática Inflexível da Carga Adicional: O gás R410A é uma mistura zeotrópica e, por isso, sua carga deve ser feita rigorosamente no estado líquido, com o cilindro de ponta-cabeça. A quantidade não é feita por "pressão", mas calculada pela volumetria da linha de líquido e inserida utilizando uma balança digital de precisão.',
      },
    },
    {
      id: 'causo-queda-energia-bomba',
      tipo: 'causo',
      titulo: 'O Apagão na Obra e a Bomba de Vácuo sem Válvula de Retenção',
      falas: [
        {
          quem: 'simon',
          emocao: 'bem-humorado',
          texto: 'Numa sexta à tarde, um instalador deixou uma bomba de vácuo antiga, sem válvula de retenção, puxando vácuo no VRF e foi tomar café.',
        },
        {
          quem: 'juninho',
          emocao: 'alerta',
          texto: 'Ih, caiu a energia da obra enquanto ele estava fora?',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Caiu o disjuntor geral! A rede que estava em **-0.1 MPa (-756 mmHg)** chupou meio litro de óleo sujo da bomba pra dentro das tubulações de cobre! Por isso a válvula de retenção na bomba é obrigatória.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O alvo é atingir -0.1 MPa (-756 mmHg) e manter a bomba ligada por mais 2 horas. Alerta vital: É obrigatório o uso de uma bomba de vácuo com válvula de retenção para evitar que, em caso de falta de energia, o óleo sujo da bomba seja sugado para a rede frigorífica.',
          },
        },
      ],
    },
    {
      id: 'mito-carga-por-pressao',
      tipo: 'mitoVerdade',
      afirmacao: 'No sistema TVR Pro com gás R410A, a carga adicional de refrigerante pode ser feita no olhômetro olhando apenas a pressão do manômetro e com a botija em pé (fase vapor).',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito perigoso! O **R410A** é mistura zeotrópica e exige carga no **estado líquido** (cilindro de ponta-cabeça), calculada pela volumetria da linha de líquido e medida em balança digital.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O gás R410A é uma mistura zeotrópica e, por isso, sua carga deve ser feita rigorosamente no estado líquido, com o cilindro de ponta-cabeça. A quantidade não é feita por "pressão", mas calculada pela volumetria da linha de líquido e inserida utilizando uma balança digital de precisão.',
          },
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Exceder esse peso no chute causa golpe de líquido e destrói o compressor!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Exceder esse peso causa golpe de líquido e destrói o compressor.',
          },
        },
      ],
    },
    {
      id: 'calc-pressao-estanqueidade-42',
      tipo: 'calculadora',
      titulo: 'Escada de Estanqueidade — Patamar Final de 24 Horas',
      formula: 'P_final = 4.2 MPa (24h) | Compensação: ±0.01 MPa para cada 1°C',
      enunciado: 'Na Etapa 2 do comissionamento físico da Aula 05, o sistema é pressurizado em fases durante **24 horas** (com variação térmica de **0.01 MPa** por **1°C**). Qual é a pressão final máxima desse teste em **MPa**?',
      leituras: [
        { rotulo: 'Golpe de Aríete (Limpeza)', valor: '0.5 MPa (Nitrogênio Seco)' },
        { rotulo: 'Compensação Térmica', valor: '0.01 MPa para cada 1°C' },
        { rotulo: 'Alvo do Vácuo', valor: '-0.1 MPa (-756 mmHg)' },
      ],
      unidade: 'MPa',
      respostaCorreta: 4.2,
      tolerancia: 0.05,
      opcoesRapidas: [0.5, 1.5, 4.2, 10.0],
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Para localizar desde macro até micro-vazamentos, o sistema deve ser pressurizado em fases, culminando em 4.2 MPa durante 24 horas. É fundamental realizar a compensação térmica da leitura: para cada 1°C de diferença entre a pressurização e a observação, a pressão varia 0.01 MPa.',
      },
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Cravado! O patamar final da escada de estanqueidade é **4.2 MPa** mantido por **24 horas**, corrigindo **0.01 MPa** para cada **1°C**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'o sistema deve ser pressurizado em fases, culminando em 4.2 MPa durante 24 horas. É fundamental realizar a compensação térmica da leitura: para cada 1°C de diferença entre a pressurização e a observação, a pressão varia 0.01 MPa.',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Olha a Etapa 2 da aula: o teste de estanqueidade de **24 horas** culmina em **4.2 MPa** (**0.5 MPa** é o Golpe de Aríete da limpeza)!',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Deve-se utilizar estritamente Nitrogênio Seco, aplicando o procedimento de "Golpe de Aríete" a 0.5 MPa.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Para localizar desde macro até micro-vazamentos, o sistema deve ser pressurizado em fases, culminando em 4.2 MPa durante 24 horas.',
            },
          ],
        },
      ],
    },
    {
      id: 'inspecao-comissionamento-aula5',
      tipo: 'inspecao',
      titulo: 'Inspeção Nível Master — As 4 Etapas do Comissionamento Físico',
      enunciado: 'Analise o infográfico da Aula 05 e aponte a sequência **correta** das quatro etapas inflexíveis do comissionamento físico do TVR Pro:',
      imagem: '/images/academia/tvrpro/aula05/infografico.jpg',
      legendaImagem: 'Infográfico Aula 05 — Comissionamento Físico Nível Master',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Deve-se utilizar estritamente Nitrogênio Seco, aplicando o procedimento de "Golpe de Aríete" a 0.5 MPa.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'o sistema deve ser pressurizado em fases, culminando em 4.2 MPa durante 24 horas. É fundamental realizar a compensação térmica da leitura: para cada 1°C de diferença entre a pressurização e a observação, a pressão varia 0.01 MPa.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O alvo é atingir -0.1 MPa (-756 mmHg) e manter a bomba ligada por mais 2 horas.',
        },
      ],
      pontos: [
        {
          id: 'p1',
          rotulo: '1) Limpeza com N2 a 0.5 MPa; 2) Estanqueidade a 4.2 MPa por 24h (0.01 MPa/1°C); 3) Vácuo a -0.1 MPa (-756 mmHg) + 2h; 4) Carga líquida R410A na balança.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Protocolo Nível Master completo! Tubulação limpa, estanque, desidratada a frio e carregada no grama exato.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'O alvo é atingir -0.1 MPa (-756 mmHg) e manter a bomba ligada por mais 2 horas.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Limpar a linha com oxigênio puro ou ar comprimido e fazer carga gasosa sem balança.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Oxigênio e ar comprimido trazem risco de explosão e oxidação severa, e R410A exige carga líquida em balança!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-paciencia-24h',
      tipo: 'filosofia',
      titulo: 'Quem Não Tem 24 Horas para Testar Terá Meses para Consertar',
      principio: 'Pressa no teste de estanqueidade e no vácuo é parcelar vazamento e acidez em doze vezes. A física exige o tempo dela para revelar microfissuras e ferver a umidade a frio.',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'O cliente sempre pergunta por que precisa esperar vinte e quatro horas no nitrogênio a **4.2 MPa** e mais duas horas no vácuo profundo.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'o sistema deve ser pressurizado em fases, culminando em 4.2 MPa durante 24 horas.',
          },
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Porque a pressa passa, mas uma instalação enxuta e estanque fica rodando silenciosa por uma década inteira.',
        },
      ],
    },
    {
      id: 'quiz-paradoxo-vacuo',
      tipo: 'quiz',
      enunciado: 'Segundo a Etapa 3 da Aula 05 (O Paradoxo do Vácuo), qual é a finalidade termodinâmica real do vácuo profundo até -0.1 MPa (-756 mmHg)?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O vácuo não serve apenas para retirar o ar, mas sim para baixar a pressão interna até que a água ferva a frio (0°C). O alvo é atingir -0.1 MPa (-756 mmHg) e manter a bomba ligada por mais 2 horas.',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Não apenas retirar o ar, mas baixar a pressão interna até que a água ferva a frio (0°C), mantendo a bomba ligada por mais 2 horas.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! Fazemos a umidade ferver a frio (**0°C**) em **-0.1 MPa (-756 mmHg)** para desidratar completamente a rede.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'O vácuo não serve apenas para retirar o ar, mas sim para baixar a pressão interna até que a água ferva a frio (0°C). O alvo é atingir -0.1 MPa (-756 mmHg) e manter a bomba ligada por mais 2 horas.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Congelar a água dentro do tubo para que ela fique presa nas paredes.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Queremos vaporizar e expulsar a umidade, nunca deixá-la presa no circuito!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Sugá-lo óleo da bomba para dentro do compressor propositalmente.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Pelo contrário! Usamos válvula de retenção justamente para impedir que o óleo da bomba entre na tubulação.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-resumo-master',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Quatro etapas gravadas na alma: Golpe de Aríete a **0.5 MPa**, Estanqueidade a **4.2 MPa** (**0.01 MPa** por **1°C**), Vácuo a **-0.1 MPa (-756 mmHg)** e Carga Líquida na balança!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Deve-se utilizar estritamente Nitrogênio Seco, aplicando o procedimento de "Golpe de Aríete" a 0.5 MPa.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'o sistema deve ser pressurizado em fases, culminando em 4.2 MPa durante 24 horas. É fundamental realizar a compensação térmica da leitura: para cada 1°C de diferença entre a pressurização e a observação, a pressão varia 0.01 MPa.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O alvo é atingir -0.1 MPa (-756 mmHg) e manter a bomba ligada por mais 2 horas.',
        },
      ],
    },
    {
      id: 'fala-simon-chamada-aula6',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Com a parte mecânica e termodinâmica blindada, na Aula 06 vamos ligar o Sistema Nervoso: cabeamento elétrico, isolamento de ruído e rede Daisy Chain!',
    },
    {
      id: 'fala-marta-apoio',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'bem-humorado',
      texto: 'Se até o gás vocês pesam na balança de precisão, vou contratar o Juninho pra pesar a farinha do pão francês!',
    },
    {
      id: 'ref-conteudo-tvr5',
      tipo: 'referencia',
      texto: 'Consulte todas as tabelas e slides das 4 etapas do Comissionamento Físico na aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Deve-se utilizar estritamente Nitrogênio Seco, aplicando o procedimento de "Golpe de Aríete" a 0.5 MPa.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'o sistema deve ser pressurizado em fases, culminando em 4.2 MPa durante 24 horas. É fundamental realizar a compensação térmica da leitura: para cada 1°C de diferença entre a pressurização e a observação, a pressão varia 0.01 MPa.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O vácuo não serve apenas para retirar o ar, mas sim para baixar a pressão interna até que a água ferva a frio (0°C). O alvo é atingir -0.1 MPa (-756 mmHg) e manter a bomba ligada por mais 2 horas.',
        },
      ],
      pontos: [
        '**Limpeza e Estanqueidade:** aplique "Golpe de Aríete" com Nitrogênio Seco a **0.5 MPa** e pressurize até **4.2 MPa** por **24 horas** (compensando **0.01 MPa** por **1°C**).',
        '**Desidratação Extrema:** atinja **-0.1 MPa (-756 mmHg)** para a água ferver a frio (**0°C**), mantendo por mais **2 horas** com bomba dotada de válvula de retenção.',
        '**Carga Adicional Exata:** injete **R410A** exclusivamente no estado líquido (cilindro invertido) usando balança digital de precisão conforme volumetria da linha de líquido.',
      ],
      proxima: 'Na Aula 06 estudaremos o Sistema Nervoso do TVR Pro: separação entre cabos de potência e dados, topologia Daisy Chain, bornes H1/H2/E vs P/Q/E e resistor de terminação.',
    },
  ],
};
