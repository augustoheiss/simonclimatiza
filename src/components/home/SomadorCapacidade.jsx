import React, { useState } from 'react';
import {
  LIMITE_PMOC_BTU,
  TAMANHOS_BTU,
  avisoDoCampoTR,
  classificarCapacidade,
  normalizarTR,
  somarCapacidade,
} from '../../utils/capacidade';

// Somador de capacidade da calculadora da Home, para quem responde "Não sei" sobre os 60.000 BTU/h.
//
// Só classifica ("no limite ou acima" / "abaixo"). A frase "PMOC obrigatório pela Lei 13.589/2018" continua
// só no bloco de veredito da calculadora, que recebe o resultado por `aoUsar` (decisão D3 do plano de
// 2026-11-14: enquanto o limite não for conferido com a norma, o somador não cria uma segunda sentença legal).
// Não altera o controle "Quantidade de aparelhos": aquilo conta unidades, isto soma capacidade.
//
// Props:
//   aoUsar('abaixo' | 'acima')   chamado pelo botão "Usar este resultado na calculadora".
//   aoFechar                     chamado depois de usar o resultado (o pai esconde o painel e move o foco).
//   id                           id do contêiner, para o botão que o abre apontar para ele com aria-controls.
//   oculto                       true enquanto fechado; o componente continua montado para guardar o que foi digitado.

const nf = (n) => Math.round(n).toLocaleString('pt-BR');
const escala = 2 * LIMITE_PMOC_BTU; // o medidor vai de 0 a 120.000 BTU/h, com o limite no meio

const textoDoTotal = (total) => {
  const tr = total / 12000;
  return total === 0
    ? '0 BTU/h'
    : `${nf(total)} BTU/h (${tr.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} TR)`;
};

export default function SomadorCapacidade({ aoUsar, aoFechar, id = 'somador', oculto = false }) {
  const [quantidades, setQuantidades] = useState(() => Object.fromEntries(TAMANHOS_BTU.map((t) => [t, 0])));
  const [textoTR, setTextoTR] = useState('');
  const [aviso, setAviso] = useState(null);

  // Enquanto o texto do TR não é um número, vale o último valor bom (a soma não zera por causa de "2,").
  const [trValido, setTrValido] = useState(0);

  const total = somarCapacidade(quantidades, trValido);
  const classe = classificarCapacidade(total);
  const acima = classe === 'acima';

  const mudar = (tamanho, delta) =>
    setQuantidades((q) => ({ ...q, [tamanho]: Math.max(0, Math.min(99, q[tamanho] + delta)) }));

  const aoDigitarTR = (e) => {
    const texto = e.target.value;
    setTextoTR(texto);
    setAviso(null); // durante a digitação nunca avisa
    const lido = normalizarTR(texto);
    if (lido.ok) setTrValido(lido.valor);
  };

  const aoSairDoCampoTR = () => setAviso(avisoDoCampoTR(textoTR, { saiuDoCampo: true }));

  const limpar = () => {
    setQuantidades(Object.fromEntries(TAMANHOS_BTU.map((t) => [t, 0])));
    setTextoTR('');
    setTrValido(0);
    setAviso(null);
  };

  const usar = () => {
    if (classe === 'vazio') return;
    aoUsar(acima ? 'acima' : 'abaixo');
    aoFechar?.();
  };

  return (
    <div id={id} hidden={oculto} className="somador">
      <p className="somador-titulo">Some os aparelhos do edifício</p>
      <p className="somador-nota">
        Use a capacidade que está na placa de cada aparelho. Para chillers e VRF, informe o total em TR
        (1 TR = 12.000 BTU/h). O número de aparelhos acima não muda com esta soma.
      </p>

      <div className="somador-linhas">
        {TAMANHOS_BTU.map((tamanho) => (
          <div key={tamanho} className="somador-linha">
            <span className="valor-medido">{nf(tamanho)} BTU/h</span>
            <span className="somador-passo">
              <button
                type="button"
                aria-label={`Menos um aparelho de ${nf(tamanho)} BTU/h`}
                disabled={quantidades[tamanho] === 0}
                onClick={() => mudar(tamanho, -1)}
              >
                −
              </button>
              <output aria-label={`Quantidade de aparelhos de ${nf(tamanho)} BTU/h`} className="valor-medido">
                {quantidades[tamanho]}
              </output>
              <button
                type="button"
                aria-label={`Mais um aparelho de ${nf(tamanho)} BTU/h`}
                disabled={quantidades[tamanho] === 99}
                onClick={() => mudar(tamanho, 1)}
              >
                +
              </button>
            </span>
          </div>
        ))}

        <div className="somador-linha">
          <label htmlFor="somador-tr">Chillers e VRF, total em TR</label>
          <input
            id="somador-tr"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            placeholder="0"
            value={textoTR}
            onChange={aoDigitarTR}
            onBlur={aoSairDoCampoTR}
            aria-invalid={aviso ? 'true' : 'false'}
            aria-describedby="somador-tr-aviso"
          />
        </div>
        <p id="somador-tr-aviso" className="somador-aviso" role="alert" hidden={!aviso}>
          {aviso}
        </p>
      </div>

      <div
        className={`somador-medidor${acima ? ' somador-medidor-acima' : ''}`}
        role="meter"
        aria-label="Capacidade somada, em BTU por hora"
        aria-valuemin={0}
        aria-valuemax={escala}
        aria-valuenow={Math.min(total, escala)}
        aria-valuetext={
          total === 0
            ? '0 BTU/h'
            : `${textoDoTotal(total)}, ${acima ? 'no limite de 60.000 BTU/h ou acima' : 'abaixo de 60.000 BTU/h'}`
        }
      >
        <div className="somador-trilho">
          <div className="somador-fill" style={{ width: `${Math.min(100, (total / escala) * 100)}%` }} />
          <div className="somador-limite" />
        </div>
        <p className="somador-limite-rotulo">limite: 60.000 BTU/h (5 TR)</p>
      </div>

      <p className="somador-total">
        <strong className="valor-medido">{textoDoTotal(total)}</strong>{' '}
        <span>
          {classe === 'vazio' && 'Some os aparelhos para comparar com o limite.'}
          {classe === 'abaixo' && 'Abaixo de 60.000 BTU/h.'}
          {classe === 'acima' && 'No limite de 60.000 BTU/h ou acima.'}
        </span>
      </p>

      <div className="somador-acoes">
        <button type="button" className="somador-usar" disabled={classe === 'vazio'} onClick={usar}>
          Usar este resultado na calculadora
        </button>
        <button type="button" className="somador-limpar" onClick={limpar}>
          Limpar
        </button>
      </div>
    </div>
  );
}
