# TÓPICO 6.1 — Diagnóstico: Tabela de Códigos de Erro e Troubleshooting de Comunicação e Sensores

---

## 1. NESTED SCHEMA METADATA

```
id_secao: "secao-6"
titulo_secao: "Diagnóstico e Troubleshooting"
id_aula: "aula-6-1"
titulo_aula: "Tabela Completa de Códigos de Erro, Troubleshooting de Erros de Comunicação (E0, E2) e Troubleshooting de Erros de Sensor e Alimentação (E4, E5)"
descricao_aula: "Referência completa dos 37 códigos de erro e proteção do TVR Pro CO Series com descrição, local de exibição e necessidade de reinício manual. Notação especial: 'x' como placeholder do sistema compressor (1=A, 2=B) e 'y' como placeholder do endereço slave. Procedimentos detalhados de troubleshooting com fluxogramas de decisão para os erros de comunicação mais frequentes (E0 entre ODUs, E2 entre IDU-Master) e erros de sensor/alimentação (E4 sensor T3/T4, E5 tensão anormal). Inclui valores de referência: resistência PQ=120Ω para comunicação, limite de comprimento 1200m, e thresholds de tensão (<165V trigger, >180V recover)."
```

---

## 2. CONTEÚDO TÉCNICO DA AULA

### 2.1 Tabela Completa de Códigos de Erro (Table 6-1.1)

#### Notas sobre a Notação dos Códigos

| Prefixo | Significado |
|---------|-----------|
| **x** | Placeholder para o **sistema compressor**: x=1 → Compressor A; x=2 → Compressor B |
| **y** | Placeholder para o **endereço da unidade slave**: y=1 ou 2 |
| Sem prefixo | Código aplicável ao sistema como um todo |

**Exemplo:** "xH4" significa **1H4** (proteção do módulo inverter A) ou **2H4** (proteção do módulo inverter B).

---

#### Categoria 1 — Erros de Comunicação

| Código | Descrição | Exibido em | Restart Manual |
|--------|-----------|-----------|:--------------:|
| **E0** | Erro de comunicação **entre unidades externas** (ODU-ODU) | Apenas na **slave** com erro | Não |
| **E2** | Erro de comunicação entre **indoor e master** (IDU-ODU) | Apenas no **master** | Não |
| **E8** | Erro de **endereço da unidade externa** | Na unidade com erro | Sim |
| **xE9** | Erro de **EEPROM mismatch** | Na unidade com erro | Sim |
| **xH0** | Erro de comunicação entre **main control chip e inverter driver chip** | Na unidade com erro | Não |
| **H2** | Número de unidades slave detectado pelo master **diminuiu** | Apenas no **master** | Não |
| **H3** | Número de unidades slave detectado pelo master **aumentou** | Apenas no **master** | Não |
| **H7** | Número de IDUs detectado pelo master **difere** do configurado na PCB | Apenas no **master** | Não |
| **yHd** | **Slave unit malfunction** (mau funcionamento da unidade slave) | Apenas no **master** | Não |

#### Categoria 2 — Erros de Sensor e Alimentação

| Código | Descrição | Exibido em | Restart Manual |
|--------|-----------|-----------|:--------------:|
| **E4** | Erro do sensor de **temperatura T3** (trocador) ou **T4** (ambiente outdoor) | Na unidade com erro | Não |
| **E5** | **Tensão de alimentação anormal** | Na unidade com erro | Não |
| **E7** | Erro do sensor de **temperatura de topo do compressor** ou **tubo de descarga** (T7C1/T7C2) | Na unidade com erro | Sim |
| **H8** | Erro do sensor de **alta pressão** | Na unidade com erro | Não |
| **XF6** | Erro de conexão da **válvula de expansão eletrônica** (EXV) | Na unidade com erro | Sim |

#### Categoria 3 — Erros de Módulo Inverter e Potência

