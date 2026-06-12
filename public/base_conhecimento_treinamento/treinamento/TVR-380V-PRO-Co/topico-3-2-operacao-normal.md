# TÓPICO 3.2 — Controle de Operação Normal: Compressores, EXV e Ventiladores

---

## 1. NESTED SCHEMA METADATA

```
id_secao: "secao-3"
titulo_secao: "Controle"
id_aula: "aula-3-2"
titulo_aula: "Controle de Operação Normal: Modulação de Compressores, Lógica de Prioridade/Rotação, Controle de EXVA e Tabela de Velocidade dos Ventiladores"
descricao_aula: "Análise completa do controle em regime permanente (Normal Operation) do TVR Pro CO Series, cobrindo: controle de saída do compressor (frequência baseada em carga com correção por temperatura ambiente), controle de step do compressor (incremento 1 rps / decremento 2 rps), lógica de prioridade e rotação de compressores em sistemas de 1, 2 e 3 módulos (BP1 sempre prioritário sobre BP2), controle da EXVA (0-3000 steps, posição standby 352×6), e tabela completa de 38 índices de velocidade dos ventiladores DC por classe de chassi."
```

---

## 2. CONTEÚDO TÉCNICO DA AULA

### 2.1 Controle de Componentes durante Operação Normal (Table 3-4.1)

Após a sequência de partida (Tópico 3.1), o sistema entra no regime de **Operação Normal**, onde cada componente é controlado por uma lógica específica e contínua:

| Componente | Label | 8-12HP | 14-16HP | 18-22HP | 24-30HP | Controle durante Operação Normal |
|-----------|-------|:------:|:-------:|:-------:|:-------:|----------------------------------|
| **Inverter compressor A** | BP1 | ● | ● | ● | ● | Controlado conforme a **demanda de carga** (load requirement) |
| **Inverter compressor B** | BP2 | — | — | ● | ● | Controlado conforme a **demanda de carga** |
| **DC fan motor A** | FAN1 | ● | ● | ● | ● | Controlado conforme a **pressão de descarga (Pc)** |
| **DC fan motor B** | FAN2 | — | — | ● | ● | Controlado conforme a **pressão de descarga (Pc)** |
| **Electronic expansion valve A** | EXVA | ● | ● | ● | ● | Posição (steps) de **0 (fully closed)** a **3000 (fully open)**, controlada conforme a **temperatura de descarga** |
| **Solenoid valve SV2** (Liquid injection) | SV2 | ● | ● | ● | ● | Controlada conforme a **temperatura de descarga** |
| **Solenoid valve SV4** (Oil balance) | SV4 | ● | ● | ● | ● | **Aberta regularmente** (ciclo automático de retorno de óleo) |
| **Solenoid valve SV7** (Refrigerant bypass) | SV7 | ● | ● | ● | ● | Controlada conforme: **temperatura ambiente**, **pressão de descarga**, **frequência do compressor**, **grau de superaquecimento**, **demanda de carga** e **temperatura/pressão de descarga** |

**Diferença Startup vs. Normal Operation:**
- Na **partida**, a SV4 tem um timer fixo de 200s antes de abrir pela primeira vez
- Na **operação normal**, a SV4 opera em ciclo contínuo (aberta regularmente)
- A **SV7** no normal operation é controlada por **5 variáveis simultâneas**, tornando-a o componente com a lógica de controle mais complexa

---

### 2.2 Compressor Output Control — Controle de Saída/Frequência (Seção 4.2)

O compressor inverter do TVR Pro CO modula sua frequência (velocidade de rotação em rps) conforme a **demanda de carga** do sistema. A lógica segue dois estágios:

#### Estágio 1 — Antes da Partida do Compressor:
1. As unidades externas (outdoor units) **estimam a demanda** com base na **capacidade nominal** das unidades internas atualmente ligadas
2. A estimativa é **corrigida pela temperatura ambiente** (lida pelo sensor T4)
3. Os compressores iniciam a partida na frequência correspondente à demanda corrigida

#### Estágio 2 — Durante a Operação:
1. Os compressores são controlados continuamente com base na **capacidade nominal** das unidades internas ligadas e na **temperatura do heat exchanger** de cada unidade interna
2. Se a demanda real pode ser atendida por **um único módulo**, apenas um módulo opera
3. Se a demanda exige **todos os módulos**, a carga é distribuída em **média ponderada** (weighted average) entre os módulos, e cada módulo opera conforme sua parcela da carga distribuída

