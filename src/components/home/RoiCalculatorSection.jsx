import React, { useState } from 'react';
import { CONTATO } from '../../data/contato';

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

    window.open(`https://wa.me/${CONTATO.whatsappNumero}?text=${msg}`, '_blank');
  };

  const reais = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

  return (
    <section id="calculadora" className="tema-laudo secao-laudo secao-laudo--papel" aria-labelledby="calculadora-titulo">
      <div className="miolo">
        <h2 id="calculadora-titulo" className="text-3xl sm:text-4xl text-tinta max-w-[40rem]">
          Quanto sua empresa pode estar perdendo por mês
        </h2>
        <p className="texto-corrido mt-4 text-lg text-aco-escuro">
          Ajuste os dois valores para ver uma estimativa de desperdício e se o seu edifício precisa de PMOC.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-8">
            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="machines-slider" className="font-semibold text-tinta">
                  Quantidade de aparelhos
                </label>
                <output htmlFor="machines-slider" className="valor-medido text-xl font-semibold text-tinta">
                  {machines} {machines === 1 ? 'máquina' : 'máquinas'}
                </output>
              </div>
              <input
                id="machines-slider"
                type="range"
                min="2"
                max="80"
                step="1"
                value={machines}
                onChange={(e) => setMachines(Number(e.target.value))}
                className="mt-3 w-full accent-refrigerante-escuro"
              />
              <div className="flex justify-between text-sm text-aco-escuro">
                <span>2</span>
                <span>40</span>
                <span>80 ou mais</span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor="bill-slider" className="font-semibold text-tinta">
                  Conta de energia da empresa, por mês
                </label>
                <output htmlFor="bill-slider" className="valor-medido text-xl font-semibold text-tinta">
                  {reais(monthlyBill)}
                </output>
              </div>
              <input
                id="bill-slider"
                type="range"
                min="1500"
                max="80000"
                step="500"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="mt-3 w-full accent-refrigerante-escuro"
              />
              <div className="flex justify-between text-sm text-aco-escuro">
                <span>R$ 1.500</span>
                <span>R$ 40.000</span>
                <span>R$ 80.000 ou mais</span>
              </div>
            </div>

            <div
              role="status"
              className={`border-l-4 pl-4 py-1 ${isPmocMandatory ? 'border-alerta' : 'border-aco'}`}
            >
              <p className={`font-semibold ${isPmocMandatory ? 'text-alerta-escuro' : 'text-tinta'}`}>
                {isPmocMandatory ? 'PMOC obrigatório pela Lei 13.589/2018' : 'Manutenção preventiva recomendada'}
              </p>
              <p className="mt-1 text-aco-escuro">
                {isPmocMandatory
                  ? 'Sua infraestrutura passa do limite de dispensa. Sem PMOC assinado por engenheiro mecânico, a empresa fica sujeita a multas sanitárias de até R$ 1,5 milhão.'
                  : 'Em ambientes corporativos menores, uma rotina técnica calibrada dá mais vida útil ao equipamento e economiza energia.'}
              </p>
            </div>
          </div>

          <aside className="bg-tinta text-white rounded-md p-6 sm:p-7" aria-live="polite">
            <p className="text-sm text-white/80">Desperdício estimado, por ano</p>
            <p className="valor-medido mt-1 text-4xl font-semibold">
              {reais(estimatedAnnualWaste)}
            </p>
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Estimativa por proporção, sem visita técnica. Considera que a climatização responde por cerca de 55% da conta e que 28% desse valor se perde por falta de ajuste. O valor real só sai da medição no local.
            </p>
            <p className="mt-4 pt-4 border-t border-white/20 text-sm text-white/90">
              Por mês: <strong className="valor-medido">{reais(estimatedMonthlyWaste)}</strong>
            </p>
            <button
              onClick={handleSendToWhatsApp}
              type="button"
              className="mt-6 w-full rounded-md bg-white text-tinta hover:bg-papel font-semibold py-3 px-4 transition-colors"
            >
              Enviar esta simulação pelo WhatsApp
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
