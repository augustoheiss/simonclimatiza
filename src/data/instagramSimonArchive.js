/**
 * Acervo Oficial Extraído do Instagram @simonclimatiza
 * Fonte única de verdade (SSOT) contendo bio real, credenciais de docência (SENAI),
 * os 9 Destaques de Stories guardados, as 21 publicações do feed + 7 publicações complementares,
 * legendas originais e transcrições visuais (OCR) das leituras de instrumentos em campo.
 */

export const SIMON_PROFILE = {
  handle: '@simonclimatiza',
  instagramUrl: 'https://www.instagram.com/simonclimatiza/',
  websiteUrl: 'https://www.simonclimatiza.com/',
  whatsappUrl: 'https://wa.me/5511942163150',
  phoneDisplay: '(11) 94216-3150',
  name: 'Simon Climatização e Refrigeração',
  category: 'Serviço de Refrigeração & Engenharia Climatizada',
  yearsExperience: 21,
  avatarUrl: '/images/instagram/perfil-simonclimatiza-hd.jpg',
  bioBullets: [
    '❄️ Especialista: Climatização de Alta Complexidade',
    '👨🏾‍🏫 Instrutor: Manutenção / Instalação (Formação Técnica & SENAI)',
    '❄️ Ar Condicionado: Chiller / VRF / VRV / PMOC',
    '🏢 21 Anos na Área Operando em Campo',
  ],
  summaryHeadline:
    '21 Anos de Engenharia em Campo & Docência Técnica em Climatização',
  summaryText:
    'Mais de duas décadas diagnosticando, instalando e recuperando sistemas críticos de climatização comercial e industrial (Chillers Trane e York, sistemas VRF/VRV Daikin, LG, Samsung, Hisense e Midea) aliados à atuação como Instrutor de Manutenção e Instalação na formação de novos profissionais.',
  authorityPillars: [
    {
      stat: '21 Anos',
      label: 'Experiência Real em Campo',
      detail: 'Atuação ininterrupta em plantas industriais, edifícios corporativos e shoppings.',
    },
    {
      stat: '436 µm',
      label: 'Vácuo Desidratante Medido',
      detail: 'Aferição digital em sonda Testo 552i (-26,4 °C de evaporação de H₂O) e carga por balança.',
    },
    {
      stat: 'Instrutor',
      label: 'Docência em Manutenção & Instalação',
      detail: 'Atuação em laboratório didático (SENAI Suíço-Brasileira) e bancadas Inverter/VRF.',
    },
    {
      stat: '100% Telemetria',
      label: 'Diagnóstico via Software',
      detail: 'LGMV, Daikin AC Monitoring Tool, supervisórios Trane/York e Elitech Inframate.',
    },
  ],
  instrumentsUsed: [
    'Vacuômetro Digital Testo 552i (436 mícrons)',
    'Manifold Digital Testo 557s (SH / SC em tempo real)',
    'Analisador de QAI e CO₂ Testo 440 (894 ppm CO₂)',
    'Detector Infravermelho Elitech Inframate™ (920 ppm)',
    'Daikin AC Monitoring Tool (VRV III / IV)',
    'LG Monitoring View (LGMV — Multi V IV)',
    'Supervisórios IHM Trane Helirotor™ & Chiller York',
    'Balança Eletrônica de Precisão Friven (Carga por Massa)',
  ],
  instructorHighlights: [
    {
      id: 'senai-01',
      title: 'Laboratório Didático SENAI Suíço-Brasileira (Santo Amaro - SP)',
      subtitle: 'Capacitação técnica presencial e boas práticas de engenharia HVAC-R',
      imageUrl: '/images/instagram/extra-01-DaF5qtFxPZB.jpg',
      badge: 'Docência SENAI',
    },
    {
      id: 'senai-02',
      title: 'Turma de Formação Profissional em Climatização no SENAI Suíço',
      subtitle: 'Troca de experiência prática de campo com novos técnicos refrigeristas',
      imageUrl: '/images/instagram/extra-03-DZP7RDlxmsw.jpg',
      badge: 'Formação Técnica',
    },
    {
      id: 'bancada-samsung',
      title: 'Bancada de Testes & Diagnóstico Computadorizado Samsung Inverter',
      subtitle: 'Análise de comunicação e parâmetros operacionais via notebook de serviço',
      imageUrl: '/images/instagram/post-02-DWT3-7tCIrj.jpg',
      badge: 'Bancada de Testes',
    },
  ],
};

/**
 * 9 Destaques de Stories Guardados (@simonclimatiza)
 * Contém capas locais, slides em alta definição, vídeos .mp4 originais e OCR completo.
 */
