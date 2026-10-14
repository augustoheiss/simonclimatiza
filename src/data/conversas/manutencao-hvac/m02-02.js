// ═══════════════════════════════════════════════════════════════════════════
// CONVERSA — manutencao-hvac / m02-02
// Análise Avançada Pressão-Temperatura e Diagrama P-H
// Cenário: Bancada da Oficina (manifold digital NIST, ponto de bolha/orvalho, casos reais)
// ═══════════════════════════════════════════════════════════════════════════

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm02-02',
  versao: 1,
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'bancada-oficina',
  elenco: ['simon', 'juninho', 'bia', 'marta'],
  estimativaMin: 13,

  beats: [
    // ── 1. ABERTURA ─────────────────────────────────────────────────────────
    {
      id: 'abertura-1',
      tipo: 'cena',
      texto: 'Na bancada da oficina, Bia pareia as pinças termopares Bluetooth ao manifold digital enquanto Simon desenha o domo de saturação do Diagrama P-H no quadro branco.',
    },
    {
      id: 'abertura-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Agora que o filtro está limpo e o fluxo de ar validado, vamos ler o coração termodinâmico do ciclo: calor latente, superaquecimento e subresfriamento!',
    },
    {
      id: 'abertura-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'A diferença entre calor sensível e latente é brutal: aquecer uma libra de água até **212°F** (**100°C**) consome só **142 BTUs**, mas evaporar essa mesma libra a **212°F** absorve **970 BTUs**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'são necessárias apenas 142 Unidades Térmicas Britânicas (BTUs) para aquecer uma libra de água da temperatura ambiente padrão até seu ponto de ebulição de 212°F (100°C), o que representa calor sensível [3]. No entanto, para converter essa mesma libra de água a 212°F em vapor a 212°F são necessários adicionais 970 BTUs de calor latente [3].',
      },
    },

    // ── 2. CONFLITO E APOSTA ────────────────────────────────────────────────
    {
      id: 'conflito-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mestre, fui medir o superaquecimento de um split inverter ontem e deu cravado na meta de **10°F**, mas o cliente jurava que a máquina estava fraca!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'A lógica de controle do equipamento ajusta a velocidade do motor de passo da EEV e a frequência do compressor para forçar o superaquecimento a se manter na meta estipulada pela fábrica (ex. 10°F), mesmo se houver uma perda de 10% a 25% de fluido.',
      },
    },
    {
      id: 'conflito-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Você caiu na armadilha da modulação inverter, Juninho! Em carga parcial, a placa fecha a EEV e reduz a rotação para manter os **10°F**, mascarando uma perda de **10%** a **25%** de fluido!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'A lógica de controle do equipamento ajusta a velocidade do motor de passo da EEV e a frequência do compressor para forçar o superaquecimento a se manter na meta estipulada pela fábrica (ex. 10°F), mesmo se houver uma perda de 10% a 25% de fluido.',
      },
    },
    {
      id: 'conflito-3',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'confiante',
      texto: 'Por isso no procedimento Simon é obrigatório ativar o Modo de Carga (Charge Mode), travando o compressor a **100%** e a EEV fixa, e aguardar de 10 a 15 minutos antes de ler.',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Para avaliar a carga real e plotar o ciclo real de forma válida, ative obrigatoriamente o \'Modo de Carga\' (Charge Mode) ou \'Modo de Teste\' do equipamento. Isso trava a EEV em abertura fixa e o compressor a 100% de rotação. Aguarde o período de estabilização de 10-15 minutos antes de coletar as leituras.',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'O que acontece na linha de líquido se o subresfriamento cair abaixo da meta de projeto (8°F a 12°F) e chegar a zero antes da válvula de expansão?',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Sem um subresfriamento adequado (meta de projeto: 8°F a 12°F ou 4,4°C a 6,7°C), a queda de pressão sofrida pela tubulação na linha de líquido causará a ebulição precoce do refrigerante antes de atingir a válvula de expansão (geração de flash gas).',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'A capacidade do sistema aumenta porque o gás passa mais rápido pela válvula.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Pelo contrário! Bolhas de gás na entrada da válvula estrangulam o fluxo de massa e derrubam a capacidade.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Ocorre ebulição precoce na linha (flash gas), estrangulando a passagem de líquido na EEV/TXV e derrubando a capacidade do evaporador.',
          ideal: true,
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! O subresfriamento de **8°F a 12°F** (**4,4°C a 6,7°C**) garante coluna 100% líquida na entrada do dispositivo de expansão!',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'Sem um subresfriamento adequado (meta de projeto: 8°F a 12°F ou 4,4°C a 6,7°C), a queda de pressão sofrida pela tubulação na linha de líquido causará a ebulição precoce do refrigerante',
              },
            },
          ],
        },
      ],
    },

    // ── 3. CAUSO ────────────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Glide do R-454B e a Pinça Sem Isolamento',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num split novo com R-454B (que tem glide de **1,5°F** ou **0,8°C**), um técnico usou tabela errada e deixou a pinça de temperatura tomando vento do ventilador, o que já distorce de **2°F** a **3°F**.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Embora o R-454B exiba um deslizamento de temperatura relativamente pequeno de aproximadamente 1,5°F (0,8°C), essa variação é matematicamente significativa',
            },
            {
              campo: 'infobox_campo',
              trecho: 'Proteja o termistor com isolante elastomérico ou espuma contra correntes de ar do ventilador para evitar distorções de 2°F a 3°F.',
            },
          ],
        },
        {
          quem: 'bia',
          emocao: 'didatico',
          texto: 'Resultado: condenou uma TXV perfeita! Com mistura zeotrópica, selecionamos sempre Ponto de Orvalho (Dew Point) para superaquecimento e Ponto de Bolha (Bubble Point) para subresfriamento no manifold digital.',
        },
        {
          quem: 'juninho',
          emocao: 'animado',
          texto: 'Anotei o macete: Orvalho na sucção (SH) e Bolha no líquido (SC)! E sempre lixar o cobre e isolar a pinça!',
        },
      ],
    },

    // ── 4. INSIGHT ──────────────────────────────────────────────────────────
    {
      id: 'insight-1',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'Vamos analisar os 3 Estudos de Caso da apostila! No Caso 1 (Split R-454B de **3 TR**), a sucção está em **95 psig** (Orvalho **33°F**) com tubo a **65°F**, gerando SH alto de **32°F**!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Um técnico avalia um sistema split de expansão direta de 3 TR operando com fluido R-454B, equipado com válvula de expansão termostática (TXV) [16].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Pressão de Sucção: 95 psig Pressão de Descarga: 430 psig Temperatura da Linha de Sucção: 65°F (18,3°C) Temperatura da Linha de Líquido: 90°F (32,2°C)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'SH = 65°F - 33°F = 32°F (Aproximadamente 17,8°C de Diferencial)',
        },
      ],
    },
    {
      id: 'insight-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'Ao mesmo tempo, no Caso 1, a descarga de **430 psig** (Bolha **126°F**) com linha de líquido a **90°F** dá SC de **36°F**! SH alto (**32°F**) com SC alto (**36°F**) crava restrição na linha de líquido!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A pressão de descarga de 430 psig corresponde a um ponto de bolha de saturação de líquido de aproximadamente 126°F (52,2°C) [24].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'SC = 126°F - 90°F = 36°F (Aproximadamente 20°C de Diferencial)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O sistema apresenta simultaneamente Superaquecimento Alto (32°F) e Subresfriamento Alto (36°F).',
        },
      ],
    },
    {
      id: 'insight-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Já no Caso 2 (Rooftop de **5 TR** com R-410A), temos sucção alta de **173 psig** (**60°F**), descarga baixa de **238 psig** (**80°F**), corrente **40%** abaixo do RLA e razão de compressão de **1,35**: falha mecânica do compressor!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Um técnico analisa uma unidade de climatização do tipo rooftop de 5 TR operando com R-410A e compressor scroll de velocidade fixa.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Pressão de Sucção: 173 psig Pressão de Descarga: 238 psig Temperatura da Linha de Sucção: 68°F (20°C) Corrente Elétrica do Compressor: 40% abaixo da Corrente de Carga Nominal (RLA)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A pressão de sucção de 173 psig equivale a uma temperatura de saturação de aproximadamente 60°F (15,6°C) no evaporador [11].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A pressão de descarga de 238 psig equivale a uma temperatura de saturação de condensação de apenas 80°F (26,7°C) [11].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Razão de Compressão = (238 + 14,7) ÷ (173 + 14,7) = 252,7 ÷ 187,7 = 1,35',
        },
      ],
    },
    {
      id: 'insight-4',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'confiante',
      texto: 'E no Caso 3 (Freezer R-404A), a descarga está em **450 psig** (**130°F**) com líquido a **95°F** (SC de **35°F**) e ponteiros estáveis: sobrecarga grave de refrigerante!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Um técnico está solucionando problemas em uma câmara fria de congelados (walk-in freezer) operando com fluido R-404A.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Pressão de Descarga: 450 psig Temperatura da Linha de Líquido: 95°F (35°C) Temperatura do Ar Externo (Ambiente): 80°F (26,7°C) Análise Termodinâmica: Na pressão medida de 450 psig, o R-404A possui uma temperatura de saturação de condensação de aproximadamente 130°F (54,4°C) [13].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Como a leitura dos ponteiros está completamente estável e o subresfriamento medido de 35°F é real e excessivo (indicando acúmulo de líquido resfriado no condensador), o diagnóstico aponta para uma Sobrecarga Grave de Carga de Refrigerante [6].',
        },
      ],
    },
    {
      id: 'insight-5',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Sensacional! Ponteiro do manômetro tremendo é gás não-condensável; ponteiro cravado estável com subresfriamento alto é excesso de fluido!',
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Uma diferença de temperatura superior a 3°F (1,7°C) nos tubos de sucção antes e depois da válvula reversora de 4 vias confirma vazamento (bypass) interno na válvula.',
      verdade: true,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Uma medição de diferencial de temperatura física superior a 3°F (1,7°C) nas tubulações de sucção antes e depois da válvula reversora confirma o vazamento interno [65].',
      },
      explicacao: [
        {
          quem: 'simon',
          emocao: 'aprovando',
          texto: 'Verdade! Se o gás quente de descarga vaza para a sucção dentro da válvula reversora, o ΔT antes e depois dela passa de **3°F** (**1,7°C**).',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Uma medição de diferencial de temperatura física superior a 3°F (1,7°C) nas tubulações de sucção antes e depois da válvula reversora confirma o vazamento interno [65].',
          },
        },
      ],
    },

    // ── 5. PRÁTICA ──────────────────────────────────────────────────────────
    {
      id: 'pratica-1',
      tipo: 'calculadora',
      titulo: 'Cálculo de Subresfriamento (SC) no Split R-454B (Estudo de Caso 1)',
      formula: 'SC = T_bolha (126°F) - T_linha_liquido (90°F)',
      enunciado: 'No Split R-454B de 3 TR, a pressão de descarga é 430 psig, o que equivale a um Ponto de Bolha (Bubble Point) de 126°F. O termopar isolado na linha de líquido mede 90°F. Qual é o Subresfriamento (SC)?',
      unidade: '°F',
      respostaCorreta: 36,
      tolerancia: 0.5,
      leituras: [
        { rotulo: 'Pressão de Descarga (R-454B)', valor: '430 psig' },
        { rotulo: 'Temperatura de Saturação (Ponto de Bolha)', valor: '126°F' },
        { rotulo: 'Temperatura Real da Linha de Líquido', valor: '90°F' },
      ],
      opcoesRapidas: [12, 32, 36, 65],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Perfeito! **126°F** menos **90°F** resulta em **36°F** de subresfriamento (muito acima da meta de **8°F a 12°F**), provando líquido preso por restrição!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'SC = 126°F - 90°F = 36°F (Aproximadamente 20°C de Diferencial) Este valor de SC está extremamente alto (meta de projeto típica: 8°F a 12°F) [16].',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'didatico',
          texto: 'Subtraia a temperatura da linha de líquido (**90°F**) da temperatura de bolha (**126°F**): **126°F** - **90°F** = **36°F**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'SC = 126°F - 90°F = 36°F (Aproximadamente 20°C de Diferencial)',
          },
        },
      ],
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Um técnico avalia um sistema split de expansão direta de 3 TR operando com fluido R-454B, equipado com válvula de expansão termostática (TXV) [16].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A pressão de descarga de 430 psig corresponde a um ponto de bolha de saturação de líquido de aproximadamente 126°F (52,2°C) [24].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'SC = 126°F - 90°F = 36°F (Aproximadamente 20°C de Diferencial) Este valor de SC está extremamente alto (meta de projeto típica: 8°F a 12°F) [16].',
        },
      ],
    },

    // ── 6. TESTE ────────────────────────────────────────────────────────────
    {
      id: 'pergunta-1',
      tipo: 'quiz',
      enunciado: 'No Estudo de Caso 2 (Rooftop de 5 TR com R-410A), você encontra pressão de sucção de 173 psig, pressão de descarga de 238 psig (razão de compressão de 1,35) e corrente elétrica 40% abaixo do RLA. Qual é o diagnóstico?',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Um técnico analisa uma unidade de climatização do tipo rooftop de 5 TR operando com R-410A e compressor scroll de velocidade fixa.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Pressão de Sucção: 173 psig Pressão de Descarga: 238 psig Temperatura da Linha de Sucção: 68°F (20°C) Corrente Elétrica do Compressor: 40% abaixo da Corrente de Carga Nominal (RLA)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Razão de Compressão = (238 + 14,7) ÷ (173 + 14,7) = 252,7 ÷ 187,7 = 1,35',
        },
      ],
      opcoes: [
        {
          id: 'a',
          texto: 'Perda de bombeamento / falha mecânica interna do compressor (válvulas ou espirais scroll com vazamento interno).',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Exato! Em conforto térmico a sucção deveria trabalhar perto de **118 psig** (**40°F**). Com **173 psig** na baixa, **238 psig** na alta e corrente **40%** menor, o compressor não comprime.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'Pressão de Sucção: 173 psig Pressão de Descarga: 238 psig Temperatura da Linha de Sucção: 68°F (20°C) Corrente Elétrica do Compressor: 40% abaixo da Corrente de Carga Nominal (RLA)',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'onde a serpentina deve operar próxima a 40°F (4,4°C ou 118 psig) [11].',
                },
              ],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Condensador sujo com excesso de pressão de descarga.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'didatico',
              texto: 'Condensador sujo elevaria a pressão de descarga e a corrente elétrica, mas aqui a descarga está em apenas **238 psig** e a corrente **40%** abaixo do RLA.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Pressão de Descarga: 238 psig Temperatura da Linha de Sucção: 68°F (20°C) Corrente Elétrica do Compressor: 40% abaixo da Corrente de Carga Nominal (RLA)',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Falta de fluido refrigerante por microvazamento.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Na subcarga a pressão de sucção cai muito abaixo de **118 psig**, nunca sobe para **173 psig**.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'Pressão de Sucção: 173 psig',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'onde a serpentina deve operar próxima a 40°F (4,4°C ou 118 psig) [11].',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'pergunta-2',
      tipo: 'quiz',
      enunciado: 'Ao diagnosticar uma mistura zeotrópica como o R-454B (que possui glide de 1,5°F), quais colunas de saturação devem ser selecionadas para calcular o Superaquecimento (SH) e o Subresfriamento (SC)?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Embora o R-454B exiba um deslizamento de temperatura relativamente pequeno de aproximadamente 1,5°F (0,8°C)',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Ponto de Orvalho (Dew Point) para o Superaquecimento e Ponto de Bolha (Bubble Point) para o Subresfriamento.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Perfeito! Na sucção queremos saber quando a última gota virou vapor (Orvalho/Dew Point); na linha de líquido, quando a primeira bolha se forma (Bolha/Bubble Point).',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Ponto de Bolha para o Superaquecimento e Ponto de Orvalho para o Subresfriamento.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'didatico',
              texto: 'Está invertido! Bolha é sempre para líquido (Subresfriamento) e Orvalho é sempre para vapor (Superaquecimento).',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Usar a tabela de papel do R-134a, já que a pressão a **40°F** (**35,0 psig**) é idêntica à do R-454B.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Jamais! A **40°F**, o R-134a está em **35,0 psig**, enquanto o R-454B trabalha em **107,0 psig** (Orvalho) / **112,0 psig** (Bolha)!',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'Pressão de Saturação a 40°F (4,4°C) (psig) Pressão de Saturação a 100°F (37,8°C) (psig) R-134a HFC Puro A1 (Não inflamável) 35,0 124,2 R-404A Mistura Quase-Azeotrópica A1 (Não inflamável) 85,4 234,6 R-410A Mistura Quase-Azeotrópica A1 (Não inflamável) 118,0 317,0 (Aproximada) R-32 HFC Puro A2L (Moderadamente Inflamável) 118,8 325,7 R-454B Mistura Zeotrópica (1,5°F Glide) A2L (Moderadamente Inflamável) 107,0 (Orvalho) / 112,0 (Bolha)',
              },
            },
          ],
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Pressão de Saturação a 40°F (4,4°C) (psig) Pressão de Saturação a 100°F (37,8°C) (psig) R-134a HFC Puro A1 (Não inflamável) 35,0 124,2',
          },
        },
      ],
    },

    // ── 7. FILOSOFIA ────────────────────────────────────────────────────────
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Pressão Sem Temperatura É Só Metade da Verdade',
      principio: 'O manômetro diz onde o fluido deveria mudar de fase, mas é o termopar isolado no tubo limpo que revela o que realmente aconteceu lá dentro.',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Quem olha só pressão de baixa fica refém de palpite. Quando você cruza SH e SC com o Diagrama P-H, a falha se entrega sem margem para dúvida.',
        },
        {
          quem: 'bia',
          emocao: 'confiante',
          texto: 'E sempre com Modo de Carga ativo nos inverters e 10 a 15 minutos de estabilização antes de gravar o relatório no manifold digital.',
        },
        {
          quem: 'juninho',
          emocao: 'empolgado',
          texto: 'Com Orvalho na sucção e Bolha no líquido no banco NIST do manifold digital, nenhum fluido com glide me engana mais!',
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte na aba **Tabelas & Parâmetros** as Tabelas 2.2.1 (Comparativo de Propriedades e Pressões dos Fluidos Modernos) e 2.2.2 (Manifold Analógico vs. Digital).',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Sistemas Inverter:** ative obrigatoriamente o Modo de Carga (compressor a **100%** e EEV fixa) por 10 a 15 min para a modulação não mascarar perdas de **10% a 25%**.',
        '**Misturas Zeotrópicas (R-454B com 1,5°F de glide):** use Ponto de Orvalho (Dew Point) para Superaquecimento e Ponto de Bolha (Bubble Point) para Subresfriamento (meta **8°F a 12°F**).',
        '**Diagnóstico Cruzado:** SH alto + SC alto = restrição; razão de compressão baixa (**1,35**) com corrente **40%** menor = falha mecânica do compressor; SC alto estável = sobrecarga.',
      ],
      proxima: 'Na aula m02-03 vamos fechar o Módulo 02 com o Diagnóstico Elétrico Avançado: megômetro, módulos IPM, barramento CC e redes VRF!',
      fonte: [
        {
          campo: 'infobox_campo',
          trecho: 'A lógica de controle do equipamento ajusta a velocidade do motor de passo da EEV e a frequência do compressor para forçar o superaquecimento a se manter na meta estipulada pela fábrica (ex. 10°F), mesmo se houver uma perda de 10% a 25% de fluido. Isso mascara a subcarga leve, causando desperdício de energia e falta de refrigeração no compressor." Como Resolver (Metodologia Simon): Para avaliar a carga real e plotar o ciclo real de forma válida, ative obrigatoriamente o \'Modo de Carga\' (Charge Mode) ou \'Modo de Teste\' do equipamento. Isso trava a EEV em abertura fixa e o compressor a 100% de rotação.',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Sem um subresfriamento adequado (meta de projeto: 8°F a 12°F ou 4,4°C a 6,7°C), a queda de pressão sofrida pela tubulação na linha de líquido causará a ebulição precoce do refrigerante',
        },
        {
          campo: 'tabelas_html',
          trecho: 'R-454B Mistura Zeotrópica (1,5°F Glide)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Corrente Elétrica do Compressor: 40% abaixo da Corrente de Carga Nominal (RLA)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Razão de Compressão = (238 + 14,7) ÷ (173 + 14,7) = 252,7 ÷ 187,7 = 1,35',
        },
      ],
    },
  ],
};
