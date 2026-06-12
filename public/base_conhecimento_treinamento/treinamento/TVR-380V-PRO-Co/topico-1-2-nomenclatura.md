# TÓPICO 1.2 — Decodificando a Nomenclatura do TVR Pro CO Series

---

## 1. NESTED SCHEMA METADATA

```
id_secao: "secao-1"
titulo_secao: "Visão Geral do Sistema e Identificação"
id_aula: "aula-1-2"
titulo_aula: "Decodificação da Nomenclatura: Guia Definitivo para Técnicos de Campo"
descricao_aula: "Desmembramento completo, posição por posição, dos códigos de nomenclatura de 13 a 15 dígitos das Unidades Internas Padrão, dos Ventiladores de Recuperação de Calor (HRV) e das Unidades Externas do sistema TVR Pro CO Series. Cada dígito é mapeado ao seu significado técnico — desde o tipo de refrigerante (R-410A), a família do produto (TVR Pro CO vs. TVR Ultra), o tipo de unidade interna (Cassete, Duto, Hi-Wall), até a tensão de alimentação, a sequência de projeto e a opção de tratamento anticorrosivo."
```

---

## 2. CONTEÚDO TÉCNICO DA AULA

### 2.1 Por que Dominar a Nomenclatura?

No dia a dia do técnico de campo, a etiqueta de identificação da máquina é a **primeira e mais importante fonte de informação**. Antes de abrir qualquer painel, medir qualquer grandeza ou acessar qualquer menu de diagnóstico, o profissional precisa saber exatamente com qual equipamento está lidando. A nomenclatura não é apenas um código de fábrica — ela é um **DNA técnico** que revela:

- O tipo de refrigerante utilizado
- O fabricante e a família do produto
- O tipo de evaporadora ou condensadora
- A capacidade nominal em Btu/h
- A plataforma de controle (TVR Pro CO ou TVR Ultra)
- A tensão e frequência de alimentação elétrica
- Se há tratamento anticorrosivo
- A sequência de projeto e de serviço (revisões de engenharia)

O sistema TVR Pro CO utiliza três formatos de nomenclatura distintos, um para cada categoria de equipamento: **Unidades Internas Padrão** (15 dígitos), **Ventiladores de Recuperação de Calor — HRV** (13 dígitos) e **Unidades Externas** (15 dígitos).

---

### 2.2 Nomenclatura das Unidades Internas Padrão (Standard Indoor Units)

O modelo de uma unidade interna padrão segue o formato de **15 caracteres alfanuméricos**. O manual utiliza o exemplo:

```
4  T  V  E  0  0  0  7  E  F  0  0  0  A  A
1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
```

**Tabela de Decodificação — Unidade Interna Padrão:**

| Posição | Código no Exemplo | Significado | Descrição Detalhada |
|---------|-------------------|-------------|---------------------|
| **1** | **4** | Tipo de Refrigerante | **R-410A**. O dígito "4" identifica que o equipamento opera exclusivamente com o refrigerante R-410A. |
| **2** | **T** | Fabricante | **Trane**. Identifica a marca do fabricante. |
| **3** | **V** | Família do Produto | **TVR**. Indica que o equipamento pertence à família VRF (Variable Refrigerant Flow) da Trane. |
| **4** | **E** | Tipo de Unidade Interna | Identifica o formato físico da evaporadora. Veja a tabela de códigos abaixo. |
| **5-6** | **00** | Reservado | Atualmente não utilizado ("Currently not used"). |
| **7-8** | **07** | Capacidade (Btu/h × 1000) | A capacidade nominal da unidade interna. O valor deve ser lido como o número formado pelos dígitos 7 e 8, multiplicado por 1.000. No exemplo, "07" = 7.000 Btu/h. |
| **9** | **E** | Plataforma de Controle | **TVR Ultra**. O dígito "E" indica a plataforma TVR Ultra. Já o dígito "F" indica a plataforma TVR Pro CO (conforme a posição 10 da unidade externa). |
| **10** | **F** | Tensão / Frequência | **380V, 50-60Hz, 1 Fase (1P)**. Este dígito codifica a alimentação elétrica da evaporadora. |
| **11-12-13** | **000** | Reservado | Atualmente não utilizados ("Currently not used"). |
| **14** | **A** | Sequência de Projeto | **Primeira sequência de projeto ("First design sequence")**. Identifica a revisão de engenharia do produto. A letra "A" indica a primeira versão do projeto mecânico/eletrônico. |
| **15** | **A** | Sequência de Serviço | **Primeira sequência de serviço ("First service sequence")**. Identifica a revisão de serviço. A letra "A" indica a primeira versão de documentação de manutenção. |