export const SIMON_HIGHLIGHTS = [
  {
    id: 'highlight-01',
    highlightId: '18061448905147805',
    title: 'VRV III DAIKIN',
    date: '22/08/2025',
    serviceIds: ['vrf-vrv', 'emergencia'],
    coverImage: '/images/instagram/highlight-01-vrv-iii-daikin-cover.jpg',
    slideImage: '/images/instagram/highlight-01-vrv-iii-daikin-slide-01.jpg',
    videoUrl: '/images/instagram/highlight-01-vrv-iii-daikin-slide-01.mp4',
    instrumentBadge: 'Daikin VRV III • Módulo Inverter',
    visualTextOcr:
      'Remoção das tampas para a troca do modulo | Substituição do modulo | Modulo substituído | Equipamento deixado em funcionamento sem nenhum diagnóstico ativo | TROCA DO MODULO INVERTER VRV III DAIKIN PELOS PARCERIROS E IRMÃOS!',
    technicalSummary:
      'Substituição completa de módulo Inverter de potência em condensadora Daikin VRV III, restabelecendo a operação sem códigos de falha ativos.',
  },
  {
    id: 'highlight-02',
    highlightId: '18373521167191303',
    title: 'Micro vazamento',
    date: '10/07/2025',
    serviceIds: ['chillers', 'emergencia', 'camaras-frias'],
    coverImage: '/images/instagram/highlight-02-micro-vazamento-cover.jpg',
    slideImage: '/images/instagram/highlight-02-micro-vazamento-slide-01.jpg',
    videoUrl: '/images/instagram/highlight-02-micro-vazamento-slide-01.mp4',
    instrumentBadge: 'Elitech Inframate™ • 920 ppm (PEAK 715)',
    visualTextOcr:
      'Procurando micro vazamento em chiller com ferramenta de qualidade. Micro vazamento encontrado com sucesso! A qualidade faz a diferença! | Visor Elitech Inframate: 920 (PEAK 715) em Trane Helirotor™ Compressor.',
    technicalSummary:
      'Rastreamento eletrônico por sensor infravermelho Elitech Inframate™ em compressor parafuso Trane Helirotor™, localizando microvazamento com leitura cravada em 920 ppm.',
  },
  {
    id: 'highlight-03',
    highlightId: '18312319263205600',
    title: 'Chiller York',
    date: '19/04/2025',
    serviceIds: ['chillers', 'pmoc'],
    coverImage: '/images/instagram/highlight-03-chiller-york-cover.jpg',
    slideImage: '/images/instagram/highlight-03-chiller-york-slide-01.jpg',
    videoUrl: '/images/instagram/highlight-03-chiller-york-slide-01.mp4',
    instrumentBadge: 'IHM Chiller York • Curva de Tendência',
    visualTextOcr:
      'ANALISE DE TENDÊNCIA E EFICIÊNCIA ENERGÉTICA CHILLER YORK | Gráfico de Tendência: % Corrente Nominal Motor Compressor x Tempo do Dia (Intervalo para Coleta de Dados: 300 Seg) | CHILLER YORK (11)94216-3150 simonclimatiza.com',
    technicalSummary:
      'Auditoria de eficiência energética e curva histórica de corrente percentual do motor compressor diretamente no supervisório do Chiller York (amostragem a cada 300s).',
  },
  {
    id: 'highlight-04',
    highlightId: '17998916707764732',
    title: 'Chillers',
    date: '01/04/2025',
    serviceIds: ['chillers', 'pmoc'],
    coverImage: '/images/instagram/highlight-04-chillers-cover.jpg',
    slideImage: '/images/instagram/highlight-04-chillers-slide-01.jpg',
    videoUrl: '/images/instagram/highlight-04-chillers-slide-01.mp4',
    instrumentBadge: 'Chiller Trane • Condensação a Ar',
    visualTextOcr:
      'Manutenção Preventiva em Chillers | (11)94216-3150 | simonclimatiza.com',
    technicalSummary:
      'Manutenção preventiva programada em planta de Chiller Trane de condensação a ar em cobertura industrial com linhas de água gelada isoladas em alumínio.',
  },
  {
    id: 'highlight-05',
    highlightId: '18026072578424505',
    title: 'Vácuo em VRF',
    date: '18/03/2025',
    serviceIds: ['vrf-vrv', 'split-inverter'],
    coverImage: '/images/instagram/highlight-05-vacuo-em-vrf-cover.jpg',
    slideImage: '/images/instagram/highlight-05-vacuo-em-vrf-slide-01.jpg',
    videoUrl: '/images/instagram/highlight-05-vacuo-em-vrf-slide-01.mp4',
    instrumentBadge: 'Bomba de Alto Vácuo • Linha VRF',
    visualTextOcr:
      'Vácuo em sistema VRF, porque no treino da academia não pode faltar ar condicionado',
    technicalSummary:
      'Desidratação profunda de rede frigorífica VRF em academia corporativa, eliminando umidade residual e gases não-condensáveis antes da liberação de fluido.',
  },
  {
    id: 'highlight-06',
    highlightId: '17906772767085378',
    title: 'Ar condicionado',
    date: '16/01/2025',
    serviceIds: ['pmoc', 'split-inverter'],
    coverImage: '/images/instagram/highlight-06-ar-condicionado-cover.jpg',
    slideImage: '/images/instagram/highlight-06-ar-condicionado-slide-01.jpg',
    videoUrl: '/images/instagram/highlight-06-ar-condicionado-slide-01.mp4',
    instrumentBadge: 'Testo 440 • 894 ppm CO₂ | 62,2 %rH | 21,7 °C',
    visualTextOcr:
      'SIMON Climatização e Refrigeração | Visor Testo 440: Modo de registro 894 ppm CO2, 62,2 %rH, 21,7 °C | Nossos Serviços: ✔ Limpeza e Higienização ✔ Manutenção preventiva ✔ Manutenção corretiva ✔ Atendimento de emergência',
    technicalSummary:
      'Aferição normativa de Qualidade do Ar Interior (CO₂, umidade relativa e temperatura) com termo-anemômetro/medidor de CO₂ Testo 440 combinada à higienização técnica.',
  },
  {
    id: 'highlight-07',
    highlightId: '18037939383265107',
    title: 'VRF',
    date: '14/01/2025',
    serviceIds: ['vrf-vrv'],
    coverImage: '/images/instagram/highlight-07-vrf-cover.jpg',
    slideImage: '/images/instagram/highlight-07-vrf-slide-01.jpg',
    videoUrl: '/images/instagram/highlight-07-vrf-slide-01.mp4',
    instrumentBadge: 'LG Multi V IV • Diagnóstico via Notebook',
    visualTextOcr:
      'Ar Condicionado VRF | Nossa manutenção especializada, otimiza e protege seus equipamentos de ar condicionado. ✅ Garanta ar puro e economia para seu negócio! | Agendamento rápido para empresas: (11) 94216-3150',
    technicalSummary:
      'Manutenção preventiva e leitura de parâmetros via computador portátil conectado diretamente à bateria de condensadoras LG Multi V IV em casa de máquinas.',
  },
  {
    id: 'highlight-08',
    highlightId: '18052328561992522',
    title: 'Serviços',
    date: '13/01/2025',
    serviceIds: ['pmoc', 'split-inverter', 'emergencia'],
    coverImage: '/images/instagram/highlight-08-servicos-cover.jpg',
    slideImage: '/images/instagram/highlight-08-servicos-slide-01.jpg',
    videoUrl: '/images/instagram/highlight-08-servicos-slide-01.mp4',
    instrumentBadge: 'Manifold + Alicate Amperímetro Digital',
    visualTextOcr:
      'AR CONDICIONADO #SIMONCLIMATIZA | Nossos Serviços: • Manutenção • Chiller • VRF e VRV • Residencial, comercial, industrial | CONTATO: www.simonclimatiza.com | @simonclimatiza | (11) 94216-3150',
    technicalSummary:
      'Atendimento multimarca residencial, comercial e industrial com medição simultânea de pressões manométricas e corrente elétrica sob carga.',
  },
  {
    id: 'highlight-09',
    highlightId: '18069807105749994',
    title: 'Chiller',
    date: '09/01/2025',
    serviceIds: ['chillers'],
    coverImage: '/images/instagram/highlight-09-chiller-cover.jpg',
    slideImage: '/images/instagram/highlight-09-chiller-slide-01.jpg',
    videoUrl: '/images/instagram/highlight-09-chiller-slide-01.mp4',
    instrumentBadge: 'Chiller Trane Condensação a Água • Diagnóstico',
    visualTextOcr:
      '"MANUTENÇÃO DE CHILLERS", (11) 94216-3150 | "SERVIÇOS DE QUALIDADE GARANTIDA"',
    technicalSummary:
      'Inspeção eletrônica com notebook conectado ao painel de comando de Chiller parafuso Trane de condensação a água em central de água gelada.',
  },
];

