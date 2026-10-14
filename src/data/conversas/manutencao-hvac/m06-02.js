// Conversa: Manutenção de Sistemas VRF/VRV (m06-02)
// Cenário: Casa de Máquinas — Carga Adicional g/m, Compensação Térmica 550 PSI, Rede 60Ω (U4/A3) e EEVMate

const F_INFO_VRF = {
  campo: 'infobox_campo',
  trecho: 'Sempre execute reapertos preventivos e exija o uso de manifolds com regulador de vazão de nitrogênio ajustado a 2 PSI durante qualquer intervenção de solda frigorífica. Certifique-se de que os alçapões respeitem a janela de acesso de pelo menos 600 mm x 600 mm recomendada pelos fabricantes.',
};

const F_GROUND_LOOP = {
  campo: 'infobox_campo',
  trecho: 'A malha ou blindagem trançada (shield) do cabo de comunicação do barramento lógica RS-485 deve ter continuidade em toda a rede de evaporadoras e ser conectada à terra física do chassi exclusivamente no condensador mestre.',
};

const F_EEVMATE = {
  campo: 'infobox_campo',
  trecho: 'Quando a bobina da EEV ou da solenoide apresenta leitura de resistência adequada, mas o cursor está preso mecanicamente por carepas ou oxidação de solda: Desenergize a caixa BS correspondente e remova a bobina estatora [23]. Conecte um testador portátil do tipo *EEVMate* no terminal de controle de motor de passo de 5 ou 6 vias [23].',
};

const F_TAB_CARGA = {
  campo: 'tabelas_html',
  trecho: 'Tabela 6.2.1 — Peso de Carga Adicional de Refrigerante R-410A por Diâmetro de Linha de Líquido Diâmetro Nominal da Linha de Líquido Multiplicador de Carga (Métrico - g/m) Multiplicador de Carga (Imperial - lbs/ft) 1/4" 22 0.015 3/8" 60 0.040 1/2" 120 0.081 5/8" 180 0.121 3/4" 260 0.175',
};

const F_SUMP_SH = {
  campo: 'tabelas_html',
  trecho: 'Superaquecimento do Cárter (Sump Superheat) &gt; 10 K (10°C) Diluição do óleo lubrificante POE/PVE por refrigerante líquido condensado, resultando em quebra dos mancais.',
};

const F_MEM_1120 = {
  campo: 'conteudo_html',
  trecho: 'Memorial: (15m x 60g) + (10m x 22g) = 1.120g Carga Adicional Recomendada: 1,12 kg (R-410A) Instruções: Carga padrão para ciclos de climatização convencionais de pequeno porte.',
};

const F_NIT_550 = {
  campo: 'conteudo_html',
  trecho: 'Noite Fria (15°C) / 536 PSI Dia Quente (35°C) / 564 PSI Noite Fria (15°C) / 520 PSI Fixo (25°C) / 540 PSI Laudo de Compensação Física Fórmula Aplicada: P_corr = 536 + 0.8 x (77°F - 59°F) Pressão Corrigida: 550.4 PSI Status: ✔ Aprovado - Sem Vazamento',
};

const F_NIT_540 = {
  campo: 'conteudo_html',
  trecho: 'Fórmula Aplicada: P_corr = 540 + 0.8 x (77°F - 77°F) Pressão Corrigida: 540.0 PSI (Abaixo de 550 PSI) Status: ❌ Reprovado - Vazamento Físico Detectado A temperatura se manteve idêntica à do momento do teste inicial, logo, a queda de 10 PSI indica perda física direta de gás.',
};

const F_BUS_60OHM = {
  campo: 'conteudo_html',
  trecho: 'Rede Saudável Ligação Estrela Curto-Circuito Interferência EMI Status de Telemetria e Diagnóstico Tensão nos Terminais: 16,2 Vcc estável Resistência da Linha: 60,2 Ω (Dois resistores de 120Ω em paralelo) Diagnóstico: ✔ Integridade física atestada.',
};

const F_ERRO_U4_A3 = {
  campo: 'conteudo_html',
  trecho: 'Código Exibido: U4 (Falha Geral de Transmissão) Causa Provável: Fiação F1/F2 interrompida, topologia não-seriada ou curto. Passos de Reparo: Verifique a tensão Vcc (ideal: 16Vcc estável) e meça a impedância do barramento (aprox. 60 ohms com energia desligada). Código Exibido: A3 (Anomalia no Nível de Dreno)',
};

