// src/data/conversas/tvr-pro-co-380v/02-03.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 02-03
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

const F_EXV_OFF = {
  campo: 'conteudo_html',
  trecho: 'Estado 3 (Unit OFF): A EXV abre para 300 steps (parcialmente).',
};
const F_FIG_A = {
  campo: 'conteudo_html',
  trecho: '8-16HP (Figures 2-3.1 e 2-3.2)',
};
const F_FIG_B = {
  campo: 'conteudo_html',
  trecho: '18-22HP (Figures 2-3.3 e 2-3.4)',
};
const F_FIG_C = {
  campo: 'conteudo_html',
  trecho: '24-30HP (Figures 2-3.5 e 2-3.6)',
};
const F_ECON = {
  campo: 'infobox_campo',
  trecho: 'Isso resulta em economia de energia de 30-50% em comparação com sistemas de capacidade fixa.',
};
const F_TUBO_DESC = {
  campo: 'infobox_campo',
  trecho: 'Tubulação de descarga (estado 1): Deve estar QUENTE (60-100°C)',
};
const F_TUBO_LIQ = {
  campo: 'infobox_campo',
  trecho: 'Tubulação de líquido (estado 2): Deve estar MORNA a QUENTE (35-50°C)',
};

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '02-03',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 11,
  beats: [
    // ── 1. CHEGADA ──────────────────────────────────────────────────────────
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Terça, 8h10. Na casa de máquinas, o sistema VRF está rodando com metade das salas desligadas e metade climatizando.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, a sala de diretoria está desligada no controle remoto, mas eu encostei a mão na tubulação da evaporadora dela e senti um leve fluxo passando! A EXV vazou?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'bem-humorado',
      texto: 'Não vazou nada, Ju! Você acabou de descobrir na prática o Estado 3 das figuras de fluxo do manual!',
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Durante o ciclo de retorno de óleo (oil return), mesmo na unidade interna desligada (Estado 3 — Unit OFF), a EXV abre parcialmente para 300 steps!',
      fonte: F_EXV_OFF,
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Por que a válvula EXV de uma unidade interna desligada (Estado 3 — Unit OFF) abre parcialmente para 300 steps durante o ciclo de retorno de óleo?',
      fonte: F_EXV_OFF,
      opcoes: [
        {
          id: 'a',
          texto: 'Para varrer o óleo acumulado na serpentina inativa com o ventilador desligado, devolvendo o lubrificante ao compressor.',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Matou a charada! Se a EXV ficasse em zero, o óleo estacionado nas unidades desligadas nunca voltaria pro cárter. Por isso ela abre para 300 steps!',
              fonte: F_EXV_OFF,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Para continuar gelando a sala vazia mesmo com o controle desligado.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'O ventilador da unidade interna permanece desligado! A EXV abre para 300 steps apenas para o refrigerante empurrar o óleo de volta sem gelar o ambiente.',
              fonte: F_EXV_OFF,
            },
          ],
        },
        {
          id: 'c',
          texto: 'É um defeito de calibração do motor de passo da EXV.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Nada de defeito! É estratégia de sobrevivência do compressor: Estado 3 (Unit OFF) com EXV em 300 steps durante o retorno de óleo.',
              fonte: F_EXV_OFF,
            },
          ],
        },
      ],
    },

    // ── 3. PAPO RETO ────────────────────────────────────────────────────────
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'neutro',
      texto: 'Vamos mapear os 4 estados do refrigerante no ciclo: Estado 1 é gás de alta pressão e alta temperatura na descarga, onde a tubulação deve estar quente (**60-100°C**).',
      fonte: F_TUBO_DESC,
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Depois de condensar e passar pelo subcooler, chegamos ao Estado 2: líquido sub-resfriado de alta pressão, onde a linha de líquido fica morna a quente (**35-50°C**).',
      fonte: F_TUBO_LIQ,
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'neutro',
      texto: 'Na entrada das evaporadoras, a EXV expande o fluido para o Estado 3 (bifásico de baixa pressão, frio), que evapora e volta pela sucção no Estado 4 (vapor superaquecido frio).',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E como o VRF consegue ser tão econômico quando só duas ou três salas do andar estão ligadas?',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Porque cada EXV abre na medida exata da sua sala e o compressor inverter ajusta a rotação! Isso gera economia de energia de **30-50%** frente a sistemas de capacidade fixa.',
      fonte: F_ECON,
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'E esse mesmo princípio se repete nas figuras das 3 classes: **8-16HP**, **18-22HP** e **24-30HP**, tanto em refrigeração normal quanto no oil return.',
      fonte: [F_FIG_A, F_FIG_B, F_FIG_C],
    },
    {
      id: 'fala-9b',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Quer dizer que com um termômetro de contato na mão eu já consigo separar os 4 estados do ciclo sem nem abrir o manifold?',
    },
    {
      id: 'fala-9c',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Com certeza! O diagnóstico não invasivo pela temperatura das linhas evita perda de refrigerante e já entrega onde está eventual restrição.',
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Diagnóstico pelo Toque na Linha de Líquido',
      fonte: [F_TUBO_DESC, F_TUBO_LIQ],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Cheguei numa obra de **16HP** onde o técnico jurava que o compressor estava sem compressão porque as salas não gelavam direito.',
          fonte: F_FIG_A,
        },
        {
          quem: 'bia',
          emocao: 'curioso',
          texto: 'E o que você sentiu nas linhas antes mesmo de engatar o manifold, Simon?',
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'A descarga (Estado 1) estava quente na faixa normal de **60-100°C**, mas a linha de líquido (Estado 2), que deveria estar morna entre **35-50°C**, estava gelada e suando logo após um filtro secador!',
          fonte: [F_TUBO_DESC, F_TUBO_LIQ],
        },
        {
          quem: 'juninho',
          emocao: 'surpreso',
          texto: 'Restrição na linha de líquido! O filtro estava fazendo o papel de válvula de expansão antes da hora!',
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Durante a operação normal de refrigeração, as unidades internas desligadas (Unit OFF) mantêm suas válvulas EXV totalmente fechadas, mas no ciclo de retorno de óleo elas abrem para 300 steps.',
      verdade: true,
      fonte: F_EXV_OFF,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Verdade! Em operação normal a EXV da unidade desligada fecha; já no oil return (Estado 3 — Unit OFF), a EXV abre para 300 steps para varrer o óleo retido.',
          fonte: F_EXV_OFF,
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Na saída do condensador, a tubulação de líquido (estado 2) deve estar congelando abaixo de zero em operação normal.',
      verdade: false,
      fonte: F_TUBO_LIQ,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Mito! A tubulação de líquido (estado 2) deve estar morna a quente (**35-50°C**). Se estiver gelada antes da EXV, há restrição na linha!',
          fonte: F_TUBO_LIQ,
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO + INTERAÇÃO ────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Qual é a faixa de temperatura esperada ao toque/termômetro na tubulação de descarga (estado 1) e na tubulação de líquido (estado 2) em operação normal?',
      fonte: [F_TUBO_DESC, F_TUBO_LIQ],
      opcoes: [
        {
          id: 'a',
          texto: 'Descarga (estado 1) quente entre 60-100°C e linha de líquido (estado 2) morna a quente entre 35-50°C.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Referência de bolso afiada! Descarga quente (**60-100°C**) e líquido morno a quente (**35-50°C**).',
              fonte: [F_TUBO_DESC, F_TUBO_LIQ],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Descarga fria e linha de líquido acima de 100°C.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Invertido! Quem fica entre **60-100°C** é a descarga (estado 1), enquanto o líquido (estado 2) fica entre **35-50°C**.',
              fonte: [F_TUBO_DESC, F_TUBO_LIQ],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Ambas as linhas devem trabalhar na mesma temperatura de 100°C.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Se o líquido saísse a **100°C**, o condensador não estaria rejeitando calor! O líquido (estado 2) deve ficar em **35-50°C**.',
              fonte: [F_TUBO_DESC, F_TUBO_LIQ],
            },
          ],
        },
      ],
    },
    {
      id: 'insp-1',
      tipo: 'inspecao',
      titulo: 'Diagnóstico Térmico das 4 Regiões do Ciclo',
      enunciado: 'Você está inspecionando com termômetro de contato uma unidade de 22HP em operação normal. Qual leitura confirma que a tubulação de líquido (estado 2) está saudável?',
      fonte: [F_FIG_B, F_TUBO_DESC, F_TUBO_LIQ],
      pontos: [
        {
          id: 'p1',
          rotulo: 'Tubulação de líquido (estado 2) morna a quente: 35-50°C',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! Líquido sub-resfriado entre **35-50°C** mostra condensação e subcooling saudáveis.',
              fonte: F_TUBO_LIQ,
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Tubulação de líquido (estado 2) superaquecida: 60-100°C',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: '**60-100°C** é a faixa da tubulação de descarga (estado 1), não da linha de líquido!',
              fonte: F_TUBO_DESC,
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'EXV da unidade desligada travada em 300 steps fora do oil return',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'serio',
              texto: 'A abertura para 300 steps nas unidades desligadas só é normal durante o ciclo de retorno de óleo.',
              fonte: F_EXV_OFF,
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'Enxergar o Fluido Por Dentro do Cobre',
      principio: 'Princípio de Ofício: O tubo de cobre não é transparente, mas a temperatura denuncia exatamente o que corre lá dentro.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Eu não preciso abrir o forno a toda hora pra saber como está a fornada; só de encostar a mão na porta e sentir o cheiro eu sei o ponto.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'É a sensibilidade do ofício, Dona Marta. Quem domina os 4 estados do refrigerante encosta o termômetro no cobre e lê a alma do sistema.',
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer revisar os 4 estados do refrigerante e o comportamento das EXVs no oil return? Veja a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Termômetro de campo:** descarga (estado 1) quente (**60-100°C**) e tubulação de líquido (estado 2) morna a quente (**35-50°C**).',
        '**Eficiência VRF:** modulação individual das EXVs e do compressor gera economia de energia de **30-50%** frente a sistemas fixos.',
        '**Segredo do Oil Return:** nas unidades internas desligadas (Estado 3 — Unit OFF), a EXV abre parcialmente para 300 steps com ventilador desligado.',
      ],
      proxima: 'Na Parte 3 (Tópico 03-01) vamos entrar no cérebro eletrônico: os 5 blocos de controle e a sequência de partida!',
      fonte: [F_TUBO_DESC, F_TUBO_LIQ, F_ECON, F_EXV_OFF],
    },
  ],
};
