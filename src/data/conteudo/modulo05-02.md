# Módulo 05-02: Por que 15 Graus Destroem o VRF — Masterclass em Dinâmica de Fluidos e Geometria Frigorígena

## Introdução: O Axioma da Sobrevivência do VRF

Existe uma máxima consagrada entre engenheiros mecânicos e projetistas de climatização comercial de alto desempenho: **sistemas VRF/VRV não morrem de velhice; eles morrem por erros de geometria na tubulação de cobre.**

Ao migrar de sistemas convencionais de expansão direta (splits hi-wall simples) ou redes hidrônicas de água gelada (chillers) para a tecnologia de Fluxo de Refrigerante Variável, o instalador assume uma responsabilidade termodinâmica sem precedentes. Enquanto redes de água ou dutos de ar perdoam pequenos erros de nivelamento, desvios na rotação ou inclinações inadequadas, uma rede de cobre VRF é um ecossistema termodinamicamente implacável.

A condensadora externa central (ODU) com compressor inverter empurra continuamente uma mistura complexa e bifásica de fluido refrigerante líquido, vapor superaquecido e **óleo lubrificante** por distâncias imensas. O óleo de lubrificação do compressor (geralmente Polyvinyl Ether - PVE ou Polyolester - POE) deve circular misturado ao refrigerante e retornar ao compressor continuamente.

Se a tubulação sofrer desvios geométricos microscópicos, o óleo separa-se do fluido, acumula-se nas evaporadoras e cega as válvulas de expansão eletrônicas (EEVs). Em poucas semanas de trabalho, o compressor central sofrerá morte por **inanição de óleo**, mesmo que todas as proteções elétricas prediais estejam em perfeita conformidade.

---

## Parte I: A Dinâmica de Transporte de Óleo Lubrificante e Fluidos

Os compressores herméticos scroll acionados por inversores de frequência operam sob regimes térmicos e mecânicos extremos. Eles modulam continuamente sua velocidade (rotacionando de 10 Hz a mais de 100 Hz) para seguir a carga térmica da edificação.

### 1.1 A Necessidade do Retorno de Óleo
Os rolamentos, mancais e espirais do scroll necessitam de uma película microscópica constante de óleo lubrificante para evitar desgaste metálico direto. Durante o funcionamento, uma porcentagem do óleo do cárter (**0,5% a 1%** da massa circulante) é inevitavelmente arrastada junto com o refrigerante em direção à linha de descarga externa. 

Em sistemas de grande porte, isso significa que a carga total de óleo lubrificante do compressor pode ser totalmente bombeada para fora em menos de **50 minutos** de operação contínua. Para que o compressor sobreviva, o óleo descarregado deve realizar o circuito completo pelas tubulações de cobre e retornar ao cárter na mesma taxa de escoamento de saída.

### 1.2 PVE vs. POE: A Sludgificação por Umidade
Os sistemas VRF modernos utilizam predominantemente o óleo sintético **PVE (Polyvinyl Ether)**. 
* **Vantagem:** O PVE é miscível com refrigerantes HFC/HFO e, diferente do POE (Polyolester), não reage quimicamente com a água para formar ácidos corrosivos por hidrólise.
* **Perigo Crítico:** Em contrapartida, o PVE é extremamente higroscópico. Na presença de umidade atmosférica (frequente em vácuos mal executados), o PVE absorve a água e sofre uma transformação física imediata: converte-se em um **lodo gelatinoso espesso e denso**.

Este lodo biológico-químico não é transportado pelo vapor do refrigerante. Ele deposita-se nos pontos baixos da fiação hidráulica, obstrui os filtros strainers de malha fina de 100 mesh e engripa permanentemente a agulha de controle das Válvulas de Expansão Eletrônicas (EEVs).

### 1.3 Regimes de Escoamento Bifásico na Tubulação
Para arrastar o óleo viscoso pelas paredes das tubulações horizontais e risers verticais, a velocidade do vapor do refrigerante deve manter-se alta. O escoamento bifásico estabiliza-se em diferentes regimes físicos:

