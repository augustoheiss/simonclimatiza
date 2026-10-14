// Conversa: Manutenção de Conexões Elétricas (m05-01)
// Cenário: Casa de Máquinas — Emissividade, Creep/Fretting, Contatos AgCdO e Regra dos 5s UL

const F_EMISS = {
  campo: 'infobox_campo',
  trecho: 'A emissividade do cobre nu brilhante e polido é extremamente baixa (0,02 a 0,07) [3]. Efetuar varreduras infravermelhas diretamente em metais nus sem correção induz a leituras falsamente frias [3]. A câmera registrará uma junta aquecida em 45°C como se estivesse a seguros 25°C',
};

const F_AGCDO = {
  campo: 'infobox_campo',
  trecho: 'Contatos elétricos de contatores industriais de liga prata-óxido de cádmio (AgCdO) tornam-se escuros/pretos devido aos arcos de chaveamento. O óxido de prata é altamente condutivo e essa coloração é normal [18].',
};

const F_TORQUE_5S = {
  campo: 'infobox_campo',
  trecho: 'Ao atingir a indicação alvo de torque, mantenha a chave pressionada no limite target por exatamente 5 segundos completos [2].',
};

const F_QUEDA_V = {
  campo: 'tabelas_html',
  trecho: 'Queda de Tensão (Sob Carga) Queda de tensão &lt; 0,5 V (500 mV) na junta',
};

const F_MICROOHM = {
  campo: 'tabelas_html',
  trecho: 'Resistência &lt; 100 μ&Omega; e desvio inter-fase &lt; 50%',
};

const F_MEGGER = {
  campo: 'tabelas_html',
  trecho: 'Resistência &gt; 1 M&Omega; para cada 1000 V de teste aplicados',
};

const F_COMP_CARGA = {
  campo: 'conteudo_html',
  trecho: 'Imedida / Inominal 50% ΔTmedido 10,0°C ΔTcompensado 40,0°C EMERGÊNCIA Fórmula Aplicada: ΔTcomp = 10°C &times; (1,0 / 0,5)² = 10°C &times; 4,00 = 40,0°C. Sob plena carga, a junta ultrapassa com folga o limite de 30°C da NETA.',
};

const F_NETA = {
  campo: 'conteudo_html',
  trecho: 'ΔT &gt; 10°C (Investigar): Ponto de atenção, programar reaperto na próxima preventiva. ΔT &gt; 15°C (Urgente): Degradação significativa, programar reparo com brevidade. ΔT &gt; 30°C (Emergência): Desligamento imediato exigido pelo risco iminente de colapso.',
};

