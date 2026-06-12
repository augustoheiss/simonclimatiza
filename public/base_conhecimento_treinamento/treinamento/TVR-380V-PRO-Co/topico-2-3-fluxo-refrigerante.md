# TÓPICO 2.3 — Diagramas de Fluxo de Refrigerante: Operação de Refrigeração e Retorno de Óleo

---

## 1. NESTED SCHEMA METADATA

```
id_secao: "secao-2"
titulo_secao: "Layout de Componentes e Circuitos de Refrigerante"
id_aula: "aula-2-3"
titulo_aula: "Fluxo de Refrigerante em Operação de Refrigeração (Cooling) e Retorno de Óleo (Oil Return): Análise dos Estados do Circuito e das Unidades Internas"
descricao_aula: "Análise completa dos 6 diagramas de fluxo de refrigerante do TVR Pro CO Series (2 por classe de chassi), cobrindo o modo de Refrigeração Normal (Cooling Operation) e o modo de Retorno de Óleo (Oil Return). Estudo dos 3 estados termodinâmicos do refrigerante, dos 4 estados operacionais das unidades internas, e do comportamento especial da EXV a 300 steps durante o ciclo de retorno de óleo. Conteúdo essencial para diagnóstico de problemas de distribuição de refrigerante e lubrificação em campo."
```

---

## 2. CONTEÚDO TÉCNICO DA AULA

### 2.1 Dois Modos de Operação — Dois Comportamentos Distintos

O sistema TVR Pro CO opera em dois modos fundamentais que o técnico precisa distinguir ao analisar os diagramas de fluxo:

1. **Cooling Operation (Operação de Refrigeração):** O modo normal de trabalho. O refrigerante percorre o ciclo completo: compressão → condensação → expansão → evaporação → retorno ao compressor. Este é o estado em que o sistema climatiza ativamente os ambientes.

2. **Oil Return Operation in Cooling Mode (Retorno de Óleo durante Refrigeração):** Um modo periódico e automático que o sistema executa para garantir que o óleo lubrificante retorne das evaporadoras e tubulações de campo para o compressor. Durante este modo, o comportamento das unidades internas muda significativamente.

O manual apresenta **6 diagramas** no total — 2 para cada classe de chassi (Figures 2-3.1 a 2-3.6).

---

### 2.2 Os Três Estados Termodinâmicos do Refrigerante

Todos os 6 diagramas utilizam a mesma codificação visual de **três estados do refrigerante** na tubulação:

| Estado | Representação no Diagrama | Descrição Termodinâmica | Trecho do Circuito |
|--------|--------------------------|------------------------|---------------------|
| **Estado 1** | Linha contínua grossa (vermelha) | **Gás de alta temperatura, alta pressão** (High temperature, high pressure gas) | Saída do compressor → Oil separator → Entrada do condensador |
| **Estado 2** | Linha contínua média (vermelha/rosa) | **Líquido de alta temperatura, alta pressão** (High temperature, high pressure liquid) | Saída do condensador → EXVA → Stop valve líquido (9) → Tubulação de campo → Entrada das EXVs das unidades internas |
| **Estado 3** | Linha contínua fina (azul/verde) | **Gás/mistura de baixa temperatura, baixa pressão** (Low temperature, low pressure) | Saída das evaporadoras → Tubulação de campo → Stop valve gás (10) → Acumulador (11) → Sucção do compressor |

**Importância para Diagnóstico:** Se o técnico mede a temperatura de uma tubulação e encontra valores inconsistentes com o estado esperado (ex.: tubulação de sucção muito quente), isso indica um problema no ciclo — pode ser superaquecimento excessivo, EXV com abertura incorreta, ou falta de refrigerante.

---

### 2.3 Modo de Refrigeração Normal (Cooling Operation)

#### Percurso Completo do Refrigerante — Ciclo de Cooling

O ciclo de refrigeração segue o percurso clássico de um sistema VRF Cooling Only:

**Etapa 1 — Compressão:**
O compressor (1) aspira o gás refrigerante R-410A de baixa pressão e baixa temperatura proveniente do acumulador (11), e o comprime para alta pressão e alta temperatura. O sensor de descarga (2) monitora a temperatura do gás na saída.

**Etapa 2 — Separação de Óleo:**
O gás comprimido passa pelo oil separator (4), que retém o óleo lubrificante arrastado pelo fluxo de refrigerante. O óleo é retornado ao cárter do compressor pela válvula SV4 em ciclos temporizados (conforme Tópico 2.2).