```
Horizontal Flow Regimes:
1. Bubble Flow      [ ○  ○  ○  Liquid  ○ ] -> Vapor bubbles in liquid
2. Stratified Flow  [ === Vapor === / --- Liquid --- ] -> Slow river (DANGEROUS OIL TRAP)
3. Annular Flow     [ === Liquid film === ( Vapor Core ) === Liquid film === ] -> TARGET STATE
```

* **Escoamento Estratificado (Stratified Flow):** Em velocidades baixas, a gravidade domina. O refrigerante líquido e o óleo viscoso depositam-se no fundo do tubo, movendo-se lentamente, enquanto o vapor desliza limpo na parte superior. Isso forma um imenso **poço de óleo** na linha de sucção.
* **Escoamento Anular (Annular Flow):** É o regime de projeto ideal do VRF. A alta velocidade da corrente central de vapor empurra o líquido e o óleo contra as paredes internas do tubo de cobre, forçando a criação de um anel homogêneo e de alta velocidade que avança continuamente de volta ao compressor.

---

## Parte II: A Física dos Refnets e a Regra Crítica de Inclinação de ±15 Graus

Em vez de coletores ou coletores hidráulicos convencionais (Manifolds), o VRF divide o fluido entre as evaporadoras usando conexões em "Y" de engenharia de fluidos aerodinâmica denominadas **Refnets** (Y-Joints / Refnet Branches).

### 2.1 Por que Conexões Tee Comuns são Proibidas
Em canalizações hidráulicas, é comum o uso de conexões em T (Tee Joint) comuns. No entanto, no escoamento bifásico do refrigerante (mistura turbulenta de líquido e vapor), ao colidir perpendicularmente com a parede interna de um Tee comum a 90°:
* Ocorre uma violenta perda de energia mecânica.
* A fase líquida desacelera de imediato, enquanto a fase gasosa contorna a quina do Tee em alta velocidade, provocando forte queda de pressão e redemoinhos.
* Cria-se uma **má distribuição de fase**: um ramal recebe uma enxurrada de líquido enquanto o outro ramal capta apenas vapor seco.

O Refnet é projetado com transições suaves e ângulos aerodinâmicos que dividem de forma simétrica e sem turbulência o anel líquido (escoamento anular) e o núcleo de vapor.

### 2.2 A Lei dos ±15 Graus
Para garantir que a gravidade e a inércia não provoquem a divisão desigual das fases do refrigerante, os Refnets horizontais instalados nas linhas principais devem respeitar uma tolerância geométrica estrita:

```
[ Refnet Horizontal ]
              \       /
               \     / 
────────────────█───█───────────────── (Horizontal Plane)
               /     \
              /       \
  MÁXIMO ÂNGULO DE INCLINAÇÃO ADMISSÍVEL = ±15°
```

> [!CAUTION]
> A inclinação de um Refnet horizontal em relação ao plano horizontal da edificação **nunca deve exceder ±15°**. Se o Refnet for instalado inclinado a 20° ou mais, a física das fases atuará de forma destrutiva: a gravidade puxará a porção densa líquida (e todo o óleo lubrificante) para a ramificação inferior, enquanto o vapor leve subirá pelo ramal superior. A conexão passa a funcionar como um separador mecânico de fases involuntário.

---

## Parte III: O Efeito Dominó de Falhas: Flooding, Hunting e Queima

Quando um Refnet sofre desvio de inclinação superior a 15 graus, instala-se uma falha termodinâmica em cascata que compromete toda a planta:

### 3.1 O Ramal Inferior Inundado (Flooded Branch)
A evaporadora (IDU) conectada a esta saída recebe uma quantidade maciça de fluido líquido. 
1. A carga de calor interna da sala é incapaz de evaporar esse volume líquido excedente.
2. Os sensores termistores de sucção medem sobreaquecimento nulo ($SH = 0K$).
3. Para impedir a entrada de líquido puro no compressor da ODU, a controladora da IDU fecha sua **Válvula de Expansão Eletrônica (EEV)** acionada por motor de passo (fechando para 0 a 60 pulsos).
4. Ao fechar a EEV, a velocidade do fluido neste ramal colapsa para zero. O óleo PVE ou POE perde velocidade de arrasto e deposita-se na serpentina, ficando aprisionado como em uma represa.

