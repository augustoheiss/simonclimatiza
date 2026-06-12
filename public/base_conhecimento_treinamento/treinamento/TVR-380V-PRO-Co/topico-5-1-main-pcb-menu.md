# TÓPICO 5.1 — Componentes Elétricos: Layout da Caixa de Controle e Placa Principal (Main PCB)

---

## 1. NESTED SCHEMA METADATA

```
id_secao: "secao-5"
titulo_secao: "Componentes Elétricos e Diagramas de Fiação"
id_aula: "aula-5-1"
titulo_aula: "Layout da Caixa de Controle, Portas da Main PCB, Botões de Navegação, Sistema de Menu e Display Digital"
descricao_aula: "Estudo detalhado do hardware eletrônico da unidade externa TVR Pro CO Series: layout da caixa de controle para chassi 8-16HP e 18-30HP, mapeamento completo das 24 portas (CN) da placa principal com função e tensão, botões de operação (SW3-SW6), sistema de menu hierárquico (n14 a nF2) com funções de debug, manutenção, limitação de potência, modos de economia e configurações especiais, e tabela completa de 40+ parâmetros de System Check exibidos nos displays DSP1/DSP2."
```

---

## 2. CONTEÚDO TÉCNICO DA AULA

### 2.1 Layout da Caixa de Controle (Figures 5-1.1 a 5-1.4)

A caixa de controle elétrico da unidade externa possui **duas camadas** (top layer e bottom layer) com configuração diferente entre chassi pequenos e grandes:

#### Chassi 8-16HP (Figures 5-1.1 e 5-1.2):

| Camada | Componentes |
|--------|------------|
| **Top layer** | Main PCB + Filter board + Power supply terminals + 2× Inductor |
| **Bottom layer** | **1×** Inverter module + Reactor + **1×** Fan module |

#### Chassi 18-30HP (Figures 5-1.3 e 5-1.4):

| Camada | Componentes |
|--------|------------|
| **Top layer** | Main PCB + Filter board + Power supply terminals + 2× Inductor |
| **Bottom layer** | **2×** Inverter module + **2×** Reactor + **2×** Fan module |

**Diferença fundamental:** O chassi 18-30HP possui **dois módulos inverter** (um para cada compressor BP1 e BP2), **dois reatores** e **dois módulos fan** (um para cada ventilador FAN1 e FAN2), refletindo a configuração de compressor dual.

---

### 2.2 Portas da Placa Principal — Main PCB Ports (Table 5-2.1)

Mapeamento completo das 24 portas identificadas na Figure 5-2.1:

#### Portas de Sensores (Baixa Tensão — 0-5V DC)

| Label | Port Code | Função | Tensão |
|-------|-----------|--------|--------|
| 1 | CN18 | Reservado | / |
| 2 | CN19 | Conexão do **low pressure switch** (pressostato de baixa) | 0V ou 5V DC |
| 3 | CN4 | Sensor de **temperatura de topo do compressor** (single unit) ou sensor A top (dual) | 0-5V DC (variável) |
| 4 | CN5 | Sensor de **temperatura do tubo de descarga** (single) ou compressor B top (dual) | 0-5V DC (variável) |
| 5 | CN3 | Sensor de temperatura do **módulo inverter A** | 0-5V DC (variável) |
| 6 | CN13 | Sensor de temperatura do **módulo inverter B** | 0-5V DC (variável) |
| 7 | CN17 | Conexão do sensor de **alta pressão** | 0-5V DC (variável) |
| 11 | CN1 | Sensor de **temperatura ambiente** (outdoor) + sensor de **temperatura do trocador de calor** | 0-5V DC (variável) |

#### Portas de Comunicação (2.5-2.7V DC)

| Label | Port Code | Função | Tensão |
|-------|-----------|--------|--------|
| 13 | CN22-CN23 | Porta de comunicação com **outras unidades externas** (master-slave) | 2.5-2.7V DC |
| 14 | CN26 | Porta de comunicação com **placa de drive do compressor** | 2.5-2.7V DC |
| 15 | CN27 | Porta de comunicação com **placa de drive do fan** | 2.5-2.7V DC |
| 16 | CN9 | Porta de **comunicação USB** | 2.5-2.7V DC |

#### Portas de Drive/Controle (0-12V DC ou 220V AC)

