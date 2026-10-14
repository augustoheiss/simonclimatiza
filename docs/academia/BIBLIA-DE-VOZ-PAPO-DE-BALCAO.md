# ☕ Bíblia de Voz — "Papo de Balcão" (Academia Simon)

> **Versão:** 1.0 (Outubro de 2026)
> **Propósito:** Garantir consistência dramática, rigor técnico e segurança de marca nos roteiros interativos da aba **Papo de Balcão** nos cursos da Academia Simon Climatização.
> **Regra de Ouro herdada:** *"100% FIDELIDADE ao conteúdo original"*. A conversa é a **porta de entrada** amigável no balcão da padaria antes da obra — **nunca substitui** a apostila técnica.

---

## 1. 🎭 O Elenco Fixo (Tríade Galileana)

Inspirado no *Diálogo sobre os Dois Máximos Sistemas do Mundo* de Galileu (Salviati, Sagredo e Simplício), nosso elenco divide o trabalho cognitivo em três vozes complementares:

### 🧔‍♂️ **Simon** (`quem: 'simon'`) — O Veterano de Campo (Salviati)
- **Quem é:** Mestre de obras e especialista de campo da Simon Climatização. Já viu todo tipo de gambiarra, compressor travado por umidade e placa inverter estourada por falta de terminal ilhós.
- **Voz e Tom:** Direto, seco, sincero ("papo reto"), irônico sem jamais ser humilhante, generoso com quem quer aprender. Odeia atalho que coloca vida ou equipamento em risco.
- **Bordões naturais (usar com parcimônia, máx. 1–2 por aula):**
  - *"Papo reto:"*
  - *"Mágica não emite ART."*
  - *"No olhômetro, até relógio parado acerta duas vezes."*
  - *"O pão na chapa hoje tá pago."*
  - *"Isso tem nome e tem preço."*
- **Papel pedagógico:** Traduzir a física em intuição de campo, contar o **Causo de Obra** e dar o veredito prático nas apostas do aluno.

### 🧑‍🔧 **Juninho** (`quem: 'juninho'`) — O Aprendiz Curioso (Simplício)
- **Quem é:** Técnico recém-chegado na equipe. Esforçado, atento, mas traz vícios de rua ("gela rápido", "completar um gasinho", "medir no dedômetro").
- **Voz e Tom:** Entusiasmado, curioso, às vezes ansioso pra resolver logo. Faz exatamente a pergunta que o aluno tem vergonha de fazer na frente do cliente.
- **Bordões naturais:**
  - *"Peraí, mas na rua o pessoal não faz assim…"*
  - *"Jura? Eu achava que era falta de gás!"*
  - *"Anotado no caderninho."*
- **Papel pedagógico:** Errar primeiro para o aluno não errar na obra; levantar hipóteses do senso comum para que Simon e Bia desmontem com física e números.

### 👩‍🔬 **Bia** (`quem: 'bia'`) — A Engenheira de Precisão (Sagredo)
- **Quem é:** Engenheira mecânica responsável por comissionamento, PMOC, laudos e telemetria. Anda com psicrômetro, tabela P-T e norma debaixo do braço.
- **Voz e Tom:** Clara, cirúrgica, bem-humorada (humor nerd de engenharia), parceira de campo do Simon. Quando o Simon dá a intuição, a Bia crava o número, a unidade e a norma.
- **Bordões naturais:**
  - *"A física não negocia, Ju."*
  - *"Olha o que a tabela diz:"*
  - *"Traduzindo pro bolso do cliente (e pro CFO):"*
- **Papel pedagógico:** Ancorar **todos os números, fórmulas, faixas e normas** literalmente extraídos da apostila (`conteudo_html`, `tabelas_html`, `infobox_campo`).

### 👻 **Zé Gambiarra** (Personagem Ausente — só citado nos Causos)
- **Quem é:** O anti-exemplo folclórico. Nunca aparece falando no chat; só é lembrado nos causos do Simon (*"Igual o Zé que serrou tubo com arco de serra…"*).
- **Regra ética:** O humor mira **100% na prática errada** (a gambiarra), **nunca** na dignidade de uma pessoa real, região ou grupo.

### 👩‍💼 **Dona Marta** (`quem: 'marta'`) — Guardiã do Balcão & Caixa
- **Quem é:** Dona da padaria/café onde a equipe se reúne e conselheira afiada de gestão, ética e finanças.
- **Papel pedagógico:** Entra especialmente em discussões de custo total (TCO), margem bruta vs. markup, responsabilidade civil e sabedoria humana de ofício.

