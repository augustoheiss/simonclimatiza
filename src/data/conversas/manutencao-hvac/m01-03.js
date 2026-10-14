// ═══════════════════════════════════════════════════════════════════════════
// CONVERSA — manutencao-hvac / m01-03
// Protocolos de Segurança Operacional
// Cenário: Casa de Máquinas (LOTO, arco elétrico, A2L, ácido fluorídrico, NR-33/35)
// ═══════════════════════════════════════════════════════════════════════════

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm01-03',
  versao: 1,
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  elenco: ['simon', 'juninho', 'bia', 'marta'],
  estimativaMin: 12,

  beats: [
    // ── 1. ABERTURA ─────────────────────────────────────────────────────────
    {
      id: 'abertura-1',
      tipo: 'cena',
      texto: 'Na casa de máquinas do edifício corporativo, Simon aponta para o quadro de força de um Rooftop enquanto segura um cadeado vermelho LOTO e um multímetro CAT IV.',
    },
    {
      id: 'abertura-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Turma, nenhum diagnóstico vale a vida de vocês. Antes de encostar uma chave num painel comercial, segurança não é sugestão: é bloqueio físico e validação.',
    },
    {
      id: 'abertura-3',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'confiante',
      texto: 'Por isso no nosso aplicativo CMMS o checklist nem abre enquanto o técnico não envia duas fotos: o cadeado LOTO travando o disjuntor e o multímetro exibindo **0V** nos bornes.',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'O aplicativo de campo (CMMS) deve bloquear o início das rotinas e do checklist técnico até que o técnico seja obrigado a fazer o upload de duas fotos: uma mostrando o cadeado LOTO físico travando o disjuntor com sua etiqueta visível, e outra mostrando o multímetro exibindo 0V de tensão nos bornes da máquina.',
      },
    },

    // ── 2. CONFLITO E APOSTA ────────────────────────────────────────────────
    {
      id: 'conflito-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mestre, e se o técnico tiver um multímetro simples CAT II de tomada residencial e for medir num painel trifásico de **380V/480V**?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Utilizar um multímetro de categoria inferior (como um medidor CAT II projetado para tomadas residenciais) em um painel elétrico comercial de 380V/480V é extremamente perigoso.',
      },
    },
    {
      id: 'conflito-2',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Ele corre risco de explosão na mão! Um arco elétrico atinge até **19.000°C** (**35.000°F**). Em barramentos e inversores exigimos CAT III **600V** / **1000V**, e na entrada da concessionária CAT IV **600V**.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Ele gera temperaturas extremas que podem atingir 19.000°C (35.000°F), além de radiação luminosa intensa e ondas de choque de pressão concussivas [15].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'CAT III 600V / 1000V: Exigido para medições em barramentos trifásicos, motores de chillers, inversores de frequência e painéis de distribuição predial [28].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'CAT IV 600V: Exigido para medições na entrada de energia da concessionária, transformadores externos e cabos de alimentação ao ar livre [28].',
        },
      ],
    },
    {
      id: 'conflito-3',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'E tem mais: mesmo desligando a rede, capacitores de compressores inverter e VFDs guardam de **300V** a **800V** DC! Jamais dê curto com chave de fenda; aguarde de 5 a 20 minutos e meça.',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Os compressores inverter e ventiladores modulados por inversores de frequência (VFDs) utilizam capacitores que retêm tensões de até 300V a 800V DC mesmo após desligar o disjuntor principal. Aguarde o tempo de descarga especificado (5 a 20 min), meça com multímetro adequado (CAT III/IV) e nunca feche curto-circuito com chave de fenda',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Ao realizar manutenção em altura numa cobertura com unidades Rooftop (NR-35), onde o técnico deve ancorar seu talabarte de segurança?',
      opcoes: [
        {
          id: 'a',
          texto: 'Na tubulação de cobre de sucção ou nos dutos de chapa galvanizada próximos.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Jamais! Tubos de refrigerante e dutos leves cedem sob impacto dinâmico e causam queda fatal.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Exclusivamente em linhas de vida ou olhais certificados, tratando claraboias como aberturas abertas no piso.',
          ideal: true,
          reacao: [
            {
              quem: 'marta',
              emocao: 'aprovando',
              texto: 'Perfeito! Só pontos certificados aguentam a força de frenagem de uma queda, e nunca se pisa em domos de acrílico ou policarbonato.',
            },
          ],
        },
      ],
    },

    // ── 3. CAUSO ────────────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Acidente no Rooftop e o Perigo Silencioso do Ácido Fluorídrico',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'No relatório NIOSH FACE, um técnico de 33 anos foi diagnosticar uma unidade na cobertura com a chave ligada: a mão esquerda tocou a carcaça aterrada e a direita pegou um borne de **480V** — foi fatal.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'A investigação concluiu que a chave de alimentação principal estava energizada e, ao manusear as pontas de prova do multímetro, o técnico acidentalmente encostou a mão esquerda na carcaça aterrada da máquina e a mão direita em um terminal energizado de 480V [31].',
          },
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'E na química o perigo também é invisível: limpadores com Ácido Fluorídrico (HF) não geram dor inicial, mas penetram até os ossos roubando cálcio e magnésio do sangue.',
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Isso provoca hipocalcemia e parada cardíaca! Se houver exposição, enxágue por no máximo 5 minutos e aplique imediatamente gel de Gluconato de Cálcio a **2,5%**!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Em caso de exposição, enxágue por no máximo 5 minutos e aplique imediatamente gel de Gluconato de Cálcio a 2,5%.',
          },
        },
      ],
    },

    // ── 4. INSIGHT ──────────────────────────────────────────────────────────
    {
      id: 'insight-1',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'Olhem também a transição para fluidos A2L moderadamente inflamáveis, como R-32 e R-454B. É proibido usar recolhedora comum de R-410A neles, pois faíscas nos contatores podem causar explosão!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Proibição de Equipamentos Padrão: O uso de recolhedoras projetadas para R-410A é proibido em sistemas com R-32 ou R-454B, sob risco de explosão caso haja faíscas nos contatores elétricos da ferramenta [32].',
      },
    },
    {
      id: 'insight-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'E em salas subterrâneas ou UTAs fechadas (NR-33), qualquer fluido — inclusive R-410A, R-134a e R-404A — desloca o oxigênio e causa asfixia. Exijam PET, detector multigás e vigia dedicado!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Embora os riscos de inflamabilidade sejam associados aos gases A2L, a asfixia simples é um perigo presente em todas as classes de refrigerante (incluindo R-410A, R-134a, R-404A).',
      },
    },
    {
      id: 'insight-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'confiante',
      texto: 'Na Tabela 1.3.2 (NFPA 70E / NR-10), as vestimentas contra arco elétrico vão da Categoria 1 (**4 cal/cm²**) e Categoria 2 (**8 cal/cm²**) até a Categoria 3 (**25 cal/cm²**) e Categoria 4 (**40 cal/cm²**).',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Categoria 1 4 cal/cm² Painéis de iluminação de 127V/220V, painéis de controle padrão. Camisa e calça resistentes ao arco elétrico (AR), protetor facial AR, luvas de couro pesado. Categoria 2 8 cal/cm² Centro de Comando de Motores (CCM) de 220V-440V, disjuntores de RTUs de 380V/480V. Camisa e calça AR, capuz tipo balaclava AR com protetor facial envolvente AR, ou capuz completo AR. Categoria 3 25 cal/cm² Painéis de chillers industriais sem proteção de barreira física, painéis de entrada de alta corrente. Traje de proteção contra arco elétrico completo (flash suit) de duas peças (jaqueta e calça AR), capuz integrado AR. Categoria 4 40 cal/cm²',
      },
    },
    {
      id: 'insight-4',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'serio',
      texto: 'E nas torres de resfriamento (ASHRAE 188), atenção total ao risco biológico: a bactéria *Legionella pneumophila* prolifera na água entre **25°C** e **45°C** (**77°F** a **113°F**).',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A bactéria Legionella pneumophila prolifera em sistemas de água com temperaturas entre 25°C e 45°C (77°F a 113°F), comuns em bacias de torres de resfriamento de água industriais [50].',
      },
    },
    {
      id: 'insight-5',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'espantado',
      texto: 'Ou seja: na manutenção de torres de resfriamento, o respirador PFF2/N95 é tão indispensável quanto o capacete e o cinto paraquedista!',
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Ao entrar em uma UTA fechada (Espaço Confinado NR-33), o vigia externo pode aproveitar o tempo para lavar filtros em outra sala enquanto o técnico trabalha lá dentro.',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Mito perigosíssimo! Pela NR-33, o vigia externo deve ser exclusivo e dedicado ao monitoramento e resgate do técnico, sem jamais desviar para outras tarefas.',
        },
      ],
    },

    // ── 5. PRÁTICA ──────────────────────────────────────────────────────────
    {
      id: 'pratica-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Segurança Pré-Intervenção em Cobertura e Casa de Máquinas',
      enunciado: 'Antes de liberar a equipe para intervir num Rooftop comercial e numa UTA fechada, marque a ÚNICA conduta 100% segura conforme o padrão Simon:',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Aplicar LOTO elétrico, travar conjunto de polias/ventilador (NR-12) e enviar foto do multímetro CAT III/IV em 0V no app.',
          correta: true,
          fonte: {
            campo: 'infobox_campo',
            trecho: 'fazer o upload de duas fotos: uma mostrando o cadeado LOTO físico travando o disjuntor com sua etiqueta visível, e outra mostrando o multímetro exibindo 0V de tensão nos bornes da máquina.',
          },
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Excelente! Isolamento multi-modal completo: elétrico, mecânico e validação fotográfica de **0V** no CMMS.',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'fazer o upload de duas fotos: uma mostrando o cadeado LOTO físico travando o disjuntor com sua etiqueta visível, e outra mostrando o multímetro exibindo 0V de tensão nos bornes da máquina.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Ancorar o talabarte na tubulação de cobre de sucção e apoiar o pé sobre a claraboia de acrílico.',
          correta: false,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Risco fatal de queda! Nunca use tubulações ou dutos como ancoragem e trate claraboias como aberturas no piso.',
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Fechar curto nos capacitores de 800V DC do inversor usando uma chave de fenda para descarregar rápido.',
          correta: false,
          fonte: {
            campo: 'infobox_campo',
            trecho: 'utilizam capacitores que retêm tensões de até 300V a 800V DC mesmo após desligar o disjuntor principal. Aguarde o tempo de descarga especificado (5 a 20 min), meça com multímetro adequado (CAT III/IV) e nunca feche curto-circuito com chave de fenda',
          },
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Proibido! Dar curto com chave de fenda num barramento de **300V** a **800V** DC provoca arco elétrico e explosão!',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'utilizam capacitores que retêm tensões de até 300V a 800V DC mesmo após desligar o disjuntor principal.',
              },
            },
          ],
        },
        {
          id: 'p4',
          rotulo: 'Recolher fluido R-32 ou R-454B usando uma recolhedora comum projetada apenas para R-410A.',
          correta: false,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O uso de recolhedoras projetadas para R-410A é proibido em sistemas com R-32 ou R-454B, sob risco de explosão caso haja faíscas nos contatores elétricos da ferramenta [32].',
          },
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Nunca! Fluidos A2L exigem recolhedoras certificadas à prova de faísca; usar equipamento de R-410A traz risco de explosão.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'O uso de recolhedoras projetadas para R-410A é proibido em sistemas com R-32 ou R-454B',
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
      enunciado: 'Qual é o protocolo correto ao trabalhar com inversores de frequência (barramento DC de 300V a 800V) e ao sofrer exposição acidental a limpadores com Ácido Fluorídrico (HF)?',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'utilizam capacitores que retêm tensões de até 300V a 800V DC mesmo após desligar o disjuntor principal.',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Aguardar de 5 a 20 min para descarga dos capacitores medindo com multímetro CAT III/IV; e, no HF, enxaguar por até 5 min e aplicar gel de Gluconato de Cálcio a **2,5%**.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Na mosca! Jamais dê curto com chave de fenda no capacitor DC e tenha sempre o gel de Gluconato de Cálcio a **2,5%** contra o HF.',
              fonte: [
                {
                  campo: 'infobox_campo',
                  trecho: 'Os compressores inverter e ventiladores modulados por inversores de frequência (VFDs) utilizam capacitores que retêm tensões de até 300V a 800V DC mesmo após desligar o disjuntor principal. Aguarde o tempo de descarga especificado (5 a 20 min), meça com multímetro adequado (CAT III/IV) e nunca feche curto-circuito com chave de fenda',
                },
                {
                  campo: 'infobox_campo',
                  trecho: 'Em caso de exposição, enxágue por no máximo 5 minutos e aplique imediatamente gel de Gluconato de Cálcio a 2,5%.',
                },
              ],
            },
          ],
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Em caso de exposição, enxágue por no máximo 5 minutos e aplique imediatamente gel de Gluconato de Cálcio a 2,5%.',
          },
        },
        {
          id: 'b',
          texto: 'Descarregar os capacitores encostando uma chave de fenda nos terminais e lavar a pele apenas com sabão comum se não houver dor imediata.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Errado! Curto com chave de fenda gera arco explosivo, e o HF não causa dor inicial enquanto ataca cálcio e magnésio até o coração.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Medir o barramento de **800V** DC com multímetro residencial CAT II logo após desligar o disjuntor.',
          correta: false,
          feedback: [
            {
              quem: 'marta',
              emocao: 'serio',
              texto: 'Perigosíssimo! Painéis comerciais e inversores exigem instrumento CAT III **600V** / **1000V** e tempo de descarga.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'CAT III 600V / 1000V: Exigido para medições em barramentos trifásicos, motores de chillers, inversores de frequência e painéis de distribuição predial [28].',
              },
            },
          ],
          fonte: {
            campo: 'infobox_campo',
            trecho: 'utilizam capacitores que retêm tensões de até 300V a 800V DC mesmo após desligar o disjuntor principal.',
          },
        },
      ],
    },
    {
      id: 'pergunta-2',
      tipo: 'quiz',
      enunciado: 'Sobre os fluidos A2L (R-32 e R-454B) e o controle biológico em torres de resfriamento (ASHRAE 188), qual afirmação está tecnicamente correta?',
      opcoes: [
        {
          id: 'a',
          texto: 'Recolhedoras comuns de R-410A são proibidas para R-32/R-454B por risco de ignição, e a *Legionella* prolifera na água entre **25°C** e **45°C**.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! Fluidos A2L exigem equipamentos intrinsecamente seguros (sem faísca nos contatores), e a faixa de **25°C** a **45°C** é o habitat crítico da *Legionella*.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'A bactéria Legionella pneumophila prolifera em sistemas de água com temperaturas entre 25°C e 45°C (77°F a 113°F), comuns em bacias de torres de resfriamento de água industriais [50].',
              },
            },
          ],
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'O uso de recolhedoras projetadas para R-410A é proibido em sistemas com R-32 ou R-454B',
            },
            {
              campo: 'conteudo_html',
              trecho: 'A bactéria Legionella pneumophila prolifera em sistemas de água com temperaturas entre 25°C e 45°C (77°F a 113°F), comuns em bacias de torres de resfriamento de água industriais [50].',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Fluidos A1 como o R-410A não oferecem risco de asfixia em salas subterrâneas fechadas.',
          correta: false,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'a asfixia simples é um perigo presente em todas as classes de refrigerante (incluindo R-410A, R-134a, R-404A).',
          },
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Errado! Todos os refrigerantes (incluindo R-410A, R-134a e R-404A) são mais densos que o ar e causam asfixia em locais confinados.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'a asfixia simples é um perigo presente em todas as classes de refrigerante (incluindo R-410A, R-134a, R-404A).',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'A mesma recolhedora de R-410A pode ser usada em R-32 desde que o disjuntor esteja desligado.',
          correta: false,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O uso de recolhedoras projetadas para R-410A é proibido em sistemas com R-32 ou R-454B',
          },
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Proibido! Os contatores internos da recolhedora comum geram faísca e podem explodir misturas A2L como R-32 e R-454B.',
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA ────────────────────────────────────────────────────────
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'A Pressa É Inimiga da Vida: Trava Digital contra Atalhos',
      principio: 'Segurança de verdade não depende do humor do técnico na sexta-feira à tarde; ela é travada no processo com cadeado LOTO e validação de ausência de tensão.',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'O melhor técnico do mundo é aquele que volta inteiro pra casa todos os dias. Cadeado no disjuntor e chave no bolso!',
        },
        {
          quem: 'marta',
          emocao: 'confiante',
          texto: 'E quando o cliente vê nossa equipe aplicando LOTO multi-modal e PET de espaço confinado, ele sabe que contratou engenharia de ponta.',
        },
        {
          quem: 'juninho',
          emocao: 'empolgado',
          texto: 'Cadeado LOTO e foto do **0V** no app antes de qualquer ferramenta! Fechamos o Módulo 01 com chave de ouro!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'fazer o upload de duas fotos: uma mostrando o cadeado LOTO físico travando o disjuntor com sua etiqueta visível, e outra mostrando o multímetro exibindo 0V de tensão nos bornes da máquina.',
          },
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Veja na aba **Tabelas & Parâmetros** as Tabelas 1.3.1 (Isolamento Multi-Modal por Equipamento) e 1.3.2 (Categorias de EPI para Arco Elétrico NFPA 70E / NR-10).',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Trava no CMMS e Barramento DC:** foto obrigatória do cadeado LOTO + **0V**; aguardar descarga dos capacitores inverter (**300V** a **800V** DC).',
        '**Arco Elétrico e Instrumentação:** arco chega a **19.000°C**; usar multímetro CAT III **600V** / **1000V** (painéis) ou CAT IV **600V** (entrada) e EPI de **4 cal/cm²** a **40 cal/cm²**.',
        '**Riscos Químicos, A2L e Biológicos:** ferramentas A2L dedicadas para R-32/R-454B, gel de Gluconato de Cálcio a **2,5%** contra HF e controle de *Legionella* (**25°C** a **45°C**).',
      ],
      proxima: 'Prepare-se para o Desafio do Módulo 01 e, em seguida, vamos abrir o Módulo 02 com o Método de Diagnóstico dos 5 Sentidos!',
      fonte: [
        {
          campo: 'infobox_campo',
          trecho: 'fazer o upload de duas fotos: uma mostrando o cadeado LOTO físico travando o disjuntor com sua etiqueta visível, e outra mostrando o multímetro exibindo 0V de tensão nos bornes da máquina.',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Os compressores inverter e ventiladores modulados por inversores de frequência (VFDs) utilizam capacitores que retêm tensões de até 300V a 800V DC mesmo após desligar o disjuntor principal.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Ele gera temperaturas extremas que podem atingir 19.000°C (35.000°F), além de radiação luminosa intensa e ondas de choque de pressão concussivas [15].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'CAT III 600V / 1000V: Exigido para medições em barramentos trifásicos, motores de chillers, inversores de frequência e painéis de distribuição predial [28].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'CAT IV 600V: Exigido para medições na entrada de energia da concessionária',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Categoria 1 4 cal/cm² Painéis de iluminação de 127V/220V, painéis de controle padrão. Camisa e calça resistentes ao arco elétrico (AR), protetor facial AR, luvas de couro pesado. Categoria 2 8 cal/cm² Centro de Comando de Motores (CCM) de 220V-440V, disjuntores de RTUs de 380V/480V. Camisa e calça AR, capuz tipo balaclava AR com protetor facial envolvente AR, ou capuz completo AR. Categoria 3 25 cal/cm² Painéis de chillers industriais sem proteção de barreira física, painéis de entrada de alta corrente. Traje de proteção contra arco elétrico completo (flash suit) de duas peças (jaqueta e calça AR), capuz integrado AR. Categoria 4 40 cal/cm²',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Em caso de exposição, enxágue por no máximo 5 minutos e aplique imediatamente gel de Gluconato de Cálcio a 2,5%.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A bactéria Legionella pneumophila prolifera em sistemas de água com temperaturas entre 25°C e 45°C (77°F a 113°F), comuns em bacias de torres de resfriamento de água industriais [50].',
        },
      ],
    },
  ],
};