const F_SAPATA = {
  campo: 'conteudo_html',
  trecho: 'Substitua se micropites gerarem crateras físicas com profundidade superior a 2 mm [20]. Substitua se a erosão mecânica reduzir a espessura da sapata em mais de 50% [20].',
};

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm05-01',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 10,
  beats: [
    {
      id: 'abertura-narra',
      tipo: 'fala',
      quem: 'narrador',
      texto: 'Casa de máquinas do prédio comercial. O quadro geral dos chillers zumbe em carga parcial enquanto Juninho aponta a câmera termográfica para o barramento principal.',
    },
    {
      id: 'juninho-acha-frio',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'empolgado',
      texto: 'Mestre Simon, esse barramento de cobre nu polido está um gelo! A câmera bateu nele e marcou seguros 25°C, nem esquentou nada.',
      fonte: F_EMISS,
    },
    {
      id: 'simon-alerta-emissividade',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Segura a emoção, garoto! O cobre nu polido tem emissividade baixíssima, entre 0,02 e 0,07. Ele vira um espelho térmico: uma junta em 45°C aparece na tela como se estivesse a 25°C!',
      fonte: F_EMISS,
    },
    {
      id: 'bia-explica-fita',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'pensativo',
      texto: 'Por isso nunca lemos direto no metal polido! A gente cola fita isolante preta fosca de emissividade alta ou mira na capa de PVC do cabo logo ao lado do terminal.',
    },
    {
      id: 'escolha-emissividade',
      tipo: 'escolha',
      pergunta: 'Ao inspecionar um barramento de cobre nu brilhante com a câmera termográfica, qual procedimento garante uma leitura real da temperatura da junta?',
      fonte: F_EMISS,
      opcoes: [
        {
          id: 'a',
          texto: 'Mirar perpendicularmente no cobre polido sem preparação, pois o metal conduz melhor o calor para a lente.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: 'Errado! No cobre nu você só mede o reflexo térmico do seu próprio corpo ou do ambiente a 25°C, mascarando uma junta quente a 45°C.',
              fonte: F_EMISS,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Aplicar alvo de fita isolante preta fosca ou medir no isolamento adjacente do cabo.',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Na mosca! Com emissividade alta e conhecida, a câmera deixa de ver reflexo e passa a medir a radiação infravermelha real da conexão.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Borrifar óleo lubrificante líquido sobre o barramento energizado para eliminar o brilho do cobre.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'assustado',
              texto: 'Jamais! Jogar spray num barramento energizado cria risco de arco elétrico e contamina os isoladores.',
            },
          ],
        },
      ],
    },
    {
      id: 'marta-pergunta-creep',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'curioso',
      texto: 'Simon, mas se ninguém mexeu nos parafusos desde a inauguração, por que os bornes elétricos afrouxam sozinhos com o tempo?',
    },
    {
      id: 'simon-explica-creep-fretting',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'pensativo',
      texto: 'São dois vilões invisíveis, Dona Marta: o Creep, que é a fluência plástica do metal sob pressão e ciclos térmicos, e o Fretting, que é a microvibração oxidando a superfície de contato.',
    },
    {
      id: 'bia-explica-ul486',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'E na hora de torquear cabo multifilar, não basta dar o estalo e soltar: ao atingir o torque alvo, segure a chave pressionada por 5 segundos completos para estabilizar o escoamento.',
      fonte: F_TORQUE_5S,
    },
    {
      id: 'juninho-entende-5s',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'aprovando',
      texto: 'Então aqueles 5 segundos segurando o torquímetro no limite acomodam os fios de cobre antes da gente fechar o quadro! Nunca mais solto no primeiro estalo.',
      fonte: F_TORQUE_5S,
    },
    {
      id: 'referencia-tabelas-m0501',
      tipo: 'referencia',
      texto: 'Consulte a tabela de limites de ensaios elétricos: resistência de contato abaixo de 100 micro-ohms, queda de tensão menor que 0,5 V sob carga e isolação mínima de 1 MΩ para cada 1000 V.',
      alvo: { aba: 'tabelas' },
      fonte: [F_QUEDA_V, F_MICROOHM, F_MEGGER],
    },
    {
      id: 'causo-ourives-contator',
      tipo: 'causo',
      titulo: 'O "Ourives de Contator" e a Pastilha de Prata Destruída',
      fonte: [F_AGCDO, F_SAPATA],
      falas: [
        {
          quem: 'simon',
          emocao: 'rindo',
          texto: 'Certa vez um técnico novato abriu o contator principal de um chiller na sexta-feira, viu as pastilhas de prata-óxido de cádmio pretas e resolveu brincar de ourives.',
          fonte: F_AGCDO,
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'Ele passou lixa nas pastilhas achando que aquele preto era sujeira isolante, mestre?',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Pior! Passou lima e lixa grossa até arrancar toda a liga nobre de AgCdO e deixar o cobre vermelho brilhando no fundo. Na segunda-feira o óxido de cobre isolou, ferveu e soldou os contatos!',
          fonte: F_AGCDO,
        },
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'O óxido de prata escuro é altamente condutivo! A gente nunca lixa: só substitui a sapata se micropites passarem de 2 mm de profundidade ou se a erosão comer mais de 50% da espessura.',
          fonte: [F_AGCDO, F_SAPATA],
        },
      ],
    },
    {
      id: 'mito-verdade-lixar-contator',
      tipo: 'mitoVerdade',
      afirmacao: 'Na manutenção preventiva, deve-se passar lixa nas pastilhas de prata-óxido de cádmio (AgCdO) dos contatores sempre que estiverem escuras, até deixá-las brilhando.',
      verdade: false,
      fonte: [F_AGCDO, F_SAPATA],
      explicacao: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Mito perigoso! A coloração preta na liga AgCdO vem do óxido de prata formado pelos arcos, que é altamente condutivo e protege contra soldagem.',
          fonte: F_AGCDO,
        },
        {
          quem: 'bia',
          emocao: 'pensativo',
          texto: 'Lixar destrói a pastilha sinterizada e expõe o cobre base. Só troque os contatos se houver crateras maiores que 2 mm ou perda de espessura acima de 50%.',
          fonte: F_SAPATA,
        },
      ],
    },
    {
      id: 'juninho-pergunta-carga-parcial',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'duvida',
      texto: 'Mestre, aqui na tela o terminal L1 está só 10,0°C acima dos outros, mas o compressor está rodando em 50% da corrente nominal. Posso deixar pra próxima preventiva?',
      fonte: F_COMP_CARGA,
    },
    {
      id: 'simon-explica-lei-quadratica',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Cuidado com a armadilha da carga parcial! O calor por efeito Joule cresce com o quadrado da corrente. Se a máquina está a 50% da carga, em plena carga esse ΔT multiplica por quatro!',
      fonte: F_COMP_CARGA,
    },
    {
      id: 'calculadora-dt-compensado',
      tipo: 'calculadora',
      titulo: 'Compensação Quadrática de ΔT por Carga (NETA)',
      formula: 'ΔT_comp = ΔT_med × (I_nom / I_med)²',
      enunciado: 'Uma conexão apresenta ΔT medido de 10,0°C operando com apenas 50% da corrente nominal (razão 1,0 / 0,5 = 2). Qual será o ΔT compensado em plena carga?',
      unidade: '°C',
      respostaCorreta: 40,
      tolerancia: 0.5,
      leituras: [
        { rotulo: 'Relação I_medida / I_nominal', valor: '50%' },
        { rotulo: 'ΔT Medido na Câmera', valor: '10,0°C' },
      ],
      opcoesRapidas: [15, 20, 40, 50],
      fonte: [F_COMP_CARGA, F_NETA],
      explicacaoSucesso: [
        {
          quem: 'simon',
          emocao: 'aprovando',
          texto: 'Exato! ΔTcomp = 10°C × (1,0 / 0,5)² = 40,0°C. O que parecia um alerta leve de 10°C na verdade ultrapassa com folga o limite de 30°C de emergência da NETA!',
          fonte: [F_COMP_CARGA, F_NETA],
        },
      ],
      explicacaoErro: [
        {
          quem: 'bia',
          emocao: 'serio',
          texto: 'Lembre que a proporção é quadrática: dividindo 1,0 por 0,5 temos 2, e elevando ao quadrado temos fator 4. Multiplique 10°C por 4 para obter 40,0°C.',
          fonte: F_COMP_CARGA,
        },
      ],
    },
    {
      id: 'inspecao-painel-potencia',
      tipo: 'inspecao',
      titulo: 'Auditoria de Junta e Contator de Potência',
      enunciado: 'Você avalia quatro medições no quadro elétrico sob carga. Qual delas exige intervenção imediata ou reprovação técnica?',
      fonte: [F_QUEDA_V, F_MICROOHM, F_MEGGER, F_NETA],
      pontos: [
        {
          id: 'a',
          rotulo: 'Queda de tensão sob carga abaixo de 0,5 V (500 mV) na junta do contator',
          fonte: F_QUEDA_V,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Saudável! Uma queda de tensão abaixo de 0,5 V (500 mV) comprova baixa resistência de contato sob carga.',
              fonte: F_QUEDA_V,
            },
          ],
        },
        {
          id: 'b',
          rotulo: 'Resistência ôhmica de contato abaixo de 100 micro-ohms com desvio inter-fase menor que 50%',
          fonte: F_MICROOHM,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Normal! Está dentro da simetria de desvio inter-fase menor que 50%.',
              fonte: F_MICROOHM,
            },
          ],
        },
        {
          id: 'c',
          rotulo: 'Terminal com ΔT compensado de 40,0°C (acima do limite de 30°C de Emergência NETA)',
          correta: true,
          fonte: [F_COMP_CARGA, F_NETA],
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Bingo! Pela norma NETA, qualquer ΔT acima de 30°C configura Emergência com desligamento imediato exigido pelo risco iminente de colapso.',
              fonte: F_NETA,
            },
          ],
        },
        {
          id: 'd',
          rotulo: 'Resistência de isolamento medida no megômetro superior a 1 MΩ para cada 1000 V aplicados',
          fonte: F_MEGGER,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Isolamento aprovado! Cumpre a regra de superar 1 MΩ para cada 1000 V de teste aplicados.',
              fonte: F_MEGGER,
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-emissividade-prata',
      tipo: 'filosofia',
      titulo: 'A Aparência Engana o Olho Amador',
      principio: 'Nem tudo que está preto no contator é defeito, e nem tudo que brilha no barramento está frio. Só a física dos materiais e a instrumentação correta revelam a verdade.',
      fonte: [F_EMISS, F_AGCDO],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Gravem isso: a pastilha preta de AgCdO conduz perfeitamente, enquanto o barramento de cobre brilhante a 45°C mente para a câmera mostrando 25°C. Nunca julguem elétrica no olhômetro!',
          fonte: [F_EMISS, F_AGCDO],
        },
      ],
    },
    {
      id: 'quiz-queda-tensao-torque',
      tipo: 'quiz',
      enunciado: 'Para validar uma conexão elétrica sob carga pelo método de queda de tensão e garantir a retenção mecânica no reaperto segundo a norma UL 486, quais são os parâmetros corretos?',
      fonte: [F_QUEDA_V, F_TORQUE_5S],
      opcoes: [
        {
          id: 'a',
          texto: 'Queda de tensão < 0,5 V (500 mV) na junta e manutenção do torque alvo por 5 segundos completos.',
          correta: true,
          fonte: [F_QUEDA_V, F_TORQUE_5S],
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Perfeito! Queda menor que 0,5 V garante integridade elétrica sob carga, e os 5 segundos no torquímetro eliminam o relaxamento inicial por fluência.',
              fonte: [F_QUEDA_V, F_TORQUE_5S],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Queda de tensão elevada na junta e alívio imediato do torquímetro no primeiro clique.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'irritado',
              texto: 'Errado! O limite máximo na junta é inferior a 0,5 V (500 mV) e o torque deve ser mantido por 5 segundos.',
              fonte: [F_QUEDA_V, F_TORQUE_5S],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Lixar os contatos de prata e apertar até espanar a rosca sem uso de torquímetro.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: 'Duplo erro: lixar destrói a camada condutiva de óxido de prata e o aperto excessivo esmaga o condutor de cobre.',
              fonte: F_AGCDO,
            },
          ],
        },
      ],
    },
    {
      id: 'marta-conclui-preventiva',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'aprovando',
      texto: 'Impressionante como um detalhe técnico como colar fita isolante para medir temperatura e segurar o torquímetro salva um compressor inteiro!',
    },
    {
      id: 'bia-reforca-registro',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'empolgado',
      texto: 'E registrando o ΔT compensado de 40,0°C na ordem de serviço, ninguém discute a necessidade do bloqueio imediato para reparo!',
      fonte: F_COMP_CARGA,
    },
    {
      id: 'simon-despedida-m0501',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'empolgado',
      texto: 'É isso que separa o trocador de peças do engenheiro de campo, Dona Marta! Agora vamos para a bancada dominar sensores NTC e redes de controle.',
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Cobre nu polido tem emissividade baixíssima (0,02 a 0,07) e reflete 25°C mesmo estando a 45°C; use fita preta fosca.',
        'Jamais lixe contatos escuros de prata-óxido de cádmio (AgCdO): o óxido de prata é altamente condutivo; troque só se crateras passarem de 2 mm ou 50% de espessura.',
        'Compense o ΔT termográfico pelo quadrado da carga e mantenha o torque final por 5 segundos completos (UL 486).',
      ],
      proxima: 'Na próxima aula, vamos para a bancada desvendar o multiplicador de 10 voltas no alicate, a armadilha dos sensores NTC 10k Tipo II vs Tipo III e redes BACnet MS/TP!',
      fonte: [F_EMISS, F_AGCDO, F_SAPATA, F_TORQUE_5S],
    },
  ],
};
