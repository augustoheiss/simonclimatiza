// Conversa: Manutenção de Chillers (m06-03)
// Cenário: Casa de Máquinas — Escovas Nylon vs Inox, Eddy Current, Surge Centrífugo, Toliltriazol 10-20 ppm e ISO 10816-3

const F_POE_500 = {
  campo: 'infobox_campo',
  trecho: 'Nunca deixe recipientes de óleo POE abertos por mais de 10 minutos. Utilize sempre manifolds limpos e execute purgas rigorosas com nitrogênio OFDN de alta pureza. O vácuo final em chillers centrífugos deve atingir e manter menos de 500 microns para garantir a evaporação total de qualquer molécula de água presa.',
};

const F_BLANKETING = {
  campo: 'infobox_campo',
  trecho: 'Durante paradas sazonais superiores a 3 meses (layup seco), a pressurização estática constante dos trocadores com nitrogênio ultra-seco (de 3 a 5 PSIG) é o método mais eficiente e seguro.',
};

const F_ESCOVA_TAB = {
  campo: 'tabelas_html',
  trecho: 'Cobre Nylon Azul ou Latão Macio 1000 - 1500 RPM Remoção de lama e incrustações leves em chillers de água gelada padrão. Não utilizar cerdas de aço carbono/inox. Cuproníquel Nylon ou Latão Macio 1000 RPM Chillers marítimos ou industriais.',
};

const F_OLEO_TAB = {
  campo: 'tabelas_html',
  trecho: 'Acidez Total (TAN) &gt; 0,08 mg KOH/g &gt; 0,15 mg KOH/g Ataque químico aos enrolamentos do estator e buchas de metal macio. Trocar óleo e usar filtro anti-ácido. Umidade (Karl Fischer) &gt; 50 ppm &gt; 150 ppm Gera hidrólise no óleo POE e formação de ácidos orgânicos corrosivos.',
};

const F_ISO_10816 = {
  campo: 'tabelas_html',
  trecho: 'Grupo 1 (&gt;300 kW) Rígida &lt; 2,3 mm/s RMS 2,3 a 4,5 mm/s RMS 4,5 a 7,1 mm/s RMS &gt; 7,1 mm/s RMS',
};

const F_TTA = {
  campo: 'conteudo_html',
  trecho: 'O toliltriazol, mantido em concentrações de 10 a 20 ppm, liga-se diretamente ao óxido cuproso (Cu₂O) na superfície do metal, formando um filme protetor microscópico quimicamente adsorvido que resiste fortemente a ataques oxidativos subsequentes.',
};

const F_TAMP_40_50 = {
  campo: 'conteudo_html',
  trecho: 'As diretrizes da indústria e as normas de engenharia geralmente determinam que tubos que apresentam perda de parede superior a 40% a 50% de sua espessura nominal original devem ser tamponados com plugues cônicos de latão, fibra ou plugues expansivos.',
};

const F_TAMP_10 = {
  campo: 'conteudo_html',
  trecho: 'O retubamento completo do condensador é normalmente acionado quando a porcentagem de tubos tamponados excede 10% do feixe total.',
};

const F_APPROACH = {
  campo: 'conteudo_html',
  trecho: 'Temperatura de aproximação (approach) do evaporador elevada: A diferença térmica entre a temperatura da água gelada de saída e a temperatura de saturação do refrigerante aumenta significativamente, frequentemente ultrapassando os 2.8°C (5°F).',
};

const F_SURGE_CARGA = {
  campo: 'conteudo_html',
  trecho: 'Regime de Carga Térmica Carga Plena (100%) Parcial (50%) Baixa (20%)',
};

const F_SURGE_TORRE = {
  campo: 'conteudo_html',
  trecho: 'Água da Torre (Pressão Descarga) T_torre Fria (20°C / Normal) T_torre Quente (32°C / Crítica)',
};

