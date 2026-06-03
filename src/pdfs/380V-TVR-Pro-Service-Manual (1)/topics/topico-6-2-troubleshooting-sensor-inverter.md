# TÓPICO 6.2 — Troubleshooting: Sensores, Barramento DC, EXV, Comunicação Interna e Proteção do Módulo Inverter

---

## 1. NESTED SCHEMA METADATA

```
id_secao: "secao-6"
titulo_secao: "Diagnóstico e Troubleshooting"
id_aula: "aula-6-2"
titulo_aula: "Troubleshooting E5 (procedimento), E7, E8, xE9, xF1, XF6, xH0, H2/H3 e xH4 — Erros de Sensor, Barramento DC, EXV, Comunicação Interna e Proteção do Módulo Inverter"
descricao_aula: "Procedimentos detalhados de troubleshooting com fluxogramas para os erros de sensor de temperatura do compressor (E7), endereço da ODU (E8), EEPROM mismatch (xE9), barramento DC (xF1), válvula de expansão eletrônica (XF6), comunicação main chip-inverter driver (xH0), contagem de slaves alterada (H2/H3) e a proteção crítica do módulo inverter (xH4). Inclui a Tabela 6-2.1 de subcódigos xL0-xL9 do inverter e a Tabela 5-3.2 de diagnóstico por padrão de flashes do LED1 no módulo inverter. Valores de referência: tensão de fase 198-242V, barramento DC 350-700V, resistência compressor 0.7-1.5Ω, bobina fan <10Ω, bobina EXV 40-50Ω."
```

---

## 2. CONTEÚDO TÉCNICO DA AULA

### 2.1 Troubleshooting: E5 — Procedimento Completo (Tensão de Alimentação Anormal)

#### Flowchart de Troubleshooting (E5)

```
E5
 │
 ├─ Alimentação da ODU anormal ou fase faltando? ─── Sim ──→ Fornecer alimentação normal
 │   │ (Medir tensão A-N, B-N, C-N = 198-242V)¹
 │   Não
 │   │
 ├─ Fios entre Main PCB, filtro AC e terminais ─── Sim ──→ Reconectar firmemente
 │   │ de alimentação da caixa de controle soltos?
 │   Não
 │   │
 ├─ Erro no circuito de alta tensão? ─── Sim ──→ Reparar ou substituir os
 │   │ (Compressor²/Fan motor³/Inverter module⁴)         componentes com falha
 │   Não
 │   │
 └─ Substituir Main PCB outdoor
```

#### Referências de Medição para E5

| Componente | Ponto de Medição | Valor Normal |
|-----------|-----------------|-------------|
| **Alimentação trifásica** | Tensão A-N, B-N, C-N | **198-242V** |
| **Compressor (resistência das bobinas)** | Entre U, V, W (par a par) | **0,7 — 1,5Ω** |
| **Compressor (isolamento)** | Entre U/V/W e terra (ground) | **∞ (infinito)** |
| **Fan motor (bobina)** | Entre U, V, W (par a par) | **< 10Ω** |
| **Fan motor (curto-circuito)** | Qualquer par com 0Ω | **Fan motor em curto** |
| **Inverter module (curto-circuito)** | Teste com multímetro em modo buzzer: terminais P, N, U, V, W (qualquer par) | Se buzzer apita → **módulo em curto** |

---

### 2.2 Troubleshooting: E7 — Sensor de Temperatura do Compressor (T7C1/T7C2)

#### Descrição

- Erro no sensor de **temperatura de topo do compressor** ou **sensor de tubo de descarga** (T7C1 ou T7C2).
- **Todas as unidades param.**
- Exibido na unidade com o erro.

#### Trigger / Recover

| Condição | Valor |
|---------|-------|
| **Trigger** | Pressão de descarga ≥ **3 MPa** E temperatura de descarga < **15°C** por **2 minutos** |
| **Recover** | Pressão e temperatura voltam ao normal |
| **Reset** | **Manual** (restart obrigatório) |

#### Causas Possíveis

1. Sensor de temperatura não conectado corretamente ou com defeito
2. Main PCB danificada

#### Flowchart de Troubleshooting (E7)

