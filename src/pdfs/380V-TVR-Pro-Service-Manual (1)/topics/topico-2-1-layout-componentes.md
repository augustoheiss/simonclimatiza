# TÓPICO 2.1 — Layout dos Componentes Funcionais da Unidade Externa

---

## 1. NESTED SCHEMA METADATA

```
id_secao: "secao-2"
titulo_secao: "Layout de Componentes e Circuitos de Refrigerante"
id_aula: "aula-2-1"
titulo_aula: "Layout Físico dos Componentes Funcionais: Mapeamento Interno das Unidades Externas por Classe de Chassi"
descricao_aula: "Estudo detalhado da disposição física dos 13 componentes funcionais dentro das unidades externas TVR Pro CO Series, organizados por classe de chassi: 8-16HP (1 compressor, 1 ventilador), 18-22HP (2 compressores, 2 ventiladores) e 24-30HP (2 compressores, 2 ventiladores, gabinete ampliado). Cada componente é identificado, localizado espacialmente no gabinete e explicado em sua função dentro do circuito frigorígeno. Preparação essencial para manutenção preventiva e corretiva em campo."
```

---

## 2. CONTEÚDO TÉCNICO DA AULA

### 2.1 Introdução — Por que Conhecer o Layout Interno?

Antes de abrir o painel de qualquer condensadora, o técnico de campo precisa ter um **mapa mental** de onde cada componente está localizado. Isso é essencial por três razões:

1. **Segurança:** Saber onde estão os compressores, as válvulas solenoides e os sensores de alta pressão evita acidentes ao manusear ferramentas dentro do gabinete energizado.
2. **Eficiência no diagnóstico:** Quando um código de erro indica falha em um componente específico (ex.: sensor de temperatura de descarga), o técnico que conhece o layout chega ao sensor em segundos, sem precisar rastrear tubulações aleatoriamente.
3. **Manutenção preventiva:** A inspeção visual sistemática (verificar conexões elétricas, estado de isolamento, integridade de válvulas) só é produtiva quando o técnico sabe exatamente o que procurar e onde procurar.

O TVR Pro CO utiliza **três configurações de chassi** para as unidades externas de módulo único, e cada configuração posiciona os mesmos 13 componentes funcionais em arranjos ligeiramente diferentes. Os sistemas multi-módulo (32-90HP) utilizam réplicas desses mesmos chassi interligados.

---

### 2.2 Os 13 Componentes Funcionais — Identificação e Função

O manual (Figures 2-1.1, 2-1.2 e 2-1.3) identifica **13 componentes funcionais** numerados que estão presentes em todas as classes de chassi. A numeração é **idêntica** nos três layouts, o que permite ao técnico usar uma única referência independente do porte da unidade.