**Etapa 3 — Condensação:**
O gás de alta pressão entra no condensador/heat exchanger (5), onde cede calor para o ar externo forçado pelos ventiladores (8). O refrigerante muda de estado gasoso para líquido. Os sensores T3 (temperatura do trocador) e T4 (temperatura ambiente) monitoram este processo.

**Etapa 4 — Expansão Principal (EXVA):**
O líquido de alta pressão passa pela válvula EXVA, onde sofre uma primeira redução de pressão controlada antes de seguir para a stop valve de líquido (9) e sair para a tubulação de campo.

**Etapa 5 — Distribuição para Unidades Internas:**
O refrigerante líquido percorre a tubulação de campo até as unidades internas, onde passa pelas EXVs individuais de cada evaporadora. Cada EXV regula o fluxo conforme a demanda específica daquele ambiente.

**Etapa 6 — Evaporação:**
Nas evaporadoras (unidades internas), o refrigerante líquido absorve calor do ar interior e muda de estado líquido para gasoso. O ar resfriado é insuflado no ambiente pelos ventiladores das unidades internas.

**Etapa 7 — Retorno:**
O gás de baixa pressão retorna pela tubulação de campo, entra pela stop valve de gás (10), passa pelo acumulador (11) — que retém qualquer líquido remanescente — e retorna ao compressor, reiniciando o ciclo.

---

### 2.4 Os 4 Estados Operacionais das Unidades Internas

Os diagramas de fluxo mostram, no lado direito de cada figura, **4 estados operacionais possíveis** para as unidades internas durante a refrigeração. Cada estado determina o comportamento da EXV e do ventilador da evaporadora:

#### Durante Cooling Operation Normal:

| Estado | Unidade | Termostato | Ventilador | EXV | Descrição |
|--------|---------|-----------|-----------|-----|-----------|
| **1** | **ON** (Ligada) | **ON** (Termostato ativo) | **ON** (Ligado) | **Normal control** (Controle normal) | Operação plena. A evaporadora está climatizando o ambiente. A EXV modula conforme a demanda. |
| **2** | **ON** (Ligada) | **ON** (Termostato ativo) | **ON** (Ligado) | **Normal control** (Controle normal) | Idêntico ao Estado 1. Múltiplas evaporadoras operam simultaneamente em controle normal. |
| **3** | **OFF** (Desligada) | — | **OFF** (Desligado) | **Closed** (Fechada) | A unidade está desligada pelo controle remoto ou pelo sistema. A EXV fecha completamente, impedindo passagem de refrigerante. O ventilador para. |
| **4** | **ON** (Ligada) | **OFF** (Termostato desativado — temperatura atingida) | **ON** (Ligado) | **Closed** (Fechada) | O ambiente atingiu a temperatura de setpoint. O termostato desativa a refrigeração, mas o ventilador continua ligado para circulação de ar. A EXV fecha completamente. |

**Regra Fundamental:** Quando a EXV de uma unidade interna está **fechada** (estados 3 e 4), aquela evaporadora **não consome refrigerante**. Todo o fluxo do sistema é redirecionado para as evaporadoras que estão em "Normal control" (estados 1 e 2). Isso é o princípio VRF: **Volume de Refrigerante Variável** — cada evaporadora consome apenas o que precisa.

---

### 2.5 Modo de Retorno de Óleo (Oil Return Operation in Cooling Mode)

O modo de Oil Return é uma **operação automática e periódica** que o sistema TVR Pro CO executa para forçar o retorno de óleo lubrificante que se acumulou nas evaporadoras e na tubulação de campo. Em sistemas VRF com longas tubulações (até 175m), o óleo tende a migrar para pontos baixos e evaporadoras inativas. Se não for retornado periodicamente, o compressor pode sofrer falta de lubrificação.

#### Diferenças Críticas em Relação ao Modo Normal

A grande mudança no modo de Oil Return está no comportamento das **unidades internas que estão desligadas ou com termostato off**:

| Estado | Unidade | Termostato | Ventilador | EXV durante Cooling Normal | EXV durante Oil Return |
|--------|---------|-----------|-----------|--------------------------|----------------------|
| **1** | ON | ON | ON | Normal control | **Normal control** (sem mudança) |
| **2** | ON | ON | ON | Normal control | **Normal control** (sem mudança) |
| **3** | OFF | — | OFF | **Closed** | **300 steps** (aberta parcialmente) |
| **4** | ON | OFF | ON | **Closed** | **300 steps** (aberta parcialmente) |