#### Códigos de Tipo de Unidade Interna (Posição 4):

| Código | Tipo de Unidade | Código Anterior (Tópico 1.1) |
|--------|-----------------|------------------------------|
| **E** | One-way Cassette (Cassete de 1 via) | Q1 |
| **G** | Two-way Cassette (Cassete de 2 vias) | Q2 |
| **B** | Compact Four-way Cassette (Cassete Compacto de 4 vias) | Q4C |
| **C** | Four-way Cassette (Cassete de 4 vias) | Q4 |
| **D** | Medium Static Pressure Duct (Duto de Média Pressão) | T2 |
| **A** | High Static Pressure Duct (Duto de Alta Pressão) | T1 |
| **W** | Wall-Mounted (Hi-Wall / Parede) | G |
| **C** | Ceiling & Floor (Piso-Teto) | DL |
| **S, N, U** | Floor Standing (Coluna / Gabinete Vertical) | F |
| **F** | Fresh Air Processing Unit (Unidade de Ar Novo) | FA |

> **Observação Importante:** Os códigos de tipo de unidade interna na nomenclatura (posição 4) são **diferentes** dos códigos de abreviação usados nas tabelas de capacidade (Tópico 1.1). Por exemplo, a unidade Hi-Wall usa o código **"W"** na nomenclatura, mas o código **"G"** nas tabelas de capacidade. O técnico precisa dominar ambas as convenções.

---

### 2.3 Nomenclatura dos Ventiladores de Recuperação de Calor (HRV)

Os ventiladores de recuperação de calor (Heat Recovery Ventilator) da série AC utilizam um formato de **13 caracteres alfanuméricos**:

```
T  E  R  V  0  1  2  0  A  B  0  A  A
1  2  3  4  5  6  7  8  9  10 11 12 13
```

**Tabela de Decodificação — HRV (AC Series):**

| Posição | Código no Exemplo | Significado | Descrição Detalhada |
|---------|-------------------|-------------|---------------------|
| **1** | **T** | Fabricante (parte 1) | Combinação das posições 1-2-3 identifica "Trane Energy Recovery". |
| **2** | **E** | Tipo de Produto | **Energy Recovery Fan** (Ventilador de Recuperação de Energia). |
| **3** | **R** | Família | **Trane TVR**. Vincula o HRV à família de produtos VRF da Trane. |
| **4** | **V** | Reservado | Parte da sigla do produto. |
| **5** | **0** | Reservado | Atualmente não utilizado. |
| **6-7** | **12** | Capacidade (CFM) | A vazão de ar nominal. Os dígitos formam o valor da vazão em CFM (pés cúbicos por minuto). No exemplo, "12" corresponde a 1200 CFM. O significado exato depende dos dois dígitos combinados. |
| **8** | **0** | Reservado | Atualmente não utilizado. |
| **9** | **A** | Plataforma de Controle | **TVR**. Identifica que o HRV é compatível com a plataforma de controle da família TVR. |
| **10** | **B** | Tensão / Frequência | A codificação é diferente das unidades internas e externas. Dois valores possíveis: **1 = 380V/60Hz/1Ph** ou **B = 380V/50Hz/1Ph**. |
| **11** | **0** | Reservado | Atualmente não utilizado. |
| **12** | **A** | Sequência de Projeto | **Primeira sequência de projeto**. |
| **13** | **A** | Sequência de Serviço | **Primeira sequência de serviço**. |

---

### 2.4 Nomenclatura das Unidades Externas (Outdoor Units)

As unidades externas utilizam um formato de **15 caracteres alfanuméricos**, similar ao das unidades internas, porém com diferenças críticas nas posições 3, 4, 9, e 13:

```
4  T  V  Y  0  0  7  7  H  E  0  0  0  A  A
1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
```

**Tabela de Decodificação — Unidade Externa:**

