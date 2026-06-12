# TÓPICO 1.1 — Capacidades de Unidades Internas, Externas e Combinações de Sistema

---

## 1. NESTED SCHEMA METADATA

```
id_secao: "secao-1"
titulo_secao: "Visão Geral do Sistema e Identificação"
id_aula: "aula-1-1"
titulo_aula: "Capacidades de Unidades Internas e Externas, e Combinações Modulares do TVR Pro CO"
descricao_aula: "Análise completa das faixas de capacidade das unidades internas padrão (9 tipos), unidades de ar novo (Fresh Air) e ventiladores de recuperação de calor (HRV) compatíveis com o sistema TVR Pro CO Series. Estudo detalhado da tabela de combinações modulares de unidades externas, desde 8HP (módulo único) até 90HP (três módulos de 30HP), incluindo os kits de junção de derivação externa (TODK) obrigatórios para sistemas multi-módulo."
```

---

## 2. CONTEÚDO TÉCNICO DA AULA

### 2.1 Introdução ao Ecossistema TVR Pro CO Series

O sistema TRANE TVR Pro CO Series é uma plataforma de climatização comercial VRF (Variable Refrigerant Flow) de alta capacidade, projetada para operar com gás refrigerante **R410A** e alimentação elétrica **380V**. O manual de serviço abrange 12 modelos de unidades externas, com nomenclaturas que vão de **4TVY0077HE000AA** (8HP) até **4TVY0290HE000AA** (30HP) como módulos individuais, e atingem até **90HP** em configurações de três módulos combinados.

Para que o profissional de campo opere, dimensione e diagnostique corretamente um sistema TVR Pro CO, é fundamental dominar três pilares:

1. **O que pode ser conectado internamente** — os tipos e capacidades de evaporadoras (unidades internas).
2. **Qual é a potência do motor externo** — as capacidades das condensadoras (unidades externas).
3. **Como os módulos se agrupam** — a lógica de combinação modular e os kits de derivação necessários.

Esta aula detalha cada um desses pilares com dados extraídos estritamente do manual de serviço.

---

### 2.2 Unidades Internas — Tipos e Códigos de Abreviação

O sistema TVR Pro CO suporta **9 tipos de unidades internas padrão**, cada uma identificada por um código de abreviação que será utilizado em toda a documentação técnica, diagramas de projeto e na nomenclatura do modelo. O profissional deve memorizar esses códigos, pois eles aparecem em plantas baixas, ordens de serviço e etiquetas de identificação dos equipamentos.

**Tabela de Códigos de Abreviação — Unidades Internas Padrão (Table 1-1.1):**

| Código | Tipo de Unidade |
|--------|-----------------|
| **Q1** | One-way Cassette (Cassete de 1 via) |
| **Q2** | Two-way Cassette (Cassete de 2 vias) |
| **Q4C** | Compact Four-way Cassette (Cassete Compacto de 4 vias) |
| **Q4** | Four-way Cassette (Cassete de 4 vias) |
| **T2** | Medium Static Pressure Duct (Duto de Média Pressão Estática) |
| **T1** | High Static Pressure Duct (Duto de Alta Pressão Estática) |
| **G** | Wall-mounted (Hi-Wall / Parede) |
| **DL** | Ceiling & Floor (Piso-Teto) |
| **F** | Floor Standing (Coluna / Gabinete Vertical) |

**Regra de Campo:** Ao chegar em uma instalação existente e precisar identificar o tipo de unidade interna, o código de abreviação é a chave. Se a planta especifica "Q4" para uma sala de reunião, você sabe que é um **Cassete de 4 vias** — equipamento embutido no forro com distribuição de ar em quatro direções. Se especifica "T1", trata-se de um **Duto de alta pressão estática**, normalmente oculto no forro e conectado a uma rede de dutos, ideal para grandes salões comerciais.

---

### 2.3 Faixa de Capacidade das Unidades Internas Padrão

Cada tipo de unidade interna possui uma faixa de capacidade disponível, medida em **kW** e expressa também em **HP** (Horse Power) e em um **índice de capacidade** (Capacity Index) que é o multiplicador utilizado na nomenclatura do modelo. A tabela a seguir (Table 1-1.2 do manual) apresenta a matriz completa de disponibilidade:

