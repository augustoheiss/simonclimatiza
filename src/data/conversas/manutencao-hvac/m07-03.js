// Conversa: Gerenciamento Digital de Manutenção (CMMS) (m07-03)
// Cenário: Padaria da Manhã — Hierarquia ASHRAE 180, PMOC 60.000 BTU/h, KPIs (MTBF, MTTR, PMC > 90%, FTFR > 82%) e Estoque MRO

const F_PMOC_MULTA = {
  campo: 'infobox_campo',
  trecho: 'O descumprimento da Lei Federal 13.589/2018 (Lei do PMOC), que exige o Plano de Manutenção, Operação e Controle para sistemas com capacidade acumulada acima de 60.000 BTU/h (5 TR), expõe as empresas a multas administrativas pesadas que variam de R$ 2.000 a R$ 1.500.000',
};

const F_KITTING_FTFR = {
  campo: 'infobox_campo',
  trecho: 'Até 35% do aumento do MTTR em reparos de chillers centrais é causado por faltas de consumíveis básicos ou atrasos de kitting de peças. Nunca permita que ordens de serviço de MP de alta complexidade sejam agendadas sem que o almoxarifado digital tenha previamente reservado o kit completo de materiais (filtros plissados, contatores, correias trapezoidais e graxas). A prática de "kitting" preventivo garante a resolução na primeira visita (FTFR &gt; 82%).',
};

const F_ASHRAE_180 = {
  campo: 'tabelas_html',
  trecho: 'Tabela 7.3.1 — Níveis de Hierarquia de Ativos baseada na ASHRAE 180 Nível Hierárquico Definição Conceitual Exemplo Prático de HVAC Função na Estrutura de Dados do CMMS Local / Campus Localização geográfica abrangente ou limite de propriedade unificado. Sede Corporativa, Av. Principal, 100 Agrega os custos totais de manutenção do portfólio e unifica métricas de relatórios. Edifício Estrutura física específica situada dentro do local mais amplo. Edifício A (Torre Norte)',
};

const F_KPIS_TAB = {
  campo: 'tabelas_html',
  trecho: 'MTBF Tempo de Operação Útil Total ÷ Número de Falhas Corretivas Linha de tendência em ascensão proativa Mede a confiabilidade mecânica. Quanto maior, mais estáveis são os equipamentos. MTTR Tempo Total Gasto em Reparos ÷ Número de Reparos Efetuados &lt; 2,5 Horas Mede a agilidade diagnóstica, logística de fornecimento de peças e capacitação técnica. PMC (Ordens de MP Concluídas no Prazo ÷ Ordens de MP Programadas) * 100 &gt; 90% de Conformidade Indica a disciplina na execução do plano preventivo sistemático. PMC baixo prenuncia quebras. FTFR (Ordens Fechadas na 1ª Visita ÷ Total de Ordens Despachadas) * 100 &gt; 82% de Taxa de Sucesso Indica eficiência logística de kitting e precisão no despacho inicial dos técnicos. Proporção de Manutenção Horas de Trabalho Corretivo ÷ Horas de Trabalho Preventivo &lt; 20% Reativa (80% Preventiva)',
};