**Exemplo prático:**
- Sistema com 2 módulos externos (18HP + 18HP = 36HP total)
- 4 evaporadoras ligadas somando 24HP de demanda
- Demanda corrigida: 24HP pode ser atendida por ambos os módulos operando a ~67% cada, ou por 1 módulo a 100% + 1 módulo a menor capacidade
- O sistema calcula a distribuição ótima automaticamente

---

### 2.3 Compressor Step Control — Controle de Incremento de Frequência (Seção 4.3)

A velocidade do compressor é ajustada em **incrementos discretos** medidos em **rps** (rotações por segundo):

| Parâmetro | Valor |
|-----------|-------|
| **Incremento de velocidade** (aumento) | **1 rps** por step |
| **Decremento de velocidade** (redução) | **2 rps** por step |

**Regra assimétrica:** O compressor **desacelera 2× mais rápido do que acelera**. Isso é intencional:
- **Acelerar devagar** (1 rps/step) evita picos de corrente e permite a estabilização da pressão
- **Desacelerar rápido** (2 rps/step) permite resposta rápida a quedas de demanda, evitando operação desnecessária em alta frequência (economia de energia e proteção do compressor)

---

### 2.4 Operating Priority and Rotation of Compressors — Prioridade e Rotação (Seção 4.4)

Em sistemas com **múltiplos compressores e/ou múltiplos módulos externos**, a placa controladora implementa um sistema de **prioridade e rotação** para equalizar o desgaste entre os compressores.

#### Regra de Prioridade Fundamental:
> Em unidades com dois compressores, o **Inverter compressor A (BP1)** sempre opera com **prioridade** sobre o **Inverter compressor B (BP2)**.

Isso significa que em carga parcial, o BP1 liga primeiro e o BP2 só entra quando a demanda excede a capacidade do BP1 sozinho.

#### Rotação em Sistema com 1 Módulo Externo (Figure 3-4.1):

**Configuração com 1 compressor (8-16HP):**
- Apenas o BP opera. Não há rotação.

**Configuração com 2 compressores (18-30HP):**
- **Ciclo 1:** BP1 opera → BP2 em espera
- **Ciclo 2:** BP2 opera → BP1 em espera
- A rotação alterna a cada ciclo de partida para equalizar horas de operação

#### Rotação em Sistema com 2 Módulos Externos (Figure 3-4.2):

O sistema suporta diversas combinações de módulos. A rotação é por **módulo** (não por compressor individual):

| Configuração | Ciclo ① | Ciclo ② |
|-------------|---------|---------|
| **2 módulos, 1 comp. cada** (ex: 2× 8HP) | No. 1 → No. 2 | No. 2 → No. 1 |
| **2 módulos + 1 módulo 1-comp.** (ex: 14HP + 14HP + 8HP) | No. 1 → No. 2 → No. 3 | No. 2 → No. 3 → No. 1 |
| **2 módulos, 2 comp. cada** (ex: 2× 18HP) | No. 1 → No. 2 → No. 3 → No. 4 | No. 3 → No. 4 → No. 1 → No. 2 |

#### Rotação em Sistema com 3 Módulos Externos (Figure 3-4.3):

Com 3 módulos, a rotação segue **3 ciclos** (①, ②, ③) para garantir que cada módulo assuma todas as posições de prioridade:

| Configuração | Ciclo ① | Ciclo ② | Ciclo ③ |
|-------------|---------|---------|---------|
| **3 módulos, 1 comp. cada** | No. 1 → No. 2 → No. 3 | No. 3 → No. 1 → No. 2 | No. 2 → No. 3 → No. 1 |
| **3 módulos, 2 comp. cada** (6 comp. total) | 1→2→3→4→5→6 | 5→6→1→2→3→4 | 3→4→5→6→1→2 |

> **Nota do manual:** Os endereços configurados na placa principal (main PCB) para "master unit", "slave unit 1" e "slave unit 2" **NÃO mudam** durante a rotação. A rotação é apenas de **prioridade operacional**, não de endereçamento.

---

### 2.5 Electronic Expansion Valve Control — Controle da EXVA (Seção 4.5)

A válvula de expansão eletrônica principal (EXVA) é controlada em **steps** (passos do motor de passo):

| Parâmetro | Valor |
|-----------|-------|
| **Range total** | **0 steps** (fully closed) a **3000 steps** (fully open) |
| **Posição de standby** (todos os módulos outdoor em espera) | **352 × 6 = 2112 steps** |