| kW | HP | Capacity Index | Q1 | Q2 | Q4C | Q4 | T2 | T1 | G | DL | F |
|----|-----|---------------|----|----|-----|----|----|----|---|----|---|
| 1.8 | 0.6 | 18 | 18 | — | — | — | — | — | — | — | — |
| 2.2 | 0.8 | 22 | 22 | 22 | 22 | — | 22 | — | 22 | — | 22 |
| 2.8 | 1.0 | 28 | 28 | 28 | 28 | 28 | 28 | — | 28 | — | 28 |
| 3.6 | 1.25 | 36 | 36 | 36 | 36 | 36 | 36 | — | 36 | 36 | 36 |
| 4.5 | 1.6 | 45 | 45 | 45 | 45 | 45 | 45 | — | 45 | 45 | 45 |
| 5.6 | 2.0 | 56 | 56 | 56 | — | 56 | 56 | — | 56 | 56 | 56 |
| 7.1 | 2.5 | 71 | 71 | 71 | — | 71 | 71 | 71 | 71 | 71 | 71 |
| 8.0 | 3.0 | 80 | — | — | — | 80 | 80 | 80 | 80 | 80 | 80 |
| 9.0 | 3.2 | 90 | — | — | — | 90 | 90 | 90 | 90 | 90 | — |
| 10.0 | 3.6 | 100 | — | — | — | 100 | — | — | — | — | — |
| 11.2 | 4.0 | 112 | — | — | — | 112 | 112 | 112 | — | 112 | — |
| 14.0 | 5.0 | 140 | — | — | — | 140 | 140 | 140 | — | 140 | — |
| 16.0 | 6.0 | 160 | — | — | — | — | — | 160 | — | 160 | — |
| 20.0 | 7.0 | 200 | — | — | — | — | — | 200 | — | — | — |
| 25.0 | 9.0 | 250 | — | — | — | — | — | 250 | — | — | — |
| 28.0 | 10.0 | 280 | — | — | — | — | — | 280 | — | — | — |
| 40.0 | 14.0 | 400 | — | — | — | — | — | 400 | — | — | — |
| 45.0 | 16.0 | 450 | — | — | — | — | — | 450 | — | — | — |
| 56.0 | 20.0 | 560 | — | — | — | — | — | 560 | — | — | — |

**Análise Técnica da Matriz:**

- A unidade **Q1** (Cassete 1 via) é a mais limitada, disponível apenas de 18 a 71 (1.8 kW a 7.1 kW). É ideal para corredores, recepções e espaços lineares.
- A unidade **T1** (Duto de Alta Pressão) é a mais versátil em potência, cobrindo de 71 até 560 (7.1 kW a 56.0 kW / 20HP). É a única unidade interna capaz de atingir capacidades industriais, sendo utilizada em grandes salões de eventos, centros de convenção e áreas produtivas.
- O Cassete **Q4C** (Compacto de 4 vias) opera na faixa de 22 a 45 (2.2 kW a 4.5 kW), limitado a ambientes de pequeno e médio porte.
- Unidades **G** (Hi-Wall) cobrem de 22 a 90 (2.2 kW a 9.0 kW), representando a faixa residencial e de pequenos escritórios.
- Unidades **DL** (Piso-Teto) vão de 36 a 160 (3.6 kW a 16.0 kW), sendo versáteis para salas comerciais médias.

---

### 2.4 Unidades de Ar Novo (Fresh Air Processing Unit)

Além das evaporadoras padrão, o sistema TVR Pro CO é compatível com **unidades de processamento de ar novo** (Fresh Air Processing Unit), identificadas pelo código **FA**. Essas unidades captam ar externo, condicionam-no (resfriam ou aquecem) e insuflam ar tratado no ambiente, sendo obrigatórias em projetos que exigem renovação de ar conforme normas sanitárias.

**Faixa de Capacidade — Fresh Air (Table 1-1.3):**

| Capacidade (kW) | 12.5 | 14 | 20 | 25 | 28 | 45 | 56 |
|------------------|------|----|----|----|----|----|-----|
| **Capacity Index** | 125 | 140 | 200 | 250 | 280 | 450 | 560 |

As unidades FA operam de 12.5 kW (125) a 56 kW (560), com sete opções de capacidade. Elas são geralmente instaladas em casas de máquinas ou no topo de edifícios, conectadas a dutos de distribuição.

---

### 2.5 Ventiladores de Recuperação de Calor (Heat Recovery Ventilator — HRV)

