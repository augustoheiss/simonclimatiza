// Conversa: Termografia Infravermelha (m07-02)
// Cenário: Casa de Máquinas — Emissividade, Escala NETA 1-4, Carga Mínima 40%, Filtro Secador (ΔT > 1,7°C) e Rolamentos

const F_ALUM_65 = {
  campo: 'infobox_campo',
  trecho: 'Devido à baixíssima emissividade desses metais (ε ≈ 0,05), a câmera infravermelha exibe apenas os reflexos térmicos do ambiente circundante. Se um condensador estiver operando a 65°C sob o sol, a varredura bruta de aletas de alumínio polido pode registrar apenas 28°C (refletindo o céu frio)',
};

const F_CARGA_40 = {
  campo: 'infobox_campo',
  trecho: 'Não realize inspeções térmicas de disjuntores ou contatores de compressores operando abaixo de 40% da carga elétrica nominal.',
};

const F_COBRE_TAB = {
  campo: 'tabelas_html',
  trecho: 'Cobre Polido (Novo) 0,03 a 0,07 Extremamente Alta Crítico: Espelho térmico. Exige aplicação de fita isolante preta (ε = 0,95) para leitura válida.',
};

const F_PRIO_NETA = {
  campo: 'tabelas_html',
  trecho: 'Prioridade 1 — Menor (Minor) 1°C a 3°C 1°C a 10°C Registrar no CMMS; monitorar tendência térmica; reapertar conexões na preventiva planejada. Próxima PMOC / Trimestral Prioridade 2 — Intermediária (Intermediate) 4°C a 15°C 11°C a 20°C Folga mecânica ou oxidação moderada. Planejar reaperto com torque de projeto e usar composto condutivo. Até 30 a 90 dias Prioridade 3 — Séria (Serious) — 21°C a 40°C Deterioração severa. Intervenção corretiva rápida. Tentar reduzir a carga operacional temporariamente. Primeira oportunidade / 72 horas Prioridade 4 — Crítica (Critical) &gt; 15°C &gt; 40°C Desenergizar painel de forma segura (LOTO) imediatamente.',
};

const F_SECADOR_17 = {
  campo: 'tabelas_html',
  trecho: 'Filtro Secador Obstruído Salto térmico repentino (ΔT &gt; 1,7°C / 3°F) da entrada para a saída do secador.',
};

const F_L1_85_35 = {
  campo: 'conteudo_html',
  trecho: 'O condutor que termina no terminal L1 brilha em branco intenso, registrando uma temperatura localizada de 85°C. Os terminais L2 e L3 adjacentes apresentam tonalidade roxa escura, registrando 35°C. &gt; &gt; Isso indica um Δ T (vs. componente similar) de 50°C (85°C - 35°C), enquadrando a anomalia na faixa de Prioridade 4 (Crítica).',
};

const F_ROL_20C = {
  campo: 'conteudo_html',
  trecho: 'Como um padrão de diagnóstico de linha de base, a temperatura externa do alojamento do rolamento deve operar tipicamente de 3°C a 5°C (5°F a 10°F) mais quente do que a carcaça do motor. Se uma varredura térmica revelar que o rolamento está operando a 20°C (68°F) ou mais acima de sua linha de base estabelecida, isso constitui uma falha grave e acionável.',
};