/**
 * Categorias de filtro para a Galeria de Provas de Campo em Servicos.jsx
 */
export const FIELD_CATEGORIES = [
  { id: 'todos', label: 'Todos os Registros (28)' },
  { id: 'chillers', label: 'Chillers (Trane & York)' },
  { id: 'vrf-vrv', label: 'VRF / VRV (Daikin, LG, Samsung, Hisense)' },
  { id: 'instrumentacao', label: 'Vácuo & Instrumentação Testo' },
  { id: 'pmoc-higienizacao', label: 'PMOC & Higienização Técnica' },
  { id: 'docencia-senai', label: 'Docência SENAI & Bancada' },
];

/**
 * Publicações Técnicas de Campo (@simonclimatiza)
 * Inclui as 21 postagens do feed principal + 7 registros complementares de Reels/Reposts/Marcados.
 */
export const SIMON_FIELD_POSTS = [
  {
    id: 'post-01',
    shortcode: 'DYz_yx9nd0D',
    date: '26/05/2026',
    category: 'instrumentacao',
    serviceIds: ['vrf-vrv', 'split-inverter', 'camaras-frias'],
    title: 'Vácuo de 436 Mícrons (Testo 552i) & Carga por Massa em Balança Friven',
    instrumentBadge: 'Testo 552i • 436 mícrons (-26,4 °C H₂O) + Balança 10.820 kg',
    imageUrl: '/images/instagram/post-01-DYz_yx9nd0D.jpg',
    permalink: 'https://www.instagram.com/p/DYz_yx9nd0D/',
    visualTextOcr:
      'Testo 552i · 528: Evacuação 00:08:52 | 436 micron | Temp. evaporação H2O: -26,4 °C | Delta Ar: 46,4 K | Desvio pressão baixa: 0 micron | Balança Friven: 10.820 kg (R410A) | SIMONCLIMATIZA (11) 94216-3150',
    caption:
      'Procedimento completo de evacuação desidratante aferido via aplicativo Testo Smart (436 mícrons com estanqueidade comprovada em 0 mícron de desvio) seguido de carga de fluido refrigerante R410A medida rigorosamente por massa em balança digital.',
  },
  {
    id: 'post-13',
    shortcode: 'DHbmlm8Sp4E',
    date: '20/03/2025',
    category: 'chillers',
    serviceIds: ['chillers', 'pmoc'],
    title: 'Monitoramento de Parâmetros — Shopping Diadema (Chiller 02 Trane)',
    instrumentBadge: 'IHM Trane • Água Gelada 7.1 °C (Setpoint 7.0 °C) | RLA 97.8%',
    imageUrl: '/images/instagram/post-13-DHbmlm8Sp4E.jpg',
    permalink: 'https://www.instagram.com/p/DHbmlm8Sp4E/',
    visualTextOcr:
      'SHOPPING DIADEMA - CHILLER 02 | Operando | Temp. Saída da Água Evaporador: 7.1 °C | Setpoint da Água Gelada: 7.0 °C | Entrada/Saída Evap.: 10.0 °C / 7.1 °C | Entrada/Saída Cond.: 31.6 °C / 35.9 °C | Corrente Média do Motor % RLA: 97.8% | Comando de Frequência: 34.8 Hz',
    caption:
      'Monitorando os parâmetros operacionais do Chiller 02 no Shopping Diadema: controle milimétrico de aproximação (approach), diferencial térmico de água gelada (10,0 °C → 7,1 °C) e modulação de frequência em 34,8 Hz.',
  },
  {
    id: 'post-09',
    shortcode: 'DIbtdjvRnHG',
    date: '14/04/2025',
    category: 'vrf-vrv',
    serviceIds: ['vrf-vrv', 'emergencia'],
    title: 'Telemetria Daikin VRV III via Tablet (AC Monitoring Tool)',
    instrumentBadge: 'Daikin Service Checker • Err:0 | Leitura de EV, CT1/CT2 e INV1 (rps)',
    imageUrl: '/images/instagram/post-09-DIbtdjvRnHG.jpg',
    permalink: 'https://www.instagram.com/p/DIbtdjvRnHG/',
    visualTextOcr:
      'VRV III DAIKIN | MONITORAMENTO DE PARÂMETROS | AC Monitoring Tool: Err:0 | Target evap temp, Target cond temp, OU2:R4T, R5T, R31T(M1C disch), R32T(M2C disch), Low/High pressure, CT1(A), CT2(A), INV1 comp(rps), Fan(step), EV(SC hex)',
    caption:
      'Diagnóstico computadorizado em tempo real diretamente na placa da condensadora Daikin VRV III com tablet de serviço monitorando pressões, temperaturas de descarga de compressores, correntes e abertura de válvulas de expansão eletrônica.',
  },
  {
    id: 'post-07',
    shortcode: 'DNrDg955OLa',
    date: '22/08/2025',
    category: 'vrf-vrv',
    serviceIds: ['vrf-vrv', 'emergencia'],
    title: 'Substituição de Módulo Inverter em Condensadora Daikin VRV III',
    instrumentBadge: 'Reparo Eletrônico de Potência • VRV III Daikin',
    imageUrl: '/images/instagram/post-07-DNrDg955OLa.jpg',
    permalink: 'https://www.instagram.com/p/DNrDg955OLa/',
    visualTextOcr:
      'Remoção das tampas para a troca do modulo | Substituição do modulo | Modulo substituído | Equipamento deixado em funcionamento sem nenhum diagnóstico ativo | TROCA DO MODULO INVERTER VRV III DAIKIN PELOS PARCERIROS E IRMÃOS!',
    caption:
      'Troca do módulo inverter no equipamento VRV III Daikin: desmontagem técnica, aplicação de pasta térmica e torqueamento, substituição da placa de potência e entrega do sistema operando sem nenhum alarme ativo.',
  },
  {
    id: 'post-21',
    shortcode: 'DED0LJdyskg',
    date: '26/12/2024',
    category: 'chillers',
    serviceIds: ['chillers', 'camaras-frias'],
    title: 'Controle de EXV, Approach (2.0 °C) e Sobreaquecimento em Chiller',
    instrumentBadge: 'EXV 30.8% • Approach Evap. 2.0 °C • SH Descarga 8.3 °C',
    imageUrl: '/images/instagram/post-21-DED0LJdyskg.jpg',
    permalink: 'https://www.instagram.com/p/DED0LJdyskg/',
    visualTextOcr:
      'Controle de EXV | Eixo Y Esquerdo: (30.8%) Porcentagem de posição EXV | Eixo Y Direito: (-2.10 mm) Nível de refrigerante do evaporador | (2.0 °C) Temperatura de abordagem do evaporador | (8.3 °C) Sobreaquecimento Descarga do Compressor',
    caption:
      'Monitorando o funcionamento de Chiller pelo computador: acompanhamento fino da posição da válvula de expansão eletrônica (30,8%), nível de refrigerante do evaporador (-2,10 mm), approach de 2,0 °C e superaquecimento de descarga em 8,3 °C.',
  },
  {
    id: 'post-20',
    shortcode: 'DED0d7cyZTV',
    date: '26/12/2024',
    category: 'chillers',
    serviceIds: ['chillers'],
    title: 'Intervenção Mecânica Pesada: Troca de Óleo em Chiller York',
    instrumentBadge: 'Chiller York • Manutenção Mecânica & Lubrificação',
    imageUrl: '/images/instagram/post-20-DED0d7cyZTV.jpg',
    permalink: 'https://www.instagram.com/p/DED0d7cyZTV/',
    visualTextOcr:
      'Fotografia técnica em casa de máquinas durante procedimento de drenagem e substituição de óleo lubrificante em Chiller York.',
    caption:
      'Realizando a troca de óleo do Chiller York em casa de máquinas para preservação tribológica do compressor e garantia de continuidade operacional.',
  },
  {
    id: 'post-08',
    shortcode: 'DIouVpkRKlX',
    date: '19/04/2025',
    category: 'chillers',
    serviceIds: ['chillers', 'pmoc'],
    title: 'Análise de Tendência e Eficiência Energética — Chiller York',
    instrumentBadge: 'Chiller York • Gráfico % Corrente Nominal (300s)',
    imageUrl: '/images/instagram/post-08-DIouVpkRKlX.jpg',
    permalink: 'https://www.instagram.com/p/DIouVpkRKlX/',
    visualTextOcr:
      'ANALISE DE TENDÊNCIA E EFICIÊNCIA ENERGÉTICA CHILLER YORK | % Corrente Nominal Motor Compressor x Tempo do Dia | Intervalo para Coleta de Dados: 300 Seg | CHILLER YORK (11)94216-3150 simonclimatiza.com',
    caption:
      'Levantamento de curva de tendência no painel do Chiller York para avaliação de regime de carga parcial, consumo energético do compressor e estabilidade térmica.',
  },
  {
    id: 'post-18',
    shortcode: 'DEfL8x6xNyP',
    date: '06/01/2025',
    category: 'instrumentacao',
    serviceIds: ['split-inverter', 'vrf-vrv', 'camaras-frias'],
    title: 'Aferição Termodinâmica com Manifold Digital Testo 557s (R410A)',
    instrumentBadge: 'Testo 557s • BP 115.0 psi | EV 3.6 °C | T1 4.4 °C | SH 0.8 K',
    imageUrl: '/images/instagram/post-18-DEfL8x6xNyP.jpg',
    permalink: 'https://www.instagram.com/p/DEfL8x6xNyP/',
    visualTextOcr:
      'testo 557s | Refrigeração psig | BP psi: 115.0 | AP psi: 0.0 | EV: 3.6 °C | CO: -51.5 °C | T1(420): 4.4 °C | SH: 0.8 K | SC: XXX K | R410A',
    caption:
      'Acompanhamento de pressão de sucção (115,0 psig), temperatura de evaporação (3,6 °C), temperatura de linha medida por sonda de grampo T1 (4,4 °C) e cálculo automático de superaquecimento (SH) no manifold digital Testo 557s.',
  },
  {
    id: 'extra-01',
    shortcode: 'DaF5qtFxPZB',
    date: '2026',
    category: 'docencia-senai',
    serviceIds: ['pmoc', 'split-inverter'],
    title: 'Docência & Palestra Técnica no SENAI Suíço-Brasileira (Santo Amaro - SP)',
    instrumentBadge: 'SENAI Suíço-Brasileira • Formação de Profissionais HVAC-R',
    imageUrl: '/images/instagram/extra-01-DaF5qtFxPZB.jpg',
    permalink: 'https://www.instagram.com/p/DaF5qtFxPZB/',
    visualTextOcr:
      'Simon vestindo o jaleco oficial do SENAI no laboratório de climatização do SENAI Suíço-Brasileira (Santo Amaro - SP) ao lado de Rodrigo Gomes (@rodrigootecnico / Ar da Terra) diante das bancadas didáticas.',
    caption:
      'Apresentação técnica e compartilhamento de conhecimento prático no laboratório do SENAI Suíço-Brasileira em Santo Amaro, unindo rigor acadêmico à vivência de 21 anos em campo.',
  },
  {
    id: 'extra-03',
    shortcode: 'DZP7RDlxmsw',
    date: '2026',
    category: 'docencia-senai',
    serviceIds: ['pmoc', 'split-inverter'],
    title: 'Capacitação de Técnicos Refrigeristas no Laboratório SENAI Suíço',
    instrumentBadge: 'Instrutoria Técnica • Qualidade do Ar & Higienização',
    imageUrl: '/images/instagram/extra-03-DZP7RDlxmsw.jpg',
    permalink: 'https://www.instagram.com/p/DZP7RDlxmsw/',
    visualTextOcr:
      'Encontro técnico no laboratório do SENAI Suíço em Santo Amaro com alunos e instrutores diante de bancadas de split e quadros elétricos de comando.',
    caption:
      'Momento de aprendizado, troca de experiências e valorização da capacitação profissional no SENAI Suíço, contribuindo para a formação de técnicos preparados para os padrões normativos do mercado.',
  },
  {
    id: 'post-02',
    shortcode: 'DWT3-7tCIrj',
    date: '25/03/2026',
    category: 'docencia-senai',
    serviceIds: ['split-inverter', 'vrf-vrv', 'emergencia'],
    title: 'Bancada Didática & Diagnóstico via Software em Sistema Samsung Inverter',
    instrumentBadge: 'Samsung S-Net / Service Software • Bancada de Testes',
    imageUrl: '/images/instagram/post-02-DWT3-7tCIrj.jpg',
    permalink: 'https://www.instagram.com/p/DWT3-7tCIrj/',
    visualTextOcr: 'Dia de teste! (Bancada Samsung Inverter com notebook conectado via interface serial)',
    caption:
      'Dia de teste em bancada! Leitura de protocolo de comunicação, frequências de compressor e sensores de temperatura em equipamento Samsung Inverter via computador.',
  },
  {
    id: 'extra-05',
    shortcode: 'DVXDjJ2CNmw',
    date: '2026',
    category: 'vrf-vrv',
    serviceIds: ['vrf-vrv', 'emergencia'],
    title: 'Onde Pluga e Como Navega no LGMV — Placa Principal LG VRF',
    instrumentBadge: 'LG VRF PCB EAX65629005-A • DIP Switches & LGMV',
    imageUrl: '/images/instagram/extra-05-DVXDjJ2CNmw.jpg',
    permalink: 'https://www.instagram.com/p/DVXDjJ2CNmw/',
    visualTextOcr:
      'Placa LG VRF EAX65629005-A | DIP SW01D (1..7) | Display 7 segmentos | Legenda no vídeo: "você pode fazer o test run e o demais funções"',
    caption:
      'Onde pluga? Como navega? Se você trabalha com VRF, o LGMV é seu melhor amigo — demonstração prática na placa eletrônica principal LG VRF para execução de Test Run e diagnóstico avançado do ciclo frigorífico.',
  },
  {
    id: 'extra-04',
    shortcode: 'DXJ0N35iMIi',
    date: '2026',
    category: 'vrf-vrv',
    serviceIds: ['vrf-vrv'],
    title: 'Comissionamento em Cobertura — Condensadoras VRF Samsung DVM S2',
    instrumentBadge: 'Samsung DVM S2 / WindFree • Diagnóstico ThinkPad',
    imageUrl: '/images/instagram/extra-04-DXJ0N35iMIi.jpg',
    permalink: 'https://www.instagram.com/p/DXJ0N35iMIi/',
    visualTextOcr:
      'Notebook Lenovo ThinkPad conectado em campo às condensadoras Samsung VRF / WindFree em cobertura.',
    caption:
      'Diagnóstico eletrônico em campo com notebook conectado diretamente ao barramento de comunicação de unidades condensadoras Samsung VRF.',
  },
  {
    id: 'extra-06',
    shortcode: 'DY61I_Cs2yC',
    date: '2026',
    category: 'vrf-vrv',
    serviceIds: ['vrf-vrv', 'emergencia'],
    title: 'Inspeção de Painel de Comando em Condensadora VRF Midea VC PLUS (R410A)',
    instrumentBadge: 'Midea VRF VC PLUS • R410A',
    imageUrl: '/images/instagram/extra-06-DY61I_Cs2yC.jpg',
    permalink: 'https://www.instagram.com/p/DY61I_Cs2yC/',
    visualTextOcr: 'Condensadora Midea VC PLUS R410A com compartimento de placas eletrônicas aberto em campo.',
    caption:
      'Verificação de placas inversoras, barramentos de comunicação e sensores em unidade condensadora VRF Midea VC PLUS R410A.',
  },
  {
    id: 'post-03',
    shortcode: 'DWKeqUiCAY8',
    date: '21/03/2026',
    category: 'vrf-vrv',
    serviceIds: ['vrf-vrv'],
    title: 'Frente de Condensadoras Hisense VRF em Planta Comercial (Reel)',
    instrumentBadge: 'Hisense VRF • Vídeo de Campo (.mp4)',
    imageUrl: '/images/instagram/post-03-DWKeqUiCAY8.jpg',
    videoUrl: '/images/instagram/post-03-DWKeqUiCAY8.mp4',
    permalink: 'https://www.instagram.com/p/DWKeqUiCAY8/',
    visualTextOcr: 'Hisense VRF',
    caption:
      'Sistemas de climatização comercial de alta capacidade com tecnologia Hisense VRF para edifícios corporativos.',
  },
  {
    id: 'post-04',
    shortcode: 'DVe1g8LDLYT',
    date: '04/03/2026',
    category: 'vrf-vrv',
    serviceIds: ['vrf-vrv'],
    title: 'Tecnologia Hisense HVAC — Sistemas Modulares de Grande Porte (Reel)',
    instrumentBadge: 'Hisense HVAC • Vídeo Técnico (.mp4)',
    imageUrl: '/images/instagram/post-04-DVe1g8LDLYT.jpg',
    videoUrl: '/images/instagram/post-04-DVe1g8LDLYT.mp4',
    permalink: 'https://www.instagram.com/p/DVe1g8LDLYT/',
    visualTextOcr: 'Hisense HVAC',
    caption:
      'Detalhes construtivos e arquitetura de módulos condensadores Hisense HVAC para aplicações corporativas.',
  },
  {
    id: 'post-10',
    shortcode: 'DH6CUeFRbQC',
    date: '01/04/2025',
    category: 'chillers',
    serviceIds: ['chillers', 'pmoc'],
    title: 'Manutenção Preventiva em Chiller Trane de Condensação a Ar',
    instrumentBadge: 'Chiller Trane • Rede Hidráulica Isolada em Alumínio',
    imageUrl: '/images/instagram/post-10-DH6CUeFRbQC.jpg',
    permalink: 'https://www.instagram.com/p/DH6CUeFRbQC/',
    visualTextOcr: 'Manutenção Preventiva em Chillers | (11)94216-3150 | simonclimatiza.com',
    caption:
      'Inspeção preventiva completa em Chiller Trane instalado em cobertura, garantindo troca térmica eficiente nos condensadores e integridade do circuito de água gelada.',
  },
  {
    id: 'post-05',
    shortcode: 'DPj8OVTEugy',
    date: '08/10/2025',
    category: 'chillers',
    serviceIds: ['chillers', 'pmoc'],
    title: 'Manutenção Profissional de Chillers para Prédios e Condomínios',
    instrumentBadge: 'Gestão de Centrais de Água Gelada (CAG)',
    imageUrl: '/images/instagram/post-05-DPj8OVTEugy.jpg',
    permalink: 'https://www.instagram.com/p/DPj8OVTEugy/',
    visualTextOcr:
      'SIMONCLIMATIZA | Manutenção Profissional em Ar Condicionado de Prédios e Condomínios com Sistema Chiller | Mantenha seu chiller funcionando com eficiência máxima! | (11) 94216-3150',
    caption:
      'Manutenção profissional de ar-condicionado central com sistema Chiller para edifícios comerciais e condomínios corporativos: eficiência energética, confiabilidade operacional e vida útil estendida.',
  },
  {
    id: 'post-06',
    shortcode: 'DPZ4r3ikrdI',
    date: '04/10/2025',
    category: 'vrf-vrv',
    serviceIds: ['vrf-vrv', 'pmoc'],
    title: 'Engenharia de Manutenção em Sistemas VRV e VRF Corporativos',
    instrumentBadge: 'Sistemas VRV / VRF • Eficiência & Transparência',
    imageUrl: '/images/instagram/post-06-DPZ4r3ikrdI.jpg',
    permalink: 'https://www.instagram.com/p/DPZ4r3ikrdI/',
    visualTextOcr:
      'MANUTENÇÃO EM AR CONDICIONADO DE PRÉDIOS E CONDOMÍNIOS COMERCIAIS COM SISTEMA VRV E VRF EFICIENTE | Nossos diferenciais técnicos: Qualidade e eficiência / Honestidade e transparência | WWW.SIMONCLIMATIZA.COM | (11) 94216-3150',
    caption:
      'A manutenção preventiva em sistemas VRV e VRF garante economia significativa em custos de energia, longevidade de compressores inverter e conforto contínuo em edifícios comerciais.',
  },
  {
    id: 'post-11',
    shortcode: 'DHwdzBfyrs3',
    date: '28/03/2025',
    category: 'pmoc-higienizacao',
    serviceIds: ['pmoc', 'split-inverter'],
    title: 'Higienização Profunda com Desmontagem Integral de Carenagens e Filtros',
    instrumentBadge: 'Protocolo PMOC • Desmontagem & Lavagem Técnica',
    imageUrl: '/images/instagram/post-11-DHwdzBfyrs3.jpg',
    permalink: 'https://www.instagram.com/p/DHwdzBfyrs3/',
    visualTextOcr:
      'AR CONDICIONADO - HIGIENIZAÇÃO | HIGIENIZAÇÃO DE AR CONDICIONADO - DESMONTAGEM E LIMPEZA',
    caption:
      'Desmontagem completa de carenagens, bandejas e filtros para lavagem pressurizada e descontaminação microbiológica conforme exigências do PMOC.',
  },
  {
    id: 'post-12',
    shortcode: 'DHi8rE0x_CM',
    date: '23/03/2025',
    category: 'pmoc-higienizacao',
    serviceIds: ['pmoc', 'split-inverter'],
    title: 'Antes e Depois: Descontaminação de Turbina e Rotor Tangencial',
    instrumentBadge: 'Antes 👎 / Depois 👍 • Recuperação de Vazão de Ar',
    imageUrl: '/images/instagram/post-12-DHi8rE0x_CM.jpg',
    permalink: 'https://www.instagram.com/p/DHi8rE0x_CM/',
    visualTextOcr:
      'AR CONDICIONADO - HIGIENIZAÇÃO | ANTES 👎 / DEPOIS 👍 | HIGIENIZAÇÃO DE AR CONDICIONADO - DESMONTAGEM E LIMPEZA',
    caption:
      'Comparativo real de Antes e Depois na limpeza de turbina (ventilador tangencial): a remoção de biofilme e incrustações elimina odores, devolve a vazão nominal de projeto e reduz a corrente do motor ventilador.',
  },
  {
    id: 'post-19',
    shortcode: 'DEaWvxdR61J',
    date: '04/01/2025',
    category: 'pmoc-higienizacao',
    serviceIds: ['pmoc', 'split-inverter'],
    title: 'Aplicação Química Controlada em Serpentina (Ar da Terra)',
    instrumentBadge: 'Biocida / Desincrustante Técnico • Saúde Respiratória',
    imageUrl: '/images/instagram/post-19-DEaWvxdR61J.jpg',
    permalink: 'https://www.instagram.com/p/DEaWvxdR61J/',
    visualTextOcr:
      'Limpeza e Higienização de Ar Condicionado | 11 94216-3150 | Proteja sua saúde, não deixe para depois! Agende a limpeza.',
    caption:
      'Limpeza técnica de trocador de calor com aplicação de espuma ativa homologada para eliminação de fungos, bactérias e recuperação da transferência térmica.',
  },
];

/**
 * Retorna os Stories e Publicações de Campo associados a um serviço específico de Servicos.jsx
 * @param {string} serviceId - ID do serviço ('vrf-vrv', 'chillers', 'camaras-frias', 'split-inverter', 'pmoc', 'emergencia')
 */
export function getFieldProofsByServiceId(serviceId) {
  const highlights = SIMON_HIGHLIGHTS.filter((h) =>
    h.serviceIds.includes(serviceId)
  );
  const posts = SIMON_FIELD_POSTS.filter((p) =>
    p.serviceIds.includes(serviceId)
  );
  return { highlights, posts };
}
