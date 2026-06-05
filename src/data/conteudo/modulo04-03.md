# Módulo 04-03: Como Cabos de Dados Explodem Compressores — Masterclass em Protocolos Eletrotérmicos e Redes de Comunicação

## Introdução: O Inverter como Sistema Nervoso Distribuído

Nos sistemas de climatização residenciais e comerciais clássicos, a comunicação limitava-se a simples contatores liga/desliga de 24VAC ou comandos termostáticos rudimentares. O compressor operava em velocidade constante e as válvulas de expansão eram puramente mecânicas, respondendo a pressões e temperaturas locais de forma autônoma. 

Os sistemas modernos de Fluxo de Refrigerante Variável (VRF) e Volume de Refrigerante Variável (VRV) alteraram completamente essa realidade. Uma condensadora externa (ODU) não é mais apenas uma unidade de rejeição de calor; é um **computador termodinâmico distribuído de alta complexidade**. Nesse ecossistema, as tubulações de cobre constituem o sistema circulatório de fluido refrigerante, enquanto as linhas de comunicação serial representam o **sistema nervoso central** da instalação.

Neste módulo, detalhamos a física da transmissão de dados, as consequências catastróficas de interferências eletromagnéticas e os procedimentos inegociáveis de instalação elétrica e blindagem predial. Uma falha de comunicação física na linha de dados não resulta meramente em uma mensagem de erro ou perda de conforto térmico temporário: em sistemas VRF, ela **destrói compressores mecanicamente por inundação de líquido (slugging) e lavagem de óleo lubrificante**.

---

## Parte I: A Conexão Crítica EEV-Compressor e as Consequências da Perda de Pacotes

Para compreender a relação direta entre o cabo de comunicação e a integridade do compressor, deve-se analisar a malha de controle dinâmico do ciclo termodinâmico do VRF.

```
                  ┌───────────────────────┐
                  │ Condensadora (ODU)    │◄───────┐
                  │ ──► Mede pressões     │        │ Cabos de Comunicação
                  │ ──► Controla Inverter │        │ (RS-485 / DIII-NET)
                  └───────────┬───────────┘        │ Real Telemetry
                              │                    │
                              ▼                    │
                  ┌───────────────────────┐        │
                  │ Evaporadoras (IDUs)   │────────┘
                  │ ──► Medem temperatura │
                  │ ──► Ajustam EEVs      │
                  └───────────────────────┘
```

### 1.1 Sincronia Algorítmica e Modulação
Em um sistema VRF, dezenas de evaporadoras (IDUs) modulam sua capacidade térmica de forma independente e simultânea. O compressor inverter ajusta continuamente sua rotação (modulando de **6% a 100%** de sua frequência nominal, normalmente controlada em Hertz) com base na demanda agregada reportada pelas IDUs. 

O dispositivo de expansão mecânica tradicional (TXV) foi substituído pela **Válvula de Expansão Eletrônica (EEV)**. A EEV é acionada por um motor de passo síncrono que divide uma rotação completa em centenas de passos microscópicos. A abertura da EEV é determinada diretamente pelo microprocessador central, que calcula a taxa ideal de fluxo de massa com base nas leituras contínuas de sensores termistores nas linhas de entrada e saída da serpentina da IDU.

### 1.2 O Fenômeno da Perda de Pacotes (Blindness)
A comunicação serial ocorre por meio do envio contínuo de pacotes de dados binários contendo parâmetros lógicos críticos: velocidade de rotação do ventilador da IDU, temperatura de bulbo seco de retorno, temperatura de saturação da serpentina, diferencial de sobreaquecimento ($SH$) e pressões de descarga e sucção da ODU.

Se ocorrer ruído eletromagnético ou desconexão física na fiação, os pacotes de dados são corrompidos ou perdidos. Perante a perda de comunicação:
1. **Dados Obsoletos (Stale Data):** O microcontrolador da IDU continua operando temporariamente com a última instrução recebida (ex.: manter EEV aberta a 400 passos para suprir alta carga térmica).
2. **Queda da Carga Térmica local:** Se a carga térmica no ambiente cair repentinamente e a EEV permanecer paralisada em alta abertura devido à cegueira de dados (data blindness), o refrigerante líquido não encontrará calor suficiente no evaporador e passará direto para o estado líquido.