#### Lógica de Controle em Modo Cooling:

| Condição do Sistema | Posição da EXVA | Controle |
|--------------------|-----------------|----------|
| **Todos os módulos outdoor em standby** | **352 × 6 steps** (2112 steps) | Posição fixa de espera |
| **Alguns módulos running + alguns em standby** | Módulos running: controlada por **temperatura de descarga**; Módulos standby: **fully closed** (0 steps) | Diferenciado por estado |
| **Todos os módulos running** | Controlada por **temperatura de descarga** | Modulação contínua |

**Por que a posição de standby é 2112 steps (não 0)?**
Quando todos os módulos estão em standby (sem demanda), a EXVA fica parcialmente aberta (2112 steps) para manter um leve fluxo de refrigerante que previne o acúmulo de pressão diferencial excessiva. Isso permite que a próxima partida seja mais suave e rápida.

**Diferença entre EXVA de módulo running vs. standby:**
Se em um sistema multi-módulo alguns módulos estão rodando e outros em standby, as EXVAs dos módulos em standby são **totalmente fechadas** (0 steps) — diferentemente do cenário onde TODOS estão em standby (2112 steps).

---

### 2.6 Outdoor Fan Control — Tabela Completa de Velocidade (Seção 4.6)

A velocidade dos ventiladores DC é controlada por um **índice de velocidade** (fan speed index) de **0 a 37**, resultando em **38 níveis de velocidade**. A velocidade real (em rpm) varia conforme a classe de chassi.

#### Tabela Completa de Velocidade (Table 3-4.2) — Extraída do Manual:

| Index | 8-16HP (rpm) | 18-22HP FANA / FANB (rpm) | 24-30HP FANA / FANB (rpm) |
|:-----:|:------------:|:-------------------------:|:-------------------------:|
| 0 | 0 | 0 / 0 | 0 / 0 |
| 1 | 120 | 150 / 0 | 120 / 0 |
| 2 | 150 | 190 / 0 | 150 / 0 |
| 3 | 170 | 230 / 0 | 170 / 0 |
| 4 | 190 | 270 / 0 | 190 / 0 |
| 5 | 210 | 310 / 0 (150 / 150) | 210 / 0 |
| 6 | 230 | 350 / 0 (180 / 180) | 230 / 0 |
| 7 | 250 | 380 / 0 (210 / 210) | 250 / 0 (120 / 120) |
| 8 | 270 | 410 / 0 (240 / 240) | 270 / 0 (150 / 150) |
| 9 | 290 | 280 / 280 | 330 / 0 (170 / 170) |
| 10 | 310 | 320 / 320 | 370 / 0 (190 / 190) |
| 11 | 330 | 360 / 360 | 210 / 210 |
| 12 | 350 | 400 / 400 | 230 / 230 |
| 13 | 370 | 440 / 440 | 250 / 250 |
| 14 | 390 | 480 / 480 | 270 / 270 |
| 15 | 410 | 520 / 520 | 290 / 290 |
| 16 | 430 | 560 / 560 | 310 / 310 |
| 17 | 450 | 600 / 600 | 330 / 330 |
| 18 | 470 | 640 / 640 | 350 / 350 |
| 19 | 490 | 680 / 680 | 370 / 370 |
| 20 | 510 | 720 / 720 | 400 / 400 |
| 21 | 530 | 750 / 750 | 430 / 430 |
| 22 | 560 | 780 / 780 | 470 / 470 |
| 23 | 580 | 800 / 800 | 510 / 510 |
| 24 | 600 | 840 / 840 | 550 / 550 |
| 25 | 630 | 880 / 880 | 600 / 600 |
| 26 | 650 | 910 / 880 | 650 / 650 |
| 27 | 700 | 910 / 910 | 680 / 680 |
| 28 | 750 | 940 / 910 | 700 / 700 |
| 29 | 800 | 940 / 940 | 750 / 750 |
| 30 | 850 | 980 / 940 | 780 / 780 |
| 31 | 880 | 980 / 980 | 800 / 800 |
| 32 | 910 | 1000 / 980 | 830 / 830 |
| 33 | 930 | 1000 / 1000 | 850 / 850 |
| 34 | 960 | 1020 / 1000 | 870 / 870 |
| 35 | 1000 | 1020 / 1020 | 890 / 890 |
| 36 | 1050 | 1050 / 1050 | 920 / 920 |
| 37 | 1100 | 1100 / 1100 | 950 / 950 |