const F_BS_OHM = {
  campo: 'conteudo_html',
  trecho: 'Resistência Lida (Comum para Fase): 46.5 Ω (Faixa normal: 26Ω a 750Ω) Comportamento: Agulha se move sob micropassos lineares para controlar o fluxo de refrigerante.',
};

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm06-02',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 10,
  beats: [
    {
      id: 'abertura-vrf',
      tipo: 'fala',
      quem: 'narrador',
      texto: 'No terraço técnico do edifício corporativo, três condensadoras VRF alimentam dezenas de evaporadoras. Juninho olha preocupado para o manômetro do teste de estanqueidade com nitrogênio.',
    },
    {
      id: 'juninho-assusta-536psi',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'assustado',
      texto: 'Mestre Simon, lascou! Ontem à tarde pressurizamos a rede com 550 PSI a 25°C (77°F). Agora na manhã fria de 15°C o manômetro caiu para 536 PSI! Tem vazamento na solda?',
      fonte: F_NIT_550,
    },
    {
      id: 'simon-explica-compensacao-nit',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'rindo',
      texto: 'Respira e faz a conta antes de quebrar o forro, Juninho! O nitrogênio contrai no frio. Aplicando a correção térmica, 536 PSI a 15°C equivalem a 550.4 PSI corrigidos a 25°C. Zero vazamento!',
      fonte: F_NIT_550,
    },
    {
      id: 'juninho-aliviado-nit',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'aprovando',
      texto: 'Que alívio! Então só seria vazamento real se a pressão corrigida pela temperatura caísse abaixo dos 550 PSI, como 540.0 PSI a 25°C!',
      fonte: [F_NIT_550, F_NIT_540],
    },
    {
      id: 'bia-explica-carga-adicional',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Exato! E depois do vácuo, nada de completar gás R-410A no olhômetro! No VRF pesamos a carga adicional exata pelo comprimento de cada bitola da linha de líquido.',
      fonte: F_TAB_CARGA,
    },
    {
      id: 'referencia-tabela-vrf',
      tipo: 'referencia',
      texto: 'Consulte a Tabela 6.2.1 de carga adicional R-410A por metro de linha de líquido (1/4" = 22 g/m, 3/8" = 60 g/m, 1/2" = 120 g/m) e o superaquecimento mínimo do cárter (> 10°C).',
      alvo: { aba: 'tabelas' },
      fonte: [F_TAB_CARGA, F_SUMP_SH],
    },
    {
      id: 'calculadora-carga-vrf',
      tipo: 'calculadora',
      titulo: 'Cálculo de Carga Adicional R-410A por Bitola de Líquido',
      formula: 'Carga = (L_3/8 × 60 g/m) + (L_1/4 × 22 g/m)',
      enunciado: 'Um ramal VRF possui 15 metros de linha de líquido de 3/8" (fator 60 g/m) e 10 metros de linha de 1/4" (fator 22 g/m). Qual é a carga adicional total recomendada em gramas?',
      unidade: 'g',
      respostaCorreta: 1120,
      tolerancia: 5,
      leituras: [
        { rotulo: 'Trecho 3/8" (15m × 60g)', valor: '900 g' },
        { rotulo: 'Trecho 1/4" (10m × 22g)', valor: '220 g' },
      ],
      opcoesRapidas: [680, 900, 1120, 1800],
      fonte: [F_TAB_CARGA, F_MEM_1120],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'Cálculo exato! (15m x 60g) + (10m x 22g) = 1.120g, ou seja, 1,12 kg de R-410A injetados na balança eletrônica.',
          fonte: F_MEM_1120,
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Some os dois trechos da linha de líquido: 15m multiplicados por 60g (900g) mais 10m multiplicados por 22g (220g) fecham em 1.120g.',
          fonte: F_MEM_1120,
        },
      ],
    },
    {
      id: 'marta-pergunta-erro-u4',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'curioso',
      texto: 'Simon, e quando o controle centralizado apita código U4 e para o andar inteiro? O orçamento que nos mandaram mês passado queria trocar a placa principal da condensadora!',
      fonte: F_ERRO_U4_A3,
    },
    {
      id: 'causo-faxineiro-u4',
      tipo: 'causo',
      titulo: 'O Erro U4 Fantasma e a Placa Condenada à Toa',
      fonte: [F_ERRO_U4_A3, F_BUS_60OHM, F_GROUND_LOOP],
      falas: [
        {
          quem: 'simon',
          emocao: 'rindo',
          texto: 'Dona Marta, código U4 é falha de transmissão no barramento F1/F2. Nesse mesmo prédio, um técnico quase trocou a placa mestre porque não sabia medir a rede!',
          fonte: F_ERRO_U4_A3,
        },
        {
          quem: 'juninho',
          emocao: 'curioso',
          texto: 'E qual era o defeito real, mestre? Fio cortado por rato no forro?',
        },
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Dois erros clássicos: uma evaporadora estava com o disjuntor local desligado e a malha blindada do cabo foi aterrada em vários pontos, criando laços de terra e ruído EMI!',
          fonte: F_GROUND_LOOP,
        },
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'Bastava aterrar a blindagem exclusivamente no condensador mestre e conferir no multímetro os 16,2 Vcc estáveis e a resistência de linha de 60,2 Ω (dois resistores de 120Ω em paralelo).',
          fonte: [F_GROUND_LOOP, F_BUS_60OHM],
        },
      ],
    },
    {
      id: 'mito-verdade-malha-vrf',
      tipo: 'mitoVerdade',
      afirmacao: 'Para melhorar a proteção contra ruídos elétricos em redes VRF, a malha blindada (shield) do cabo de comunicação deve ser aterrada na carcaça metálica de todas as evaporadoras do prédio.',
      verdade: false,
      fonte: F_GROUND_LOOP,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Mito! Aterrar a blindagem em múltiplos pontos cria diferenças de potencial entre andares, gerando laços de terra (Ground Loops) que injetam ruído e derrubam a rede.',
          fonte: F_GROUND_LOOP,
        },
        {
          quem: 'bia',
          emocao: 'aprovando',
          texto: 'A malha deve ter continuidade em toda a linha Daisy-Chain, mas ser conectada à terra física exclusivamente no chassi do condensador mestre.',
          fonte: F_GROUND_LOOP,
        },
      ],
    },
    {
      id: 'simon-explica-carepa-nitro',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Outro vilão em VRF é soldar tubulação sem fluxo contínuo de nitrogênio a 2 PSI: a carepa de óxido corre pela linha e trava as agulhas das EEVs nas caixas seletoras BS!',
      fonte: [F_INFO_VRF, F_EEVMATE],
    },
    {
      id: 'escolha-eev-travada-bs',
      tipo: 'escolha',
      pergunta: 'Uma válvula de expansão (EEV) numa caixa BS Box apresenta bobina saudável (46.5 Ω), mas o rotor interno travou por carepa de solda sem nitrogênio. Como tentar destravá-la sem abrir o circuito frigorífico?',
      fonte: [F_EEVMATE, F_BS_OHM, F_INFO_VRF],
      opcoes: [
        {
          id: 'a',
          texto: 'Aquecer o corpo da válvula EEV com maçarico até o metal ficar rubro.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'assustado',
              texto: 'Jamais! O calor excessivo deforma o assento micrométrico de teflon e degrada o óleo sintético.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Desenergizar a caixa BS, remover a bobina e usar um pulsador magnético portátil (EEVMate) em modo overdrive.',
          ideal: true,
          fonte: F_EEVMATE,
          reacao: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Cirúrgico! O ciclo de avanço e recuo de alta potência do EEVMate força o rotor interno a girar e expulsa a partícula sem recolher o gás.',
              fonte: F_EEVMATE,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Ligar a bobina de passo diretamente na rede de potência alternada para dar um tranco magnético.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'irritado',
              texto: 'Isso torra o enrolamento da bobina em menos de um segundo e não destrava a agulha mecânica!',
            },
          ],
        },
      ],
    },
    {
      id: 'inspecao-rede-vrf',
      tipo: 'inspecao',
      titulo: 'Inspeção de Campo: Rede VRF, Caixa BS e Cárter',
      enunciado: 'Analise quatro parâmetros medidos durante a manutenção de um sistema VRF. Qual deles revela uma falha que exige intervenção corretiva?',
      fonte: [F_BUS_60OHM, F_BS_OHM, F_SUMP_SH, F_NIT_550, F_NIT_540],
      pontos: [
        {
          id: 'a',
          rotulo: 'Barramento de comunicação F1/F2 medindo 16,2 Vcc estável e impedância desligada de 60,2 Ω',
          fonte: F_BUS_60OHM,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Rede perfeita! Os 60,2 Ω confirmam os dois resistores terminais de 120Ω em paralelo nas extremidades do Daisy-Chain.',
              fonte: F_BUS_60OHM,
            },
          ],
        },
        {
          id: 'b',
          rotulo: 'Pressão de nitrogênio a 540 PSI após 24h com temperatura fixa em 25°C (queda real de 10 PSI)',
          correta: true,
          fonte: [F_NIT_550, F_NIT_540],
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Reprovado! Como a temperatura permaneceu fixa em 25°C (77°F), a queda de 550 PSI para 540.0 PSI (perda de 10 PSI) comprova vazamento físico de gás.',
              fonte: [F_NIT_550, F_NIT_540],
            },
          ],
        },
        {
          id: 'c',
          rotulo: 'Bobina da EEV auxiliar da BS Box apresentando 46.5 Ω (dentro da faixa de 26Ω a 750Ω)',
          fonte: F_BS_OHM,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Bobina saudável! A leitura de 46.5 Ω atesta a integridade elétrica das espiras.',
              fonte: F_BS_OHM,
            },
          ],
        },
        {
          id: 'd',
          rotulo: 'Superaquecimento do cárter (Sump Superheat) mantido acima de 10°C em operação contínua',
          fonte: F_SUMP_SH,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Seguro! Manter o cárter mais de 10°C acima da saturação evita diluição do óleo POE/PVE por refrigerante líquido.',
              fonte: F_SUMP_SH,
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-nitro-busca',
      tipo: 'filosofia',
      titulo: 'O Nitrogênio na Solda Economiza Semanas no Telhado',
      principio: 'Purgar nitrogênio a 2 PSI durante a brasagem custa centavos; esquecer o nitrogênio cria a carepa que trava dezenas de EEVs no entreforro.',
      fonte: [F_INFO_VRF, F_EEVMATE],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Em VRF, capricho não é opcional: solda sempre com nitrogênio fluindo a 2 PSI, alçapão de visita de pelo menos 600 mm x 600 mm e busca metódica no barramento.',
          fonte: F_INFO_VRF,
        },
      ],
    },
    {
      id: 'quiz-codigos-vrf',
      tipo: 'quiz',
      enunciado: 'Em um sistema Daikin VRV, o que indicam respectivamente os códigos de falha clássicos U4 e A3, e qual é a leitura de impedância esperada no barramento desligado saudável?',
      fonte: [F_ERRO_U4_A3, F_BUS_60OHM],
      opcoes: [
        {
          id: 'a',
          texto: 'U4 indica falha de transmissão (fiação F1/F2), A3 indica anomalia no nível de dreno/bomba, e o barramento saudável mede cerca de 60,2 Ω.',
          correta: true,
          fonte: [F_ERRO_U4_A3, F_BUS_60OHM],
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Domínio total! U4 é comunicação, A3 é nível de condensado na bandeja e os 60,2 Ω vêm dos dois terminadores de 120Ω em paralelo.',
              fonte: [F_ERRO_U4_A3, F_BUS_60OHM],
            },
          ],
        },
        {
          id: 'b',
          texto: 'U4 indica filtro de ar sujo, A3 indica falta de fluido no compressor e a linha deve medir zero.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'irritado',
              texto: 'Errado! Leitura próxima de zero no barramento indica curto-circuito total nos cabos de comunicação.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Ambos indicam queima do compressor scroll, exigindo recolhimento imediato do fluido refrigerante.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Sobrecorrente no inversor Daikin é código L5; U4 é comunicação e A3 é sistema de dreno.',
            },
          ],
        },
      ],
    },
    {
      id: 'marta-aprova-alcapao',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'aprovando',
      texto: 'Já anotei a exigência dos alçapões de 600 mm x 600 mm para a equipe de arquitetura nunca mais trancar uma caixa BS no gesso!',
      fonte: F_INFO_VRF,
    },
    {
      id: 'bia-reforca-sump-sh',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'pensativo',
      texto: 'E na telemetria do notebook, sempre olho o superaquecimento do cárter acima de 10°C para garantir que o óleo POE não esteja diluído por retorno de líquido.',
      fonte: F_SUMP_SH,
    },
    {
      id: 'juninho-comemora-eevmate',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'empolgado',
      texto: 'Esse pulsador magnético EEVMate salvou nosso dia, mestre! Destravar a válvula pela bobina de passo sem abrir o sistema é mágica de engenheiro.',
      fonte: F_EEVMATE,
    },
    {
      id: 'simon-chama-chillers',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'empolgado',
      texto: 'E agora que dominamos o VRF, preparem os protetores auriculares: na próxima aula vamos descer para a Central de Água Gelada encarar os Chillers!',
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Calcule a carga adicional de R-410A pela metragem exata da linha de líquido (ex.: 60 g/m em 3/8" e 22 g/m em 1/4") e compense a temperatura no teste de 550 PSI.',
        'No barramento RS-485 (erro U4), confirme 16,2 Vcc estável, 60,2 Ω desligado e aterre a malha exclusivamente no condensador mestre.',
        'Use nitrogênio a 2 PSI na brasagem para evitar carepas e utilize pulsador magnético (EEVMate) para destravar EEVs.',
      ],
      proxima: 'Na próxima aula, entramos na manutenção pesada de Chillers: escovas de Nylon vs Inox, análise de óleo POE, Surge centrífugo e vibração ISO 10816-3!',
      fonte: [F_TAB_CARGA, F_NIT_550, F_BUS_60OHM, F_GROUND_LOOP, F_INFO_VRF, F_EEVMATE],
    },
  ],
};
