// ═══════════════════════════════════════════════════════════════════════════
// CONVERSA — manutencao-hvac / apresentacao
// Apresentação da Apostila 02 — Manutenção Avançada HVAC
// Cenário: Padaria da Manhã (boas-vindas ao Volume 2, TCO, PMOC e segurança)
// ═══════════════════════════════════════════════════════════════════════════

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'apresentacao',
  versao: 1,
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'padaria-manha',
  elenco: ['simon', 'juninho', 'bia', 'marta'],
  estimativaMin: 10,

  beats: [
    // ── 1. ABERTURA ─────────────────────────────────────────────────────────
    {
      id: 'abertura-1',
      tipo: 'cena',
      texto: 'Seis e meia da manhã na padaria. Café coado fumegando no balcão de inox e a Apostila 02 de Manutenção Avançada HVAC aberta na mesa.',
    },
    {
      id: 'abertura-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Bom dia, turma! Bem-vindos ao segundo pilar da nossa jornada. Instalar bem é arte, mas manter o equipamento vivo por 20 anos é o que constrói fortuna e reputação.',
    },
    {
      id: 'abertura-3',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mestre Simon, confesso que eu achava que manutenção era só bater água no filtro e completar gás quando parava de gelar.',
    },
    {
      id: 'abertura-4',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'serio',
      texto: 'Esse pensamento de apagar incêndio é o que quebra empresas, Juninho. Quem opera só no corretivo gasta de 3 a 5 vezes mais por máquina na vida útil.',
    },

    // ── 2. CONFLITO E APOSTA ────────────────────────────────────────────────
    {
      id: 'conflito-1',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'pensativo',
      texto: 'Olha a Tabela 1 de Custos do Ciclo de Vida (TCO): o investimento inicial (CapEx) é cerca de **15%**, enquanto energia leva **65%** e manutenção **20%**.',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Investimento Inicial (CapEx) ~15% Compra e instalação do equipamento Consumo de Energia (OpEx) ~65% Custo de eletricidade ao longo da vida útil Manutenção (OpEx) ~20% Preventiva, corretiva e preditiva combinadas',
      },
    },
    {
      id: 'conflito-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Exato, Bia. E além do bolso, tem a lei: a Lei Federal 13.589/2018 exige PMOC ativo com ART ou TRT em qualquer edifício acima de **60.000 BTU/h** (**5 TR**).',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Lei Federal nº 13.589/2018: Torna obrigatório o Plano de Manutenção, Operação e Controle (PMOC) para todos os edifícios de uso público e coletivo que disponham de sistemas de climatização artificial com capacidade instalada total superior a 60.000 BTU/h (5 TR).',
      },
    },
    {
      id: 'conflito-3',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'alerta',
      texto: 'E se a ANVISA bater de surpresa e achar laudo vencido ou sem PMOC, a multa vai de **R$ 2.000** a **R$ 1.500.000**, fora processo criminal se houver surto de Legionella!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Laudos microbiológicos vencidos ou ausência de documentação em fiscalizações surpresa da ANVISA resultam em multas de R$ 2.000 a R$ 1.500.000 e responsabilidade criminal pessoal do gestor predial em caso de surtos de Legionella.',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Quando você chega diante de um sistema com reclamação de baixa performance, qual deve ser a sequência obrigatória de coleta de dados segundo o protocolo Simon?',
      opcoes: [
        {
          id: 'a',
          texto: 'Acoplar logo o manifold na válvula de serviço para ver a pressão de gás.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Nada disso! Espetar o manifold sem olhar a corrente elétrica e o fluxo de ar leva a diagnósticos falsos de subcarga.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Seguir a ordem estrita: Amperagem → Pressões → Temperaturas → Vazão de ar.',
          ideal: true,
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Perfeito! Primeiro os 5 sentidos e depois Amperagem, Pressões, Temperaturas e Vazão de ar.',
            },
          ],
        },
      ],
    },

    // ── 3. CAUSO ────────────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Barramento dos Compressores Inverter que Não Perdoa Pressa',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Certa vez um técnico veterano desligou o disjuntor de um VRF e já meteu a chave na placa inverter. Esqueceu que os capacitores do barramento CC seguram mais de **300 Vcc** por minutos!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Mesmo após desligar o disjuntor principal, os capacitores de potência da placa retificadora de compressores inverter retêm tensões superiores a 300 Vcc por vários minutos.',
          },
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Que perigo! Nunca se toca na placa sem antes medir com multímetro CAT III/IV que o barramento CC baixou de **36V**.',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Nunca toque em componentes da placa sem antes verificar com multímetro CAT III/IV que a tensão do barramento CC está abaixo de 36V.',
          },
        },
        {
          quem: 'juninho',
          emocao: 'espantado',
          texto: 'E no nosso app da Simon o técnico só abre o checklist de reparo depois de mandar foto do cadeado LOTO e do multímetro marcando **0V**, né?',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O técnico deve enviar uma foto no aplicativo mostrando o cadeado LOTO instalado e o multímetro indicando 0V no circuito antes de ter acesso ao checklist de reparo.',
          },
        },
      ],
    },

    // ── 4. INSIGHT ──────────────────────────────────────────────────────────
    {
      id: 'insight-1',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'Isso mesmo, Juninho. Neste curso vamos dominar 8 módulos: do TCO e PMOC no Módulo 1 ao diagnóstico pelos 5 sentidos e diagrama P-H no Módulo 2.',
    },
    {
      id: 'insight-2',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Na qualidade do ar interior pela RE-09/2003, temos metas claras: CO₂ até **1.000 ppm**, fungos até **750 UFC/m³**, temperatura de **23°C** a **26°C** e umidade de **40%** a **65%**.',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Dióxido de Carbono (CO₂) ≤ 1.000 ppm Sensor NDIR portátil Semestral Fungos (UFC/m³) ≤ 750 UFC/m³ (I/E ratio) Amostrador de impactação Semestral Temperatura 23°C – 26°C (verão) Termômetro calibrado Contínuo Umidade Relativa 40% – 65%',
      },
    },
    {
      id: 'insight-3',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'confiante',
      texto: 'Na preventiva, lavamos serpentinas com pressão abaixo de **200 PSI** para não dobrar aletas, e no circuito frigorífico fazemos vácuo profundo abaixo de **500 mícrons**.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A pressão da água da lavadora portátil deve ser limitada a menos de 200 PSI para evitar o dobramento físico das aletas de alumínio.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Consiste em recolher o fluido antigo, realizar vácuo profundo (< 500 mícrons) e pesar a carga exata recomendada pelo fabricante com balança digital.',
        },
      ],
    },
    {
      id: 'insight-4',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'No R-410A, as pressões são cerca de **60%** maiores que no R-22, exigindo mangueiras de manifold com ruptura mínima de **800 PSI**.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Alta Pressão (R-410A): Opera com pressões de trabalho cerca de 60% maiores do que o legacy R-22.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Exige mangueiras de manifold com classificação mínima de 800 PSI de ruptura para evitar acidentes por estouro.',
        },
      ],
    },
    {
      id: 'insight-5',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'confiante',
      texto: 'Na elétrica e preditiva, exigimos isolamento mínimo de **1 MΩ** por kV + **1 MΩ** (**1,38 MΩ** em **380V**) e vibração ISO 10816-3 até **1,12 mm/s** RMS para nível excelente.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Risolamento ≥ 1 MΩ por kV de operação + 1 MΩ Se o motor opera a 380V, a isolação mínima é de 1,38 MΩ.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Até 1,12 mm/s RMS: Excelente.',
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Durante a soldagem de tubos de cobre em reparos frigoríficos, é obrigatório purgar nitrogênio seco sob baixa pressão (1 a 2 PSI) por dentro da tubulação.',
      verdade: true,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Brasagem com Nitrogênio Passante: Durante a soldagem, é obrigatório purgar nitrogênio seco sob baixa pressão (1 a 2 PSI) por dentro do tubo.',
      },
      explicacao: [
        {
          quem: 'simon',
          emocao: 'aprovando',
          texto: 'Verdade absoluta! O nitrogênio passante a **1 a 2 PSI** expulsa o oxigênio e evita a formação de carepa de óxido que entupiria a válvula de expansão.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Brasagem com Nitrogênio Passante: Durante a soldagem, é obrigatório purgar nitrogênio seco sob baixa pressão (1 a 2 PSI) por dentro do tubo.',
          },
        },
      ],
    },

    // ── 5. PRÁTICA ──────────────────────────────────────────────────────────
    {
      id: 'pratica-1',
      tipo: 'inspecao',
      titulo: 'Auditoria de Linha de Base na Primeira Visita',
      enunciado: 'Você chegou a um edifício comercial para assumir o contrato. Toque no ÚNICO procedimento correto de primeira visita e termografia segundo o protocolo Simon:',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Colar fita isolante preta fosca (ε = 0,95) em barramentos de cobre polido antes da medição termográfica.',
          correta: true,
          feedback: [
            {
              quem: 'marta',
              emocao: 'aprovando',
              texto: 'Excelente! Sem a fita preta fosca, o cobre polido reflete o ambiente e mascara um ponto quente crítico de **110°C**.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'O técnico tirou foto térmica do barramento de cobre polido e achou que estava frio, mas a baixa emissividade mascarou um ponto quente de 110°C." Como Resolver: É obrigatório colar fita isolante preta fosca de alta temperatura (ε = 0,95) nos pontos de teste de barramentos nus antes da medição térmica.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Tocar na placa inversora logo após desligar o disjuntor, sem medir a tensão do barramento CC.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Perigo fatal! Os capacitores retêm mais de **300 Vcc**; aguarde e valide tensão abaixo de **36V**.',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'os capacitores de potência da placa retificadora de compressores inverter retêm tensões superiores a 300 Vcc por vários minutos. Nunca toque em componentes da placa sem antes verificar com multímetro CAT III/IV que a tensão do barramento CC está abaixo de 36V.',
              },
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Carregar R-410A em fase de vapor pela linha de sucção para ser mais rápido.',
          correta: false,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O técnico carrega R-410A em fase de vapor pela linha de sucção para ser mais rápido, alterando a composição do gás.',
          },
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Jamais! Misturas zeotrópicas como o R-410A nunca entram em vapor, pois isso fraciona a composição química do fluido.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'O Cuidado com Misturas Zeotrópicas (R-410A / R-407C): Proibição de Carga em Fase de Vapor.',
              },
            },
          ],
        },
        {
          id: 'p4',
          rotulo: 'Lavar as aletas de alumínio da serpentina com lavadora de alta pressão acima de 200 PSI.',
          correta: false,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'A pressão da água da lavadora portátil deve ser limitada a menos de 200 PSI para evitar o dobramento físico das aletas de alumínio.',
          },
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Errado! A pressão da água deve ficar abaixo de **200 PSI** para não dobrar as aletas de alumínio.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'A pressão da água da lavadora portátil deve ser limitada a menos de 200 PSI para evitar o dobramento físico das aletas de alumínio.',
              },
            },
          ],
        },
      ],
    },

    // ── 6. TESTE ────────────────────────────────────────────────────────────
    {
      id: 'pergunta-1',
      tipo: 'quiz',
      enunciado: 'Pela Lei Federal 13.589/2018 e ANVISA RE-09/2003, a partir de qual capacidade térmica somada o PMOC é obrigatório e qual é o limite máximo recomendável de CO₂?',
      opcoes: [
        {
          id: 'a',
          texto: 'Acima de **60.000 BTU/h** (**5 TR**), com limite de CO₂ de até **1000 ppm**.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Cravado! Passou de **60.000 BTU/h** (**5 TR**) somados no prédio, o PMOC é lei federal e o CO₂ deve ficar até **1000 ppm**.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'Lei Federal nº 13.589/2018: Torna obrigatório o Plano de Manutenção, Operação e Controle (PMOC) para todos os edifícios de uso público e coletivo que disponham de sistemas de climatização artificial com capacidade instalada total superior a 60.000 BTU/h (5 TR).',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Parâmetros de Qualidade do Ar (ANVISA RE-09/2003): Dióxido de Carbono (CO₂): Limite máximo recomendável de 1000 ppm como indicador de taxa de renovação de ar adequada.',
                },
              ],
            },
          ],
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Lei Federal nº 13.589/2018: Torna obrigatório o Plano de Manutenção, Operação e Controle (PMOC) para todos os edifícios de uso público e coletivo que disponham de sistemas de climatização artificial com capacidade instalada total superior a 60.000 BTU/h (5 TR).',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Parâmetros de Qualidade do Ar (ANVISA RE-09/2003): Dióxido de Carbono (CO₂): Limite máximo recomendável de 1000 ppm como indicador de taxa de renovação de ar adequada.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Apenas em sistemas com chillers acima de **200 TR**, sem controle de CO₂.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'serio',
              texto: 'Nada disso! Quatro splits somando mais de **60.000 BTU/h** (**5 TR**) já obrigam o edifício a manter PMOC assinado.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Lei Federal nº 13.589/2018: Torna obrigatório o Plano de Manutenção, Operação e Controle (PMOC) para todos os edifícios de uso público e coletivo que disponham de sistemas de climatização artificial com capacidade instalada total superior a 60.000 BTU/h (5 TR).',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O compressor parafuso do chiller de 200 TR quebrou os rolamentos sem aviso prévio.',
          },
        },
        {
          id: 'c',
          texto: 'Somente quando a multa inicial superar **R$ 50.000**.',
          correta: false,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Errado! A obrigação nasce em **60.000 BTU/h** e as multas já começam em **R$ 2.000**, chegando a **R$ 1.500.000**.',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'A Lei Federal 13.589/2018 obriga todo edifício com climatização acima de 60.000 BTU/h a manter um PMOC ativo com responsável técnico (ART/TRT). Laudos microbiológicos vencidos ou ausência de documentação em fiscalizações surpresa da ANVISA resultam em multas de R$ 2.000 a R$ 1.500.000',
              },
            },
          ],
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Surto de Legionella comprovado R$ 50.000 – R$ 1.500.000 Lei 13.589/18 + Código Penal Criminal (Gestor + RT)',
          },
        },
      ],
    },
    {
      id: 'pergunta-2',
      tipo: 'quiz',
      enunciado: 'Em um sistema que apresenta simultaneamente Sobreaquecimento (SA) elevado e Subarrefecimento (SC) elevado, com pressão de sucção baixa e descarga baixa, qual é o diagnóstico na Matriz de Falhas?',
      opcoes: [
        {
          id: 'a',
          texto: 'Restrição no filtro secador ou linha de líquido (líquido acumulando atrás do bloqueio).',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Perfeito! Na restrição, o líquido fica preso no condensador (sub-resfriamento sobe) e falta fluido no evaporador (sobreaquecimento sobe).',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Subcarga por vazamento ativo de refrigerante.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'didatico',
              texto: 'Na subcarga o sobreaquecimento sobe, mas o subarrefecimento cai porque falta líquido no condensador.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Sobrecarga de fluido refrigerante.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Na sobrecarga o sobreaquecimento cai e as duas pressões (sucção e descarga) sobem.',
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA ────────────────────────────────────────────────────────
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Engenharia de Manutenção é Proteção de Vidas e de Patrimônio',
      principio: 'Quem mede com método nunca adivinha: primeiro o bloqueio LOTO, depois os 5 sentidos e a sequência Amperagem, Pressões, Temperaturas e Vazão de ar.',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Manutenção de elite não é trocar peça na tentativa e erro. É ler os sinais vitais da máquina antes que ela pare.',
        },
        {
          quem: 'marta',
          emocao: 'confiante',
          texto: 'É entregar um prontuário PMOC blindado e um scorecard Verde, Amarelo e Vermelho que dá paz de espírito ao cliente.',
        },
        {
          quem: 'juninho',
          emocao: 'empolgado',
          texto: 'Bora mergulhar no Módulo 01 e aprender a falar a língua do diretor financeiro!',
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte a aba **Tabelas & Parâmetros** para ter à mão as 5 tabelas mestras de TCO, QAI, multas PMOC, limites elétricos e matriz SA × SC.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**TCO de 15 a 20 anos:** compra é **~15%**, energia **~65%** e manutenção **~20%**; operar em break-fix custa de 3 a 5 vezes mais.',
        '**Lei 13.589/2018 (PMOC):** obrigatório acima de **60.000 BTU/h** (**5 TR**), evitando multas de **R$ 2.000** a **R$ 1.500.000**.',
        '**Segurança inegociável:** foto LOTO com **0V**, validar barramento inverter abaixo de **36V** (retém mais de **300 Vcc**) e mangueiras de **800 PSI**.',
      ],
      proxima: 'Na aula m01-01 vamos abrir a matemática completa do Custo Total de Propriedade (TCO) e do ROI de 545%.',
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Investimento Inicial (CapEx) ~15% Compra e instalação do equipamento Consumo de Energia (OpEx) ~65% Custo de eletricidade ao longo da vida útil Manutenção (OpEx) ~20% Preventiva, corretiva e preditiva combinadas',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Lei Federal nº 13.589/2018: Torna obrigatório o Plano de Manutenção, Operação e Controle (PMOC) para todos os edifícios de uso público e coletivo que disponham de sistemas de climatização artificial com capacidade instalada total superior a 60.000 BTU/h (5 TR).',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Laudos microbiológicos vencidos ou ausência de documentação em fiscalizações surpresa da ANVISA resultam em multas de R$ 2.000 a R$ 1.500.000',
        },
        {
          campo: 'infobox_campo',
          trecho: 'os capacitores de potência da placa retificadora de compressores inverter retêm tensões superiores a 300 Vcc por vários minutos. Nunca toque em componentes da placa sem antes verificar com multímetro CAT III/IV que a tensão do barramento CC está abaixo de 36V.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O técnico deve enviar uma foto no aplicativo mostrando o cadeado LOTO instalado e o multímetro indicando 0V no circuito antes de ter acesso ao checklist de reparo.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Exige mangueiras de manifold com classificação mínima de 800 PSI de ruptura para evitar acidentes por estouro.',
        },
      ],
    },
  ],
};
