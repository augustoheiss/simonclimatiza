// src/pages/Home.jsx
// Painel Principal "Simon Climatização — Command Center & CAD Workspace" (100dvh Zero-Scroll).
// Segue o paradigma de software técnico estilo AutoCAD: sem rolagem de rede social.
// Cada botão na tela abre uma função, área da empresa, treinamento, módulo, vídeo ou aula.

import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Wrench,
  Flame,
  Coffee,
  Play,
  BookOpen,
  Table2,
  Layers,
  GraduationCap,
  Building2,
  AlertTriangle,
  ShieldCheck,
  Calculator,
  Scale,
  HelpCircle,
  PhoneCall,
  Award,
  CheckCircle2,
  ArrowRight,
  Cpu,
  ListOrdered,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { listarTodosCursosNormalizados } from '../utils/courseAdapter';
import { parseAulaParaBancadaCad } from '../utils/cadContentParser';
import { MANIFESTO_PEDAGOGICO_SIMON } from '../data/bancada/notasDeBancada';
import HeroSection from '../components/home/HeroSection';
import PainSection from '../components/home/PainSection';
import OutcomeSection from '../components/home/OutcomeSection';
import RoiCalculatorSection from '../components/home/RoiCalculatorSection';
import ComparisonTableSection from '../components/home/ComparisonTableSection';
import BridgeProcessSection from '../components/home/BridgeProcessSection';
import AcademiaAuthoritySection from '../components/home/AcademiaAuthoritySection';
import FaqSection from '../components/home/FaqSection';
import ScarcityCtaSection from '../components/home/ScarcityCtaSection';

const TODOS_CURSOS = listarTodosCursosNormalizados();

const COMANDOS_SITE = [
  {
    id: 'academia-cad',
    codigo: 'CMD 01',
    label: 'Treinamentos, Módulos & Aulas',
    icon: GraduationCap,
    cor: 'bg-emerald-500 text-slate-950 border-emerald-400',
    descricao: 'Interaja direto com os 5 cursos, módulos, física aplicada, vídeos e bancada prática.',
  },
  {
    id: 'engenharia-hero',
    codigo: 'CMD 02',
    label: 'Engenharia B2B & Visão Geral',
    icon: Building2,
    cor: 'bg-sky-500 text-slate-950 border-sky-400',
    descricao: 'Soluções corporativas de climatização, PMOC com ART, VRF e Chillers.',
  },
  {
    id: 'diagnostico-dor',
    codigo: 'CMD 03',
    label: 'Riscos & Falhas de Campo',
    icon: AlertTriangle,
    cor: 'bg-amber-400 text-slate-950 border-amber-300',
    descricao: 'O custo oculto da climatização amadora e paradas não planejadas.',
  },
  {
    id: 'eficiencia-pmoc',
    codigo: 'CMD 04',
    label: 'Eficiência Térmica & PMOC',
    icon: ShieldCheck,
    cor: 'bg-teal-400 text-slate-950 border-teal-300',
    descricao: 'Blindagem jurídica, economia energética e confiabilidade operacional.',
  },
  {
    id: 'calculadora-roi',
    codigo: 'CMD 05',
    label: 'Calculadora ROI & Energia',
    icon: Calculator,
    cor: 'bg-indigo-400 text-slate-950 border-indigo-300',
    descricao: 'Simulador interativo de economia elétrica e conformidade PMOC.',
  },
  {
    id: 'comparativo-metodo',
    codigo: 'CMD 06',
    label: 'Método Simon vs. Mercado',
    icon: Scale,
    cor: 'bg-cyan-400 text-slate-950 border-cyan-300',
    descricao: 'Comparativo técnico lado a lado e nosso processo cirúrgico em 3 etapas.',
  },
  {
    id: 'faq-contato',
    codigo: 'CMD 07',
    label: 'FAQ Técnico & Diagnóstico',
    icon: HelpCircle,
    cor: 'bg-violet-400 text-slate-950 border-violet-300',
    descricao: 'Respostas diretas às dúvidas de engenharia e agendamento técnico.',
  },
];

