# TÓPICO 3.4 — Controle Especial: Duty Cycling e Operação de Retorno de Óleo

---

## 1. NESTED SCHEMA METADATA

```
id_secao: "secao-3"
titulo_secao: "Controle"
id_aula: "aula-3-4"
titulo_aula: "Controle Especial: Duty Cycling das Unidades Externas e Operação Automática de Retorno de Óleo (Oil Return) com Tabelas de Componentes ODU/IDU"
descricao_aula: "Estudo dos dois mecanismos de controle especial do TVR Pro CO Series: (1) Outdoor Unit Duty Cycling — rotação de prioridade entre módulos externos para equalizar níveis de óleo e prevenir queima de compressor, com diagrama de rotação de prioridades para sistemas multi-módulo; (2) Oil Return Operation — ciclo automático de recuperação de óleo ativado a cada 8 horas (primeiro disparo aos 140 minutos de operação acumulada), com tabelas completas de controle de componentes ODU (EXVA a 480 steps, compressores em frequência fixa) e IDU (EXV a 300 steps para unidades em standby/thermo off). Indicação 'd0' no display durante Oil Return."
```

---

## 2. CONTEÚDO TÉCNICO DA AULA

### 2.1 Outdoor Unit Duty Cycling — Rotação de Serviço das Unidades Externas (Seção 6.1)

#### O que é Duty Cycling?

Em sistemas com **múltiplas unidades externas** (2 ou 3 módulos), o Duty Cycling é um mecanismo automático que **alterna a prioridade operacional** entre os módulos. O objetivo é prevenir a **queima do compressor** causada pelo desbalanceamento nos níveis de óleo entre as unidades externas.

**Problema que resolve:** Em carga parcial, o módulo de maior prioridade opera mais tempo que os outros. Com o tempo, o óleo lubrificante tende a migrar para os módulos que operam mais, deixando os outros com nível de óleo insuficiente. Quando esses módulos de menor prioridade são finalmente acionados, o compressor pode operar com lubrificação inadequada.

#### Quando o Duty Cycling é Ativado:

| Condição de Ativação | Descrição |
|---------------------|-----------|
| **Após Oil Return Operation** | Imediatamente após a conclusão de um ciclo de retorno de óleo |
| **Após Defrosting Operation** | Imediatamente após a conclusão de um ciclo de degelo (informação não fornecida no manual sobre degelo para TVR Pro CO — sistema Cooling Only) |
| **Após reinício por setpoint** | Quando o compressor parou porque a temperatura de setpoint foi atingida e reinicia quando a temperatura ambiente sobe |

#### Diagrama de Rotação de Prioridades (Figure 3-6.1)

O manual ilustra um exemplo com **3 unidades externas** (Master, Slave 1, Slave 2):

**Estado Normal (antes do trigger):**

| Unidade | Prioridade |
|---------|-----------|
| Master | **1** (liga primeiro) |
| Slave 1 | **2** |
| Slave 2 | **3** (liga por último) |

**Após Duty Cycling (trigger por Oil Return / Defrost / Restart):**

| Unidade | Prioridade |
|---------|-----------|
| Master | **3** (agora liga por último) |
| Slave 1 | **1** (agora liga primeiro) |
| Slave 2 | **2** |

```
┌─────────────────────┐                         ┌─────────────────────┐
│   Startup Control   │                         │   Normal Operation   │
│                     │                         │                      │
│  ┌───────┬───────┬───────┐              ┌───────┬───────┬───────┐  │
│  │Master │Slave 1│Slave 2│              │Master │Slave 1│Slave 2│  │
│  │       │       │       │              │       │       │       │  │
│  │Prio 1 │Prio 2 │Prio 3 │              │Prio 3 │Prio 1 │Prio 2 │  │
│  └───────┴───────┴───────┘              └───────┴───────┴───────┘  │
│                     │                         │                      │
│     Outdoor unit    │ ──── trigger ────→      │   Outdoor unit       │
│     duty cycling    │  (Oil Return /          │   duty cycling       │
│                     │   Defrost / Restart)    │                      │
└─────────────────────┘                         └──────────────────────┘
```

**A cada novo trigger**, as prioridades rotacionam novamente:
- Ciclo 1: Master=1, S1=2, S2=3
- Ciclo 2: Master=3, S1=1, S2=2
- Ciclo 3: Master=2, S1=3, S2=1
- Ciclo 4: volta ao Ciclo 1 (rotação completa)

> **Regra fundamental do manual:** Os endereços configurados na placa principal (main PCB) para "master unit", "slave unit 1" e "slave unit 2" **NÃO mudam** durante o Duty Cycling. Apenas a **prioridade operacional** é rotacionada. O Master continua sendo o Master para fins de comunicação e endereçamento — ele apenas pode ser o último a ligar em vez do primeiro.

---

### 2.2 Oil Return Operation — Operação de Retorno de Óleo (Seção 6.2)