O sistema também suporta **ventiladores de recuperação de calor (HRV)**, que realizam a troca térmica entre o ar de exaustão (que sai do ambiente) e o ar de insuflação (que entra), recuperando energia e reduzindo o consumo do sistema de climatização.

**Faixa de Capacidade — HRV (Table 1-1.4):**

| Vazão de Ar | 200 m³/h | 300 m³/h | 400 m³/h | 500 m³/h | 800 m³/h | 1000 m³/h | 1500 m³/h | 2000 m³/h |
|-------------|----------|----------|----------|----------|----------|-----------|-----------|-----------|
| **Disponível** | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |

Os HRVs estão disponíveis em 8 opções de vazão, de 200 m³/h até 2000 m³/h.

---

### 2.6 Unidades Externas — Faixa de Capacidade e Modelos

As unidades externas (condensadoras) do TVR Pro CO Series cobrem uma faixa massiva de **8HP a 30HP como módulos individuais**. Cada modelo é identificado por um código de nomenclatura de 15 dígitos (que será detalhado no Tópico 1.2).

**Tabela de Modelos de Unidades Externas (Table 1-1.5):**

| Capacidade (HP) | Modelo | Tipo de Combinação |
|-----------------|--------|--------------------|
| 8 | 4TVY0077HE000AA | Módulo Único |
| 10 | 4TVY0096HE000AA | Módulo Único |
| 12 | 4TVY0115HE000AA | Módulo Único |
| 14 | 4TVY0140HE000AA | Módulo Único |
| 16 | 4TVY0155HE000AA | Módulo Único |
| 18 | 4TVY0170HE000AA | Módulo Único |
| 20 | 4TVY0192HE000AA | Módulo Único |
| 22 | 4TVY0210HE000AA | Módulo Único |
| 24 | 4TVY0229HE000AA | Módulo Único |
| 26 | 4TVY0249HE000AA | Módulo Único |
| 28 | 4TVY0268HE000AA | Módulo Único |
| 30 | 4TVY0290HE000AA | Módulo Único |

**Além dos módulos unitários, o sistema escala até 90HP combinando módulos:**

| Capacidade (HP) | Modelo | Combinação |
|-----------------|--------|------------|
| 32 | 4TVY0310HE000AA | 16HP + 16HP |
| 34 | 4TVY0325HE000AA | 22HP + 12HP |
| 36 | 4TVY0347HE000AA | 20HP + 16HP |
| 38 | 4TVY0365HE000AA | 22HP + 16HP |
| 40 | 4TVY0384HE000AA | 24HP + 16HP |
| 42 | 4TVY0404HE000AA | 26HP + 16HP |
| 44 | 4TVY0423HE000AA | 28HP + 16HP |
| 46 | 4TVY0445HE000AA | 30HP + 16HP |
| 48 | 4TVY0459HE000AA | 26HP + 22HP |
| 50 | 4TVY0478HE000AA | 28HP + 22HP |
| 52 | 4TVY0500HE000AA | 30HP + 22HP |
| 54 | 4TVY0517HE000AA | 28HP + 26HP |
| 56 | 4TVY0536HE000AA | 28HP + 28HP |
| 58 | 4TVY0558HE000AA | 30HP + 28HP |
| 60 | 4TVY0580HE000AA | 30HP + 30HP |
| 62 | 4TVY0600HE000AA | 30HP + 16HP + 16HP |
| 64 | 4TVY0614HE000AA | 26HP + 22HP + 16HP |
| 66 | 4TVY0633HE000AA | 28HP + 22HP + 16HP |
| 68 | 4TVY0655HE000AA | 30HP + 22HP + 16HP |
| 70 | 4TVY0672HE000AA | 28HP + 26HP + 16HP |
| 72 | 4TVY0691HE000AA | 28HP + 28HP + 16HP |
| 74 | 4TVY0713HE000AA | 30HP + 28HP + 16HP |
| 76 | 4TVY0735HE000AA | 30HP + 30HP + 16HP |
| 78 | 4TVY0746HE000AA | 28HP + 28HP + 22HP |
| 80 | 4TVY0768HE000AA | 30HP + 28HP + 22HP |
| 82 | 4TVY0790HE000AA | 30HP + 30HP + 22HP |
| 84 | 4TVY0804HE000AA | 28HP + 28HP + 28HP |
| 86 | 4TVY0826HE000AA | 30HP + 28HP + 28HP |
| 88 | 4TVY0848HE000AA | 30HP + 30HP + 28HP |
| 90 | 4TVY0870HE000AA | 30HP + 30HP + 30HP |

