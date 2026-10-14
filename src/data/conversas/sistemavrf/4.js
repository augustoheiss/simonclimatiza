// src/data/conversas/sistemavrf/4.js
// Roteiro "Papo de Balcão" — Dominando o Sistema VRF (TVR Ultra) · Aula 04

export default {
  schema: 1,
  cursoId: 'sistemavrf',
  aulaId: '4',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-abertura',
      tipo: 'cena',
      texto: 'QG Técnico da Simon Climatiza. Uma placa principal do TVR Ultra está sobre a manta antiestática enquanto Bia aponta os conectores dos sensores.',
    },
    {
      id: 'fala-juninho-placa',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'Olha o tamanho dessa placa principal do **TVR Ultra**, Bia! É ela que transforma aquela caixa pesada de metal num sistema inteligente?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O que transforma uma pesada caixa de metal em um organismo inteligente e autossuficiente? Neste videocast, dissecamos a placa principal do TVR Ultra, que atua como o verdadeiro sistema nervoso central do equipamento.',
      },
    },
    {
      id: 'fala-bia-sistema-nervoso',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Exatamente, Ju! A placa principal atua como o verdadeiro **sistema nervoso central** do equipamento, fazendo check-ups proativos de saúde o tempo todo.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Rotinas de Saúde: Como a máquina realiza check-ups proativos para garantir o máximo de eficiência e longevidade.',
      },
    },
    {
      id: 'fala-simon-manutencao-autonoma',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Ela comanda a **manutenção autônoma**: faz o ciclo de revezamento de trabalho entre os compressores e o descongelamento automático no inverno.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Manutenção Autônoma: O ciclo de revezamento de trabalho entre os compressores e o descongelamento automático no inverno.',
      },
    },
    {
      id: 'escolha-escudos-protecao',
      tipo: 'escolha',
      pergunta: 'Você chegou na cobertura e o display da placa principal está exibindo o código de proteção **P4**. Pelo manual do TVR Ultra, qual escudo de segurança acabou de ser acionado?',
      opcoes: [
        {
          id: 'a',
          texto: 'Alerta de alta pressão na linha de recalque (que seria P1).',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Quase! Alta pressão é o código **P1**. O código **P4** aponta diretamente para a temperatura na descarga do compressor!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Escudos de Proteção: O que significam os gatilhos de segurança vitais, como os alertas de alta pressão (P1), febre na descarga do compressor (P4) e superaquecimento no trocador externo (P5).',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Febre na descarga do compressor (P4), indicando temperatura excessiva no topo da descarga.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Em cheio! **P1** é alta pressão, **P4** é febre na descarga do compressor e **P5** é superaquecimento no trocador externo.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Escudos de Proteção: O que significam os gatilhos de segurança vitais, como os alertas de alta pressão (P1), febre na descarga do compressor (P4) e superaquecimento no trocador externo (P5).',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Aviso de filtro de ar sujo no controle remoto da recepção.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Nada disso! Os códigos da família **P** são escudos vitais de proteção termodinâmica e térmica da condensadora.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-simon-diferenca-p1-p4',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'pensativo',
      texto: 'E aqui mora o pulo do gato de campo: muita gente confunde **P1** (alta pressão) com **P4** (febre na descarga do compressor).',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'como os alertas de alta pressão (P1), febre na descarga do compressor (P4) e superaquecimento no trocador externo (P5).',
      },
    },
    {
      id: 'fala-bia-explicacao-p1-p4-p5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Quando o ventilador para ou a serpentina externa suja, o calor não sai: sobe a temperatura no trocador externo (**P5**) e dispara a alta pressão (**P1**).',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'como os alertas de alta pressão (P1), febre na descarga do compressor (P4) e superaquecimento no trocador externo (P5).',
      },
    },
    {
      id: 'fala-simon-febre-sede',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Já a febre na descarga (**P4**) muitas vezes vem de falta de fluido refrigerante ou restrição: chega pouco vapor fresco para resfriar o compressor e a cabeça dele ferve!',
    },
    {
      id: 'fala-juninho-insight',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'Caramba! Então se der **P4** e o cara achar que é excesso de gás e soltar refrigerante, ele piora a febre do compressor!',
    },
    {
      id: 'causo-p4-confundido',
      tipo: 'causo',
      titulo: 'O Trocador de Peças que Brigou com o Código P1',
      falas: [
        {
          quem: 'simon',
          emocao: 'bem-humorado',
          texto: 'Fomos chamados num shopping onde a condensadora do **TVR Ultra** desarmava por **P1** (alta pressão) toda tarde.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'como os alertas de alta pressão (P1), febre na descarga do compressor (P4) e superaquecimento no trocador externo (P5).',
          },
        },
        {
          quem: 'bia',
          emocao: 'pensativo',
          texto: 'E o que o técnico anterior tinha feito? Condenado a placa principal?',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Queria trocar a placa! Chegamos lá e tinham empilhado caixas de papelão na frente da descarga de ar da condensadora. Tiramos as caixas, o trocador respirou e o **P1** sumiu na hora!',
        },
      ],
    },
    {
      id: 'mito-revezamento-compressores',
      tipo: 'mitoVerdade',
      afirmacao: 'Em um sistema TVR Ultra com múltiplos compressores, um compressor trabalha sozinho até queimar enquanto o outro fica guardado apenas para emergências.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Mito! A placa principal executa a **Manutenção Autônoma** com ciclo de revezamento de trabalho entre os compressores para equalizar o desgaste e garantir longevidade.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Manutenção Autônoma: O ciclo de revezamento de trabalho entre os compressores e o descongelamento automático no inverno.',
          },
        },
        {
          quem: 'simon',
          emocao: 'neutro',
          texto: 'Assim nenhum compressor envelhece antes do parceiro de chassi.',
        },
      ],
    },
    {
      id: 'inspecao-escudos-aula4',
      tipo: 'inspecao',
      titulo: 'Inspeção de Diagnóstico — Os Três Escudos P1, P4 e P5',
      enunciado: 'Observe o painel de inteligência da Aula 04 e selecione a associação **correta** dos três gatilhos vitais de segurança do TVR Ultra:',
      imagem: '/images/academia/vrf/aula04/infografico.jpg',
      legendaImagem: 'Infográfico Aula 04 — A Mente do TVR Ultra e Escudos de Proteção',
      pontos: [
        {
          id: 'p1',
          rotulo: 'P1 = Alerta de alta pressão | P4 = Febre na descarga do compressor | P5 = Superaquecimento no trocador externo.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Exato! Gravou essa tríade (**P1**, **P4**, **P5**), você conversa no mesmo idioma da placa principal.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Escudos de Proteção: O que significam os gatilhos de segurança vitais, como os alertas de alta pressão (P1), febre na descarga do compressor (P4) e superaquecimento no trocador externo (P5).',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'P1 = Falta de pilha no controle | P4 = Modo silencioso noturno | P5 = Limpeza de filtro da evaporadora.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Incorreto! P1, P4 e P5 são escudos críticos de pressão e temperatura da unidade externa.',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-dialogar-maquina',
      tipo: 'filosofia',
      titulo: 'Dialogar com a Lógica em Vez de Calar o Alarme',
      principio: 'Pressão alta (P1) é força contra porta fechada; febre na descarga (P4) é sede de fluido. Entender o alerta é ouvir o pedido de socorro antes da quebra.',
      falas: [
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Mais do que consertar falhas depois que a máquina para, entender os escudos **P1**, **P4** e **P5** é aprender a dialogar com a lógica do equipamento.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Mais do que consertar falhas, entender esses alertas é aprender a dialogar com a lógica da máquina.',
          },
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'O amador fica bravo quando aparece código de proteção no visor; o profissional agradece, porque o escudo salvou o compressor de morrer calado.',
        },
      ],
    },
    {
      id: 'quiz-p5-trocador',
      tipo: 'quiz',
      enunciado: 'Quando a placa principal do TVR Ultra aciona especificamente o gatilho de segurança **P5**, o que ela está protegendo?',
      opcoes: [
        {
          id: 'a',
          texto: 'Está protegendo contra o superaquecimento no trocador de calor externo (condensador).',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Certíssimo! **P5** vigia o superaquecimento no trocador externo para evitar colapso térmico da condensadora.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'como os alertas de alta pressão (P1), febre na descarga do compressor (P4) e superaquecimento no trocador externo (P5).',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Está avisando que a bomba de dreno da sala VIP desligou.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'neutro',
              texto: 'Bomba de dreno é periférico da evaporadora; o **P5** é proteção térmica do trocador externo.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Está indicando que o inverno chegou e ligou o aquecimento.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'No inverno ela faz descongelamento automático, mas **P5** é escudo contra superaquecimento no trocador externo!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-animado',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'P1 alta pressão, P4 febre na descarga e P5 superaquecimento no trocador externo. Já anotei na capa do caderno de campo!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'como os alertas de alta pressão (P1), febre na descarga do compressor (P4) e superaquecimento no trocador externo (P5).',
      },
    },
    {
      id: 'fala-simon-proxima',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Na próxima aula você vai colocar a mão nos botões e chaves seletoras dessa placa para resolver conflito de modo e configurar o Modo VIP!',
    },
    {
      id: 'fala-marta-apoio',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'bem-humorado',
      texto: 'Esse "Modo VIP" tem cara de sala de diretoria onde ninguém gosta de passar calor!',
    },
    {
      id: 'fala-bia-checkup-proativo',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'E lembra que antes mesmo de qualquer alerta **P1**, **P4** ou **P5**, a máquina realiza rotinas de saúde e check-ups proativos sozinha.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Rotinas de Saúde: Como a máquina realiza check-ups proativos para garantir o máximo de eficiência e longevidade.',
      },
    },
    {
      id: 'fala-juninho-degelo',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Inclusive o descongelamento automático no inverno faz parte dessa manutenção autônoma da placa, né Bia?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Manutenção Autônoma: O ciclo de revezamento de trabalho entre os compressores e o descongelamento automático no inverno.',
      },
    },
    {
      id: 'fala-simon-confirmacao-degelo',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Isso mesmo! Sem o descongelamento inteligente no inverno, o trocador externo viraria um bloco de gelo e travaria a troca térmica.',
    },
    {
      id: 'ref-conteudo-4',
      tipo: 'referencia',
      texto: 'Confira os slides detalhados sobre a placa principal e os escudos de proteção na aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Escudos de Proteção: O que significam os gatilhos de segurança vitais, como os alertas de alta pressão (P1), febre na descarga do compressor (P4) e superaquecimento no trocador externo (P5).',
      },
      pontos: [
        '**Sistema nervoso central:** a placa principal executa check-ups proativos para eficiência e longevidade.',
        '**Manutenção autônoma:** o sistema realiza revezamento automático de trabalho entre compressores e descongelamento no inverno.',
        '**Escudos de proteção:** domine a tríade **P1** (alta pressão), **P4** (febre na descarga do compressor) e **P5** (superaquecimento no trocador externo).',
      ],
      proxima: 'Na Aula 05 vamos configurar a PCB na prática: resolução do Conflito de Modo (Erro E0), Modo VIP e modos silenciosos noturnos.',
    },
  ],
};
