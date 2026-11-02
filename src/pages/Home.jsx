// src/pages/Home.jsx
// Painel Principal "Simon Climatização — Command Center B2B" (100dvh Zero-Scroll).
// Tema: Cristal Glacial & Prancheta do Certificado (claro, técnico e elegante).
// Interatividade: Protocolo Sekundo / AutoCAD Interativo (inspeciona a funcionalidade de cada botão e pede confirmação).

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Wrench,
  GraduationCap,
  Building2,
  AlertTriangle,
  ShieldCheck,
  Calculator,
  Scale,
  HelpCircle,
  PhoneCall,
  Award,
  ArrowRight,
  Compass,
} from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import PainSection from '../components/home/PainSection';
import OutcomeSection from '../components/home/OutcomeSection';
import RoiCalculatorSection from '../components/home/RoiCalculatorSection';
import ComparisonTableSection from '../components/home/ComparisonTableSection';
import BridgeProcessSection from '../components/home/BridgeProcessSection';
import AcademiaAuthoritySection from '../components/home/AcademiaAuthoritySection';
import FaqSection from '../components/home/FaqSection';
import ScarcityCtaSection from '../components/home/ScarcityCtaSection';
import {
  SimonActionGate,
  SimonDirectModeToggle,
  useSimonActionGate,
} from '../components/ui/SimonActionGate';
import certBg from '../assets/fundo-certificado.png';

