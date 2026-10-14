// ═══════════════════════════════════════════════════════════════════════════
// CONVERSA — manutencao-hvac / m04-01
// Detecção, Localização e Reparo de Vazamentos
// Cenário: Bancada da Oficina (detector IR, ultrassom 40 kHz, brasagem N2, torque Nylog)
// ═══════════════════════════════════════════════════════════════════════════

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm04-01',
  versao: 1,
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'bancada-oficina',
  elenco: ['simon', 'juninho', 'bia', 'marta'],
  estimativaMin: 12,

  beats: [
    // ── 1. ABERTURA ─────────────────────────────────────────────────────────
    {
      id: 'abertura-1',
      tipo: 'cena',
      texto: 'Na bancada da oficina, Simon alinha um detector infravermelho óptico, um detector ultrassônico acústico, varetas de prata Sil-Fos 15 e Harris 45, um torquímetro digital e um frasco de Nylog Blue.',
    },
    {
      id: 'abertura-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Bem-vindos ao Módulo 04! Refrigerante não é consumível: se baixou a carga, existe um furo. Nossa missão é achar o microvazamento, reparar a metalurgia e garantir estanqueidade!',
    },
    {
      id: 'abertura-3',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mestre, passei o detector eletrônico rapidinho por cima das porcas e depois joguei detergente de pia nas conexões de latão, mas não achei nada!',
    },

    // ── 2. CONFLITO ─────────────────────────────────────────────────────────
    {
      id: 'conflito-1',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Cuidado duplo, Juninho! Primeiro: o gás refrigerante é mais denso que o ar, então você deve passar a ponta sensora por baixo da junta e devagar, no máximo a **7 cm/s** (3 polegadas/segundo)!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'a velocidade de varredura não deve exceder 7 cm/s (3 polegadas/segundo) [22].',
      },
    },
    {
      id: 'conflito-2',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'alerta',
      texto: 'E segundo: é proibido usar detergente de cozinha ou sabão com amônia em porcas de latão! A amônia sob tração causa Trincamento por Corrosão sob Tensão (SCC) e estoura a porca de latão!',
    },
    {
      id: 'conflito-3',
      tipo: 'escolha',
      pergunta: 'Para localizar vazamentos em casas de máquinas com vento ou em fluidos HFO de baixo flúor sem interferência de gases ambientes, qual tecnologia acústica opera ouvindo a turbulência do jato?',
      opcoes: [
        {
          id: 'a',
          texto: 'Detector ultrassônico sintonizado na faixa de alta frequência de **40 kHz**, combinado com solução de bolhas de pH neutro.',
          ideal: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Quando um fluido sob pressão escapa por um orifício, a transição do fluxo laminar para turbulento gera ondas sonoras de banda larga na faixa de alta frequência, concentradas em 40 kHz (ultrassom, inaudível para humanos) [15].',
          },
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Exato! O detector ultrassônico escuta a turbulência do vazamento em **40 kHz**, mesmo que o vento dissipe a nuvem de gás!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Quando um fluido sob pressão escapa por um orifício, a transição do fluxo laminar para turbulento gera ondas sonoras de banda larga na faixa de alta frequência, concentradas em 40 kHz (ultrassom, inaudível para humanos) [15].',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Injetar oxigênio puro ou ar comprimido na linha para fazer barulho audível.',
          reacao: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Jamais! Oxigênio ou ar comprimido com óleo sob pressão provoca explosão letal (efeito diesel)! Use apenas Nitrogênio Seco (OFN).',
            },
          ],
        },
      ],
    },

    // ── 3. CAUSO ────────────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Falso Vazamento da Madrugada e o Cone Esmagado pelo Torque Máximo',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Um técnico pressurizou uma linha no telhado com **350 PSIG** de nitrogênio à tarde sob sol de **90°F** (**32,2°C**). Na manhã seguinte, a **65°F** (**18,3°C**), a pressão tinha caído e ele achou que era vazamento — mas era só a Lei de Gay-Lussac (resfriamento térmico do gás)!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Pressurizando um sistema exposto em coberturas a 350 PSIG em período quente de tarde com temperatura de 90°F (32,2°C), as moléculas de nitrogênio apresentam alta energia cinética. Com o resfriamento noturno para 65°F (18,3°C), a energia cinética diminui, reduzindo a pressão lida no manômetro mesmo com o sistema estanque [40].',
          },
        },
        {
          quem: 'bia',
          emocao: 'didatico',
          texto: 'Depois, ao refazer um flange de 1/4 pol. com selante viscoelástico Nylog Blue, ele apertou no topo da tabela (18 ft-lbs) e esmagou o cone de cobre! Como o Nylog lubrifica a rosca, devemos ajustar o torquímetro para o limite inferior da faixa (13 ft-lbs no tubo de 1/4 pol.)!',
        },
        {
          quem: 'juninho',
          emocao: 'espantado',
          texto: 'Que dica de ouro! Com Nylog Blue no flange, a gente regula o torquímetro no limite inferior da tabela para não esmagar o cobre!',
        },
      ],
    },

    // ── 4. INSIGHT ──────────────────────────────────────────────────────────
    {
      id: 'insight-1',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'Na Tabela 4.1.1 (Metalurgia de Brasagem): Cobre com Cobre usa liga fosforosa Sil-Fos 15 (**15%** prata, autofluxante sem pasta); já Cobre com Latão ou Aço exige liga de **45% a 56%** de prata (ex.: Harris 45) com fluxo químico em pasta obrigatório!',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Cobre com Cobre Sil-Fos 15 (15% Prata, Cobre e Fósforo) Dispensável (o fósforo atua como autofluxante na liga) [58] Cobre com Latão (ex.: Válvulas) Ligas com teor de Prata de 45% a 56% (ex.: Harris 45) Fluxo químico em pasta atóxico obrigatório [58] Cobre com Aço (ex.: Compressor) Ligas com teor de Prata de 45% a 56% Fluxo químico em pasta atóxico obrigatório [58]',
      },
    },
    {
      id: 'insight-2',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'Durante toda a brasagem, é obrigatório purgar nitrogênio seco passante a vazão controlada de 1 a 1,5 L/min (**2 a 3 SCFH**) para impedir a formação de carepa de óxido cúprico!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A vazão de nitrogênio deve ser de 1 a 1,5 L/min (2 a 3 SCFH) [55].',
      },
    },
    {
      id: 'insight-3',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'confiante',
      texto: 'E após o reparo e recolhimento conforme EPA 608 (Tabela 4.1.3), fazemos a desidratação por vácuo em três estágios atingindo leitura inferior a **500 microns** com vacuômetro digital isolado!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Concluído o reparo e após processo de desidratação por vácuo profundo (geralmente vácuo em três estágios atingindo leitura inferior a 500 microns medidos com vacuômetro digital isolado do manifold para eliminação de umidade) [74], realiza-se a recarga.',
      },
    },
    {
      id: 'insight-4',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mestre, e por que não podemos usar teflon (fita veda-rosca) na rosca das conexões flare de refrigeração?',
    },
    {
      id: 'insight-5',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Porque quem veda no sistema flare é o contato metal-metal do cone de cobre a 45 graus contra o assento de latão, não a rosca! Fita teflon desfia e entope a válvula de expansão!',
    },
    {
      id: 'insight-6',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'confiante',
      texto: 'Por isso só usamos óleo de refrigeração compatível ou Nylog Blue (que é feito do próprio óleo sintético e não contamina nem entope o sistema)!',
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Quando uma serpentina de cobre apresenta microvazamentos por corrosão formicária (ninhos de formiga), basta pingar solda prata sobre o furo para resolver em definitivo.',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Mito! A corrosão formicária cria uma rede interna de túneis microscópicos na parede do tubo; aquecer com maçarico abre novos furos ao lado. O trecho afetado ou a serpentina deve ser substituído!',
        },
      ],
    },

    // ── 5. PRÁTICA ──────────────────────────────────────────────────────────
    {
      id: 'pratica-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Erros no Reparo de Vazamentos e Brasagem',
      enunciado: 'Identifique qual procedimento abaixo é PROIBIDO durante o reparo de vazamentos em um circuito frigorífico:',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Mover a sonda do detector eletrônico por baixo da tubulação a no máximo 7 cm/s, ou usar detector ultrassônico em 40 kHz.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Conduta correta! Varredura lenta até **7 cm/s** por baixo da junta pega o gás denso, e o ultrassom escuta em **40 kHz**!',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'a velocidade de varredura não deve exceder 7 cm/s (3 polegadas/segundo) [22].',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'ondas sonoras de banda larga na faixa de alta frequência, concentradas em 40 kHz (ultrassom, inaudível para humanos) [15].',
                },
              ],
            },
          ],
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'a velocidade de varredura não deve exceder 7 cm/s (3 polegadas/segundo) [22].',
            },
            {
              campo: 'conteudo_html',
              trecho: 'concentradas em 40 kHz (ultrassom, inaudível para humanos) [15].',
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Ao soldar cobre com o corpo de latão de uma válvula, usar liga de 45% a 56% de prata com fluxo químico e purga de N2 a 2 a 3 SCFH.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Conduta correta! Cobre com latão exige prata **45% a 56%** com fluxo em pasta, e nitrogênio passante a **2 a 3 SCFH**.',
              fonte: [
                {
                  campo: 'tabelas_html',
                  trecho: 'Cobre com Latão (ex.: Válvulas) Ligas com teor de Prata de 45% a 56% (ex.: Harris 45) Fluxo químico em pasta atóxico obrigatório [58]',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'A vazão de nitrogênio deve ser de 1 a 1,5 L/min (2 a 3 SCFH) [55].',
                },
              ],
            },
          ],
          fonte: [
            {
              campo: 'tabelas_html',
              trecho: 'Cobre com Latão (ex.: Válvulas) Ligas com teor de Prata de 45% a 56% (ex.: Harris 45) Fluxo químico em pasta atóxico obrigatório [58]',
            },
            {
              campo: 'conteudo_html',
              trecho: 'A vazão de nitrogênio deve ser de 1 a 1,5 L/min (2 a 3 SCFH) [55].',
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Aplicar detergente de cozinha com amônia nas porcas de latão e fazer remendos de solda sobre trechos com corrosão formicária.',
          correta: true,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Erro crítico localizado! Amônia trinca o latão sob tensão (SCC), e trecho com corrosão formicária deve ser substituído por cobre novo!',
            },
          ],
        },
        {
          id: 'p4',
          rotulo: 'Aplicar Nylog Blue na face cônica do flange e ajustar o torquímetro para o limite inferior da faixa de torque.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'confiante',
              texto: 'Conduta correta! Compensar a lubrificação do Nylog usando o limite inferior da faixa protege o cone contra esmagamento.',
            },
          ],
        },
      ],
    },

    // ── 6. TESTE ────────────────────────────────────────────────────────────
    {
      id: 'quiz-1',
      tipo: 'quiz',
      enunciado: 'Consultando a Tabela 4.1.1 (Ligas de Brasagem) e a Tabela 4.1.3 (EPA 608), qual é a regra correta para unir Cobre com Cobre e qual é o nível de vácuo exigido para recolher um sistema de Alta Pressão (R-410A/R-32) com carga nominal acima de 200 lbs (90,7 kg)?',
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Cobre com Cobre Sil-Fos 15 (15% Prata, Cobre e Fósforo) Dispensável (o fósforo atua como autofluxante na liga) [58]',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Alta Pressão (ex.: R-22, R-410A, R-32, R-454B) 0 psig (101 kPa) 10 inches of Hg vacuum (250 microns absolute)',
        },
      ],
      opcoes: [
        {
          id: 'a',
          texto: 'Liga Sil-Fos 15 (**15%** prata, dispensando fluxo químico pois o fósforo é autofluxante); e recolhimento até 10 polegadas de Hg de vácuo (**250 microns** absolutos).',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Cravado! Cobre-cobre usa Sil-Fos 15 (**15%** prata) sem pasta de fluxo, e na Tabela 4.1.3 sistemas de alta pressão ≥ 200 lbs exigem 10 in. Hg de vácuo (**250 microns** absolutos).',
              fonte: [
                {
                  campo: 'tabelas_html',
                  trecho: 'Cobre com Cobre Sil-Fos 15 (15% Prata, Cobre e Fósforo) Dispensável (o fósforo atua como autofluxante na liga) [58]',
                },
                {
                  campo: 'tabelas_html',
                  trecho: 'Alta Pressão (ex.: R-22, R-410A, R-32, R-454B) 0 psig (101 kPa) 10 inches of Hg vacuum (250 microns absolute)',
                },
              ],
            },
          ],
          fonte: [
            {
              campo: 'tabelas_html',
              trecho: 'Cobre com Cobre Sil-Fos 15 (15% Prata, Cobre e Fósforo) Dispensável (o fósforo atua como autofluxante na liga) [58]',
            },
            {
              campo: 'tabelas_html',
              trecho: 'Alta Pressão (ex.: R-22, R-410A, R-32, R-454B) 0 psig (101 kPa) 10 inches of Hg vacuum (250 microns absolute)',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Usar liga fosforosa Sil-Fos 15 diretamente para soldar tubos de aço inoxidável sem fluxo.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Fósforo com ferro/aço forma fosfeto de ferro quebradiço e trinca a solda! Com aço ou latão, use prata **45% a 56%** e fluxo em pasta.',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'Cobre com Aço (ex.: Compressor) Ligas com teor de Prata de 45% a 56% Fluxo químico em pasta atóxico obrigatório [58]',
              },
            },
          ],
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Cobre com Aço (ex.: Compressor) Ligas com teor de Prata de 45% a 56% Fluxo químico em pasta atóxico obrigatório [58]',
          },
        },
        {
          id: 'c',
          texto: 'Soldar sem nitrogênio passante e liberar o gás residual para a atmosfera.',
          correta: false,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Liberar refrigerante é crime ambiental e soldar sem nitrogênio entope a EEV e o filtro secador com carepa de óxido!',
            },
          ],
        },
      ],
    },
    {
      id: 'quiz-2',
      tipo: 'quiz',
      enunciado: 'Por que a pressão de nitrogênio medida no manômetro cai durante a madrugada (de 90°F para 65°F) mesmo quando a tubulação está 100% estanque?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Pressurizando um sistema exposto em coberturas a 350 PSIG em período quente de tarde com temperatura de 90°F (32,2°C), as moléculas de nitrogênio apresentam alta energia cinética. Com o resfriamento noturno para 65°F (18,3°C), a energia cinética diminui, reduzindo a pressão lida no manômetro mesmo com o sistema estanque [40].',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Pela Lei de Gay-Lussac: em volume constante, a redução da temperatura diminui a energia cinética das moléculas do gás e reduz proporcionalmente a pressão absoluta.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Exato! Por isso todo teste de estanqueidade de 24 horas exige compensação térmica entre a temperatura inicial e a final!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Porque o nitrogênio seco se transforma em líquido dentro do cobre a **65°F** (**18,3°C**).',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'didatico',
              texto: 'O nitrogênio permanece gasoso; a queda de leitura entre **90°F** (**32,2°C**) e **65°F** (**18,3°C**) é puramente contração térmica do gás.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Pressurizando um sistema exposto em coberturas a 350 PSIG em período quente de tarde com temperatura de 90°F (32,2°C), as moléculas de nitrogênio apresentam alta energia cinética. Com o resfriamento noturno para 65°F (18,3°C), a energia cinética diminui, reduzindo a pressão lida no manômetro mesmo com o sistema estanque [40].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Pressurizando um sistema exposto em coberturas a 350 PSIG em período quente de tarde com temperatura de 90°F (32,2°C), as moléculas de nitrogênio apresentam alta energia cinética. Com o resfriamento noturno para 65°F (18,3°C), a energia cinética diminui, reduzindo a pressão lida no manômetro mesmo com o sistema estanque [40].',
          },
        },
      ],
    },

    // ── 7. FILOSOFIA ────────────────────────────────────────────────────────
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Solda Limpa por Dentro, Torque Exato por Fora',
      principio: 'Uma brasagem bonita por fora mas sem nitrogênio por dentro é uma bomba-relógio de óxido cúprico esperando para travar a válvula de expansão.',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Nunca acendam o maçarico sem o cilindro de nitrogênio regulado, nunca apertem uma porca flare sem torquímetro e nunca completem gás sem antes achar e eliminar o vazamento.',
        },
        {
          quem: 'bia',
          emocao: 'confiante',
          texto: 'E sempre compensem a temperatura ambiente no teste de estanqueidade com nitrogênio para não confundir resfriamento noturno com vazamento!',
        },
        {
          quem: 'juninho',
          emocao: 'animado',
          texto: 'Purga de N2 a **2 a 3 SCFH**, prata certa pra cada metal, torquímetro com Nylog e vácuo abaixo de **500 microns**!',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'A vazão de nitrogênio deve ser de 1 a 1,5 L/min (2 a 3 SCFH) [55].',
            },
            {
              campo: 'conteudo_html',
              trecho: 'vácuo em três estágios atingindo leitura inferior a 500 microns',
            },
          ],
        },
      ],
    },

    // ── 8. FECHAMENTO ───────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte a Tabela 4.1.1 (Ligas de Brasagem), a Tabela 4.1.2 (Torques para Conexões Flangeadas) e a Tabela 4.1.3 (Níveis de Vácuo EPA 608).',
      alvo: {
        aba: 'tabelas',
      },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Rastrear vazamentos por baixo da junta a ≤ **7 cm/s**, usar ultrassom em **40 kHz** e nunca aplicar sabão com amônia em latão.',
        'Brasar com nitrogênio passante a **2 a 3 SCFH** (1 a 1,5 L/min), usando Sil-Fos 15 (**15%** prata) em cobre-cobre e prata **45% a 56%** com fluxo em cobre-latão/aço.',
        'Apertar flanges com torquímetro no limite inferior ao usar Nylog Blue e evacuar o sistema abaixo de **500 microns** após o reparo.',
      ],
      proxima: 'Com o sistema estanque e evacuado, na Aula 4.2 vamos dominar os métodos científicos de verificação e ajuste de carga de refrigerante!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'a velocidade de varredura não deve exceder 7 cm/s (3 polegadas/segundo) [22].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Quando um fluido sob pressão escapa por um orifício, a transição do fluxo laminar para turbulento gera ondas sonoras de banda larga na faixa de alta frequência, concentradas em 40 kHz (ultrassom, inaudível para humanos) [15].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A vazão de nitrogênio deve ser de 1 a 1,5 L/min (2 a 3 SCFH) [55].',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Cobre com Cobre Sil-Fos 15 (15% Prata, Cobre e Fósforo) Dispensável (o fósforo atua como autofluxante na liga) [58] Cobre com Latão (ex.: Válvulas) Ligas com teor de Prata de 45% a 56%',
        },
        {
          campo: 'conteudo_html',
          trecho: 'vácuo em três estágios atingindo leitura inferior a 500 microns',
        },
      ],
    },
  ],
};
