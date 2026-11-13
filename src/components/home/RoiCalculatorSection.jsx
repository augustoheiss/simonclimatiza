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
  
  // PMOC: a Lei 13.589/2018 e a Portaria 3.523/GM se aplicam quando a capacidade de refrigeração SOMADA do
  // edifício chega a 60.000 BTU/h (5 TR). O número de aparelhos e o valor da conta não decidem isso, por isso a
  // calculadora pergunta a capacidade. Sem essa informação, ela não afirma que o PMOC é obrigatório.
  const [capacidade, setCapacidade] = useState('desconhecida'); // 'desconhecida' | 'abaixo' | 'acima'
  const isPmocMandatory = capacidade === 'acima';

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
      `• Capacidade de refrigeração somada: ${capacidade === 'acima' ? 'a partir de 60.000 BTU/h (5 TR)' : capacidade === 'abaixo' ? 'abaixo de 60.000 BTU/h' : 'não informada'}

` +
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

            <fieldset>
              <legend className="font-semibold text-tinta">Capacidade de refrigeração somada do edifício</legend>
              <p className="mt-1 text-sm text-aco-escuro">
                O PMOC é obrigatório a partir de 60.000 BTU/h (5 TR) somados. A capacidade está na placa dos equipamentos ou no projeto.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  ['desconhecida', 'Não sei'],
                  ['abaixo', 'Abaixo de 60.000 BTU/h'],
                  ['acima', '60.000 BTU/h ou mais'],
                ].map(([valor, rotulo]) => (
                  <label
                    key={valor}
                    className={`cursor-pointer rounded-md border px-3 py-1.5 text-sm font-medium has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-refrigerante-escuro ${
                      capacidade === valor
                        ? 'bg-tinta text-white border-tinta'
                        : 'bg-laudo text-tinta border-filete hover:border-aco'
                    }`}
                  >
                    <input
                      type="radio"
                      name="capacidade-pmoc"
                      value={valor}
                      checked={capacidade === valor}
                      onChange={() => setCapacidade(valor)}
                      className="sr-only"
                    />
                    {rotulo}
                  </label>
                ))}
              </div>
            </fieldset>

            <div
              role="status"
              className={`border-l-4 pl-4 py-1 ${isPmocMandatory ? 'border-alerta' : 'border-aco'}`}
            >
              <p className={`font-semibold ${isPmocMandatory ? 'text-alerta-escuro' : 'text-tinta'}`}>
                {capacidade === 'acima' && 'PMOC obrigatório pela Lei 13.589/2018'}
                {capacidade === 'abaixo' && 'Abaixo do limite legal, a manutenção preventiva continua recomendada'}
                {capacidade === 'desconhecida' && 'Confira se o seu edifício precisa de PMOC'}
              </p>
              <p className="mt-1 text-aco-escuro">
                {capacidade === 'acima' &&
                  'Sem PMOC assinado por engenheiro habilitado, a empresa fica sujeita a multas sanitárias, que podem chegar a R$ 1,5 milhão.'}
                {capacidade === 'abaixo' &&
                  'Em ambientes menores, uma rotina técnica calibrada dá mais vida útil ao equipamento e ajuda a economizar energia.'}
                {capacidade === 'desconhecida' &&
                  'A obrigação depende da capacidade de refrigeração somada, e não do número de aparelhos nem do valor da conta. Informe acima ou peça uma avaliação.'}
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
