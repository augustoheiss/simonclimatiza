# TÓPICO 5.2 — Módulo Inverter do Compressor, Módulo Fan e Diagramas de Fiação

---

## 1. NESTED SCHEMA METADATA

```
id_secao: "secao-5"
titulo_secao: "Componentes Elétricos e Diagramas de Fiação"
id_aula: "aula-5-2"
titulo_aula: "Módulo Inverter do Compressor (Portas, LEDs, Dial Switch S7), Módulo Fan (Portas, LEDs, SW1) e Diagramas de Fiação Completos 8-16HP / 18-30HP"
descricao_aula: "Estudo detalhado dos módulos de potência da unidade externa: Módulo Inverter do Compressor com 8 portas mapeadas (380V AC 3-fásico, saída UVW para compressor, barramento DC 485-645V), LEDs de diagnóstico (LED1 operação, LED2 erro), e dial switch S7 para endereçamento A/B. Módulo Fan com 11 portas mapeadas (18-22V DC, barramento DC 485-645V, conexão do motor DC), LEDs de diagnóstico e SW1 para endereçamento A/B. Diagramas de fiação completos para chassi 8-16HP (compressor+fan single) e 18-30HP (compressor+fan dual) com legenda de componentes e fluxo de energia."
```

---

## 2. CONTEÚDO TÉCNICO DA AULA

### 2.1 Módulo Inverter do Compressor — Portas (Section 3 / Table 5-3.1)

O módulo inverter do compressor é a placa de potência responsável por converter a alimentação trifásica 380V AC em tensão variável e frequência variável para controlar a velocidade do compressor.

#### Mapeamento de Portas (Table 5-3.1)

| Label | Port Code | Função | Tensão |
|-------|-----------|--------|--------|
| 1 | CN6\CN7\CN11 | Entrada de alimentação **3-fásica** para o módulo inverter | **380V AC** |
| 2 | CN12\CN13\CN14 | Saída de potência do inverter para o **compressor** (fases U, V, W) | / |
| 3 | CN20 | Saída de potência para o **fan module** | **18-22V DC** |
| 4 | CN2\CN3 | Porta de **controle** do módulo inverter | **220V AC** |
| 5 | LED1\LED2 | **LED1:** Indicador de operação / **LED2:** Indicador de erro | 0-3.3V DC (variável) |
| 6 | CN8\CN9 | Porta de **comunicação** com a placa principal (main board) | 0-5V DC (variável) |
| 7 | CN38 | Porta de alimentação do **fan module IPM** (Intelligent Power Module) | **485-645V DC** |
| 8 | CN1\CN5 | Conexão com o **reator** (reactor) | / |

**Destaque:** O barramento DC interno do módulo inverter opera na faixa de **485 a 645V DC** — esta é a tensão nos capacitores eletrolíticos grandes visíveis na foto da placa. Mesmo com o disjuntor desligado, esta tensão pode permanecer nos capacitores por vários minutos.

---

### 2.2 Layout do Módulo Inverter (Figure 5-3.2)

Componentes identificados na placa do módulo inverter:

| Componente | Localização |
|-----------|------------|
| **3-phase bridge rectifier power input** | Lado esquerdo central |
| **3-phase bridge rectifier power output** | Lado direito superior |
| **P_out** | Centro da placa |
| **LED1 / LED2** | Lado direito central |
| **Dial switch S7** | Lado direito, abaixo dos LEDs |
| **Connect to reactor** | Lado superior central |

---

### 2.3 LEDs do Módulo Inverter (Table 5-3.2)

| Indicador | Estado | Significado |
|-----------|--------|-------------|
| **LED1** | **Aceso continuamente (ON)** | Módulo inverter operando normalmente; compressor em funcionamento |
| **LED1** | **Piscando (flashing)** | Erro no módulo inverter detectado |
| **LED2** | **Aceso continuamente (ON)** | Erro no módulo inverter ocorreu |
| **LED2** | **Apagado (OFF)** | Nenhum erro — operação normal |

**Diagnóstico rápido:**
- LED1 ON + LED2 OFF = ✅ **Normal**
- LED1 flashing + LED2 ON = ❌ **Erro no módulo inverter** → Verificar código de erro no display (xH4, PL, etc.)

**Nota do manual:** Se ocorrer erro no módulo inverter, consultar Part 6 "Xh4 Troubleshooting" para procedimento completo.

---

### 2.4 Dial Switch S7 — Endereçamento do Módulo Inverter (Section 3.2.2)

O dial switch S7 define qual compressor o módulo inverter controla:

| Posição S7 | Endereço | Compressor |
|-----------|---------|-----------|
| **0** (default — pin 1 OFF) | Módulo A | **Compressor inverter A (BP1)** |
| **1** (pin 1 ON) | Módulo B | **Compressor inverter B (BP2)** |

**Regra:** Em unidades com 2 compressores (18-30HP), o módulo à esquerda (A) controla BP1 e o módulo à direita (B) controla BP2. A localização A/B refere-se ao diagrama de fiação. Se os módulos forem trocados durante manutenção, o S7 deve ser configurado de acordo com a **posição física**, não com o módulo original.