```
E7
 │
 ├─ Conexão do sensor na Main PCB solta? ─── Sim ──→ Reconectar firmemente em CN4/CN5
 │   │ (CN4 = Label 3, CN5 = Label 4)¹
 │   Não
 │   │
 ├─ Sensor em curto-circuito ou com falha? ─── Sim ──→ Substituir o sensor
 │   │ (Medir resistência — ver Table 6-3.2)²
 │   Não
 │   │
 └─ Substituir Main PCB outdoor
```

**Notas:**
1. Conexão dos sensores T7C1 e T7C2: portas **CN4** (Label 3) e **CN5** (Label 4) na Main PCB (Figure 5-2.1 "Ports").
2. Medir resistência do sensor: se muito baixa → **curto-circuito**; se inconsistente com Table 6-3.2 → **sensor falhado**.

---

### 2.3 Troubleshooting: E8 — Erro de Endereço da Unidade Externa

#### Descrição

- Endereço da ODU configurado **fora do range válido**.
- **Todas as unidades param.**
- Exibido na unidade com o erro.

#### Trigger / Recover

| Condição | Valor |
|---------|-------|
| **Trigger** | Endereço da ODU configurado > **2** (valor inválido) |
| **Recover** | Endereços configurados de **0 a 2** |
| **Reset** | **Manual** |

#### Regra de Endereçamento

| Unidade | Endereço (ENC1) |
|--------|:----------------:|
| **Master** | **0** |
| **Slave 1** | **1** |
| **Slave 2** | **2** |

> Endereços **NÃO podem se repetir** dentro de um mesmo sistema.

#### Flowchart de Troubleshooting (E8)

```
E8
 │
 ├─ Endereço da ODU fora do range válido (0-2)? ─── Sim ──→ Configurar: Master=0, Slave1=1, Slave2=2
 │   │                                                        (sem repetição)
 │   Não
 │   │
 └─ Substituir Main PCB outdoor
```

---

### 2.4 Troubleshooting: xE9 — EEPROM Mismatch

#### Descrição

- **1E9** = EEPROM mismatch do compressor A.
- **2E9** = EEPROM mismatch do compressor B.
- **Todas as unidades param.**
- Exibido na unidade com o erro.

#### Trigger / Recover

| Condição | Valor |
|---------|-------|
| **Trigger** | Parâmetro de drive do compressor inconsistente (mismatch) |
| **Recover** | Parâmetro de drive do compressor consistente |
| **Reset** | **Manual** |

#### Causa Principal

- **Unidade foi energizada imediatamente após ser desligada** (sem tempo para o ciclo de escrita da EEPROM finalizar).
- Main PCB danificada.

#### Flowchart de Troubleshooting (xE9)

```
xE9
 │
 ├─ ODU foi ligada imediatamente após desligar? ─── Sim ──→ DESLIGAR a unidade e AGUARDAR
 │   │                                                       até o display digital apagar
 │   │                                                       completamente antes de religar¹
 │   Não
 │   │
 └─ Substituir Main PCB outdoor
```

> **Nota crítica:** Ao realizar restart manual de uma ODU, uma vez desligada a unidade, ela **NÃO deve ser religada até que o display digital tenha apagado completamente**.

---

### 2.5 Troubleshooting: xF1 — Erro de Tensão do Barramento DC

#### Descrição

- **1F1** = erro de tensão DC bus do compressor A; **2F1** = compressor B.
- **Todas as unidades param.**
- Exibido na unidade com o erro.

#### Trigger / Recover

| Condição | Valor |
|---------|-------|
| **Trigger** | Tensão do barramento DC < **350V** ou > **700V** continuamente por **10 segundos** |
| **Recover** | Tensão do barramento DC retorna ao range normal |
| **Reset** | Automático |

#### Causas Possíveis

1. Fiação do módulo inverter do compressor solta
2. Fiação incorreta do reator e barramento DC
3. Alimentação anormal
4. Módulo inverter danificado

#### Flowchart de Troubleshooting (xF1)

```
xF1
 │
 ├─ Fiação do módulo inverter solta? ─── Sim ──→ Reconectar conforme diagrama de fiação
 │   │
 │   Não
 │   │
 ├─ Alimentação anormal? ─── Sim ──→ Verificar equipamento de alimentação
 │   │
 │   Não
 │   │
 └─ Substituir o módulo inverter
```

---

### 2.6 Troubleshooting: XF6 — Erro de Conexão da Válvula de Expansão Eletrônica (EXV)

