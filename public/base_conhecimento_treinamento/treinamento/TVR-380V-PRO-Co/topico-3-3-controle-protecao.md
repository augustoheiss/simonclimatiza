# TÓPICO 3.3 — Controle de Proteção: Pressão, Temperatura e Corrente

---

## 1. NESTED SCHEMA METADATA

```
id_secao: "secao-3"
titulo_secao: "Controle"
id_aula: "aula-3-3"
titulo_aula: "Controle de Proteção: Alta Pressão (P1), Baixa Pressão (P2/H5), Temperatura de Descarga (P4/H6) e Proteção do Módulo Inverter (xH4/PL/C7)"
descricao_aula: "Estudo completo dos 4 subsistemas de proteção do TVR Pro CO Series com limiares exatos de atuação, códigos de erro primários e secundários (escalation), lógica de recuperação automática vs. reinício manual, e limites de corrente por modelo de compressor. Inclui fluxogramas de decisão para cada proteção, histerese de recuperação, e contadores de repetição que escalonam para erros críticos (H5, H6, C7)."
```

---

## 2. CONTEÚDO TÉCNICO DA AULA

### 2.1 Visão Geral — A Camada de Proteção

O bloco de Protection Control é a **rede de segurança** do sistema TVR Pro CO. Ele monitora continuamente 4 grandezas físicas e intervém automaticamente quando qualquer uma ultrapassa seus limites. O técnico deve entender dois conceitos-chave:

1. **Erro primário (auto-recuperável):** O sistema detecta a condição anormal, atua (reduz capacidade ou desliga o compressor), e **retorna automaticamente** à operação normal quando a condição normaliza. Exemplos: P1, P2, P4, PL.

2. **Erro secundário (escalation — reinício manual):** Se o erro primário ocorre **repetidamente** dentro de uma janela de tempo, o sistema interpreta como falha persistente e gera um **erro crítico** que exige **reinício manual** (desligar/ligar o disjuntor ou reset na placa). Exemplos: H5, H6, C7.

---

### 2.2 High Pressure Protection — Proteção contra Alta Pressão (Seção 5.1)

Protege o sistema contra pressão anormalmente alta no lado de descarga (alta pressão). Causas típicas: condensador sujo, ventilador travado, excesso de refrigerante, temperatura ambiente extremamente alta.

#### Fluxograma de Decisão (Figure 3-5.1):

```
              ┌─────────────────────┐
              │  Normal Operation   │
              └──────────┬──────────┘
                         │
            ┌────────────┴───────────┐
            ▼                        ▼
     Pc > 4.4 MPa            Pc < 3.2 MPa
            │                        │
            ▼                        │
  ┌──────────────────────┐           │
  │ HIGH PRESSURE         │           │
  │ PROTECTION            │◄──────────┘
  │ Error code P1         │   (Recuperação automática)
  │ displayed             │
  └──────────────────────┘
```

| Parâmetro | Valor |
|-----------|-------|
| **Limiar de atuação** | Pc > **4.4 MPa** |
| **Código de erro** | **P1** |
| **Ação** | Sistema entra em proteção — compressores param |
| **Limiar de recuperação** | Pc < **3.2 MPa** |
| **Histerese** | **1.2 MPa** (4.4 - 3.2) |
| **Tipo** | Auto-recuperável (volta a operar quando Pc < 3.2 MPa) |
| **Escalation** | Informação não fornecida no manual para repetição de P1 |

**Nota:** Pc = Pressão de descarga (discharge pressure), medida pelo sensor de alta pressão (item 3).

---

### 2.3 Low Pressure Protection — Proteção contra Baixa Pressão (Seção 5.2)

Protege o sistema contra pressão anormalmente baixa no lado de sucção (baixa pressão). Causas típicas: falta de refrigerante, EXV travada fechada, filtro de linha bloqueado, válvula de serviço parcialmente fechada.

#### Fluxograma de Decisão (Figure 3-5.2):