### 1.3 Calamidade Mecânica: Slugging e Diluição de Óleo
O refrigerante líquido não evaporado viaja pela tubulação de sucção em direção à ODU. Como os compressores herméticos são dimensionados para comprimir estritamente vapores gasosos (já que líquidos são altamente incompressíveis), a entrada de líquido cria duas falhas catastróficas imediatas:
* **Golpe de Líquido (Slugging):** Choque hidrostático violento que quebra instantaneamente as espirais do conjunto scroll ou as válvulas de admissão do compressor.
* **Lavagem de Óleo (Oil Washout):** O refrigerante líquido atua como solvente químico, lavando a película de óleo éster ou éter das placas do scroll e mancais metálicos. A fricção metal-metal resultante causa escoriação mecânica (galling), superaquecimento interno por atrito e aprisionamento (seccionamento) do motor do compressor.

---

## Parte II: A Física da Camada Física RS-485

Embora os fabricantes utilizem codificações lógicas proprietárias — como o protocolo Daikin DIII-NET em 16VDC ou o protocolo Mitsubishi M-Net em 22-30VDC —, a camada física eletromagnética de base é derivada da norma industrial **EIA/RS-485**.

### 2.1 Transmissão Diferencial Balanceada
A resiliência física do barramento RS-485 contra induções externas reside no método de **sinalização diferencial**.

```
[ Sinalizador Diferencial RS-485 ]
          ┌───► Linha Data A (V_A)   ┐  O receptor lê a diferença:
          │                          ├─► V_Diff = V_A - V_B
          └───► Linha Data B (V_B)   ┘
```

Diferente de sistemas não balanceados (onde a tensão do sinal é medida em relação a uma terra comum), a linha RS-485 utiliza dois fios condutores (Data A e Data B). 
* Quando a linha A transmite uma tensão alta (ex.: +5V), a linha B transmite uma tensão baixa equivalente (ex.: 0V).
* Quando a linha A cai para 0V, a B sobe para +5V.

O chip receptor decodifica a informação baseando-se estritamente na **diferença de potencial ($V_A - V_B$)** entre os dois fios, ignorando flutuações simultâneas em relação à terra.

### 2.2 O Mito das Redes de 2 Fios (A Terceira Via de Referência)
Um dos maiores erros cometidos em campo é considerar que barramentos RS-485 necessitam apenas de 2 fios para comunicação. Na prática, a especificação técnica do padrão estabelece limites estritos para a **Tensão de Modo Comum ($V_{cm}$)** entre os transceptores, que deve situar-se estritamente entre **-7V e +12V**.

Em grandes edifícios prediais, é impraticável garantir que a haste de aterramento da cobertura (onde fica o condensador) e a do subsolo (onde ficam evaporadoras) compartilhem do mesmo potencial físico zero. Correntes de fuga ou assimetrias prediais criam uma diferença de tensão considerável entre esses terras distantes.

Sem uma terceira conexão física para equipotencializar os drivers de dados:
$$\text{Tensão de Modo Comum } (V_{cm}) = V_{terra\_local} + \frac{V_A + V_B}{2}$$

Se $V_{cm}$ extrapolar a janela de -7V a +12V, a barreira dielétrica interna dos transceptores rompe por fenômeno de **Latch-up**, destruindo permanentemente a porta serial da placa controladora. A conexão de uma terceira via física de referência (Signal Ground / Common) é obrigatória para manter a equipotencialidade lógica da rede.

---

## Parte III: Ruídos de Alta Frequência, Inversores de Frequência (VFDs) e Leis de Indução

As centrais externas de VRF contêm inversores de frequência que alimentam os motores dos compressores. O inversor opera convertendo a tensão AC em DC Link estável, re-chaveando essa tensão por transistores de disparo ultrarrápido, os **IGBTs** (Transistores Bipolares de Porta Isolada).

### 3.1 Transientes e Alta Variação de Tensões ($dv/dt$)
Os transistores IGBT alternam a tensão em alta velocidade, mudando estados lógicos em tempos inferiores a 100 nanoseconds. Esse chaveamento gera transientes elétricos abruptos, resultando em altíssimas variações de tensão no tempo (parâmetro de cálculo derivado como $dv/dt$):

