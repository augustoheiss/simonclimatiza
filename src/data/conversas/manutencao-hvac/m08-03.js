// Conversa: Contratos PMOC e Receita Recorrente (m08-03)
// Cenário: Resenha Pós-Obra — Margem Bruta (55% a 60%) vs Markup, Regra dos 30% MRR, Retorno < 2% e Receita Diferida

const F_RETORNO_2PCT = {
  campo: 'infobox_campo',
  trecho: 'Se o índice de retornos por serviço mal executado ultrapassar 2% do total de chamados, a equipe técnica passa por treinamento de reciclagem compulsório',
};

const F_CONC_30PCT = {
  campo: 'infobox_campo',
  trecho: 'A carteira recorrente de serviços comerciais depende em 45% de uma única construtora ou administradora predial. A perda deste contrato por quebra financeira ou guerra de preços insolúvel compromete o capital de giro operacional básico." Como Resolver (Padrão Simon Climatização): Estabeleça a regra de diversificação: nenhuma conta comercial individual deve representar mais do que 30% da receita recorrente mensal (MRR).',
};

const F_TAB_DIV045 = {
  campo: 'tabelas_html',
  trecho: 'Divisão do Custo pelo fator de margem meta de 55% (0.45). 500 div (1 - 0,55) = 1.111 USD',
};

const F_PRED_70_50 = {
  campo: 'conteudo_html',
  trecho: 'a transição de um portfólio predial de um modelo de manutenção reativo para um preditivo gera 70% menos falhas catastróficas, estende a vida útil operacional dos equipamentos mecânicos em 20% a 40% e reduz os custos totais de manutenção predial em uma média de 50%.',
};

const F_MARGEM_55_60 = {
  campo: 'conteudo_html',
  trecho: 'Contratos de Manutenção Preventiva (PMOC): Devem obrigatoriamente superar o limite mínimo de 55% de margem bruta, com uma faixa meta recomendada de 55% a 60%.',
};