| Nº | Componente | Função no Sistema |
|----|-----------|-------------------|
| **1** | **Compressor** | Componente motor do ciclo frigorígeno. Comprime o gás refrigerante R-410A de baixa pressão para alta pressão, elevando sua temperatura e pressão. No chassi 8-16HP, há **1 compressor**; nos chassi 18-22HP e 24-30HP, há **2 compressores**. |
| **2** | **Discharge temperature sensor** (Sensor de temperatura de descarga) | Sensor tipo termistor instalado na tubulação de descarga do compressor. Monitora a temperatura do gás superaquecido que sai do compressor. Valor crítico para proteção contra superaquecimento — se a temperatura ultrapassar o limite, o sistema reduz a frequência ou desliga o compressor. |
| **3** | **High pressure sensor** (Sensor de alta pressão) | Transdutor de pressão instalado na linha de alta pressão (descarga). Monitora continuamente a pressão do lado de alta do sistema. Usado para controle de capacidade e proteção contra sobrepressão. |
| **4** | **Oil separator** (Separador de óleo) | Dispositivo instalado na linha de descarga que separa o óleo lubrificante do gás refrigerante comprimido. O óleo separado retorna ao cárter do compressor, enquanto o gás segue para o condensador. Fundamental para manter a lubrificação adequada do compressor em sistemas VRF com longas tubulações. |
| **5** | **Heat exchanger** (Trocador de calor / Condensador) | Serpentina de troca térmica onde o gás refrigerante de alta pressão e alta temperatura cede calor para o ar externo. O refrigerante condensa (muda de gás para líquido) neste componente. Composto por tubos de cobre com aletas de alumínio. |
| **6** | **Electronic expansion valve (EXV)** (Válvula de expansão eletrônica) | Dispositivo de controle de fluxo de refrigerante acionado por motor de passo. Regula a quantidade de refrigerante líquido que entra no evaporador com base nos sinais dos sensores de temperatura e pressão. É o principal componente de controle de capacidade do sistema VRF. |
| **7** | **Fan motor** (Motor do ventilador) | Motor elétrico que aciona o ventilador do condensador. No chassi 8-16HP, há **1 motor**; nos chassi 18-22HP e 24-30HP, há **2 motores**. Velocidade controlada eletronicamente para otimizar a troca térmica conforme a carga e a temperatura ambiente. |
| **8** | **Fan** (Ventilador / Hélice) | Hélice axial que força a passagem de ar através das aletas do condensador. No chassi 8-16HP, há **1 ventilador** na parte superior; nos demais chassi, há **2 ventiladores** lado a lado. |
| **9** | **Stop valve (liquid side)** (Válvula de serviço — lado líquido) | Válvula de bloqueio manual localizada na conexão de saída da linha de líquido. Utilizada durante instalação, manutenção e recolhimento de refrigerante (pump-down). Localizada na parte inferior frontal do gabinete, de fácil acesso. |
| **10** | **Stop valve (gas side)** (Válvula de serviço — lado gás) | Válvula de bloqueio manual na conexão de saída da linha de gás (sucção). Junto à válvula 9, permite isolar o circuito frigorígeno da unidade externa durante serviços. Também localizada na parte inferior frontal. |
| **11** | **Accumulator** (Acumulador de sucção) | Reservatório instalado na linha de sucção (baixa pressão), antes da entrada do compressor. Sua função é evitar que refrigerante líquido entre no compressor (golpe de líquido), retendo o líquido e permitindo apenas a passagem de gás. Componente de segurança crítico. |
| **12** | **Low pressure switch** (Pressostato de baixa pressão) | Chave de segurança que monitora a pressão do lado de baixa (sucção). Se a pressão cair abaixo do limite mínimo (indicando falta de refrigerante, bloqueio de filtro ou EXV fechada), o pressostato desliga o compressor para evitar operação em vácuo. |
| **13** | **Solenoid valve** (Válvula solenoide) | Válvula eletromagnética de duas posições (aberta/fechada) usada para controlar o fluxo de refrigerante em diferentes pontos do circuito. O manual indica **múltiplas válvulas solenoides** (13) em diferentes posições do chassi, incluindo a linha de líquido e a linha de óleo. |

---

### 2.3 Chassi Classe A — Unidades de 8 a 16HP (Figure 2-1.1)

**Configuração geral:**
- **1 compressor** (item 1) — localizado na parte inferior direita do gabinete
- **1 ventilador** (item 8) + **1 motor** (item 7) — localizados no topo do gabinete
- **1 acumulador** (item 11) — parte superior esquerda, acima do compartimento do compressor

**Distribuição por zonas:**

| Zona do Gabinete | Componentes Localizados |
|-------------------|------------------------|
| **Topo** (seção de ventilação) | Ventilador (8), Motor do ventilador (7) |
| **Superior interno** (seção do condensador) | Oil separator (4), Acumulador (11), Heat exchanger (5), Sensor de descarga (2) |
| **Central** (seção de controle frigorígeno) | EXV (6), Válvulas solenoides (13), Low pressure switch (12) |
| **Inferior** (seção do compressor) | Compressor (1), High pressure sensor (3) |
| **Inferior frontal** (conexões de serviço) | Stop valve liquid (9), Stop valve gas (10) |

**Característica exclusiva do Classe A:** Por possuir **um único compressor**, o layout é mais compacto. O sensor de temperatura de descarga (2) monitora apenas uma linha, e o oil separator (4) atende um único circuito. Isso simplifica o diagnóstico em comparação com os chassi de 2 compressores.

---

### 2.4 Chassi Classe B — Unidades de 18 a 22HP (Figure 2-1.2)

**Configuração geral:**
- **2 compressores** (item 1, 1) — localizados lado a lado na parte inferior direita do gabinete
- **2 ventiladores** (item 8, 8) + **2 motores** (item 7, 7) — lado a lado no topo
- **2 sensores de descarga** (item 2, 2) — um para cada compressor

**Distribuição por zonas:**

| Zona do Gabinete | Componentes Localizados |
|-------------------|------------------------|
| **Topo** | 2× Ventilador (8), 2× Motor do ventilador (7) |
| **Superior interno** | Oil separator (4), Acumulador (11), Heat exchanger (5), 2× Sensor de descarga (2) |
| **Central** | EXV (6), Válvulas solenoides (13), Low pressure switch (12) |
| **Inferior** | 2× Compressor (1), High pressure sensor (3) |
| **Inferior frontal** | Stop valve liquid (9), Stop valve gas (10) |

