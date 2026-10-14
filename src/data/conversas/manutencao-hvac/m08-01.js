// Conversa: Relatórios de Manutenção Profissionais (m08-01)
// Cenário: Resenha Pós-Obra — ΔT 16-20°F (400 CFM/TR), Matriz de 4 Níveis, Auditoria Fotográfica EXIF 6 Pontos e Hold Harmless

const F_EXIF_100 = {
  campo: 'infobox_campo',
  trecho: 'O uso obrigatório de checklists fotográficos digitais contendo metadados EXIF encriptados com data/hora e coordenadas de GPS precisas atua como prova legal inquestionável de que a visita técnica foi executada na unidade física indicada. Isso desarmou 100% das tentativas de recusa de garantia por parte dos fabricantes em nosso portfólio no último ano.',
};

const F_HOLD_HARMLESS = {
  campo: 'infobox_campo',
  trecho: 'Nunca encerre uma ordem de serviço com falhas de Nível 1 (Segurança) pendentes sem coletar a assinatura eletrônica do cliente na cláusula de Isenção de Responsabilidade (Hold Harmless) diretamente na tela do app do técnico. Essa ação formal transfere juridicamente o risco e a responsabilidade civil imediata de volta ao proprietário do edifício.',
};

const F_MATRIZ_4 = {
  campo: 'tabelas_html',
  trecho: '1. Segurança (Safety) Condições que apresentam perigo imediato à vida, à saúde humana ou à integridade física da propriedade. Trocador de calor trincado vazando monóxido de carbono; contatores elétricos severamente carbonizados com risco de incêndio. Reparo imediato ou desligamento do equipamento necessário. 2. Confiabilidade (Reliability) Componentes que exibem desgaste avançado que causará falha operacional catastrófica se não for resolvido. Motor do soprador consumindo amperagem acima do limite nominal (over-amping); capacitores de partida/marcha severamente degradados. Reparo programado dentro de 7 a 14 dias.',
};

const F_VIDA_ASHRAE = {
  campo: 'tabelas_html',
  trecho: 'Unidades Rooftop Comerciais (RTU - AC Packaged) 15 Anos [17] Bombas de Calor Comerciais (Ar-Ar) 14 - 15 Anos [17] Fornos a Gás ou Óleo 18 - 20 Anos [17] Caldeiras (Tubos de Aço / Ferro Fundido) 24 - 35 Anos [17] Chillers de Refrigeração (Centrífugos) 23 Anos',
};

const F_REDACAO_12PCT = {
  campo: 'conteudo_html',
  trecho: 'Restaurado o fluxo de ar ideal na unidade de tratamento de ar principal, reduzindo a corrente do motor do ventilador em 12% para diminuir o consumo de energia, e eliminados os riscos iminentes de proliferação biológica no dreno para garantir a conformidade estrita com os padrões de qualidade do ar interno.',
};

const F_DT_400CFM = {
  campo: 'conteudo_html',
  trecho: 'A maioria das metas de ΔT projetadas pelos fabricantes varia entre 16°F e 20°F (9°C a 11°C) com base em configurações de fluxo de ar de 400 CFM por tonelada de refrigeração (TR).',
};

const F_DT_75_55 = {
  campo: 'conteudo_html',
  trecho: 'Temperatura de Retorno (Ar Entrando) 70°F (21.1°C) - Ambiente Frio 75°F (23.9°C) - Padrão de Projeto 80°F (26.7°C) - Carga Térmica Alta 2. Temperatura de Insuflamento (Ar Climatizado) 50°F (10.0°C) - Resfriamento Forte 55°F (12.8°C) - Insuflamento Ideal 60°F (15.6°C) - Resfriamento Leve 65°F (18.3°C) - Insuficiente Ideal Resultado: ΔT = 20°F (11.1°C)',
};