### 3.2 O Ramal Superior Faminto (Starved Branch)
A evaporadora conectada ao ramal superior recebe apenas vapor.
1. O vapor tem baixíssima capacidade de absorção de calor latente; a capacidade térmica da unidade cai a zero e a sala superaquece.
2. O termistor de saída mede um sobreaquecimento severo e descontrolado.
3. A lógica PID da IDU, tentando resfriar a sala, ordena a abertura total da sua EEV (modulando ao limite máximo de 480 ou 2000 pulsos).
4. Como o Refnet inclinado não envia líquido para cima, a EEV permanece aberta arrastando apenas vapor de retorno sob forte ruído. O microprocessador entra em **EEV Hunting (oscilação errática)**. A válvula abre e fecha continuamente gerando estalos mecânicos constantes e atrito a seco (sem lubrificação do óleo), levando ao travamento mecânico do motor de passo.

### 3.3 A Destruição do Compressor Inverter
Enquanto as IDUs falham, o compressor na condensadora opera em alta velocidade para suprir a demanda da unidade faminta. Ele bombeia continuamente óleo para o sistema, mas o óleo fica retido na bandeja do evaporador inundado e stagnado da outra linha.
1. O nível no cárter do compressor cai abaixo do limite crítico.
2. A espiral scroll orbita sem filme lubrificante; a fricção eleva a temperatura de descarga a níveis severos.
3. O calor destrói a viscosidade do PVE restante, oxidando-o em uma lama ácida e abrasiva.
4. Mancais de aço sofrem fusão mecânica e travamento (Locked Rotor Ampere - LRA permanente), inutilizando o compressor trifásico inverter de alta potência.

---

## Parte IV: A Regra 20/40 para Fluxos Laminares

Para garantir a eficiência de divisão mecânica nos Refnets, o fluxo que entra no Y de cobre deve ser laminar e simétrico.

```
       Upstream Run                       Downstream Run
───[ CURVA 90° ]────── Mínimo 500mm ──────► [ REFNET ] ───── Mínimo 500mm ─────► [ CURVA 90° ]
                                                │
                                       Mínimo 1000mm (Entre dois Refnets)
                                                ▼
                                            [ REFNET 02 ]
```

* **Run Upstream (Entrada do Refnet):** Curvas, reduções ou junções a menos de **500 mm (20 polegadas)** do Refnet jogam o fluido bifásico contra a parede externa do tubo devido à força centrífuga, desregulando a entrada. É obrigatório manter um trecho retilíneo mínimo de 500 mm antes do Refnet.
* **Espaçamento entre Refnets Sucessivos:** Se houver dois Refnets em sequência na mesma linha, a distância retilínea mínima entre eles deve ser de **1000 mm (40 polegadas)** para amortecer as ondas de perturbação e restabelecer o escoamento anular estável antes do segundo ramal.

---

## Parte V: Limites Dimensionais de Projeto do Ciclo Termodinâmico

O dimensionamento mecânico de redes VRF comerciais segue restrições volumétricas e hidrostáticas inegociáveis:

### 5.1 Comprimento Efetivo Total (TEL)
Soma das extensões físicas das tubulações somada aos comprimentos equivalentes dinâmicos de conexões e componentes (Refnets, curvas, sifões). A perda de carga combinada limita a rede predial a no máximo **1000 metros** totais de cobre. Ultrapassar este limite exige uma carga volumétrica de refrigerante tão alta que excede a capacidade de retenção de líquido do acumulador de sucção da condensadora, provocando golpes hidráulicos crônicos em partidas a frio.

### 5.2 Distância ODU ao Farthest IDU (Comprimento Máximo Real)
A distância linear da unidade externa (condensadora) ao evaporador mais distante na linha física é limitada a **165 metros reais** (equivalente a 190-200m computando perdas). Se a distância for maior, a queda de pressão estática na sucção exige razões de compressão extremas da condensadora, reduzindo a eficiência global e superaquecendo o óleo.