**Diferença em relação ao Classe A:** A duplicação dos compressores, ventiladores e sensores de descarga é a principal mudança. O técnico precisa testar **ambos** os sensores de descarga ao diagnosticar códigos de erro relacionados a superaquecimento, pois cada sensor está vinculado ao seu compressor respectivo.

---

### 2.5 Chassi Classe C — Unidades de 24 a 30HP (Figure 2-1.3)

**Configuração geral:**
- **2 compressores** (item 1, 1) — localizados na parte inferior direita, com mais espaçamento entre eles
- **2 ventiladores** (item 8, 8) + **2 motores** (item 7, 7) — no topo
- **2 acumuladores** (item 11, 11) — o gabinete ampliado permite dois acumuladores visíveis no topo

**Distribuição por zonas:**

| Zona do Gabinete | Componentes Localizados |
|-------------------|------------------------|
| **Topo** | 2× Ventilador (8), 2× Motor do ventilador (7), 2× Acumulador (11) |
| **Superior interno** | Oil separator (4), Heat exchanger (5), 2× Sensor de descarga (2) |
| **Lateral esquerda** | High pressure sensor (3), Válvulas solenoides (13) |
| **Central** | EXV (6), Low pressure switch (12) |
| **Inferior** | 2× Compressor (1) |
| **Inferior frontal** | Stop valve liquid (9), Stop valve gas (10) |

**Diferença em relação ao Classe B:** O gabinete é fisicamente maior para acomodar compressores de maior capacidade. A principal diferença prática é o **maior espaçamento interno**, que facilita o acesso aos compressores e ao circuito frigorígeno durante a manutenção. O high pressure sensor (3) e as válvulas solenoides (13) ficam mais acessíveis na lateral esquerda do gabinete.

---

### 2.6 Comparativo de Hardware por Classe de Chassi

| Componente | Classe A (8-16HP) | Classe B (18-22HP) | Classe C (24-30HP) |
|-----------|-------------------|--------------------|--------------------|
| Compressores | 1 | 2 | 2 |
| Ventiladores | 1 | 2 | 2 |
| Motores de ventilador | 1 | 2 | 2 |
| Sensores de descarga | 1 | 2 | 2 |
| Oil separator | 1 | 1 | 1 |
| Heat exchanger | 1 | 1 (maior) | 1 (maior) |
| EXV | 1 | 1 | 1 |
| Acumulador | 1 | 1 | 2 |
| Low pressure switch | 1 | 1 | 1 |
| High pressure sensor | 1 | 1 | 1 |
| Stop valve (liquid) | 1 | 1 | 1 |
| Stop valve (gas) | 1 | 1 | 1 |
| Válvulas solenoides | Múltiplas | Múltiplas | Múltiplas |
| **Tamanho do gabinete** | Compacto | Médio | Grande |

---

### 2.7 Metodologia de Inspeção Visual por Zonas

Para realizar uma inspeção preventiva eficiente, o técnico deve seguir a **metodologia de zonas**, trabalhando de cima para baixo:

**ZONA 1 — Topo (Ventilação):**
1. Verificar rotação livre dos ventiladores (sem ruídos ou vibrações anormais)
2. Inspecionar fixação dos motores (7) nos suportes
3. Verificar integridade das hélices (8) — sem trincas ou deformações

**ZONA 2 — Superior Interno (Troca Térmica):**
1. Inspecionar as aletas do heat exchanger (5) — sem amassamentos, sujeira ou obstrução
2. Verificar o oil separator (4) — sem sinais de vazamento ou oxidação nas conexões
3. Verificar o acumulador (11) — sem sinais de condensação anormal na superfície externa

**ZONA 3 — Central (Controle Frigorígeno):**
1. Verificar a EXV (6) — testar movimentação do motor de passo, ouvir o clique de acionamento
2. Verificar válvulas solenoides (13) — sem ruído anormal de bobina, sem vazamentos
3. Verificar o low pressure switch (12) — fiação íntegra, sem oxidação nos terminais

**ZONA 4 — Inferior (Compressores):**
1. Medir a vibração do compressor (1) durante operação — comparar com padrão de fábrica
2. Verificar o sensor de descarga (2) — fixação firme na tubulação, pasta térmica íntegra
3. Verificar o high pressure sensor (3) — conexão elétrica firme, sem dano ao transdutor