const F_DIVISORES = {
  campo: 'conteudo_html',
  trecho: 'Para margem de 40%: Divida o custo base por 0.60 [9] Para margem de 45%: Divida o custo base por 0.55 [9] Para margem de 50%: Divida o custo base por 0.50 [9] Para margem de 55%: Divida o custo base por 0.45',
};

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm08-03',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'resenha-pos-obra',
  duracaoMin: 10,
  beats: [
    {
      id: 'abertura-negocios-pmoc',
      tipo: 'fala',
      quem: 'narrador',
      texto: 'Na mesa da resenha pós-obra, Dona Marta abre sua planilha de precificação de contratos PMOC ao lado de Simon, Bia e Juninho para a aula que fecha o curso.',
    },
    {
      id: 'juninho-conta-errado-markup',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'empolgado',
      texto: 'Dona Marta, fiz a conta de um contrato PMOC! Nosso custo direto é 500, e como a meta da empresa é ter 55% de margem bruta, eu somei 55% em cima e deu 775! Acertei?',
      fonte: [F_MARGEM_55_60, F_TAB_DIV045],
    },
    {
      id: 'marta-corrige-markup-vs-margem',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'alerta',
      texto: 'Errou feio, Juninho! Você confundiu Markup com Margem Bruta! Para ter 55% de margem bruta real sobre o preço de venda, você não multiplica por 1,55: você divide o custo por 0.45!',
      fonte: [F_MARGEM_55_60, F_DIVISORES, F_TAB_DIV045],
    },
    {
      id: 'bia-explica-divisao-complemento',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'aprovando',
      texto: 'Olha a matemática: Preço = Custo ÷ (1 - Margem). Para um custo de 500 com meta de 55% de margem bruta, dividimos 500 por 0.45 e o preço correto passa a ser 1.111!',
      fonte: [F_TAB_DIV045, F_DIVISORES],
    },
    {
      id: 'referencia-tabela-precificacao',
      tipo: 'referencia',
      texto: 'Consulte na aba de tabelas e conteúdo os divisores exatos de Margem Bruta: para 40% divida por 0.60, para 50% por 0.50 e para a meta de 55% em contratos PMOC divida por 0.45.',
      alvo: { aba: 'tabelas' },
      fonte: [F_TAB_DIV045, F_DIVISORES, F_MARGEM_55_60],
    },
    {
      id: 'calculadora-margem-bruta',
      tipo: 'calculadora',
      titulo: 'Precificação por Margem Bruta Real (Preço = Custo ÷ (1 − Margem))',
      formula: 'Preço = 500 ÷ (1 − 0,55) = 500 ÷ 0,45',
      enunciado: 'Um contrato preventivo de PMOC possui custo direto mensal levantado de 500. Para atingir a margem bruta mínima obrigatória de 55% (divisor 0.45), qual deve ser o preço final cotado?',
      unidade: 'USD',
      respostaCorreta: 1111,
      tolerancia: 2,
      leituras: [
        { rotulo: 'Meta de Margem Bruta PMOC', valor: '55% a 60%' },
        { rotulo: 'Divisor para Margem de 55%', valor: '0.45' },
      ],
      opcoesRapidas: [725, 775, 1000, 1111],
      fonte: [F_TAB_DIV045, F_MARGEM_55_60, F_DIVISORES],
      explicacaoSucesso: [
        {
          quem: 'marta',
          emocao: 'aprovando',
          texto: 'Na ponta do lápis! 500 dividido por 0.45 resulta em 1.111. Assim, quando você tira os 500 de custo, sobram 611, que são exatamente 55% do preço faturado!',
          fonte: F_TAB_DIV045,
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'serio',
          texto: 'Não multiplique! Divida o custo de 500 pelo complemento da margem (1 - 0,55 = 0.45) para obter 1.111.',
          fonte: [F_TAB_DIV045, F_DIVISORES],
        },
      ],
    },
    {
      id: 'causo-cliente-unico-45pct',
      tipo: 'causo',
      titulo: 'A Empresa que Tinha 45% da Receita num Único Cliente',
      fonte: [F_CONC_30PCT, F_RETORNO_2PCT],
      falas: [
        {
          quem: 'marta',
          emocao: 'serio',
          texto: 'Conheci uma mantenedora ótima de campo, mas cuja carteira recorrente dependia em 45% de uma única administradora predial.',
          fonte: F_CONC_30PCT,
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'E o que aconteceu quando a administradora mudou de diretoria, Dona Marta?',
        },
        {
          quem: 'marta',
          emocao: 'alerta',
          texto: 'Entrou num leilão de preço baixo, perdeu o contrato da noite pro dia e ficou sem capital de giro! Por isso nossa regra é clara: nenhuma conta individual pode passar de 30% da receita recorrente (MRR)!',
          fonte: F_CONC_30PCT,
        },
        {
          quem: 'simon',
          emocao: 'aprovando',
          texto: 'E para nunca perder contrato por falha técnica, monitoramos a qualidade: se o índice de retornos por retrabalho passar de 2% dos chamados, a equipe entra em reciclagem técnica!',
          fonte: F_RETORNO_2PCT,
        },
      ],
    },
    {
      id: 'mito-verdade-concentracao-mrr',
      tipo: 'mitoVerdade',
      afirmacao: 'Concentrar 45% ou mais da receita recorrente mensal (MRR) em um único grande cliente corporativo é a estratégia mais segura para o fluxo de caixa de uma empresa de climatização.',
      verdade: false,
      fonte: F_CONC_30PCT,
      explicacao: [
        {
          quem: 'marta',
          emocao: 'serio',
          texto: 'Mito perigoso! Depender em 45% de uma única conta deixa a empresa refém de guerras de preço ou quebras financeiras daquele cliente.',
          fonte: F_CONC_30PCT,
        },
        {
          quem: 'simon',
          emocao: 'aprovando',
          texto: 'Pelo Padrão Simon de diversificação, nenhuma conta comercial individual deve ultrapassar 30% da receita recorrente mensal (MRR).',
          fonte: F_CONC_30PCT,
        },
      ],
    },
    {
      id: 'simon-explica-argumento-venda',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'empolgado',
      texto: 'E quando o cliente perguntar por que assinar nosso PMOC preditivo, mostre os números: são 70% menos falhas catastróficas, 20% a 40% mais vida útil nas máquinas e 50% de redução nos custos totais!',
      fonte: F_PRED_70_50,
    },
    {
      id: 'bia-explica-receita-diferida',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'pensativo',
      texto: 'Dona Marta, e quando o cliente paga um contrato anual de PMOC à vista no começo do ano? A gente já pode gastar tudo no primeiro mês?',
    },
    {
      id: 'marta-explica-diferida-qbr',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'serio',
      texto: 'De jeito nenhum, Bia! Na contabilidade profissional isso é Receita Diferida: reconhecemos mês a mês conforme entregamos as visitas preventivas e apresentamos os resultados na reunião trimestral (QBR)!',
    },
    {
      id: 'escolha-fechamento-contrato',
      tipo: 'escolha',
      pergunta: 'Ao estruturar a carteira de contratos PMOC da empresa para garantir saúde financeira e retenção nas reuniões trimestrais (QBR), qual conjunto de metas deve ser obedecido?',
      fonte: [F_MARGEM_55_60, F_CONC_30PCT, F_RETORNO_2PCT],
      opcoes: [
        {
          id: 'a',
          texto: 'Margem bruta de 55% a 60% nos contratos PMOC, limite máximo de 30% do MRR por cliente e taxa de retorno técnico abaixo de 2%.',
          ideal: true,
          fonte: [F_MARGEM_55_60, F_CONC_30PCT, F_RETORNO_2PCT],
          reacao: [
            {
              quem: 'marta',
              emocao: 'aprovando',
              texto: 'Tríade de ouro! Margem saudável de 55% a 60%, carteira pulverizada (< 30% por conta) e excelência técnica no campo (< 2% de retrabalho)!',
              fonte: [F_MARGEM_55_60, F_CONC_30PCT, F_RETORNO_2PCT],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Cobrar preço abaixo do custo para ganhar volume e concentrar 45% da empresa num único cliente.',
          fonte: F_CONC_30PCT,
          reacao: [
            {
              quem: 'marta',
              emocao: 'irritado',
              texto: 'Receita certa para a falência: vender prejuízo e ainda ficar refém de um único contrato!',
              fonte: F_CONC_30PCT,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Aceitar índice de retrabalho acima de 20% sem treinar a equipe de campo.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: 'Retorno come o lucro do contrato! Passou de 2% de retorno por serviço mal executado, é reciclagem técnica imediata na oficina.',
              fonte: F_RETORNO_2PCT,
            },
          ],
        },
      ],
    },
    {
      id: 'inspecao-carteira-pmoc',
      tipo: 'inspecao',
      titulo: 'Auditoria Executiva de Contratos e Indicadores de Negócio',
      enunciado: 'Avalie quatro indicadores da divisão de contratos PMOC. Qual deles exige correção imediata da diretoria?',
      fonte: [F_MARGEM_55_60, F_DIVISORES, F_CONC_30PCT, F_RETORNO_2PCT, F_PRED_70_50],
      pontos: [
        {
          id: 'a',
          rotulo: 'Contratos preventivos PMOC precificados na faixa meta de 55% a 60% de margem bruta (divisor 0.45 para 55%)',
          fonte: [F_MARGEM_55_60, F_DIVISORES],
          feedback: [
            {
              quem: 'marta',
              emocao: 'aprovando',
              texto: 'Rentabilidade blindada! Garante caixa para ferramental de ponta, treinamento e atendimento rápido.',
              fonte: F_MARGEM_55_60,
            },
          ],
        },
        {
          id: 'b',
          rotulo: 'Única construtora representando 45% de toda a receita recorrente mensal (MRR) da empresa',
          correta: true,
          fonte: F_CONC_30PCT,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Alerta vermelho! Viola a regra de diversificação (máximo de 30% do MRR por conta comercial). Precisamos prospectar novas contas para diluir esse risco!',
              fonte: F_CONC_30PCT,
            },
          ],
        },
        {
          id: 'c',
          rotulo: 'Índice de retornos por retrabalho técnico mantido abaixo do teto de 2% dos chamados',
          fonte: F_RETORNO_2PCT,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Padrão técnico impecável! Menos de 2% de retorno preserva a margem do contrato e a confiança do cliente.',
              fonte: F_RETORNO_2PCT,
            },
          ],
        },
        {
          id: 'd',
          rotulo: 'Portfólio preditivo entregando 70% menos falhas catastróficas e 20% a 40% a mais de vida útil aos ativos',
          fonte: F_PRED_70_50,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Resultado comprovado que renova qualquer contrato na reunião trimestral de resultados (QBR)!',
              fonte: F_PRED_70_50,
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-preco-justo',
      tipo: 'filosofia',
      titulo: 'Cobrar Certo é o Que Garante o Vacuômetro Calibrado',
      principio: 'Saber a diferença entre Margem Bruta e Markup não é ganância; é o que permite pagar bem a equipe, manter instrumentos de precisão e honrar a garantia sem quebrar.',
      fonte: [F_MARGEM_55_60, F_DIVISORES],
      falas: [
        {
          quem: 'marta',
          emocao: 'serio',
          texto: 'Engenharia forte e gestão financeira caminham juntas: quando entregamos 70% menos quebras e reduzimos em 50% o custo global do prédio, nossa margem de 55% a 60% sai barata para o cliente!',
          fonte: [F_PRED_70_50, F_MARGEM_55_60],
        },
      ],
    },
    {
      id: 'quiz-divisores-margem',
      tipo: 'quiz',
      enunciado: 'Pela tabela de precificação por Margem Bruta, quais são os divisores exatos aplicados sobre o custo base para alcançar margens brutas de 40%, 50% e 55%, respectivamente?',
      fonte: F_DIVISORES,
      opcoes: [
        {
          id: 'a',
          texto: 'Dividir o custo base por 0.60 (para 40%), por 0.50 (para 50%) e por 0.45 (para 55%).',
          correta: true,
          fonte: F_DIVISORES,
          feedback: [
            {
              quem: 'marta',
              emocao: 'aprovando',
              texto: 'Aprovado com louvor! Usar o complemento (1 - Margem) no denominador garante a margem bruta exata sobre o faturamento.',
              fonte: F_DIVISORES,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Multiplicar o custo por 0.40, 0.50 e 0.55, vendendo abaixo do preço de custo.',
          fonte: F_DIVISORES,
          feedback: [
            {
              quem: 'bia',
              emocao: 'irritado',
              texto: 'Se multiplicar o custo por uma fração menor que 1, você vende pela metade do que gastou!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Não existe fórmula matemática; cobra-se metade do valor do concorrente mais barato.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Copiar preço de quem não sabe calcular custo é comprar passagem só de ida para o prejuízo.',
            },
          ],
        },
      ],
    },
    {
      id: 'bia-brinda-equipe',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'empolgado',
      texto: 'Da termodinâmica e do vácuo profundo até vibração FFT, termografia NETA e contratos PMOC de alta margem: formamos um time imbatível!',
    },
    {
      id: 'marta-orgulhosa-time',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'aprovando',
      texto: 'Ver vocês dominando tanto a chave de torque quanto a margem bruta de 55% a 60% é o maior orgulho da Simon Climatização!',
      fonte: F_MARGEM_55_60,
    },
    {
      id: 'juninho-formado-hvac',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'empolgado',
      texto: 'Mestre Simon, Bia, Dona Marta... do psicrômetro e do vácuo em mícrons até a precificação PMOC por 0.45: que jornada incrível!',
      fonte: F_DIVISORES,
    },
    {
      id: 'simon-formatura-curso',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'aprovando',
      texto: 'Parabéns por chegar até o fim do Curso de Manutenção de Sistemas de Climatização! Agora você pensa, mede, diagnostica e gere contratos como um verdadeiro especialista. Nos vemos em campo!',
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Precifique contratos PMOC pela Margem Bruta real de 55% a 60% dividindo o custo pelo complemento (ex.: dividir por 0.45 para 55% ou por 0.60 para 40%).',
        'Demonstre ao cliente que a manutenção preditiva gera 70% menos falhas catastróficas, 20% a 40% mais vida útil e 50% de economia nos custos totais.',
        'Blinde a operação: limite cada cliente a no máximo 30% do MRR (nunca 45%) e mantenha o retrabalho técnico abaixo de 2%.',
      ],
      proxima: 'Parabéns por concluir todas as aulas de Manutenção de Sistemas de Climatização! Encare agora o Desafio da Rodada para coroar sua certificação!',
      fonte: [F_MARGEM_55_60, F_DIVISORES, F_PRED_70_50, F_CONC_30PCT, F_RETORNO_2PCT],
    },
  ],
};