const F_MEGGER_460 = {
  campo: 'conteudo_html',
  trecho: 'A resistência de isolamento mínima aceitável é universalmente calculada como 1.000 ohms por volt aplicado (por exemplo, um motor de 460V requer uma resistência mínima para a terra de 460.000 ohms ou 0,46 MΩ).',
};

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm06-03',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 10,
  beats: [
    {
      id: 'abertura-cag',
      tipo: 'fala',
      quem: 'narrador',
      texto: 'Central de Água Gelada subterrânea. O espelho traseiro do condensador casco-e-tubo de um grande Chiller está aberto para varetagem mecânica. Juninho segura uma escova rotativa.',
    },
    {
      id: 'juninho-mostra-escova-inox',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'empolgado',
      texto: 'Mestre Simon, peguei essa escova de cerdas de aço inox bem dura para limpar rápido os tubos de cobre ranhurados do condensador!',
    },
    {
      id: 'simon-barra-escova-inox',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'assustado',
      texto: 'Larga essa arma agora, Juninho! Em tubos de cobre ou cuproníquel, jamais use cerdas de aço carbono ou inox! Você vai arrancar o filme passivador e lixar a parede do tubo.',
      fonte: F_ESCOVA_TAB,
    },
    {
      id: 'bia-explica-nylon-tta',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Para cobre usamos escova de Nylon Azul ou Latão Macio a 1000 - 1500 RPM! E na água da torre mantemos toliltriazol entre 10 a 20 ppm para proteger o filme de óxido cuproso.',
      fonte: [F_ESCOVA_TAB, F_TTA],
    },
    {
      id: 'causo-poeira-dourada',
      tipo: 'causo',
      titulo: 'O Balde de "Poeira Dourada" e o Feixe Furado',
      fonte: [F_ESCOVA_TAB, F_TAMP_40_50, F_TAMP_10],
      falas: [
        {
          quem: 'simon',
          emocao: 'rindo',
          texto: 'Num shopping da zona sul, uma terceirizada meteu escova de aço inox no feixe de cobre de um chiller. No fim do dia, o ajudante mostrou orgulhoso um balde cheio de pó dourado brilhante!',
          fonte: F_ESCOVA_TAB,
        },
        {
          quem: 'juninho',
          emocao: 'assustado',
          texto: 'Não me diga que aquele pó dourado era o próprio cobre das ranhuras internas dos tubos, mestre!',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Era parede de tubo pura! Três meses depois o ensaio de Eddy Current apontou perda de parede acima de 40% a 50% em dezenas de tubos.',
          fonte: F_TAMP_40_50,
        },
        {
          quem: 'bia',
          emocao: 'pensativo',
          texto: 'E quando a quantidade de tubos tamponados com plugues cônicos ultrapassa 10% do feixe total, não tem jeito: exige o retubamento completo do condensador!',
          fonte: F_TAMP_10,
        },
      ],
    },
    {
      id: 'mito-verdade-escova-inox',
      tipo: 'mitoVerdade',
      afirmacao: 'Para remover incrustações severas em tubos de cobre de condensadores casco-e-tubo, deve-se utilizar escova rotativa de cerdas de aço inoxidável.',
      verdade: false,
      fonte: [F_ESCOVA_TAB, F_TTA],
      explicacao: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Mito destrutivo! Em tubos de cobre é proibido usar cerdas de aço carbono ou inox; usa-se Nylon Azul ou Latão Macio entre 1000 - 1500 RPM.',
          fonte: F_ESCOVA_TAB,
        },
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'As cerdas de aço destroem as ranhuras internas e removem o filme protetor formado pelo toliltriazol (10 a 20 ppm) sobre o cobre.',
          fonte: F_TTA,
        },
      ],
    },
    {
      id: 'marta-pergunta-estrondo-surge',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'curioso',
      texto: 'Simon, de madrugada o vigia ouviu o chiller centrífugo dar uns estrondos graves, parecendo um elefante tossindo a cada poucos segundos. O que é aquilo?',
    },
    {
      id: 'simon-explica-surge',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Isso é Surge aerodinâmico, Dona Marta! Acontece quando o chiller opera em carga baixa (20%), mas a água da torre entra quente (32°C), jogando a pressão de descarga lá no alto.',
      fonte: [F_SURGE_CARGA, F_SURGE_TORRE],
    },
    {
      id: 'bia-explica-prv-vgd',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'pensativo',
      texto: 'Com alta razão de compressão e pouca vazão, o gás não vence a pressão do condensador e reflui violentamente pelo impelidor! Por isso o controle fecha o anel difusor VGD ou abre o bypass de gás quente.',
    },
    {
      id: 'escolha-surge-centrifugo',
      tipo: 'escolha',
      pergunta: 'Um Chiller Centrífugo em baixa carga (20%) entra em Surge violento porque a água da torre de resfriamento subiu para 32°C. Qual ação operacional corrige a causa aerodinâmica imediata?',
      fonte: [F_SURGE_CARGA, F_SURGE_TORRE],
      opcoes: [
        {
          id: 'a',
          texto: 'Desligar todas as bombas de água de condensação para esfriar o compressor.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: 'Se parar a bomba da torre a pressão de condensação explode na hora e o chiller desarma por alta pressão!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Reduzir a temperatura da água da torre (de 32°C para próximo de 20°C) acionando ventiladores da torre e verificar a modulação do difusor VGD / HGBP.',
          ideal: true,
          fonte: F_SURGE_TORRE,
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Exato! Baixando a temperatura da água da torre você derruba a altura manométrica (Lift) e tira o impelidor da zona de Surge.',
              fonte: F_SURGE_TORRE,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Tamponar mais de 10% dos tubos do condensador para aumentar a pressão de descarga.',
          fonte: F_TAMP_10,
          reacao: [
            {
              quem: 'bia',
              emocao: 'assustado',
              texto: 'Tamponar tubos aumenta a restrição térmica e piora ainda mais a pressão de descarga que causa o Surge!',
              fonte: F_TAMP_10,
            },
          ],
        },
      ],
    },
    {
      id: 'referencia-oleo-vibracao',
      tipo: 'referencia',
      texto: 'Consulte na aba de tabelas os limites críticos de análise de óleo POE (umidade Karl Fischer > 50 ppm alerta / > 150 ppm crítico) e severidade de vibração ISO 10816-3.',
      alvo: { aba: 'tabelas' },
      fonte: [F_OLEO_TAB, F_ISO_10816],
    },
    {
      id: 'juninho-pergunta-megger-460',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'duvida',
      texto: 'Bia, e no estator de 460V do compressor do Chiller, qual é o piso mínimo absoluto de resistência de isolamento pela regra de 1.000 ohms por volt?',
      fonte: F_MEGGER_460,
    },
    {
      id: 'bia-introduz-calc-460',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'aprovando',
      texto: 'É só multiplicar 460V por 1.000 ohms e converter para Megaohms, Juninho! Faz a conta aqui na calculadora.',
      fonte: F_MEGGER_460,
    },
    {
      id: 'calculadora-megger-chiller',
      tipo: 'calculadora',
      titulo: 'Resistência Mínima de Isolamento por Tensão (Regra 1000 Ω/V)',
      formula: 'R_min (MΩ) = Tensão Nominal (V) × 1.000 Ω / 1.000.000',
      enunciado: 'Pela regra universal de 1.000 ohms por volt aplicado, um motor de chiller de 460V requer no mínimo 460.000 ohms para a terra. Qual é esse valor expresso em Megaohms (MΩ)?',
      unidade: 'MΩ',
      respostaCorreta: 0.46,
      tolerancia: 0.02,
      leituras: [
        { rotulo: 'Tensão Nominal do Motor', valor: '460V' },
        { rotulo: 'Resistência Mínima em Ohms', valor: '460.000 ohms' },
      ],
      opcoesRapidas: [0.15, 0.46, 2.3, 5.16],
      fonte: F_MEGGER_460,
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'Perfeito! 460.000 ohms equivalem exatamente a 0,46 MΩ como piso mínimo absoluto, acompanhado do Índice de Polarização.',
          fonte: F_MEGGER_460,
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Divida 460.000 ohms por 1.000.000 para converter para Megaohms: o resultado exato é 0,46 MΩ.',
          fonte: F_MEGGER_460,
        },
      ],
    },
    {
      id: 'inspecao-laudo-chiller',
      tipo: 'inspecao',
      titulo: 'Auditoria Preditiva: Óleo POE, Vibração e Trocadores',
      enunciado: 'Quatro resultados saíram do relatório anual da Central de Água Gelada. Qual deles indica condição de Perigo / Reprovação imediata?',
      fonte: [F_POE_500, F_OLEO_TAB, F_ISO_10816, F_BLANKETING],
      pontos: [
        {
          id: 'a',
          rotulo: 'Vácuo final estabilizado abaixo de 500 microns após manutenção frigorífica',
          fonte: F_POE_500,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Excelente! Atingir e manter menos de 500 microns garante a desidratação profunda do circuito e protege o óleo POE.',
              fonte: F_POE_500,
            },
          ],
        },
        {
          id: 'b',
          rotulo: 'Amostra de óleo POE com umidade Karl Fischer acima de 150 ppm e vibração em fundação rígida acima de 7,1 mm/s RMS',
          correta: true,
          fonte: [F_OLEO_TAB, F_ISO_10816],
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Crítico duplo! Umidade > 150 ppm gera hidrólise ácida severa no POE, e vibração > 7,1 mm/s RMS no Grupo 1 Rígida está na Zona D (Perigo) da ISO 10816-3!',
              fonte: [F_OLEO_TAB, F_ISO_10816],
            },
          ],
        },
        {
          id: 'c',
          rotulo: 'Preservação sazonal (layup seco) mantendo trocador pressurizado com nitrogênio de 3 a 5 PSIG',
          fonte: F_BLANKETING,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Prática exemplar! O Nitrogen Blanketing de 3 a 5 PSIG impede a entrada de oxigênio e umidade atmosférica durante paradas longas.',
              fonte: F_BLANKETING,
            },
          ],
        },
        {
          id: 'd',
          rotulo: 'Vibração do conjunto Grupo 1 em fundação rígida abaixo de 2,3 mm/s RMS (Zona A)',
          fonte: F_ISO_10816,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Máquina serena! Abaixo de 2,3 mm/s RMS na fundação rígida enquadra o chiller na Zona A (Excelente) da ISO 10816-3.',
              fonte: F_ISO_10816,
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-chiller-parede',
      tipo: 'filosofia',
      titulo: 'Uma Parede de Cobre Entre o Gás e o Desastre',
      principio: 'Num Chiller de grande porte, uma fração de milímetro de cobre separa a água da torre do circuito frigorífico. Tratar a água e testar os tubos por Eddy Current é proteger um patrimônio milionário.',
      fonte: [F_TTA, F_TAMP_40_50, F_TAMP_10],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Lembrem sempre: se furar tubo ou congelar evaporador, milhares de litros de água invadem o compressor. Respeitem o fluxostato, o toliltriazol de 10 a 20 ppm e o limite de 10% de tamponamento!',
          fonte: [F_TTA, F_TAMP_10],
        },
      ],
    },
    {
      id: 'quiz-approach-evaporador',
      tipo: 'quiz',
      enunciado: 'Quando um chiller apresenta acúmulo de óleo no evaporador (oil logging) ou incrustação severa nos tubos, o que ocorre com a temperatura de aproximação (approach) e como destravar o retorno de óleo?',
      fonte: F_APPROACH,
      opcoes: [
        {
          id: 'a',
          texto: 'O approach sobe (frequentemente ultrapassando 2.8°C / 5°F); pode-se forçar 100% de carga temporariamente para elevar a velocidade de sucção e arrastar o óleo.',
          correta: true,
          fonte: [F_APPROACH, F_SURGE_CARGA],
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Na mosca! O filme de óleo isola o tubo e eleva o approach acima de 2.8°C (5°F); acelerar a carga para 100% varre o óleo preso de volta ao cárter.',
              fonte: [F_APPROACH, F_SURGE_CARGA],
            },
          ],
        },
        {
          id: 'b',
          texto: 'O approach cai para zero e deve-se deixar a lata de óleo POE aberta por horas ao ar livre.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'irritado',
              texto: 'Nunca deixe lata de óleo POE aberta por mais de 10 minutos! Ele absorve umidade do ar e sofre hidrólise ácida.',
              fonte: F_POE_500,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Deve-se limpar os tubos de titânio usando escova de cerdas de cobre ou latão.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Em tubos de titânio usa-se exclusivamente escova de Nylon a 1000 RPM, nunca latão ou cobre!',
              fonte: F_ESCOVA_TAB,
            },
          ],
        },
      ],
    },
    {
      id: 'marta-agradece-cag',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'aprovando',
      texto: 'Agora entendo por que a análise anual de óleo e a limpeza correta das torres pagam dez vezes o próprio custo na conta de energia e na vida do chiller!',
    },
    {
      id: 'bia-destaca-layup-seco',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'aprovando',
      texto: 'E quando chegar o inverno com paradas maiores que 3 meses, fazemos o layup seco pressurizado de 3 a 5 PSIG para nenhum tubo oxidar parado!',
      fonte: F_BLANKETING,
    },
    {
      id: 'simon-chama-camara-fria',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'empolgado',
      texto: 'Vistam as jaquetas térmicas! Na próxima aula vamos sair da água gelada e entrar abaixo de zero nas Câmaras Frias comerciais!',
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Use escova de Nylon Azul ou Latão Macio (1000 - 1500 RPM) em tubos de cobre; mantenha toliltriazol em 10 a 20 ppm e tampone tubos com perda de parede > 40% a 50% (retubando se passar de 10%).',
        'Evite o Surge centrífugo controlando a temperatura da torre (20°C vs 32°C crítica) e monitore o approach (< 2.8°C) e a vibração ISO 10816-3 (< 2,3 mm/s RMS Zona A).',
        'Não exponha óleo POE por mais de 10 minutos, puxe vácuo abaixo de 500 microns e monitore umidade Karl Fischer (< 50 ppm) e acidez TAN.',
      ],
      proxima: 'Na próxima aula, fechamos o Módulo 6 nas Câmaras Frias: cálculo de resistências de degelo pela Lei de Ohm, teste térmico do Klixon e normas sanitárias!',
      fonte: [F_ESCOVA_TAB, F_TTA, F_TAMP_40_50, F_TAMP_10, F_SURGE_TORRE, F_APPROACH, F_ISO_10816, F_POE_500, F_OLEO_TAB],
    },
  ],
};
