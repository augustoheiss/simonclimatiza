// src/data/conversas/instalacao-hvac/07-01.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 07-01
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '07-01',
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
      texto: 'Sexta, 8h00. Comissionamento final de uma central VRF. Balança eletrônica digital sob o cilindro de fluido, termopares com pasta térmica nos tubos e alicate True-RMS no quadro.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, um veterano me falou que para acertar a carga de gás basta colocar a mão no tubo de sucção até ele ficar gelado como lata de bebida (**1,7°C a 4,4°C**)! Por que em VRF isso destrói o sistema?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'a avaliação do fluxo pelo tato na linha de sucção (esperando algo em torno de 1,7°C a 4,4°C) funcionava apenas devido à grande tolerância dessas máquinas antigas.',
      },
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Esse método *beer-can cold* (**1,7°C a 4,4°C**) era de máquinas antigas de pistão fixo, Ju! No VRF inverter, as EEVs modulam o tempo todo para manter o superaquecimento constante.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'a avaliação do fluxo pelo tato na linha de sucção (esperando algo em torno de 1,7°C a 4,4°C) funcionava apenas devido à grande tolerância dessas máquinas antigas.',
      },
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Se você injetar fluido esperando o tubo gelar, a EEV vai fechando para defender o superaquecimento e você inunda o condensador, gerando descarga acima de **121°C / 250°F**, golpe de líquido e queima dos IGBTs!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'superaquecimento do compressor (>121°C / 250°F), degradação e quebra térmica do lubrificante sintético (POE/PVE)',
      },
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Em VRF a carga é pesada em balança pelo **Comprimento Equivalente** ($L_{eff} = L_{real} + \\sum L_{eq}$) da linha de líquido: por exemplo, **0,55 oz/ft** para tubos de **3/8"** mais **53 oz** até **27.000 BTUs**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Para obter a carga total de projeto, soma-se a carga fracionada calculada da tubulação (ex: multiplicando o $L_{eff}$ pelo fator de peso por pé, como 0,55 oz/ft para tubos de 3/8") à carga fixa baseada na capacidade térmica acumulada das evaporadoras conectadas (ex: adicionando 53 oz para capacidades de até 27.000 BTUs).',
      },
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      texto: 'E na tabela de comprimentos equivalentes, para um tubo de **3/8" (9,52 mm)** cada cotovelo **90°** padrão soma **0,5 ft (0,15 m)** e cada junção T ramal soma **1,5 ft (0,46 m)** ao comprimento da rede!',
      fonte: {
        campo: 'tabelas_html',
        trecho: '3/8" (9,52 mm) 0,5 ft (0,15 m) 0,3 ft (0,09 m) 0,5 ft (0,15 m) 1,5 ft (0,46 m) 0,5 ft (0,15 m)',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Antes de abrir a balança para injetar a carga adicional de refrigerante, quais são os três patamares do protocolo de Tríplice Evacuação com quebras de nitrogênio seco?',
      opcoes: [
        {
          id: 'a',
          texto: '1ª etapa até 4.000 mícrons, 2ª etapa até 1.500 mícrons (ambas quebradas com nitrogênio a 2 a 3 PSIG) e 3ª etapa até 500 mícrons ou menos com decay test de 1 hora.',
          ideal: true,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Primeira Etapa: Evacuar o sistema até que a leitura digital estabilize em 4.000 mícrons. Fechar os registros e quebrar o vácuo introduzindo nitrogênio seco até atingir uma pressão positiva leve de 2 a 3 PSIG.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Segunda Etapa: Reiniciar a bomba e evacuar até 1.500 mícrons. Repetir a quebra de vácuo com nitrogênio seco a 2-3 PSIG, aguardando de 10 a 15 minutos',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Terceira Etapa: Evacuação final até atingir 500 mícrons ou menos. O teste de estanqueidade digital (decay test) monitora a sustentação da pressão absoluta em isolamento por 1 hora',
            },
          ],
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Cirúrgico! **4.000 mícrons**, **1.500 mícrons** (com quebras a **2 a 3 PSIG** por **10 a 15 minutos**) e fechamento a **500 mícrons** sustentados por **1 hora**!',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'Primeira Etapa: Evacuar o sistema até que a leitura digital estabilize em 4.000 mícrons. Fechar os registros e quebrar o vácuo introduzindo nitrogênio seco até atingir uma pressão positiva leve de 2 a 3 PSIG.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Segunda Etapa: Reiniciar a bomba e evacuar até 1.500 mícrons. Repetir a quebra de vácuo com nitrogênio seco a 2-3 PSIG, aguardando de 10 a 15 minutos',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Terceira Etapa: Evacuação final até atingir 500 mícrons ou menos. O teste de estanqueidade digital (decay test) monitora a sustentação da pressão absoluta em isolamento por 1 hora',
                },
              ],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Expurgar o ar da tubulação soltando um pouco de gás refrigerante pela válvula de serviço.',
          reacao: [
            {
              quem: 'bia',
              texto: 'Purgar linha com refrigerante é crime ambiental, altera a proporção do blend e deixa ar e umidade no sistema!',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Injetar refrigerante direto após o teste de pressão sem evacuar.',
          reacao: [
            {
              quem: 'simon',
              texto: 'Misturar refrigerante com nitrogênio gera pressão de cabeça absurda por gases não-condensáveis e trava o sistema!',
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
      texto: 'E na partida elétrica trifásica, Simon? Por que a norma **NEMA MG-1** exige que o desequilíbrio de tensão entre as três fases não passe de **1%**?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A norma NEMA MG-1 define que a assimetria ou desequilíbrio entre as tensões de linha aplicadas nas três fases não deve superar o limite de 1%.',
      },
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Porque a elevação de temperatura no enrolamento segue $\\Delta T\\% = 2 \\times (\\%\\text{ Desequilíbrio})^2$! Uma assimetria de apenas **3%** eleva em **18%** a temperatura interna, cozinhando o verniz do motor!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Uma assimetria de 3% eleva em 18% a temperatura interna, degradando logaritmicamente o isolamento elétrico das bobinas do compressor e levando ao curto-circuito interno.',
      },
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      texto: 'E na comprovação termodinâmica das serpentinas, o diferencial de bulbo seco (**Delta-T**) ideal na evaporadora fica entre **16°F a 20°F (8,9K a 11,1K)**, e na condensadora entre **15°F e 25°F (8,3K a 13,9K)**!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Evaporador (Indoor Coil): O diferencial de bulbo seco ideal situa-se no intervalo de 16°F a 20°F (8,9K a 11,1K).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Condensador (Outdoor Coil): A temperatura diferencial de bulbo seco do exaustor superior deve situar-se entre 15°F e 25°F (8,3K a 13,9K).',
        },
      ],
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'E atenção máxima ao **DC Bus**: mesmo em redes de **220V**, os capacitores da placa inversora retêm mais de **300 VDC**! Sempre aguarde no mínimo **10 minutos** após desligar antes de tocar na placa.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'a tensão AC trifásica da rede é convertida por retificadores em uma linha contínua de alta tensão (DC Bus), que atinge valores acima de 300 VDC em redes de 220V.',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Ao efetuar testes elétricos na placa inversora do compressor VRF, certifique-se de aguardar no mínimo 10 minutos após o desligamento da alimentação geral antes de interagir com componentes internos. Os capacitores de eletrólise do barramento contínuo DC retêm altas tensões perigosas (excedendo 300 VDC)',
        },
      ],
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Choque do Barramento DC com a Chave Desligada',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Um técnico desligou o disjuntor geral da condensadora VRF e, um minuto depois, encostou a ponta metálica na trilha da placa inversora.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Saiu uma faísca azulada que estourou o módulo IPM! Ele esqueceu que os capacitores do **DC Bus** retêm acima de **300 VDC** após desligar e exigem aguardar no mínimo **10 minutos**!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Ao efetuar testes elétricos na placa inversora do compressor VRF, certifique-se de aguardar no mínimo 10 minutos após o desligamento da alimentação geral antes de interagir com componentes internos. Os capacitores de eletrólise do barramento contínuo DC retêm altas tensões perigosas (excedendo 300 VDC)',
          },
        },
        {
          quem: 'simon',
          texto: 'Desde então, nossa regra de ouro é: desligou o disjuntor, marque **10 minutos** no relógio e confira com o multímetro em VDC antes de encostar ferramenta.',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Ao efetuar testes elétricos na placa inversora do compressor VRF, certifique-se de aguardar no mínimo 10 minutos após o desligamento da alimentação geral antes de interagir com componentes internos.',
          },
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Pela norma NEMA MG-1, o desequilíbrio de tensão entre as três fases não deve superar 1%, pois 3% de desequilíbrio eleva em 18% a temperatura interna dos enrolamentos.',
      verdade: true,
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A norma NEMA MG-1 define que a assimetria ou desequilíbrio entre as tensões de linha aplicadas nas três fases não deve superar o limite de 1%.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Uma assimetria de 3% eleva em 18% a temperatura interna, degradando logaritmicamente o isolamento elétrico das bobinas do compressor e levando ao curto-circuito interno.',
        },
      ],
      explicacao: [
        {
          quem: 'simon',
          texto: 'Verdade! Pela equação $\\Delta T\\% = 2 \\times (\\%\\text{ Desequilíbrio})^2$, **3%** ao quadrado vezes **2** dá **18%** de sobretemperatura nas bobinas.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'O aumento da temperatura interna dos enrolamentos de um motor sob assimetria de tensão é modelado pela expressão: $\\Delta T\\% = 2 \\times (\\% \\text{ Desequilíbrio de Tensão})^2$.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Uma assimetria de 3% eleva em 18% a temperatura interna, degradando logaritmicamente o isolamento elétrico das bobinas do compressor e levando ao curto-circuito interno.',
            },
          ],
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Em sistemas VRF com EEVs e compressores inverter, a carga adicional de refrigerante deve ser feita sentindo a linha de sucção gelada com a mão (beer-can cold, 1,7°C a 4,4°C).',
      verdade: false,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'a avaliação do fluxo pelo tato na linha de sucção (esperando algo em torno de 1,7°C a 4,4°C) funcionava apenas devido à grande tolerância dessas máquinas antigas.',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Mito perigoso! Em VRF a carga é pesada em balança pelo comprimento equivalente da linha de líquido; carregar pelo tato inunda o condensador.',
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Durante o startup VRF em Forced Test Mode, você lê na linha de líquido um Subresfriamento elevado (> 30°F / 16,6K) acompanhado de pressão de alta excessiva. Qual é o diagnóstico e a correção?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'inundação do condensador, subresfriamento excessivo (>30°F / 16,6K), elevação da pressão de alta (SCT)',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Condensador inundado por excesso de carga de refrigerante (overcharge), exigindo recolher fluido gradualmente com estação recolhedora e balança.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Diagnóstico preciso! Excesso de fluido empilha líquido no condensador, subindo o subresfriamento acima de **30°F / 16,6K**.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'inundação do condensador, subresfriamento excessivo (>30°F / 16,6K), elevação da pressão de alta (SCT)',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Falta de fluido refrigerante, exigindo injetar mais gás sem balança.',
          feedback: [
            {
              quem: 'bia',
              texto: 'Falta de fluido derruba o subresfriamento; subresfriamento acima de **30°F / 16,6K** é sintoma clássico de *overcharge*!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'inundação do condensador, subresfriamento excessivo (>30°F / 16,6K), elevação da pressão de alta (SCT)',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora NEMA MG-1 — Sobretemperatura por Assimetria de 3%',
      formula: 'ΔT% = 2 × (% Desequilíbrio de Tensão)²',
      enunciado: 'A norma NEMA MG-1 limita o desequilíbrio de tensão a **1%**. Pela fórmula $\\Delta T\\% = 2 \\times (\\%\\text{ Desequilíbrio})^2$, se um quadro trifásico apresentar **3%** de desequilíbrio de tensão, em quantos **%** subirá a temperatura interna dos enrolamentos do compressor?',
      leituras: [
        { rotulo: 'Limite NEMA MG-1', valor: '1%' },
        { rotulo: 'Desequilíbrio Medido', valor: '3%' },
        { rotulo: 'Fator Quadrático', valor: '2 × (3)²' },
      ],
      unidade: '%',
      respostaCorreta: 18,
      tolerancia: 0,
      opcoesRapidas: [1, 3, 6, 18],
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A norma NEMA MG-1 define que a assimetria ou desequilíbrio entre as tensões de linha aplicadas nas três fases não deve superar o limite de 1%.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O aumento da temperatura interna dos enrolamentos de um motor sob assimetria de tensão é modelado pela expressão: $\\Delta T\\% = 2 \\times (\\% \\text{ Desequilíbrio de Tensão})^2$.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Uma assimetria de 3% eleva em 18% a temperatura interna, degradando logaritmicamente o isolamento elétrico das bobinas do compressor e levando ao curto-circuito interno.',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Exato! $2 \\times 3^2 =$ **18%** de elevação térmica! Por isso nunca liberamos partida com desequilíbrio acima de **1%**.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'A norma NEMA MG-1 define que a assimetria ou desequilíbrio entre as tensões de linha aplicadas nas três fases não deve superar o limite de 1%.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Uma assimetria de 3% eleva em 18% a temperatura interna, degradando logaritmicamente o isolamento elétrico das bobinas do compressor e levando ao curto-circuito interno.',
            },
          ],
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Eleve **3%** ao quadrado ($3 \\times 3 = 9$) e multiplique por **2**: o aumento térmico é de **18%**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Uma assimetria de 3% eleva em 18% a temperatura interna, degradando logaritmicamente o isolamento elétrico das bobinas do compressor e levando ao curto-circuito interno.',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Partida Técnica — Balanço de Massa e Baseline',
      enunciado: 'Observe o slide de Carga de Refrigerante e Partida Técnica da Aula 07-01 e identifique o protocolo que gera uma Certidão de Nascimento confiável:',
      imagem: '/images/academia/hvac-instalacao/modulo07/modulo07-01/Modulo-07-01-Elite Refrigerant Charging and Startup Protocols-01.jpg',
      legendaImagem: 'Módulo 07-01 — Carga por Comprimento Equivalente, NEMA MG-1 e Baseline Termodinâmica',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Carga pesada por comprimento equivalente (0,55 oz/ft em 3/8"), desequilíbrio < 1% (NEMA MG-1) e Delta-T na evaporadora entre 16°F a 20°F.',
          correta: true,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Para obter a carga total de projeto, soma-se a carga fracionada calculada da tubulação (ex: multiplicando o $L_{eff}$ pelo fator de peso por pé, como 0,55 oz/ft para tubos de 3/8")',
            },
            {
              campo: 'conteudo_html',
              trecho: 'A norma NEMA MG-1 define que a assimetria ou desequilíbrio entre as tensões de linha aplicadas nas três fases não deve superar o limite de 1%.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Evaporador (Indoor Coil): O diferencial de bulbo seco ideal situa-se no intervalo de 16°F a 20°F (8,9K a 11,1K).',
            },
          ],
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Comissionamento de elite! Massa exata na balança, rede elétrica simétrica (**< 1%**) e troca térmica comprovada (**16°F a 20°F**).',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'A norma NEMA MG-1 define que a assimetria ou desequilíbrio entre as tensões de linha aplicadas nas três fases não deve superar o limite de 1%.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Evaporador (Indoor Coil): O diferencial de bulbo seco ideal situa-se no intervalo de 16°F a 20°F (8,9K a 11,1K).',
                },
              ],
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Completar gás sentindo o tubo frio com a mão (1,7°C a 4,4°C) e mexer na placa inversora sem aguardar 10 minutos.',
          correta: false,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'a avaliação do fluxo pelo tato na linha de sucção (esperando algo em torno de 1,7°C a 4,4°C) funcionava apenas devido à grande tolerância dessas máquinas antigas.',
            },
            {
              campo: 'infobox_campo',
              trecho: 'certifique-se de aguardar no mínimo 10 minutos após o desligamento da alimentação geral antes de interagir com componentes internos.',
            },
          ],
          feedback: [
            {
              quem: 'bia',
              texto: 'Inunda o condensador (> **30°F / 16,6K** de subresfriamento) e expõe o técnico a mais de **300 VDC** no barramento!',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'inundação do condensador, subresfriamento excessivo (>30°F / 16,6K), elevação da pressão de alta (SCT)',
                },
                {
                  campo: 'infobox_campo',
                  trecho: 'Os capacitores de eletrólise do barramento contínuo DC retêm altas tensões perigosas (excedendo 300 VDC)',
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
      titulo: 'Sem Balança e Sem Baseline, Não Existe Comissionamento',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Em sistemas VRF inverter, tentar adivinhar carga pelo tato da mão (**1,7°C a 4,4°C**) é dirigir vendado.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'a avaliação do fluxo pelo tato na linha de sucção (esperando algo em torno de 1,7°C a 4,4°C) funcionava apenas devido à grande tolerância dessas máquinas antigas.',
          },
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'A Certidão de Nascimento da máquina nasce da fita métrica, da tabela de conexões equivalentes, da balança eletrônica e da simetria elétrica abaixo de **1%**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'A norma NEMA MG-1 define que a assimetria ou desequilíbrio entre as tensões de linha aplicadas nas três fases não deve superar o limite de 1%.',
          },
        },
      ],
      principio: 'Aposente o tato empírico: pese a carga pelo comprimento equivalente e documente a baseline elétrica e termodinâmica.',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte a **Tabela de Comprimento Equivalente** (**3/8"** = **0,5 ft** por cotovelo **90°**) e a **Matriz de Partida VRF** na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
      fonte: {
        campo: 'tabelas_html',
        trecho: '3/8" (9,52 mm) 0,5 ft (0,15 m) 0,3 ft (0,09 m) 0,5 ft (0,15 m) 1,5 ft (0,46 m) 0,5 ft (0,15 m)',
      },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Carga por Balanço de Massa:** aposente o *beer-can cold* (**1,7°C a 4,4°C**); some $L_{real} + \\sum L_{eq}$ (ex: **0,55 oz/ft** em **3/8"**) e pese na balança.',
        '**Tríplice Evacuação:** **4.000 mícrons**, **1.500 mícrons** (quebras a **2 a 3 PSIG**) e **500 mícrons** sustentados por **1 hora**.',
        '**Elétrica e Entalpia:** desequilíbrio máximo de **1%** (NEMA MG-1; **3%** gera **+18%** de calor), aguardar **10 minutos** (**> 300 VDC**) e Delta-T de **16°F a 20°F**.',
      ],
      proxima: 'Na Aula 07-02 vamos fechar o curso com Telemetria OEM (D-Checker / Maintenance Tool 2), Handover Digital e Contrato PMOC!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'a avaliação do fluxo pelo tato na linha de sucção (esperando algo em torno de 1,7°C a 4,4°C) funcionava apenas devido à grande tolerância dessas máquinas antigas.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Para obter a carga total de projeto, soma-se a carga fracionada calculada da tubulação (ex: multiplicando o $L_{eff}$ pelo fator de peso por pé, como 0,55 oz/ft para tubos de 3/8")',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Primeira Etapa: Evacuar o sistema até que a leitura digital estabilize em 4.000 mícrons. Fechar os registros e quebrar o vácuo introduzindo nitrogênio seco até atingir uma pressão positiva leve de 2 a 3 PSIG.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Segunda Etapa: Reiniciar a bomba e evacuar até 1.500 mícrons.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Terceira Etapa: Evacuação final até atingir 500 mícrons ou menos. O teste de estanqueidade digital (decay test) monitora a sustentação da pressão absoluta em isolamento por 1 hora',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A norma NEMA MG-1 define que a assimetria ou desequilíbrio entre as tensões de linha aplicadas nas três fases não deve superar o limite de 1%.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Uma assimetria de 3% eleva em 18% a temperatura interna, degradando logaritmicamente o isolamento elétrico das bobinas do compressor e levando ao curto-circuito interno.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Evaporador (Indoor Coil): O diferencial de bulbo seco ideal situa-se no intervalo de 16°F a 20°F (8,9K a 11,1K).',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Ao efetuar testes elétricos na placa inversora do compressor VRF, certifique-se de aguardar no mínimo 10 minutos após o desligamento da alimentação geral antes de interagir com componentes internos. Os capacitores de eletrólise do barramento contínuo DC retêm altas tensões perigosas (excedendo 300 VDC)',
        },
      ],
    },
  ],
};
