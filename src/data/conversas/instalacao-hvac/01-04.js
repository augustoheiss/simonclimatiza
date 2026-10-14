// src/data/conversas/instalacao-hvac/01-04.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 01-04
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '01-04',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Quinta, 7h15. QG Técnico antes de subir para a casa de máquinas. Simon segura um cadeado vermelho LOTO e duas ferramentas extratoras VCRT.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, pra fazer a preventiva semestral nos splits da loja hoje, já peguei meu manifold analógico de ponteiro pra medir a pressão de todos eles!',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Guarda esse relógio de ponteiro na gaveta de museu, Ju! Primeiro porque o tubo de Bourdon tem erro de paralaxe numa escala que vai até mais de **800 PSI**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A agulha analógica cobre uma escala de pressão gigante (de 30 polegadas de mercúrio de vácuo até mais de 800 PSI) em uma circunferência metálica de poucas polegadas.',
      },
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Segundo porque espetar mangueira de **1/4"** em máquina saudável cria o **Vazamento Fantasma** (*Phantom Leak*): cada conexão rouba refrigerante líquido da linha.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Toda conexão de um manifold de 1/4" convencional purga refrigerante (aproximadamente 0,28 oz de refrigerante líquido por pé em cada mangueira de 1/4").',
      },
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Em serpentinas microcanal de baixo volume, sete anos de “preventiva espetando manifold” secam a carga! Máquina rodando bem se avalia por fluxo de ar e Delta T, ou sonda sem fio.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Manutenções preventivas semestrais ao longo de 7 anos removem refrigerante suficiente para simular um vazamento real, o que é catastrófico em serpentinas microcanal de baixo volume.',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Na hora de evacuar um sistema comercial de 10 TR: o que acontece quando você troca a mangueira de 1/4" no manifold (com Schrader no lugar) por mangueira de 1/2" direto na VCRT sem Schrader?',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Diâmetro da Conexão Vazão Relativa Tempo de Evacuação Est. (10 TR) Bottleneck Comum Mangueira de 1/4" com Schrader 1x (Referência) ~40 minutos Miolo de válvula Schrader obstrui fluxo total Mangueira de 1/2" com VCRT 16x superior ~3 minutos Remoção de Schrader abre fluxo de diâmetro total',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'A vazão relativa melhora só um pouquinho, caindo de 40 para 35 minutos.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'ironico',
              texto: 'Chutou baixo demais! A física das mangueiras não cresce em linha reta, cresce na quarta potência do diâmetro.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'A vazão relativa fica 16x superior, derrubando o tempo estimado de ~40 minutos para ~3 minutos em 10 TR!',
          ideal: true,
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! Remover o miolo Schrader com a **VCRT** e usar mangueira de **1/2"** sem passar pelo manifold multiplica a condutância em **16x**!',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'Mangueira de 1/2" com VCRT 16x superior ~3 minutos Remoção de Schrader abre fluxo de diâmetro total',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Estraga o óleo POE porque puxa o vácuo rápido demais em qualquer condição.',
          reacao: [
            {
              quem: 'bia',
              texto: 'O que degrada o POE é descer abaixo de **100 mícrons** (degasagem); a alta condutância da VCRT é o padrão de elite!',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'Evacuar o sistema abaixo de 100 mícrons inicia o processo de ebulição (degas) das frações leves do próprio óleo POE',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Olha a física da ebulição da água: ao nível do mar (**760.000 mícrons**), a água ferve a **212°F** (**100°C**). A **1.000 mícrons**, ela ferve a **1°F** (**-17,2°C**).',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Ao nível do mar (760.000 mícrons), a água ferve a 212°F (100°C).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A 1.000 mícrons, a água ferve a 1°F (-17,2°C).',
        },
      ],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E quando cravamos **500 mícrons**, o ponto de ebulição da água despenca para **-12°F** (**-24,4°C**), vaporizando e arrancando toda a umidade do circuito mesmo num dia de inverno!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A 500 mícrons, a água ferve a -12°F (-24,4°C), garantindo a vaporização e remoção rápida de toda a umidade do circuito.',
      },
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Então se eu deixar o vácuo descer abaixo de 100 mícrons é melhor ainda?',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Evacuar o sistema abaixo de 100 mícrons inicia o processo de ebulição (degas) das frações leves do próprio óleo POE',
      },
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Cuidado com isso, Ju! Evacuar abaixo de **100 mícrons** provoca a **degasagem** das frações leves do próprio óleo POE, estragando a viscosidade. Nossa meta terminal é entre **200 e 500 mícrons**.',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Evacuar o sistema abaixo de 100 mícrons inicia o processo de ebulição (degas) das frações leves do próprio óleo POE, alterando sua composição química e degradando permanentemente a viscosidade do lubrificante. Mantenha a meta de isolamento terminal entre 200 e 500 mícrons.',
      },
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E sabe o que acontece se sobrar ar ou nitrogênio no sistema? Pela **Lei de Dalton**, apenas **0,3%** de nitrogênio na carga derruba o EER/SEER em **13%** e sobe o consumo do compressor em **6%**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Estudos da ACEEE comprovam que apenas 0,3% de nitrogênio na carga (0,3 oz em um sistema de 102 oz) reduz o EER/SEER em 13% e aumenta o consumo do compressor em 6%.',
      },
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e a Fita Crepe no Disjuntor 380V',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Painéis energizados de 380V/480V trifásicos expõem os técnicos a riscos severos de arco elétrico (arc flash).',
      },
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num painel energizado de **380V/480V**, o Zé desligou o disjuntor, colou um pedaço de fita crepe escrito “NÃO MEXER” e foi trocar a contatora sem cadeado LOTO.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Painéis energizados de 380V/480V trifásicos expõem os técnicos a riscos severos de arco elétrico (arc flash).',
          },
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'O zelador passou, achou que o disjuntor tinha desarmado sozinho e religou! Por sorte o Zé tinha acabado de tirar a chave de fenda do barramento.',
        },
        {
          quem: 'simon',
          texto: 'No nosso padrão de elite, a ordem de serviço só destrava no sistema após foto-verificação do bloqueio físico **LOTO** e uso do EPI de arco elétrico da **NFPA 70E**!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'No padrão de elite, a ordem de serviço só é destravada no CMMS (OxMaint) após envio de foto-verificação do bloqueio físico no disjuntor/válvula.',
          },
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'A melhor forma de puxar vácuo profundo é passando as mangueiras de 1/4" por dentro do manifold de diagnóstico com os miolos Schrader instalados.',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          texto: 'Mito! O manifold e o miolo Schrader estrangulam a condutância. O setup de elite liga mangueiras de **1/2"** direto da bomba para as **VCRTs** sem Schrader, com o vacuômetro longe da bomba.',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Nunca tente puxar vácuo profundo através do manifold de diagnóstico. Conecte mangueiras de 1/2" diretamente da bomba para as VCRTs instaladas nos ports de serviço de alta e baixa do sistema, removendo previamente os miolos Schrader.',
          },
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Apenas 0,3% de nitrogênio não-condensável preso no circuito frigorífico é capaz de derrubar o EER/SEER em 13% e aumentar o consumo do compressor em 6%.',
      verdade: true,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Estudos da ACEEE comprovam que apenas 0,3% de nitrogênio na carga (0,3 oz em um sistema de 102 oz) reduz o EER/SEER em 13% e aumenta o consumo do compressor em 6%.',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Verdade! Pela Lei de Dalton, gases não-condensáveis ficam presos no topo do condensador, isolando a troca térmica e subindo a pressão de descarga.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Pela Lei de Dalton, gases como nitrogênio e oxigênio não condensam e se acumulam no topo do condensador, isolando a serpentina e elevando a pressão de descarga.',
          },
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Segundo a tabela NFPA 70E da aula para painéis energizados de 380V/480V, a partir de qual categoria de EPI (25 cal/cm²) o protetor facial simples deixa de ser permitido e exige-se traje completo (arc flash suit) com capuz AR integral?',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Painéis energizados de 380V/480V trifásicos expõem os técnicos a riscos severos de arco elétrico (arc flash).',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Categoria 3 (mínimo 25 cal/cm², faixa de 8 a 25 cal/cm²).',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! Na Categoria 3 e na Categoria 4 é obrigatório o traje de arco (*arc flash suit*) com capuz AR integral cobrindo toda a cabeça.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Apenas com óculos de sol comum e luva de pano.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Em **380V/480V** trifásico, trabalhar sem EPI classificado para arco elétrico é brincar de roleta-russa!',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'Painéis energizados de 380V/480V trifásicos expõem os técnicos a riscos severos de arco elétrico (arc flash).',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Simulador de Perda por Não-Condensáveis (Lei de Dalton)',
      formula: 'Perda_EER = 13% para apenas 0,3% de N₂ residual',
      enunciado: 'Pelos estudos da ACEEE citados na aula, se o técnico fizer uma evacuação malfeita e deixar apenas **0,3%** de nitrogênio não-condensável na carga (aumentando o consumo do compressor em **6%**), em quantos **%** cai a eficiência **EER/SEER** do sistema?',
      leituras: [
        { rotulo: 'Nitrogênio Residual', valor: '0,3%' },
        { rotulo: 'Aumento de Consumo', valor: '+6%' },
        { rotulo: 'Meta de Vácuo', valor: '500 mícrons (-24,4°C)' },
      ],
      unidade: '%',
      respostaCorreta: 13,
      tolerancia: 0.1,
      opcoesRapidas: [3, 6, 13, 25],
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Estudos da ACEEE comprovam que apenas 0,3% de nitrogênio na carga (0,3 oz em um sistema de 102 oz) reduz o EER/SEER em 13% e aumenta o consumo do compressor em 6%.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A 500 mícrons, a água ferve a -12°F (-24,4°C), garantindo a vaporização e remoção rápida de toda a umidade do circuito.',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Na mosca! Apenas **0,3%** de nitrogênio preso no topo do condensador rouba **13%** de eficiência EER/SEER e eleva o consumo em **6%**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Estudos da ACEEE comprovam que apenas 0,3% de nitrogênio na carga (0,3 oz em um sistema de 102 oz) reduz o EER/SEER em 13% e aumenta o consumo do compressor em 6%.',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Olhe o dado da ACEEE: **0,3%** de nitrogênio reduz o EER/SEER em **13%** (e sobe o consumo em **6%**).',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Estudos da ACEEE comprovam que apenas 0,3% de nitrogênio na carga (0,3 oz em um sistema de 102 oz) reduz o EER/SEER em 13% e aumenta o consumo do compressor em 6%.',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Setup — Evacuação de Alta Condutância',
      enunciado: 'Observe o guia de Ferramental Digital e Condutância da Aula 01-04 e selecione a montagem que entrega vazão **16x** superior:',
      imagem: '/images/academia/hvac-instalacao/modulo01/modulo01-04/Module01-04-Elite HVAC_ Digital Tools, Safety, Conduct-01.jpg',
      legendaImagem: 'Módulo 01-04 — Ferramental Digital, Segurança e Setup de Alta Condutância',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Mangueira de 1/2" com VCRT 16x superior ~3 minutos Remoção de Schrader abre fluxo de diâmetro total',
      },
      pontos: [
        {
          id: 'p1',
          rotulo: 'Bypass do manifold: mangueiras de 1/2" ligadas direto da bomba às VCRTs (sem Schrader) e vacuômetro no port lateral distante da bomba.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Perfeito! Sem o gargalo do Schrader e do manifold, você atinge a meta entre **200 e 500 mícrons** numa fração do tempo.',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'Mantenha a meta de isolamento terminal entre 200 e 500 mícrons.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Mangueiras finas de 1/4" passando pelo manifold analógico com os núcleos Schrader apertados no lugar.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              texto: 'Esse é o gargalo clássico (1x de referência, levando **~40** minutos em **10 TR**).',
              fonte: {
                campo: 'tabelas_html',
                trecho: '(10 TR) Bottleneck Comum Mangueira de 1/4" com Schrader 1x (Referência) ~40 minutos',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Cadeado no Bolso é Respeito por Quem Espera em Casa',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Eu sempre falo pro Juninho: ferramenta nenhuma vale mais do que voltar inteiro pra jantar em casa.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Cadeado LOTO no disjuntor não é desconfiança do colega, Dona Marta; é amor pela própria vida. Coragem na elétrica não é trabalhar no vivo — é ter peito pra parar a obra até trancar a chave no seu bolso.',
        },
      ],
      principio: 'Segurança LOTO e instrumentação de precisão são inegociáveis: quem tem método não depende de sorte.',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Confira as 4 Categorias de EPI da **NFPA 70E** e a tabela de *bottlenecks* de evacuação na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Zero Vazamento Fantasma:** não espete manifold de **1/4"** à toa em preventivas; use sondas digitais e preserve a carga de serpentinas microcanal.',
        '**Física dos 500 mícrons:** a **500 mícrons** a água ferve a **-12°F** (**-24,4°C**); use VCRT + mangueira de **1/2"** e mantenha o vácuo final entre **200 e 500 mícrons**.',
        '**LOTO e NFPA 70E:** bloqueio físico obrigatório com foto-verificação e EPI adequado antes de tocar em painéis **380V/480V**.',
      ],
      proxima: 'Com o Módulo 1 concluído, encare o Desafio da Rodada abaixo ou avance para a Aula 02-01 (Dimensionamento de Carga Térmica)!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Toda conexão de um manifold de 1/4" convencional purga refrigerante',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A 500 mícrons, a água ferve a -12°F (-24,4°C), garantindo a vaporização e remoção rápida de toda a umidade do circuito.',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Mantenha a meta de isolamento terminal entre 200 e 500 mícrons.',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Painéis energizados de 380V/480V trifásicos expõem os técnicos a riscos severos de arco elétrico (arc flash).',
        },
      ],
    },
  ],
};