| Label | Port Code | Função | Tensão |
|-------|-----------|--------|--------|
| 19 | CN70 | Porta de **drive da EXVA** (válvula de expansão eletrônica) | 0V ou 12V DC |
| 21 | CN82 | Porta de controle do **relé para placa de filtro AC** | 0V ou 12V DC |
| 22 | CN41, CN43, CN46 | Portas de drive das **válvulas solenoides** (SV2, SV4, SV7) | 0V ou 220V AC |

#### Portas de Alimentação (Alta Tensão)

| Label | Port Code | Função | Tensão |
|-------|-----------|--------|--------|
| 23 | CN30 | **Entrada de alimentação principal** da placa | 220V AC (A/B/C e N) ou 380V AC (A, B e C) |
| 24 | CN66-CN67 | Alimentação do **aquecedor de cárter** (crankcase heater) do compressor | 220V AC |

#### Portas Reservadas

| Label | Port Code | Status |
|-------|-----------|--------|
| 8 | CN15 | Reservado |
| 9 | CN16 | Reservado |
| 10 | CN8 | Reservado |
| 12 | CN6 | Reservado |
| 17 | CN28 | Reservado |
| 18 | CN71 | Reservado |
| 20 | CN72 | Reservado |

---

### 2.3 Botões de Operação da Main PCB (Table 5-2.2)

A placa principal possui **4 botões** localizados na parte inferior central:

| Botão | Nome | Função |
|-------|------|--------|
| **SW3** | **UP** | Em modo de menu: botão **anterior/próximo** para navegação. Em modo normal: não utilizado. |
| **SW4** | **DOWN** | Em modo de menu: botão **anterior/próximo** para navegação. **Fora do menu:** botão para **system check** (exibir informações do sistema). |
| **SW5** | **MENU** | **Entrar / sair** do modo de menu. **Pressão longa (5 segundos)** para entrar no menu. |
| **SW6** | **OK** | **Confirmar** seleção no modo de menu. |

---

### 2.4 Sistema de Menu da Main PCB (Tables 5-2.3 e 5-2.4)

#### Navegação no Menu (Flowchart)

1. **Long press SW5 (MENU)** por 5 segundos → Display mostra "n1"
2. **SW3/SW4 (UP/DOWN)** → Selecionar menu de 1° nível: n1, n2, n3, n4 ou nb
3. **SW6 (OK)** → Entrar no menu selecionado
4. **SW3/SW4 (UP/DOWN)** → Selecionar submenu de 2° nível: nX1, nX2, nX3...
5. **SW6 (OK)** → Confirmar e ativar a função
6. **Short press SW5 (MENU)** → Sair do menu

#### Tabela de Funções do Menu (Table 5-2.3)

##### Menus de Diagnóstico

| Display | Função | Observações |
|---------|--------|-------------|
| **n14** | **Debug mode** | Apenas Master. Todas as IDU em modo cooling. |
| **n16** | **Maintenance mode** | Apenas Master. Sistema não verifica número de IDUs. Auto-exit: 60 min. |
| **n26** | **Backup run** | Apenas para ODU com 2 compressores. Se 1 falhar, o outro opera até 4 dias. Auto-stop. |
| **n27** | **Vacuum mode** | Modo de manutenção: display mostra "R006", todas as solenoides abrem, EXVs abrem ao máximo. Auto-exit: 8 horas. |
| **n31** | **History error codes** | Exibe os 10 erros mais recentes. |
| **n32** | **Cleaning history error codes** | Limpa o histórico de erros. |
| **n34** | **Factory reset** | Apenas Master. Restaura configurações de fábrica. |

##### Menus de Limitação de Potência (Power Limitation)

| Display | Função | Capacidade Máxima |
|---------|--------|:-----------------:|
| **n41** | Power limitation mode 1 | **100%** |
| **n42** | Power limitation mode 2 | **90%** |
| **n43** | Power limitation mode 3 | **80%** |
| **n44** | Power limitation mode 4 | **70%** |
| **n45** | Power limitation mode 5 | **60%** |
| **n46** | Power limitation mode 6 | **50%** |
| **n47** | Power limitation mode 7 | **40%** |

**Uso:** Para limitar a capacidade máxima em instalações onde a rede elétrica não suporta 100% da carga, ou em situações temporárias de restrição de energia.

##### Menus de Configuração Especial

