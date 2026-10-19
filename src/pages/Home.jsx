// src/pages/Home.jsx
// Painel Principal "Simon Climatização — Command Center B2B" (100dvh Zero-Scroll).
// Dividido entre os 6 setores institucionais e de engenharia em abas/tabelinhas interativas:
// 1. Engenharia B2B & Visão Geral
// 2. Riscos & Falhas de Campo
// 3. Eficiência Térmica & PMOC
// 4. Calculadora ROI & Energia
// 5. Método Simon vs. Mercado
// 6. FAQ Técnico & Diagnóstico
// Ao clicar em "Academia Simon", abre a estação estilo AutoCAD de Treinamentos, Módulos e Aulas (protegida por SIMON-VIP).

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Layers,
  CheckCircle2,
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

const SETORES_HOME = [
  {
    id: 'engenharia-hero',
    codigo: 'SETOR 01',
    label: 'Engenharia B2B & Visão Geral',
    icon: Building2,
    cor: 'bg-sky-500 text-slate-950 border-sky-400',
    descricao: 'Soluções corporativas de climatização, PMOC com ART, VRF e Chillers.',
  },
  {
    id: 'diagnostico-dor',
    codigo: 'SETOR 02',
    label: 'Riscos & Falhas de Campo',
    icon: AlertTriangle,
    cor: 'bg-amber-400 text-slate-950 border-amber-300',
    descricao: 'O custo oculto da climatização amadora e paradas não planejadas.',
  },
  {
    id: 'eficiencia-pmoc',
    codigo: 'SETOR 03',
    label: 'Eficiência Térmica & PMOC',
    icon: ShieldCheck,
    cor: 'bg-teal-400 text-slate-950 border-teal-300',
    descricao: 'Blindagem jurídica (Lei 13.589), economia energética e confiabilidade.',
  },
  {
    id: 'calculadora-roi',
    codigo: 'SETOR 04',
    label: 'Calculadora ROI & Energia',
    icon: Calculator,
    cor: 'bg-indigo-400 text-slate-950 border-indigo-300',
    descricao: 'Simulador interativo de economia elétrica e conformidade PMOC.',
  },
  {
    id: 'comparativo-metodo',
    codigo: 'SETOR 05',
    label: 'Método Simon vs. Mercado',
    icon: Scale,
    cor: 'bg-cyan-400 text-slate-950 border-cyan-300',
    descricao: 'Comparativo técnico lado a lado e nosso processo cirúrgico em 3 etapas.',
  },
  {
    id: 'faq-contato',
    codigo: 'SETOR 06',
    label: 'FAQ Técnico & Diagnóstico',
    icon: HelpCircle,
    cor: 'bg-violet-400 text-slate-950 border-violet-300',
    descricao: 'Respostas diretas às dúvidas de engenharia e agendamento técnico.',
  },
];

