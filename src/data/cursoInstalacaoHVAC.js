// src/data/cursoInstalacaoHVAC.js
// ──────────────────────────────────────────────────────────────────────────────
// REGRA DE OURO: 100% FIDELIDADE ao conteúdo original da pasta /treinamento
// Cada módulo, aula, link de vídeo e apresentação foram transcritos fielmente.
// ──────────────────────────────────────────────────────────────────────────────

export const cursoInstalacaoHVAC = {
  id: "instalacao-hvac",
  titulo: "Treinamento Completo de Instalação HVAC",
  subtitulo: "Padrão Simon Climatização",
  descricao:
    "O treinamento de instalação HVAC mais completo do Brasil. Da teoria termodinâmica à execução em campo, domine cada etapa com a metodologia de elite da Simon Climatização.",

  // ──────────────────────────────────────────────────────────────────────────
  // APRESENTAÇÃO DA APOSTILA
  // ──────────────────────────────────────────────────────────────────────────
  apresentacao: {
    titulo: "APRESENTAÇÃO DA APOSTILA 01 - INSTALAÇÃO HVAC",
    subtitulo: "Padrão Simon Climatização",
    videos: [
      {
        titulo: "Apresentação da Apostila 01 - Parte 1",
        link: "https://youtu.be/pjdsyHmdCZg",
      },
      {
        titulo: "Apresentação da Apostila 01 - Parte 2",
        link: "https://youtu.be/wsChq0ahLDA",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // MÓDULOS DO TREINAMENTO
  // ──────────────────────────────────────────────────────────────────────────
  modulos: [
    // ════════════════════════════════════════════════════════════════════════
    // MÓDULO 01 - Fundamentos da Refrigeração e Termodinâmica
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 1,
      titulo: "MÓDULO 01 — Fundamentos da Refrigeração e Termodinâmica",
      descricao:
        "O alicerce teórico de toda instalação de excelência. Do ciclo de refrigeração à segurança com fluidos A2L.",
      icone: "thermometer",
      cor: "sky",
      aulas: [
        {
          id: "01-01",
          titulo: "A mecânica do ciclo de refrigeração profissional",
          modulo: "MÓDULO 01 - 01",
          videos: [
            {
              titulo:
                "A mecânica do ciclo de refrigeração profissional - MÓDULO 01 - 01",
              link: "https://youtu.be/TVXb-LQWNlg",
              tipo: "videoaula",
            },
            {
              titulo: "A Arte da Percepção - MÓDULO 01 - 01",
              link: "https://youtu.be/iBN6_9WwZqk",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-01/Module01-01-HVAC Refrigeration Cycle Masterclass.pdf",
        },
        {
          id: "01-02",
          titulo:
            "Diagnóstico técnico de sobreaquecimento e subarrefecimento",
          modulo: "MÓDULO 01 - 02",
          videos: [
            {
              titulo:
                "Diagnóstico técnico de sobreaquecimento e subarrefecimento MÓDULO 01 - 02",
              link: "https://youtu.be/t-FhNUtV7Lk",
              tipo: "videoaula",
            },
            {
              titulo: "O Segredo por Trás do Conforto - MÓDULO 01 - 02",
              link: "https://youtu.be/ozPi-Z9IitQ",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-01/Module01-02-HVAC Thermodynamics Training Guide.pdf",
        },
        {
          id: "01-03",
          titulo: "Por que a umidade destrói sistemas A2L",
          modulo: "MÓDULO 01 - 03",
          videos: [
            {
              titulo:
                "Por que a umidade destrói sistemas A2L - MÓDULO 01 - 03",
              link: "https://youtu.be/YcFZdTr6ARo",
              tipo: "videoaula",
            },
            {
              titulo: "Masterclass Fluidos A2L - MÓDULO 01 - 03",
              link: "https://youtu.be/usHZa6TiltY",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-01/Module01-03-Modern Refrigerant Handling Protocols.pdf",
        },
        {
          id: "01-04",
          titulo: "Por que 500 mcrons salvam o compressor",
          modulo: "MÓDULO 01 - 04",
          videos: [
            {
              titulo:
                "Por que 500 mcrons salvam o compressor - MÓDULO 01 - 04",
              link: "https://youtu.be/GCV_GrRBTac",
              tipo: "videoaula",
            },
            {
              titulo: "O Padrão de Elite em HVAC R - MÓDULO 01 - 04",
              link: "https://youtu.be/CSy4sDQy4Wk",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-01/Module01-04-Elite HVAC_ Digital Tools, Safety, Conduct.pdf",
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // MÓDULO 02 - Planejamento e Infraestrutura
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 2,
      titulo: "MÓDULO 02 — Planejamento e Infraestrutura",
      descricao:
        "A engenharia por trás do posicionamento perfeito. Carga térmica, drenagem e dimensionamento.",
      icone: "ruler",
      cor: "blue",
      aulas: [
        {
          id: "02-01",
          titulo: "A física invisível do ar condicionado",
          modulo: "MÓDULO 02 - 01",
          videos: [
            {
              titulo:
                "A física invisível do ar condicionado - MÓDULO 02 - 01",
              link: "https://youtu.be/IN2WxdIdtNs",
              tipo: "videoaula",
            },
            {
              titulo: "Masterclass Térmica - MÓDULO 02 - 01",
              link: "https://youtu.be/f62rtWwcdRA",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-02/Module02-01-Precision HVAC Load Sizing Masterclass.pdf",
        },
        {
          id: "02-02",
          titulo: "Engenharia de precisão nas instalações de AVAC",
          modulo: "MÓDULO 02 - 02",
          videos: [
            {
              titulo:
                "Engenharia de precisão nas instalações de AVAC - MÓDULO 02 - 02",
              link: "https://youtu.be/uMYsE3rc7bw",
              tipo: "videoaula",
            },
            {
              titulo: "Estratégias de Elite HVAC - MÓDULO 02 - 02",
              link: "https://youtu.be/AS6771THshs",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-02/Module02-02-Elite HVAC Equipment Placement Training.pdf",
        },
        {
          id: "02-03",
          titulo: "O cano barato que destrói servidores",
          modulo: "MÓDULO 02 - 03",
          videos: [
            {
              titulo:
                "O cano barato que destrói servidores - MÓDULO 02 - 03",
              link: "https://youtu.be/c_KmGKR4wbE",
              tipo: "videoaula",
            },
            {
              titulo: "Masterclass Drenagem HVAC - MÓDULO 02 - 03",
              link: "https://youtu.be/z480QxJ9BrQ",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-02/Module02-03-Elite HVAC Condensate Drainage Masterclass.pdf",
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // MÓDULO 03 - Tubulação e Brasagem
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 3,
      titulo: "MÓDULO 03 — Tubulação e Brasagem",
      descricao:
        "Domine a arte da tubulação de cobre, brasagem com nitrogênio e isolamento térmico profissional.",
      icone: "flame",
      cor: "orange",
      aulas: [
        {
          id: "03-01",
          titulo: "Como rebarbas de cobre matam compressores",
          modulo: "MÓDULO 03 - 01",
          videos: [
            {
              titulo:
                "Como rebarbas de cobre matam compressores - MÓDULO 03 - 01",
              link: "https://youtu.be/dQgd6PHp9zw",
              tipo: "videoaula",
            },
            {
              titulo: "Protocolos de Elite HVAC / R - MÓDULO 03 - 01",
              link: "https://youtu.be/ZBNRydbk27I",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-03/Module03-01-Advanced HVAC Copper Tubing Mastery.pdf",
        },
        {
          id: "03-02",
          titulo: "Solda com nitrogênio evita falhas no VRF",
          modulo: "MÓDULO 03 - 02",
          videos: [
            {
              titulo:
                "Solda com nitrognio evita falhas no VRF - MÓDULO 03 - 02",
              link: "https://youtu.be/QSG4T2pe1TQ",
              tipo: "videoaula",
            },
            {
              titulo: "Masterclass VRF: Nitrogênio - MÓDULO 03 - 02",
              link: "https://youtu.be/u_3EKCj4XNc",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-03/Module03-02-Nitrogen Brazing Masterclass for HVAC.pdf",
        },
        {
          id: "03-03",
          titulo: "Como o isolamento térmico salva o compressor",
          modulo: "MÓDULO 03 - 03",
          videos: [
            {
              titulo:
                "Como o isolamento térmico salva o compressor - MÓDULO 03 - 03",
              link: "https://youtu.be/_VAXB7KN7wc",
              tipo: "videoaula",
            },
            {
              titulo: "Blindagem Térmica HVAC - MÓDULO 03 - 03",
              link: "https://youtu.be/Q-kxqciG1XM",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-03/Module03-03-Elite HVAC Insulation Masterclass Draft.pdf",
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // MÓDULO 04 - Elétrica e Cabeamento
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 4,
      titulo: "MÓDULO 04 — Elétrica e Cabeamento",
      descricao:
        "Segurança elétrica, terminais de alta precisão e cabeamento de dados VRF/VRV.",
      icone: "zap",
      cor: "yellow",
      aulas: [
        {
          id: "04-01",
          titulo: "Como evitar a queima do VRF",
          modulo: "MÓDULO 04 - 01",
          videos: [
            {
              titulo: "Como evitar a queima do VRF - MÓDULO 04 - 01",
              link: "https://youtu.be/ncOLg-3EMpU",
              tipo: "videoaula",
            },
            {
              titulo: "O Sabotador Invisível - MÓDULO 04 - 01",
              link: "https://youtu.be/eBP3YSGMSsY",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-04/Modulo-04-01-Advanced HVAC Power Safety Grounding.pdf",
        },
        {
          id: "04-02",
          titulo: "Como erros milimétricos destroem máquinas gigantes",
          modulo: "MÓDULO 04 - 02",
          videos: [
            {
              titulo:
                "Como erros milimétricos destroem máquinas gigantes - MÓDULO 04 - 02",
              link: "https://youtu.be/2U8NkMfv_Nk",
              tipo: "videoaula",
            },
            {
              titulo: "Regra do Terminal Elétrico - MÓDULO 04 - 02",
              link: "https://youtu.be/5Vb2ETSK63k",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-04/Modulo-04-02-HVAC Wire Termination Masterclass.pdf",
        },
        {
          id: "04-03",
          titulo: "Como cabos de dados explodem compressores",
          modulo: "MÓDULO 04 - 03",
          videos: [
            {
              titulo:
                "Como cabos de dados explodem compressores - MÓDULO 04 - 03",
              link: "https://youtu.be/IwuB4gA8KCM",
              tipo: "videoaula",
            },
            {
              titulo: "Fiação de Dados VRF / VRV - MÓDULO 04 - 03",
              link: "https://youtu.be/d8if0sQCG34",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-04/Modulo-04-03-VRF_VRV Data Wiring Masterclass.pdf",
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // MÓDULO 05 - Aplicações Comerciais e Industriais
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 5,
      titulo: "MÓDULO 05 — Aplicações Comerciais e Industriais",
      descricao:
        "HVAC comercial de elite, tubulação VRF avançada, câmaras frias e o padrão Zero Leak.",
      icone: "building",
      cor: "indigo",
      aulas: [
        {
          id: "05-01",
          titulo: "Engenharia de precisão na climatização comercial",
          modulo: "MÓDULO 05 - 01",
          videos: [
            {
              titulo:
                "Engenharia de precisão na climatização comercial - MÓDULO 05 - 01",
              link: "https://youtu.be/lwRTD350DAM",
              tipo: "videoaula",
            },
            {
              titulo: "HVAC Comercial de Elite - MÓDULO 05 - 01",
              link: "https://youtu.be/Z_6xAQuAz9k",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-05/Modulo-05-01-Elite Commercial HVAC Installation Training.pdf",
        },
        {
          id: "05-02",
          titulo: "Por que 15 graus destroem o VRF",
          modulo: "MÓDULO 05 - 02",
          videos: [
            {
              titulo:
                "Por que 15 graus destroem o VRF - MÓDULO 05 - 02",
              link: "https://youtu.be/N0LsVV054og",
              tipo: "videoaula",
            },
            {
              titulo: "A Física da Tubulação - MÓDULO 05 - 02",
              link: "https://youtu.be/IXPgTIE0Dvc",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-05/Modulo-05-02-VRF Piping Masterclass_ Fluid Dynamics.pdf",
        },
        {
          id: "05-03",
          titulo: "A física das câmaras frias industriais",
          modulo: "MÓDULO 05 - 03",
          videos: [
            {
              titulo:
                "A física das câmaras frias industriais - MÓDULO 05 - 03",
              link: "https://youtu.be/yx9l7J4fnAo",
              tipo: "videoaula",
            },
            {
              titulo: "Falha e Perfeição Térmica - MÓDULO 05 - 03",
              link: "https://youtu.be/MvVJBudEOcg",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-05/Modulo-05-03-Cold Room Engineering and Refrigeration Standards.pdf",
        },
        {
          id: "05-04",
          titulo: "Como atingir o padrão Zero Leak",
          modulo: "MÓDULO 05 - 04",
          videos: [
            {
              titulo:
                "Como atingir o padrão Zero Leak - MÓDULO 05 - 04",
              link: "https://youtu.be/FmL_bZWTz30",
              tipo: "videoaula",
            },
            {
              titulo: "O Padrão Vazamento Zero - MÓDULO 05 - 04",
              link: "https://youtu.be/Pw0anv8rJ4k",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-05/Modulo-05-04-Nitrogen Leak Testing_ Zero-Leak Standard.pdf",
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // MÓDULO 06 - Vácuo e Desidratação
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 6,
      titulo: "MÓDULO 06 — Vácuo e Desidratação",
      descricao:
        "Evacuação de alto desempenho e a ciência por trás do vácuo profundo.",
      icone: "gauge",
      cor: "teal",
      aulas: [
        {
          id: "06-01",
          titulo: "Bomba de vácuo HVAC não suga água",
          modulo: "MÓDULO 06 - 01",
          videos: [
            {
              titulo:
                "Bomba de vácuo HVAC no suga água - MODULO 06 - 01",
              link: "https://youtu.be/DN9T4eGBdEQ",
              tipo: "videoaula",
            },
            {
              titulo: "Evacuação de Alto Desempenho - MÓDULO 06 - 01",
              link: "https://youtu.be/nQrrEyFHsoQ",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-06/Modulo-06-02-Elite HVAC Vacuum Mastery Masterclass.pdf",
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // MÓDULO 07 - Comissionamento e Handover Digital
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 7,
      titulo: "MÓDULO 07 — Comissionamento e Handover Digital",
      descricao:
        "O fim do achismo. Carga de refrigerante, startup profissional e telemetria digital.",
      icone: "rocket",
      cor: "emerald",
      aulas: [
        {
          id: "07-01",
          titulo: "O fim do achismo no comissionamento VRF",
          modulo: "MÓDULO 07 - 01",
          videos: [
            {
              titulo:
                "O fim do achismo no comissionamento VRF - MÓDULO 07 - 01",
              link: "https://youtu.be/iHrgHOs3NDo",
              tipo: "videoaula",
            },
            {
              titulo: "Comissionamento de Elite - MÓDULO 07 - 01",
              link: "https://youtu.be/I-23XCEq--w",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-07/Modulo-07-01-Elite Refrigerant Charging and Startup Protocols.pdf",
        },
        {
          id: "07-02",
          titulo: "Telemetria digital blinda contratos de manutenção",
          modulo: "MÓDULO 07 - 02",
          videos: [
            {
              titulo:
                "Telemetria digital blinda contratos de manutenção - MÓDULO 07 - 02",
              link: "https://youtu.be/SBstN6pmD2Y",
              tipo: "videoaula",
            },
            {
              titulo: "HVAC  O Handover Digital - MÓDULO 07 - 02",
              link: "https://youtu.be/2IpTJxTCXNQ",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-07/Modulo-07-02-Elite HVAC Digital Handover Masterclass.pdf",
        },
      ],
    },
  ],
};
