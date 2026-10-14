// src/data/desafiosModulo/treinamentos-vrf.js
// "Desafios da Rodada" (Boss Quizzes de Fim de Módulo) para os cursos Sistema VRF e TVR Pro DC Inverter.

export const DESAFIOS_MODULO = [
  {
    cursoId: 'sistemavrf',
    moduloId: 'certificacao-vrf',
    titulo: 'Desafio da Rodada · Certificação Sistema VRF',
    aulasCobertas: ['1', '2', '3', '4', '5', '6', '7', '8'],
    contextoInicial:
      'Sexta-feira no Balcão! Depois de destrincharmos toda a anatomia, tubulação, vácuo, automação na PCB e diagnóstico avançado do TVR Ultra, chegou a hora de carimbar sua Certificação Sistema VRF com 5 casos reais de campo.',
    falaSucesso:
      'Gabarito de Mestre do VRF! Você domina desde o ajuste dos 480 passos da válvula EEV e a escada de 4.2 MPa até a leitura das 4 famílias do diagrama elétrico e o teste de termistores no multímetro!',
    falaReforco:
      'Quase lá! Revise os detalhes de simultaneidade, pressões de estanqueidade, prioridades na PCB (Erro E0/E2) e teste ôhmico de sensores para gabaritar o desafio.',
    questoes: [
      {
        id: 'q1',
        enunciado:
          'Em um retrofit corporativo, o cliente questiona como o sistema VRF (TVR Ultra) atinge até 40% de economia de energia em relação aos sistemas tradicionais de velocidade fixa. Qual combinação tecnológica das Aulas 01 e 02 explica essa eficiência?',
        opcoes: [
          {
            id: 'a',
            texto:
              'O uso de compressores tudo-ou-nada (On/Off) combinados com tubos capilares fixos que bloqueiam o gás nos horários de pico.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Partidas tudo-ou-nada geram picos elétricos severos! O VRF modula continuamente sem dar tranco na rede.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'A harmonia entre Compressor DC Inverter (coração com modulação contínua), Motor BLDC (ventilação sem escovas) e Válvula de Expansão Eletrônica EEV de 480 passos, somada ao projeto de até 130% de simultaneidade.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Exato! O trio **DC Inverter**, **Motor BLDC** e **EEV de 480 passos** ajusta o fluxo de refrigerante em tempo real conforme a carga térmica de cada sala.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'O desligamento automático de metade das unidades internas sempre que a temperatura externa ultrapassa 25°C.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'neutro',
                texto:
                  'O VRF mantém o conforto individualizado em até 64 unidades internas modulando a frequência do compressor, sem desligar salas arbitrariamente.',
              },
            ],
          },
        ],
      },
      {
        id: 'q2',
        enunciado:
          'Durante a instalação e comissionamento de uma rede VRF com fluido R410A (Aulas 03 e 04), qual pacote de procedimentos respeita rigorosamente os limites geométricos, o retorno de óleo e a integridade química do sistema?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Respeitar até 1000m totais (175m real / 200m equivalente), instalar sifão a cada 10m de subida, pressurizar em degraus (0.3, 1.5 e 4.2 MPa por 24h corrigindo 0.01 MPa/°C), fazer vácuo a -755 mmHg e injetar R410A na fase líquida com balança.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Padrão ouro de engenharia! Sifão a cada **10m**, escada de **0.3, 1.5 e 4.2 MPa**, vácuo profundo a **-755 mmHg** e carga líquida de **R410A** pesada em balança.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Deixar 60m de desnível entre evaporadoras, testar vazamento com oxigênio puro e completar o gás R410A em fase vapor olhando apenas o manômetro.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Perigo mortal! O desnível máximo entre internas é de **40m**, oxigênio causa explosão e o **R410A** fraciona se for carregado em fase vapor.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Ignorar a purga de nitrogênio na solda e dispensar o vácuo porque o óleo sintético POE não absorve umidade.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'O óleo sintético **POE** é altamente higroscópico e vira ácido na presença de umidade! O vácuo a **-755 mmHg** é inegociável.',
              },
            ],
          },
        ],
      },
      {
        id: 'q3',
        enunciado:
          'Em um edifício comercial, as salas de reunião entram em "Erro E0" (Conflito de Modo) porque um usuário pediu Aquecimento enquanto o restante do andar operava em Resfriamento (Aula 05). Como você resolve isso na PCB principal?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Cortando os cabos de comunicação da sala de reunião para isolá-la permanentemente da condensadora.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Cortar o barramento interrompe a rede! O conflito de modo é resolvido via parametrização lógica na PCB principal.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Navegando pelos botões físicos e chaves seletoras da PCB principal para configurar as regras de prioridade inteligente (como Maioria, Só Frio ou o Modo VIP para a sala prioritária).',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Cirúrgico! A **PCB principal** arbitra o **Erro E0** através das prioridades configuradas ou do **Modo VIP**, além de gerenciar os modos silenciosos noturnos.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Misturando gás R22 junto com o R410A para permitir frio e calor simultâneos no mesmo tubo de dois vias.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Jamais misture fluidos refrigerantes! O controle de modo é puramente eletrônico na placa principal.',
              },
            ],
          },
        ],
      },
      {
        id: 'q4',
        enunciado:
          'Pelo método do Detetive TVR Ultra (Aulas 06 e 07), os componentes do mapa elétrico dividem-se em 4 famílias lógicas. Se o sistema apresentar "Erro E2", qual família está envolvida e onde o rastreamento deve focar?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Família da Fala (portas de comunicação), rastreando a integridade física, polaridade e continuidade dos cabos de comunicação P, Q e E entre as unidades.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Detetive de elite! O **Erro E2** mora na **Família da Fala**, exigindo inspeção metódica nos cabos **P, Q e E** em vez de sair trocando placas no escuro.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Família da Careca, trocando imediatamente todos os compressores da condensadora sem usar multímetro.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'As 4 famílias são Visão (sensores), Músculos (válvulas), Sopro (ventiladores) e Fala (portas P, Q, E). Nunca troque peças no escuro!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Família do Sopro, lavando apenas a bandeja de dreno com mangueira de jardim.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'neutro',
                texto:
                  'A Família do Sopro reúne os motores ventiladores; o **Erro E2** é falha de comunicação na linha **P, Q e E** (Família da Fala).',
              },
            ],
          },
        ],
      },
      {
        id: 'q5',
        enunciado:
          'O display da condensadora pisca códigos críticos como P1 ou PL e você suspeita que um sensor termistor da Família da Visão está enviando leitura falsa para a placa (Aula 08). Qual é a "Arma Secreta" do diagnóstico de elite?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Desconectar o sensor suspeito da placa, medir sua resistência ôhmica isoladamente com o multímetro e cruzar o valor com a tabela Ohm x Temperatura do manual do fabricante.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Matou a charada! Medir o **termistor desconectado no multímetro** e confrontar com a **tabela do fabricante** separa na hora um sensor mentiroso de uma placa defeituosa!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Aquecer o sensor com a chama direta do maçarico até o plástico derreter para ver se o erro muda.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Chama no termistor destrói o encapsulamento! O teste é feito medindo resistência (kΩ) na temperatura conhecida e comparando com a tabela oficial.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Condenar e substituir a PCB principal inteira antes de fazer qualquer medição elétrica.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Trocar placa cara por culpa de um termistor descalibrado é o maior prejuízo de quem não usa o multímetro e a tabela do manual!',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cursoId: 'tvrpro',
    moduloId: 'certificacao-tvrpro',
    titulo: 'Desafio da Rodada · Certificação Linha TVR Pro',
    aulasCobertas: ['1', '2', '3', '4', '5', '6', '7', '8'],
    contextoInicial:
      'Hora da verdade no canteiro de obras! Vamos validar seu domínio completo sobre o recebimento, fundação, tubulação, brasagem, comissionamento Nível Master, rede elétrica/dados e partida da linha Trane TVR Pro DC Inverter.',
    falaSucesso:
      'Certificação Linha TVR Pro conquistada com louvor! Você provou ter rigor técnico absoluto nas 5 Leis da Instalação Impecável — do içamento com cintas ≤ 20mm até as 12h de cárter e 50h de amaciamento!',
    falaReforco:
      'Faltou pouco! Revise os parâmetros de segurança (< 36V DC após 5 min, cintas ≤ 20mm), fundação (≥ 200mm, M12 com 3 roscas), brasagem (0.02–0.03 MPa), vácuo (-0.1 MPa) e cabeamento (> 500mm, 120Ω) para fechar 100%.',
    questoes: [
      {
        id: 'q1',
        enunciado:
          'Na chegada e preparação inicial do Trane TVR Pro no canteiro (Aulas 01 e 08), quais procedimentos obrigatórios garantem a segurança da equipe e preservam a garantia de fábrica?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Ventilar áreas fechadas (R410A é mais pesado que o ar e asfixiante), aguardar 5 minutos após desligar a energia e confirmar < 36V DC no multímetro, içar com cintas ≤ 20mm e calços (CG assimétrico), retirar as 4 porcas do palete e remover a placa de proteção do condensador.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Checklist de chegada impecável! Cintas **≤ 20mm**, espera de **5 minutos** até **< 36V DC** e remoção obrigatória da **placa de proteção do condensador**!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Tombar a máquina na horizontal durante o içamento, abrir o quadro elétrico imediatamente após desligar o disjuntor e manter a placa de proteção do condensador instalada.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Triplo erro fatal! A máquina deve ficar **100%** vertical, exige **5 minutos** (< 36V DC) para descarga dos capacitores e manter a placa bloqueia o fluxo de ar e queima o compressor!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Içar o módulo com cabos de aço sem calços protetores e deixar o chassi parafusado no palete de madeira.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Sem calços e cintas **≤ 20mm** você amassa a carenagem e o condensador, além de ser obrigatório remover as **4 porcas** do suporte de madeira.',
              },
            ],
          },
        ],
      },
      {
        id: 'q2',
        enunciado:
          'Um engenheiro está projetando a combinação modular e a fundação física de um sistema TVR Pro (Aulas 02 e 04). Qual especificação respeita os limites de escala, simultaneidade e ancoragem mecânica?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Capacidade combinada de até 90HP (até 64 internas), simultaneidade de até 130% em escritórios mas obrigatoriamente ≤ 100% em data centers/carga constante, frente livre > 1m e base de concreto ≥ 200mm com borracha e 4 parafusos M12 deixando 3 roscas visíveis.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Engenharia pura! Até **90HP** e **64 internas**, trava de **≤ 100%** para data centers e base de **≥ 200mm** com **4 parafusos M12** e exatas **3 roscas visíveis**.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Aplicar 130% de simultaneidade em um data center 24h e apoiar a condensadora direto na laje sem base de concreto.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Em data centers ou carga máxima constante o limite é obrigatoriamente **≤ 100%**, e a base de concreto precisa ter no mínimo **200mm** de altura!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Posicionar a entrada de ar de frente para o vento principal e remover os defletores de vento para economizar material.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'A entrada de ar nunca deve encarar o vento principal, e os defletores de vento e protetores de neve são armaduras de sobrevivência obrigatórias!',
              },
            ],
          },
        ],
      },
      {
        id: 'q3',
        enunciado:
          'Ao executar a rede de tubulação de cobre e a brasagem do TVR Pro (Aulas 03, 04 e 08), quais regras geométricas e químicas evitam a falha por falta de óleo, a divisão bifásica desigual e a contaminação interna?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Instalar as juntas refnets (Y) na vertical com 45° de inclinação e usar pasta de fluxo com cloro e flúor na solda cobre-cobre.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Inclinar refnet inunda o ramal inferior, e fluxo com **cloro e flúor** destrói instantaneamente o óleo **POE** do compressor!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Respeitar até 1.000m totais (175m real / 200m equiv.), instalar sifões de óleo a cada 10m no tubo de gás quando a ODU estiver acima com desnível > 20m, nivelar refnets na horizontal (erro máx. 10°) e brasar com liga BCUP sem fluxo sob N2 contínuo a 0.02–0.03 MPa.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Tolerância zero cumprida! Sifões a cada **10m** (para desnível > **20m**), refnets dentro de **10°**, nitrogênio passante a **0.02 - 0.03 MPa** e zero fluxo em cobre-cobre **BCUP**!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Passar de 40m para 90m após o primeiro refnet sem aumentar o diâmetro da tubulação (sem size-up) e brasar sem nitrogênio.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Estender de **40m para 90m** exige cumprir os três cadeados incluindo o **size-up**, e brasar sem nitrogênio cria a "neve negra" que destrói o compressor!',
              },
            ],
          },
        ],
      },
      {
        id: 'q4',
        enunciado:
          'No Comissionamento Físico Nível Master do TVR Pro (Aulas 05 e 08), qual é a sequência exata das 4 etapas antes de liberar a partida elétrica?',
        opcoes: [
          {
            id: 'a',
            texto:
              '1) Golpe de Aríete com N2 seco a 0.5 MPa; 2) Estanqueidade em degraus (0.3, 1.5 e 4.2 MPa por 24h, compensando 0.01 MPa/1°C); 3) Vácuo a -0.1 MPa (-756 mmHg) mantido por +2h usando bomba com válvula de retenção; 4) Carga adicional de R410A em estado líquido com balança.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Protocolo Nível Master cravado! Limpeza a **0.5 MPa**, degraus até **4.2 MPa** (**0.01 MPa/1°C**), vácuo a **-0.1 MPa (-756 mmHg)** por **+2 horas** e carga líquida na balança.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Soprar a linha com ar comprimido, testar pressão a 1.0 MPa por 10 minutos e carregar R410A em gás sem balança.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Ar comprimido ou oxigênio geram risco de explosão e umidade, e carga de **R410A** sem balança e fora do estado líquido arruína a mistura zeotrópica!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Usar bomba de vácuo sem válvula de retenção por 15 minutos e abrir o gás antes do teste de estanqueidade.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Sem **válvula de retenção**, uma queda de energia suga o óleo sujo da bomba para a tubulação! E o vácuo exige **-0.1 MPa (-756 mmHg)** mais **2 horas**.',
              },
            ],
          },
        ],
      },
      {
        id: 'q5',
        enunciado:
          'Na reta final de cabeamento, configuração da Main Board e partida do TVR Pro (Aulas 06, 07 e 08), qual conjunto de ações garante comunicação sem ruído EMI e partida segura dos compressores?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Passar o cabo de dados no mesmo conduíte do 380V, ligar em Estrela sem resistor e dar partida imediata nos compressores assim que fechar o disjuntor.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Conduíte compartilhado gera EMI severo, ligação em Estrela colapsa os pacotes de dados e partir sem as **12 horas** de aquecimento de cárter causa golpe de líquido letal!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Manter distância > 500mm da potência (>10A e <50A), usar cabo blindado 3 vias ≥ 0,75 mm² (máx. 1200m) em Daisy Chain com resistor de 120Ω no fim (H1/H2/E para ODU-ODU e P/Q/E para ODU-IDU), ajustar ENC1 e S12+ENC3, medir > 2 MΩ (500V DC), abrir válvulas 100%, energizar 12h antes e amaciar por 50h.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Perfeição do início ao fim! Afastamento **> 500mm**, **Daisy Chain** com **120Ω**, **ENC1** + **S12/ENC3**, megômetro **> 2 MΩ (500V DC)**, **12 horas** de cárter e **50 horas** de amaciamento!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Injetar 380V nos bornes P, Q, E para testar a continuidade do cabo blindado antes de ligar a placa.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Erro fatal! Conectar **380V** nos bornes de comunicação queima instantaneamente todas as placas eletrônicas conectadas em cadeia!',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default DESAFIOS_MODULO;
