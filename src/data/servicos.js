// Conteúdo da página de Serviços. Os textos foram movidos de pages/Servicos.jsx sem alteração.
// `icone` é o nome de um ícone da biblioteca lucide-react; a tela converte o nome em componente.
// `rotuloContato` deve ser igual a uma opção do select de pages/Contato.jsx (pré-seleção do formulário).

export const SERVICOS = [
  {
    id: 'vrf-vrv',
    rotuloContato: 'Sistemas VRF / VRV',
    codigo: 'CAD-S1',
    icone: 'Cpu',
    title: 'Sistemas VRF / VRV',
    tag: 'Alta Complexidade Corporativa',
    description:
      'Tecnologia de fluxo de refrigerante variável para edifícios comerciais, hospitais e grandes corporações. Controle individualizado de zonas térmicas com máxima eficiência energética e operação silenciosa.',
    protocolo: [
      'Dimensionamento térmico computadorizado por zona de ocupação',
      'Projeto executivo em CAD com traçado otimizado de linhas frigorígenas',
      'Soldagem oxi-acetilênica com fluxo contínuo de Nitrogênio passante (zero fuligem interna)',
      'Teste de estanqueidade pressurizado a 400+ psi por 24 horas mínimas',
      'Comissionamento eletrônico via software proprietário do fabricante',
    ],
    resultado:
      'Economia de até 38% em relação a sistemas convencionais, com redundância de compressores que impede a parada total do edifício.',
    garantia:
      'Garantia técnica de instalação e laudo de estanqueidade/vácuo documentado.',
  },
  {
    id: 'chillers',
    rotuloContato: 'Chillers Industriais',
    codigo: 'CAD-S2',
    icone: 'Snowflake',
    title: 'Chillers Industriais',
    tag: 'Grande Porte & Indústria',
    description:
      'Instalação, reforma, retrofit e manutenção preditiva de unidades resfriadoras de líquido (condensação a ar ou a água) para processos industriais, plásticos, farmacêuticos e grandes shoppings.',
    protocolo: [
      'Análise de vibração, ruído e óleo lubrificante de compressores parafuso/scroll',
      'Desincrustação química e mecânica de trocadores casco-tubo e placas brasadas',
      'Calibração de válvulas de expansão eletrônicas e sensores de fluxo (Flow Switch)',
      'Balanceamento hidrônico de bombas primárias/secundárias e torres de resfriamento',
      'Monitoramento preciso de Approach, Superaquecimento e Sub-resfriamento',
    ],
    resultado:
      'Estabilidade absoluta na temperatura de água gelada de processo e eliminação de desarmes por alta pressão no verão.',
    garantia:
      'Relatório termográfico e hidrônico completo com Anotação de Responsabilidade Técnica (ART).',
  },
  {
    id: 'camaras-frias',
    rotuloContato: 'Câmaras Frias & Refrigeração',
    codigo: 'CAD-S3',
    icone: 'Thermometer',
    title: 'Câmaras Frias',
    tag: 'Conservação & Congelamento',
    description:
      'Projetos termodinâmicos sob medida para supermercados, centros logísticos, frigoríficos e indústrias alimentícias/farmacêuticas. Controle rigoroso de temperatura e umidade com telemetria.',
    protocolo: [
      'Cálculo preciso de carga térmica (transmissão, infiltração, produto e ocupação)',
      'Montagem de painéis isotérmicos PIR/PUR com vedação sanitária de alta estanqueidade',
      'Dimensionamento de unidades condensadoras, evaporadores de força e quadros de comando',
      'Configuração de degelo inteligente (elétrico, gás quente ou natural) para máxima eficiência',
      'Sistema de alarme e monitoramento remoto de temperatura para conformidade ANVISA',
    ],
    resultado:
      'Zero perda de estoque perecível por oscilação térmica e redução drástica na formação de gelo nos evaporadores.',
    garantia:
      'Certificado de calibração térmica e conformidade com normas sanitárias vigentes.',
  },
  {
    id: 'split-inverter',
    rotuloContato: 'Sistemas Split e Inverter',
    codigo: 'CAD-S4',
    icone: 'Wind',
    title: 'Split & Multi-Split Inverter',
    tag: 'Conforto Executivo & Comercial',
    description:
      'Climatização de precisão para escritórios, clínicas, laboratórios e ambientes corporativos (Hi-Wall, Cassete 1 e 4 Vias, Piso-Teto e Duto). Instalação limpa seguindo rigorosamente os manuais de engenharia.',
    protocolo: [
      'Infraestrutura frigorígena com isolamento térmico elastomérico blindado contra UV',
      'Vácuo profundo monitorado por vacuômetro digital abaixo de 500 microns',
      'Carga adicional de fluido refrigerante pesada em balança eletrônica de precisão (em gramas)',
      'Conexões elétricas com terminais prensados, cabo PP normatizado e disjuntores dedicados',
      'Teste de drenagem hidrostática e nivelamento a laser das unidades evaporadoras',
    ],
    resultado:
      'Preservação integral da garantia oficial do fabricante e operação ultra-silenciosa sem gotejamentos ou falhas de placa.',
    garantia:
      'Checklist de comissionamento individual por equipamento entregue ao cliente.',
  },
  {
    id: 'pmoc',
    rotuloContato: 'Manutenção HVAC & PMOC',
    codigo: 'CAD-S5',
    icone: 'Settings',
    title: 'Manutenção HVAC & PMOC',
    tag: 'Conformidade Legal Lei 13.589/2018',
    description:
      'Gestão completa do Plano de Manutenção, Operação e Controle (PMOC) com emissão de ART junto ao CREA/CFT. Proteja sua empresa contra multas de até R$ 1,5 milhão da Vigilância Sanitária.',
    protocolo: [
      'Cadastramento e tagueamento individual (QR Code) de todo o parque de climatização',
      'Higienização bactericida e fungicida certificada de serpentinas, bandejas e turbinas',
      'Medição periódica de corrente elétrica, tensão, delta-T e pressões de trabalho',
      'Coleta e análise laboratorial da qualidade do ar interior (quando exigido pelo porte)',
      'Emissão mensal de relatórios digitais assinados por Engenheiro Responsável + ART anual',
    ],
    resultado:
      'Blindagem jurídica total perante fiscalizações da ANVISA/Ministério do Trabalho e queda de até 70% em chamados corretivos.',
    garantia:
      'Assunção formal de Responsabilidade Técnica (ART) perante os órgãos fiscalizadores.',
  },
  {
    id: 'emergencia',
    rotuloContato: 'Reparo de Emergência',
    codigo: 'CAD-S6',
    icone: 'Zap',
    title: 'Atendimento Expresso & Emergencial',
    tag: 'Missão Crítica & Data Centers',
    description:
      'Pronta-resposta especializada em diagnóstico avançado de falhas eletrônicas (placas Inverter), vazamentos complexos e queima de compressores em ambientes onde a climatização não pode parar.',
    protocolo: [
      'Diagnóstico eletrônico de placas inversoras, sensores NTC e válvulas EEV em bancada/campo',
      'Localização eletrônica de microvazamentos com detector digital e nitrogênio hidrogenado',
      'Substituição expressa de compressores com limpeza química da linha (R-141b / Nitrogênio)',
      'Teste de acidez do óleo e instalação de filtros secadores antiácidos na linha de sucção',
      'Relatório de causa-raiz (RCA) para evitar reincidência da queima ou parada',
    ],
    resultado:
      'Restabelecimento rápido da operação crítica sem trocas desnecessárias de peças por "tentativa e erro".',
    garantia:
      'Diagnóstico preciso na primeira visita com instrumentos digitais certificados.',
  },
];

export const PILARES = [
  {
    icone: 'Activity',
    title: 'Disponibilidade Contínua (24/7)',
    desc: 'Projetamos e mantemos sistemas térmicos para ambientes onde uma parada significa perda de produção, dados ou clientes.',
  },
  {
    icone: 'BarChart3',
    title: 'Eficiência Energética Auditável',
    desc: 'Ajuste fino de superaquecimento, sub-resfriamento e limpeza química que reduzem o consumo elétrico em até 30%.',
  },
  {
    icone: 'Award',
    title: 'Gestão de Ativos & Ciclo de Vida',
    desc: 'Estendemos a vida útil de compressores e placas Inverter em até 2x através de protocolos preventivos rigorosos.',
  },
];