#### Descrição

- Erro de conexão da **Electronic Expansion Valve (EXV)**.
- **Todas as unidades param.**
- Exibido na unidade com o erro.

#### Trigger / Recover

| Condição | Valor |
|---------|-------|
| **Trigger** | Main control board não recebe sinal de feedback da EXV |
| **Recover** | Main control board recebe sinal de feedback da EXV |
| **Reset** | **Manual** — Quando a conexão da EXV é restabelecida, o código F6 pisca para indicar reconexão. Restart manual obrigatório. |

#### Causas Possíveis

1. Bobina da EXV não conectada corretamente ou com defeito
2. Main PCB danificada

#### Flowchart de Troubleshooting (XF6)

```
XF6
 │
 ├─ Conexão da bobina EXV na Main PCB (CN70) solta? ─── Sim ──→ Reconectar firmemente em CN70
 │   │ (CN70 = Label 19 na Figure 5-2.1)¹
 │   Não
 │   │
 ├─ Bobina da EXV com defeito? ─── Sim ──→ Substituir a bobina/EXV
 │   │ (Medir resistência entre fios = 40-50Ω)²
 │   Não
 │   │
 └─ Substituir Main PCB outdoor
```

#### Referência de Medição da EXV

| Fios do Conector | Cor | Resistência Normal (entre pares) |
|-----------------|-----|:-------------------------------:|
| Fio 1 | **Red** (Vermelho) | |
| Fio 2 | **Blue** (Azul) | **40 — 50Ω** (entre quaisquer dois fios) |
| Fio 3 | **Orange** (Laranja) | |
| Fio 4 | **Yellow** (Amarelo) | |
| Fio 5 | **White** (Branco) | |

> Se qualquer par de fios apresentar resistência **diferente de 40-50Ω**, a bobina da EXV está com defeito.

---

### 2.7 Troubleshooting: xH0 — Erro de Comunicação Main Chip → Inverter Driver

#### Descrição

- **1H0** = erro de comunicação entre main control chip e **inverter driver A**.
- **2H0** = erro de comunicação entre main control chip e **inverter driver B**.
- **Todas as unidades param.**
- Exibido na unidade com o erro.

#### Trigger / Recover

| Condição | Valor |
|---------|-------|
| **Trigger** | Main control chip e inverter driver sem comunicação por **2 minutos** |
| **Recover** | Comunicação restabelecida |
| **Reset** | Automático |

#### Causas Possíveis

1. Endereço do módulo inverter do compressor configurado incorretamente (S7)
2. Fio de comunicação entre Main PCB e módulo inverter solto
3. Bridge rectifier danificado
4. Main PCB ou módulo inverter do compressor danificado

#### Flowchart de Troubleshooting (xH0)

```
xH0
 │
 ├─ Endereço do inverter module (S7) incorreto? ─── Sim ──→ Corrigir endereço via DIP switch S7:
 │   │                                                       S7=0 → Compressor A (esquerdo)
 │   │                                                       S7=1 → Compressor B (direito)¹
 │   Não
 │   │
 ├─ Fio de comunicação Main PCB CN26 → ─── Sim ──→ Reconectar o fio de comunicação
 │   │ Inverter module CN8/CN9 solto?²
 │   Não
 │   │
 ├─ LED1 e LED2 no inverter module ambos ─── Sim ──→ Verificar circuito de alimentação
 │   │ apagados quando energizado?³                   do inverter module
 │   Não
 │   │
 ├─ Substituir Main PCB resolve? ─── Sim ──→ Main PCB danificada
 │   │
 │   Não
 │   │
 └─ Substituir o módulo inverter do compressor
```

#### Tabela de Endereçamento S7 (Inverter Module)

| S7 DIP switch (no módulo inverter) | Endereço | Módulo |
|:-----------------------------------:|:--------:|--------|
| **0** (ambas chaves OFF) | A | Compressor inverter module **A** (esquerdo) |
| **1** (chave 1 ON) | B | Compressor inverter module **B** (direito) |

---

### 2.8 Troubleshooting: H2 / H3 — Contagem de Unidades Slave Alterada

#### Descrição

- **H2** = número de slaves detectado pelo master **diminuiu**.
- **H3** = número de slaves detectado pelo master **aumentou**.
- **Todas as unidades param.**
- Exibido **apenas no master**.

