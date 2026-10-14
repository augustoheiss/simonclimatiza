// src/data/conversas/sistemavrf/2.js
// Roteiro "Papo de Balcão" — Dominando o Sistema VRF (TVR Ultra) · Aula 02

export default {
  schema: 1,
  cursoId: 'sistemavrf',
  aulaId: '2',
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
      texto: 'Manhã seguinte no balcão. Simon desenha no guardanapo uma rede de tubos com derivações em formato de Y enquanto Bia apoia o caderno.',
    },
    {
      id: 'fala-juninho-duvida',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Simon, fiquei pensando: num prédio comercial, como a gente projeta para **100%** do espaço quando nem todas as salas são usadas ao mesmo tempo?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O Dilema do Dimensionamento: Entenda como projetar para 100% do espaço quando nem tudo é usado ao mesmo tempo, otimizando custos e energia com o conceito de simultaneidade.',
      },
    },
    {
      id: 'fala-simon-simultaneidade',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Essa é a mágica da **simultaneidade**! Quando o pessoal sai das mesas para a sala de reunião, a carga térmica muda de endereço e o compressor Inverter acompanha.',
    },
    {
      id: 'fala-bia-modularidade',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'E quando o prédio é gigante, a modularidade agrupa gabinetes para atingir até **96 HP**, distribuindo o fluido por juntas em **"Y" (Branch Joints)**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Escalando o Sistema: Veja como a modularidade permite agrupar gabinetes para atingir capacidades incríveis de até 96 HP, utilizando juntas em "Y" (Branch Joints) para uma distribuição aerodinâmica perfeita.',
      },
    },
    {
      id: 'escolha-branch-joint',
      tipo: 'escolha',
      pergunta: 'Na hora de derivar a tubulação principal para os ramais das unidades internas do TVR Ultra, um encanador antigo sugere soldar um "Tê" comum de hidráulica para economizar. Qual a sua decisão?',
      opcoes: [
        {
          id: 'a',
          texto: 'Aceitar o "Tê" comum de cobre, pois o gás acha o caminho sozinho sob pressão.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'De jeito nenhum! Um Tê seco a noventa graus gera choque frontal de fluido, turbulência severa e desbalanceia óleo e líquido.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Exigir o uso das juntas em "Y" (Branch Joints) dedicadas para garantir distribuição aerodinâmica perfeita.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Decisão de engenheiro! As juntas em **"Y" (Branch Joints)** dividem o fluxo de forma aerodinâmica e homogênea para toda a rede.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'utilizando juntas em "Y" (Branch Joints) para uma distribuição aerodinâmica perfeita.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Amassar a ponta do tubo principal e furar dois buracos laterais.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'risada',
              texto: 'Aí não é obra de climatização, é crime inafiançável contra a mecânica dos fluidos!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-simon-coracao',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Agora, abrindo o capô da unidade externa: o coração do sistema é o **compressor Inverter**, mas nenhum rei governa sozinho sem seus guarda-costas.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Anatomia da Unidade: Um raio-X dos componentes internos, destacando o coração do sistema: o compressor Inverter.',
      },
    },
    {
      id: 'fala-bia-guardioes',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Os dois verdadeiros coletes à prova de balas do compressor são o **Acumulador** e o **Separador de Óleo**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Guardiões do Compressor: Descubra como o Acumulador e o Separador de Óleo funcionam como verdadeiros coletes à prova de balas, evitando a destruição interna por entrada de líquidos e garantindo que o óleo não se perca pela tubulação.',
      },
    },
    {
      id: 'fala-juninho-funcao-guardioes',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Deixa eu ver se entendi: um segura o líquido antes de entrar no compressor e o outro segura o óleo quando o gás sai?',
    },
    {
      id: 'fala-simon-explicacao-guardioes',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Exatamente! O **Acumulador** evita a destruição interna por entrada de líquidos na sucção, e o **Separador de Óleo** garante que o lubrificante não se perca pela tubulação.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'evitando a destruição interna por entrada de líquidos e garantindo que o óleo não se perca pela tubulação.',
      },
    },
    {
      id: 'causo-colete-balas',
      tipo: 'causo',
      titulo: 'O Dia em que o Acumulador Salvou o Compressor',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Certa vez pegamos uma obra onde sujaram todos os filtros das evaporadoras ao mesmo tempo durante uma reforma de drywall.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Sem troca de calor nas internas, o refrigerante líquido não evaporou todo e voltou correndo pela linha de sucção!',
        },
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Se não fosse o **Acumulador** atuando como colete à prova de balas na entrada da condensadora, o golpe de líquido teria partido o scroll no meio.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Descubra como o Acumulador e o Separador de Óleo funcionam como verdadeiros coletes à prova de balas, evitando a destruição interna por entrada de líquidos',
          },
        },
      ],
    },
    {
      id: 'mito-simultaneidade-vrf',
      tipo: 'mitoVerdade',
      afirmacao: 'Em qualquer prédio comercial, como projetamos para 100% do espaço físico, é impossível otimizar custos e energia usando o conceito de simultaneidade.',
      verdade: false,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Entenda como projetar para 100% do espaço quando nem tudo é usado ao mesmo tempo, otimizando custos e energia com o conceito de simultaneidade.',
      },
      explicacao: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Mito! O conceito de **simultaneidade** permite justamente atender **100%** dos ambientes otimizando custos e energia quando nem tudo opera no pico ao mesmo tempo.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Entenda como projetar para 100% do espaço quando nem tudo é usado ao mesmo tempo, otimizando custos e energia com o conceito de simultaneidade.',
          },
        },
        {
          quem: 'simon',
          emocao: 'neutro',
          texto: 'A eletrônica e o compressor Inverter modulam a entrega conforme a demanda real de cada zona do edifício.',
        },
      ],
    },
    {
      id: 'inspecao-anatomia-vrf',
      tipo: 'inspecao',
      titulo: 'Inspeção de Capô Aberto — Os Guardiões do TVR Ultra',
      enunciado: 'Observe o infográfico da Aula 02 e selecione a alternativa que descreve corretamente a dupla de proteção mecânica do compressor Inverter:',
      imagem: '/images/academia/vrf/aula02/infografico.jpg',
      legendaImagem: 'Infográfico Aula 02 — Engenharia e Anatomia do TVR Ultra',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Acumulador (barra a entrada de líquido no compressor) e Separador de Óleo (evita que o óleo se perca na tubulação).',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Certo! São os dois coletes à prova de balas que protegem a vida mecânica do compressor Inverter.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Descubra como o Acumulador e o Separador de Óleo funcionam como verdadeiros coletes à prova de balas, evitando a destruição interna por entrada de líquidos e garantindo que o óleo não se perca pela tubulação.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Juntas em Y na descarga elétrica e ventilador axial dentro da linha de líquido.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Cuidado! As juntas em Y ficam na rede frigorífica externa aos módulos, e os guardiões internos são o Acumulador e o Separador de Óleo.',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-modularidade-aula2',
      tipo: 'calculadora',
      titulo: 'Simulador de Escala — Modularidade com Branch Joints',
      formula: 'Capacidade Total Modular ≤ 96 HP',
      enunciado: 'Agrupando os gabinetes modulares do sistema **TVR Ultra** e interligando a rede com juntas em **"Y" (Branch Joints)**, qual é a capacidade máxima em **HP** destacada na Aula 02?',
      leituras: [
        { rotulo: 'Cobertura de Espaço', valor: '100% com simultaneidade' },
        { rotulo: 'Derivadores de Rede', valor: 'Juntas em Y (Branch Joints)' },
      ],
      unidade: 'HP',
      respostaCorreta: 96,
      tolerancia: 0.1,
      opcoesRapidas: [32, 48, 64, 96],
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Veja como a modularidade permite agrupar gabinetes para atingir capacidades incríveis de até 96 HP, utilizando juntas em "Y" (Branch Joints) para uma distribuição aerodinâmica perfeita.',
      },
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Exato! O agrupamento modular de gabinetes permite alcançar até **96 HP** com distribuição aerodinâmica pelas juntas em "Y".',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Veja como a modularidade permite agrupar gabinetes para atingir capacidades incríveis de até 96 HP, utilizando juntas em "Y" (Branch Joints) para uma distribuição aerodinâmica perfeita.',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Olha o teto da modularidade do TVR Ultra: o agrupamento de gabinetes chega a **96 HP**!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Veja como a modularidade permite agrupar gabinetes para atingir capacidades incríveis de até 96 HP',
          },
        },
      ],
    },
    {
      id: 'filosofia-capo-aberto',
      tipo: 'filosofia',
      titulo: 'A União entre Força e Inteligência',
      principio: 'Nenhum coração forte sobrevive sem escudos fiéis: no VRF, a potência do compressor Inverter depende da humildade silenciosa do acumulador e do separador de óleo.',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Todo mundo olha para o compressor Inverter porque ele faz barulho e consome corrente. Mas quem mantém ele vivo por anos são duas peças que nem têm motor.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'É a harmonia entre mecânica dos fluidos e eletrônica: cada componente cumpre seu papel para proteger o todo.',
        },
      ],
    },
    {
      id: 'quiz-guardioes',
      tipo: 'quiz',
      enunciado: 'Qual é a função específica do Separador de Óleo dentro da anatomia da unidade externa do TVR Ultra?',
      opcoes: [
        {
          id: 'a',
          texto: 'Capturar o óleo na saída do compressor e devolvê-lo ao cárter, garantindo que o lubrificante não se perca pela tubulação.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Perfeito! Quanto menos óleo viajar à toa pelos andares do prédio, mais seguro e lubrificado trabalha o compressor.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Descubra como o Acumulador e o Separador de Óleo funcionam como verdadeiros coletes à prova de balas, evitando a destruição interna por entrada de líquidos e garantindo que o óleo não se perca pela tubulação.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Misturar água gelada no óleo para esfriar as juntas em Y.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Água no circuito frigorífico é sentença de morte! O separador retém o óleo lubrificante para que ele não fuja para a rede.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Substituir o compressor Inverter quando a carga chega a 100%.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'neutro',
              texto: 'O separador de óleo é um vaso estático de separação física, não um compressor reserva.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-juninho-resumo',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'Ficou claríssimo: simultaneidade no projeto, juntas em Y na rede e a dupla Acumulador + Separador de Óleo protegendo o compressor!',
    },
    {
      id: 'fala-marta-despedida',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'bem-humorado',
      texto: 'Se até o compressor tem colete à prova de balas, vê se vocês não esquecem o capacete e o óculos na bancada!',
    },
    {
      id: 'fala-simon-final',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Bem lembrado, Dona Marta! Na próxima aula a gente entra literalmente dentro dos tubos de cobre.',
    },
    {
      id: 'ref-conteudo-2',
      tipo: 'referencia',
      texto: 'Veja o raio-X dos componentes internos e os slides da Aula 02 na aba **Conteúdo Técnico**.',
      alvo: { aba: 'conteudo' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Veja como a modularidade permite agrupar gabinetes para atingir capacidades incríveis de até 96 HP, utilizando juntas em "Y" (Branch Joints) para uma distribuição aerodinâmica perfeita.',
      },
      pontos: [
        '**Simultaneidade inteligente:** projete para **100%** do espaço otimizando investimento e energia conforme o uso real.',
        '**Escala até 96 HP:** agrupe módulos externos e utilize juntas em **"Y" (Branch Joints)** para distribuição aerodinâmica.',
        '**Coletes à prova de balas:** o **Acumulador** impede golpe de líquido e o **Separador de Óleo** retém o lubrificante do compressor Inverter.',
      ],
      proxima: 'Na Aula 03 faremos uma viagem em visão de raio-X pelo coração termodinâmico: válvula de 4 vias, EEVs e o tsunami de retorno de óleo.',
    },
  ],
};
