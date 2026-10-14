// src/data/conversas/instalacao-hvac/01-01.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 01-01
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '01-01',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Piloto G1',
    data: '2026-10-14',
  },
  cenario: 'padaria-manha',
  duracaoMin: 10,
  beats: [
    // ── 1. CHEGADA ──────────────────────────────────────────────────────────
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Segunda, 7h10. Padaria colada na obra. Pão na chapa na mesa e um split antigo pingando na parede do lado.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Simon, esse split da padaria tá jogando um frio que é uma beleza, hein?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'ironico',
      texto: '“Jogando frio.” Juninho, **frio não existe**. Amadores fazem coisas ficarem frias; técnicos de elite removem calor.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Amadores fazem coisas ficarem frias; técnicos de elite removem calor usando física de precisão.',
      },
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Ah, para, Simon! Tô sentindo o vento gelado aqui no braço!',
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Cê tá sentindo é **ausência de calor**. Ninguém compra uma “lâmpada de escuro” — a gente apaga a luz.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Um sistema de ar condicionado não gera ar frio, assim como um interruptor de luz não gera escuridão.',
      },
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Fisicamente ele tá certíssimo, Ju. O ar-condicionado opera como um **elevador térmico avançado**: absorve o calor daqui e despeja lá na rua.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'um sistema de refrigeração opera como um elevador térmico avançado, absorvendo ativamente calor de um espaço condicionado designado e rejeitando-o forçosamente para outro ambiente.',
      },
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Se o cliente perguntar na obra “como esse aparelho funciona?”, o que você responde?',
      opcoes: [
        {
          id: 'a',
          texto: 'Ele fabrica ar gelado lá dentro e sopra na sala.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'ironico',
              texto: 'Aí o cliente pergunta onde fica a fábrica de gelo e cê trava na escada. Bora ajustar esse conceito!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Ele absorve o calor do ambiente interno e rejeita lá fora.',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Na mosca! O pão na chapa hoje é por minha conta. Pensar em transporte de calor muda todo o seu diagnóstico.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'O gás gela a serpentina por mágica da pressão.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'ironico',
              texto: 'Sinceridade eu respeito, mas mágica não emite ART. É mudança de fase pura, bora ver como.',
            },
          ],
        },
      ],
    },

    // ── 3. PAPO RETO ────────────────────────────────────────────────────────
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Pensa no fluido refrigerante como uma **esponja térmica**. Na evaporadora, ela suga o calor da sala igual esponja suga água.',
      fonte: {
        campo: 'conteudo_html',
        aulaRef: 'apresentacao',
        trecho: 'O fluido refrigerante funciona como uma esponja térmica. A evaporadora absorve o calor (a esponja suga a água)',
      },
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Aí entra a **Segunda Lei da Termodinâmica**: o calor só flui sozinho do quente pro frio. Pra jogar calor num dia quente lá fora, o compressor precisa entrar com trabalho mecânico.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A Segunda Lei da Termodinâmica dita que calor flui naturalmente apenas de um corpo mais quente para um corpo mais frio.',
      },
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      texto: 'O compressor espreme a esponja, a condensadora desova esse calor na rua — più o trabalho do compressor, pela **Primeira Lei** — e o dispositivo de medição derruba a pressão no **flashing**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'queda de pressão catastrófica e instantânea — o fenômeno conhecido como "flashing".',
      },
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'bia',
      texto: 'No evaporador, o refrigerante entra em baixa pressão e ferve a temperaturas tão baixas quanto **4.4°C** (**40°F**), puxando calor latente e sensível.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O líquido ferve furiosamente a temperaturas tão baixas quanto 4.4°C (40°F), absorvendo quantidades massivas de calor latente.',
      },
    },
    {
      id: 'fala-10',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E como eu sei se essa “esponja” tá trabalhando no ponto certo sem abrir a máquina?',
    },
    {
      id: 'fala-11',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Pela **entalpia**! Num sistema de conforto saudável, a diferença de entalpia fica entre **5.5 e 8.0 BTU/lb**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Um sistema de conforto funcionando adequadamente geralmente exibirá uma diferença de entalpia entre 5.5 e 8.0 BTU/lb:',
      },
    },
    {
      id: 'fala-12',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Se cair muito, tipo **4.2 BTU/lb**, o ciclo tá fraco (subcarga ou restrição). Se subir demais, tipo **9.5 BTU/lb**, falta vazão de ar no blower ou filtro!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Entalpia muito baixa (ex.: 4.2 BTU/lb): falha dentro do ciclo de refrigeração — subcarga, compressor ineficiente, ou dispositivo de medição restrito. Entalpia muito alta (ex.: 9.5 BTU/lb): deficiência de fluxo de ar',
      },
    },
    {
      id: 'fala-13',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'E no tato, antes mesmo do manifold: linha de sucção tem que estar fria e suando, abaixo de **65 °F** (**18°C**). Linha de líquido fica moderadamente quente, **10-15°F** acima do ambiente.',
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Temp. Linha de Sucção ≤ 65 °F (18°C)',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Linha de Líquido moderadamente quente: ✅ Normal (10-15°F acima da temperatura ambiente)',
        },
      ],
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e o “Frio Engarrafado”',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Certa vez chamaram o Zé porque o ar não rendia. Ele encostou na sucção, achou morna e já abriu a botija achando que era falta de gás.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Clássico! Ele nem olhou a TXV nem o sub-resfriamento. Zerou o sobreaquecimento e mandou refrigerante líquido direto na sucção.',
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Deu **slugging de líquido**. Compressor só bombeia vapor; líquido é incompressível. Moeram as placas de scroll em dez minutos.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Compressores são projetados puramente para bombear vapor; líquidos são mecanicamente incompressíveis. Se refrigerante líquido violar as válvulas de admissão — uma condição destrutiva conhecida como slugging de líquido',
          },
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Quanto maior a capacidade do ar-condicionado para a sala, melhor — ele gela rápido e descansa.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          texto: 'Mito perigoso! Equipamento sobredimensionado derruba o calor sensível rápido demais e desliga antes de tirar o calor latente (umidade). Resultado: ar úmido e mofo.',
          fonte: {
            campo: 'conteudo_html',
            aulaRef: 'apresentacao',
            trecho: 'Equipamentos sobredimensionados reduzem o calor sensível rápido demais e desligam antes de processar o calor latente, deixando o ar úmido e propenso a mofo.',
          },
        },
        {
          quem: 'simon',
          texto: 'E esse liga-desliga sem parar é o **short-cycling**: mata o compressor e não deixa o óleo voltar pro cárter.',
          fonte: {
            campo: 'conteudo_html',
            aulaRef: 'apresentacao',
            trecho: 'O dimensionamento correto evita o short-cycling (ligar e desligar frequente).',
          },
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Com o fluido zeotrópico R-454B, usamos Ponto de Bolha para calcular o Sub-resfriamento e Ponto de Orvalho para o Sobreaquecimento.',
      verdade: true,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'R-454B é uma mistura zeotrópica (68.9% R-32 + 31.1% R-1234yf) que experimenta deslizamento de temperatura (temperature glide). O técnico deve usar: Ponto de Bolha (Bubble Point): para calcular Sub-resfriamento. Ponto de Orvalho (Dew Point): para calcular Sobreaquecimento.',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Verdade! O R-454B (**68.9%** R-32 + **31.1%** R-1234yf) tem glide térmico. Bolha pro líquido (Sub-resfriamento) e Orvalho pro vapor (Sobreaquecimento).',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'R-454B é uma mistura zeotrópica (68.9% R-32 + 31.1% R-1234yf) que experimenta deslizamento de temperatura (temperature glide).',
          },
        },
      ],
    },
    {
      id: 'mito-3',
      tipo: 'mitoVerdade',
      afirmacao: 'Se a pressão de sucção está baixa e o sobreaquecimento alto, é 100% certeza de falta de gás.',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          texto: 'Mito! Restrição na linha de líquido imita subcarga: ambas dão sucção baixa, descarga baixa e sobreaquecimento alto.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Note como subcarga e restrição na linha de líquido mimetizam uma à outra com baixa pressão de sucção, baixa pressão de cabeça e alto sobreaquecimento.',
          },
        },
        {
          quem: 'bia',
          texto: 'Quem desempata é o **sub-resfriamento**: baixo na subcarga, mas **alto** na restrição porque o líquido acumula antes do bloqueio.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'O único fator diferenciador é o sub-resfriamento: subcarga resulta em baixo sub-resfriamento, enquanto uma restrição causa alto sub-resfriamento',
          },
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO ────────────────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Na obra, você mede: Pressão de Sucção baixa, Pressão de Descarga baixa e Sobreaquecimento alto (acima da faixa normal de 8 — 14 °F). Porém, o Sub-resfriamento está ALTO e a linha de líquido tem queda brusca de temperatura. Qual o diagnóstico?',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Sobreaquecimento (TXV) 8 — 14 °F',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Subcarga de refrigerante — precisa completar gás.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Se colocar gás aí, cê estoura a alta! Na subcarga o sub-resfriamento estaria baixo, não alto.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Restrição na linha de líquido (ex.: filtro secador ou junta brasada obstruída).',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Diagnóstico de elite! O líquido fica represado no condensador (sub-resfriamento alto) e falta fluido no evaporador (sobreaquecimento alto).',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'subcarga resulta em baixo sub-resfriamento, enquanto uma restrição causa alto sub-resfriamento (líquido se acumulando atrás do bloqueio).',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Condensador sujo com excesso de carga.',
          feedback: [
            {
              quem: 'bia',
              texto: 'Olha a Matriz: condensador sujo ou sobrecarga elevam a pressão de descarga e derrubam o sobreaquecimento.',
            },
          ],
        },
      ],
    },
    {
      id: 'desafio-2',
      tipo: 'quiz',
      enunciado: 'Você suspeita que a válvula TXV travou fechada. Antes de mexer na carga de gás, qual teste não-invasivo de campo confirma se a válvula responde?',
      opcoes: [
        {
          id: 'a',
          texto: 'Desacoplar o bulbo sensor, aquecê-lo na mão e ver se a sucção sobe e o sobreaquecimento cai.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Isso! É o teste manual do bulbo. Se a pressão de sucção subir e o sobreaquecimento cair, a TXV tá viva — o erro era fixação ou isolamento do bulbo.',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'Antes de tocar na carga, execute o teste manual do bulbo: desacoplar, segurar na mão, e observar se a pressão de sucção sobe e o sobreaquecimento cai previsivelmente.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Bater no corpo da TXV com a chave inglesa enquanto injeta gás.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'ironico',
              texto: 'Sai desse corpo, Zé Gambiarra! Válvula calibrada não se conserta na pancada.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Fechar a válvula de serviço de descarga com o compressor rodando.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Jamais! Isso gera pressão perigosa na cabeça do compressor e não testa o bulbo da TXV.',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Simulador de Manifold — Limite Máximo de Sobreaquecimento (TXV)',
      formula: 'SA = T_sucção real − T_saturação (lado baixo)',
      enunciado: 'Pela tabela de parâmetros da aula, a faixa normal de **Sobreaquecimento (TXV)** é de **8 — 14 °F** e a linha de sucção deve operar em **≤ 65 °F** (**18°C**). Qual é o limite superior em °F dessa faixa normal da TXV antes de caracterizar sobreaquecimento alto?',
      leituras: [
        { rotulo: 'Faixa TXV Normal', valor: '8 — 14 °F' },
        { rotulo: 'Temp. Linha Sucção', valor: '≤ 65 °F (18°C)' },
        { rotulo: 'Delta-h Conforto', valor: '5.5 — 8.0 BTU/lb' },
      ],
      unidade: '°F',
      respostaCorreta: 14,
      tolerancia: 0.1,
      opcoesRapidas: [8, 14, 18, 65],
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Sobreaquecimento (TXV) 8 — 14 °F',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Temp. Linha de Sucção ≤ 65 °F (18°C)',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Cravado! O teto normal da TXV é **14 °F** (faixa **8 — 14 °F**). Passou disso com sucção acima de **65 °F** (**18°C**), investigue subcarga ou restrição!',
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Olha o visor: a faixa normal da TXV é **8 — 14 °F**, então o limite superior é **14 °F** (**65 °F** / **18°C** é a temperatura máxima da linha de sucção).',
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção Visual — Leitura Tátil e Slide do Ciclo',
      enunciado: 'Observe o diagrama do ciclo e aponte qual condição tátil nas linhas de cobre indica **Restrição severa** (filtro secador ou junta brasada obstruída):',
      imagem: '/images/academia/hvac-instalacao/modulo01/modulo01-01/slide01.png',
      legendaImagem: 'Slide 01 — O Ciclo de Refrigeração por Compressão de Vapor',
      fonte: [
        {
          campo: 'infobox_campo',
          trecho: 'Linha de Líquido moderadamente quente: ✅ Normal (10-15°F acima da temperatura ambiente)',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Linha de Líquido fria / queda brusca de temperatura: ❌ Restrição severa (filtro secador ou junta brasada)',
        },
      ],
      pontos: [
        {
          id: 'p1',
          rotulo: 'Linha de Líquido moderadamente quente (10-15°F acima da temperatura ambiente) e Linha de Sucção fria + suando.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              texto: 'Essa é a assinatura de um sistema saudável (**10-15°F** acima do ambiente na linha de líquido).',
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Linha de Líquido fria ou com queda brusca de temperatura logo após o filtro secador ou junta brasada.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Olho clínico! O ponto onde o tubo esfria de repente na linha de líquido é exatamente onde o bloqueio está provocando expansão prematura.',
            },
          ],
        },
      ],
    },

    // ── 7. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer consultar a Matriz completa de Assinaturas (PS, PD, SA, SC e ΔT) e as faixas de **8 — 14 °F**? Abre a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Sobreaquecimento (TXV) 8 — 14 °F',
      },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Frio não existe:** ar-condicionado é um elevador térmico; a diferença de entalpia ideal fica entre **5.5 e 8.0 BTU/lb**.',
        '**Proteja o coração (compressor):** ele só bombeia vapor. Sobreaquecimento zero é convite para **slugging de líquido**.',
        '**Subcarga vs. Restrição:** ambas dão sucção baixa e sobreaquecimento alto; quem desempata é o **sub-resfriamento** (baixo na subcarga, alto na restrição).',
      ],
      proxima: 'Na Aula 01-02 vamos dominar psicrometria, calor sensível vs. latente e cálculo fino de SH e SC.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Um sistema de conforto funcionando adequadamente geralmente exibirá uma diferença de entalpia entre 5.5 e 8.0 BTU/lb:',
      },
    },
  ],
};
