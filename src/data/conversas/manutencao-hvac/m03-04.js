// ═══════════════════════════════════════════════════════════════════════════
// CONVERSA — manutencao-hvac / m03-04
// Manutenção do Sistema de Condensado
// Cenário: Bancada da Oficina (sifão, amônio quaternário, proteção UV-C, borne R, heat trace)
// ═══════════════════════════════════════════════════════════════════════════

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm03-04',
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
      texto: 'Na bancada da oficina, Simon segura um trecho de tubo de PVC amarelado e quebradiço ao lado de uma minibomba de condensado, fita de alumínio e pastilhas de amônio quaternário.',
    },
    {
      id: 'abertura-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Turma, sabe o que mais gera chamado de emergência e estraga forro de gesso de cliente corporativo? Não é falha de compressor: é dreno entupido ou mal instalado!',
    },
    {
      id: 'abertura-3',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mestre, e pra limpar o lodo da bandeja e do dreno, posso jogar água sanitária (hipoclorito) que é baratinho?',
    },

    // ── 2. CONFLITO ─────────────────────────────────────────────────────────
    {
      id: 'conflito-1',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'alerta',
      texto: 'Proibidíssimo no protocolo Simon, Juninho! O hipoclorito de sódio provoca corrosão galvânica severa em bandejas de aço galvanizado, resseca o PVC e evapora rápido sem deixar efeito residual!',
    },
    {
      id: 'conflito-2',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'Exato! Nós usamos exclusivamente algicidas e fitas biocidas à base de amônio quaternário de pH neutro, que destroem o biofilme sem atacar o metal nem o plástico.',
    },
    {
      id: 'conflito-3',
      tipo: 'escolha',
      pergunta: 'Ao instalar lâmpadas germicidas UV-C (254 nm) próximas à bandeja e à tubulação de dreno de PVC, qual proteção física é obrigatória?',
      opcoes: [
        {
          id: 'a',
          texto: 'Blindar os tubos de PVC e cabos plásticos envolvendo-os com fita de alumínio autoadesiva refletiva.',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Exato! Sem a fita de alumínio autoadesiva, a radiação UV-C fotodegrada o polímero do PVC, deixando o tubo quebradiço até rachar!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Pintar o tubo de PVC com tinta látex comum.',
          reacao: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Tinta comum descasca com a umidade e não bloqueia a fotodegradação UV-C! Use fita metálica de alumínio.',
            },
          ],
        },
      ],
    },

    // ── 3. CAUSO ────────────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'A Boia Ligada no Fio Y que Não Evitou a Inundação',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num escritório de advocacia, o instalador ligou a chave de nível alto da bomba de condensado cortando só o fio Y (compressor), deixando o ventilador interno rodando.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Quando o dreno entupiu por duplo sifonamento numa mangueira flexível sem suporte a cada 1,2 metros, o compressor parou, mas a turbina continuou soprando e jogando a água da bandeja cheia direto sobre a mesa de reuniões!',
        },
        {
          quem: 'juninho',
          emocao: 'espantado',
          texto: 'Por isso o intertravamento de segurança deve cortar o condutor de **24V** vindo do transformador (borne R) em série antes do termostato: assim apaga evaporadora, condensadora e ventilador de uma vez só!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Identifique o condutor de 24V vindo do transformador (borne R) antes de conectar ao termostato. Ligue o contato normalmente fechado (NF) do alarme de nível alto da bomba em série com este condutor R.',
          },
        },
      ],
    },

    // ── 4. INSIGHT ──────────────────────────────────────────────────────────
    {
      id: 'insight-1',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'Anotem os parâmetros da tubulação de condensado: declividade mínima de **1%** (1/8 pol. por pé), diâmetro interno mínimo de 3/4 pol. até **20 TR** e suporte rígido a cada 1,2 metros para evitar barrigas e duplo sifonamento (*air lock*).',
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Confirmar declividade (Mín. 1/8" por pé / 1% de inclinação)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O diâmetro nominal interno mínimo é de 3/4" para sistemas até 20 TR [17] e 1" a 1-1/4" para capacidades superiores [20].',
        },
      ],
    },
    {
      id: 'insight-2',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'didatico',
      texto: 'No sifão P-Trap, a Dimensão A (altura da saída) deve ser igual à pressão estática mais 0,5 pol. (mínimo de **50 mm** / 2 pol.) e a Dimensão C (profundidade do selo) pelo menos o dobro da pressão estática!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O sifão exige uma **Dimensão A** (altura da saída) igual à pressão estática do ventilador mais 0,5" (mínimo de 2" ou 50 mm) e uma **Dimensão C** (profundidade do selo) de pelo menos duas vezes a pressão estática máxima [20].',
      },
    },
    {
      id: 'insight-2b',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'E em câmaras de congelados (**-10°C a -30°C**), drenos abaixo de **0°C** exigem cabo autoaquecedor (*Heat Tracing*) fixado no fundo do tubo, coberto com fita de alumínio e isolamento de **25 mm**!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Em recintos com temperaturas de -10°C a -30°C, a umidade congela nas aletas do evaporador [3].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Tubulações que percorrem áreas abaixo de 0°C devem dispor de **cabos de aquecimento autorreguláveis** [44]. O cabo HT deve ser fixado ao longo da geratriz inferior e recoberto com **fita de alumínio autoadesiva** para distribuir uniformemente o calor antes de aplicar o isolamento de espuma elastomérica de célula fechada de **25 mm (1")** [44].',
        },
      ],
    },
    {
      id: 'insight-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'Olhem também a Tabela 3.4.1 sobre a Razão de Calor Sensível (SHR) com **90%** de umidade: em resfriamento de conforto (**45°F** / **7,2°C**) o SHR é 0,59 (carga latente extrema, muita água no dreno!), enquanto em ultra baixa temperatura (**-30°F** / **-34,4°C**) o SHR vai a 0,98.',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Parâmetros de projeto indicando a razão de calor sensível (SHR) estimada em ambientes saturados com 90% de umidade relativa. Ambiente de Aplicação Temperatura do Recinto (°F / °C) Razão de Calor Sensível (SHR) Severidade da Carga Latente Resfriamento de Conforto (Alta Temp.) 45°F / 7,2°C 0,59 Extrema Armazenamento em Média Temp. 32°F / 0°C 0,70 Alta Congelados (Câmara de Baixa Temp.) -10°F / -23,3°C 0,93 Baixa Congelados de Ultra Baixa Temp. -30°F / -34,4°C 0,98 Insignificante',
      },
    },
    {
      id: 'insight-4',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mestre, e aquele tê de inspeção na entrada do sifão? Como a gente deve deixá-lo depois de varetar o tubo?',
    },
    {
      id: 'insight-5',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'O tê de limpeza na entrada do sifão deve ficar sempre tampado (com cap sem cola), enquanto o respiro vertical após o sifão fica aberto para a atmosfera!',
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Instalar dois sifões seguidos na mesma linha de dreno dobra a proteção contra entrada de ar falso.',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Mito! Dois sifões em série (ou uma barriga na mangueira flexível após o sifão) aprisionam um bolsão de ar pressurizado (*air lock* / duplo sifonamento) que bloqueia a descida da água por gravidade e transborda a bandeja!',
        },
      ],
    },

    // ── 5. PRÁTICA ──────────────────────────────────────────────────────────
    {
      id: 'pratica-1',
      tipo: 'inspecao',
      titulo: 'Auditoria do Sistema de Condensado (Padrão ENG-03-04)',
      enunciado: 'Qual das ações abaixo viola o protocolo técnico de manutenção do sistema de condensado?',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Confirmar declividade mínima de 1% (1/8 pol./pé) com suportes a cada 1,2 m, eliminando barrigas e duplo sifonamento.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Esta ação está correta! Sem barrigas na tubulação, não se forma bolsa de ar (*air lock*).',
            },
          ],
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Confirmar declividade (Mín. 1/8" por pé / 1% de inclinação)',
          },
        },
        {
          id: 'p2',
          rotulo: 'Ligar o contato NF da boia de segurança da bomba em série no condutor 24V (Terminal R) e testar a parada total.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'confiante',
              texto: 'Ação correta! Cortar o Terminal R de **24V** garante parada total em caso de nível alto.',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'Identifique o condutor de 24V vindo do transformador (borne R) antes de conectar ao termostato. Ligue o contato normalmente fechado (NF) do alarme de nível alto da bomba em série com este condutor R.',
              },
            },
          ],
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Identifique o condutor de 24V vindo do transformador (borne R) antes de conectar ao termostato.',
          },
        },
        {
          id: 'p3',
          rotulo: 'Despejar água sanitária (hipoclorito de sódio) na bandeja de aço galvanizado e deixar tubos de PVC expostos à luz UV-C.',
          correta: true,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Violação grave identificada! Hipoclorito corrói a bandeja metálica e a luz UV-C degrada o PVC se ele não estiver blindado com fita de alumínio!',
            },
          ],
        },
        {
          id: 'p4',
          rotulo: 'Em câmaras abaixo de 0°C, fixar cabo autoaquecedor (Heat Tracing) no fundo do dreno com fita de alumínio e isolamento de 25 mm.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Ação correta! Cabo autorregulável na geratriz inferior, fita de alumínio e espuma elastomérica de **25 mm**!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Tubulações que percorrem áreas abaixo de 0°C devem dispor de **cabos de aquecimento autorreguláveis** [44]. O cabo HT deve ser fixado ao longo da geratriz inferior e recoberto com **fita de alumínio autoadesiva** para distribuir uniformemente o calor antes de aplicar o isolamento de espuma elastomérica de célula fechada de **25 mm (1")** [44].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Tubulações que percorrem áreas abaixo de 0°C devem dispor de **cabos de aquecimento autorreguláveis** [44]. O cabo HT deve ser fixado ao longo da geratriz inferior e recoberto com **fita de alumínio autoadesiva** para distribuir uniformemente o calor antes de aplicar o isolamento de espuma elastomérica de célula fechada de **25 mm (1")** [44].',
          },
        },
      ],
    },

    // ── 6. TESTE ────────────────────────────────────────────────────────────
    {
      id: 'quiz-1',
      tipo: 'quiz',
      enunciado: 'Uma minibomba de condensado fica ligando e desligando repetidamente a cada poucos segundos (short-cycling) mesmo depois que o ar-condicionado já parou de condensar água. Qual é a causa mecânica?',
      opcoes: [
        {
          id: 'a',
          texto: 'A válvula de retenção (*check valve*) na saída da bomba acumulou biofilme e perdeu estanqueidade, fazendo a coluna de água vertical retornar ao reservatório.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Exato! A bomba joga a água para cima na mangueira vertical, desliga, e a água volta toda porque a válvula de retenção não veda — acionando a boia sem parar até queimar!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'O cabo autoaquecedor (*Heat Tracing*) está com isolamento de **25 mm** muito grosso.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'didatico',
              texto: 'O isolamento de **25 mm** serve para drenos em câmaras frias abaixo de **0°C**; o *short-cycling* da minibomba é falha na válvula de retenção!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Tubulações que percorrem áreas abaixo de 0°C devem dispor de **cabos de aquecimento autorreguláveis** [44]. O cabo HT deve ser fixado ao longo da geratriz inferior e recoberto com **fita de alumínio autoadesiva** para distribuir uniformemente o calor antes de aplicar o isolamento de espuma elastomérica de célula fechada de **25 mm (1")** [44].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'isolamento de espuma elastomérica de célula fechada de **25 mm (1")** [44].',
          },
        },
        {
          id: 'c',
          texto: 'Falta de água sanitária (hipoclorito) dentro do reservatório da bomba.',
          correta: false,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Nunca use hipoclorito! Higienize o reservatório, a boia magnética e a válvula de retenção com água limpa e biocida neutro.',
            },
          ],
        },
      ],
    },
    {
      id: 'quiz-2',
      tipo: 'quiz',
      enunciado: 'Onde o contato normalmente fechado (NF) do alarme de nível alto da bomba de condensado deve ser conectado para evitar transbordamento e arraste de água pela turbina?',
      opcoes: [
        {
          id: 'a',
          texto: 'Em série com o condutor de **24V** vindo do transformador (borne R) antes do termostato, desligando compressor e ventilador.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Perfeito! Cortar o borne R de **24V** interrompe todo o sistema imediatamente quando o nível sobe.',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'Identifique o condutor de 24V vindo do transformador (borne R) antes de conectar ao termostato. Ligue o contato normalmente fechado (NF) do alarme de nível alto da bomba em série com este condutor R.',
              },
            },
          ],
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Identifique o condutor de 24V vindo do transformador (borne R) antes de conectar ao termostato. Ligue o contato normalmente fechado (NF) do alarme de nível alto da bomba em série com este condutor R.',
          },
        },
        {
          id: 'b',
          texto: 'Apenas no fio Y do compressor, mantendo o ventilador interno em velocidade máxima.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Se o ventilador continuar rodando com a bandeja cheia, ele joga água para dentro do ambiente climatizado!',
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA ────────────────────────────────────────────────────────
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Drenagem É Hidráulica de Precisão',
      principio: 'Água condensada não sobe ladeira nem atravessa bolsão de ar: declividade constante, sifão único e intertravamento elétrico evitam desastres patrimoniais.',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Antes de fechar qualquer ordem de serviço, façam o teste real: despejem água na bandeja, vejam o escoamento livre e levantem a boia de nível alto com o dedo para confirmar que a máquina inteira desliga.',
        },
        {
          quem: 'bia',
          emocao: 'confiante',
          texto: 'Com isso concluímos o Módulo 03 de Fluxo de Ar e Drenagem! O lado do ar e da água estão blindados.',
        },
        {
          quem: 'juninho',
          emocao: 'animado',
          texto: 'Agora venha o Desafio do Módulo 03 e depois o Módulo 04 de Circuito Frigorífico!',
        },
      ],
    },

    // ── 8. FECHAMENTO ───────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte a Tabela 3.4.1 (Razão de Calor Sensível SHR e Carga Latente) e a Tabela 3.4.2 (Checklist de Manutenção Preventiva do Sistema de Condensado).',
      alvo: {
        aba: 'tabelas',
      },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Garantir declividade mínima de **1%** (1/8 pol./pé), suporte a cada 1,2 m, sifão único (Dimensão A mín. **50 mm**) e intertravamento da boia no borne R (**24V**).',
        'Usar biocidas de amônio quaternário neutro (proibido hipoclorito/água sanitária) e blindar tubos de PVC contra luz UV-C com fita de alumínio.',
        'Inspecionar a válvula de retenção da bomba contra *short-cycling* e instalar *Heat Tracing* na geratriz inferior com isolamento de **25 mm** em câmaras abaixo de **0°C**.',
      ],
      proxima: 'Concluímos o Módulo 03! No Módulo 04 (Aula 4.1), avançaremos para detecção científica de vazamentos, brasagem com nitrogênio passante e torques de flange!',
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Confirmar declividade (Mín. 1/8" por pé / 1% de inclinação)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O sifão exige uma **Dimensão A** (altura da saída) igual à pressão estática do ventilador mais 0,5" (mínimo de 2" ou 50 mm)',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Identifique o condutor de 24V vindo do transformador (borne R) antes de conectar ao termostato.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Tubulações que percorrem áreas abaixo de 0°C devem dispor de **cabos de aquecimento autorreguláveis** [44]. O cabo HT deve ser fixado ao longo da geratriz inferior e recoberto com **fita de alumínio autoadesiva** para distribuir uniformemente o calor antes de aplicar o isolamento de espuma elastomérica de célula fechada de **25 mm (1")** [44].',
        },
      ],
    },
  ],
};
