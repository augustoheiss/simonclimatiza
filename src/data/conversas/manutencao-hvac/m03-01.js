// ═══════════════════════════════════════════════════════════════════════════
// CONVERSA — manutencao-hvac / m03-01
// Manutenção da Serpentina da Evaporadora
// Cenário: Bancada da Oficina (desmontagem, proteção da EEV, química, sifão P-Trap)
// ═══════════════════════════════════════════════════════════════════════════

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm03-01',
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
      texto: 'Na bancada da oficina, Simon posiciona uma unidade evaporadora cassete de VRF sobre cavaletes, ao lado de uma bolsa coletora (bib kit), pentes de aletas e detergente enzimático.',
    },
    {
      id: 'abertura-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Bem-vindos ao Módulo 03! Hoje vamos separar o lavador de filtro amador do especialista em transferência de calor: manutenção profunda da serpentina evaporadora.',
    },
    {
      id: 'abertura-3',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mestre, por que tanta gente tem medo de desmontar a carenagem e acaba batendo água só por cima da tela?',
    },

    // ── 2. CONFLITO ─────────────────────────────────────────────────────────
    {
      id: 'conflito-1',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'alerta',
      texto: 'Porque têm medo de quebrar trava plástica! Só que lavar por cima empurra a sujeira pro meio das aletas, reduz a troca térmica e se a serpentina cair a **32°F** (**0°C**), vira um bloco de gelo!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Se a temperatura da superfície da serpentina cair abaixo do ponto de orvalho e atingir 32°F (0°C), a condensação começa a congelar, bloqueando o fluxo de ar e gerando risco de retorno de líquido para o compressor, com consequente quebra mecânica [7].',
      },
    },
    {
      id: 'conflito-2',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'E em evaporadoras VRF tem um perigo crítico: se jogar água ou químico direto na bobina plástica do motor de passo da EEV, ela entra em curto e trava a agulha da válvula!',
    },
    {
      id: 'conflito-3',
      tipo: 'escolha',
      pergunta: 'Antes de iniciar a lavagem hidrodinâmica de uma evaporadora VRF ou cassete, qual deve ser a primeira proteção mecânica e elétrica?',
      opcoes: [
        {
          id: 'a',
          texto: 'Girar a bobina plástica da EEV no sentido anti-horário, desencaixá-la do corpo de latão, ensacá-la hermeticamente e drenar a bandeja pelo bujão manual.',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Exato! Proteger o estator da EEV e drenar a bandeja antes evita queima da válvula eletrônica e da microbomba de condensado!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Jogar água com lavadora de alta pressão direto sobre a carenagem montada para economizar tempo.',
          reacao: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Isso amassa todas as aletas, afoga a microbomba e queima a bobina da válvula de expansão eletrônica!',
            },
          ],
        },
      ],
    },

    // ── 3. CAUSO ────────────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Limpador Ácido Sem Enxágue e a Corrosão Formicária',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Fomos chamados num prédio corporativo onde três evaporadoras furaram em menos de um ano. O antigo prestador usava desincrustante ácido forte e não enxaguava direito: esfarelou o alumínio por corrosão galvânica!',
        },
        {
          quem: 'bia',
          emocao: 'didatico',
          texto: 'E nos escritórios fechados, a hidrólise de ácidos orgânicos sob o biofilme cria corrosão formicária — microfuros no cobre. Na rotina, usem detergente enzimático neutro ou alcalino suave com enxágue abaixo de **200 PSI** (**100 a 130 PSI**)!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Realize a lavagem sob baixa pressão — estritamente abaixo de 200 PSI (recomendando-se de 100 a 130 PSI) [30].',
          },
        },
        {
          quem: 'juninho',
          emocao: 'espantado',
          texto: 'Abaixo de **200 PSI** (de **100 a 130 PSI**)! Se meter lavadora de alta pressão sem controle, deita todas as aletas de alumínio!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Realize a lavagem sob baixa pressão — estritamente abaixo de 200 PSI (recomendando-se de 100 a 130 PSI) [30].',
          },
        },
      ],
    },
    {
      id: 'causo-2',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'serio',
      texto: 'E se as aletas já estiverem amassadas por manutenções anteriores, usamos o pente metálico ou plástico calibrado na densidade FPI correta para realinhar os canais de ar!',
    },

    // ── 4. INSIGHT ──────────────────────────────────────────────────────────
    {
      id: 'insight-1',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'Pela Tabela 3.1.1, a química depende do ambiente: hospitais exigem lavagem mensal/trimestral com enzimático e UV-C; cozinhas comerciais exigem alcalino (KOH/NaOH) mensal para saponificar gordura; e Data Centers pedem limpeza semestral priorizando aspiração a seco!',
    },
    {
      id: 'insight-2',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'Em evaporadores de câmaras frias, o ciclo de degelo deve encerrar em cerca de **55°F** (**12,8°C**) e o retardo dos ventiladores (*fan delay*) deve mantê-los desligados até a serpentina baixar a **20°F** (**-6,7°C**)!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'O ciclo deve encerrar a cerca de 55°F (12,8°C) para garantir o derretimento do gelo [51].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Retardo de Ventiladores (Fan Delay): Certifique-se de que os ventiladores fiquem desligados na partida pós-degelo até que a serpentina atinja aproximadamente 20°F (-6,7°C).',
        },
      ],
    },
    {
      id: 'insight-3',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'confiante',
      texto: 'E na Tabela 3.1.2, em unidades sob pressão negativa (*draw-through*), com **1,0** pol. WC (250 Pa) o selo hidráulico mínimo H do sifão é de **6,3 cm** (2,50 pol.); com **2,0** pol. WC (500 Pa), sobe para **10,2 cm** (4,00 pol.)!',
      fonte: {
        campo: 'tabelas_html',
        trecho: '0,5 "WC 125 Pa 1,75" 4,4 cm 1,0 "WC 250 Pa 2,50" 6,3 cm 1,5 "WC 375 Pa 3,25" 8,3 cm 2,0 "WC 500 Pa 4,00" 10,2 cm 2,5 "WC 625 Pa 4,75" 12,1 cm 3,0 "WC 750 Pa 5,50" 14,0 cm',
      },
    },
    {
      id: 'insight-4',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Se o sifão for raso demais numa UTA sob pressão negativa, o ventilador suga ar externo pelo tubo de dreno e não deixa a água da bandeja descer!',
    },
    {
      id: 'insight-5',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'aprovando',
      texto: 'Exatamente, Juninho! Quando o ventilador desliga, toda aquela água represada na bandeja cai de uma vez e inunda a casa de máquinas ou o forro!',
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Em evaporadores de câmaras frigoríficas, os ventiladores devem religar no mesmo segundo em que as resistências de degelo desligam a 55°F (12,8°C).',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Mito! Se religar o ventilador com a serpentina quente a **55°F** (**12,8°C**), ele sopra vapor e gotas de água sobre a mercadoria! O *fan delay* aguarda a serpentina atingir **20°F** (**-6,7°C**).',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'O ciclo deve encerrar a cerca de 55°F (12,8°C) para garantir o derretimento do gelo [51].',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Retardo de Ventiladores (Fan Delay): Certifique-se de que os ventiladores fiquem desligados na partida pós-degelo até que a serpentina atinja aproximadamente 20°F (-6,7°C).',
            },
          ],
        },
      ],
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'O ciclo deve encerrar a cerca de 55°F (12,8°C) para garantir o derretimento do gelo [51].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Retardo de Ventiladores (Fan Delay): Certifique-se de que os ventiladores fiquem desligados na partida pós-degelo até que a serpentina atinja aproximadamente 20°F (-6,7°C).',
        },
      ],
    },

    // ── 5. PRÁTICA ──────────────────────────────────────────────────────────
    {
      id: 'pratica-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Desvios na Lavagem de Evaporadora',
      enunciado: 'Qual das condutas abaixo representa uma FALHA TÉCNICA GRAVE durante a higienização de uma evaporadora em Data Center?',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Desencaixar a bobina plástica do motor de passo da EEV (sentido anti-horário) e protegê-la em saco impermeável.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Esta conduta está correta! Proteger o estator da EEV evita curto-circuito.',
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Regular a lavadora portátil para baixa pressão, estritamente abaixo de 200 PSI (entre 100 a 130 PSI).',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'confiante',
              texto: 'Conduta correta! Trabalhar entre **100 a 130 PSI** (sempre abaixo de **200 PSI**) limpa sem dobrar aletas.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Realize a lavagem sob baixa pressão — estritamente abaixo de 200 PSI (recomendando-se de 100 a 130 PSI) [30].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Realize a lavagem sob baixa pressão — estritamente abaixo de 200 PSI (recomendando-se de 100 a 130 PSI) [30].',
          },
        },
        {
          id: 'p3',
          rotulo: 'Em salas de servidores (Data Centers), lavar abundantemente com mangueira aberta a cada 15 dias.',
          correta: true,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Você achou o erro grave! Na Tabela 3.1.1, em Data Centers a manutenção é semestral com detergente enzimático, priorizando aspiração a seco e uso restrito de água!',
            },
          ],
        },
        {
          id: 'p4',
          rotulo: 'Pentear as aletas amassadas com pente calibrado na densidade FPI correta da serpentina.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Conduta correta! Pentear as aletas restaura o fluxo laminar de ar.',
            },
          ],
        },
      ],
    },

    // ── 6. TESTE ────────────────────────────────────────────────────────────
    {
      id: 'quiz-1',
      tipo: 'quiz',
      enunciado: 'Consultando a Tabela 3.1.1 (Frequências e Seleção Química) e a Tabela 3.1.2 (Sifão P-Trap), qual é a combinação correta para uma cozinha comercial e para uma UTA com pressão estática negativa de 1,0 pol. WC (250 Pa)?',
      opcoes: [
        {
          id: 'a',
          texto: 'Lavagem mensal com alcalino concentrado (KOH/NaOH) para saponificar gorduras; e selo hidráulico mínimo H de **6,3 cm** na UTA.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Cravado! Cozinha comercial exige lavagem mensal com alcalino (KOH/NaOH) contra óleos polimerizados, e 1,0 pol. WC pede selo hidráulico mínimo de **6,3 cm** (2,50 pol.).',
              fonte: {
                campo: 'tabelas_html',
                trecho: '1,0 "WC 250 Pa 2,50" 6,3 cm',
              },
            },
          ],
          fonte: {
            campo: 'tabelas_html',
            trecho: '1,0 "WC 250 Pa 2,50" 6,3 cm',
          },
        },
        {
          id: 'b',
          texto: 'Lavagem anual apenas com água fria na cozinha e sifão com **4,4 cm** para qualquer pressão estática.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'didatico',
              texto: '**4,4 cm** (1,75 pol.) só atende até 0,5 pol. WC (125 Pa). Para 1,0 pol. WC o mínimo é **6,3 cm**, e gordura de cozinha exige saponificação mensal!',
              fonte: {
                campo: 'tabelas_html',
                trecho: '0,5 "WC 125 Pa 1,75" 4,4 cm 1,0 "WC 250 Pa 2,50" 6,3 cm',
              },
            },
          ],
          fonte: {
            campo: 'tabelas_html',
            trecho: '0,5 "WC 125 Pa 1,75" 4,4 cm',
          },
        },
        {
          id: 'c',
          texto: 'Lavagem com jato de alta pressão acima de **200 PSI** sem desmontar a carenagem.',
          correta: false,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Pressão acima de **200 PSI** dobra as aletas de alumínio e bloqueia a passagem de ar!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Realize a lavagem sob baixa pressão — estritamente abaixo de 200 PSI (recomendando-se de 100 a 130 PSI) [30].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Realize a lavagem sob baixa pressão — estritamente abaixo de 200 PSI (recomendando-se de 100 a 130 PSI) [30].',
          },
        },
      ],
    },
    {
      id: 'quiz-2',
      tipo: 'quiz',
      enunciado: 'Por que devemos evitar o uso rotineiro de desincrustantes ácidos agressivos em serpentinas evaporadoras internas?',
      opcoes: [
        {
          id: 'a',
          texto: 'Porque atacam a camada passiva do alumínio, aceleram a corrosão galvânica bimetálica (cobre-alumínio) e liberam vapores tóxicos em ambientes fechados.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Exato! Na manutenção preventiva interna, detergentes enzimáticos ou alcalinos suaves preservam a vida útil das aletas.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Porque limpadores ácidos congelam a serpentina instantaneamente a **32°F** (**0°C**).',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'didatico',
              texto: 'O congelamento a **32°F** (**0°C**) ocorre por restrição de fluxo de ar ou baixa pressão de sucção, não pelo pH do detergente.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Se a temperatura da superfície da serpentina cair abaixo do ponto de orvalho e atingir 32°F (0°C), a condensação começa a congelar',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Se a temperatura da superfície da serpentina cair abaixo do ponto de orvalho e atingir 32°F (0°C), a condensação começa a congelar',
          },
        },
      ],
    },

    // ── 7. FILOSOFIA ────────────────────────────────────────────────────────
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Desmontar com Técnica, Lavar com Ciência',
      principio: 'Limpeza de evaporadora não é banho de mangueira: é restauração da condutância térmica com proteção eletrônica e química controlada.',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Quem lava por cima da tela esconde a sujeira no coração do bloco aletado. Desmontem com cuidado, isolem a bobina da EEV e enxáguem até a água sair cristalina.',
        },
        {
          quem: 'bia',
          emocao: 'confiante',
          texto: 'E sempre confiram o penteamento das aletas e a altura do sifão P-Trap conforme a pressão estática negativa da máquina!',
        },
        {
          quem: 'juninho',
          emocao: 'animado',
          texto: 'Bobina da EEV ensacada, jato controlado abaixo de **200 PSI** e sifão calibrado na fita métrica!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Realize a lavagem sob baixa pressão — estritamente abaixo de 200 PSI (recomendando-se de 100 a 130 PSI) [30].',
          },
        },
      ],
    },

    // ── 8. FECHAMENTO ───────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte a Tabela 3.1.1 (Frequências e Seleção Química por Ambiente) e a Tabela 3.1.2 (Dimensionamento de Sifão P-Trap por Pressão Estática).',
      alvo: {
        aba: 'tabelas',
      },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Desencaixar e ensacar a bobina do motor de passo da EEV e esvaziar a bandeja antes de lavar evaporadoras VRF/cassete.',
        'Lavar sob baixa pressão abaixo de **200 PSI** (**100 a 130 PSI**) com detergente enzimático ou alcalino adequado ao ambiente.',
        'Em câmaras frias, encerrar degelo em **55°F** (**12,8°C**) com *fan delay* até **20°F** (**-6,7°C**); em UTAs *draw-through* de **1,0** pol. WC, manter sifão mínimo de **6,3 cm**.',
      ],
      proxima: 'Na Aula 3.2, subiremos à cobertura para dominar a manutenção da serpentina condensadora, trocadores de microcanais e limites de temperatura de descarga!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Realize a lavagem sob baixa pressão — estritamente abaixo de 200 PSI (recomendando-se de 100 a 130 PSI) [30].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O ciclo deve encerrar a cerca de 55°F (12,8°C) para garantir o derretimento do gelo [51].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Retardo de Ventiladores (Fan Delay): Certifique-se de que os ventiladores fiquem desligados na partida pós-degelo até que a serpentina atinja aproximadamente 20°F (-6,7°C).',
        },
        {
          campo: 'tabelas_html',
          trecho: '1,0 "WC 250 Pa 2,50" 6,3 cm',
        },
      ],
    },
  ],
};
