# TÓPICO 4.1 — Configurações de Campo: DIP Switches, Encoders e Modo Silencioso

---

## 1. NESTED SCHEMA METADATA

```
id_secao: "secao-4"
titulo_secao: "Configurações de Campo (Field Settings)"
id_aula: "aula-4-1"
titulo_aula: "Configurações da Placa Principal (Main PCB): DIP Switches, Encoders Rotativos, Endereçamento, Capacidade e Modos Silenciosos"
descricao_aula: "Guia completo de configuração da placa principal (main PCB) da unidade externa do TVR Pro CO Series. Cobre todas as chaves DIP (S5 a S13), os encoders rotativos (ENC1 a ENC5), a lógica de endereçamento master/slave, a seleção de capacidade por HP, o mapeamento de quantidade de evaporadoras, e os 14 modos de operação silenciosa (Night Silent, Silent Mode, Super Silent Mode) com tabela de velocidade máxima de fan e capacidade máxima por classe de chassi."
```

---

## 2. CONTEÚDO TÉCNICO DA AULA

### 2.1 Localização dos Switches e Encoders na Placa (Figure 4-1.1)

A placa principal (main PCB) da unidade externa possui **DIP switches** e **encoders rotativos** localizados na área superior direita da placa. O manual mostra uma foto real da placa com a localização de cada componente:

**Disposição na placa (de esquerda para direita, de cima para baixo):**
- Linha superior: **S7**, **S6**, **ENC2**, **ENC1**, **ENC5**
- Linha inferior: **S13**, **S8**, **S6**, **S12**, **ENC3**, **ENC4**

---

### 2.2 DIP Switches — Configuração Completa (Table 4-1.1)

#### S5 — Reservado
Sem função definida. Não alterar.

#### S6-1 — Reservado
Sem função definida. Não alterar.

#### S6-2 — Limpar Endereços das Unidades Internas

| Posição | Função |
|---------|--------|
| **Default** (todas OFF) | **No action** — nenhuma ação (padrão) |
| **ON-ON-ON** | **Clear indoor unit addresses** — apaga todos os endereços das unidades internas da memória |

**Quando usar:** Apenas durante a reconfiguração completa do sistema, quando evaporadoras foram removidas, adicionadas ou substituídas. Após limpar, o sistema fará uma nova busca de endereços nos próximos 12 minutos (conforme Tópico 3.1).

#### S6-3 — Modo de Endereçamento

| Posição | Função |
|---------|--------|
| **Default** (todas OFF) | **Auto addressing** — endereçamento automático (padrão recomendado) |
| **ON-ON-ON** | **Manual addressing** — endereçamento manual |

**Recomendação:** Manter sempre em **auto addressing** (default). O endereçamento manual só é necessário em casos excepcionais onde o automático não funciona.

#### S7 — Reservado
Sem função definida. Não alterar.

#### S8-1 — Reservado
Sem função definida. Não alterar.

#### S8-2 — Tempo de Start-up (Atraso de Partida)

| Posição | Função |
|---------|--------|
| **Default** (todas OFF) | **Start-up time is 12 minutes** — atraso de 12 minutos (padrão) |
| **ON-ON-ON** | **Start-up time is 7 minutes** — atraso de 7 minutos |

**Importância:** Conforme Tópico 3.1, o atraso de 12 minutos é para busca de endereços. Em sistemas já configurados e estáveis, o técnico pode reduzir para 7 minutos via S8-2. Porém, se novas evaporadoras forem adicionadas, os 12 minutos devem ser restaurados para garantir a detecção.

#### S8-3 — Reservado
Sem função definida. Não alterar.

#### S13 — Tipo de Controlador

| Posição | Função |
|---------|--------|
| **Default** (OFF) | **Use the new centralized controller** — controlador centralizado novo (padrão) |
| **ON** | **Use the old centralized controller** — controlador centralizado antigo |

**Quando alterar:** Apenas quando o sistema é conectado a um controlador centralizado de modelo anterior (legado). Em instalações novas, manter no default.

---

### 2.3 Encoders Rotativos — Configuração Completa (Table 4-1.1)

#### ENC1 — Endereço da Unidade Externa (Outdoor Unit Address)

| Posição | Função |
|---------|--------|
| **0** | **Master unit** (unidade mestre) — **default** |
| **1** | **Slave unit 1** (unidade escrava 1) |
| **2** | **Slave unit 2** (unidade escrava 2) |

**Regra:** Em sistemas multi-módulo, apenas UMA unidade pode ser **0** (Master). As demais devem ser **1** e **2**. Conforme Tópico 3.4, estes endereços **NÃO mudam** durante Duty Cycling — apenas a prioridade operacional rotaciona.

#### ENC2 — Capacidade da Unidade Externa (Outdoor Unit Capacity)

| Posição | Capacidade |
|---------|-----------|
| **0** | **8HP** (default) |
| **1** | **10HP** |
| **2** | **12HP** |
| **3** | **14HP** |
| **4** | **16HP** |
| **5** | **18HP** |
| **6** | **20HP** |
| **7** | **22HP** |
| **8** | **24HP** |
| **9** | **26HP** |
| **A** | **28HP** |
| **B** | **30HP** |