---

### 2.5 Módulo Fan — Portas (Section 4 / Table 5-4.1)

O módulo fan é a placa de potência que controla a velocidade dos ventiladores DC (DC fan motors) da unidade externa.

#### Mapeamento de Portas (Table 5-4.1)

| Label | Port Code | Função | Tensão |
|-------|-----------|--------|--------|
| 1 | CN6 | Alimentação do **módulo fan** (controle) | **18-22V DC** |
| 2 | CN5 | Alimentação do **módulo fan** (controle) | **18-22V DC** |
| 3 | CN2 | Porta de **atualização de firmware** (program upgrade) | / |
| 4 | CN1 | Porta de **comunicação** com a placa principal | 0-5V DC (variável) |
| 5 | CN4 | Porta de **comunicação** com a placa principal | 0-5V DC (variável) |
| 6 | CN7 | Alimentação do **fan module IPM** — polo **"N"** | 485-645V (entre P e N) |
| 7 | CN8 | Alimentação do **fan module IPM** — polo **"P"** | 485-645V (entre P e N) |
| 8 | CN3 | Conexão do **motor do ventilador** (fan motor) | / |
| 9 | SW1 | **Dial switch** de endereço do módulo fan | — |
| 10 | LED2 | Indicador de **erro** do módulo fan | / |
| 11 | LED1 | Indicador de **operação** do módulo fan | / |

**Destaque:** O módulo fan recebe alimentação DC de alta tensão (**485-645V**) diretamente do barramento DC do módulo inverter via CN7/CN8. Isto significa que a mesma precaução de descarga de capacitores se aplica ao módulo fan.

---

### 2.6 Dial Switch SW1 — Endereçamento do Módulo Fan (Note 1)

| Posição SW1 | Endereço | Ventilador |
|------------|---------|-----------|
| **0** (default — pin 1 OFF) | Módulo A | **Fan A (FAN1)** |
| **1** (pin 1 ON) | Módulo B | **Fan B (FAN2)** |

**Mesma lógica do S7 do módulo inverter:** Posição A/B refere-se à localização no diagrama de fiação.

---

### 2.7 Diagramas de Fiação (Section 5)

#### 8-16HP — Diagrama de Fiação (Figure 5-5.1)

**PCBA Layout (Disposição das placas):**

```
┌─────────────────────────────────────────────┐
│ Top layer:  Main board                      │
│ Bottom layer: Compressor module A           │
├─────────────────────────────────────────────┤
│ AC filter board                             │
├─────────────────────────────────────────────┤
│ XT1 (terminal block)                        │
│ DC fan module A                             │
└─────────────────────────────────────────────┘
```

**Legenda de componentes (Wiring Diagram 8-16HP):**

| Código | Nome | Descrição |
|--------|------|-----------|
| COMP A | Inverter compressor A | Compressor inverter A (BP1) |
| EEVA | Electronic expansion valve | Válvula de expansão eletrônica A |
| FAN A | DC Fan | Ventilador DC A |
| H-PRO | High/Low pressure ON/OFF switch | Pressostato de alta/baixa pressão |
| L-PRO | High pressure sensor | Sensor de alta pressão |
| RA, A | Reactor | Reator A |
| SV2/SV4/SV7 | Solenoid valve | Válvulas solenoides |
| T3 | Main exchanger pipe temperature sensor | Sensor de temp. do trocador de calor |
| T4 | Outdoor ambient temperature sensor | Sensor de temp. ambiente |
| TFC1 | Discharge temperature sensor | Sensor de temp. de descarga |
| TF1 | Inverter module heatsink temperature sensor | Sensor de temp. do heatsink |
| XT1 | Terminal block | Bloco terminal |
| HEATA/HEATB | Crankcase heater | Aquecedor de cárter |
| Alarm | Alarm output | Saída de alarme |

**Conexões principais (8-16HP):**
- **Power in** → AC filter board → Main board (CN30)
- Main board → Compressor module A → COMP A (motor)
- Main board → DC fan module A → FAN A (motor)
- Main board → EEVA, SV2, SV4, SV7 (controle)
- Main board → Sensores (T3, T4, TFC1, TF1, H-PRO, L-PRO)
- Main board → Outdoor unit communication (para outras ODUs)
- Main board → Centralized controller connection box

#### 18-30HP — Diagrama de Fiação (Figure 5-5.2)

**PCBA Layout (Disposição das placas):**

```
┌─────────────────────────────────────────────┐
│ Top layer:  Main board                      │
│ Bottom layer: Compressor module A           │
│              Compressor module B            │
├─────────────────────────────────────────────┤
│ AC filter board                             │
├─────────────────────────────────────────────┤
│ XT1 (terminal block)                        │
│ DC fan module A     DC fan module B         │
│ EVA (DC fan module A)  EVB (DC fan module B)│
└─────────────────────────────────────────────┘
```

**Diferenças em relação ao 8-16HP:**