### 5.3 Limites de Elevação e Desnível Vertical
As elevações verticais sofrem ação severa da força gravitacional:
* **Condensadora Superior (ODU acima das IDUs):** Capped em **50 metros** verticais. Desníveis maiores criam perdas de pressão na subida do vapor de sucção, impedindo o arraste natural do óleo.
* **Condensadora Inferior (ODU abaixo das IDUs):** Capped em **40 metros**. Conforme o refrigerante líquido sobe as colunas verticais, a pressão hidrostática cai bruscamente. Ao subir acima de 40m, o refrigerante líquido atinge a pressão de saturação e sofre ebulição espontânea no meio do tubo (fenômeno do **Flash Gas na Linha de Líquido**). O vapor nascido obstrui o fluxo e causa severa perda de carga.
* **Desnível IDU-to-IDU:** O desnível máximo entre a evaporadora mais alta e a mais baixa da mesma rede é de **15 a 30 metros**, evitando desníveis hidrostáticos drásticos entre as serpentinas.

---

## Parte VI: Risers Verticais, Horizontal Pitching e Sifões de Óleo

Em subidas verticais (risers) e linhas horizontais de sucção extensas, o instalador deve utilizar sifões de óleo para evitar refluxos e represar fluidos.

```
 Suction Vertical Riser (> 7.5m):
        │
        │
      ┌─┴─┐  <- Sifão de Óleo (P-Trap)
      └─┬─┘     Coleta o óleo em descida, diminui a seção interna
        │       e aumenta a velocidade local do gás para soprar o óleo.
```

### 6.1 Os Sifões de Óleo (P-Traps)
Se um riser vertical de sucção exceder **7,5 metros**, o gás perde velocidade nas paredes devido ao atrito. Deve-se instalar um sifão de óleo (P-trap) na base do riser e a cada **6 metros** de subida vertical.
* O sifão funciona represando pequenas quantidades de óleo no seu fundo em formato de "U".
* O lodo coletado fecha a seção livre interna do tubo.
* A redução física de área gera um surto localizado na velocidade do gás vapor que passa.
* Esse pulso rápido de velocidade sopra o plugue de óleo para a seção seguinte de subida, conduzindo o lubrificante na vertical de forma intermitente.

### 6.2 Pitching Horizontal (Declividade Mínima)
Trechos horizontais de sucção com extensão superior a 6 metros devem ser instalados com inclinação descendente mínima de **1%** no sentido de escoamento para a ODU. Isso garante que a gravidade empurre lentamente o filme de óleo que precipita no fundo do tubo estratificado.

---

## Parte VII: Branch Selector (BS) Boxes nos Sistemas de Recuperação de Calor

Nos sistemas VRF trifásicos comerciais avançados, a eficiência é maximizada por sistemas de **Recuperação de Calor (Heat Recovery)**, capazes de realizar resfriamento e aquecimento simultâneo em salas opostas da edificação.

### 7.1 Arquitetura de 3 Tubos
A condensadora interliga-se a um distribuidor eletromecânico central, a **Branch Selector (BS) Box** ou **BC Controller**, através de três tubos de cobre dedicados:
1. **Linha de Sucção Lógica (Baixa Pressão Gasosa):** Retorno de gás frio para o compressor.
2. **Linha de Alta Pressão Gasosa (Descarga Quente):** Gás superaquecido direto da descarga do compressor para aquecimento.
3. **Linha de Alta Pressão Líquida:** Alimentação de líquido condensado para resfriamento.

### 7.2 O Princípio de Redirecionamento da BS Box
A BS box atua como uma central inteligente de distribuição dotada de sensores, microprocessadores e baterias de válvulas solenoides. 
* Se uma sala requer aquecimento, o solenoide da linha de gás quente abre-se, convertendo a evaporadora da IDU local em condensadora (o gás quente cede calor latente ao ar e liquefaz-se).
* O refrigerante líquido resultante não retorna à cobertura; a BS box desvia este líquido de alta pressão internamente para alimentar a evaporadora adjacente que necessita de resfriamento. O calor extraído de uma sala é diretamente transferido para aquecer a outra, diminuindo a carga mecânica sobre o compressor na cobertura.