const F_ANGULO_90 = {
  campo: 'conteudo_html',
  trecho: 'Se o termografista estiver posicionado em um ângulo perpendicular direto de 90° em relação ao alvo, a câmera poderá refletir o calor do corpo do próprio operador ou o calor do próprio núcleo do sensor da câmera (conhecido como efeito Narciso), criando um ponto quente falso. A boa prática dita visualizar alvos reflexivos a um ângulo ligeiramente inclinado de 5° a 30° em relação ao eixo perpendicular',
};

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm07-02',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 10,
  beats: [
    {
      id: 'abertura-termografia',
      tipo: 'fala',
      quem: 'narrador',
      texto: 'Casa de máquinas principal. Bia e Simon realizam a rota trimestral de termografia infravermelha nos quadros de força e linhas frigoríficas enquanto Juninho acompanha o termograma.',
    },
    {
      id: 'juninho-quer-medir-vazio',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'empolgado',
      texto: 'Bia, o Chiller acabou de entrar em rampa mínima operando abaixo de 40% da carga! Vou aproveitar pra bater a foto térmica dos contatores dele agora mesmo!',
      fonte: F_CARGA_40,
    },
    {
      id: 'bia-bloqueia-abaixo-40pct',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Nem perca tempo, Juninho! Regra de ouro: nunca realize inspeções térmicas em disjuntores ou contatores operando abaixo de 40% da carga elétrica nominal.',
      fonte: F_CARGA_40,
    },
    {
      id: 'simon-explica-reflexo-ceu',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'pensativo',
      texto: 'E cuidado também lá fora no condensador! Aletas de alumínio polido têm emissividade perto de 0,05: o condensador pode estar fervendo a 65°C e a câmera mostrar 28°C refletindo o céu frio!',
      fonte: F_ALUM_65,
    },
    {
      id: 'causo-efeito-narciso',
      tipo: 'causo',
      titulo: 'O Efeito Narciso e o Falso Ponto Quente a 90°',
      fonte: [F_ANGULO_90, F_COBRE_TAB],
      falas: [
        {
          quem: 'simon',
          emocao: 'rindo',
          texto: 'Teve um inspetor novato que parou bem de frente, num ângulo reto de 90°, diante de uma tampa metálica reflexiva e gritou: "Achei um ponto quente redondo bem no meio do painel!"',
          fonte: F_ANGULO_90,
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'Era um disjuntor pegando fogo atrás da chapa, mestre?',
        },
        {
          quem: 'simon',
          emocao: 'rindo',
          texto: 'Era a careca dele mesmo refletida! A 90° perpendicular, superfícies reflexivas devolvem o calor do próprio operador ou da lente — é o famoso efeito Narciso!',
          fonte: F_ANGULO_90,
        },
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'Por isso sempre inspecionamos com ângulo inclinado de 5° a 30° em relação ao eixo perpendicular e usamos fita preta (ε = 0,95) em barramentos de cobre polido.',
          fonte: [F_ANGULO_90, F_COBRE_TAB],
        },
      ],
    },
    {
      id: 'referencia-tabela-neta',
      tipo: 'referencia',
      texto: 'Consulte na aba de tabelas a escala de severidade NETA (Prioridades 1 a 4) e as assinaturas frigoríficas como Filtro Secador Obstruído (ΔT > 1,7°C / 3°F).',
      alvo: { aba: 'tabelas' },
      fonte: [F_PRIO_NETA, F_SECADOR_17],
    },
    {
      id: 'juninho-olha-l1-brilhando',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'assustado',
      texto: 'Mestre, olha esse contator em carga plena! O terminal L1 está brilhando em branco intenso a 85°C, enquanto L2 e L3 estão roxos a 35°C!',
      fonte: F_L1_85_35,
    },
    {
      id: 'bia-pede-calculo-neta',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Calcula o ΔT entre as fases agora mesmo, Juninho, para enquadrarmos na tabela NETA!',
      fonte: [F_L1_85_35, F_PRIO_NETA],
    },
    {
      id: 'calculadora-delta-t-fases',
      tipo: 'calculadora',
      titulo: 'Cálculo de ΔT Inter-Fases e Classificação NETA',
      formula: 'ΔT = T_ponto_quente (L1) − T_referência (L2/L3)',
      enunciado: 'No termograma de um contator sob carga, o terminal L1 brilha em branco a 85°C, enquanto os terminais adjacentes L2 e L3 operam a 35°C. Qual é o ΔT entre fases similares?',
      unidade: '°C',
      respostaCorreta: 50,
      tolerancia: 0.5,
      leituras: [
        { rotulo: 'Temperatura Terminal L1', valor: '85°C' },
        { rotulo: 'Temperatura Terminais L2 e L3', valor: '35°C' },
      ],
      opcoesRapidas: [15, 35, 50, 85],
      fonte: [F_L1_85_35, F_PRIO_NETA],
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'aprovando',
          texto: 'Exato! 85°C menos 35°C resulta num ΔT de 50°C entre fases similares (muito acima de 15°C), enquadrando a falha na Prioridade 4 — Crítica (LOTO imediato)!',
          fonte: [F_L1_85_35, F_PRIO_NETA],
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'serio',
          texto: 'Subtraia a temperatura das fases saudáveis (35°C) da temperatura do terminal superaquecido L1 (85°C): 85°C - 35°C = 50°C.',
          fonte: F_L1_85_35,
        },
      ],
    },
    {
      id: 'mito-verdade-carga-baixa-ir',
      tipo: 'mitoVerdade',
      afirmacao: 'Uma inspeção termográfica de quadro elétrico realizada com o compressor operando abaixo de 40% da carga elétrica nominal já é suficiente para descartar qualquer mau contato nos bornes.',
      verdade: false,
      fonte: F_CARGA_40,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'serio',
          texto: 'Mito perigoso! Abaixo de 40% da carga elétrica nominal, a dissipação térmica por efeito Joule é muito baixa e esconde conexões frouxas.',
          fonte: F_CARGA_40,
        },
        {
          quem: 'simon',
          emocao: 'aprovando',
          texto: 'Só valide laudo termográfico de potência quando o circuito estiver operando com pelo menos 40% da carga nominal.',
          fonte: F_CARGA_40,
        },
      ],
    },
    {
      id: 'marta-pergunta-circuito-frigorifico',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'curioso',
      texto: 'E além dos quadros elétricos, Simon, a câmera termográfica enxerga entupimento dentro da tubulação de gás refrigerante?',
    },
    {
      id: 'simon-explica-filtro-secador',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'empolgado',
      texto: 'Enxerga na hora, Dona Marta! Se o filtro secador da linha de líquido estiver saturado, ele estrangula o fluido e gera um salto térmico repentino: um ΔT maior que 1,7°C (3°F) entre entrada e saída!',
      fonte: F_SECADOR_17,
    },
    {
      id: 'escolha-filtro-secador-ir',
      tipo: 'escolha',
      pergunta: 'Ao apontar a câmera termográfica para a linha de líquido, você observa que a saída do filtro secador está visivelmente mais fria que a entrada, com ΔT acima de 1,7°C (3°F). Qual é o diagnóstico?',
      fonte: F_SECADOR_17,
      opcoes: [
        {
          id: 'a',
          texto: 'Operação normal, pois todo filtro secador funciona como válvula de expansão principal.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: 'Filtro secador não é dispositivo de expansão! Se ele está expandindo líquido e esfriando na saída, está entupido!',
              fonte: F_SECADOR_17,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Filtro secador obstruído gerando queda de pressão e pré-expansão (flash gas), exigindo substituição.',
          ideal: true,
          fonte: F_SECADOR_17,
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Diagnóstico certeiro! Qualquer ΔT > 1,7°C (3°F) através do filtro secador denuncia restrição interna severa.',
              fonte: F_SECADOR_17,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Excesso de óleo lubrificante no cárter do compressor.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'serio',
              texto: 'Nível de óleo no cárter não causa queda de temperatura localizada entre a entrada e a saída do filtro secador.',
            },
          ],
        },
      ],
    },
    {
      id: 'inspecao-termografica-m0702',
      tipo: 'inspecao',
      titulo: 'Auditoria de Termogramas: Elétrica, Mecânica e Frigorífica',
      enunciado: 'Avalie quatro leituras radiométricas coletadas na planta. Qual delas encontra-se saudável e dentro da linha de base normal?',
      fonte: [F_ROL_20C, F_L1_85_35, F_SECADOR_17, F_ALUM_65],
      pontos: [
        {
          id: 'a',
          rotulo: 'Alojamento externo do rolamento operando de 3°C a 5°C (5°F a 10°F) acima da carcaça do motor',
          correta: true,
          fonte: F_ROL_20C,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Exato! Essa é a linha de base saudável de um rolamento. Só vira falha grave se subir 20°C (68°F) ou mais acima da base!',
              fonte: F_ROL_20C,
            },
          ],
        },
        {
          id: 'b',
          rotulo: 'Terminal elétrico L1 a 85°C contra 35°C nas fases L2 e L3 (ΔT de 50°C — Prioridade 4 Crítica)',
          fonte: F_L1_85_35,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Emergência crítica! Exige bloqueio LOTO imediato para evitar incêndio ou colapso do borne.',
              fonte: [F_L1_85_35, F_PRIO_NETA],
            },
          ],
        },
        {
          id: 'c',
          rotulo: 'Salto térmico repentino (ΔT > 1,7°C / 3°F) entre a entrada e a saída do filtro secador',
          fonte: F_SECADOR_17,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Anomalia frigorífica! Indica filtro secador obstruído causando flash gas na linha de líquido.',
              fonte: F_SECADOR_17,
            },
          ],
        },
        {
          id: 'd',
          rotulo: 'Rolamento do soprador operando 20°C (68°F) acima da sua linha de base histórica',
          fonte: F_ROL_20C,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Falha mecânica grave e acionável! Exige substituição planejada antes do travamento catastrófico do eixo.',
              fonte: F_ROL_20C,
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-camera-rad',
      tipo: 'filosofia',
      titulo: 'A Câmera Não Vê Temperatura; Vê Radiação',
      principio: 'Sem ajustar a emissividade (ε = 0,95 na fita preta vs 0,05 no metal nu) e o ângulo de visada (5° a 30°), o termograma é apenas uma pintura colorida enganosa.',
      fonte: [F_ALUM_65, F_COBRE_TAB, F_ANGULO_90],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'E quando encontrarem uma anomalia, registrem tudo no CMMS para acompanhar a tendência térmica antes que uma Prioridade 1 vire uma Prioridade 4!',
          fonte: F_PRIO_NETA,
        },
      ],
    },
    {
      id: 'quiz-rolamento-termografia',
      tipo: 'quiz',
      enunciado: 'No monitoramento termográfico de mancais de motores e ventiladores, qual é o diferencial térmico normal de linha de base do alojamento do rolamento e a partir de quanto caracteriza falha grave?',
      fonte: F_ROL_20C,
      opcoes: [
        {
          id: 'a',
          texto: 'Linha de base normal de 3°C a 5°C (5°F a 10°F) mais quente que a carcaça; falha grave se atingir 20°C (68°F) ou mais acima da base.',
          correta: true,
          fonte: F_ROL_20C,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Precisão cirúrgica! Identificar esse aquecimento no início permite trocar o rolamento de forma planejada antes de fundir o eixo.',
              fonte: F_ROL_20C,
            },
          ],
        },
        {
          id: 'b',
          texto: 'O rolamento deve operar sempre a 85°C acima da carcaça do motor elétrico.',
          fonte: F_L1_85_35,
          feedback: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: 'A essa temperatura a graxa já carbonizou e a gaiola do rolamento está prestes a colapsar!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Deve-se medir o rolamento sempre a 90° perpendiculares em superfície de cobre polido sem fita.',
          fonte: [F_ANGULO_90, F_COBRE_TAB],
          feedback: [
            {
              quem: 'bia',
              emocao: 'serio',
              texto: 'Medir a 90° em metal polido gera efeito Narciso e erro grave de emissividade (0,03 a 0,07).',
              fonte: [F_ANGULO_90, F_COBRE_TAB],
            },
          ],
        },
      ],
    },
    {
      id: 'juninho-cola-fita-barramento',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'aprovando',
      texto: 'Já deixei um rolo de fita isolante preta (ε = 0,95) na maleta da câmera para nunca mais cair no espelho térmico do cobre polido!',
      fonte: F_COBRE_TAB,
    },
    {
      id: 'bia-registra-prioridades-cmms',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'aprovando',
      texto: 'E todas as anomalias de Prioridade 1 e Prioridade 2 já vão direto para a programação trimestral e de 30 a 90 dias no nosso sistema!',
      fonte: F_PRIO_NETA,
    },
    {
      id: 'marta-pede-cmms',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'empolgado',
      texto: 'Simon, já temos vibração e termografia na ponta da língua! Mas como a gente organiza todas essas ordens de serviço, peças e QR Codes sem se perder em papel?',
    },
    {
      id: 'simon-convida-padaria-cmms',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'aprovando',
      texto: 'Essa conversa merece um café reforçado na padaria amanhã cedo, Dona Marta! Vamos mergulhar no Gerenciamento Digital de Manutenção com CMMS!',
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Exija no mínimo 40% da carga nominal na inspeção elétrica, incline a visada de 5° a 30° e aplique fita preta (ε = 0,95) em metais polidos (ε ≈ 0,05).',
        'Classifique anomalias pela escala NETA (ex.: L1 a 85°C vs L2/L3 a 35°C gera ΔT de 50°C = Prioridade 4 Crítica, exigindo LOTO imediato).',
        'Na linha frigorífica, ΔT > 1,7°C (3°F) denuncia filtro secador obstruído; em mancais, subida ≥ 20°C (68°F) sobre a base (3°C a 5°C) exige reparo.',
      ],
      proxima: 'Na próxima aula, tomamos café na padaria para dominar o CMMS: hierarquia de ativos, indicadores MTBF/MTTR/PMC/FTFR e estoque MRO!',
      fonte: [F_CARGA_40, F_ANGULO_90, F_COBRE_TAB, F_ALUM_65, F_L1_85_35, F_PRIO_NETA, F_SECADOR_17, F_ROL_20C],
    },
  ],
};