> **ATENÇÃO DO MANUAL:** O ENC2 é **configurado em fábrica** (factory-set) e **NÃO deve ser alterado em campo**. Alterar o ENC2 pode causar incompatibilidade entre o software de controle e o hardware do compressor.

#### ENC3 + S12 — Número de Unidades Internas

O número de evaporadoras conectadas ao sistema é configurado pela combinação de **ENC3** (dezenas) e **S12** (unidades de 16):

| Configuração ENC3 + S12 | Faixa de IDUs |
|------------------------|---------------|
| ENC3=0-9, S12 OFF | **0 a 15** unidades internas |
| ENC3=0-9, S12 ON (posição 1) | **16 a 31** unidades internas |
| ENC3=0-9, S12 ON (posição 2) | **32 a 47** unidades internas |
| ENC3=0-9, S12 ON (posição 3) | **48 a 63** unidades internas |
| ENC3=0, S12 ON (posição 4) | **64** unidades internas (máximo) |

A lógica é: **0-9 no ENC3** indica as unidades dentro de cada faixa de 16, e **A-F no ENC3** indica faixas adicionais (10-15 unidades extras).

#### ENC4 — Endereço de Rede (Network Address)

| Posição | Função |
|---------|--------|
| **0** | Endereço de rede 0 (default) |
| **1-7** | Endereços de rede 1 a 7 |

**Uso:** Para sistemas com múltiplos grupos de outdoor + indoor (redes separadas) conectados a um controlador centralizado.

---

### 2.4 ENC5 — Modo Silencioso (Silent Mode) — Configuração Completa

O encoder ENC5 controla o **modo silencioso** com **14 configurações possíveis** (0 a B, mais F):

#### Night Silent Time (ENC5 = 0, 1, 2, 3)

O modo Night Silent **reduz automaticamente** a velocidade máxima do ventilador durante o período noturno. A ativação é automática baseada na temperatura ambiente diurna:

| ENC5 | Descrição | X (horas após pico) | Y (horas de duração) |
|------|-----------|---------------------|---------------------|
| **0** | Night silent 6h/10h **(default)** | **6 horas** após pico de temp. | **10 horas** de duração |
| **1** | Night silent 6h/12h | **6 horas** após pico | **12 horas** |
| **2** | Night silent 8h/10h | **8 horas** após pico | **10 horas** |
| **3** | Night silent 8h/12h | **8 horas** após pico | **12 horas** |

**Lógica de ativação (Figure 4-1.4):**
1. A unidade externa monitora a temperatura ambiente ao longo do dia via sensor T4
2. Identifica o **pico de temperatura diurno** (tipicamente entre 12h-16h)
3. **X horas** após o pico, ativa o Night Silent Mode
4. O Night Silent permanece ativo por **Y horas**
5. Após Y horas, desativa automaticamente

**Exemplo com default (ENC5=0, X=6h, Y=10h):**
- Pico de temperatura detectado às 14:00
- Night Silent ativa às 20:00 (14:00 + 6h)
- Night Silent desativa às 06:00 (20:00 + 10h)
- Redução máxima de ruído: **15 dB**

#### No Silent Mode (ENC5 = 4)
| ENC5 | Descrição |
|------|-----------|
| **4** | **No silent mode** — sem modo silencioso (operação plena 24h) |

#### Silent Mode (ENC5 = 5, 6, 7) — Apenas Limita Fan

| ENC5 | Descrição |
|------|-----------|
| **5** | Silent mode 1 — limita **apenas a velocidade máxima do fan** |
| **6** | Silent mode 2 — limita **apenas a velocidade máxima do fan** (maior redução) |
| **7** | Silent mode 3 — limita **apenas a velocidade máxima do fan** (maior redução ainda) |

#### Super Silent Mode (ENC5 = 8, 9, A, B) — Limita Fan + Compressor

| ENC5 | Descrição | Capacidade Máxima |
|------|-----------|-------------------|
| **8** | Super silent mode 1 — limita fan **e frequência do compressor** | **80%** |
| **9** | Super silent mode 2 | **70%** |
| **A** | Super silent mode 3 | **60%** |
| **B** | Super silent mode 4 | **50%** |

#### Configuração via Controlador Centralizado (ENC5 = F)

| ENC5 | Descrição |
|------|-----------|
| **F** | Set silent mode via **centralized controller** — modo silencioso definido remotamente pelo controlador centralizado |

---

### 2.5 Tabela de Velocidade Máxima do Fan e Capacidade por Modo Silencioso (Table 4-1.4)

Esta é a tabela mais importante para dimensionamento de ruído:

| ENC5 | Modo | Max Fan Index por HP | | | | | | | Cap. Máx. |
|------|------|:----:|:----:|:-----:|:----:|:-----:|:-----:|:-----:|:---------:|
| | | **8-10HP** | **12HP** | **14-16HP** | **18HP** | **20-22HP** | **24-26HP** | **28-30HP** | |
| 0 | Night silent 6h/10h | 28 | 28 | 30 | 29 | 29 | 31 | 31 | 100% |
| 1 | Night silent 6h/12h | 28 | 28 | 30 | 29 | 29 | 31 | 31 | 100% |
| 2 | Night silent 8h/10h | 28 | 28 | 30 | 29 | 29 | 31 | 31 | 100% |
| 3 | Night silent 8h/12h | 28 | 28 | 30 | 29 | 29 | 31 | 31 | 100% |
| 4 | No silent mode | 29 | 30 | 33 | 33 | 35 | 33 | 35 | 100% |
| 5 | Silent mode 1 | 28 | 28 | 30 | 31 | 31 | 31 | 31 | 100% |
| 6 | Silent mode 2 | 26 | 26 | 28 | 29 | 29 | 29 | 29 | 100% |
| 7 | Silent mode 3 | 24 | 24 | 27 | 27 | 27 | 27 | 27 | 100% |
| 8 | Super silent 1 | 28 | 28 | 29 | 23 | 23 | 28 | 28 | **80%** |
| 9 | Super silent 2 | 27 | 27 | 28 | 22 | 22 | 27 | 27 | **70%** |
| A | Super silent 3 | 26 | 26 | 27 | 21 | 21 | 26 | 26 | **60%** |
| B | Super silent 4 | 25 | 25 | 26 | 20 | 20 | 25 | 25 | **50%** |

**Notas do manual:**
1. O "fan speed index" refere-se à Table 3-4.2 do Tópico 3.2 (Outdoor Fan Control)
2. Se a pressão do sistema ultrapassar **3.5 MPa**, o sistema **sai automaticamente** do modo silencioso para proteger o compressor

---

## 3. TABELAS E PARÂMETROS TÉCNICOS

### Tabela Resumo — Switches Reservados (NÃO ALTERAR)

| Switch | Status |
|--------|--------|
| S5 | Reservado |
| S6-1 | Reservado |
| S7 | Reservado |
| S8-1 | Reservado |
| S8-3 | Reservado |

### Tabela Resumo — Switches Configuráveis

| Switch | Função | Default | Alternativa |
|--------|--------|---------|-------------|
| S6-2 | Clear indoor addresses | No action | Clear all |
| S6-3 | Addressing mode | **Auto** | Manual |
| S8-2 | Start-up time | **12 min** | 7 min |
| S13 | Controller type | **New** | Old |

### Tabela Resumo — Encoders

| Encoder | Função | Default | Range |
|---------|--------|---------|-------|
| ENC1 | Outdoor unit address | **0** (Master) | 0-2 |
| ENC2 | Outdoor unit capacity | **0** (8HP) | 0-B (8-30HP) |
| ENC3+S12 | Number of indoor units | — | 0-64 |
| ENC4 | Network address | **0** | 0-7 |
| ENC5 | Silent mode | **0** (Night 6h/10h) | 0-B, F |

---

## 4. INFOBOX DE CAMPO / AVISOS

> [!CAUTION]
> **ENC2 (CAPACIDADE) É CONFIGURADO EM FÁBRICA — NÃO ALTERE:**
> O manual especifica explicitamente que o ENC2 é "factory-set and its setting should not be changed". Alterar o ENC2 em campo pode causar operação do compressor em frequências incompatíveis com seu hardware, resultando em sobrecorrente (xH4), superaquecimento (P4/H6), ou dano permanente. Se a unidade foi recebida com ENC2 incorreto, contatar a Trane.

> [!WARNING]
> **SAÍDA AUTOMÁTICA DO SILENT MODE A 3.5 MPa:**
> Se o sistema está configurado para Silent Mode ou Super Silent Mode e a pressão de descarga (Pc) ultrapassa **3.5 MPa**, o sistema **sai automaticamente** do modo silencioso e opera em capacidade plena. Isso é uma proteção — se o cliente reclama que a unidade "faz barulho à noite mesmo com modo silencioso", pode ser porque a pressão está alta (condensador sujo, temperatura ambiente extrema). O técnico deve verificar e limpar o condensador.

> [!IMPORTANT]
> **S8-2: REDUZIR STARTUP DE 12 MIN PARA 7 MIN — COM CUIDADO:**
> O switch S8-2 permite reduzir o tempo de startup de 12 para 7 minutos. Isso só deve ser feito em sistemas onde **todas as evaporadoras já estão configuradas e estáveis**. Se novas evaporadoras forem adicionadas ao sistema, o S8-2 deve ser restaurado para a posição default (12 min) para garantir que a busca de endereços detecte todas as unidades.

> [!TIP]
> **SUPER SILENT MODE B = 50% DE CAPACIDADE — ATENÇÃO AO DIMENSIONAMENTO:**
> O Super Silent Mode 4 (ENC5=B) limita a capacidade máxima a **50%**. Em um sistema 24HP, isso significa que o máximo disponível é 12HP. Se a carga térmica noturna do ambiente excede 12HP, o sistema **não conseguirá manter a temperatura** mesmo operando continuamente. O técnico deve verificar se o modo silencioso escolhido é compatível com a carga térmica do projeto.

---

**Parte 4 — FIELD SETTINGS está completa! Podemos prosseguir para a Parte 5?**
