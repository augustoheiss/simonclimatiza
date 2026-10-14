// src/data/conversas/instalacao-hvac/05-02.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 05-02
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '05-02',
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
      texto: 'Segunda, 7h30. Corredor principal da obra VRF. Simon segura uma derivação em Y de cobre (Refnet) e um nível de bolha magnético diante do projeto no tablet.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, por que essa peça em Y do VRF chama **Refnet** e custa tão caro? Não dava pra soldar um “T” comum de cobre de hidráulica ali?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Se você soldar um “T” comum num VRF, você mata o sistema na primeira semana, Ju! Na linha do VRF corre um fluxo bifásico (líquido + vapor) junto com **0,5% a 1%** de óleo em massa!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Durante o funcionamento, uma porcentagem do óleo do cárter (0,5% a 1% da massa) é arrastada com o refrigerante.',
      },
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'O **Refnet** tem geometria interna cônica projetada para dividir igualmente o líquido denso, o vapor e a película de óleo. Mas, para funcionar, ele exige nivelamento rigoroso!',
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Grave essa tolerância no sangue: quando montado na horizontal, o Refnet **nunca pode inclinar mais de ±15°** em relação ao plano horizontal da edificação (ou deve ficar 100% na vertical)!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'nunca inclinar mais de ±15° em relação ao plano horizontal da edificação.',
      },
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Se você inclinar o Refnet de lado, a gravidade joga todo o líquido pesado e o óleo para a perna de baixo (afogando aquelas evaporadoras) e manda só vapor seco para a perna de cima!',
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Para evitar que a força centrífuga (Vórtices de Dean) jogue o líquido contra um lado só da parede antes da divisão no Refnet, qual é a regra de trecho reto obrigatório?',
      opcoes: [
        {
          id: 'a',
          texto: 'Pode soldar uma curva de 90° colada direto na boca de entrada do Refnet.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Curva a menos de **500 mm** antes do Refnet centrifuga o líquido para a parede externa da curva e desregula toda a divisão!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Curvas ou reduções a menos de 500 mm (20 polegadas) antes ou depois do Refnet jogam o líquido contra as paredes do tubo por força centrífuga, desregulando a divisão.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Manter no mínimo 500 mm (20 polegadas) retos antes e depois do Refnet, e no mínimo 1000 mm (40 polegadas) retos entre dois Refnets em sequência.',
          ideal: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'É mandatório manter 500 mm retos antes e depois. Entre dois Refnets instalados em sequência, o trecho retilíneo mínimo deve ser de 1000 mm (40 polegadas) para dissipar turbulências.',
          },
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! **500 mm** retos antes/depois de cada Refnet e **1000 mm** entre dois Refnets consecutivos acalmam os Vórtices de Dean antes da bifurcação!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'É mandatório manter 500 mm retos antes e depois. Entre dois Refnets instalados em sequência, o trecho retilíneo mínimo deve ser de 1000 mm (40 polegadas) para dissipar turbulências.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Basta um trecho curtinho se o tubo de cobre for fino.',
          reacao: [
            {
              quem: 'bia',
              texto: 'Em qualquer bitola de VRF, o mínimo reto antes/depois é **500 mm** (20 polegadas)!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Curvas ou reduções a menos de 500 mm (20 polegadas) antes ou depois do Refnet jogam o líquido contra as paredes do tubo por força centrífuga, desregulando a divisão.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E em sistemas VRF de **Recuperação de Calor** (*Heat Recovery* de 3 tubos), onde uma sala gela enquanto a sala vizinha aquece ao mesmo tempo, entra a **Caixa Branch Selector (BS)**!',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Para evitar que o refrigerante ferva em *flash gas* ao passar pelas válvulas solenoides, a caixa BS integra um trocador de placas brasadas de subresfriamento que resfria o fluxo principal abaixo de **26°C**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'a BS box integra um trocador de placas brasadas de subresfriamento que resfria o fluxo principal abaixo de 26°C.',
      },
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Outro segredo de ouro em prédios altos: a cada 10 metros de subida vertical na linha de líquido, a pressão hidrostática cai e pode formar *flash gas* antes das evaporadoras do topo — por isso o software OEM dimensiona o subresfriamento e as bitolas milimetricamente!',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, e se no meio da obra mudar a posição de uma parede e o tubo ficar 5 metros mais longo? Posso mudar a bitola por minha conta?',
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e o Refnet a 45 Graus',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Pra desviar de um duto de incêndio no forro sem fazer curva longe, o Zé soldou o Refnet principal inclinado a 45 graus e ainda colou uma curva 90° a um palmo da entrada!',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Violou os **±15°** de nivelamento e os **500 mm** de trecho reto! O líquido e os **0,5% a 1%** de óleo escorreram todos para a ala sul, enquanto a ala norte só recebia vapor e apitava erro de superaquecimento!',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'nunca inclinar mais de ±15° em relação ao plano horizontal da edificação.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'É mandatório manter 500 mm retos antes e depois.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Durante o funcionamento, uma porcentagem do óleo do cárter (0,5% a 1% da massa) é arrastada com o refrigerante.',
            },
          ],
        },
        {
          quem: 'simon',
          texto: 'Tivemos que recolher o gás, cortar o trecho inteiro, nivelar o Refnet no nível de bolha com **500 mm** retos e refazer o teste de estanqueidade a **550 PSI** por **24** horas!',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'É mandatório manter 500 mm retos antes e depois.',
            },
            {
              campo: 'infobox_campo',
              trecho: 'as linhas brasadas devem passar por teste de estanqueidade pressurizadas com nitrogênio a 550 PSI por pelo menos 24 horas.',
            },
          ],
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'O instalador pode alterar comprimentos de ramais e bitolas de uma rede VRF livremente na obra sem recalcular a árvore no software oficial do fabricante (VRV Xpress / LATS / Design Tool).',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          texto: 'Mito! Qualquer alteração de comprimento ou ordem de Refnets altera as quedas de pressão, as bitolas das luvas redutoras e o cálculo da carga adicional de refrigerante no software OEM.',
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'No teste de estanqueidade de linhas VRF a 550 PSI por 24 horas, cada 1°C de variação na temperatura ambiente altera a leitura do manômetro em aproximadamente 1.47 PSI.',
      verdade: true,
      fonte: {
        campo: 'infobox_campo',
        trecho: 'as linhas brasadas devem passar por teste de estanqueidade pressurizadas com nitrogênio a 550 PSI por pelo menos 24 horas. Corrija as medições de variação térmica ambiente no manômetro (1°C altera aproximadamente 1.47 PSI) para evitar leituras de falso vazamento.',
      },
      explicacao: [
        {
          quem: 'simon',
          texto: 'Verdade! A **550 PSI** por **24** horas, **1°C** altera cerca de **1.47 PSI** por Gay-Lussac — anote sempre a temperatura inicial e final do ensaio!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'as linhas brasadas devem passar por teste de estanqueidade pressurizadas com nitrogênio a 550 PSI por pelo menos 24 horas. Corrija as medições de variação térmica ambiente no manômetro (1°C altera aproximadamente 1.47 PSI) para evitar leituras de falso vazamento.',
          },
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Por que os compressores VRF executam periodicamente o Ciclo Automático de Retorno de Óleo (Oil Recovery Mode), acelerando a vazão e abrindo as EEVs por alguns minutos?',
      opcoes: [
        {
          id: 'a',
          texto: 'Porque em baixa rotação parcial (inverter modulando baixo), a velocidade do gás cai nas linhas longas e os 0,5% a 1% de óleo arrastados precisam de um pulso de alta velocidade para voltar ao cárter.',
          correta: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Durante o funcionamento, uma porcentagem do óleo do cárter (0,5% a 1% da massa) é arrastada com o refrigerante.',
          },
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! O modo de recuperação de óleo varre a tubulação periodicamente para devolver os **0,5% a 1%** de óleo circulante ao cárter dos compressores!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Durante o funcionamento, uma porcentagem do óleo do cárter (0,5% a 1% da massa) é arrastada com o refrigerante.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Porque a placa eletrônica deu defeito e perdeu a programação.',
          feedback: [
            {
              quem: 'simon',
              texto: 'Nunca desligue o disjuntor durante o *Oil Recovery Mode*: é a rotina vital de sobrevivência do compressor!',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora de Traçado VRF — Distância Reta Mínima Entre Dois Refnets',
      formula: 'Antes/Depois de 1 Refnet ≥ 500 mm | Entre 2 Refnets ≥ 1000 mm',
      enunciado: 'No corredor principal, o projeto exige instalar dois **Refnets** em sequência no tronco de líquido e gás. Sabendo que um único Refnet pede **500 mm** retos, qual é o trecho retilíneo mínimo obrigatório em **mm** **entre dois Refnets consecutivos** (40 polegadas)?',
      leituras: [
        { rotulo: 'Trecho Reto (1 Refnet)', valor: '500 mm (20")' },
        { rotulo: 'Entre 2 Refnets (pol)', valor: '40 polegadas' },
        { rotulo: 'Subresfriamento Caixa BS', valor: '< 26°C' },
      ],
      unidade: 'mm',
      respostaCorreta: 1000,
      tolerancia: 1,
      opcoesRapidas: [250, 500, 1000, 1500],
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Curvas ou reduções a menos de 500 mm (20 polegadas) antes ou depois do Refnet jogam o líquido contra as paredes do tubo por força centrífuga, desregulando a divisão. É mandatório manter 500 mm retos antes e depois. Entre dois Refnets instalados em sequência, o trecho retilíneo mínimo deve ser de 1000 mm (40 polegadas) para dissipar turbulências.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'a BS box integra um trocador de placas brasadas de subresfriamento que resfria o fluxo principal abaixo de 26°C.',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Perfeito! **1000 mm** (1 metro / 40 polegadas) retos entre dois Refnets dissipam totalmente a turbulência da primeira bifurcação antes de entrar na segunda.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Entre dois Refnets instalados em sequência, o trecho retilíneo mínimo deve ser de 1000 mm (40 polegadas) para dissipar turbulências.',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Atenção: **500 mm** é antes/depois de um Refnet isolado; **entre dois Refnets em sequência**, o mínimo dobra para **1000 mm** (40 polegadas).',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'É mandatório manter 500 mm retos antes e depois. Entre dois Refnets instalados em sequência, o trecho retilíneo mínimo deve ser de 1000 mm (40 polegadas) para dissipar turbulências.',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Rede VRF — Geometria de Refnets e Estanqueidade',
      enunciado: 'Observe o slide da Masterclass de Tubulação VRF e aponte a montagem que garante distribuição bifásica equilibrada:',
      imagem: '/images/academia/hvac-instalacao/modulo05/modulo05-02/Modulo-05-02-VRF Piping Masterclass_ Fluid Dynamics-01.jpg',
      legendaImagem: 'Módulo 05-02 — Dinâmica dos Fluidos em VRF, Refnets e Caixas BS',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Refnets nivelados dentro de ±15° (ou verticais), com 500 mm retos antes/depois, 1000 mm entre Refnets e ensaio a 550 PSI por 24h.',
          correta: true,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'nunca inclinar mais de ±15° em relação ao plano horizontal da edificação.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'É mandatório manter 500 mm retos antes e depois. Entre dois Refnets instalados em sequência, o trecho retilíneo mínimo deve ser de 1000 mm (40 polegadas) para dissipar turbulências.',
            },
            {
              campo: 'infobox_campo',
              trecho: 'as linhas brasadas devem passar por teste de estanqueidade pressurizadas com nitrogênio a 550 PSI por pelo menos 24 horas.',
            },
          ],
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Engenharia VRF impecável! Divisão simétrica de líquido e óleo (**0,5% a 1%**) e rede homologada a **550 PSI**.',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'uma porcentagem do óleo do cárter (0,5% a 1% da massa) é arrastada com o refrigerante.',
                },
                {
                  campo: 'infobox_campo',
                  trecho: 'pressurizadas com nitrogênio a 550 PSI por pelo menos 24 horas.',
                },
              ],
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Refnet inclinado a 35° com cotovelo soldado colado na entrada (a menos de 500 mm).',
          correta: false,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Curvas ou reduções a menos de 500 mm (20 polegadas) antes ou depois do Refnet jogam o líquido contra as paredes do tubo por força centrífuga, desregulando a divisão.',
          },
          feedback: [
            {
              quem: 'simon',
              texto: 'Fora dos **±15°** e sem os **500 mm** retos, metade do andar afoga em líquido e a outra metade morre de fome!',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'nunca inclinar mais de ±15° em relação ao plano horizontal da edificação.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'É mandatório manter 500 mm retos antes e depois.',
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
      titulo: 'No VRF, a Gravidade e a Força Centrífuga Não Perdoam Atalhos',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Num split simples 1 pra 1, todo o gás que sai da condensadora é obrigado a passar pela única evaporadora. No VRF, você tem dezenas de caminhos disputando líquido e óleo ao mesmo tempo.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Por isso o nível de bolha no Refnet (**±15°**) e a trena marcando **500 mm** e **1000 mm** retos valem tanto quanto o maçarico. Respeitar a geometria é respeitar a dinâmica dos fluidos.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'nunca inclinar mais de ±15° em relação ao plano horizontal da edificação.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'É mandatório manter 500 mm retos antes e depois. Entre dois Refnets instalados em sequência, o trecho retilíneo mínimo deve ser de 1000 mm (40 polegadas) para dissipar turbulências.',
            },
          ],
        },
      ],
      principio: 'Em redes VRF, cada milímetro de trecho reto e cada grau de nível decidem para onde vão o óleo e a capacidade.',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte as regras geométricas de **Refnets** (**±15°**, **500 mm** e **1000 mm**) e compensação de **1.47 PSI** por **1°C** na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'nunca inclinar mais de ±15° em relação ao plano horizontal da edificação.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'É mandatório manter 500 mm retos antes e depois. Entre dois Refnets instalados em sequência, o trecho retilíneo mínimo deve ser de 1000 mm (40 polegadas) para dissipar turbulências.',
        },
        {
          campo: 'infobox_campo',
          trecho: '1°C altera aproximadamente 1.47 PSI',
        },
      ],
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Nivelamento de Refnets:** planos na horizontal (máximo **±15°**) ou verticais para dividir igualmente o líquido e os **0,5% a 1%** de óleo.',
        '**Trechos Retos Contra Vórtices de Dean:** mínimo **500 mm** retos antes/depois de cada Refnet e **1000 mm** retos entre dois Refnets em sequência.',
        '**Caixas BS e Estanqueidade:** subresfriamento interno abaixo de **26°C** nas BS boxes e ensaio a **550 PSI** por **24** horas (**1.47 PSI** por **1°C**).',
      ],
      proxima: 'Na Aula 05-03 vamos mergulhar abaixo de zero: Engenharia de Câmaras Frias, painéis PIR, barreira de vapor e proteção contra Frost Heave.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'nunca inclinar mais de ±15° em relação ao plano horizontal da edificação.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Durante o funcionamento, uma porcentagem do óleo do cárter (0,5% a 1% da massa) é arrastada com o refrigerante.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'É mandatório manter 500 mm retos antes e depois. Entre dois Refnets instalados em sequência, o trecho retilíneo mínimo deve ser de 1000 mm (40 polegadas) para dissipar turbulências.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'a BS box integra um trocador de placas brasadas de subresfriamento que resfria o fluxo principal abaixo de 26°C.',
        },
        {
          campo: 'infobox_campo',
          trecho: 'as linhas brasadas devem passar por teste de estanqueidade pressurizadas com nitrogênio a 550 PSI por pelo menos 24 horas. Corrija as medições de variação térmica ambiente no manômetro (1°C altera aproximadamente 1.47 PSI) para evitar leituras de falso vazamento.',
        },
      ],
    },
  ],
};
