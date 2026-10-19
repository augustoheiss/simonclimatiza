// src/data/bancada/notasDeBancada.js
// Camada Pedagógica "Bancada Prática do Professor Simon"
// Filosofia: Menos teoria acadêmica cansativa, 100% de rigor técnico aplicado direto na ferramenta.
// Estrutura: Fundamentos da Física do Ar-Condicionado -> Prática Imediata de Instalação e Diagnóstico.

export const MANIFESTO_PEDAGOGICO_SIMON = {
  titulo: 'Método Simon de Bancada: Física na Veia ➔ Prática Imediata',
  subtitulo: 'Sem rolagem infinita, sem apostila sonolenta. Clique nos botões do painel como num projeto CAD e veja a física funcionando na ferramenta.',
  citacaoSimon:
    'Eu não gosto de ficar dando horas de teoria abstrata porque o aluno reclama — e com razão! Teoria sem ferramenta na mão dá sono. Aqui a gente entende a física essencial do ar-condicionado (calor, pressão, superaquecimento e elétrica) e já vai direto pra prática instalar, soldar com nitrogênio, puxar vácuo no vacuômetro e medir na bancada.',
  pilares: [
    {
      id: 'fisica-pratica',
      icone: 'Flame',
      titulo: '1. Física Visível no Manifold',
      resumo: 'Não decore fórmula pra prova: enxergue a 1ª e a 2ª Lei da Termodinâmica acontecendo no ponteiro de pressão e no termômetro de tubo.',
    },
    {
      id: 'direto-instalacao',
      icone: 'Wrench',
      titulo: '2. Direto pra Instalação & Bancada',
      resumo: 'Entendeu como o calor se move? Já vamos cortar cobre sem rebarba, flangear no torquímetro, brasar com N₂ e puxar vácuo abaixo de 500 mícrons.',
    },
    {
      id: 'zero-scroll-cad',
      icone: 'Cpu',
      titulo: '3. Painel Técnico Estilo AutoCAD',
      resumo: 'Esqueça rede social onde você rola a tela sem fim. Aqui cada botão abre um componente, uma tabela, um vídeo ou um passo prático direto na sua frente.',
    },
  ],
};

/**
 * Briefings práticos, filosóficos, bem-humorados e sinceros por Curso e Módulo/Trilha.
 * Usados pelo `cadContentParser.js` em conjunto com os 79 roteiros de `src/data/conversas/`
 * para transformar cada bloco de `conteudo_html`, `tabelas_html` e `infobox_campo` em uma
 * experiência viva de oficina sem cortar uma única linha de conteúdo técnico.
 */
