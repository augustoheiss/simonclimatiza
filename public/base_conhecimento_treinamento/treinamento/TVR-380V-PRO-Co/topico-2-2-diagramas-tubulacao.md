# TÓPICO 2.2 — Diagramas de Tubulação (Piping Diagrams) da Unidade Externa

---

## 1. NESTED SCHEMA METADATA

```
id_secao: "secao-2"
titulo_secao: "Layout de Componentes e Circuitos de Refrigerante"
id_aula: "aula-2-2"
titulo_aula: "Diagramas de Tubulação: Circuito Frigorígeno Esquemático e Componentes de Controle (SV2, SV4, SV7, EXVA)"
descricao_aula: "Análise detalhada dos diagramas esquemáticos de tubulação (Piping Diagrams) das unidades externas TVR Pro CO Series em três configurações (8-16HP, 18-22HP, 24-30HP). Identificação de 7 componentes adicionais que não aparecem no layout físico mas são críticos para o circuito: sensores T3 e T4, válvula EXVA, válvulas solenoides SV2 (injeção de líquido), SV4 (retorno de óleo) e SV7 (pressão/bypass). Inclui parâmetros operacionais, ciclos de temporização das válvulas e codificação de estados do refrigerante."
```

---

## 2. CONTEÚDO TÉCNICO DA AULA

### 2.1 Do Layout Físico ao Diagrama Esquemático

No Tópico 2.1, o técnico aprendeu **onde** os componentes estão fisicamente dentro do gabinete. Agora, no Tópico 2.2, o foco muda para **como** esses componentes se conectam entre si através da tubulação de cobre. Os diagramas de tubulação (Piping Diagrams) são representações esquemáticas do circuito frigorígeno — eles mostram o caminho completo do refrigerante R-410A desde a compressão até o retorno ao compressor, passando por todos os componentes de troca, expansão e controle.

A grande diferença em relação ao Tópico 2.1 é a introdução de **7 componentes adicionais** que aparecem nos diagramas esquemáticos mas que não foram numerados nos layouts físicos. Esses componentes são essencialmente **sensores e válvulas solenoides específicas**, cada uma com uma função e temporização de operação definida.

---

### 2.2 Componentes Adicionais nos Diagramas de Tubulação

Os diagramas de tubulação (Figures 2-2.1, 2-2.2 e 2-2.3) expandem a legenda de 13 componentes para **16+ componentes**, adicionando:

| Código | Componente | Função Detalhada |
|--------|-----------|------------------|
| **T3** | Heat exchanger temperature sensor (Sensor de temperatura do trocador de calor) | Sensor tipo termistor instalado na saída do condensador (heat exchanger). Mede a temperatura do refrigerante após a condensação, indicando o grau de subresfriamento (subcooling). Usado pela placa controladora para ajustar a abertura da EXV e otimizar a eficiência de troca. |
| **T4** | Outdoor ambient temperature sensor (Sensor de temperatura ambiente externa) | Sensor tipo termistor instalado na entrada de ar do condensador. Mede a temperatura do ar externo que entra nas aletas. Usado para ajustar a velocidade do ventilador, controlar a pressão de condensação e ativar proteções contra operação em temperatura ambiente extrema (muito alta ou muito baixa). |
| **EXVA** | Main Electronic Expansion Valve (Válvula de Expansão Eletrônica Principal) | A EXV principal do circuito, mostrada no diagrama com a designação "EXVA". Opera por motor de passo e é o componente central de modulação de capacidade. Regula o fluxo de refrigerante líquido entre o condensador e a linha de líquido que vai para as unidades internas. |
| **SV2** | Liquid injection valve (Válvula de injeção de líquido) | Válvula solenoide de proteção do compressor. **Função:** injeta uma pequena quantidade de refrigerante líquido diretamente na linha de sucção para resfriar o compressor quando a temperatura de descarga está perigosamente alta. |
| **SV4** | Oil return valve (Válvula de retorno de óleo) | Válvula solenoide que controla o retorno de óleo lubrificante do separador de óleo (item 4) para o cárter do compressor. Opera em ciclos temporizados para garantir lubrificação contínua. |
| **SV7** | Pressure valve (Válvula de pressão / bypass) | Válvula solenoide que permite o retorno direto de refrigerante ao compressor em condições específicas. Atua como bypass de segurança. |
| **16** | Componente adicional (18-22HP) | Presente no diagrama da Classe B (18-22HP). Informação não fornecida no manual quanto à designação específica. |