| Código | Descrição | Exibido em | Restart Manual |
|--------|-----------|-----------|:--------------:|
| **xF1** | Erro de **tensão do barramento DC** | Na unidade com erro | Não |
| **xH4** | **Proteção do módulo inverter** | Na unidade com erro | Sim |
| **PL** | Proteção de **temperatura do módulo inverter** (overtemperature) | Na unidade com erro | Não |
| **PP** | Proteção de **superaquecimento de descarga insuficiente** | Na unidade com erro | Não |
| **xL0** | **Proteção do módulo inverter** (genérica) | Na unidade com erro | Sim |
| **xL1** | Proteção de **tensão baixa do barramento DC** | Na unidade com erro | Sim |
| **xL2** | Proteção de **tensão alta do barramento DC** | Na unidade com erro | Sim |
| **xL4** | **Erro MCE** | Na unidade com erro | Sim |
| **xL5** | Proteção de **velocidade zero** do compressor | Na unidade com erro | Sim |
| **xL7** | **Erro de sequência de fase** | Na unidade com erro | Sim |
| **xL8** | Variação de frequência do compressor > **15Hz em 1 segundo** | Na unidade com erro | Sim |
| **xL9** | Frequência real difere do target por > **15Hz** | Na unidade com erro | Sim |
| **C7** | Proteção PL aparece **3 vezes em 100 minutos** | Na unidade com erro | Sim |
| **xP9** | Proteção P9 aparece **10 vezes em 120 minutos** | Na unidade com erro | Sim |

#### Categoria 4 — Proteções de Pressão e Temperatura

| Código | Descrição | Exibido em | Restart Manual |
|--------|-----------|-----------|:--------------:|
| **P1** | Proteção de **alta pressão** da tubulação de descarga | Na unidade com erro | Não |
| **P2** | Proteção de **baixa pressão** da tubulação de sucção | Na unidade com erro | Não |
| **P4** | Proteção de **temperatura de descarga** | Na unidade com erro | Não |
| **P5** | Proteção de **temperatura do trocador de calor** outdoor | Na unidade com erro | Não |
| **xP9** | Proteção do **fan module** | Na unidade com erro | Não |
| **H5** | Proteção P2 aparece **3 vezes em 60 minutos** | Na unidade com erro | Sim |
| **H6** | Proteção P4 aparece **3 vezes em 100 minutos** | Na unidade com erro | Sim |
| **xH9** | Proteção P9 aparece **10 vezes em 120 minutos** | Na unidade com erro | Sim |

---

### 2.2 Troubleshooting: E0 — Erro de Comunicação entre Unidades Externas

#### Descrição

- Erro de comunicação entre ODUs (unidades externas).
- **Todas as unidades param** de funcionar.
- Código exibido **apenas na slave unit** com o erro.

#### Trigger / Recover

| Condição | Valor |
|---------|-------|
| **Trigger** | Slave não recebe sinal do master por **60 segundos** |
| **Recover** | Slave volta a receber sinal do master |
| **Reset** | Automático |

#### Causas Possíveis

1. Configuração incorreta do endereço da unidade outdoor (ENC1)
2. Fios de comunicação entre ODUs não conectados corretamente
3. Fiação solta dentro da caixa de controle elétrico
4. Main PCB ou bloco terminal de comunicação danificado

#### Flowchart de Troubleshooting (E0)

```
E0
 │
 ├─ Endereços ENC1 configurados incorretamente? ─── Sim ──→ Corrigir endereços (Master=0, Slave1=1, Slave2=2)
 │   │
 │   Não
 │   │
 ├─ Fios de comunicação entre ODUs não conectados? ─── Sim ──→ Reconectar usando cabo blindado 3 vias
 │   │                                                          (H1→H1, polaridade correta)
 │   Não
 │   │
 ├─ Fios soltos entre Main PCB e bloco terminal? ─── Sim ──→ Reconectar os fios firmemente
 │   │
 │   Não
 │   │
 ├─ Substituir Main PCB resolve? ─── Sim ──→ PCB danificada — manter nova
 │   │
 │   Não
 │   │
 └─ Substituir bloco terminal de comunicação da caixa de controle
```

> **Referência de medição:** Resistência entre P e Q = **120Ω** | Entre P e E = ∞ (infinito) | Entre Q e E = ∞ (infinito).

---

### 2.3 Troubleshooting: E2 — Erro de Comunicação Indoor-Master

#### Descrição

- Erro de comunicação entre unidades indoor (IDU) e unidade master (ODU).
- **Todas as unidades param** de funcionar.
- Código exibido **apenas no master**.

