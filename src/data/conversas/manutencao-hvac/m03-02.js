// ═══════════════════════════════════════════════════════════════════════════
// CONVERSA — manutencao-hvac / m03-02
// Manutenção da Serpentina da Condensadora
// Cenário: Casa de Máquinas (microcanais vs tubo-aleta, temperatura de descarga, approach)
// ═══════════════════════════════════════════════════════════════════════════

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm03-02',
  versao: 1,
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  elenco: ['simon', 'juninho', 'bia', 'marta'],
  estimativaMin: 12,

  beats: [
    // ── 1. ABERTURA ─────────────────────────────────────────────────────────
    {
      id: 'abertura-1',
      tipo: 'cena',
      texto: 'Na cobertura técnica sob o sol da tarde, duas condensadoras trabalham lado a lado: uma tradicional de tubo de cobre com aleta de alumínio e um chiller moderno com trocador de microcanais.',
    },
    {
      id: 'abertura-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Olhem para essas duas condensadoras, turma. A sujeira aqui fora estrangula a rejeição de calor: só **10%** de queda no fluxo de ar já sobe a temperatura de descarga em **10°F a 20°F** (**5,6°C a 11,1°C**)!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Uma redução de apenas 10% no fluxo de ar do condensador eleva a temperatura da descarga em 10°F a 20°F (5,6°C a 11,1°C) [7].',
      },
    },
    {
      id: 'abertura-3',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mestre, sobrou metade do galão daquele limpador sem enxágue (no-rinse) da evaporadora e um desincrustante alcalino. Posso bater aqui nessa condensadora de microcanais?',
    },

    // ── 2. CONFLITO ─────────────────────────────────────────────────────────
    {
      id: 'conflito-1',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Para tudo, Juninho! São dois erros fatais de uma vez! Primeiro: condensadora trabalha quente e seca; produto no-rinse seca nas aletas e vira uma crosta isolante e corrosiva!',
    },
    {
      id: 'conflito-2',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'alerta',
      texto: 'E o segundo erro custa um trocador novo: em serpentina de microcanais (monometálica de alumínio) é proibido usar limpador ácido ou alcalino! Ele fura as paredes microscópicas e não aceita solda em campo!',
    },
    {
      id: 'conflito-3',
      tipo: 'escolha',
      pergunta: 'Qual é o protocolo correto para lavar uma serpentina condensadora de microcanais (All-Aluminum)?',
      opcoes: [
        {
          id: 'a',
          texto: 'Usar apenas água limpa ou detergente de pH neutro certificado, bico leque mínimo de 15 graus perpendicular (máx. 25°), distância de 2,5 a 7,5 cm e pressão até **600 PSI**.',
          ideal: true,
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Máximo 600 PSI na saída do bico leque [36] Tipo de Bico de Lavagem Leque mínimo de 15 graus [30] Leque mínimo de 15 graus (concentrado proibido) [36] Ângulo / Direção do Jato Paralelo às aletas (evitar jatos oblíquos) [30] Estritamente perpendicular (desvio máx. 25°) [36] Distância Recomendada do Bico 15 a 30 cm da face da serpentina 2,5 a 7,5 cm (1 a 3 polegadas) da face [36]',
          },
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Exato! Jato perpendicular com bico leque de 15 graus, pressão até **600 PSI** e somente água ou pH neutro!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Pressão Máxima de 600 PSI: A água deve ser limitada a no máximo 600 PSI na saída do bico [36].',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Aplicar espuma alcalina expansiva sem enxágue para empurrar a sujeira para fora.',
          reacao: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Proibido! Alcalinos e ácidos corroem as paredes internas dos microcanais e causam vazamento irreparável!',
            },
          ],
        },
      ],
    },

    // ── 3. CAUSO ────────────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Calor Extremo que Carbonizou o Óleo PVE no Cabeçote',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num prédio cercado de árvores, as sementes taparam a condensadora e deixaram menos de **60 cm** livres na lateral, recirculando ar quente. A linha de descarga (medida de **2,5 a 5 cm** da saída do compressor) passou do limite de **225°F** (**107°C**)!',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'A temperatura na tubulação de descarga deve ser medida com termopar isolado de 2,5 a 5 cm (1 a 2 polegadas) da saída do compressor, não devendo superar 225°F (107°C) [8].',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Mantenha recuo livre de 60 cm (2 pés) nas laterais para evitar recirculação de ar [47].',
            },
          ],
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Quando o tubo externo bate **225°F**, a válvula interna já está em **275°F** (**135°C**)! Passou de **300°F** (**149°C**), o óleo PVE carbonizou e travou o compressor após desarmes no pressostato de alta (**550 e 600 psig** no **R-410A**)!',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Se a tubulação externa registrar 225°F, as válvulas de descarga internas atingirão níveis críticos de 275°F (135°C) [8].',
            },
            {
              campo: 'conteudo_html',
              trecho: 'O lubrificante sintético **Polivinil Éter (PVE)** sofre degradação química e evaporação a partir de 300°F (149°C) [10].',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Sob temperaturas ambientais extremas, o sistema sofrerá desarmes automáticos por pressostato de alta (tipicamente entre 550 e 600 psig para R-410A) [3].',
            },
          ],
        },
        {
          quem: 'juninho',
          emocao: 'espantado',
          texto: 'Caramba! Tubo a **225°F** (**107°C**) significa **275°F** (**135°C**) na válvula interna, e a **300°F** (**149°C**) o óleo PVE vira carvão! Vou medir a descarga em toda preventiva!',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'A temperatura na tubulação de descarga deve ser medida com termopar isolado de 2,5 a 5 cm (1 a 2 polegadas) da saída do compressor, não devendo superar 225°F (107°C) [8].',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Se a tubulação externa registrar 225°F, as válvulas de descarga internas atingirão níveis críticos de 275°F (135°C) [8].',
            },
            {
              campo: 'conteudo_html',
              trecho: 'O lubrificante sintético **Polivinil Éter (PVE)** sofre degradação química e evaporação a partir de 300°F (149°C) [10].',
            },
          ],
        },
      ],
    },
    {
      id: 'causo-2',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'serio',
      texto: 'Por isso em primaveras com dispersão de sementes de algodão de choupo ou pólen intenso, a inspeção visual da face da condensadora deve ser quinzenal!',
    },

    // ── 4. INSIGHT ──────────────────────────────────────────────────────────
    {
      id: 'insight-1',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'Comparem na Tabela 3.2.2: em Tubo-Aleta tradicional usamos pressão abaixo de **200 PSI**, jato paralelo às aletas a **15 a 30 cm**; já em Microcanais usamos até **600 PSI**, jato perpendicular a **2,5 a 7,5 cm** e zero ácido/alcalino!',
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Pressão Máxima de Água Fino alinhamento (< 200 PSI) para evitar amassados [30] Máximo 600 PSI na saída do bico leque [36]',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Distância Recomendada do Bico 15 a 30 cm da face da serpentina 2,5 a 7,5 cm (1 a 3 polegadas) da face [36]',
        },
      ],
    },
    {
      id: 'insight-2',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'A métrica científica é a Temperatura de Aproximação (Approach): nominal de **15°F a 20°F** (**8,3°C a 11,1°C**) em condensação a ar e **3°F a 5°F** (**1,7°C a 2,8°C**) em condensação a água. Se subir **5°F** (**2,8°C**) acima do baseline limpo, é hora de lavar!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Limites Nominais de Aproximação: Condensação a Ar: 15°F a 20°F (8,3°C a 11,1°C) [52]. Condensação a Água (Chillers): 3°F a 5°F (1,7°C a 2,8°C) [52]. Se a temperatura de aproximação se elevar em **5°F (2,8°C)** acima do baseline histórico da unidade limpa, é necessária a limpeza física corretiva [54].',
      },
    },
    {
      id: 'insight-3',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'confiante',
      texto: 'E lembrem-se dos motores dos ventiladores externos: mancais selados não devem ser lubrificados (o óleo atrai poeira abrasiva), e devemos manter recuo livre lateral de **60 cm** contra recirculação!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Mantenha recuo livre de 60 cm (2 pés) nas laterais para evitar recirculação de ar [47].',
      },
    },
    {
      id: 'insight-4',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E no litoral com maresia intensa, qual é o cuidado especial na condensadora?',
    },
    {
      id: 'insight-5',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'No litoral fazemos enxágue mensal com água doce para remover o cloreto de sódio e inspecionamos o ânodo de sacrifício de zinco que protege o trocador contra corrosão galvânica!',
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Aplicar óleo lubrificante em rolamentos selados do motor do ventilador do condensador aumenta sua vida útil.',
      verdade: false,
      explicacao: [
        {
          quem: 'marta',
          emocao: 'alerta',
          texto: 'Mito! Rolamentos selados possuem graxa vitalícia de fábrica; tentar injetar óleo rompe a vedação, retém poeira abrasiva e destrói o mancal rapidamente.',
        },
      ],
    },

    // ── 5. PRÁTICA ──────────────────────────────────────────────────────────
    {
      id: 'pratica-1',
      tipo: 'inspecao',
      titulo: 'Auditoria de Falhas na Condensadora Externa',
      enunciado: 'Avalie os procedimentos na cobertura e aponte qual conduta é PROIBIDA segundo o Padrão Simon Climatização:',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Medir a temperatura de descarga com termopar isolado a 2,5–5 cm da saída do compressor, garantindo que fique abaixo de 225°F (107°C).',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Esta conduta é correta! Abaixo de **225°F** (**107°C**) a **2,5 a 5 cm** da descarga protege o compressor.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'A temperatura na tubulação de descarga deve ser medida com termopar isolado de 2,5 a 5 cm (1 a 2 polegadas) da saída do compressor, não devendo superar 225°F (107°C) [8].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'A temperatura na tubulação de descarga deve ser medida com termopar isolado de 2,5 a 5 cm (1 a 2 polegadas) da saída do compressor, não devendo superar 225°F (107°C) [8].',
          },
        },
        {
          id: 'p2',
          rotulo: 'Lavar trocador de microcanais com água limpa ou pH neutro, bico leque de 15 graus perpendicular, até 600 PSI e a 2,5–7,5 cm da face.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'confiante',
              texto: 'Conduta correta! Respeitar o limite de **600 PSI** e a distância de **2,5 a 7,5 cm** preserva os microcanais.',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'Máximo 600 PSI na saída do bico leque [36] Tipo de Bico de Lavagem Leque mínimo de 15 graus [30] Leque mínimo de 15 graus (concentrado proibido) [36] Ângulo / Direção do Jato Paralelo às aletas (evitar jatos oblíquos) [30] Estritamente perpendicular (desvio máx. 25°) [36] Distância Recomendada do Bico 15 a 30 cm da face da serpentina 2,5 a 7,5 cm (1 a 3 polegadas) da face [36]',
              },
            },
          ],
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Máximo 600 PSI na saída do bico leque [36] Tipo de Bico de Lavagem Leque mínimo de 15 graus [30] Leque mínimo de 15 graus (concentrado proibido) [36] Ângulo / Direção do Jato Paralelo às aletas (evitar jatos oblíquos) [30] Estritamente perpendicular (desvio máx. 25°) [36] Distância Recomendada do Bico 15 a 30 cm da face da serpentina 2,5 a 7,5 cm (1 a 3 polegadas) da face [36]',
          },
        },
        {
          id: 'p3',
          rotulo: 'Injetar óleo lubrificante nos rolamentos selados do ventilador e usar limpador ácido sem enxágue na condensadora.',
          correta: true,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Bem identificado! Mancais selados não recebem óleo e produtos sem enxágue ou ácidos corroem a condensadora!',
            },
          ],
        },
        {
          id: 'p4',
          rotulo: 'Em regiões costeiras (maresia), realizar lavagem trimestral (enxágue simples mensal) e inspecionar o ânodo de sacrifício de zinco.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Conduta correta! Na Tabela 3.2.1, o litoral exige enxágue mensal e checagem do bloco de zinco sacrificial.',
            },
          ],
        },
      ],
    },

    // ── 6. TESTE ────────────────────────────────────────────────────────────
    {
      id: 'quiz-1',
      tipo: 'quiz',
      enunciado: 'Qual é o valor nominal da Temperatura de Aproximação (Approach) para condensadores a ar vs. condensadores a água (chillers), e qual elevação acima do baseline limpo exige limpeza física corretiva?',
      opcoes: [
        {
          id: 'a',
          texto: 'Condensação a ar: **15°F a 20°F** (**8,3°C a 11,1°C**); condensação a água: **3°F a 5°F** (**1,7°C a 2,8°C**); limpeza exigida se subir **5°F** (**2,8°C**) acima do baseline.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Na mosca! Monitorar o Approach é engenharia pura: subiu **5°F** (**2,8°C**) acima do registro da máquina limpa, é hora de lavar!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Limites Nominais de Aproximação: Condensação a Ar: 15°F a 20°F (8,3°C a 11,1°C) [52]. Condensação a Água (Chillers): 3°F a 5°F (1,7°C a 2,8°C) [52]. Se a temperatura de aproximação se elevar em **5°F (2,8°C)** acima do baseline histórico da unidade limpa, é necessária a limpeza física corretiva [54].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Limites Nominais de Aproximação: Condensação a Ar: 15°F a 20°F (8,3°C a 11,1°C) [52]. Condensação a Água (Chillers): 3°F a 5°F (1,7°C a 2,8°C) [52]. Se a temperatura de aproximação se elevar em **5°F (2,8°C)** acima do baseline histórico da unidade limpa, é necessária a limpeza física corretiva [54].',
          },
        },
        {
          id: 'b',
          texto: 'Aguardar a linha de descarga passar de **300°F** (**149°C**) e o pressostato desarmar em **600 psig** para agendar a limpeza.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'A **300°F** (**149°C**) o óleo PVE já carbonizou e destruiu o compressor! A limpeza é feita quando o Approach sobe **5°F** (**2,8°C**).',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'O lubrificante sintético **Polivinil Éter (PVE)** sofre degradação química e evaporação a partir de 300°F (149°C) [10].',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Se a temperatura de aproximação se elevar em **5°F (2,8°C)** acima do baseline histórico da unidade limpa, é necessária a limpeza física corretiva [54].',
                },
              ],
            },
          ],
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'O lubrificante sintético **Polivinil Éter (PVE)** sofre degradação química e evaporação a partir de 300°F (149°C) [10].',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Sob temperaturas ambientais extremas, o sistema sofrerá desarmes automáticos por pressostato de alta (tipicamente entre 550 e 600 psig para R-410A) [3].',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Instalar a condensadora colada na parede sem o recuo mínimo de **60 cm**.',
          correta: false,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Sem o recuo livre de **60 cm** nas laterais, ocorre curto-circuito de ar quente e disparo da pressão de descarga!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Mantenha recuo livre de 60 cm (2 pés) nas laterais para evitar recirculação de ar [47].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Mantenha recuo livre de 60 cm (2 pés) nas laterais para evitar recirculação de ar [47].',
          },
        },
      ],
    },
    {
      id: 'quiz-2',
      tipo: 'quiz',
      enunciado: 'Por que devemos lavar a serpentina condensadora preferencialmente de dentro para fora (sentido oposto ao fluxo normal do ar)?',
      opcoes: [
        {
          id: 'a',
          texto: 'Para expulsar polens, folhas e poeira pelo mesmo lado por onde entraram, evitando cravar os detritos mais fundo no núcleo das aletas.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Perfeito! Lavar no contrafluxo desaloja o tapete de sujeira na primeira passada sem entupir o centro do trocador.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Para dobrar as aletas de alumínio e aumentar a pressão estática do ventilador axial.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Dobrar aletas bloqueia a rejeição de calor! O jato deve ser alinhado às aletas para mantê-las intactas.',
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA ────────────────────────────────────────────────────────
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Quem Protege a Condensadora Salva o Compressor',
      principio: 'Compressor queimado no verão quase sempre começou com uma condensadora suja e esquecida na primavera.',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Nunca tratem trocador de microcanais como serpentina antiga de cobre: respeitem o alumínio, usem pH neutro e lavem de dentro para fora para expulsar a sujeira pelo mesmo lado por onde ela entrou.',
        },
        {
          quem: 'bia',
          emocao: 'confiante',
          texto: 'E anotem a Temperatura de Aproximação e a Temperatura de Descarga no relatório: quando o cliente vê os números caindo após a lavagem, ele entende o valor da engenharia!',
        },
        {
          quem: 'juninho',
          emocao: 'animado',
          texto: 'Descarga abaixo de **225°F** (**107°C**) e Approach em dia! Próxima parada: filtros e qualidade do ar!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'A temperatura na tubulação de descarga deve ser medida com termopar isolado de 2,5 a 5 cm (1 a 2 polegadas) da saída do compressor, não devendo superar 225°F (107°C) [8].',
          },
        },
      ],
    },

    // ── 8. FECHAMENTO ───────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte a Tabela 3.2.1 (Periodicidade de Limpeza por Ambiente) e a Tabela 3.2.2 (Tubo-Aleta vs. Microcanais).',
      alvo: {
        aba: 'tabelas',
      },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Manter a temperatura da linha de descarga (a **2,5 a 5 cm** do compressor) abaixo de **225°F** (**107°C**), evitando carbonização do óleo PVE a **300°F** (**149°C**).',
        'Em trocadores de microcanais, usar apenas água limpa ou pH neutro (proibido ácido/alcalino), jato perpendicular (máx. 25°) até **600 PSI** a **2,5 a 7,5 cm**.',
        'Monitorar o Approach (**15°F a 20°F** a ar; **3°F a 5°F** a água) e limpar se subir **5°F** (**2,8°C**) acima do baseline; manter recuo lateral de **60 cm**.',
      ],
      proxima: 'Na Aula 3.3, entraremos na física dos filtros MERV e HEPA, o ponto MPPS, o perigo das frestas de bypass e os padrões PMOC e ANVISA!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A temperatura na tubulação de descarga deve ser medida com termopar isolado de 2,5 a 5 cm (1 a 2 polegadas) da saída do compressor, não devendo superar 225°F (107°C) [8].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O lubrificante sintético **Polivinil Éter (PVE)** sofre degradação química e evaporação a partir de 300°F (149°C) [10].',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Máximo 600 PSI na saída do bico leque [36] Tipo de Bico de Lavagem Leque mínimo de 15 graus [30] Leque mínimo de 15 graus (concentrado proibido) [36] Ângulo / Direção do Jato Paralelo às aletas (evitar jatos oblíquos) [30] Estritamente perpendicular (desvio máx. 25°) [36] Distância Recomendada do Bico 15 a 30 cm da face da serpentina 2,5 a 7,5 cm (1 a 3 polegadas) da face [36]',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Mantenha recuo livre de 60 cm (2 pés) nas laterais para evitar recirculação de ar [47].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Limites Nominais de Aproximação: Condensação a Ar: 15°F a 20°F (8,3°C a 11,1°C) [52]. Condensação a Água (Chillers): 3°F a 5°F (1,7°C a 2,8°C) [52]. Se a temperatura de aproximação se elevar em **5°F (2,8°C)** acima do baseline histórico da unidade limpa, é necessária a limpeza física corretiva [54].',
        },
      ],
    },
  ],
};
