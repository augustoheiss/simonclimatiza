// src/data/desafiosModulo/tvr-pro-co-380v.js
// "Desafios da Rodada" (Boss Quizzes integradores de Fim de Parte) para o curso TVR Pro CO 380V (tvr-pro-co-380v).

export const DESAFIOS_MODULO = [
  // ── PARTE 1: VISÃO GERAL E NOMENCLATURA (01-01, 01-02) ──────────────────
  {
    cursoId: 'tvr-pro-co-380v',
    moduloId: 'parte-01',
    titulo: 'Desafio da Rodada · Parte 1: Visão Geral do Sistema e Nomenclatura de Engenharia',
    aulasCobertas: ['01-01', '01-02'],
    contextoInicial:
      'Hora de testar sua leitura de plaqueta e arquitetura da linha TVR Pro CO 380V! Cinco casos práticos cobrindo limites do sistema, combinação de módulos, refrigerante e decodificação das 15 posições.',
    falaSucesso:
      'Olho clínico de engenheiro de campo! Você domina desde os limites de 90 HP e 100 unidades internas até a decodificação completa das plaquetas 4TVN, 4TVF e 4TVY.',
    falaReforco:
      'Vale revisar os guardanapos da Parte 1: confira a matriz de combinações (até 3 módulos e 90 HP), a faixa de operação de -5°C a 52°C e o significado das posições 6-8 e 13 na plaqueta.',
    questoes: [
      {
        id: 'p1-q1',
        enunciado:
          'Um cliente corporativo solicita um sistema VRF Somente Frio (Cooling Only) em 380V/3Ph/60Hz para um edifício comercial com alta carga térmica. Considerando os limites da família TVR Pro CO 380V (Tópico 01-01), qual é a configuração máxima permitida por sistema combinado?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Até 3 unidades externas (1 Master + 2 Slaves) somando 90 HP (870.000 Btu/h), até 100 unidades internas conectadas e taxa de combinação de 50% a 130%.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Cravou no milímetro! Três módulos de 30 HP formam até **90 HP** (**870.000 Btu/h**), atendendo até **100 evaporadoras** na faixa de **50% a 130%**.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Até 4 unidades externas somando 120 HP, até 64 unidades internas e taxa de combinação máxima de 150%.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Cuidado! O teto da família TVR Pro CO 380V é de **3 módulos** (**90 HP**), até **100 IDUs** e taxa de combinação até **130%**.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Apenas módulos individuais de até 30 HP sem interligação frigorífica entre condensadoras.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'De **8 HP a 30 HP** são módulos individuais, mas de **32 HP a 90 HP** combinamos 2 ou 3 módulos em paralelo!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Até 3 módulos operando com R-22 ou R-32 em modo Bomba de Calor reversível.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'A família TVR Pro CO opera exclusivamente com **R-410A** em modo **Somente Frio (Cooling Only)**.',
              },
            ],
          },
        ],
      },
      {
        id: 'p1-q2',
        enunciado:
          'Na tabela oficial de combinações recomendadas pela fábrica (Tópico 01-01), o projetista especificou um sistema de 44 HP (125 kW). Por que a fábrica padroniza a combinação `14 HP + 30 HP` em vez de outras somas equivalentes?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Porque as combinações recomendadas são homologadas para equilibrar o retorno de óleo, o número de compressores e a distribuição de carga entre os chassis.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Exato! Seguir a combinação homologada (**14 HP + 30 HP** para 44 HP) garante equilíbrio dinâmico e hidráulico entre os módulos.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Porque não existem módulos de 20 HP ou 22 HP no catálogo TVR Pro CO 380V.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Existem sim! Os módulos individuais vão de 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28 até 30 HP.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Porque o barramento de comunicação RS-485 só aceita módulos com diferença mínima de 16 HP.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'O barramento H1H2E conversa com qualquer módulo da linha; a regra é de engenharia frigorífica e eficiência.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Porque acima de 40 HP é obrigatório usar 3 módulos externos.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'Com 2 módulos vamos de **32 HP até 60 HP** (30 + 30 HP). Só usamos 3 módulos de **62 HP a 90 HP**.',
              },
            ],
          },
        ],
      },
      {
        id: 'p1-q3',
        enunciado:
          'Durante o recebimento de equipamentos na obra (Tópico 01-02), você confere três etiquetas: `4TVN0077F000AA`, `4TVF01277F000AA` e `4TVY077F2000AA`. O que identificam o dígito `4` na posição 1 e os prefixos `TVN`, `TVF` e `TVY` nas posições 2-3-4?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Dígito 4 = refrigerante R-410A; TVN = evaporadora padrão (Indoor Unit); TVF = unidade interna de Ar Novo (Fresh Air); TVY = unidade condensadora (Outdoor Unit).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Leitura limpa! `4` = **R-410A**, `TVN` = interna padrão, `TVF` = Fresh Air e `TVY` = condensadora externa.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Dígito 4 = 400V; TVN = condensadora; TVF = cassete de 4 vias; TVY = fan coil de água gelada.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Invertido! A posição 1 indica o fluido refrigerante (**R-410A**), e `TVY` é a unidade externa.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Dígito 4 = 4 tubos; TVN = módulo mestre; TVF = módulo escravo; TVY = caixa de recuperação de calor.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'O sistema TVR Pro CO é de 2 tubos Somente Frio! `TVN`, `TVF` e `TVY` identificam as famílias de unidades interna, ar novo e externa.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Todos os três códigos pertencem a unidades condensadoras de diferentes gerações.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Apenas `4TVY` é condensadora; `4TVN` e `4TVF` são unidades internas.',
              },
            ],
          },
        ],
      },
      {
        id: 'p1-q4',
        enunciado:
          'Ao comparar a plaqueta da condensadora de 8 HP (`4TVY077F2000AA`) com a condensadora de 30 HP (`4TVY290F2000AA`) no Tópico 01-02, como funciona o campo de capacidade nas posições 6-7-8?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Representa a capacidade nominal em Btu/h × 1.000: "077" indica 77.000 Btu/h (8 HP) e, nos modelos maiores como 30 HP, o campo usa as três posições "290" para indicar 290.000 Btu/h.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Perfeito! Multiplique por 1.000: `077` = **77.000 Btu/h** (8 HP) e `290` = **290.000 Btu/h** (30 HP).',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Indica a corrente nominal de partida em ampères (77 A e 290 A).',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Nada de corrente elétrica nas posições 6-7-8! Ali mora a capacidade térmica em milhares de Btu/h.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Indica a vazão de ar em CFM do ventilador axial da condensadora.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'CFM nas posições 6-7 só existe na unidade de Ar Novo (`4TVF`), onde `12` significa **1200 CFM**.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Indica o peso líquido do chassi em quilogramas.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'O peso fica na tabela física da etiqueta, não no código de modelo de 15 dígitos.',
              },
            ],
          },
        ],
      },
      {
        id: 'p1-q5',
        enunciado:
          'Uma obra litorânea exige unidades externas com proteção anticorrosiva de fábrica (Tópico 01-02). Qual posição e qual caractere na nomenclatura da ODU confirmam que o equipamento recebido possui tratamento anticorrosivo?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Posição 13 da nomenclatura da ODU: "C" indica Corrosion treatment (tratamento anticorrosivo), enquanto "0" indica Standard (padrão).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Olho de águia! Na posição 13, `0` é Standard e `C` confirma proteção anticorrosiva de fábrica para maresia.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Posição 10 da nomenclatura: "F" indica proteção contra maresia.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'A posição 9/10 com a letra `F` identifica a alimentação elétrica (**380V, 50-60Hz**), não o acabamento anticorrosivo!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Posições 14-15: "AA" indica tratamento epóxi marítimo.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'As posições 14-15 (`AA`) indicam a sequência de projeto (Design Sequence). O tratamento anticorrosivo fica na posição 13 (`C`).',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Posição 5: "C" indica Corrosion protection.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Na ODU, a posição 5 (`0`) identifica o tipo de função Somente Frio (Cooling Only). O acabamento fica na posição 13!',
              },
            ],
          },
        ],
      },
    ],
  },

  // ── PARTE 2: COMPONENTES E CIRCUITO FRIGORÍFICO (02-01, 02-02, 02-03) ───
  {
    cursoId: 'tvr-pro-co-380v',
    moduloId: 'parte-02',
    titulo: 'Desafio da Rodada · Parte 2: Layout Físico, Componentes e Circuito Frigorífico',
    aulasCobertas: ['02-01', '02-02', '02-03'],
    contextoInicial:
      'Vamos abrir o gabinete da condensadora! Cinco questões integrando chassis de 1 e 2 compressores, válvulas solenoides SV2/SV4/SV5/SV6/SV7, sub-resfriamento por placa trocadora e sensores T3/T4/T6A/T6B/T7C.',
    falaSucesso:
      'Domínio total da engenharia mecânica e frigorífica! Você conhece cada tubo, solenoide e sensor desde o chassi de 8 HP até o gigante de 30 HP.',
    falaReforco:
      'Revise os diagramas da Parte 2: confira a transição de 1 para 2 compressores (20 HP), o papel da EXVA + T6A/T6B no plate heat exchanger e a função da SV2 e SV4.',
    questoes: [
      {
        id: 'p2-q1',
        enunciado:
          'Ao inspecionar o interior de diferentes unidades externas TVR Pro CO 380V (Tópico 02-01), em qual faixa de capacidade ocorre a transição do chassi de 1 compressor rotativo DC Inverter para 2 compressores, e quais são as conexões externas de serviço?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Unidades de 8 a 18 HP utilizam 1 compressor; unidades de 20 a 30 HP utilizam 2 compressores em paralelo e passam a contar com a válvula de equilíbrio de óleo (19) além das válvulas de líquido (9) e gás (10).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Exato! De **8 a 18 HP** temos 1 compressor; de **20 a 30 HP** são 2 compressores e entra a conexão de equilíbrio de óleo (**item 19**).',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Apenas o modelo de 30 HP possui 2 compressores; todos os demais de 8 a 28 HP possuem apenas 1 compressor.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'A partir de **20 HP** (20, 22, 24, 26, 28 e 30 HP) todas as condensadoras já utilizam **2 compressores**!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Unidades de 8 a 16 HP usam 1 ventilador axial e 2 compressores scroll fixos.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'Todos os compressores são DC Inverter e todas as unidades de 8 a 30 HP utilizam 2 motores de ventilador DC.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'A válvula de equilíbrio de óleo só existe nas unidades internas de Ar Novo.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'A tubulação de equilíbrio de óleo interliga os módulos externos quando combinados em paralelo!',
              },
            ],
          },
        ],
      },
      {
        id: 'p2-q2',
        enunciado:
          'No circuito frigorífico da condensadora (Tópicos 02-02 e 02-03), qual é a função conjunta do Trocador de Calor a Placas (Plate Heat Exchanger), da válvula de expansão eletrônica `EXVA` (0 a 480 pulsos) e dos sensores `T6A` e `T6B`?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Desviar uma fração do líquido pós-condensador pela EXVA (entrando em T6A e saindo em T6B) para sub-resfriar o fluxo principal de líquido que segue para as evaporadoras, permitindo até 110 m de desnível sem flash gas.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Aula de termodinâmica! O sub-resfriamento no trocador a placas monitorado por `T6A` e `T6B` impede *flash gas* nas longas linhas de líquido!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Aquecer a água do prédio aproveitando o calor de rejeição do condensador.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'O trocador a placas é 100% refrigerante-refrigerante (economizador/subcooler interno), sem circuito de água!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Fazer a reversão do ciclo para aquecimento de inverno no lugar da válvula de 4 vias.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'A linha TVR Pro CO é Somente Frio! O trocador a placas atua exclusivamente no sub-resfriamento da linha de líquido.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Filtrar limalhas metálicas do óleo FV50S antes do separador de óleo.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'Quem retém partículas são os filtros (strainers); o trocador a placas aumenta a entalpia útil do líquido.',
              },
            ],
          },
        ],
      },
      {
        id: 'p2-q3',
        enunciado:
          'Compare a função das válvulas solenoides `SV2`, `SV4`, `SV5`, `SV6` e `SV7` no diagrama frigorífico (Tópicos 02-02 e 02-03). Qual alternativa descreve corretamente a atuação da `SV2` e da `SV4`?',
        opcoes: [
          {
            id: 'a',
            texto:
              'A SV2 injeta refrigerante líquido na sucção quando a descarga ultrapassa 100°C (fechando abaixo de 90°C), enquanto a SV4 controla o retorno de óleo do separador de óleo para os compressores.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Cirúrgico! `SV2` é o escudo térmico de injeção de líquido (abre > **100°C**, fecha < **90°C**) e `SV4` garante o retorno do óleo separado no ciclone!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'A SV2 faz o degelo do condensador e a SV4 bloqueia a linha de líquido quando o prédio desliga.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Não há degelo em máquina Somente Frio! A `SV2` resfria a sucção/descarga e a `SV4` atua no circuito de óleo.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Ambas ficam permanentemente fechadas e só abrem durante o vácuo da instalação.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'Durante a operação normal, a `SV4` cicla continuamente no gerenciamento de óleo e a `SV2` protege contra alta descarga!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'A SV2 substitui a EXVA nas máquinas de 8 a 12 HP.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Todas as máquinas possuem tanto `EXVA` (modulação contínua de 0 a 480 pulsos) quanto `SV2` (solenoide on/off de proteção térmica).',
              },
            ],
          },
        ],
      },
      {
        id: 'p2-q4',
        enunciado:
          'Nas condensadoras de 20 a 30 HP equipadas com dois compressores (Tópico 02-03), por que é indispensável instalar uma Válvula de Retenção (Check Valve) individual na descarga de cada compressor antes da união do coletor?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Para impedir que o gás em alta pressão descarregado pelo compressor em operação retorne pelo compressor que estiver desligado, evitando rotação reversa e perda de óleo.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Exato! Quando apenas 1 compressor roda em carga parcial, a Check Valve impede refluxo de alta pressão para o compressor em standby.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Para reduzir a pressão de sucção abaixo de 0,05 MPa durante a partida.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Pressão de sucção abaixo de **0,05 MPa** desarma a máquina por erro `P2`! A Check Valve fica na descarga para bloquear refluxo.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Para substituir a válvula de serviço (Stop Valve) durante o recolhimento de gás.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'A Check Valve é interna no coletor de descarga dos compressores e não substitui as Stop Valves externas (itens 9 e 10).',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Para misturar ar externo ao R-410A quando a pressão cai.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'Ar no circuito frigorífico é contaminação grave por gases não-condensáveis!',
              },
            ],
          },
        ],
      },
      {
        id: 'p2-q5',
        enunciado:
          'Um técnico lê os parâmetros de temperatura na placa principal da condensadora (Tópicos 02-02 e 02-03). O que medem exatamente os sensores `T3`, `T4`, `T6A`, `T6B` e `T7C1`/`T7C2`?',
        opcoes: [
          {
            id: 'a',
            texto:
              'T3 = trocador de calor outdoor; T4 = ar ambiente externo; T6A/T6B = entrada e saída do trocador a placas (subcooler); T7C1/T7C2 = descarga no topo dos compressores 1 e 2.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Mapa completo na ponta da língua! `T3` (serpentina ODU), `T4` (ambiente externo), `T6A`/`T6B` (trocador a placas) e `T7C1`/`T7C2` (descarga dos compressores).',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'T3 e T4 medem as evaporadoras internas; T6A e T6B medem a temperatura do dissipador IGBT.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Quem mede o dissipador do módulo inverter é o sensor `Tf` (`TF1`/`TF2`), e os sensores internos das evaporadoras são `T1`, `T2` e `T2B`!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'T7C1 e T7C2 medem a temperatura do ar de insuflamento nos dutos.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  '`T7C1` e `T7C2` ficam no domo/descarga dos compressores e usam termistores de **~55 kΩ** a 25°C!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Todos os cinco sensores medem a mesma tubulação de sucção como redundância.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Cada sensor monitora um ponto estratégico diferente do ciclo termodinâmico da condensadora.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ── PARTE 3: CONTROLE ELETRÔNICO E OPERACIONAL (03-01 a 03-04) ──────────
  {
    cursoId: 'tvr-pro-co-380v',
    moduloId: 'parte-03',
    titulo: 'Desafio da Rodada · Parte 3: Controle Eletrônico, Atuadores, Proteções e Oil Return',
    aulasCobertas: ['03-01', '03-02', '03-03', '03-04'],
    contextoInicial:
      'Agora entramos no cérebro eletrônico da máquina! Cinco questões desafiando você na sequência de partida de 7 etapas, modulação de compressores/EXVs, limiares de proteção (P1/P2/P4/PL) e ciclo de retorno de óleo.',
    falaSucesso:
      'Você pensa como o microprocessador da placa principal! Domínio completo dos tempos de partida, curvas de histerese das 6 proteções e algoritmos de Duty Cycling e Oil Return.',
    falaReforco:
      'Revise as tabelas da Parte 3: confira os tempos da partida (70s + 60s + 160s = 290s), os cortes de pressão (4.4 MPa e 0.05 MPa) e as condições do ciclo de retorno de óleo.',
    questoes: [
      {
        id: 'p3-q1',
        enunciado:
          'Durante um comissionamento (Tópico 03-01), o ajudante acha que a condensadora travou porque os compressores demoram quase 5 minutos na rampa inicial antes de liberar modulação plena. Qual é a duração das 3 fases temporizadas de startup dos compressores e como a válvula `EXVA` se comporta?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Etapa 1 (70s) + Etapa 2 (60s) + Etapa 3 (160s) totalizando 290 segundos (~5 min); a EXVA permanece fechada (0 pulsos) nas Etapas 1 e 2 e abre para 240 pulsos (50%) na Etapa 3.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Matemática de mestre! **70s + 60s + 160s = 290 segundos**, com a `EXVA` abrindo em **240 pulsos** (50% de 480) na Etapa 3!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'O compressor parte direto em 100% em 5 segundos com a EXVA totalmente aberta em 480 pulsos.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Partir a seco em 100% expulsaria todo o óleo do cárter! A rampa de **290 segundos** existe justamente para estabilizar óleo e pressões.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'A rampa dura 30 minutos e mantém todas as válvulas solenoides fechadas.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'A sequência de startup dura **290 segundos** (~4,8 min) e aciona `SV4`, `SV5` e `SV6` estrategicamente em cada etapa.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'A EXVA fica travada em 480 pulsos nas Etapas 1 e 2 e fecha em 0 pulsos na Etapa 3.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'É o oposto! Nas Etapas 1 e 2 a `EXVA` fica em **0 pulsos** (fechada) e na Etapa 3 abre para **240 pulsos**.',
              },
            ],
          },
        ],
      },
      {
        id: 'p3-q2',
        enunciado:
          'No controle dos atuadores da condensadora e das evaporadoras (Tópico 03-02), qual é o tempo de fechamento de referência da EXV da unidade interna (`EXV IDU`) ao desligar por termostato (`Thermo OFF`) e qual é o diferencial térmico para reativação (`Thermo ON`)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'A EXV da IDU executa fechamento completo em 23 segundos no Thermo OFF, e a unidade aguarda diferencial de 2°C acima do setpoint para retornar a Thermo ON.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Exato! Fechamento de **23 segundos** para zerar passagem de fluido no Thermo OFF e histerese de **2°C** para evitar curto-ciclagem.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'A EXV da IDU permanece 100% aberta no Thermo OFF para resfriar o ambiente por gravidade.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Se a EXV ficasse aberta com a evaporadora em Thermo OFF, inundaria a serpentina de líquido e causaria golpe de líquido nos compressores!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'A EXV da IDU leva 10 minutos para fechar e religa com 0,1°C de diferença.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'O curso completo da EXV da IDU leva **23 segundos**, e a histerese térmica é de **2°C**.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'A EXVA da condensadora e a EXV da evaporadora operam apenas em 2 posições fixas (0 ou 100%).',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'As válvulas de expansão eletrônicas modulam passo a passo (0 a 480 pulsos na `EXVA`) conforme o superaquecimento!',
              },
            ],
          },
        ],
      },
      {
        id: 'p3-q3',
        enunciado:
          'Analise a Tabela Mestra de Proteções (Tópico 03-03). Quais são os limiares exatos de atuação e recuperação para Alta Pressão (`P1`), Baixa Pressão (`P2`) e Temperatura do Módulo Inverter (`PL`)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'P1 atua em Pc > 4.4 MPa (recupera < 3.2 MPa); P2 atua em Pe < 0.05 MPa (recupera > 0.15 MPa); PL reduz frequência em Tf > 74°C e para o compressor em Tf > 79°C (recupera < 65°C).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Gabarito cravado! `P1` (**4.4 / 3.2 MPa**), `P2` (**0.05 / 0.15 MPa**) e `PL` (reduz > **74°C**, corta > **79°C**, recupera < **65°C**).',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'P1 atua em 2.5 MPa; P2 atua em 0.50 MPa; PL atua em 120°C.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  '**120°C** é o corte de temperatura de descarga (`P4`), não do módulo inverter (`Tf` > **79°C**)!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'P1, P2 e PL nunca se auto-recuperam na primeira ocorrência, exigindo troca do disjuntor.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'Os erros primários (`P1`, `P2`, `P4`, `PL`) são auto-recuperáveis! Só travam em lockout manual (`H5`, `H6`, `C7`) se ocorrerem **3 vezes** na janela de tempo.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'A proteção de temperatura de descarga abre a SV2 em 65°C e desliga o compressor em 79°C.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Na descarga, a `SV2` abre acima de **100°C** (fecha < **90°C**) e o corte por `P4` ocorre acima de **120°C**.',
              },
            ],
          },
        ],
      },
      {
        id: 'p3-q4',
        enunciado:
          'Qual é a corrente máxima permitida (`Current_max`) antes do desarme por sobrecorrente `xH4(xL0)` nos dois modelos de compressor utilizados na linha TVR Pro CO 380V (Tópico 03-03)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Modelo LNB53: Current_max = 48.5 A | Modelo LNB65: Current_max = 59 A.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Na mosca! `LNB53` tem limite de **48.5 A** e `LNB65` tem limite de **59 A**.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Modelo LNB53: 15 A | Modelo LNB65: 25 A.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Esses valores são baixos demais para compressores inverter comerciais! Os tetos reais são **48.5 A** (`LNB53`) e **59 A** (`LNB65`).',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Ambos os modelos desarmam apenas acima de 100 A.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Acima de **48.5 A** no `LNB53` ou **59 A** no `LNB65` a proteção `xH4(xL0)` já corta imediatamente para salvar o IPM.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'O compressor não possui proteção de corrente, apenas proteção térmica por sensor NTC.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'O módulo inverter monitora a corrente de fase em tempo real e atua em milissegundos com `xH4(xL0)`.',
              },
            ],
          },
        ],
      },
      {
        id: 'p3-q5',
        enunciado:
          'Em um sistema operando o dia inteiro em carga parcial baixa (Tópico 03-04), como funcionam o ciclo automático de Retorno de Óleo (Oil Return) e o rodízio de módulos (Duty Cycling)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Quando o tempo acumulado em carga parcial atinge o gatilho (ex.: até 8 horas), o Oil Return eleva a frequência e posiciona as EXVs das IDUs em 300 pulsos por cerca de 8 minutos; já o Duty Cycling alterna a prioridade de partida entre os módulos para equalizar horas de uso.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Domínio completo! O ciclo de **Oil Return** varre o óleo das linhas abrindo as EXVs em **300 pulsos** por **8 minutos**, e o **Duty Cycling** equaliza a vida útil dos compressores!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'O retorno de óleo exige que o técnico feche manualmente as válvulas de serviço toda semana.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'O ciclo de Oil Return é 100% automático e gerenciado pela placa principal sem intervenção humana!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Durante o Oil Return, todas as EXVs fecham em 0 pulsos por 60 minutos.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'Se fechasse as EXVs em 0 pulsos, o fluido não circularia! Elas vão para **300 pulsos** durante **8 minutos** para arrastar o óleo de volta ao cárter.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'O Duty Cycling permite que a unidade Slave 2 assuma o endereço ENC1 = 0 sem mexer na chave rotativa.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'A Master física (`ENC1 = 0`) continua sendo a coordenadora da rede; o que roda no Duty Cycling é a ordem de partida dos módulos!',
              },
            ],
          },
        ],
      },
    ],
  },

  // ── PARTE 4: ARQUITETURA DE REDE E COMUNICAÇÃO (04-01) ──────────────────
  {
    cursoId: 'tvr-pro-co-380v',
    moduloId: 'parte-04',
    titulo: 'Desafio da Rodada · Parte 4: Arquitetura de Rede, Endereçamento e Barramentos RS-485',
    aulasCobertas: ['04-01'],
    contextoInicial:
      'Hora de validar a espinha dorsal de comunicação do VRF! Cinco questões cobrindo os barramentos PQE e H1H2E, endereçamento ENC1, limites de cabos, resistores de terminação e proibições de topologia.',
    falaSucesso:
      'Especialista em redes RS-485! Você sabe isolar falhas de comunicação, configurar Master/Slaves no ENC1 e blindar o barramento contra ruído eletromagnético.',
    falaReforco:
      'Revise os esquemas da Parte 4: confira a diferença entre PQE (ODU↔IDU) e H1H2E (ODU↔ODU), os endereços ENC1 (0, 1 e 2) e a regra sagrada do Daisy Chain.',
    questoes: [
      {
        id: 'p4-q1',
        enunciado:
          'Em uma instalação com 3 unidades externas combinadas e 45 evaporadoras (Tópico 04-01), qual é a função de cada um dos barramentos de comunicação `P Q E` e `H1 H2 E`, e em qual condensadora o cabo `P Q E` das evaporadoras deve ser conectado?',
        opcoes: [
          {
            id: 'a',
            texto:
              'O barramento H1 H2 E interliga exclusivamente as unidades externas entre si (Master ↔ Slave 1 ↔ Slave 2), enquanto o barramento P Q E conecta todas as unidades internas exclusivamente à ODU Master (endereço 0).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Regra de ouro do VRF! `H1 H2 E` conversa entre condensadoras e `P Q E` leva todas as evaporadoras direto na **ODU Master** (`ENC1 = 0`).',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'O cabo P Q E deve ser dividido igualmente entre a Master, a Slave 1 e a Slave 2.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Jamais conecte o barramento `P Q E` das evaporadoras nas unidades Slave! Toda a rede interna responde à **Master**.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'H1 H2 E alimenta as evaporadoras com 220V AC e P Q E leva o sinal do controle remoto sem fio.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'Ambos são barramentos de dados **RS-485** em baixa tensão! Misturar 220V ali queima os transceptores das placas na hora.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Os bornes P, Q e H1, H2 podem ser interligados no mesmo cabo de 2 vias para economizar fiação.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'São dois barramentos independentes com protocolos distintos; curto-circuitar `PQ` com `H1H2` derruba toda a comunicação (`E0`/`E2`).',
              },
            ],
          },
        ],
      },
      {
        id: 'p4-q2',
        enunciado:
          'Ao configurar a chave rotativa `ENC1` nas três unidades externas de um sistema de 90 HP (Tópico 04-01), quais valores devem ser ajustados na Master, na Slave 1 e na Slave 2, e o que ocorre se uma delas for deixada na posição `4`?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Master = 0, Slave 1 = 1 e Slave 2 = 2. Qualquer endereço acima de 2 (ou repetido) gera imediatamente o código de erro E8 (ou conflito E0).',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Na mosca! `0` = Master, `1` = Slave 1, `2` = Slave 2. Passou de 2 na `ENC1`, a placa trava com erro `E8`!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Master = 1, Slave 1 = 2 e Slave 2 = 3.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Cuidado com a pegadinha clássica! A contagem começa em zero: **Master = 0**, **Slave 1 = 1** e **Slave 2 = 2**.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Todas as três unidades devem ficar em ENC1 = 0 para que a placa escolha a Master automaticamente.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Endereços repetidos no barramento `H1H2E` geram colisão de pacotes e disparam erro `E0`!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'A posição 4 ativa o modo turbo de refrigeração nas unidades Slave.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'O range válido da `ENC1` é estritamente **0 a 2**; qualquer valor > 2 dispara erro `E8`.',
              },
            ],
          },
        ],
      },
      {
        id: 'p4-q3',
        enunciado:
          'Qual é a topologia física obrigatória para o cabeamento RS-485 (`PQE`) entre a condensadora Master e as unidades internas (Tópico 04-01), e por que derivações em estrela ("T") ou anel fechado são proibidas?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Topologia Daisy Chain (entra-e-sai sequencial de unidade em unidade) com cabo blindado 3 × 0,75 mm² até 1.200 m; derivações em estrela ou anel fechado causam reflexão de onda e perda de pacotes (erro E2).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Perfeito! **Daisy Chain** puro até **1.200 m** com cabo blindado **3 × 0,75 mm²** evita reflexões de sinal no RS-485.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Topologia em estrela partindo de uma caixa de passagem central com emendas em T para cada andar.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Emendas em "T" (estrela) desbalanceiam a impedância da linha e fazem o erro `E2` aparecer de forma intermitente!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Anel fechado retornando o cabo da última evaporadora de volta para os bornes P Q E da condensadora.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'Fechar o anel cria eco infinito dos frames RS-485! Na última evaporadora entra apenas 1 cabo + o resistor terminador de **120 Ω**.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Passar o cabo PQE sem blindagem amarrado junto com os cabos trifásicos de 380V na mesma eletrocalha.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'O campo eletromagnético do 380V induz ruído severo no RS-485; exija cabo blindado e afastamento mínimo da rede de força!',
              },
            ],
          },
        ],
      },
      {
        id: 'p4-q4',
        enunciado:
          'Onde deve ser instalado o resistor de terminação de `120 Ω` no barramento de comunicação `P Q E` (Tópico 04-01) e como a malha de blindagem (`E` / Shield) deve ser tratada?',
        opcoes: [
          {
            id: 'a',
            texto:
              'O resistor de 120 Ω deve ser instalado exclusivamente nos bornes P e Q da última unidade interna da cadeia Daisy Chain, e a malha E deve manter continuidade ao longo de todo o trecho sendo aterrada na referência.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Isso mesmo! O terminador de **120 Ω** na última IDU absorve a onda no fim da linha e a malha `E` drena interferências eletromagnéticas.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Deve-se instalar um resistor de 120 Ω em todas as 64 evaporadoras do sistema.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Se você colocar 64 resistores em paralelo, a resistência cai para menos de 2 ohms e mata o sinal RS-485! É **apenas na última IDU**.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'O resistor de 120 Ω deve ser ligado entre a fase R (380V) e o neutro N.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Jamais! O resistor de **120 Ω** é de sinal e vai entre os bornes `P` e `Q` da última unidade interna.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'A malha de blindagem E deve ser cortada e isolada em todas as unidades sem ligar em lugar nenhum.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'Malha flutuante vira antena! Ela precisa ser interligada nos bornes `E` e aterrada adequadamente.',
              },
            ],
          },
        ],
      },
      {
        id: 'p4-q5',
        enunciado:
          'Qual é a capacidade máxima de endereçamento de unidades internas por barramento de comunicação `P Q E` (endereços `0` a `63`) frente ao limite de capacidade frigorífica de até 100 evaporadoras da linha TVR Pro CO (Tópico 04-01)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Cada barramento/controlador endereça diretamente até 64 unidades internas (endereços 0 a 63), enquanto a arquitetura combinada suporta até 100 IDUs conforme o projeto de rede e expansão.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Visão de arquiteto de sistemas! O protocolo endereça **0 a 63** (**64 IDUs**) por segmento, chegando a **100 IDUs** na arquitetura máxima.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Apenas 3 unidades internas podem ter endereço próprio; as demais repetem o endereço 0.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  '**0 a 2** é o endereçamento das condensadoras (`ENC1`). As evaporadoras têm endereços únicos de **0 a 63**!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'O endereçamento das unidades internas só pode ser feito trocando o chip EEPROM na fábrica.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'O endereçamento das IDUs pode ser feito automaticamente pela ODU Master ou via controle remoto/chaves em campo.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'O barramento XYE das evaporadoras deve ser ligado diretamente no H1H2E das condensadoras.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  '`XYE` é para controle centralizado, e `H1H2E` é exclusivo entre condensadoras!',
              },
            ],
          },
        ],
      },
    ],
  },

  // ── PARTE 5: INTERFACE DE PLACA E MENU DE SERVIÇO (05-01, 05-02) ────────
  {
    cursoId: 'tvr-pro-co-380v',
    moduloId: 'parte-05',
    titulo: 'Desafio da Rodada · Parte 5: Interface da Placa Principal, Spot Check e Menu n1–n5',
    aulasCobertas: ['05-01', '05-02'],
    contextoInicial:
      'Sem notebook, só com os 4 botões da placa e o display de 7 segmentos! Cinco questões testando você no protocolo NR-10 do barramento DC, nas 39 leituras do Spot Check e nas funções dos menus n1 a n5.',
    falaSucesso:
      'Mestre do diagnóstico embarcado! Você navega de olhos vendados pelos 39 parâmetros do Spot Check e opera os menus n1 a n5 com segurança NR-10 impecável.',
    falaReforco:
      'Revise os mapas da Parte 5: relembre a descarga dos capacitores (< 36V DC antes de tocar), os parâmetros chave do Spot Check (#8, #9, #10, #16, #18, #28) e os submenus n11–n52.',
    questoes: [
      {
        id: 'p5-q1',
        enunciado:
          'Antes de desconectar qualquer plugue (`CN1` a `CN71`) ou tocar na placa do módulo inverter da condensadora TVR Pro CO 380V (Tópico 05-01), qual procedimento de segurança elétrica NR-10 é estritamente obrigatório?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Seccionar e bloquear o disjuntor trifásico (LOTO), aguardar a descarga dos capacitores do barramento DC e confirmar com multímetro que a tensão entre P e N caiu abaixo de 36V DC.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Segurança em primeiro lugar! O barramento DC trabalha em **350-700V DC**; só toque após medir menos de **36V DC** no multímetro!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Apenas desligar as evaporadoras pelo controle remoto sem fio e medir os sensores com a máquina em standby.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Perigo mortal! Em standby o barramento DC continua carregado com mais de **540V DC** nos capacitores!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Curto-circuitar os terminais P e N do módulo inverter com uma chave de fenda para descarregar rápido.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'Jamais faça isso! Um curto direto em **540V DC** gera arco voltaico violento e explode as trilhas do módulo IPM.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Retirar o cabo de comunicação PQE com a máquina ligada para desarmar o compressor.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Desconectar o `PQE` apenas gera erro `E2`, mantendo toda a alta tensão de **380V AC** e **540V DC** energizada na placa!',
              },
            ],
          },
        ],
      },
      {
        id: 'p5-q2',
        enunciado:
          'Na Main PCB da unidade externa (Tópico 05-01), você utiliza as chaves `SW3` (UP) e `SW4` (DOWN) para percorrer a tabela de 39 pontos de consulta em tempo real (Spot Check). O que exibem os parâmetros `#8`, `#9`, `#10`, `#16`, `#18` e `#28`?',
        opcoes: [
          {
            id: 'a',
            texto:
              '#8 = Temp. T3 (condensador); #9 = Temp. T4 (ambiente externo); #10/#11 = Temp. T6A/T6B (trocador a placas); #16 = Pressão de descarga (MPa); #18 = Abertura da EXVA; #28 = Quantidade de IDUs detectadas.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Gabarito afiado! Com os pontos `#8`, `#9`, `#10`, `#16`, `#18` e `#28` você faz o raio-X completo da condensadora sem nem tirar o manifold da mala!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Todos os 39 pontos mostram apenas códigos de erro passados.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'O histórico dos últimos 10 erros fica no menu `n31`! O Spot Check (`0` a `39`) mostra telemetria viva em tempo real.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              '#8 mostra o endereço IP do prédio e #28 mostra a temperatura da água gelada.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  '`#8` é a temperatura `T3` do condensador e `#28` é o número de evaporadoras comunicando no barramento!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Para ler o Spot Check é obrigatório pressionar SW6 (RESET) por 10 segundos.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  '`SW6` reinicia a placa! Para navegar no Spot Check basta usar `SW3` (UP) e `SW4` (DOWN).',
              },
            ],
          },
        ],
      },
      {
        id: 'p5-q3',
        enunciado:
          'Durante uma manutenção preventiva no inverno ou meia-estação (Tópico 05-02), todas as salas estão frias e os compressores não partem pelo controle remoto normal. Qual código do Menu de Serviço força o resfriamento contínuo (`Forced Cooling`) ignorando o setpoint das salas?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Menu n12 (dentro do grupo n1): força todas as unidades internas a operarem em resfriamento com setpoint de 17°C e ventilador em alta.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Ferramenta indispensável de comissionamento! O menu `n12` crava **Forced Cooling** a **17°C** em todas as evaporadoras para estabilizar leituras de pressão.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Menu n11: ativa o ciclo de degelo reverso da condensadora.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Embora `n11` conste na arquitetura de firmware como Defrost, lembre-se de que a linha TVR Pro CO é Somente Frio; o teste de refrigeração forçada é o `n12`!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Menu n32: apaga o histórico de erros da memória EEPROM.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  '`n32` limpa o histórico de falhas, mas não dá partida forçada nos compressores.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Menu n45: reduz o ruído noturno para 47 dB(A).',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  '`n41` a `n46` são os modos silenciosos (Silent Mode); para forçar resfriamento usamos o `n12`.',
              },
            ],
          },
        ],
      },
      {
        id: 'p5-q4',
        enunciado:
          'Precisamos recolher o refrigerante para substituir uma válvula ou reparar um trecho de tubulação (Tópico 05-02). Quais são os códigos da família `n2` na placa principal e para que servem?',
        opcoes: [
          {
            id: 'a',
            texto:
              'n21 = Pump Down (recolhimento de refrigerante para as condensadoras); n22 = Vacuum Mode (abre todas as EXVs e solenoides para evacuação completa com bomba de vácuo); n23 = Pipe Check; n24 = Air Discharge.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Na ponta da língua! `n22` abre todas as válvulas eletrônicas para o vácuo não encontrar portão fechado, e `n21` auxilia no recolhimento!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'n21 a n24 servem para alterar a tensão da máquina de 380V para 220V.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'A alimentação é fixa em **380V 3Ph**! O grupo `n2` é exclusivo para operações de engenharia frigorífica (Pump Down, Vácuo e Teste de Tubulação).',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Durante o vácuo da instalação, não é necessário ativar o menu n22 porque as EXVs já vêm abertas sem energia.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Se alguma EXV ou solenoide estiver fechada, parte do circuito fica com ar preso! O modo `n22` garante abertura total das válvulas para um vácuo perfeito.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'O menu n21 apaga os endereços das evaporadoras.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'Quem gerencia endereços e travamento de modo é o grupo `n5` (`n51`/`n52`) e o grupo `n3`.',
              },
            ],
          },
        ],
      },
      {
        id: 'p5-q5',
        enunciado:
          'Um hospital vizinho solicitou redução do nível de pressão sonora das condensadoras durante a madrugada (Tópico 05-02). Como funcionam os submenus do grupo `n4` (Silent Mode) e como consultar os últimos 10 códigos de erro armazenados?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Os códigos n41 a n46 configuram os modos silenciosos (noturno automático 8h/10h, Silent, Super Silent até 47 dB(A) e limites de potência), enquanto o código n31 exibe os últimos 10 erros na memória.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Show de bola! Grupo `n4` (`n41`–`n46`) doma o ruído até **47 dB(A)** no Super Silent, e `n31` puxa a caixa-preta dos últimos **10 erros**!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Para reduzir o ruído deve-se desligar um dos dois motores de ventilador tirando o conector da placa.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Desconectar o ventilador dispara imediatamente o erro `xP9`/`xH9`! O controle acústico deve ser feito via firmware no menu `n4`.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'O histórico de erros é consultado no menu n14 e apagado desconectando o sensor T4.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  '`n14` é retorno de óleo manual (Manual Oil Return)! O histórico de erros fica em `n31` e a limpeza em `n32`.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'A placa principal só armazena 1 erro por vez e o apaga após 5 minutos.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'A memória não-volátil guarda os últimos **10 erros** em fila (`n31`) mesmo que falte energia!',
              },
            ],
          },
        ],
      },
    ],
  },

  // ── PARTE 6: TROUBLESHOOTING AVANÇADO (06-01, 06-02, 06-03, 06-04) ──────
  {
    cursoId: 'tvr-pro-co-380v',
    moduloId: 'parte-06',
    titulo: 'Desafio da Rodada · Parte 6: Troubleshooting Completo, Códigos de Erro e Diagnóstico Avançado',
    aulasCobertas: ['06-01', '06-02', '06-03', '06-04'],
    contextoInicial:
      'O desafio final do curso! Cinco cenários reais de diagnóstico avançado cobrindo códigos E/H/P/xL, medições ôhmicas e de tensão DC, curvas NTC (10 kΩ vs 55 kΩ), óleo PVE FV50S e teste de diodo da ponte IGBT.',
    falaSucesso:
      'Formatura com honras de Especialista TVR Pro CO 380V! Você domina todos os fluxogramas de diagnóstico, testes elétricos de bancada e procedimentos de substituição de compressores.',
    falaReforco:
      'Revise os guias de bolso da Parte 6: confira a contagem de flashes do LED1 para xH4, as leituras NTC a 25°C (10 kΩ e 55 kΩ), a queda de diodo do IGBT (0.35-0.70V) e o Megger (≥ 50 MΩ novo / ≥ 2 MΩ usado).',
    questoes: [
      {
        id: 'p6-q1',
        enunciado:
          'Ao chegar em uma ocorrência com código `E2` no display da condensadora Master (Tópico 06-01), você mede com o multímetro os bornes `P` e `Q` do bloco terminal. Quais leituras indicam um barramento RS-485 saudável e qual é a causa mais provável se a tensão DC oscilar próximo de 0V?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Resistência de 120 Ω (desenergizado, com o terminador na última IDU) e tensão DC pulsante entre 1,5V e 4,5V DC (energizado); leitura em 0V indica curto-circuito no cabo PQE ou transceptor RS-485 em curto.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Diagnóstico de sniper! **120 Ω** no ohmímetro e **1,5V a 4,5V DC** pulsando no voltímetro provam integridade física e tráfego ativo no barramento `PQE`!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Tensão de 380V AC entre P e Q e resistência de 0 Ω.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  '**0 Ω** é curto-circuito total no par trançado e **380V AC** destruiria todas as placas da rede!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'O código E2 indica falta de gás R-410A e deve ser resolvido adicionando 5 kg de fluido.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  '`E2` é falha de comunicação entre a ODU Master e as unidades internas (`PQE`); falta de gás gera `P2`/`H5` ou `P4`/`H6`!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Resistência de 55 kΩ entre P e Q a 25°C.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  '**55 kΩ** a 25°C é a resistência do sensor NTC de descarga (`T7C1`/`T7C2`), não do barramento de comunicação!',
              },
            ],
          },
        ],
      },
      {
        id: 'p6-q2',
        enunciado:
          'Durante a investigação dos códigos `E5`, `XF6` e `xH4` na bancada elétrica (Tópico 06-02), quais são os valores normais de referência para: (1) tensão fase-neutro A-N/B-N/C-N, (2) resistência das bobinas do compressor U-V-W, e (3) resistência entre qualquer par dos 5 fios da bobina da EXV?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Tensão fase-neutro = 198-242V AC; bobinas do compressor (U-V, V-W, U-W) = 0,7 a 1,5 Ω; bobina da EXV (5 fios, par a par) = 40 a 50 Ω.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Trio de ouro gravado na memória! **198-242V** nas fases, **0,7–1,5 Ω** no compressor e **40–50 Ω** na bobina da `EXV`!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Tensão fase-neutro = 110V AC; compressor = 45 Ω; bobina da EXV = 0,7 Ω.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Você inverteu o compressor com a EXV! O compressor mede **0,7–1,5 Ω** e a bobina da EXV mede **40–50 Ω**.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Quando ocorre o erro xE9 (EEPROM mismatch), deve-se religar o disjuntor 5 vezes seguidas em menos de 2 segundos.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Religar rápido demais é exatamente o que CAUSA o erro `xE9`! Você deve desligar e aguardar o display apagar completamente antes de religar.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Se o LED2 estiver aceso fixo e o LED1 piscar 8 a 17 vezes, significa operação 100% normal.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'Operação normal é `LED2` apagado + `LED1` aceso fixo! `LED2` aceso + `LED1` piscando indica falha `xL0` a `xL9` conforme o número de flashes.',
              },
            ],
          },
        ],
      },
      {
        id: 'p6-q3',
        enunciado:
          'Você está diagnosticando sensores termistores NTC e um código `PP` em uma condensadora de 26 HP (Tópico 06-03). Qual é a resistência nominal a 25°C das duas famílias de sensores NTC da máquina e o que significa o código `PP`?',
        opcoes: [
          {
            id: 'a',
            texto:
              'A 25°C, os sensores de ambiente/trocador (T3/T4/T6A/T6B) medem ~10 kΩ e os sensores de descarga do compressor (T7C1/2) medem ~55 kΩ; já o código PP alerta para superheat de descarga insuficiente (≤ 0°C por 20 min ou ≤ 5°C por 60 min, risco de golpe de líquido).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Precisão cirúrgica! **~10 kΩ** nos sensores de trocador/ambiente, **~55 kΩ** no topo do compressor a **25°C**, e `PP` protegendo contra retorno de líquido!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Todos os sensores NTC da máquina medem 10 kΩ a 25°C e podem ser trocados entre si livremente.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Jamais intercambie! Colocar um sensor de **10 kΩ** no lugar do sensor de descarga (**55 kΩ** a 25°C) engana a placa em dezenas de graus!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'O código PP indica excesso de óleo mineral e exige drenar todo o fluido sem usar bomba de vácuo.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'O óleo exclusivo é o sintético PVE **FV50S**, e o código `PP` indica superaquecimento insuficiente (retorno de refrigerante líquido ao compressor).',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'No chassi de 24-30 HP, a carga de referência de óleo FV50S na substituição é de apenas 0,5 litro.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Pela tabela do procedimento de substituição, os volumes de referência de **FV50S** são: **4L** (8-12HP), **5L** (14-16HP), **6L** (18-22HP) e **9L** (24-30HP)!',
              },
            ],
          },
        ],
      },
      {
        id: 'p6-q4',
        enunciado:
          'Para decidir se um erro `xH4(xL0)` foi causado pelo módulo inverter (ponte IGBT/IPM) ou pelo compressor (Tópico 06-04), você executa o teste dos 6 diodos no módulo desenergizado e o teste de Megger (500V DC) no compressor. Quais leituras aprovam o módulo IGBT e o compressor?',
        opcoes: [
          {
            id: 'a',
            texto:
              'No modo diodo, os 6 diodos da ponte IGBT (P-U/V/W e N-U/V/W) devem apresentar queda de tensão direta entre 0,35V e 0,70V (e OL no sentido reverso); no Megger 500V DC, a isolação para a carcaça deve ser ≥ 50 MΩ (compressor novo) ou ≥ 2 MΩ (em operação, sendo < 0,5 MΩ condenação imediata).',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Laudo técnico irretocável! **0,35–0,70V** nos 6 diodos do IPM e **≥ 50 MΩ** (novo) / **≥ 2 MΩ** (usado) no Megger 500V DC separam placa boa de compressor em fuga!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Deve-se aplicar o Megger de 500V DC diretamente nos pinos do módulo inverter para testar os IGBTs.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'JAMAIS aplique o Megger no módulo inverter ou nas placas eletrônicas! Os **500V DC** do megômetro perfuram os semicondutores instantaneamente; o Megger é exclusivo para os bornes do compressor desconectado!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'No teste de diodo do IPM, leitura de 0,00V nos dois sentidos indica que o IGBT está em perfeito estado.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  '**0,00V** nos dois sentidos significa junção IGBT em curto-circuito total! O valor saudável em condução direta é de **0,35V a 0,70V**.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Se o Megger do compressor indicar 0,1 MΩ, basta trocar o fusível da placa principal.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'Isolação abaixo de **0,5 MΩ** condena o compressor por falha de isolamento à massa; ligar um módulo novo ali queimaria o IPM na primeira partida!',
              },
            ],
          },
        ],
      },
      {
        id: 'p6-q5',
        enunciado:
          'Ao testar um transdutor de pressão ratiométrico de 3 fios (5V DC, GND e Sinal) e manusear o óleo lubrificante original da máquina (Tópico 06-04), qual é a faixa linear de tensão de saída do transdutor e qual é a característica química crítica do óleo `FV50S`?',
        opcoes: [
          {
            id: 'a',
            texto:
              'O transdutor alimentado em 5V DC entrega saída linear de 0,5V a 4,5V DC proporcional à pressão (< 0,3V ou > 4,7V indica falha de cabo/sensor), e o óleo FV50S é um PVE (Polivinil Éter) altamente higroscópico que não sofre hidrólise ácida mas exige exposição ao ar menor que 15 minutos e jamais pode ser misturado com óleo POE ou mineral.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Fechou o curso com nota 1000! Transdutor linear **0,5–4,5V DC** (alimentado em **5V DC**) e óleo **PVE FV50S** puro e protegido contra umidade (< **15 min** aberto)!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'O transdutor trabalha com saída de 220V AC e o óleo FV50S pode ser completado com óleo mineral 3GS.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Misturar óleo mineral ou POE no **PVE FV50S** destrói a lubricidade e entope as válvulas EXV! E o transdutor opera em **5V DC** com sinal de **0,5V a 4,5V DC**.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Uma lata de óleo FV50S aberta há 3 dias na caçamba da caminhonete pode ser usada normalmente sem evacuação.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'serio',
                texto:
                  'O óleo **PVE FV50S** é extremamente higroscópico! Lata exposta à umidade do ar além do limite de **15 minutos** satura de água e deve ser descartada.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Se o pino de sinal do transdutor medir 0,0V ou 5,0V cravados, significa que a pressão está exatamente na metade da escala.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'As margens abaixo de **0,3V** e acima de **4,7V** são zonas de diagnóstico de falha (cabo rompido ou curto com 5V/GND)!',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default DESAFIOS_MODULO;
