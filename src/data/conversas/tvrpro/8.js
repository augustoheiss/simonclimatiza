// src/data/conversas/tvrpro/8.js
// Roteiro "Papo de Balcão" — Instalação e Comissionamento TVR Pro DC Inverter · Aula 08

export default {
  schema: 1,
  cursoId: 'tvrpro',
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
      texto: 'Balcão de Sexta às 18h30 na padaria da Dona Marta. O sistema TVR Pro da obra já está rodando redondo e a equipe revisa o Checklist de Sucesso.',
    },
    {
      id: 'fala-simon-cinco-leis',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Chegamos à **Aula 08**, turma! Hoje unificamos toda a engenharia do **Trane TVR Pro** nas **5 fases cruciais** do nosso Checklist de Sucesso!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Hoje, vamos unificar todo esse conhecimento no Checklist de Sucesso, revisando as 5 leis fundamentais que garantem uma instalação verdadeiramente profissional e uma operação a longo prazo sem falhas.',
      },
    },
    {
      id: 'fala-juninho-fase1-fase2',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Deixa que as duas primeiras eu já sei de cor: **Fase 1** com cintas **≤20mm** e calços no içamento; **Fase 2** com conexões Y niveladas em até **10°** e brasagem sob nitrogênio a **0.02 - 0.03 MPa**!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Inspecione visualmente o equipamento e exija o uso de cintas ≤20mm e calços protetores durante o içamento',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Lembre-se da obrigatoriedade do nivelamento das conexões (Y) para o correto balanceamento da linha de líquido e do limite angular máximo de 10°. A brasagem DEVE ocorrer sempre sob fluxo contínuo de nitrogênio a baixa pressão (0.02 - 0.03 MPa) para evitar a formação de fuligem que destrói compressores.',
        },
      ],
    },
    {
      id: 'fala-bia-fase3-vedacao',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Mandou muito bem, Ju! E na **Fase 3 (Vedação)**, nenhuma unidade opera sem os testes em degraus (**0.3, 1.5 e 4.2 MPa** com nitrogênio) e desidratação por vácuo até **-0.1 MPa (-756 mmHg)**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Nenhuma unidade entra em operação sem os rigorosos testes em degraus (0.3, 1.5 e 4.2 MPa com nitrogênio). Após isso, a desidratação por vácuo deve atingir a pressão absoluta de -0.1 MPa (-756 mmHg) e manter esse nível para garantir que o sistema não possui vazamentos ou umidade oculta.',
      },
    },
    {
      id: 'escolha-revisao-fases-4-5',
      tipo: 'escolha',
      pergunta: 'Fechando a auditoria das **Fases 4 e 5** antes de assinar o termo de entrega da obra, quais parâmetros você confere na elétrica, na comunicação e na carga de fluido?',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'manter o afastamento de pelo menos 500mm entre cabos de alta potência e dados. A topologia correta Daisy Chain é mandatória para as conexões P, Q, E, e a resistência de 120Ω no último ponto é o que vai garantir a comunicação da rede.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O correto fracionamento e carga de fluido R410A em formato LÍQUIDO, a parametrização das chaves DIP switches, e o checklist final garantem que o "cérebro" do sistema funcione em perfeita harmonia com o equipamento.',
        },
      ],
      opcoes: [
        {
          id: 'a',
          texto: 'Cabos colados na força, ligação em estrela sem resistor e carga de R410A em fase vapor.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Zero em todas! Isso geraria ruído eletromagnético, falha de rede e desbalanceamento químico do refrigerante!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Afastamento de pelo menos 500mm entre força e dados, topologia Daisy Chain em P, Q, E com resistência de 120Ω no último ponto, carga de R410A em formato LÍQUIDO e ajuste de DIP switches.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Gabarito de ouro! **500mm** de afastamento, **Daisy Chain** com **120Ω** no último ponto, **R410A** em formato **LÍQUIDO** e chaves DIP parametrizadas!',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'manter o afastamento de pelo menos 500mm entre cabos de alta potência e dados. A topologia correta Daisy Chain é mandatória para as conexões P, Q, E, e a resistência de 120Ω no último ponto é o que vai garantir a comunicação da rede.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'O correto fracionamento e carga de fluido R410A em formato LÍQUIDO, a parametrização das chaves DIP switches, e o checklist final garantem que o "cérebro" do sistema funcione em perfeita harmonia com o equipamento.',
                },
              ],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Pular o checklist final porque a máquina já ligou os ventiladores.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Uma instalação de sucesso não é sorte; exige conferência integral das cinco fases do checklist!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-simon-degraus-pressao',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Repara como os números conversam entre si: na brasagem o nitrogênio corre baixinho (**0.02 - 0.03 MPa**), mas no teste de vedação ele sobe a escada em **0.3, 1.5 e 4.2 MPa**!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A brasagem DEVE ocorrer sempre sob fluxo contínuo de nitrogênio a baixa pressão (0.02 - 0.03 MPa) para evitar a formação de fuligem que destrói compressores.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Nenhuma unidade entra em operação sem os rigorosos testes em degraus (0.3, 1.5 e 4.2 MPa com nitrogênio).',
        },
      ],
    },
    {
      id: 'fala-bia-harmonia-cerebro',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'E quando a vedação e o vácuo a **-0.1 MPa (-756 mmHg)** se somam à rede **P, Q, E** com **120Ω** e carga líquida, o cérebro do sistema opera em harmonia perfeita!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Após isso, a desidratação por vácuo deve atingir a pressão absoluta de -0.1 MPa (-756 mmHg)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A topologia correta Daisy Chain é mandatória para as conexões P, Q, E, e a resistência de 120Ω no último ponto é o que vai garantir a comunicação da rede.',
        },
      ],
    },
    {
      id: 'fala-marta-orgulho-equipe',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'bem-humorado',
      texto: 'Eu adoro quando vocês voltam da entrega final com esse sorriso de dever cumprido e sem telefone tocando com reclamação!',
    },
    {
      id: 'causo-checklist-salvou',
      tipo: 'causo',
      titulo: 'O Último Item do Checklist que Salvou a Inauguração do Hotel',
      falas: [
        {
          quem: 'simon',
          emocao: 'bem-humorado',
          texto: 'Num hotel de luxo, a equipe terceirizada disse que já tinha acabado tudo. Fomos passar o pente-fino das **5 Fases** antes de assinar o comissionamento.',
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'E acharam alguma armadilha escondida no último minuto, Simon?',
        },
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Na Fase 4, abrimos a última evaporadora do décimo andar e tinham esquecido a **resistência de 120Ω** dentro do saquinho plástico! Instalei no borne **P e Q**, conferimos as **DIP switches** e o hotel inaugurou sem uma única falha.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'A topologia correta Daisy Chain é mandatória para as conexões P, Q, E, e a resistência de 120Ω no último ponto é o que vai garantir a comunicação da rede.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'a parametrização das chaves DIP switches, e o checklist final garantem que o "cérebro" do sistema funcione em perfeita harmonia com o equipamento.',
            },
          ],
        },
      ],
    },
    {
      id: 'mito-instalacao-milagre',
      tipo: 'mitoVerdade',
      afirmacao: 'Uma instalação VRF que funciona sem dar defeito por muitos anos é questão de sorte ou milagre do lote de fabricação, não dependendo do rigor nos testes em degraus (0.3, 1.5 e 4.2 MPa).',
      verdade: false,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Nenhuma unidade entra em operação sem os rigorosos testes em degraus (0.3, 1.5 e 4.2 MPa com nitrogênio).',
      },
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! Uma instalação de sucesso não é um milagre; é o resultado direto de uma execução meticulosa e do rigor técnico nas cinco fases, incluindo os degraus de **0.3, 1.5 e 4.2 MPa**.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Nenhuma unidade entra em operação sem os rigorosos testes em degraus (0.3, 1.5 e 4.2 MPa com nitrogênio).',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Uma instalação de sucesso não é um milagre, é o resultado de uma execução meticulosa e do rigor técnico.',
            },
          ],
        },
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'O seu trabalho no campo é o elo vivo que transforma um belo projeto de papel num sistema real de alta performance.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Seu trabalho é o que conecta o projeto ao funcionamento do sistema.',
          },
        },
      ],
    },
    {
      id: 'calc-resistor-terminacao-120',
      tipo: 'calculadora',
      titulo: 'Conferência da Fase 4 — Resistência de Terminação da Rede P, Q, E',
      formula: 'Última Unidade Interna da Rede Daisy Chain = 120Ω',
      enunciado: 'Pela Fase 4 da Aula 08, além de manter o afastamento de pelo menos **500mm** entre cabos de potência e dados, qual é o valor em Ohms (**Ω**) da resistência instalada no último ponto da rede **P, Q, E**?',
      leituras: [
        { rotulo: 'Afastamento Força x Dados', valor: 'Pelo menos 500mm' },
        { rotulo: 'Degraus de Pressão N2', valor: '0.3, 1.5 e 4.2 MPa' },
        { rotulo: 'Vácuo Absoluto', valor: '-0.1 MPa (-756 mmHg)' },
      ],
      unidade: 'Ω',
      respostaCorreta: 120,
      tolerancia: 0.1,
      opcoesRapidas: [20, 60, 120, 500],
      fonte: {
        campo: 'conteudo_html',
        trecho: 'manter o afastamento de pelo menos 500mm entre cabos de alta potência e dados. A topologia correta Daisy Chain é mandatória para as conexões P, Q, E, e a resistência de 120Ω no último ponto é o que vai garantir a comunicação da rede.',
      },
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Cravado! A resistência de **120Ω** no último ponto da rede **Daisy Chain** (com **500mm** de afastamento da força) sela a comunicação perfeita.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'manter o afastamento de pelo menos 500mm entre cabos de alta potência e dados. A topologia correta Daisy Chain é mandatória para as conexões P, Q, E, e a resistência de 120Ω no último ponto é o que vai garantir a comunicação da rede.',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Olha na Fase 4 da aula: a resistência no último ponto da rede P, Q, E é de **120Ω** (**500mm** é o afastamento mínimo dos cabos)!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'manter o afastamento de pelo menos 500mm entre cabos de alta potência e dados. A topologia correta Daisy Chain é mandatória para as conexões P, Q, E, e a resistência de 120Ω no último ponto é o que vai garantir a comunicação da rede.',
          },
        },
      ],
    },
    {
      id: 'inspecao-cinco-leis-aula8',
      tipo: 'inspecao',
      titulo: 'Inspeção Geral — As 5 Leis da Instalação Impecável TVR Pro',
      enunciado: 'Observe o infográfico de revisão geral da Aula 08 e aponte o resumo **correto** das 5 Fases do Checklist de Sucesso:',
      imagem: '/images/academia/tvrpro/aula08/infografico.jpg',
      legendaImagem: 'Infográfico Aula 08 — As 5 Leis da Instalação Impecável',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Inspecione visualmente o equipamento e exija o uso de cintas ≤20mm e calços protetores durante o içamento',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Lembre-se da obrigatoriedade do nivelamento das conexões (Y) para o correto balanceamento da linha de líquido e do limite angular máximo de 10°. A brasagem DEVE ocorrer sempre sob fluxo contínuo de nitrogênio a baixa pressão (0.02 - 0.03 MPa)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Nenhuma unidade entra em operação sem os rigorosos testes em degraus (0.3, 1.5 e 4.2 MPa com nitrogênio). Após isso, a desidratação por vácuo deve atingir a pressão absoluta de -0.1 MPa (-756 mmHg)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'manter o afastamento de pelo menos 500mm entre cabos de alta potência e dados. A topologia correta Daisy Chain é mandatória para as conexões P, Q, E, e a resistência de 120Ω no último ponto é o que vai garantir a comunicação da rede.',
        },
      ],
      pontos: [
        {
          id: 'p1',
          rotulo: 'Cintas ≤20mm; Y em até 10° e brasagem N2 (0.02 - 0.03 MPa); degraus 0.3, 1.5 e 4.2 MPa e vácuo -0.1 MPa (-756 mmHg); afastamento 500mm e 120Ω; carga líquida R410A e DIPs.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Domínio absoluto das 5 Fases! Essa é a assinatura técnica de quem entrega excelência sem retorno de garantia.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Nenhuma unidade entra em operação sem os rigorosos testes em degraus (0.3, 1.5 e 4.2 MPa com nitrogênio). Após isso, a desidratação por vácuo deve atingir a pressão absoluta de -0.1 MPa (-756 mmHg)',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Cintas largas sem calços, brasagem sem nitrogênio, teste direto com gás refrigerante e ligação elétrica no mesmo eletroduto.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Isso violaria todas as 5 Leis da Instalação Impecável e destruiria o equipamento!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-legado-campo',
      tipo: 'filosofia',
      titulo: 'O Seu Trabalho É o Elo entre o Projeto e a Vida Real',
      principio: 'Uma instalação de sucesso não é um milagre; é o resultado visível da sua disciplina invisível em cada solda, em cada vácuo e em cada aperto de borne.',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'O melhor projeto de engenharia do mundo não vale nada se quem estiver no canteiro não tiver orgulho do próprio ofício.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Seu trabalho é o que conecta o projeto ao funcionamento do sistema. Uma instalação de sucesso não é um milagre, é o resultado de uma execução meticulosa e do rigor técnico.',
          },
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Quando você cumpre as cinco leis com rigor técnico, você deixa o seu legado rodando no prédio por muitos anos.',
        },
      ],
    },
    {
      id: 'quiz-tres-degraus-pressao',
      tipo: 'quiz',
      enunciado: 'Quais são os três patamares exatos do teste de integridade em degraus com nitrogênio na Fase 3 da Aula 08 antes de iniciar a desidratação por vácuo?',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A brasagem DEVE ocorrer sempre sob fluxo contínuo de nitrogênio a baixa pressão (0.02 - 0.03 MPa) para evitar a formação de fuligem que destrói compressores.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Nenhuma unidade entra em operação sem os rigorosos testes em degraus (0.3, 1.5 e 4.2 MPa com nitrogênio). Após isso, a desidratação por vácuo deve atingir a pressão absoluta de -0.1 MPa (-756 mmHg)',
        },
      ],
      opcoes: [
        {
          id: 'a',
          texto: 'Testes rigorosos em degraus de 0.3, 1.5 e 4.2 MPa com nitrogênio.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Exato! **0.3, 1.5 e 4.2 MPa** com nitrogênio seguidos do vácuo a **-0.1 MPa (-756 mmHg)**!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Nenhuma unidade entra em operação sem os rigorosos testes em degraus (0.3, 1.5 e 4.2 MPa com nitrogênio). Após isso, a desidratação por vácuo deve atingir a pressão absoluta de -0.1 MPa (-756 mmHg)',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Apenas um sopro de 0.02 - 0.03 MPa por dez segundos.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'A faixa de 0.02 - 0.03 MPa é para o fluxo passante durante a brasagem! O teste de estanqueidade sobe em 0.3, 1.5 e 4.2 MPa.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'A brasagem DEVE ocorrer sempre sob fluxo contínuo de nitrogênio a baixa pressão (0.02 - 0.03 MPa)',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Nenhuma unidade entra em operação sem os rigorosos testes em degraus (0.3, 1.5 e 4.2 MPa com nitrogênio).',
                },
              ],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Teste hidráulico enchendo os tubos de cobre com água da torneira.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Água dentro de tubulação frigorífica VRF é proibida! Usa-se exclusivamente nitrogênio seco.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-formatura-tvrpro',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Que jornada incrível! Das cintas **≤20mm** na chegada até o último ajuste das **DIP switches** na partida, me sinto pronto para qualquer obra **TVR Pro**!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'exija o uso de cintas ≤20mm e calços protetores durante o içamento',
        },
        {
          campo: 'conteudo_html',
          trecho: 'a parametrização das chaves DIP switches, e o checklist final garantem que o "cérebro" do sistema funcione em perfeita harmonia com o equipamento.',
        },
      ],
    },
    {
      id: 'fala-bia-parabens-juninho',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Você merece, Ju! Anotou cada pressão, cada ângulo e cada regra de segurança sem pular nenhum degrau.',
    },
    {
      id: 'fala-marta-festa',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'animado',
      texto: 'Hoje tem café especial e torta salgada por conta da casa para celebrar essa formação!',
    },
    {
      id: 'fala-simon-convite-boss',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Manda ver no **Desafio da Rodada** agora mesmo para garantir o seu selo de Certificação Linha TVR Pro!',
    },
    {
      id: 'ref-conteudo-tvr8',
      tipo: 'referencia',
      texto: 'Revise o Checklist de Sucesso completo e os slides das 5 Leis na aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Inspecione visualmente o equipamento e exija o uso de cintas ≤20mm e calços protetores durante o içamento',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Lembre-se da obrigatoriedade do nivelamento das conexões (Y) para o correto balanceamento da linha de líquido e do limite angular máximo de 10°. A brasagem DEVE ocorrer sempre sob fluxo contínuo de nitrogênio a baixa pressão (0.02 - 0.03 MPa)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Nenhuma unidade entra em operação sem os rigorosos testes em degraus (0.3, 1.5 e 4.2 MPa com nitrogênio). Após isso, a desidratação por vácuo deve atingir a pressão absoluta de -0.1 MPa (-756 mmHg)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'manter o afastamento de pelo menos 500mm entre cabos de alta potência e dados. A topologia correta Daisy Chain é mandatória para as conexões P, Q, E, e a resistência de 120Ω no último ponto é o que vai garantir a comunicação da rede.',
        },
      ],
      pontos: [
        '**Fases 1 e 2 (Mecânica e Brasagem):** use cintas **≤20mm** com calços, nivele conexões Y em até **10°** e solde sempre com nitrogênio a **0.02 - 0.03 MPa**.',
        '**Fase 3 (Vedação e Vácuo):** cumpra os degraus de **0.3, 1.5 e 4.2 MPa** com nitrogênio e desidrate a vácuo até **-0.1 MPa (-756 mmHg)**.',
        '**Fases 4 e 5 (Elétrica e Partida):** afaste dados em pelo menos **500mm** da força, use **Daisy Chain** com **120Ω** no fim, carregue **R410A** em formato **LÍQUIDO** e ajuste as **DIP switches**.',
      ],
      proxima: 'Parabéns por concluir o curso TVR Pro DC Inverter! Clique agora no Desafio da Rodada para conquistar sua Certificação Linha TVR Pro!',
    },
  ],
};