export default function Home() {
  const navigate = useNavigate();

  // Comando ativo do painel principal (sem precisar rolar a página)
  const [comandoAtivo, setComandoAtivo] = useState('academia-cad');

  // Estados de seleção direta de Curso -> Camada/Módulo -> Aula -> Função na tela principal
  const [cursoIdx, setCursoIdx] = useState(0);
  const [modoTrilha, setModoTrilha] = useState('pratica'); // 'pratica' (Física->Instalação) | 'original'
  const [grupoIdx, setGrupoIdx] = useState(0);
  const [aulaSelecionadaId, setAulaSelecionadaId] = useState(null);
  const [funcaoPreview, setFuncaoPreview] = useState('resumo'); // 'resumo' | 'video' | 'slides' | 'blocos'
  const [slidePreviewIdx, setSlidePreviewIdx] = useState(0);

  const cursoAtual = TODOS_CURSOS[cursoIdx] || TODOS_CURSOS[0];
  const gruposCurso = useMemo(
    () =>
      modoTrilha === 'pratica' && cursoAtual.trilhasPraticas?.length > 0
        ? cursoAtual.trilhasPraticas
        : cursoAtual.modulosOriginais || [],
    [cursoAtual, modoTrilha]
  );

  const grupoAtual = gruposCurso[grupoIdx] || gruposCurso[0] || null;
  const aulasDoGrupo = grupoAtual?.aulas || [];
  const aulaAtiva = useMemo(() => {
    if (aulaSelecionadaId) {
      const achou = aulasDoGrupo.find((a) => a.idStr === String(aulaSelecionadaId));
      if (achou) return achou;
    }
    return aulasDoGrupo[0] || cursoAtual.primeiraAulaPratica || cursoAtual.todasAulas[0];
  }, [aulasDoGrupo, aulaSelecionadaId, cursoAtual]);

  const dadosCadAula = useMemo(() => parseAulaParaBancadaCad(aulaAtiva), [aulaAtiva]);

  const selecionarCurso = (idx) => {
    setCursoIdx(idx);
    setGrupoIdx(0);
    setAulaSelecionadaId(null);
    setSlidePreviewIdx(0);
  };

  const selecionarGrupo = (idx) => {
    setGrupoIdx(idx);
    setAulaSelecionadaId(null);
    setSlidePreviewIdx(0);
  };

  const selecionarAula = (aula, funcaoOpcional) => {
    setAulaSelecionadaId(aula.idStr);
    setSlidePreviewIdx(0);
    if (funcaoOpcional) setFuncaoPreview(funcaoOpcional);
  };

  const abrirNoWorkbench = (aula, view = 'bancada') => {
    navigate(`${cursoAtual.rotaUrl}?aula=${encodeURIComponent(aula.id)}&view=${view}`);
  };

  return (
    <div className="h-dvh w-screen overflow-hidden flex flex-col bg-slate-950 text-slate-100 select-none font-sans">
      {/* ── 1. BARRA DE TÍTULO E NAVEGAÇÃO DO SISTEMA (ESTILO AUTOCAD HEADER) ── */}
      <header className="flex-shrink-0 bg-slate-900 border-b border-slate-800 px-3 py-2 flex flex-wrap items-center justify-between gap-2 z-40">
        <div className="flex items-center gap-3 min-w-0">
          <Link to="/" className="flex items-center gap-2.5 group">
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
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[9px] font-mono font-black uppercase bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  CAD WORKSPACE v2.0
                </span>
              </div>
              <span className="block text-[10px] text-slate-400 hidden sm:block">
                Engenharia Térmica de Elite &bull; Painel Interativo Zero-Scroll
              </span>
            </div>
          </Link>
        </div>

        {/* Botões Rápidos de Rotas Institucionais e Certificados */}
        <nav className="flex items-center gap-1.5 flex-wrap" aria-label="Atalhos do Sistema">
          <Link
            to="/academia"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-extrabold transition-colors"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Hub Academia</span>
          </Link>
          <Link
            to="/servicos"
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold transition-colors"
          >
            <Wrench className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">Serviços B2B</span>
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
            <span>Contato Técnico</span>
          </Link>
        </nav>
      </header>

      {/* ── 2. RIBBON DE COMANDOS DA PÁGINA PRINCIPAL (CADA BOTÃO ABRE UM MÓDULO DO SITE) ── */}
      <div className="flex-shrink-0 bg-slate-950 border-b border-slate-800 px-3 py-1.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-500 mr-1 flex-shrink-0 hidden lg:inline">
          MÓDULOS DO SITE:
        </span>
        {COMANDOS_SITE.map((cmd) => {
          const Icon = cmd.icon;
          const ativo = comandoAtivo === cmd.id;
          return (
            <button
              key={cmd.id}
              type="button"
              onClick={() => setComandoAtivo(cmd.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-extrabold transition-all cursor-pointer flex-shrink-0 ${
                ativo
                  ? `${cmd.cor} shadow-md`
                  : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border-slate-800'
              }`}
              title={cmd.descricao}
            >
              <span
                className={`text-[9px] font-mono px-1 py-0.2 rounded ${
                  ativo ? 'bg-black/20 text-current font-black' : 'bg-slate-950 text-slate-400'
                }`}
              >
                {cmd.codigo}
              </span>
              <Icon className="w-3.5 h-3.5" />
              <span>{cmd.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── 3. VIEWPORT CENTRAL INTERATIVO (ZERO SCROLL DE PÁGINA) ── */}
      <main className="flex-1 min-h-0 overflow-hidden bg-[#090f1d] flex flex-col">
        {/* ════════════════════════════════════════════════════════════════════
            COMANDO 01: CENTRAL INTERATIVA DE TREINAMENTOS, MÓDULOS, VÍDEOS E AULAS
        ════════════════════════════════════════════════════════════════════ */}
        {comandoAtivo === 'academia-cad' && (
          <div className="h-full flex flex-col lg:flex-row overflow-hidden">
            {/* Painel 1 (Esquerda): Seleção de Curso + Seleção de Camada/Módulo */}
            <div className="w-full lg:w-[330px] xl:w-[360px] flex-shrink-0 bg-slate-950 border-b lg:border-b-0 lg:border-r border-slate-800 p-3 flex flex-col gap-3 overflow-y-auto">
              {/* Seletor dos 5 Treinamentos */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-sky-400">
                    PASSO 1 · CLIQUE NO TREINAMENTO ({TODOS_CURSOS.length})
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  {TODOS_CURSOS.map((c, idx) => {
                    const ativo = idx === cursoIdx;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => selecionarCurso(idx)}
                        className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                          ativo
                            ? 'bg-sky-500/20 border-sky-400 text-white shadow-sm'
                            : 'bg-slate-900/70 hover:bg-slate-900 border-slate-800 text-slate-300'
                        }`}
                      >
                        <div className="min-w-0">
                          <span className="text-[9px] font-mono font-black text-sky-400 block">
                            [{c.codigoCad}]
                          </span>
                          <span className="text-xs font-extrabold truncate block">
                            {c.nomeCurto}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-950 text-emerald-400 border border-slate-800 flex-shrink-0">
                          {c.todasAulas.length} aulas
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Alternador: Trilha Prática do Simon (Física -> Instalação) vs Módulos */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-emerald-400">
                    PASSO 2 · MODO & MÓDULOS DO CURSO
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1 p-1 rounded-lg bg-slate-900 border border-slate-800 mb-2">
                  <button
                    type="button"
                    onClick={() => {
                      setModoTrilha('pratica');
                      setGrupoIdx(0);
                    }}
                    className={`py-1.5 px-2 rounded text-[11px] font-extrabold flex items-center justify-center gap-1 cursor-pointer ${
                      modoTrilha === 'pratica'
                        ? 'bg-emerald-500 text-slate-950'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Flame className="w-3.5 h-3.5" />
                    <span>Física ➔ Prática</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setModoTrilha('original');
                      setGrupoIdx(0);
                    }}
                    className={`py-1.5 px-2 rounded text-[11px] font-extrabold flex items-center justify-center gap-1 cursor-pointer ${
                      modoTrilha === 'original'
                        ? 'bg-sky-500 text-slate-950'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <ListOrdered className="w-3.5 h-3.5" />
                    <span>Por Módulo</span>
                  </button>
                </div>

                {/* Botões das Camadas / Módulos do Curso */}
                <div className="space-y-1.5">
                  {gruposCurso.map((g, idx) => {
                    const ativo = idx === grupoIdx;
                    return (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => selecionarGrupo(idx)}
                        className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer ${
                          ativo
                            ? 'bg-emerald-500/15 border-emerald-400 text-white'
                            : 'bg-slate-900/50 hover:bg-slate-900 border-slate-800/80 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="font-black text-emerald-400">{g.codigo}</span>
                          <span className="text-slate-400">{g.aulas?.length || 0} aulas</span>
                        </div>
                        <p className="text-xs font-bold mt-0.5 leading-snug line-clamp-2">
                          {g.titulo}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Painel 2 (Centro): Botões de Aulas do Módulo Ativo */}
            <div className="w-full lg:w-[310px] xl:w-[340px] flex-shrink-0 bg-slate-900/60 border-b lg:border-b-0 lg:border-r border-slate-800 p-3 flex flex-col gap-2 overflow-y-auto">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-amber-400">
                  PASSO 3 · CLIQUE NA AULA ({aulasDoGrupo.length})
                </span>
                <span className="text-[10px] font-mono text-slate-500">{grupoAtual?.codigo}</span>
              </div>

              <div className="space-y-2">
                {aulasDoGrupo.map((a) => {
                  const ativa = a.idStr === aulaAtiva?.idStr;
                  return (
                    <div
                      key={a.idStr}
                      className={`rounded-xl border p-2.5 transition-all ${
                        ativa
                          ? 'bg-sky-500/20 border-sky-400 shadow-md'
                          : 'bg-slate-950/80 hover:bg-slate-900 border-slate-800'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => selecionarAula(a)}
                        className="w-full text-left cursor-pointer"
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-[10px] font-mono font-black text-sky-400">
                            AULA [{String(a.id).toUpperCase()}]
                          </span>
                          {a.possuiConversa && (
                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                              ☕ Papo de Balcão
                            </span>
                          )}
                        </div>
                        <h3 className="text-xs font-extrabold text-white leading-snug">
                          {a.titulo.replace(/^Aula \d+[\s\-:]+/i, '')}
                        </h3>
                      </button>

                      {/* Botões de Ação Direta na Aula */}
                      <div className="mt-2 pt-2 border-t border-slate-800/80 flex flex-wrap gap-1">
                        <button
                          type="button"
                          onClick={() => abrirNoWorkbench(a, 'bancada')}
                          className="flex-1 py-1 px-2 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-[10px] flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <Wrench className="w-3 h-3" />
                          <span>Abrir Bancada</span>
                        </button>
                        {a.possuiConversa && (
                          <button
                            type="button"
                            onClick={() => abrirNoWorkbench(a, 'conversa')}
                            className="flex-1 py-1 px-2 rounded bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[10px] flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <Coffee className="w-3 h-3" />
                            <span>Papo</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Painel 3 (Direita): Inspecionador / Preview Interativo da Aula Selecionada na Tela */}
            <div className="flex-1 min-w-0 h-full flex flex-col overflow-hidden bg-[#070c17]">
              {aulaAtiva && (
                <>
                  {/* Barra Superior do Preview da Aula */}
                  <div className="flex-shrink-0 p-3.5 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono font-black uppercase text-sky-400 block">
                        PASSO 4 · INTERAJA COM A AULA SELECIONADA ({cursoAtual.nomeCurto} · AULA{' '}
                        {String(aulaAtiva.id).toUpperCase()})
                      </span>
                      <h2 className="text-sm md:text-base font-black text-white truncate">
                        {aulaAtiva.titulo}
                      </h2>
                    </div>

                    <button
                      type="button"
                      onClick={() => abrirNoWorkbench(aulaAtiva, 'bancada')}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 cursor-pointer flex-shrink-0"
                    >
                      <Wrench className="w-3.5 h-3.5" />
                      <span>Abrir em Tela Cheia no CAD Workbench</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Botões de Função da Aula (Sem Rolar a Página) */}
                  <div className="flex-shrink-0 px-3.5 py-2 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setFuncaoPreview('resumo')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer flex items-center gap-1.5 ${
                        funcaoPreview === 'resumo'
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      <Flame className="w-3.5 h-3.5" />
                      <span>Visão Prática do Simon</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFuncaoPreview('blocos')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer flex items-center gap-1.5 ${
                        funcaoPreview === 'blocos'
                          ? 'bg-sky-500 text-slate-950 border-sky-400'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Botões de Conteúdo ({dadosCadAula.nos.length} Blocos)</span>
                    </button>

                    {aulaAtiva.videoUrl && (
                      <button
                        type="button"
                        onClick={() => setFuncaoPreview('video')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer flex items-center gap-1.5 ${
                          funcaoPreview === 'video'
                            ? 'bg-amber-400 text-slate-950 border-amber-300'
                            : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                        }`}
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Assistir Vídeo Aqui</span>
                      </button>
                    )}

                    {aulaAtiva.slides?.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setFuncaoPreview('slides')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all cursor-pointer flex items-center gap-1.5 ${
                          funcaoPreview === 'slides'
                            ? 'bg-indigo-400 text-slate-950 border-indigo-300'
                            : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Slides ({aulaAtiva.slides.length})</span>
                      </button>
                    )}

                    {aulaAtiva.possuiConversa && (
                      <button
                        type="button"
                        onClick={() => abrirNoWorkbench(aulaAtiva, 'conversa')}
                        className="px-3 py-1.5 rounded-lg text-xs font-extrabold bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <Coffee className="w-3.5 h-3.5" />
                        <span>Iniciar Papo de Balcão →</span>
                      </button>
                    )}
                  </div>

                  {/* Conteúdo da Função Ativa na Tela */}
                  <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4">
                    {funcaoPreview === 'resumo' && (
                      <div className="space-y-4">
                        {/* Card Filosofia Prática do Simon para a Aula */}
                        <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/40 p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                              {dadosCadAula.nos[0]?.notaSimon?.tag || 'FÍSICA & PRÁTICA DE BANCADA'}
                            </span>
                            <span className="text-xs font-bold text-sky-400">
                              Papo Sincero do Professor Simon
                            </span>
                          </div>
                          <p className="text-sm text-slate-200 leading-relaxed mb-3">
                            “{dadosCadAula.nos[0]?.notaSimon?.falaSimon}”
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                            <div className="rounded-xl bg-amber-500/10 border border-amber-500/30 p-3">
                              <span className="block text-[10px] font-black uppercase text-amber-400 mb-1">
                                Filosofia de Oficina
                              </span>
                              <p className="text-xs text-amber-100">
                                {dadosCadAula.nos[0]?.notaSimon?.filosofia}
                              </p>
                            </div>
                            <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3">
                              <span className="block text-[10px] font-black uppercase text-emerald-400 mb-1">
                                Ação Prática na Ferramenta
                              </span>
                              <p className="text-xs text-emerald-100">
                                {dadosCadAula.nos[0]?.notaSimon?.acaoPratica}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Grandezas Físicas da Aula */}
                        {dadosCadAula.grandezasGerais.length > 0 && (
                          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                            <span className="block text-[10px] font-mono font-black uppercase tracking-widest text-sky-400 mb-2">
                              GRANDEZAS E PARÂMETROS FÍSICOS DESTA AULA:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {dadosCadAula.grandezasGerais.map((g, i) => (
                                <span
                                  key={i}
                                  className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs font-extrabold text-emerald-400"
                                >
                                  {g}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Matriz dos Botões de Tópicos que compõem a aula */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[11px] font-mono font-black uppercase text-white">
                              BOTÕES DE BLOCOS TÉCNICOS DESTA AULA ({dadosCadAula.nos.length}):
                            </span>
                            <span className="text-[11px] text-slate-400">
                              Clique em qualquer bloco para abrir na Workstation
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {dadosCadAula.nos.map((no) => (
                              <button
                                key={no.id}
                                type="button"
                                onClick={() => abrirNoWorkbench(aulaAtiva, 'bancada')}
                                className="p-3 rounded-xl bg-slate-950 hover:bg-sky-950/40 border border-slate-800 hover:border-sky-500/50 text-left transition-all cursor-pointer flex items-center justify-between gap-2 group"
                              >
                                <div className="min-w-0">
                                  <span className="text-[10px] font-mono font-black text-sky-400 block">
                                    {no.codigoCad}
                                  </span>
                                  <span className="text-xs font-bold text-slate-200 group-hover:text-white truncate block">
                                    {no.titulo}
                                  </span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 flex-shrink-0" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {funcaoPreview === 'blocos' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {dadosCadAula.nos.map((no) => (
                          <div
                            key={no.id}
                            className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 flex flex-col justify-between gap-3"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] font-mono font-black text-sky-400">
                                  {no.codigoCad} · {no.subNos.length} Sub-camada(s)
                                </span>
                                <span className="text-[10px] font-bold text-emerald-400">
                                  {no.notaSimon?.tag}
                                </span>
                              </div>
                              <h3 className="text-sm font-extrabold text-white mb-1.5">
                                {no.titulo}
                              </h3>
                              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                                “{no.notaSimon?.falaSimon}”
                              </p>
                            </div>
                            <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
                              <button
                                type="button"
                                onClick={() => abrirNoWorkbench(aulaAtiva, 'bancada')}
                                className="flex-1 py-1.5 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs cursor-pointer"
                              >
                                Ver na Bancada Prática
                              </button>
                              <button
                                type="button"
                                onClick={() => abrirNoWorkbench(aulaAtiva, 'raiox')}
                                className="flex-1 py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs cursor-pointer"
                              >
                                Ver 100% Detalhado
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {funcaoPreview === 'video' && aulaAtiva.videoUrl && (
                      <div className="max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden border border-sky-500/40 bg-black shadow-2xl">
                        <iframe
                          src={aulaAtiva.videoUrl}
                          title={`Vídeo: ${aulaAtiva.titulo}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    )}

                    {funcaoPreview === 'slides' && aulaAtiva.slides?.length > 0 && (
                      <div className="flex flex-col items-center gap-3">
                        <img
                          src={aulaAtiva.slides[slidePreviewIdx]}
                          alt={`Slide ${slidePreviewIdx + 1}`}
                          className="max-h-[calc(100dvh-260px)] w-auto object-contain rounded-xl border border-slate-700 shadow-xl"
                        />
                        <div className="flex flex-wrap justify-center gap-1">
                          {aulaAtiva.slides.map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setSlidePreviewIdx(i)}
                              className={`px-2 py-0.5 rounded text-xs font-mono font-bold cursor-pointer ${
                                i === slidePreviewIdx
                                  ? 'bg-indigo-400 text-slate-950'
                                  : 'bg-slate-800 text-slate-400 hover:text-white'
                              }`}
                            >
                              {i + 1}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            COMANDOS 02 A 07: SEÇÕES INSTITUCIONAIS E B2B EM ABAS DE COMANDO
        ════════════════════════════════════════════════════════════════════ */}
        {comandoAtivo === 'engenharia-hero' && (
          <div className="h-full overflow-y-auto bg-white text-slate-900">
            <HeroSection onScrollToPain={() => setComandoAtivo('diagnostico-dor')} />
            <AcademiaAuthoritySection />
          </div>
        )}

        {comandoAtivo === 'diagnostico-dor' && (
          <div className="h-full overflow-y-auto bg-white text-slate-900">
            <PainSection />
          </div>
        )}

        {comandoAtivo === 'eficiencia-pmoc' && (
          <div className="h-full overflow-y-auto bg-white text-slate-900">
            <OutcomeSection />
          </div>
        )}

        {comandoAtivo === 'calculadora-roi' && (
          <div className="h-full overflow-y-auto bg-white text-slate-900">
            <RoiCalculatorSection />
          </div>
        )}

        {comandoAtivo === 'comparativo-metodo' && (
          <div className="h-full overflow-y-auto bg-white text-slate-900">
            <ComparisonTableSection />
            <BridgeProcessSection />
          </div>
        )}

        {comandoAtivo === 'faq-contato' && (
          <div className="h-full overflow-y-auto bg-white text-slate-900">
            <FaqSection />
            <ScarcityCtaSection />
          </div>
        )}
      </main>

      {/* ── 4. BARRA DE STATUS CAD INFERIOR DA HOME ── */}
      <footer className="flex-shrink-0 px-3 py-1.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono font-bold text-emerald-400">
            SIMON CAD COMMAND CENTER ATIVO
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline">
            5 Cursos Oficiais &bull; 79 Aulas Práticas &bull; 379 Blocos Técnicos &bull; Zero-Scroll
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/validar" className="hover:text-sky-400 transition-colors">
            Validar Certificado
          </Link>
          <Link to="/termos" className="hover:text-sky-400 transition-colors">
            Termos & LGPD
          </Link>
        </div>
      </footer>
    </div>
  );
}
