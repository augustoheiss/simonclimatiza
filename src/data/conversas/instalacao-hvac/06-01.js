// src/data/conversas/instalacao-hvac/06-01.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 06-01
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '06-01',
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
      texto: 'Quinta, 7h30. Bancada de comissionamento VRF. Simon e Bia preparam uma bomba de vácuo acoplada com mangueira dedicada de largo diâmetro, extratores de núcleo VCRT e vacuômetro digital.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, sempre achei que a bomba de vácuo “chupava” a água líquida de dentro do cano de cobre! Como ela realmente tira a umidade lá do fundo da serpentina?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Bomba de vácuo não suga água líquida, Ju! Ao nível do mar, a atmosfera exerce **14,696 PSIA (760.000 mícrons)**. Para ferver a água sem aquecer o tubo a **100°C**, reduzimos a pressão absoluta interna!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Ao nível do mar, a atmosfera exerce uma pressão absoluta de 14,696 PSIA (760.000 mícrons).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Para induzir a fervura da água dentro de um sistema real sem aquecer a tubulação predial a 100°C, reduz-se a pressão absoluta interna do sistema.',
        },
      ],
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Olha a física: a **500 mícrons** removemos **99,93%** da atmosfera interna (**759.968 mícrons**) e o ponto de ebulição da água desaba para **-23,9°C**! Já a **10.000 mícrons** num dia frio de **10°C**, a água nem ferve.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A atmosfera ao nível do mar equivale a 759.968 mícrons, de modo que atingir 500 mícrons representa remover 99,93% da atmosfera interna.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Se a temperatura ambiente externa for de 10°C em um dia frio, realizar vácuo até 10.000 mícrons é ineficiente porque a água interna não ferve a essa pressão. A 500 mícrons, o ponto de ebulição da água desaba para -23,9°C',
        },
      ],
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'E com **R-410A** e R-32 o perigo é químico: o óleo mineral antigo saturava com **25 ppm**, mas o óleo sintético **POE** retém até **2.500 ppm** de água (**100 vezes** mais), exigindo limite estrito abaixo de **100 ppm**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Os refrigerantes modernos HFC/A2L (como R-410A e R-32) utilizam lubrificantes sintéticos POE (Polyolester) ou PVE (Polyvinyl Ether). O óleo mineral antigo saturava com apenas 25 ppm de água. O óleo POE, por sua polaridade eletrônica, é altamente higroscópico, atraindo umidade e retendo até 2.500 ppm de água (100 vezes mais). As fabricantes de compressores exigem um limite de umidade estrito abaixo de 100 ppm.',
      },
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Se o óleo POE trabalhar úmido no calor do compressor Scroll, ocorre **hidrólise**: o éster vira álcool e ácido acético corrosivo, atacando o verniz das bobinas até queimar o compressor!',
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Por que um técnico que compra uma bomba potente de 10 CFM, mas usa mangueira comum de 1/4" com válvula Schrader no lugar, leva horas para fazer vácuo?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Uma mangueira comum de 1/4" restringe e estrangula o fluxo de sucção a cerca de 0,2 CFM, enquanto uma mangueira de 3/8" oferece fluxo 5 vezes maior, e uma mangueira dedicada de 1/2" oferece fluxo 16 vezes maior que a de 1/4". Ligar uma bomba potente de 10 CFM com mangueira de 1/4" faz o técnico usar apenas 10% da sua capacidade.',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Porque a mangueira de 1/4" com Schrader estrangula o fluxo a 0,20 CFM (usando só 10% da bomba), enquanto sacar o núcleo com VCRT e usar mangueira de 1/2" libera 3,50 CFM.',
          ideal: true,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Uma mangueira comum de 1/4" restringe e estrangula o fluxo de sucção a cerca de 0,2 CFM, enquanto uma mangueira de 3/8" oferece fluxo 5 vezes maior, e uma mangueira dedicada de 1/2" oferece fluxo 16 vezes maior que a de 1/4". Ligar uma bomba potente de 10 CFM com mangueira de 1/4" faz o técnico usar apenas 10% da sua capacidade.',
            },
            {
              campo: 'tabelas_html',
              trecho: 'Mangueira de 1/4" padrão Válvula Schrader intacta + depressor de pino 0,20 CFM',
            },
            {
              campo: 'tabelas_html',
              trecho: 'Mangueira de 1/2" a vácuo Sem núcleo Schrader (Uso de VCRT) 3,50 CFM (Fluxo máximo desimpedido)',
            },
          ],
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Pura Lei de Hagen-Poiseuille ($d^4$)! O pino da Schrader reduz a passagem a **5 mm**. Com extrator **VCRT** e mangueira de **1/2"**, a vazão salta de **0,20 CFM** para **3,50 CFM**!',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'O pino interno, a mola e o vedador reduzem a abertura livre a meros 5 mm',
                },
                {
                  campo: 'tabelas_html',
                  trecho: 'Mangueira de 1/4" padrão Válvula Schrader intacta + depressor de pino 0,20 CFM',
                },
                {
                  campo: 'tabelas_html',
                  trecho: 'Mangueira de 1/2" a vácuo Sem núcleo Schrader (Uso de VCRT) 3,50 CFM (Fluxo máximo desimpedido)',
                },
              ],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Porque bombas grandes precisam de óleo mineral grosso.',
          reacao: [
            {
              quem: 'bia',
              texto: 'O gargalo não é o óleo da bomba, e sim a restrição geométrica da mangueira fina e do pino da válvula Schrader!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Porque o vacuômetro digital bloqueia a passagem do gás.',
          reacao: [
            {
              quem: 'simon',
              texto: 'O vacuômetro apenas lê a pressão absoluta; quem estrangula a vazão é a Schrader intacta e a mangueira estreita.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E onde eu devo instalar o vacuômetro digital, Bia? Direto na entrada da bomba de vácuo ou lá na outra ponta do circuito?',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Nunca instale direto na carcaça da bomba! Conecte o vacuômetro na **VCRT oposta** ao lado de sucção da bomba para medir a pressão estática real de todo o trocador de calor.',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E cuidado com o **Flash Freezing**: se houver água líquida e você puxar vácuo rápido demais (especialmente abaixo de **4°C**), a ebulição violenta rouba calor latente e congela a água dentro do cano!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Em instalações externas sob temperaturas ambientes abaixo de 4°C, o teste de vácuo de etapa única pode ocultar lentes de gelo espessas devido ao fenômeno do flash freezing acelerado. Se a pressão despencar rápido e estabilizar abaixo de 200 mícrons de forma suspeita, quebre o vácuo com nitrogênio seco a 5 PSI e aguarde 15 minutos.',
      },
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'bia',
      texto: 'A **-40°C**, a pressão de vapor do gelo cai a **96 mícrons**! O vacuômetro marca **150 mícrons** enganando o técnico, mas há gelo lá dentro. Por isso fazemos a **Tríplice Evacuação** quebrando com nitrogênio seco!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A -40°C, a pressão de vapor de sublimação do gelo cai a 96 mícrons. O vacuômetro registrará 150 mícrons e o técnico julgará que o sistema está desidratado, mas na verdade abriga blocos de gelo dormentes.',
      },
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Vácuo Relâmpago de Inverno que Escondia Gelo',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Numa manhã gelada abaixo de **4°C** na serra, um instalador abriu uma bomba grande numa rede úmida. Em poucos minutos o vacuômetro despencou abaixo de **200 mícrons**!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Em instalações externas sob temperaturas ambientes abaixo de 4°C, o teste de vácuo de etapa única pode ocultar lentes de gelo espessas devido ao fenômeno do flash freezing acelerado. Se a pressão despencar rápido e estabilizar abaixo de 200 mícrons de forma suspeita, quebre o vácuo com nitrogênio seco a 5 PSI e aguarde 15 minutos.',
          },
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Aconteceu *flash freezing*! Mandamos quebrar o vácuo com nitrogênio seco a **5 PSI** e aguardar **15 minutos** para transferir calor sensível ao gelo.',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Em instalações externas sob temperaturas ambientes abaixo de 4°C, o teste de vácuo de etapa única pode ocultar lentes de gelo espessas devido ao fenômeno do flash freezing acelerado. Se a pressão despencar rápido e estabilizar abaixo de 200 mícrons de forma suspeita, quebre o vácuo com nitrogênio seco a 5 PSI e aguarde 15 minutos.',
          },
        },
        {
          quem: 'simon',
          texto: 'Quando ligamos a bomba de novo, o gelo derretido ferveu e a leitura subiu para **1.500 mícrons**! Só depois da Tríplice Evacuação o sistema secou de verdade.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Evacuar inicialmente até 1.500 mícrons e isolar a bomba.',
          },
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Manômetros analógicos de Bourdon permitem diferenciar com precisão 5.000 mícrons de 500 mícrons, dispensando o vacuômetro digital.',
      verdade: false,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Diferenciar 5.000 de 500 mícrons no ponteiro é impossível, induzindo o técnico a aceitar sistemas repletos de água líquida.',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Mito! No manômetro analógico a distância do ponteiro entre **1.000 e 500 mícrons** é menor que **0,4 mm**. Diferenciar **5.000 de 500 mícrons** é impossível sem vacuômetro digital!',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: '(a distância do ponteiro entre 1.000 e 500 mícrons é menor que 0,4 mm).',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Diferenciar 5.000 de 500 mícrons no ponteiro é impossível, induzindo o técnico a aceitar sistemas repletos de água líquida.',
            },
          ],
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'No Vacuum Decay Test (bomba isolada), se a leitura subir rápido e estacionar em plateau entre 1.000 e 2.000 mícrons, o diagnóstico é presença de umidade residual evaporando.',
      verdade: true,
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Sobe rápido e estabiliza em plateau entre 1.000 e 2.000 mícrons Presença de Umidade Residual (Fail)',
      },
      explicacao: [
        {
          quem: 'simon',
          texto: 'Verdade! Umidade residual forma um *plateau* entre **1.000 e 2.000 mícrons**; já vazamento físico sobe sem parar até a pressão atmosférica.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Sobe rápido e estabiliza em plateau entre 1.000 e 2.000 mícrons Presença de Umidade Residual (Fail)',
          },
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'No Teste de Declínio de Vácuo (Vacuum Decay Test) com a bomba isolada pelas válvulas esfera das VCRTs, qual condição aprova o sistema como Seco e Hermético (Pass)?',
      opcoes: [
        {
          id: 'a',
          texto: 'A leitura estabiliza abaixo de 500 mícrons por 15 minutos em estado de isolamento.',
          correta: true,
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Estabiliza abaixo de 500 mícrons por 15 minutos Sistema Seco e Hermético (Pass)',
          },
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Aprovado com louvor! Sustentar abaixo de **500 mícrons por 15 minutos** isolado comprova desidratação total das linhas e do óleo.',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'Estabiliza abaixo de 500 mícrons por 15 minutos Sistema Seco e Hermético (Pass)',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'A leitura marca 500 mícrons apenas enquanto a bomba está ligada puxando.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Estabiliza abaixo de 500 mícrons por 15 minutos Sistema Seco e Hermético (Pass)',
          },
          feedback: [
            {
              quem: 'bia',
              texto: 'Ler mícrons com a bomba ligada mede o arraste dinâmico, não o equilíbrio estático! Só o *Decay Test* isolado por **15 minutos** abaixo de **500 mícrons** aprova.',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'Estabiliza abaixo de 500 mícrons por 15 minutos Sistema Seco e Hermético (Pass)',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Meta Oficial de Desidratação — Regra dos 500 Mícrons',
      formula: 'Atmosfera = 759.968 mícrons | Meta Pass (15 min isolado) <= 500 mícrons (-23,9°C)',
      enunciado: 'Para remover **99,93%** da atmosfera interna (**759.968 mícrons**) e baixar a fervura da água para **-23,9°C**, abaixo de quantos **mícrons** o sistema deve estabilizar por **15 minutos** no *Vacuum Decay Test*?',
      leituras: [
        { rotulo: 'Pressão ao Nível do Mar', valor: '759.968 mícrons (14,696 PSIA)' },
        { rotulo: 'Plateau de Umidade (Fail)', valor: '1.000 a 2.000 mícrons' },
        { rotulo: 'Ebulição da Água na Meta', valor: '-23,9°C' },
      ],
      unidade: 'mícrons',
      respostaCorreta: 500,
      tolerancia: 0,
      opcoesRapidas: [200, 500, 1000, 2000],
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Ao nível do mar, a atmosfera exerce uma pressão absoluta de 14,696 PSIA (760.000 mícrons).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A atmosfera ao nível do mar equivale a 759.968 mícrons, de modo que atingir 500 mícrons representa remover 99,93% da atmosfera interna.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Se a temperatura ambiente externa for de 10°C em um dia frio, realizar vácuo até 10.000 mícrons é ineficiente porque a água interna não ferve a essa pressão. A 500 mícrons, o ponto de ebulição da água desaba para -23,9°C',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Estabiliza abaixo de 500 mícrons por 15 minutos Sistema Seco e Hermético (Pass)',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Sobe rápido e estabiliza em plateau entre 1.000 e 2.000 mícrons Presença de Umidade Residual (Fail)',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Se a pressão despencar rápido e estabilizar abaixo de 200 mícrons de forma suspeita, quebre o vácuo com nitrogênio seco a 5 PSI e aguarde 15 minutos.',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Exato! Estabilizar abaixo de **500 mícrons por 15 minutos** garante fervura a **-23,9°C** e umidade no óleo POE abaixo de **100 ppm**!',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Se a temperatura ambiente externa for de 10°C em um dia frio, realizar vácuo até 10.000 mícrons é ineficiente porque a água interna não ferve a essa pressão. A 500 mícrons, o ponto de ebulição da água desaba para -23,9°C',
            },
            {
              campo: 'conteudo_html',
              trecho: 'As fabricantes de compressores exigem um limite de umidade estrito abaixo de 100 ppm.',
            },
            {
              campo: 'tabelas_html',
              trecho: 'Estabiliza abaixo de 500 mícrons por 15 minutos Sistema Seco e Hermético (Pass)',
            },
          ],
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Lembre-se da Regra dos **500 mícrons**: o sistema deve sustentar abaixo de **500 mícrons por 15 minutos**.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Estabiliza abaixo de 500 mícrons por 15 minutos Sistema Seco e Hermético (Pass)',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Evacuação — VCRT, Mangueira 1/2" e Decay Test',
      enunciado: 'Observe o slide de Mestria em Vácuo da Aula 06-01 e aponte a montagem de alta condutância e medição confiável:',
      imagem: '/images/academia/hvac-instalacao/modulo06/modulo06-01/Modulo-06-02-Elite HVAC Vacuum Mastery Masterclass-01.jpg',
      legendaImagem: 'Módulo 06-01 — Evacuação de Alta Condutância (VCRT + 1/2") e Curvas do Decay Test',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Núcleos Schrader removidos via VCRT, mangueira a vácuo de 1/2" (3,50 CFM), vacuômetro no ponto oposto e Decay Test < 500 mícrons por 15 minutos.',
          correta: true,
          fonte: [
            {
              campo: 'tabelas_html',
              trecho: 'Estabiliza abaixo de 500 mícrons por 15 minutos Sistema Seco e Hermético (Pass)',
            },
            {
              campo: 'tabelas_html',
              trecho: 'Mangueira de 1/2" a vácuo Sem núcleo Schrader (Uso de VCRT) 3,50 CFM (Fluxo máximo desimpedido)',
            },
          ],
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Setup de mestre! Fluxo livre de **3,50 CFM** e confirmação estática abaixo de **500 mícrons por 15 minutos**.',
              fonte: [
                {
                  campo: 'tabelas_html',
                  trecho: 'Estabiliza abaixo de 500 mícrons por 15 minutos Sistema Seco e Hermético (Pass)',
                },
                {
                  campo: 'tabelas_html',
                  trecho: 'Mangueira de 1/2" a vácuo Sem núcleo Schrader (Uso de VCRT) 3,50 CFM (Fluxo máximo desimpedido)',
                },
              ],
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Mangueira de 1/4" sobre válvula Schrader intacta (0,20 CFM) e controle de vácuo pelo ponteiro analógico.',
          correta: false,
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Mangueira de 1/4" padrão Válvula Schrader intacta + depressor de pino 0,20 CFM',
          },
          feedback: [
            {
              quem: 'bia',
              texto: 'Estrangula a bomba a **0,20 CFM** (apenas **10%** de uma bomba de **10 CFM**) e deixa umidade no óleo POE!',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'Ligar uma bomba potente de 10 CFM com mangueira de 1/4" faz o técnico usar apenas 10% da sua capacidade.',
                },
                {
                  campo: 'tabelas_html',
                  trecho: 'Mangueira de 1/4" padrão Válvula Schrader intacta + depressor de pino 0,20 CFM',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Vácuo Mede-se em Mícrons, Nunca em Horas de Relógio',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Quem diz “deixei duas horas na bomba” com mangueira fina de **1/4"** e Schrader no lugar está apenas fazendo barulho na obra.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Uma mangueira comum de 1/4" restringe e estrangula o fluxo de sucção a cerca de 0,2 CFM',
          },
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Sacar o núcleo com **VCRT**, abrir caminho de **1/2"** (**3,50 CFM**) e provar menos de **500 mícrons por 15 minutos** no vacuômetro digital é o que salva o óleo POE da hidrólise.',
          fonte: [
            {
              campo: 'tabelas_html',
              trecho: 'Estabiliza abaixo de 500 mícrons por 15 minutos Sistema Seco e Hermético (Pass)',
            },
            {
              campo: 'tabelas_html',
              trecho: 'Mangueira de 1/2" a vácuo Sem núcleo Schrader (Uso de VCRT) 3,50 CFM (Fluxo máximo desimpedido)',
            },
          ],
        },
      ],
      principio: 'Relógio de pulso não mede desidratação: exija VCRT, mangueira de 1/2" e menos de 500 mícrons por 15 minutos.',
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Estabiliza abaixo de 500 mícrons por 15 minutos Sistema Seco e Hermético (Pass)',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Mangueira de 1/2" a vácuo Sem núcleo Schrader (Uso de VCRT) 3,50 CFM (Fluxo máximo desimpedido)',
        },
      ],
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte a tabela de **Condutância de Mangueiras** (**0,20 CFM** a **3,50 CFM**) e as curvas do **Decay Test** na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Mangueira de 1/4" padrão Válvula Schrader intacta + depressor de pino 0,20 CFM',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Mangueira de 1/2" a vácuo Sem núcleo Schrader (Uso de VCRT) 3,50 CFM (Fluxo máximo desimpedido)',
        },
      ],
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Termodinâmica dos 500 Mícrons:** remove **99,93%** da atmosfera (**759.968 mícrons**), faz a água ferver a **-23,9°C** e mantém o óleo POE abaixo de **100 ppm**.',
        '**Hagen-Poiseuille e VCRT:** sacar a Schrader (**5 mm**) com VCRT e usar mangueira de **1/2"** eleva o fluxo de **0,20 CFM** para **3,50 CFM**.',
        '**Tríplice Evacuação e Decay Test:** previne *flash freezing* (abaixo de **4°C**) e aprova o sistema quando estabiliza abaixo de **500 mícrons por 15 minutos**.',
      ],
      proxima: 'No Módulo 7 (Aula 07-01) vamos dominar a Carga de Refrigerante por Comprimento Equivalente em Balança e o Startup Elétrico NEMA MG-1.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A atmosfera ao nível do mar equivale a 759.968 mícrons, de modo que atingir 500 mícrons representa remover 99,93% da atmosfera interna.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Se a temperatura ambiente externa for de 10°C em um dia frio, realizar vácuo até 10.000 mícrons é ineficiente porque a água interna não ferve a essa pressão. A 500 mícrons, o ponto de ebulição da água desaba para -23,9°C',
        },
        {
          campo: 'conteudo_html',
          trecho: 'As fabricantes de compressores exigem um limite de umidade estrito abaixo de 100 ppm.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O pino interno, a mola e o vedador reduzem a abertura livre a meros 5 mm',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Estabiliza abaixo de 500 mícrons por 15 minutos Sistema Seco e Hermético (Pass)',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Mangueira de 1/4" padrão Válvula Schrader intacta + depressor de pino 0,20 CFM',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Mangueira de 1/2" a vácuo Sem núcleo Schrader (Uso de VCRT) 3,50 CFM (Fluxo máximo desimpedido)',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Em instalações externas sob temperaturas ambientes abaixo de 4°C, o teste de vácuo de etapa única pode ocultar lentes de gelo espessas devido ao fenômeno do flash freezing acelerado.',
        },
      ],
    },
  ],
};