const F_ROI_15K = {
  campo: 'conteudo_html',
  trecho: 'Custo Contrato Anual (Investimento):R$ 15.000,00 Economia em Faturas Elétricas:+ R$ 24.000,00 Economia com Reparos Emergenciais:+ R$ 12.000,00 Redução de Custos de Inatividade:+ R$ 9.000,00 Economia Total Gerada:R$ 45.000,00 Economia Líquida Anual:R$ 30.000,00',
};

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm08-01',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'resenha-pos-obra',
  duracaoMin: 10,
  beats: [
    {
      id: 'abertura-resenha-laudo',
      tipo: 'fala',
      quem: 'narrador',
      texto: 'Fim de tarde após a entrega da preventiva geral. Na mesa de reunião com água com gás e café fresco, Dona Marta analisa o rascunho de relatório técnico que Juninho digitou.',
    },
    {
      id: 'marta-le-rascunho-juninho',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'pensativo',
      texto: 'Juninho, você escreveu no relatório pro diretor financeiro apenas: "Trocado filtro sujo e desentupido dreno". O homem não entende de filtro, ele entende de dinheiro e risco!',
    },
    {
      id: 'simon-ensina-linguagem-cfo',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'aprovando',
      texto: 'Dona Marta tem razão! Veja a diferença: "Restaurado o fluxo de ar ideal na UTA, reduzindo a corrente do ventilador em 12% para diminuir o consumo de energia e eliminados riscos biológicos no dreno!"',
      fonte: F_REDACAO_12PCT,
    },
    {
      id: 'bia-explica-dt-400cfm',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'empolgado',
      texto: 'E todo relatório profissional precisa de números termodinâmicos: sob vazão nominal de 400 CFM por TR, a meta de ΔT no evaporador varia entre 16°F e 20°F (9°C a 11°C)!',
      fonte: F_DT_400CFM,
    },
    {
      id: 'calculadora-split-termico-f',
      tipo: 'calculadora',
      titulo: 'Cálculo de Divisão de Temperatura (ΔT = T_Retorno − T_Insuflamento)',
      formula: 'ΔT (°F) = 75°F (Retorno) − 55°F (Insuflamento)',
      enunciado: 'Com ar de retorno entrando a 75°F (23.9°C) e ar climatizado de insuflamento saindo a 55°F (12.8°C) sob fluxo de 400 CFM por TR, qual é o diferencial térmico (ΔT) em graus Fahrenheit?',
      unidade: '°F',
      respostaCorreta: 20,
      tolerancia: 0.5,
      leituras: [
        { rotulo: 'Temperatura de Retorno', valor: '75°F (23.9°C)' },
        { rotulo: 'Temperatura de Insuflamento', valor: '55°F (12.8°C)' },
      ],
      opcoesRapidas: [10, 15, 20, 25],
      fonte: [F_DT_400CFM, F_DT_75_55],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'Perfeito! 75°F menos 55°F resulta em ΔT = 20°F (11.1°C), comprovando no laudo excelente eficiência termodinâmica no topo da faixa de 16°F a 20°F.',
          fonte: [F_DT_400CFM, F_DT_75_55],
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Subtraia a temperatura de insuflamento (55°F) da temperatura de retorno (75°F) para obter o ΔT ideal de 20°F.',
          fonte: F_DT_75_55,
        },
      ],
    },
    {
      id: 'referencia-matriz-tabelas',
      tipo: 'referencia',
      texto: 'Consulte na aba de tabelas a Matriz de Priorização em 4 Níveis (1. Segurança, 2. Confiabilidade em 7 a 14 dias, 3. Eficiência, 4. Conforto) e a vida útil mediana ASHRAE.',
      alvo: { aba: 'tabelas' },
      fonte: [F_MATRIZ_4, F_VIDA_ASHRAE],
    },
    {
      id: 'causo-aviso-de-boca',
      tipo: 'causo',
      titulo: 'O Aviso "De Boca" no Corredor e o Contator Carbonizado',
      fonte: [F_HOLD_HARMLESS, F_MATRIZ_4],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Um colega viu um contator elétrico severamente carbonizado com risco iminente de incêndio — falha clássica de Nível 1 (Segurança) — e só avisou o gerente de boca no corredor.',
          fonte: [F_HOLD_HARMLESS, F_MATRIZ_4],
        },
        {
          quem: 'juninho',
          emocao: 'assustado',
          texto: 'E o gerente disse que não tinha verba naquela semana, mestre?',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Disse "mês que vem eu vejo". Dez dias depois o quadro pegou fogo e o gerente jurou para a diretoria que a empresa de manutenção nunca tinha avisado do risco!',
          fonte: F_HOLD_HARMLESS,
        },
        {
          quem: 'marta',
          emocao: 'alerta',
          texto: 'Por isso aqui na empresa a regra é blindada: se o cliente recusar reparo de Nível 1 (Segurança), tem que assinar a cláusula Hold Harmless (Isenção de Responsabilidade) na tela do app!',
          fonte: F_HOLD_HARMLESS,
        },
      ],
    },
    {
      id: 'mito-verdade-recusa-verbal',
      tipo: 'mitoVerdade',
      afirmacao: 'Quando o cliente recusa o reparo imediato de um risco de Nível 1 (Segurança), basta o técnico avisar verbalmente ao encarregado local para isentar juridicamente a empresa de manutenção.',
      verdade: false,
      fonte: F_HOLD_HARMLESS,
      explicacao: [
        {
          quem: 'marta',
          emocao: 'serio',
          texto: 'Mito perigosíssimo! Aviso verbal não tem valor probatório em caso de incêndio ou sinistro.',
          fonte: F_HOLD_HARMLESS,
        },
        {
          quem: 'simon',
          emocao: 'aprovando',
          texto: 'É obrigatório registrar o risco no relatório e coletar a assinatura eletrônica na cláusula de Isenção de Responsabilidade (Hold Harmless), transferindo o ônus civil de volta ao proprietário.',
          fonte: F_HOLD_HARMLESS,
        },
      ],
    },
    {
      id: 'juninho-pergunta-6fotos',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E na disputa de garantia com o fabricante do compressor, Bia? Como o nosso relatório prova que a preventiva foi feita de verdade?',
    },
    {
      id: 'bia-explica-exif-6pontos',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'aprovando',
      texto: 'Com auditoria fotográfica de 6 pontos (Plaqueta, Serpentinas, Elétrica, Filtros, Dreno e Estrutura) gravando metadados EXIF de GPS e data/hora! Isso desarmou 100% das recusas de garantia!',
      fonte: F_EXIF_100,
    },
    {
      id: 'marta-comenta-vida-ashrae',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'pensativo',
      texto: 'E quando o equipamento já está velho, nós cruzamos o relatório com a tabela ASHRAE: um Rooftop comercial tem vida útil mediana de 15 Anos e um Chiller centrífugo de 23 Anos!',
      fonte: F_VIDA_ASHRAE,
    },
    {
      id: 'simon-explica-capex',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'aprovando',
      texto: 'Isso ajuda o cliente a planejar o orçamento de substituição (CAPEX) com antecedência, em vez de ser pego de surpresa no verão!',
      fonte: F_VIDA_ASHRAE,
    },
    {
      id: 'escolha-matriz-prioridade',
      tipo: 'escolha',
      pergunta: 'Durante a preventiva, você encontra um motor de soprador operando acima da corrente nominal (over-amping) e um capacitor de marcha degradado, sem risco imediato de incêndio, mas com risco de parada futura. Como classificar na Matriz de 4 Níveis?',
      fonte: F_MATRIZ_4,
      opcoes: [
        {
          id: 'a',
          texto: 'Nível 4 — Conforto, podendo aguardar anos sem programação.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: 'Motor em sobrecorrente e capacitor degradado vão parar a máquina no primeiro dia quente! Não é mero detalhe de conforto.',
              fonte: F_MATRIZ_4,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Nível 2 — Confiabilidade (Reliability), com reparo programado dentro de 7 a 14 dias.',
          ideal: true,
          fonte: F_MATRIZ_4,
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Classificação perfeita! Nível 2 abrange desgaste avançado que causará falha catastrófica se não for corrigido em 7 a 14 dias.',
              fonte: F_MATRIZ_4,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Omitir do relatório para não preocupar o gerente predial.',
          reacao: [
            {
              quem: 'marta',
              emocao: 'irritado',
              texto: 'Omitir defeito destrói a confiança e faz a queima futura cair na nossa conta!',
            },
          ],
        },
      ],
    },
    {
      id: 'inspecao-relatorio-executivo',
      tipo: 'inspecao',
      titulo: 'Auditoria de Qualidade de Relatório Técnico-Executivo',
      enunciado: 'Analise quatro práticas de documentação técnica e financeira. Qual delas demonstra o padrão de Classe Mundial da Simon Climatização?',
      fonte: [F_EXIF_100, F_HOLD_HARMLESS, F_ROI_15K, F_REDACAO_12PCT],
      pontos: [
        {
          id: 'a',
          rotulo: 'Checklists fotográficos com metadados EXIF/GPS que desarmam 100% das recusas indevidas de garantia OEM',
          correta: true,
          fonte: F_EXIF_100,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Exato! Fotos autenticadas com GPS e timestamp provam de forma irrefutável a execução física e cronológica do PMOC.',
              fonte: F_EXIF_100,
            },
          ],
        },
        {
          id: 'b',
          rotulo: 'Encerrar OS de Nível 1 (contator carbonizado) sem colher assinatura na cláusula Hold Harmless',
          fonte: [F_HOLD_HARMLESS, F_MATRIZ_4],
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Erro jurídico fatal! Nunca feche pendência de Nível 1 sem assinatura formal no termo de Isenção de Responsabilidade.',
              fonte: F_HOLD_HARMLESS,
            },
          ],
        },
        {
          id: 'c',
          rotulo: 'Enviar fotos soltas pelo WhatsApp sem identificação de plaqueta nem leitura de instrumento',
          feedback: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: 'Foto solta sem TAG da máquina e sem metadados EXIF se perde na galeria e não vale nada numa auditoria.',
            },
          ],
        },
        {
          id: 'd',
          rotulo: 'Apresentar contrato anual de R$ 15.000,00 como mera despesa, ocultando a economia total gerada de R$ 45.000,00',
          fonte: F_ROI_15K,
          feedback: [
            {
              quem: 'marta',
              emocao: 'serio',
              texto: 'Quem esconde o retorno perde o contrato! Mostrar que R$ 15.000,00 geram R$ 45.000,00 de economia (líquido de R$ 30.000,00) blinda a renovação!',
              fonte: F_ROI_15K,
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-palavra-vento',
      tipo: 'filosofia',
      titulo: 'Palavra no Corredor o Vento Leva',
      principio: 'O serviço técnico só termina quando a evidência fotográfica EXIF, a medição termodinâmica e a recomendação priorizada estão registradas e assinadas.',
      fonte: [F_EXIF_100, F_HOLD_HARMLESS],
      falas: [
        {
          quem: 'marta',
          emocao: 'serio',
          texto: 'Um relatório bem escrito aprova orçamentos sozinho porque traduz corrente elétrica e ΔT de 20°F em economia de energia, vida útil ASHRAE e segurança jurídica!',
          fonte: [F_DT_75_55, F_VIDA_ASHRAE],
        },
      ],
    },
    {
      id: 'quiz-roi-supermercado',
      tipo: 'quiz',
      enunciado: 'No modelo financeiro de um Supermercado Médio com contrato anual de R$ 15.000,00 que gera R$ 45.000,00 de economia total (energia + reparos evitados + inatividade evitada), qual é a economia líquida anual demonstrada ao cliente?',
      fonte: F_ROI_15K,
      opcoes: [
        {
          id: 'a',
          texto: 'Economia líquida anual de R$ 30.000,00 (Economia Total de R$ 45.000,00 menos o investimento de R$ 15.000,00).',
          correta: true,
          fonte: F_ROI_15K,
          feedback: [
            {
              quem: 'marta',
              emocao: 'aprovando',
              texto: 'Conta de diretoria! O contrato se paga rapidamente e ainda deixa R$ 30.000,00 de ganho líquido no caixa do supermercado.',
              fonte: F_ROI_15K,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Prejuízo líquido de R$ 15.000,00, pois manutenção preventiva não reduz consumo elétrico.',
          fonte: F_ROI_15K,
          feedback: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: 'Só na fatura elétrica desse supermercado a manutenção preventiva economiza R$ 24.000,00 por ano!',
              fonte: F_ROI_15K,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Não é possível calcular ROI em sistemas de climatização comercial.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'serio',
              texto: 'Calculamos sim: ROI = [(Economia Total - Investimento) / Investimento] × 100!',
            },
          ],
        },
      ],
    },
    {
      id: 'juninho-reescreve-laudo',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'empolgado',
      texto: 'Já reescrevi o laudo inteiro com as 6 fotos EXIF, o ΔT de 20°F e a classificação de Nível 2! O cliente vai aprovar na hora.',
      fonte: [F_EXIF_100, F_DT_75_55, F_MATRIZ_4],
    },
    {
      id: 'bia-aprova-laudo-juninho',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'aprovando',
      texto: 'Ficou digno de uma auditoria executiva, Juninho! Com fotos Antes e Depois e o cálculo de retorno financeiro na capa.',
    },
    {
      id: 'marta-assina-envio',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'aprovando',
      texto: 'Assim eu mando para o diretor financeiro de cabeça erguida! Relatório claro é metade da renovação do contrato garantida.',
    },
    {
      id: 'simon-chama-auditoria-energetica',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'aprovando',
      texto: 'E para deixar seus relatórios ainda mais poderosos, na próxima aula vamos dominar Auditoria Energética: Leis de Afinidade Cúbica em VFDs, kW/TR e protocolo IPMVP!',
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Traduza ações técnicas em impacto econômico (ex.: redução de 12% na corrente do ventilador) e registre o ΔT (meta de 16°F a 20°F a 400 CFM por TR).',
        'Classifique achados na Matriz de 4 Níveis (1. Segurança imediata, 2. Confiabilidade em 7 a 14 dias, 3. Eficiência, 4. Conforto) e documente os 6 pontos com fotos EXIF/GPS (100% de defesa de garantia).',
        'Exija assinatura eletrônica na cláusula Hold Harmless sempre que o cliente adiar um reparo crítico de Nível 1.',
      ],
      proxima: 'Na próxima aula, voltamos à Casa de Máquinas para calcular Auditoria Energética: a Lei Cúbica dos inversores VFD, o piso de frequência em bombas e o protocolo IPMVP!',
      fonte: [F_REDACAO_12PCT, F_DT_400CFM, F_MATRIZ_4, F_EXIF_100, F_HOLD_HARMLESS],
    },
  ],
};
