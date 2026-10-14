// src/data/conversas/sistemavrf/8.js
// Roteiro "Papo de Balcão" — Dominando o Sistema VRF (TVR Ultra) · Aula 08

export default {
  schema: 1,
  cursoId: 'sistemavrf',
  aulaId: '8',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'resenha-pos-obra',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-abertura',
      tipo: 'cena',
      texto: 'Balcão de Sexta às 18h30 na padaria da Dona Marta. Ferramentas guardadas no baú, água com gás e limão na mesa e o manual de troubleshooting aberto.',
    },
    {
      id: 'fala-simon-abertura',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Chegamos à **Aula 08**, o grande encerramento da nossa série do **TVR Ultra**! E a pergunta que separa os homens dos meninos é: quando pisca **P1** ou **PL** em vermelho no display, o que você faz?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Bem-vindos à Aula 08, o grande encerramento da nossa série! Quando o display do sistema VRF começa a piscar códigos vermelhos como P1 ou PL, o que você faz?',
      },
    },
    {
      id: 'fala-juninho-palpite',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'bem-humorado',
      texto: 'Antes desse curso eu saía correndo! Agora eu abro o processo de **troubleshooting** avançado passo a passo.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Vamos ilustrar passo a passo o processo de "troubleshooting" avançado.',
      },
    },
    {
      id: 'fala-bia-caminho-exato',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Isso mesmo, Ju! Seguimos o caminho exato para separar superaquecimento, problemas de pressão e falhas eletrônicas.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Nesta aula, você vai ver: O caminho exato para identificar superaquecimento, problemas de pressão e falhas eletrônicas.',
      },
    },
    {
      id: 'escolha-teste-termistor',
      tipo: 'escolha',
      pergunta: 'Você desconfia que um sensor de temperatura está mentindo para a placa e gerando alarme falso de superaquecimento. Qual é o procedimento prático da Aula 08 para testar esse sensor termistor isoladamente?',
      opcoes: [
        {
          id: 'a',
          texto: 'Desconectar o sensor e usar o multímetro junto com a tabela do manual do fabricante para comparar resistência e temperatura.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Arma secreta do diagnóstico de elite! Você desconecta o termistor, mede no multímetro e cruza com a tabela oficial do manual do fabricante.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Na prática: Como usar a tabela do manual do fabricante e o multímetro para testar sensores termistores isoladamente.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Esquentar o sensor com a chama do maçarico até derreter a cápsula.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Maçarico no termistor destrói o semicondutor na hora! Sensor se testa com multímetro e tabela do manual.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Cortar o fio do sensor e fazer um jumper direto no conector da placa.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Um jumper simula curto-circuito no termistor e faz a placa travar imediatamente por erro de sensor!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-simon-codigo-pl',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'E presta atenção no código **PL**: enquanto o **P1** aponta problema de alta pressão no circuito, o **PL** grita quando o módulo Inverter sofre superaquecimento no dissipador!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Quando o display do sistema VRF começa a piscar códigos vermelhos como P1 ou PL, o que você faz?',
      },
    },
    {
      id: 'fala-bia-dissipador-pl',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Muitas vezes o código **PL** aparece porque o duto traseiro de alumínio do dissipador do módulo está obstruído por sujeira ou falta de pasta térmica adequada.',
    },
    {
      id: 'fala-juninho-multimetro-tabela',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'E quando a dúvida é nos sensores, a gente isola o termistor da placa e confere na tabela do fabricante com o multímetro. Assim ninguém compra placa nem sensor no chute!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Na prática: Como usar a tabela do manual do fabricante e o multímetro para testar sensores termistores isoladamente.',
      },
    },
    {
      id: 'causo-pombo-dissipador',
      tipo: 'causo',
      titulo: 'O Ninho de Pombo que Derrubava o VRF pelo Código PL',
      falas: [
        {
          quem: 'simon',
          emocao: 'bem-humorado',
          texto: 'Num prédio público, duas empresas já tinham ido olhar um **TVR Ultra** que desarmava todo dia às duas da tarde piscando **PL** no display.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Quando o display do sistema VRF começa a piscar códigos vermelhos como P1 ou PL, o que você faz?',
          },
        },
        {
          quem: 'marta',
          emocao: 'curioso',
          texto: 'E ninguém descobria o que era, Simon?',
        },
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Eles só olhavam a serpentina principal! Quando seguimos a trilha do superaquecimento do **PL**, olhamos atrás da chaminé do dissipador de alumínio da placa Inverter e tinha um ninho de pombo tampando a passagem de ar! Limpamos o duto e acabou o mistério.',
        },
      ],
    },
    {
      id: 'mito-sensor-olhometro',
      tipo: 'mitoVerdade',
      afirmacao: 'É impossível saber se um sensor termistor do VRF está calibrado sem substituir todos os sensores e a placa principal ao mesmo tempo.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! Usando a tabela do manual do fabricante e o multímetro, você testa cada sensor termistor isoladamente com precisão absoluta.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Na prática: Como usar a tabela do manual do fabricante e o multímetro para testar sensores termistores isoladamente. Aprenda a economizar tempo e dinheiro com diagnósticos exatos!',
          },
        },
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Diagnóstico exato economiza tempo e dinheiro do cliente e constrói a sua reputação.',
        },
      ],
    },
    {
      id: 'inspecao-troubleshooting-aula8',
      tipo: 'inspecao',
      titulo: 'Inspeção de Elite — Códigos P1/PL e Teste de Termistores',
      enunciado: 'Observe o infográfico da Aula 08 e aponte a combinação **correta** das ferramentas da "arma secreta do diagnóstico de elite":',
      imagem: '/images/academia/vrf/aula08/infografico.jpg',
      legendaImagem: 'Infográfico Aula 08 — A Arma Secreta do Diagnóstico de Elite',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Roteiro passo a passo de troubleshooting para P1 e PL + uso da tabela do manual do fabricante e multímetro para testar termistores isoladamente.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Gabaritou! Manual aberto na tabela de sensores e multímetro na mão são a arma secreta que nunca falha.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Na prática: Como usar a tabela do manual do fabricante e o multímetro para testar sensores termistores isoladamente.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Apagar códigos P1 e PL cobrindo o display com fita isolante preta.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Esconder o display não resolve superaquecimento nem pressão alta! Siga o troubleshooting passo a passo.',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-olhos-atentos',
      tipo: 'filosofia',
      titulo: 'A Simplicidade por Trás dos Grandes Mistérios',
      principio: 'No fim da jornada, percebemos que a maioria dos defeitos cabeludos de eletrônica tem uma causa física simples esperando um par de olhos atentos e um multímetro honesto.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Olha que bonito ver o Juninho da primeira aula, assustado com as letrinhas na planta, falando agora de testar termistor na tabela!',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Conhecimento técnico liberta do medo, Dona Marta. Quando o técnico entende a física, a eletrônica e o método, nenhuma máquina do mundo intimida ele.',
        },
      ],
    },
    {
      id: 'quiz-troubleshooting-final',
      tipo: 'quiz',
      enunciado: 'Qual é o benefício direto destacado na Aula 08 ao dominar o uso da tabela do manual do fabricante com o multímetro no troubleshooting do TVR Ultra?',
      opcoes: [
        {
          id: 'a',
          texto: 'Testar sensores termistores isoladamente, economizando tempo e dinheiro com diagnósticos exatos.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Perfeito! Você isola o componente, comprova com números se o defeito é no sensor ou na placa e acerta de primeira.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Na prática: Como usar a tabela do manual do fabricante e o multímetro para testar sensores termistores isoladamente. Aprenda a economizar tempo e dinheiro com diagnósticos exatos!',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Aumentar a capacidade da máquina além do limite de projeto sem adicionar módulos.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'neutro',
              texto: 'O multímetro não aumenta cavalos de potência; ele garante um diagnóstico exato e sem desperdício!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Dispensar o uso do separador de óleo e da válvula de 4 vias.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Todos os componentes termodinâmicos continuam indispensáveis!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-formatura',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Completamos as oito aulas do **TVR Ultra**! Já estou pronto para encarar o Desafio da Rodada e buscar minha certificação!',
    },
    {
      id: 'fala-bia-incentivo',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Vai com tudo, Ju! Lembra dos códigos de planta, dos guardiões de óleo, dos escudos P1/P4/P5/PL, do Erro E0 VIP e da rede P, Q e E.',
    },
    {
      id: 'fala-simon-brinde',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'bem-humorado',
      texto: 'Levanta esse copo de água com gás e limão que a rodada de hoje na padaria da Dona Marta é por minha conta!',
    },
    {
      id: 'fala-marta-brinde-resposta',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'animado',
      texto: 'E acompanha pão de queijo quentinho! Porque quem aprende a economizar tempo e dinheiro do cliente merece comemorar.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Aprenda a economizar tempo e dinheiro com diagnósticos exatos!',
      },
    },
    {
      id: 'fala-juninho-gratidao',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Obrigado, Simon e Bia! Hoje eu sei diferenciar **P1** de **PL** e testar qualquer termistor no multímetro usando a tabela do fabricante.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Quando o display do sistema VRF começa a piscar códigos vermelhos como P1 ou PL, o que você faz? Vamos ilustrar passo a passo o processo de "troubleshooting" avançado.',
      },
    },
    {
      id: 'fala-bia-palavra-final',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'O segredo da engenharia de campo é nunca parar de estudar o manual técnico. Parabéns pela jornada no **TVR Ultra**!',
    },
    {
      id: 'fala-simon-desafio-chamada',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Agora fecha com chave de ouro no Desafio da Rodada aqui embaixo!',
    },
    {
      id: 'ref-conteudo-8',
      tipo: 'referencia',
      texto: 'Revise todas as lâminas de troubleshooting avançado da Aula 08 na aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Quando o display do sistema VRF começa a piscar códigos vermelhos como P1 ou PL, o que você faz? Vamos ilustrar passo a passo o processo de "troubleshooting" avançado. Nesta aula, você vai ver: O caminho exato para identificar superaquecimento, problemas de pressão e falhas eletrônicas. Na prática: Como usar a tabela do manual do fabricante e o multímetro para testar sensores termistores isoladamente.',
      },
      pontos: [
        '**Troubleshooting de P1 e PL:** siga o roteiro passo a passo para diferenciar problemas de pressão, superaquecimento e falhas eletrônicas.',
        '**Teste isolado de termistores:** utilize o multímetro e a tabela do manual do fabricante para validar sensores fora da placa.',
        '**Precisão que gera valor:** diagnósticos exatos economizam tempo e dinheiro, consolidando sua autoridade técnica em VRF.',
      ],
      proxima: 'Parabéns por concluir as 8 aulas do TVR Ultra! Abra agora o Desafio da Rodada para conquistar sua Certificação Sistema VRF!',
    },
  ],
};