**ZONA 5 — Inferior Frontal (Conexões de Serviço):**
1. Verificar stop valves (9, 10) — tampas de proteção presentes, sem sinais de vazamento
2. Verificar torque das conexões flare — sem manchas de óleo indicando micro-vazamentos

---

## 3. TABELAS E PARÂMETROS TÉCNICOS

### Tabela de Referência Rápida — Mapa de Componentes por Número

| Nº | Componente (EN) | Componente (PT-BR) | Localização Típica |
|----|-----------------|--------------------|--------------------|
| 1 | Compressor | Compressor | Inferior direita |
| 2 | Discharge temperature sensor | Sensor de temperatura de descarga | Tubulação de descarga |
| 3 | High pressure sensor | Sensor de alta pressão | Lateral / Inferior |
| 4 | Oil separator | Separador de óleo | Superior interno |
| 5 | Heat exchanger | Condensador / Trocador de calor | Superior interno (serpentina) |
| 6 | Electronic expansion valve (EXV) | Válvula de expansão eletrônica | Central |
| 7 | Fan motor | Motor do ventilador | Topo |
| 8 | Fan | Ventilador (hélice) | Topo |
| 9 | Stop valve (liquid side) | Válvula de serviço (líquido) | Inferior frontal |
| 10 | Stop valve (gas side) | Válvula de serviço (gás) | Inferior frontal |
| 11 | Accumulator | Acumulador de sucção | Superior (variável) |
| 12 | Low pressure switch | Pressostato de baixa | Central |
| 13 | Solenoid valve | Válvula solenoide | Múltiplas posições |

### Tabela de Multiplicidade por Classe de Chassi

| Classe | HP | Compressores | Ventiladores | Sensores de Descarga | Acumuladores |
|--------|-----|-------------|-------------|---------------------|-------------|
| **A** | 8-16 | 1 | 1 | 1 | 1 |
| **B** | 18-22 | 2 | 2 | 2 | 1 |
| **C** | 24-30 | 2 | 2 | 2 | 2 |

---

## 4. INFOBOX DE CAMPO / AVISOS

> [!CAUTION]
> **SEGURANÇA — NUNCA ACESSE O COMPARTIMENTO DO COMPRESSOR COM A UNIDADE ENERGIZADA SEM EPI ADEQUADO:**
> Os compressores (item 1) operam com tensão de alimentação de **380V** e as tubulações de descarga podem atingir temperaturas superiores a **100°C**. Ao realizar qualquer inspeção ou manutenção na Zona 4 (compressores), o técnico DEVE usar luvas isolantes, óculos de proteção e garantir que o disjuntor principal esteja desligado e sinalizado (Lock-Out/Tag-Out), a menos que o procedimento exija operação energizada (ex.: leitura de sensores em tempo real).

> [!WARNING]
> **DIAGNÓSTICO — CHASSI CLASSE B/C: TESTE AMBOS OS SENSORES DE DESCARGA:**
> Nas unidades de 18 a 30HP, existem **2 sensores de temperatura de descarga** (item 2), um para cada compressor. Um código de erro de superaquecimento pode estar vinculado a apenas UM dos compressores. Sempre identifique QUAL sensor está na tubulação de descarga do compressor que está apresentando o erro — o Compressor 1 (principal/inverter) ou o Compressor 2 (fixed-speed). Trocar o sensor errado não resolverá o problema.

> [!IMPORTANT]
> **ACESSO RÁPIDO EM CAMPO — STOP VALVES (9 e 10):**
> As válvulas de serviço (stop valves) do lado líquido (9) e do lado gás (10) estão **SEMPRE** na parte inferior frontal do gabinete, em TODAS as classes de chassi. Este é o ponto de acesso primário para conectar o manifold de serviço, realizar vácuo, carga de refrigerante e pump-down. Não confundir com as válvulas solenoides (13), que são componentes internos de controle automático e NÃO devem ser operadas manualmente.

> [!TIP]
> **DICA DE INSPEÇÃO — CONTANDO COMPRESSORES PELA HÉLICE:**
> Método rápido de verificação sem abrir o gabinete: se a unidade tem **1 hélice** visível no topo, ela possui **1 compressor** (Classe A, 8-16HP). Se tem **2 hélices**, ela possui **2 compressores** (Classes B/C, 18-30HP). Isso confirma a classe do chassi antes de abrir qualquer painel e ajuda a determinar quais peças de reposição solicitar.

---

**Podemos prosseguir para o Tópico 2.2?**
