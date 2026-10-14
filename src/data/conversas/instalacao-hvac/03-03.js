// src/data/conversas/instalacao-hvac/03-03.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 03-03
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '03-03',
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
      texto: 'Segunda, 7h30. Corredor técnico da obra. Juninho segura tubos de espuma elastomérica de célula fechada, lata de adesivo de contato e um pacote de abraçadeiras plásticas.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, já vesti o isolante esponjoso na linha de sucção! Posso passar o enforca-gato bem apertado a cada meio metro pra ficar bonitinho?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Esconde esse pacote de enforca-gato agora, Ju! Quem isola não é a borracha, é o gás parado dentro das milhões de microcélulas fechadas!',
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Olha a tabela da aula: quando você esmaga um isolante elastomérico de 1,00 polegada (**25 mm**, R-4,2) para 0,25 polegada (**6 mm**, R-1,1), você causa **73,8%** de perda térmica naquele ponto!',
      fonte: {
        campo: 'tabelas_html',
        trecho: '1,00 polegada (25 mm) R-4,2 0,25 polegada (6 mm) R-1,1 73,8% de perda térmica',
      },
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E sabe o que o “roubo térmico” na linha de sucção faz com o compressor? Ele é refrigerado pelo próprio gás de sucção que retorna frio do evaporador!',
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'É a **Regra dos 225°F (107°C) de Sobrevivência**: a temperatura de descarga a **15 cm** do compressor nunca pode passar de **225°F** (**107°C**), senão a placa de válvulas bate **300°F** (**149°C**) e acima de **350°F** o óleo POE quebra!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A Regra dos 225°F (107°C) de Sobrevivência: A temperatura da linha de descarga, medida a 15 cm da saída do compressor, nunca deve ultrapassar 225°F (107°C). Se atingir esse patamar, as partes internas na placa de válvulas estarão a 300°F (149°C) ou mais.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Acima de 350°F, os lubrificantes sintéticos (como o POE) quebram quimicamente, perdendo a viscosidade.',
        },
      ],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E tem o segundo inimigo no Brasil: com umidade média de **75%** e ponto de orvalho em **59°F** (**15°C**), um tubo de sucção a **40°F** (**4,4°C**) sem vedação perfeita condensa água sem parar!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'cuja umidade média é de 75% e o ponto de orvalho situa-se frequentemente em 59°F (15°C) —, um tubo de cobre de sucção operando a 40°F (4,4°C) condensará umidade externa intensamente',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Ao cortar e unir dois trechos de isolante elastomérico de célula fechada na tubulação frigorífica, qual é a técnica correta de corte e colagem?',
      opcoes: [
        {
          id: 'a',
          texto: 'Cortar a espuma esticada no limite e passar apenas fita crepe por fora.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Quando o cobre gelar a **40°F** (**4,4°C**), a espuma vai encolher, abrir fresta na emenda e chover no forro!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'um tubo de cobre de sucção operando a 40°F (4,4°C) condensará umidade externa intensamente',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Cortar a espuma 5 a 10 mm mais longa para instalar sob compressão longitudinal (bunching positivo) e fazer solda química de contato (Wet Seal) em todas as faces.',
          ideal: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Corte as espumas 5 a 10 mm mais longas e empurre-as sob compressão lateral (bunching positivo)',
          },
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! Cortar **5 a 10 mm** a mais mantém as juntas comprimidas e a colagem de contato (*Wet Seal*) funde a barreira de vapor numa peça monolítica!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Corte as espumas 5 a 10 mm mais longas e empurre-as sob compressão lateral (bunching positivo)',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Vestir uma única espuma larga engolindo os tubos de líquido e sucção juntos.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Juntar a linha quente de líquido com a linha fria de sucção dentro do mesmo isolante transfere calor direto pro compressor!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'bia',
      texto: 'A diferença entre pressão de vapor externa (ar quente e úmido) e interna (tubo a **40°F** / **4,4°C**) cria o **Vapor Drive**: o vapor tenta furar qualquer fresta em direção ao cobre frio!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'um tubo de cobre de sucção operando a 40°F (4,4°C) condensará umidade externa intensamente',
      },
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Por isso toda emenda e todas as pontas do isolante (nas válvulas de serviço e nos flanges) precisam ser seladas na cola de contato para a água não caminhar por dentro do tubo!',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Agora fez todo sentido! Se entrar uma fresta de ar úmido numa ponta aberta, a água condensa lá dentro e escorre escondida por metros até achar onde vazar.',
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e o Isolante Esfarelado no Sol',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Na cobertura de uma clínica, o Zé passou dez metros de linha frigorífica exposta ao sol só com o elastômero preto nu, sem proteção mecânica nem fita/pintura UV.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'A radiação ultravioleta e os pássaros destruíram a espuma em menos de um ano! O cobre de sucção ficou pelado no sol de verão.',
        },
        {
          quem: 'simon',
          texto: 'O superaquecimento de retorno explodiu, a descarga a **15 cm** do compressor passou fácil de **225°F** (**107°C**) e o óleo POE virou borra ácida!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'A Regra dos 225°F (107°C) de Sobrevivência: A temperatura da linha de descarga, medida a 15 cm da saída do compressor, nunca deve ultrapassar 225°F (107°C).',
          },
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Quando a tubulação passa por uma abraçadeira metálica de suporte, deve-se rasgar o isolante e apoiar o cobre nu direto no ferro para ficar mais firme.',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          texto: 'Mito! O contato metal-metal cria uma **Ponte Térmica** (*Thermal Bridge*) que gela o suporte, rompe a barreira de vapor e goteja no forro. Use calços isolantes rígidos de alta densidade nos suportes!',
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Comprimir uma manta de fibra de vidro de 6,25 polegadas (158 mm, R-19) para dentro de uma cavidade de 3,50 polegadas (89 mm, R-13) gera 31,5% de perda térmica.',
      verdade: true,
      fonte: {
        campo: 'tabelas_html',
        trecho: '6,25 polegadas (158 mm) R-19 3,50 polegadas (89 mm) R-13 31,5% de perda térmica',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Verdade! Na tabela de compressão da aula, esmagar de **158 mm** (R-19) para **89 mm** (R-13) expulsa o ar estagnado e perde **31,5%** da resistência térmica.',
          fonte: {
            campo: 'tabelas_html',
            trecho: '6,25 polegadas (158 mm) R-19 3,50 polegadas (89 mm) R-13 31,5% de perda térmica',
          },
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Qual é o efeito termodinâmico direto no compressor quando o isolamento da linha de sucção falha num sótão quente?',
      opcoes: [
        {
          id: 'a',
          texto: 'O gás de retorno chega superaquecido e pouco denso, falhando em resfriar o motor e elevando a descarga acima do limite de 225°F (107°C).',
          correta: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'A Regra dos 225°F (107°C) de Sobrevivência: A temperatura da linha de descarga, medida a 15 cm da saída do compressor, nunca deve ultrapassar 225°F (107°C).',
          },
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Na mosca! Sem o resfriamento do gás de sucção denso, a descarga passa de **225°F** (**107°C**) e a placa de válvulas passa de **300°F** (**149°C**)!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'A Regra dos 225°F (107°C) de Sobrevivência: A temperatura da linha de descarga, medida a 15 cm da saída do compressor, nunca deve ultrapassar 225°F (107°C). Se atingir esse patamar, as partes internas na placa de válvulas estarão a 300°F (149°C) ou mais.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'O compressor trabalha mais frio e economiza energia elétrica.',
          feedback: [
            {
              quem: 'simon',
              texto: 'Ao contrário: o volume específico do gás sobe, a vazão mássica cai e o compressor frita!',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora de Campo — Perda Térmica por Esmagamento (Abraçadeira)',
      formula: 'Perda (%) de 25 mm (R-4,2) → 6 mm (R-1,1) = 73,8%',
      enunciado: 'Um instalador apertou uma abraçadeira plástica que esmagou o isolante elastomérico de 1,00 polegada (**25 mm**, R-4,2) para apenas 0,25 polegada (**6 mm**, R-1,1). Pela tabela da aula, qual é o percentual exato de **perda térmica** (**%**) causado nesse ponto?',
      leituras: [
        { rotulo: 'Espessura Nominal (R-4,2)', valor: '25 mm' },
        { rotulo: 'Espessura Esmagada (R-1,1)', valor: '6 mm' },
        { rotulo: 'Perda na Fibra (158 → 89 mm)', valor: '31,5%' },
      ],
      unidade: '%',
      respostaCorreta: 73.8,
      tolerancia: 0.2,
      opcoesRapidas: [15.0, 31.5, 50.0, 73.8],
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: '1,00 polegada (25 mm) R-4,2 0,25 polegada (6 mm) R-1,1 73,8% de perda térmica',
        },
        {
          campo: 'tabelas_html',
          trecho: '6,25 polegadas (158 mm) R-19 3,50 polegadas (89 mm) R-13 31,5% de perda térmica',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Impressionante, né? Esmagar **25 mm** para **6 mm** destrói **73,8%** do poder isolante, criando um anel de condensação garantido!',
          fonte: {
            campo: 'tabelas_html',
            trecho: '1,00 polegada (25 mm) R-4,2 0,25 polegada (6 mm) R-1,1 73,8% de perda térmica',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Olhe na tabela de compressão da aula: reduzir de **25 mm** (R-4,2) para **6 mm** (R-1,1) provoca **73,8%** de perda térmica.',
          fonte: {
            campo: 'tabelas_html',
            trecho: '1,00 polegada (25 mm) R-4,2 0,25 polegada (6 mm) R-1,1 73,8% de perda térmica',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Blindagem Térmica e Barreira de Vapor',
      enunciado: 'Observe o slide de Isolamento Térmico da Aula 03-03 e aponte a execução que protege o compressor e elimina a condensação:',
      imagem: '/images/academia/hvac-instalacao/modulo03/modulo03-03/Module03-03-Elite HVAC Insulation Masterclass Draft-01.jpg',
      legendaImagem: 'Módulo 03-03 — Armadura Térmica, Vapor Drive e Regra dos 225°F (107°C)',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Linhas isoladas individualmente com sobrecomprimento de 5 a 10 mm, colagem Wet Seal contínua, suporte com calço rígido e proteção UV externa.',
          correta: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Corte as espumas 5 a 10 mm mais longas e empurre-as sob compressão lateral (bunching positivo)',
          },
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Blindagem 100%! Barreira de vapor hermética contra os **75%** de umidade e descarga segura abaixo de **225°F** (**107°C**).',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'cuja umidade média é de 75% e o ponto de orvalho situa-se frequentemente em 59°F (15°C)',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'nunca deve ultrapassar 225°F (107°C).',
                },
              ],
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Isolante estrangulado com abraçadeiras plásticas (6 mm, 73,8% de perda) e emendas abertas sem cola.',
          correta: false,
          fonte: {
            campo: 'tabelas_html',
            trecho: '1,00 polegada (25 mm) R-4,2 0,25 polegada (6 mm) R-1,1 73,8% de perda térmica',
          },
          feedback: [
            {
              quem: 'simon',
              texto: 'Esse estrangulamento é um convite para o *Vapor Drive* encharcar a linha e manchar o forro!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Proteger a Energia que Já Custou Caro para Extrair',
      falas: [
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Cada BTU que o evaporador tirou lá de dentro da sala custou projeto, cobre e energia elétrica. Deixar esse calor entrar de volta na linha de sucção por um corte mal colado é jogar trabalho limpo no lixo.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'O isolamento não é a “roupa estética” do cano, Ju. É a armadura que garante que o gás chegue frio pra salvar a vida do compressor.',
        },
      ],
      principio: 'Isolamento não é acabamento: é a barreira que protege o compressor contra os 225°F (107°C) e o forro contra o ponto de orvalho.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A Regra dos 225°F (107°C) de Sobrevivência: A temperatura da linha de descarga, medida a 15 cm da saída do compressor, nunca deve ultrapassar 225°F (107°C).',
      },
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte a tabela de **Perda Térmica por Compressão** (**73,8%** no elastômero esmagado) na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
      fonte: {
        campo: 'tabelas_html',
        trecho: '1,00 polegada (25 mm) R-4,2 0,25 polegada (6 mm) R-1,1 73,8% de perda térmica',
      },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Regra dos 225°F (107°C):** a descarga a **15 cm** do compressor não pode passar de **225°F** (**107°C**); proteja a sucção contra roubo térmico.',
        '**Zero Esmagamento:** nunca aperte enforca-gato na espuma — comprimir de **25 mm** para **6 mm** causa **73,8%** de perda térmica.',
        '**Bunching + Wet Seal:** corte **5 a 10 mm** mais longo, cole todas as faces com adesivo de contato e proteja contra UV no exterior.',
      ],
      proxima: 'Parabéns por concluir o Módulo 3! Vença o Desafio do Módulo 3 e prepare o multímetro True-RMS para o Módulo 4 (Rigor Elétrico e Dados)!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A Regra dos 225°F (107°C) de Sobrevivência: A temperatura da linha de descarga, medida a 15 cm da saída do compressor, nunca deve ultrapassar 225°F (107°C).',
        },
        {
          campo: 'tabelas_html',
          trecho: '1,00 polegada (25 mm) R-4,2 0,25 polegada (6 mm) R-1,1 73,8% de perda térmica',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Corte as espumas 5 a 10 mm mais longas e empurre-as sob compressão lateral (bunching positivo)',
        },
      ],
    },
  ],
};