#### Objetivo

A operação de Oil Return é executada para **recuperar o óleo lubrificante** que migrou dos compressores para o sistema de tubulação de campo e para as evaporadoras. Sem essa operação periódica, os compressores podem operar com nível de óleo insuficiente, causando desgaste acelerado e, eventualmente, queima.

#### Características Principais:

| Parâmetro | Valor |
|-----------|-------|
| **Primeiro disparo** | Quando o tempo de operação acumulado atinge **140 minutos** |
| **Disparos subsequentes** | A cada **8 horas** de operação acumulada |
| **Abrangência** | Executada para **TODAS as unidades**, incluindo as que estão em **standby** |
| **Indicação no display** | O display digital da placa principal outdoor exibe o código **"d0"** |

**Detalhe crucial — "d0" no display:**
Quando o técnico vê **"d0"** no display da unidade externa, o sistema está em Oil Return. Isso **NÃO é um código de erro**. É uma indicação operacional normal. O técnico NÃO deve desligar o sistema nem tentar fazer reset.

#### Primeiro Disparo — 140 Minutos:
O timer de 140 minutos é **acumulado**, não contínuo. Se o sistema opera por 60 minutos, para por 2 horas, e depois opera por 80 minutos, o total acumulado é 140 minutos e o Oil Return será executado.

#### Disparos Subsequentes — A Cada 8 Horas:
Após o primeiro Oil Return, o timer é resetado e o próximo Oil Return ocorrerá quando mais 8 horas de operação acumulada forem atingidas.

---

### 2.3 Controle de Componentes da Unidade Externa durante Oil Return (Table 3-6.1)

Durante o Oil Return, os componentes da **unidade externa (ODU)** operam em um modo diferente do normal:

| Componente | Label | 8-12HP | 14-16HP | 18-22HP | 24-30HP | Controle durante Oil Return |
|-----------|-------|:------:|:-------:|:-------:|:-------:|----------------------------|
| **Inverter compressor A** | BP1 | ● | ● | ● | ● | **Frequência fixa** (não modula por carga) |
| **Inverter compressor B** | BP2 | — | — | ● | ● | **Frequência fixa** |
| **DC fan motor A** | FAN1 | ● | ● | ● | ● | Controlado conforme **pressão de descarga** |
| **DC fan motor B** | FAN2 | — | — | ● | ● | Controlado conforme **pressão de descarga** |
| **Electronic expansion valve A** | EXVA | ● | ● | ● | ● | Posição fixa: **480 steps** |
| **Solenoid valve SV2** | SV2 | ● | ● | ● | ● | **Normal control** |
| **Solenoid valve SV4** | SV4 | ● | ● | ● | ● | **Normal control** |
| **Solenoid valve SV7** | SV7 | ● | ● | ● | ● | **Normal control** |

#### Diferenças-Chave entre Normal Operation e Oil Return (ODU):

| Componente | Normal Operation | Oil Return | Diferença |
|-----------|-----------------|------------|-----------|
| **Compressores** | Frequência variável (por carga) | **Frequência fixa** | Fixa para gerar fluxo constante de refrigerante que arraste o óleo |
| **EXVA** | 0-3000 steps (por temp. descarga) | **480 steps** (fixa) | Abertura parcial fixa para manter vazão controlada |
| **Fans** | Controlados por Pc | Controlados por Pc | **Sem diferença** |
| **SV2, SV4, SV7** | Controle específico | Normal control | **Sem diferença** |

---

### 2.4 Controle de Componentes da Unidade Interna durante Oil Return (Table 3-6.2)

O comportamento das **unidades internas (IDU)** durante o Oil Return é o elemento mais importante para o diagnóstico:

| Componente | Estado da Unidade | Controle durante Oil Return |
|-----------|------------------|-----------------------------|
| **Fan (Ventilador)** | Thermo on (demandando refrigeração) | Conforme configuração do **controle remoto** (mantém o que o usuário definiu) |
| **Fan** | Standby (em espera) | **Off** (desligado) |
| **Fan** | Thermo off (setpoint atingido) | **Off** (desligado) |
| **EXV (Válvula de Expansão)** | Thermo on (demandando refrigeração) | **Normal control** (modulando normalmente) |
| **EXV** | Standby (em espera) | **300 steps** (aberta parcialmente) |
| **EXV** | Thermo off (setpoint atingido) | **300 steps** (aberta parcialmente) |

#### O Papel dos "300 Steps" Revisitado

Conforme já introduzido no Tópico 2.3, durante o Oil Return as EXVs das unidades internas que **NÃO estão demandando refrigeração** (standby ou thermo off) abrem para **300 steps**. Agora, com a Table 3-6.2, temos a confirmação oficial do manual:

| Estado IDU | EXV em Normal Operation | EXV em Oil Return | Fan em Oil Return |
|-----------|------------------------|-------------------|-------------------|
| Thermo on | Normal control | Normal control | Conforme controle remoto |
| Standby | **Closed** (0 steps) | **300 steps** | **Off** |
| Thermo off | **Closed** (0 steps) | **300 steps** | **Off** |

**Lógica:** O refrigerante flui parcialmente pelas evaporadoras inativas (EXV a 300 steps), arrastando o óleo acumulado. Os ventiladores dessas unidades permanecem desligados porque o objetivo **não é climatizar** — é apenas **circular refrigerante para arrastar óleo**.

---

### 2.5 Comparação Completa: EXVA Position por Modo de Operação

Reunindo dados de Tópicos anteriores e do presente tópico:

| Modo de Operação | EXVA Position (ODU) | EXV Position (IDU ativa) | EXV Position (IDU inativa) |
|-----------------|--------------------|--------------------------|-----------------------------|
| **Standby total** | **2112 steps** (352×6) | — | — |
| **Cooling Normal** | 0-3000 (por temp. descarga) | Normal control | **0 steps** (closed) |
| **Oil Return** | **480 steps** (fixa) | Normal control | **300 steps** |
| **Startup** | Por temp. descarga | — | — |

---

## 3. TABELAS E PARÂMETROS TÉCNICOS

### Tabela de Temporização do Oil Return

| Parâmetro | Valor |
|-----------|-------|
| Primeiro disparo | **140 minutos** de operação acumulada |
| Disparos subsequentes | A cada **8 horas** de operação acumulada |
| Display durante Oil Return | **"d0"** |
| Tipo de timer | **Acumulado** (não contínuo) |

### Tabela de Condições de Trigger para Duty Cycling

| Trigger | Descrição |
|---------|-----------|
| Após Oil Return | Imediatamente após conclusão do ciclo de retorno de óleo |
| Após Defrost | Imediatamente após degelo (se aplicável) |
| Após restart por setpoint | Quando compressor reinicia após parada por temperatura atingida |

### Tabela Resumo — Controle ODU durante Oil Return

| Componente | Controle |
|-----------|----------|
| Compressores (BP1/BP2) | **Frequência fixa** |
| Ventiladores (FAN1/FAN2) | Por pressão de descarga (Pc) |
| EXVA | **480 steps** (fixa) |
| SV2, SV4, SV7 | Normal control |

### Tabela Resumo — Controle IDU durante Oil Return

| Estado IDU | Fan | EXV |
|-----------|-----|-----|
| Thermo on | Controle remoto | Normal control |
| Standby | **Off** | **300 steps** |
| Thermo off | **Off** | **300 steps** |

---

## 4. INFOBOX DE CAMPO / AVISOS

> [!CAUTION]
> **"d0" NO DISPLAY NÃO É ERRO — É OIL RETURN:**
> O código "d0" exibido no display digital da unidade externa indica que o sistema está executando a operação automática de Oil Return. O técnico **NÃO deve** desligar o sistema, fazer reset, ou reportar como falha. A operação dura poucos minutos e é essencial para a longevidade dos compressores. Interromper repetidamente o Oil Return pode levar à falha do compressor por falta de lubrificação.

> [!WARNING]
> **PRIMEIRO OIL RETURN — 140 MINUTOS ACUMULADOS, NÃO CONTÍNUOS:**
> O timer de 140 minutos para o primeiro Oil Return é **acumulado**. Se o cliente opera o sistema por períodos curtos (ex.: 30 minutos de manhã, 30 minutos à tarde), o primeiro Oil Return só ocorrerá quando a soma total de todos os períodos atingir 140 minutos. Isso pode levar vários dias em uso intermitente. Se o técnico suspeitar de problema de óleo em um sistema novo, pode verificar se o primeiro Oil Return já ocorreu consultando o display ("d0").

> [!IMPORTANT]
> **EXVA A 480 STEPS DURANTE OIL RETURN — DIFERENTE DOS 2112 DE STANDBY:**
> Não confundir as posições: EXVA a **480 steps** é o valor durante Oil Return (módulos operando em frequência fixa). EXVA a **2112 steps** é o valor quando TODOS os módulos estão em standby completo. Se o técnico verificar a EXVA em 480 steps com o display mostrando "d0", tudo está normal.

> [!TIP]
> **DUTY CYCLING — COMO VERIFICAR SE ESTÁ FUNCIONANDO:**
> Para confirmar que o Duty Cycling está ativo em um sistema multi-módulo: (1) Antes de um Oil Return, anotar qual módulo liga primeiro em carga parcial. (2) Após o Oil Return (quando "d0" desaparece), observar qual módulo liga primeiro na próxima demanda. Se a ordem mudou, o Duty Cycling está funcionando corretamente. Se a ordem **não muda**, pode haver problema de comunicação entre Master e Slaves ou configuração incorreta dos endereços.

---

**Parte 3 — CONTROLE está completa! Podemos prosseguir para a Parte 4 do manual?**
