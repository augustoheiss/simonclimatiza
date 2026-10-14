// Conversa: Análise de Vibração (m07-01)
// Cenário: Casa de Máquinas — Deslocamento/Velocidade/Aceleração, Stud vs Magnet vs Stinger, FFT 3200 LOR (120 Hz vs 116.8 Hz) e ISO 10816-3

const F_FFT_3200 = {
  campo: 'infobox_campo',
  trecho: 'Sem configurar o analisador FFT para alta resolução espectral (mínimo de 3200 LOR), o pico elétrico de 2x Frequência da Rede (120 Hz no Brasil) fica completamente fundido com o harmônico de 4x RPM mecânico do motor elétrico (que sob carga escorrega para aproximadamente 116.8 Hz).',
};

const F_LASER_005 = {
  campo: 'infobox_campo',
  trecho: 'Verifique o desalinhamento angular no plano axial (fase de 180° através do acoplamento) e alinhe eixos sempre com alinhadores a laser para garantir tolerâncias inferiores a 0.05 mm.',
};

const F_FIXACAO = {
  campo: 'tabelas_html',
  trecho: 'Montagem por Perno (Stud) 10.000 Hz Conexão metal-metal perfeita. Ideal para alta frequência de compressores centrífugos. Montagem Magnética (Magnet) 5.000 Hz Prático para rotas periódicas gerais. Introduz ressonância indesejada de montagem. Ponta de Prova (Probe/Stinger) 1.000 Hz Atua como filtro passa-baixas agressivo',
};

const F_ZONA_ISO = {
  campo: 'tabelas_html',
  trecho: 'ZONA A / B (Excelente) &lt; 0.71 mm/s &lt; 1.12 mm/s &lt; 1.80 mm/s &lt; 2.80 mm/s ZONA B / C (Satisfatório) 0.71 a 1.80 mm/s 1.12 a 2.80 mm/s 1.80 a 4.50 mm/s 2.80 a 7.10 mm/s ZONA C / D (Alerta) 1.80 a 4.50 mm/s 2.80 a 7.10 mm/s 4.50 a 7.10 mm/s 7.10 a 11.20 mm/s ZONA D (Perigo) &gt; 4.50 mm/s &gt; 7.10 mm/s &gt; 7.10 mm/s &gt; 11.20 mm/s',
};

const F_TORRE_150RPM = {
  campo: 'conteudo_html',
  trecho: 'O monitoramento da aceleração em um ventilador de torre de resfriamento de 150 RPM produziria um sinal virtualmente nulo, enquanto o deslocamento identificaria corretamente um desbalanceamento crítico.',
};

