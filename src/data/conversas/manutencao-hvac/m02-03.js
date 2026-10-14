// ═══════════════════════════════════════════════════════════════════════════
// CONVERSA — manutencao-hvac / m02-03
// Diagnóstico Elétrico para Manutenção
// Cenário: Bancada da Oficina (queda de tensão, megômetro IEEE 43, teste IPM, rede VRF)
// ═══════════════════════════════════════════════════════════════════════════

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm02-03',
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
      texto: 'Sobre a bancada da oficina estão uma placa inversora de VRF com módulo IPM exposto, um contator trifásico chamuscado e um megômetro digital.',
    },
    {
      id: 'abertura-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Turma, a eletricidade é implacável com motores: para cada **10°C** de aumento na temperatura do enrolamento acima do limite térmico, a vida útil do motor cai pela metade!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Pelas leis físicas, para cada 10°C de aumento na temperatura do enrolamento acima do limite térmico do motor, sua vida útil operacional é cortada pela metade.',
      },
    },
    {
      id: 'abertura-3',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mestre, e como a gente pega um contator ruim antes dele derreter o painel inteiro?',
    },

    // ── 2. CONFLITO E APOSTA ────────────────────────────────────────────────
    {
      id: 'conflito-1',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'Medindo a queda de tensão em carga, Juninho! O ideal é **0,0 V**, e contatos saudáveis dão menos de **0,1 V** CA. Passou de **0,5 V** CA, a resistência já é crítica!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A leitura ideal é de **0,0 V**.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Contatos saudáveis sob carga nominal apresentam quedas inferiores a **0,1 V CA** [8].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Se a queda de tensão for superior a **0,5 V CA**, a resistência elétrica atingiu nível crítico [9].',
        },
      ],
    },
    {
      id: 'conflito-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Pensa na física: sob **30 A**, uma queda de apenas **1 V** gera 30 W de calor concentrado no polo do contator! Já nos relés de estado sólido (SSRs), a queda normal é de **1,0 V** a **2,5 V**.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Sob 30 A, uma queda de 1 V gera 30 W de calor concentrado no bloco plástico, provocando derretimento e queda na tensão fornecida ao compressor [9].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Contudo, apresentam quedas de tensão operacionais normais de 1,0 V a 2,5 V devido à física das barreiras P-N [8].',
        },
      ],
    },
    {
      id: 'conflito-3',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'alerta',
      texto: 'E cuidado redobrado nos sistemas inverter: nunca aplique os **500 V** CC do megômetro nos cabos do compressor sem desconectá-los totalmente da placa inversora!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Ao realizar o teste de resistência de isolamento fase-terra com o megômetro, a aplicação da alta tensão de 500 V CC nos enrolamentos do compressor exige a desconexão prévia completa de todos os cabos de ligação conectados à placa eletrônica do inversor.',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Por que o uso de disjuntores diferenciais residenciais (DR) comuns do Tipo AC ou Tipo A é proibido pela NBR 5410 em circuitos de compressores inverter trifásicos?',
      opcoes: [
        {
          id: 'a',
          texto: 'Porque o DR Tipo AC desarma à toa a cada partida do ventilador.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'O perigo é muito pior que desarme falso: o DR comum fica "cego" e NÃO desarma quando alguém leva um choque!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Porque inversores geram pequenas correntes de fuga CC lisas que saturam magneticamente o núcleo do DR comum (cegueira de DR), exigindo DR do Tipo B.',
          ideal: true,
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Na mosca! A fuga CC lisa cega os DRs Tipo AC e Tipo A; só o Dispositivo DR do Tipo B protege acionamentos inverter trifásicos.',
            },
          ],
        },
      ],
    },

    // ── 3. CAUSO ────────────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Loop de Terra que Travava o VRF Inteiro no Código U4',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num prédio comercial, o VRF travava toda semana com erro de comunicação (U4 na Daikin / 7100 na Mitsubishi). O instalador tinha aterrado a malha do cabo blindado em todas as evaporadoras e na condensadora!',
        },
        {
          quem: 'bia',
          emocao: 'didatico',
          texto: 'Como cada evaporadora está ligada num ponto diferente do prédio, existem diferenças de potencial de terra que fazem circular corrente parasita pela malha!',
        },
        {
          quem: 'simon',
          emocao: 'confiante',
          texto: 'Exato! Na rede Daikin D-III (**16 V** CC) usa-se cabo 16 a 18 AWG sem blindagem; e quando se usa cabo blindado (Mitsubishi/Samsung), aterra-se a malha exclusivamente na condensadora!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'rede Daikin D-III de 16 V CC) e sofrem com loops de terra e induções magnéticas [32]: Daikin (VRV): Exige fiação flexível de 16 a 18 AWG multifilar **sem blindagem** [33].',
          },
        },
      ],
    },

    // ── 4. INSIGHT ──────────────────────────────────────────────────────────
    {
      id: 'insight-1',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'confiante',
      texto: 'Pela Tabela 2.3.2 (IEEE 81), para sistemas comerciais de AVAC e VRF a resistência de terra recomendada é de **1,0 a 5,0** Ω, e em hospitais e data centers abaixo de **1,0** Ω!',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Hospitais / Salas de Servidores (Data Centers) < 1,0 Proteção de equipamentos médicos vitais e eletrônica digital complexa [31]. Sistemas Comerciais de AVAC / VRF 1,0 a 5,0 Minimizar ruído e loop de terra na rede de comunicação (D-III, RS-485) [29].',
      },
    },
    {
      id: 'insight-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'Para medir o Barramento CC, multiplicamos a tensão CA por 1,414: rede **220 V** CA produz **311 V** CC; rede **380 V** CA produz **537 V** CC; e rede **460 V** CA produz **650 V** CC!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'VCC_Barramento = VCA_RMS × 1,414 Rede 220 V CA: produz barramento de aproximadamente 311 V CC. Rede 380 V CA: produz barramento de aproximadamente 537 V CC. Rede 460 V CA: produz barramento de aproximadamente 650 V CC.',
      },
    },
    {
      id: 'insight-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'E no teste estático do IPM (erros Daikin L5, Mitsubishi 4250, LG 21): solte U, V, W e meça na escala de Diodo entre P+, N- e as saídas. Deve indicar OL num sentido e queda de **0,4V a 0,5V** no inverso!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Com o multímetro em escala de Diodo, meça de P+ para U, V, W e de U, V, W para N- (deve indicar OL). Em seguida, meça as inversas (deve indicar queda de 0,4V a 0,5V). Se qualquer medição acusar curto-circuito (0,0V) ou circuito aberto (OL nas duas polaridades), a placa inversora está queimada e deve ser trocada por completo.',
      },
    },
    {
      id: 'insight-4',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'confiante',
      texto: 'Já na resistência de isolamento pelo megômetro a **500 V** CC (IEEE 43), a regra é **1 MΩ/kV** + **1 MΩ**: num compressor de **460V** (**0,46 kV**), o mínimo aceitável é **1,46 MΩ**.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Para compressores de AVAC operando abaixo de 1000V, aplica-se uma tensão contínua de **500 V CC** [11].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Para um compressor trifásico de 460V (0,46 kV), a isolação mínima é de: Risolamento_min = 0,46 kV × 1 MΩ/kV + 1 MΩ = 1,46 MΩ',
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Os capacitores de partida possuem resistores de sangria (15.000 a 20.000 Ω) projetados para descarregar a tensão residual para menos de 50V em até um minuto após desligado.',
      verdade: true,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Os capacitores de partida possuem resistores de sangria (15.000 a 20.000 Ω a 2 W) para descarregar a tensão residual para menos de 50V em até um minuto após desligado [7].',
      },
      explicacao: [
        {
          quem: 'simon',
          emocao: 'aprovando',
          texto: 'Verdade! Mas se o resistor de sangria (**15.000 a 20.000 Ω**) estiver aberto, o capacitor mantém a carga alta — por isso sempre medimos antes de tocar!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Os capacitores de partida possuem resistores de sangria (15.000 a 20.000 Ω a 2 W) para descarregar a tensão residual para menos de 50V em até um minuto após desligado [7].',
          },
        },
      ],
    },
    {
      id: 'insight-5',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mestre, vamos fazer na prática agora o cálculo da tensão do barramento CC para uma rede trifásica!',
    },

    // ── 5. PRÁTICA ──────────────────────────────────────────────────────────
    {
      id: 'pratica-1',
      tipo: 'calculadora',
      titulo: 'Cálculo da Tensão do Barramento CC (Link DC)',
      formula: 'VCC_Barramento = VCA_RMS × 1,414',
      enunciado: 'Você está diagnosticando um VRF trifásico alimentado por uma rede de 380 V CA (código de falha de subtensão no link CC). Qual é a tensão contínua nominal esperada no barramento CC após a ponte retificadora?',
      unidade: 'V CC',
      respostaCorreta: 537,
      tolerancia: 2,
      leituras: [
        { rotulo: 'Tensão eficaz da rede trifásica (VCA_RMS)', valor: '380 V CA' },
        { rotulo: 'Fator de pico da retificação (√2)', valor: '1,414' },
      ],
      opcoesRapidas: [311, 380, 537, 650],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Exato! **380 V** CA multiplicados por 1,414 entregam aproximadamente **537 V** CC no barramento!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Rede 380 V CA: produz barramento de aproximadamente 537 V CC.',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'didatico',
          texto: 'Multiplique **380 V** CA por 1,414: o barramento CC nominal para **380 V** CA é de **537 V** CC (**311 V** CC é para **220 V** CA e **650 V** CC para **460 V** CA).',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'VCC_Barramento = VCA_RMS × 1,414 Rede 220 V CA: produz barramento de aproximadamente 311 V CC. Rede 380 V CA: produz barramento de aproximadamente 537 V CC. Rede 460 V CA: produz barramento de aproximadamente 650 V CC.',
          },
        },
      ],
      fonte: {
        campo: 'conteudo_html',
        trecho: 'VCC_Barramento = VCA_RMS × 1,414 Rede 220 V CA: produz barramento de aproximadamente 311 V CC. Rede 380 V CA: produz barramento de aproximadamente 537 V CC. Rede 460 V CA: produz barramento de aproximadamente 650 V CC.',
      },
    },
    {
      id: 'pratica-2',
      tipo: 'inspecao',
      titulo: 'Inspeção Elétrica Avançada em Sistemas VRF e Inverter',
      enunciado: 'Selecione o ÚNICO procedimento tecnicamente correto durante o diagnóstico elétrico de um sistema VRF comercial:',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Desconectar completamente os cabos U, V, W da placa inversora antes de injetar 500 V CC com o megômetro no compressor.',
          correta: true,
          fonte: {
            campo: 'infobox_campo',
            trecho: 'a aplicação da alta tensão de 500 V CC nos enrolamentos do compressor exige a desconexão prévia completa de todos os cabos de ligação conectados à placa eletrônica do inversor.',
          },
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Obrigatório! Se injetar **500 V** CC com os cabos ligados na placa, você queima os IGBTs e o microprocessador na hora.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'A injeção de 500 V CC retornará pelas conexões de potência e destruirá instantaneamente o módulo IPM e os circuitos integrados do inversor.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Instalar disjuntor DR comum do Tipo AC em compressores inverter trifásicos.',
          correta: false,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Proibido pela NBR 5410! Correntes de fuga CC lisas cegam o DR Tipo AC/A; exija sempre DR do Tipo B.',
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Aterrar a malha do cabo de comunicação em todas as evaporadoras e condensadoras para melhorar o sinal.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Proibido! Isso cria loop de terra e trava a rede (erros U4 / 7100). Quando houver blindagem, aterre apenas na unidade externa!',
            },
          ],
        },
        {
          id: 'p4',
          rotulo: 'Manter em operação normal um contator mecânico cuja queda de tensão em carga seja de 1 V CA (acima de 0,5 V CA).',
          correta: false,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Se a queda de tensão for superior a **0,5 V CA**, a resistência elétrica atingiu nível crítico [9]. Sob 30 A, uma queda de 1 V gera 30 W de calor concentrado no bloco plástico',
          },
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Errado! Acima de **0,5 V** CA o contator já está crítico; **1 V** sob **30 A** gera 30 W de calor e derrete o bloco!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Se a queda de tensão for superior a **0,5 V CA**, a resistência elétrica atingiu nível crítico [9]. Sob 30 A, uma queda de 1 V gera 30 W de calor concentrado no bloco plástico',
              },
            },
          ],
        },
      ],
    },

    // ── 6. TESTE ────────────────────────────────────────────────────────────
    {
      id: 'pergunta-1',
      tipo: 'quiz',
      enunciado: 'Um sistema VRV Daikin exibe o código de falha L4 no painel, enquanto outro módulo exibe o código L5. Consultando a Tabela 2.3.1, o que significam esses dois códigos?',
      opcoes: [
        {
          id: 'a',
          texto: 'L4 indica superaquecimento no dissipador de alumínio do módulo IPM (limpar dissipador/pasta térmica) e L5 indica sobrecorrente instantânea na saída do inversor CC.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Na mosca! L4 é temperatura alta na aleta do IPM e L5 é pico de sobrecorrente na saída CC (curto no enrolamento ou compressor travado).',
            },
          ],
        },
        {
          id: 'b',
          texto: 'L4 e L5 indicam apenas falta de gás refrigerante na linha de líquido.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'didatico',
              texto: 'Errado! L4 e L5 são proteções diretas do módulo inversor IPM (temperatura do dissipador e sobrecorrente CC).',
            },
          ],
        },
        {
          id: 'c',
          texto: 'L4 indica fusível de **24 V** CA aberto e L5 indica erro de comunicação RS-485.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Erro de comunicação na Daikin é U4! L4 é superaquecimento do dissipador do IPM e L5 é sobrecorrente de saída do inversor.',
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Se cair abaixo do limite (geralmente 19 V CA em sistemas de 24 V CA), a bobina perde a retenção.',
          },
        },
      ],
    },

    // ── 7. FILOSOFIA ────────────────────────────────────────────────────────
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Trocador de Placa Adivinha; Engenheiro de Campo Mede',
      principio: 'Antes de condenar uma placa inverter de milhares de reais, separe os cabos U-V-W, faça o teste de diodo no IPM e meça a isolação do compressor com o megômetro.',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Se o compressor estiver com isolação baixa para a carcaça e você apenas trocar a placa queimada, a placa nova explode no primeiro acionamento!',
        },
        {
          quem: 'bia',
          emocao: 'confiante',
          texto: 'Teste de diodo no IPM (**0,4V a 0,5V**) + megômetro no compressor solto (**1 MΩ/kV** + **1 MΩ**): diagnóstico elétrico à prova de balas!',
          fonte: [
            {
              campo: 'infobox_campo',
              trecho: 'Em seguida, meça as inversas (deve indicar queda de 0,4V a 0,5V).',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Risolamento_min = 0,46 kV × 1 MΩ/kV + 1 MΩ = 1,46 MΩ',
            },
          ],
        },
        {
          quem: 'juninho',
          emocao: 'empolgado',
          texto: 'E nunca mais aterro malha de comunicação nos dois lados! Que aula, turma!',
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte na aba **Tabelas & Parâmetros** as Tabelas 2.3.1 (Códigos de Falha IPM Daikin, Mitsubishi, LG, Samsung e Midea) e 2.3.2 (Limites de Aterramento IEEE 81).',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Contator e Megômetro:** queda de tensão acima de **0,5 V** CA condena o contator; megômetro a **500 V** CC exige cabos U-V-W soltos da placa e mínimo de **1,46 MΩ** em **460V**.',
        '**Barramento CC e IPM:** **220 V** CA → **311 V** CC, **380 V** CA → **537 V** CC, **460 V** CA → **650 V** CC; diodos do IPM devem medir **0,4V a 0,5V**.',
        '**Proteção e Redes VRF:** exigir DR Tipo B (evita cegueira por fuga CC lisa), aterramento de **1,0 a 5,0** Ω e malha blindada aterrada só na condensadora.',
      ],
      proxima: 'Prepare-se para o Desafio do Módulo 02 e, na sequência, vamos entrar no Módulo 03 com a Manutenção Preventiva da Serpentina da Evaporadora!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Se a queda de tensão for superior a **0,5 V CA**, a resistência elétrica atingiu nível crítico [9].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Para compressores de AVAC operando abaixo de 1000V, aplica-se uma tensão contínua de **500 V CC** [11].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Para um compressor trifásico de 460V (0,46 kV), a isolação mínima é de: Risolamento_min = 0,46 kV × 1 MΩ/kV + 1 MΩ = 1,46 MΩ',
        },
        {
          campo: 'conteudo_html',
          trecho: 'VCC_Barramento = VCA_RMS × 1,414 Rede 220 V CA: produz barramento de aproximadamente 311 V CC. Rede 380 V CA: produz barramento de aproximadamente 537 V CC. Rede 460 V CA: produz barramento de aproximadamente 650 V CC.',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Em seguida, meça as inversas (deve indicar queda de 0,4V a 0,5V).',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Sistemas Comerciais de AVAC / VRF 1,0 a 5,0 Minimizar ruído e loop de terra na rede de comunicação (D-III, RS-485) [29].',
        },
      ],
    },
  ],
};
