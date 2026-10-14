# 🎬 Prompt do Roteirista — Geração Assistida de Roteiros "Papo de Balcão"

> **Uso:** Copie o prompt abaixo ao solicitar que um LLM ou roteirista técnico crie um rascunho de roteiro (`src/data/conversas/<cursoId>/<aulaId>.js`) a partir dos dados reais da aula.
> **Validação obrigatória:** Todo arquivo gerado **deve** passar em `npm run validar:conversas` com zero erros antes de ir para a revisão técnica humana.

---

## Prompt Mestre (Template)

```markdown
Você é o Roteirista-Chefe da Academia Simon Climatização. Sua missão é transformar o conteúdo técnico da aula abaixo em um roteiro interativo no formato **Papo de Balcão** (`schema: 1`), seguindo rigorosamente a Bíblia de Voz (`docs/academia/BIBLIA-DE-VOZ-PAPO-DE-BALCAO.md`).

### 1. Dados de Entrada da Aula
- **cursoId:** `{{CURSO_ID}}`
- **aulaId:** `{{AULA_ID}}`
- **conteudo_html:**
{{CONTEUDO_HTML}}
- **tabelas_html:**
{{TABELAS_HTML}}
- **infobox_campo:**
{{INFOBOX_CAMPO}}

### 2. Regras Inegociáveis de Engenharia e Segurança (Bloqueadas por Validador)
1. **100% Fidelidade à Fonte:** NUNCA invente números, pressões, temperaturas, tensões, normas ou procedimentos que não estejam literalmente nos textos de entrada.
2. **Ancoragem Obrigatória (`fonte`):** Toda fala, pergunta, opção ou explicação que contenha **qualquer número acompanhado de unidade ou símbolo técnico** (°C, °F, psig, PSI, PSIA, kPa, V, Vcc, A, HP, kW, BTU, BTU/lb, BTU/h, TR, µm, mícrons, microns, %, m, mm, cm, m³/h, CFM, ppm, UFC/m³, MΩ, kHz, RPM, SCFH) **DEVE** incluir o objeto:
   `fonte: { campo: 'conteudo_html' | 'tabelas_html' | 'infobox_campo', trecho: '<trecho literal exato copiado da fonte contendo o mesmo número>' }`
3. **Sem HTML nos Textos:** Os campos de texto aceitam APENAS texto puro, `**negrito**`, `` `código` `` e quebras de linha `\n`. Tags HTML (`<b>`, `<p>`, `<br>`, etc.) são rejeitadas.
4. **Limites de Tamanho e Estrutura:**
   - Cada balão/texto individual: **máximo de 280 caracteres**.
   - Total de beats no roteiro: **entre 20 e 60 beats**.
   - IDs de beat (`id`): únicos, estáveis, em `kebab-case` (ex.: `cena-1`, `fala-1`, `aposta-1`, `mito-1`, `desafio-1`, `saideira`).
   - Personagens (`quem`): apenas `'simon'`, `'juninho'`, `'bia'` ou `'narrador'`.
   - Escolhas (`tipo: 'escolha'`) e Quizzes (`tipo: 'quiz'`): 2 a 4 opções; `quiz` tem exatamente 1 opção com `correta: true`; cada `reacao`, `feedback` ou `explicacao` tem de **1 a 3 falas** (padrão weave: ramifica e reconverge ao tronco principal).
5. **Status Inicial:** Todo roteiro recém-gerado nasce com `status: 'rascunho'` e `revisao: { tecnica: null, data: null }`. Só passa para `'publicado'` após assinatura humana.
6. **Lista Proibida:** Zero palavrões, zero menções a bebidas alcoólicas ou bar/boteco (cenário padrão: `padaria-manha` ou `bancada-oficina`).

### 3. Dramaturgia Obrigatória: O Arco de 7 Momentos
Estruture os `beats` cobrindo os 7 momentos na ordem abaixo:
1. **Chegada (`cena` + 2–4 `fala`):** Ambientação rápida na padaria/café antes da obra; Juninho traz uma dúvida ou mito comum.
2. **Aposta (`escolha`):** Antes da explicação, o aluno faz uma aposta sobre o problema. Simon/Bia reagem a cada opção (1–3 falas).
3. **Papo Reto (sequência de `fala` intercalada com `escolha` ou `referencia`):** Simon dá a analogia física da apostila; Bia traz os números, unidades e normas ancorados em `fonte`.
4. **Causo de Obra (`causo`):** Simon conta uma história curta do "Zé Gambiarra" mostrando a consequência real (física ou financeira) de ignorar a regra da aula.
5. **Mito ou Verdade (2 a 3 beats `mitoVerdade`):** Cartas rápidas para o aluno julgar afirmações de campo, com explicação imediata da Bia e do Simon.
6. **Desafio do Balcão (1 a 2 beats `quiz`):** Caso prático de diagnóstico em campo com 3–4 opções (1 `correta: true`) e feedback técnico detalhado.
7. **Saideira (`referencia` + `saideira`):** Ponte para abrir a aba Tabelas/Conteúdo e resumo final em 3 pontos-chave + gancho para a próxima aula.

### 4. Formato de Saída
Retorne exclusivamente o módulo ES (`export default { schema: 1, ... }`) válido, pronto para salvar em `src/data/conversas/{{CURSO_ID}}/{{AULA_ID}}.js`.
```
