# TÓPICO 3.1 — Lógica Geral de Controle, Parada e Partida do Sistema

---

## 1. NESTED SCHEMA METADATA

```
id_secao: "secao-3"
titulo_secao: "Controle"
id_aula: "aula-3-1"
titulo_aula: "Fluxograma Geral de Controle, Condições de Parada (Stop Operation) e Controle de Partida (Startup Control)"
descricao_aula: "Estudo do fluxograma mestre de controle do TVR Pro CO Series, abrangendo os 5 blocos de controle (Stop, Startup, Normal Operation, Protection, Special) e suas interconexões. Análise detalhada das 3 condições de parada (Stop Operation), dos tempos de atraso de partida (12 minutos para busca de endereços e 7 minutos mínimo para reinício), e da tabela completa de controle de componentes durante a partida (Table 3-3.1) com parâmetros específicos para cada classe de chassi."
```

---

## 2. CONTEÚDO TÉCNICO DA AULA

### 2.1 Fluxograma Geral de Controle — Visão Sistêmica (Figure 3-1)

A placa controladora principal (main PCB) da unidade externa opera seguindo um **fluxograma mestre de controle** composto por 5 blocos sequenciais, cada um com uma função específica. Entender este fluxograma é fundamental porque todo diagnóstico de falha começa por identificar **em qual bloco** o sistema se encontra no momento do problema.

#### Os 5 Blocos de Controle:

| Bloco | Nome | Função | Nº no Manual |
|-------|------|--------|-------------|
| **1** | **Stop Operation** (Operação de Parada) | Define as condições em que o sistema para ou permanece parado | 2 |
| **2** | **Startup Control** (Controle de Partida) | Gerencia a sequência de inicialização dos componentes após comando de ligar | 3 |
| **3** | **Normal Operation Control** (Controle de Operação Normal) | Controla todos os componentes durante a operação em regime permanente | 4 |
| **4** | **Protection Control** (Controle de Proteção) | Monitora limites de pressão, temperatura e corrente, acionando proteções quando ultrapassados | 5 |
| **5** | **Special Control** (Controle Especial) | Gerencia operações especiais como duty cycling e oil return automático | 6 |

#### Fluxo de Transições entre Blocos:

```
STOP OPERATION ─── [Thermo on] ──→ STARTUP CONTROL
                                        │
                                        ▼
                                   NORMAL OPERATION ←─── [Thermo on] ── SPECIAL CONTROL
                                        │                                      ▲
                                        │─── [Conditions met for oil return] ──→ Oil Return Operation
                                        │                                      │
                                        │←── [Outdoor unit duty cycling] ──────┘
                                        │
                                        ▼
                                   PROTECTION CONTROL
```

**Ciclo principal:**
1. O sistema começa em **Stop Operation** (parado)
2. Quando o termostato é ativado ("Thermo on"), entra em **Startup Control**
3. Após a sequência de partida, transiciona para **Normal Operation Control**
4. Durante a operação normal, se condições de proteção forem violadas, entra em **Protection Control**
5. Periodicamente, ou quando condições específicas são atendidas, o **Special Control** assume para executar oil return ou duty cycling
6. Após o Special Control, o sistema retorna para **Startup Control** (re-sequência) e depois para **Normal Operation**

---

### 2.2 Stop Operation — As 3 Condições de Parada (Seção 2)

O sistema entra em parada (Stop Operation) por **uma de três razões**:

| Condição | Descrição | Comportamento |
|----------|-----------|---------------|
| **1. Abnormal shutdown** (Desligamento anormal) | Uma condição anormal é detectada (ex.: sobrepressão, sobrecorrente, sobretemperatura). O sistema executa um 'stop with thermo off' para proteger os compressores. | Um **código de erro** é exibido no display digital da unidade externa (outdoor unit digital display). O sistema NÃO reinicia automaticamente em caso de erro grave (H5, H6, C7). |
| **2. System stops** (Parada por setpoint) | A temperatura configurada no controle remoto foi atingida em todas as unidades internas ativas. | Não há erro — o sistema simplesmente para porque não há demanda de refrigeração. Reinicia automaticamente quando a temperatura ambiente sobe acima do setpoint + histerese. |
| **3. Load decrease** (Redução de carga) | A demanda total das unidades internas diminui a ponto de poder ser atendida por **menos módulos externos** em um sistema multi-módulo. | Os módulos excedentes param. Os demais continuam operando. Isso é o princípio de modulação de carga do VRF multi-módulo. |

---

### 2.3 Startup Control — Controle de Partida (Seção 3)

#### 3.1 Compressor Startup Delay Control (Atraso na Partida do Compressor)

O sistema TVR Pro CO impõe **dois tipos de atraso** antes de ligar os compressores:

| Tipo de Atraso | Duração | Condição | Motivo |
|----------------|---------|----------|--------|
| **Atraso inicial** (primeira energização) | **12 minutos** | Após o sistema ser energizado pela primeira vez ou após reset completo | Permitir que a unidade master (mestre) faça a **busca de endereços** (address search) de todas as unidades internas conectadas ao barramento de comunicação. |
| **Atraso de reinício** | **Mínimo 7 minutos** | Após qualquer parada do compressor (exceto durante oil return operation) | Prevenir **ligações/desligamentos frequentes** (short cycling) do compressor, que causam desgaste mecânico e picos de corrente. Também serve para equalizar a pressão no sistema frigorígeno. |

> **Exceção importante:** O atraso de 7 minutos **NÃO se aplica** quando o reinício ocorre durante a operação de oil return. Nesse caso, o compressor pode reiniciar imediatamente após a conclusão do oil return.

#### 3.2 Controle de Componentes durante a Partida em Modo Cooling (Table 3-3.1)

A tabela do manual (Table 3-3.1) detalha exatamente como cada componente é controlado durante a sequência de partida. A presença de cada componente varia conforme a classe de chassi:

| Componente | Label | 8-12HP | 14-16HP | 18-22HP | 24-30HP | Controle durante Startup |
|-----------|-------|--------|---------|---------|---------|--------------------------|
| **Inverter compressor A** | BP1 | ● | ● | ● | ● | Controlado conforme a demanda de carga (load requirement). Frequência aumentada em incrementos de **1 step/s** (1 rps por segundo) |
| **Inverter compressor B** | BP2 | — | — | ● | ● | Mesmo controle do BP1. Presente apenas em chassi com 2 compressores |
| **DC fan motor A** | FAN1 | ● | ● | ● | ● | Velocidade controlada pela **pressão de descarga (Pc)**. Inicia na velocidade inicial por **90 segundos**, depois Pc é verificada a cada **10 segundos** |
| **DC fan motor B** | FAN2 | — | — | ● | ● | Mesmo controle do FAN1. Presente apenas em chassi com 2 ventiladores |
| **Electronic expansion valve A** | EXVA | ● | ● | ● | ● | Posição (steps) controlada de **0 (fully closed)** a **3000 (fully open)**, ajustada conforme a **temperatura de descarga** |
| **Solenoid valve SV2** (Liquid injection) | SV2 | ● | ● | ● | ● | Controlada conforme a **temperatura de descarga** (abre a >100°C, fecha a <90°C) |
| **Solenoid valve SV4** (Oil balance) | SV4 | ● | ● | ● | ● | **Fechada por 200 segundos** após partida, depois **abre por 600 segundos**, depois fecha (ciclo) |
| **Solenoid valve SV7** (Refrigerant bypass) | SV7 | ● | ● | ● | ● | Controlada conforme a **demanda de carga** e a **pressão de descarga** |

#### Lógica de Controle do Ventilador (FAN1/FAN2) durante Startup:

O controle do ventilador DC durante a partida segue uma lógica baseada na **pressão de descarga (Pc)**:

| Fase | Ação | Parâmetro |
|------|------|-----------|
| **Fase 1** (0 a 90 segundos) | Ventilador opera na **velocidade inicial** (pré-definida) | Velocidade fixa por 90 s |
| **Fase 2** (após 90 segundos) | Pressão Pc é monitorada a cada **10 segundos** | — |
| Se Pc ≥ **2.7 MPa** | Velocidade do ventilador **aumenta em 1 step** | +1 step por verificação |
| Se Pc ≤ **2.1 MPa** | Velocidade do ventilador **diminui em 1 step** | -1 step por verificação |
| Se **2.1 MPa < Pc < 2.7 MPa** | Velocidade do ventilador **mantém-se inalterada** | Sem alteração |

**Tradução prática:** Nos primeiros 90 segundos após a partida, o ventilador opera em velocidade fixa para permitir a estabilização do circuito. Depois disso, a velocidade é ajustada automaticamente a cada 10 segundos com base na pressão de descarga. Se a pressão está alta (condensação insuficiente), o ventilador acelera. Se está baixa (condensação excessiva ou frio extremo), o ventilador desacelera.

---

### 2.4 Resumo da Sequência de Partida — Timeline

Para um sistema 18-22HP (Classe B) sendo ligado pela primeira vez:

```
T = 0 min    → Sistema energizado. Início da busca de endereços (address search)
T = 12 min   → Busca concluída. Comando "Thermo on" recebido de IDU
T = 12 min   → EXVA posicionada conforme temperatura de descarga
T = 12 min   → SV4 FECHADA (inicia timer de 200s)
T = 12 min   → BP1 + BP2 iniciam partida com rampa de frequência (+1 step/s)
T = 12 min   → FAN1 + FAN2 iniciam em velocidade fixa (fase 1)
T = 13.5 min → FAN1 + FAN2 entram em controle por Pc (fase 2, após 90s)
T = 15.3 min → SV4 ABRE (após 200s = 3 min 20s desde a partida)
T = 25.3 min → SV4 FECHA (após 600s = 10 min aberta)
T = 25.3 min → SV4 entra no ciclo: fecha 600s → abre 3 min → repete
```

---

## 3. TABELAS E PARÂMETROS TÉCNICOS

### Tabela Mestra — Componentes por Classe durante Startup

| Componente | Label | 8-12HP | 14-16HP | 18-22HP | 24-30HP |
|-----------|-------|:------:|:-------:|:-------:|:-------:|
| Inverter compressor A | BP1 | ✔ | ✔ | ✔ | ✔ |
| Inverter compressor B | BP2 | — | — | ✔ | ✔ |
| DC fan motor A | FAN1 | ✔ | ✔ | ✔ | ✔ |
| DC fan motor B | FAN2 | — | — | ✔ | ✔ |
| EXV A | EXVA | ✔ | ✔ | ✔ | ✔ |
| Solenoid SV2 | SV2 | ✔ | ✔ | ✔ | ✔ |
| Solenoid SV4 | SV4 | ✔ | ✔ | ✔ | ✔ |
| Solenoid SV7 | SV7 | ✔ | ✔ | ✔ | ✔ |

### Tabela de Tempos de Atraso

| Evento | Tempo | Observação |
|--------|-------|------------|
| Busca de endereços (primeiro boot) | **12 min** | Master busca todas as IDUs |
| Atraso mínimo de reinício | **7 min** | Após qualquer parada (exceto oil return) |
| SV4 — primeiro open após partida | **200 s** (3 min 20 s) | Timer fixo |
| Fan — velocidade fixa inicial | **90 s** | Antes de entrar em controle por Pc |
| Fan — intervalo de verificação de Pc | **10 s** | Após os 90s iniciais |

### Tabela de Limiares de Pressão de Descarga para Controle de Fan

| Condição | Limiar (Pc) | Ação no Fan |
|----------|-------------|-------------|
| Pressão alta | Pc ≥ **2.7 MPa** | +1 step velocidade |
| Pressão normal | 2.1 < Pc < 2.7 MPa | Sem alteração |
| Pressão baixa | Pc ≤ **2.1 MPa** | -1 step velocidade |

---

## 4. INFOBOX DE CAMPO / AVISOS

> [!CAUTION]
> **ATRASO DE 12 MINUTOS — NÃO É DEFEITO, É BUSCA DE ENDEREÇOS:**
> Quando o sistema TVR Pro CO é energizado pela primeira vez (ou após um reset completo da placa master), os compressores **NÃO iniciam por 12 minutos**. Isso é comportamento **normal** — a placa master está fazendo a busca de endereços (address search) para mapear todas as unidades internas conectadas ao barramento. Se o técnico ou o cliente reportar "o sistema não liga por 12 minutos", NÃO é uma falha. Aguardar.

> [!WARNING]
> **REINÍCIO MÍNIMO DE 7 MINUTOS — PROTEÇÃO CONTRA SHORT CYCLING:**
> Após qualquer parada do compressor (por erro, por setpoint atingido, ou por redução de carga), o sistema impõe um atraso mínimo de **7 minutos** antes de religar o compressor. Isso é para **equalizar a pressão** no circuito frigorígeno e evitar partida com alta pressão diferencial, que pode danificar o compressor. A única exceção é o reinício após oil return, que é imediato.

> [!IMPORTANT]
> **EXVA: RANGE TOTAL DE 0 A 3000 STEPS:**
> A válvula de expansão eletrônica principal (EXVA) opera em um range de **0 steps** (totalmente fechada) a **3000 steps** (totalmente aberta). Durante a partida, a posição é controlada pela temperatura de descarga. Se o técnico observar a EXVA travada em 0 steps (ou em posição fixa que não responde) durante a operação, isso indica possível falha no motor de passo ou na placa controladora.

> [!TIP]
> **VERIFICAÇÃO RÁPIDA DO CONTROLE DE FAN — OUVIR A MUDANÇA DE VELOCIDADE:**
> Após a partida do sistema, nos primeiros 90 segundos os ventiladores operam em velocidade fixa. Depois dos 90s, o técnico deve perceber **mudanças sutis de velocidade a cada ~10 segundos** enquanto o sistema ajusta com base na pressão Pc. Se o ventilador permanece em velocidade fixa constante após 2-3 minutos de operação, pode haver falha no sensor de alta pressão (3) ou no circuito de controle do motor DC.

---

**Podemos prosseguir para o Tópico 3.2?**
