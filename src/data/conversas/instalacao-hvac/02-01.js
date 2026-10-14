// src/data/conversas/instalacao-hvac/02-01.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 02-01
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '02-01',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'padaria-manha',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Segunda, 7h10. Balcão da padaria. Bia abre a planta arquitetônica de um escritório enquanto Simon toma café coado.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Bia, pra que essa planilha toda? O empreiteiro falou que é só multiplicar os metros quadrados da sala por uma continha fixa de bolso e jogar uma máquina maior pra sobrar!',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'ironico',
      texto: 'A famosa “regra de bolso” que transforma escritório em caverna úmida! Máquina grande demais é veneno, Juninho.',
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Isso é a **Patologia do Superdimensionamento**. Uma máquina exagerada derruba a temperatura rápido demais e entra em **short-cycling**, ligando e desligando a cada 3 a 5 minutos.',
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'E sabe o que esse liga-desliga faz? Na partida fixa a corrente bate no LRA (6 a 10 vezes a nominal), o óleo é arremessado no *flashing* e a máquina desliga antes do óleo voltar pro cárter!',
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Quando um sistema superdimensionado desliga precocemente em poucos minutos sem manter a serpentina abaixo do ponto de orvalho, o que acontece com a umidade relativa do ambiente?',
      opcoes: [
        {
          id: 'a',
          texto: 'Cai para zero e deixa o ar seco demais.',
          reacao: [
            {
              quem: 'bia',
              texto: 'Pelo contrário! Sem tempo de condensação nas aletas, a água continua toda suspensa no ar.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Permanece acima de 60%, gerando sensação de “frio e úmido”, odores e proliferação de fungos e bolor.',
          ideal: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Se o compressor desliga precocemente devido ao excesso de capacidade sensível, a umidade relativa do ambiente permanecerá acima de 60%, causando desconforto térmico, odores desagradáveis e proliferação de agentes patológicos como fungos e bolor.',
          },
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Na mosca! Com umidade acima de **60%**, a sala fica com cheiro de mofo mesmo com o termômetro marcando frio.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'a umidade relativa do ambiente permanecerá acima de 60%, causando desconforto térmico, odores desagradáveis e proliferação de agentes patológicos como fungos e bolor.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Não muda nada, porque temperatura e umidade são a mesma coisa.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'ironico',
              texto: 'Esqueceu da Aula 01-02? Termômetro lê calor sensível; umidade é calor latente!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Por isso seguimos o **ACCA Manual J** e a **EN ISO 52016-1**: calculamos condução térmica ($Q_c = U \\times A \\times TD$), ganho solar nos vidros (SHGC, crítico na fachada Oeste) e infiltração real.',
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'bia',
      texto: 'E mapeamos cada fonte interna pela ASHRAE: uma pessoa sentada em escritório libera **245 BTU/h** sensíveis e **155 BTU/h** latentes; já em trabalho pesado na fábrica são **580 BTU/h** sensíveis e **870 BTU/h** latentes!',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Ocupante (Escritório / Sentado) 245 BTU/h (72W) 155 BTU/h (45W) ASHRAE Fundamentals - Tabela 8.18 Ocupante (Fábrica / Trabalho Pesado) 580 BTU/h (170W) 870 BTU/h (255W)',
      },
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Já um computador de **100W** gera **341 BTU/h** e um servidor de rack de **750W** despeja **2.559 BTU/h** de calor sensível puro (**0 BTU/h** latente)! Em salas de servidores (CPDs), o SHR fica colado em 1.0.',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Computador / Estação CAD (100W) 341 BTU/h (100W) 0 BTU/h (Sensível Puro) Conversão Física: 1W = 3,412 BTU/h Servidor de Rack Comercial (750W) 2.559 BTU/h (750W) 0 BTU/h (Sensível Puro)',
      },
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E depois que eu tenho o cálculo pronto no Manual J, é só comprar qualquer máquina com a mesma capacidade total em BTU/h?',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Aí mora o **Erro Fatal do Manual S**! Se a sala exige **26.000 BTU/h** de calor sensível e você escolhe uma máquina de **36.000 BTU/h** totais que só entrega **24.000 BTU/h** sensíveis, ela nunca vai bater o setpoint!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Um sistema pode ter capacidade total de 36.000 BTU/h, mas se o seu evaporador fornecer apenas 24.000 BTU/h de resfriamento sensível e a sua edificação exigir 26.000 BTU/h sensíveis, o sistema operará de forma contínua e falhará em satisfazer a temperatura de projeto do termostato.',
      },
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e o Catálogo Nominal no Sol de 40,5°C',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Temperatura Externa (DB) 95°F (35,0°C) 105°F (40,5°C)',
      },
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'O Zé vendeu uma máquina olhando só o número grande da capa do catálogo, que é testado na condição padrão AHRI: **80°F** (**26,7°C**) lá dentro e **95°F** (**35,0°C**) lá fora.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Temperatura Interna (DB) 80°F (26,7°C) 75°F (23,9°C) Redução na capacidade de extração de calor sensível pelo evaporador Umidade Relativa Interna 50% (Saturação a 67°F WB) 50% (Saturação a 62,5°F WB) Menor volume de umidade disponível para troca latente inicial Temperatura Externa (DB) 95°F (35,0°C) 105°F (40,5°C)',
          },
        },
        {
          quem: 'bia',
          texto: 'Só que o cliente queria a sala a **75°F** (**23,9°C**) num verão de **105°F** (**40,5°C**) na rua! A pressão de descarga subiu, a capacidade real derreteu e o Zé não sabia explicar por quê.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Temperatura Interna (DB) 80°F (26,7°C) 75°F (23,9°C) Redução na capacidade de extração de calor sensível pelo evaporador Umidade Relativa Interna 50% (Saturação a 67°F WB) 50% (Saturação a 62,5°F WB) Menor volume de umidade disponível para troca latente inicial Temperatura Externa (DB) 95°F (35,0°C) 105°F (40,5°C)',
          },
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Em uma Central de Processamento de Dados (CPD / Sala de Servidores), o ideal é usar um ar-condicionado residencial comum focado em alta desumidificação.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          texto: 'Mito! Servidores dissipam apenas calor sensível seco (SHR próximo de 1.0). Usar equipamento de conforto comum desumidifica demais e desperdiça energia; exige-se climatização de precisão (CRAC).',
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Um sistema de 36.000 BTU/h totais que entrega apenas 24.000 BTU/h sensíveis não conseguirá satisfazer o termostato de uma sala que exige 26.000 BTU/h de carga sensível.',
      verdade: true,
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Um sistema pode ter capacidade total de 36.000 BTU/h, mas se o seu evaporador fornecer apenas 24.000 BTU/h de resfriamento sensível e a sua edificação exigir 26.000 BTU/h sensíveis, o sistema operará de forma contínua e falhará em satisfazer a temperatura de projeto do termostato.',
      },
      explicacao: [
        {
          quem: 'simon',
          texto: 'Verdade! O termostato lê apenas bulbo seco (calor sensível). Pelo Manual S, a capacidade sensível expandida precisa cobrir os **26.000 BTU/h** sensíveis do projeto.',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Um sistema pode ter capacidade total de 36.000 BTU/h, mas se o seu evaporador fornecer apenas 24.000 BTU/h de resfriamento sensível e a sua edificação exigir 26.000 BTU/h sensíveis, o sistema operará de forma contínua e falhará em satisfazer a temperatura de projeto do termostato.',
          },
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Em um saguão com pé-direito duplo, difusores de teto sopram ar quente em baixa velocidade e o retorno também fica no alto. O que ocorre com o fluxo térmico?',
      opcoes: [
        {
          id: 'a',
          texto: 'Curto-circuito de ar (Short-Circuiting): o ar quente flutua direto para o retorno superior sem aquecer o piso, mantendo o termostato ligado sem parar.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Exato! Sem velocidade de arremesso ou desestratificadores para vencer a flutuabilidade térmica, o calor faz curva curta no teto!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'O ar quente desce sozinho por gravidade até o piso.',
          feedback: [
            {
              quem: 'bia',
              texto: 'O ar quente é menos denso e tende a subir, estratificando no topo do pé-direito duplo!',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora ASHRAE — Conversão de Carga Interna de Estação CAD (100W)',
      formula: 'Q_sensível = Potência_W × 3,412 BTU/h',
      enunciado: 'Pela tabela ASHRAE da aula, cada **1W** elétrico dissipado equivale a **3,412 BTU/h** de calor sensível puro (**0 BTU/h** latente). Qual é a carga térmica sensível em **BTU/h** de uma Estação CAD de **100W**?',
      leituras: [
        { rotulo: 'Potência da Estação CAD', valor: '100W' },
        { rotulo: 'Fator de Conversão Física', valor: '3,412 BTU/h por W' },
        { rotulo: 'Componente Latente', valor: '0 BTU/h (Sensível Puro)' },
      ],
      unidade: 'BTU/h',
      respostaCorreta: 341,
      tolerancia: 1,
      opcoesRapidas: [155, 245, 341, 580],
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Computador / Estação CAD (100W) 341 BTU/h (100W) 0 BTU/h (Sensível Puro) Conversão Física: 1W = 3,412 BTU/h',
      },
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Perfeito! Uma estação CAD de **100W** adiciona **341 BTU/h** de calor sensível puro (**0 BTU/h** latente) ao ambiente.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Computador / Estação CAD (100W) 341 BTU/h (100W) 0 BTU/h (Sensível Puro) Conversão Física: 1W = 3,412 BTU/h',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Multiplique **100W** por **3,412 BTU/h**: na tabela ASHRAE da aula, uma estação CAD de **100W** gera **341 BTU/h** sensíveis.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Computador / Estação CAD (100W) 341 BTU/h (100W) 0 BTU/h (Sensível Puro) Conversão Física: 1W = 3,412 BTU/h',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Projeto — Manual J + Manual S',
      enunciado: 'Analise o slide de Dimensionamento de Carga Térmica e aponte qual decisão respeita o cruzamento entre **Manual J** e **Manual S**:',
      imagem: '/images/academia/hvac-instalacao/modulo02/modulo02-01/Module02-01-Precision HVAC Load Sizing Masterclass-01.jpg',
      legendaImagem: 'Módulo 02-01 — Dimensionamento de Carga Térmica de Precisão',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Um sistema pode ter capacidade total de 36.000 BTU/h, mas se o seu evaporador fornecer apenas 24.000 BTU/h de resfriamento sensível e a sua edificação exigir 26.000 BTU/h sensíveis, o sistema operará de forma contínua e falhará em satisfazer a temperatura de projeto do termostato.',
      },
      pontos: [
        {
          id: 'p1',
          rotulo: 'Cruzar a carga sensível (ex.: 26.000 BTU/h) e latente do Manual J com a tabela expandida do fabricante na condição real de projeto.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Isso mesmo! Sem atender aos **26.000 BTU/h** sensíveis nas tabelas expandidas do Manual S, mesmo uma máquina de **36.000 BTU/h** nominais falha em campo.',
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Dobrar a potência por metro quadrado no chute para a máquina desligar de 3 em 3 minutos.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              texto: 'Isso gera *short-cycling*, perda de óleo por *flashing* e umidade acima de **60%**!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'a umidade relativa do ambiente permanecerá acima de 60%',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Sobrar Potência Não é Generosidade, é Preguiça de Calcular',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Na rua, muita gente empurra máquina maior dizendo que “é melhor sobrar do que faltar”. Na engenharia térmica, sobrar sem cálculo não é generosidade — é preguiça de medir.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'O verdadeiro luxo da climatização é quando a pessoa entra na sala e esquece que existe ar-condicionado, porque a temperatura e a umidade estão em perfeito equilíbrio.',
        },
      ],
      principio: 'Conforto térmico invisível nasce na planilha antes de nascer na ferramenta.',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte a tabela ASHRAE de ganhos internos e a desvalorização nominal do **Manual S** na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Diga não à regra de bolso:** superdimensionamento causa *short-cycling*, *flashing* de óleo e ar frio e úmido (umidade acima de **60%**).',
        '**Manual J + Manual S:** calcule o envelope real e garanta que a capacidade **sensível** e **latente** na condição real atendam ao projeto.',
        '**Olho no SHR:** escritórios, fábricas (**580 BTU/h** sensível / **870 BTU/h** latente) e salas de servidores (**2.559 BTU/h** sensível puro por rack de **750W**) exigem seleções completamente diferentes.',
      ],
      proxima: 'Na Aula 02-02 vamos posicionar os equipamentos dominando aerodinâmica, isoladores de vibração e folgas NEC 110.26.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'a umidade relativa do ambiente permanecerá acima de 60%',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Ocupante (Fábrica / Trabalho Pesado) 580 BTU/h (170W) 870 BTU/h (255W) ASHRAE Fundamentals - Tabela 8.18 Computador / Estação CAD (100W) 341 BTU/h (100W) 0 BTU/h (Sensível Puro) Conversão Física: 1W = 3,412 BTU/h Servidor de Rack Comercial (750W) 2.559 BTU/h (750W)',
        },
      ],
    },
  ],
};