#### O Que São "300 Steps"?

A EXV das unidades internas opera por **motor de passo** (stepper motor). A abertura da válvula é medida em **"steps"** (passos), onde:
- **0 steps** = Válvula completamente fechada
- **300 steps** = Abertura parcial específica para retorno de óleo
- **480-500 steps** (valor típico) = Abertura plena durante operação de refrigeração máxima

Quando o sistema entra no modo Oil Return, as EXVs das unidades internas que estão **desligadas (estado 3)** ou com **termostato off (estado 4)** abrem para **300 steps**. Isso permite que o refrigerante flua parcialmente através dessas evaporadoras, arrastando o óleo acumulado e trazendo-o de volta pela tubulação de gás até o acumulador (11) e, eventualmente, ao oil separator (4) e ao compressor.

**Comportamento dos ventiladores durante Oil Return:**
- **Estado 3 (Unit off):** O ventilador permanece **desligado** (Fan off), mesmo com a EXV aberta a 300 steps. Isso é intencional: o objetivo não é climatizar, mas apenas circular refrigerante para arrastar o óleo.
- **Estado 4 (Thermostat off):** O ventilador permanece **ligado** (Fan on), pois a unidade está nominalmente "ligada".

---

### 2.6 Fluxo de Refrigerante por Classe de Chassi

#### 8-16HP (Figures 2-3.1 e 2-3.2)
- **Cooling:** Circuito simples com 1 compressor. Fluxo unidirecional compressor → condensador → EXVA → campo → retorno.
- **Oil Return:** O compressor continua operando normalmente. As EXVs das unidades inativas abrem a 300 steps. O óleo retornado é retido no acumulador (11) e separado pelo oil separator (4) antes de retornar ao cárter.

#### 18-22HP (Figures 2-3.3 e 2-3.4)
- **Cooling:** 2 compressores em paralelo alimentam o mesmo oil separator e condensador. O fluxo se divide na descarga e se reúne antes do condensador.
- **Oil Return:** Idêntico ao 8-16HP em comportamento lógico, porém com maior vazão de refrigerante devido aos 2 compressores, o que torna o retorno de óleo mais eficiente em sistemas com tubulações mais longas.

#### 24-30HP (Figures 2-3.5 e 2-3.6)
- **Cooling:** 2 compressores + 2 acumuladores (11, 11). Cada compressor tem seu próprio acumulador de proteção. A válvula SV2 aparece posicionada entre os acumuladores.
- **Oil Return:** Com 2 acumuladores, o óleo retornado é distribuído entre ambos, garantindo proteção individual para cada compressor. O comportamento das EXVs internas (300 steps) é idêntico.

---

### 2.7 Cenários de Diagnóstico — Correlacionando Fluxo e Sintomas

#### Cenário A: "Algumas evaporadoras não resfriam"
**Verificação de fluxo:** Checar se as EXVs das unidades problemáticas estão em "Normal control" ou travadas em "Closed". Se a EXV está travada fechada, o refrigerante não chega à evaporadora. Possíveis causas: falha na bobina do motor de passo da EXV, erro de comunicação entre a placa da evaporadora e a condensadora, ou código de erro ativo bloqueando a EXV.

#### Cenário B: "Compressor apresenta ruído de batida após longo período de operação"
**Verificação de fluxo:** Suspeitar de falha no ciclo de Oil Return. Se a SV4 está defeituosa (Tópico 2.2) ou se as EXVs das unidades internas não estão abrindo a 300 steps durante o Oil Return, o óleo se acumula nas evaporadoras e não retorna ao compressor. Verificar: (a) operação da SV4, (b) abertura das EXVs durante Oil Return usando o menu de diagnóstico da placa controladora.

#### Cenário C: "Sistema entra em proteção por baixa pressão repetidamente"
**Verificação de fluxo:** Se múltiplas evaporadoras estão com EXVs fechadas (estados 3/4) e o sistema está forçando operação com poucas unidades ativas, a pressão de sucção pode cair abaixo do limite do pressostato (12). Verificar se o número de evaporadoras ativas é suficiente para manter a pressão de sucção dentro da faixa operacional.

---

## 3. TABELAS E PARÂMETROS TÉCNICOS