---

### 2.3 Parâmetros Operacionais das Válvulas Solenoides — Dados Críticos do Manual

O manual fornece os **parâmetros de operação exatos** de cada válvula solenoide. Esses dados são fundamentais para diagnóstico e verificação em campo:

#### SV2 — Liquid Injection Valve (Válvula de Injeção de Líquido)

| Parâmetro | Valor |
|-----------|-------|
| **Condição de abertura** | Temperatura de descarga do compressor ultrapassa **100°C** |
| **Ação** | Abre e injeta refrigerante líquido na sucção para resfriar o compressor |
| **Condição de fechamento** | Temperatura de descarga cai abaixo de **90°C** |
| **Histerese** | 10°C (abre a 100°C, fecha a 90°C) |

**Importância para Diagnóstico:** Se a SV2 está constantemente aberta (ruído contínuo de fluxo na linha de injeção), indica que o compressor está superaquecendo cronicamente. As causas possíveis incluem: falta de refrigerante, EXV com defeito, condensador sujo, ou ventilador do condensador travado.

#### SV4 — Oil Return Valve (Válvula de Retorno de Óleo)

| Parâmetro | Valor |
|-----------|-------|
| **Condição de primeira abertura** | Compressor em operação por **200 segundos** (3 min 20 s) |
| **Duração da abertura** | Aberta (o manual não especifica a duração exata da abertura) |
| **Ciclo de reabertura** | Fecha após a abertura, e reabre a cada **20 minutos** por **3 minutos** |
| **Ciclo resumido** | 200s após partida → abre → fecha → 600s fechada → 3 min aberta → repete |

**Importância para Diagnóstico:** Se o compressor apresenta ruído anormal (batidas metálicas) ou falhas frequentes, uma SV4 com defeito pode estar impedindo o retorno adequado de óleo. O técnico pode verificar se a SV4 está operando corretamente sentindo (com a mão protegida) a pulsação térmica na tubulação conectada ao separador de óleo — a cada 20 minutos, a linha deve esquentar brevemente quando a válvula abre.

#### SV7 — Pressure Valve / Bypass (Válvula de Pressão)

| Parâmetro | Condição |
|-----------|----------|
| **Condição de abertura 1** | Temperatura do ar interior está próxima do setpoint (temperatura configurada no controle remoto) |
| **Objetivo 1** | Evitar ligações/desligamentos frequentes do compressor (short cycling), permitindo bypass parcial do refrigerante |
| **Condição de abertura 2** | Grau de superaquecimento (superheat) insuficiente na linha de sucção |
| **Objetivo 2** | Evitar golpe de líquido (liquid hammer) no compressor, redirecionando refrigerante diretamente para o acumulador |

**Importância para Diagnóstico:** A SV7 é uma válvula de segurança e conforto. Se ela falhar na posição fechada, o sistema pode apresentar short cycling com códigos de erro intermitentes. Se falhar na posição aberta, a capacidade de refrigeração cai significativamente pois parte do refrigerante faz bypass sem passar pelas evaporadoras.

---

### 2.4 Descrição dos Componentes-Chave — Dados Expandidos do Manual

O manual (página 19-20) fornece descrições funcionais adicionais para os seguintes componentes:

#### Oil Separator (Separador de Óleo — Item 4)
- Separa o óleo do gás refrigerante bombeado pelo compressor
- Retorna o óleo rapidamente ao compressor
- **Eficiência de separação: até 99%**
- Componente crítico para sistemas VRF com tubulações longas (até 175m de comprimento equivalente)

#### Accumulator (Acumulador — Item 11)
- Armazena refrigerante líquido e óleo na linha de sucção
- **Protege o compressor contra golpe de líquido** (liquid hammering)
- Permite que apenas gás refrigerante e uma quantidade controlada de óleo entrem no compressor

#### Electronic Expansion Valve (EXV — Item 6 / EXVA)
- Controla o fluxo de refrigerante e reduz a pressão do sistema
- Opera por motor de passo com controle preciso de abertura
- É o principal regulador de capacidade do sistema VRF

#### Low Pressure Switch (Pressostato de Baixa — Item 12)
- Regula a pressão do sistema no lado de baixa (sucção)
- **Quando a pressão cai abaixo do limite inferior, desliga o compressor**
- **Após desligamento por baixa pressão: o compressor reinicia após 10 minutos**
- Tempo de reinício fixo de 10 minutos — não é configurável em campo