---

### 2.7 Lógica de Escalamento Modular — Como o Sistema Cresce de 8HP a 90HP

A arquitetura modular do TVR Pro CO opera em **três faixas de escalamento**:

**Faixa 1 — Módulo Único (8HP a 30HP):**
Utiliza um único gabinete de condensação. O sistema é autônomo: um único circuito frigorígeno, uma única placa controladora mestre. Não requer kits de derivação externa. Os chassis se dividem em:
- **8 a 16HP:** gabinete com ventilador único (single fan).
- **18 a 22HP:** gabinete com ventiladores duplos (dual fans).
- **24 a 30HP:** gabinete maior com ventiladores duplos (dual fans).

**Faixa 2 — Dois Módulos (32HP a 60HP):**
Combina dois gabinetes de unidade externa interligados por um **kit de junção de derivação externa TODK02UTHP**. Esse kit contém as conexões de tubulação refrigerante (juntas Y), os headers de distribuição e os conectores de comunicação necessários para unificar os dois módulos em um sistema único com um módulo Mestre e um módulo Escravo.

**Faixa 3 — Três Módulos (62HP a 90HP):**
Combina três gabinetes, utilizando o **kit de junção de derivação externa TODK03UTHP**. A hierarquia é: um módulo Mestre e dois módulos Escravos. O kit contém os headers de refrigerante e comunicação para a interconexão dos três gabinetes em um circuito unificado.

**Exemplo de Engenharia — Sistema de 90HP:**
- Combinação: **30HP + 30HP + 30HP** (três módulos iguais de capacidade máxima)
- Modelo do sistema: **4TVY0870HE000AA**
- Capacidade total: **255.0 kW**
- Kit de junção obrigatório: **TODK03UTHP**
- Cada módulo individual usa o chassi de 24-30HP com ventiladores duplos

**Exemplo de Engenharia — Sistema de 62HP:**
- Combinação: **30HP + 16HP + 16HP** (um módulo grande + dois módulos menores)
- Modelo do sistema: **4TVY0600HE000AA**
- Capacidade total: **175.0 kW**
- Kit de junção obrigatório: **TODK03UTHP**
- Nota: os dois módulos de 16HP usam chassi com ventilador único, enquanto o de 30HP usa chassi com ventiladores duplos

**Exemplo de Engenharia — Sistema de 32HP:**
- Combinação: **16HP + 16HP** (dois módulos iguais)
- Modelo do sistema: **4TVY0310HE000AA**
- Capacidade total: **90.0 kW**
- Kit de junção obrigatório: **TODK02UTHP**

---

### 2.8 Aparência Externa e Classes de Chassi

O manual classifica as unidades externas em **três classes de chassi** baseadas na capacidade e na quantidade de ventiladores:

| Classe de Chassi | Capacidades | Ventiladores | Aparência |
|-------------------|-------------|-------------|-----------|
| **Classe A** | 8, 10, 12, 14, 16 HP | 1 ventilador (single fan) | Gabinete compacto |
| **Classe B** | 18, 20, 22 HP | 2 ventiladores (dual fans) | Gabinete médio |
| **Classe C** | 24, 26, 28, 30 HP | 2 ventiladores (dual fans) | Gabinete grande |

Para as combinações multi-módulo, a aparência do sistema completo varia conforme os módulos utilizados:

| Capacidade do Sistema | Quantidade de Módulos | Aparência |
|-----------------------|-----------------------|-----------|
| 32 HP | 2 módulos | Dois gabinetes lado a lado |
| 34/36/38 HP | 2 módulos | Dois gabinetes lado a lado (tamanhos mistos) |
| 40/42/44/46 HP | 2 módulos | Dois gabinetes (médio/grande) |
| 48/50/52 HP | 2 módulos | Dois gabinetes grandes |
| 54/56/58/60 HP | 2 módulos | Dois gabinetes grandes |
| 62 HP | 3 módulos | Três gabinetes em linha |
| 64/66/68 HP | 3 módulos | Três gabinetes em linha |
| 70/72/74/76 HP | 3 módulos | Três gabinetes em linha |
| 78/80/82 HP | 3 módulos | Três gabinetes em linha |
| 84/86/88/90 HP | 3 módulos | Três gabinetes grandes em linha |