export default function Home() {
  // Inicia diretamente em "Engenharia B2B & Visão Geral"
  const [setorAtivo, setSetorAtivo] = useState('engenharia-hero');

  // Sub-abas internas para evitar rolagem excessiva nos setores compostos
  const [subAbaVisaoGeral, setSubAbaVisaoGeral] = useState('b2b'); // 'b2b' | 'autoridade'
  const [subAbaMetodo, setSubAbaMetodo] = useState('comparativo'); // 'comparativo' | 'etapas'
  const [subAbaFaq, setSubAbaFaq] = useState('faq'); // 'faq' | 'agendamento'

  return (
    <div className="h-dvh w-screen overflow-hidden flex flex-col bg-slate-950 text-slate-100 select-none font-sans">
      {/* ── 1. BARRA DE TÍTULO E NAVEGAÇÃO PRINCIPAL ── */}
      <header className="flex-shrink-0 bg-slate-900 border-b border-slate-800 px-3 sm:px-5 py-2.5 flex flex-wrap items-center justify-between gap-2 z-40">
        <div className="flex items-center gap-3 min-w-0">
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
              className="h-8 w-auto bg-white p-0.5 rounded shadow-sm"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-black tracking-tight text-white">
                  SIMON CLIMATIZAÇÃO
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-mono font-black uppercase bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  ENGENHARIA B2B &amp; PMOC
                </span>
              </div>
              <span className="block text-[10px] text-slate-400 hidden sm:block">
                Engenharia Térmica de Precisão &bull; Navegação Interativa por Setores
              </span>
            </div>
          </button>
        </div>

        {/* Botões Rápidos de Navegação e Acesso à Academia (AutoCAD) */}
        <nav className="flex items-center gap-2 flex-wrap" aria-label="Atalhos do Sistema">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold transition-colors"
          >
            <Wrench className="w-3.5 h-3.5 text-sky-400" />
            <span>Serviços B2B</span>
          </Link>

          <Link
            to="/academia"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition-all shadow-md shadow-emerald-500/20"
            title="Abrir Bancada AutoCAD de Treinamentos, Módulos e Aulas (Requer senha SIMON-VIP)"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Academia Simon</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            to="/certificados"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold transition-colors"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">Certificados</span>
          </Link>

          <Link
            to="/contato"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-black transition-all shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Contato Técnico</span>
          </Link>
        </nav>
      </header>

      {/* ── 2. BARRA DE TABELINHAS / SETORES DA PÁGINA PRINCIPAL (SEM PRECISAR ROLAR A PÁGINA) ── */}
      <div className="flex-shrink-0 bg-slate-950 border-b border-slate-800 px-3 sm:px-5 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-500 mr-1 flex-shrink-0 hidden xl:inline">
          SETORES:
        </span>

        {SETORES_HOME.map((setor) => {
          const Icon = setor.icon;
          const ativo = setorAtivo === setor.id;
          return (
            <button
              key={setor.id}
              type="button"
              onClick={() => setSetorAtivo(setor.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-extrabold transition-all cursor-pointer flex-shrink-0 ${
                ativo
                  ? `${setor.cor} shadow-md`
                  : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border-slate-800'
              }`}
              title={setor.descricao}
            >
              <span
                className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                  ativo ? 'bg-black/20 text-current font-black' : 'bg-slate-950 text-slate-400'
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
            {/* Sub-seletor rápido para alternar sem precisar rolar muito */}
            <div className="flex-shrink-0 bg-slate-100 border-b border-slate-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-black uppercase text-slate-500">
                  EXIBIÇÃO DO SETOR 01:
                </span>
                <button
                  type="button"
                  onClick={() => setSubAbaVisaoGeral('b2b')}
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                    subAbaVisaoGeral === 'b2b'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  1. Engenharia B2B &amp; Diagnóstico Rápido
                </button>
                <button
                  type="button"
                  onClick={() => setSubAbaVisaoGeral('autoridade')}
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                    subAbaVisaoGeral === 'autoridade'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  2. Autoridade Docente Nacional
                </button>
              </div>

              <button
                type="button"
                onClick={() => setSetorAtivo('diagnostico-dor')}
                className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Próximo Setor: Riscos &amp; Falhas de Campo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto">
              {subAbaVisaoGeral === 'b2b' ? (
                <HeroSection onScrollToPain={() => setSetorAtivo('diagnostico-dor')} />
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
            <div className="flex-shrink-0 bg-slate-100 border-b border-slate-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-extrabold text-slate-700">
                SETOR 02 · Diagnóstico de Riscos Operacionais, Multas Sanitárias e Falhas de Campo
              </span>
              <button
                type="button"
                onClick={() => setSetorAtivo('eficiencia-pmoc')}
                className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1 cursor-pointer"
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
            <div className="flex-shrink-0 bg-slate-100 border-b border-slate-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-extrabold text-slate-700">
                SETOR 03 · Eficiência Térmica, Blindagem PMOC Digital (Lei 13.589) e Qualidade do Ar
              </span>
              <button
                type="button"
                onClick={() => setSetorAtivo('calculadora-roi')}
                className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1 cursor-pointer"
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
            <div className="flex-shrink-0 bg-slate-100 border-b border-slate-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-extrabold text-slate-700">
                SETOR 04 · Simulador Interativo de Economia de Energia e Risco de Multa PMOC
              </span>
              <button
                type="button"
                onClick={() => setSetorAtivo('comparativo-metodo')}
                className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1 cursor-pointer"
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
            <div className="flex-shrink-0 bg-slate-100 border-b border-slate-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-black uppercase text-slate-500">
                  EXIBIÇÃO DO SETOR 05:
                </span>
                <button
                  type="button"
                  onClick={() => setSubAbaMetodo('comparativo')}
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                    subAbaMetodo === 'comparativo'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  1. Tabela Comparativa: Simon vs. Mercado
                </button>
                <button
                  type="button"
                  onClick={() => setSubAbaMetodo('etapas')}
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                    subAbaMetodo === 'etapas'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  2. Nosso Processo em 4 Etapas
                </button>
              </div>

              <button
                type="button"
                onClick={() => setSetorAtivo('faq-contato')}
                className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1 cursor-pointer"
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
            <div className="flex-shrink-0 bg-slate-100 border-b border-slate-200 px-4 py-2 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-black uppercase text-slate-500">
                  EXIBIÇÃO DO SETOR 06:
                </span>
                <button
                  type="button"
                  onClick={() => setSubAbaFaq('faq')}
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                    subAbaFaq === 'faq'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  1. Perguntas Frequentes (FAQ de Engenharia)
                </button>
                <button
                  type="button"
                  onClick={() => setSubAbaFaq('agendamento')}
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                    subAbaFaq === 'agendamento'
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  2. Agendar Diagnóstico &amp; Laudo PMOC
                </button>
              </div>

              <Link
                to="/academia"
                className="text-xs font-extrabold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
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

      {/* ── 4. BARRA DE STATUS INFERIOR DA HOME ── */}
      <footer className="flex-shrink-0 px-3 sm:px-5 py-1.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="font-mono font-bold text-sky-400">
            SIMON CLIMATIZAÇÃO · ENGENHARIA B2B
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline">
            PMOC Digital com ART &bull; Sistemas VRF / Chillers &bull; Navegação em Abas Sem Rolagem
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/academia" className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors">
            Academia VIP
          </Link>
          <Link to="/validar" className="hover:text-sky-400 transition-colors">
            Validar Certificado
          </Link>
          <Link to="/termos" className="hover:text-sky-400 transition-colors">
            Termos &amp; LGPD
          </Link>
        </div>
      </footer>
    </div>
  );
}
