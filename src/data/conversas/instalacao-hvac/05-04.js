// src/data/conversas/instalacao-hvac/05-04.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 05-04
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '05-04',
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
      texto: 'Quarta, 8h00. Cobertura técnica de um edifício comercial. Simon e Bia conferem os cilindros de nitrogênio seco com regulador de duplo estágio conectados à rede de cobre VRF.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, o instalador do bloco vizinho disse que não gasta nitrogênio: ele puxa **500 mícrons** na bomba de vácuo e, se segurar, garante que não vaza! Por que isso é um erro grave?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Quando o sistema é evacuado a um vácuo profundo de 500 mícrons, a pressão interna da tubulação aproxima-se de zero absoluto. Enquanto isso, a pressão atmosférica externa sobre as paredes de cobre permanece estática a aproximadamente 14,7 PSI (1 bar).',
      },
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Porque a **500 mícrons**, Ju, a atmosfera externa empurra o tubo de fora para dentro com apenas **14,7 PSI (1 bar)**! Essa pressão comprime a junta ou puxa pasta e óleo para tapar o poro.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Quando o sistema é evacuado a um vácuo profundo de 500 mícrons, a pressão interna da tubulação aproxima-se de zero absoluto. Enquanto isso, a pressão atmosférica externa sobre as paredes de cobre permanece estática a aproximadamente 14,7 PSI (1 bar).',
      },
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Já em operação real com **R-410A** ou R-32, o VRF trabalha com pressões de descarga superiores a **550 PSIG** direcionadas de dentro para fora! O poro que aguentou **14,7 PSI** abre na hora.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Quando o sistema é evacuado a um vácuo profundo de 500 mícrons, a pressão interna da tubulação aproxima-se de zero absoluto. Enquanto isso, a pressão atmosférica externa sobre as paredes de cobre permanece estática a aproximadamente 14,7 PSI (1 bar).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Um sistema VRF operando com fluido R-410A ou R-32 trabalha com pressões de descarga superiores a 550 PSIG direcionadas de dentro para fora.',
        },
      ],
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Pior ainda: fazer vácuo numa linha que tem furo puxa ar úmido para dentro do óleo sintético PVE ou POE, gerando hidrólise ácida. Estanqueidade testa-se com **nitrogênio seco** em alta pressão!',
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      texto: 'E cada fabricante exige seu patamar por **24 horas**: no **Daikin VRV** são **550 PSIG (3.8 MPa)** (reduzindo para **450 PSIG** com unidades FXTQ) e no **Mitsubishi City Multi** são **600 PSIG (4.15 MPa)**!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Daikin VRV: 550 PSIG (3.8 MPa) por 24 horas (reduzir para 450 PSIG caso contenha unidades internas FXTQ',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Mitsubishi City Multi: 600 PSIG (4.15 MPa) por 24 horas',
        },
      ],
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Ao iniciar o protocolo de pressurização escalonada em três estágios de uma rede VRF com nitrogênio seco, por que devemos subir em degraus antes do patamar final?',
      opcoes: [
        {
          id: 'a',
          texto: 'Abrir o cilindro de uma vez só direto na pressão máxima para ganhar tempo.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Jogar alta pressão de uma vez em um flange esquecido frouxo ou solda sem prata pode chicotear a tubulação e causar um acidente sério!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Subir em 3 estágios: 150 PSIG por 5 minutos (fugas graves), 300-325 PSIG por 15 minutos e finalmente 550-600 PSIG por 24 horas com EEVs abertas.',
          ideal: true,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Estágio 1 (150 PSIG por 5 minutos): Projetado para localizar vazamentos massivos e óbvios',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Estágio 2 (300-325 PSIG por 15 minutos): Investigação intermediária',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Estágio 3 (550-600 PSIG por 24 horas): Submete a rede ao limite máximo de estresse de fadiga.',
            },
          ],
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! O Estágio 1 (**150 PSIG por 5 minutos**) pega porca solta sem gastar gás; o Estágio 2 (**300-325 PSIG por 15 minutos**) valida o meio-termo e o Estágio 3 crava **550-600 PSIG por 24 horas**!',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'Estágio 1 (150 PSIG por 5 minutos): Projetado para localizar vazamentos massivos e óbvios',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Estágio 2 (300-325 PSIG por 15 minutos): Investigação intermediária',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Estágio 3 (550-600 PSIG por 24 horas): Submete a rede ao limite máximo de estresse de fadiga.',
                },
              ],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Completar a pressão com ar comprimido ou oxigênio quando o nitrogênio acabar.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Jamais! Oxigênio ou ar comprimido em contato com óleo mineral ou PVE/POE sob alta pressão explode como uma bomba!',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'O oxigênio sob alta pressão misturado a vestígios de óleo lubrificante sintético mineral ou PVE/POE do compressor forma uma mistura altamente inflamável e explosiva capaz de causar explosões severas.',
              },
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
      texto: 'Mas Simon, se eu deixar a linha em **550 PSIG** no sol da tarde e voltar na manhã fria seguinte, a pressão no manômetro vai cair mesmo sem vazamento?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Daikin VRV: 550 PSIG (3.8 MPa) por 24 horas (reduzir para 450 PSIG caso contenha unidades internas FXTQ',
      },
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Pela Lei de Gay-Lussac ($P_1/T_1 = P_2/T_2$), sim! Em campo, a pressão do nitrogênio varia cerca de **0,80 PSI para cada 1°F** de alteração na temperatura ambiente (ou **~0,1 bar por 1°C**).',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'a pressão do nitrogênio varia aproximadamente 0,80 PSI para cada 1°F de alteração na temperatura ambiente (ou ~0,1 bar por 1°C)',
      },
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      texto: 'E se após descontar a temperatura ainda houver queda real, usamos o **Detector Ultrassônico (40 kHz)** imune ao vento, o **Gás Formador (95% nitrogênio e 5% hidrogênio)** ou líquido viscoelástico profissional!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Gás Formador (Forming Gas 95/5): Utiliza uma mistura segura de 95% de nitrogênio e 5% de hidrogênio (ISO 10156).',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Detector Ultrassônico (40 kHz) Vazamentos de alta pressão em soldas e curvas',
        },
      ],
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Nunca passe detergente de louça nas conexões! O sabão doméstico tem amônia e cloretos que provocam corrosão sob tensão no latão dos flanges e no cobre.',
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Vazamento Fantasma da Manhã Gelada',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num hotel, a equipe pressurizou o VRF às três da tarde com sol escaldante no telhado. Na manhã seguinte, com frio, o manômetro marcava menos pressão.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Como não aplicaram a compensação de **0,80 PSI para cada 1°F** (ou **~0,1 bar por 1°C**), juraram que a rede estava furada e cortaram três caixas de distribuição!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'a pressão do nitrogênio varia aproximadamente 0,80 PSI para cada 1°F de alteração na temperatura ambiente (ou ~0,1 bar por 1°C)',
          },
        },
        {
          quem: 'simon',
          texto: 'Perderam dois dias refazendo brasagem que estava perfeita! Bastava anotar o termômetro na partida e na leitura final.',
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Jamais se deve usar oxigênio ou ar comprimido para pressurizar tubulações frigorígenas, pois o oxigênio sob alta pressão reage com o óleo lubrificante causando explosões severas.',
      verdade: true,
      fonte: {
        campo: 'infobox_campo',
        trecho: 'O oxigênio sob alta pressão misturado a vestígios de óleo lubrificante sintético mineral ou PVE/POE do compressor forma uma mistura altamente inflamável e explosiva capaz de causar explosões severas.',
      },
      explicacao: [
        {
          quem: 'simon',
          texto: 'Verdade absoluta! Oxigênio pressurizado em contato com óleo mineral ou sintético PVE/POE detona instantaneamente. Use exclusivamente **nitrogênio seco**!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'O oxigênio sob alta pressão misturado a vestígios de óleo lubrificante sintético mineral ou PVE/POE do compressor forma uma mistura altamente inflamável e explosiva capaz de causar explosões severas.',
          },
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'O Gás Formador (Forming Gas 95/5) utiliza 95% de nitrogênio e 5% de hidrogênio (ISO 10156), cuja molécula minúscula escapa por microporos para leitura em sniffer eletrônico.',
      verdade: true,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Gás Formador (Forming Gas 95/5): Utiliza uma mistura segura de 95% de nitrogênio e 5% de hidrogênio (ISO 10156).',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Verdade! A mistura de **95% de nitrogênio e 5% de hidrogênio** é inerte, não inflamável e acha microvazamentos invisíveis ao sabão.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Gás Formador (Forming Gas 95/5): Utiliza uma mistura segura de 95% de nitrogênio e 5% de hidrogênio (ISO 10156).',
          },
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Antes de pressurizar uma rede VRF com nitrogênio seco para o ensaio de estanqueidade, como devem estar as Válvulas de Expansão Eletrônicas (EEVs) das evaporadoras e as válvulas de serviço da condensadora pré-carregada?',
      opcoes: [
        {
          id: 'a',
          texto: 'EEVs abertas (para o nitrogênio testar todas as serpentinas internas) e válvulas de serviço da condensadora totalmente fechadas (para proteger o compressor scroll).',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Perfeito! EEV fechada esconde vazamento na evaporadora, e válvula da ODU aberta sob alta pressão externa deforma as vedações internas do compressor scroll!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'EEVs fechadas e válvulas da condensadora abertas misturando nitrogênio ao refrigerante.',
          feedback: [
            {
              quem: 'bia',
              texto: 'Errado! Misturar nitrogênio ao refrigerante da condensadora contamina toda a carga de fábrica e danifica o compressor.',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Patamar Oficial de Estanqueidade VRF — Mitsubishi City Multi (PSIG)',
      formula: 'Daikin VRV = 550 PSIG (450 PSIG c/ FXTQ) | Mitsubishi City Multi = 600 PSIG (24h)',
      enunciado: 'Enquanto o Daikin VRV exige **550 PSIG** por **24 horas** (ou **450 PSIG** com unidades FXTQ), qual é a pressão estática de teste exigida pela **Mitsubishi City Multi** durante **24 horas** em **PSIG**?',
      leituras: [
        { rotulo: 'Daikin VRV Padrão (24h)', valor: '550 PSIG (3.8 MPa)' },
        { rotulo: 'Daikin VRV com FXTQ (24h)', valor: '450 PSIG' },
        { rotulo: 'Mitsubishi City Multi (24h)', valor: '600 PSIG (4.15 MPa)' },
      ],
      unidade: 'PSIG',
      respostaCorreta: 600,
      tolerancia: 0,
      opcoesRapidas: [150, 450, 550, 600],
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Daikin VRV: 550 PSIG (3.8 MPa) por 24 horas (reduzir para 450 PSIG caso contenha unidades internas FXTQ',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Mitsubishi City Multi: 600 PSIG (4.15 MPa) por 24 horas',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Estágio 1 (150 PSIG por 5 minutos): Projetado para localizar vazamentos massivos e óbvios',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Na mosca! A Mitsubishi City Multi exige **600 PSIG (4.15 MPa) por 24 horas**, compensando **0,80 PSI** para cada **1°F** de variação térmica.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Mitsubishi City Multi: 600 PSIG (4.15 MPa) por 24 horas',
            },
            {
              campo: 'conteudo_html',
              trecho: 'a pressão do nitrogênio varia aproximadamente 0,80 PSI para cada 1°F de alteração na temperatura ambiente (ou ~0,1 bar por 1°C)',
            },
          ],
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Confira os padrões OEM: Daikin VRV usa **550 PSIG** e Mitsubishi City Multi exige **600 PSIG** por **24 horas**.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Daikin VRV: 550 PSIG (3.8 MPa) por 24 horas (reduzir para 450 PSIG caso contenha unidades internas FXTQ',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Mitsubishi City Multi: 600 PSIG (4.15 MPa) por 24 horas',
            },
          ],
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Ensaio de Pressão — Padrão Vazamento Zero',
      enunciado: 'Observe o slide de Teste de Estanqueidade com Nitrogênio da Aula 05-04 e selecione o procedimento que cumpre a engenharia Vazamento Zero:',
      imagem: '/images/academia/hvac-instalacao/modulo06/modulo06-01/Modulo-06-01-Nitrogen Leak Testing_ Zero-Leak Standard-01.jpg',
      legendaImagem: 'Módulo 05-04 — Ensaio de Estanqueidade em 3 Estágios e Compensação de Gay-Lussac',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Pressurização em 3 estágios (150 PSIG, 300-325 PSIG e 550-600 PSIG por 24 horas) com nitrogênio seco e compensação de 0,80 PSI por 1°F.',
          correta: true,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Estágio 1 (150 PSIG por 5 minutos): Projetado para localizar vazamentos massivos e óbvios',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Estágio 2 (300-325 PSIG por 15 minutos): Investigação intermediária',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Estágio 3 (550-600 PSIG por 24 horas): Submete a rede ao limite máximo de estresse de fadiga.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'a pressão do nitrogênio varia aproximadamente 0,80 PSI para cada 1°F de alteração na temperatura ambiente (ou ~0,1 bar por 1°C)',
            },
          ],
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Padrão Vazamento Zero! Rede validada a **550-600 PSIG por 24 horas** antes de ligar a bomba de vácuo.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Estágio 3 (550-600 PSIG por 24 horas): Submete a rede ao limite máximo de estresse de fadiga.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Substituir o teste de pressão positiva por vácuo de 14,7 PSI (1 bar) e lavar flanges com detergente doméstico.',
          correta: false,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Quando o sistema é evacuado a um vácuo profundo de 500 mícrons, a pressão interna da tubulação aproxima-se de zero absoluto. Enquanto isso, a pressão atmosférica externa sobre as paredes de cobre permanece estática a aproximadamente 14,7 PSI (1 bar).',
          },
          feedback: [
            {
              quem: 'bia',
              texto: 'Com apenas **14,7 PSI (1 bar)** de fora para dentro, microfissuras ficam ocultas e se rompem quando a descarga passa de **550 PSIG**!',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'Quando o sistema é evacuado a um vácuo profundo de 500 mícrons, a pressão interna da tubulação aproxima-se de zero absoluto. Enquanto isso, a pressão atmosférica externa sobre as paredes de cobre permanece estática a aproximadamente 14,7 PSI (1 bar).',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Um sistema VRF operando com fluido R-410A ou R-32 trabalha com pressões de descarga superiores a 550 PSIG direcionadas de dentro para fora.',
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
      titulo: 'Vácuo Não É Teste de Pressão Estrutural',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Um sistema que vaza nunca foi concluído. Querer validar com **14,7 PSI (1 bar)** de vácuo uma tubulação que vai trabalhar acima de **550 PSIG** é enganar a si mesmo.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Quando o sistema é evacuado a um vácuo profundo de 500 mícrons, a pressão interna da tubulação aproxima-se de zero absoluto. Enquanto isso, a pressão atmosférica externa sobre as paredes de cobre permanece estática a aproximadamente 14,7 PSI (1 bar).',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Um sistema VRF operando com fluido R-410A ou R-32 trabalha com pressões de descarga superiores a 550 PSIG direcionadas de dentro para fora.',
            },
          ],
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'O cilindro de nitrogênio seco e o relógio de **24 horas** são os melhores amigos do sono tranquilo do instalador.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Mitsubishi City Multi: 600 PSIG (4.15 MPa) por 24 horas',
          },
        },
      ],
      principio: 'Pressão positiva de 550-600 PSIG por 24 horas prova estanqueidade; vácuo abaixo de 500 mícrons realiza desidratação.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Quando o sistema é evacuado a um vácuo profundo de 500 mícrons, a pressão interna da tubulação aproxima-se de zero absoluto. Enquanto isso, a pressão atmosférica externa sobre as paredes de cobre permanece estática a aproximadamente 14,7 PSI (1 bar).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Estágio 3 (550-600 PSIG por 24 horas): Submete a rede ao limite máximo de estresse de fadiga.',
        },
      ],
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte a matriz de gases de teste (**Gás Formador 95/5**) e o **Detector Ultrassônico (40 kHz)** na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Gás Formador (Forming Gas 95/5): Utiliza uma mistura segura de 95% de nitrogênio e 5% de hidrogênio (ISO 10156).',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Detector Ultrassônico (40 kHz) Vazamentos de alta pressão em soldas e curvas',
        },
      ],
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Falácia do Vácuo:** a **500 mícrons** a atmosfera exerce só **14,7 PSI (1 bar)** externo, incapaz de simular mais de **550 PSIG** internos do **R-410A** e R-32.',
        '**Protocolo em 3 Estágios:** **150 PSIG por 5 minutos**, **300-325 PSIG por 15 minutos** e **550-600 PSIG por 24 horas** com nitrogênio seco.',
        '**Gay-Lussac e Detecção:** compense **0,80 PSI para cada 1°F** (**~0,1 bar por 1°C**) e localize fugas com **Ultrassom (40 kHz)**, **Gás Formador (95/5)** ou gel viscoelástico.',
      ],
      proxima: 'No Módulo 6 (Aula 06-01) vamos dominar a Mestria em Vácuo Profundo, Hagen-Poiseuille, extrator VCRT e o Vacuum Decay Test.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Quando o sistema é evacuado a um vácuo profundo de 500 mícrons, a pressão interna da tubulação aproxima-se de zero absoluto. Enquanto isso, a pressão atmosférica externa sobre as paredes de cobre permanece estática a aproximadamente 14,7 PSI (1 bar).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Um sistema VRF operando com fluido R-410A ou R-32 trabalha com pressões de descarga superiores a 550 PSIG direcionadas de dentro para fora.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'a pressão do nitrogênio varia aproximadamente 0,80 PSI para cada 1°F de alteração na temperatura ambiente (ou ~0,1 bar por 1°C)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Estágio 1 (150 PSIG por 5 minutos): Projetado para localizar vazamentos massivos e óbvios',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Estágio 2 (300-325 PSIG por 15 minutos): Investigação intermediária',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Estágio 3 (550-600 PSIG por 24 horas): Submete a rede ao limite máximo de estresse de fadiga.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Gás Formador (Forming Gas 95/5): Utiliza uma mistura segura de 95% de nitrogênio e 5% de hidrogênio (ISO 10156).',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Detector Ultrassônico (40 kHz) Vazamentos de alta pressão em soldas e curvas',
        },
      ],
    },
  ],
};