$$\text{Tensão Parasita Induzida} \propto \frac{dv}{dt}$$

Essa flutuação abrupta de alta frequência induz correntes parasitas que fluem capacitivamente para o chassi de aterramento e para o ar na forma de interferência eletromagnética (EMI).

### 3.2 A Equação de Faraday e Indução Mútua
Quando os cabos de controle e dados são colocados paralelos e próximos a cabos de alimentação elétrica de alta potência AC e PWM, o campo magnético oscilante da fiação de potência acopla-se à fiação lógica. A tensão induzida é regida pela **Lei da Indução de Faraday**:

$$\mathcal{E} = -N \frac{d\Phi}{dt}$$

Onde $\mathcal{E}$ é a força eletromotriz induzida e $d\Phi/dt$ representa a taxa de variação temporal do fluxo magnético. Devido à proximidade de fiação física, o acoplamento magnético cria uma **Indutância Mútua ($M$)**, de modo que a corrente oscilante no cabo de força induz tensão indesejada na linha de comunicação:

$$V_{ruido} = M \frac{di}{dt}$$

Dado que o barramento de comunicação lógica opera em níveis de baixa tensão (ex.: 16V a 30V), picos induzidos de ruído de alta frequência sobrepoem-se aos pulsos seriais, resultando em corrupção insolúvel de pacotes de dados.

### 3.3 A Regra da Separação Física Predial
Devido às equações de indução, o afastamento mecânico é a defesa principal contra o ruído (pois a intensidade do campo eletromagnético diminui de forma exponencial em relação à distância da fonte). 
* **Mitsubishi M-Net:** Manuais técnicos mandatam a separação física mínima absoluta de **50 mm** entre a fiação de controle de rede e qualquer fiação de força trifásica ou monofásica predial.
* **Proibição de Condutos Compartilhados:** A passagem de cabos de comunicação serial dentro do mesmo eletroduto ou calha elétrica que contém fios de alimentação AC é uma violação gravíssima de engenharia que acarreta anulação total de garantias contratuais de fabricantes.

---

## Parte IV: A Geometria e Material Science do Shielded Twisted Pair (STP)

Para proteger a linha serial contra a penetração de ruídos EMI gerados pelos inversores e rede predial, utiliza-se a arquitetura de cabos **Par Trançado Blindado (STP - Shielded Twisted Pair)**.

```
                  ┌──────────────────────┐  <- Shield Metálico
                  │  ┌───┐    ┌───┐      │     (Faraday Cage)
          ────────┼─►│ A │◄──►│ B │◄─────┼────────
                  │  └───┘    └───┘      │  <- Par Trançado
                  └──────────────────────┘     (Cancela ruído diferencial)
```

### 4.1 A Geometria do Twist (Par Trançado)
A trança geométrica dos fios Data A e Data B é o elemento primário de rejeição de ruído. Como os dois condutores estão intimamente entrelaçados em um passo de rosca regular:
1. Qualquer campo magnético externo intercepta ambos os condutores com a mesma intensidade e polaridade.
2. Se o campo externo induzir um ruído transiente de $+2V$ no fio Data A, ele induzirá os mesmos $+2V$ no fio Data B.
3. Como o transceptor RS-485 lê a diferença de potencial:
$$V_{final} = (V_A + V_{ruido}) - (V_B + V_{ruido}) = V_A - V_B$$

Os $+2V$ de ruído comum anulam-se matematicamente, mantendo o sinal lógico limpo. Desfazer a trança do cabo por mais de 50 mm (2 polegadas) em bornes de conexão destrói essa simetria física, tornando o ponto vulnerável a captação de ruídos de alta frequência.

### 4.2 O Shield Metálico como Gaiola de Faraday
Envolvendo o par trançado há uma blindagem metálica de alumínio (foil) ou trança de cobre, que funciona como uma **Gaiola de Faraday**. O shield bloqueia ruídos eletrostáticos e radiofrequência (RF) externos. As correntes parasitas interceptadas pela blindagem devem ser escoadas para a terra, limpando o caminho lógico.

---