#### Regras Especiais para 18-22HP e 24-30HP (Dual Fan):

**Nota do manual:** Para unidades 18-22HP nos índices 5 a 8, e para unidades 24-30HP nos índices 7 a 10:
- **Quando a velocidade diminui:** a velocidade mostrada **entre parênteses** é utilizada (ambos os fans operam na mesma velocidade reduzida)
- **Quando a velocidade aumenta:** a velocidade mostrada **sem parênteses** é utilizada (FANA opera em velocidade mais alta enquanto FANB pode estar desligado)

**Tradução prática:** Nos índices intermediários (transição de 1 para 2 ventiladores), o sistema usa uma lógica de histerese:
- **Subindo** de velocidade: mantém apenas o FANA rodando mais rápido antes de ligar o FANB
- **Descendo** de velocidade: mantém ambos os fans rodando em velocidade menor antes de desligar o FANB

---

## 3. TABELAS E PARÂMETROS TÉCNICOS

### Tabela Resumo — Regras de Incremento do Compressor

| Direção | Incremento | Velocidade |
|---------|-----------|------------|
| Aceleração (↑) | **+1 rps** por step | Lenta (protege contra picos de corrente) |
| Desaceleração (↓) | **-2 rps** por step | Rápida (resposta a queda de demanda) |

### Tabela Resumo — Posições da EXVA por Estado do Sistema

| Estado do Sistema | EXVA Position |
|-------------------|---------------|
| Todos outdoor em standby | **2112 steps** (352×6) |
| Módulos running | Controlada por temp. descarga (0-3000) |
| Módulos standby (com outros running) | **0 steps** (fully closed) |

### Tabela Resumo — Velocidade Máxima do Fan por Classe

| Classe | Vel. Máx. FANA (rpm) | Vel. Máx. FANB (rpm) | Index Máx. |
|--------|---------------------|---------------------|-----------|
| 8-16HP | 1100 | — | 37 |
| 18-22HP | 1100 | 1100 | 37 |
| 24-30HP | 950 | 950 | 37 |

---

## 4. INFOBOX DE CAMPO / AVISOS

> [!CAUTION]
> **PRIORIDADE BP1 > BP2 — NÃO ALTERE O ENDEREÇAMENTO PARA "BALANCEAR":**
> O manual especifica que o BP1 (Inverter compressor A) **sempre** tem prioridade sobre o BP2. Técnicos às vezes tentam trocar os endereços na placa para "equalizar" o desgaste. Isso é **desnecessário e potencialmente perigoso**: o sistema já implementa rotação automática de prioridade entre módulos. Os endereços "master unit", "slave unit 1" e "slave unit 2" na placa principal **NÃO devem ser alterados** — a rotação de prioridade é lógica, não física.

> [!WARNING]
> **EXVA EM 2112 STEPS DURANTE STANDBY — NÃO É DEFEITO:**
> Se o técnico verificar a posição da EXVA pelo menu de diagnóstico e encontrar **2112 steps** (352×6) com todos os módulos em standby, isso é **comportamento normal**. A válvula fica parcialmente aberta para manter um leve equilíbrio de pressão no circuito. Forçar a EXVA para 0 steps durante standby pode causar dificuldade na próxima partida.

> [!IMPORTANT]
> **CONTROLE DO FAN — HISTERESE NA TRANSIÇÃO DE 1 PARA 2 VENTILADORES:**
> Nas unidades 18-22HP e 24-30HP, a transição entre 1 ventilador (FANA apenas) e 2 ventiladores (FANA + FANB) não é simétrica. Quando a velocidade **aumenta**, o sistema mantém apenas o FANA em alta rotação antes de ligar o FANB. Quando a velocidade **diminui**, ambos os fans continuam operando em velocidade reduzida antes de desligar o FANB. Essa histerese evita liga-desliga frequente do FANB.

> [!TIP]
> **DIAGNÓSTICO — VELOCIDADE ASSIMÉTRICA DO COMPRESSOR:**
> Se o compressor parece **demorar para acelerar** mas **desacelera rapidamente**, isso é **comportamento normal**: +1 rps para subir, -2 rps para descer. Essa assimetria é intencional para proteção e economia. Se o comportamento for o oposto (acelera rápido mas não desacelera), pode indicar falha na comunicação entre a placa e o módulo inverter.

---

**Podemos prosseguir para o Tópico 3.3?**