---

### 2.5 Diagrama de Tubulação — Classe A (8-16HP) — Figure 2-2.1

**Estrutura do circuito:**

O circuito do 8-16HP é o mais simples e serve como base para os demais:

```
COMPRESSOR (1) → Sensor de descarga (2) → Oil separator (4) → Heat exchanger (5)
    ↓                                                               ↓
High pressure sensor (3)                               Sensor T3 + Sensor T4
    ↓                                                               ↓
Acumulador (11) ← Low pressure switch (12)             EXVA (6) → Stop valve líquido (9)
    ↑                                                               ↓
Válvula SV7 (13/bypass)                                 → UNIDADES INTERNAS →
    ↑                                                               ↓
Válvula SV4 (13/óleo) ← Oil separator (4)              Stop valve gás (10) → Acumulador (11)
    ↑
Válvula SV2 (13/injeção)
```

**Componentes na legenda expandida (16 itens):**

| Nº | Componente | Presente no 8-16HP |
|----|-----------|-------------------|
| 1-13 | (mesmos do Tópico 2.1) | ✔ Sim |
| T3 | Heat exchanger temperature sensor | ✔ Sim |
| T4 | Outdoor ambient temperature sensor | ✔ Sim |
| SV2 | Liquid injection valve | ✔ Sim |
| SV4 | Oil return valve | ✔ Sim |
| SV7 | Pressure valve | ✔ Sim |
| EXVA | Main EXV | ✔ Sim |

---

### 2.6 Diagrama de Tubulação — Classe B (18-22HP) — Figure 2-2.2

**Diferenças em relação ao 8-16HP:**
- **2 compressores** (1, 1) em paralelo — ambos alimentam o mesmo oil separator (4)
- **2 sensores de descarga** (2, 2) — um por compressor
- **2 ventiladores** (8, 8) e **2 motores** (7, 7) — capacidade de ventilação duplicada
- **Item 16** aparece no diagrama — componente adicional específico desta classe
- **Válvulas SV2, SV4 e SV7** operam com os mesmos parâmetros, porém protegem ambos os compressores simultaneamente

O fluxo de refrigerante é fundamentalmente o mesmo, com a diferença de que o gás descarregado por ambos os compressores se unifica no header de descarga antes de entrar no oil separator.

---

### 2.7 Diagrama de Tubulação — Classe C (24-30HP) — Figure 2-2.3

**Diferenças em relação ao 18-22HP:**
- **2 acumuladores** (11, 11) — um para cada compressor, proporcionando proteção independente contra golpe de líquido
- A válvula **SV2** aparece posicionada de forma diferente, entre os dois acumuladores
- **A válvula SV4 (Oil return) não é mostrada separadamente no diagrama** — o retorno de óleo é integrado à solenoide 13 genérica
- O circuito suporta maior vazão de refrigerante, compatível com as capacidades de 24 a 30HP

---

### 2.8 Codificação de Estados do Refrigerante nos Diagramas

Os diagramas utilizam **três cores/traços** para representar os estados do refrigerante na tubulação:

| Representação Visual | Estado do Refrigerante | Localização Típica no Circuito |
|---------------------|----------------------|-------------------------------|
| **Linha contínua grossa (vermelha)** | Gás de alta temperatura, alta pressão | Descarga do compressor → Oil separator → entrada do Condensador |
| **Linha contínua média (vermelha/rosa)** | Líquido de alta temperatura, alta pressão | Saída do condensador → EXVA → Stop valve líquido (9) |
| **Linha contínua fina (azul/verde)** | Gás/mistura de baixa temperatura, baixa pressão | Stop valve gás (10) → Acumulador (11) → Sucção do compressor |

---

## 3. TABELAS E PARÂMETROS TÉCNICOS

### Tabela Resumo — Parâmetros Operacionais das Válvulas Solenoides

| Válvula | Tipo | Condição de Abertura | Condição de Fechamento | Parâmetro Crítico |
|---------|------|---------------------|----------------------|-------------------|
| **SV2** | Injeção de líquido | Temp. descarga > **100°C** | Temp. descarga < **90°C** | Histerese: 10°C |
| **SV4** | Retorno de óleo | 200s após partida do compressor | Após ciclo de abertura | Ciclo: 600s fechada / 3 min aberta |
| **SV7** | Bypass / Pressão | Temp. ambiente ≈ setpoint OU superheat insuficiente | Condições normalizadas | Proteção contra short cycling e liquid hammer |