## Parte V: Arquitetura e Engenharia de Topologia Linear (Daisy-Chain)

Em redes seriais VRF de alta frequência, a geometria de conexão física dos nós obedece estritamente a regras de propagação de ondas eletromagnéticas.

### 5.1 O Mandato da Topologia Daisy-Chain (Barramento Linear)
A fiação deve ser instalada de forma estritamente linear, partindo da ODU para a primeira IDU, desta para a segunda, sucessivamente, até alcançar o último dispositivo. Isso cria uma linha de transmissão contínua com impedância característica uniforme.

```
[ Condensadora ODU ] ───► [ Evaporadora 01 ] ───► [ Evaporadora 02 ] ───► [ Evaporadora 03 ]
                                                                                │
                                                                       [Resistor 120 Ω]
```

### 5.2 Consequências de Estrelas (Star) e Derivações (T-Tap)
O uso de topologia em estrela (cabos partindo de um único nó central para várias direções) ou derivações em T (T-Tap, onde ramais paralelos são emendados no meio da linha principal) é proibido na rede.

Qualquer cabo elétrico possui uma **Impedância Característica ($Z_0$)**, tipicamente de **120 &Omega;** para linhas RS-485. Ao introduzir uma derivação em T ou conexão em estrela, a junção física cria um desalinhamento de impedância drástico.

Segundo a teoria de linhas de transmissão de alta frequência, a onda de tensão elétrica que carrega os dados binários, ao atingir esse ponto de transição de impedância, não consegue atravessar a emenda por completo. Parte da energia cinética da onda é refletida de volta em direção à fonte (fenômeno de **Reflexão de Sinal**).

As ondas refletidas viajam no sentido inverso colidindo diretamente com novos pulsos que estão sendo transmitidos. Isso causa distorção física na onda quadrada digital (ruído de overshoot e ringing), impedindo que os microprocessadores interpretem os pulsos lógicos binários.

### 5.3 A Regra do 1/10 de Comprimento de Onda e Terminação
Para evitar a geração de reflexões destrutivas, qualquer ramal físico (stub) que conecte a placa de circuito interno à linha principal deve obedecer à **Regra de 1/10 da Subida de Pulso**:

$$L_{stub} < \frac{t_r \times v \times c}{10}$$

Onde $t_r$ é o tempo de subida do sinal do driver, $v$ é o fator de velocidade do cabo, e $c$ é a velocidade da luz. Em sistemas VRF de alta velocidade de transmissão, esse comprimento máximo admissível de ramal aproxima-se de zero, justificando a proibição absoluta de derivações físicas em campo.

A estabilização do barramento linear exige a instalação de **Resistores de Terminação** de **120 &Omega;** posicionados exclusivamente nas duas extremidades físicas da linha (o primeiro e o último nó). O resistor absorve a energia residual da onda incidente, impedindo que ela sofra reflexão ao atingir o final do cabo físico aberto.

---

## Parte VI: O Efeito Antena de Loop de Terra e Blindagem Eletromagnética

A blindagem metálica (shield) do cabo STP é um componente de proteção essencial, porém seu aterramento exige a aplicação rigorosa da **Regra de Aterramento em Único Ponto (One-End Grounding)**.

### 6.1 A Regra de Ouro do Aterramento em Ponto Único
O dreno do shield metálico deve ser emendado sequencialmente de forma contínua em cada evaporadora ao longo da rede, mas **nunca deve ser conectado à carcaça ou chassi metálico de nenhuma evaporadora**. O shield deve ser mantido flutuante e isolado nas IDUs. A blindagem metálica deve ser aterrada em **uma única extremidade física**, especificamente no borne de aterramento dedicado da condensadora central (ODU).

```
[ Condensadora ODU ]           [ Evaporadora 01 ]           [ Evaporadora 02 ]
  ┌──────────────┐               ┌──────────────┐             ┌──────────────┐
  │  Data A/B    ├───────────────┤  Data A/B    ├─────────────┤  Data A/B    │
  │              │               │              │             │              │
  │  [ ATERRADO ]│               │ [ FLUTUANTE ]│             │ [ FLUTUANTE ]│
  │   Shield ────┼───────X───────┼─── Shield ───┼───────X─────┼─── Shield    │
  └──────┬───────┘       │       └──────────────┘       │     └──────────────┘
         │               └─► Emenda direta              └─► Emenda direta
         ▼                   (Isolado de chassis)           (Isolado de chassis)
   [ TERRA REAL ]
```