### ☕ **Narrador** (`quem: 'narrador'`)
- **Função:** Rubricas curtas de ambientação na abertura (`tipo: 'cena'`) — ex.: *"Segunda, 7h10. Padaria colada na obra. Café coado passando e um split pingando na parede."*
- **Cenários oficiais (`cenario`):** `'padaria-manha'`, `'bancada-oficina'`, `'casa-de-maquinas'` e `'resenha-pos-obra'` (*"Balcão de Sexta · 18h30 — Fim de expediente, ferramentas guardadas, água com gás e filosofia sincera de ofício"*).

---

## 1.5. 🧭 O Arco de 8 Momentos & Filosofia de Balcão (`tipo: 'filosofia'`)

Cada roteiro articula as **5 dimensões** (*Sincera, Bem-Humorada, Didática, Prática e Filosófica*) em **8 Momentos**:
1. **Chegada (`cena` + `fala`)** — dor real e sincera de obra.
2. **Aposta de Balcão (`escolha`)** — palpite preditivo antes da teoria.
3. **Papo Reto (`fala` + `calculadora`)** — a física e a norma no guardanapo.
4. **Causo de Obra (`causo` + `inspecao`)** — o preço real do atalho do Zé Gambiarra.
5. **Mito ou Verdade (`mitoVerdade`)** — desconstrução de crendice de corredor.
6. **Filosofia de Balcão (`filosofia`)** — sabedoria de ofício: a ética do que fica escondido no forro, a luta contra a entropia e o caráter do profissional quando ninguém está olhando.
7. **Desafio Prático (`quiz`)** — diagnóstico instrumental com dados reais da aula.
8. **Saideira (`saideira` + Desafio da Rodada do Módulo)** — 3 regras de ouro + acesso ao Boss Quiz integrador do módulo.

---

## 2. 🗣️ Vocabulário Permitido vs. Lista Proibida

### ✅ Vocabulário Permitido (Coloquial Profissional de Bancada)
- Formas orais leves: *"cê"*, *"tá"*, *"pra"*, *"pro"*, *"bora"*, *"papo reto"*, *"causo"*, *"no braço"*, *"dedômetro"*, *"olhômetro"*, *"trocador de peça"*, *"chutar"*.
- Gírias técnicas reais do setor (sempre explicadas na sequência): *short-cycling*, *slugging*, *flash gas*, *hunting*, *burnout*, *copper plating*, *retrofit*, *rigging*.

### 🚫 Lista Estritamente Proibida (Verificada por Script Automatizado)
Como a Simon Climatização atende clientes corporativos B2B (hospitais, indústrias, contratos PMOC com ART) e qualquer tela pode virar print de WhatsApp:
1. **Palavrões ou termos chulos** (mesmo abreviados ou com asteriscos): `porra`, `caralho`, `merda`, `bosta`, `foda`, `cacete`, `puta`, `viado`, `corno`, `vagabundo`, `idiota`, `imbecil`, `burro`, `retardado`.
2. **Referências a bebidas alcoólicas ou bar/embriaguez** (Risco R4 — incompatível com NR-10 e NR-35): `cerveja`, `chopp`, `chope`, `cachaça`, `pinga`, `whisky`, `vodka`, `bebedeira`, `bêbado`, `porre`, `ressaca`, `boteco`, `buteco`. *(O cenário é sempre café/padaria/bancada de treino).*
3. **Estereótipos regionais, de gênero, aparência, religião ou política.**
4. **Deboche do cliente ou do síndico:** o cliente pode estar mal-informado, mas nossa postura é educá-lo com dados (TCO, PMOC, laudo), nunca ridicularizá-lo.

---

## 3. 🎯 Regra Editorial Central: *"A Piada Carrega o Conceito"*

Baseado nas evidências de Mayer & Moreno e Banas et al. (2011) contra "detalhes sedutores" (Harp & Mayer, 1998):
- **TODA** metáfora ou tirada bem-humorada deve **ilustrar diretamente o mecanismo físico, elétrico ou financeiro** da aula.
- Se você remover a frase engraçada e o conceito técnico continuar igual, **corte a frase**. Se você remover a frase e o conceito ficar mais difícil de lembrar, **mantenha**.
- **Limite:** No máximo **1 tirada de humor puro** por momento do arco; balões sempre com **≤ 280 caracteres**.

---

## 4. 🔄 6 Exemplos Reais: Antes (Apostila) → Depois (Papo de Balcão)

### Exemplo 1 — Conceito de Frio (Instalação `01-01`)
- **Texto original (`conteudo_html`):**
  > *"Um sistema de ar condicionado não gera ar frio, assim como um interruptor de luz não gera escuridão. Em vez disso, um sistema de refrigeração opera como um elevador térmico avançado, absorvendo ativamente calor de um espaço condicionado designado e rejeitando-o forçosamente para outro ambiente."*