#### Trigger / Recover

| Condição | Valor |
|---------|-------|
| **Trigger** | Número de slaves detectado pelo master mudou (aumentou ou diminuiu) |
| **Recover** | Número de slaves volta ao normal |
| **Reset** | Automático |

#### Causas Possíveis

1. Alguma ODU está desligada
2. Alimentação anormal
3. Endereço da ODU configurado incorretamente
4. Fios de comunicação entre ODUs não conectados corretamente
5. Fiação solta ou Main PCB / bloco terminal danificado

#### Flowchart de Troubleshooting (H2/H3)

```
H2 / H3
 │
 ├─ Alguma ODU no sistema está desligada? ─── Sim ──→ Ligar TODAS as ODUs
 │   │
 │   Não
 │   │
 ├─ Alimentação anormal? ─── Sim ──→ Verificar equipamento de alimentação
 │   │
 │   Não
 │   │
 └─ Seguir procedimento de troubleshooting do erro E0
     (verificar ENC1, fios de comunicação, PCB, terminal block)
```

---

### 2.9 Troubleshooting: xH4 — Proteção do Módulo Inverter (ERRO CRÍTICO)

#### Descrição

- **1H4** = proteção do módulo inverter do **compressor A**.
- **2H4** = proteção do módulo inverter do **compressor B**.
- **Todas as unidades param.**
- Exibido na unidade com o erro.

#### Trigger / Recover

| Condição | Valor |
|---------|-------|
| **Trigger** | Compressor acumula **3 proteções** do módulo inverter |
| **Recover** | Módulo inverter volta ao normal |
| **Reset** | **Manual** |

#### Causa Raiz — Subcódigos do xH4

O código xH4 é um "código guarda-chuva" que engloba **8 subcódigos específicos** (xL0 a xL9). Para identificar qual subcódigo causou o xH4, use o **menu mode "n31"** (Part 5, Section 2.2.3) para consultar o histórico de erros.

#### Tabela 6-2.1 — Subcódigos Específicos do xH4

| Subcódigo | Descrição |
|-----------|-----------|
| **xL0** | Proteção do módulo inverter (genérica) |
| **xL1** | Proteção de **tensão baixa** do barramento DC |
| **xL2** | Proteção de **tensão alta** do barramento DC |
| **xL4** | **Erro MCE** |
| **xL5** | Proteção de **velocidade zero** do compressor |
| **xL7** | **Erro de sequência de fase** |
| **xL8** | Variação de frequência do compressor > **15Hz** em 1 segundo |
| **xL9** | Frequência real difere da frequência alvo por > **15Hz** |

---

### 2.10 Diagnóstico por LED do Módulo Inverter (Tabela 5-3.2)

Quando ocorre um erro do módulo inverter, o **LED2 permanece aceso continuamente** e o **LED1 pisca** em um padrão específico. Contar o número de flashes do LED1 para identificar o subcódigo:

#### Tabela 5-3.2 — Padrão de Flashes do LED1

| Padrão do LED1 | Erro Correspondente |
|:--------------|:-------------------|
| **8 flashes**, pausa 1s, repete | **xL0** — Proteção do módulo inverter |
| **9 flashes**, pausa 1s, repete | **xL1** — DC bus low voltage protection |
| **10 flashes**, pausa 1s, repete | **xL2** — DC bus high voltage protection |
| **12 flashes**, pausa 1s, repete | **xL4** — MCE error |
| **13 flashes**, pausa 1s, repete | **xL5** — Zero speed protection |
| **15 flashes**, pausa 1s, repete | **xL7** — Phase sequence error |
| **16 flashes**, pausa 1s, repete | **xL8** — Variação de frequência > 15Hz/s |
| **17 flashes**, pausa 1s, repete | **xL9** — Frequência difere do target > 15Hz |

> **Método de leitura:** Abrir a caixa de controle, localizar o módulo inverter (capacitores grandes visíveis). Observar LED1 e LED2 no canto inferior direito da placa. Se LED2 aceso fixo + LED1 piscando: contar os flashes entre as pausas de 1 segundo.

---

## 3. TABELAS E PARÂMETROS TÉCNICOS

### Resumo de Valores de Referência para Troubleshooting (Parte 6)