| Componente | 8-16HP | 18-30HP |
|-----------|--------|---------|
| Compressor modules | **1** (A) | **2** (A + B) |
| Fan modules | **1** (A) | **2** (A + B) |
| Reactors | **1** (RA, A) | **2** (RA, A + RA, B) |
| Compressors | **1** (COMP A) | **2** (COMP A + COMP B) |
| Fan motors | **1** (FAN A) | **2** (FAN A + FAN B) |
| Temperature sensors TFC | **1** (TFC1) | **2** (TFC1 + TFC2) — descarga de cada compressor |
| Temperature sensors TF | **1** (TF1) | **2** (TF1 + TF2) — heatsink de cada inverter |

**Nota do diagrama 18-30HP:** "Cable of COMP B has one more belt than COMP A" — o cabo do compressor B possui um belt (faixa/marca) adicional para diferenciação visual.

**Componentes adicionais no 18-30HP:**

| Código | Nome |
|--------|------|
| COMP A, COMP B | Inverter compressor A/B |
| FAN A, B | DC Fan A/B |
| TFC1, TFC2 | Discharge temp. sensor 1/2 |
| TF1/TF2 | Inverter heatsink temp. sensor 1/2 |
| USB | USB upgrade port (presente apenas no 18-30HP) |

---

## 3. TABELAS E PARÂMETROS TÉCNICOS

### Tabela Resumo — Tensões Críticas nos Módulos

| Ponto | Tensão | Tipo | Perigo |
|-------|--------|------|--------|
| CN6/CN7/CN11 (Inverter input) | **380V AC** | Trifásico | ⚡ Alta tensão |
| Barramento DC (capacitores) | **485-645V DC** | Contínuo | ⚡⚡ **Muito perigosa** |
| CN7/CN8 (Fan module IPM) | **485-645V DC** | P e N | ⚡⚡ **Muito perigosa** |
| CN2/CN3 (Inverter control) | **220V AC** | Monofásico | ⚡ Alta tensão |
| CN20 (Fan power from inverter) | **18-22V DC** | Baixa tensão | ✅ Seguro |
| CN8/CN9 (Communication) | **0-5V DC** | Sinal | ✅ Seguro |
| LED1/LED2 | **0-3.3V DC** | Indicação | ✅ Seguro |

### Tabela — Endereçamento dos Módulos

| Módulo | Switch | Posição A | Posição B |
|--------|--------|-----------|-----------|
| Compressor Inverter | **S7** | 0 (default) | 1 |
| Fan Module | **SW1** | 0 (default) | 1 |

### Tabela — Diagnóstico por LEDs (Todos os Módulos)

| Módulo | LED1 (Operação) | LED2 (Erro) | Status |
|--------|:---------------:|:-----------:|--------|
| Inverter | ON contínuo | OFF | ✅ Normal |
| Inverter | Flashing | ON contínuo | ❌ Erro |
| Fan | ON contínuo | OFF | ✅ Normal |
| Fan | Flashing | ON contínuo | ❌ Erro |

---

## 4. INFOBOX DE CAMPO / AVISOS

> [!CAUTION]
> **BARRAMENTO DC — 485 A 645V DC NOS CAPACITORES:**
> Tanto o módulo inverter quanto o módulo fan operam com tensão DC interna de **485 a 645V DC** armazenada nos capacitores eletrolíticos. Após desligar o disjuntor, **aguardar MÍNIMO 5 minutos** para descarga antes de tocar em qualquer componente da camada inferior da caixa de controle. Verificar com multímetro DC entre P e N antes de iniciar trabalho. Técnicos já sofreram choque grave por não aguardar a descarga.

> [!WARNING]
> **S7 E SW1 — CONFIGURAR CONFORME A POSIÇÃO FÍSICA, NÃO O MÓDULO ORIGINAL:**
> Se um módulo inverter ou fan for substituído durante manutenção, o dial switch (S7 ou SW1) deve ser configurado de acordo com a **posição física** onde a placa será instalada (A=esquerda, B=direita conforme o diagrama de fiação), não com a configuração do módulo antigo. Instalar um módulo com endereço incorreto pode causar conflito de comunicação e operação errática.

> [!IMPORTANT]
> **LED1 FLASHING + LED2 ON = FALHA NO MÓDULO — VERIFICAR CÓDIGO NO DISPLAY:**
> Quando os LEDs do módulo inverter indicam erro (LED1 piscando, LED2 aceso), o código de erro correspondente aparece no display digital da placa principal (DSP2). Os códigos mais comuns são: **xH4** (sobrecorrente), **PL** (overtemperature do heatsink), **C7** (falha repetida do inverter). Consultar a Part 6 do manual para procedimento de troubleshooting específico de cada código.

> [!TIP]
> **CABO DO COMP B TEM UMA MARCA A MAIS QUE O COMP A (18-30HP):**
> Na instalação ou manutenção de unidades 18-30HP, o cabo de alimentação do Compressor B possui **um belt (marca/faixa) adicional** em comparação com o Compressor A. Isso facilita a identificação visual durante a reconexão. Inverter os cabos A e B causa conflito de fase e pode danificar o compressor.

---

**Parte 5 — COMPONENTES ELÉTRICOS E DIAGRAMAS está completa! Podemos prosseguir para a Parte 6 (Diagnóstico e Troubleshooting)?**
