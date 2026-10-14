# ✅ Checklist de Revisão Técnica Humana — "Papo de Balcão"

> **Governança (Portão G-Publicação):** Nenhum roteiro em `src/data/conversas/<cursoId>/<aulaId>.js` pode receber `status: 'publicado'` nem entrar em `src/data/conversas/manifesto.js` sem:
> 1. Execução limpa de `npm run validar:conversas` (0 erros);
> 2. Preenchimento deste checklist pelo Revisor Técnico (Simon Souza / Eng. Responsável);
> 3. Assinatura no próprio arquivo de roteiro (`revisao: { tecnica: '<Nome>', data: 'YYYY-MM-DD' }`).

---

## 📋 Identificação do Roteiro
- **Curso (`cursoId`):** `________________________`
- **Aula/Tópico (`aulaId`):** `________________________`
- **Arquivo:** `src/data/conversas/________/________.js`
- **Revisor Técnico:** `________________________`
- **Data da Revisão:** `____/____/2026`

---

## 1. 🔒 Segurança Física e Fidelidade Numérica (Zero Tolerância)
- [ ] **Números e Unidades:** Todos os valores de pressão (PSI/psig/PSIA), temperatura (°C/°F), vácuo (mícrons), tensão/corrente (V/Vcc/A), potência (HP/kW/BTU) e percentuais (%) batem **exatamente** com a apostila original (`conteudo_html`, `tabelas_html`, `infobox_campo`).
- [ ] **Zero Invenção de Procedimento:** Nenhuma fala sugere atalho operacional, improviso de ferramenta ou etapa fora das normas (NR-10, NR-35, ABNT NBR 16401, NBR 17037, NEMA MG-1, IEEE 43, Lei 13.589/2018).
- [ ] **Fórmulas e Relações Termodinâmicas:** Sinais de subida/queda (ex.: Sobreaquecimento vs. Sub-resfriamento nos 4 quadrantes) foram conferidos contra a Matriz de Diagnóstico da aula.
- [ ] **Gases Refrigerantes e Óleos:** Distinções entre R-410A, R-32, R-454B (A2L / ponto de bolha vs. orvalho) e óleo POE estão tecnicamente precisas.

## 2. 🎭 Voz, Pedagogia e Postura de Marca
- [ ] **Teste de Leitura em Voz Alta ("Eu falaria isso?"):** As falas do personagem **Simon** soam naturais para um veterano de campo, sem parecer texto traduzido ou robótico.
- [ ] **A Piada Carrega o Conceito:** O humor ajuda a fixar a física/engenharia e não distrai do ponto crítico.
- [ ] **Respeito ao Aluno e ao Cliente:** O humor recai sobre a **gambiarra/má prática** (Zé Gambiarra), nunca humilhando o aprendiz (Juninho) nem desrespeitando clientes/síndicos.
- [ ] **Zero Álcool / Segurança do Trabalho:** O cenário é compatível com o ambiente profissional antes do expediente (padaria/café/oficina), sem qualquer menção a bebida alcoólica.

## 3. 🧪 Validação no Navegador e Script
- [ ] `npm run validar:conversas` executado e **100% aprovado (0 erros)**.
- [ ] Todos os quizzes (`Desafio do Balcão`) e cartas (`Mito ou Verdade`) têm gabarito inequívoco e feedback que explica o *porquê* técnico.
- [ ] O botão de referência abre a aba correta (`Tabelas & Parâmetros`, `Conteúdo Técnico` ou `Info de Campo`).

---

## ✍️ Veredito de Publicação
- [ ] **APROVADO PARA PUBLICAÇÃO** (`status: 'publicado'` liberado)
- [ ] **REQUER AJUSTES** (manter `status: 'rascunho'` ou `'revisado'`)

**Assinatura no código (`revisao`):**
```js
revisao: {
  tecnica: 'Simon Souza — Revisão Técnica G-Publicação',
  data: '2026-10-14',
}
```