const F_ROI_CMMS = {
  campo: 'conteudo_html',
  trecho: 'Para operações de HVAC especificamente, a transição de uma postura reativa para um programa de manutenção preditivo e gerenciado digitalmente produz um retorno sobre o investimento (ROI) documentado de 545%. Além disso, instalações que implementam um Sistema Computadorizado de Gerenciamento de Manutenção (CMMS - Computerized Maintenance Management System) estruturado experimentam 70% menos quebras de equipamentos e obtêm uma redução de 50% nos custos totais de manutenção',
};

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm07-03',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'padaria-manha',
  duracaoMin: 10,
  beats: [
    {
      id: 'abertura-padaria-cmms',
      tipo: 'fala',
      quem: 'narrador',
      texto: 'Sete da manhã na padaria da esquina. O cheiro de café coado e pão na chapa acompanha Dona Marta, Simon, Bia e Juninho diante do tablet com o painel do sistema CMMS aberto.',
    },
    {
      id: 'juninho-mostra-papel',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'rindo',
      texto: 'Dona Marta, achei no bolso um bloco antigo de OS de quando eu trabalhava na outra firma: estava escrito "Consertei o ar da sala da moça loira do segundo andar"!',
    },
    {
      id: 'marta-reage-papel-carbono',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'irritado',
      texto: 'Nem me lembre dessa época de papel carbono sujo de graxa, Juninho! Quando a moça mudava de mesa, ninguém sabia qual máquina tinha recebido o compressor novo nem onde estava o PMOC!',
    },
    {
      id: 'simon-explica-lei-pmoc',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'E hoje o buraco é mais embaixo: a Lei Federal 13.589/2018 exige PMOC para sistemas com capacidade acumulada acima de 60.000 BTU/h (5 TR), sob pena de multas de R$ 2.000 a R$ 1.500.000!',
      fonte: F_PMOC_MULTA,
    },
    {
      id: 'bia-explica-ashrae180',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'aprovando',
      texto: 'Por isso no CMMS a gente estrutura o cadastro de ativos seguindo a norma ASHRAE 180 em 5 níveis: Local/Campus, Edifício, Andar/Zona, Sistema e Componente com QR Code único!',
      fonte: F_ASHRAE_180,
    },
    {
      id: 'referencia-tabela-kpis',
      tipo: 'referencia',
      texto: 'Consulte na aba de tabelas a hierarquia ASHRAE 180 e as metas de classe mundial: MTTR < 2,5 Horas, PMC > 90%, FTFR > 82% e Proporção < 20% Reativa (80% Preventiva).',
      alvo: { aba: 'tabelas' },
      fonte: [F_ASHRAE_180, F_KPIS_TAB],
    },
    {
      id: 'causo-parafuso-kitting',
      tipo: 'causo',
      titulo: 'O Técnico que Viajou Três Vezes por Falta de Kitting',
      fonte: [F_KITTING_FTFR, F_KPIS_TAB],
      falas: [
        {
          quem: 'simon',
          emocao: 'rindo',
          texto: 'Conheci uma empresa que mandou o técnico fazer preventiva num chiller distante da base sem reservar as peças antes no sistema.',
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'Esqueceu os filtros secadores e a correia no almoxarifado, mestre?',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Chegou lá, viu qual era a correia, voltou pra buscar, e quando retornou viu que faltava a graxa! Até 35% do aumento do MTTR vem de falta de consumíveis ou atraso de kitting!',
          fonte: F_KITTING_FTFR,
        },
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'No nosso CMMS, a ordem de MP só vai para a agenda quando o kit completo de materiais está reservado, garantindo resolução na primeira visita com FTFR > 82%!',
          fonte: [F_KITTING_FTFR, F_KPIS_TAB],
        },
      ],
    },
    {
      id: 'mito-verdade-equipe-correndo',
      tipo: 'mitoVerdade',
      afirmacao: 'Se uma equipe de manutenção passa 80% do tempo correndo para atender emergências corretivas e apenas 20% em preventivas, isso prova alta eficiência operacional.',
      verdade: false,
      fonte: [F_KPIS_TAB, F_ROI_CMMS],
      explicacao: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Mito total! A proporção de classe mundial é exatamente o inverso: menos de 20% de trabalho corretivo reativo e 80% de manutenção preventiva e preditiva.',
          fonte: F_KPIS_TAB,
        },
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'Sair do modo incêndio para o gerenciamento digital gera 70% menos quebras de equipamentos, reduz 50% dos custos totais e entrega ROI documentado de 545%!',
          fonte: F_ROI_CMMS,
        },
      ],
    },
    {
      id: 'escolha-hierarquia-ashrae',
      tipo: 'escolha',
      pergunta: 'Segundo a estrutura hierárquica da norma ASHRAE 180 no CMMS, em qual nível exato as ordens de serviço, peças de reposição e horas de trabalho devem ser diretamente aplicadas?',
      fonte: F_ASHRAE_180,
      opcoes: [
        {
          id: 'a',
          texto: 'No nível mais alto de Local / Campus (ex.: Sede Corporativa), misturando todas as máquinas num único centro.',
          fonte: F_ASHRAE_180,
          reacao: [
            {
              quem: 'bia',
              emocao: 'irritado',
              texto: 'Se jogar tudo no Campus, você nunca saberá qual chiller ou bomba está consumindo todo o orçamento de peças!',
              fonte: F_ASHRAE_180,
            },
          ],
        },
        {
          id: 'b',
          texto: 'No nó terminal de Componente (ex.: Chiller Centrífugo 01, Bomba de Circulação A), vinculado à cadeia Sistema, Andar, Edifício e Campus.',
          ideal: true,
          fonte: F_ASHRAE_180,
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Exato! O Componente é o nó terminal onde o trabalho ocorre, permitindo calcular o MTBF e o custo histórico individual de cada máquina.',
              fonte: F_ASHRAE_180,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Em planilhas soltas por nome do operador do turno, sem vínculo com o ativo físico.',
          reacao: [
            {
              quem: 'marta',
              emocao: 'irritado',
              texto: 'Planilha solta sem TAG é o túmulo da rastreabilidade e da auditoria do PMOC!',
            },
          ],
        },
      ],
    },
    {
      id: 'marta-pergunta-pmc-mes',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'curioso',
      texto: 'Bia, mostra pro Juninho como a gente calcula o nosso indicador de Conformidade de Manutenção Preventiva (PMC) deste mês!',
      fonte: F_KPIS_TAB,
    },
    {
      id: 'bia-abre-calculadora-pmc',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'aprovando',
      texto: 'É super direto, Dona Marta: dividimos as ordens de MP concluídas no prazo pelo total programado e multiplicamos por 100! Calcula aí, Juninho.',
      fonte: F_KPIS_TAB,
    },
    {
      id: 'calculadora-pmc-cmms',
      tipo: 'calculadora',
      titulo: 'Cálculo de Conformidade de Manutenção Preventiva (PMC)',
      formula: 'PMC (%) = (Ordens de MP Concluídas no Prazo ÷ Ordens de MP Programadas) × 100',
      enunciado: 'No mês, o CMMS programou 100 ordens de manutenção preventiva (MP) e a equipe concluiu 90 ordens rigorosamente dentro do prazo. Qual foi o indicador PMC atingido em porcentagem?',
      unidade: '%',
      respostaCorreta: 90,
      tolerancia: 0.5,
      leituras: [
        { rotulo: 'Meta Alvo Preditiva PMC', valor: '> 90% de Conformidade' },
        { rotulo: 'Meta Taxa 1ª Visita (FTFR)', valor: '> 82% de Taxa de Sucesso' },
      ],
      opcoesRapidas: [50, 70, 82, 90],
      fonte: F_KPIS_TAB,
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'Cravado! (90 ÷ 100) × 100 = 90%, atingindo o piso da meta de conformidade preventiva (> 90%) que impede a degradação silenciosa dos ativos.',
          fonte: F_KPIS_TAB,
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Aplique a fórmula do PMC da tabela: divida 90 concluídas por 100 programadas e multiplique por 100 para encontrar 90%.',
          fonte: F_KPIS_TAB,
        },
      ],
    },
    {
      id: 'inspecao-painel-cmms',
      tipo: 'inspecao',
      titulo: 'Auditoria de Indicadores e Conformidade no CMMS',
      enunciado: 'Dona Marta abriu quatro cartões no dashboard de gestão. Qual deles indica um desvio operacional que exige correção imediata?',
      fonte: [F_PMOC_MULTA, F_KPIS_TAB, F_KITTING_FTFR],
      pontos: [
        {
          id: 'a',
          rotulo: 'Edifício comercial com mais de 60.000 BTU/h (5 TR) operando sem PMOC assinado por engenheiro',
          correta: true,
          fonte: F_PMOC_MULTA,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Risco jurídico gravíssimo! Pela Lei 13.589/2018, passar de 60.000 BTU/h (5 TR) sem PMOC expõe o cliente a multas de R$ 2.000 a R$ 1.500.000!',
              fonte: F_PMOC_MULTA,
            },
          ],
        },
        {
          id: 'b',
          rotulo: 'Tempo Médio de Reparo (MTTR) mantido abaixo da meta de 2,5 Horas com kitting prévio',
          fonte: [F_KPIS_TAB, F_KITTING_FTFR],
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Excelente! O MTTR < 2,5 Horas mostra diagnóstico rápido e almoxarifado sincronizado.',
              fonte: F_KPIS_TAB,
            },
          ],
        },
        {
          id: 'c',
          rotulo: 'Taxa de resolução na primeira visita (FTFR) acima de 82% graças à reserva prévia de materiais',
          fonte: [F_KPIS_TAB, F_KITTING_FTFR],
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Meta batida! FTFR > 82% significa menos viagens perdidas e cliente satisfeito logo no primeiro atendimento.',
              fonte: F_KPIS_TAB,
            },
          ],
        },
        {
          id: 'd',
          rotulo: 'Proporção de horas de manutenção com menos de 20% reativa e 80% preventiva',
          fonte: F_KPIS_TAB,
          feedback: [
            {
              quem: 'marta',
              emocao: 'aprovando',
              texto: 'Operação saudável e previsível! É assim que reduzimos 70% das quebras e 50% dos custos totais.',
              fonte: [F_KPIS_TAB, F_ROI_CMMS],
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-tag-historia',
      tipo: 'filosofia',
      titulo: 'O Que Não Tem TAG Não Tem História',
      principio: 'Sem um código único (QR Code) e registro estruturado no CMMS, três queimas repetidas pelo mesmo motivo parecem apenas três azares diferentes.',
      fonte: [F_ASHRAE_180, F_KPIS_TAB],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Quando você escaneia o QR Code na máquina e registra a leitura, o dado vira inteligência: o MTBF sobe, o MTTR cai abaixo de 2,5 Horas e o diretor financeiro enxerga o nosso valor!',
          fonte: F_KPIS_TAB,
        },
      ],
    },
    {
      id: 'quiz-pmoc-lei',
      tipo: 'quiz',
      enunciado: 'Segundo a Lei Federal 13.589/2018, a partir de qual capacidade térmica acumulada o PMOC é obrigatório e qual é a faixa de multas administrativas previstas pelo descumprimento?',
      fonte: F_PMOC_MULTA,
      opcoes: [
        {
          id: 'a',
          texto: 'Acima de 60.000 BTU/h (5 TR) acumulados, com multas que variam de R$ 2.000 a R$ 1.500.000.',
          correta: true,
          fonte: F_PMOC_MULTA,
          feedback: [
            {
              quem: 'marta',
              emocao: 'aprovando',
              texto: 'Na ponta da língua! Vários splits pequenos somados no mesmo prédio já ultrapassam 60.000 BTU/h (5 TR) e exigem PMOC rigoroso.',
              fonte: F_PMOC_MULTA,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Apenas para indústrias gigantes, sem previsão de multa financeira.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: 'Engano perigoso! A soma conta todos os aparelhos do ambiente climatizado acima de 60.000 BTU/h (5 TR).',
              fonte: F_PMOC_MULTA,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Apenas quando o índice FTFR cair abaixo de 20% no ano.',
          fonte: F_KPIS_TAB,
          feedback: [
            {
              quem: 'bia',
              emocao: 'serio',
              texto: 'FTFR é indicador interno de resolução na primeira visita (> 82%); a exigência legal do PMOC depende da capacidade instalada acima de 60.000 BTU/h (5 TR).',
              fonte: [F_KPIS_TAB, F_PMOC_MULTA],
            },
          ],
        },
      ],
    },
    {
      id: 'marta-elogia-roi-545',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'aprovando',
      texto: 'E quando algum cliente duvidar do investimento no sistema, eu mostro o ROI documentado de 545% com 70% menos quebras e 50% de redução de custos!',
      fonte: F_ROI_CMMS,
    },
    {
      id: 'bia-destaca-estoque-mro',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'aprovando',
      texto: 'Além do controle de estoque MRO com alertas de estoque mínimo para nunca faltar contator, filtro plissado ou correia trapezoidal na prateleira!',
      fonte: F_KITTING_FTFR,
    },
    {
      id: 'juninho-aposenta-bloco',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'empolgado',
      texto: 'Bloco de papel aposentado oficialmente! Agora é QR Code na carcaça, kit separado no almoxarifado e sincronização offline no aplicativo.',
    },
    {
      id: 'marta-paga-cafe',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'rindo',
      texto: 'Terminem o pão na chapa que esse café hoje é por minha conta! Nossa gestão digital está pronta para qualquer auditoria.',
    },
    {
      id: 'simon-abre-modulo08',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'aprovando',
      texto: 'Fechamos o Módulo 7! E no Módulo 8, o gran finale do curso: Relatórios Técnicos Forenses, Auditoria Energética e Precificação de Contratos PMOC!',
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'A Lei 13.589/2018 exige PMOC acima de 60.000 BTU/h (5 TR) acumulados, sob risco de multas de R$ 2.000 a R$ 1.500.000.',
        'Estruture os ativos no CMMS pelos 5 níveis da ASHRAE 180 e pratique kitting prévio (evitando 35% de atraso no MTTR e garantindo FTFR > 82%).',
        'Persiga as metas de classe mundial: MTTR < 2,5 Horas, PMC > 90% e proporção < 20% reativa (80% preventiva), gerando 70% menos quebras e 50% de redução de custos.',
      ],
      proxima: 'No Módulo 8, vamos aprender a escrever Relatórios de Manutenção Profissionais que aprovam orçamentos na diretoria e blindam juridicamente a sua empresa!',
      fonte: [F_PMOC_MULTA, F_ASHRAE_180, F_KITTING_FTFR, F_KPIS_TAB, F_ROI_CMMS],
    },
  ],
};