### Tabela Resumo — Sensores Adicionais nos Piping Diagrams

| Código | Sensor | Grandeza Medida | Função Principal |
|--------|--------|-----------------|------------------|
| **T3** | Heat exchanger temperature sensor | Temperatura do refrigerante na saída do condensador (°C) | Cálculo de subresfriamento (subcooling) |
| **T4** | Outdoor ambient temperature sensor | Temperatura do ar externo (°C) | Ajuste de velocidade do ventilador + proteções de temperatura |
| **2** | Discharge temperature sensor | Temperatura do gás de descarga (°C) | Proteção contra superaquecimento + controle SV2 |
| **3** | High pressure sensor | Pressão na linha de alta (MPa) | Proteção contra sobrepressão + controle de capacidade |
| **12** | Low pressure switch | Pressão na linha de baixa (MPa) | Proteção contra operação em vácuo, reinício em 10 min |

### Tabela de Proteção do Compressor — Matriz de Atuação

| Condição de Risco | Componente de Proteção | Ação Automática |
|-------------------|----------------------|-----------------|
| Descarga > 100°C | SV2 (Liquid injection) | Abre → injeta líquido na sucção |
| Descarga < 90°C (normalizado) | SV2 | Fecha → operação normal |
| Falta de lubrificação (contínuo) | SV4 (Oil return) | Ciclo 600s/3min → garante retorno de óleo |
| Pressão de sucção muito baixa | Low pressure switch (12) | Desliga compressor → reinício em 10 min |
| Superheat insuficiente | SV7 (Bypass) | Abre → bypass de refrigerante |
| Temp. ambiente ≈ setpoint | SV7 (Bypass) | Abre → evita short cycling |

---

## 4. INFOBOX DE CAMPO / AVISOS

> [!CAUTION]
> **PROTEÇÃO CRÍTICA — A VÁLVULA SV2 É A ÚLTIMA LINHA DE DEFESA DO COMPRESSOR:**
> Se a temperatura de descarga ultrapassa 100°C e a SV2 não abrir (bobina queimada, fiação rompida), o compressor continuará superaquecendo até atingir o limite de proteção térmica interna (OLP — Overload Protector), que desligará o compressor bruscamente. Esse desligamento repetitivo causa dano mecânico ao compressor. Sempre verifique a operação da SV2 como parte da manutenção preventiva — aplique tensão diretamente na bobina e escute o clique de acionamento.

> [!WARNING]
> **DIAGNÓSTICO — LOW PRESSURE SWITCH: REINÍCIO FIXO DE 10 MINUTOS:**
> Quando o pressostato de baixa (item 12) desliga o compressor, ele NÃO reinicia imediatamente. O sistema impõe um tempo de espera fixo de **10 minutos**. Se o técnico está tentando restartar o sistema após uma falha de baixa pressão e o compressor não liga, NÃO é necessariamente uma falha adicional — é o timer de 10 minutos em contagem. Espere o tempo completo antes de diagnosticar falha no compressor.

> [!IMPORTANT]
> **VERIFICAÇÃO DE SV4 — CICLO DE RETORNO DE ÓLEO:**
> A SV4 não é uma válvula que fica permanentemente aberta. Ela opera em ciclos: abre 200 segundos após a partida do compressor, depois fecha, e reabre por 3 minutos a cada 20 minutos. Se o técnico verificar a SV4 e ela estiver fechada, isso é **normal** — ela pode estar no intervalo de 600 segundos entre ciclos. Para confirmar operação correta, monitore por pelo menos 25 minutos e verifique se a válvula completa um ciclo completo.

> [!TIP]
> **DICA RÁPIDA — EFICIÊNCIA DO OIL SEPARATOR:**
> O separador de óleo do TVR Pro CO tem eficiência de **até 99%**. Se o sistema apresenta retorno de óleo visível na visor de líquido (sight glass) da tubulação principal ou nas evaporadoras, o problema provavelmente NÃO é o separador, mas sim: (a) carga excessiva de óleo no sistema, (b) conexões com diâmetro inadequado reduzindo a velocidade do refrigerante, ou (c) tubulação sem inclinação adequada (mínimo de 1% de declive em trechos horizontais).

---

**Podemos prosseguir para o Tópico 2.3?**