---

## 3. TABELAS E PARÂMETROS TÉCNICOS

### Tabela Resumo — Kits de Junção de Derivação Externa (Outdoor Branch Joint Kits)

| Kit | Código do Produto | Aplicação | Nº de Módulos |
|-----|-------------------|-----------|---------------|
| Kit para 2 módulos | **TODK02UTHP** | Sistemas de 32HP a 60HP | 2 |
| Kit para 3 módulos | **TODK03UTHP** | Sistemas de 62HP a 90HP | 3 |

> **Nota 1** (extraída do manual): As combinações de unidades mostradas na tabela são as recomendadas de fábrica. Outras combinações de unidades também são possíveis.

> **Nota 2** (extraída do manual): Para sistemas com duas ou mais unidades externas, os kits de junção de derivação externa (vendidos separadamente) são obrigatórios.

### Tabela Resumo — Faixas de Capacidade por Tipo de Unidade Interna

| Código | Tipo | Capacidade Mínima (kW) | Capacidade Máxima (kW) | Faixa HP |
|--------|------|------------------------|------------------------|----------|
| Q1 | Cassete 1 via | 1.8 | 7.1 | 0.6 – 2.5 |
| Q2 | Cassete 2 vias | 2.2 | 7.1 | 0.8 – 2.5 |
| Q4C | Cassete Compacto 4 vias | 2.2 | 4.5 | 0.8 – 1.6 |
| Q4 | Cassete 4 vias | 2.8 | 10.0 | 1.0 – 3.6 |
| T2 | Duto Média Pressão | 2.2 | 9.0 | 0.8 – 3.2 |
| T1 | Duto Alta Pressão | 7.1 | 56.0 | 2.5 – 20.0 |
| G | Hi-Wall (Parede) | 2.2 | 9.0 | 0.8 – 3.2 |
| DL | Piso-Teto | 3.6 | 16.0 | 1.25 – 6.0 |
| F | Coluna (Floor Standing) | 2.2 | 8.0 | 0.8 – 3.0 |

---

## 4. INFOBOX DE CAMPO / AVISOS

> [!CAUTION]
> **REGRA INEGOCIÁVEL — Kit de Derivação Obrigatório:**
> Todo sistema com 2 ou mais módulos de unidade externa **OBRIGATORIAMENTE** requer o kit de junção de derivação correspondente (TODK02UTHP ou TODK03UTHP). Esses kits são vendidos separadamente e **não estão incluídos** no fornecimento padrão da unidade externa. A instalação sem o kit correto resulta em falha de comunicação entre módulos e impossibilidade de operação do sistema.

> [!WARNING]
> **IDENTIFICAÇÃO RÁPIDA EM CAMPO — Contagem de Ventiladores:**
> Use esta regra de ouro para identificar rapidamente a faixa de capacidade de uma unidade externa no campo:
> - **1 ventilador** → 8 a 16 HP (Classe A)
> - **2 ventiladores** → 18 a 30 HP (Classes B e C)
> - **2 gabinetes lado a lado** → 32 a 60 HP (sistema de 2 módulos)
> - **3 gabinetes em linha** → 62 a 90 HP (sistema de 3 módulos)

> [!IMPORTANT]
> **DICA DE DIMENSIONAMENTO — Unidade Interna T1:**
> A unidade de Duto de Alta Pressão Estática (T1) é a **ÚNICA** evaporadora que alcança capacidades de 14HP a 20HP (40.0 kW a 56.0 kW). Se o projeto exige climatizar um salão de grande porte (>200m²) com uma única evaporadora de alta vazão conectada a uma rede de dutos, o código T1 é a única opção disponível no portfólio TVR Pro CO.

> [!TIP]
> **VERIFICAÇÃO DE COMPATIBILIDADE — Fresh Air e HRV:**
> As unidades de Ar Novo (FA) possuem capacidades que iniciam em 12.5 kW (index 125). Isso significa que elas **NÃO** são compatíveis com unidades externas de 8HP (22.4 kW) de forma isolada se o projeto exigir múltiplas FA, pois uma única FA de 12.5 kW já consumiria mais de metade da capacidade da condensadora. Sempre dimensione a carga total somando FA + evaporadoras padrão.

---

**Podemos prosseguir para o Tópico 1.2?**
