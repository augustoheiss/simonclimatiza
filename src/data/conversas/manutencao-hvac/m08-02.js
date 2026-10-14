// Conversa: Auditoria Energética (m08-02)
// Cenário: Casa de Máquinas — Leis de Afinidade VFD (P ∝ N³), Limite Mínimo 35Hz/25Hz, kW/TR vs IPLV e Regra dos 10% IPMVP

const F_VFD_35HZ = {
  campo: 'infobox_campo',
  trecho: 'O gestor de facilidades tenta maximizar economias de energia ajustando a frequência mínima da bomba para 20Hz (33% da rotação) em dias amenos. A bomba entra em pane térmica e os selos mecânicos derretem por falta de fluxo de refrigeração." Como Resolver (Padrão Simon Climatização): Sempre limite a frequência mínima dos VFDs em bombas a 35Hz (60% da rotação) e ventiladores a 25Hz (40% da rotação)',
};

const F_MV_10PCT = {
  campo: 'infobox_campo',
  trecho: 'Propomos um projeto de eficiência energética com contrato de performance para chiller de 100 TR projetando economia de R$ 30.000 ao ano. Ao fim, o custo de contratação de analista credenciado IPMVP e calibração de simulações em software consumiu R$ 25.000, anulando 83% do ganho." Como Resolver (Padrão Simon Climatização): Aplique a regra áurea de orçamento de M&V: os custos de instrumentação e monitoramento nunca devem ultrapassar 10% da economia anualizada',
};

const F_AVAC_40_60 = {
  campo: 'conteudo_html',
  trecho: 'as operações de AVAC normalmente representam de 40% a 60% do consumo total de energia de edifícios comerciais',
};

const F_CONV_TR = {
  campo: 'conteudo_html',
  trecho: 'uma tonelada de refrigeração (TR ou ton, equivalente a 12.000 BTU/h ou 3,517 kW térmicos). Valores mais baixos denotam eficiência superior. Chillers centrífugos de mancal magnético refrigerados a água de alta eficiência podem alcançar valores de IPLV ≤ 0.500 kW/TR, enquanto chillers alternativos mais antigos refrigerados a ar podem exceder 1,2 kW/TR.',
};

const F_LEI_CUBICA_70 = {
  campo: 'conteudo_html',
  trecho: 'Considere uma bomba centrífuga de água gelada de 100 HP (que consome 79.36 kW de potência ativa de entrada, assumindo eficiência do motor de 94%) operando continuamente a uma frequência fixa de 60 Hz. &gt; Se for instalado um VFD e a velocidade da bomba for reduzida em apenas 30%, operando a 70% de rotação (42 Hz) em períodos de baixa carga térmica, a nova demanda elétrica ativa não será de 70% do consumo original. Ela seguirá a lei cúbica: &gt; &gt; P_2 = 79,36 kW imes (0,7)^3 = 79,36 kW imes 0,343 = 27,22 kW [51] &gt; &gt; Portanto, uma redução de 30% na velocidade resulta em uma redução de 65,7% no consumo de energia elétrica!',
};