| Posição | Código no Exemplo | Significado | Descrição Detalhada |
|---------|-------------------|-------------|---------------------|
| **1** | **4** | Tipo de Refrigerante | **R-410A**. Idêntico às unidades internas. |
| **2** | **T** | Fabricante | **Trane**. |
| **3** | **V** | Família do Produto | **VRF**. Indica que é um produto da linha Variable Refrigerant Flow. |
| **4** | **Y** | Tipo de Produto | **Cooling Only** (Apenas Refrigeração). O código "Y" identifica que esta unidade externa opera exclusivamente no modo de refrigeração, sem bomba de calor (heat pump) reversível. |
| **5** | **0** | Reservado | Atualmente não utilizado ("Currently not used"). |
| **6** | **0** | Reservado | Atualmente não utilizado. |
| **7-8** | **77** | Capacidade (Btu/h × 1000) | A capacidade nominal da condensadora. No exemplo, "77" = 77.000 Btu/h (equivalente ao modelo de 8HP). Para modelos de maior capacidade, como o 30HP: "290" ocupa as posições 6-7-8, pois o campo se expande usando a posição 6 quando necessário. |
| **9** | **H** | Plataforma de Controle | **TVR Pro CO**. O dígito "H" é exclusivo das unidades externas da série TVR Pro CO. Diferencia-se do "E" usado na plataforma TVR Ultra. |
| **10** | **E** | Tensão / Frequência | **380V, 50-60Hz, 1 Fase (1P)**. Codificação da alimentação elétrica da condensadora. |
| **11-12** | **00** | Reservado | Atualmente não utilizados ("Currently not used"). |
| **13** | **0** | Acabamento / Tratamento | Dois valores possíveis: **0 = Standard** (acabamento padrão) ou **C = Corrosion treatment** (tratamento anticorrosivo). Unidades com código "C" possuem revestimento especial nas aletas e na carenagem para ambientes agressivos (litoral, indústria química). |
| **14** | **A** | Sequência de Projeto | **Primeira sequência de projeto**. |
| **15** | **A** | Sequência de Serviço | **Primeira sequência de serviço**. |

---

### 2.5 Exemplos Práticos de Decodificação — Exercícios de Campo

#### Exemplo 1: Decodificando `4TVY0290HE000AA`

| Posição | Dígito | Decodificação |
|---------|--------|---------------|
| 1 | 4 | Refrigerante R-410A |
| 2 | T | Fabricante: Trane |
| 3 | V | Família: VRF |
| 4 | Y | Cooling Only (Apenas Refrigeração) |
| 5 | 0 | Reservado |
| 6-7-8 | 290 | Capacidade: 290.000 Btu/h (**30HP**) |
| 9 | H | Plataforma: **TVR Pro CO** |
| 10 | E | Alimentação: 380V / 50-60Hz / 1P |
| 11-12 | 00 | Reservado |
| 13 | 0 | Acabamento: **Standard** (sem tratamento anticorrosivo) |
| 14 | A | Primeira sequência de projeto |
| 15 | A | Primeira sequência de serviço |

**Resultado:** Unidade externa Trane TVR Pro CO, 30HP, Cooling Only, R-410A, 380V, acabamento padrão.

#### Exemplo 2: Decodificando `4TVY0077HE0C0AA`

| Posição | Dígito | Decodificação |
|---------|--------|---------------|
| 1-4 | 4TVY | R-410A / Trane / VRF / Cooling Only |
| 5-6-7-8 | 0077 | 77.000 Btu/h (**8HP**) |
| 9 | H | **TVR Pro CO** |
| 10 | E | 380V / 50-60Hz / 1P |
| 13 | **C** | **Tratamento anticorrosivo** |
| 14-15 | AA | Primeira sequência de projeto e serviço |

**Resultado:** Unidade externa de 8HP com **tratamento anticorrosivo** — indicada para instalações em ambiente agressivo (litoral, áreas industriais com presença de substâncias corrosivas).

#### Exemplo 3: Identificando a Plataforma — TVR Pro CO vs. TVR Ultra

A **diferença crítica** entre as duas plataformas da Trane está codificada na **Posição 9**:

| Posição 9 | Plataforma | Série |
|-----------|-----------|-------|
| **H** | TVR Pro CO | Série coberta por este manual de serviço |
| **E** | TVR Ultra | Série diferente — manual de serviço separado |

> Quando o técnico chega a um site com múltiplas unidades Trane e precisa saber qual manual consultar, a **posição 9** da nomenclatura é a resposta instantânea: "H" = TVR Pro CO, "E" = TVR Ultra.

---

### 2.6 Mapa Comparativo das Três Nomenclaturas

| Posição | Unidade Interna (15 dígitos) | HRV (13 dígitos) | Unidade Externa (15 dígitos) |
|---------|------------------------------|-------------------|-----------------------------|
| 1 | Refrigerante (4 = R-410A) | Fabricante (T) | Refrigerante (4 = R-410A) |
| 2 | Fabricante (T = Trane) | Tipo (E = Energy Recovery) | Fabricante (T = Trane) |
| 3 | Família (V = TVR) | Família (R = Trane TVR) | Família (V = VRF) |
| 4 | **Tipo de Unidade Interna** | Reservado (V) | **Cooling Only (Y)** |
| 5-8 | Reservado + Capacidade Btu/h | Reservado + Capacidade CFM | Reservado + Capacidade Btu/h |
| 9 | Plataforma (E=Ultra, F=ProCO) | Plataforma (A = TVR) | **Plataforma (H = TVR Pro CO)** |
| 10 | Tensão/Frequência | Tensão/Frequência | Tensão/Frequência |
| 11-13 | Reservados | Reservado + Projeto + Serviço | Reservados + **Tratamento (0/C)** |
| 14-15 | Projeto + Serviço | — | Projeto + Serviço |

