// ═══════════════════════════════════════════════════════════════════════════
// CONVERSA — manutencao-hvac / m01-02
// Conformidade com o PMOC e Framework Regulatório Brasileiro
// Cenário: Bancada da Oficina (prontuário PMOC, Lei 13.589/2018, NBR 17037)
// ═══════════════════════════════════════════════════════════════════════════

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm01-02',
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
      texto: 'Na bancada da oficina, Marta espalha pastas de auditoria, um medidor de CO₂ portátil e uma cópia da ABNT NBR 17037 ao lado do notebook.',
    },
    {
      id: 'abertura-2',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'serio',
      texto: 'Pessoal, hoje um síndico me disse na lata: "Quero contrato baratinho, sem pagar engenheiro nem ART/TRT, porque PMOC é só burocracia."',
    },
    {
      id: 'abertura-3',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'Ótimo gancho, Marta! Quando o cliente diz isso, ele não sabe que sem Responsável Técnico ativo no CREA ou CFT, **100%** da culpa civil e criminal recai no CPF dele.',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'a ausência de um Responsável Técnico (CREA/CFT) ativo transfere 100% da culpa pessoal (negligência sanitária) diretamente para o CPF do gestor/síndico',
      },
    },

    // ── 2. CONFLITO E APOSTA ────────────────────────────────────────────────
    {
      id: 'conflito-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mas o prédio dele nem tem chiller central, Seu Simon! São só quatro splits comuns de **18.000 BTU/h** nas salas comerciais.',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Na realidade, a soma de quatro condicionadores split padrão de 18.000 BTU/h em um mesmo estabelecimento comercial ultrapassa o limite legal, tornando a empresa imediatamente sujeita à fiscalização e multas caso não possua o prontuário completo.',
      },
    },
    {
      id: 'conflito-2',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Aí é que mora a armadilha, Juninho! Pela Portaria GM/MS 3.523/98 e Lei Federal 13.589/2018, o gatilho é a soma térmica atingir **60.000 BTU/h** (**5 TR**).',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Este regulamento administrativo estabeleceu a obrigação legal do Plano de Manutenção, Operação e Controle (PMOC) para todos os sistemas de climatização com capacidade igual ou superior a 60.000 BTU/h (5 TR) em ambientes de uso coletivo [10].',
      },
    },
    {
      id: 'conflito-3',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Quatro splits de **18.000 BTU/h** somam mais que **60.000 BTU/h**. Sem dossiê PMOC assinado, a multa sanitária vai de **R$ 2.000** até **R$ 1.500.000**.',
      fonte: [
        {
          campo: 'infobox_campo',
          trecho: 'A obrigatoriedade legal do PMOC é disparada assim que a capacidade nominal térmica somada de climatização do edifício ou estabelecimento atinge 60.000 BTU/h.',
        },
        {
          campo: 'infobox_campo',
          trecho: 'a soma de quatro condicionadores split padrão de 18.000 BTU/h em um mesmo estabelecimento comercial ultrapassa o limite legal',
        },
        {
          campo: 'conteudo_html',
          trecho: 'As multas administrativas iniciam-se em R$ 2.000 para infrações leves [34], mas podem alcançar o limite máximo de R$ 1.500.000 para infrações graves ou gravíssimas em grandes corporações [35].',
        },
      ],
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Como devemos responder quando o síndico pede para tirar a taxa de ART/TRT do contrato para ficar mais barato?',
      opcoes: [
        {
          id: 'a',
          texto: 'Aceitar fazer sem ART/TRT e assinar apenas um recibo simples de limpeza.',
          reacao: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Jamais! Isso deixa o cliente e a nossa empresa descobertos diante da Vigilância Sanitária.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Mostrar que a ART/TRT é a blindagem jurídica que transfere 100% da responsabilidade técnica do CPF dele para a nossa engenharia.',
          ideal: true,
          fonte: {
            campo: 'infobox_campo',
            trecho: 'a ausência de um Responsável Técnico (CREA/CFT) ativo transfere 100% da culpa pessoal (negligência sanitária) diretamente para o CPF do gestor/síndico',
          },
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Exato! Quando o síndico entende que o CPF dele responde civil e criminalmente sem RT, ele assina na hora.',
            },
          ],
        },
      ],
    },

    // ── 3. CAUSO ────────────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Laudo Baratinho que Foi Anulado pelo Juiz',
      falas: [
        {
          quem: 'marta',
          emocao: 'serio',
          texto: 'Uma rede de clínicas contratou um laboratório sem acreditação para economizar na análise semestral do ar. Teve uma denúncia trabalhista e o perito pediu o certificado do laboratório.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Pela norma, as análises microbiológicas semestrais devem ser feitas obrigatoriamente por laboratórios acreditados na ABNT NBR ISO/IEC 17025 pelo INMETRO!',
        },
        {
          quem: 'marta',
          emocao: 'serio',
          texto: 'Resultado: o juiz declarou o laudo nulo em juízo e a clínica tomou multa pesada! Além disso, a ABNT NBR 17037 substituiu a antiga RE 09/2003 e atualizou os parâmetros de campo.',
        },
      ],
    },

    // ── 4. INSIGHT ──────────────────────────────────────────────────────────
    {
      id: 'insight-1',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'Olhem o que mudou na ABNT NBR 17037: a temperatura de conforto foi atualizada de **23°C a 26°C** para **21°C a 26°C**, e a umidade relativa passou de **40% a 65%** para **35% a 65%**.',
      fonte: [
        {
          campo: 'infobox_campo',
          trecho: 'Temperatura de conforto: Atualizada para a faixa de 21°C a 26°C (antiga era 23°C a 26°C no verão).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Faixa de temperatura de conforto entre 23°C e 26°C (no verão) e umidade de 40% a 65% [11].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A norma atualiza as faixas de temperatura operacional para 21°C a 26°C, e amplia ligeiramente a tolerância da umidade relativa para 35% a 65% [17].',
        },
      ],
    },
    {
      id: 'insight-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'A velocidade máxima do ar também caiu de **0,25 m/s** para **0,20 m/s** na zona de respiração, e a coleta microbiológica deve ocorrer entre **75 cm** e **120 cm** do piso.',
      fonte: [
        {
          campo: 'infobox_campo',
          trecho: 'Velocidade do ar: Limite máximo reduzido de 0,25 m/s para 0,20 m/s na zona de respiração.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Em conformidade com a NBR 17037, a coleta de amostras de ar deve ser realizada na zona de respiração dos ocupantes (entre 75 cm e 120 cm do piso)',
        },
      ],
    },
    {
      id: 'insight-3',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'confiante',
      texto: 'Já na renovação de ar (ASHRAE 62.1 e NBR 16401-3), em 1989 a ASHRAE subiu o mínimo de **5 CFM** para **15 CFM** por pessoa para combater os edifícios doentes.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A histórica edição de 1989 aumentou a taxa de ventilação mínima aceitável de 5 CFM (pés cúbicos por minuto) por pessoa para 15 CFM por pessoa, com o objetivo de combater a crise emergente de edifícios doentes [2].',
      },
    },
    {
      id: 'insight-4',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'pensativo',
      texto: 'Hoje combinamos vazão por pessoa e por área! Quando o CO₂ interno passa muito do nível basal externo (**400** a **420 ppm**) e se aproxima de **1000 ppm**, falta renovação mecânica.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Quando o CO2 interno sobe acima dos níveis basais externos (que flutuam entre 400 e 420 ppm), há uma indicação clara de que a geração de bioefluentes está superando a taxa de diluição mecânica [2].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Concentração de CO2 abaixo de 1000 ppm.',
        },
      ],
    },
    {
      id: 'insight-5',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Entendi! Então medir o dióxido de carbono na zona de respiração mostra na hora se o damper de ar externo está aberto e renovando o ambiente!',
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Pela NBR 16401, as propriedades físicas do "ar padrão" para cálculos de vazão de ar consideram pressão barométrica de 101,325 kPa, temperatura de 20°C e densidade de 1,2 kg/m³.',
      verdade: true,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A norma define as propriedades físicas do "ar padrão" (pressão barométrica de 101,325 kPa, temperatura de 20°C e densidade de 1,2 kg/m³), parâmetros necessários para os cálculos de vazão volumétrica de ar e taxas de renovação [24].',
      },
      explicacao: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Verdade! Em **101,325 kPa** e **20°C**, a densidade de referência de 1,2 kg/m³ é a base oficial dos memoriais de cálculo da NBR 16401.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'A norma define as propriedades físicas do "ar padrão" (pressão barométrica de 101,325 kPa, temperatura de 20°C e densidade de 1,2 kg/m³)',
          },
        },
      ],
    },

    // ── 5. PRÁTICA ──────────────────────────────────────────────────────────
    {
      id: 'pratica-1',
      tipo: 'calculadora',
      titulo: 'Cálculo de Vazão de Ar Externo (ASHRAE 62.1)',
      formula: 'V_total = V_pessoas (125 CFM) + V_area (322 CFM)',
      enunciado: 'Um escritório comercial de 500 m² com 25 ocupantes exige 125 CFM para diluir bioefluentes humanos (5 CFM/pessoa) mais 322 CFM para a área de piso. Qual é a vazão mínima total de ar externo?',
      unidade: 'CFM',
      respostaCorreta: 447,
      tolerancia: 1,
      leituras: [
        { rotulo: 'Parcela por Ocupantes (25 pessoas × 5 CFM)', valor: '125 CFM' },
        { rotulo: 'Parcela por Área (5.380 sq ft × 0,06 CFM)', valor: '322 CFM' },
      ],
      opcoesRapidas: [322, 400, 447, 760],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Exato! **125 CFM** dos ocupantes mais **322 CFM** da área fecham **447 CFM** (cerca de **760 m³/h**) de ar externo constante!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Um escritório de 500 metros quadrados (~5.380 pés quadrados) operando com uma densidade padrão de 25 ocupantes requereria 125 CFM de ar externo para diluir os bioefluentes humanos, mais 322 CFM para compensar as emissões de materiais da área, totalizando um requisito mínimo de base de 447 CFM (~760 m³/h) de ar externo constante.',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'didatico',
          texto: 'Some as duas parcelas: **125 CFM** das pessoas com **322 CFM** da área, totalizando **447 CFM**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'requereria 125 CFM de ar externo para diluir os bioefluentes humanos, mais 322 CFM para compensar as emissões de materiais da área, totalizando um requisito mínimo de base de 447 CFM (~760 m³/h) de ar externo constante.',
          },
        },
      ],
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Um escritório de 500 metros quadrados (~5.380 pés quadrados) operando com uma densidade padrão de 25 ocupantes requereria 125 CFM de ar externo para diluir os bioefluentes humanos, mais 322 CFM para compensar as emissões de materiais da área, totalizando um requisito mínimo de base de 447 CFM (~760 m³/h) de ar externo constante.',
      },
    },
    {
      id: 'pratica-2',
      tipo: 'inspecao',
      titulo: 'Auditoria de Dossiê PMOC Defensível em Juízo',
      enunciado: 'Marta está auditando a pasta de PMOC de um cliente. Selecione o ÚNICO item que cumpre rigorosamente os requisitos legais e normativos:',
      pontos: [
        {
          id: 'p1',
          rotulo: 'ART (CREA) ou TRT (CFT) paga e assinada, laudos ISO/IEC 17025 semestrais e coleta entre 75 cm e 120 cm do piso.',
          correta: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Em conformidade com a NBR 17037, a coleta de amostras de ar deve ser realizada na zona de respiração dos ocupantes (entre 75 cm e 120 cm do piso)',
          },
          feedback: [
            {
              quem: 'marta',
              emocao: 'aprovando',
              texto: 'Perfeito! ART/TRT ativa, laboratório acreditado ISO/IEC 17025 e amostragem na zona de respiração (**75 cm** a **120 cm** do piso) blindam o cliente.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Em conformidade com a NBR 17037, a coleta de amostras de ar deve ser realizada na zona de respiração dos ocupantes (entre 75 cm e 120 cm do piso)',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Coletar amostras de ar encostadas no forro de gesso, fora da zona de respiração dos ocupantes.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Errado! Pela NBR 17037, a coleta deve ser feita na zona de respiração dos ocupantes, entre **75 cm** e **120 cm** do piso.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Em conformidade com a NBR 17037, a coleta de amostras de ar deve ser realizada na zona de respiração dos ocupantes (entre 75 cm e 120 cm do piso)',
              },
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Emitir laudos microbiológicos por laboratório sem acreditação ISO/IEC 17025 para reduzir custos.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'serio',
              texto: 'Relatórios de laboratórios não acreditados na ABNT NBR ISO/IEC 17025 pelo INMETRO são nulos em juízo!',
            },
          ],
        },
        {
          id: 'p4',
          rotulo: 'Dispensar o PMOC porque o escritório tem apenas quatro splits de 18.000 BTU/h.',
          correta: false,
          fonte: {
            campo: 'infobox_campo',
            trecho: 'a soma de quatro condicionadores split padrão de 18.000 BTU/h em um mesmo estabelecimento comercial ultrapassa o limite legal',
          },
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Quatro aparelhos de **18.000 BTU/h** ultrapassam o limite de **60.000 BTU/h** (**5 TR**) da Lei 13.589/2018!',
              fonte: [
                {
                  campo: 'infobox_campo',
                  trecho: 'A obrigatoriedade legal do PMOC é disparada assim que a capacidade nominal térmica somada de climatização do edifício ou estabelecimento atinge 60.000 BTU/h. Muitos proprietários acreditam incorretamente que o PMOC só é exigido para equipamentos centrais de grande porte (chillers). Na realidade, a soma de quatro condicionadores split padrão de 18.000 BTU/h em um mesmo estabelecimento comercial ultrapassa o limite legal',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'capacidade igual ou superior a 60.000 BTU/h (5 TR) em ambientes de uso coletivo [10].',
                },
              ],
            },
          ],
        },
      ],
    },

    // ── 6. TESTE ────────────────────────────────────────────────────────────
    {
      id: 'pergunta-1',
      tipo: 'quiz',
      enunciado: 'Com a entrada em vigor da norma ABNT NBR 17037 em substituição à antiga RE 09/2003, quais passaram a ser os limites de temperatura de conforto, umidade relativa e velocidade máxima do ar?',
      opcoes: [
        {
          id: 'a',
          texto: 'Temperatura de **21°C a 26°C**, umidade relativa de **35% a 65%** e velocidade máxima de **0,20 m/s**.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Exato! A NBR 17037 ampliou a temperatura para **21°C a 26°C**, a umidade para **35% a 65%** e baixou a velocidade limite para **0,20 m/s**.',
              fonte: [
                {
                  campo: 'infobox_campo',
                  trecho: 'Temperatura de conforto: Atualizada para a faixa de 21°C a 26°C (antiga era 23°C a 26°C no verão). Velocidade do ar: Limite máximo reduzido de 0,25 m/s para 0,20 m/s na zona de respiração.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'A norma atualiza as faixas de temperatura operacional para 21°C a 26°C, e amplia ligeiramente a tolerância da umidade relativa para 35% a 65% [17].',
                },
              ],
            },
          ],
          fonte: [
            {
              campo: 'infobox_campo',
              trecho: 'Temperatura de conforto: Atualizada para a faixa de 21°C a 26°C (antiga era 23°C a 26°C no verão). Velocidade do ar: Limite máximo reduzido de 0,25 m/s para 0,20 m/s na zona de respiração.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'A norma atualiza as faixas de temperatura operacional para 21°C a 26°C, e amplia ligeiramente a tolerância da umidade relativa para 35% a 65% [17].',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Temperatura de **23°C a 26°C**, umidade de **40% a 65%** e velocidade máxima de **0,25 m/s**.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'didatico',
              texto: 'Esses eram os parâmetros antigos da RE 09/2003! A NBR 17037 atualizou para **21°C a 26°C**, **35% a 65%** e **0,20 m/s**.',
              fonte: [
                {
                  campo: 'infobox_campo',
                  trecho: 'Temperatura de conforto: Atualizada para a faixa de 21°C a 26°C (antiga era 23°C a 26°C no verão). Velocidade do ar: Limite máximo reduzido de 0,25 m/s para 0,20 m/s na zona de respiração.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'A norma atualiza as faixas de temperatura operacional para 21°C a 26°C, e amplia ligeiramente a tolerância da umidade relativa para 35% a 65% [17].',
                },
              ],
            },
          ],
          fonte: [
            {
              campo: 'infobox_campo',
              trecho: 'Temperatura de conforto: Atualizada para a faixa de 21°C a 26°C (antiga era 23°C a 26°C no verão). Velocidade do ar: Limite máximo reduzido de 0,25 m/s para 0,20 m/s na zona de respiração.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Faixa de temperatura de conforto entre 23°C e 26°C (no verão) e umidade de 40% a 65% [11].',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Temperatura fixa em **20°C** e umidade livre sem medição obrigatória.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: '**20°C** (com pressão de **101,325 kPa**) é a definição de ar padrão da NBR 16401, não a faixa de conforto da NBR 17037!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'A norma define as propriedades físicas do "ar padrão" (pressão barométrica de 101,325 kPa, temperatura de 20°C e densidade de 1,2 kg/m³)',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Definição do ar padrão a 20°C e densidade de 1,2 kg/m³.',
          },
        },
      ],
    },

    // ── 7. FILOSOFIA ────────────────────────────────────────────────────────
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'PMOC Não É Imposto: É Blindagem Civil, Trabalhista e Sanitária',
      principio: 'O cliente não compra papel; ele compra a transferência legal do risco sanitário do CPF dele para a engenharia que assina a ART/TRT.',
      falas: [
        {
          quem: 'marta',
          emocao: 'confiante',
          texto: 'Agora tenho o argumento perfeito pro síndico: sem ART/TRT, **100%** da culpa em uma denúncia de QAI vai direto para o CPF dele.',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'a ausência de um Responsável Técnico (CREA/CFT) ativo transfere 100% da culpa pessoal (negligência sanitária) diretamente para o CPF do gestor/síndico',
          },
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'E nós honramos essa assinatura entregando renovação de ar calculada pela NBR 16401-3 e laudos ISO/IEC 17025 impecáveis.',
        },
        {
          quem: 'juninho',
          emocao: 'animado',
          texto: 'Nunca mais deixo dono de loja achar que quatro splits de **18.000 BTU/h** passam batido pela lei!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'a soma de quatro condicionadores split padrão de 18.000 BTU/h em um mesmo estabelecimento comercial ultrapassa o limite legal',
          },
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Confira na aba **Tabelas & Parâmetros** a Tabela 1.2.1 comparando os limites regulatórios de QAI do Brasil (NBR 17037) com EUA, União Europeia e Cingapura.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Gatilho legal:** capacidade instalada somada de **60.000 BTU/h** (**5 TR**) exige PMOC com ART/TRT ativa (Lei 13.589/2018).',
        '**ABNT NBR 17037:** conforto de **21°C a 26°C**, umidade de **35% a 65%**, velocidade até **0,20 m/s** e coleta entre **75 cm** e **120 cm** do piso.',
        '**Blindagem jurídica:** laudos semestrais exclusivamente por laboratórios acreditados na ABNT NBR ISO/IEC 17025, evitando multas de **R$ 2.000** a **R$ 1.500.000**.',
      ],
      proxima: 'Na aula m01-03 vamos dominar os protocolos de segurança operacional: LOTO, arco elétrico, fluidos A2L e ácido fluorídrico.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Este regulamento administrativo estabeleceu a obrigação legal do Plano de Manutenção, Operação e Controle (PMOC) para todos os sistemas de climatização com capacidade igual ou superior a 60.000 BTU/h (5 TR) em ambientes de uso coletivo [10].',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Temperatura de conforto: Atualizada para a faixa de 21°C a 26°C (antiga era 23°C a 26°C no verão). Velocidade do ar: Limite máximo reduzido de 0,25 m/s para 0,20 m/s na zona de respiração.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A norma atualiza as faixas de temperatura operacional para 21°C a 26°C, e amplia ligeiramente a tolerância da umidade relativa para 35% a 65% [17].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Em conformidade com a NBR 17037, a coleta de amostras de ar deve ser realizada na zona de respiração dos ocupantes (entre 75 cm e 120 cm do piso)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'As multas administrativas iniciam-se em R$ 2.000 para infrações leves [34], mas podem alcançar o limite máximo de R$ 1.500.000 para infrações graves ou gravíssimas em grandes corporações [35].',
        },
      ],
    },
  ],
};