```
              ┌─────────────────────┐
              │  Normal Operation   │
              └──────────┬──────────┘
                         │
            ┌────────────┴───────────┐
            ▼                        ▼
     Pe < 0.05 MPa           Pe > 0.15 MPa
            │                        │
            ▼                        │
  ┌──────────────────────┐           │
  │ LOW PRESSURE          │           │
  │ PROTECTION            │◄──────────┘
  │ Error code P2         │   (Recuperação automática)
  │ displayed             │
  └──────────┬───────────┘
             │
             ▼
    P2 ocorre 3× em 60 min?
        │           │
       SIM         NÃO
        │           │
        ▼           └──→ Continua monitorando
  ┌──────────────────────┐
  │ ERROR H5             │
  │ Manual restart       │
  │ required             │
  └──────────────────────┘
```

| Parâmetro | Valor |
|-----------|-------|
| **Limiar de atuação** | Pe < **0.05 MPa** |
| **Código de erro primário** | **P2** |
| **Ação** | Compressores param |
| **Limiar de recuperação** | Pe > **0.15 MPa** |
| **Histerese** | **0.10 MPa** (0.15 - 0.05) |
| **Tipo** | Auto-recuperável (P2) → Escalation para **H5** |
| **Condição de escalation** | P2 ocorre **3 vezes em 60 minutos** |
| **Código de erro crítico** | **H5** |
| **Ação H5** | **Reinício manual obrigatório** — o sistema NÃO retorna automaticamente |

**Nota:** Pe = Pressão de sucção (suction pressure), medida pelo low pressure switch (item 12).

---

### 2.4 Discharge Temperature Protection — Proteção por Temperatura de Descarga (Seção 5.3)

Protege os compressores contra superaquecimento do gás de descarga. Causas típicas: falta de refrigerante, EXV com defeito, SV2 com defeito, condensador extremamente sujo.

#### Gráfico de Atuação (Figure 3-5.3):

O manual apresenta um gráfico que mostra a interação entre a temperatura de descarga, a SV2 e o desligamento do compressor:

```
Temperatura de Descarga (°C)
     ▲
120°C ─ ─ ─ ─ ─ ─ ┬───── Compressor OFF ─────┐
                   │                            │
100°C ─ ─ ─ ─ ─ ─ ┤ SV2 ABRE (injeção líquido) │
                   │                            │
 90°C ─ ─ ─ ─ ─ ─ ┤───── SV2 FECHA ────────────┤── 90°C (recuperação)
                   │                            │
                   └────────────────────────────┘
                              Tempo →
```

**Sequência de eventos:**
1. Temperatura sobe → atinge **100°C** → **SV2 abre** (injeta líquido para resfriar)
2. Se a injeção de líquido é eficaz → temperatura cai abaixo de **90°C** → **SV2 fecha** → operação normal
3. Se a injeção de líquido NÃO é suficiente → temperatura continua subindo → atinge **120°C** → **Compressor desliga** → Erro **P4**
4. Compressor desligado → temperatura cai naturalmente → abaixo de **90°C** → compressor pode reiniciar

| Parâmetro | Valor |
|-----------|-------|
| **Limiar de abertura da SV2** | Temp. descarga > **100°C** |
| **Limiar de fechamento da SV2** | Temp. descarga < **90°C** |
| **Limiar de desligamento do compressor** | Temp. descarga > **120°C** |
| **Código de erro primário** | **P4** |
| **Ação P4** | Todos os compressores param |
| **Limiar de recuperação** | Temp. descarga < **90°C** |
| **Condição de escalation** | P4 ocorre **3 vezes em 100 minutos** |
| **Código de erro crítico** | **H6** |
| **Ação H6** | **Reinício manual obrigatório** |

**Proteção em duas camadas:**
- **Camada 1 (SV2 a 100°C):** Tentativa de correção automática por injeção de líquido
- **Camada 2 (Compressor OFF a 120°C):** Desligamento de emergência quando a SV2 não foi suficiente

---