---

## 3. TABELAS E PARÂMETROS TÉCNICOS

### Tabela Mestra — Códigos de Tipo de Unidade Interna (Posição 4 da Nomenclatura)

| Código na Nomenclatura | Tipo de Evaporadora | Código na Tabela de Capacidade |
|------------------------|---------------------|-------------------------------|
| E | One-way Cassette | Q1 |
| G | Two-way Cassette | Q2 |
| B | Compact Four-way Cassette | Q4C |
| C | Four-way Cassette / Ceiling & Floor | Q4 / DL |
| D | Medium Static Pressure Duct | T2 |
| A | High Static Pressure Duct | T1 |
| W | Wall-Mounted (Hi-Wall) | G |
| S, N, U | Floor Standing | F |
| F | Fresh Air Processing Unit | FA |

### Tabela Mestra — Códigos de Tensão/Frequência (Posição 10)

| Código | Unidade Interna | Unidade Externa | HRV |
|--------|----------------|-----------------|-----|
| **E** | 380V/50-60Hz/1P | 380V/50-60Hz/1P | — |
| **F** | 380V/50-60Hz/1P | — | — |
| **1** | — | — | 380V/60Hz/1Ph |
| **B** | — | — | 380V/50Hz/1Ph |

### Tabela Mestra — Código de Plataforma (Posição 9)

| Código | Equipamento | Plataforma |
|--------|-------------|-----------|
| **H** | Unidade Externa | TVR Pro CO (este manual) |
| **E** | Unidade Interna / Externa | TVR Ultra (manual separado) |
| **A** | HRV | TVR (genérico) |

---

## 4. INFOBOX DE CAMPO / AVISOS

> [!CAUTION]
> **REGRA DE OURO — NUNCA CONFUNDIR "H" COM "E" NA POSIÇÃO 9:**
> Ao chegar em um site com equipamentos Trane, a PRIMEIRA verificação obrigatória é a posição 9 da nomenclatura da unidade externa. Se o código for **"H"** → use este manual (TVR Pro CO). Se for **"E"** → o equipamento pertence à família TVR Ultra e exige um manual de serviço completamente diferente. Usar o manual errado durante diagnóstico resultará em leituras incorretas de parâmetros, configurações de DIP switch incompatíveis e potencial dano ao equipamento.

> [!WARNING]
> **ATENÇÃO — DUPLA CONVENÇÃO DE CÓDIGOS DE UNIDADE INTERNA:**
> O sistema utiliza dois conjuntos de códigos para as unidades internas. Os códigos **Q1, Q2, Q4C, Q4, T1, T2, G, DL, F** (Tópico 1.1) são usados em tabelas de capacidade e diagramas de projeto. Os códigos **E, G, B, C, D, A, W, S/N/U, F** são usados na nomenclatura do modelo. O técnico deve memorizar a correspondência entre ambos para não cometer erros de identificação.

> [!IMPORTANT]
> **POSIÇÃO 13 DA UNIDADE EXTERNA — TRATAMENTO ANTICORROSIVO:**
> Ao realizar manutenção em uma unidade externa instalada em ambiente costeiro ou industrial, verifique se a posição 13 da nomenclatura é **"C"** (Corrosion treatment). Equipamentos sem tratamento anticorrosivo (código "0") instalados em ambientes agressivos sofrerão degradação acelerada das aletas do condensador, reduzindo a eficiência de troca térmica e a vida útil do compressor.

> [!TIP]
> **DICA RÁPIDA — LEITURA DE CAPACIDADE EM CAMPO:**
> Para converter rapidamente a capacidade codificada na nomenclatura (posições 7-8 ou 6-7-8) em HP:
> - Divida o valor em Btu/h × 1000 por **9.616** para obter uma estimativa aproximada em HP.
> - Exemplo: 4TVY0**290**HE000AA → 290.000 Btu/h ÷ 9.616 ≈ **30HP** ✔
> - Exemplo: 4TVY00**77**HE000AA → 77.000 Btu/h ÷ 9.616 ≈ **8HP** ✔

---

**Podemos prosseguir para o Tópico 2.1?**