#### Trigger / Recover

| Condição | Valor |
|---------|-------|
| **Trigger** | IDUs e ODUs sem comunicação por **2 minutos** após 20 min de energização |
| **Recover** | Comunicação restabelecida |
| **Reset** | Automático |

#### Causas Possíveis

1. Fios de comunicação entre IDU e ODU não conectados corretamente
2. Alimentação da IDU anormal
3. Fiação solta dentro da caixa de controle elétrico
4. Interferência de fios de alta tensão (220V ou mais) ou radiação eletromagnética
5. Fio de comunicação longo demais
6. Main PCB ou bloco terminal de comunicação danificado

#### Flowchart de Troubleshooting (E2)

```
E2
 │
 ├─ Fios P Q E em curto ou desconectados? ─── Sim ──→ Reconectar fios de comunicação
 │   │
 │   Não
 │   │
 ├─ Fios P Q E NÃO estão em daisy chain? ─── Sim ──→ Conectar em daisy chain (cascata)
 │   │
 │   Não
 │   │
 ├─ Alimentação da IDU anormal? ─── Sim ──→ Normalizar alimentação da IDU
 │   │
 │   Não
 │   │
 ├─ Fios soltos entre Main PCB e terminal? ─── Sim ──→ Reconectar firmemente
 │   │
 │   Não
 │   │
 ├─ Interferência de fios de alta tensão (220V+)? ─── Sim ──→ Separar fios de comunicação dos de alta tensão
 │   │
 │   Não
 │   │
 ├─ Próximo a fonte de radiação eletromagnética ─── Sim ──→ Remover fonte ou adicionar blindagem
 │   │ (transformador, lâmpada fluorescente forte)?           aos fios de comunicação
 │   Não
 │   │
 ├─ Comprimento do fio de comunicação > 1200m? ─── Sim ──→ Reduzir para < 1200m ou reforçar sinal
 │   │
 │   Não
 │   │
 ├─ Substituir Main PCB resolve? ─── Sim ──→ PCB danificada
 │   │
 │   Não
 │   │
 └─ Substituir bloco terminal de comunicação
```

---

### 2.4 Troubleshooting: E4 — Erro de Sensor de Temperatura (T3/T4)

#### Descrição

- Erro no sensor de temperatura do **trocador de calor outdoor (T3)** ou do **ambiente outdoor (T4)**.
- **Todas as unidades param** de funcionar.
- Código exibido na unidade com o erro.

#### Trigger / Recover

| Condição | Valor |
|---------|-------|
| **Trigger** | Main PCB não recebe sinal do sensor T3 ou T4 |
| **Recover** | Main PCB volta a receber sinal do sensor |
| **Reset** | Automático |

#### Causas Possíveis

1. Sensor de temperatura não conectado corretamente ou com defeito
2. Main PCB danificada

#### Flowchart de Troubleshooting (E4)

```
E4
 │
 ├─ Conexão do sensor na Main PCB (CN1) solta? ─── Sim ──→ Reconectar o sensor firmemente em CN1
 │   │
 │   Não
 │   │
 ├─ Sensor em curto-circuito ou com falha? ─── Sim ──→ Substituir o sensor
 │   │ (Medir resistência — ver Table 6-3.1)
 │   Não
 │   │
 └─ Substituir Main PCB outdoor
```

**Notas de medição:**
1. Conexão de T3 e T4: porta **CN1** na Main PCB (Label 11 na Figure 5-2.1)
2. Medir resistência do sensor: se muito baixa → **curto-circuito**; se inconsistente com a tabela de características → **sensor falhado**. Referência: Table 6-3.1 "Temperature Sensor Resistance Characteristics" no Appendix.

---

### 2.5 Troubleshooting: E5 — Tensão de Alimentação Anormal

#### Descrição

- Tensão de alimentação da unidade externa fora dos limites.
- **Todas as unidades param** de funcionar.
- Código exibido na unidade com o erro.

#### Trigger / Recover

| Condição | Valor |
|---------|-------|
| **Trigger** | Tensão de fase da alimentação da ODU < **165V** |
| **Recover** | Tensão de fase da alimentação da ODU > **180V** |
| **Reset** | Automático |

#### Causas Possíveis