### 7.3 O Subresfriador Placa Integrado (Brazed Plate Heat Exchanger)
Para assegurar a densidade e integridade do fluido líquido encaminhado para as unidades de resfriamento distante, a BS box contém um **Trocador de Placas Brasadas de Subresfriamento**.
* Uma fração mínima de refrigerante líquido é derivada e expandida em uma mini-EEV interna, resfriando o trocador de calor.
* O fluxo principal de líquido passa pelo lado oposto, reduzindo sua temperatura em até 26°C.
* Este subresfriamento líquido comprime o volume fluido, eliminando a presença de bolhas de gás na linha que induzem oscilações lógicas (EEV hunting) e ruídos de jato de expansão de dados.

---

## Tabelas Técnicas de Referência para Comissionamento de Tubulações VRF

Abaixo estão listadas as tabelas para auditoria de redes frigorígenas VRF comerciais:

### Parâmetros Dimensionais Limites para Redes VRF Comerciais

| Parâmetro Geométrico | Limite Máximo Recomendado (Daikin/Mitsubishi) | Consequência Eletrotérmica se Ultrapassado |
| :--- | :--- | :--- |
| **Comprimento Equivalente Total (TEL)** | 1000 metros | Sobrecarga de acumuladores; quebra mecânica do scroll |
| **ODU ao Farthest IDU (Linear Real)** | 165 metros | Elevada queda de pressão; superaquecimento da sucção |
| **Desnível ODU acima das IDUs** | 50 metros | Falha mecânica de retorno de óleo vertical |
| **Desnível ODU abaixo das IDUs** | 40 metros | Queda hidrostática; fervura interna (Flash Gas) no líquido |
| **Desnível IDU-to-IDU Máximo** | 15 metros | Assimetria hidrostática severa entre serpentinas |
| **Inclinação do Refnet Horizontal** | Max ± 15° | Separação física de fases; inanição de óleo; queima |

### Matriz de Diagnóstico Físico de Tubulações

| Pane Detectada | Mecanismo Físico | Sintoma no Ciclo Termodinâmico | Solução Recomendada em Campo |
| :--- | :--- | :--- | :--- |
| **Refnet Inclinado a > 20°** | Separação de líquido e vapor por gravidade | Ramal baixo SH=0 (EEV fecha); ramal alto SH alto (EEV hunt) | Substituir trecho de cobre e nivelar Refnet horizontalmente. |
| **Curva de 90° colada ao Refnet** | Separação centrífuga de fase líquida | Divisão assimétrica severa de refrigerante entre ramais | Inserir trecho de tubo reto de 500 mm antes do Refnet. |
| **Riser vertical sem P-Traps** | Falha de arraste de óleo vertical por gravidade | Queda no nível do cárter; locked rotor por fricção | Instalar sifão em U na base e a cada 6m de riser. |
| **PVE gelificado nos strainers** | Absorção de umidade (PVE altamente higroscópico) | Bloqueio de fluxo de refrigerante; quebra de agulhas EEV | Limpar strainers; realizar triplo vácuo sub-500 microns. |

---

## Alertas de Campo e Recomendações Críticas

> [!IMPORTANT]
> **PURGA DE NITROGÊNIO OBRIGATÓRIA DURANTE A BRASAGEM**
> Durante o processo de união de tubos por brasagem de oxiacetileno com solda foscoper ou prata, é inegociável manter uma purga de nitrogênio em fluxo contínuo de **2 a 3 CFH** (pressão extremamente baixa). A presença de oxigênio sob temperaturas de fusão (>600°C) oxida o cobre interno gerando uma fuligem preta abrasiva (Óxido Cúprico). O fluxo de refrigerante varrerá essa fuligem de toda a parede, entupindo strainers e as finas portas lógicas das EEVs da BS box.

> [!CAUTION]
> **TESTE DE ESTANQUEIDADE EM 550 PSI**
> Devido às altíssimas pressões de operação sob refrigerante R-410A ou R-32, as juntas de brasagem devem ser testadas contra microvazamentos aplicando pressão de nitrogênio a **550 PSI por 24 horas**. Variações drásticas de temperatura durante o teste de pressão devem ser corrigidas matematicamente (variação de 1°C altera ~1.47 PSI na pressão da linha) para evitar falsos alarmes de vazamento.
