// src/data/conversas/instalacao-hvac/03-02.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 03-02
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '03-02',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'bancada-oficina',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Sexta, 7h30. Bancada de solda. Simon segura dois pedaços de tubo de cobre serrados ao meio: um brilhando como espelho por dentro e outro coberto de casca preta descascando.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'espantado',
      texto: 'Nossa, Simon! Por fora as duas soldas pareciam iguais, mas por dentro esse segundo tubo tá cheio de uma crosta preta soltando farelo! O que é isso?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Isso aí é **óxido cúprico (CuO)** — a fuligem de quem faz brasagem sem purgar nitrogênio! Na engenharia moderna, soldar cobre sem nitrogênio é sabotagem mecânica.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Brazar tubulações de cobre sem circular nitrogênio é um ato latente de sabotagem mecânica.',
      },
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Durante a brasagem, o cobre é aquecido entre **590°C a 815°C** (**1100°F a 1500°F**). Nesse calor, os **21%** de oxigênio do ar reagem com o cobre formando essa casca preta quebradiça de CuO!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Durante o processo de brasagem, o cobre é aquecido a temperaturas extremas, variando de 590°C a 815°C (1100°F a 1500°F), para que a liga de brasagem de prata (como a liga StaySilv 15) atinja fluidez ideal por capilaridade.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Nesse patamar de calor, o oxigênio atmosférico (21% no ar) no interior da tubulação não purgada reage violentamente com a superfície do metal.',
        },
      ],
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'No tempo do R-22 com óleo mineral apolar, essa fuligem ficava quieta no fundo do cano. Mas os óleos **POE** e **PVE** são altamente polares: agem como detergente e arrancam toda a crosta pra circular!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'os óleos sintéticos Polioléster (POE) e Polivinil Éter (PVE) possuem uma estrutura molecular altamente polar. Esta polaridade atua como um solvente de limpeza ativo de alta afinidade química pelas superfícies metálicas.',
      },
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'E onde essa lama abrasiva vai parar? Na **EEV**, que trabalha de 480 a 2000 micro-passos com folgas na casa de micrômetros! Trava a agulha aberta ou fechada, entope telas e catalisa ácido no POE.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A resolução dessas válvulas varia de 480 a 2000 micro-passos do fechamento total à abertura total.',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Ao regular o fluxômetro de nitrogênio seco (OFDN) para a brasagem limpa: qual é a vazão exata durante a solda e o que acontece se você abrir pressão demais?',
      opcoes: [
        {
          id: 'a',
          texto: 'Abrir jato forte direto do regulador sem fluxômetro para soprar com alta velocidade.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Se soprar forte, você resfria o cobre por convecção e a pressão interna expulsa a prata derretida, abrindo poros (*pinholes*) na solda!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Manter fluxo estrito de 2 a 5 SCFH (1,5 a 2,0 PSI) até o cobre esfriar ao toque.',
          ideal: true,
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Mantenha o fluxo estritamente entre 2 a 5 SCFH (1,5 a 2,0 PSI) durante o aquecimento.',
          },
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Na mosca! O fluxo de **2 a 5 SCFH** (**1,5 a 2,0 PSI**) é apenas um sussurro contínuo que expulsa os **21%** de oxigênio sem esfriar a junta nem soprar a prata!',
              fonte: [
                {
                  campo: 'infobox_campo',
                  trecho: 'Mantenha o fluxo estritamente entre 2 a 5 SCFH (1,5 a 2,0 PSI) durante o aquecimento.',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Nesse patamar de calor, o oxigênio atmosférico (21% no ar) no interior da tubulação não purgada reage violentamente com a superfície do metal.',
                },
              ],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Fechar o nitrogênio assim que tirar a chama do maçarico, com o tubo ainda vermelho.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Se cortar o nitrogênio com o cobre quente, o ar entra imediatamente e oxida tudo no resfriamento!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E pra ninguém esquecer na bancada: ao unir cobre com cobre usamos liga Foscoper (**15%** de prata, como StaySilv 15) **sem fluxo**, porque o fósforo já é desoxidante!',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Mas se for **cobre com latão** ou **cobre com aço** (como em válvulas de serviço e distribuidores), aí é obrigatório usar vareta de prata (30% a 45%) **com fluxo branco**, limpando todo resíduo depois.',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'E nunca encoste chama perto de uma EEV ou válvula de 4 vias sem envolver o corpo com pano molhado ou pasta dissipadora térmica! O interior nunca pode passar do limite térmico dos vedantes.',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E antes de acender o maçarico, eu limpo o tubo com lixa de ferro ou com esponja abrasiva sem metal?',
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e a Auditoria de Corte de 5% no VRF',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num hospital, o Zé tentou economizar gás e brasou um andar inteiro de VRF com a mangueira de nitrogênio só pendurada na válvula — cilindro fechado, só pra inglês ver!',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'O engenheiro fiscal aplicou o protocolo de auditoria de missão crítica: mandou cortar aleatoriamente **5%** das juntas prontas no meio para inspeção longitudinal destrutiva!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'as equipes fiscalizadoras realizam cortes aleatórios (tipicamente até 5%) de juntas prontas para inspeção longitudinal destrutiva.',
          },
        },
        {
          quem: 'simon',
          texto: 'Quando serraram a primeira curva e saiu carvão preto na mão do fiscal, condenaram a rede inteira! O Zé teve que arrancar centenas de metros de cobre às próprias custas.',
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Jogar água fria com pano encharcado diretamente sobre a solda ainda incandescente acelera o serviço e melhora a resistência da junta.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          texto: 'Mito! O choque térmico brusco (*quenching*) causa contração diferencial violenta e microfissuras na liga de prata. Deixe esfriar com o nitrogênio fluindo a **2 a 5 SCFH**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O fluxo ideal de 2 a 5 SCFH gera apenas um leve sopro positivo contínuo que impede a entrada de oxigênio sem esfriar a junta.',
          },
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'No óleo PVE, a fuligem de óxido cúprico e a umidade ficam retidas pela alta tensão superficial, dificultando a evacuação até 500 microns.',
      verdade: true,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'impedindo a sua eliminação completa durante a desidratação por vácuo e retardando o alcance do patamar de 500 microns.',
      },
      explicacao: [
        {
          quem: 'simon',
          texto: 'Verdade! Mesmo sem sofrer hidrólise ácida como o POE, o PVE arranca a fuligem da parede e segura a umidade, atrasando o vácuo de **500 microns**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'impedindo a sua eliminação completa durante a desidratação por vácuo e retardando o alcance do patamar de 500 microns.',
          },
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Por que a liga de prata flui para dentro do espaço microscópico entre o tubo macho e a bolsa fêmea mesmo quando soldamos de baixo para cima?',
      opcoes: [
        {
          id: 'a',
          texto: 'Por Capilaridade e Atração Térmica: o metal de adição fundido é atraído para a zona mais quente (a base da bolsa aquecida uniformemente).',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! A prata segue o calor por capilaridade entre **590°C a 815°C**: aqueça o tubo e depois a bolsa para puxar a liga até o fundo!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Durante o processo de brasagem, o cobre é aquecido a temperaturas extremas, variando de 590°C a 815°C (1100°F a 1500°F), para que a liga de brasagem de prata (como a liga StaySilv 15) atinja fluidez ideal por capilaridade.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Porque o maçarico empurra a vareta derretida na marra sem aquecer o tubo.',
          feedback: [
            {
              quem: 'simon',
              texto: 'Derreter a vareta na chama com o tubo frio só cria uma bola superficial colada que vaza no teste de **500 PSI**!',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'Pressurização estática a 500 PSI com Nitrogênio por 24 horas.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora de Fluxômetro — Teto de Vazão de Purga Contínua (SCFH)',
      formula: 'Faixa Ideal de Brasagem = 2 a 5 SCFH (1,5 a 2,0 PSI)',
      enunciado: 'Você já fez o expurgo inicial da linha e agora vai posicionar o pino do fluxômetro na faixa de brasagem ativa (**1,5 a 2,0 PSI**). Qual é o limite **máximo** dessa faixa estrita de vazão contínua em **SCFH**?',
      leituras: [
        { rotulo: 'Vazão Mínima Contínua', valor: '2 SCFH' },
        { rotulo: 'Pressão Equivalente', valor: '1,5 a 2,0 PSI' },
        { rotulo: 'Teor de O₂ Deslocado', valor: '21% no ar' },
      ],
      unidade: 'SCFH',
      respostaCorreta: 5,
      tolerancia: 0,
      opcoesRapidas: [2, 5, 15, 21],
      fonte: [
        {
          campo: 'infobox_campo',
          trecho: 'Mantenha o fluxo estritamente entre 2 a 5 SCFH (1,5 a 2,0 PSI) durante o aquecimento.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Nesse patamar de calor, o oxigênio atmosférico (21% no ar) no interior da tubulação não purgada reage violentamente com a superfície do metal.',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Cravado! Entre **2 a 5 SCFH** (**1,5 a 2,0 PSI**) você mantém atmosfera inerte perfeita sem soprar a prata para fora da bolsa.',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Mantenha o fluxo estritamente entre 2 a 5 SCFH (1,5 a 2,0 PSI) durante o aquecimento.',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Olhe na régua do fluxômetro: a faixa estrita durante o aquecimento é de **2 a 5 SCFH** (**1,5 a 2,0 PSI**); o teto é **5 SCFH**.',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Mantenha o fluxo estritamente entre 2 a 5 SCFH (1,5 a 2,0 PSI) durante o aquecimento.',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Brasagem — Atmosfera Inerte de Nitrogênio',
      enunciado: 'Observe o slide da Masterclass de Brasagem com Nitrogênio e aponte o procedimento que garante interior espelhado livre de CuO:',
      imagem: '/images/academia/hvac-instalacao/modulo03/modulo03-02/Module03-02-Nitrogen Brazing Masterclass for HVAC-01.jpg',
      legendaImagem: 'Módulo 03-02 — Protocolo de Brasagem Limpa com Nitrogênio Seco',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Expurgo inicial do ar seguido de fluxo contínuo de 2 a 5 SCFH de nitrogênio seco até o resfriamento natural da junta.',
          correta: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O fluxo ideal de 2 a 5 SCFH gera apenas um leve sopro positivo contínuo que impede a entrada de oxigênio sem esfriar a junta.',
          },
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Padrão cirúrgico! Com **2 a 5 SCFH** até esfriar, o tubo sai espelhado por dentro e passa em qualquer auditoria de corte de **5%**!',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'O fluxo ideal de 2 a 5 SCFH gera apenas um leve sopro positivo contínuo',
                },
                {
                  campo: 'infobox_campo',
                  trecho: 'cortes aleatórios (tipicamente até 5%) de juntas prontas',
                },
              ],
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Aquecer o cobre a 815°C com ar atmosférico (21% de oxigênio) dentro do tubo e limpar só por fora com lixa.',
          correta: false,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'variando de 590°C a 815°C (1100°F a 1500°F)',
            },
            {
              campo: 'conteudo_html',
              trecho: 'oxigênio atmosférico (21% no ar)',
            },
          ],
          feedback: [
            {
              quem: 'simon',
              texto: 'Lixar por fora é maquiagem: por dentro a casca de CuO vai virar lodo no óleo POE e travar a EEV!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Integridade é o que Fica Dentro do Cano Fechado',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Sabe por que a brasagem com nitrogênio é a maior prova de caráter da nossa profissão, Ju? Porque depois que a solda fecha, ninguém lá fora enxerga o que ficou dentro do tubo.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'O amador lixa por fora pra enganar o olho do cliente. O profissional de elite purga por dentro a **2 a 5 SCFH** porque deve satisfação à própria consciência e à física.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O fluxo ideal de 2 a 5 SCFH gera apenas um leve sopro positivo contínuo que impede a entrada de oxigênio sem esfriar a junta.',
          },
        },
      ],
      principio: 'Caráter técnico é fazer por dentro do tubo fechado o mesmo capricho que todo mundo vê por fora.',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte os parâmetros do protocolo de purga e o ensaio estático a **500 PSI** por **24** horas na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Pressurização estática a 500 PSI com Nitrogênio por 24 horas.',
      },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Zero Óxido Cúprico (CuO):** entre **590°C a 815°C**, os **21%** de O₂ do ar criam fuligem que o óleo POE/PVE arranca e joga nas EEVs.',
        '**Sussurro de Nitrogênio:** expurgo inicial e fluxo estrito de **2 a 5 SCFH** (**1,5 a 2,0 PSI**) mantido até o resfriamento ao toque.',
        '**Proteção Térmica e Auditoria:** proteja válvulas com pasta/pano úmido e solde cada junta como se ela fosse passar no corte destrutivo de **5%**.',
      ],
      proxima: 'Na Aula 03-03 vamos fechar o Módulo 3 blindando a tubulação com Isolamento Térmico, Barreira de Vapor e controle de temperatura de descarga.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Durante o processo de brasagem, o cobre é aquecido a temperaturas extremas, variando de 590°C a 815°C (1100°F a 1500°F)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Nesse patamar de calor, o oxigênio atmosférico (21% no ar) no interior da tubulação não purgada reage violentamente com a superfície do metal.',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Mantenha o fluxo estritamente entre 2 a 5 SCFH (1,5 a 2,0 PSI) durante o aquecimento.',
        },
        {
          campo: 'infobox_campo',
          trecho: 'as equipes fiscalizadoras realizam cortes aleatórios (tipicamente até 5%) de juntas prontas para inspeção longitudinal destrutiva.',
        },
      ],
    },
  ],
};
