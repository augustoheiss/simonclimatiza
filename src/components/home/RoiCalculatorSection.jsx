import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Zap, AlertTriangle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function RoiCalculatorSection() {
  const [machines, setMachines] = useState(12);
  const [monthlyBill, setMonthlyBill] = useState(8500);

  // Cálculos de engenharia térmica e ROI
  // Climatização representa em média 45% a 60% da fatura elétrica corporativa
  // Descalibração e falta de manutenção geram entre 20% e 35% de ineficiência nesse montante
  const hvacPortion = monthlyBill * 0.55;
  const estimatedMonthlyWaste = hvacPortion * 0.28;
  const estimatedAnnualWaste = estimatedMonthlyWaste * 12;
  
  // Status regulatório de acordo com a Lei 13.589/18 (acima de 5 TR / ~60.000 BTU)
  const isPmocMandatory = machines >= 5 || monthlyBill >= 3500;

  const handleSendToWhatsApp = () => {
    const formattedWaste = estimatedAnnualWaste.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    });
    const formattedBill = monthlyBill.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    });

    const msg = encodeURIComponent(
      `Olá Engenharia Simon! Fiz uma simulação na Calculadora de Eficiência do site:\n` +
      `• Aparelhos instalados: ${machines} unidades\n` +
      `• Conta mensal média: ${formattedBill}\n` +
      `• Desperdício anual calculado: ${formattedWaste}/ano\n` +
      `• Status PMOC: ${isPmocMandatory ? 'Obrigatório por Lei (13.589)' : 'Recomendado'}\n\n` +
      `Gostaria de agendar uma auditoria técnica preliminar para a minha empresa.`
    );

    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
  };

  return (
    <section
      id="calculadora-roi"
      className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-sky-50/70 via-white to-sky-50/40 border-t border-sky-100 relative overflow-hidden"
      aria-label="Calculadora Interativa de Eficiência Térmica e Risco PMOC"
    >
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-extrabold tracking-widest uppercase mb-4 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            Simulador de Eficiência &amp; Risco B2B
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 leading-tight">
            Descubra Quanto sua Empresa Está{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Desperdiçando por Mês
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Ajuste os parâmetros abaixo para calcular o potencial de economia e o enquadramento regulatório do seu edifício.
          </p>
        </div>

        {/* Calculator Main Grid Card */}
        <div className="bg-white rounded-3xl border border-sky-200 shadow-2xl shadow-sky-900/10 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Interactive Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Slider 1: Número de Aparelhos */}
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <label htmlFor="machines-slider" className="text-sm font-bold text-slate-800">
                  Quantidade de Aparelhos / Evaporadoras:
                </label>
                <span className="px-3.5 py-1 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 font-extrabold text-sm">
                  {machines} {machines === 1 ? 'máquina' : 'máquinas'}
                </span>
              </div>
              <input
                id="machines-slider"
                type="range"
                min="2"
                max="80"
                step="1"
                value={machines}
                onChange={(e) => setMachines(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                <span>2 aparelhos</span>
                <span>40 aparelhos</span>
                <span>80+ aparelhos</span>
              </div>
            </div>

            {/* Slider 2: Conta de Luz Média */}
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <label htmlFor="bill-slider" className="text-sm font-bold text-slate-800">
                  Conta Média de Energia da Empresa (R$/mês):
                </label>
                <span className="px-3.5 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold text-sm">
                  {monthlyBill.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}
                </span>
              </div>
              <input
                id="bill-slider"
                type="range"
                min="1500"
                max="80000"
                step="500"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                <span>R$ 1.500/mês</span>
                <span>R$ 40.000/mês</span>
                <span>R$ 80.000+/mês</span>
              </div>
            </div>

            {/* Regulatory Status Alert */}
            <div className={`p-4 rounded-2xl border flex items-start gap-3.5 ${
              isPmocMandatory
                ? 'bg-amber-50/80 border-amber-300 text-amber-900'
                : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}>
              <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isPmocMandatory ? 'text-amber-600' : 'text-slate-400'}`} />
              <div className="text-xs leading-relaxed">
                <strong className="block font-bold mb-0.5">
                  {isPmocMandatory ? 'ENQUADRAMENTO LEGAL: PMOC Obrigatório (Lei 13.589/18)' : 'Status: Manutenção Preventiva Recomendada'}
                </strong>
                {isPmocMandatory
                  ? 'Sua infraestrutura ultrapassa a capacidade de dispensa. A ausência de PMOC assinado por Engenheiro Mecânico sujeita o CNPJ a multas sanitárias de até R$ 1,5 milhão.'
                  : 'Ambientes corporativos menores garantem longevidade e economia de energia com rotina técnica calibrada.'}
              </div>
            </div>

          </div>

          {/* Right Column: Calculated Results & CTA (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-500/20 rounded-full blur-[40px] pointer-events-none" />

            <div>
              <span className="text-[11px] font-bold text-sky-400 uppercase tracking-widest block mb-1">
                Estimativa de Economia Auditada
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                {estimatedAnnualWaste.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}
                <span className="text-xs font-normal text-slate-300 ml-1">/ano</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Desperdício energético recuperável com calibração termodinâmica, vácuo correto e limpeza de trocadores.
              </p>

              <div className="space-y-2.5 py-4 border-y border-white/10 mb-6 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Economia mensal estimada: <strong>{estimatedMonthlyWaste.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}/mês</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>PMOC 100% digital com ART inclusa</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSendToWhatsApp}
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 cursor-pointer"
            >
              <span>Validar Cálculo no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
