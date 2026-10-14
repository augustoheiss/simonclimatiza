// src/data/conversas/sistemavrf/5.js
// Roteiro "Papo de Balcão" — Dominando o Sistema VRF (TVR Ultra) · Aula 05

export default {
  schema: 1,
  cursoId: 'sistemavrf',
  aulaId: '5',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'padaria-manha',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-abertura',
      tipo: 'cena',
      texto: 'Segunda-feira de manhã na padaria. O telefone do Juninho toca sem parar com chamados do mesmo edifício comercial.',
    },
    {
      id: 'fala-juninho-chamado',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'alerta',
      texto: 'Simon, socorro! Metade das salas do escritório entrou em **Erro E0** ao mesmo tempo! Será que queimou a placa de circuito impresso (**PCB**) principal?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Exploramos a placa de circuito impresso (PCB) principal, mostrando como a navegação pelos botões físicos e chaves seletoras permite configurar a inteligência do sistema. Aprenda como o sistema resolve os famosos "conflitos de modo" (Erro E0) através de prioridades inteligentes',
      },
    },
    {
      id: 'fala-simon-risada',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'bem-humorado',
      texto: 'Guarda a chave de fenda no bolso, Juninho! Segunda-feira de manhã com frio lá fora e **Erro E0** nas internas tem nome e sobrenome: **conflito de modo**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Aprenda como o sistema resolve os famosos "conflitos de modo" (Erro E0) através de prioridades inteligentes',
      },
    },
    {
      id: 'fala-bia-explicacao-e0',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Num VRF bomba de calor de dois tubos, todas as internas ativas precisam operar no mesmo ciclo. Se uma pede calor enquanto o sistema está em frio, trava em **Erro E0**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Aprenda como o sistema resolve os famosos "conflitos de modo" (Erro E0) através de prioridades inteligentes, descubra o poder do "Modo VIP"',
      },
    },
    {
      id: 'escolha-modo-vip',
      tipo: 'escolha',
      pergunta: 'O presidente da empresa reclamou que toda vez que o pessoal do andar de baixo liga o aquecimento, a sala da presidência trava em **Erro E0** e para de refrigerar. Como você resolve isso na PCB principal?',
      opcoes: [
        {
          id: 'a',
          texto: 'Cortando os cabos de controle de todas as outras salas do prédio.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'risada',
              texto: 'Calma, não precisa deixar o prédio inteiro sem ar-condicionado! A própria **PCB** principal tem configuração de prioridade para isso.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Configurando a prioridade inteligente de "Modo VIP" na PCB principal para a unidade interna da presidência.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Solução de mestre! Com o **Modo VIP** configurado pelos botões físicos e chaves seletoras da **PCB**, a unidade VIP dita o modo térmico do sistema.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Exploramos a placa de circuito impresso (PCB) principal, mostrando como a navegação pelos botões físicos e chaves seletoras permite configurar a inteligência do sistema. Aprenda como o sistema resolve os famosos "conflitos de modo" (Erro E0) através de prioridades inteligentes, descubra o poder do "Modo VIP"',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Trocando o fluido refrigerante da máquina para aceitar frio e calor no mesmo tubo.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Não existe fluido mágico que corra quente e frio simultaneamente na mesma linha de dois tubos! Resolve-se por regra de prioridade na PCB.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-simon-botoes-chaves',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Na **PCB** principal, você navega pelos **botões físicos e chaves seletoras** para definir quem manda no sistema: maioria de demanda, primeira ligada ou **Modo VIP**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'mostrando como a navegação pelos botões físicos e chaves seletoras permite configurar a inteligência do sistema.',
      },
    },
    {
      id: 'fala-bia-silencioso',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'E na mesma placa você habilita os **modos silenciosos automáticos**, reduzindo a rotação durante a noite para garantir o conforto acústico da vizinhança.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'descubra o poder do "Modo VIP" e veja como os modos silenciosos automáticos garantem o conforto acústico durante a noite.',
      },
    },
    {
      id: 'fala-juninho-conforto-acustico',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Isso salva demais em hotel e clínica médica onde a condensadora fica perto das janelas dos quartos!',
    },
    {
      id: 'fala-marta-comentario',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'bem-humorado',
      texto: 'Aqui em casa o **Modo VIP** já vem configurado de fábrica: quem manda no controle remoto sou eu e pronto!',
    },
    {
      id: 'causo-guerra-controle',
      tipo: 'causo',
      titulo: 'A Guerra Civil do Termostato na Segunda-Feira',
      falas: [
        {
          quem: 'simon',
          emocao: 'bem-humorado',
          texto: 'Num escritório de advocacia, a recepcionista chegava cedo com frio e punha em aquecimento. Às nove horas chegava o sócio de terno suando e punha em frio.',
        },
        {
          quem: 'juninho',
          emocao: 'risada',
          texto: 'E a sala do sócio ficava piscando **Erro E0** na cara dele!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Aprenda como o sistema resolve os famosos "conflitos de modo" (Erro E0) através de prioridades inteligentes',
          },
        },
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Ficava! Subimos na casa de máquinas, configuramos a evaporadora do sócio em **Modo VIP** pelas chaves da **PCB** principal e orientamos a equipe sobre o botão MODE. Nunca mais abriram chamado!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Aprenda como o sistema resolve os famosos "conflitos de modo" (Erro E0) através de prioridades inteligentes, descubra o poder do "Modo VIP"',
          },
        },
      ],
    },
    {
      id: 'mito-erro-e0-peca',
      tipo: 'mitoVerdade',
      afirmacao: 'Quando uma unidade interna do TVR Ultra exibe Erro E0 por conflito de modo, é obrigatório substituir a placa eletrônica da evaporadora.',
      verdade: false,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito! O **Erro E0** de conflito de modo não é defeito de peça quebrada; é uma proteção lógica quando unidades tentam operar em modos opostos.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Aprenda como o sistema resolve os famosos "conflitos de modo" (Erro E0) através de prioridades inteligentes',
          },
        },
        {
          quem: 'simon',
          emocao: 'neutro',
          texto: 'Basta alinhar o modo de operação nos controles ou configurar a regra de prioridade e **Modo VIP** na **PCB** principal.',
        },
      ],
    },
    {
      id: 'inspecao-pcb-aula5',
      tipo: 'inspecao',
      titulo: 'Inspeção de Automação — Configurando a PCB Principal',
      enunciado: 'Observe o infográfico da Aula 05 e identifique a alternativa **correta** sobre os recursos de configuração da placa de circuito impresso (PCB) principal do TVR Ultra:',
      imagem: '/images/academia/vrf/aula05/infografico.jpg',
      legendaImagem: 'Infográfico Aula 05 — Configurando o Cérebro do TVR Ultra',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Pelos botões físicos e chaves seletoras da PCB, configuramos prioridades contra Conflito de Modo (Erro E0), Modo VIP e modos silenciosos noturnos.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Perfeito! Você domina a interface física da **PCB** principal para resolver conflitos operacionais e acústicos.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Exploramos a placa de circuito impresso (PCB) principal, mostrando como a navegação pelos botões físicos e chaves seletoras permite configurar a inteligência do sistema. Aprenda como o sistema resolve os famosos "conflitos de modo" (Erro E0) através de prioridades inteligentes, descubra o poder do "Modo VIP" e veja como os modos silenciosos automáticos garantem o conforto acústico durante a noite.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'As chaves seletoras da PCB servem apenas para desligar o aterramento elétrico da máquina.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Jamais! Aterramento é segurança fixa; as chaves seletoras e botões configuram a inteligência e automação do sistema.',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-democracia-termica',
      tipo: 'filosofia',
      titulo: 'A Democracia Térmica e a Arte de Ouvir o Usuário',
      principio: 'Um sistema de dois tubos é uma democracia onde a prioridade configurada decide a estação do ano do prédio. Metade dos chamados de inverno resolve-se com diálogo e parametrização.',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'O técnico que só sabe usar maçarico e chave inglesa trava quando o problema é humano. Entender o **Erro E0** é entender como pessoas diferentes dividem o mesmo teto.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Parametrizar a placa com critério transforma uma disputa de controles remotos em harmonia operacional.',
        },
      ],
    },
    {
      id: 'quiz-modo-silencioso',
      tipo: 'quiz',
      enunciado: 'Além de resolver conflitos de modo (Erro E0) e definir o Modo VIP, qual outro recurso da PCB principal é destacado na Aula 05 para edificações residenciais, hotéis ou hospitais à noite?',
      opcoes: [
        {
          id: 'a',
          texto: 'Os modos silenciosos automáticos, que garantem o conforto acústico durante a noite.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Na mosca! O modo silencioso noturno doma o ruído da unidade externa automaticamente no horário de descanso.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'veja como os modos silenciosos automáticos garantem o conforto acústico durante a noite.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'O desligamento permanente dos sensores de pressão durante a madrugada.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Os escudos de segurança nunca dormem! O que atua à noite é o modo silencioso automático para conforto acústico.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'A abertura manual das válvulas com alicate de pressão.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'neutro',
              texto: 'Tudo é feito eletronicamente pela inteligência configurada na PCB principal.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-alivio',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Vou ligar agora mesmo pro síndico do prédio e explicar o **Erro E0** e já agendar a configuração do **Modo VIP** para o CPD deles!',
    },
    {
      id: 'fala-bia-proxima',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Boa! E na Aula 06 vamos mergulhar ainda mais fundo em como a PCB conversa com cada compressor e válvula como um corpo vivo.',
    },
    {
      id: 'fala-simon-final',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'bem-humorado',
      texto: 'Viu só? Economizou uma viagem de caminhão e ganhou a confiança do cliente em cinco minutos de papo reto!',
    },
    {
      id: 'fala-juninho-botoes-pcb',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E pra configurar tudo isso na **PCB** principal, eu sempre uso os botões físicos e as chaves seletoras com o manual aberto do lado, certo?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Exploramos a placa de circuito impresso (PCB) principal, mostrando como a navegação pelos botões físicos e chaves seletoras permite configurar a inteligência do sistema.',
      },
    },
    {
      id: 'fala-bia-cuidado-chaves',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Sempre! Cada chave seletora tem função específica de endereço, prioridade de modo ou redução de ruído noturno.',
    },
    {
      id: 'fala-marta-conselho',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'bem-humorado',
      texto: 'Quem lê o manual antes de apertar botão não passa vergonha na frente do síndico!',
    },
    {
      id: 'ref-conteudo-5',
      tipo: 'referencia',
      texto: 'Estude o mapa de botões físicos e chaves seletoras da PCB nos slides da aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Exploramos a placa de circuito impresso (PCB) principal, mostrando como a navegação pelos botões físicos e chaves seletoras permite configurar a inteligência do sistema. Aprenda como o sistema resolve os famosos "conflitos de modo" (Erro E0) através de prioridades inteligentes, descubra o poder do "Modo VIP" e veja como os modos silenciosos automáticos garantem o conforto acústico durante a noite.',
      },
      pontos: [
        '**Domando a PCB principal:** utilize os botões físicos e chaves seletoras para parametrizar a inteligência do TVR Ultra.',
        '**Conflito de Modo (Erro E0) e Modo VIP:** configure prioridades inteligentes para evitar bloqueios entre frio e calor e dar preferência a salas críticas.',
        '**Conforto acústico noturno:** ative os modos silenciosos automáticos para reduzir o nível de ruído durante a noite.',
      ],
      proxima: 'Na Aula 06 vamos visualizar o sistema como um corpo humano completo, conectando o cérebro eletrônico (PCB) aos compressores e válvulas.',
    },
  ],
};
