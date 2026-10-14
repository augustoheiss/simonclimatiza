// Conversa: Manutenção de Ar-Condicionado Split Inverter (m06-01)
// Cenário: Bancada de Oficina — Back-EMF em BLDC, Descarga DC 311V -> <10V, Ciclo de Óleo 140min/8h e Bobinas EEV

const F_BACKEMF = {
  campo: 'infobox_campo',
  trecho: 'Evite que as hélices dos ventiladores de motores Brushless DC girem livremente sob ação de ventanias com o disjuntor desligado. O motor atua como gerador gerando tensão elétrica reversa (Back-EMF) que retroalimenta a placa eletrônica externa e queima os drivers lógicos.',
};

const F_CAP_300V = {
  campo: 'infobox_campo',
  trecho: 'Os capacitores de potência da placa condensadora retêm tensões perigosas superiores a 300Vcc mesmo após desligar a energia geral. O técnico deve testar a tensão entre os pontos P (positivo) e N (negativo) e confirmar que o valor está abaixo de 10Vcc antes de tocar na PCB',
};

const F_IPM_DIODO = {
  campo: 'tabelas_html',
  trecho: 'Terminais U, V, W Ponto de Teste P (DC+) 0.35 V ~ 0.50 V Diodo Aberto (IPM com falha)',
};

const F_OLEO_140 = {
  campo: 'conteudo_html',
  trecho: 'Por exemplo, após os primeiros 140 minutos acumulados e a cada 8 horas consecutivas, o sistema força a abertura das EEVs e acelera o compressor à rotação máxima para reabastecer o cárter [4].',
};

const F_TESTE_100PCT = {
  campo: 'conteudo_html',
  trecho: 'o técnico deve forçar o funcionamento estável a 100% de capacidade (via botões de serviço na PCB externa) e aguardar de 15 a 20 minutos completos antes de registrar qualquer dado [2].',
};

const F_311V = {
  campo: 'conteudo_html',
  trecho: 'Tensão Registrada: 311 Vcc (Barramento CC Máximo)',
};

const F_8V = {
  campo: 'conteudo_html',
  trecho: 'Tensão Registrada: 8 Vcc (Tensão segura &lt; 10Vcc)',
};

const F_EEV_OHM = {
  campo: 'conteudo_html',
  trecho: 'Par Medido: Pino Comum (Vermelho) para Fase (Azul) Resistência Lida: 47.2 Ω Status Físico: Aprovado (Faixa ideal: 45Ω a 50Ω)',
};

const F_NTC_DAIKIN = {
  campo: 'conteudo_html',
  trecho: 'Temperatura Alvo: 0°C Resistência Lida: 66.3 kΩ (Padrão Daikin) Desvio Estimado (Drift): 0.0% (Dentro da faixa) Parecer Técnico: ✔ Aprovado.',
};