| Display | Função | Observações |
|---------|--------|-------------|
| **nb1** | Fahrenheit degree setting (°F) | Apenas Master |
| **nb2** | Celsius degree setting (°C) | Apenas Master |
| **nb3** | **Exit auto power save mode** | Apenas Master. Fixa a temp. de evaporação (cooling). |
| **nb4** | **Enter auto power save mode** | Apenas Master. Ajusta automaticamente temp. de evaporação para economia. |
| **nb5** | **Auto snow-blowing mode 1** (customized) | Por temp. T4: fan para por 15 min, opera por 2 min, ciclicamente. |
| **nb6** | **Auto snow-blowing mode 2** (customized) | Por temp. T4: fan para por 30 min, opera por 2 min, ciclicamente. |
| **nb7** | **Exit auto snow-blowing mode** | — |
| **nb8** | **VIP address setting** | Display mostra "IdXX" — configurar endereço VIP via UP/DOWN + OK. |

#### Como Sair do Menu (Table 5-2.4)

| Modo | Saída Manual | Saída Automática | System Restart |
|------|-------------|-----------------|----------------|
| Debug mode | Long press SW6 (OK) fora do menu | Após 120 minutos | Invalid (não reinicia) |
| Maintenance mode | — | Após **60 minutos** | Invalid |
| Backup run | — | Após **4 dias** ou ambos compressores falham | Invalid |
| Vacuum mode | Long press SW6 (OK) fora do menu | Após **8 horas** | Invalid |
| Power limitation | Selecionar n41 (100%) | — | Valid (mantém após restart) |
| Auto power save | Selecionar nb3 | — | Valid |
| Snow-blowing | Selecionar nb7 | — | Valid |
| VIP address | — | — | Valid |
| °F / °C setting | — | — | Valid |

---

### 2.5 System Check — Parâmetros via UP/DOWN (Table 5-2.5)

Pressionando **SW4 (DOWN)** fora do menu (após 1 hora de operação), os displays DSP1 e DSP2 exibem **40+ parâmetros** em sequência:

#### Parâmetros de Identificação (DSP1: 0 a 7)

| DSP1 | Parâmetro | Obs. |
|------|-----------|------|
| 0.-- | Unit address | 0=Master, 1=Slave1, 2=Slave2 |
| 1.-- | Unit capacity | 0=8HP a C=30HP |
| 2.-- | Number of outdoor units | Apenas Master |
| 3.-- | Number of indoor units (PCB setting) | Apenas Master |
| 4.-- | Total capacity of outdoor unit | Apenas Master (slave exibe "--") |
| 5.-- | Total capacity requirement of IDUs | Apenas Master |
| 6.-- | Corrected capacity req. of Master | Apenas Master |
| 7.-- | Operating mode | 0=off, 2=cooling, 3=null, 4=forced cooling |

#### Parâmetros de Operação (DSP1: 8 a 18)

| DSP1 | Parâmetro (DSP2 = valor real) |
|------|-------------------------------|
| 8.-- | Capacidade atual de operação da ODU |
| 9.-- | Fan A speed index (ref. Table 3-4.2) |
| 10.-- | Fan B speed index |
| 11.-- | Temperatura do tubo do evaporador indoor (T2/T2B) em °C |
| 12.-- | Temperatura do trocador de calor (T3) em °C |
| 13.-- | Temperatura ambiente outdoor (T4) em °C |
| 14.-- | Temperatura de descarga compressor A em °C |
| 15.-- | Temperatura de descarga compressor B em °C |
| 16.-- | Temperatura do heatsink inverter A em °C |
| 17.-- | Temperatura do heatsink inverter B em °C |
| 18.-- | Grau de superaquecimento da descarga em °C |

#### Parâmetros de Posição e Pressão (DSP1: 21 a 22)

| DSP1 | Parâmetro | Obs. |
|------|-----------|------|
| 21.-- | **Posição EXVA** | Steps = valor × 4 (para 3000P: valor × 24) |
| 22.-- | Pressão de descarga do compressor (MPa) | Valor = display × 0.1 |

#### Parâmetros de Comunicação e Status (DSP1: 24 a 28)

| DSP1 | Parâmetro |
|------|-----------|
| 24.-- | Número de IDUs em comunicação com o Master |
| 25.-- | Número de IDUs atualmente operando |
| 27.-- | Silent mode (0-11 conforme Tópico 4.1) |
| 28.-- | Static pressure mode (0-4) |

#### Parâmetros Elétricos (DSP1: 31 a 40)

| DSP1 | Parâmetro | Obs. |
|------|-----------|------|
| 31.-- | DC voltage A | Valor = display × 10 |
| 32.-- | DC voltage B | Valor = display × 10 |
| 37.-- | Refrigerant quantity (0-5) | 0=normal a 5=critically insufficient |
| 39.-- | Power mode (0-16) | 0=100% a 6=40%, 10-16=auto power save modes |
| 40.-- | Most recent error/protection code | "--" = nenhum erro desde startup |

