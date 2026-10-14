// src/data/conversas/instalacao-hvac/04-02.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 04-02
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '04-02',
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
      texto: 'Quarta, 7h30. Bancada elétrica. Simon segura uma contatora com borne carbonizado, um alicate de crimpagem com catraca, terminais ilhós tubulares e uma chave de fenda torquímetro.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'espantado',
      texto: 'Simon, olha o borne dessa contatora que a gente tirou ontem: derreteu o plástico todo! O instalador antigo só decapou o cabo flexível e apertou no parafuso.',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Esse é o assassino silencioso dos quadros elétricos, Ju! Apertar cabo flexível nu debaixo de parafuso provoca o **Efeito Gaiola** (*bird-caging*) e derruba a área de contato para **60% a 80%**!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Em uma junta perfeita, 100% da seção transversal do cabo faz contato mecânico plano com o barramento do borne. No esmagamento livre de fios nus, essa área de contato efetiva cai para **60% a 80%**, deixando vias de cobre soltas fora do ponto de aperto.',
        },
        {
          campo: 'infobox_campo',
          trecho: 'O esmagamento mecânico corta os fios externos (bird-caging), espalha os filamentos laterais e reduz a área real de contato para níveis perigosos de 60%.',
        },
      ],
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Com menos área útil, a resistência de contato sobe e entra em cena a Lei de Joule ($P = I^2 \\times R$): o calor cresce com o quadrado da corrente!',
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E piora com a **Fluência a Frio** (*Cold Flow*): sob pressão e ciclos térmicos (aquece quando liga, esfria quando para), o cobre escoa plasticamente e o parafuso afrouxa sozinho!',
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Quando o borne afrouxa, abrem-se micro-arcos em série que oxidam o cobre, formando uma camada semicondutora que realimenta o aquecimento (*Thermal Runaway*) até incendiar o quadro!',
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Um técnico diz que não tem terminal ilhós tubular na maleta, mas oferece “estanhar a ponta do cabo flexível com ferro de solda” antes de apertar no borne. O que diz a engenharia elétrica?',
      opcoes: [
        {
          id: 'a',
          texto: 'Excelente ideia, a solda de estanho deixa a ponta dura igual fio rígido.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Armadilha mortal! A liga de estanho/chumbo é muito mais mole que o cobre e sofre fluência a frio severa sob a pressão do parafuso!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Estanhar pontas de cabos para bornes de parafuso é terminantemente proibido: o estanho escoa a frio, afrouxa o contato, derrete sob aquecimento e gera incêndio.',
          ideal: true,
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! Só usamos **terminais tubulares (ilhós/ferrules)** ou olhais crimpados com alicate de catraca calibrado, garantindo **100%** da seção transversal em contato!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Em uma junta perfeita, 100% da seção transversal do cabo faz contato mecânico plano com o barramento do borne.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Basta enrolar fita isolante na ponta do cobre nu e prender no parafuso.',
          reacao: [
            {
              quem: 'bia',
              texto: 'Fita isolante dentro do borne isola a corrente e derrete na primeira partida!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E nada de apertar terminal com alicate universal de bico! O alicate de crimpagem **com catraca** só destrava quando atinge a pressão de **solda a frio** (*cold weld*), eliminando vazios de oxigênio entre os filamentos.',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Olha o rigor da norma de tração (*Pull-Out Test*): um cabo **AWG 12** (**4,00 mm²**) bem crimpado precisa suportar uma força de arrancamento mínima de **60 N** (**13,5** lbf) sem escorregar!',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'AWG 12 4,00 mm² 60 N 13,5 lbf',
      },
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Depois de crimpar, entra a **chave de fenda torquímetro**: apertar de menos deixa resistência alta; apertar demais espana a rosca do borne ou quebra a gaiola da contatora.',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E no comissionamento com a câmera termográfica, Bia? Qual diferença de temperatura num borne já acende o sinal amarelo?',
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e o Terminal Apertado no Alicate de Corte',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num chiller de shopping, o Zé comprou os terminais ilhós, mas em vez de usar o alicate de catraca, deu só uma “mordidinha” com o corte do alicate universal.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Na auditoria termográfica NETA com câmera infravermelha, o borne da fase R estava na faixa de **16°C a 30°C** mais quente que as outras fases — classificado como **Anomalia Severa**!',
          fonte: {
            campo: 'tabelas_html',
            trecho: '16°C a 30°C Anomalia Severa',
          },
        },
        {
          quem: 'simon',
          texto: 'Se passasse de **30°C** de Delta-T já seria **Crítico / Emergência**! Refizemos todas as pontas no alicate de catraca hexagonal e o Delta-T caiu a zero.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Acima de 30°C Crítico / Emergência',
          },
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Quando um cabo de alumínio precisa ser conectado a um borne de cobre ou latão, basta desencapar e juntar os dois metais diretamente a seco.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          texto: 'Mito! O par cobre-alumínio sofre **corrosão galvânica** e o alumínio expande muito mais que o cobre. Exige-se conector bimetálico homologado (AL/CU) e pasta antioxidante!',
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Pela tabela de termografia infravermelha da aula, um aquecimento diferencial (Delta-T) de 1°C a 3°C entre conexões similares já caracteriza Anomalia Leve (Estágio Inicial), e de 4°C a 15°C caracteriza Anomalia Moderada.',
      verdade: true,
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: '1°C a 3°C Anomalia Leve (Estágio Inicial)',
        },
        {
          campo: 'tabelas_html',
          trecho: '4°C a 15°C Anomalia Moderada',
        },
      ],
      explicacao: [
        {
          quem: 'simon',
          texto: 'Verdade! A câmera termográfica enxerga a falha semanas antes da fumaça: **1°C a 3°C** é estágio inicial e **4°C a 15°C** já exige programação de reparo.',
          fonte: [
            {
              campo: 'tabelas_html',
              trecho: '1°C a 3°C Anomalia Leve (Estágio Inicial)',
            },
            {
              campo: 'tabelas_html',
              trecho: '4°C a 15°C Anomalia Moderada',
            },
          ],
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Por que a crimpagem com matriz calibrada e catraca até o fim do curso é chamada na engenharia de “solda a frio” (cold weld)?',
      opcoes: [
        {
          id: 'a',
          texto: 'Porque a pressão mecânica extrema deforma os filamentos de cobre e a luva metálica em um bloco homogêneo sem espaços vazios (gas-tight), impedindo a oxidação interna.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! Uma crimpagem *gas-tight* funde mecanicamente as superfícies sem ar no meio, mantendo **100%** da área condutiva ativa por décadas!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Em uma junta perfeita, 100% da seção transversal do cabo faz contato mecânico plano com o barramento do borne.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Porque usa nitrogênio líquido para congelar o terminal.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'ironico',
              texto: 'Solda a frio é puramente pressão mecânica de precisão, Ju!',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora de Bancada — Força de Tração Mínima para Cabo 4,00 mm² (AWG 12)',
      formula: 'Força Mínima Pull-Out (AWG 12 / 4,00 mm²) = 60 N (13,5 lbf)',
      enunciado: 'Pela tabela de ensaio de tração (*Pull-Out Test*) da aula, um cabo de bitola **AWG 12** (**4,00 mm²**) crimpado com terminal tubular precisa suportar no mínimo **13,5** lbf sem soltar. Qual é o valor exato dessa força mínima em Newtons (**N**)?',
      leituras: [
        { rotulo: 'Bitola do Condutor', valor: 'AWG 12 (4,00 mm²)' },
        { rotulo: 'Força em Libras-Força', valor: '13,5 lbf' },
        { rotulo: 'Contato Efetivo c/ Terminal', valor: '100%' },
      ],
      unidade: 'N',
      respostaCorreta: 60,
      tolerancia: 0.5,
      opcoesRapidas: [15, 30, 60, 100],
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'AWG 12 4,00 mm² 60 N 13,5 lbf',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Em uma junta perfeita, 100% da seção transversal do cabo faz contato mecânico plano com o barramento do borne.',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Cravado! Para **AWG 12** (**4,00 mm²**), a crimpagem deve resistir a **60 N** (13,5 lbf) de tração mecânica.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'AWG 12 4,00 mm² 60 N 13,5 lbf',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Consulte a linha do **AWG 12** (**4,00 mm²**) na tabela: a força mínima de tração exigida é de **60 N** (13,5 lbf).',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'AWG 12 4,00 mm² 60 N 13,5 lbf',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Terminações Elétricas e Termografia',
      enunciado: 'Observe o slide da Masterclass de Terminação de Fios e aponte a conexão que garante 100% de contato sem risco de ponto quente:',
      imagem: '/images/academia/hvac-instalacao/modulo04/modulo04-02/Modulo-04-02-HVAC Wire Termination Masterclass-01.jpg',
      legendaImagem: 'Módulo 04-02 — Engenharia de Terminação, Crimpagem e Termografia',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Cabo flexível crimpado com terminal ilhós em alicate de catraca (100% de contato), torqueado na especificação e validado por termografia.',
          correta: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Em uma junta perfeita, 100% da seção transversal do cabo faz contato mecânico plano com o barramento do borne.',
          },
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Perfeito! **100%** da seção transversal trabalhando fria, sem *bird-caging* e sem fluência a frio!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Em uma junta perfeita, 100% da seção transversal do cabo faz contato mecânico plano com o barramento do borne.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Fio flexível nu esmagado pelo parafuso (bird-caging com 60% de contato) apresentando mais de 30°C de aquecimento.',
          correta: false,
          fonte: [
            {
              campo: 'infobox_campo',
              trecho: 'O esmagamento mecânico corta os fios externos (bird-caging), espalha os filamentos laterais e reduz a área real de contato para níveis perigosos de 60%.',
            },
            {
              campo: 'tabelas_html',
              trecho: 'Acima de 30°C Crítico / Emergência',
            },
          ],
          feedback: [
            {
              quem: 'simon',
              texto: 'Fio espanado com **60%** de contato e acima de **30°C** de Delta-T é incêndio anunciado no quadro!',
              fonte: [
                {
                  campo: 'infobox_campo',
                  trecho: 'reduz a área real de contato para níveis perigosos de 60%.',
                },
                {
                  campo: 'tabelas_html',
                  trecho: 'Acima de 30°C Crítico / Emergência',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'O Clique da Catraca é a Assinatura do Profissional',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Quando você abre um quadro elétrico e vê todos os cabos identificados com anilhas, terminais ilhós crimpados na catraca e marcas de lacre de torque nos parafusos, você nem precisa perguntar quem fez.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Porque o incêndio elétrico nunca começa no meio de um cabo inteiro; ele começa nos últimos cinco milímetros da ponta mal feita.',
        },
      ],
      principio: 'A segurança de quilômetros de cabo elétrico depende dos últimos cinco milímetros dentro do borne.',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte a tabela de **Força de Extração por Bitola** (**60 N** para **4,00 mm²**) e os limiares de **Termografia** na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
      fonte: {
        campo: 'tabelas_html',
        trecho: 'AWG 12 4,00 mm² 60 N 13,5 lbf',
      },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Proibido fio nu ou estanhado:** esmagar cabo flexível nu causa *bird-caging* e derruba o contato para **60% a 80%**; estanho sofre fluência a frio.',
        '**Solda a frio na catraca:** use terminais ilhós/olhais com alicate de catraca (**100%** de contato, resistindo a **60 N** em cabo **4,00 mm²**) e chave torquímetro.',
        '**Termografia Preventiva:** Delta-T de **1°C a 3°C** é anomalia inicial, **4°C a 15°C** moderada, **16°C a 30°C** severa e acima de **30°C** emergência.',
      ],
      proxima: 'Na Aula 04-03 vamos fechar o Módulo 4 dominando o cabeamento de dados RS-485, topologia Daisy-Chain e blindagem contra EMI em VRF.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Em uma junta perfeita, 100% da seção transversal do cabo faz contato mecânico plano com o barramento do borne. No esmagamento livre de fios nus, essa área de contato efetiva cai para **60% a 80%**, deixando vias de cobre soltas fora do ponto de aperto.',
        },
        {
          campo: 'tabelas_html',
          trecho: 'AWG 12 4,00 mm² 60 N 13,5 lbf',
        },
        {
          campo: 'tabelas_html',
          trecho: '1°C a 3°C Anomalia Leve (Estágio Inicial)',
        },
        {
          campo: 'tabelas_html',
          trecho: '4°C a 15°C Anomalia Moderada',
        },
        {
          campo: 'tabelas_html',
          trecho: '16°C a 30°C Anomalia Severa',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Acima de 30°C Crítico / Emergência',
        },
      ],
    },
  ],
};
