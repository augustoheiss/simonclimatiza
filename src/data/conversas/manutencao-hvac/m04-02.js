// ═══════════════════════════════════════════════════════════════════════════
// CONVERSA — manutencao-hvac / m04-02
// Verificação e Ajuste de Carga de Refrigerante
// Cenário: Casa de Máquinas (subcarga de 25%, fracionamento zeotrópico, Approach Lennox, DTD)
// ═══════════════════════════════════════════════════════════════════════════

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm04-02',
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
      texto: 'Na casa de máquinas, Bia posiciona o cilindro sobre a balança digital programável enquanto Simon confere o psicrômetro e o alicate termopar na linha de sucção do compressor.',
    },
    {
      id: 'abertura-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Turma, hoje vamos acabar com o vício do "dar um gaszinho todo verão". Operar com subcarga de **25%** derruba em **15%** a eficiência do ciclo e cozinha o estator do compressor!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'O que o cliente não percebe é que operar com subcarga de 25% gera um aumento silencioso nas contas de energia devido à queda de 15% na eficiência do ciclo, além de estressar termicamente o isolamento dielétrico do compressor até a queima prematura.',
      },
    },
    {
      id: 'abertura-3',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mestre, e se o sistema for com R-407C (que tem glide de quase **10°F** / **5,6°C**) e tiver perdido uns **25%** num vazamento lento? Posso só completar com líquido?',
      fonte: [
        {
          campo: 'infobox_campo',
          trecho: 'operar com subcarga de 25% gera um aumento silencioso nas contas de energia',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O refrigerante R-407C apresenta um deslizamento expressivo de quase 10°F (5,6°C).',
        },
      ],
    },

    // ── 2. CONFLITO ─────────────────────────────────────────────────────────
    {
      id: 'conflito-1',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Jamais, Juninho! Se um sistema com mistura zeotrópica perdeu mais de **20%** da carga, o fluido que sobrou lá dentro já fracionou e perdeu o balanço químico!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Se o sistema operou com mistura zeotrópica (ex.: R-407C) e perdeu mais de 20% de carga por vazamento lento, o refrigerante remanescente estará fracionado e desbalanceado químicamente. Recolha 100% da carga para regeneração e insira refrigerante novo por peso.',
      },
    },
    {
      id: 'conflito-2',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'confiante',
      texto: 'A regra Simon é clara: passou de **20%** de perda em zeotrópico, recolhe **100%** da carga antiga, repara o vazamento, faz vácuo e carrega fluido virgem na fase líquida por peso!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Se o sistema operou com mistura zeotrópica (ex.: R-407C) e perdeu mais de 20% de carga por vazamento lento, o refrigerante remanescente estará fracionado e desbalanceado químicamente. Recolha 100% da carga para regeneração e insira refrigerante novo por peso.',
      },
    },
    {
      id: 'conflito-3',
      tipo: 'escolha',
      pergunta: 'Ao carregar um sistema moderno com fluidos levemente inflamáveis Classe A2L (como R-32 ou R-454B), qual verificação de segurança é obrigatória antes de abrir a garrafa?',
      opcoes: [
        {
          id: 'a',
          texto: 'Verificar a Carga de Volume de Dispersão Eficaz (EDVC) conforme a ASHRAE 15 para garantir que um eventual vazamento nunca atinja o limite inferior de inflamabilidade (LFL) na sala.',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Exato! Em fluidos A2L, respeitar a carga máxima para o volume da sala (EDVC) é regra de segurança de vida!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Sobrecarregar o sistema além da placa para aumentar a pressão de alta.',
          reacao: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Proibido! Sobrecarga viola o limite EDVC de segurança A2L e ainda afoga o condensador!',
            },
          ],
        },
      ],
    },

    // ── 3. CAUSO ────────────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Ajuste de Carga num Dia Frio de Inverno que Virou Sobrecarga no Verão',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num dia frio de inverno, com temperatura externa abaixo de **65°F** (**18,3°C**), um técnico tentou ajustar a carga de um Rooftop Lennox olhando o Approach sem bloquear o condensador. Como o ar frio derrubava a pressão de alta, ele achou que faltava gás e injetou quilos a mais!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Para calibrar o método de aproximação Lennox em dias frios (temperatura externa inferior a 65°F / 18,3°C) [21]: O ar muito frio no condensador impede a elevação da pressão de alta para níveis estáveis de verificação [21].',
          },
        },
        {
          quem: 'bia',
          emocao: 'didatico',
          texto: 'No verão, desarmou por alta! Pelo protocolo Lennox, abaixo de **65°F** (**18,3°C**) restringimos o ar do condensador com papelão até estabilizar a alta entre **325 a 375 psig** antes de medir o Approach (**5°F** e **9°F**)!',
          fonte: [
            {
              campo: 'infobox_campo',
              trecho: 'Para calibrar o método de aproximação Lennox em dias frios (temperatura externa inferior a 65°F / 18,3°C) [21]: O ar muito frio no condensador impede a elevação da pressão de alta para níveis estáveis de verificação [21]. Restrinja artificialmente a passagem de ar no condensador, bloqueando as grades de entrada de ar com placas de papelão ou cobrindo parcialmente a descarga do ventilador [21]. Monitore a pressão de alta até que ela estabilize e se mantenha estável na faixa de 325 a 375 psig (2240 a 2485 kPa) [21].',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Unidades Lennox comerciais de grande capacidade ditam valores de aproximação bastante estreitos, geralmente compreendidos entre 5°F e 9°F (2,8°C a 5°C)',
            },
          ],
        },
        {
          quem: 'juninho',
          emocao: 'animado',
          texto: 'Bloquear parcialmente o condensador com papelão até bater **325 a 375 psig** em dias abaixo de **65°F** (**18,3°C**)! Essa é engenharia de campo pura!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Para calibrar o método de aproximação Lennox em dias frios (temperatura externa inferior a 65°F / 18,3°C) [21]: O ar muito frio no condensador impede a elevação da pressão de alta para níveis estáveis de verificação [21]. Restrinja artificialmente a passagem de ar no condensador, bloqueando as grades de entrada de ar com placas de papelão ou cobrindo parcialmente a descarga do ventilador [21]. Monitore a pressão de alta até que ela estabilize e se mantenha estável na faixa de 325 a 375 psig (2240 a 2485 kPa) [21].',
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
      texto: 'Regra fundamental: em Orifício Fixo (pistão/capilar) ajusta-se pelo Superaquecimento Alvo! Se o cálculo der menor que **5°F** (**2,8°C**), não ajuste por este método; e **0°F** (**0°C**) indica retorno de líquido!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Um superaquecimento medido de 0°F (0°C) indica que refrigerante líquido está ativamente saindo do evaporador e se deslocando em direção ao compressor [17].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Se o cálculo resultar em um valor negativo ou inferior a 5°F (2,8°C), as condições ambientais geralmente são muito frias',
        },
      ],
    },
    {
      id: 'insight-1b',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'Já em sistemas com TXV ou EEV (que modulam para manter o superaquecimento fixo entre **10°F** e **15°F**), o ajuste de carga é feito pelo Subresfriamento Alvo (**8°F** a **14°F** / **4,4°C a 7,8°C**)!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A TXV/EEV é um mecanismo ativo de modulação projetado especificamente para manter um superaquecimento constante no evaporador (normalmente calibrado de fábrica entre 10°F e 15°F / 5,6°C a 8,3°C)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O subresfriamento alvo geralmente varia entre 8°F e 14°F (4,4°C a 7,8°C)',
        },
      ],
    },
    {
      id: 'insight-2',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'Na carga adicional linear por tubulação: uma linha de líquido de **6,35 mm** (1/4 pol.) requer 0,022 kg por metro linear, enquanto uma linha de **9,52 mm** (3/8 pol.) demanda 0,057 kg por metro linear!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Uma linha de líquido de 6,35 mm (1/4") pode requerer uma adição de 0,022 kg por metro linear, enquanto uma linha de líquido maior de 9,52 mm (3/8") demanda 0,057 kg por metro linear [14].',
      },
    },
    {
      id: 'insight-3',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'confiante',
      texto: 'E na DTD (Diferencial de Temperatura de Projeto): em conforto DX (**400 CFM** por TR), a DTD padrão é **35°F** (**19,4°C**) — retorno a **75°F** e evaporação a **40°F** (se subir a **45°F**, evaporador faminto!).',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Em um sistema de ar condicionado de Expansão Direta (DX) residencial padrão, operando com fluxo de ar calibrado de 400 CFM por TR de resfriamento, a regra empírica determina que a DTD do evaporador deve ser de aproximadamente 35°F (19,4°C) [16]. Portanto, se a temperatura interna de retorno for de 75°F (23,9°C), o refrigerante deve evaporar a cerca de 40°F (4,4°C) [16].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Se a DTD se estender para 45°F (25°C), indica uma pressão de sucção anormalmente baixa',
        },
      ],
    },
    {
      id: 'insight-4',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'confiante',
      texto: 'Já em refrigeração comercial, câmaras de resfriados operam com uma DTD estreita de **10°F ± 3°F** (**5,6°C ± 1,7°C**) para evitar a desidratação dos alimentos!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'câmaras de resfriados normalmente operam com DTD de 10°F ± 3°F (5,6°C ± 1,7°C)',
      },
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Quando um sistema com mistura zeotrópica (como R-407C) perde 30% da carga num vazamento lento, basta completar os 30% faltantes na fase líquida.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! Acima de **20%** de perda em mistura zeotrópica, o fluido remanescente já fracionou. É obrigatório recolher **100%** da carga antiga e pesar carga nova!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Se o sistema operou com mistura zeotrópica (ex.: R-407C) e perdeu mais de 20% de carga por vazamento lento, o refrigerante remanescente estará fracionado e desbalanceado químicamente. Recolha 100% da carga para regeneração e insira refrigerante novo por peso.',
          },
        },
      ],
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Se o sistema operou com mistura zeotrópica (ex.: R-407C) e perdeu mais de 20% de carga por vazamento lento, o refrigerante remanescente estará fracionado e desbalanceado químicamente. Recolha 100% da carga para regeneração e insira refrigerante novo por peso.',
      },
    },

    // ── 5. PRÁTICA ──────────────────────────────────────────────────────────
    {
      id: 'pratica-1',
      tipo: 'calculadora',
      titulo: 'Cálculo da DTD (Diferencial de Temperatura de Projeto) no Evaporador',
      formula: 'DTD = T_retorno (75°F) - T_evaporacao (40°F)',
      enunciado: 'Em um sistema DX de conforto operando com 400 CFM por TR, o ar de retorno entra na serpentina a 75°F (23,9°C) e a temperatura de saturação de evaporação no manifold é 40°F (4,4°C). Qual é a DTD atual em °F?',
      unidade: '°F',
      respostaCorreta: 35,
      tolerancia: 0.5,
      leituras: [
        { rotulo: 'Temperatura de Retorno do Ar Interno', valor: '75°F (23,9°C)' },
        { rotulo: 'Temperatura de Evaporação Saturada', valor: '40°F (4,4°C)' },
        { rotulo: 'Vazão Calibrada de Conforto', valor: '400 CFM / TR' },
      ],
      opcoesRapidas: [10, 20, 35, 45],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Perfeito! **75°F** menos **40°F** fecha exatamente a DTD empírica de **35°F** (**19,4°C**) para conforto térmico! Se subisse a **45°F**, indicaria evaporador faminto!',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Em um sistema de ar condicionado de Expansão Direta (DX) residencial padrão, operando com fluxo de ar calibrado de 400 CFM por TR de resfriamento, a regra empírica determina que a DTD do evaporador deve ser de aproximadamente 35°F (19,4°C) [16]. Portanto, se a temperatura interna de retorno for de 75°F (23,9°C), o refrigerante deve evaporar a cerca de 40°F (4,4°C) [16].',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Se a DTD se estender para 45°F (25°C), indica uma pressão de sucção anormalmente baixa',
            },
          ],
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'didatico',
          texto: 'Subtraia a temperatura de evaporação (**40°F**) da temperatura de retorno (**75°F**): **75°F** - **40°F** = **35°F**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Em um sistema de ar condicionado de Expansão Direta (DX) residencial padrão, operando com fluxo de ar calibrado de 400 CFM por TR de resfriamento, a regra empírica determina que a DTD do evaporador deve ser de aproximadamente 35°F (19,4°C) [16]. Portanto, se a temperatura interna de retorno for de 75°F (23,9°C), o refrigerante deve evaporar a cerca de 40°F (4,4°C) [16].',
          },
        },
      ],
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Em um sistema de ar condicionado de Expansão Direta (DX) residencial padrão, operando com fluxo de ar calibrado de 400 CFM por TR de resfriamento, a regra empírica determina que a DTD do evaporador deve ser de aproximadamente 35°F (19,4°C) [16]. Portanto, se a temperatura interna de retorno for de 75°F (23,9°C), o refrigerante deve evaporar a cerca de 40°F (4,4°C) [16].',
      },
    },
    {
      id: 'pratica-2',
      tipo: 'inspecao',
      titulo: 'Auditoria de Ajuste de Carga em Campo',
      enunciado: 'Qual das condutas abaixo representa um ERRO TÉCNICO ao ajustar a carga de refrigerante?',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Ajustar sistemas com TXV/EEV pelo Subresfriamento Alvo (8°F a 14°F) e sistemas com pistão fixo pelo Superaquecimento Alvo.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Conduta correta! TXV/EEV exige ajuste por Subresfriamento (**8°F** a **14°F**).',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'O subresfriamento alvo geralmente varia entre 8°F e 14°F (4,4°C a 7,8°C)',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O subresfriamento alvo geralmente varia entre 8°F e 14°F (4,4°C a 7,8°C)',
          },
        },
        {
          id: 'p2',
          rotulo: 'Carregar misturas zeotrópicas pela fase gasosa (vapor) ou completar gás após perda superior a 20%.',
          correta: true,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Erro crítico! Misturas zeotrópicas só entram na fase líquida e, se perderem mais de **20%**, exigem recolhimento de **100%** da carga!',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'Se o sistema operou com mistura zeotrópica (ex.: R-407C) e perdeu mais de 20% de carga por vazamento lento, o refrigerante remanescente estará fracionado e desbalanceado químicamente. Recolha 100% da carga para regeneração e insira refrigerante novo por peso.',
              },
            },
          ],
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Se o sistema operou com mistura zeotrópica (ex.: R-407C) e perdeu mais de 20% de carga por vazamento lento',
          },
        },
        {
          id: 'p3',
          rotulo: 'Em dias frios (< 65°F / 18,3°C), restringir parcialmente o ar do condensador com papelão até estabilizar a alta entre 325 a 375 psig.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'confiante',
              texto: 'Conduta correta conforme o protocolo Lennox para dias abaixo de **65°F** (**18,3°C**) estabilizando entre **325 a 375 psig**!',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'Para calibrar o método de aproximação Lennox em dias frios (temperatura externa inferior a 65°F / 18,3°C) [21]: O ar muito frio no condensador impede a elevação da pressão de alta para níveis estáveis de verificação [21]. Restrinja artificialmente a passagem de ar no condensador, bloqueando as grades de entrada de ar com placas de papelão ou cobrindo parcialmente a descarga do ventilador [21]. Monitore a pressão de alta até que ela estabilize e se mantenha estável na faixa de 325 a 375 psig (2240 a 2485 kPa) [21].',
              },
            },
          ],
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Para calibrar o método de aproximação Lennox em dias frios (temperatura externa inferior a 65°F / 18,3°C) [21]: O ar muito frio no condensador impede a elevação da pressão de alta para níveis estáveis de verificação [21]. Restrinja artificialmente a passagem de ar no condensador, bloqueando as grades de entrada de ar com placas de papelão ou cobrindo parcialmente a descarga do ventilador [21]. Monitore a pressão de alta até que ela estabilize e se mantenha estável na faixa de 325 a 375 psig (2240 a 2485 kPa) [21].',
          },
        },
      ],
    },

    // ── 6. TESTE ────────────────────────────────────────────────────────────
    {
      id: 'quiz-1',
      tipo: 'quiz',
      enunciado: 'Por que o ajuste de carga em sistemas equipados com Válvula de Expansão Termostática (TXV) ou Eletrônica (EEV) deve ser feito pelo Subresfriamento (8°F a 14°F) e não pelo Superaquecimento?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O subresfriamento alvo geralmente varia entre 8°F e 14°F (4,4°C a 7,8°C)',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Porque a TXV/EEV modula ativamente para manter o superaquecimento fixo (entre **10°F** e **15°F**), enquanto o subresfriamento mede o estoque real de líquido no condensador.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Exato! Tentar carregar um sistema com TXV pelo superaquecimento engana o técnico, pois a válvula mantém **10°F** a **15°F** até você afogar o condensador!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'A TXV/EEV é um mecanismo ativo de modulação projetado especificamente para manter um superaquecimento constante no evaporador (normalmente calibrado de fábrica entre 10°F e 15°F / 5,6°C a 8,3°C), independentemente da carga térmica interna ou da carga total de refrigerante do sistema.',
              },
            },
          ],
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'A TXV/EEV é um mecanismo ativo de modulação projetado especificamente para manter um superaquecimento constante no evaporador (normalmente calibrado de fábrica entre 10°F e 15°F / 5,6°C a 8,3°C)',
            },
            {
              campo: 'conteudo_html',
              trecho: 'O subresfriamento alvo geralmente varia entre 8°F e 14°F (4,4°C a 7,8°C)',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Porque em sistemas com TXV o subresfriamento ideal deve ser sempre nulo (**0°F** / **0°C**).',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Se o subresfriamento for **0°F** (**0°C**), entra flash gas na válvula de expansão! A meta é **8°F** a **14°F**.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'Se o subresfriamento for nulo (0°F / 0°C), o refrigerante estará em estado de saturação na entrada da válvula',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'O subresfriamento alvo geralmente varia entre 8°F e 14°F (4,4°C a 7,8°C)',
                },
              ],
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Se o subresfriamento for nulo (0°F / 0°C), o refrigerante estará em estado de saturação na entrada da válvula',
          },
        },
        {
          id: 'c',
          texto: 'Porque o superaquecimento em sistemas com TXV deve ser mantido em **0°F** (**0°C**) na entrada do compressor.',
          correta: false,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Superaquecimento de **0°F** (**0°C**) significa retorno de refrigerante líquido lavando o óleo e quebrando o compressor!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Um superaquecimento medido de 0°F (0°C) indica que refrigerante líquido está ativamente saindo do evaporador e se deslocando em direção ao compressor [17].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Um superaquecimento medido de 0°F (0°C) indica que refrigerante líquido está ativamente saindo do evaporador e se deslocando em direção ao compressor [17].',
          },
        },
      ],
    },
    {
      id: 'quiz-2',
      tipo: 'quiz',
      enunciado: 'Por que câmaras frigoríficas de resfriados operam com uma DTD (Diferencial de Temperatura de Projeto) estreita de 10°F ± 3°F (5,6°C ± 1,7°C)?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'câmaras de resfriados normalmente operam com DTD de 10°F ± 3°F (5,6°C ± 1,7°C)',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Para manter a umidade relativa elevada dentro da câmara e evitar a desidratação e perda de peso dos alimentos armazenados.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Exato! Uma DTD estreita de **10°F ± 3°F** (**5,6°C ± 1,7°C**) evita que o evaporador seque o ar e murche frutas, verduras e carnes!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'câmaras de resfriados normalmente operam com DTD de 10°F ± 3°F (5,6°C ± 1,7°C)',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'câmaras de resfriados normalmente operam com DTD de 10°F ± 3°F (5,6°C ± 1,7°C)',
          },
        },
        {
          id: 'b',
          texto: 'Para forçar o congelamento rápido da serpentina com DTD de **45°F** (**25°C**).',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Uma DTD de **45°F** (**25°C**) desidrataria severamente os produtos e congelaria o evaporador!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Se a DTD se estender para 45°F (25°C), indica uma pressão de sucção anormalmente baixa',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Se a DTD se estender para 45°F (25°C), indica uma pressão de sucção anormalmente baixa',
          },
        },
      ],
    },

    // ── 7. FILOSOFIA ────────────────────────────────────────────────────────
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Carga de Refrigerante Se Pesa na Balança e Se Valida no Termopar',
      principio: 'Dar um gaszinho no olhômetro é assinatura de amador: carga perfeita exige balança gravimétrica, psicrômetro e cálculo de superaquecimento ou subresfriamento.',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Gravem isso: em VRF e Inverter com EEV, é proibido tentar ajustar carga por pressão de manifold! A placa varia o compressor e a válvula eletrônica o tempo todo; a única verdade é a balança por peso mais o adicional de linha!',
        },
        {
          quem: 'marta',
          emocao: 'confiante',
          texto: 'E nunca esqueçam que operar com **25%** de subcarga rouba **15%** da eficiência energética do cliente!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'operar com subcarga de 25% gera um aumento silencioso nas contas de energia devido à queda de 15% na eficiência do ciclo',
          },
        },
        {
          quem: 'juninho',
          emocao: 'animado',
          texto: 'Balança na mão, orifício fixo pelo SH, TXV pelo SC e misturas zeotrópicas sempre na fase líquida!',
        },
      ],
    },

    // ── 8. FECHAMENTO ───────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte a Tabela 4.2.1 (Superaquecimento Alvo para Orifício Fixo) e a Tabela 4.2.2 (Matriz Comparativa dos Métodos de Ajuste de Carga).',
      alvo: {
        aba: 'tabelas',
      },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Ajustar Orifício Fixo pelo Superaquecimento Alvo, TXV/EEV pelo Subresfriamento (**8°F** a **14°F**) e Inverter/VRF exclusivamente por balança (**6,35 mm** = 0,022 kg/m; **9,52 mm** = 0,057 kg/m).',
        'Recolher **100%** da carga em misturas zeotrópicas (ex.: R-407C) se a perda superar **20%**, carregando sempre na fase líquida.',
        'Validar a DTD do evaporador (**35°F** / **19,4°C** em conforto DX a **400 CFM**/TR; **10°F ± 3°F** em câmaras de resfriados) e bloquear parcialmente o condensador (alta em **325 a 375 psig**) ao medir Approach em dias abaixo de **65°F** (**18,3°C**).',
      ],
      proxima: 'Na Aula 4.3, fecharemos o Módulo 04 estudando a saúde do compressor, análise química de óleos (MO, AB, POE, PVE), Lei de Paschen e descontaminação pós-burnout!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'O subresfriamento alvo geralmente varia entre 8°F e 14°F (4,4°C a 7,8°C)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Uma linha de líquido de 6,35 mm (1/4") pode requerer uma adição de 0,022 kg por metro linear, enquanto uma linha de líquido maior de 9,52 mm (3/8") demanda 0,057 kg por metro linear [14].',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Se o sistema operou com mistura zeotrópica (ex.: R-407C) e perdeu mais de 20% de carga por vazamento lento, o refrigerante remanescente estará fracionado e desbalanceado químicamente. Recolha 100% da carga para regeneração e insira refrigerante novo por peso.',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Para calibrar o método de aproximação Lennox em dias frios (temperatura externa inferior a 65°F / 18,3°C) [21]: O ar muito frio no condensador impede a elevação da pressão de alta para níveis estáveis de verificação [21]. Restrinja artificialmente a passagem de ar no condensador, bloqueando as grades de entrada de ar com placas de papelão ou cobrindo parcialmente a descarga do ventilador [21]. Monitore a pressão de alta até que ela estabilize e se mantenha estável na faixa de 325 a 375 psig (2240 a 2485 kPa) [21].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Em um sistema de ar condicionado de Expansão Direta (DX) residencial padrão, operando com fluxo de ar calibrado de 400 CFM por TR de resfriamento, a regra empírica determina que a DTD do evaporador deve ser de aproximadamente 35°F (19,4°C) [16].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'câmaras de resfriados normalmente operam com DTD de 10°F ± 3°F (5,6°C ± 1,7°C)',
        },
      ],
    },
  ],
};