const F_LEI_80PCT = {
  campo: 'conteudo_html',
  trecho: 'destacando o potencial de economia de energia (ex: a 80% da rotação, consome-se apenas 51,2% da potência nominal).',
};

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm08-02',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 10,
  beats: [
    {
      id: 'abertura-auditoria',
      tipo: 'fala',
      quem: 'narrador',
      texto: 'Diante do quadro de inversores de frequência (VFDs) das bombas de água gelada de 100 HP, Simon, Bia e Dona Marta analisam o registrador de grandezas elétricas com Juninho.',
      fonte: F_LEI_CUBICA_70,
    },
    {
      id: 'marta-destaca-peso-avac',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'serio',
      texto: 'Olhem o peso da nossa responsabilidade financeira: as operações de AVAC representam de 40% a 60% do consumo total de energia dos edifícios comerciais!',
      fonte: F_AVAC_40_60,
    },
    {
      id: 'juninho-acha-linear',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Mestre Simon, se a gente usar o inversor VFD para baixar a rotação dessa bomba em 20%, rodando a 80% da rotação nominal, a potência elétrica cai para 80% também?',
      fonte: F_LEI_80PCT,
    },
    {
      id: 'simon-revela-lei-cubica',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'empolgado',
      texto: 'Muito melhor que isso, Juninho! Em bombas centrífugas e ventiladores vale a 3ª Lei de Afinidade: a potência varia com o cubo da rotação! A 80% da rotação, consome-se apenas 51,2% da potência!',
      fonte: F_LEI_80PCT,
    },
    {
      id: 'bia-mostra-exemplo-70pct',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'empolgado',
      texto: 'E se reduzirmos a velocidade da bomba de 100 HP (79,36 kW) em 30%, operando a 70% da rotação, a demanda cai para 27,22 kW — uma redução de 65,7% no consumo de energia elétrica!',
      fonte: F_LEI_CUBICA_70,
    },
    {
      id: 'calculadora-afinidade-vfd',
      tipo: 'calculadora',
      titulo: '3ª Lei de Afinidade em Bombas e Ventiladores (P₂ = P₁ × (N₂/N₁)³)',
      formula: 'P_relativa (%) = (0,80)³ × 100 = 51,2%',
      enunciado: 'Quando um inversor de frequência (VFD) reduz a velocidade de um ventilador ou bomba centrífuga para 80% da rotação nominal, qual porcentagem da potência nominal passa a ser consumida?',
      unidade: '%',
      respostaCorreta: 51.2,
      tolerancia: 0.5,
      leituras: [
        { rotulo: 'Rotação Ajustada no VFD', valor: '80% da rotação' },
        { rotulo: 'Demanda a 70% (Bomba 100 HP)', valor: '27,22 kW (redução de 65,7%)' },
      ],
      opcoesRapidas: [34.3, 51.2, 65.7, 80.0],
      fonte: [F_LEI_80PCT, F_LEI_CUBICA_70],
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'aprovando',
          texto: 'Matemática cúbica na veia! 0,8 × 0,8 × 0,8 = 0,512, ou seja, a 80% da rotação o motor consome apenas 51,2% da potência nominal (quase metade da energia economizada)!',
          fonte: F_LEI_80PCT,
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'serio',
          texto: 'Lembre-se de elevar 0,80 ao cubo (0,80 × 0,80 × 0,80 = 0,512), o que corresponde a 51,2% da potência nominal.',
          fonte: F_LEI_80PCT,
        },
      ],
    },
    {
      id: 'causo-bomba-20hz',
      tipo: 'causo',
      titulo: 'O Gestor "Mão de Vaca" que Derreteu os Selos a 20Hz',
      fonte: F_VFD_35HZ,
      falas: [
        {
          quem: 'simon',
          emocao: 'rindo',
          texto: 'Num prédio comercial, o gestor de facilidades se empolgou tanto com a Lei Cúbica que resolveu ajustar a frequência mínima da bomba para 20Hz (33% da rotação) nos dias amenos!',
          fonte: F_VFD_35HZ,
        },
        {
          quem: 'juninho',
          emocao: 'assustado',
          texto: 'A conta de luz zerou ou a bomba pegou fogo, mestre?',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'A bomba entrou em pane térmica e os selos mecânicos derreteram por falta de fluxo de refrigeração, além de derrubar a troca térmica no evaporador por fluxo laminar!',
          fonte: F_VFD_35HZ,
        },
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'Por isso no Padrão Simon nós travamos nos parâmetros do VFD a frequência mínima de bombas em 35Hz (60% da rotação) e de ventiladores em 25Hz (40% da rotação)!',
          fonte: F_VFD_35HZ,
        },
      ],
    },
    {
      id: 'mito-verdade-vfd-20hz',
      tipo: 'mitoVerdade',
      afirmacao: 'Para maximizar a economia de energia em bombas de água gelada com VFD, deve-se configurar a frequência mínima para 20Hz (33% da rotação) ou menos.',
      verdade: false,
      fonte: F_VFD_35HZ,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Mito destrutivo! Rodar bombas a 20Hz (33% da rotação) derrete os selos mecânicos por falta de circulação e mata a pressão diferencial do sistema.',
          fonte: F_VFD_35HZ,
        },
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'Trave sempre o limite inferior do VFD em 35Hz (60% da rotação) para bombas e 25Hz (40% da rotação) para ventiladores.',
          fonte: F_VFD_35HZ,
        },
      ],
    },
    {
      id: 'referencia-metricas-tr',
      tipo: 'referencia',
      texto: 'Revise as conversões fundamentais: 1 TR equivale a 12.000 BTU/h ou 3,517 kW térmicos; chillers magnéticos atingem IPLV ≤ 0.500 kW/TR contra > 1,2 kW/TR em alternativos antigos.',
      alvo: { aba: 'conteudo' },
      fonte: F_CONV_TR,
    },
    {
      id: 'marta-alerta-ipmvp-10pct',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'alerta',
      texto: 'E muita atenção nos contratos de performance energética (IPMVP): se o projeto economiza R$ 30.000 ao ano, você não pode gastar R$ 25.000 (83% do ganho) só medindo a economia!',
      fonte: F_MV_10PCT,
    },
    {
      id: 'simon-confirma-regra-10pct',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'aprovando',
      texto: 'Bem lembrado, Dona Marta! A regra áurea de Medição e Verificação (M&V) determina que os custos de instrumentação e monitoramento nunca devem ultrapassar 10% da economia anualizada.',
      fonte: F_MV_10PCT,
    },
    {
      id: 'escolha-retrofit-chiller',
      tipo: 'escolha',
      pergunta: 'Ao avaliar o retrofit de um chiller alternativo antigo refrigerado a ar que consome mais de 1,2 kW/TR por um chiller centrífugo de mancal magnético refrigerado a água, qual meta de eficiência IPLV e orçamento de M&V você aplica?',
      fonte: [F_CONV_TR, F_MV_10PCT],
      opcoes: [
        {
          id: 'a',
          texto: 'Chiller magnético com IPLV ≤ 0.500 kW/TR e custo de M&V limitado a no máximo 10% da economia anualizada.',
          ideal: true,
          fonte: [F_CONV_TR, F_MV_10PCT],
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Projeto nota dez! Sair de > 1,2 kW/TR para IPLV ≤ 0.500 kW/TR corta o consumo mais que pela metade, mantendo o M&V abaixo de 10%.',
              fonte: [F_CONV_TR, F_MV_10PCT],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Gastar 83% da economia projetada contratando simulações complexas para um split residencial.',
          fonte: F_MV_10PCT,
          reacao: [
            {
              quem: 'marta',
              emocao: 'irritado',
              texto: 'Jamais! Gastar R$ 25.000 para medir R$ 30.000 de economia destrói a viabilidade financeira do projeto.',
              fonte: F_MV_10PCT,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Manter o chiller antigo consumindo mais de 1,2 kW/TR e travar a bomba em 20Hz.',
          fonte: [F_CONV_TR, F_VFD_35HZ],
          reacao: [
            {
              quem: 'bia',
              emocao: 'serio',
              texto: 'Além de continuar desperdiçando energia no compressor, travar a bomba em 20Hz vai queimar os selos mecânicos!',
              fonte: [F_CONV_TR, F_VFD_35HZ],
            },
          ],
        },
      ],
    },
    {
      id: 'inspecao-auditoria-energia',
      tipo: 'inspecao',
      titulo: 'Auditoria de Eficiência Energética e Parametrização VFD',
      enunciado: 'Avalie quatro configurações encontradas em uma auditoria energética predial. Qual delas viola as boas práticas de engenharia?',
      fonte: [F_VFD_35HZ, F_LEI_CUBICA_70, F_CONV_TR, F_MV_10PCT],
      pontos: [
        {
          id: 'a',
          rotulo: 'Bomba de água gelada de 100 HP modulando a 70% de rotação e reduzindo o consumo de 79,36 kW para 27,22 kW',
          fonte: F_LEI_CUBICA_70,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Excelente aplicação da lei cúbica! Reduzir 30% da velocidade economiza 65,7% de energia elétrica.',
              fonte: F_LEI_CUBICA_70,
            },
          ],
        },
        {
          id: 'b',
          rotulo: 'Frequência mínima do VFD da bomba ajustada para 20Hz (33% da rotação) em dias frios',
          correta: true,
          fonte: F_VFD_35HZ,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Erro crítico! O limite mínimo em bombas deve ser travado em 35Hz (60% da rotação) para proteger os selos mecânicos e a transferência térmica.',
              fonte: F_VFD_35HZ,
            },
          ],
        },
        {
          id: 'c',
          rotulo: 'Chiller centrífugo de mancal magnético operando com eficiência parcial IPLV ≤ 0.500 kW/TR',
          fonte: F_CONV_TR,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Alta performance! Cada TR (3,517 kW térmicos) sendo produzida com metade de um quilowatt elétrico.',
              fonte: F_CONV_TR,
            },
          ],
        },
        {
          id: 'd',
          rotulo: 'Orçamento de medição e verificação (M&V) mantido abaixo de 10% da economia anualizada',
          fonte: F_MV_10PCT,
          feedback: [
            {
              quem: 'marta',
              emocao: 'aprovando',
              texto: 'Governança financeira perfeita! Preserva 90% ou mais do ganho energético para pagar o investimento.',
              fonte: F_MV_10PCT,
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-natureza-cubica',
      tipo: 'filosofia',
      titulo: 'A Natureza Premia a Moderação em Escala Cúbica',
      principio: 'Pela 3ª Lei de Afinidade, tirar 20% a 30% do exagero de velocidade numa turbomáquina economiza de metade a dois terços da energia elétrica, desde que respeitado o piso de 35Hz.',
      fonte: [F_LEI_80PCT, F_LEI_CUBICA_70, F_VFD_35HZ],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Engenheiro que domina a lei cúbica e sabe converter 1 TR (12.000 BTU/h ou 3,517 kW) em kW/TR não vende apenas mão de obra: vende lucro líquido na conta de energia!',
          fonte: F_CONV_TR,
        },
      ],
    },
    {
      id: 'quiz-conversao-tr-bomba',
      tipo: 'quiz',
      enunciado: 'Quanto vale 1 Tonelada de Refrigeração (TR) em unidades térmicas e qual é a redução percentual de consumo elétrico quando uma bomba centrífuga reduz sua velocidade em 30% (operando a 70% da rotação)?',
      fonte: [F_CONV_TR, F_LEI_CUBICA_70],
      opcoes: [
        {
          id: 'a',
          texto: '1 TR equivale a 12.000 BTU/h (ou 3,517 kW térmicos), e rodar a bomba a 70% da rotação gera redução de 65,7% no consumo elétrico.',
          correta: true,
          fonte: [F_CONV_TR, F_LEI_CUBICA_70],
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Exato! 0,7 ao cubo é 0,343 (consumindo 34,3% da potência original, o que significa 65,7% de economia de energia)!',
              fonte: F_LEI_CUBICA_70,
            },
          ],
        },
        {
          id: 'b',
          texto: '1 TR equivale a 100 HP, e rodar a 70% da rotação economiza apenas 10% de energia.',
          fonte: [F_LEI_CUBICA_70, F_MV_10PCT],
          feedback: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: 'Não confunda potência mecânica de eixo (100 HP) com tonelada de refrigeração (12.000 BTU/h ou 3,517 kW térmicos)!',
              fonte: [F_CONV_TR, F_LEI_CUBICA_70],
            },
          ],
        },
        {
          id: 'c',
          texto: 'A potência elétrica sobe ao reduzir a frequência do VFD para 70%.',
          fonte: F_LEI_CUBICA_70,
          feedback: [
            {
              quem: 'bia',
              emocao: 'serio',
              texto: 'Pela lei cúbica das turbomáquinas, reduzir a rotação reduz drasticamente a potência absorvida no eixo.',
              fonte: F_LEI_CUBICA_70,
            },
          ],
        },
      ],
    },
    {
      id: 'juninho-trava-vfd-35hz',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'aprovando',
      texto: 'Já conferi os parâmetros de todos os inversores aqui do painel: bombas travadas no piso de 35Hz e ventiladores em 25Hz!',
      fonte: F_VFD_35HZ,
    },
    {
      id: 'bia-celebra-ipmvp',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'empolgado',
      texto: 'E nosso relatório de M&V ficou enxuto e certeiro, custando menos de 10% da economia anualizada da planta!',
      fonte: F_MV_10PCT,
    },
    {
      id: 'marta-chama-aula-final',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'empolgado',
      texto: 'Agora chegou a minha hora favorita! Vamos voltar para a mesa porque na última aula do curso eu vou ensinar vocês a precificar Contratos PMOC com Margem Bruta real!',
    },
    {
      id: 'simon-anima-equipe-final',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'aprovando',
      texto: 'Peguem o caderno e a calculadora, porque a aula de negócios da Dona Marta é o que transforma excelência técnica em patrimônio sólido!',
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'O AVAC consome de 40% a 60% da energia predial; 1 TR equivale a 12.000 BTU/h ou 3,517 kW térmicos (chillers magnéticos atingem IPLV ≤ 0.500 kW/TR).',
        'Pela 3ª Lei de Afinidade (P ∝ N³), a 80% da rotação consome-se 51,2% da potência e a 70% economiza-se 65,7% (de 79,36 kW para 27,22 kW).',
        'Trave a frequência mínima de VFDs em 35Hz (60%) para bombas e 25Hz (40%) para ventiladores, e limite o custo de M&V (IPMVP) a 10% da economia anual.',
      ],
      proxima: 'Na última aula do curso, Dona Marta assume o comando para ensinar Contratos PMOC e Receita Recorrente: Margem Bruta vs Markup, diversificação de carteira e QBR!',
      fonte: [F_AVAC_40_60, F_CONV_TR, F_LEI_80PCT, F_LEI_CUBICA_70, F_VFD_35HZ, F_MV_10PCT],
    },
  ],
};
