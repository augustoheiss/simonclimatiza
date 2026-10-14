// src/data/conversas/instalacao-hvac/04-03.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 04-03
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '04-03',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'obra-forro',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Quinta, 7h30. Corredor técnico do prédio comercial. Bia segura um rolo de cabo par trançado blindado STP e aponta para duas eletrocalhas no teto.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Bia, pra economizar eletroduto aqui no corredor, posso passar o cabinho de comunicação do VRF dentro do mesmo conduíte dos cabos de força das condensadoras?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Jamais, Juninho! O compressor inverter modula de **6% a 100%** da frequência com chaveamento PWM de alta velocidade, gerando um campo brutal de interferência eletromagnética (**EMI**)!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O compressor inverter ajusta continuamente sua rotação (modulando de 6% a 100% de sua frequência nominal, normalmente controlada em Hertz)',
      },
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Se você colar o cabo de dados no cabo de força, o acoplamento capacitivo e indutivo injeta ruído nos pacotes digitais. A Mitsubishi, por exemplo, exige separação física mínima absoluta de **50 mm**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A Mitsubishi Electric, por exemplo, exige uma separação física mínima absoluta de 50 mm entre cabos M-Net e fiação de força',
      },
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'bia',
      texto: 'E olha como o par trançado funciona: como os dois fios se cruzam em hélice, o ruído magnético induz tensões iguais nos dois lados que se anulam no receptor diferencial (que opera entre **-7V e +12V**).',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'que deve situar-se estritamente entre -7V e +12V.',
      },
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Por isso, atenção nos bornes: desfazer a trança do cabo por mais de **50 mm** na chegada da placa destrói essa simetria e transforma a ponta do fio numa antena de ruído!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Desfazer a trança do cabo por mais de 50 mm em bornes de conexão destrói essa simetria física',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Ao cabear 15 evaporadoras VRF num andar: qual topologia de rede é obrigatória no protocolo RS-485 e como a malha metálica de blindagem (shield) do cabo STP deve ser aterrada?',
      opcoes: [
        {
          id: 'a',
          texto: 'Ligar em estrela (puxando pernas em T para cada sala) e aterrar a malha metálica nas duas pontas de cada trecho.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Duplo desastre! Emendas em estrela/T (*Star / T-Tap*) geram reflexões de onda (ecos digitais), e aterrar a malha nas duas pontas cria um **Ground Loop** que circula corrente pela blindagem!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Topologia Daisy-Chain (entra e sai de placa em placa em linha única, com resistor de terminação no fim) e malha blindada aterrada em ponto único (Single-Point Grounding na condensadora).',
          ideal: true,
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Perfeito! **Daisy-Chain** evita reflexões de impedância, e o aterramento da malha em **ponto único** drena a interferência para a terra sem formar loop de corrente!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Usar cabo paralelo de som sem blindagem e sem trança.',
          reacao: [
            {
              quem: 'bia',
              texto: 'Sem par trançado nem blindagem (como o padrão **1,25 mm²** CVVS/CPEVS), o VRF cai em erro de comunicação na primeira rampa do inversor!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'A Mitsubishi M-Net exige estritamente o uso de cabos blindados de duas vias, bitola de 1,25 mm² (16 AWG), padrão CVVS/CPEVS.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Olha a diferença entre fabricantes na bitola e padrão: sistemas como o Mitsubishi M-Net exigem cabo blindado de duas vias de **1,25 mm²** (16 AWG), padrão CVVS/CPEVS.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A Mitsubishi M-Net exige estritamente o uso de cabos blindados de duas vias, bitola de 1,25 mm² (16 AWG), padrão CVVS/CPEVS.',
      },
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E na última evaporadora da fila *Daisy-Chain*, nunca esqueça de ativar o **resistor de terminação** (geralmente 120 ohms via DIP switch na placa) para absorver o sinal no fim da linha!',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, e quando a placa dá erro na bobina da Válvula de Expansão Eletrônica (EEV)? Como eu testo aquela tomadinha pequenininha com o multímetro?',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'bia',
      texto: 'É um diagnóstico clássico de bancada, Ju! Você desconecta o plugue do motor de passo da EEV e mede a resistência com o ohmímetro: pinos adjacentes saudáveis exibem de **40 a 50 Ω**!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'meça a resistência com o ohmímetro nos terminais do plugue do motor de passo (normalmente pinos adjacentes exibem de 40 a 50',
      },
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e o “Pé de Galinha” na Rede VRF',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num hotel de 40 quartos, o Zé quis economizar cabo de comunicação: puxou um tronco no corredor e saiu fazendo emenda em “T” (*T-Tap*) com fita isolante para cada quarto!',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Além das derivações em T criarem ecos de reflexão que corrompiam os pacotes de dados, ele ainda destrançou mais de um palmo de fio nos bornes (muito acima do limite de **50 mm**)!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Desfazer a trança do cabo por mais de 50 mm em bornes de conexão destrói essa simetria física',
          },
        },
        {
          quem: 'simon',
          texto: 'O sistema caía em erro “U4 / E1” toda vez que o compressor acelerava até **100%**! Tivemos que passar um cabo contínuo novo em *Daisy-Chain* entrando e saindo de evaporadora em evaporadora.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O compressor inverter ajusta continuamente sua rotação (modulando de 6% a 100% de sua frequência nominal, normalmente controlada em Hertz)',
          },
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Quando um cabo de dados RS-485 precisa cruzar uma linha elétrica de força no forro, o ideal é amarrar os dois lado a lado por vários metros.',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          texto: 'Mito! Linhas paralelas maximizam a indução eletromagnética. Mantenha separação mínima absoluta (pelo menos **50 mm** ou mais conforme tensão) e, se precisar cruzar, cruze perpendicularmente a 90 graus!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'A Mitsubishi Electric, por exemplo, exige uma separação física mínima absoluta de 50 mm entre cabos M-Net e fiação de força',
          },
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'No diagnóstico da bobina do motor de passo de uma EEV com o ohmímetro, leituras normais entre pinos adjacentes do conector situam-se tipicamente de 40 a 50 Ω.',
      verdade: true,
      fonte: {
        campo: 'infobox_campo',
        trecho: 'meça a resistência com o ohmímetro nos terminais do plugue do motor de passo (normalmente pinos adjacentes exibem de 40 a 50',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Verdade! Se um enrolamento der circuito aberto (OL) ou curto (0 Ω) fora da faixa de **40 a 50 Ω**, a bobina da EEV está danificada e a válvula perde passos.',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'meça a resistência com o ohmímetro nos terminais do plugue do motor de passo (normalmente pinos adjacentes exibem de 40 a 50',
          },
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Por que a blindagem metálica (shield) de um cabo de comunicação VRF nunca deve ser aterrada simultaneamente nas carcaças de todas as evaporadoras e da condensadora?',
      opcoes: [
        {
          id: 'a',
          texto: 'Porque diferenças de potencial entre terras distantes criam um Loop de Terra (Ground Loop), fazendo corrente parasita circular pela própria malha e induzir ruído no par de dados.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Exato! A malha deve ter continuidade de ponta a ponta (isolada das carcaças intermediárias) e ser aterrada em **ponto único** na referência da condensadora mestre.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Porque a malha metálica serve apenas para deixar o cabo mais pesado.',
          feedback: [
            {
              quem: 'bia',
              texto: 'A malha é uma Gaiola de Faraday essencial contra EMI, mas só funciona drenando para um único ponto de terra!',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora de Campo — Limite de Destrançamento e Separação M-Net (mm)',
      formula: 'Separação Mínima Força-Dados = 50 mm | Destrançamento Máx. no Borne = 50 mm',
      enunciado: 'Pelas especificações técnicas da aula para redes de dados VRF (como o padrão Mitsubishi M-Net de **1,25 mm²**), qual é o comprimento máximo em **mm** que o par trançado pode ser desfeito nos bornes (igual à separação física mínima absoluta de **50 mm** da fiação de força)?',
      leituras: [
        { rotulo: 'Bitola do Cabo M-Net', valor: '1,25 mm²' },
        { rotulo: 'Janela de Modo Comum', valor: '-7V e +12V' },
        { rotulo: 'Resistência Bobina EEV', valor: '40 a 50 Ω' },
      ],
      unidade: 'mm',
      respostaCorreta: 50,
      tolerancia: 0,
      opcoesRapidas: [10, 25, 50, 100],
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A Mitsubishi Electric, por exemplo, exige uma separação física mínima absoluta de 50 mm entre cabos M-Net e fiação de força',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Desfazer a trança do cabo por mais de 50 mm em bornes de conexão destrói essa simetria física',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A Mitsubishi M-Net exige estritamente o uso de cabos blindados de duas vias, bitola de 1,25 mm² (16 AWG), padrão CVVS/CPEVS.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'que deve situar-se estritamente entre -7V e +12V.',
        },
        {
          campo: 'infobox_campo',
          trecho: 'meça a resistência com o ohmímetro nos terminais do plugue do motor de passo (normalmente pinos adjacentes exibem de 40 a 50',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Cravado! Nunca desfaça a trança por mais de **50 mm** no borne e mantenha no mínimo **50 mm** de distância física dos cabos de força.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'A Mitsubishi Electric, por exemplo, exige uma separação física mínima absoluta de 50 mm entre cabos M-Net e fiação de força',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Desfazer a trança do cabo por mais de 50 mm em bornes de conexão destrói essa simetria física',
            },
          ],
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Guarde a regra dos **50 mm**: máximo de **50 mm** de cabo destrançado no borne e mínimo de **50 mm** de separação física da fiação de força.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'A Mitsubishi Electric, por exemplo, exige uma separação física mínima absoluta de 50 mm entre cabos M-Net e fiação de força',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Desfazer a trança do cabo por mais de 50 mm em bornes de conexão destrói essa simetria física',
            },
          ],
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Rede VRF — Topologia Daisy-Chain e Blindagem',
      enunciado: 'Observe o slide da Masterclass de Cabeamento de Dados VRF/VRV e aponte a instalação imune a ruído EMI:',
      imagem: '/images/academia/hvac-instalacao/modulo04/modulo04-03/Modulo-04-03-VRF_VRV Data Wiring Masterclass-01.jpg',
      legendaImagem: 'Módulo 04-03 — Arquitetura RS-485, Daisy-Chain e Aterramento de Ponto Único',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Cabo par trançado blindado em eletroduto exclusivo (> 50 mm da força), topologia Daisy-Chain pura, trança mantida até < 50 mm do borne e malha aterrada em ponto único.',
          correta: true,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'A Mitsubishi Electric, por exemplo, exige uma separação física mínima absoluta de 50 mm entre cabos M-Net e fiação de força',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Desfazer a trança do cabo por mais de 50 mm em bornes de conexão destrói essa simetria física',
            },
          ],
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Comunicação cristalina! Sinal diferencial operando tranquilo dentro da janela de **-7V e +12V** sem perder um único pacote.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'que deve situar-se estritamente entre -7V e +12V.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Cabo sem blindagem passado junto com a força trifásica e ligado em estrela (T-Tap) com as malhas aterradas nas duas pontas.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              texto: 'Receita garantida para erro intermitente de comunicação, reflexões de onda e *Ground Loop*!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Sistema Inteligente Precisa de Sistema Nervoso Limpo',
      falas: [
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Se a tubulação de cobre é o sistema circulatório do VRF, o par trançado RS-485 é o sistema nervoso central. De que adianta ter um cérebro inverter brilhante se os nervos estão em curto ou cheios de ruído?',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Quem respeita o *Daisy-Chain*, o ponto único de terra e os **50 mm** no borne entrega um sistema que conversa em paz por vinte anos.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Desfazer a trança do cabo por mais de 50 mm em bornes de conexão destrói essa simetria física',
          },
        },
      ],
      principio: 'Comunicação digital não aceita improviso: respeite a linha única Daisy-Chain e o aterramento em ponto único.',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte as regras de **Topologia Daisy-Chain**, separação física de **50 mm** e diagnóstico de bobina EEV (**40 a 50 Ω**) na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A Mitsubishi Electric, por exemplo, exige uma separação física mínima absoluta de 50 mm entre cabos M-Net e fiação de força',
        },
        {
          campo: 'infobox_campo',
          trecho: 'meça a resistência com o ohmímetro nos terminais do plugue do motor de passo (normalmente pinos adjacentes exibem de 40 a 50',
        },
      ],
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Separação e Par Trançado:** mantenha cabos de dados em infraestrutura separada (mínimo **50 mm** da força) e não desfaça a trança por mais de **50 mm** no borne.',
        '**Daisy-Chain + Ponto Único:** ligue sempre em série (sem emendas em T), ative o resistor de fim de linha e aterre a blindagem STP em **ponto único**.',
        '**Diagnóstico de EEV:** meça os pinos adjacentes do motor de passo no ohmímetro (**40 a 50 Ω**) para validar as bobinas.',
      ],
      proxima: 'Parabéns por concluir o Módulo 4! Supere o Desafio do Módulo 4 e prepare-se para o Módulo 5 (Arquitetura Comercial, VRF e Câmaras Frias)!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A Mitsubishi Electric, por exemplo, exige uma separação física mínima absoluta de 50 mm entre cabos M-Net e fiação de força',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Desfazer a trança do cabo por mais de 50 mm em bornes de conexão destrói essa simetria física',
        },
        {
          campo: 'infobox_campo',
          trecho: 'meça a resistência com o ohmímetro nos terminais do plugue do motor de passo (normalmente pinos adjacentes exibem de 40 a 50',
        },
      ],
    },
  ],
};
