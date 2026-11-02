// src/pages/Servicos.jsx
// Estação Interativa Zero-Roll-Down (100dvh) de Serviços de Engenharia & Bastidores Reais (@simonclimatiza)
// Tema: Cristal Glacial & Prancheta do Certificado (claro, inspirado em teste-02.png e no Certificado Simon)
// Interatividade: Protocolo Sekundo / AutoCAD Interativo (inspeciona cada botão/serviço e pede confirmação)

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Wind,
  Cpu,
  Snowflake,
  Thermometer,
  Settings,
  Zap,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Clock,
  Award,
  Activity,
  BarChart3,
  Wrench,
  GraduationCap,
  PhoneCall,
  Compass,
  Sparkles,
  Layers,
  Film,
  Home as HomeIcon,
} from 'lucide-react';
import SobreSimonSection, {
  ProvasDeCampoServico,
} from '../components/servicos/SobreSimonSection';
import {
  SimonActionGate,
  SimonDirectModeToggle,
  useSimonActionGate,
} from '../components/ui/SimonActionGate';
import certBg from '../assets/fundo-certificado.png';

const SETORES_SERVICOS = [
  {
    id: 'visao-corporativa',
    codigo: 'SRV 01',
    label: 'Engenharia Corporativa & Pilares',
    icon: ShieldCheck,
    descricao:
      'Apresenta a Engenharia de Operação Corporativa da Simon Climatização ("Infraestrutura Térmica que Nunca Para") e os 3 pilares de disponibilidade 24/7, eficiência auditável e ciclo de vida.',
    entregaveis: [
      'Visão Estratégica B2B: Infraestrutura Térmica que Nunca Para',
      'Pilar 1: Disponibilidade Contínua (24/7) para Ambientes Críticos',
      'Pilar 2: Eficiência Energética Auditável (Redução de até 30%)',
      'Pilar 3: Gestão de Ativos, PMOC Digital e Ciclo de Vida',
    ],
  },
  {
    id: 'bancada-servicos',
    codigo: 'SRV 02',
    label: 'Bancada dos 6 Serviços (AutoCAD)',
    icon: Wrench,
    descricao:
      'Abre a bancada interativa estilo AutoCAD com os 6 serviços de engenharia da Simon (VRF/VRV, Chillers, Câmaras Frias, Split Inverter, PMOC e Emergencial), incluindo protocolo técnico, garantias e fotos/vídeos reais.',
    entregaveis: [
      'Seletor CAD dos 6 Serviços de Engenharia Térmica',
      'Protocolo Técnico de 5 Etapas por Serviço',
      'Resultados Mensuráveis e Cláusulas de Garantia',
      'Provas Reais de Campo (@simonclimatiza) Vinculadas a Cada Serviço',
    ],
  },
  {
    id: 'sobre-especialista',
    codigo: 'SRV 03',
    label: 'O Especialista (21 Anos & SENAI)',
    icon: Award,
    descricao:
      'Exibe o perfil oficial de Simon Climatiza (@simonclimatiza): 21 anos de experiência em campo, atuação como Instrutor Técnico no SENAI e instrumentação digital Testo / Elitech.',
    entregaveis: [
      'Trajetória de 21 Anos de Prática Real em HVAC-R',
      'Registros de Docência Técnica e Bancadas no SENAI',
      'Instrumentação Digital de Elite (Testo 550s, Elitech, Vacuômetros)',
      'Padrão de Fábrica (Vácuo < 500 Microns e Carga por Massa)',
    ],
  },
  {
    id: 'acervo-provas',
    codigo: 'SRV 04',
    label: '28 Provas de Campo & 9 Stories',
    icon: Film,
    descricao:
      'Carrega o acervo completo extraído do Instagram @simonclimatiza com 28 provas reais de campo (vídeos MP4, fotos HD, legendas e leitura visual OCR) e os 9 Destaques de Stories guardados.',
    entregaveis: [
      'Galeria Filtrável com 28 Publicações Reais de Campo',
      'Player de Vídeos Técnicos MP4 + Leitura Visual OCR',
      'Inspecionador dos 9 Stories Guardados (TVR Ultra, Chiller, Quadros)',
      'Filtros por VRF/TVR, Chillers, Câmaras Frias, Inverter e SENAI',
    ],
  },
  {
    id: 'diagnostico-cta',
    codigo: 'SRV 05',
    label: 'Diagnóstico & Consultoria Gratuita',
    icon: PhoneCall,
    descricao:
      'Abre a bancada de solicitação de Avaliação Técnica Preliminar sem compromisso para mapear vulnerabilidades, consumo energético e adequação PMOC do seu edifício.',
    entregaveis: [
      'Solicitação de Diagnóstico Técnico In-Loco',
      'Checklist de Auditoria PMOC (Lei Federal 13.589/2018)',
      'Atendimento Direto com Engenheiro Responsável',
      'Encaminhamento Rápido para Orçamento Corporativo',
    ],
  },
];