export const NOTAS_CURSOS_CAD = {
  'instalacao-hvac': {
    codigoCad: 'CAD-INST-01',
    nomeCurto: 'Instalação HVAC Elite',
    corPrimaria: '#0ea5e9',
    corSecundaria: '#38bdf8',
    filosofiaCurso:
      'Instalar ar-condicionado não é pendurar caixote plástico na parede e soltar "gás no olhômetro". É montar um sistema vascular hermético onde a física trabalha a seu favor por 15 anos sem dar retorno no seu domingo.',
    dicaPraticaInicial:
      'Comece pelas 3 aulas de Física Aplicada (Ciclo, SH/SC e Fluidos) e pule direto para a Bancada de Cobre, Brasagem e Vácuo Profundo na Trilha Prática do Simon!',
    trilhasPraticas: [
      {
        id: 'trilha-1-fisica',
        codigo: 'LAYER 01 · FÍSICA NA VEIA',
        titulo: 'Fundamentos da Física do Ar-Condicionado (Na Prática)',
        descricao: 'O mínimo inegociável da física térmica visto direto no manifold e no termômetro antes de pegar na chave inglesa.',
        cor: '#0ea5e9',
        aulasIds: ['01-01', '01-02', '01-03'],
      },
      {
        id: 'trilha-2-instalacao-cobre-vacuo',
        codigo: 'LAYER 02 · MÃO NA MASSA (FRIGORÍFICO)',
        titulo: 'Prática de Instalação: Cobre, Brasagem N₂, Estanqueidade, Vácuo e Carga',
        descricao: 'Da física direto para a bancada: corte, flangeamento elástico, solda limpa, teste de 4.2 MPa, vácuo em mícrons e carga na balança.',
        cor: '#10b981',
        aulasIds: ['03-01', '03-02', '03-03', '05-04', '06-01', '07-01'],
      },
      {
        id: 'trilha-3-eletrica-sistemas',
        codigo: 'LAYER 03 · ELÉTRICA & MONTAGEM DE SISTEMAS',
        titulo: 'Prática Elétrica, Infraestrutura, Split Inverter, VRF e Câmaras',
        descricao: 'Alimentação dedicada, terminais prensados, comunicação blindada, carga térmica, drenagem e montagem em campo.',
        cor: '#f59e0b',
        aulasIds: ['04-01', '04-02', '04-03', '02-01', '02-02', '02-03', '05-01', '05-02', '05-03'],
      },
      {
        id: 'trilha-4-seguranca-handover',
        codigo: 'LAYER 04 · FERRAMENTAL, SEGURANÇA & HANDOVER',
        titulo: 'Segurança de Campo, Ferramentas de Precisão e Entrega Digital',
        descricao: 'EPIs, NR-10/NR-35, comissionamento digital e assinatura de entrega que blinda sua garantia.',
        cor: '#8b5cf6',
        aulasIds: ['01-04', '07-02', 'apresentacao'],
      },
    ],
  },

  'manutencao-hvac': {
    codigoCad: 'CAD-MANUT-02',
    nomeCurto: 'Manutenção & Diagnóstico',
    corPrimaria: '#10b981',
    corSecundaria: '#34d399',
    filosofiaCurso:
      'Manutenção de elite não é "lavar telinha de filtro" esperando o compressor queimar no verão. É ler os sinais vitais da máquina pela física (P×T, SH, SC, corrente e ΔT) e transformar diagnóstico em contrato recorrente PMOC.',
    dicaPraticaInicial:
      'Vá direto para o Diagnóstico pelos 5 Sentidos, Diagrama P-H na Prática e Elétrica antes de avançar para Trocadores, Circuito Frigorífico e Preditiva!',
    trilhasPraticas: [
      {
        id: 'man-trilha-1-fisica-diag',
        codigo: 'LAYER 01 · FÍSICA DO DIAGNÓSTICO',
        titulo: 'Física Aplicada e Sinais Vitais (5 Sentidos, P×T e Elétrica)',
        descricao: 'Como escutar, medir e cruzar pressão, temperatura, entalpia e grandezas elétricas direto no equipamento.',
        cor: '#10b981',
        aulasIds: ['m02-01', 'm02-02', 'm02-03'],
      },
      {
        id: 'man-trilha-2-circuito-eletrica',
        codigo: 'LAYER 02 · BANCADA FRIGORÍFICA & ELÉTRICA',
        titulo: 'Prática no Circuito Frigorífico, Vazamentos, Carga, Óleo e Comando',
        descricao: 'Caça-vazamentos científico, ajuste fino de carga por SH/SC, acidez de óleo POE e diagnóstico de potência/controle.',
        cor: '#0ea5e9',
        aulasIds: ['m04-01', 'm04-02', 'm04-03', 'm05-01', 'm05-02'],
      },
      {
        id: 'man-trilha-3-preventiva-sistemas',
        codigo: 'LAYER 03 · INTERVENÇÃO EM MÁQUINAS',
        titulo: 'Prática em Serpentinas, Drenagem, Inverter, VRF, Chiller e Câmaras',
        descricao: 'Descontaminação química correta de trocadores, qualidade do ar e protocolos específicos por tecnologia.',
        cor: '#f59e0b',
        aulasIds: ['m03-01', 'm03-02', 'm03-03', 'm03-04', 'm06-01', 'm06-02', 'm06-03', 'm06-04'],
      },
      {
        id: 'man-trilha-4-preditiva-pmoc',
        codigo: 'LAYER 04 · PREDITIVA, PMOC & CONTRATOS B2B',
        titulo: 'Vibração, Termografia, TCO, PMOC Legal e Contratos de Receita Recorrente',
        descricao: 'Como usar engenharia preditiva, laudos técnicos e matemática financeira (TCO 12% vs 88%) para fechar contratos anuais.',
        cor: '#8b5cf6',
        aulasIds: ['m07-01', 'm07-02', 'm07-03', 'm01-01', 'm01-02', 'm01-03', 'm08-01', 'm08-02', 'm08-03', 'apresentacao'],
      },
    ],
  },

  'tvr-pro-co-380v': {
    codigoCad: 'CAD-TVRCO-03',
    nomeCurto: 'TVR Pro CO 380V',
    corPrimaria: '#3b82f6',
    corSecundaria: '#60a5fa',
    filosofiaCurso:
      'Diante de uma condensadora VRF comercial 380V piscando alarme, o trocador de peças entra em pânico. O engenheiro de bancada abre o mapa do fluxo frigorífico, mede a malha RS-485, testa o IPM a frio no multímetro e resolve na raiz.',
    dicaPraticaInicial:
      'Comece pela Anatomia Física & Fluxo Termodinâmico (Parte 2) e vá direto para Field Settings, PCB e Troubleshooting de Códigos de Erro!',
    trilhasPraticas: [
      {
        id: 'co-trilha-1-fisica-fluxo',
        codigo: 'LAYER 01 · ANATOMIA & FÍSICA DO FLUXO',
        titulo: 'Física do Circuito VRF: Componentes, Válvulas EEV/Solenoides e Ciclo',
        descricao: 'Mapeamento físico do chassi, válvulas, sensores e caminho real do fluido e do óleo no TVR Pro CO 380V.',
        cor: '#0ea5e9',
        aulasIds: ['02-01', '02-02', '02-03', '03-01', '03-02'],
      },
      {
        id: 'co-trilha-2-pcb-setup',
        codigo: 'LAYER 02 · BANCADA ELETRÔNICA & SETUP',
        titulo: 'Prática de Configuração (DIP Switches), Main PCB, Inverter e Fiação',
        descricao: 'Endereçamento em campo, leitura de parâmetros em tempo real nos displays DSP1/DSP2, módulo IPM e RS-485.',
        cor: '#10b981',
        aulasIds: ['04-01', '05-01', '05-02', '03-03', '03-04'],
      },
      {
        id: 'co-trilha-3-troubleshooting',
        codigo: 'LAYER 03 · DIAGNÓSTICO DE FALHAS (75+ ERROS)',
        titulo: 'Troubleshooting Prático: Sensores, Pressão, IPM, RS-485 e Contaminação',
        descricao: 'Árvores de decisão rápidas para decifrar códigos de erro, testar sensores e salvar compressores.',
        cor: '#ef4444',
        aulasIds: ['06-01', '06-02', '06-03', '06-04'],
      },
      {
        id: 'co-trilha-4-arquitetura',
        codigo: 'LAYER 04 · CAPACIDADES & NOMENCLATURA',
        titulo: 'Matriz de Capacidades (8HP a 90HP) e Decodificação de Catálogo',
        descricao: 'Referência rápida de modelos, combinações modulares e leitura de etiqueta técnica.',
        cor: '#f59e0b',
        aulasIds: ['01-01', '01-02'],
      },
    ],
  },

  sistemavrf: {
    codigoCad: 'CAD-VRF-04',
    nomeCurto: 'Sistema VRF (TVR Ultra)',
    corPrimaria: '#0284c7',
    corSecundaria: '#38bdf8',
    filosofiaCurso:
      'O sistema VRF é uma orquestra termodinâmica controlada por computador. Quando você entende como o compressor Inverter conversa com as válvulas de expansão e como o óleo volta pra casa, nenhuma obra grande te assusta.',
    dicaPraticaInicial:
      'Clique direto no Coração Termodinâmico (Aulas 02 e 03) e avance para a Placa PCB, Diagramas Elétricos e Diagnóstico de Elite!',
    trilhasPraticas: [
      {
        id: 'vrf-trilha-1-fisica',
        codigo: 'LAYER 01 · FÍSICA & CORAÇÃO TERMODINÂMICO',
        titulo: 'Física do VRF: Simultaneidade, Fluxo de Refrigerante e Retorno de Óleo',
        descricao: 'Abrindo o capô do TVR Ultra: compressor Inverter, separador de óleo, válvula de 4 vias e EEVs na prática.',
        cor: '#0ea5e9',
        aulasIds: [2, 3, 1],
      },
      {
        id: 'vrf-trilha-2-cerebro-pcb',
        codigo: 'LAYER 02 · PLACA PCB & AUTOMAÇÃO NA PRÁTICA',
        titulo: 'Configurando o Cérebro Eletrônico, Proteções (P1/P4/P5) e Modos VIP',
        descricao: 'Domando a placa principal, chaves seletoras, conflito de modo (E0) e malha de controle.',
        cor: '#10b981',
        aulasIds: [4, 5, 6],
      },
      {
        id: 'vrf-trilha-3-detetive',
        codigo: 'LAYER 03 · DETETIVE DE CAMPO & MULTÍMETRO',
        titulo: 'Mapas Elétricos sem Pânico, Comunicação P-Q-E e Testes de Sensores',
        descricao: 'Rastreamento real do Erro E2, famílias de componentes no esquema elétrico e teste de termistores com multímetro.',
        cor: '#f59e0b',
        aulasIds: [7, 8],
      },
    ],
  },

  tvrpro: {
    codigoCad: 'CAD-TVRPRO-05',
    nomeCurto: 'Instalação TVR Pro Inverter',
    corPrimaria: '#2563eb',
    corSecundaria: '#60a5fa',
    filosofiaCurso:
      'Sistemas VRF não morrem de velhice; eles são assassinados na instalação por falta de nitrogênio na solda, refnet torta ou vácuo meia-boca. Este guia é a sua armadura de instalação Zero-Defeitos.',
    dicaPraticaInicial:
      'Veja a Física das Tubulações/Refnets (Aula 03) e caia direto na Brasagem com Nitrogênio, Comissionamento Master, Elétrica P-Q-E e Partida!',
    trilhasPraticas: [
      {
        id: 'tvr-trilha-1-fisica-tubo',
        codigo: 'LAYER 01 · FÍSICA DA ESCALA & TUBULAÇÃO',
        titulo: 'Física Aplicada: Simultaneidade (130%), Gravidade, Sifões e Refnets (±10°)',
        descricao: 'Por que a divisão bifásica nas juntas Y e o arraste de óleo definem a vida útil do sistema.',
        cor: '#0ea5e9',
        aulasIds: [3, 2, 1],
      },
      {
        id: 'tvr-trilha-2-brasagem-vacuo',
        codigo: 'LAYER 02 · INSTALAÇÃO MECÂNICA & COMISSIONAMENTO',
        titulo: 'Prática de Brasagem com N₂ (0.02 MPa), Estanqueidade (4.2 MPa), Vácuo e Carga',
        descricao: 'Execução cirúrgica no maçarico, degraus de pressão com compensação térmica e desidratação profunda.',
        cor: '#10b981',
        aulasIds: [4, 5],
      },
      {
        id: 'tvr-trilha-3-eletrica-startup',
        codigo: 'LAYER 03 · REDE P-Q-E, PLACA MESTRE & START-UP',
        titulo: 'Isolamento EMI (500mm), Daisy Chain, Resistor 120Ω, Aquecimento 12h e Partida',
        descricao: 'Cabeamento blindado, configuração ENC1/ENC3/S12, megômetro e checklist final das 5 Leis.',
        cor: '#f59e0b',
        aulasIds: [6, 7, 8],
      },
    ],
  },
};