### 6.2 O Mecanismo do Ground Loop (Loop de Terra)
Se um instalador ignorar esse protocolo e aterrar o shield do cabo em duas pontas distintas (ex.: no chassi da evaporadora 05 e no chassi da condensadora ODU), cria-se um **Ground Loop**.

Como as hastes de aterramento do prédio possuem potenciais elétricos ligeiramente diferentes devido a distâncias estruturais e correntes de fuga de rede predial, surge uma diferença de potencial contínua ($V_{diff}$). Esta tensão força uma corrente elétrica circulante a percorrer a blindagem metálica do cabo de dados.

### 6.3 O Efeito Antena de Loop Gigante
O cabo de sinal aterrado em múltiplos pontos e a estrutura metálica de aterramento predial formam fisicamente uma grande espira condutora fechada. 

Esta espira funciona como uma **Antena de Loop Gigante**, altamente suscetível a interceptar campos magnéticos gerados por circuitos AC prediais de 50/60 Hz (oriundos de transformadores, elevadores ou dutos elétricos adjacentes). O fluxo magnético cruzando o loop gigante induz tensões indesejadas diretamente no par trançado de dados, inutilizando os transceptores seriais e provocando parada mecânica da planta.

---

## Parte VII: Filosofias OEM de Engenharia: Daikin vs. Mitsubishi Electric

O entendimento profundo dos protocolos exige a análise de como fabricantes líderes integraram as leis da física em seus projetos específicos:

### 7.1 Daikin D-Bus (DIII-NET): Filosofia Antiloop
* **Cabo Recomendado:** Cabo de duas vias flexível multifilar (stranded), bitola de **16 a 18 AWG**, **sem blindagem metálica (unshielded)**.
* **Justificativa de Projeto:** A Daikin optou por simplificar a instalação para eliminar o erro humano comum em campo (aterramento inadequado de blindagens em duas pontas, criando loops de terra). O protocolo DIII-NET opera em corrente contínua modulada de alta amplitude (16VDC). Para que o sistema seja imune a ruídos mesmo sem shield, a Daikin exige condutores multifilares (stranded), cuja maior área superficial minimiza a atenuação por efeito pelicular (*skin effect*) sob pulsos de alta frequência.
* **Se o Shield for obrigatório (por código local):** O técnico deve garantir que os drenos do shield sejam emendados e isolados com fita isolante nas evaporadoras, conectando a blindagem à terra apenas no borne de aterramento da condensadora externa.
* **Acesso a BMS:** Utiliza interfaces Modbus (EKMBDXA / EKMBDXB) para tradução de DIII-NET para barramentos de automação externa, limitando o tráfego de polling do sistema predial a no máximo **7.000 comandos por unidade interna ao ano**, evitando saturação de banda e colisões na rede local.

### 7.2 Mitsubishi M-Net: Filosofia de Máxima Blindagem
* **Cabo Recomendado:** Cabo de duas vias blindado, bitola mínima de **1,25 mm² (16 AWG)**, padrão **CVVS/CPEVS**. O uso de cabos sem blindagem é proibido e anula garantias de fábrica.
* **Justificativa de Projeto:** A Mitsubishi prioriza a proteção total contra as emissões de alta frequência originadas de seus inversores de alta capacidade. Para guiar os instaladores, as placas controladoras Mitsubishi possuem bornes dedicados marcados com a letra **"S"** (Shield). O terminal "S" funciona como um barramento interno flutuante isolado do chassi de terra em todas as IDUs, facilitando a emenda física de continuidade da blindagem metálica. O aterramento desse barramento deve ser realizado estritamente na ODU central.

---

## Parte VIII: Matrizes Diagnósticas e Identificação de Erros Crônicos

Quando ocorrem problemas físicos nas redes de dados do VRF, o sistema gera códigos de falha específicos para proteger os compressores contra quebras iminentes.