const F_SPLIT_TERM = {
  campo: 'conteudo_html',
  trecho: 'Uma unidade evaporadora interna operando em plena carga sob fluxo de ar nominal deve registrar um diferencial de temperatura de bulbo seco (Split Térmico) de 10°C a 12°C através da serpentina evaporadora [22].',
};

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm06-01',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'bancada-oficina',
  duracaoMin: 10,
  beats: [
    {
      id: 'abertura-inverter',
      tipo: 'fala',
      quem: 'narrador',
      texto: 'Na bancada da oficina, uma condensadora Split Inverter está aberta para diagnóstico. Juninho já vai aproximando a chave de fenda dos bornes da placa principal recém-desligada.',
    },
    {
      id: 'simon-para-juninho-300v',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Alto lá, Juninho! Tire a mão dessa PCB! Os capacitores eletrolíticos do barramento retêm mais de 300Vcc mesmo depois de desligar o disjuntor.',
      fonte: F_CAP_300V,
    },
    {
      id: 'bia-explica-311v-10v',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Na retificação da rede, o barramento CC carrega até 311 Vcc! Você precisa medir com o multímetro entre os pontos P e N e confirmar que caiu abaixo de 10Vcc (como 8 Vcc) antes de tocar na placa.',
      fonte: [F_CAP_300V, F_311V, F_8V],
    },
    {
      id: 'juninho-mede-barramento',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'assustado',
      texto: 'Nossa, ainda bem que o senhor gritou! Coloquei as pontas de prova em P e N e estava descendo de 300Vcc agora. Vou esperar cair para 8 Vcc antes de soltar os cabos.',
      fonte: [F_CAP_300V, F_8V],
    },
    {
      id: 'escolha-seguranca-pcb',
      tipo: 'escolha',
      pergunta: 'Após desligar o disjuntor de um Split Inverter para substituir o módulo IPM ou testar sensores na placa externa, qual é o primeiro passo obrigatório?',
      fonte: [F_CAP_300V, F_311V, F_8V],
      opcoes: [
        {
          id: 'a',
          texto: 'Encostar uma chave de fenda entre os polos do capacitor para dar um estalo e descarregar rápido.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'irritado',
              texto: 'Loucura! Dar curto direto num banco carregado a 311 Vcc derrete a ponta da chave, rompe trilhas da placa e pode causar queimadura grave.',
              fonte: F_311V,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Medir a tensão CC entre P (positivo) e N (negativo) e aguardar até confirmar leitura abaixo de 10Vcc.',
          ideal: true,
          fonte: [F_CAP_300V, F_8V],
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Padrão ouro! Os resistores de sangria descarregam o banco gradualmente; só tocamos na placa abaixo de 10Vcc.',
              fonte: F_CAP_300V,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Testar apenas se há tensão CA na borneira de entrada com uma chave neon.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'serio',
              texto: 'A entrada CA estará zerada, mas o banco de capacitores CC continua carregado acima de 300Vcc esperando um descuido!',
              fonte: F_CAP_300V,
            },
          ],
        },
      ],
    },
    {
      id: 'causo-jato-agua-bldc',
      tipo: 'causo',
      titulo: 'O Lavador Caprichoso e a Turbina Geradora de Back-EMF',
      fonte: F_BACKEMF,
      falas: [
        {
          quem: 'simon',
          emocao: 'rindo',
          texto: 'Teve um instalador que foi lavar a condensadora de um cliente. Desligou o disjuntor direitinho, mas bateu o jato da lavadora direto na hélice do motor Brushless DC.',
          fonte: F_BACKEMF,
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'Eu já vi gente fazendo isso, mestre! A hélice gira rápido igual turbina de avião. Queimou o rolamento?',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Queimou a placa eletrônica inteira! O motor BLDC tem ímãs permanentes no rotor; girando no jato de água ou na ventania, ele vira um gerador e injeta tensão reversa (Back-EMF) na placa!',
          fonte: F_BACKEMF,
        },
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'Regra sagrada na preventiva de Inverter: antes de bater água ou ar comprimido, trave mecanicamente a hélice ou desconecte o chicote do motor BLDC da placa.',
          fonte: F_BACKEMF,
        },
      ],
    },
    {
      id: 'mito-verdade-backemf',
      tipo: 'mitoVerdade',
      afirmacao: 'Com o disjuntor geral desligado, girar a hélice do ventilador Brushless DC em alta velocidade com o jato de água não traz nenhum risco à placa eletrônica da condensadora.',
      verdade: false,
      fonte: F_BACKEMF,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Mito fatal para o seu bolso! Quando a hélice de um motor Brushless DC gira livremente, o motor atua como gerador produzindo tensão reversa (Back-EMF).',
          fonte: F_BACKEMF,
        },
        {
          quem: 'bia',
          emocao: 'pensativo',
          texto: 'Essa energia gerada retroalimenta o barramento da placa desligada sem controle e queima os drivers lógicos na hora.',
          fonte: F_BACKEMF,
        },
      ],
    },
    {
      id: 'marta-pergunta-barulho-oleo',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'curioso',
      texto: 'Simon, uma cliente ligou assustada dizendo que o Inverter dela, depois de horas silencioso, de repente acelerou sozinho fazendo barulho de gás correndo e depois voltou ao normal. É defeito?',
    },
    {
      id: 'simon-explica-retorno-oleo',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'aprovando',
      texto: 'Zero defeito, Dona Marta! Em baixa rotação o óleo fica preguiçoso na linha. Após os primeiros 140 minutos e a cada 8 horas, o sistema abre a EEV e acelera o compressor para trazer o óleo de volta ao cárter.',
      fonte: F_OLEO_140,
    },
    {
      id: 'bia-explica-100pct-manometro',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'E atenção ao medir pressões no Inverter: como a rotação varia, precisamos travar a máquina a 100% de capacidade pelo botão de serviço da PCB e aguardar de 15 a 20 minutos antes de avaliar!',
      fonte: F_TESTE_100PCT,
    },
    {
      id: 'simon-explica-ntc-daikin',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'pensativo',
      texto: 'E se desconfiar de sensor NTC de serpentina, lembre do banho de gelo a 0°C: num padrão Daikin saudável a leitura crava 66.3 kΩ com 0.0% de desvio!',
      fonte: F_NTC_DAIKIN,
    },
    {
      id: 'referencia-ipm-eev',
      tipo: 'referencia',
      texto: 'Veja na tabela o teste de diodos do IPM (queda normal entre 0.35 V ~ 0.50 V nos terminais U, V, W) e na aula a faixa ôhmica da bobina da EEV (45Ω a 50Ω).',
      alvo: { aba: 'tabelas' },
      fonte: [F_IPM_DIODO, F_EEV_OHM],
    },
    {
      id: 'calculadora-eev-ohm',
      tipo: 'calculadora',
      titulo: 'Diagnóstico Ôhmico de Bobina Estatora da EEV',
      formula: 'Faixa Ideal: 45 Ω ≤ R_fase ≤ 50 Ω',
      enunciado: 'Ao testar a bobina de passo da EEV entre o pino Comum (Vermelho) e a Fase (Azul), qual leitura em Ohms do nosso painel confirma que o enrolamento está aprovado dentro da faixa de 45Ω a 50Ω?',
      unidade: 'Ω',
      respostaCorreta: 47.2,
      tolerancia: 2.8,
      leituras: [
        { rotulo: 'Faixa Ideal da Bobina EEV', valor: '45Ω a 50Ω' },
        { rotulo: 'Queda de Diodo Normal no IPM', valor: '0.35 V ~ 0.50 V' },
      ],
      opcoesRapidas: [1.8, 12.5, 47.2, 180.0],
      fonte: [F_EEV_OHM, F_IPM_DIODO],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'Isso mesmo! A leitura de 47.2 Ω está perfeitamente centrada na faixa ideal de 45Ω a 50Ω para cada fase da bobina da EEV.',
          fonte: F_EEV_OHM,
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Observe os limites: o valor entre o Comum e cada Fase deve ser uniforme entre 45Ω e 50Ω, como a leitura padrão de 47.2 Ω.',
          fonte: F_EEV_OHM,
        },
      ],
    },
    {
      id: 'inspecao-split-inverter',
      tipo: 'inspecao',
      titulo: 'Inspeção de Bancada: Placa Inverter e Ciclo Frigorífico',
      enunciado: 'Avalie quatro leituras obtidas durante o diagnóstico de um Split Inverter. Qual delas aponta uma anomalia ou condição insegura?',
      fonte: [F_311V, F_CAP_300V, F_IPM_DIODO, F_EEV_OHM, F_SPLIT_TERM],
      pontos: [
        {
          id: 'a',
          rotulo: 'Tocar na placa condensadora com o multímetro marcando 311 Vcc nos pontos P e N',
          correta: true,
          fonte: [F_311V, F_CAP_300V],
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Perigo mortal! Com 311 Vcc o barramento está totalmente carregado; aguarde cair abaixo de 10Vcc antes de tocar na PCB.',
              fonte: [F_311V, F_CAP_300V],
            },
          ],
        },
        {
          id: 'b',
          rotulo: 'Teste de diodo do módulo IPM apresentando queda uniforme de 0.35 V ~ 0.50 V em U, V e W',
          fonte: F_IPM_DIODO,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Saudável! A queda de tensão direta entre 0.35 V ~ 0.50 V comprova que os diodos de roda livre dos IGBTs estão íntegros.',
              fonte: F_IPM_DIODO,
            },
          ],
        },
        {
          id: 'c',
          rotulo: 'Bobina da válvula de expansão eletrônica (EEV) medindo 47.2 Ω (faixa de 45Ω a 50Ω)',
          fonte: F_EEV_OHM,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Enrolamento aprovado! Todas as fases dentro da janela de 45Ω a 50Ω.',
              fonte: F_EEV_OHM,
            },
          ],
        },
        {
          id: 'd',
          rotulo: 'Split térmico de bulbo seco de 10°C a 12°C na evaporadora operando em plena carga',
          fonte: F_SPLIT_TERM,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Rendimento térmico excelente! O diferencial de 10°C a 12°C confirma troca de calor saudável sob vazão nominal.',
              fonte: F_SPLIT_TERM,
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-bldc-ima',
      tipo: 'filosofia',
      titulo: 'Ímã Permanente Nunca Dorme',
      principio: 'Toda máquina elétrica de ímã permanente é uma via de mão dupla: se você entrega tensão, ela gira; se você gira a hélice na marra, ela gera tensão e queima a placa.',
      fonte: F_BACKEMF,
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Respeitem a eletrônica de potência! Confirmar menos de 10Vcc no barramento protege a sua vida, e travar a hélice contra o Back-EMF protege a placa do seu cliente.',
          fonte: [F_CAP_300V, F_BACKEMF],
        },
      ],
    },
    {
      id: 'quiz-estabilizacao-inverter',
      tipo: 'quiz',
      enunciado: 'Por que não se deve avaliar a carga de fluido refrigerante de um Split Inverter apenas olhando o manômetro em operação modulante comum, e qual é o protocolo correto?',
      fonte: F_TESTE_100PCT,
      opcoes: [
        {
          id: 'a',
          texto: 'Porque a variação do compressor e da EEV altera as pressões; deve-se forçar 100% de capacidade na PCB e aguardar de 15 a 20 minutos.',
          correta: true,
          fonte: F_TESTE_100PCT,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Exato! Só com frequência travada a 100% de capacidade por 15 a 20 minutos temos regime estacionário para aferir pressões e temperaturas.',
              fonte: F_TESTE_100PCT,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Porque o Inverter não usa fluido refrigerante gasoso, dispensando o uso de balança ou manômetro.',
          feedback: [
            {
              quem: 'juninho',
              emocao: 'rindo',
              texto: 'Essa nem o Zé Gambiarra falaria! Claro que usa fluido refrigerante e exige balança de precisão.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Basta ligar o aparelho no controle remoto e ler a pressão nos primeiros 2 minutos de partida.',
          fonte: F_TESTE_100PCT,
          feedback: [
            {
              quem: 'bia',
              emocao: 'serio',
              texto: 'Nos primeiros minutos a rampa de partida e a EEV ainda estão buscando equilíbrio; é obrigatório aguardar de 15 a 20 minutos em 100% de capacidade.',
              fonte: F_TESTE_100PCT,
            },
          ],
        },
      ],
    },
    {
      id: 'marta-elogia-cuidado-inverter',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'aprovando',
      texto: 'Saber explicar o ciclo de retorno de óleo de 140 minutos e 8 horas para o cliente evita visitas improdutivas e passa uma confiança enorme!',
      fonte: F_OLEO_140,
    },
    {
      id: 'bia-destaca-split-termico',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'aprovando',
      texto: 'E conferir o Split Térmico de 10°C a 12°C na evaporadora junto com a corrente True-RMS fecha o diagnóstico sem adivinhação.',
      fonte: F_SPLIT_TERM,
    },
    {
      id: 'juninho-promete-travar-helice',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'empolgado',
      texto: 'Nunca mais bato jato de água numa condensadora sem travar a hélice ou desplugar o motor da placa, mestre! E multímetro em P e N até baixar de 10Vcc virou lei.',
      fonte: [F_BACKEMF, F_CAP_300V],
    },
    {
      id: 'simon-convida-vrf',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'aprovando',
      texto: 'Agora que você domina um Inverter individual, vamos subir para o telhado encarar o irmão gigante dele: o sistema VRF/VRV!',
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Aguarde a descarga dos capacitores e confirme tensão abaixo de 10Vcc nos bornes P e N (que operam a 311 Vcc) antes de tocar na placa.',
        'Trave a hélice do ventilador Brushless DC na lavagem ou ventania para evitar tensão reversa (Back-EMF) que queima a PCB.',
        'Valide a bobina da EEV (45Ω a 50Ω), os diodos do IPM (0.35 V ~ 0.50 V) e estabilize o sistema a 100% por 15 a 20 minutos.',
      ],
      proxima: 'Na próxima aula, subimos para a cobertura para dominar Sistemas VRF/VRV: cálculo de carga adicional por metro, compensação térmica de estanqueidade, erro U4/A3 e caixas BS!',
      fonte: [F_CAP_300V, F_311V, F_BACKEMF, F_EEV_OHM, F_IPM_DIODO, F_TESTE_100PCT],
    },
  ],
};
