import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { CHECKLIST_ITENS } from '../../data/checklistPmoc';
import { linkWhatsApp } from '../../data/contato';
import { montarMensagemChecklist, resumoChecklist } from '../../utils/checklistPmoc';

// Checklist de PMOC da Home. Os itens são o protocolo da Simon (src/data/checklistPmoc.js), NÃO um mínimo legal:
// a seção diz isso ao visitante e nunca usa "o que falta" (decisão D4 do plano de 2026-11-14). O botão final é
// um link real do WhatsApp; a mensagem que vai nele é a mesma que o visitante lê no <details> antes de enviar.
// A mensagem leva só os itens marcados, nunca nome, telefone nem e-mail.
export default function ChecklistPmoc() {
  const [marcados, setMarcados] = useState(() => CHECKLIST_ITENS.map(() => false));
  const { marcados: n, total, naoMarcados } = resumoChecklist(marcados);
  const mensagem = montarMensagemChecklist(marcados, CHECKLIST_ITENS);

  const alternar = (i) => setMarcados((atual) => atual.map((m, k) => (k === i ? !m : m)));

  return (
    <section
      id="checklist"
      className="tema-laudo secao-laudo secao-laudo--branca"
      aria-labelledby="checklist-titulo"
    >
      <div className="miolo">
        <h2 id="checklist-titulo" className="text-3xl sm:text-4xl text-tinta max-w-[40rem]">
          O que o PMOC da Simon inclui
        </h2>
        <p className="texto-corrido mt-4 text-lg text-aco-escuro">
          Marque o que o seu plano atual já faz. A lista é o protocolo da Simon, não um mínimo legal.
        </p>

        <div className="checklist-grade">
          <fieldset>
            <legend className="sr-only">Itens do protocolo de PMOC da Simon</legend>
            <ul className="checklist-itens">
              {CHECKLIST_ITENS.map((item, i) => (
                <li key={item.id}>
                  <label className="checklist-item">
                    <input type="checkbox" checked={marcados[i]} onChange={() => alternar(i)} />
                    <span className="checklist-caixa" aria-hidden="true">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{item.texto}</span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>

          <div className="checklist-painel">
            <p className="checklist-contagem" aria-live="polite">
              <strong className="valor-medido">{n}</strong> de {total} itens marcados
            </p>
            <div className="checklist-barra" aria-hidden="true">
              {CHECKLIST_ITENS.map((item, i) => (
                <i key={item.id} className={`checklist-seg${marcados[i] ? ' checklist-seg-on' : ''}`} />
              ))}
            </div>

            {n > 0 && naoMarcados.length > 0 && (
              <div className="checklist-nao-marcados">
                <p className="font-semibold text-tinta">Itens do protocolo da Simon que você não marcou</p>
                <ul>
                  {naoMarcados.map((i) => (
                    <li key={CHECKLIST_ITENS[i].id}>{CHECKLIST_ITENS[i].texto}</li>
                  ))}
                </ul>
              </div>
            )}

            <p className="checklist-apoio">
              {n === 0 && 'Marque o que o seu plano atual já faz.'}
              {n > 0 && naoMarcados.length > 0 && 'Uma visita técnica confere o que o seu PMOC cobre e o que difere do protocolo da Simon.'}
              {n > 0 && naoMarcados.length === 0 && 'Os cinco itens estão marcados. Uma visita técnica confere se cada registro está em dia.'}
            </p>

            <a
              className="checklist-botao"
              href={linkWhatsApp(mensagem)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir diagnóstico do meu PMOC
            </a>

            <details className="checklist-detalhes">
              <summary>Ver a mensagem que será enviada</summary>
              <p id="checklist-mensagem">{mensagem}</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
