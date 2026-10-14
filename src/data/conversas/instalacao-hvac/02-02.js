// src/data/conversas/instalacao-hvac/02-02.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 02-02
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '02-02',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Terça, 7h15. QG Técnico. Planta da cobertura do edifício aberta na mesa, mostrando um banco de condensadoras VRF e um chiller modular.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'Simon, o arquiteto pediu pra encostar as quatro condensadoras VRF coladas na platibanda pra esconder da vista da piscina. Pode fechar lá?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'De jeito nenhum, Ju! Se você trancar a saída ou colar na parede, o jato quente bate no obstáculo e volta pra sucção: é o **Curto-Circuito de Ar** (*Air Short-Circuiting*).',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Esse fenômeno é conhecido como Curto-Circuito de Ar (Air Short-Circuiting).',
      },
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Em bancos de condensadoras VRF compactados sem espaçamento, o ar de admissão sobe rapidinho de **95°F** (**35°C**) para **115°F** (**46°C**) ou mais!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Em bancos de condensadoras VRF instaladas de forma compacta e sem distanciamento adequado, o ar de admissão do condensador sobe rapidamente de 95°F (35°C) para 115°F (46°C) ou mais.',
      },
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'No diagrama P-H, isso joga a pressão de condensação lá na lua, gera *flash gas* na expansão, sobe a amperagem e carboniza o óleo POE/PVE nos mancais.',
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Para isolar mais de 90% da vibração estrutural na laje: quando usamos coxins elastoméricos (borracha/neoprene) e quando somos obrigados a usar molas de aço helicoidal?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Para barrar o ruído estrutural, deve-se aplicar amortecedores sob a base da máquina capazes de oferecer uma eficiência de isolamento vibratório superior a 90%.',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Borracha serve para qualquer máquina; mola é só enfeite estético.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'ironico',
              texto: 'Coloca borracha dura embaixo de um chiller de baixa rotação pra você ver o lustre da cobertura tremer igual gelatina!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Elastômeros (deflexão 3 a 7 mm) para alta rotação (> 1.000 RPM) e Molas de Aço (deflexão 12 a 50 mm) para máquinas pesadas de baixa rotação (< 500 RPM).',
          ideal: true,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Possuem limitação física de deflexão estática (3 a 7 mm). Devido ao comportamento de "Dynamic Stiffness" (aumento da rigidez em vibrações rápidas), são ideais apenas para equipamentos leves de alta velocidade (acima de 1.000 RPM)',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Isoladores de Mola de Aço Helicoidal: Possuem deflexão estática elevada (12 a 50 mm) e mantêm comportamento linear independente da frequência de perturbação. São obrigatórios para máquinas pesadas de baixa rotação (abaixo de 500 RPM)',
            },
          ],
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Acertou em cheio! Acima de **1.000 RPM** o neoprene (**3 a 7 mm**) resolve; abaixo de **500 RPM** só a mola de aço (**12 a 50 mm**) absorve a onda longa sem endurecer.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'Possuem limitação física de deflexão estática (3 a 7 mm). Devido ao comportamento de "Dynamic Stiffness" (aumento da rigidez em vibrações rápidas), são ideais apenas para equipamentos leves de alta velocidade (acima de 1.000 RPM)',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Isoladores de Mola de Aço Helicoidal: Possuem deflexão estática elevada (12 a 50 mm) e mantêm comportamento linear independente da frequência de perturbação. São obrigatórios para máquinas pesadas de baixa rotação (abaixo de 500 RPM)',
                },
              ],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Molas de aço para fancoletes leves e borracha fina para chillers pesados.',
          reacao: [
            {
              quem: 'bia',
              texto: 'Inverteu tudo! Fancolete suspenso de alta velocidade usa elastômero; chiller pesado usa mola de aço.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      texto: 'E se a frequência do compressor coincidir com a frequência natural da laje, ocorre a **Ressonância Estrutural**: um zumbido grave de baixa frequência que atravessa qualquer parede de gesso!',
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Outro pilar sagrado é a **Serviceability** (acessibilidade para manutenção). Pela norma **NEC 110.26**, todo painel elétrico exige área livre frontal mínima de **90 cm** de profundidade por **76 cm** de largura!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Painéis e Disjuntores (NEC 110.26): Devem possuir uma área livre frontal de trabalho tridimensional (profundidade mínima de 90 cm / 36 polegadas, largura mínima de 76 cm / 30 polegadas e altura livre de 2 metros / 6,5 pés).',
      },
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Além disso, na hidrônica de chillers, o sensor de fluxo precisa de trecho reto de pelo menos **10D** a montante (ex.: **1** metro num tubo de 4") e **5D** (**50 cm**) a jusante para não dar falso desarme de *Flow Loss Trip*!',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'A Montante (Upstream) ≥ 10D (Ex: Tubo de 4" exige 1 metro de trecho reto) Estabilizar as perturbações, redemoinhos e turbulências induzidas por curvas ou conexões. Leituras flutuantes de vazão e desarme intermitente do chiller ("Flow Loss Trip"). A Jusante (Downstream) ≥ 5D (Ex: Tubo de 4" exige 50 cm de trecho reto)',
      },
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E naquelas bombas centrífugas grandes de água gelada, por que eles fazem um bloco pesado de concreto embaixo antes das molas?',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      texto: 'É a **Base de Inércia de Concreto**, Ju! Ela pesa no mínimo **2,5** vezes o peso operacional da bomba, estabilizando o centro de gravidade e segurando o coice de partida.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Para bombas centrífugas de grande porte, utiliza-se uma Base de Inércia de Concreto. Trata-se de uma plataforma flutuante apoiada por isoladores de mola cujo peso deve ser no mínimo 2,5 vezes o peso operacional do equipamento.',
      },
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e a Caixa BS Emparedada no Gesso',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num prédio comercial com VRF Recuperação de Calor, o Zé instalou a caixa **Branch Selector (BS)** no forro e mandou o gesseiro fechar tudo liso, sem alçapão!',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Que absurdo! As caixas BS têm placas eletrônicas e solenoides que modulam o tempo todo. É obrigatório deixar portinhola de acesso de no mínimo **60x60 cm**.',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'É obrigatório instalar alçapões ou portinholas de acesso com dimensões amplas (mínimo de 60x60 cm).',
          },
        },
        {
          quem: 'simon',
          texto: 'No primeiro diagnóstico de solenoide, tiveram que serrar o forro decorativo da sala de reuniões da diretoria inteira!',
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Encostar a condensadora a poucos centímetros da parede economiza espaço na varanda técnica sem alterar o consumo elétrico do ventilador.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          texto: 'Mito! Pela Equação da Continuidade e Teorema de Bernoulli, restringir a área eleva a contrapressão estática (*dynamic head*), fazendo o motor consumir mais energia para mover menos ar (CFM).',
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Em salas de chillers casco e tubos, é obrigatório deixar livre uma área linear externa de 4,3 a 5 metros em paralelo ao casco para extração e limpeza dos tubos (Tube Pull Clearance).',
      verdade: true,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Salas de chillers de grande porte devem prever a área livre linear externa correspondente à extração de tubos de cobre (Tube Pull Clearance), que tipicamente varia de 4,3 a 5 metros em paralelo ao casco.',
      },
      explicacao: [
        {
          quem: 'simon',
          texto: 'Verdade! Bloquear o *Tube Pull Clearance* obriga a demolir paredes quando for preciso escovar ou substituir o feixe tubular.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Bloquear essa área com paredes ou painéis exige demolições estruturais brutas quando for necessária a escovação interna para limpeza de incrustações na serpentina do condensador.',
          },
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Para evitar aprisionamento do técnico em caso de arco elétrico (arc flash) e permitir manuseio livre de ferramentas, qual é o ângulo de abertura das portas de painéis elétricos especificado no Padrão de Elite (UFC / VA)?',
      opcoes: [
        {
          id: 'a',
          texto: 'Abertura de 180° nas dobradiças (superando o mínimo de 90° da NEC).',
          correta: true,
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Enquanto a norma NEC exige abertura mínima de 90° para painéis elétricos sob tensão, projetos de elite (como os padrões governamentais UFC e VA para instalações de missão crítica) especificam portas de painéis com dobradiças de 180° de abertura.',
          },
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Isso mesmo! Portas abrindo a **180°** garantem rota de fuga desimpedida em emergências e acesso total aos componentes.',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'portas de painéis com dobradiças de 180° de abertura.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Abertura de apenas 45° entre duas tubulações de cobre.',
          feedback: [
            {
              quem: 'bia',
              texto: 'Nem o mínimo de **90°** da NEC permite uma fresta apertada dessas!',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'Enquanto a norma NEC exige abertura mínima de 90° para painéis elétricos sob tensão',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora de Folga Frontal de Segurança — NEC 110.26',
      formula: 'Profundidade Livre Frontal Mínima = 90 cm (Largura ≥ 76 cm)',
      enunciado: 'Você está demarcando a casa de máquinas no piso antes de chumbar a base do quadro elétrico do VRF. Pela norma **NEC 110.26**, qual é a profundidade mínima livre frontal em **cm** que deve ser deixada diante do painel?',
      leituras: [
        { rotulo: 'Largura Mínima Frontal', valor: '76 cm' },
        { rotulo: 'Alçapão Caixa BS', valor: '60x60 cm' },
        { rotulo: 'Trecho Jusante 5D (4")', valor: '50 cm' },
      ],
      unidade: 'cm',
      respostaCorreta: 90,
      tolerancia: 0.5,
      opcoesRapidas: [50, 60, 76, 90],
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Painéis e Disjuntores (NEC 110.26): Devem possuir uma área livre frontal de trabalho tridimensional (profundidade mínima de 90 cm / 36 polegadas, largura mínima de 76 cm / 30 polegadas e altura livre de 2 metros / 6,5 pés).',
        },
        {
          campo: 'infobox_campo',
          trecho: 'É obrigatório instalar alçapões ou portinholas de acesso com dimensões amplas (mínimo de 60x60 cm).',
        },
        {
          campo: 'tabelas_html',
          trecho: 'A Jusante (Downstream) ≥ 5D (Ex: Tubo de 4" exige 50 cm de trecho reto)',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Cravado! **90 cm** de profundidade livre frontal (com **76 cm** de largura) é o espaço sagrado da **NEC 110.26**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Painéis e Disjuntores (NEC 110.26): Devem possuir uma área livre frontal de trabalho tridimensional (profundidade mínima de 90 cm / 36 polegadas, largura mínima de 76 cm / 30 polegadas e altura livre de 2 metros / 6,5 pés).',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Atenção: **76 cm** é a largura mínima; a profundidade livre frontal exigida pela **NEC 110.26** é de **90 cm**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Painéis e Disjuntores (NEC 110.26): Devem possuir uma área livre frontal de trabalho tridimensional (profundidade mínima de 90 cm / 36 polegadas, largura mínima de 76 cm / 30 polegadas e altura livre de 2 metros / 6,5 pés).',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Layout — Desacoplamento e Aerodinâmica',
      enunciado: 'Observe o slide de Posicionamento de Equipamentos e aponte qual instalação previne o curto-circuito térmico e o ruído estrutural:',
      imagem: '/images/academia/hvac-instalacao/modulo02/modulo02-02/Module02-02-Elite HVAC Equipment Placement Training-01.jpg',
      legendaImagem: 'Módulo 02-02 — Estratégia de Posicionamento e Desacoplamento Físico',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Banco de condensadoras com espaçamento livre de admissão/descarga, isoladores dimensionados por RPM e 90 cm livres diante do painel.',
          correta: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Painéis e Disjuntores (NEC 110.26): Devem possuir uma área livre frontal de trabalho tridimensional (profundidade mínima de 90 cm / 36 polegadas, largura mínima de 76 cm / 30 polegadas e altura livre de 2 metros / 6,5 pés).',
          },
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Perfeito! Máquina respirando ar fresco a **95°F** (**35°C**), desacoplada da laje e com **90 cm** livres para manutenção segura.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'o ar de admissão do condensador sobe rapidamente de 95°F (35°C) para 115°F (46°C) ou mais.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'profundidade mínima de 90 cm',
                },
              ],
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Condensadoras coladas na parede recirculando ar a 115°F (46°C) e chumbadas direto no concreto sem amortecedor.',
          correta: false,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'o ar de admissão do condensador sobe rapidamente de 95°F (35°C) para 115°F (46°C) ou mais.',
          },
          feedback: [
            {
              quem: 'simon',
              texto: 'Essa é a receita do desastre: alta pressão de cabeça, *flash gas* e vibração estrutural no prédio todo!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Não Arme Emboscadas para o Próximo Técnico',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Quando você instala uma máquina onde a tampa não abre ou esconde uma caixa BS sem alçapão de **60x60 cm**, você está armando uma emboscada para o próximo técnico.',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'É obrigatório instalar alçapões ou portinholas de acesso com dimensões amplas (mínimo de 60x60 cm).',
          },
        },
        {
          quem: 'juninho',
          emocao: 'bem-humorado',
          texto: 'E o pior é que daqui a seis meses o próximo técnico que você mandou lá sou eu mesmo, né, Simon?',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Exatamente, Ju! Prover acessibilidade (*serviceability*) é um compromisso ético de quem projeta pensando nos vinte anos de vida da obra.',
        },
      ],
      principio: 'Máquina precisa respirar e precisa de espaço para ser cuidada: respeite os 90 cm da NEC 110.26.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Painéis e Disjuntores (NEC 110.26): Devem possuir uma área livre frontal de trabalho tridimensional (profundidade mínima de 90 cm',
      },
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte o comparativo **Elastômeros vs. Molas de Aço** e os trechos retos hidrônicos (**10D / 5D**) na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Zero Curto-Circuito de Ar:** garanta espaçamento livre para a admissão não saltar de **95°F** (**35°C**) para **115°F** (**46°C**).',
        '**Isolamento vibratório > 90%:** elastômeros (**3 a 7 mm**) para máquinas acima de **1.000 RPM**; molas de aço (**12 a 50 mm**) abaixo de **500 RPM**.',
        '**Ética de acesso:** respeite os **90 cm** × **76 cm** frontais da **NEC 110.26** e alçapões de **60x60 cm** sob caixas BS.',
      ],
      proxima: 'Na Aula 02-03 vamos fechar o Módulo 2 dominando a engenharia hidráulica de Drenagem de Condensado (IMC 307.2 e P-Trap).',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'o ar de admissão do condensador sobe rapidamente de 95°F (35°C) para 115°F (46°C) ou mais.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'eficiência de isolamento vibratório superior a 90%.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Possuem limitação física de deflexão estática (3 a 7 mm). Devido ao comportamento de "Dynamic Stiffness" (aumento da rigidez em vibrações rápidas), são ideais apenas para equipamentos leves de alta velocidade (acima de 1.000 RPM)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Isoladores de Mola de Aço Helicoidal: Possuem deflexão estática elevada (12 a 50 mm) e mantêm comportamento linear independente da frequência de perturbação. São obrigatórios para máquinas pesadas de baixa rotação (abaixo de 500 RPM)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Painéis e Disjuntores (NEC 110.26): Devem possuir uma área livre frontal de trabalho tridimensional (profundidade mínima de 90 cm / 36 polegadas, largura mínima de 76 cm / 30 polegadas e altura livre de 2 metros / 6,5 pés).',
        },
        {
          campo: 'infobox_campo',
          trecho: 'É obrigatório instalar alçapões ou portinholas de acesso com dimensões amplas (mínimo de 60x60 cm).',
        },
      ],
    },
  ],
};
