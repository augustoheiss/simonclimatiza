// ═══════════════════════════════════════════════════════════════════════════
// CONVERSA — manutencao-hvac / m03-03
// Gerenciamento de Filtros e Qualidade do Ar Interior
// Cenário: Casa de Máquinas (UTA, MPPS 0,3 µm, MERV, bypass de 1 mm, ΔP e carvão ativado)
// ═══════════════════════════════════════════════════════════════════════════

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm03-03',
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
      texto: 'Diante do módulo de filtragem de uma grande UTA hospitalar, Simon mostra um manômetro diferencial inclinado (ΔP) e um jogo de filtros plissados MERV 14 e HEPA.',
    },
    {
      id: 'abertura-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Turma, filtro de ar não é peneira de cozinha! A física da filtragem combina difusão para nanopartículas abaixo de **0,1 µm** e impactação/interceptação acima de **0,3 µm**.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Difusão (Movimento Browniano): Mecanismo primário para partículas ultrafinas (abaixo de 0,1 µm) [1].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'localizada entre 0,1 µm e 0,3 µm [6]. A eficiência de um filtro em 0,3 µm representa seu pior desempenho.',
        },
      ],
    },
    {
      id: 'abertura-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'E justamente entre **0,1 µm** e **0,3 µm** fica a "vala" do Tamanho de Partícula Mais Penetrante (MPPS)! Por isso todo filtro HEPA é testado no seu ponto mais difícil: **99,97%** a **0,3 µm** (e o ULPA em **99,999%** a **0,12 µm**)!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'localizada entre 0,1 µm e 0,3 µm [6]. A eficiência de um filtro em 0,3 µm representa seu pior desempenho.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Filtros HEPA e ULPA (MERV 17-20 / H13-H14): Mínimo de 99,97% a 0,3 µm (HEPA) ou 99,999% a 0,12 µm (ULPA) [16].',
        },
      ],
    },

    // ── 2. CONFLITO ─────────────────────────────────────────────────────────
    {
      id: 'conflito-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mestre, o comprador do condomínio comprou filtros MERV 14 com moldura fininha de papelão e mandou trocar todo dia 1º do mês no calendário. Tá certo isso?',
    },
    {
      id: 'conflito-2',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'alerta',
      texto: 'Dois erros caríssimos, Juninho! Trocar por calendário fixo de 30 dias ou joga filtro bom no lixo ou deixa o filtro saturar antes. E moldura barata de papelão enverga sob pressão estática (*filter bowing*)!',
    },
    {
      id: 'conflito-3',
      tipo: 'escolha',
      pergunta: 'O que acontece com um filtro de alta eficiência MERV 14 (95% de eficácia) quando sua moldura enverga ou a gaxeta velha deixa uma fresta de bypass de apenas 1 mm?',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Em termos práticos de eficiência, uma folga de apenas 1 mm rebaixa a capacidade global de retenção de um filtro MERV 14 (95% de eficácia) para o mesmo rendimento de um MERV 8 (20%), contaminando rotores, dutos e a serpentina evaporadora.',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'A folga de **1 mm** rebaixa a capacidade global de retenção do filtro MERV 14 (**95%**) para o mesmo rendimento de um MERV 8 (**20%**).',
          ideal: true,
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Em termos práticos de eficiência, uma folga de apenas 1 mm rebaixa a capacidade global de retenção de um filtro MERV 14 (95% de eficácia) para o mesmo rendimento de um MERV 8 (20%), contaminando rotores, dutos e a serpentina evaporadora.',
          },
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Exato! O ar sempre foge pelo caminho de menor resistência: **1 mm** de fresta transforma um MERV 14 (**95%**) num MERV 8 (**20%**)!',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'Em termos práticos de eficiência, uma folga de apenas 1 mm rebaixa a capacidade global de retenção de um filtro MERV 14 (95% de eficácia) para o mesmo rendimento de um MERV 8 (20%), contaminando rotores, dutos e a serpentina evaporadora.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'A fresta de **1 mm** não afeta a filtragem, pois o ar prefere atravessar o meio filtrante denso.',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Em termos práticos de eficiência, uma folga de apenas 1 mm rebaixa a capacidade global de retenção de um filtro MERV 14 (95% de eficácia) para o mesmo rendimento de um MERV 8 (20%)',
          },
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Pelo contrário! Quanto maior o MERV, maior a perda de carga e mais ar escapa pela fresta de **1 mm**!',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'Em termos práticos de eficiência, uma folga de apenas 1 mm rebaixa a capacidade global de retenção de um filtro MERV 14 (95% de eficácia) para o mesmo rendimento de um MERV 8 (20%)',
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
      titulo: 'O Filtro de Carvão Ativado que Parecia Limpo no Manômetro',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num laboratório químico, o técnico olhava o manômetro diferencial (ΔP) do filtro de carvão ativado toda semana: como a pressão não subia, ele achou que o filtro estava novo. De repente, o cheiro de solvente invadiu a sala!',
        },
        {
          quem: 'bia',
          emocao: 'didatico',
          texto: 'Carvão ativado opera por adsorção molecular de gases e COVs, sem alterar o ΔP! Quando os microporos enchem, dá o rompimento (*breakthrough*). Tem que usar indicador cromático reagente e calibrar a capela entre 80 fpm e 120 fpm!',
        },
        {
          quem: 'juninho',
          emocao: 'espantado',
          texto: 'Que armadilha! Carvão ativado saturado não sobe o ΔP! E se a poeira passar pelo filtro de partículas e sujar a serpentina da evaporadora, quanto pesa na conta de luz?',
        },
      ],
    },

    // ── 4. INSIGHT ──────────────────────────────────────────────────────────
    {
      id: 'insight-1',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Pesa muito! Uma película de sujeira de apenas **1,2 mm** (0,05 polegadas) na serpentina do evaporador derruba a troca térmica e eleva a conta de energia em até **30%**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Uma película de sujeira de apenas **1,2 mm (0,05 polegadas)** na serpentina do evaporador reduz o coeficiente de troca U, obrigando o compressor a operar por períodos muito longo e elevando a conta de energia em até **30%** [80].',
      },
    },
    {
      id: 'insight-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'Na Tabela 3.3.1 (ASHRAE 52.2), temos três faixas: E1 (**0,3 a 1,0 µm**), E2 (**1,0 a 3,0 µm**) e E3 (**3,0 a 10,0 µm**). O MERV 13 captura ≥ **50%** na E1, ≥ **85%** na E2 e ≥ **90%** na E3; já o MERV 14 sobe para ≥ **75%** na E1, ≥ **90%** na E2 e ≥ **95%** na E3!',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Classificação MERV Faixa E1 (0,3 a 1,0 µm) Faixa E2 (1,0 a 3,0 µm) Faixa E3 (3,0 a 10,0 µm) Resistência Aerodinâmica Inicial Típica MERV 1–4 N/A N/A < 20% (Arrestância Média < 65% a 80%) < 0,10 in. w.g. (< 25 Pa) MERV 5–8 N/A N/A ≥ 20% a ≥ 70% 0,10 a 0,20 in. w.g. (25 a 50 Pa) MERV 9–12 N/A ≥ 50% a ≥ 80% ≥ 85% 0,15 a 0,25 in. w.g. (37 a 62 Pa) MERV 13 ≥ 50% ≥ 85% ≥ 90% 0,20 a 0,30 in. w.g. (50 a 75 Pa) MERV 14 ≥ 75% ≥ 90% ≥ 95% 0,25 a 0,35 in. w.g. (62 a 87 Pa)',
      },
    },
    {
      id: 'insight-3',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'confiante',
      texto: 'Pela ANVISA RE 09/2003 e Lei do PMOC, os limites semestrais são: CO₂ ≤ **1000 ppm**, fungos ≤ **750 UFC/m³**, particulados ≤ 80 µg/m³, UR de **40% a 65%**, temperatura de **23°C a 26°C** e velocidade ≤ 0,25 m/s!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'CO2 máximo de 1000 ppm, fungos máximo de 750 UFC/m³, material particulado máximo de 80 µg/m³, UR de 40% a 65%, temperatura de 23°C a 26°C no verão, e velocidade máxima do ar de 0,25 m/s na zona de ocupação [59].',
      },
    },
    {
      id: 'insight-4',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'Já salas limpas ISO Classe 5 (Grau A farmacêutico) limitam o ar a no máximo 3.520 partículas ≥ **0,5 µm**/m³, exigindo 240 a 480 trocas de ar por hora (ACH) e fluxo laminar!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Salas limpas ISO Classe 5 (Grau A GMP/BPF) limitam o ar a no máximo 3.520 partículas >= 0,5 µm/m³ [48], exigindo 240 a 480 trocas de ar por hora (ACH) e fluxos laminares [62].',
      },
    },
    {
      id: 'insight-5',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'E nunca façam upgrade de filtro para MERV 13 ou MERV 14 sem antes medir a pressão estática disponível do ventilador da máquina!',
    },
    {
      id: 'insight-6',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Porque se o ventilador não tiver pressão estática para vencer o filtro mais fechado, a vazão despenca e a serpentina congela!',
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Um filtro HEPA (99,97% a 0,3 µm) funciona como uma peneira simples e deixa passar todas as nanopartículas menores que 0,3 µm.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'didatico',
          texto: 'Mito! O ponto de **0,3 µm** é o MPPS (pior desempenho do filtro). Para partículas menores que **0,05 µm**, o movimento browniano (difusão) faz o filtro HEPA ser ainda mais eficiente que **99,97%**!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'localizada entre 0,1 µm e 0,3 µm [6]. A eficiência de um filtro em 0,3 µm representa seu pior desempenho. Filtros HEPA verdadeiros (99,97% a 0,3 µm) são ainda mais eficientes para partículas menores que 0,05 µm via difusão e maiores que 1,0 µm via impactação [6].',
          },
        },
      ],
      fonte: {
        campo: 'conteudo_html',
        trecho: 'localizada entre 0,1 µm e 0,3 µm [6]. A eficiência de um filtro em 0,3 µm representa seu pior desempenho. Filtros HEPA verdadeiros (99,97% a 0,3 µm) são ainda mais eficientes para partículas menores que 0,05 µm via difusão e maiores que 1,0 µm via impactação [6].',
      },
    },

    // ── 5. PRÁTICA ──────────────────────────────────────────────────────────
    {
      id: 'pratica-1',
      tipo: 'inspecao',
      titulo: 'Auditoria de Falhas em Bancos de Filtros e Exaustão',
      enunciado: 'Você está auditando a UTA e o laboratório químico de um cliente. Qual das práticas abaixo está INCORRETA?',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Substituir filtros particulados com base no ΔP real (0,50 in. w.g. para plissados e 1,0–1,5 in. w.g. para cartuchos) e exigir molduras rígidas.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Esta prática está correta! Monitorar o ΔP real e usar moldura rígida evita desperdício e envergamento.',
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Eliminar qualquer fresta nos trilhos e gaxetas, pois 1 mm de bypass rebaixa um MERV 14 (95%) para o desempenho de um MERV 8 (20%).',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'confiante',
              texto: 'Prática correta! Vedação periférica impecável garante que **1 mm** de fresta não destrua a eficácia de **95%** para **20%**.',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'Em termos práticos de eficiência, uma folga de apenas 1 mm rebaixa a capacidade global de retenção de um filtro MERV 14 (95% de eficácia) para o mesmo rendimento de um MERV 8 (20%), contaminando rotores, dutos e a serpentina evaporadora.',
              },
            },
          ],
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Em termos práticos de eficiência, uma folga de apenas 1 mm rebaixa a capacidade global de retenção de um filtro MERV 14 (95% de eficácia) para o mesmo rendimento de um MERV 8 (20%)',
          },
        },
        {
          id: 'p3',
          rotulo: 'Aguardar o manômetro diferencial (ΔP) subir para decidir a troca do filtro de carvão ativado.',
          correta: true,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Erro encontrado! Filtros de carvão ativado adsorvem gases nos microporos e não variam o ΔP ao saturar; use indicadores cromáticos reagentes ou sensores de TVOC!',
            },
          ],
        },
        {
          id: 'p4',
          rotulo: 'Manter a velocidade de face de capelas de laboratório calibrada entre 80 fpm e 120 fpm conforme ANSI/ASHRAE 110.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Prática correta! Essa janela evita turbulências que arrastariam vapores tóxicos para o operador.',
            },
          ],
        },
      ],
    },

    // ── 6. TESTE ────────────────────────────────────────────────────────────
    {
      id: 'quiz-1',
      tipo: 'quiz',
      enunciado: 'Por que os filtros absolutos HEPA são certificados especificamente na retenção mínima de 99,97% para partículas de 0,3 µm?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'localizada entre 0,1 µm e 0,3 µm [6]. A eficiência de um filtro em 0,3 µm representa seu pior desempenho. Filtros HEPA verdadeiros (99,97% a 0,3 µm)',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Porque a faixa de **0,1 µm** a **0,3 µm** é o Tamanho de Partícula Mais Penetrante (MPPS), onde a difusão e a impactação têm seu ponto conjunto de menor eficiência.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Brilhante! Em **0,3 µm** está o fundo da "vala" do MPPS: partículas menores que **0,05 µm** são pegas por difusão e maiores que **1,0 µm** por impactação com eficiência ainda maior que **99,97%**!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'localizada entre 0,1 µm e 0,3 µm [6]. A eficiência de um filtro em 0,3 µm representa seu pior desempenho. Filtros HEPA verdadeiros (99,97% a 0,3 µm) são ainda mais eficientes para partículas menores que 0,05 µm via difusão e maiores que 1,0 µm via impactação [6].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'localizada entre 0,1 µm e 0,3 µm [6]. A eficiência de um filtro em 0,3 µm representa seu pior desempenho. Filtros HEPA verdadeiros (99,97% a 0,3 µm)',
          },
        },
        {
          id: 'b',
          texto: 'Porque o filtro HEPA funciona como uma peneira simples e deixa passar tudo que for menor que **0,3 µm**.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'didatico',
              texto: 'Mito clássico! Abaixo de **0,1 µm**, o movimento browniano faz as nanopartículas colidirem nas fibras por difusão com altíssima eficiência!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Difusão (Movimento Browniano): Mecanismo primário para partículas ultrafinas (abaixo de 0,1 µm) [1].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'A eficiência de um filtro em 0,3 µm representa seu pior desempenho.',
          },
        },
        {
          id: 'c',
          texto: 'Porque partículas acima de **10,0 µm** não podem ser retidas por filtros MERV 13 ou MERV 14.',
          correta: false,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Partículas grandes na faixa E3 (**3,0 a 10,0 µm**) são facilmente retidas acima de **90%** por filtros MERV 13 e **95%** por MERV 14!',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'Faixa E3 (3,0 a 10,0 µm) Resistência Aerodinâmica Inicial Típica MERV 1–4 N/A N/A < 20% (Arrestância Média < 65% a 80%) < 0,10 in. w.g. (< 25 Pa) MERV 5–8 N/A N/A ≥ 20% a ≥ 70% 0,10 a 0,20 in. w.g. (25 a 50 Pa) MERV 9–12 N/A ≥ 50% a ≥ 80% ≥ 85% 0,15 a 0,25 in. w.g. (37 a 62 Pa) MERV 13 ≥ 50% ≥ 85% ≥ 90% 0,20 a 0,30 in. w.g. (50 a 75 Pa) MERV 14 ≥ 75% ≥ 90% ≥ 95%',
              },
            },
          ],
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Faixa E3 (3,0 a 10,0 µm) Resistência Aerodinâmica Inicial Típica MERV 1–4 N/A N/A < 20% (Arrestância Média < 65% a 80%) < 0,10 in. w.g. (< 25 Pa) MERV 5–8 N/A N/A ≥ 20% a ≥ 70% 0,10 a 0,20 in. w.g. (25 a 50 Pa) MERV 9–12 N/A ≥ 50% a ≥ 80% ≥ 85% 0,15 a 0,25 in. w.g. (37 a 62 Pa) MERV 13 ≥ 50% ≥ 85% ≥ 90% 0,20 a 0,30 in. w.g. (50 a 75 Pa) MERV 14 ≥ 75% ≥ 90% ≥ 95%',
          },
        },
      ],
    },
    {
      id: 'quiz-2',
      tipo: 'quiz',
      enunciado: 'Segundo a Resolução ANVISA RE 09/2003, quais são os limites máximos permitidos para dióxido de carbono (CO₂) e contaminação fúngica em ambientes climatizados de uso coletivo?',
      opcoes: [
        {
          id: 'a',
          texto: 'CO₂ máximo de **1000 ppm** e fungos máximo de **750 UFC/m³**.',
          correta: true,
          feedback: [
            {
              quem: 'marta',
              emocao: 'aprovando',
              texto: 'Exato! Além de material particulado até 80 µg/m³, UR de **40% a 65%** e velocidade máxima de 0,25 m/s.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'CO2 máximo de 1000 ppm, fungos máximo de 750 UFC/m³, material particulado máximo de 80 µg/m³, UR de 40% a 65%, temperatura de 23°C a 26°C no verão, e velocidade máxima do ar de 0,25 m/s na zona de ocupação [59].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'CO2 máximo de 1000 ppm, fungos máximo de 750 UFC/m³, material particulado máximo de 80 µg/m³, UR de 40% a 65%, temperatura de 23°C a 26°C no verão, e velocidade máxima do ar de 0,25 m/s na zona de ocupação [59].',
          },
        },
        {
          id: 'b',
          texto: 'CO₂ sem limite normativo e umidade relativa acima de **90%**.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Errado! CO₂ acima de **1000 ppm** indica renovação de ar insuficiente e UR deve ficar entre **40% a 65%**!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'CO2 máximo de 1000 ppm, fungos máximo de 750 UFC/m³, material particulado máximo de 80 µg/m³, UR de 40% a 65%',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'CO2 máximo de 1000 ppm, fungos máximo de 750 UFC/m³, material particulado máximo de 80 µg/m³, UR de 40% a 65%',
          },
        },
      ],
    },

    // ── 7. FILOSOFIA ────────────────────────────────────────────────────────
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Filtro Caro Sem Vedação É Ilusão Sanitária',
      principio: 'Não existe filtro de alta eficiência em caixilho frouxo: vedação periférica e monitoramento de pressão diferencial protegem a saúde e a conta de energia.',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Quando forem assinar um PMOC, nunca olhem só a nota fiscal do filtro. Inspecionem o trilho, a gaxeta de espuma de célula fechada e o manômetro diferencial.',
        },
        {
          quem: 'marta',
          emocao: 'confiante',
          texto: 'E lembrem-se da conformidade legal: manter CO₂ até **1000 ppm** e fungos até **750 UFC/m³** conforme a ANVISA RE 09/2003 protege vidas!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'CO2 máximo de 1000 ppm, fungos máximo de 750 UFC/m³, material particulado máximo de 80 µg/m³, UR de 40% a 65%, temperatura de 23°C a 26°C no verão, e velocidade máxima do ar de 0,25 m/s na zona de ocupação [59].',
          },
        },
        {
          quem: 'juninho',
          emocao: 'animado',
          texto: 'Gaxeta colada sem fresta, manômetro ΔP calibrado e indicador cromático no carvão ativado!',
        },
      ],
    },

    // ── 8. FECHAMENTO ───────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte a Tabela 3.3.1 (Classificação MERV ASHRAE 52.2) e a Tabela 3.3.2 (Matriz de Seleção e Manutenção de Filtros por Ambiente).',
      alvo: {
        aba: 'tabelas',
      },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Compreender o ponto MPPS (**0,1 µm** a **0,3 µm**) onde filtros HEPA garantem no mínimo **99,97%** a **0,3 µm**.',
        'Eliminar frestas de bypass (**1 mm** derruba um MERV 14 de **95%** para **20%**) e evitar incrustação na serpentina (**1,2 mm** eleva o consumo em até **30%**).',
        'Trocar filtros particulados pelo ΔP real, monitorar carvão ativado por indicador cromático e cumprir os limites ANVISA RE 09/2003 (CO₂ ≤ **1000 ppm**, fungos ≤ **750 UFC/m³**).',
      ],
      proxima: 'Na Aula 3.4, fecharemos o Módulo 03 dominando a engenharia do sistema de condensado, intertravamento no borne R e cabos autoaquecedores!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'localizada entre 0,1 µm e 0,3 µm [6]. A eficiência de um filtro em 0,3 µm representa seu pior desempenho. Filtros HEPA verdadeiros (99,97% a 0,3 µm)',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Em termos práticos de eficiência, uma folga de apenas 1 mm rebaixa a capacidade global de retenção de um filtro MERV 14 (95% de eficácia) para o mesmo rendimento de um MERV 8 (20%)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Uma película de sujeira de apenas **1,2 mm (0,05 polegadas)** na serpentina do evaporador reduz o coeficiente de troca U, obrigando o compressor a operar por períodos muito longo e elevando a conta de energia em até **30%** [80].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'CO2 máximo de 1000 ppm, fungos máximo de 750 UFC/m³',
        },
      ],
    },
  ],
};