### 8.1 Códigos de Comunicação e EEV
* **Código H0 (Midea / Trane / TVR):** Erro de comunicação de dados entre a placa controladora central do VRF e a placa de acionamento do inversor de frequência (inverter board). Se a perda de dados persistir por **2 minutos**, o sistema força uma parada geral de emergência para proteger o compressor contra aceleração descontrolada sem feedback térmico.
* **Código F6 (Midea / Trane / TVR):** Falha no ciclo de feedback de posicionamento da Válvula de Expansão Eletrônica (EEV). Ocorre quando a placa central não recebe a telemetria do motor de passo. O técnico deve testar a resistência das bobinas do motor de passo da EEV (normalmente na faixa de **40 a 50 &Omega;** entre terminais). Se a resistência estiver normal e o cabo apresentar continuidade, a pane está associada a ruído elétrico corrompendo a transmissão local.

### 8.2 O Teste EEVMATE em "Turbo Mode"
Para diagnosticar falhas de expansão e isolar causas mecânicas de falhas na rede de comunicação de dados, utiliza-se a ferramenta de campo **EEVMATE**.
1. **Bypass de Comunicação:** O EEVMATE é conectado diretamente ao terminal do motor de passo da EEV, isolando a válvula da rede serial do VRF.
2. **Modo Turbo (Turbo Mode):** O equipamento permite acionar manualmente a válvula na velocidade de até **10x** superior ao normal para abrir e fechar a EEV dinamicamente.
* Se a EEV responder perfeitamente aos passos de abertura/fechamento manual via EEVMATE, comprova-se que a mecânica interna da válvula e as bobinas síncronas estão saudáveis, indicando que a pane é de natureza eletromagnética exclusiva (presença de ground loops, derivações em T inapropriadas ou proximidade física a cabos de força).

---

## Tabelas e Matrizes Técnicas de Referência

Abaixo estão dispostas as matrizes de especificação predial para engenharia de comunicação VRF/VRV:

### Matriz Comparativa de Protocolos de Comunicação

| Parâmetro de Comparação | Daikin DIII-NET (D-Bus) | Mitsubishi M-Net | Padrão Industrial RS-485 |
| :--- | :--- | :--- | :--- |
| **Tensão do Barramento** | 16 VDC (Pulsado) | 22 a 30 VDC | Diferencial (-7V a +12V Vcm) |
| **Tipo de Cabo Padrão** | 16-18 AWG Stranded, Sem Blindagem | 1.25 mm² (16 AWG) Blindado CVVS | 22-24 AWG STP com dreno |
| **Topologia Permitida** | Daisy-Chain Linear | Daisy-Chain Linear (estrito) | Daisy-Chain com resistores term. |
| **Ponto de Aterramento** | Somente condensadora (se usar shield) | Borne "S" em IDUs, aterrado em ODU | ODU ou mestre da rede predial |
| **Filosofia de Segurança** | Eliminação de erros de loops em campo | Blindagem total e barramento de continuidade | Equipotencialização de terras prediais |

### Matriz Diagnóstica de Falhas Físicas na Rede de Dados

| Sintoma Detectado | Causa Física Provável | Impacto Térmico no Ciclo | Código Comum de Erro |
| :--- | :--- | :--- | :--- |
| **Derivação em T-Tap na Linha** | Reflexão de sinal e ruído de ringing | EEV blindada emperra aberta; compressor destrói por slugging | **U4** (Daikin) / **6607** (Mitsubishi) |
| **Aterramento em Duas Pontas** | Loop de terra e efeito antena de loop | Corrupção de pacotes lógica; queima física de transceptor | **U4** (Daikin) / **H0** (Trane) |
| **Falta de Referência de Terra** | Diferença de tensão de modo comum | Colapso interno de chips por Latch-up eletrostático | **U4** (Daikin) / **6607** (Mitsubishi) |
| **Instalação Paralela a Cabo Força** | Indução magnética (Faraday: V = M &times; di/dt) | Parada súbita do compressor sob alta aceleração | **H0** / **F6** (TVR/Midea) |
| **Resistor de Terminação Faltante** | Sinal rebate nas pontas abertas da fiação | Queda intermitente de IDUs; erro na leitura de sensores | **6607** (Mitsubishi) / **U4** (Daikin) |