const F_ROL_1800RPM = {
  campo: 'conteudo_html',
  trecho: 'Para um rolamento com 9 elementos rolantes (N = 9), uma velocidade do eixo de 30 Hz (1800 RPM), um diâmetro de esfera de 7,938 mm e um diâmetro primitivo de 38,50 mm',
};

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm07-01',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 10,
  beats: [
    {
      id: 'abertura-vibracao',
      tipo: 'fala',
      quem: 'narrador',
      texto: 'Casa de máquinas das bombas de recalque. Juninho encosta uma ponteira metálica longa (Stinger) na mão contra o mancal de um compressor tentando ouvir o rolamento no coletor de dados.',
    },
    {
      id: 'juninho-usa-stinger',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'empolgado',
      texto: 'Mestre Simon, que praticidade essa ponta de prova manual Stinger! Nem preciso limpar a tinta do mancal e já estou medindo alta frequência do rolamento!',
    },
    {
      id: 'simon-corrige-stinger',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Você está medindo o tremor da sua mão, isso sim! A ponta de prova Stinger corta tudo acima de 1.000 Hz, atuando como um filtro passa-baixas agressivo que esconde defeitos de rolamento!',
      fonte: F_FIXACAO,
    },
    {
      id: 'bia-explica-stud-magnet',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'pensativo',
      texto: 'Olha a diferença física: a base magnética alcança até 5.000 Hz para rotas periódicas, e a montagem por perno roscado (Stud) entrega conexão metal-metal perfeita até 10.000 Hz!',
      fonte: F_FIXACAO,
    },
    {
      id: 'referencia-tabela-sensores',
      tipo: 'referencia',
      texto: 'Compare na aba de tabelas a resposta em frequência: Perno (Stud) até 10.000 Hz, Base Magnética até 5.000 Hz e Ponta de Prova (Stinger) limitada a 1.000 Hz.',
      alvo: { aba: 'tabelas' },
      fonte: [F_FIXACAO, F_ZONA_ISO],
    },
    {
      id: 'escolha-fixacao-acelerometro',
      tipo: 'escolha',
      pergunta: 'Para detectar defeitos incipientes de alta frequência nas pistas de rolamento de um compressor centrífugo, qual método de fixação do acelerômetro deve ser utilizado?',
      fonte: F_FIXACAO,
      opcoes: [
        {
          id: 'a',
          texto: 'Ponta de prova manual (Stinger), pois responde até 1.000 Hz sem precisar fixar.',
          fonte: F_FIXACAO,
          reacao: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: 'Inútil para rolamento! A Stinger morre em 1.000 Hz e atenua completamente os impactos ultrassônicos e de alta frequência das esferas.',
              fonte: F_FIXACAO,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Montagem por perno roscado (Stud), que garante resposta linear até 10.000 Hz (ou base magnética limpa até 5.000 Hz em rotas gerais).',
          ideal: true,
          fonte: F_FIXACAO,
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Padrão ouro! O contato rígido metal-metal transmite fielmente a alta frequência até 10.000 Hz para o cristal piezoelétrico.',
              fonte: F_FIXACAO,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Prender o sensor com fita crepe sobre a carenagem plástica do ventilador.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'assustado',
              texto: 'Fita adesiva em carenagem frouxa amortece toda a vibração do mancal e só mede o chocalho da lata!',
            },
          ],
        },
      ],
    },
    {
      id: 'marta-pergunta-150rpm',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'curioso',
      texto: 'Simon, e lá no alto da torre de resfriamento, onde aquela hélice gigante gira devagarzinho a 150 RPM? Medimos aceleração também?',
      fonte: F_TORRE_150RPM,
    },
    {
      id: 'simon-explica-deslocamento-velocidade',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'aprovando',
      texto: 'Boa pergunta, Dona Marta! Num ventilador lento de 150 RPM, medir aceleração daria um sinal virtualmente nulo! Em baixa rotação usamos deslocamento, e em máquinas médias usamos velocidade (mm/s).',
      fonte: [F_TORRE_150RPM, F_ZONA_ISO],
    },
    {
      id: 'causo-sabado-perdido-120hz',
      tipo: 'causo',
      titulo: 'O Sábado Inteiro Alinhando um Defeito Elétrico de 120 Hz',
      fonte: [F_FFT_3200, F_LASER_005],
      falas: [
        {
          quem: 'simon',
          emocao: 'rindo',
          texto: 'Certa vez um analista apressado configurou o coletor FFT com baixa resolução, mediu uma bomba e viu um pico gordo perto de 120 Hz. Na hora gritou: "É harmônico mecânico do acoplamento!"',
          fonte: F_FFT_3200,
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'E a equipe mecânica desmontou a bomba no fim de semana, mestre?',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Passaram o sábado alinhando o eixo a laser para menos de 0.05 mm! Quando religaram no domingo, a vibração continuava igualzinha, porque o pico real era em exatos 120 Hz da rede elétrica!',
          fonte: [F_FFT_3200, F_LASER_005],
        },
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'Sem configurar o FFT para alta resolução (mínimo de 3200 LOR), o pico elétrico de 120 Hz fica fundido com o 4x RPM mecânico do motor, que sob carga escorrega para 116.8 Hz!',
          fonte: F_FFT_3200,
        },
      ],
    },
    {
      id: 'mito-verdade-fft-120hz',
      tipo: 'mitoVerdade',
      afirmacao: 'Um espectro FFT de baixa resolução é suficiente para separar a vibração eletromagnética de 120 Hz do harmônico mecânico de 4x RPM (116.8 Hz) em motores assíncronos sob carga.',
      verdade: false,
      fonte: F_FFT_3200,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'serio',
          texto: 'Mito! Sem configurar o analisador FFT para alta resolução espectral (mínimo de 3200 LOR), os picos de 120 Hz e 116.8 Hz se fundem num único morro largo.',
          fonte: F_FFT_3200,
        },
        {
          quem: 'simon',
          emocao: 'aprovando',
          texto: 'Com 3200 LOR você enxerga os dois picos separados na tela e sabe na hora se chama o eletricista ou o mecânico!',
          fonte: F_FFT_3200,
        },
      ],
    },
    {
      id: 'juninho-pergunta-1800rpm',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'duvida',
      texto: 'Bia, e para achar as frequências de falha de rolamento (BPFO e BPFI) num motor de 1800 RPM com 9 esferas, qual é a frequência base do eixo em Hz?',
      fonte: F_ROL_1800RPM,
    },
    {
      id: 'bia-introduz-calc-30hz',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'aprovando',
      texto: 'Basta converter 1800 rotações por minuto para rotações por segundo (Hz), Juninho! Calcula aqui.',
      fonte: F_ROL_1800RPM,
    },
    {
      id: 'calculadora-frequencia-eixo',
      tipo: 'calculadora',
      titulo: 'Conversão de Rotação (RPM) para Frequência Fundamental (1x Hz)',
      formula: 'f (Hz) = RPM / 60',
      enunciado: 'Um motor elétrico de 4 polos aciona um ventilador com velocidade de eixo de 1800 RPM (e rolamento de 9 esferas de 7,938 mm). Qual é a frequência fundamental de rotação (1x RPM) em Hz?',
      unidade: 'Hz',
      respostaCorreta: 30,
      tolerancia: 0.5,
      leituras: [
        { rotulo: 'Velocidade do Eixo', valor: '1800 RPM' },
        { rotulo: 'Diâmetro de Esfera (N=9)', valor: '7,938 mm' },
      ],
      opcoesRapidas: [15, 30, 60, 120],
      fonte: [F_ROL_1800RPM, F_FFT_3200],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'Exato! 1800 RPM divididos por 60 segundos equivalem a uma frequência fundamental de eixo de 30 Hz.',
          fonte: F_ROL_1800RPM,
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Para converter rotações por minuto (1800 RPM) em rotações por segundo (Hz), basta dividir 1800 por 60, obtendo 30 Hz.',
          fonte: F_ROL_1800RPM,
        },
      ],
    },
    {
      id: 'inspecao-rotas-vibracao',
      tipo: 'inspecao',
      titulo: 'Diagnóstico de Espectro e Severidade de Vibração',
      enunciado: 'Analise quatro práticas e leituras de manutenção preditiva por vibração. Qual delas representa um erro técnico de diagnóstico?',
      fonte: [F_TORRE_150RPM, F_LASER_005, F_FFT_3200, F_ZONA_ISO],
      pontos: [
        {
          id: 'a',
          rotulo: 'Usar apenas aceleração para detectar desbalanceamento num ventilador de torre a 150 RPM',
          correta: true,
          fonte: F_TORRE_150RPM,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Erro clássico! A 150 RPM a aceleração produz um sinal virtualmente nulo; em baixa frequência deve-se monitorar o deslocamento!',
              fonte: F_TORRE_150RPM,
            },
          ],
        },
        {
          id: 'b',
          rotulo: 'Alinhar eixos acoplados utilizando alinhador a laser com tolerância inferior a 0.05 mm',
          fonte: F_LASER_005,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Padrão de excelência! Tolerância abaixo de 0.05 mm elimina o desalinhamento angular axial com defasagem de 180°.',
              fonte: F_LASER_005,
            },
          ],
        },
        {
          id: 'c',
          rotulo: 'Configurar resolução mínima de 3200 LOR para separar 120 Hz elétrico de 116.8 Hz mecânico',
          fonte: F_FFT_3200,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Perfeito! Os 3200 LOR evitam confundir excentricidade eletromagnética do estator com harmônico mecânico.',
              fonte: F_FFT_3200,
            },
          ],
        },
        {
          id: 'd',
          rotulo: 'Bomba pequena operando abaixo de 0.71 mm/s RMS enquadrada na Zona A / B (Excelente)',
          fonte: F_ZONA_ISO,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Operação suave! Vibração global abaixo de 0.71 mm/s confirma equilíbrio dinâmico excelente.',
              fonte: F_ZONA_ISO,
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-sussurro-rolamento',
      tipo: 'filosofia',
      titulo: 'Ouvir o Sussurro Antes do Grito',
      principio: 'Nenhuma máquina rotativa quebra de surpresa de madrugada: meses antes ela sussurra em alta frequência no rolamento, semanas antes conversa em velocidade e só no fim grita em calor.',
      fonte: [F_FIXACAO, F_ZONA_ISO],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Quem mede com sensor certo (Stud até 10.000 Hz ou ímã até 5.000 Hz) e alinha a laser abaixo de 0.05 mm programa a troca do rolamento num dia calmo, em vez de apagar incêndio!',
          fonte: [F_FIXACAO, F_LASER_005],
        },
      ],
    },
    {
      id: 'quiz-desalinhamento-axial',
      tipo: 'quiz',
      enunciado: 'Qual assinatura clássica caracteriza o desalinhamento angular num acoplamento de bomba centrífuga e qual é a meta de tolerância no alinhamento a laser?',
      fonte: F_LASER_005,
      opcoes: [
        {
          id: 'a',
          texto: 'Vibração elevada no plano axial com diferença de fase de 180° através do acoplamento; meta de alinhamento a laser inferior a 0.05 mm.',
          correta: true,
          fonte: F_LASER_005,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Na mosca! Desalinhamento angular força os mancais no sentido axial com fase de 180°, e o laser corrige para menos de 0.05 mm.',
              fonte: F_LASER_005,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Ausência total de vibração axial e alinhamento visual com régua escolar com folga de 5 mm.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'irritado',
              texto: 'Com folga de milímetros o acoplamento destrói os retentores e rolamentos em poucos dias!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Pico exclusivo em 10.000 Hz medido apenas com ponta de prova Stinger.',
          fonte: F_FIXACAO,
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Desalinhamento aparece nas baixas ordens (1x e 2x RPM), e a Stinger nem passa de 1.000 Hz!',
              fonte: F_FIXACAO,
            },
          ],
        },
      ],
    },
    {
      id: 'marta-elogia-laser',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'aprovando',
      texto: 'Investir no alinhador a laser e no coletor FFT de 3200 LOR já salvou nossa equipe de desmontar motor bom à toa no fim de semana!',
      fonte: [F_LASER_005, F_FFT_3200],
    },
    {
      id: 'bia-reforca-iso-zonas',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'aprovando',
      texto: 'E acompanhar a evolução da Zona A/B para a Zona C na tabela ISO 10816-3 dá meses de antecedência para comprar o rolamento com calma.',
      fonte: F_ZONA_ISO,
    },
    {
      id: 'juninho-guarda-stinger',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'rindo',
      texto: 'Já guardei a ponteira Stinger no fundo da maleta e separei a base magnética e os pernos Stud para os compressores, mestre!',
      fonte: F_FIXACAO,
    },
    {
      id: 'simon-chama-termografia',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'empolgado',
      texto: 'Agora que ouvimos a máquina pelo acelerômetro, na próxima aula vamos enxergar o calor invisível com a Termografia Infravermelha!',
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Respeite o limite do sensor: Perno (Stud) vai a 10.000 Hz, Base Magnética a 5.000 Hz e Ponta Stinger cai em 1.000 Hz.',
        'Em rotações muito baixas (ex.: torre a 150 RPM) meça deslocamento; alinhe acoplamentos a laser com tolerância < 0.05 mm.',
        'Use alta resolução espectral (mínimo 3200 LOR) para separar o pico elétrico de 120 Hz do harmônico mecânico de 116.8 Hz.',
      ],
      proxima: 'Na próxima aula, avançamos para Termografia Infravermelha: prioridades NETA, diagnóstico de filtro secador obstruído e armadilhas de reflexão!',
      fonte: [F_FIXACAO, F_TORRE_150RPM, F_LASER_005, F_FFT_3200],
    },
  ],
};