const SERVICOS_CAD = [
  {
    id: 'vrf-vrv',
    codigo: 'CAD-S1',
    icon: Cpu,
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
    codigo: 'CAD-S2',
    icon: Snowflake,
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
    codigo: 'CAD-S3',
    icon: Thermometer,
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
    codigo: 'CAD-S4',
    icon: Wind,
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
    codigo: 'CAD-S5',
    icon: Settings,
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
    codigo: 'CAD-S6',
    icon: Zap,
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

const PILARES_OPERACAO = [
  {
    icon: Activity,
    title: 'Disponibilidade Contínua (24/7)',
    desc: 'Projetamos e mantemos sistemas térmicos para ambientes onde uma parada significa perda de produção, dados ou clientes.',
  },
  {
    icon: BarChart3,
    title: 'Eficiência Energética Auditável',
    desc: 'Ajuste fino de superaquecimento, sub-resfriamento e limpeza química que reduzem o consumo elétrico em até 30%.',
  },
  {
    icon: Award,
    title: 'Gestão de Ativos & Ciclo de Vida',
    desc: 'Estendemos a vida útil de compressores e placas Inverter em até 2x através de protocolos preventivos rigorosos.',
  },
];

export default function Servicos() {
  const navigate = useNavigate();
  const [setorAtivo, setSetorAtivo] = useState('visao-corporativa');
  const [servicoSelecionadoId, setServicoSelecionadoId] = useState('vrf-vrv');
  const [subAbaServico, setSubAbaServico] = useState('protocolo'); // 'protocolo' | 'garantia' | 'provas'

  const {
    pendingAction,
    requestAction,
    confirmAction,
    cancelAction,
    directMode,
    setDirectMode,
  } = useSimonActionGate();

  const servicoAtual =
    SERVICOS_CAD.find((s) => s.id === servicoSelecionadoId) || SERVICOS_CAD[0];

  const handleSelectSetor = (setor) => {
    requestAction({
      isAlreadyActive: setorAtivo === setor.id,
      code: setor.codigo,
      category: 'Estação de Serviços · Setor Interativo',
      title: setor.label,
      subtitle: 'Alternar Vista na Estação Zero-Roll-Down',
      description: setor.descricao,
      highlights: setor.entregaveis,
      confirmLabel: `Abrir ${setor.codigo}`,
      badgeColor: 'sky',
      meta: 'Zero-Scroll 100dvh',
      onConfirm: () => setSetorAtivo(setor.id),
    });
  };

  const handleSelectServicoCad = (srv) => {
    requestAction({
      isAlreadyActive: servicoSelecionadoId === srv.id,
      code: srv.codigo,
      category: `Bancada AutoCAD de Serviços · ${srv.tag}`,
      title: srv.title,
      subtitle: 'Carregar Especificação Técnica e Provas de Campo',
      description: srv.description,
      highlights: [
        ...srv.protocolo.slice(0, 2),
        'Impacto Operacional e Cláusula de Garantia',
        'Fotos e Vídeos Reais (@simonclimatiza) Deste Serviço',
      ],
      confirmLabel: `Carregar ${srv.title}`,
      badgeColor: 'sky',
      meta: 'Bancada SRV-02',
      onConfirm: () => {
        setServicoSelecionadoId(srv.id);
      },
    });
  };

  return (
    <div className="h-dvh w-screen overflow-hidden flex flex-col bg-gradient-to-b from-sky-50/70 via-white to-sky-50/50 text-slate-900 select-none font-sans">
      {/* Modal Sekundo / AutoCAD Interativo de Inspeção e Confirmação */}
      <SimonActionGate
        action={pendingAction}
        onConfirm={confirmAction}
        onCancel={cancelAction}
        directMode={directMode}
        onToggleDirectMode={setDirectMode}
      />

      {/* ── 1. BARRA DE TÍTULO E NAVEGAÇÃO PRINCIPAL (TEMA CRISTAL GLACIAL DO CERTIFICADO) ── */}
      <header className="relative flex-shrink-0 bg-white/95 border-b-2 border-sky-200 px-3 sm:px-5 py-2.5 flex flex-wrap items-center justify-between gap-2 z-40 shadow-2xs overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url(${certBg})` }}
        />

        <div className="relative z-10 flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={() =>
              requestAction({
                code: 'NAV-HOME',
                category: 'Navegação Principal',
                title: 'Voltar ao Command Center Inicial (Home)',
                description:
                  'Retorna à estação principal da Simon Climatização com os 6 setores institucionais e calculadora de ROI.',
                highlights: [
                  'Setores B2B, Riscos, PMOC e Calculadora ROI',
                  'Tabela Comparativa Simon vs. Mercado',
                ],
                confirmLabel: 'Ir para Início',
                onConfirm: () => navigate('/'),
              })
            }
            className="flex items-center gap-2.5 group text-left cursor-pointer"
          >
            <img
              src="/images/logo-simon.jpg"
              alt="Logo Simon Climatização"
              className="h-9 w-auto bg-white p-0.5 rounded-lg border border-sky-200 shadow-xs"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-base font-black tracking-tight text-[#1a3a5c]">
                  SIMON CLIMATIZAÇÃO
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-md text-[9px] font-mono font-extrabold uppercase bg-sky-100 text-[#0369a1] border border-sky-300">
                  ESTAÇÃO DE SERVIÇOS &amp; ACERVO
                </span>
              </div>
              <span className="block text-[10px] font-semibold text-slate-500 hidden sm:block">
                Engenharia de Operação Corporativa &bull; 21 Anos &amp; SENAI &bull; Zero-Roll-Down
              </span>
            </div>
          </button>
        </div>

        {/* Atalhos Rápidos */}
        <nav
          className="relative z-10 flex items-center gap-2 flex-wrap"
          aria-label="Atalhos do Sistema"
        >
          <SimonDirectModeToggle
            directMode={directMode}
            setDirectMode={setDirectMode}
          />

          <button
            type="button"
            onClick={() =>
              requestAction({
                code: 'NAV-HOME',
                category: 'Estação Principal',
                title: 'Painel Inicial B2B & Calculadora ROI',
                description:
                  'Abre a página inicial interativa com os 6 setores corporativos e simulador de economia de energia.',
                highlights: [
                  'Visão Geral B2B e Diagnóstico de Riscos',
                  'Simulador Interativo de Economia Elétrica e PMOC',
                ],
                confirmLabel: 'Abrir Página Inicial',
                onConfirm: () => navigate('/'),
              })
            }
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-sky-50 border border-sky-200 text-[#1a3a5c] text-xs font-extrabold transition-colors cursor-pointer shadow-2xs"
          >
            <HomeIcon className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Início B2B</span>
          </button>

          <button
            type="button"
            onClick={() =>
              requestAction({
                code: 'CAD-VIP',
                category: 'Academia Simon HVAC-R',
                title: 'Bancada AutoCAD de Treinamentos, Módulos e Aulas',
                description:
                  'Acessa a estação educacional da Simon Climatização com os 3 cursos técnicos, árvores de módulos e emissão de certificado.',
                highlights: [
                  '3 Treinamentos Técnicos Completos',
                  'Bancada AutoCAD F1..F6 com Simuladores e Quiz',
                ],
                confirmLabel: 'Abrir Academia Simon',
                badgeColor: 'emerald',
                onConfirm: () => navigate('/academia'),
              })
            }
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0369a1] hover:bg-[#0284c7] text-white text-xs font-black transition-all shadow-sm shadow-sky-600/20 cursor-pointer"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Academia Simon</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <Link
            to="/contato"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a3a5c] hover:bg-[#0369a1] text-white text-xs font-extrabold transition-all shadow-xs"
          >
            <PhoneCall className="w-3.5 h-3.5 text-sky-300" />
            <span className="hidden sm:inline">Solicitar Orçamento</span>
          </Link>
        </nav>
      </header>

      {/* ── 2. BARRA DE SETORES DE SERVIÇOS (TEMA CLARO PRANCHETA DO CERTIFICADO) ── */}
      <div className="flex-shrink-0 bg-gradient-to-r from-sky-100/75 via-sky-50/90 to-sky-100/75 border-b-2 border-sky-200 px-3 sm:px-5 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar shadow-inner">
        <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#1a3a5c] mr-1 flex-shrink-0 hidden xl:inline-flex items-center gap-1">
          <Compass className="w-3.5 h-3.5 text-[#0284c7]" />
          MÓDULOS DE SERVIÇOS:
        </span>

        {SETORES_SERVICOS.map((setor) => {
          const Icon = setor.icon;
          const ativo = setorAtivo === setor.id;
          return (
            <button
              key={setor.id}
              type="button"
              onClick={() => handleSelectSetor(setor)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-extrabold transition-all cursor-pointer flex-shrink-0 ${
                ativo
                  ? 'bg-[#0369a1] text-white border-[#1a3a5c] shadow-md shadow-sky-600/20'
                  : 'bg-white hover:bg-sky-50 text-[#1a3a5c] border-sky-200/90 hover:border-sky-400 shadow-2xs'
              }`}
              title={`${setor.label} — Clique para inspecionar e confirmar`}
            >
              <span
                className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                  ativo
                    ? 'bg-white/20 text-white font-black'
                    : 'bg-sky-100 text-[#0369a1] font-bold border border-sky-200'
                }`}
              >
                {setor.codigo}
              </span>
              <Icon className="w-3.5 h-3.5" />
              <span>{setor.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── 3. VIEWPORT CENTRAL DE SERVIÇOS (100% INTERATIVO ZERO-SCROLL) ── */}
      <main className="flex-1 min-h-0 overflow-hidden bg-white text-slate-900 flex flex-col">
        {/* ════════════════════════════════════════════════════════════════════
            SRV 01: ENGENHARIA CORPORATIVA & PILARES (VISUAL DO TESTE-02.PNG)
        ════════════════════════════════════════════════════════════════════ */}
        {setorAtivo === 'visao-corporativa' && (
          <div className="h-full flex flex-col overflow-y-auto">
            <div className="flex-1 flex flex-col justify-center py-8 sm:py-10 px-4 sm:px-8 bg-gradient-to-b from-sky-50/70 via-white to-sky-50/30 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-sky-200/30 rounded-full blur-[130px] pointer-events-none" />

              <div className="max-w-6xl mx-auto w-full relative z-10 space-y-8">
                {/* Hero Header idêntico ao que o usuário elogiou em teste-02.png */}
                <div className="text-center max-w-4xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sky-200 text-sky-700 text-xs font-extrabold tracking-widest uppercase mb-5 shadow-xs">
                    <ShieldCheck className="w-4 h-4 text-sky-500" />
                    Engenharia de Operação Corporativa
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#1a3a5c] mb-4 leading-tight">
                    Infraestrutura Térmica que{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600">
                      Nunca Para.
                    </span>
                  </h1>

                  <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
                    Não entregamos apenas manutenção corretiva. Implantamos protocolos de engenharia térmica, conformidade legal PMOC e gestão preditiva de ativos para proteger o seu balanço financeiro.
                  </p>
                </div>

                {/* 3 Pilares Estratégicos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {PILARES_OPERACAO.map((pilar, idx) => {
                    const Icon = pilar.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white border-2 border-sky-200 rounded-2xl p-5 sm:p-6 shadow-md shadow-sky-900/5 hover:border-[#0284c7] transition-all"
                      >
                        <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284c7] mb-3.5">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h2 className="text-base sm:text-lg font-extrabold text-[#1a3a5c] mb-1.5">
                          {pilar.title}
                        </h2>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {pilar.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Barra de Ação Interativa para abrir as próximas bancadas sem precisar rolar */}
                <div className="rounded-2xl bg-sky-50/90 border-2 border-sky-200 p-4 sm:p-5 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0369a1] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#0369a1] block">
                        Navegação Interativa Sekundo CAD (Zero-Roll-Down)
                      </span>
                      <p className="text-xs sm:text-sm font-extrabold text-[#1a3a5c]">
                        Selecione qual bancada técnica você deseja inspecionar e abrir agora:
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleSelectSetor(SETORES_SERVICOS[1])}
                      className="px-4 py-2.5 rounded-xl bg-[#0369a1] hover:bg-[#0284c7] text-white text-xs font-extrabold inline-flex items-center gap-2 shadow-md shadow-sky-600/20 transition-all cursor-pointer"
                    >
                      <Wrench className="w-4 h-4" />
                      <span>Abrir Bancada dos 6 Serviços</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectSetor(SETORES_SERVICOS[2])}
                      className="px-4 py-2.5 rounded-xl bg-white hover:bg-sky-100 text-[#1a3a5c] border-2 border-sky-300 text-xs font-extrabold inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Award className="w-4 h-4 text-[#0284c7]" />
                      <span>O Especialista (21 Anos &amp; SENAI)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectSetor(SETORES_SERVICOS[3])}
                      className="px-4 py-2.5 rounded-xl bg-white hover:bg-sky-100 text-[#1a3a5c] border-2 border-sky-300 text-xs font-extrabold inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Film className="w-4 h-4 text-[#0284c7]" />
                      <span>28 Provas de Campo &amp; 9 Stories</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            SRV 02: BANCADA INTERATIVA DOS 6 SERVIÇOS (ESTILO AUTOCAD SEKUNDO)
        ════════════════════════════════════════════════════════════════════ */}
        {setorAtivo === 'bancada-servicos' && (
          <div className="h-full flex flex-col overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-sky-50/30">
            {/* Sub-header da Bancada */}
            <div className="flex-shrink-0 bg-sky-50/90 border-b border-sky-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#0369a1] text-white text-[10px] font-mono font-black">
                  BANCADA CAD · SRV 02
                </span>
                <span className="text-xs font-extrabold text-[#1a3a5c]">
                  Selecione um dos 6 serviços à esquerda para inspecionar seu protocolo, garantias e provas reais de campo
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleSelectSetor(SETORES_SERVICOS[2])}
                className="text-xs font-extrabold text-[#0369a1] hover:text-[#1a3a5c] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Próximo Módulo: O Especialista (21 Anos &amp; SENAI)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Grid Principal da Bancada (Sem rolagem de página) */}
            <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
              {/* Coluna Esquerda: Seletor AutoCAD dos 6 Serviços (4 cols) */}
              <aside className="lg:col-span-4 border-b lg:border-b-0 lg:border-r-2 border-sky-200 bg-sky-50/50 p-3 sm:p-4 overflow-y-auto flex flex-col gap-2">
                <div className="text-[10px] font-mono font-black uppercase tracking-widest text-[#0369a1] px-1 mb-0.5 flex items-center justify-between">
                  <span>SELETOR DE ENGENHARIA (6 FUNÇÕES)</span>
                  <span>CLIQUE P/ CONFIRMAR</span>
                </div>

                {SERVICOS_CAD.map((srv) => {
                  const Icon = srv.icon;
                  const isSelected = servicoAtual.id === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => handleSelectServicoCad(srv)}
                      className={`w-full text-left p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3 ${
                        isSelected
                          ? 'bg-white border-[#0284c7] shadow-md shadow-sky-900/8 ring-2 ring-sky-300/50'
                          : 'bg-white/80 hover:bg-white border-sky-200/90 hover:border-sky-300'
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? 'bg-[#0369a1] text-white border-[#1a3a5c]'
                            : 'bg-sky-50 text-[#0284c7] border-sky-200'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-[10px] font-mono font-extrabold uppercase text-[#0369a1]">
                            {srv.codigo} &bull; {srv.tag}
                          </span>
                          {isSelected && (
                            <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[9px] font-mono font-black uppercase">
                              ATIVO
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm font-black text-[#1a3a5c] truncate">
                          {srv.title}
                        </h3>
                        <p className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">
                          {srv.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </aside>

              {/* Coluna Direita: Prancheta Técnica do Serviço Ativo (8 cols) */}
              <section className="lg:col-span-8 p-4 sm:p-6 overflow-y-auto flex flex-col justify-between bg-white">
                <div className="space-y-5">
                  {/* Cabeçalho do Serviço Ativo estilo Certificado */}
                  <div className="rounded-2xl bg-gradient-to-r from-sky-50 via-white to-sky-50 border-2 border-sky-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-[#0369a1] text-white flex items-center justify-center shrink-0 shadow-md">
                        {React.createElement(servicoAtual.icon, {
                          className: 'w-6 h-6',
                        })}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-md bg-sky-100 border border-sky-300 text-[#0369a1] text-[10px] font-mono font-extrabold uppercase">
                            {servicoAtual.codigo}
                          </span>
                          <span className="text-xs font-extrabold uppercase tracking-wider text-[#0284c7]">
                            {servicoAtual.tag}
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black text-[#1a3a5c]">
                          {servicoAtual.title}
                        </h2>
                      </div>
                    </div>

                    <Link
                      to="/contato"
                      className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#0369a1] hover:bg-[#0284c7] text-white font-extrabold px-4 py-2.5 rounded-xl text-xs shadow-sm transition-all"
                    >
                      <span>Solicitar Escopo Técnico</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Descrição Técnica */}
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium bg-sky-50/50 p-3.5 rounded-xl border border-sky-200/80">
                    {servicoAtual.description}
                  </p>

                  {/* Sub-abas da Prancheta do Serviço */}
                  <div className="flex flex-wrap items-center gap-2 border-b border-sky-200 pb-3">
                    <span className="text-[10px] font-mono font-black uppercase text-[#1a3a5c] mr-1">
                      INSPECIONAR CAMADA:
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        requestAction({
                          isAlreadyActive: subAbaServico === 'protocolo',
                          code: `${servicoAtual.codigo}-PRT`,
                          category: `${servicoAtual.title} · Camada 1`,
                          title: 'Protocolo Técnico & Escopo de Execução (5 Etapas)',
                          description: `Exibe as 5 diretrizes técnicas obrigatórias executadas pela Simon Climatiza em ${servicoAtual.title}.`,
                          highlights: servicoAtual.protocolo.slice(0, 4),
                          confirmLabel: 'Exibir Protocolo Técnico',
                          onConfirm: () => setSubAbaServico('protocolo'),
                        })
                      }
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                        subAbaServico === 'protocolo'
                          ? 'bg-[#0369a1] text-white border-[#1a3a5c] shadow-xs'
                          : 'bg-white text-[#1a3a5c] border-sky-200 hover:bg-sky-50'
                      }`}
                    >
                      1. Protocolo Técnico (5 Etapas)
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        requestAction({
                          isAlreadyActive: subAbaServico === 'garantia',
                          code: `${servicoAtual.codigo}-GAR`,
                          category: `${servicoAtual.title} · Camada 2`,
                          title: 'Impacto Operacional & Garantia Documentada',
                          description: `Mostra o resultado financeiro/operacional direto e a garantia formal oferecida em contrato para ${servicoAtual.title}.`,
                          highlights: [
                            servicoAtual.resultado,
                            servicoAtual.garantia,
                          ],
                          confirmLabel: 'Exibir Resultado & Garantia',
                          badgeColor: 'emerald',
                          onConfirm: () => setSubAbaServico('garantia'),
                        })
                      }
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                        subAbaServico === 'garantia'
                          ? 'bg-[#0369a1] text-white border-[#1a3a5c] shadow-xs'
                          : 'bg-white text-[#1a3a5c] border-sky-200 hover:bg-sky-50'
                      }`}
                    >
                      2. Resultado &amp; Garantia
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        requestAction({
                          isAlreadyActive: subAbaServico === 'provas',
                          code: `${servicoAtual.codigo}-PRV`,
                          category: `${servicoAtual.title} · Camada 3`,
                          title: `Provas Reais de Campo (@simonclimatiza) — ${servicoAtual.title}`,
                          description:
                            'Carrega as fotos e vídeos reais extraídos do Instagram oficial da Simon Climatização comprovando a execução deste serviço em campo.',
                          highlights: [
                            'Vídeos MP4 e Fotos HD Reais de Campo',
                            'Legendas Originais e Leitura Visual OCR',
                          ],
                          confirmLabel: 'Exibir Provas Reais de Campo',
                          badgeColor: 'amber',
                          onConfirm: () => setSubAbaServico('provas'),
                        })
                      }
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold border transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                        subAbaServico === 'provas'
                          ? 'bg-[#0369a1] text-white border-[#1a3a5c] shadow-xs'
                          : 'bg-white text-[#1a3a5c] border-sky-200 hover:bg-sky-50'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>3. Provas Reais (@simonclimatiza)</span>
                    </button>
                  </div>

                  {/* Conteúdo da Camada Selecionada */}
                  {subAbaServico === 'protocolo' && (
                    <div className="bg-sky-50/70 border-2 border-sky-200 rounded-2xl p-4 sm:p-5">
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#1a3a5c] mb-3.5 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#0284c7]" />
                        Protocolo Técnico &amp; Escopo de Execução:
                      </h3>
                      <ul className="space-y-2.5" role="list">
                        {servicoAtual.protocolo.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-slate-800 text-xs sm:text-sm font-medium bg-white p-2.5 rounded-xl border border-sky-200/80 shadow-2xs"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {subAbaServico === 'garantia' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-white border-2 border-sky-200 p-5 shadow-xs">
                        <span className="block text-[11px] font-mono font-extrabold uppercase tracking-widest text-[#0369a1] mb-2">
                          Impacto Operacional Mensurável
                        </span>
                        <p className="text-[#1a3a5c] text-sm sm:text-base font-bold leading-relaxed">
                          {servicoAtual.resultado}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-gradient-to-br from-emerald-50/80 to-white border-2 border-emerald-200 p-5 shadow-xs">
                        <span className="block text-[11px] font-mono font-extrabold uppercase tracking-widest text-emerald-800 mb-2">
                          Compromisso &amp; Garantia Formal
                        </span>
                        <p className="text-slate-800 text-sm sm:text-base font-bold leading-relaxed">
                          {servicoAtual.garantia}
                        </p>
                      </div>
                    </div>
                  )}

                  {subAbaServico === 'provas' && (
                    <div className="rounded-2xl bg-sky-50/50 border-2 border-sky-200 p-4">
                      <ProvasDeCampoServico
                        servicoRef={servicoAtual.id}
                        tituloServico={servicoAtual.title}
                      />
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            SRV 03: O ESPECIALISTA (21 ANOS DE CAMPO & INSTRUTOR SENAI)
        ════════════════════════════════════════════════════════════════════ */}
        {setorAtivo === 'sobre-especialista' && (
          <div className="h-full flex flex-col overflow-hidden">
            <div className="flex-shrink-0 bg-sky-50/90 border-b border-sky-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-extrabold text-[#1a3a5c]">
                SRV 03 · Sobre o Especialista: 21 Anos de Experiência Prática &amp; Instrutor Técnico SENAI
              </span>
              <button
                type="button"
                onClick={() => handleSelectSetor(SETORES_SERVICOS[3])}
                className="text-xs font-extrabold text-[#0369a1] hover:text-[#1a3a5c] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Próximo Módulo: 28 Provas de Campo &amp; 9 Stories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto">
              <SobreSimonSection mode="especialista" />
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            SRV 04: 28 PROVAS DE CAMPO & 9 STORIES GUARDADOS (@SIMONCLIMATIZA)
        ════════════════════════════════════════════════════════════════════ */}
        {setorAtivo === 'acervo-provas' && (
          <div className="h-full flex flex-col overflow-hidden">
            <div className="flex-shrink-0 bg-sky-50/90 border-b border-sky-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-extrabold text-[#1a3a5c]">
                SRV 04 · Acervo Oficial @simonclimatiza: 28 Trabalhos Reais (Vídeos MP4 + OCR) &amp; 9 Stories Guardados
              </span>
              <button
                type="button"
                onClick={() => handleSelectSetor(SETORES_SERVICOS[4])}
                className="text-xs font-extrabold text-[#0369a1] hover:text-[#1a3a5c] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Próximo Módulo: Diagnóstico &amp; Consultoria Gratuita</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto">
              <SobreSimonSection mode="provas" />
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            SRV 05: DIAGNÓSTICO & CONSULTORIA GRATUITA (TEMA CLARO CERTIFICADO)
        ════════════════════════════════════════════════════════════════════ */}
        {setorAtivo === 'diagnostico-cta' && (
          <div className="h-full flex flex-col justify-center overflow-y-auto p-4 sm:p-8 bg-gradient-to-b from-sky-50/80 via-white to-sky-50/60">
            <div className="max-w-4xl mx-auto w-full rounded-3xl bg-white border-2 border-[#1a3a5c]/80 p-1.5 shadow-2xl shadow-sky-900/10">
              <div className="relative rounded-2xl border border-sky-300 bg-gradient-to-br from-sky-50/90 via-white to-sky-100/50 p-6 sm:p-10 text-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.12] pointer-events-none bg-cover bg-center"
                  style={{ backgroundImage: `url(${certBg})` }}
                />

                <div className="relative z-10 space-y-5">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-[#0369a1] text-xs font-extrabold tracking-widest uppercase">
                    <Clock className="w-3.5 h-3.5 text-[#0284c7]" />
                    Diagnóstico Consultivo Gratuito
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#1a3a5c] leading-tight">
                    Não sabe exatamente qual solução seu edifício precisa?
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
                    Nossa equipe de engenharia realiza uma{' '}
                    <strong className="text-[#1a3a5c]">
                      Avaliação Técnica Preliminar
                    </strong>{' '}
                    sem compromisso para mapear vulnerabilidades, consumo energético e adequação à Lei Federal 13.589/2018 (PMOC).
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        requestAction({
                          code: 'CTA-DIAG',
                          category: 'Agendamento de Engenharia',
                          title: 'Abrir Formulário de Diagnóstico Técnico',
                          description:
                            'Direciona para a página de Contato Técnico para solicitar vistoria in-loco, orçamento de VRF/Chiller ou contrato PMOC.',
                          highlights: [
                            'Atendimento Direto com Especialista',
                            'Retorno Rápido em Horário Comercial',
                          ],
                          confirmLabel: 'Confirmar e Ir para Contato',
                          badgeColor: 'sky',
                          onConfirm: () => navigate('/contato'),
                        })
                      }
                      className="inline-flex items-center justify-center gap-3 bg-[#0369a1] hover:bg-[#0284c7] text-white font-extrabold px-8 py-4 rounded-2xl transition-all text-sm sm:text-base shadow-lg shadow-sky-600/25 cursor-pointer"
                    >
                      <span>Agendar Avaliação Técnica Preliminar</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectSetor(SETORES_SERVICOS[1])}
                      className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sky-50 text-[#1a3a5c] border-2 border-sky-300 font-extrabold px-6 py-4 rounded-2xl transition-all text-xs sm:text-sm cursor-pointer"
                    >
                      <Wrench className="w-4 h-4 text-[#0284c7]" />
                      <span>Voltar à Bancada dos 6 Serviços</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ── 4. BARRA DE STATUS INFERIOR DE SERVIÇOS (TEMA CLARO CERTIFICADO) ── */}
      <footer className="flex-shrink-0 px-3 sm:px-5 py-1.5 bg-gradient-to-r from-sky-50 via-white to-sky-50 border-t-2 border-sky-200 flex items-center justify-between text-[11px] text-slate-600">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
          <span className="font-mono font-extrabold text-[#1a3a5c]">
            SIMON CLIMATIZAÇÃO · ESTAÇÃO DE SERVIÇOS &amp; ACERVO
          </span>
          <span className="hidden md:inline text-sky-300">|</span>
          <span className="hidden md:inline font-medium text-slate-600">
            6 Serviços CAD &bull; 21 Anos &amp; SENAI &bull; 28 Provas de Campo &amp; 9 Stories (@simonclimatiza)
          </span>
        </div>
        <div className="flex items-center gap-3 font-bold">
          <Link
            to="/"
            className="text-[#0369a1] hover:text-[#1a3a5c] transition-colors"
          >
            Command Center (Início)
          </Link>
          <Link
            to="/academia"
            className="text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            Academia VIP
          </Link>
          <Link
            to="/validar"
            className="text-slate-600 hover:text-[#0284c7] transition-colors hidden sm:inline"
          >
            Validar Certificado
          </Link>
        </div>
      </footer>
    </div>
  );
}
