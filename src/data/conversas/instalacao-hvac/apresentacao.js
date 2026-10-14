// src/data/conversas/instalacao-hvac/apresentacao.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Apresentação da Apostila
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: 'apresentacao',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'resenha-pos-obra',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Sexta-feira, 18h30. Balcão da Padaria da Dona Marta. Ferramentas trancadas no baú, água com gás e limão na mesa e a Apostila 01 aberta.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'bem-humorado',
      texto: 'Simon, vou confessar uma coisa aqui no balcão: antes de entrar na sua equipe, eu achava que instalar ar era furar parede, pendurar plástico e soltar gás.',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'risada',
      texto: 'Pelo menos você é sincero, Juninho! Na rua tá cheio de “pendurador de caixa” que nivela evaporadora pelo risco do azulejo do pedreiro.',
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'bem-humorado',
      texto: 'E quando o azulejo tem caimento pro ralo, o dreno vira cachoeira em cima do sofá da cliente! Já vi essa novela aqui no bairro.',
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Por isso nosso treinamento começa mudando a cabeça: amadores fazem coisas ficarem geladas; técnicos de elite removem calor usando a física de precisão.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Amadores fazem coisas ficarem geladas; técnicos de elite removem calor usando a física de precisão.',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'O cliente comprou o VRF ou Inverter mais caro da loja, mas a instalação seguiu o atalho da pressa. De onde vêm as falhas graves nos primeiros meses?',
      opcoes: [
        {
          id: 'a',
          texto: 'De azar com lote de placa eletrônica que já vem queimada de fábrica.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'ironico',
              texto: 'Culpar a fábrica é o esporte favorito do Zé Gambiarra! Quase sempre quem matou a máquina foi a infraestrutura malfeita.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Da soma de pequenos crimes invisíveis: brasagem sem nitrogênio, umidade no óleo POE e desequilíbrio elétrico.',
          ideal: true,
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Cravado! Aquecer o cobre acima de **600°C** sem nitrogênio gera óxido cúprico interno, e a umidade no óleo POE vira ácido que destrói o compressor.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Aquecer o cobre acima de 600°C sem nitrogênio gera óxido cúprico interno (fuligem preta).',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Apenas da falta de lavar o filtro de tela no primeiro mês.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Filtro limpo ajuda, mas não salva compressor rodando com ácido carboxílico e carepa de solda na veia!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Olha o mapa dos sete módulos que vamos atravessar juntos. No Módulo 1 e 2, a gente mata o chute: entende a esponja térmica, SH, SC, carga térmica e drenagem.',
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Na infraestrutura, até o isolamento vibratório tem ciência: coxins de borracha para rotações acima de **1000 RPM**, e molas de aço para máquinas pesadas de baixa rotação.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O isolamento acústico exige coxins de borracha para rotações acima de 1000 RPM, e isoladores de mola helicoidal de aço para baixas rotações (compressores pesados de Chillers/VRF).',
      },
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E na drenagem, toda bomba de condensado precisa de intertravamento passando o circuito de **24V** pela boia de segurança para desligar a evaporadora antes de inundar o gesso.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Em bombas de condensado, o intertravamento passa o circuito de 24V pela boia de segurança para desligar a evaporadora em caso de transbordamento.',
      },
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E quando a gente chega no cobre e na elétrica, nos Módulos 3 e 4?',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Aí é cirurgia pura! Brasagem limpa exige fluxo contínuo de nitrogênio seco a **2-5 SCFH** até esfriar, e isolamento sem enforca-gato para a descarga não passar de **107°C**.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'O protocolo de brasagem exige expurgo inicial com nitrogênio seco e fluxo contínuo a 2-5 SCFH (sussurro de proteção) até o resfriamento completo ao toque.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O roubo térmico nas linhas de sucção eleva a temperatura de descarga acima de 107°C, carbonizando o óleo.',
        },
      ],
    },
    {
      id: 'fala-10',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Na elétrica, desequilíbrio trifásico não pode passar de **1%** pela NEMA MG-1. Na arquitetura VRF, mantemos trechos retos de **50 cm** antes e depois dos Refnets com tolerância de **±15°**.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'O desequilíbrio de tensão trifásico não deve exceder 1% (NEMA MG-1); o aquecimento do enrolamento cresce de forma quadrática com o desequilíbrio: 2 × desequilíbrio².',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Mantenha trechos retos de 50 cm antes e depois de Refnets.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Os Refnets de ramificação de óleo/líquido devem ser instalados perfeitamente planos na horizontal ou vertical (tolerância máxima de ±15°).',
        },
      ],
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e o “Teste de Vazamento no Vácuo”',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'O Zé suspeitou que uma rede VRF estava furada. Em vez de pressurizar com nitrogênio, ele ligou a bomba de vácuo pra “ver se segurava”.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Imagina o desastre: com pressão negativa interna, o furo sugou ar úmido do forro para dentro da linha, saturando o óleo POE de água!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Ao criar pressão negativa interna, você suga ativamente o ar e a umidade do ambiente externo para dentro do circuito frigorífico, saturando o óleo POE de água e inviabilizando a desidratação.',
          },
        },
        {
          quem: 'simon',
          texto: 'Vazamento se caça com pressão positiva de Nitrogênio Seco de **550 a 600 PSI**. Vácuo profundo a **500 microns** só entra depois que a rede já provou ser estanque!',
          fonte: [
            {
              campo: 'infobox_campo',
              trecho: 'O único método válido para teste de vazamentos é a pressurização positiva com Nitrogênio Seco (OFN) de 550 a 600 PSI.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Alcance 500 microns estável (teste de decaimento por 15 minutos).',
            },
          ],
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Se o aparelho gelou nos primeiros minutos de teste na frente do cliente, a instalação já está garantida por anos.',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          texto: 'Mito! Umidade residual no óleo POE reage sob o calor do compressor formando Ácido Carboxílico e Álcool, que corroem o verniz e travam o compressor meses depois por copper plating.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'A presença de umidade causa hidrólise: Éster + Água ⇌ Ácido Carboxílico + Álcool. O ácido resultante corrói o verniz dielétrico e o cobre interno, causando travamento mecânico por copper plating.',
          },
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Durante o ensaio de estanqueidade com nitrogênio seco, a pressão varia cerca de 1.4 PSI para cada 1°C de variação na temperatura ambiente.',
      verdade: true,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A pressão varia termodinamicamente em 1.4 PSI por 1°C de queda térmica (0.8 PSI por 1°F); use Gay-Lussac para deduzir variações.',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Verdade! Pela Lei de Gay-Lussac, uma queda térmica noturna reduz **1.4 PSI** por **1°C** (**0.8 PSI** por **1°F**) sem que exista vazamento físico.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Regra de Campo: Variação aproximada de 1.4 PSI para cada 1°C (ou 0.8 PSI por 1°F).',
          },
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'No Padrão Simon Climatização, qual documento encerrando o Módulo 7 transforma dados de estanqueidade, vácuo abaixo de 500 mícrons e telemetria OEM em blindagem técnica e contrato PMOC?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'vácuo final abaixo de 500 mícrons',
        aulaRef: '07-02',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'O Birth Certificate (Certidão de Nascimento Digital) do sistema.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Exato! O **Birth Certificate** registra estanqueidade, decaimento de vácuo, peso da carga em balança e baseline térmica para blindar a garantia e abrir o PMOC.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'O comissionamento digital gera o Birth Certificate (Certidão de Nascimento Digital) com logs de nitrogênio, decaimento de vácuo, peso da carga, fotos dielétricas e baseline térmica.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Apenas o canhoto da nota fiscal assinado pelo porteiro do prédio.',
          feedback: [
            {
              quem: 'bia',
              texto: 'Canhoto de nota não prova vácuo, superaquecimento nem simetria elétrica perante o fabricante!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Um áudio de WhatsApp dizendo que a tubulação ficou geladinha.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'ironico',
              texto: 'Áudio de “tá geladinho” é o testamento do trocador de peças!',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora de Campo — Compensação Térmica Gay-Lussac (Tabelas da Apostila)',
      formula: 'P_manhã = P_início − 16.8 PSI',
      enunciado: 'Na tabela de Compensação Térmica, a rede foi pressurizada a **32 °C** com **600.0 PSI**. Pela manhã caiu para **20 °C** (perdendo **16.8 PSI** pela regra de **1.4 PSI** por **1°C**). Qual a pressão teórica em **PSI** que comprova sistema estanque?',
      leituras: [
        { rotulo: 'Pressão a 32 °C', valor: '600.0 PSI' },
        { rotulo: 'Queda Térmica (20 °C)', valor: '-16.8 PSI' },
        { rotulo: 'Regra de Campo', valor: '1.4 PSI / 1°C' },
      ],
      unidade: 'PSI',
      respostaCorreta: 583.2,
      tolerancia: 0.2,
      opcoesRapidas: [550.0, 583.2, 591.6, 600.0],
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: '32 °C (Início às 14h) 600.0 PSI 0.0 PSI (Baseline) Pressurização inicial estabelecida 26 °C (Noite) 591.6 PSI -8.4 PSI Queda puramente térmica (Gay-Lussac) 20 °C (Manhã às 8h) 583.2 PSI -16.8 PSI ✅ Estanque (Sem vazamento físico)',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Regra de Campo: Variação aproximada de 1.4 PSI para cada 1°C (ou 0.8 PSI por 1°F).',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Perfeito! A **20 °C** pela manhã, **583.2 PSI** (**-16.8 PSI** de variação puramente térmica) prova que a linha está estanque.',
          fonte: {
            campo: 'tabelas_html',
            trecho: '20 °C (Manhã às 8h) 583.2 PSI -16.8 PSI ✅ Estanque (Sem vazamento físico)',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Faça a conta da tabela: **600.0 PSI** menos **16.8 PSI** de contração térmica a **20 °C** resulta em **583.2 PSI**.',
          fonte: {
            campo: 'tabelas_html',
            trecho: '32 °C (Início às 14h) 600.0 PSI 0.0 PSI (Baseline) Pressurização inicial estabelecida 26 °C (Noite) 591.6 PSI -8.4 PSI Queda puramente térmica (Gay-Lussac) 20 °C (Manhã às 8h) 583.2 PSI -16.8 PSI',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Campo — Ferramental e Práticas Proibidas',
      enunciado: 'Observe a capa da Apostila 01 e identifique qual prática de preparação de tubos é **terminantemente proibida** pelo Padrão Simon:',
      imagem: '/images/academia/hvac-instalacao/aula01-apresentacao/Apostila-Instalacao-01.jpg',
      legendaImagem: 'Apostila 01 — O Padrão Simon Climatização de Engenharia de Campo',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Cortar tubos de cobre com serras-sabre ou arcos de serra manuais, gerando limalhas abrasivas no circuito.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Isso mesmo! Serras manuais soltam limalhas que destroem válvulas e o verniz dielétrico do motor; só usamos cortador de roldana com avanço gradual.',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'É terminantemente proibida a utilização de serras-sabre ou arcos de serra comuns para o corte de tubos de cobre.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Escarear o tubo voltado para baixo e polir o flange com flangeador excêntrico de embreagem.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              texto: 'Essa é a prática correta de elite! Escarear para baixo evita que cavacos caiam dentro da linha.',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'A Assinatura que Fica Trancada Acima do Gesso',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Sabe por que eu gosto de ouvir vocês conversando? Porque vocês tratam um tubo que vai ficar escondido no forro como se fosse uma joia na vitrine.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Dona Marta, a máquina que a gente instala hoje é uma promessa assinada no escuro. Quando o gesso fecha e a gente vai embora, o nosso caráter fica lá dentro rodando pelos próximos dez anos.',
        },
        {
          quem: 'juninho',
          emocao: 'animado',
          texto: 'Anotado, mestre! Chega de atalho: quero aprender cada módulo pra assinar minha obra com orgulho.',
        },
      ],
      principio: 'O que diferencia o pendurador de caixa do engenheiro de campo é o capricho no que ninguém vai ver depois que o forro fechar.',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte o resumo dos 5 quadros operacionais na aba **Tabelas & Parâmetros** antes de iniciar o Módulo 1.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Engenharia acima do chute:** removemos calor com física de precisão, medindo SH, SC e entalpia.',
        '**Pureza interna absoluta:** corte com roldana, brasagem com nitrogênio a **2-5 SCFH**, estanqueidade a **550-600 PSI** e vácuo a **500 microns**.',
        '**Entrega rastreável:** toda instalação de elite termina no **Birth Certificate** digital e na abertura do **PMOC (Lei 13.589/2018)**.',
      ],
      proxima: 'Na Aula 01-01 vamos abrir o Módulo 1 dominando os 4 pilares do Ciclo de Compressão de Vapor.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'O protocolo de brasagem exige expurgo inicial com nitrogênio seco e fluxo contínuo a 2-5 SCFH (sussurro de proteção) até o resfriamento completo ao toque.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Ensaio de estanqueidade de 24h a 550-600 PSI usando nitrogênio seco (OFN).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Alcance 500 microns estável (teste de decaimento por 15 minutos).',
        },
      ],
    },
  ],
};
