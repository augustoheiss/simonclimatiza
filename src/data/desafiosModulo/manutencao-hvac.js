// src/data/desafiosModulo/manutencao-hvac.js
// Boss Quizzes (Desafio da Rodada) — Manutenção Preventiva e Preditiva em HVAC
// 5 questões integradoras por módulo, cobrindo os 8 módulos do curso.

export const DESAFIOS_MODULO = [
  {
    cursoId: 'manutencao-hvac',
    moduloId: 'mod-01',
    titulo: 'Desafio da Rodada · Módulo 01: Fundamentos, Normas e Segurança na Manutenção',
    aulasCobertas: ['m01-01', 'm01-02', 'm01-03'],
    contextoInicial:
      'Bora passar a régua no Módulo 01! Aqui não tem espaço pra achismo jurídico nem pra imprudência na obra: vamos testar se você domina o custo da degradação energética, o arcabouço legal do PMOC e os protocolos vitais de segurança em campo.',
    falaSucesso:
      'Aí sim! Fechou o Módulo 01 com autoridade técnica, respaldo normativo e zero risco na bancada.',
    falaReforco:
      'Opa, faltou atenção nos detalhes normativos ou nos protocolos de vida! Revise os limites da ANVISA/ABNT e o procedimento LOTO antes de tentar de novo.',
    questoes: [
      {
        id: 'q1',
        enunciado:
          'Um edifício comercial possui 45 Splitões de 5 TR (60.000 BTU/h) cada, distribuídos em três andares. O gestor alega que não precisa de PMOC porque nenhum aparelho individual atinge 60 TR. Qual é a orientação técnica e legal correta segundo a Lei Federal nº 13.589/2018?',
        opcoes: [
          {
            id: 'a',
            texto:
              'O gestor está correto, pois a Lei 13.589/2018 exige PMOC apenas para centrais de água gelada (Chillers) com capacidade unitária igual ou superior a 60 TR.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'Erro grave! A lei soma a capacidade térmica instalada de todos os equipamentos da edificação, independentemente de serem splits individuais ou chiller central.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'A soma das capacidades instaladas totaliza 225 TR (2.700.000 BTU/h), superando amplamente o limite de 60 TR (720.000 BTU/h); o PMOC com responsável técnico habilitado é estritamente obrigatório.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Cravou! A Lei 13.589/2018 aplica-se a todos os edifícios de uso público e coletivo, e a obrigatoriedade de responsável técnico formal rege qualquer soma térmica instalada a partir de 60 TR.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'O PMOC só seria obrigatório se o edifício fosse hospitalar ou laboratório farmacêutico regido pela ABNT NBR 7256.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Negativo. A Lei 13.589/2018 abrange qualquer edifício de uso público e coletivo com ambientes climatizados artificialmente.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Como os equipamentos são de expansão direta, basta guardar as notas fiscais de limpeza semestral sem necessidade de plano assinado ou ART/TRT.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'duvida',
                texto:
                  'Nota fiscal de limpeza avulsa não substitui o PMOC nem isenta o proprietário de autuação sanitária pela Lei nº 6.437/1977.',
              },
            ],
          },
        ],
      },
      {
        id: 'q2',
        enunciado:
          'Durante uma auditoria de Qualidade do Ar Interior (QAI) referenciada pela Resolução RE nº 09/2003 da ANVISA e pela ABNT NBR 17037, qual conjunto de parâmetros indica conformidade microbiológica e físico-química em um escritório comercial?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Fungos viáveis ≤ 750 UFC/m³ com razão I/E ≤ 1,5; CO₂ ≤ 1.000 ppm (referência tradicional RE 09) ou ΔCO₂ ≤ 700 ppm acima do ar externo (NBR 17037); aerodispersoides ≤ 80 µg/m³.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Perfeito! Você domina tanto os tetos clássicos da RE 09/2003 quanto a atualização diferencial de CO₂ da ABNT NBR 17037:2023.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Fungos viáveis até 2.500 UFC/m³ com razão I/E ≤ 3,0; CO₂ até 5.000 ppm; velocidade do ar de 1,5 m/s na zona de ocupação.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'assustada',
                texto:
                  'Com 2.500 UFC/m³ e 5.000 ppm de CO₂ o prédio inteiro já estaria interditado pela Vigilância Sanitária!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Apenas a medição de temperatura de bulbo seco entre 18°C e 28°C dispensa as análises laboratoriais de fungos e CO₂.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'Conforto térmico não mede contaminação biológica nem renovação de ar exterior.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Razão I/E de fungos superior a 2,5 e presença livre de fungos patogênicos desde que a umidade relativa fique abaixo de 80%.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'A presença de fungos patogênicos ou toxigênicos é estritamente proibida (tolerância zero), e a razão I/E máxima é 1,5.',
              },
            ],
          },
        ],
      },
      {
        id: 'q3',
        enunciado:
          'Antes de iniciar o reparo mecânico e elétrico de um Rooftop trifásico no telhado, qual é a sequência obrigatória do procedimento LOTO (Lockout/Tagout — NR-10 e NR-12)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Desligar apenas pelo controle remoto na parede, avisar o porteiro verbalmente e iniciar a desmontagem do contator.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'espantado',
                texto:
                  'Controle remoto não secciona potência! Qualquer comando de automação ou falha de relé energiza a máquina na sua mão.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Preparação, Desligamento, Isolamento na chave seccionadora, Aplicação de cadeado individual e etiqueta de identificação, Alívio de energias residuais (descarga de capacitores e pressões) e Verificação de Ausência de Tensão ("Teste antes de tocar").',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Impecável! As 6 etapas do LOTO garantem que nem religamento acidental nem energia acumulada em capacitores causem acidentes fatais.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Colocar uma fita isolante prendendo o disjuntor aberto e testar se a carcaça dá choque com o dorso da mão.',
            correta: false,
            feedback: [
              {
                quem: 'juninho',
                emocao: 'assustado',
                texto:
                  'Fita isolante no disjuntor e teste no dedo é roleta-russa elétrica!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Retirar os fusíveis com o equipamento em funcionamento sob carga plena para economizar tempo de parada.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'cobrando',
                texto:
                  'Abrir fusível sob carga plena gera arco elétrico violento! Sempre desligue a carga antes de seccionar.',
              },
            ],
          },
        ],
      },
      {
        id: 'q4',
        enunciado:
          'Ao trabalhar com fluidos refrigerantes da classe A2L (levemente inflamáveis, como R-32 e R-454B) ou diante da decomposição térmica de HFCs sob chama aberta, quais cuidados específicos de segurança e primeiros socorros são indispensáveis?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Fluidos A2L exigem ferramentas certificadas A2L (antifaísca/motores brushless) e ventilação ativa; já a queima de fluidos fluorados forma ácido fluorídrico (HF) e fosgênio, exigindo gel de gluconato de cálcio a 2,5% no kit de emergência contra queimaduras químicas por HF.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Exato! O ácido fluorídrico penetra na pele e ataca o cálcio sanguíneo; o gel de gluconato de cálcio a 2,5% neutraliza o íon fluoreto imediatamente.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Fluidos A2L podem ser recolhidos com qualquer recolhedora comum com escovas faiscantes, e o ácido fluorídrico é neutralizado apenas com óleo mineral.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Recolhedoras comuns podem inflamar vazamentos A2L, e óleo mineral não neutraliza ácido fluorídrico!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Por serem mais leves que o ar, os fluidos HFC e A2L sobem rapidamente para o teto, dispensando exaustão ao nível do piso em casas de máquinas subterrâneas.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Ao contrário! Os gases refrigerantes fluorados são mais pesados que o ar e acumulam-se rente ao piso, causando asfixia por deslocamento de oxigênio.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Em caso de congelamento (frostbite) por jato de refrigerante líquido na pele, deve-se esfregar vigorosamente o local e aplicar água fervente.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'assustada',
                texto:
                  'Jamais esfregue tecido congelado nem use água quente! O protocolo correto é irrigar suavemente com água morna corrente (37°C a 40°C).',
              },
            ],
          },
        ],
      },
      {
        id: 'q5',
        enunciado:
          'Qual é a faixa crítica de temperatura da água estagnada que favorece a proliferação acelerada da bactéria Legionella pneumophila em torres de resfriamento e bandejas, e qual é a exigência de respirador para higienização dessas torres?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Faixa crítica entre 25°C e 45°C; exige uso obrigatório de respirador purificador de ar com filtro mecânico classe PFF2/N95 ou PFF3 contra aerossóis contaminados.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Na mosca! Entre 25°C e 45°C a Legionella multiplica-se rapidamente em águas paradas com biofilme, e a inalação de aerossóis sem PFF2/PFF3 é altíssimo risco.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Faixa crítica abaixo de 5°C; exige apenas máscara cirúrgica descartável de tecido.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Abaixo de 20°C a bactéria permanece dormente, e máscara cirúrgica comum não veda nem retém aerossóis finos.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Faixa crítica acima de 70°C; não requer proteção respiratória porque o vapor esteriliza o ar.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Acima de 60°C a Legionella morre; o perigo mora justamente na água morna entre 25°C e 45°C.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'A Legionella é transmitida apenas pela ingestão de água gelada de bebedouros, não oferecendo risco em torres de resfriamento.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'A transmissão ocorre pela inalação de microgotículas (aerossóis) dispersas no ar por torres de resfriamento e bandejas contaminadas!',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cursoId: 'manutencao-hvac',
    moduloId: 'mod-02',
    titulo: 'Desafio da Rodada · Módulo 02: Metodologia de Diagnóstico — Lendo o Sistema',
    aulasCobertas: ['m02-01', 'm02-02', 'm02-03'],
    contextoInicial:
      'Hora de provar que você lê o sistema como um engenheiro de diagnóstico! Vamos integrar psicrometria ("Ar antes do Gás"), Superaquecimento/Sub-resfriamento com blends zeotrópicos e diagnóstico de placas Inverter.',
    falaSucesso:
      'Diagnóstico cirúrgico! Você não troca peça no chute nem acopla manifold no escuro.',
    falaReforco:
      'Cuidado pra não cair na armadilha de condenar compressor ou completar gás sem medir o ar e a termodinâmica! Revise as aulas do Módulo 02 e tente novamente.',
    questoes: [
      {
        id: 'q1',
        enunciado:
          'Seguindo a regra de ouro "O Ar Antes do Gás", um técnico inspeciona um sistema Splitão de conforto em regime estável. Qual deve ser a vazão de ar nominal de referência no evaporador e a faixa normal de diferencial de temperatura de bulbo seco (ΔT = T_retorno − T_insuflamento)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Cerca de 400 CFM por TR (680 m³/h por TR) e ΔT de bulbo seco entre 8°C e 13°C (15°F a 22°F) em condições normais de umidade.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Isso mesmo! Sem validar os 400 CFM/TR e o ΔT de ar entre 8°C e 13°C, qualquer leitura de pressão no manifold será enganosa.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Cerca de 100 CFM por TR e ΔT de bulbo seco acima de 25°C para garantir congelamento rápido.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Um ΔT de 25°C com 100 CFM/TR indica estrangulamento severo de fluxo de ar e iminência de congelamento da serpentina!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              '800 CFM por TR e ΔT de apenas 1°C a 2°C.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  '800 CFM/TR é o dobro da vazão nominal, o que eliminaria a desumidificação (calor latente) e derrubaria o ΔT.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'A vazão de ar não influencia as pressões de sucção nem o superaquecimento do fluido refrigerante.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'Influencia diretamente! Sem troca térmica com o ar, o refrigerante não evapora na serpentina e a pressão de sucção despenca.',
              },
            ],
          },
        ],
      },
      {
        id: 'q2',
        enunciado:
          'Em um sistema operando com blend zeotrópico de alto glide térmico (como o R-407C), quais colunas da tabela Pressão × Temperatura devem ser utilizadas para calcular corretamente o Superaquecimento (SH) e o Sub-resfriamento (SC)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Ponto de Orvalho (Dew Point / Vapor Saturado) para calcular o Superaquecimento na sucção, e Ponto de Bolha (Bubble Point / Líquido Saturado) para calcular o Sub-resfriamento na linha de líquido.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Exato! Como o R-407C tem glide de 5°C a 7°C, inverter Bolha e Orvalho gera um erro grosseiro de diagnóstico.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Ponto de Bolha para ambos os cálculos, já que a pressão é constante ao longo de todo o ciclo.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Usar Ponto de Bolha na sucção de um fluido zeotrópico distorce o Superaquecimento em até 7°C!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Ponto de Orvalho para o Sub-resfriamento e Ponto de Bolha para o Superaquecimento.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Está invertido! Na saída do evaporador temos final de vaporização (Orvalho), e na saída do condensador temos final de condensação (Bolha).',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'A média aritmética entre a pressão de sucção e a pressão de descarga dividida por dois.',
            correta: false,
            feedback: [
              {
                quem: 'juninho',
                emocao: 'assustado',
                texto:
                  'Essa conta não existe na termodinâmica!',
              },
            ],
          },
        ],
      },
      {
        id: 'q3',
        enunciado:
          'Após confirmar que as serpentinas estão limpas e a vazão de ar está perfeita, você mede em um sistema com válvula de expansão eletrônica: Pressão de Sucção Baixa, Pressão de Descarga Baixa, Superaquecimento (SH) Alto, Sub-resfriamento (SC) Alto e acumulador de líquido morno após o filtro secador. Qual é o diagnóstico pela Matriz dos 8 Cenários?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Restrição na linha de líquido (como filtro secador saturado ou válvula parcialmente obstruída), que retém líquido no condensador (SC alto) e deixa o evaporador faminto (SH alto).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Diagnóstico de mestre! O Sub-resfriamento alto diferencia imediatamente a restrição na linha de líquido de uma subcarga de gás (onde o SC seria baixo).',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Subcarga severa de fluido refrigerante por vazamento na linha de sucção.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Na subcarga de refrigerante o condensador fica vazio e o Sub-resfriamento (SC) cai para valores muito baixos ou zero!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Sobrecarga de fluido refrigerante com retorno de líquido ao compressor.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Na sobrecarga teríamos pressão de descarga ALTA e Superaquecimento BAIXO.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Compressor ineficiente com palhetas quebradas (bypass interno).',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'No compressor sem compressão a pressão de sucção sobe (fica alta) e a razão de compressão cai abaixo de 2,0.',
              },
            ],
          },
        ],
      },
      {
        id: 'q4',
        enunciado:
          'Em uma condensadora Inverter alimentada em 220 V CA monofásico, qual é a tensão esperada no Barramento CC (DC Link) após a ponte retificadora e os capacitores eletrolíticos, e qual o limite seguro de descarga antes de tocar na placa?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Cerca de 310 V CC (220 V × √2 ≈ 311 V CC); deve-se aguardar 5 a 10 minutos após o desligamento e confirmar com multímetro tensão inferior a 30 V CC nos capacitores.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Certíssimo! O barramento CC armazena energia letal (~310 V CC em redes 220 V ou ~540 V CC em redes 380 V) e exige confirmação abaixo de 30 V CC.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Cerca de 12 V CC; pode-se tocar nos terminais do IPM imediatamente após desligar o disjuntor.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'espantado',
                texto:
                  '12 V CC é só na fonte secundária de controle! O barramento principal opera acima de 300 V CC e queima sua mão e a placa se houver curto.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Exatamente 220 V CC; deve-se descarregar os capacitores fechando curto com uma chave de fenda nos terminais.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'assustada',
                texto:
                  'Jamais feche curto com chave de fenda! O pico de corrente vaporiza a trilha da placa e danifica os capacitores e o IPM.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Cerca de 1.000 V CC; exige o uso de megômetro diretamente nos pinos do módulo IPM para descarregar.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Aplicar megômetro na placa eletrônica destrói os semicondutores do IPM instantaneamente!',
              },
            ],
          },
        ],
      },
      {
        id: 'q5',
        enunciado:
          'Para testar um módulo IPM (Intelligent Power Module) no multímetro na escala de Teste de Diodo (cabos U, V, W desconectados do compressor) e para instalar o dispositivo DR no quadro de máquinas Inverter, quais são os padrões corretos?',
        opcoes: [
          {
            id: 'a',
            texto:
              'No teste de diodo do IPM, os 6 diodos de roda-livre (entre P e U/V/W, e entre N e U/V/W) devem apresentar queda simétrica de ~0,4 V a 0,6 V em um sentido e OL no inverso; no quadro elétrico, deve-se utilizar DR Tipo B (sensível a correntes de fuga CC alisadas e alta frequência) para evitar disparos espúrios.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Gabarito! Simetria de 0,4 V–0,6 V valida a ponte IGBT do IPM, e o DR Tipo B protege sem cair por harmônicas ou fugas CC.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'O IPM deve dar continuidade direta (0,0 Ω / apito) entre P e N nos dois sentidos, e o DR deve ser retirado definitivamente do quadro.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Continuidade 0,0 Ω entre P e N significa que o IPM entrou em curto-circuito franco e está queimado!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Deve-se injetar 1.000 V CC com megômetro nos pinos U, V, W do IPM e instalar um DR Tipo AC residencial de 10 mA.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'Megômetro na placa queima o IPM, e DR Tipo AC satura o núcleo magnético com correntes CC de inversores!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'A blindagem (malha) do cabo de comunicação RS-485 da Inverter deve ser aterrada nas duas pontas simultaneamente junto com os cabos de força U, V, W.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Aterrar a malha do cabo RS-485 nas duas pontas cria loop de terra (corrente parasita na malha)! Aterra-se em apenas uma extremidade (na condensadora/mestre).',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cursoId: 'manutencao-hvac',
    moduloId: 'mod-03',
    titulo: 'Desafio da Rodada · Módulo 03: Manutenção do Fluxo de Ar, Serpentinas e Drenagem',
    aulasCobertas: ['m03-01', 'm03-02', 'm03-03', 'm03-04'],
    contextoInicial:
      'Chegou a hora de testar o domínio sobre troca térmica, filtragem e drenagem! Vamos ver se você protege a mecânica fina das serpentinas, evita bypass de filtros e projeta linhas de condensado à prova de transbordamento.',
    falaSucesso:
      'Excelente! Fluxo de ar livre, serpentinas íntegras, filtros vedados e drenagem sem goteira.',
    falaReforco:
      'Opa, cuidado com o excesso de pressão na lavadora ou com a química agressiva nas aletas! Revise os parâmetros do Módulo 03 e tente novamente.',
    questoes: [
      {
        id: 'q1',
        enunciado:
          'Durante a higienização da serpentina evaporadora de um equipamento Inverter com Válvula de Expansão Eletrônica (EEV), quais precauções mecânicas e hidráulicas são obrigatórias?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Remover a bobina do motor de passo da EEV e vedar seu conector com saco plástico estanque antes de molhar; aplicar jato d’água perpendicular às aletas com pressão controlada abaixo de 200 PSI (idealmente 100 a 130 PSI).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Cirúrgico! Protege a bobina da EEV contra oxidação/curto na placa e preserva as aletas de alumínio sem amassá-las.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Usar lavadora de alta pressão automotiva a 1.800 PSI em ângulo de 45° diretamente sobre as aletas e sobre a bobina da EEV conectada.',
            correta: false,
            feedback: [
              {
                quem: 'juninho',
                emocao: 'assustado',
                texto:
                  '1.800 PSI em 45° fecha a colmeia inteira como uma parede de alumínio e queima a saída da EEV na placa!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Se a serpentina estiver bloqueada por gelo, deve-se picar o gelo com chave de fenda e maçarico antes de lavar.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'assustada',
                texto:
                  'Objeto pontiagudo fura os tubos de cobre de parede fina! O degelo deve ser feito desligando o compressor e mantendo a ventilação ligada (ou água morna até 55°F).',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Dispensar o sifão (P-Trap) em evaporadores que trabalham sob pressão estática negativa (lado da sucção do ventilador).',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Sob pressão negativa, sem sifão P-Trap o ventilador aspira ar pelo tubo de dreno, impedindo o escoamento e fazendo a bandeja transbordar!',
              },
            ],
          },
        ],
      },
      {
        id: 'q2',
        enunciado:
          'Qual é a diferença crítica no procedimento de limpeza química e hidrojateamento entre uma condensadora convencional de tubos aletados (cobre/alumínio) e uma condensadora de Microcanais (MCHE 100% alumínio)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Condensadoras de Microcanais exigem exclusivamente detergente de pH neutro (6,5 a 7,5), pressão máxima de 600 PSI com bico leque de 15° a 40° e jateamento no sentido oposto ao fluxo de ar normal (de dentro para fora).',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Exatamente! Produtos ácidos ou alcalinos fortes dissolvem as microaletas brasadas do MCHE e causam microfuros irreparáveis.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Condensadoras de Microcanais devem ser lavadas com soda cáustica pura (pH 14) ou desincrustante ácido fluorídrico (pH 1) para abrir o alumínio.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'espantado',
                texto:
                  'Isso destrói um trocador MCHE de dezenas de milhares de reais em minutos por corrosão intergranular!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Tanto no tubo-aleta quanto no microcanal, a temperatura de descarga do compressor pode operar continuamente acima de 320°F (160°C) sem degradar o óleo PVE/POE.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'O limite seguro de temperatura na linha de descarga é 225°F (107°C); próximo a 300°F (149°C) o óleo PVE/POE sofre quebra térmica e carboniza!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'O jateamento deve ser feito sempre de fora para dentro, empurrando a sujeira para o fundo das microaletas.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Jatear de fora para dentro compacta o tapete de sujeira no interior da colmeia! Lavamos sempre no sentido inverso ao fluxo de ar.',
              },
            ],
          },
        ],
      },
      {
        id: 'q3',
        enunciado:
          'Sobre a física da filtragem de ar (ASHRAE 52.2 / ISO 16890), o que caracteriza o MPPS (Most Penetrating Particle Size), qual o impacto do bypass em frestas de montagem e como se comporta um filtro de carvão ativado?',
        opcoes: [
          {
            id: 'a',
            texto:
              'O MPPS situa-se em ~0,3 µm (onde filtros HEPA testam 99,97% de eficiência); uma fresta de apenas 1 mm a 2 mm nos caixilhos pode derrubar a eficiência real de um filtro MERV 14 de 95% para ~20%; e filtros de carvão ativado saturam quimicamente seus microporos sem aumentar o diferencial de pressão (ΔP) no manômetro.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Domínio completo! O ar sempre segue o caminho de menor resistência pelas frestas, e carvão ativado exige controle por horas de uso/análise química, não por manômetro.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Um filtro funciona apenas como uma peneira simples onde partículas menores que 0,1 µm nunca são capturadas por difusão browniana.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Partículas menores que 0,1 µm sofrem intenso movimento browniano (zigue-zague) e são facilmente capturadas por difusão nas fibras!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Filtros finos MERV 13 a 16 e filtros HEPA podem ser lavados com mangueira e sabão em pó para reutilização infinita.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'Filtros finos e absolutos descartáveis jamais podem ser lavados; a água destrói a carga eletrostática e rompe a microfibra.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'O filtro de carvão ativado avisa que saturou de odores e COVs quando a perda de carga (ΔP) triplica no manômetro diferencial Magnehelic.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Adsorção gasosa em nível molecular não obstrui a passagem física do ar; o ΔP permanece quase inalterado mesmo com o carvão 100% saturado!',
              },
            ],
          },
        ],
      },
      {
        id: 'q4',
        enunciado:
          'Na instalação e manutenção da linha de drenagem de condensado, qual deve ser a declividade mínima da tubulação, como deve ser ligado a chave boia de segurança (Float Switch) em sistemas 24 VCA e qual biocida utilizar nas pastilhas de bandeja?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Declividade mínima de 1% (1 cm de queda por metro linear); chave boia ligada em série no borne R (24 VCA) ou Y para cortar o resfriamento; e pastilhas à base de sais de amônio quaternário (evitando cloro/hipoclorito que corrói metais e resseca polímeros).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Perfeito! 1% de caimento garante escoamento gravitacional, cortar o borne R/Y evita transbordo no forro, e o amônio quaternário combate a zoogleia sem corroer a bandeja.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Tubulação 100% nivelada (0% de caimento); chave boia ligada em paralelo entre R e C para queimar o fusível da placa; e uso de água sanitária pura na serpentina.',
            correta: false,
            feedback: [
              {
                quem: 'juninho',
                emocao: 'assustado',
                texto:
                  'Ligar a boia entre R e C dá curto direto no transformador 24 V, e cloro na serpentina cria corrosão formigueiro no cobre!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Em bombas de condensado, a válvula de retenção (Check Valve) na saída deve ser arrancada para aumentar a vazão da bomba.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Sem a Check Valve, toda a coluna de água da mangueira de recalque volta para o reservatório quando a bomba desliga, gerando short-cycling infinito!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Fitas isolantes plásticas comuns e bandejas de PVC sem proteção resistem indefinidamente à radiação UV-C (254 nm) sem precisar de blindagem.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'A radiação UV-C fotodegrada plásticos e isolamentos expostos, deixando-os quebradiços! Exige blindagem com fita de alumínio reflexiva ou chapas metálicas.',
              },
            ],
          },
        ],
      },
      {
        id: 'q5',
        enunciado:
          'Em câmaras frigoríficas que operam abaixo de 0°C (congelados), qual detalhe construtivo é indispensável na linha de dreno do evaporador para evitar que a água do degelo congele dentro do tubo e bloqueie o escoamento?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Instalação de fita de aquecimento elétrico autorregulável (Heat Tracing) ao longo do tubo no trecho frio, revestida por isolamento térmico elastomérico de no mínimo 25 mm, com o sifão posicionado do lado externo aquecido.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Na mosca! Sem Heat Tracing funcionando, o sifão externo e o isolamento de 25 mm, a água congela na tubulação na primeira parada do degelo.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Instalar o sifão P-Trap dentro da câmara a −20°C sem isolamento térmico para que o selo hídrico congele e vede o tubo.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'espantado',
                texto:
                  'Selo hídrico congelado dentro da câmara vira uma rolha de gelo permanente e transborda toda a água do próximo degelo sobre as mercadorias!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Despejar a água do degelo diretamente no piso da câmara fria para formar uma pista de gelo.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'Risco gravíssimo de acidente de trabalho e contaminação sanitária!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Usar tubulação de cobre fino sem caimento e sem aquecimento.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'O cobre sem aquecimento troca calor ainda mais rápido com o ar negativo da câmara, congelando a água instantaneamente.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cursoId: 'manutencao-hvac',
    moduloId: 'mod-04',
    titulo: 'Desafio da Rodada · Módulo 04: Integridade do Circuito Frigorífico — Vazamentos, Carga e Óleo',
    aulasCobertas: ['m04-01', 'm04-02', 'm04-03'],
    contextoInicial:
      'Agora entramos no coração do circuito frigorífico! Vamos testar se você domina caça a microvazamentos, brasagem limpa com nitrogênio passante, acerto fino de carga refrigerante e diagnóstico químico/elétrico do compressor.',
    falaSucesso:
      'Brilhou! Circuito estanque, brasagem espelhada por dentro, carga cravada na balança e óleo protegido.',
    falaReforco:
      'Atenção aos detalhes do circuito frigorífico! Uma falha em brasagem, carga zeotrópica ou teste de megômetro sob vácuo custa um compressor inteiro. Revise o Módulo 04!',
    questoes: [
      {
        id: 'q1',
        enunciado:
          'Durante a pesquisa de vazamentos e o reparo por brasagem em uma linha frigorífica com conexões de cobre e válvula de serviço em latão, quais procedimentos técnicos são obrigatórios?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Mover a ponta do detector eletrônico a ≤ 7 cm/s por baixo da tubulação; jamais usar espuma com amônia em latão (evitando Stress Corrosion Cracking — SCC); purgar a linha com Nitrogênio seco passante a 2–3 SCFH durante a brasagem; e usar liga Prata 45%–56% com fluxo em uniões cobre-latão/aço.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Aula de engenharia! N2 passante a 2–3 SCFH impede a carepa de óxido cúprico (CuO), e fugir da amônia salva o latão contra trincas sob tensão.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Pressurizar o sistema com Oxigênio puro para achar o vazamento e brasar com a linha pressurizada a 400 PSI.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'espantado',
                texto:
                  'NUNCA use Oxigênio! Oxigênio em contato com óleo do compressor explode violentamente por ignição espontânea (efeito Diesel)!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Brasar sem nitrogênio passante porque o óleo POE dissolve a carepa preta de óxido de cobre sem entupir a EEV.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Pelo contrário! O óleo POE/PVE age como detergente, arranca a carepa da parede do tubo e entope a tela da EEV e os capilares!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Ao aplicar óleo selante Nylog Blue na rosca e face do flange (flare), deve-se dobrar o torque máximo da tabela para esmagar o cobre.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Como o Nylog reduz o atrito na rosca (fator K), devemos usar o limite INFERIOR da faixa de torque nominal para não decepar o flange!',
              },
            ],
          },
        ],
      },
      {
        id: 'q2',
        enunciado:
          'Um equipamento perdeu cerca de 30% da sua carga de fluido zeotrópico série 400 (como R-407C ou R-410A) devido a um vazamento na fase vapor. Após corrigir o vazamento e evacuar abaixo de 500 microns, como deve ser feito o acerto de carga e qual método de ajuste fino aplica-se a TXV/EEV versus Orifício Fixo?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Para perdas > 20% em misturas zeotrópicas, recolher 100% do fluido remanescente (devido ao fracionamento da composição) e carregar por peso na fase líquida; no ajuste fino, sistemas com TXV/EEV são ajustados pelo Sub-resfriamento (8°F a 14°F / 4,5°C a 7,8°C) e sistemas com Orifício Fixo/Capilar pelo Superaquecimento Alvo.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Exato! Completar gás ("topping off") após perda relevante em blend zeotrópico desequilibra a mistura, e nunca se ajusta carga de TXV olhando apenas para o Superaquecimento!',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Apenas completar o gás na fase vapor com a garrafa em pé até o tubo de sucção suar na mão.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Carregar blend série 400 em fase vapor fraciona o fluido dentro da própria garrafa, e "tubo gelado na mão" não é instrumento de medição!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Ajustar sistemas com Válvula de Expansão Termostática (TXV) pelo Superaquecimento e sistemas com Capilar pelo Sub-resfriamento.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Está invertido! A TXV tenta manter o Superaquecimento constante sozinha; por isso medimos a carga dela pelo Sub-resfriamento na saída do condensador.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Quando a temperatura externa está abaixo de 65°F (18°C), basta jogar o dobro de gás para subir a pressão de alta na marra.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Abaixo de 65°F (18°C), carregar por pressão/SC sem pesar na balança ou sem o protocolo de bloqueio controlado (Airflow Restriction / Approach Lennox) gera sobrecarga severa no verão!',
              },
            ],
          },
        ],
      },
      {
        id: 'q3',
        enunciado:
          'Na refrigeração comercial (câmaras frigoríficas), por que o Design Temperature Difference (DTD = Temperatura da Câmara − Temperatura de Evaporação) é projetado em 10°F ± 3°F (~5,5°C) para alimentos frescos, em vez dos 35°F (~19,5°C) típicos do ar-condicionado de conforto?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Porque um DTD pequeno (~10°F / 5,5°C) mantém a umidade relativa alta (85% a 90%) dentro da câmara, evitando a desidratação, murchamento e perda de peso comercial de carnes, frutas e verduras.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Perfeito! Se o DTD da câmara de carnes ficar alto (ex.: 20°F–30°F), a serpentina muito fria arranca a água dos alimentos e dá prejuízo no peso da balança do açougue.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Para ressecar ao máximo os alimentos frescos e reduzir a umidade relativa da câmara para menos de 20%.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Umidade de 20% estragaria todas as hortaliças e carnes frescas por desidratação severa!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Porque câmaras frigoríficas não utilizam evaporadores aletados nem ventiladores.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Forçadores de ar de câmaras frias usam evaporadores aletados e ventiladores dimensionados especificamente para esse ΔT reduzido.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'O DTD não tem nenhuma relação com a umidade relativa do ar nem com a conservação do produto.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'Na psicrometria de câmaras frias, o DTD é o principal determinante da umidade relativa interna!',
              },
            ],
          },
        ],
      },
      {
        id: 'q4',
        enunciado:
          'Sobre lubrificantes frigoríficos e testes elétricos no compressor: quais são os limites críticos de umidade e acidez no óleo POE, e por que é proibido realizar teste de isolamento (megômetro) ou energizar o compressor enquanto o sistema está sob vácuo?',
        opcoes: [
          {
            id: 'a',
            texto:
              'No óleo POE, umidade > 80 ppm (ideal < 50 ppm) e acidez TAN > 0,15 mg KOH/g (~300 ppm) causam hidrólise ácida e Copper Plating; e aplicar megômetro ou tensão sob vácuo causa arco voltaico interno e queima dos enrolamentos devido à queda da rigidez dielétrica no vácuo (Lei de Paschen).',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Explicação impecável! Pela Lei de Paschen, o gás rarefeito sob vácuo conduz arco elétrico com tensões muito baixas, destruindo o verniz do estator.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'O óleo POE não absorve umidade do ar (não é higroscópico) e o melhor momento para passar o megômetro a 1.000 V CC é em vácuo profundo de 200 microns.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'espantado',
                texto:
                  'O óleo POE é cerca de 10 vezes mais higroscópico que o óleo mineral, e passar megômetro a 200 microns fuzila o compressor na hora!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'A diferença entre o óleo POE e o óleo PVE (Polivinil Éter) é que o POE não sofre hidrólise com água e o PVE forma ácidos fortes.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'É exatamente o oposto! O óleo POE é um éster que sofre hidrólise química na presença de água gerando ácido, enquanto o PVE é um éter que não sofre hidrólise ácida.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Se um compressor parado no frio apresentar resistência de isolamento de 0,4 MΩ no megômetro, ele deve ser jogado no lixo imediatamente sem aquecer o cárter.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Segundo a engenharia da Copeland, refrigerante líquido e umidade condensados no óleo frio derrubam a leitura; deve-se energizar a resistência de cárter por 2 a 4 horas e retestar antes de condenar!',
              },
            ],
          },
        ],
      },
      {
        id: 'q5',
        enunciado:
          'Após a queima severa dos enrolamentos de um compressor (Burnout ácido com óleo escuro e odor pungente), qual é o protocolo correto de descontaminação antes de liberar o novo compressor em operação?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Recolher o fluido contaminado em cilindro dedicado de descarte; lavar as linhas com solvente específico (ex.: Rx11-Flush) impulsionado por Nitrogênio até máx. 150 psig; instalar filtro secador de linha de líquido e filtro secador de sucção antiácido (núcleo 70% alumina ativada / 30% peneira molecular); realizar vácuo triplo até 200 microns; e retestar a acidez do óleo após 48h–72h.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Protocolo padrão-ouro! Sem flushing, filtro antiácido na sucção, vácuo triplo de 200 microns e reteste após 72h, o ácido residual queima o compressor novo em poucas semanas.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Apenas desparafusar o compressor queimado, soldar o compressor novo no lugar e aproveitar o mesmo gás ácido e o mesmo filtro secador antigo.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'assustada',
                texto:
                  'Isso é sentença de morte para o compressor novo! O ácido fluorídrico/clorídrico residual corrói o verniz do motor novo rapidamente.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Lavar o interior da tubulação frigorífica com água e detergente neutro usando lavadora de alta pressão.',
            correta: false,
            feedback: [
              {
                quem: 'juninho',
                emocao: 'assustado',
                texto:
                  'Água e sabão dentro da linha frigorífica nunca mais saem completamente e destroem qualquer óleo sintético!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Soprar a linha com ar comprimido de compressor de pintura comum e deixar o filtro secador de sucção instalado permanentemente por 10 anos sem medir queda de pressão.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Ar comprimido injeta água e óleo incompatível na linha, e o filtro de sucção temporário deve ser monitorado quanto à perda de carga e removido após a neutralização do ácido!',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cursoId: 'manutencao-hvac',
    moduloId: 'mod-05',
    titulo: 'Desafio da Rodada · Módulo 05: Manutenção Elétrica — Contatores, Capacitores e Motores',
    aulasCobertas: ['m05-01', 'm05-02', 'm05-03'],
    contextoInicial:
      'Mais de 70% das panes em campo começam na elétrica! Vamos conferir se você domina testes sob carga em contatores, diagnóstico de capacitores, limites de desbalanceamento trifásico e proteção de motores.',
    falaSucesso:
      'Elétrica afiada! Você detecta falha incipiente em contator, capacitor e rede trifásica antes da máquina parar.',
    falaReforco:
      'Opa, revise os limites elétricos do Módulo 05! Queda de tensão em contatos, tolerância de capacitância e desbalanceamento de fases têm números exatos.',
    questoes: [
      {
        id: 'q1',
        enunciado:
          'Ao medir a queda de tensão (Voltage Drop Test) com o multímetro diretamente entre a entrada (L) e a saída (T) de um mesmo polo de um contator fechado e operando sob carga nominal do compressor, qual leitura indica oxidação/carbonização excessiva dos contatos (pitting) exigindo substituição?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Queda de tensão superior a 0,5 V CA (500 mV) através do polo fechado sob carga.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Exato! Um polo saudável fechado sob carga tem queda próxima de zero (< 0,1 V a 0,2 V); acima de 0,5 V CA há resistência de contato elevada gerando aquecimento por efeito Joule.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Queda de tensão de 0,01 V CA; nesse caso deve-se lixar a pastilha de prata com lima grossa até aparecer o cobre.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  '0,01 V CA é excelente! E jamais se lixa contato de liga de prata-óxido de cádmio/estanho com lima grossa, pois remove o revestimento nobre antissoldagem.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Apenas quando a queda de tensão ultrapassar 110 V CA no mesmo polo.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Com 110 V de queda em um polo o contato já abriu completamente e o motor já está rodando em falta de fase (single-phasing)!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'O teste de continuidade com o contator desligado sem carga substitui totalmente o teste de queda de tensão sob carga.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Sem carga o multímetro injeta miliamperes que passam por um fiozinho de contato, mascarando uma pastilha carbonizada que falha quando passam 25 A!',
              },
            ],
          },
        ],
      },
      {
        id: 'q2',
        enunciado:
          'Um capacitor permanente de marcha (Run Capacitor) tem especificação nominal de 45 µF ± 5%. Qual é a faixa aceitável de capacitância medida e como ela pode ser verificada sob carga pela Fatoração de Amperagem?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Faixa aceitável entre 42,75 µF e 47,25 µF; sob carga, calcula-se µF = (I_auxiliar × 2.652) / V_capacitor (para rede de 60 Hz), devendo substituir o capacitor preventivamente se cair mais de 5% a 10% abaixo do nominal.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Matemática e elétrica na ponta da língua! A constante 2.652 vem da reatância capacitiva em 60 Hz (10⁶ / (2 × π × 60) ≈ 2.652).',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Qualquer leitura entre 15 µF e 90 µF é aceitável desde que o capacitor não esteja estufado por fora.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Um capacitor de 45 µF lendo 30 µF já perdeu um terço do torque de defasagem, superaquecendo o enrolamento auxiliar do motor!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Na falta de um capacitor de 45 µF / 440 V, pode-se instalar um de 45 µF / 250 V sem nenhum problema.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'Jamais reduza a tensão de isolação nominal (VAC)! A força contra-eletromotriz no enrolamento auxiliar supera a tensão da rede e explode o dielétrico de 250 V.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Em redes de 50 Hz usa-se a constante 1.000 e em redes de 60 Hz a constante 500.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'As constantes corretas são 2.652 para 60 Hz e 3.183 para 50 Hz!',
              },
            ],
          },
        ],
      },
      {
        id: 'q3',
        enunciado:
          'Segundo a norma NEMA MG-1, qual é o limite máximo admissível de Desbalanceamento de Tensão em motores trifásicos e qual é seu efeito multiplicador sobre o desbalanceamento de corrente e elevação de temperatura nos enrolamentos?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Desbalanceamento máximo de tensão de 2%; cada 1% de desbalanceamento de tensão gera de 6% a 10% de desbalanceamento de corrente (isto é, 2% na tensão pode gerar até 12%–20% na corrente) e eleva a temperatura do enrolamento em cerca de 2 × (% de desbalanceamento de tensão)².',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Exato! Por exemplo, um desbalanceamento de tensão de 3,5% eleva a temperatura adicional do enrolamento em ~25% (2 × 3,5² ≈ 24,5%), reduzindo drasticamente a vida útil do isolamento.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Desbalanceamento máximo de tensão de 15%, sem impacto relevante na corrente elétrica do compressor.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'assustada',
                texto:
                  'Com 15% de desbalanceamento de tensão o compressor trifásico queima em poucos minutos!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'O desbalanceamento de corrente permitido é de 50% acima da média das três fases.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'O limite máximo de desbalanceamento de corrente em plena carga é de 10%!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Para corrigir um desbalanceamento de tensão da concessionária, basta aumentar o ajuste do relé térmico bimetálico para o dobro da corrente nominal.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'Subir o relé térmico anula a proteção de sobrecarga e garante a queima do motor!',
              },
            ],
          },
        ],
      },
      {
        id: 'q4',
        enunciado:
          'Qual é a diferença fundamental de comportamento e manutenção entre um motor de ventilador PSC (Permanent Split Capacitor — indução CA) e um motor ECM (Electronically Commutated Motor — brushless DC com inversor integrado) quando os filtros ou dutos começam a sujar e a pressão estática sobe?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Enquanto o motor PSC perde vazão e reduz sua corrente elétrica quando a restrição aumenta, o motor ECM de vazão constante (Constant Airflow) acelera sua rotação e aumenta drasticamente o consumo de potência/corrente para tentar manter os CFM programados, podendo entrar em sobrecarga se a pressão estática estourar o limite.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Perfeito! Muitos técnicos estranham ver o motor ECM acelerado no máximo com filtro sujo: ele está lutando eletronicamente para entregar a vazão de projeto.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'O motor ECM utiliza um capacitor eletrolítico externo de partida que deve ser trocado todo ano.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Motores ECM não usam capacitor de marcha externo; toda a comutação eletrônica fica no módulo traseiro do motor!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Tanto o motor PSC quanto o ECM consomem menos corrente quando o ventilador trabalha livre sem restrição de dutos.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Em ventiladores centrífugos acionados por motor PSC, tirar as tampas ou trabalhar sem duto faz a massa de ar deslocada subir e a corrente elétrica DISPARAR!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Motores ECM têm eficiência inferior a 30%, enquanto motores PSC atingem 95% de rendimento.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'É o inverso! Motores ECM mantêm 70% a 85% de eficiência mesmo em baixas rotações, enquanto motores PSC caem para 40%–60%.',
              },
            ],
          },
        ],
      },
      {
        id: 'q5',
        enunciado:
          'Em grandes motores de ventiladores de AHUs e bombas de água gelada acionados por Inversores de Frequência (VFD), qual fenômeno elétrico danifica prematuramente as pistas dos rolamentos (criando estrias tipo "fluting" ou tábua de lavar) e como preveni-lo?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Tensão induzida no eixo e correntes parasitas de alta frequência (EDM — Electrical Discharge Machining) geradas pelo chaveamento PWM de modo comum do VFD; previne-se instalando anéis de aterramento de eixo (escovas de microfibra de carbono, ex.: AEGIS) e/ou rolamentos isolados cerâmicos.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Diagnóstico de alto nível! Sem anel de aterramento de eixo em motores comandados por VFD, as microfaíscas rompem o filme de graxa e corroem a pista do rolamento.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Excesso de graxa à base de poliureia misturada com graxa de lítio, que é a maneira recomendada de lubrificar motores.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'assustada',
                texto:
                  'Misturar espessantes incompatíveis (como poliureia e lítio) liquefaz ou endurece a graxa e destrói o rolamento por falha química de lubrificação!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Falta de água fria dentro da caixa de ligação do motor elétrico.',
            correta: false,
            feedback: [
              {
                quem: 'juninho',
                emocao: 'assustado',
                texto:
                  'Água na caixa de bornes do motor é curto na certa!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Basta bombear graxa até sair pelos retentores e invadir os enrolamentos do estator toda semana.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'O excesso de lubrificação (over-greasing) aumenta o atrito viscoso interno, superaquece o rolamento, estoura o retentor e contamina o bobinado!',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cursoId: 'manutencao-hvac',
    moduloId: 'mod-06',
    titulo: 'Desafio da Rodada · Módulo 06: Ventiladores, Correias, Dutos e Controles',
    aulasCobertas: ['m06-01', 'm06-02', 'm06-03'],
    contextoInicial:
      'Agora o desafio integra mecânica de ventiladores, transmissão por correias, higienização de dutos e instrumentação/automação! Vamos testar as Leis dos Ventiladores, o padrão NADCA e a calibração de sensores.',
    falaSucesso:
      'Show de bola! Transmissão alinhada, Leis da Afinidade na ponta do lápis, dutos limpos e sensores calibrados.',
    falaReforco:
      'Revise as Leis dos Ventiladores (especialmente a relação cúbica da potência), os padrões NADCA e as tabelas de sensores NTC/PT1000 antes de tentar de novo!',
    questoes: [
      {
        id: 'q1',
        enunciado:
          'Pelas Leis dos Ventiladores (Leis de Afinidade), se um técnico alterar a relação de polias ou a frequência do inversor para aumentar a rotação (RPM) de um ventilador centrífugo em 20% (fator 1,20) a fim de obter 20% a mais de vazão de ar, o que acontecerá com a Pressão Estática e com a Potência consumida no eixo?',
        opcoes: [
          {
            id: 'a',
            texto:
              'A Pressão Estática aumentará em 44% (1,20² = 1,44) e a Potência exigida do motor aumentará em 72,8% (1,20³ = 1,728), quase certamente desarmando ou queimando o motor existente.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'A Lei Cúbica não perdoa! Subir apenas 20% no RPM exige 72,8% a mais de potência no eixo — por isso nunca se troca polia no olhômetro sem checar a corrente do motor.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Tanto a Pressão Estática quanto a Potência aumentarão exatamente 20% em proporção linear.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Apenas a Vazão (CFM) varia linearmente com o RPM! A pressão varia com o quadrado (RPM²) e a potência com o cubo (RPM³).',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'A Potência consumida cairá pela metade porque o ventilador girará mais rápido.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Mais rotação significa muito mais resistência aerodinâmica e aumento cúbico de potência!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Reduzir a rotação do ventilador em 20% (para 80% do RPM nominal via VFD) economiza apenas 5% de energia elétrica.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Pela lei cúbica (0,80³ = 0,512), reduzir 20% na velocidade reduz a potência teórica do eixo em quase 49%! Daí a enorme economia dos inversores.',
              },
            ],
          },
        ],
      },
      {
        id: 'q2',
        enunciado:
          'Na manutenção de transmissões por correias em V de uma AHU, qual é a regra correta de deflexão no teste de tensão, o que fazer quando uma correia de um jogo múltiplo (3 correias em paralelo) se rompe e quando devemos recalibrar uma correia nova após a instalação?',
        opcoes: [
          {
            id: 'a',
            texto:
              'A deflexão padrão no centro do vão deve ser de 1/64 de polegada por polegada de distância entre centros (cerca de 1,6 mm a cada 100 mm de vão); em jogos múltiplos deve-se substituir o jogo completo por correias do mesmo lote (Matched Set); e toda correia nova deve ter sua tensão reajustada após 24 a 48 horas de operação (período de assentamento / run-in).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Padrão industrial impecável! Trocar só 1 correia num jogo de 3 faz a correia nova (mais curta) carregar toda a carga sozinha e arrebentar em dias.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Esticar a correia até não ter nenhuma deflexão (como corda de violão) para entortar o eixo e destruir os mancais em uma semana.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'assustada',
                texto:
                  'Excesso de tensão nas correias é a causa número 1 de quebra de eixo e falha prematura de rolamentos em AHUs!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Quando a polia apresenta desgaste nas paredes laterais em V (efeito espelhado/côncavo), basta passar spray "belt dressing" (breu/adesivo) para parar o chiado.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Correia em V traciona pelas laterais, nunca pelo fundo do canal! Se a polia gastou e a correia tocou o fundo, é obrigatório substituir a polia; spray adesivo só junta poeira e destrói a borracha.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Misturar correias novas e velhas de marcas diferentes na mesma polia tripla.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'Correias novas e velhas têm comprimentos efetivos diferentes, gerando chicoteamento, vibração e patinação!',
              },
            ],
          },
        ],
      },
      {
        id: 'q3',
        enunciado:
          'Sobre inspeção, vedação e limpeza de redes de dutos segundo a norma NADCA ACR e ABNT NBR 16401: qual é o valor da perda energética típica por vazamentos em dutos mal vedados, como funciona a limpeza por pressão negativa e qual é o critério do NADCA Vacuum Test?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Vazamentos em dutos desperdiçam de 20% a 30% da energia do sistema; a limpeza NADCA ACR isola o trecho sob pressão negativa mínima de 0,01 in. WC (2,5 Pa) com coletor HEPA (99,97% a 0,3 µm) enquanto escovas/ar comprimido agitam a poeira; e o critério gravimétrico NADCA Vacuum Test exige ≤ 0,75 mg/100 cm² de resíduo.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Domínio total da norma NADCA ACR! Sem pressão negativa com coletor HEPA, escovar o duto apenas espalha a sujeira para dentro das salas.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Deve-se vedar juntas de dutos metálicos exclusivamente com fita adesiva cinza comum de papelaria ("Silver Tape / Duct Tape" de tecido comum), que dura 30 anos sem descolar.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'A fita adesiva cinza comum resseca o adesivo de borracha com as variações térmicas e descola rapidamente! Veda-se duto com mastique elastomérico UL 181 ou fita de alumínio butílica/acrílica UL 181A-P/B-FX.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Dutos revestidos internamente com lã de vidro fibrosa encharcados de água e mofo preto podem ser lavados com lavadora de alta pressão a 2.000 PSI.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'assustada',
                texto:
                  'Isolamento acústico interno fibroso mofado e encharcado não pode ser recuperado com jato d’água; a NADCA exige remoção e substituição do trecho contaminado!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Dampers corta-fogo (Fire Dampers) com elo fusível rompido devem ser travados abertos com arame ou parafuso autobrocante para não bloquear o ar.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'espantado',
                texto:
                  'Travar um Fire Damper aberto com parafuso é crime contra a segurança contra incêndio! Em caso de sinistro, o duto espalhará fogo e fumaça tóxica entre os andares.',
              },
            ],
          },
        ],
      },
      {
        id: 'q4',
        enunciado:
          'Ao testar um sensor de temperatura do tipo Termistor NTC 10kΩ (Tipo II/III) comparado a uma termorresistência RTD PT1000, qual é o comportamento ôhmico de cada um quando a temperatura sobe, e qual é a resistência exata esperada a 25°C (77°F) para o NTC 10kΩ e a 0°C (32°F) para o PT1000?',
        opcoes: [
          {
            id: 'a',
            texto:
              'O NTC (Negative Temperature Coefficient) diminui sua resistência quando a temperatura sobe e lê exatamente 10.000 Ω (10 kΩ) a 25°C; já o PT1000 (platina PTC linear) aumenta sua resistência quando a temperatura sobe (~3,85 Ω/°C) e lê exatamente 1.000 Ω a 0°C (~1.097 Ω a 25°C).',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Precisão cirúrgica! E lembre-se: sempre desconecte pelo menos uma perna do sensor da placa antes de medir a resistência no multímetro.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Tanto o NTC 10kΩ quanto o PT1000 aumentam a resistência com o calor e ambos medem 0 Ω a 25°C.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  '0 Ω em qualquer sensor de temperatura significa curto-circuito no cabo ou na cápsula!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Para calibrar um sensor em banho de água com gelo fundente (0°C), basta medir com o sensor conectado à placa energizada na escala de Ohms.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Medir resistência com o sensor conectado à placa lê a resistência em paralelo do divisor de tensão da placa e dá erro total!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Sensores NTC 5kΩ, 10kΩ e 20kΩ são totalmente intercambiáveis na mesma entrada da placa sem alterar a leitura de temperatura.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Colocar um NTC 5kΩ onde a placa espera um 10kΩ faz a placa enxergar metade da resistência e achar que a temperatura está quase 15°C mais quente!',
              },
            ],
          },
        ],
      },
      {
        id: 'q5',
        enunciado:
          'Em sistemas de automação predial (BMS / DDC): qual sinal de corrente analógica indica rompimento de cabo (fio partido) em um transdutor de pressão 4–20 mA, o que causa oscilação contínua ("hunting") de uma válvula de água gelada controlada por malha PID e qual o risco de um damper Economizador travado aberto no verão úmido?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Em malhas 4–20 mA, 4 mA é o "zero vivo" (0% da escala) e 0 mA indica fio rompido ou falta de alimentação; o "hunting" da válvula decorre de ganho Proporcional excessivo (Banda Proporcional muito estreita) ou tempo Integral muito curto; e um damper Economizador travado aberto no verão introduz carga térmica latente/sensível massiva, fazendo o prédio perder setpoint e explodir o consumo de energia.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Perfeito! Essa é a vantagem brilhante do padrão 4–20 mA (diferenciar zero de processo em 4 mA de cabo partido em 0 mA) e o clássico vilão oculto dos economizadores travados.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Em um sensor 4–20 mA, a leitura de 0 mA significa que a pressão está normal em 0 PSI.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  '0 PSI corresponde a 4,0 mA! Se o multímetro em série ler 0,0 mA, o loop de corrente está aberto (cabo rompido ou fonte 24 V desligada).',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Quando uma válvula modulante fica caçando ("hunting" abrindo e fechando sem parar), deve-se dobrar o ganho proporcional para ela reagir ainda mais violentamente.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Aumentar o ganho proporcional agrava a instabilidade! Deve-se ampliar a Banda Proporcional (reduzir o ganho Kp) e ajustar o tempo integral.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Um economizador entálpico deve abrir 100% para o ar externo sempre que a temperatura externa estiver em 38°C e umidade relativa de 85%.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'A 38°C e 85% UR a entalpia do ar externo é altíssima; o economizador deve fechar na posição mínima de renovação higiênica!',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cursoId: 'manutencao-hvac',
    moduloId: 'mod-07',
    titulo: 'Desafio da Rodada · Módulo 07: Procedimentos Sazonais e Equipamentos Específicos',
    aulasCobertas: ['m07-01', 'm07-02', 'm07-03', 'm07-04'],
    contextoInicial:
      'Hora de encarar equipamentos pesados e rotinas sazonais! Vamos testar Start-up de Primavera, segurança de combustão/aquecimento no Outono, Bombas de Calor/VRF e Chillers com Torres de Resfriamento.',
    falaSucesso:
      'Nível sênior! De Split e VRF até Chiller centrífugo e Torre de Resfriamento, nenhum equipamento te pega de surpresa.',
    falaReforco:
      'Atenção aos parâmetros críticos de equipamentos específicos (aquecedor de cárter, válvula de 4 vias, Approach do condensador do Chiller)! Revise o Módulo 07 e tente novamente.',
    questoes: [
      {
        id: 'q1',
        enunciado:
          'No Start-up de Primavera (ou após longa parada de um sistema comercial/VRF/Chiller), por que é obrigatório energizar a resistência de cárter (Crankcase Heater) com antecedência mínima de 12 a 24 horas antes de dar a partida no compressor?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Para manter o óleo do cárter 10°C a 15°C acima da temperatura de saturação ambiente, expulsando o fluido refrigerante líquido que migrou por afinidade térmica/química para o óleo e prevenindo a partida inundada (espumamento violento e lavagem dos mancais sem lubrificação).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Vital! Sem aquecer o cárter antes do start-up, a queda brusca de pressão na partida faz o refrigerante dissolvido ferver instantaneamente, expulsando todo o óleo do cárter e fundindo o compressor.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Para ferver o óleo sintético a 250°C e derreter o verniz do motor antes da partida.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'assustada',
                texto:
                  'A resistência de cárter aquece suavemente o óleo (tipicamente entre 40°C e 60°C), jamais a 250°C!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'A resistência de cárter serve apenas para aquecer a sala ocupada durante o inverno.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'A função dela é exclusivamente evitar a migração e diluição de refrigerante líquido no óleo lubrificante do compressor parado!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Em sistemas VRF e Chillers pode-se ligar o disjuntor geral e partir os compressores em 100% de rotação no mesmo segundo após 3 meses desligados.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'Dar partida imediata após meses desligado sem pré-aquecimento do cárter invalida a garantia do fabricante e quebra o scroll/parafuso por calço líquido!',
              },
            ],
          },
        ],
      },
      {
        id: 'q2',
        enunciado:
          'Na revisão de Outono/Aquecimento em sistemas com aquecedores a gás (Gas Furnaces / Rooftops a gás) ou bancos de resistências elétricas: qual é o risco letal de uma trinca no trocador de calor primário a gás, qual o limite de CO no ar ambiente e como funciona o sensor de chama por retificação?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Uma trinca no trocador de calor permite que o Monóxido de Carbono (CO — gás incolor, inodoro e letal) contamine o ar insuflado (limite máximo na combustão < 100 ppm air-free e no ar ambiente ≤ 9 ppm ASHRAE); e a haste sensora de chama (Flame Rod) conduz uma microcorrente retificada CC (tipicamente 2 a 8 µA CC) através dos íons da chama para a carcaça aterrada.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Segurança em primeiro lugar! E quando o Flame Rod falha por camada isolante de sílica, limpamos com lã de aço fina ou fibra Scotch-Brite (nunca lixa grossa que cria sulcos).',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Trincas no trocador de calor a gás podem ser vedadas com silicone comum, e o Monóxido de Carbono até 2.000 ppm no quarto é benéfico.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'espantado',
                texto:
                  '2.000 ppm de CO causa morte em poucos minutos! Qualquer trocador de calor a gás trincado exige bloqueio imediato do gás (Red Tag) e substituição do trocador.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Em bancos de resistências elétricas de duto, se o termostato limite de segurança (High-Limit Switch) abrir, deve-se fazer um jumper definitivo com fio de cobre.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'assustada',
                texto:
                  'Jampear o High-Limit Switch ou o fusível térmico de um banco de resistências transforma o duto numa fornalha incandescente se o ventilador parar!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'O sensor de chama (Flame Rod) mede apenas a cor da chama por câmera fotográfica e opera com 380 V CA.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'O Flame Rod opera pelo princípio físico da retificação iônica de chama em microamperes (µA CC)!',
              },
            ],
          },
        ],
      },
      {
        id: 'q3',
        enunciado:
          'Em uma Bomba de Calor (Heat Pump) ou sistema VRF, como diagnosticar um vazamento interno (bypass) na Válvula Reversora de 4 Vias através das temperaturas dos 4 tubos conectados a ela?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Em uma válvula de 4 vias saudável, a diferença térmica entre o tubo de descarga que entra (quente) e o tubo de sucção que retorna ao compressor (frio) é grande, e o tubo de sucção que entra na válvula tem praticamente a mesma temperatura do tubo que sai para o acumulador/compressor; se houver vazamento interno (bypass de gás quente para a sucção), o tubo de saída para a sucção do compressor aquece > 3°F a 6°F (2°C a 3,5°C) acima do tubo de retorno do evaporador.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Teste clássico e infalível! Se o tubo que vai para o compressor está significativamente mais quente que o tubo que vem da linha fria na válvula de 4 vias, o pistão deslizante está dando passagem de descarga para sucção.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Os 4 tubos da válvula reversora devem estar todos na mesma temperatura ambiente de 25°C com o compressor ligado.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Se os 4 tubos têm a mesma temperatura com o compressor rodando, a válvula travou a meio caminho (mid-stroke) e todo o gás de descarga está voltando direto para a sucção!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Para destravar uma válvula de 4 vias em um VRF, deve-se golpear o corpo cilíndrico de latão com uma marreta de ferro para amassar o cilindro.',
            correta: false,
            feedback: [
              {
                quem: 'juninho',
                emocao: 'assustado',
                texto:
                  'Amassar o corpo cilíndrico da válvula de 4 vias trava o cursor deslizante de teflon/metal para sempre!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Durante o ciclo de Degelo Reverso (Defrost) de uma Bomba de Calor no inverno, o ventilador externo da condensadora deve girar na velocidade máxima.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'No modo Degelo, o ventilador externo é DESLIGADO pela placa para que o gás quente derreta o gelo da serpentina externa rapidamente sem perder calor para o vento frio!',
              },
            ],
          },
        ],
      },
      {
        id: 'q4',
        enunciado:
          'Na manutenção preditiva de um Chiller com condensação a água, o que é o Approach Temperature do condensador, qual é seu valor normal em trocadores casco-e-tubos limpos e o que indica quando ele sobe além de 4°F a 5°F (> 2,5°C a 3°C)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'O Approach do condensador é a diferença entre a Temperatura de Saturação de Condensação do refrigerante e a Temperatura de Saída da Água de Condensação (Leaving Condenser Water Temperature); em casco-e-tubos limpos vale de 1°F a 3°F (0,5°C a 1,7°C), e valores acima de 4°F–5°F (> 2,5°C) indicam incrustação calcária/biofilme nos tubos (fouling) ou presença de gases não condensáveis.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Exato! O monitoramento diário do Approach do condensador é o termômetro número 1 para programar o varetamento mecânico (escovamento dos tubos) e a desincrustação química antes do Chiller desarmar por alta pressão.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'O Approach é a diferença entre a água gelada e a água quente da caldeira, devendo ficar acima de 40°C.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Diferença entre entrada e saída da água no mesmo trocador chama-se Range (ΔT da água, tipicamente ~5°C / 10°F); já o Approach compara a saturação do refrigerante com a água que sai do trocador!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Para varetar tubos de cobre internamente ranhurados de um condensador de Chiller, deve-se usar escova de aço carbono duro que arranca as ranhuras internas.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'assustada',
                texto:
                  'Escova de aço duro destrói as microrranhuras internas (enhanced tubes) do cobre! Usa-se escova de nylon rotativa (ou projéteis de espuma/nylon sob pressão d’água).',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Incrustação de 0,8 mm de carbonato de cálcio nos tubos do condensador melhora a troca térmica e reduz o consumo do Chiller em 20%.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'O carbonato de cálcio é um isolante térmico! Menos de 1 mm de incrustação eleva o consumo elétrico do Chiller em 20% a 30%.',
              },
            ],
          },
        ],
      },
      {
        id: 'q5',
        enunciado:
          'Em Torres de Resfriamento de circuito aberto, qual é a função da purga contínua/automática (Blowdown) controlada por condutivímetro e qual é a importância dos eliminadores de gotas (Drift Eliminators)?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Como a evaporação leva apenas água pura e concentra os sais minerais na bacia, o Blowdown drena parte da água concentrada para manter os Ciclos de Concentração e a condutividade dentro do limite (evitando incrustação calcária); já os eliminadores de gotas retêm o arraste de gotículas líquidas (drift), evitando perda de água tratada e dispersão de aerossóis com Legionella.',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Gabarito! Sem Blowdown a torre vira uma fábrica de pedra calcária nos tubos do Chiller, e sem eliminadores de gotas íntegros a vizinhança inteira recebe névoa contaminada.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Fechar totalmente a válvula de purga (Blowdown zero) para economizar água faz com que os sais minerais evaporem junto com o vapor.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Sais minerais dissolvidos (cálcio, magnésio, sílica) NÃO evaporam! Sem purga, a dureza e o índice de Langelier disparam, incrustando todo o condensador.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Os eliminadores de gotas devem ser retirados da torre no verão para o ar sair mais rápido.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'Retirar os eliminadores de gotas causa perda maciça de água química e risco biológico gravíssimo de dispersão de Legionella!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'O enchimento de contato (Fill) da torre serve apenas como filtro de folhas e deve trabalhar totalmente seco.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'O enchimento (Fill) maximiza a área superficial de contato entre o filme d’água e o ar para a troca de calor evaporativa!',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cursoId: 'manutencao-hvac',
    moduloId: 'mod-08',
    titulo: 'Desafio da Rodada · Módulo 08: Gestão de Operações, Documentação e Carreira',
    aulasCobertas: ['m08-01', 'm08-02', 'm08-03'],
    contextoInicial:
      'Último desafio do curso! Aqui você consolida a visão de gestor e consultor técnico: indicadores de confiabilidade (MTBF, MTTR, FTF), laudos e relatórios blindados, e análise financeira Reparar vs. Substituir (TCO e Regra dos 50%).',
    falaSucesso:
      'Parabéns! Você concluiu todos os 8 módulos de Manutenção Preventiva e Preditiva em HVAC com visão completa de engenharia, campo e gestão!',
    falaReforco:
      'Faltou pouco pra fechar o curso! Revise os cálculos de MTBF/MTTR/Disponibilidade e a Regra dos 50% / TCO no Módulo 08 antes de tentar novamente.',
    questoes: [
      {
        id: 'q1',
        enunciado:
          'Diferencie tecnicamente as 4 estratégias de manutenção (Reativa/Corretiva, Preventiva baseada no tempo, Preditiva baseada na condição e RCM — Manutenção Centrada em Confiabilidade) quanto ao custo operacional e aplicabilidade em sistemas HVAC críticos.',
        opcoes: [
          {
            id: 'a',
            texto:
              'A Manutenção Reativa ("rodar até quebrar") custa de 3 a 5 vezes mais em reparos emergenciais e energia; a Preventiva atua em intervalos fixos de calendário/horas; a Preditiva monitora variáveis reais (vibração, termografia, Approach, SH/SC, óleo) para intervir apenas quando há tendência de degradação; e a RCM combina essas estratégias priorizando a criticidade da função do ativo (ex.: UTI/Data Center vs. sala de apoio).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Visão de engenharia de manutenção! A RCM não aplica o mesmo custo preditivo a um exaustor de almoxarifado e a um Chiller de centro cirúrgico — ela aloca recursos conforme o risco funcional.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'A manutenção reativa ("esperar quebrar") é sempre a mais barata e recomendada para hospitais e data centers.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'assustada',
                texto:
                  'Em um hospital ou data center, uma hora de parada não planejada custa mais caro que todo o contrato anual de manutenção!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Manutenção Preditiva significa desmontar o compressor inteiro a cada 30 dias para olhar as peças por dentro.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Desmontagens intrusivas desnecessárias introduzem falhas humanas ("mortalidade infantil" na curva da banheira)! A Preditiva usa ensaios não destrutivos com a máquina operando.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Trocar filtros e limpar serpentinas não tem nenhum retorno sobre o investimento (ROI) na conta de energia elétrica.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Estudos do DOE e ASHRAE provam que a manutenção preventiva/preditiva reduz o consumo energético de HVAC em 15% a 40%, pagando o próprio contrato!',
              },
            ],
          },
        ],
      },
      {
        id: 'q2',
        enunciado:
          'Um Chiller de processo operou durante um período total de 4.020 horas no semestre. Nesse intervalo, sofreu 3 paradas por falha, somando um tempo total de reparo (downtime corretivo) de 20 horas (ou seja, 4.000 horas de operação efetiva em bom funcionamento). Quais são o MTBF (Tempo Médio Entre Falhas), o MTTR (Tempo Médio Para Reparo) e a Disponibilidade Inerente desse equipamento?',
        opcoes: [
          {
            id: 'a',
            texto:
              'MTBF = 4.000 h / 3 = 1.333,3 horas; MTTR = 20 h / 3 = 6,67 horas; e Disponibilidade = MTBF / (MTBF + MTTR) = 1.333,3 / 1.340 ≈ 99,5%.',
            correta: true,
            feedback: [
              {
                quem: 'bia',
                emocao: 'aprovando',
                texto:
                  'Cálculo cravado! MTBF mede a confiabilidade (tempo rodando dividido pelo número de falhas) e MTTR mede a manutenibilidade (tempo de reparo dividido pelo número de falhas).',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'MTBF = 6,67 horas; MTTR = 1.333,3 horas; e Disponibilidade = 50%.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'Você inverteu o MTBF com o MTTR! Se o MTTR fosse 1.333 horas e o MTBF 6 horas, a máquina viveria quebrada.',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'O indicador FTF (First-Time Fix Rate) mede quantas vezes o técnico precisou voltar na mesma semana porque não levou ferramentas nem diagnosticou a causa-raiz.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'Isso é taxa de retrabalho (Callback Rate)! O FTF mede a porcentagem de chamados resolvidos definitivamente na PRIMEIRA visita (meta de excelência > 85%–90%).',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Para aumentar a Disponibilidade de um sistema, devemos diminuir o MTBF e aumentar o MTTR.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Alta disponibilidade exige AUMENTAR o MTBF (menos quebras) e REDUZIR o MTTR (diagnóstico e reparo mais rápidos)!',
              },
            ],
          },
        ],
      },
      {
        id: 'q3',
        enunciado:
          'Ao redigir uma Ordem de Serviço (OS) e um Relatório Técnico Fotográfico no CMMS após atender uma pane elétrica em uma condensadora, qual estrutura garante rastreabilidade técnica, valor percebido pelo cliente e blindagem jurídica?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Estruturar pela tríade Sintoma/Queixa → Causa-Raiz Diagnosticada (com grandezas medidas antes: V, A, Ω, µF, PSI, SH/SC) → Ação Executada e Validação Pós-Intervenção (leituras finais estabilizadas + fotos Antes/Depois com contexto e close-up dos instrumentos).',
            correta: true,
            feedback: [
              {
                quem: 'marta',
                emocao: 'aprovando',
                texto:
                  'Relatório padrão ouro! Quando você documenta "Causa: contator com queda de 1,8 V CA no polo L2 e capacitor lendo 28 µF (nominal 45 µF)" com foto do multímetro e leituras finais, nenhum auditor contesta seu serviço.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Escrever apenas "Manutenção realizada, funcionando OK" sem anotar nenhuma leitura elétrica ou termodinâmica.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  '"Funcionando OK" não serve como histórico de tendência no CMMS nem defende o técnico se outra peça falhar na semana seguinte!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Preencher uma planilha de PMOC antecipada para os próximos 12 meses com valores inventados de corrente e pressão exatamente iguais todos os meses.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'assustada',
                texto:
                  'Isso é fraude documental ("Pencil Whipping")! Em auditorias técnicas ou perícias judiciais, leituras idênticas em dias de temperaturas diferentes provam falsificação.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Tirar apenas uma foto borrada da fachada do prédio sem identificar o TAG do ativo.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'corrigindo',
                texto:
                  'Toda evidência fotográfica precisa vincular o TAG/placa de identificação do ativo, o defeito encontrado (Antes) e o reparo validado com instrumento (Depois).',
              },
            ],
          },
        ],
      },
      {
        id: 'q4',
        enunciado:
          'Um equipamento Splitão de 10 TR tem 11 anos de uso (vida útil estimada pela ASHRAE para Rooftops/Splitões é de ~15 anos, ou seja, já cumpriu 73% da vida útil), opera com R-22 obsoleto e sofreu queima do compressor. O orçamento do reparo completo (compressor + limpeza de linha + carga de gás + mão de obra) fica em R$ 11.500,00, enquanto um equipamento novo Inverter de alta eficiência instalado custa R$ 20.000,00. Pela Regra dos 50% e pela análise de Custo Total de Propriedade (TCO), qual deve ser a recomendação consultiva ao cliente?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Recomendar a Substituição (Retrofit): o reparo custa 57,5% de um equipamento novo (> 50%), o índice Idade × Custo ultrapassa o teto de viabilidade, o fluido R-22 está em phase-out com custo proibitivo e a economia de energia de 30% a 40% do sistema Inverter novo paga a diferença de investimento (Payback curto no TCO).',
            correta: true,
            feedback: [
              {
                quem: 'simon',
                emocao: 'aprovando',
                texto:
                  'Consultoria técnica de verdade! Apresentar duas opções claras (Opção A: Reparo emergencial com riscos de idade vs. Opção B: Retrofit com cálculo de Payback energético) transforma você em parceiro estratégico do cliente.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Obrigá-lo a gastar R$ 11.500,00 na máquina de 11 anos com R-22 e garantir que ela vai durar mais 25 anos sem gastar energia.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'cobrando',
                texto:
                  'Reformar uma máquina no fim da vida útil por quase 60% do valor de uma nova faz o cliente "casar" com um ativo obsoleto que logo dará vazamento na serpentina velha!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Apenas jogar R-410A direto dentro do compressor R-22 sem trocar nada.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'assustada',
                texto:
                  'O R-410A opera com pressões ~60% maiores que o R-22 e óleo sintético incompatível; jamais pode sofrer drop-in em equipamentos R-22!',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'O Custo Total de Propriedade (TCO) de um sistema HVAC é composto 95% pelo preço de compra da máquina e apenas 5% pelo consumo de energia ao longo de 15 anos.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'corrigindo',
                texto:
                  'É exatamente o inverso! Ao longo de 15 anos de vida útil, o consumo de energia elétrica representa de 70% a 85% do TCO, enquanto a compra inicial (CAPEX) é apenas 10% a 15%.',
              },
            ],
          },
        ],
      },
      {
        id: 'q5',
        enunciado:
          'Durante uma preventiva rotineira, você encontra um terminal elétrico do compressor levemente carbonizado com queda de tensão de 0,9 V CA e um capacitor já com 9% de perda de capacitância, embora a máquina ainda esteja gelando. Qual é a postura ética e profissional correta perante o cliente?',
        opcoes: [
          {
            id: 'a',
            texto:
              'Aplicar o diagnóstico consultivo baseado em evidências: mostrar ao cliente a foto térmica/visual do terminal oxidado e a leitura no capacímetro comparada à tolerância nominal (±5%), explicando tecnicamente como a correção preventiva imediata evita a queima do compressor no pico de calor, sem inventar defeitos nem usar terrorismo sem provas.',
            correta: true,
            feedback: [
              {
                quem: 'marta',
                emocao: 'aprovando',
                texto:
                  'É assim que se constrói reputação inabalável no mercado! Transparência, instrumento na mão, número na tela e respeito ao cliente.',
              },
            ],
          },
          {
            id: 'b',
            texto:
              'Ficar calado e deixar o terminal pegar fogo na semana seguinte para cobrar mais caro pela troca do compressor queimado.',
            correta: false,
            feedback: [
              {
                quem: 'simon',
                emocao: 'cobrando',
                texto:
                  'Omitir falha incipiente detectada na preventiva fere a ética profissional e destrói a confiança do contrato!',
              },
            ],
          },
          {
            id: 'c',
            texto:
              'Dizer ao cliente que o "gás venceu a validade" e cobrar uma recarga de fluido sem necessidade.',
            correta: false,
            feedback: [
              {
                quem: 'bia',
                emocao: 'cobrando',
                texto:
                  'Fluido refrigerante em circuito hermético fechado NÃO vence nem é consumido! Se falta gás, existe vazamento que precisa ser localizado e reparado.',
              },
            ],
          },
          {
            id: 'd',
            texto:
              'Trocar as peças escondido sem autorização prévia e sem apresentar as peças substituídas ou as medições.',
            correta: false,
            feedback: [
              {
                quem: 'marta',
                emocao: 'corrigindo',
                texto:
                  'Todo serviço adicional exige orçamento prévio aprovado, registro das medições e devolução/apresentação dos componentes substituídos ao cliente!',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default DESAFIOS_MODULO;