const SETORES_HOME = [
  {
    id: 'engenharia-hero',
    codigo: 'SETOR 01',
    label: 'Engenharia B2B & Visão Geral',
    icon: Building2,
    corAtiva:
      'bg-[#0369a1] text-white border-[#1a3a5c] shadow-md shadow-sky-600/20',
    badgeAtivo: 'bg-white/20 text-white font-black',
    descricao:
      'Apresenta a engenharia térmica de precisão da Simon Climatização para edifícios corporativos, indústrias, sistemas VRF/VRV, Chillers e a autoridade docente nacional.',
    entregaveis: [
      'Visão Geral de Engenharia Térmica B2B & PMOC Digital',
      'Métricas de Atendimento Corporativo e Redução de Paradas',
      'Sub-aba: Autoridade Docente Nacional (Instrutor SENAI)',
      'Acesso Rápido ao Diagnóstico de Riscos Operacionais',
    ],
  },
  {
    id: 'diagnostico-dor',
    codigo: 'SETOR 02',
    label: 'Riscos & Falhas de Campo',
    icon: AlertTriangle,
    corAtiva:
      'bg-amber-600 text-white border-amber-800 shadow-md shadow-amber-600/20',
    badgeAtivo: 'bg-white/20 text-white font-black',
    descricao:
      'Exibe o diagnóstico técnico dos custos ocultos da climatização amadora: paradas não planejadas, queima de compressores VRF/Chiller e risco de multas da ANVISA (Lei 13.589).',
    entregaveis: [
      'Mapeamento de Riscos de Queima de Compressores',
      'Impacto Financeiro de Paradas Térmicas Críticas',
      'Passivo Jurídico por Ausência de PMOC com ART',
      'Diagnóstico de Desperdício Invisível de Energia',
    ],
  },
  {
    id: 'eficiencia-pmoc',
    codigo: 'SETOR 03',
    label: 'Eficiência Térmica & PMOC',
    icon: ShieldCheck,
    corAtiva:
      'bg-teal-700 text-white border-teal-900 shadow-md shadow-teal-600/20',
    badgeAtivo: 'bg-white/20 text-white font-black',
    descricao:
      'Demonstra como o protocolo de engenharia da Simon entrega blindagem jurídica (Lei 13.589), redução de consumo elétrico de até 30% e extensão da vida útil dos ativos.',
    entregaveis: [
      'Blindagem Legal 100% Auditável (PMOC + ART CREA/CFT)',
      'Otimização de Superaquecimento e Sub-resfriamento',
      'Qualidade do Ar Interior e Conformidade Sanitária',
      'Relatórios Instrumentados com Telemetria Digital',
    ],
  },
  {
    id: 'calculadora-roi',
    codigo: 'SETOR 04',
    label: 'Calculadora ROI & Energia',
    icon: Calculator,
    corAtiva:
      'bg-indigo-700 text-white border-indigo-900 shadow-md shadow-indigo-600/20',
    badgeAtivo: 'bg-white/20 text-white font-black',
    descricao:
      'Abre o simulador interativo de Retorno sobre Investimento (ROI): ajuste o número de equipamentos e gasto elétrico mensal para calcular sua economia anual com PMOC Simon.',
    entregaveis: [
      'Sliders Interativos de Parque Instalado e Fatura Elétrica',
      'Cálculo Instantâneo de Economia Anual Estimada (R$)',
      'Simulação de Risco de Multa Sanitária Evitada',
      'Indicador de Payback da Engenharia Preditiva',
    ],
  },
  {
    id: 'comparativo-metodo',
    codigo: 'SETOR 05',
    label: 'Método Simon vs. Mercado',
    icon: Scale,
    corAtiva:
      'bg-[#0284c7] text-white border-[#1a3a5c] shadow-md shadow-sky-600/20',
    badgeAtivo: 'bg-white/20 text-white font-black',
    descricao:
      'Compara lado a lado a manutenção corretiva tradicional versus a Engenharia Preditiva Simon Climatiza, além de detalhar nosso método de implantação em etapas.',
    entregaveis: [
      'Tabela Comparativa: Simon Climatiza vs. Mercado Comum',
      'Sub-aba: Processo de Engenharia em Etapas Auditáveis',
      'Critérios de Instrumentação Digital (Testo / Elitech)',
      'Garantia Técnica Documentada em Contrato',
    ],
  },
  {
    id: 'faq-contato',
    codigo: 'SETOR 06',
    label: 'FAQ Técnico & Diagnóstico',
    icon: HelpCircle,
    corAtiva:
      'bg-[#1a3a5c] text-white border-sky-950 shadow-md shadow-slate-900/20',
    badgeAtivo: 'bg-sky-400/25 text-sky-100 font-black',
    descricao:
      'Reúne as respostas técnicas diretas para gestores prediais/industriais e libera a bancada de solicitação de Diagnóstico Técnico e Auditoria PMOC.',
    entregaveis: [
      'Perguntas Frequentes de Engenharia, Contratos e ART',
      'Sub-aba: Manifesto de Atendimento Boutique & Agendamento',
      'Prazos de SLA e Cobertura de Atendimento Corporativo',
      'Atalho Direto para Solicitação de Vistoria Técnica',
    ],
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [setorAtivo, setSetorAtivo] = useState('engenharia-hero');

  // Sub-abas internas para evitar rolagem excessiva nos setores compostos
  const [subAbaVisaoGeral, setSubAbaVisaoGeral] = useState('b2b'); // 'b2b' | 'autoridade'
  const [subAbaMetodo, setSubAbaMetodo] = useState('comparativo'); // 'comparativo' | 'etapas'
  const [subAbaFaq, setSubAbaFaq] = useState('faq'); // 'faq' | 'agendamento'

  const {
    pendingAction,
    requestAction,
    confirmAction,
    cancelAction,
    directMode,
    setDirectMode,
  } = useSimonActionGate();

  const handleSelectSetor = (setor) => {
    requestAction({
      isAlreadyActive: setorAtivo === setor.id,
      code: setor.codigo,
      category: 'Bancada Principal · Setor Institucional B2B',
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
            onClick={() => {
              setSetorAtivo('engenharia-hero');
              setSubAbaVisaoGeral('b2b');
            }}
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
                  ENGENHARIA B2B &amp; PMOC
                </span>
              </div>
              <span className="block text-[10px] font-semibold text-slate-500 hidden sm:block">
                Engenharia Térmica de Precisão &bull; Bancada Interativa Zero-Roll-Down
              </span>
            </div>
          </button>
        </div>

        {/* Botões Rápidos de Navegação e Acesso à Academia (AutoCAD) */}
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
                code: 'NAV-SRV',
                category: 'Estação de Engenharia & Bastidores',
                title: 'Serviços B2B, Especialista & 28 Provas de Campo',
                subtitle: 'Navegação para /servicos (Zero-Roll-Down)',
                description:
                  'Abre a estação interativa de Serviços de Engenharia (VRF, Chillers, Câmaras Frias, PMOC), o perfil de 21 anos + SENAI de Simon e os 9 Stories + 28 Provas Reais do Instagram.',
                highlights: [
                  'Bancada Interativa dos 6 Serviços de Engenharia',
                  'O Especialista: 21 Anos de Campo & Instrutor SENAI',
                  '9 Destaques de Stories (TVR Ultra, Chiller, Quadros)',
                  '28 Provas Reais de Campo com Vídeos HD e Textos OCR',
                ],
                confirmLabel: 'Abrir Estação de Serviços',
                badgeColor: 'sky',
                onConfirm: () => navigate('/servicos'),
              })
            }
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 border border-sky-300 text-[#1a3a5c] text-xs font-extrabold transition-colors cursor-pointer shadow-2xs"
          >
            <Wrench className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>Serviços &amp; Acervo</span>
          </button>

          <button
            type="button"
            onClick={() =>
              requestAction({
                code: 'CAD-VIP',
                category: 'Academia Simon HVAC-R',
                title: 'Bancada AutoCAD de Treinamentos, Módulos e Aulas',
                subtitle: 'Navegação para /academia',
                description:
                  'Acessa a Academia Técnica da Simon Climatização com 3 cursos completos, árvores de módulos, simuladores de conversa de campo e emissão de certificado validado.',
                highlights: [
                  '3 Treinamentos Técnicos (HVAC-R, TVR Pro CO, PMOC)',
                  'Bancada AutoCAD F1..F6 com Árvore de Módulos e Aulas',
                  'Simuladores de Atendimento Técnico e Quiz',
                  'Emissão de Certificado Oficial com QR Code',
                ],
                confirmLabel: 'Abrir Academia Simon',
                badgeColor: 'emerald',
                onConfirm: () => navigate('/academia'),
              })
            }
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0369a1] hover:bg-[#0284c7] text-white text-xs font-black transition-all shadow-sm shadow-sky-600/20 cursor-pointer"
            title="Abrir Bancada AutoCAD de Treinamentos, Módulos e Aulas"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Academia Simon</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <Link
            to="/validar"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white hover:bg-sky-50 border border-sky-200 text-[#1a3a5c] text-xs font-bold transition-colors shadow-2xs"
          >
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span className="hidden md:inline">Certificados</span>
          </Link>

          <Link
            to="/contato"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a3a5c] hover:bg-[#0369a1] text-white text-xs font-extrabold transition-all shadow-xs"
          >
            <PhoneCall className="w-3.5 h-3.5 text-sky-300" />
            <span className="hidden sm:inline">Contato Técnico</span>
          </Link>
        </nav>
      </header>

      {/* ── 2. BARRA DE SETORES DA PÁGINA PRINCIPAL (TEMA CLARO PRANCHETA DO CERTIFICADO) ── */}
      <div className="flex-shrink-0 bg-gradient-to-r from-sky-100/75 via-sky-50/90 to-sky-100/75 border-b-2 border-sky-200 px-3 sm:px-5 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar shadow-inner">
        <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#1a3a5c] mr-1 flex-shrink-0 hidden xl:inline-flex items-center gap-1">
          <Compass className="w-3.5 h-3.5 text-[#0284c7]" />
          SETORES CAD:
        </span>

        {SETORES_HOME.map((setor) => {
          const Icon = setor.icon;
          const ativo = setorAtivo === setor.id;
          return (
            <button
              key={setor.id}
              type="button"
              onClick={() => handleSelectSetor(setor)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-extrabold transition-all cursor-pointer flex-shrink-0 ${
                ativo
                  ? setor.corAtiva
                  : 'bg-white hover:bg-sky-50 text-[#1a3a5c] border-sky-200/90 hover:border-sky-400 shadow-2xs'
              }`}
              title={`${setor.label} — Clique para inspecionar e confirmar`}
            >
              <span
                className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                  ativo
                    ? setor.badgeAtivo
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

      {/* ── 3. VIEWPORT CENTRAL DOS SETORES B2B ── */}
      <main className="flex-1 min-h-0 overflow-hidden bg-white text-slate-900 flex flex-col">
        {/* ════════════════════════════════════════════════════════════════════
            SETOR 01: ENGENHARIA B2B & VISÃO GERAL
        ════════════════════════════════════════════════════════════════════ */}
        {setorAtivo === 'engenharia-hero' && (
          <div className="h-full flex flex-col overflow-hidden">
            {/* Sub-seletor rápido em tema claro */}
            <div className="flex-shrink-0 bg-sky-50/80 border-b border-sky-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono font-black uppercase text-[#1a3a5c]">
                  FUNÇÕES DO SETOR 01:
                </span>
                <button
                  type="button"
                  onClick={() =>
                    requestAction({
                      isAlreadyActive: subAbaVisaoGeral === 'b2b',
                      code: 'S01-B2B',
                      category: 'Setor 01 · Sub-função 1',
                      title: 'Engenharia B2B & Diagnóstico Rápido',
                      description:
                        'Exibe a apresentação principal de engenharia térmica corporativa, conformidade PMOC com ART e indicadores de atendimento.',
                      highlights: [
                        'Proposta de Valor B2B & Industrial',
                        'Indicadores de Confiabilidade Térmica',
                        'Atalho para Diagnóstico Técnico',
                      ],
                      confirmLabel: 'Exibir Engenharia B2B',
                      onConfirm: () => setSubAbaVisaoGeral('b2b'),
                    })
                  }
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                    subAbaVisaoGeral === 'b2b'
                      ? 'bg-[#0369a1] text-white shadow-xs'
                      : 'bg-white text-[#1a3a5c] border border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  1. Engenharia B2B &amp; Diagnóstico Rápido
                </button>
                <button
                  type="button"
                  onClick={() =>
                    requestAction({
                      isAlreadyActive: subAbaVisaoGeral === 'autoridade',
                      code: 'S01-DOC',
                      category: 'Setor 01 · Sub-função 2',
                      title: 'Autoridade Docente Nacional (Academia Simon)',
                      description:
                        'Mostra por que a Simon Climatização é referência nacional: os mesmos especialistas que formam técnicos no SENAI e na Academia Simon auditam o seu edifício.',
                      highlights: [
                        'Credenciais de Formação Profissional HVAC-R',
                        'Domínio de VRF/VRV, Placas Inverter e Psicrometria',
                        'Acesso Direto ao Catálogo da Academia Simon',
                      ],
                      confirmLabel: 'Exibir Autoridade Docente',
                      onConfirm: () => setSubAbaVisaoGeral('autoridade'),
                    })
                  }
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                    subAbaVisaoGeral === 'autoridade'
                      ? 'bg-[#0369a1] text-white shadow-xs'
                      : 'bg-white text-[#1a3a5c] border border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  2. Autoridade Docente Nacional
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleSelectSetor(SETORES_HOME[1])}
                className="text-xs font-extrabold text-[#0369a1] hover:text-[#1a3a5c] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Próximo Setor: Riscos &amp; Falhas de Campo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto">
              {subAbaVisaoGeral === 'b2b' ? (
                <HeroSection
                  onScrollToPain={() => handleSelectSetor(SETORES_HOME[1])}
                />
              ) : (
                <AcademiaAuthoritySection />
              )}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            SETOR 02: RISCOS & FALHAS DE CAMPO
        ════════════════════════════════════════════════════════════════════ */}
        {setorAtivo === 'diagnostico-dor' && (
          <div className="h-full flex flex-col overflow-hidden">
            <div className="flex-shrink-0 bg-sky-50/80 border-b border-sky-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-extrabold text-[#1a3a5c]">
                SETOR 02 · Diagnóstico de Riscos Operacionais, Multas Sanitárias e Falhas de Campo
              </span>
              <button
                type="button"
                onClick={() => handleSelectSetor(SETORES_HOME[2])}
                className="text-xs font-extrabold text-[#0369a1] hover:text-[#1a3a5c] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Próximo Setor: Eficiência Térmica &amp; PMOC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto">
              <PainSection />
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            SETOR 03: EFICIÊNCIA TÉRMICA & PMOC
        ════════════════════════════════════════════════════════════════════ */}
        {setorAtivo === 'eficiencia-pmoc' && (
          <div className="h-full flex flex-col overflow-hidden">
            <div className="flex-shrink-0 bg-sky-50/80 border-b border-sky-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-extrabold text-[#1a3a5c]">
                SETOR 03 · Eficiência Térmica, Blindagem PMOC Digital (Lei 13.589) e Qualidade do Ar
              </span>
              <button
                type="button"
                onClick={() => handleSelectSetor(SETORES_HOME[3])}
                className="text-xs font-extrabold text-[#0369a1] hover:text-[#1a3a5c] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Próximo Setor: Calculadora ROI &amp; Energia</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto">
              <OutcomeSection />
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            SETOR 04: CALCULADORA ROI & ENERGIA
        ════════════════════════════════════════════════════════════════════ */}
        {setorAtivo === 'calculadora-roi' && (
          <div className="h-full flex flex-col overflow-hidden">
            <div className="flex-shrink-0 bg-sky-50/80 border-b border-sky-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-extrabold text-[#1a3a5c]">
                SETOR 04 · Simulador Interativo de Economia de Energia e Risco de Multa PMOC
              </span>
              <button
                type="button"
                onClick={() => handleSelectSetor(SETORES_HOME[4])}
                className="text-xs font-extrabold text-[#0369a1] hover:text-[#1a3a5c] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Próximo Setor: Método Simon vs. Mercado</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto">
              <RoiCalculatorSection />
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            SETOR 05: MÉTODO SIMON VS. MERCADO
        ════════════════════════════════════════════════════════════════════ */}
        {setorAtivo === 'comparativo-metodo' && (
          <div className="h-full flex flex-col overflow-hidden">
            <div className="flex-shrink-0 bg-sky-50/80 border-b border-sky-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono font-black uppercase text-[#1a3a5c]">
                  FUNÇÕES DO SETOR 05:
                </span>
                <button
                  type="button"
                  onClick={() =>
                    requestAction({
                      isAlreadyActive: subAbaMetodo === 'comparativo',
                      code: 'S05-CMP',
                      category: 'Setor 05 · Sub-função 1',
                      title: 'Tabela Comparativa: Simon vs. Mercado Comum',
                      description:
                        'Compara critério a critério a abordagem de engenharia preditiva da Simon contra prestadores informais de manutenção.',
                      highlights: [
                        'Diagnóstico por Instrumentação vs. "Olhômetro"',
                        'Emissão de PMOC + ART vs. Risco de Multa',
                        'Preservação de Vida Útil de Compressores',
                      ],
                      confirmLabel: 'Exibir Tabela Comparativa',
                      onConfirm: () => setSubAbaMetodo('comparativo'),
                    })
                  }
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                    subAbaMetodo === 'comparativo'
                      ? 'bg-[#0369a1] text-white shadow-xs'
                      : 'bg-white text-[#1a3a5c] border border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  1. Tabela Comparativa: Simon vs. Mercado
                </button>
                <button
                  type="button"
                  onClick={() =>
                    requestAction({
                      isAlreadyActive: subAbaMetodo === 'etapas',
                      code: 'S05-ETP',
                      category: 'Setor 05 · Sub-função 2',
                      title: 'Nosso Processo de Engenharia em Etapas',
                      description:
                        'Exibe o fluxo metodológico desde o levantamento de parque térmico até o comissionamento e entrega do PMOC digital.',
                      highlights: [
                        'Auditoria Inicial de Ativos e Carga Térmica',
                        'Execução Instrumentada com Padrão SENAI',
                        'Relatório Fotográfico e Emissão de ART',
                      ],
                      confirmLabel: 'Exibir Processo em Etapas',
                      onConfirm: () => setSubAbaMetodo('etapas'),
                    })
                  }
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                    subAbaMetodo === 'etapas'
                      ? 'bg-[#0369a1] text-white shadow-xs'
                      : 'bg-white text-[#1a3a5c] border border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  2. Nosso Processo em Etapas
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleSelectSetor(SETORES_HOME[5])}
                className="text-xs font-extrabold text-[#0369a1] hover:text-[#1a3a5c] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Próximo Setor: FAQ Técnico &amp; Diagnóstico</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto">
              {subAbaMetodo === 'comparativo' ? (
                <ComparisonTableSection />
              ) : (
                <BridgeProcessSection />
              )}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            SETOR 06: FAQ TÉCNICO & DIAGNÓSTICO
        ════════════════════════════════════════════════════════════════════ */}
        {setorAtivo === 'faq-contato' && (
          <div className="h-full flex flex-col overflow-hidden">
            <div className="flex-shrink-0 bg-sky-50/80 border-b border-sky-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono font-black uppercase text-[#1a3a5c]">
                  FUNÇÕES DO SETOR 06:
                </span>
                <button
                  type="button"
                  onClick={() =>
                    requestAction({
                      isAlreadyActive: subAbaFaq === 'faq',
                      code: 'S06-FAQ',
                      category: 'Setor 06 · Sub-função 1',
                      title: 'Perguntas Frequentes (FAQ de Engenharia)',
                      description:
                        'Responde dúvidas técnicas sobre contratos PMOC, periodicidade legal, cobertura de sistemas VRF/Chiller e garantias.',
                      highlights: [
                        'Legislação PMOC (Lei Federal 13.589/2018)',
                        'Escopo de Atendimento Preventivo e Corretivo',
                        'Emissão de ART e Responsabilidade Técnica',
                      ],
                      confirmLabel: 'Exibir FAQ Técnico',
                      onConfirm: () => setSubAbaFaq('faq'),
                    })
                  }
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                    subAbaFaq === 'faq'
                      ? 'bg-[#0369a1] text-white shadow-xs'
                      : 'bg-white text-[#1a3a5c] border border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  1. Perguntas Frequentes (FAQ de Engenharia)
                </button>
                <button
                  type="button"
                  onClick={() =>
                    requestAction({
                      isAlreadyActive: subAbaFaq === 'agendamento',
                      code: 'S06-CTA',
                      category: 'Setor 06 · Sub-função 2',
                      title: 'Agendar Diagnóstico & Laudo PMOC',
                      description:
                        'Exibe o manifesto de atendimento boutique da Simon Climatização e o acesso para agendamento de diagnóstico técnico in-loco.',
                      highlights: [
                        'Compromisso de Precisão e Carteira Seleta',
                        'Retorno Técnico em até 24h Úteis',
                        'Acesso Direto ao Formulário de Solicitação',
                      ],
                      confirmLabel: 'Exibir Agendamento Técnico',
                      onConfirm: () => setSubAbaFaq('agendamento'),
                    })
                  }
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                    subAbaFaq === 'agendamento'
                      ? 'bg-[#0369a1] text-white shadow-xs'
                      : 'bg-white text-[#1a3a5c] border border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  2. Agendar Diagnóstico &amp; Laudo PMOC
                </button>
              </div>

              <Link
                to="/academia"
                className="text-xs font-extrabold text-[#0369a1] hover:text-[#1a3a5c] inline-flex items-center gap-1"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Acessar Academia Simon (Área VIP)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto">
              {subAbaFaq === 'faq' ? <FaqSection /> : <ScarcityCtaSection />}
            </div>
          </div>
        )}
      </main>

      {/* ── 4. BARRA DE STATUS INFERIOR DA HOME (TEMA CLARO CERTIFICADO) ── */}
      <footer className="flex-shrink-0 px-3 sm:px-5 py-1.5 bg-gradient-to-r from-sky-50 via-white to-sky-50 border-t-2 border-sky-200 flex items-center justify-between text-[11px] text-slate-600">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
          <span className="font-mono font-extrabold text-[#1a3a5c]">
            SIMON CLIMATIZAÇÃO · ENGENHARIA B2B
          </span>
          <span className="hidden md:inline text-sky-300">|</span>
          <span className="hidden md:inline font-medium text-slate-600">
            PMOC Digital com ART &bull; Sistemas VRF / Chillers &bull; Bancada Interativa Zero-Roll-Down
          </span>
        </div>
        <div className="flex items-center gap-3 font-bold">
          <Link
            to="/servicos"
            className="text-[#0369a1] hover:text-[#1a3a5c] transition-colors"
          >
            Serviços &amp; Bastidores
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
          <Link
            to="/termos"
            className="text-slate-600 hover:text-[#0284c7] transition-colors hidden sm:inline"
          >
            Termos &amp; LGPD
          </Link>
        </div>
      </footer>
    </div>
  );
}