- **No Papo de Balcão:**
  > **Juninho:** Simon, esse split aí tá jogando um frio que é uma beleza!
  > **Simon:** "Jogando frio." Juninho, **frio não existe**. Ninguém compra uma "lâmpada de escuro" — a gente apaga a luz.
  > **Bia:** O ar-condicionado é um **elevador térmico avançado**: absorve o calor daqui de dentro e despeja lá fora no braço.

### Exemplo 2 — Slugging de Líquido (Instalação `01-01`)
- **Texto original (`conteudo_html` / `infobox_campo`):**
  > *"Compressores são projetados puramente para bombear vapor; líquidos são mecanicamente incompressíveis. Se refrigerante líquido violar as válvulas de admissão — uma condição destrutiva conhecida como slugging de líquido — as forças mecânicas obliterarão as válvulas internas, pistões ou placas de scroll."*
- **No Papo de Balcão:**
  > **Simon:** Compressor foi feito pra bombear **vapor**, Ju. Tenta espremer água dentro de uma seringa tampada: não vai.
  > **Bia:** Se entrar refrigerante líquido na admissão, dá **slugging de líquido**. Como líquido é incompressível, a pancada hidráulica destrói válvula, pistão ou scroll.

### Exemplo 3 — Subcarga vs. Restrição (Instalação `01-01`)
- **Texto original (`tabelas_html`):**
  > *"Note como subcarga e restrição na linha de líquido mimetizam uma à outra com baixa pressão de sucção, baixa pressão de cabeça e alto sobreaquecimento. O único fator diferenciador é o sub-resfriamento: subcarga resulta em baixo sub-resfriamento, enquanto uma restrição causa alto sub-resfriamento (líquido se acumulando atrás do bloqueio)."*
- **No Papo de Balcão:**
  > **Juninho:** Pressão de sucção baixa e sobreaquecimento alto… vou buscar a botija pra completar o gás!
  > **Simon:** Tira a mão dessa botija! E se for filtro secador entupido? Os dois dão sucção baixa e sobreaquecimento alto.
  > **Bia:** O tira-teima é o **sub-resfriamento**: se tiver **baixo**, é subcarga. Se tiver **alto**, o líquido tá represado no condensador — é **restrição**!

### Exemplo 4 — TCO: 12% CapEx vs. 88% Operação (Manutenção `m01-01`)
- **Texto original (`conteudo_html` / `tabelas_html`):**
  > *"A fase operacional do ativo, que compreende energia, mão de obra, peças e inatividade, constitui impressionantes 88% do custo total do ciclo de vida... Compra de Capital Inicial (CapEx): 12%."*
- **No Papo de Balcão:**
  > **Juninho:** O síndico chorou desconto na preventiva porque gastou caro comprando as máquinas.
  > **Bia:** Mostra a conta do ciclo de vida pra ele: a compra inicial (**CapEx**) é só **12%** do que ele vai gastar em 15 a 25 anos. Os outros **88%** vão embora em energia, peças, mão de obra e parada!

### Exemplo 5 — 1,07 mm de Sujeira na Condensadora (Manutenção `m01-01`)
- **Texto original (`conteudo_html` / `infobox_campo`):**
  > *"Um acúmulo de sujeira de meros 1,07 mm (0,042 polegadas) em uma serpentina condensadora reduz a eficiência global do sistema em 21%."*
- **No Papo de Balcão:**
  > **Simon:** Sabe quanto mede uma moeda fininha de poeira na condensadora? **1,07 mm**.
  > **Bia:** E só essa casquinha de **1,07 mm** de sujeira na serpentina condensadora derruba a eficiência global do sistema em **21%**. O compressor trabalha sufocado e a conta de luz explode.

### Exemplo 6 — Kits de Junção TODK no VRF 380V (TVR Pro CO `01-01`)
- **Texto original (`conteudo_html` / `infobox_campo`):**
  > *"Todo sistema com 2 ou mais módulos de unidade externa OBRIGATORIAMENTE requer o kit de junção de derivação correspondente (TODK02UTHP ou TODK03UTHP). Esses kits são vendidos separadamente e não estão incluídos no fornecimento padrão da unidade externa."*
- **No Papo de Balcão:**
  > **Juninho:** Chegaram os três módulos de 30HP na obra pra fechar os 90HP! É só subir pro telhado e soldar?
  > **Simon:** Se não tiver uma caixa com o código **TODK03UTHP** no caminhão, nem liga o maçarico.
  > **Bia:** De 32HP a 60HP (2 módulos) exige o kit **TODK02UTHP**; de 62HP a 90HP (3 módulos), o **TODK03UTHP**. Vem separado e sem ele o Mestre e os Escravos não operam!
