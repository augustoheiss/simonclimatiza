// src/data/conversas/sistemavrf/1.js
// Roteiro "Papo de Balcão" — Dominando o Sistema VRF (TVR Ultra) · Aula 01

export default {
  schema: 1,
  cursoId: 'sistemavrf',
  aulaId: '1',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'padaria-manha',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-abertura',
      tipo: 'cena',
      texto: 'Balcão da padaria às 07h10. Juninho abre uma planta baixa enorme na mesa ao lado do café coado e coça a cabeça olhando as siglas.',
    },
    {
      id: 'fala-juninho-planta',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Simon, o engenheiro da obra me entregou essa planta do **Trane TVR Ultra** cheia de letra: **W**, **C/B**, **D/A**. Parece sopa de letrinhas!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Aprenda a bater o olho na planta e identificar equipamentos através dos códigos: W (Hi-Wall), C/B (Cassete), D/A (Duto), entre outros.',
      },
    },
    {
      id: 'fala-simon-intro',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'bem-humorado',
      texto: 'Calma, garoto! Quem domina o código da planta manda na obra. Imagina pendurar trinta splits na fachada de um prédio histórico em vez de uma prumada VRF limpa.',
    },
    {
      id: 'fala-bia-escala',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'E a escala do **TVR Ultra** impressiona: a força é medida em **Horse Power (HP)**, indo de unidades compactas de **0.6 HP** até montagens gigantescas de **96 HP**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Entenda a força do sistema medido em Horse Power (HP), variando de unidades compactas de 0.6 HP até montagens gigantescas de 96 HP.',
      },
    },
    {
      id: 'escolha-decodificacao',
      tipo: 'escolha',
      pergunta: 'Você bateu o olho na planta executiva do andar corporativo e viu três salas marcadas com os códigos **W**, **C/B** e **D/A**. Como você separa as evaporadoras no almoxarifado?',
      opcoes: [
        {
          id: 'a',
          texto: 'W é Duto, C/B é Hi-Wall de parede e D/A é Cassete de teto.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Trocar Duto por Hi-Wall no almoxarifado faz o gesseiro chorar lá no andar! Olha a associação das letras em inglês.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'W é Hi-Wall (Wall), C/B é Cassete e D/A é unidade de Duto.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Na mosca! **W** de Wall (Hi-Wall), **C/B** para a família Cassete e **D/A** para Duto. Bateu o olho na planta, já sabe o que subir no elevador de carga!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Aprenda a bater o olho na planta e identificar equipamentos através dos códigos: W (Hi-Wall), C/B (Cassete), D/A (Duto), entre outros.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'As letras indicam apenas a cor do gabinete plástico.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'risada',
              texto: 'Imagina pedir uma máquina cor D/A! Esses códigos definem a arquitetura construtiva de cada unidade interna.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-simon-codigos',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'No campo, você precisa ler o catálogo vivo: uma salinha de apoio pede uma interna de **0.6 HP**, enquanto o prédio todo soma até **96 HP** nos módulos.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'variando de unidades compactas de 0.6 HP até montagens gigantescas de 96 HP.',
      },
    },
    {
      id: 'fala-bia-ventiladores',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'E tem o macete visual de ouro nas unidades externas: dá para identificar a faixa de capacidade máxima da condensadora só olhando a quantidade de ventiladores no topo.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Unidades Externas: Uma dica de ouro para identificar a capacidade máxima das condensadoras apenas olhando para a quantidade de ventiladores.',
      },
    },
    {
      id: 'fala-juninho-dica',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'Sério, Bia? Quer dizer que mesmo de longe, chegando na cobertura, já dá pra ter leitura de porte pelo chassi e pelos ventiladores?',
    },
    {
      id: 'fala-simon-confirmacao',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Exato! Gabinete de um ventilador é a linha de entrada dos módulos externos; quando sobe a potência, o chassi cresce e ganha dois ventiladores de descarga vertical.',
    },
    {
      id: 'causo-planta-trocada',
      tipo: 'causo',
      titulo: 'O Causo do Mestre de Obras e a Sala de Reunião',
      falas: [
        {
          quem: 'simon',
          emocao: 'bem-humorado',
          texto: 'Num prédio na Avenida Paulista, o instalador terceirizado não sabia ler os códigos **W**, **C/B** e **D/A** na planta do **TVR Ultra**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'identificar equipamentos através dos códigos: W (Hi-Wall), C/B (Cassete), D/A (Duto), entre outros.',
          },
        },
        {
          quem: 'juninho',
          emocao: 'risada',
          texto: 'Não me diga que ele chumbou suporte errado no teto!',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Chumbou! Na sala da diretoria estava escrito **D/A** (Duto embutido no forro), e ele deixou espera na parede achando que era **W** (Hi-Wall). Teve que refazer o gesso inteiro!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'identificar equipamentos através dos códigos: W (Hi-Wall), C/B (Cassete), D/A (Duto), entre outros.',
          },
        },
      ],
    },
    {
      id: 'mito-capacidade-hp',
      tipo: 'mitoVerdade',
      afirmacao: 'O sistema Trane TVR Ultra atende apenas salas gigantescas, não possuindo unidades internas para ambientes pequenos abaixo de dois cavalos de potência.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! O **TVR Ultra** parte de unidades internas supercompactas de **0.6 HP** para pequenas salas e cabines, chegando até **96 HP** na combinação externa.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Entenda a força do sistema medido em Horse Power (HP), variando de unidades compactas de 0.6 HP até montagens gigantescas de 96 HP.',
          },
        },
        {
          quem: 'simon',
          emocao: 'neutro',
          texto: 'Essa versatilidade é o que permite climatizar desde a guarita ou sala de telefonia até o auditório principal na mesma arquitetura.',
        },
      ],
    },
    {
      id: 'inspecao-visual-aula1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Planta e Cobertura — Identificação Visual TVR Ultra',
      enunciado: 'Analise o guia visual da Aula 01 e aponte a afirmação **correta** sobre a leitura rápida de unidades internas e externas do Trane TVR Ultra:',
      imagem: '/images/academia/vrf/aula01/infografico.jpg',
      legendaImagem: 'Infográfico Aula 01 — Guia Visual de Identificação e Capacidades TVR Ultra',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'variando de unidades compactas de 0.6 HP até montagens gigantescas de 96 HP.',
      },
      pontos: [
        {
          id: 'p1',
          rotulo: 'Os códigos W (Hi-Wall), C/B (Cassete) e D/A (Duto) identificam as internas na planta, e o sistema vai de 0.6 HP até 96 HP.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Perfeito! Você decodifica a planta num piscar de olhos e sabe que a linha cobre de **0.6 HP** até **96 HP**.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'variando de unidades compactas de 0.6 HP até montagens gigantescas de 96 HP.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'A quantidade de ventiladores na unidade externa é apenas estética e não tem relação com a capacidade máxima da condensadora.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Olha a dica de ouro da aula: a quantidade de ventiladores no topo ajuda justamente a identificar a capacidade máxima das condensadoras!',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-escala-hp',
      tipo: 'calculadora',
      titulo: 'Calculadora de Escala Modular — Teto do Sistema TVR Ultra',
      formula: 'Capacidade Máxima Combinada = Soma dos Módulos Externos (até 96 HP)',
      enunciado: 'Pelo manual técnico apresentado na Aula 01, o sistema **Trane TVR Ultra** varia de unidades compactas de **0.6 HP** até montagens modulares gigantescas. Qual é a capacidade máxima em **HP** alcançada nessa montagem?',
      leituras: [
        { rotulo: 'Unidade Compacta Mínima', valor: '0.6 HP' },
        { rotulo: 'Códigos de Planta', valor: 'W, C/B, D/A' },
      ],
      unidade: 'HP',
      respostaCorreta: 96,
      tolerancia: 0.1,
      opcoesRapidas: [16, 32, 64, 96],
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Entenda a força do sistema medido em Horse Power (HP), variando de unidades compactas de 0.6 HP até montagens gigantescas de 96 HP.',
      },
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Cravado! O teto de combinação do **TVR Ultra** chega a **96 HP**, partindo de internas compactas de **0.6 HP**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'variando de unidades compactas de 0.6 HP até montagens gigantescas de 96 HP.',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Confira na descrição da aula: o sistema vai de unidades de **0.6 HP** até montagens gigantescas de **96 HP**!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'variando de unidades compactas de 0.6 HP até montagens gigantescas de 96 HP.',
          },
        },
      ],
    },
    {
      id: 'filosofia-elegancia',
      tipo: 'filosofia',
      titulo: 'Potência Industrial com Silêncio de Biblioteca',
      principio: 'A verdadeira elegância da engenharia é entregar potência industrial com silêncio de biblioteca e leitura limpa de projeto.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Sabe o que eu acho bonito quando vocês falam de VRF? É que um prédio inteiro fica fresquinho sem aquela poluição visual de trinta caixas penduradas na janela.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Falou tudo, Dona Marta. Engenharia de verdade resolve problemas complexos sem fazer alarde: esconde a força bruta na cobertura e entrega só conforto lá embaixo.',
        },
      ],
    },
    {
      id: 'quiz-identificacao-externa',
      tipo: 'quiz',
      enunciado: 'Ao chegar na cobertura de um edifício comercial sem a folha de rosto do projeto em mãos, qual dica visual da Aula 01 permite estimar rapidamente a faixa de capacidade máxima das condensadoras TVR Ultra?',
      opcoes: [
        {
          id: 'a',
          texto: 'Observar a quantidade de ventiladores no topo da unidade externa.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Olho de águia! A quantidade de ventiladores das condensadoras entrega na hora a faixa de capacidade máxima do gabinete.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Unidades Externas: Uma dica de ouro para identificar a capacidade máxima das condensadoras apenas olhando para a quantidade de ventiladores.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Contar quantos parafusos prendem a tampa frontal.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'neutro',
              texto: 'Parafuso de carenagem não define potência térmica. O segredo visual está na quantidade de ventiladores da condensadora!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Medir a espessura da tinta da carenagem externa.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'risada',
              texto: 'Aí você precisaria de um micrômetro de funilaria, não de olho clínico de refrigerista!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-fechamento',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Agora sim! Nunca mais confundo **W**, **C/B** e **D/A** na planta, e já sei que a régua vai de **0.6 HP** a **96 HP**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'variando de unidades compactas de 0.6 HP até montagens gigantescas de 96 HP.',
      },
    },
    {
      id: 'fala-bia-transicao',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Guarda esse entusiasmo porque na próxima parada nós vamos abrir o capô dessa máquina e ver os guardiões do compressor!',
    },
    {
      id: 'fala-marta-cafe',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'bem-humorado',
      texto: 'Então terminem esse café que o caminhão da obra já buzina lá na esquina!',
    },
    {
      id: 'fala-simon-bora',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Bora pra cima! Quem sabe ler o mapa da mina já entra na obra com meio caminho andado.',
    },
    {
      id: 'ref-conteudo-1',
      tipo: 'referencia',
      texto: 'Consulte os slides visuais e o resumo técnico da Aula 01 na aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Entenda a força do sistema medido em Horse Power (HP), variando de unidades compactas de 0.6 HP até montagens gigantescas de 96 HP.',
      },
      pontos: [
        '**Leitura de planta sem erro:** decodifique rapidamente **W** (Hi-Wall), **C/B** (Cassete) e **D/A** (Duto).',
        '**Amplitude de potência:** o sistema Trane TVR Ultra escala de unidades compactas de **0.6 HP** até **96 HP**.',
        '**Dica visual de cobertura:** identifique a capacidade máxima das condensadoras observando a quantidade de ventiladores.',
      ],
      proxima: 'Na Aula 02 vamos abrir o capô do TVR Ultra: simultaneidade, Branch Joints em Y, compressor Inverter, acumulador e separador de óleo.',
    },
  ],
};
