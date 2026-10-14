// src/data/conversas/instalacao-hvac/02-03.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 02-03
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '02-03',
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
      texto: 'Quarta, 7h40. Forro técnico de gesso de um escritório corporativo. Juninho segura um rolo de fita plástica ao lado de um cano de PVC de 3/4".',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, pra economizar suporte aqui no forro, posso amarrar esse tubo de dreno de PVC direto junto com a linha de cobre de sucção?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Solta essa fita agora, Juninho! Amarrar o dreno de PVC na linha fria de sucção (*Line-Set Bundling*) é estritamente proibido!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Agrupar a tubulação plástica de dreno de PVC amarrada diretamente contra a tubulação fria de sucção de cobre do refrigerante (o line-set) é estritamente proibido.',
      },
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'O cobre gelado resfria o PVC por condução térmica, fazendo o cano de dreno suar por fora e pingar no forro de gesso inteirinho, além de acelerar algas e biofilme!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'O resfriamento por condução térmica gela o PVC, fazendo a parede plástica condensar umidade externa e gotejar ("suar") de forma contínua no interior de forros decorativos de gesso.',
      },
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Um cano barato de 3/4" protege projetos milionários! Em evaporadoras de pressão negativa (*Draw-Through*), o ventilador puxa ar pelo dreno se não tiver sifão **P-Trap**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O Cano Barato de 3/4" que Protege Projetos de Milhões',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Quando instalamos um respiro vertical (vent) aberto à atmosfera numa linha de dreno por gravidade, onde ele deve ficar em relação ao sifão P-Trap?',
      opcoes: [
        {
          id: 'a',
          texto: 'Antes do sifão (entre a bandeja da evaporadora e o P-Trap).',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Se colocar antes do sifão, você anula o selo hídrico! O ventilador vai chupar ar pelo respiro e a água vai transbordar na bandeja.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Se colocado antes (entre a bandeja e o sifão), ele anula o selo, puxando ar direto da atmosfera e mantendo a água retida na bandeja.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Obrigatoriamente a jusante (depois) do sifão, com o topo subindo acima do nível superior da bandeja interna.',
          ideal: true,
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Na mosca! O respiro depois do sifão quebra o efeito pistão na descida e, subindo acima da bandeja, evita transbordo pelo respiro.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'O respiro deve obrigatoriamente ser posicionado a jusante (depois) do sifão.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Colocar dois sifões seguidos sem respiro nenhum para dobrar a segurança.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Dois sifões seguidos sem ventilação criam o **Duplo Sifonamento** (*Double Trapping*): um colchão pneumático de ar preso que trava a drenagem!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'A Paralisia por Duplo Sifonamento (Double Trapping): Ocorre quando existem dois sifões consecutivos sem ventilação intermediária (seja por erro de montagem ou sags na linha).',
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
      texto: 'E atenção à geometria pós-sifão: a declividade mínima de código é **1%** (1/8" por pé), mas o padrão recomendado de engenharia é **2%** de queda contínua (1/4" por pé)!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A declividade mínima ditada em código é de 1% (1/8" por pé linear), porém o padrão recomendado de engenharia é de 2% de queda contínua (1/4" por pé).',
      },
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Como o PVC amolece no calor do entreforro (*creep*), você precisa fixar suportes horizontais a cada **4** pés (**1,2** metros) e verticais a cada **10** pés (**3,0** metros) para não formar barriga!',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Polyvinyl Chloride (PVC) Horizontal 4 pés (1,2 metros) Abraçadeiras tipo gota, cavaletes metálicos rígidos ou calhas plásticas. Polyvinyl Chloride (PVC) Vertical 10 pés (3,0 metros)',
      },
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E quando a máquina fica parada no inverno e a água do sifão seca? Não sobe cheiro ruim pelo cano?',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Sobe sim! Por isso projetos de elite usam **sifões mecânicos a seco** (*Waterless Air-Traps*), com uma esfera interna que veda no vácuo quando seco e flutua quando desce água, além de jamais ligar direto no esgoto sem *Air Gap*!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Para anular esse risco, projetos de elite especificam sifões mecânicos a seco (como os da Des Champs Technologies).',
      },
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E quando usamos bomba de condensado, duas regras salvam vidas: válvula de retenção (*check valve*) na saída para a água da coluna não voltar, e a boia de segurança cabeada em série no comando de **24V**!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'O microinterruptor de segurança do sensor de boia deve ser cabeado em série com o circuito de controle de 24V (linhas R ou Y).',
      },
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e a Bomba de Condensado sem Interlock',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num CPD comercial, o Zé instalou a bomba de condensado ligada na tomada, mas deixou os dois fios do microinterruptor da boia enrolados com fita isolante à toa.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Se tivesse ligado em série na linha de **24V** (fios R ou Y), quando a mangueira dobrou no forro a boia teria aberto o circuito e desligado o compressor na hora!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Lógica de Intertravamento (Safety Interlock): O microinterruptor interno do sensor de nível alto da bomba deve ser ligado em série na linha de alimentação de 24V de controle do termostato ou contactora do compressor (fios R ou Y).',
          },
        },
        {
          quem: 'simon',
          texto: 'Sem o *interlock* de **24V**, a evaporadora continuou produzindo água a noite inteira em cima do rack de servidores!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'O microinterruptor de segurança do sensor de boia deve ser cabeado em série com o circuito de controle de 24V (linhas R ou Y).',
          },
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Pode-se conectar o tubo de dreno de condensado diretamente fechado na prumada de esgoto sanitário do prédio.',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          texto: 'Mito criminoso! Se o sifão secar, a pressão negativa da evaporadora aspira gás metano e bactérias do esgoto para os pulmões dos ocupantes. Exige-se descarga indireta com folga física de ar (*Air Gap*).',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'A terminação deve descarregar com folga física de ar (Air Gap) acima da borda de um ralo ou pia de captação indireta.',
          },
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Pela tabela IMC 307.2, sistemas de até 20 TR (240.000 BTU/h) exigem diâmetro interno mínimo de 3/4 polegada (PVC de 25 mm externo).',
      verdade: true,
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Até 20 TR Até 70 kW / 240.000 BTU/h 3/4 polegada (0,75") 25 mm (externo)',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Verdade! Até **20 TR** (**240.000 BTU/h**) o mínimo é 3/4" (**25 mm** externo); de **21 a 40 TR** sobe para 1 polegada (**32 mm** externo).',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Até 20 TR Até 70 kW / 240.000 BTU/h 3/4 polegada (0,75") 25 mm (externo) De 21 a 40 TR 70 a 140 kW / 240.000 a 480.000 BTU/h 1 polegada (1,00") 32 mm (externo)',
          },
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Uma tubulação de dreno de PVC horizontal foi presa apenas nas duas pontas de um vão de 5 metros no sótão quente, formando uma “barriga” (flecha) no meio do caminho. Qual patologia hidráulica vai travar o escoamento?',
      opcoes: [
        {
          id: 'a',
          texto: 'Duplo Sifonamento (Double Trapping): a barriga forma um segundo sifão que aprisiona um bolsão de ar (air-lock) entre o P-Trap e a flecha.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! Por isso o código exige suporte horizontal no PVC a cada **4** pés (**1,2** metros) — barriga no cano vira um segundo sifão e cria bloqueio pneumático!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'a sustentação horizontal deve ocorrer rigidamente a cada **4 pés (1,2 metros)**, e a fixação vertical a cada **10 pés (3 metros)** sob pena de gerar flechas (barrigas) que resultam em duplo sifonamento.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'A água ganha velocidade extra por efeito tobogã e limpa o cano.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'ironico',
              texto: 'Tobogã só se for pro forro de gesso desabar quando a bandeja encher!',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora Hidrostática — Profundidade do Selo do P-Trap (0,50" w.c.)',
      formula: 'Selo (mm) = 38 mm para TESP 0,50" w.c. (1,50 polegada)',
      enunciado: 'Pelo Guia Paramétrico de Sifonamento em Pressão Negativa (*Draw-Through*) da aula, para uma câmara com pressão estática (TESP) de **0,50** polegadas w.c. (125 Pa) e altura de saída **H** de **25 mm**, qual é a profundidade vertical mínima do **Selo** em **mm**?',
      leituras: [
        { rotulo: 'Pressão Estática (TESP)', valor: '0,50" w.c. (125 Pa)' },
        { rotulo: 'Altura de Saída (H)', valor: '1,00" (25 mm)' },
        { rotulo: 'Profundidade do Selo (pol)', valor: '1,50 polegada' },
      ],
      unidade: 'mm',
      respostaCorreta: 38,
      tolerancia: 1,
      opcoesRapidas: [25, 38, 50, 63],
      fonte: {
        campo: 'tabelas_html',
        trecho: '0,50 polegadas w.c. (125 Pa) + 1,00" (Selo) / + 0,50" (H) 1,50 polegada (38 mm) 1,00 polegada (25 mm)',
      },
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Cravado! Com **38 mm** (1,50 polegada) de profundidade de selo e **25 mm** de altura de saída, a coluna hidrostática vence o vácuo do ventilador com segurança.',
          fonte: {
            campo: 'tabelas_html',
            trecho: '0,50 polegadas w.c. (125 Pa) + 1,00" (Selo) / + 0,50" (H) 1,50 polegada (38 mm) 1,00 polegada (25 mm)',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Confira na tabela de sifonamento: para 0,50" w.c. (125 Pa), a altura H é **25 mm** e a profundidade vertical do selo é **38 mm** (1,50 polegada).',
          fonte: {
            campo: 'tabelas_html',
            trecho: '0,50 polegadas w.c. (125 Pa) + 1,00" (Selo) / + 0,50" (H) 1,50 polegada (38 mm) 1,00 polegada (25 mm)',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção Hidráulica — Drenagem de Condensado de Elite',
      enunciado: 'Observe o painel de Drenagem de Condensado da Aula 02-03 e aponte a montagem que segue **100%** o protocolo de engenharia:',
      imagem: '/images/academia/hvac-instalacao/modulo02/modulo02-03/Module02-03-Elite HVAC Condensate Drainage Masterclass-01.jpg',
      legendaImagem: 'Módulo 02-03 — Engenharia Hidráulica de Drenagem de Condensado',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Sifão P-Trap dimensionado pela TESP, respiro a jusante, declividade de 2%, suportes próprios e boia em série no 24V.',
          correta: true,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'A declividade mínima ditada em código é de 1% (1/8" por pé linear), porém o padrão recomendado de engenharia é de 2% de queda contínua (1/4" por pé).',
            },
            {
              campo: 'infobox_campo',
              trecho: 'O microinterruptor de segurança do sensor de boia deve ser cabeado em série com o circuito de controle de 24V (linhas R ou Y).',
            },
          ],
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Perfeito! Escoamento contínuo com **2%** de queda, suportes independentes da linha de cobre e corte automático de **24V** se houver obstrução.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'padrão recomendado de engenharia é de 2% de queda contínua',
                },
                {
                  campo: 'infobox_campo',
                  trecho: 'circuito de controle de 24V (linhas R ou Y).',
                },
              ],
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Tubo de PVC amarrado na linha fria de sucção, sem sifão e conectado direto na coluna de esgoto sanitário.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              texto: 'Três erros fatais num só dreno: suor por condução térmica, retenção de água por vácuo e aspiração de gás de esgoto!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'O Detalhe Barato que Derruba Reputações Caras',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'O cliente pode não entender nada de entalpia ou diagrama P-H, Ju. Mas se cair uma única gota de água amarela no gesso da sala de jantar dele, pra ele a instalação inteira é um lixo.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Respeitar os **2%** de declividade, o nível de bolha e o intertravamento de **24V** é o que garante que o seu telefone não toque no domingo à noite.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'padrão recomendado de engenharia é de 2% de queda contínua',
            },
            {
              campo: 'infobox_campo',
              trecho: 'circuito de controle de 24V (linhas R ou Y).',
            },
          ],
        },
      ],
      principio: 'Nenhuma engenharia de milhões sobrevive a um dreno de centavos feito no improviso.',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte o dimensionamento **IMC 307.2**, a geometria do **P-Trap por TESP** e o espaçamento de suportes na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**P-Trap e Respiro:** sifão dimensionado pela pressão negativa (*Draw-Through*) e respiro sempre a **jusante** (depois do sifão).',
        '**Declividade e Suportes:** queda de **2%** (mínimo **1%**), suportes horizontais no PVC a cada **4** pés (**1,2** m) e proibido amarrar na linha de sucção.',
        '**Proteção Ativa:** descarga indireta com *Air Gap* e boia de segurança cabeada em série no comando de **24V**.',
      ],
      proxima: 'Parabéns por concluir o Módulo 2! Encare o Desafio do Módulo 2 e nos vemos no Módulo 3 para dominar a Maestria do Cobre!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A declividade mínima ditada em código é de 1% (1/8" por pé linear), porém o padrão recomendado de engenharia é de 2% de queda contínua (1/4" por pé).',
        },
        {
          campo: 'infobox_campo',
          trecho: 'O microinterruptor de segurança do sensor de boia deve ser cabeado em série com o circuito de controle de 24V (linhas R ou Y).',
        },
      ],
    },
  ],
};