### 2.5 Compressor and Inverter Module Protection — Proteção por Corrente e Temperatura do Módulo (Seção 5.4)

#### 2.5.1 Proteção por Corrente do Compressor (Figure 3-5.4)

Monitora a corrente elétrica do compressor e desliga se ultrapassar o limite máximo do modelo.

```
              ┌─────────────────────┐
              │  Normal Operation   │
              └──────────┬──────────┘
                         │
            ┌────────────┴────────────┐
            ▼                         ▼
  Current ≥ Currentmax      Current < Currentmax
            │                         │
            ▼                         │
  ┌───────────────────────────┐       │
  │ COMPRESSOR CURRENT        │       │
  │ PROTECTION                │◄──────┘
  │ Error code xH4(xL0)      │  (Recuperação automática)
  │ displayed                 │
  └───────────────────────────┘
```

**Limites de Corrente por Modelo de Compressor:**

| Modelo do Compressor | Current_max (A) |
|---------------------|:---------------:|
| **LNB53** | **48.5 A** |
| **LNB65** | **59 A** |

| Parâmetro | Valor |
|-----------|-------|
| **Código de erro** | **xH4(xL0)** |
| **Ação** | Compressor para — auto-recuperável quando corrente normaliza |

**Nota sobre o código xH4(xL0):** O "x" no código indica o número do compressor ou módulo afetado.

#### 2.5.2 Proteção por Temperatura do Módulo Inverter (Figure 3-5.5)

O módulo inverter (que controla a frequência do compressor) possui um **dissipador de calor (heat sink)** cuja temperatura (Tf) é monitorada continuamente.

**Sequência de proteção em 3 níveis:**

```
Temperatura do Heat Sink (Tf)
     ▲
 79°C ─ ─ ─ ─ ─ ─ ┬───── PROTEÇÃO PL ────────────┐
                   │     (Compressor para)          │
 74°C ─ ─ ─ ─ ─ ─ ┤ Saída do compressor REDUZIDA   │
                   │                                │
 71°C ─ ─ ─ ─ ─ ─ ┤───── Recuperação (output normal)│
                   │                                │
 65°C ─ ─ ─ ─ ─ ─ ┤───── Recuperação total ────────┘
                   │
                   └────────────────────────────────
                              Tempo →
```

| Nível | Condição | Ação | Recuperação |
|-------|----------|------|-------------|
| **Nível 1** | Tf > **74°C** | **Saída do compressor reduzida** (frequência diminui) | Tf < **71°C** → operação normal |
| **Nível 2** | Tf > **79°C** | **Compressor para** — Erro **PL** | Tf < **65°C** → pode reiniciar |
| **Nível 3 (Escalation)** | PL ocorre **3 vezes em 100 minutos** | Erro crítico **C7** — **Reinício manual obrigatório** | — |

| Parâmetro | Valor |
|-----------|-------|
| **Nível 1 — Redução** | Tf > **74°C** (reduz output) |
| **Nível 1 — Recuperação** | Tf < **71°C** (operação normal) |
| **Histerese Nível 1** | **3°C** |
| **Nível 2 — Proteção PL** | Tf > **79°C** (compressor para) |
| **Nível 2 — Recuperação** | Tf < **65°C** (pode reiniciar) |
| **Histerese Nível 2** | **14°C** (79 - 65) |
| **Escalation C7** | PL 3× em **100 minutos** |

**Nota:** Tf = Temperatura do heat sink (dissipador de calor) do módulo inverter.

---

## 3. TABELAS E PARÂMETROS TÉCNICOS

### Tabela Mestra — Todos os Códigos de Proteção

| Código | Tipo | Grandeza | Limiar de Atuação | Limiar de Recuperação | Escalation |
|--------|------|----------|-------------------|-----------------------|------------|
| **P1** | Alta Pressão | Pc | > **4.4 MPa** | < **3.2 MPa** | — |
| **P2** | Baixa Pressão | Pe | < **0.05 MPa** | > **0.15 MPa** | → **H5** (3× em 60 min) |
| **P4** | Temp. Descarga | Td | > **120°C** | < **90°C** | → **H6** (3× em 100 min) |
| **xH4(xL0)** | Sobrecorrente | I | ≥ Current_max | < Current_max | — |
| **PL** | Temp. Inverter | Tf | > **79°C** | < **65°C** | → **C7** (3× em 100 min) |

