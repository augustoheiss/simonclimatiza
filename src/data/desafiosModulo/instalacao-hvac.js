// src/data/desafiosModulo/instalacao-hvac.js
// "Desafios da Rodada" (Boss Quizzes integradores de Fim de Módulo) para o curso de Instalação e Manutenção de Climatização (instalacao-hvac).

export const DESAFIOS_MODULO = [
  {
    cursoId: 'instalacao-hvac',
    moduloId: 'mod-01',
    titulo: 'Desafio da Rodada · Módulo 1: Fundamentos, Psicrometria e Engenharia de Campo',
    aulasCobertas: ['apresentacao', '01-01', '01-02', '01-03', '01-04'],
    contextoInicial:
      'Hora de testar a fundação científica da climatização! Cinco casos reais de campo cobrindo transferência de calor, superaquecimento/subresfriamento, psicrometria (SHR), acústica de instalação e EPIs de engenharia.',
    falaSucesso:
      'Fundação de rocha! Você domina desde o cálculo de Superaquecimento e Fator de Calor Sensível até a mitigação acústica logarítmica e a segurança NR-10/NR-35.',
    falaReforco:
      'Vale revisar os guardanapos do Módulo 1: relembre as faixas de Superaquecimento/Subresfriamento, o impacto do fluxo de ar no SHR e as regras de atenuação sonora em decibéis.',
    questoes: [
      {
        id: 'm1-q1',
        enunciado:
          'Durante o comissionamento de um sistema split em regime estável (Aula 01-01), você mede a linha de sucção e a linha de líquido com termopares de pinça e transdutores de pressão. Qual é a função física exata do Superaquecimento (SH) na sucção e do Subresfriamento (SC) na linha de líquido?',
        opcoes: [
          {
            id: 'a',
            texto:
              'O Superaquecimento garante que apenas vapor seco entre no compressor (prevenindo golpe de líquido), enquanto o Subresfriamento garante coluna de líquido 100% subresfriado antes do dispositivo de expansão (evitando flash gas).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Exato! **Superaquecimento** protege o compressor contra líquido e **Subresfriamento** garante 100% líquido na entrada da válvula de expansão.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'O Superaquecimento mede a quantidade de óleo no cárter e o Subresfriamento mede a rotação do ventilador interno.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Cuidado! SH e SC medem os desvios de temperatura em relação à saturação de evaporação e condensação.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Ambos devem ser mantidos em zero grau para que o fluido trabalhe sempre em mistura bifásica no compressor.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'SH igual a zero significa retorno de líquido puro no compressor (*liquid slugging*), destruindo espirais e palhetas!',
              },
            ],
          },
        ],
      },
      {
        id: 'm1-q2',
        enunciado:
          'Em uma sala comercial úmida no litoral (Aula 01-02), o cliente reclama de sensação abafada e paredes suando, embora o termômetro marque 22°C. A máquina foi superdimensionada e opera em velocidade máxima de ventilador com ciclos curtos. O que ocorreu na Carta Psicrométrica?',
        opcoes: [
          {
            id: 'a',
            texto:
              'O fluxo de ar excessivo elevou a temperatura da superfície da serpentina acima do Ponto de Orvalho (Dew Point), derrubando a remoção de calor latente (desumidificação) e elevando o SHR.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Na mosca! Sem cruzar o **Ponto de Orvalho** com tempo de contato na serpentina, a máquina só tira calor sensível e não desumidifica!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'A máquina removeu apenas calor latente sem alterar a temperatura de bulbo seco.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'neutro',
                texto:
                  'Foi o oposto: ela baixou o bulbo seco rápido demais sem condensar a umidade do ar.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'A umidade relativa caiu para zero por excesso de capacidade.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Máquina superdimensionada desliga antes de desumidificar a sala, deixando a umidade relativa alta.',
              },
            ],
          },
        ],
      },
      {
        id: 'm1-q3',
        enunciado:
          'Ao posicionar uma unidade condensadora próxima à janela de um dormitório (Aula 01-03), você precisa prever o nível de pressão sonora e a transmissão de vibração estrutural. Qual princípio físico rege a soma e atenuação de decibéis (dB)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'A escala decibel é logarítmica: duas fontes iguais somam +3 dB, enquanto dobrar a distância em campo livre atenua cerca de 6 dB, exigindo também calços antivibratórios elastoméricos contra ruído estrutural.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Perfeito! Duas condensadoras de 50 dB dão **53 dB** (não 100 dB!), e o isolamento vibroacústico evita que a laje vire caixa de ressonância.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Duas máquinas de 50 dB lado a lado geram exatamente 100 dB de ruído.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Decibéis são logarítmicos! Dobrar a potência sonora adiciona **+3 dB**.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Chumbar a condensadora direto no ferro da viga sem borracha elimina 100% do ruído.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Metal com metal cria ponte acústica estrutural que transmite a vibração do compressor para todo o prédio!',
              },
            ],
          },
        ],
      },
      {
        id: 'm1-q4',
        enunciado:
          'No planejamento de içamento e instalação externa em fachada predial e quadro energizado (Aula 01-04), qual protocolo de Segurança do Trabalho (NR-10, NR-35 e LOTO) é inegociável antes de iniciar a intervenção?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Aplicar bloqueio e etiquetagem (LOTO) com cadeado individual no disjuntor, testar ausência de tensão, e utilizar cinto paraquedista ancorado em linha de vida independente com talabarte duplo e absorvedor de energia (NR-35).',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Segurança nota mil! **LOTO** impede religamento acidental e ancoragem certificada **NR-35** salva vidas.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Colocar apenas uma fita crepe sobre o disjuntor e amarrar uma corda comum no suporte da condensadora.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Fita crepe não é bloqueio LOTO e ancorar no próprio suporte que está sendo instalado é risco fatal!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Confiar apenas no desligamento pelo controle remoto sem seccionar a alimentação elétrica.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'O controle remoto deixa a placa energizada em standby! Exige-se seccionamento físico e cadeado LOTO.',
              },
            ],
          },
        ],
      },
      {
        id: 'm1-q5',
        enunciado:
          'Integrando todo o Módulo 1: um cliente pede para instalar uma condensadora enclausurada num fosso fechado sem ventilação para “esconder a máquina”. Qual é a consequência termodinâmica direta desse erro?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Ocorre curto-circuito de ar quente (recirculação da descarga na sucção do condensador), disparando a pressão de condensação, reduzindo o subresfriamento útil, elevando a corrente elétrica e desarmando o compressor por proteção térmica.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Análise completa de engenheiro! Sem rejeição de calor na condensadora, o ciclo termodinâmico colapsa por alta pressão.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'A máquina gela o dobro porque o ar quente externo ajuda a ferver o refrigerante no condensador.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'O condensador precisa rejeitar calor para o ar externo; se aspirar ar superaquecido, ele não consegue condensar o fluido!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Não há impacto algum desde que a tubulação de cobre tenha menos de 5 metros.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'neutro',
                texto:
                  'Mesmo com 3 metros de linha, o curto-circuito térmico no condensador trava a máquina em poucos minutos.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cursoId: 'instalacao-hvac',
    moduloId: 'mod-02',
    titulo: 'Desafio da Rodada · Módulo 2: Tubulações de Cobre, Brasagem e Fluidos A2L',
    aulasCobertas: ['02-01', '02-02', '02-03'],
    contextoInicial:
      'Vamos colocar à prova sua mestria metalúrgica e química! Cinco desafios sobre dimensionamento de cobre (ASTM B280), brasagem com purga de nitrogênio e segurança com fluidos inflamáveis A2L/A3 (R-32 e R-290).',
    falaSucesso:
      'Metalurgia impecável! Suas linhas de cobre são limpas como artérias cirúrgicas, sem carepa de óxido cúprico, com flanges no torquímetro e total segurança A2L.',
    falaReforco:
      'Revise os pontos críticos do Módulo 2: espessuras de parede para R-410A/R-32, vazão de nitrogênio na brasagem (2 a 3 SCFH) e limites de inflamabilidade dos fluidos A2L.',
    questoes: [
      {
        id: 'm2-q1',
        enunciado:
          'Ao preparar tubos de cobre padrão ASTM B280 / NBR 7541 para conexões flangeadas em sistemas R-410A e R-32 (Aula 02-01), qual procedimento evita trincas no flange e vazamentos futuros?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Cortar em esquadro sem esmagar o tubo, escariar com a boca virada para baixo (sem cair limalha dentro), usar flangeador excêntrico com embreagem e apertar a porca com torquímetro de estalo na tabela em N·m.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Padrão ouro! Escariamento limpo, flange excêntrico espelhado e aperto calibrado no **torquímetro**.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Cortar com serra manual de arco, deixar a rebarba interna para “segurar melhor” a porca e apertar com chave inglesa e cano extensor até estalar o latão.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Serrar joga limalha para as EEVs e apertar sem torquímetro esmaga a aba de cobre, fazendo a porca rachar!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Enrolar fita veda-rosca de PVC (Teflon) nas roscas do flange SAE 45° para vedar o gás.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'No flange SAE 45° quem veda é o contato metal-metal entre o cone de latão e o cobre, nunca a rosca! Fita Teflon impede o torque correto.',
              },
            ],
          },
        ],
      },
      {
        id: 'm2-q2',
        enunciado:
          'Durante a brasagem oxiacetilênica com liga foscoper/prata em uma rede VRF (Aula 02-02), o que acontece no interior do tubo se você aquecer o cobre a mais de 700°C sem passar nitrogênio seco?',
        opcoes: [
          {
            id: 'a',
            texto:
              'O oxigênio interno reage com o cobre incandescente formando carepa preta de óxido cúprico (CuO), que depois é varrida pelo refrigerante/óleo POE e entope telas (strainers) e agulhas das EEVs.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Exatamente! Uma única brasagem sem purga de nitrogênio cria uma lixa preta que condena as EEVs da obra.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'A fuligem preta se dissolve no óleo e melhora a lubrificação do compressor.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Óxido cúprico é altamente abrasivo e entope os microfuros das válvulas eletrônicas!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Não forma óxido se a chama for aplicada apenas na parte externa da luva.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'O cobre conduz todo o calor para a parede interna; se houver ar lá dentro, forma carepa instantaneamente!',
              },
            ],
          },
        ],
      },
      {
        id: 'm2-q3',
        enunciado:
          'Qual é a vazão e pressão corretas da purga contínua de nitrogênio seco durante a brasagem (Aula 02-02)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Fluxo laminar contínuo e suave de 2 a 3 SCFH (1 a 3 PSIG), deslocando o oxigênio com saída livre na outra extremidade para não pressurizar a poça de fusão.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Cirúrgico! **2 a 3 SCFH** com saída aberta tira o oxigênio sem soprar a prata derretida para fora da junta.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Trancar a tubulação a 300 PSI enquanto aquece com o maçarico.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Nunca solde linha pressurizada! O cobre amolecido no calor estoura e sopra metal líquido no rosto do soldador!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Injetar oxigênio puro dentro do tubo para a solda correr mais rápido.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Oxigênio interno multiplica a oxidação e gera risco de explosão!',
              },
            ],
          },
        ],
      },
      {
        id: 'm2-q4',
        enunciado:
          'Na transição para fluidos refrigerantes de baixo GWP (Aula 02-03), como a norma ASHRAE 34 / ISO 817 classifica o R-32 e o R-290 (propano), e qual cuidado de ferramental é exigido?',
        opcoes: [
          {
            id: 'a',
            texto:
              'O R-32 é classe A2L (baixa toxicidade, levemente inflamável) e o R-290 é classe A3 (alta inflamabilidade), exigindo bombas de vácuo, recolhedoras e detectores certificados à prova de faísca (brushless / intrinsecamente seguros).',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Perfeito! **R-32 (A2L)** e **R-290 (A3)** exigem ferramental sem centelhamento e respeito à área mínima do ambiente.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Ambos são classe A1 não-inflamáveis, idênticos ao R-22.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Erro grave! O R-32 é A2L e o R-290 é um hidrocarboneto A3 altamente inflamável.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Pode-se misturar R-32 dentro de um sistema carregado com R-410A para completar carga.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Jamais misture fluidos refrigerantes! Isso altera a curva P-T, invalida a segurança e destrói o compressor.',
              },
            ],
          },
        ],
      },
      {
        id: 'm2-q5',
        enunciado:
          'Ao brasar uma Válvula de Expansão Eletrônica (EEV) ou válvula de serviço com vedações internas poliméricas (Aula 02-02), além da purga de nitrogênio, qual proteção térmica é obrigatória?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Remover a bobina/atuador eletrônico e envolver o corpo da válvula com pasta dissipadora térmica ou pano úmido, direcionando a chama da ponta para fora do corpo da válvula.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Exato! Proteger o corpo da válvula abaixo do limite térmico salva os anéis de Teflon e a agulha calibrada.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Aquecer diretamente o centro do corpo de latão da válvula até ficar vermelho.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Aquecer o corpo da EEV derrete a sede interna e trava o mecanismo de passo para sempre!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Jogar um balde de água gelada sobre a junta no segundo em que a prata derreter.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Choque térmico violento logo após a fusão gera microtrincas na liga de brasagem!',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cursoId: 'instalacao-hvac',
    moduloId: 'mod-03',
    titulo: 'Desafio da Rodada · Módulo 3: Drenagem de Condensado, Isolamento e Furação Estrutural',
    aulasCobertas: ['03-01', '03-02', '03-03'],
    contextoInicial:
      'Oito em cada dez chamados de garantia vêm de água no forro de gesso, suor na tubulação ou trinca estrutural! Resolva estes 5 casos de hidráulica de condensado, isolamento elastomérico e engenharia civil.',
    falaSucesso:
      'Zero retorno de obra! Seus drenos escoam livres sem sifão duplo, seu isolamento barra a difusão de vapor e nenhuma viga estrutural corre perigo na sua mão.',
    falaReforco:
      'Revise os princípios do Módulo 3: declividade mínima do dreno (1% a 2%), sifão em pressão negativa vs positiva, fator μ de resistência ao vapor e zonas proibidas em vigas.',
    questoes: [
      {
        id: 'm3-q1',
        enunciado:
          'Em uma rede de drenagem de condensado por gravidade (Aula 03-01), por que a instalação de dois sifões em série (double trapping) ou a falta de respiro atmosférico após o sifão faz a bandeja da evaporadora transbordar?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Porque o bolsão de ar aprisionado entre os dois sifões cria um bloqueio pneumático (Air Lock) que a baixa coluna hidrostática da bandeja não consegue vencer, represando a água.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Diagnóstico perfeito! O **Air Lock** trava o escoamento por gravidade mesmo com o cano totalmente limpo.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Porque dois sifões fazem a água correr rápido demais e secar o cano.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Pelo contrário: o bolsão de ar entre os sifões impede a água de descer!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Porque o PVC reage quimicamente com a água destilada do condensado.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'neutro',
                texto:
                  'O problema não é químico; é puramente mecânica dos fluidos e equilíbrio de pressão atmosférica.',
              },
            ],
          },
        ],
      },
      {
        id: 'm3-q2',
        enunciado:
          'Em um fan-coil ou dutado onde a bandeja de condensado fica no lado de sucção do ventilador (sob pressão estática negativa em relação ao forro, Aula 03-01), o que acontece se o dreno for ligado reto sem sifão dimensionado?',
        opcoes: [
          {
            id: 'a',
            texto:
              'A depressão interna aspira ar externo para dentro pelo tubo de dreno, impedindo a água de sair enquanto o ventilador opera e causando transbordamento repentino quando a máquina desliga.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Exato! Em pressão negativa, a altura do selo hídrico do sifão deve superar a pressão estática negativa em mmca mais folga de segurança!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'O ventilador empurra a água com mais força para fora do dreno.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Isso só ocorre em bandejas sob pressão positiva; na sucção (pressão negativa) o ventilador chupa o ar pelo dreno!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'A água evapora instantaneamente dentro da bandeja.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'A água acumula presa pela sucção de ar até transbordar no forro!',
              },
            ],
          },
        ],
      },
      {
        id: 'm3-q3',
        enunciado:
          'Ao isolar termicamente linhas frigorígenas de cobre (Aula 03-02), por que o uso de espuma de polietileno simples de célula aberta ou emendas sem cola de policloropreno causa condensação (“suor”) mesmo no escuro do entreforro?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Porque a diferença de pressão parcial de vapor (Vapor Drive) força a umidade do ar quente a difundir para o tubo frio; exige-se borracha elastomérica de célula fechada (alto fator μ) com juntas coladas e vedadas para manter a superfície acima do Ponto de Orvalho.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Aula de física! Sem **célula fechada** e colagem hermética nas emendas, o vapor atravessa o isolante e condensa no cobre gelado.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Porque o gás refrigerante transpira através dos poros sólidos da parede de cobre.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'A água que molha o forro vem da umidade do ar ambiente que condensa no tubo frio, não de dentro do cobre!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Colocar as duas linhas (líquido e sucção) dentro do mesmo tubo esponjoso resolve o problema.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Isolar líquido e sucção juntos transfere calor da linha de líquido quente para a sucção fria, roubando capacidade e deixando frestas de ar onde o vapor condensa!',
              },
            ],
          },
        ],
      },
      {
        id: 'm3-q4',
        enunciado:
          'Precisando atravessar uma parede ou elemento de concreto em obra (Aula 03-03), qual é a regra estrutural quanto a pilares, vigas de concreto armado e lajes protendidas?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Pilares e cabos de protensão jamais podem ser furados; furos em vigas exigem autorização expressa do calculista estrutural (evitando terços de apoio e armadura de tração), uso de scanner de armadura e perfuratriz diamantada com inclinação externa de 2° a 5°.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Responsabilidade de engenheiro! Scanner antes da serra-copo diamantada, **nunca** tocar em pilar ou cabo protendido, e caimento para fora contra chuva.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Furar a parte inferior da viga próximo ao pilar usando martelete rompedor e cortar o vergalhão de aço com esmerilhadeira.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Crime contra a estrutura! Cortar o ferro inferior de tração ou furar junto ao apoio no cisalhamento pode colapsar a viga!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Furar com caimento inclinado para dentro da sala para a água da chuva lavar o furo.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Furo inclinado para dentro traz toda a água da chuva da fachada para dentro do gesso e da parede do cliente!',
              },
            ],
          },
        ],
      },
      {
        id: 'm3-q5',
        enunciado:
          'Na travessia da tubulação frigorígena por uma parede corta-fogo ou fachada externa (Aula 03-03), como deve ser executado o acabamento do furo (Sleeve)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Instalar camisa passante (sleeve de PVC/metálico), manter o isolamento elastomérico contínuo sem esmagamento, selar contra fogo/fumaça (firestop intumescente em paredes corta-fogo) e vedar a face externa com selante de poliuretano/silicone.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Acabamento de alto padrão! O **sleeve** protege o isolamento contra o atrito da alvenaria e garante estanqueidade contra chuva, pragas e fumaça.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Arrancar o isolamento térmico no trecho dentro da parede e chumbar o cobre nu com cimento.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Cobre nu chumbado na parede cria infiltração de condensado no reboco e sofre corrosão química pelo cimento!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Deixar o buraco aberto em volta dos tubos para ventilar o entreforro.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Buraco aberto traz ar quente e úmido externo direto para o forro, gerando condensação severa e entrada de insetos/roedores!',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cursoId: 'instalacao-hvac',
    moduloId: 'mod-04',
    titulo: 'Desafio da Rodada · Módulo 4: Engenharia Elétrica, NBR 5410, Aterramento e Inversores',
    aulasCobertas: ['04-01', '04-02', '04-03'],
    contextoInicial:
      'Placas inverter queimadas, disjuntores desarmando e erros de comunicação nascem de instalações elétricas amadoras! Resolva estes 5 desafios de dimensionamento NBR 5410, aterramento/DPS e eletrônica de potência.',
    falaSucesso:
      'Engenharia elétrica afiada! Você domina queda de tensão, curva C de disjuntores, proteção DR/DPS, aterramento equipotencial e blindagem contra ruído PWM.',
    falaReforco:
      'Revise as aulas do Módulo 4: cálculo de queda de tensão máxima, proibição do neutro como terra, função do DPS + IDR e blindagem do cabo de comunicação.',
    questoes: [
      {
        id: 'm4-q1',
        enunciado:
          'No dimensionamento do circuito elétrico exclusivo de uma condensadora segundo a ABNT NBR 5410 (Aula 04-01), quais critérios simultâneos definem a seção mínima dos condutores de cobre e a curva do disjuntor termomagnético?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Capacidade de condução de corrente corrigida por temperatura e agrupamento (MCA = 125% da corrente nominal do maior motor + demais cargas), limite de queda de tensão e disjuntor Curva C (ou conforme MOCP do fabricante) dedicado.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Perfeito! Respeitar **MCA**, fatores de correção da **NBR 5410**, queda de tensão e **Curva C** evita aquecimento de cabos e desarmes falsos.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Ligar o ar-condicionado na mesma tomada das lâmpadas com fio paralelo fino e disjuntor de 63 A.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Disjuntor superdimensionado em cabo fino faz o fio derreter e pegar fogo antes do disjuntor desarmar!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Emendar cabo flexível com cabo rígido torcendo com os dedos sem terminal tubular (ilhós).',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Conexão frouxa sem terminal prensado gera ponto quente por efeito Joule ($R \\cdot I^2$) e carboniza a borneira!',
              },
            ],
          },
        ],
      },
      {
        id: 'm4-q2',
        enunciado:
          'Em uma vistoria elétrica (Aula 04-02), você encontra um instalador fazendo um “jumper” entre o borne Neutro (N) e o borne Terra (PE) na condensadora inverter porque a tomada não tinha fio terra. Qual é o risco técnico e de segurança dessa prática?',
        opcoes: [
          {
            id: 'a',
            texto:
              'É estritamente proibido pela NBR 5410: se o condutor neutro se romper na rede, a carcaça metálica da máquina fica energizada na tensão de fase (risco de choque letal), além de injetar ruído harmônico na placa inversora.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Alerta vital! Neutro rompido com jumper no terra transforma o gabinete metálico numa armadilha mortal e queima a placa.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Substitui perfeitamente a malha de aterramento e valida a garantia do fabricante.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Todos os fabricantes anulam a garantia da placa inverter quando detectam ausência de aterramento real ou neutro aterrado na carcaça!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Cravar um prego de 5 cm no reboco seco da parede resolve o aterramento.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Prego na alvenaria tem resistência elétrica altíssima e não escoa corrente de falta nem surto de DPS!',
              },
            ],
          },
        ],
      },
      {
        id: 'm4-q3',
        enunciado:
          'Para proteger as placas eletrônicas de equipamentos Inverter contra surtos atmosféricos/manobras de rede e proteger usuários contra choques por fuga de corrente (Aula 04-02), qual dupla de dispositivos deve constar no quadro elétrico?',
        opcoes: [
          {
            id: 'a',
            texto:
              'DPS (Dispositivo de Proteção contra Surtos) coordenado com o barramento de equipotencialização (BEP) para desviar sobretensões transitórias, e IDR (Interruptor Diferencial Residual ≤ 30 mA) adequado para cargas com retificadores inverter.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Proteção completa! O **DPS** salva os varistores e o módulo IPM da placa, enquanto o **IDR** protege a vida humana contra fugas à terra.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Apenas um fusível de vidro comum no cabo de comunicação.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Fusível é lento demais para conter um surto de microssegundos na linha de força!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Desligar o fio terra para o raio não subir pela haste.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Sem o condutor de proteção PE conectado ao BEP, o DPS não tem para onde escoar a energia do surto!',
              },
            ],
          },
        ],
      },
      {
        id: 'm4-q4',
        enunciado:
          'Na arquitetura de uma placa Inverter com correção de fator de potência ativa (PFC) e módulo IPM (Aula 04-03), qual é a sequência de conversão de energia e por que cabos de comunicação não podem correr colados aos cabos de força?',
        opcoes: [
          {
            id: 'a',
            texto:
              'A rede AC é retificada e elevada pelo circuito PFC para o Barramento DC (~310 a 380 VDC), e o módulo IPM chaveia em alta frequência (PWM) para o compressor BLDC; esse chaveamento gera interferência eletromagnética (EMI) que corrompe os pacotes de dados se o cabo de sinal não for separado/blindado.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Domínio total de eletrônica de potência! O chaveamento **PWM** gera ruído de alta frequência que exige separação física e cabo blindado nos dados.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'O compressor inverter trabalha diretamente em 220V AC 60 Hz sem passar por retificador nem capacitores DC.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Todo inverter retifica a tensão para DC Bus e depois sintetiza frequência variável via IGBTs no módulo IPM!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Usar o mesmo cabo multipolar para passar força do compressor e sinal serial de comunicação economiza eletroduto sem causar erro.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Acoplamento capacitivo e indutivo no mesmo cabo multipolar gera erro de comunicação intermitente e pode queimar o optoacoplador!',
              },
            ],
          },
        ],
      },
      {
        id: 'm4-q5',
        enunciado:
          'Antes de aplicar tensão de ensaio de 500 VDC com o Megômetro para testar a resistência de isolamento de cabos de força ou do motor do compressor (Aula 04-03), qual cuidado é obrigatório com as placas eletrônicas?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Desconectar totalmente os cabos das placas eletrônicas (PCBs e módulo IPM) antes de injetar os 500 VDC do megômetro, aplicando a alta tensão apenas nos enrolamentos do compressor ou nos cabos isolados.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Regra de ouro! Injetar **500 VDC** do megômetro nos bornes da placa eletrônica destrói microcontroladores e transistores instantaneamente.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Injetar 1.000 VDC diretamente nos bornes de comunicação S / F1-F2 da placa.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Isso fulmina a placa-mãe da evaporadora e da condensadora no mesmo segundo!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Realizar o teste de megômetro com a máquina ligada em funcionamento.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Teste de isolamento ôhmico sempre se faz com o circuito totalmente desenergizado e isolado!',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cursoId: 'instalacao-hvac',
    moduloId: 'mod-05',
    titulo: 'Desafio da Rodada · Módulo 5: Split, VRF, Câmaras Frias e Estanqueidade Zero Leak',
    aulasCobertas: ['05-01', '05-02', '05-03', '05-04'],
    contextoInicial:
      'Das residências às grandes centrais VRF e câmaras frigoríficas abaixo de zero! Resolva estes 5 casos sobre comprimento mínimo de linha, geometria de Refnets VRF, barreira de vapor/Frost Heave e ensaio de nitrogênio a 550-600 PSIG.',
    falaSucesso:
      'Engenheiro de sistemas completos! Você domina desde a acústica do loop de 3 metros no Split até o nivelamento ±15° de Refnets VRF, pisos aquecidos de câmaras frias e o padrão Vazamento Zero.',
    falaReforco:
      'Revise os números do Módulo 5: linha mínima de 3 m no Split, trecho reto de 500 mm e ±15° nos Refnets VRF, barreira de vapor no lado quente da câmara fria e compensação de 0,80 PSI/°F no nitrogênio.',
    questoes: [
      {
        id: 'm5-q1',
        enunciado:
          'Em uma instalação Split Inverter onde a evaporadora e a condensadora estão costas com costas na mesma parede (distância física de 60 cm, Aula 05-01), por que os fabricantes exigem manter o comprimento mínimo de 3 metros de tubulação de cobre?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Porque os 3 metros atuam como amortecedor acústico das pulsações de descarga do compressor rotativo e garantem o volume interno necessário para equalização de pressão e estabilidade da expansão, sem gerar golpes de retorno nem ruído na sala.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Exato! E se fizer espiral de compensação, deixe-a sempre na **horizontal** para não criar sifões verticais que acumulam óleo!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Apenas para fazer o cliente comprar mais tubo de cobre sem necessidade técnica.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Cortar a linha com 60 cm transmite um ronco mecânico insuportável para a evaporadora e desestabiliza o ciclo!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Deve-se enrolar 5 voltas na vertical formando vários sifões seguidos atrás da máquina.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Loop vertical em série aprisiona o óleo lubrificante fora do cárter do compressor!',
              },
            ],
          },
        ],
      },
      {
        id: 'm5-q2',
        enunciado:
          'Na montagem de derivadores Y (Refnets) de uma rede VRF comercial (Aula 05-02), quais são as duas regras geométricas obrigatórias para evitar separação gravitacional de fases (líquido/vapor) e divisão assimétrica de óleo?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Instalar os Refnets no plano horizontal com inclinação máxima de ± 15° (ou rigorosamente na vertical ascendente/descendente) e garantir no mínimo 500 mm de tubo reto antes da entrada da bifurcação.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Gabarito VRF! Inclinação acima de **± 15°** inunda o ramal de baixo e mata de fome o de cima, e curva colada ao Refnet joga o líquido para um lado só por força centrífuga.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Instalar o Refnet inclinado a 45° na horizontal e soldar uma curva de 90° colada na boca de entrada.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Essa é a receita clássica para metade das evaporadoras não gelarem e o compressor queimar sem óleo!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Substituir os Refnets projetados pelo fabricante por conexões T hidráulicas comuns de água fria.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'T comum gera choque frontal de fluxo, cavitação, perda de carga severa e desequilíbrio de óleo!',
              },
            ],
          },
        ],
      },
      {
        id: 'm5-q3',
        enunciado:
          'No projeto de uma câmara fria de congelados operando abaixo de 0°C (Aula 05-03), onde deve ficar a Barreira de Vapor nos painéis isolantes PIR e como evitar o fenômeno do Frost Heave (empolamento do piso em 15 a 30 cm)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'A Barreira de Vapor deve ser selada estritamente no lado quente (externo) dos painéis, e o subpiso deve receber isolamento XPS (100 a 150 mm) associado a aquecimento ativo de solo (tubulação de glicol a 13°C-24°C ou cabos aquecedores) mais válvula de alívio PRV aquecida na parede.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Engenharia de cofre térmico! Barreira no **lado quente**, subpiso aquecido contra **Frost Heave** e **PRV** contra implosão pós-degelo.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Selar a barreira de vapor apenas no lado frio interno e assentar os painéis direto na terra úmida sem aquecimento.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Selar o lado frio aprisiona gelo dentro da espuma (delaminação) e a falta de aquecimento subpiso congela o lençol freático e levanta a laje!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Tampar a válvula de alívio PRV com espuma expansiva para não entrar ar.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Sem a PRV, a contração do ar frio pós-degelo cria um vácuo de toneladas que implode os painéis do teto!',
              },
            ],
          },
        ],
      },
      {
        id: 'm5-q4',
        enunciado:
          'Por que o teste de vácuo (500 mícrons) NÃO substitui o ensaio de estanqueidade com nitrogênio seco a 550-600 PSIG por 24 horas (Aula 05-04)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Porque no vácuo a atmosfera exerce apenas 14,7 PSI (1 bar) de fora para dentro (podendo comprimir trincas ou puxar óleo/fluxo que vedam o poro temporariamente), enquanto o sistema VRF opera acima de 550 PSIG de dentro para fora.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Física pura! **14,7 PSI** de fora para dentro jamais testam uma solda que sofrerá **550 a 600 PSIG** de dentro para fora!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Porque o nitrogênio serve apenas para esfriar os tubos depois da solda.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'O ensaio estático de 24h a 550-600 PSIG é o único método que submete as juntas à fadiga real de alta pressão!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Pode-se substituir o nitrogênio por oxigênio puro a 550 PSIG.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Jamais! Oxigênio pressurizado em contato com óleo mineral ou PVE/POE explode violentamente!',
              },
            ],
          },
        ],
      },
      {
        id: 'm5-q5',
        enunciado:
          'Você pressurizou uma rede VRF com nitrogênio seco a 550 PSIG às 14h sob temperatura ambiente de 90°F. Na manhã seguinte (24h depois), a temperatura caiu para 70°F (queda de 20°F) e o manômetro marca 534 PSIG (queda de 16 PSI). Pela regra prática de Gay-Lussac (0,80 PSI por 1°F, Aula 05-04), qual é o diagnóstico?',
        opcoes: [
          {
            id: 'a',
            texto:
              'A rede está 100% estanque: 20°F × 0,80 PSI/°F = 16 PSI de queda esperada exatamente pela contração térmica do gás a volume constante.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Cálculo certeiro! Descontando **0,80 PSI por 1°F** (**16 PSI** para **20°F**), a pressão corrigida permanece cravada em **550 PSIG**!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Há um vazamento grave de 16 PSI que exige cortar todas as soldas da cobertura.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Esse é o famoso vazamento fantasma (*phantom leak*)! Sem compensar a temperatura pela Lei de Gay-Lussac, você condena uma rede perfeita.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'A pressão do nitrogênio nunca muda com a temperatura.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'neutro',
                texto:
                  'Todo gás confinado obedece $P_1/T_1 = P_2/T_2$, variando cerca de **0,80 PSI por 1°F** (ou **~0,1 bar por 1°C**).',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cursoId: 'instalacao-hvac',
    moduloId: 'mod-06',
    titulo: 'Desafio da Rodada · Módulo 6: Mestria em Vácuo e Desidratação de Precisão',
    aulasCobertas: ['06-01'],
    contextoInicial:
      'Hora de separar quem apenas liga uma bomba de vácuo por horas de quem domina a física da desidratação profunda! Cinco questões sobre ebulição a baixa pressão, hidrólise do óleo POE, Hagen-Poiseuille/VCRT, Flash Freezing e Vacuum Decay Test.',
    falaSucesso:
      'Mestre dos 500 Mícrons! Suas instalações atingem desidratação profunda em tempo recorde com VCRT e mangueiras de 1/2", blindando o óleo POE contra a hidrólise ácida.',
    falaReforco:
      'Revise a Aula 06-01: lembre-se do ponto de ebulição a 500 mícrons (-23,9°C), do limite de 100 ppm no óleo POE, do ganho de vazão com VCRT + mangueira 1/2" (3,50 CFM) e das 3 curvas do Decay Test.',
    questoes: [
      {
        id: 'm6-q1',
        enunciado:
          'Qual é o princípio termodinâmico real pelo qual a bomba de vácuo desidrata uma tubulação frigorígena e por que a meta de 500 mícrons é obrigatória mesmo em dias frios de inverno (10°C)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'A bomba reduz a pressão absoluta interna (removendo 99,93% dos 759.968 mícrons da atmosfera) até que o ponto de ebulição da água caia para -23,9°C (a 500 mícrons), fazendo a umidade ferver à temperatura ambiente e sair como vapor.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Física cristalina! Bomba de vácuo não chupa água líquida; ela reduz a pressão até a água ferver a **-23,9°C** (**500 mícrons**)!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'A bomba aspira água em estado líquido como uma bomba d’água recalcando um poço.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'A bomba de vácuo só extrai gases e vapores! Enquanto a água não mudar de fase para vapor, ela não sai da linha.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Em um dia frio de 10°C, parar o vácuo em 10.000 mícrons já ferve toda a água da tubulação.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'A **10.000 mícrons** sob **10°C** a água interna nem entra em ebulição, ficando retida na serpentina!',
              },
            ],
          },
        ],
      },
      {
        id: 'm6-q2',
        enunciado:
          'Por que os compressores modernos com fluidos R-410A e R-32 são muito mais vulneráveis à umidade residual do que os antigos sistemas com óleo mineral?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Porque o óleo sintético POE é altamente higroscópico (retém até 2.500 ppm de água contra 25 ppm do óleo mineral, 100 vezes mais) e, acima do limite de 100 ppm sob calor, sofre hidrólise gerando ácidos orgânicos (como ácido acético) que corroem o verniz do motor.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Exato! A **hidrólise** quebra o éster do óleo POE em álcool e ácido acético, levando o compressor ao *burnout*!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Porque o óleo sintético POE repele totalmente a água e nunca absorve umidade do ar.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Pelo contrário: o óleo POE absorve umidade do ar em minutos como uma esponja química!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Porque a umidade transforma o fluido R-410A em óleo mineral.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'neutro',
                texto:
                  'A reação destrutiva é a hidrólise ácida do lubrificante sintético POE/PVE.',
              },
            ],
          },
        ],
      },
      {
        id: 'm6-q3',
        enunciado:
          'Pela Lei de Hagen-Poiseuille (condutância proporcional a $d^4 / L$), o que ocorre quando você saca o núcleo da válvula Schrader (5 mm) usando uma ferramenta VCRT e substitui a mangueira padrão de 1/4" por uma mangueira dedicada de vácuo de 1/2"?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Remove-se o gargalo de 90% da válvula Schrader e multiplica-se a condutância: a vazão efetiva em vácuo profundo salta de 0,20 CFM (1/4" com Schrader) para 3,50 CFM (1/2" com VCRT), reduzindo horas de espera para 15 a 20 minutos.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Salto de **0,20 CFM** para **3,50 CFM**! Sem VCRT e mangueira de **1/2"**, uma bomba de **10 CFM** trabalha estrangulada a apenas **10%** da capacidade.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'A vazão diminui porque a mangueira de 1/2" tem mais volume de ar interno.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'No regime de escoamento molecular livre (< 1.000 mícrons), mangueiras largas de **1/2"** oferecem fluxo **16 vezes** maior que as de **1/4"**!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Não faz diferença tirar o miolo Schrader desde que o vacuômetro seja analógico.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'O pino da Schrader estrangula até 90% do fluxo, e manômetro analógico não lê mícrons!',
              },
            ],
          },
        ],
      },
      {
        id: 'm6-q4',
        enunciado:
          'Em uma manhã fria (abaixo de 4°C), o técnico abre uma bomba de vácuo potente de uma só vez numa linha com água acumulada. A leitura cai rapidamente abaixo de 200 mícrons, mas quando ele injeta nitrogênio seco a 5 PSI por 15 minutos e religa a bomba, a pressão sobe para 1.500 mícrons. O que havia acontecido?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Ocorreu Flash Freezing: a ebulição violenta tirou calor latente da própria água e congelou-a dentro do tubo (o gelo tem baixíssima pressão de sublimação, enganando o sensor); o nitrogênio seco transferiu calor sensível para derreter o gelo e permitir a secagem via Tríplice Evacuação.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Domínio absoluto! A **-40°C** a pressão de vapor do gelo cai a **96 mícrons**; a quebra com nitrogênio na **Tríplice Evacuação** derrete esse gelo oculto!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'O nitrogênio seco estava contaminado com água líquida de fábrica.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'neutro',
                texto:
                  'Nitrogênio industrial grau técnico é anidro (seco); a água já estava congelada em lentes de gelo dentro do cobre!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'O vacuômetro digital queimou por excesso de vácuo.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'O vacuômetro leu corretamente a baixa sublimação do gelo; faltava fundir o gelo com nitrogênio!',
              },
            ],
          },
        ],
      },
      {
        id: 'm6-q5',
        enunciado:
          'Com o vacuômetro digital instalado no ponto mais distante da bomba de vácuo, você fecha as válvulas esfera das VCRTs para iniciar o Vacuum Decay Test de 15 minutos. Como interpretar as três curvas possíveis no display?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Estabilizar abaixo de 500 mícrons por 15 min = Sistema Seco e Hermético (Pass); subir rápido e estacionar em plateau entre 1.000 e 2.000 mícrons = Umidade Residual evaporando (Fail); subir linear e continuamente até a atmosfera = Vazamento Físico (Fail).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Leitura clínica perfeita! **< 500 mícrons (15 min)** aprova, **plateau 1.000-2.000 mícrons** é umidade (*outgassing*) e **subida linear contínua** é vazamento físico.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Estacionar em 1.800 mícrons significa que o sistema está aprovado para receber refrigerante.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Plateau entre **1.000 e 2.000 mícrons** reprova o teste por presença de umidade residual!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'O Decay Test deve ser lido com a bomba ligada e o vacuômetro rosqueado direto na carcaça da bomba.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Com a bomba ligada e medindo na carcaça dela, você lê apenas a sucção interna da bomba, nunca a pressão estática real da rede!',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cursoId: 'instalacao-hvac',
    moduloId: 'mod-07',
    titulo: 'Desafio da Rodada · Módulo 7: Carga por Balanço de Massa, Telemetria OEM e Handover Digital',
    aulasCobertas: ['07-01', '07-02'],
    contextoInicial:
      'O Momento da Verdade! Cinco desafios finais integrando cálculo de carga por comprimento equivalente, simetria elétrica NEMA MG-1, telemetria OEM (D-Checker e Maintenance Tool 2), Certidão de Nascimento Digital e contrato PMOC (Lei 13.589/2018).',
    falaSucesso:
      'Certificado de Elite! Você domina todo o ciclo de comissionamento digital, protege a garantia dos compressores VRF e transforma cada entrega técnica em receita recorrente com PMOC por Telemetria!',
    falaReforco:
      'Revise as Aulas 07-01 e 07-02: comprimento equivalente na linha de líquido, limite de 1% na NEMA MG-1, pulsos das EEVs no D-Checker/Maintenance Tool e gatilho de 60.000 BTU/h (5 TR) do PMOC.',
    questoes: [
      {
        id: 'm7-q1',
        enunciado:
          'Por que carregar fluido refrigerante pelo tato na linha de sucção (“beer-can cold”, esperando 1,7°C a 4,4°C) em um sistema VRF Inverter leva à inundação do condensador e queima do compressor/IGBTs, e como a carga deve ser determinada (Aula 07-01)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Porque as EEVs modulam para manter o superaquecimento constante (mascarando o excesso de fluido até o subresfriamento passar de 30°F / 16,6K); a carga deve ser calculada matematicamente pelo Comprimento Efetivo da linha de líquido (L_real + soma dos L_eq das conexões) e injetada por peso em balança digital.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Perfeito! Em VRF a carga nasce da planilha de **Comprimento Equivalente** ($L_{eff} = L_{real} + \\sum L_{eq}$) e da **balança digital**.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Basta medir apenas o tubo de gás de sucção sem contar curvas nem Refnets e carregar no olhômetro.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'A massa adicional calcula-se estritamente na **linha de líquido** somando o comprimento equivalente de cada curva e junção T!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'As condensadoras VRF já vêm de fábrica com gás suficiente para 500 metros de tubulação sem carga adicional.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'A carga de fábrica cobre apenas a condensadora e trechos mínimos (0 a 7,5 m); toda a malha exige cálculo de *trim charge*!',
              },
            ],
          },
        ],
      },
      {
        id: 'm7-q2',
        enunciado:
          'Durante a partida elétrica de uma central VRF trifásica (Aula 07-01), você mede as tensões entre fases e verifica o equilíbrio segundo a norma NEMA MG-1, além de checar o Barramento DC. Quais são os limites críticos de segurança e operação?',
        opcoes: [
          {
            id: 'a',
            texto:
              'O desequilíbrio de tensão não deve superar 1% (pois ΔT% = 2 × [% Desequilíbrio]², onde 3% gera +18% de calor nos enrolamentos), e deve-se aguardar no mínimo 10 minutos após desligar o disjuntor antes de tocar na placa, pois o DC Bus retém mais de 300 VDC.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Engenharia elétrica de precisão! Assimetria **≤ 1% (NEMA MG-1)** preserva o estator e a espera de **10 minutos** protege contra os **> 300 VDC** dos capacitores.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Desequilíbrio de até 15% entre fases é normal e o barramento DC descarrega em 2 segundos.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Com 15% de assimetria o motor queima rapidamente, e tocar na placa em 2 segundos causa choque severo de mais de **300 VDC**!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'O diferencial de bulbo seco (Delta-T) ideal na evaporadora deve ser de 2°F.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Na evaporadora o **Delta-T** de bulbo seco ideal fica entre **16°F e 20°F (8,9K a 11,1K)**!',
              },
            ],
          },
        ],
      },
      {
        id: 'm7-q3',
        enunciado:
          'Ao realizar o diagnóstico de uma central VRF via softwares proprietários OEM como o Daikin D-Checker ou o Mitsubishi Maintenance Tool 2 (Aula 07-02), qual é a grande vantagem sobre os manômetros analógicos tradicionais?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Obtém-se a telemetria em tempo real sem abrir o circuito hermético (sem purgar fluido nas mangueiras), lendo aberturas de EEVs em pulsos (ex: EVH = 600 pulsos, EVL = 760 pulsos no Oil Return do VRV-III) e o histórico Pre-error Data de 1 em 1 minuto antes de falhas como o Erro 1500.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Exato! O **D-Checker** e o **Maintenance Tool 2** mostram os pulsos exatos das EEVs e a caixa-preta de **1 minuto** sem desperdiçar uma gota de refrigerante.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Os softwares OEM servem apenas para mudar a cor do LED do controle remoto.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Eles monitoram frequências em Hz, pressões, temperaturas de termistores, correntes e passos de todas as EEVs!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Diante de um Código de Erro 1500, deve-se recolher metade do gás imediatamente sem olhar o software.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'O *Pre-error Data* no **Maintenance Tool 2** evita esse erro mostrando se o baixo superaquecimento veio de um termistor avariado ou EEV travada!',
              },
            ],
          },
        ],
      },
      {
        id: 'm7-q4',
        enunciado:
          'Quais evidências compõem obrigatoriamente a “Certidão de Nascimento Digital” (Birth Certificate) no Handover 100% Digital de uma obra VRF para homologar a garantia estendida dos compressores e blindar juridicamente a instaladora (Aula 07-02)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Gráficos digitais de nitrogênio a 600 PSIG (41,3 bar) por 24h com compensação térmica, screenshots do Decay Test < 500 mícrons com timestamp, memória de carga pesada em balança, verificação de 12h de pré-aquecimento de cárter, 2h contínuas de telemetria OEM (enviadas em 21 a 90 dias) e fotos do cabo blindado 16 AWG aterrado em ponto único.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'animado',
                texto:
                  'Dossiê impecável! Se não está provado em dados digitais, não aconteceu. Com esse **Birth Certificate**, garantia e proteção legal estão garantidas!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Um recibo simples em papel dizendo “ar gelando normalmente” sem gráficos nem telemetria.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Recibo sem dados digitais não ativa garantia de compressor VRF nem defende a instaladora em caso de mau uso do cliente!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Aterrar a malha shield do cabo 16 AWG em todas as evaporadoras e condensadoras para criar múltiplos caminhos de terra.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'Aterrar a blindagem em múltiplos pontos cria *ground loops* que derrubam a rede M-NET / P1-P2! Aterre em **um único ponto**.',
              },
            ],
          },
        ],
      },
      {
        id: 'm7-q5',
        enunciado:
          'No Brasil, segundo a Lei Federal nº 13.589/2018, Portaria nº 3.523/GM e Resolução ANVISA RE 09/2003 (Aula 07-02), qual é o critério de obrigatoriedade do PMOC e a regra de isenção para os laudos laboratoriais da qualidade do ar?',
        opcoes: [
          {
            id: 'a',
            texto:
              'O PMOC (com TRT/ART de profissional habilitado no CREA/CFT) é obrigatório quando a soma das capacidades instaladas no edifício atinge ou ultrapassa 60.000 BTU/h (5 TR), e a empresa que realiza a análise microbiológica semestral do ar não pode ter vínculo de propriedade/controle com a empresa que faz a manutenção mecânica.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'animado',
                texto:
                  'Fechamento de ouro! **60.000 BTU/h (5 TR)** somados disparam a obrigatoriedade legal do **PMOC**, e o seu *Birth Certificate* vende o Contrato PMOC Habilitado por Telemetria!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'O PMOC só é exigido acima de 500 TR e a própria empresa de limpeza pode emitir seu próprio laudo microbiológico sem laboratório isento.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'alerta',
                texto:
                  'A partir de **5 TR (60.000 BTU/h)** somados o PMOC já é obrigatório por lei federal, e a **ANVISA RE 09/2003** proíbe conflito de interesses na análise microbiológica!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Basta ter cinco aparelhos de 18.000 BTU/h separados em salas diferentes do mesmo prédio para ficar isento da lei.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'alerta',
                texto:
                  'Cinco aparelhos de 18.000 BTU/h somam **90.000 BTU/h (7,5 TR)**, ultrapassando os **60.000 BTU/h (5 TR)** e exigindo PMOC obrigatoriamente!',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default DESAFIOS_MODULO;
