// src/data/conversas/tvrpro/1.js
// Roteiro "Papo de Balcão" — Instalação e Comissionamento TVR Pro DC Inverter · Aula 01

export default {
  schema: 1,
  cursoId: 'tvrpro',
  aulaId: '1',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-abertura',
      tipo: 'cena',
      texto: 'Canteiro de obras às 07h15. O caminhão munck acabou de estacionar com os módulos do Trane TVR Pro DC Inverter embalados nos paletes.',
    },
    {
      id: 'fala-juninho-chegada',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Simon, chegaram os gigantes do **TVR Pro**! Posso pedir pro motorista já passar o cabo de aço e subir pro telhado?',
    },
    {
      id: 'fala-simon-freio',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Segura a emoção, Juninho! Instalação "Zero-Defeitos" começa na calçada. Um erro no içamento ou na segurança elétrica aqui anula a garantia antes da máquina ligar.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O objetivo desta aula é garantir que nossa equipe realize uma instalação "Zero-Defeitos". Vamos focar em dominar o içamento e a preparação inicial do equipamento, garantindo não só a integridade física de todos, mas também a validade da garantia da máquina.',
      },
    },
    {
      id: 'fala-bia-r410a-anoxia',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Pilar número um: segurança crítica. O gás **R410A** não é tóxico, mas é mais pesado que o ar e se acumula no nível do solo, podendo causar anoxia silenciosa em espaço confinado.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Vazamento de R410A: Este gás não é tóxico, mas é asfixiante. Por ser mais pesado que o ar, ele se acumula no nível do solo, expulsando o oxigênio respirável e podendo causar anoxia silenciosa em espaços confinados.',
      },
    },
    {
      id: 'fala-simon-descarga-eletrica',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'E no quadro elétrico, depois de desligar a energia principal, é obrigatório aguardar exatos **5 minutos** e medir no multímetro uma tensão inferior a **36V** DC antes de tocar nas placas!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'É obrigatório aguardar exatos 5 minutos após o desligamento da energia principal antes de abrir o quadro elétrico e tocar nas placas. O contato físico só é liberado quando o multímetro registrar uma tensão inferior a 36V DC.',
      },
    },
    {
      id: 'escolha-icamento-correias',
      tipo: 'escolha',
      pergunta: 'Na hora de içar a unidade externa do TVR Pro com o guindaste, como você deve posicionar a máquina e especificar as correias de elevação?',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A unidade deve permanecer em posição vertical e com a frente voltada para cima durante 100% do transporte.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'É obrigatório o uso de correias que não ultrapassem 20 mm de largura e o uso de calços protetores para não amassar a carenagem.',
        },
      ],
      opcoes: [
        {
          id: 'a',
          texto: 'Deitar a máquina de lado na carroceria e puxar por uma única cinta larga sem calços.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Jamais deite uma condensadora VRF! O óleo escorre do compressor e o centro de gravidade assimétrico faz a carga virar no ar!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Manter posição vertical durante 100% do transporte, respeitar o centro de gravidade assimétrico e usar correias de até 20 mm com calços protetores.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Rigor técnico impecável! Vertical em **100%** do transporte, correias que não ultrapassem **20 mm** de largura e calços protetores para não amassar a carenagem.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'A unidade deve permanecer em posição vertical e com a frente voltada para cima durante 100% do transporte.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'É obrigatório o uso de correias que não ultrapassem 20 mm de largura e o uso de calços protetores para não amassar a carenagem.',
                },
              ],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Passar ganchos direto nas aletas de alumínio do condensador para levantar rápido.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Gancho na serpentina rasga os tubos de cobre antes da máquina sair do chão!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-simon-quatro-porcas',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Quando a máquina pousar no local, lembre-se do Pilar 3: retirar as **4 porcas** do suporte traseiro de madeira que prendem o chassi ao palete.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'É necessário retirar as 4 porcas do suporte traseiro de madeira que prendem o chassi ao palete.',
      },
    },
    {
      id: 'fala-bia-placa-protecao',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'E atenção máxima: é absolutamente obrigatório remover a **placa de proteção do condensador** antes do posicionamento final!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'É absolutamente obrigatório remover a placa de proteção do condensador antes do posicionamento final. Caso não seja removida, o fluxo de ar ficará bloqueado, paralisando a troca térmica, o que causará o superaquecimento e a quebra do compressor, anulando imediatamente a garantia.',
      },
    },
    {
      id: 'fala-juninho-placa-esquecida',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'Tem gente que encosta a máquina na parede e esquece a placa de proteção de transporte tampando o condensador?!',
    },
    {
      id: 'fala-simon-consequencia-placa',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Acontece mais do que você imagina! O fluxo de ar fica bloqueado, paralisa a troca térmica, superaquece e quebra o compressor, anulando imediatamente a garantia.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Caso não seja removida, o fluxo de ar ficará bloqueado, paralisando a troca térmica, o que causará o superaquecimento e a quebra do compressor, anulando imediatamente a garantia.',
      },
    },
    {
      id: 'causo-guindaste-sem-calco',
      tipo: 'causo',
      titulo: 'O Operador Apressado e a Placa Esquecida Atrás do Módulo',
      falas: [
        {
          quem: 'simon',
          emocao: 'bem-humorado',
          texto: 'Numa obra corporativa, a equipe subiu três módulos no guindaste sem observar que o centro de gravidade (CG) é assimétrico: a máquina subiu torta dando susto em todo mundo!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'A máquina possui o centro de gravidade (CG) assimétrico, e ignorar isso pode causar tombamento durante a elevação.',
          },
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'E quando pousaram na base, aposto que já encostaram na mureta sem tirar a proteção traseira!',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Na mosca! Deixaram a placa de proteção do condensador presa atrás e nem tiraram as **4 porcas** do suporte de madeira. Sorte que chegamos na vistoria antes da partida!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'É necessário retirar as 4 porcas do suporte traseiro de madeira que prendem o chassi ao palete.',
          },
        },
      ],
    },
    {
      id: 'mito-tocar-placa-imediato',
      tipo: 'mitoVerdade',
      afirmacao: 'Assim que você desliga o disjuntor geral do TVR Pro, já pode tocar imediatamente nas placas eletrônicas sem esperar e sem usar o multímetro.',
      verdade: false,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'É obrigatório aguardar exatos 5 minutos após o desligamento da energia principal antes de abrir o quadro elétrico e tocar nas placas. O contato físico só é liberado quando o multímetro registrar uma tensão inferior a 36V DC.',
      },
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito fatal! Os capacitores guardam alta tensão contínua. É obrigatório aguardar exatos **5 minutos** após desligar e confirmar no multímetro tensão inferior a **36V** DC.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'É obrigatório aguardar exatos 5 minutos após o desligamento da energia principal antes de abrir o quadro elétrico e tocar nas placas. O contato físico só é liberado quando o multímetro registrar uma tensão inferior a 36V DC.',
          },
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Segurança elétrica não aceita pressa: relógio marcando cinco minutos e multímetro confirmando menos de **36V** DC.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O contato físico só é liberado quando o multímetro registrar uma tensão inferior a 36V DC.',
          },
        },
      ],
    },
    {
      id: 'calc-tensao-segura',
      tipo: 'calculadora',
      titulo: 'Verificador NR-10 — Tensão Máxima Segura de Contato DC',
      formula: 'Espera ≥ 5 min → Medir Barramento DC < 36V DC',
      enunciado: 'Após desligar a energia principal do **TVR Pro** e aguardar os **5 minutos** obrigatórios de descarga, o contato físico nas placas só é liberado quando o multímetro registrar tensão inferior a quantos Volts DC (**V**)?',
      leituras: [
        { rotulo: 'Tempo de Espera Pós-Corte', valor: '5 minutos exatos' },
        { rotulo: 'Largura Máxima da Correia', valor: '20 mm' },
      ],
      unidade: 'V',
      respostaCorreta: 36,
      tolerancia: 0.1,
      opcoesRapidas: [12, 24, 36, 110],
      fonte: {
        campo: 'conteudo_html',
        trecho: 'É obrigatório aguardar exatos 5 minutos após o desligamento da energia principal antes de abrir o quadro elétrico e tocar nas placas. O contato físico só é liberado quando o multímetro registrar uma tensão inferior a 36V DC.',
      },
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Exato! Somente abaixo de **36V** DC no multímetro, após aguardar os **5 minutos**, o acesso físico às placas está seguro.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O contato físico só é liberado quando o multímetro registrar uma tensão inferior a 36V DC.',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Confira no Pilar 1 da aula: o limite de segurança no multímetro é tensão inferior a **36V** DC!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O contato físico só é liberado quando o multímetro registrar uma tensão inferior a 36V DC.',
          },
        },
      ],
    },
    {
      id: 'inspecao-recebimento-aula1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Recebimento e Içamento — Os 3 Pilares TVR Pro',
      enunciado: 'Observe o infográfico da Aula 01 e aponte a condição **correta** para o manuseio e desembalagem do TVR Pro:',
      imagem: '/images/academia/tvrpro/aula01/infografico.jpg',
      legendaImagem: 'Infográfico Aula 01 — Segurança, Recebimento e Manuseio do TVR Pro',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'É obrigatório o uso de correias que não ultrapassem 20 mm de largura e o uso de calços protetores para não amassar a carenagem.',
      },
      pontos: [
        {
          id: 'p1',
          rotulo: 'Usar correias de até 20 mm com calços protetores, retirar as 4 porcas do suporte traseiro e remover a placa de proteção do condensador.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Padrão Zero-Defeitos! Carenagem intacta, fluxo de ar livre e garantia preservada.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'É obrigatório o uso de correias que não ultrapassem 20 mm de largura e o uso de calços protetores para não amassar a carenagem.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Manter a placa de proteção do condensador instalada permanentemente para proteger contra poeira em operação.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Se não remover a placa de proteção, o fluxo de ar fica bloqueado, superaquece e quebra o compressor!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-no-da-cinta',
      tipo: 'filosofia',
      titulo: 'A Engenharia Pesada Começa no Nó da Cinta',
      principio: 'Minutos de pressa no guindaste podem destruir na calçada uma máquina que levou meses para ser fabricada. Cuidar do recebimento é respeitar o patrimônio antes do primeiro parafuso.',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Tem gente que acha que engenharia é só mexer em notebook e chave DIP. Mas colocar um colosso desses no topo do prédio sem um arranhão exige ciência e disciplina.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'E respeitar os cinco minutos de descarga e a ventilação contra asfixia por **R410A** mostra que a vida do técnico vale mais que qualquer cronograma.',
        },
      ],
    },
    {
      id: 'quiz-anoxia-r410a',
      tipo: 'quiz',
      enunciado: 'Por que um vazamento de gás R410A em uma casa de máquinas fechada no subsolo representa um risco crítico à vida, segundo o Pilar 1 da Aula 01?',
      opcoes: [
        {
          id: 'a',
          texto: 'Porque o R410A é mais pesado que o ar e se acumula no nível do solo, expulsando o oxigênio e podendo causar anoxia silenciosa.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Resposta exata! Mesmo não sendo tóxico, ele desloca o oxigênio do piso e exige ventilação imediata.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Vazamento de R410A: Este gás não é tóxico, mas é asfixiante. Por ser mais pesado que o ar, ele se acumula no nível do solo, expulsando o oxigênio respirável e podendo causar anoxia silenciosa em espaços confinados.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Porque o R410A é mais leve que o hélio e sobe apenas para o telhado.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Cuidado! O R410A é mais pesado que o ar e acumula no chão!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Porque o R410A transforma o concreto em madeira.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'neutro',
              texto: 'O perigo real do R410A em espaço confinado é a asfixia por deslocamento de oxigênio no solo.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-checklist-mental',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Já conferi aqui: correias de até **20 mm**, calços nas quinas, posição **100%** vertical, tirar as **4 porcas** e arrancar a placa de proteção do condensador!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A unidade deve permanecer em posição vertical e com a frente voltada para cima durante 100% do transporte.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'É obrigatório o uso de correias que não ultrapassem 20 mm de largura e o uso de calços protetores para não amassar a carenagem.',
        },
      ],
    },
    {
      id: 'fala-bia-proxima-aula2',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Agora que os módulos subiram em segurança, na Aula 02 vamos preparar a fundação física e calcular a simultaneidade do sistema!',
    },
    {
      id: 'fala-marta-recado',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'bem-humorado',
      texto: 'E guardem os paletes e suportes de madeira direitinho na caçamba para deixar a obra um brinco!',
    },
    {
      id: 'fala-simon-avante',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Bora pra cobertura assentar essas máquinas no padrão de ouro!',
    },
    {
      id: 'ref-conteudo-tvr1',
      tipo: 'referencia',
      texto: 'Consulte todos os slides de içamento, centro de gravidade e segurança na aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'É obrigatório aguardar exatos 5 minutos após o desligamento da energia principal antes de abrir o quadro elétrico e tocar nas placas. O contato físico só é liberado quando o multímetro registrar uma tensão inferior a 36V DC.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'É obrigatório o uso de correias que não ultrapassem 20 mm de largura e o uso de calços protetores para não amassar a carenagem.',
        },
      ],
      pontos: [
        '**Segurança crítica:** ventile áreas fechadas contra asfixia por **R410A** e aguarde **5 minutos** confirmando menos de **36V** DC antes de tocar nas placas.',
        '**Içamento sem tombamento:** mantenha a máquina vertical durante **100%** do transporte, respeitando o CG assimétrico e usando correias de até **20 mm** com calços.',
        '**Desembalagem e fluxo livre:** solte as **4 porcas** do suporte traseiro e remova obrigatoriamente a placa de proteção do condensador.',
      ],
      proxima: 'Na Aula 02 estudaremos a Arquitetura da Escala: modularidade das condensadoras, limite de simultaneidade e padrão de ouro da base de concreto com chumbadores M12.',
    },
  ],
};