1. Tensão de alimentação da ODU anormal ou **fase faltando**
2. Fiação solta dentro da caixa de controle
3. Erro no circuito de alta tensão
4. Main PCB danificada

---

## 3. TABELAS E PARÂMETROS TÉCNICOS

### Tabela Resumo — Códigos que Exigem Restart Manual

Estes códigos **NÃO se recuperam automaticamente** — o técnico deve resolver o problema e reiniciar o sistema:

| Código | Descrição |
|--------|-----------|
| E7 | Sensor de temperatura topo/descarga do compressor |
| E8 | Endereço da unidade externa |
| xE9 | EEPROM mismatch |
| XF6 | Conexão da EXV |
| xH4 | Proteção do módulo inverter |
| xL0 | Proteção do módulo inverter (genérica) |
| xL1 | Tensão baixa do barramento DC |
| xL2 | Tensão alta do barramento DC |
| xL4 | Erro MCE |
| xL5 | Velocidade zero do compressor |
| xL7 | Erro de sequência de fase |
| xL8 | Variação de frequência > 15Hz/s |
| xL9 | Frequência real difere do target > 15Hz |
| C7 | PL 3× em 100 min |
| H5 | P2 3× em 60 min |
| H6 | P4 3× em 100 min |
| xH9/xP9 | P9 10× em 120 min |

### Tabela — Resistência de Comunicação (Referência para E0)

| Ponto de Medição | Resistência Normal |
|-----------------|-------------------|
| **P → Q** | **120Ω** |
| **P → E** | ∞ (circuito aberto) |
| **Q → E** | ∞ (circuito aberto) |

---

## 4. INFOBOX DE CAMPO / AVISOS

> [!CAUTION]
> **AVISO DE SEGURANÇA OBRIGATÓRIO (WARNING 2.1 DO MANUAL):**
> Todo trabalho elétrico deve ser executado por profissionais **qualificados, certificados e credenciados** em conformidade com toda legislação aplicável (normas nacionais, locais e regulamentos). **DESLIGAR a unidade externa** (disjuntor principal) antes de conectar ou desconectar qualquer fio ou conexão. Choque elétrico pode causar **lesão física grave ou morte**.

> [!WARNING]
> **E2 — COMPRIMENTO MÁXIMO DO FIO DE COMUNICAÇÃO IDU-ODU: 1200 METROS:**
> Se o fio de comunicação entre indoor e outdoor ultrapassar 1200m, o sinal pode ser atenuado a ponto de gerar E2 intermitente. Em instalações longas, considerar: (a) reduzir a distância, (b) usar cabo blindado de melhor qualidade, (c) evitar roteamento próximo a cabos de força (220V/380V) ou transformadores. O cabo de comunicação deve ser **3 vias blindado** (three-core shielded cable), conectado conforme polaridade (H1→H1, etc.).

> [!IMPORTANT]
> **CÓDIGOS COM "x" PREFIXO — IDENTIFICAR QUAL COMPRESSOR (A OU B):**
> Os códigos prefixados com "x" indicam qual compressor gerou o erro: **1** = Compressor A (BP1), **2** = Compressor B (BP2). Por exemplo: **1H4** = módulo inverter A com proteção, **2L5** = compressor B com velocidade zero. Em unidades single compressor (8-16HP), o prefixo será sempre **1**. No display, o número aparece no DSP1 e o código no DSP2.

> [!TIP]
> **DIAGNÓSTICO RÁPIDO — OS 5 ERROS MAIS COMUNS NO CAMPO:**
> 1. **E2** (comunicação IDU-ODU) → Verificar fiação P/Q/E, alimentação da IDU, comprimento do cabo
> 2. **E4** (sensor T3/T4) → Verificar CN1 na Main PCB, medir resistência do sensor
> 3. **P1** (alta pressão) → Verificar carga de refrigerante, ventilador, trocador sujo
> 4. **xH4** (proteção inverter) → Verificar LEDs do módulo inverter, barramento DC
> 5. **E5** (tensão anormal) → Verificar tensão de fase, fase faltando, disjuntor

---

**Podemos prosseguir para o Tópico 6.2 (Troubleshooting E7-xH4: Erros de Sensor, Inverter e Pressão)?**