### Tabela Resumo — Estados das Unidades Internas durante Cooling vs. Oil Return

| Estado | Condição | Ventilador (Cooling) | EXV (Cooling) | Ventilador (Oil Return) | EXV (Oil Return) |
|--------|----------|---------------------|--------------|------------------------|-----------------|
| 1 | Unit ON / Thermostat ON | ON | Normal control | ON | Normal control |
| 2 | Unit ON / Thermostat ON | ON | Normal control | ON | Normal control |
| 3 | Unit OFF | OFF | **Closed** | OFF | **300 steps** |
| 4 | Unit ON / Thermostat OFF | ON | **Closed** | ON | **300 steps** |

### Tabela Resumo — Diagramas de Fluxo por Classe de Chassi

| Classe | HP | Cooling Operation | Oil Return Operation | Compressores | Acumuladores |
|--------|-----|-------------------|---------------------|-------------|-------------|
| A | 8-16 | Figure 2-3.1 | Figure 2-3.2 | 1 | 1 |
| B | 18-22 | Figure 2-3.3 | Figure 2-3.4 | 2 | 1 |
| C | 24-30 | Figure 2-3.5 | Figure 2-3.6 | 2 | 2 |

### Tabela de Referência — Abertura da EXV em Steps

| Condição | Abertura (Steps) | Modo | Função |
|----------|-----------------|------|--------|
| Fechada completamente | **0 steps** | Cooling — unidade off/thermostat off | Impede passagem de refrigerante |
| Abertura parcial (Oil Return) | **300 steps** | Oil Return — unidade off/thermostat off | Permite fluxo parcial para arrastar óleo |
| Controle normal | **Variável** (0-500+) | Cooling — unidade ativa | Modula conforme demanda de refrigeração |

---

## 4. INFOBOX DE CAMPO / AVISOS

> [!CAUTION]
> **REGRA CRÍTICA — NÃO INTERROMPA O CICLO DE OIL RETURN:**
> O sistema executa o Oil Return automaticamente em intervalos definidos pela placa controladora. Se o técnico desligar o sistema durante um ciclo de Oil Return (identificável pela abertura das EXVs a 300 steps em unidades inativas), o óleo que estava sendo retornado ficará retido na tubulação de campo. Desligamentos frequentes durante Oil Return podem levar ao acúmulo progressivo de óleo nas evaporadoras e, eventualmente, à falha por falta de lubrificação no compressor.

> [!WARNING]
> **DIAGNÓSTICO — "300 STEPS" NÃO É UM DEFEITO:**
> Se durante uma inspeção o técnico observa (via menu de diagnóstico da placa) que as EXVs de unidades desligadas estão com abertura de 300 steps, isso é **comportamento normal** durante o ciclo de Oil Return. NÃO tente "corrigir" forçando a EXV para 0 steps. O Oil Return é essencial para a longevidade do compressor.

> [!IMPORTANT]
> **PRINCÍPIO VRF — VOLUME DE REFRIGERANTE VARIÁVEL:**
> A diferença fundamental entre o TVR Pro CO e um sistema split convencional é que cada evaporadora controla **independentemente** seu fluxo de refrigerante via EXV. Em um sistema com 10 evaporadoras, se apenas 3 estão demandando refrigeração (estados 1/2), as outras 7 fecham suas EXVs (estados 3/4) e o compressor reduz automaticamente sua frequência (via inverter) para produzir apenas o volume necessário. Isso resulta em economia de energia de **30-50%** em comparação com sistemas de capacidade fixa.

> [!TIP]
> **VERIFICAÇÃO RÁPIDA EM CAMPO — TEMPERATURA DAS TUBULAÇÕES:**
> Para confirmar o estado do refrigerante sem instrumentos sofisticados:
> - **Tubulação de descarga (estado 1):** Deve estar **QUENTE** (60-100°C dependendo da carga) — se estiver morna, o compressor pode estar com válvulas danificadas.
> - **Tubulação de líquido (estado 2):** Deve estar **MORNA a QUENTE** (35-50°C) — se estiver fria, indica flash gas na linha de líquido (possível falta de refrigerante ou restrição).
> - **Tubulação de sucção (estado 3):** Deve estar **FRIA** com condensação superficial — se estiver gelada com gelo, indica superheat muito baixo e risco de liquid slugging.

---

**Podemos prosseguir para o Tópico 3.1?**