| Parâmetro | Componente/Circuito | Valor Normal | Erro Associado |
|-----------|---------------------|:------------:|:-------------:|
| Tensão de fase (A-N, B-N, C-N) | Alimentação trifásica ODU | **198-242V** | E5 |
| Tensão barramento DC | Inverter module | **350-700V** | xF1 |
| Resistência bobinas compressor (U-V, V-W, U-W) | Compressor | **0,7-1,5Ω** | E5 |
| Isolamento compressor (U/V/W vs ground) | Compressor | **∞** | E5 |
| Resistência bobina fan motor (U-V, V-W, U-W) | Fan motor | **< 10Ω** | E5 |
| Fan motor em curto | Fan motor | **0Ω = curto** | E5 |
| Resistência bobina EXV (entre fios) | EXV (5 fios) | **40-50Ω** | XF6 |
| Resistência comunicação P-Q | Terminal block ODU | **120Ω** | E0, E2 |
| Comprimento máx. fio comunicação | IDU-ODU | **1200m** | E2 |
| Range endereço ODU | ENC1 switch | **0-2** | E8 |
| Trigger pressão E7 | Sensor descarga | **≥ 3 MPa** | E7 |
| Trigger temperatura E7 | Sensor descarga | **< 15°C** | E7 |
| Trigger tensão E5 | Alimentação fase | **< 165V** | E5 |
| Recover tensão E5 | Alimentação fase | **> 180V** | E5 |
| Trigger DC bus xF1 (low) | Barramento DC | **< 350V** | xF1 |
| Trigger DC bus xF1 (high) | Barramento DC | **> 700V** | xF1 |

---

## 4. INFOBOX DE CAMPO / AVISOS

> [!CAUTION]
> **xH4 — ERRO MAIS CRÍTICO DO SISTEMA INVERTER:**
> O código xH4 indica que o módulo inverter do compressor atingiu **3 proteções consecutivas**. Este é um "código guarda-chuva" que pode ter **8 causas raiz diferentes** (xL0 a xL9). **NUNCA substitua o módulo inverter sem antes:** (1) Consultar o histórico de erros via menu "n31" para identificar o subcódigo específico; (2) Verificar o padrão de flashes do LED1 no módulo inverter (LED2 aceso fixo = erro do inverter); (3) Medir tensão DC bus, resistência do compressor e bobina do fan.

> [!WARNING]
> **xE9 — NÃO RELIGAR A ODU IMEDIATAMENTE APÓS DESLIGAR:**
> O erro xE9 (EEPROM mismatch) é causado por energização prematura da unidade antes da EEPROM completar seu ciclo de escrita. **Procedimento obrigatório:** após desligar a ODU, **aguardar até que o display digital apague completamente** antes de religar. Se a ODU for religada com o display ainda aceso, os parâmetros de drive do compressor podem ficar inconsistentes, resultando em xE9.

> [!IMPORTANT]
> **XF6 — TABELA DE CORES DOS FIOS DA EXV PARA MEDIÇÃO:**
> A bobina da EXV tem 5 fios coloridos: **Red, Blue, Orange, Yellow, White**. A resistência entre **qualquer par** de fios deve ser **40-50Ω**. Se qualquer par apresentar valor fora deste range, a bobina está com defeito. Conexão na Main PCB: porta **CN70** (Label 19). Ao reconectar, o código F6 **pisca** para indicar que a conexão foi reestabelecida — após isso, restart manual é obrigatório.

> [!TIP]
> **DIAGNÓSTICO RÁPIDO POR LED — MÉTODO VISUAL SEM MULTÍMETRO:**
> Se o módulo inverter apresenta erro e você não tem multímetro disponível, use o diagnóstico visual por LED:
> - **LED2 apagado + LED1 apagado** → Sem alimentação no módulo (verificar circuito de potência)
> - **LED2 aceso fixo + LED1 piscando** → Erro do inverter (contar flashes: 8=xL0, 9=xL1, 10=xL2, 12=xL4, 13=xL5, 15=xL7, 16=xL8, 17=xL9)
> - **LED2 aceso fixo + LED1 aceso fixo** → Módulo operando normalmente
> - Este método permite identificar **rapidamente** qual subcódigo do xH4 está ativo sem necessidade de acessar o menu.

---

**Podemos prosseguir para o Tópico 6.3 (Troubleshooting H5-P5/xP9: Proteções de Pressão, Temperatura e Fan Module)?**