### Tabela — Erros Críticos que Exigem Reinício Manual

| Código Crítico | Erro Primário | Condição de Escalation | Janela de Tempo | Ação Necessária |
|---------------|---------------|----------------------|----------------|-----------------|
| **H5** | P2 (Low pressure) | 3 ocorrências | **60 minutos** | Reinício manual (reset/disjuntor) |
| **H6** | P4 (Discharge temp.) | 3 ocorrências | **100 minutos** | Reinício manual |
| **C7** | PL (Inverter temp.) | 3 ocorrências | **100 minutos** | Reinício manual |

### Tabela — Interação SV2 × Temperatura de Descarga

| Faixa de Temperatura | SV2 | Compressor | Status |
|---------------------|-----|-----------|--------|
| < 90°C | **Fechada** | Operando | Normal |
| 90°C - 100°C | **Fechada** | Operando | Normal (zona de atenção) |
| 100°C - 120°C | **Aberta** (injeção) | Operando | Proteção Camada 1 ativa |
| > 120°C | **Aberta** | **Desligado** (P4) | Proteção Camada 2 ativa |

---

## 4. INFOBOX DE CAMPO / AVISOS

> [!CAUTION]
> **ERROS H5, H6 E C7 EXIGEM REINÍCIO MANUAL — NÃO SE RESOLVEM SOZINHOS:**
> Os erros críticos H5 (baixa pressão repetida), H6 (superaquecimento repetido) e C7 (inverter superaquecido repetido) são "latching errors" — o sistema trava e **NÃO retorna automaticamente** à operação normal. É necessário desligar o disjuntor principal, aguardar 30 segundos, e religar. Antes de fazer o reset, o técnico DEVE investigar a causa raiz, pois o reset sem correção resultará no mesmo erro novamente.

> [!WARNING]
> **DIAGNÓSTICO P2 (BAIXA PRESSÃO) — VERIFICAR ANTES DO RESET:**
> O erro P2 (Pe < 0.05 MPa) frequentemente indica **falta de refrigerante**. Antes de fazer reset ou tentar religar o sistema, o técnico deve: (1) Conectar o manifold nas stop valves (9/10), (2) Verificar a pressão de sucção real, (3) Se a pressão é zero ou muito baixa → verificar vazamento antes de recarregar. Fazer reset repetido sem verificar vazamento pode causar operação do compressor sem refrigerante, resultando em dano irreversível.

> [!IMPORTANT]
> **PROTEÇÃO EM DUAS CAMADAS — SV2 (100°C) + DESLIGAMENTO (120°C):**
> A proteção por temperatura de descarga tem **duas camadas**: a SV2 atua primeiro (a 100°C) tentando corrigir o problema automaticamente. Se não funcionar, o compressor desliga a 120°C. Se o técnico observa que a SV2 abre mas a temperatura não cai, a SV2 está funcionando corretamente — o problema é **a montante** (falta de refrigerante, condensador sujo, ventilador parado). Trocar a SV2 neste caso não resolverá o problema.

> [!TIP]
> **CORRENTE MÁXIMA — IDENTIFICAR O MODELO DO COMPRESSOR:**
> O código de erro xH4(xL0) indica sobrecorrente. Para verificar se o compressor está realmente em sobrecorrente, o técnico precisa saber o modelo: **LNB53** (limite 48.5A) ou **LNB65** (limite 59A). O modelo está na etiqueta do compressor dentro do gabinete. Se a corrente medida com alicate amperímetro está **próxima mas abaixo** do limite, o sensor de corrente da placa pode estar descalibrado.

---

**Podemos prosseguir para o Tópico 3.4?**
