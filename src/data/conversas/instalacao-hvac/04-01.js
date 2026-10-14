// src/data/conversas/instalacao-hvac/04-01.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 04-01
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '04-01',
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
      texto: 'Terça, 7h30. Quadro elétrico principal da casa de máquinas. Simon e Bia analisam a placa de identificação de uma condensadora VRF com o multímetro True-RMS em mãos.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, na etiqueta da condensadora tem duas siglas em inglês: **MCA** e **MOCP**. Qual das duas eu uso pra escolher a bitola do cabo e qual eu uso pro disjuntor?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Pergunta de ouro, Ju! **MCA** (*Minimum Circuit Ampacity*) define a **bitola mínima dos cabos**; já o **MOCP** (*Maximum Overcurrent Protection*) define o **teto do disjuntor ou fusível**!',
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Pela norma NEC Artigo 440, o MCA já traz embutido o multiplicador de **1,25** (**125%**) sobre o maior motor mais 100% das demais cargas, protegendo o isolamento do cabo em regime contínuo.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O multiplicador de 1,25 (125%) provê a margem de segurança contra a deterioração do isolamento THHN de cobre.',
      },
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E olha a fragilidade oculta das máquinas inverter: enquanto a força chaveia centenas de volts, a placa lógica opera em **3,3V**, **5V** e **12V**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Enquanto a potência chaveada mede-se em centenas de volts, a placa controladora opera sob lógica digital microprocessada de 3,3V, 5V e 12V.',
      },
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Por isso o aterramento sujo mata placas! A diferença de tensão entre **Neutro e Terra (N-PE)** deve ser inferior a **0,5V** AC (de **0,0V a 0,5V** AC). Acima de **1,5V** AC já indica loops de terra severos!',
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Diferença Neutro-Terra (N-PE) 0,0V a 0,5V AC < 1,5V AC',
        },
        {
          campo: 'infobox_campo',
          trecho: 'O valor deve ser inferior a 0,5V AC. Leituras acima de 1,5V indicam loops de terra severos',
        },
      ],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Se o deslocamento de potencial no barramento RS-485 sair da janela de **-7V a +12V**, os transceptores das placas entram em colapso por *latch-up* e queimam na hora!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Se essa tensão exceder a janela de -7V a +12V, os transceptores das placas sofrem colapso por "latch-up", queimando e interrompendo a comunicação predial.',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Em redes trifásicas que alimentam compressores e inversores: o que um desequilíbrio de tensão de apenas 1% provoca na corrente elétrica e quando reatores de linha são obrigatórios?',
      opcoes: [
        {
          id: 'a',
          texto: '1% de desequilíbrio de tensão gera apenas 1% de desequilíbrio de corrente, sem afetar o inversor.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Errado! Nos semicondutores e motores, a assimetria de corrente se multiplica de 6 a 10 vezes!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Apenas 1% de desequilíbrio de tensão gera de 6% a 10% de desequilíbrio de corrente; acima de 3% exige reatores de linha (AC reactors) ou anula a garantia.',
          ideal: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Um desequilíbrio de tensão na rede de apenas 1% causa um desequilíbrio de corrente de 6% a 10% nos semicondutores. Limites acima de 3% de desequilíbrio exigem a instalação de reatores de linha (AC reactors) em série antes do inversor.',
          },
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Cravado! **1%** na tensão vira **6% a 10%** na corrente! O ideal é abaixo de **1,0%** e o teto absoluto é **3,0%**.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'Um desequilíbrio de tensão na rede de apenas 1% causa um desequilíbrio de corrente de 6% a 10% nos semicondutores.',
                },
                {
                  campo: 'tabelas_html',
                  trecho: 'Desequilíbrio de Tensão Trifásica < 1,0% Máximo 3,0%',
                },
              ],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Pode operar com até 15% de desequilíbrio porque o inverter compensa sozinho.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Com uma assimetria dessas os diodos da ponte retificadora e os capacitores do barramento DC explodem!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'bia',
      texto: 'E na hora de escolher o DR (Dispositivo Diferencial Residual): sistemas inverter usam retificadores e PWM de alta frequência que podem cegar um DR comum Tipo AC!',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Por isso fabricantes de elite exigem **DR Tipo F ou Tipo B** (sensíveis a correntes residuais contínuas alisadas e alta frequência) para não desarmar à toa nem travar magnético!',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Caramba, então colocar um DR residencial comum num VRF comercial é pedir pra ter desarme fantasma ou ficar sem proteção nenhuma!',
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e o “Terra no Neutro”',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Numa loja antiga sem fio terra no eletroduto, o Zé fez uma ponte ligando o borne PE da condensadora inverter direto no Neutro lá na máquina.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Com as correntes harmônicas do neutro retornando pela carcaça, a tensão N-PE passou longe do limite de **1,5V** AC e invadiu a malha de comunicação!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'O valor deve ser inferior a 0,5V AC. Leituras acima de 1,5V indicam loops de terra severos',
          },
        },
        {
          quem: 'simon',
          texto: 'Assim que o potencial passou da janela de **-7V a +12V**, queimou os transceptores RS-485 da condensadora e de seis evaporadoras de uma vez só!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Se essa tensão exceder a janela de -7V a +12V, os transceptores das placas sofrem colapso por "latch-up", queimando e interrompendo a comunicação predial.',
          },
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Pode-se medir a tensão de saída PWM (pós-inversor U, V, W para o compressor) com um multímetro barato comum sem True-RMS.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          texto: 'Mito! A onda PWM chaveada pelo módulo IGBT é não-senoidal de alta frequência. Apenas multímetros **True-RMS** com filtro passa-baixa (*Low-Pass Filter* / VFD mode) leem o valor eficaz real.',
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Uma leitura de tensão entre Neutro e Terra (N-PE) entre 0,0V a 0,5V AC indica aterramento limpo dentro do padrão ideal.',
      verdade: true,
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Diferença Neutro-Terra (N-PE) 0,0V a 0,5V AC < 1,5V AC',
      },
      explicacao: [
        {
          quem: 'simon',
          texto: 'Verdade! **0,0V a 0,5V** AC é o patamar ideal; nunca permita que ultrapasse **1,5V** AC para proteger a lógica de **3,3V**, **5V** e **12V**.',
          fonte: [
            {
              campo: 'tabelas_html',
              trecho: 'Diferença Neutro-Terra (N-PE) 0,0V a 0,5V AC < 1,5V AC',
            },
            {
              campo: 'conteudo_html',
              trecho: 'a placa controladora opera sob lógica digital microprocessada de 3,3V, 5V e 12V.',
            },
          ],
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Antes de encostar em qualquer componente da placa inversora de uma condensadora após desligar e bloquear o disjuntor (LOTO), qual etapa é obrigatória devido aos capacitores eletrolíticos do barramento DC (DC Bus)?',
      opcoes: [
        {
          id: 'a',
          texto: 'Aguardar o tempo de descarga dos capacitores e medir com o multímetro na escala DC se a tensão do barramento caiu a zero.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Exato! Os capacitores do barramento DC armazenam centenas de volts contínuos letais mesmo após desligar a rede AC. Sempre confira tensão zero DC!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Descarregar os capacitores encostando uma chave de fenda nos terminais da placa.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Jamais! Curto-circuitar o barramento DC com chave de fenda explode trilhas da placa e causa arco elétrico grave!',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora Elétrica — Limite Ideal de Tensão Neutro-Terra (N-PE)',
      formula: 'Faixa Ideal N-PE = 0,0V a 0,5V AC (Teto absoluto < 1,5V AC)',
      enunciado: 'Com o sistema em carga, você mede a diferença de tensão AC entre **Neutro e Terra (N-PE)** no quadro da condensadora. Pela tabela e pelo alerta de campo da aula, o valor ideal deve ser inferior a qual limite em **V** AC (acima de **1,5V** já indica loop severo)?',
      leituras: [
        { rotulo: 'Faixa Ideal N-PE', valor: '0,0V a 0,5V AC' },
        { rotulo: 'Alerta de Loop Severo', valor: '> 1,5V AC' },
        { rotulo: 'Lógica da Placa', valor: '3,3V, 5V e 12V' },
      ],
      unidade: 'V',
      respostaCorreta: 0.5,
      tolerancia: 0.05,
      opcoesRapidas: [0.5, 1.5, 3.3, 5.0],
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Diferença Neutro-Terra (N-PE) 0,0V a 0,5V AC < 1,5V AC',
        },
        {
          campo: 'infobox_campo',
          trecho: 'O valor deve ser inferior a 0,5V AC. Leituras acima de 1,5V indicam loops de terra severos',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Enquanto a potência chaveada mede-se em centenas de volts, a placa controladora opera sob lógica digital microprocessada de 3,3V, 5V e 12V.',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Perfeito! Abaixo de **0,5V** AC (**0,0V a 0,5V** AC) garante referência limpa para os microprocessadores.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Diferença Neutro-Terra (N-PE) 0,0V a 0,5V AC < 1,5V AC',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Atenção: **1,5V** AC é o teto máximo onde já há loop severo; o limite superior da faixa ideal é **0,5V** AC (**0,0V a 0,5V** AC).',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Diferença Neutro-Terra (N-PE) 0,0V a 0,5V AC < 1,5V AC',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção Elétrica — Alimentação, Aterramento e Simetria',
      enunciado: 'Observe o slide de Segurança Elétrica e Aterramento da Aula 04-01 e aponte a instalação que protege as placas inversoras:',
      imagem: '/images/academia/hvac-instalacao/modulo04/modulo04-01/Modulo-04-01-Advanced HVAC Power Safety Grounding-01.jpg',
      legendaImagem: 'Módulo 04-01 — Dimensionamento MCA/MOCP, Aterramento e Simetria Trifásica',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Cabo dimensionado pelo MCA (fator 1,25), proteção pelo MOCP, tensão N-PE até 0,5V AC e desequilíbrio trifásico menor que 1,0%.',
          correta: true,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'O multiplicador de 1,25 (125%) provê a margem de segurança contra a deterioração do isolamento THHN de cobre.',
            },
            {
              campo: 'tabelas_html',
              trecho: 'Diferença Neutro-Terra (N-PE) 0,0V a 0,5V AC < 1,5V AC',
            },
            {
              campo: 'tabelas_html',
              trecho: 'Desequilíbrio de Tensão Trifásica < 1,0% Máximo 3,0%',
            },
          ],
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Padrão ouro! Com N-PE até **0,5V** AC e desequilíbrio abaixo de **1,0%**, o módulo IGBT e os transceptores trabalham blindados.',
              fonte: [
                {
                  campo: 'tabelas_html',
                  trecho: 'Diferença Neutro-Terra (N-PE) 0,0V a 0,5V AC < 1,5V AC',
                },
                {
                  campo: 'tabelas_html',
                  trecho: 'Desequilíbrio de Tensão Trifásica < 1,0% Máximo 3,0%',
                },
              ],
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Neutro aterrado na carcaça (N-PE acima de 1,5V AC) e rede trifásica com mais de 3,0% de desequilíbrio sem reator de linha.',
          correta: false,
          fonte: [
            {
              campo: 'infobox_campo',
              trecho: 'O valor deve ser inferior a 0,5V AC. Leituras acima de 1,5V indicam loops de terra severos',
            },
            {
              campo: 'tabelas_html',
              trecho: 'Desequilíbrio de Tensão Trifásica < 1,0% Máximo 3,0%',
            },
          ],
          feedback: [
            {
              quem: 'bia',
              texto: 'Isso provoca *latch-up* nas placas e sobrecorrente de **6% a 10%** para cada **1%** de desequilíbrio!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Um desequilíbrio de tensão na rede de apenas 1% causa um desequilíbrio de corrente de 6% a 10% nos semicondutores.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'A Placa Não Queima “Do Nada”',
      falas: [
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Todo mundo já ouviu alguém dizer que “essa marca queima placa do nada”. Placa eletrônica de **3,3V** e **5V** não tem vontade própria, Ju — ela queima quando o aterramento e a simetria da rede foram ignorados.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Enquanto a potência chaveada mede-se em centenas de volts, a placa controladora opera sob lógica digital microprocessada de 3,3V, 5V e 12V.',
          },
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Quem mede **N-PE** abaixo de **0,5V** AC e desequilíbrio abaixo de **1,0%** antes de dar partida nunca precisa inventar desculpa de “surto da concessionária”.',
          fonte: [
            {
              campo: 'tabelas_html',
              trecho: 'Diferença Neutro-Terra (N-PE) 0,0V a 0,5V AC < 1,5V AC',
            },
            {
              campo: 'tabelas_html',
              trecho: 'Desequilíbrio de Tensão Trifásica < 1,0% Máximo 3,0%',
            },
          ],
        },
      ],
      principio: 'Eletrônica de precisão exige fundação elétrica limpa: meça N-PE e desequilíbrio trifásico antes de energizar.',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte os limites de **Tensão N-PE** (**0,0V a 0,5V** AC) e **Desequilíbrio Trifásico** (**< 1,0%**) na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Diferença Neutro-Terra (N-PE) 0,0V a 0,5V AC < 1,5V AC',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Desequilíbrio de Tensão Trifásica < 1,0% Máximo 3,0%',
        },
      ],
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**MCA vs. MOCP:** bitola do cabo pelo **MCA** (inclui fator **1,25** / **125%**) e disjuntor/fusível pelo **MOCP**.',
        '**Aterramento Limpo:** tensão **Neutro-Terra (N-PE)** ideal de **0,0V a 0,5V** AC (máximo **1,5V** AC) para proteger a lógica de **3,3V**, **5V** e **12V** e a janela RS-485 de **-7V a +12V**.',
        '**Simetria Trifásica:** **1%** de desequilíbrio de tensão gera **6% a 10%** na corrente; mantenha abaixo de **1,0%** (máximo **3,0%**).',
      ],
      proxima: 'Na Aula 04-02 vamos dominar a física das Terminações de Cabos, Fluência a Frio (Cold Flow), Crimpagem com Catraca e Termografia.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'O multiplicador de 1,25 (125%) provê a margem de segurança contra a deterioração do isolamento THHN de cobre.',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Diferença Neutro-Terra (N-PE) 0,0V a 0,5V AC < 1,5V AC',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Enquanto a potência chaveada mede-se em centenas de volts, a placa controladora opera sob lógica digital microprocessada de 3,3V, 5V e 12V.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Se essa tensão exceder a janela de -7V a +12V, os transceptores das placas sofrem colapso por "latch-up", queimando e interrompendo a comunicação predial.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Um desequilíbrio de tensão na rede de apenas 1% causa um desequilíbrio de corrente de 6% a 10% nos semicondutores.',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Desequilíbrio de Tensão Trifásica < 1,0% Máximo 3,0%',
        },
      ],
    },
  ],
};