---

### 2.6 Display Digital — Saída em Diferentes Estados (Table 5-2.6)

| Estado da ODU | DSP1 exibe | DSP2 exibe |
|--------------|-----------|-----------|
| **Standby** | Endereço da unidade | Nº de IDUs em comunicação |
| **Normal (1 compressor)** | -- | Velocidade do compressor (rps) |
| **Normal (2 compressores)** | Velocidade compressor A (rps) | Velocidade compressor B (rps) |
| **Erro ou proteção** | -- ou código placeholder | Código de erro/proteção |
| **Menu mode** | Conforme Table 5-2.3 | Conforme Table 5-2.3 |
| **System check** | Número do parâmetro (ex: 13.--) | Valor do parâmetro |

---

## 3. TABELAS E PARÂMETROS TÉCNICOS

### Refrigerant Quantity — Interpretação (Nota 7 da Table 5-2.5)

| Valor | Interpretação |
|-------|---------------|
| 0 | Normal |
| 1 | Slightly excessive |
| 2 | Significantly excessive |
| 3 | Slightly insufficient |
| 4 | Significantly insufficient |
| 5 | **Critically insufficient** |

### Power Mode — Interpretação (Nota 8 da Table 5-2.5)

| Valor | Modo | Capacidade |
|-------|------|-----------|
| 0 | 100% output | Plena |
| 1 | 90% output | n42 |
| 2 | 80% output | n43 |
| 3 | 70% output | n44 |
| 4 | 60% output | n45 |
| 5 | 50% output | n46 |
| 6 | 40% output | n47 |
| 10 | Auto power save, 100% | EMS mode |
| 11 | Auto power save, 90% | EMS mode |
| 12 | Auto power save, 80% | EMS mode |
| 13 | Auto power save, 70% | EMS mode |
| 14 | Auto power save, 60% | EMS mode |
| 15 | Auto power save, 50% | EMS mode |
| 16 | Auto power save, 40% | EMS mode |

---

## 4. INFOBOX DE CAMPO / AVISOS

> [!CAUTION]
> **CN30 — ALIMENTAÇÃO PRINCIPAL: TENSÃO PERIGOSA (220V/380V AC):**
> O conector CN30 é a entrada de alimentação principal da placa. **NUNCA desconectar CN30 com o sistema energizado.** Sempre desligar o disjuntor principal e aguardar 5 minutos (descarga dos capacitores do módulo inverter) antes de manipular CN30 ou qualquer componente na camada inferior da caixa de controle. A tensão nos capacitores do módulo inverter pode atingir **485-645V DC** mesmo após desligar o disjuntor.

> [!WARNING]
> **VACUUM MODE (n27) — ABRE TODAS AS VÁLVULAS E EXVs:**
> O modo n27 (Vacuum) é usado EXCLUSIVAMENTE durante manutenção para vácuo ou pressurização do sistema. Ele abre todas as solenoides e EXVs ao máximo. Display mostra "R006". **NÃO ativar n27 durante operação normal** — isso inundará os compressores com líquido. O modo sai automaticamente após 8 horas. Duração máxima segura para pump-down: verificar conforme procedimento de manutenção.

> [!IMPORTANT]
> **BACKUP RUN (n26) — MÁXIMO 4 DIAS, APENAS COM 2 COMPRESSORES:**
> O modo n26 permite que um compressor funcione quando o outro falhou. Este modo opera por no máximo **4 dias** e depois para automaticamente. É uma solução de **emergência temporária**, não permanente. Disponível apenas em modelos 18-30HP (dual compressor). O técnico deve programar o reparo do compressor falhado dentro de 4 dias.

> [!TIP]
> **SYSTEM CHECK (SW4/DOWN) — FERRAMENTA DE DIAGNÓSTICO MAIS PODEROSA:**
> Pressionar SW4 (DOWN) fora do modo menu exibe 40+ parâmetros em tempo real. Os mais úteis para diagnóstico rápido: **DSP1=13** (T4 — temp. ambiente), **DSP1=14/15** (temp. descarga A/B), **DSP1=21** (EXVA position), **DSP1=22** (Pc — pressão de descarga), **DSP1=37** (quantidade de refrigerante), **DSP1=40** (último erro). O sistema deve operar por no mínimo **1 hora** antes de usar o System Check para garantir leituras estáveis.

---

**Podemos prosseguir para o Tópico 5.2 (Compressor Inverter Module e Wiring Diagrams)?**