/**
 * Gera uma "Tradução Prática & Filosófica de Bancada do Simon" para qualquer seção/bloco
 * técnico de uma aula, combinando pistas semânticas do título e do texto com o espírito
 * prático, bem-humorado, filosófico e sincero do Professor Simon.
 */
export function gerarNotaBancadaParaNo(tituloNo, textoPlano, indiceNo, tituloAula) {
  const t = `${tituloNo} ${textoPlano}`.toLowerCase();

  // Regras semânticas por tema técnico real encontrado nas aulas
  if (t.includes('frio') || t.includes('termodinâmica') || t.includes('entalpia') || t.includes('calor')) {
    return {
      tag: 'FÍSICA NO MANIFOLD',
      falaSimon:
        'Esquece decoreba de faculdade! Quando você encosta a mão na linha de descarga quente lá fora, você está sentindo na pele o calor que tirou da sala somado ao trabalho elétrico do compressor. Frio não entra; é o calor que pega o elevador e sai!',
      filosofia:
        'Quem enxerga o fluxo invisível de calor nunca troca peça no escuro — vai direto onde a esponja térmica parou de absorver.',
      acaoPratica: 'Meça o salto térmico (ΔT) e lembre-se: calor só viaja do mais quente pro mais frio.',
    };
  }

  if (t.includes('sobreaquecimento') || t.includes('superaquecimento') || t.includes('subarrefecimento') || t.includes('sub-resfriamento') || t.includes('sh') || t.includes('sc')) {
    return {
      tag: 'DIAGNÓSTICO DE PRECISÃO',
      falaSimon:
        'Amador olha só pro ponteiro de pressão e chuta "tá bom de gás". Profissional de elite cruza pressão convertida em temperatura de saturação com o termômetro abraçado no tubo! Superaquecimento protege o compressor de beber líquido; Sub-resfriamento garante coluna cheia antes da válvula.',
      filosofia:
        'Pressão sozinha mente conforme a temperatura da rua; Superaquecimento e Sub-resfriamento contam a verdade nua e crua da carga.',
      acaoPratica: 'Aople o termopar de contato a 15 cm da sucção, isole com elastômero e subtraia T_linha - T_saturação.',
    };
  }

  if (t.includes('cobre') || t.includes('escare') || t.includes('flange') || t.includes('torqu') || t.includes('curva')) {
    return {
      tag: 'ARTE NA BANCADA DE COBRE',
      falaSimon:
        'Quer ver se o cara é caprichoso? Olha ele cortando tubo! Se apertar o cortador tudo de uma vez, encrua o cobre e racha o flange. E escarear olhando pro teto é jogar limalha direto no coração do compressor!',
      filosofia:
        'A tubulação de cobre é a artéria coronária do sistema: trate cada flange no regime elástico com torquímetro e rosca seca.',
      acaoPratica: 'Escareie com a boca do cano a 90° para o chão, use flangeador excêntrico de embreagem e aplique Double Wrenching.',
    };
  }

  if (t.includes('brasagem') || t.includes('nitrogênio') || t.includes('oxidação') || t.includes('solda') || t.includes('scfh')) {
    return {
      tag: 'MAÇARICO & PURGA N₂',
      falaSimon:
        'Soldar cobre sem passar um fiozinho de Nitrogênio por dentro é fabricar "caspa preta" (óxido cúprico) que o óleo POE vai varrer direto pros micro-orifícios da EEV! Economia de nitrogênio na instalação é a multa mais cara da climatização.',
      filosofia:
        'O que você esconde por dentro do cano hoje é o código de erro que vai te acordar no domingo que vem.',
      acaoPratica: 'Regule o fluxômetro entre 2 e 5 SCFH (0,02 a 0,03 MPa) e mantenha a purga até o cobre esfriar.',
    };
  }

  if (t.includes('vácuo') || t.includes('vacuômetro') || t.includes('mícrons') || t.includes('microns') || t.includes('umidade') || t.includes('desidrata')) {
    return {
      tag: 'FÍSICA DA DESIDRATAÇÃO',
      falaSimon:
        'Vácuo não se mede no relógio analógico nem no relógio de pulso ("deixei 20 minutinhos")! Vácuo é baixar a pressão absoluta até a gota de água ferver a frio dentro do tubo e sair como vapor. Só quem manda aqui é o vacuômetro digital!',
      filosofia:
        'Bomba ligada faz barulho de trabalho; só o teste de estagnação com registro fechado prova que o sistema está seco e estanque.',
      acaoPratica: 'Remova os núcleos Schrader com extrator sob carga, puxe abaixo de 500 mícrons e valide na estagnação.',
    };
  }

  if (t.includes('elétric') || t.includes('tensão') || t.includes('disjuntor') || t.includes('terminal') || t.includes('rs-485') || t.includes('comunicação') || t.includes('ipm') || t.includes('pcb')) {
    return {
      tag: 'ELÉTRICA & ELETRÔNICA DE CAMPO',
      falaSimon:
        'Fio decapado enrolado no dedo e enfiado direto no borne não é ligação elétrica, é um aquecedor de efeito Joule esperando pra derreter a borneira! E passar cabo de comunicação colado em força 380V é pedir pra placa ficar biruta com ruído eletromagnético.',
      filosofia:
        'A placa inversora pensa em milissegundos e milivolts; dê a ela conexões prensadas firmes, aterramento limpo e sinal blindado.',
      acaoPratica: 'Use terminais ilhós/forquilha crimpados, separe força de dados e meça tensão DC (< 36V) antes de tocar nos capacitores.',
    };
  }

  if (t.includes('pmoc') || t.includes('tco') || t.includes('contrato') || t.includes('custo') || t.includes('cliente') || t.includes('relatório')) {
    return {
      tag: 'VISÃO DE NEGÓCIO & GESTÃO DE ATIVOS',
      falaSimon:
        'Quando você tenta vender "limpeza de filtro" pro síndico ou pro diretor financeiro, ele te trata como despesa e escolhe o mais barato. Quando você mostra que 88% do custo da máquina está na operação e na conta de luz, você vira consultor indispensável!',
      filosofia:
        'Técnico comum vende hora suada de escada; engenheiro de bancada vende disponibilidade térmica, economia de kW e blindagem jurídica.',
      acaoPratica: 'Documente cada leitura antes/depois e traduza desvios técnicos (ΔP, ΔT, corrente) em reais economizados para o cliente.',
    };
  }

  if (t.includes('erro') || t.includes('alarme') || t.includes('troubleshoot') || t.includes('sensor') || t.includes('proteção')) {
    return {
      tag: 'DETETIVE DE BANCADA',
      falaSimon:
        'Código de erro piscando no display não é sentença de morte da placa — é o grito de socorro de um sensor salvando o compressor! Antes de condenar componente caro, meça a resistência ôhmica e confira a tabela temperatura × kΩ.',
      filosofia:
        'A máquina nunca mente no código de erro, mas você precisa saber separar quando o defeito é na física do fluido ou no mensageiro (sensor).',
      acaoPratica: 'Desconecte o termistor da PCB, meça em kΩ com o multímetro e compare com a temperatura real do bulbo.',
    };
  }

  // Fallback dinâmico de bancada
  const frasesFallback = [
    {
      tag: 'BANCADA PRÁTICA DO SIMON',
      falaSimon: `Neste bloco de "${tituloNo}", o segredo é não ler como livro de história: olhe cada parâmetro pensando em qual ferramenta da sua maleta vai medir e validar isso na obra.`,
      filosofia: 'Excelência técnica não é fazer bonito só onde o cliente vê; é fazer perfeito dentro da tubulação onde só a física fiscaliza.',
      acaoPratica: 'Inspecione os números-chave destacados abaixo e confira o passo a passo operacional deste módulo.',
    },
    {
      tag: 'VISÃO SINCERA DE OFICINA',
      falaSimon: `Muita gente pula este ponto de "${tituloNo}" na correria da obra e depois perde três dias voltando pra apagar incêndio. Dez minutos de precisão aqui economizam dez horas de retrabalho!`,
      filosofia: 'O atalho na instalação é sempre o caminho mais longo até o prejuízo.',
      acaoPratica: 'Use os botões deste bloco para checar as regras de campo e os limites de tolerância.',
    },
  ];

  return frasesFallback[indiceNo % frasesFallback.length];
}
