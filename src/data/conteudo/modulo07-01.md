# Módulo 07-01: O Fim do Achismo no Comissionamento VRF — Padrão de Elite em Carga Fracionada de Fluido e Protocolo de Partida

## Introdução: O Momento da Verdade: Comissionamento como Teste Definitivo

Na instalação de sistemas de Fluxo de Refrigerante Variável (VRF), redes de recuperação de calor e resfriadores de líquido inverter, a era dos ajustes baseados em estimativas empíricas foi superada pela necessidade de protocolos rígidos de engenharia. O comissionamento desses sistemas representa o verdadeiro "Momento da Verdade". Não se trata apenas de energizar os equipamentos e verificar se fornecem ar frio, mas sim de um processo estruturado de testes e calibrações que substitui qualquer tipo de adivinhação por medições elétricas e termodinâmicas precisas.

A execução rigorosa dessas etapas resulta na criação da "Certidão de Nascimento" do sistema — um relatório técnico detalhado que documenta os parâmetros operacionais da máquina no primeiro dia de funcionamento. Este registro inicial é fundamental por dois motivos principais:

1.  **Referência Diagnóstica:** Serve como base de comparação para toda a vida útil do equipamento. Manutenções futuras dependem de comparar dados de operação atuais com essa linha de base para detectar perdas graduais de eficiência (como incrustação de bobinas, degradação do isolamento do compressor ou microvazamentos).
2.  **Validação de Garantia:** Fabricantes de sistemas VRF exigem universalmente o envio desses dados de comissionamento — testes de pressão, vácuo de declínio, cargas calculadas por balanço de massa e simetria elétrica — como condição para validar garantias estendidas de compressores. Falhas nessa precisão inicial expõem o instalador ao custo financeiro de substituições de compressores de frequência variável e placas inversoras.

---

## Parte I: A Falácia Termodinâmica do Diagnóstico Heurístico: Aposentando o Método "Beer-Can Cold"

Para adotar protocolos de precisão, é necessário afastar práticas ultrapassadas que ainda ocorrem na periferia do setor de refrigeração. A mais danosa delas é o método informal conhecido como *"beer-can cold"* (linha de sucção fria ao toque como uma lata de bebida).

### O Contexto Histórico e Limitações
Surgida em meados do século XX, quando os sistemas de refrigeração eram superdimensionados e de velocidade fixa, a avaliação do fluxo pelo tato na linha de sucção (esperando algo em torno de 1,7°C a 4,4°C) funcionava apenas devido à grande tolerância dessas máquinas antigas. Elas operavam com compressores alternativos robustos, separadores de líquido volumosos e dispositivos de expansão do tipo pistão fixo.

Contudo, a percepção térmica pelo toque é subjetiva e ignora variáveis ambientais como calor latente, umidade absoluta e vazão de ar no evaporador. No sol forte de 38°C, uma linha a 10°C parece muito fria ao toque; em um dia nublado de 15°C, a mesma temperatura parece morna.

### O Mecanismo da Destruição do Compressor Inverter
Aplicar essa técnica de carga por sensação térmica a um sistema VRF com compressores inverter e Válvulas de Expansão Eletrônicas (EEVs) leva a falhas graves. Os compressores inverter variam sua rotação por VFD para adaptar-se à carga térmica em tempo real, enquanto as EEVs modulam ativamente a abertura para manter o superaquecimento constante.

Ao carregar fluido baseado na temperatura da sucção, o técnico adiciona excesso de refrigerante líquido porque o sistema tenta compensar fechando as EEVs para manter o superaquecimento programado. Isso gera uma sequência progressiva de falhas mecânicas e elétricas:

```
Cascata de Falhas por Excesso de Carga Fracionada:
[ Carga Excessiva ] ──► [ Acúmulo de Líquido no Condensador (Flooding) ]
                                 │
                     [ Redução de Área Útil de Troca ]
                                 │
             [ Pressão de Alta (SCT) e Subresfriamento >30°F ]
                                 │
           ┌─────────────────────┴─────────────────────┐
           ▼                                           ▼
[ Relação de Compressão Elevada ]             [ EEV entra em Hunting ]
           │                                           │
[ Temp. Descarga >121°C ]                     [ Retorno de Líquido ]
           │                                           │
[ Degradação Térmica do Óleo POE/PVE ]        [ Golpe de Líquido / Quebra ]
           │                                           │
[ Desgaste e Travamento Mecânico ]            [ Amperagem Alta / Burnout IPM ]
```

1.  **Inundação do Condensador e Subresfriamento Excessivo:** O líquido adicional ocupa os circuitos inferiores da condensadora, diminuindo a área para condensação de vapor. A pressão de descarga sobe e o subresfriamento supera os 30°F (16,6K), bem acima do intervalo padrão de 10°F a 15°F (5,5K a 8,3K).
2.  **Sobrecarga Térmica e Quebra do Lubrificante:** O compressor opera sob razão de compressão elevada, gerando temperaturas na descarga acima dos 121°C (250°F). O óleo sintético (POE ou PVE) perde viscosidade e sofre degradação térmica, causando desgaste nas partes móveis dos espirais do scroll.
3.  **Instabilidade e Oscilações da EEV (Hunting):** A coluna de líquido sob pressão elevada satura a capacidade de controle da EEV. A válvula oscila entre totalmente aberta e fechada, gerando golpes hidráulicos de fluido na linha de cobre.
4.  **Golpe de Líquido e Falha do Módulo Inversor (IPM):** O refrigerante que não evaporou retorna pela linha de sucção e atinge os espirais. Por ser incompressível, o líquido deforma as placas do scroll. A sobrecarga mecânica força os transistores IGBT da placa inversora a operarem com amperagem elevada, resultando na queima por estresse térmico do IPM.

---

## Parte II: Gestão de Massa e Cálculo da Carga Adicional via Comprimento Equivalente

Nos sistemas VRF, a quantidade de refrigerante fornecida de fábrica nas condensadoras cobre apenas a unidade externa e comprimentos mínimos de tubulação de líquido (geralmente de 0 a 7,5 metros). Toda a malha de tubulações de interligação deve ter seu volume calculado matematicamente para determinar a carga adicional pesada por meio de balanças digitais de precisão.

Como a densidade do fluido em fase líquida é dezenas de vezes superior à densidade em fase de vapor, o cálculo de massa se concentra estritamente na **linha de líquido**. Por exemplo, um tubo de cobre de 3/8" retém cerca de 111 g de R-410A por metro, enquanto a linha de sucção gasosa equivalente retém valores desprezíveis.

### O Princípio do Comprimento Equivalente ($L_{eq}$)
Apenas medir o comprimento linear real ($L_{real}$) subestima o volume e a perda de carga do sistema. As curvas, desvios e conexões T (Refnets) aumentam a turbulência do fluido. Para corrigir esse comportamento físico, a engenharia utiliza o conceito de **Comprimento Equivalente ($L_{eq}$)**, que converte a resistência e o volume de retenção de cada conexão em metros equivalentes de tubo reto.

O comprimento efetivo total ($L_{eff}$) é determinado por:

$$L_{eff} = L_{real} + \sum L_{eq}$$

O comprimento equivalente de uma conexão decorre de sua geometria de perda localizada, calculada a partir de seu coeficiente de perda menor ($k$), diâmetro interno ($d$) e fator de fricção ($f$):

$$L_{eq} = \frac{k \cdot d}{f}$$

Para facilitar a aplicação prática, a indústria padronizou tabelas com base nas equações de Hazen-Williams para tubos de cobre.

### Tabela de Comprimento Equivalente de Conexões de Cobre (em pés e metros)

| Diâmetro Nominal (OD) | Cotovelo 90° Padrão | Cotovelo 90° Longo Raio | Cotovelo 45° Padrão | Junção T Ramal (Branch Tee) | Junção T Reta (Straight Tee) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **3/8" (9,52 mm)** | 0,5 ft (0,15 m) | 0,3 ft (0,09 m) | 0,5 ft (0,15 m) | 1,5 ft (0,46 m) | 0,5 ft (0,15 m) |
| **1/2" (12,7 mm)** | 1,0 ft (0,30 m) | 0,6 ft (0,18 m) | 0,5 ft (0,15 m) | 2,0 ft (0,61 m) | 0,5 ft (0,15 m) |
| **5/8" (15,87 mm)** | 1,5 ft (0,46 m) | 1,0 ft (0,30 m) | 0,5 ft (0,15 m) | 2,5 ft (0,76 m) | 0,5 ft (0,15 m) |
| **3/4" (19,05 mm)** | 2,0 ft (0,61 m) | 1,3 ft (0,40 m) | 0,5 ft (0,15 m) | 3,0 ft (0,91 m) | 0,5 ft (0,15 m) |
| **1-1/8" (28,58 mm)** | 2,5 ft (0,76 m) | 1,6 ft (0,49 m) | 1,0 ft (0,30 m) | 4,5 ft (1,37 m) | 0,5 ft (0,15 m) |
| **1-5/8" (41,27 mm)** | 4,0 ft (1,22 m) | 2,6 ft (0,79 m) | 1,5 ft (0,46 m) | 7,0 ft (2,13 m) | 0,5 ft (0,15 m) |

### Algoritmo de Cálculo de Carga Adicional: Exemplo Prático de Campo
Imagine uma linha de líquido principal de **3/8"** com **120 pés (36,58 metros)** de extensão física linear entre a condensadora e a primeira caixa de distribuição. Esta linha possui doze cotovelos de 90° padrão e duas junções T de ramal (Branch Tees).

1.  **Cálculo do Comprimento Equivalente das Conexões ($\sum L_{eq}$):**
    *   12 cotovelos de 90° padrão: $12 \times 0,5\text{ ft} = 6,0\text{ ft}$ (1,83 m)
    *   2 junções T ramal: $2 \times 1,5\text{ ft} = 3,0\text{ ft}$ (0,91 m)
    *   Soma das conexões: $6,0 + 3,0 = 9,0\text{ ft}$ (2,74 m)
2.  **Cálculo do Comprimento Efetivo Total ($L_{eff}$):**
    *   $L_{eff} = L_{real} + \sum L_{eq} = 120\text{ ft} + 9,0\text{ ft} = 129,0\text{ ft}$ (39,32 m)
3.  **Aplicação do Multiplicador de Massa por Comprimento:**
    *   O manual técnico do fabricante estipula uma carga fracionada para tubos de 3/8" (R-410A) de **0,55 oz/ft (51,1 g/m)**:
    *   $\text{Carga Tubulação} = 129,0\text{ ft} \times 0,55\text{ oz/ft} = 70,95\text{ oz}$
4.  **Adição da Massa por Unidade Interna:**
    *   Os algoritmos VRF também exigem a adição de massa com base na capacidade de climatização térmica das evaporadoras conectadas.
    *   Neste projeto, o somatório das evaporadoras é de 24.000 BTUs. O fabricante especifica a adição de **53 oz (1,50 kg)** para capacidades acumuladas de até 27.000 BTUs.
5.  **Carga Adicional Total:**
    *   $\text{Massa Total} = 70,95\text{ oz} + 53,00\text{ oz} = 123,95\text{ oz}$
    *   Conversão para libras e kg: $123,95\text{ oz} \div 16 = 7,74\text{ lbs}$ ou aproximadamente **3,51 kg**.

Esta quantidade calculada deve ser introduzida em estado líquido através do bocal de serviço da linha de líquido utilizando balanças digitais, garantindo a quantidade exata de refrigerante requerida pelo volume geométrico do projeto.

---

## Parte III: Pré-requisitos Fundamentais: Triple Evacuation e Decomposição Termodinâmica

Antes de realizar a injeção do refrigerante líquido, a tubulação deve passar por testes estruturais e secagem profunda para assegurar a pureza do circuito frigorígeno.

1.  **Ensaio de Estanqueidade de 24h:** O sistema de cobre é pressurizado com nitrogênio seco a pressões elevadas (geralmente acima de 500 PSIG / 34,5 bar) por um período de 24 horas, visando certificar a ausência de vazamentos microscópicos em bolsas de solda ou flanges de latão.
2.  **Protocolo Tríplice Evacuação:**
    *   *Primeira Etapa:* Evacuar o sistema até que a leitura digital estabilize em **4.000 mícrons**. Fechar os registros e quebrar o vácuo introduzindo nitrogênio seco até atingir uma pressão positiva leve de 2 a 3 PSIG. Este fluxo gasoso inerte atua retendo e varrendo a umidade dispersa.
    *   *Segunda Etapa:* Reiniciar a bomba e evacuar até **1.500 mícrons**. Repetir a quebra de vácuo com nitrogênio seco a 2-3 PSIG, aguardando de 10 a 15 minutos para que eventuais acúmulos de água líquida em sifões se vaporizem pelo contato com o gás seco.
    *   *Terceira Etapa:* Evacuação final até atingir **500 mícrons ou menos**. O teste de estanqueidade digital (decay test) monitora a sustentação da pressão absoluta em isolamento por 1 hora, provando a remoção de gases não condensáveis e a secagem da tubulação.

---

## Parte IV: Estabelecendo a Baseline Elétrica no Startup

A ativação do sistema requer o levantamento e registro das variáveis elétricas para comprovar o equilíbrio eletromecânico e criar a documentação de partida.

Os inversores de frequência dos compressores VRF realizam conversões sucessivas de energia: a tensão AC trifásica da rede é convertida por retificadores em uma linha contínua de alta tensão (DC Bus), que atinge valores acima de **300 VDC** em redes de 220V (ou >540 VDC em redes de 380V). A partir do barramento contínuo, a placa eletrônica ativa os transistores IGBT via modulação por largura de pulso (PWM) para gerar uma onda senoidal sintetizada de frequência variável, controlando a velocidade de rotação do compressor.

### Nomenclatura e Parâmetros Elétricos Críticos

```
                                  ┌── MCA (Mínimo de Fiação): Sizing do cabo de força
                                  │    MCA = (1.25 × RLA_comp) + Σ (1.00 × Outros_motores)
                                  │
[ Nomeplate Elétrico do Painel ] ┼── MOCP (Proteção de Linha): Dimensionamento do disjuntor
                                  │
                                  └── LRA (Locked Rotor Amps): Corrente máxima de rotor bloqueado
```

*   **RLA (Rated Load Amps):** É a corrente nominal de operação contínua registrada quando o compressor trabalha sob sua máxima capacidade de refrigeração de projeto. É o parâmetro principal para verificar a ocorrência de sobrecargas de trabalho.
*   **MCA (Minimum Circuit Ampacity):** Corrente mínima exigida para o dimensionamento dos cabos condutores de alimentação de força do equipamento. É calculada de forma padronizada somando 125% do RLA do maior motor compressor a 100% da corrente de todos os motores auxiliares (como ventiladores externos).
*   **MOCP (Maximum Overcurrent Protection):** Limite máximo permitido para o disjuntor de proteção ou conjunto de fusíveis do circuito elétrico dedicado, evitando disparos indesejados ao mesmo tempo que assegura interrupção em curtos-circuitos.
*   **LRA (Locked Rotor Amps):** Corrente de partida momentânea consumida no instante em que o motor do compressor é energizado antes de iniciar a rotação. Compressores acionados por inversores VFD utilizam curvas de aceleração suave, reduzindo o LRA a patamares próximos do RLA nominal, prevenindo flutuações e quedas de tensão na rede de alimentação do edifício.

### Teste de Operação em Carga Total (Forced Test Mode)
Para coletar a linha de base de corrente em operação crítica, o técnico deve forçar o sistema a trabalhar a 100% de sua capacidade. O acionamento ocorre ativando as chaves DIP switches específicas na placa principal da unidade condensadora ou por meio de interfaces de telemetria de serviço.

A corrente real medida em cada uma das fases de alimentação em regime estável (carga máxima de compressores e ventiladores externos rodando em alta rotação) deve ser medida com um alicate amperímetro do tipo True-RMS e registrada. Esta corrente deve aproximar-se do RLA nominal sem superá-lo. Correntes acima do RLA indicam anomalias como restrição de fluxo de fluido por válvulas fechadas, excesso de carga de refrigerante no condutor de alta, ou restrição severa de fluxo de ar no condensador.

---

## Parte V: Padrões NEMA MG-1 e Simetria de Tensão

A longevidade do motor elétrico trifásico do compressor é altamente influenciada pela qualidade do equilíbrio das tensões fornecidas em cada fase da rede local.

### O Padrão de Tolerância NEMA MG-1
A associação internacional NEMA (National Electrical Manufacturers Association), em sua norma para motores elétricos **NEMA MG-1**, define que a assimetria ou desequilíbrio entre as tensões de linha aplicadas nas três fases não deve superar o limite crítico de **1%**.

A porcentagem de desequilíbrio de tensão (Assimetria) é calculada de acordo com a fórmula:

$$\% \text{ Desequilíbrio de Tensão} = 100 \times \frac{|\text{Desvio Máximo em Relação à Média}|}{\text{Tensão Média}}$$

#### Exemplo Prático de Campo
Com o equipamento em funcionamento sob carga constante, as medições de tensão fase a fase no disjuntor de proteção registram:
*   Fase A - B: **462 V**
*   Fase B - C: **463 V**
*   Fase A - C: **455 V**

1.  **Cálculo da Média Aritmética:**
    $$\text{Tensão Média} = \frac{462 + 463 + 455}{3} = \frac{1380}{3} = 460\text{ V}$$
2.  **Determinação do Desvio Máximo:**
    *   $|460 - 462| = 2\text{ V}$
    *   $|460 - 463| = 3\text{ V}$
    *   $|460 - 455| = 5\text{ V}$ (Desvio Máximo)
3.  **Cálculo da Porcentagem de Desequilíbrio:**
    $$\% \text{ Desequilíbrio} = 100 \times \frac{5}{460} \approx 1,09\%$$

Neste caso prático, a assimetria registrada de 1,09% supera o limite de 1% ditado pela NEMA MG-1. Esta ocorrência requer investigação das conexões elétricas, verificação de cabos soltos no quadro ou de transformadores com distribuição de carga de fases desequilibrada na edificação.

### O Efeito das Correntes de Sequência Negativa e Penalização Térmica
A razão física do rigor do limite de 1% está na geração de **correntes de sequência negativa** nos enrolamentos do estator do motor elétrico. Enquanto a sequência de fases normal (positiva) cria o campo magnético rotatório que impulsiona o motor na direção correta de trabalho, as fases desequilibradas geram um campo reverso que tenta girar o motor no sentido contrário.

Este campo magnético reverso funciona como um freio eletromagnético contínuo, gerando severas forças de oposição mecânica, vibração localizada e elevação abrupta da temperatura interna dos enrolamentos do estator.

Adicionalmente, devido ao baixo valor da impedância interna dos enrolamentos dos motores, pequenas assimetrias de tensão induzem desequilíbrios de corrente que costumam ser de **6 a 10 vezes superiores** à assimetria de tensão original. Um desequilíbrio de tensão de 2% pode gerar até 20% de desequilíbrio nas correntes trifásicas.

O aumento da temperatura interna dos enrolamentos de um motor sob assimetria de tensão é modelado pela expressão:

$$\Delta T\% = 2 \times (\% \text{ Desequilíbrio de Tensão})^2$$

No exemplo analisado com 1,09% de desequilíbrio, a elevação térmica adicional estimada é:

$$\Delta T\% = 2 \times (1,09)^2 \approx 2,38\%$$

Se o desequilíbrio atingir patamares comuns de 3%, a elevação de temperatura atinge:

$$\Delta T\% = 2 \times (3)^2 = 18\%$$

Como os isolamentos de verniz epóxi dos enrolamentos de cobre degradam-se de forma logarítmica com a elevação de calor contínua, operar com 18% de aquecimento extra reduz significativamente a vida útil dielétrica do compressor antes de provocar uma queima elétrica interna à terra.

---

## Parte VI: Comprovação da Capacidade Termodinâmica e Cálculo de Enthalpia Split

A validação final de comissionamento exige comprovar que o sistema realiza as taxas de transferência de calor projetadas, avaliando a temperatura diferencial (Delta-T ou $\Delta T$) e a variação de entalpia no fluxo de ar das serpentinas de troca.

### Medições e Parâmetros no Evaporador (Indoor Coil)
Para certificar a capacidade térmica do evaporador, o técnico realiza a varredura do fluxo de retorno e insuflamento das unidades de tratamento de ar.
*   **Delta-T de Bulbo Seco ($\Delta T_{bs}$):** Em sistemas de refrigeração por expansão direta de ar condicionado para conforto térmico, a diferença de temperatura de bulbo seco ideal situa-se no intervalo de **16°F a 20°F (8,9K a 11,1K)**.
    *   *Delta-T muito baixo (<16°F):* Indica vazão de ar excessiva sobre as aletas, dispositivo de expansão subalimentando a serpentina ou falta de massa de fluido refrigerante (inanição).
    *   *Delta-T muito elevado (>22°F a 25°F):* Aponta para restrições de fluxo de ar causadas por filtros sujos, dutos esmagados ou serpentinas obstruídas, expondo o trocador ao congelamento físico da umidade condensada sobre os tubos.

#### Fórmulas de Cálculo de Capacidade Térmica
Com os dados de vazão de ar em CFM (pés cúbicos por minuto) e a diferença de temperatura entre a entrada e saída do ar, a **Capacidade Térmica Sensível ($q_{sensível}$)** em BTU/h é calculada por:

$$q_{sensível} = 1,08 \times CFM \times \Delta T_{bs}$$

Para obter a taxa total de refrigeração — que inclui o resfriamento do ar (calor sensível) e a condensação e retenção da umidade ambiente (calor latente) —, calcula-se a variação de entalpia específica ($h$) medida na entrada e saída da serpentina de resfriamento.

A **Capacidade Térmica Total ($q_{total}$)** em BTU/h é determinada por:

$$q_{total} = 4,5 \times CFM \times \Delta h$$

Onde $\Delta h$ é a variação de entalpia específica do ar úmido ($h_{retorno} - h_{insuflamento}$), obtida através de medições simultâneas de bulbos úmidos e psicrometria de precisão.

#### Exemplo de Cálculo de Capacidade
Uma unidade de evaporadora opera movimentando uma vazão de **1.400 CFM**. As medições psicrométricas acusam entalpia de entrada de 30 BTU/lb e de saída de 22 BTU/lb ($\Delta h = 8\text{ BTU/lb}$). O cálculo da potência total desenvolvida resulta em:

$$q_{total} = 4,5 \times 1400 \times 8 = 50.400\text{ BTU/h} \approx 4,2\text{ TR}$$

Este valor comprova o funcionamento da máquina em plena capacidade termodinâmica de acordo com a sua especificação nominal.

### Medições e Parâmetros no Condensador (Outdoor Coil)
A capacidade de rejeição de calor da condensadora também deve ser validada por meio de seu diferencial de temperatura de bulbo seco.
*   **Delta-T da Condensadora ($\Delta T_{cond}$):** A diferença entre a temperatura do ar ambiente externo que entra na serpentina externa e o ar de descarga quente expelido no topo do exaustor deve situar-se no intervalo de **15°F a 25°F (8,3K a 13,9K)**.
    *   *Delta-T de Condensação baixo (<15°F):* Indica ineficiência do compressor Scroll em bombear refrigerante ou falta generalizada de refrigerante no circuito.
    *   *Delta-T de Condensação elevado (>25°F):* Denota acúmulo excessivo de refrigerante líquido que inundou as serpentinas (flooding) diminuindo a troca de calor, condensadora excessivamente suja por incrustações, ou rotação deficiente no motor ventilador externo.

---

## Tabelas Técnicas de Referência para Comissionamento e Partida

### Matriz de Diagnóstico Clínico de Parâmetros de Partida VRF

| Parâmetro Medido | Condição Lida em Campo | Diagnóstico Termodinâmico / Elétrico | Causa Raiz do Problema | Ação Corretiva Recomendada |
| :--- | :--- | :--- | :--- | :--- |
| **Superaquecimento (Sucção)** | Baixo (< 4°F / 2,2K) | Risco iminente de retorno de líquido e golpe mecânico | EEV excessivamente aberta ou sensor de temperatura avariado no tubo | Substituir sensor termistor (NTC) ou ajustar calibração de superaquecimento da placa |
| **Subresfriamento (Líquido)** | Elevado (> 30°F / 16,6K) | Condensador inundado; alta pressão interna | Carga de refrigerante realizada em excesso (overcharge) | Recolher fluido de forma gradual usando estação de recuperação e balança |
| **Temperatura de Descarga** | Elevada (> 110°C / 230°F) | Sobrecarga mecânica do compressor; degradação do óleo POE | Baixa carga de refrigerante no sistema ou EEV estrangulada | Corrigir microvazamentos ou substituir a bobina elétrica atuadora da EEV |
| **Corrente do Compressor** | Elevada (> RLA nominal) | Sobrecarga de potência elétrica e risco de queima do inversor | Redução drástica da troca térmica na condensadora ou excesso de fluido | Efetuar higienização profunda das aletas externas da condensadora |
| **Desequilíbrio de Tensão** | Elevado (> 1% NEMA MG-1) | Geração de correntes de sequência negativa e calor no estator | Conexões de força frouxas ou má distribuição de cargas monofásicas | Reapertar contatos elétricos no quadro ou equilibrar as fases da instalação |
| **Delta-T Bulbo Seco (Evap.)** | Baixo (< 12°F / 6,6K) | Baixa eficiência de resfriamento e falta de absorção de calor | Fluxo de ar muito rápido devido a velocidade excessiva no blower | Ajustar as configurações do ventilador interno (CFM) via controle remoto |

---

## Alertas Críticos de Campo e Diretrizes Técnicas

> [!IMPORTANT]
> **POSICIONAMENTO DE INSTRUMENTOS DE MEDIÇÃO**
> Para que os dados coletados na baseline de partida sejam fisicamente representativos, os transdutores de pressão de serviço e os termopares tipo pinça de precisão devem ser montados diretamente nos tubos de cobre próximos às saídas de serviço das unidades, utilizando pastas térmicas nas conexões de termopares e isolação sob fita elastomérica. Leituras de pressão em mangueiras soltas causam erros que descalibram o cálculo dinâmico de superaquecimento útil.

> [!CAUTION]
> **ATENÇÃO À QUALIDADE DO BARRAMENTO DC (BUS CONTINUOUS)**
> Ao efetuar testes elétricos na placa inversora do compressor VRF, certifique-se de aguardar no mínimo 10 minutos após o desligamento da alimentação geral antes de interagir com componentes internos. Os capacitores de eletrólise do barramento contínuo DC retêm altas tensões perigosas (excedendo 300 VDC) que não dissipam instantaneamente, gerando riscos severos de choque elétrico ou danos irreparáveis ao módulo de potência (IPM) em caso de curto acidental de ferramentas nas trilhas da placa principal.

---

## Referências Citadas

1.  *HVAC Multi-Split Variable Refrigerant Flow (VRF) Systems - PDH Online*, acessado em abril 28, 2026. http://www.pdhonline.com/courses/m394/m394content.pdf
2.  *HVAC Variable Refrigerant Flow (VRF) Systems - CEDengineering.com*, acessado em abril 28, 2026. https://www.cedengineering.com/userfiles/M03-014%20-%20HVAC%20Variable%20Refrigerant%20Flow%20(VRF)%20Systems%20-%20US.pdf
3.  *Variable Refrigerant Flow (VRF) Installation and Commissioning - The Vertex Companies*, acessado em abril 28, 2026. https://vertexeng.com/insights/variable-refrigerant-flow-vrf-installation-and-commissioning/
4.  *6 Steps For Effective HVAC System Commissioning Success - Silicon Valley Comfort*, acessado em abril 28, 2026. https://www.air.systems/hvac-system-commissioning/
5.  *HVAC Commissioning Report Template and Guide - HVACProSales.com*, acessado em abril 28, 2026. https://hvacprosales.com/hvac-quality-control/hvac-commissioning-report-template-and-guide/
6.  *HVAC System Commissioning: What to Know - Cadence*, acessado em abril 28, 2026. https://cadencenow.com/hvac-system-commissioning-what-to-know/
7.  *HVAC Commissioning Checklist - Oxmaint*, acessado em abril 28, 2026. https://oxmaint.com/checklist-center/hvac-commissioning-checklist
8.  *Daikin VRV Commissioning Guide*, acessado em abril 28, 2026. https://apps.goodmanmfg.com/training/files/54aeaf8f0ecccTB-VRV107-VRV-Commissioning-Only.pdf
9.  *How to Check If Your HVAC System Is Still Under Warranty (Florida Update)*, acessado em abril 28, 2026. https://www.beaconsaves.com/blog/how-to-check-hvac-warranty-florida
10. *Beer Can Cold (It's Time to Retire You Already) - HVAC Insider*, acessado em abril 28, 2026. https://hvacinsider.com/beer-can-cold-its-time-to-retire-you-already/
11. *HVAC Technicians Can't Rely On “Beer Can Cold” - The Training Center of Air Conditioning and Heating | Houston, Texas*, acessado em abril 28, 2026. https://www.thetrainingcenterofairconditioningandheating.com/air-conditioning/hvac-technicians-cant-rely-on-beer-can-cold/
12. *What's So Wrong With "Beer Can Cold"? - HVAC School*, acessado em abril 28, 2026. http://www.hvacrschool.com/whats-wrong-beer-can-cold/
13. *HVAC DELTA T (ΔT) Explained for Air Conditioners! - AC Service Tech*, acessado em abril 28, 2026. https://www.acservicetech.com/post/hvac-delta-t-%CE%B4t-explained-for-air-conditioners
14. *Beer can cold strikes again : r/HVAC - Reddit*, acessado em abril 28, 2026. https://www.reddit.com/r/HVAC/comments/153a83h/beer_can_cold_strikes_again/
15. *The effects of improper refrigerant charge on the performance of a heat pump with an electronic expansion valve and capillary tube | Request PDF - ResearchGate*, acessado em abril 28, 2026. https://www.researchgate.net/publication/222410341_The_effects_of_improper_refrigerant_charge_on_the_performance_of_a_heat_pump_with_an_electronic_expansion_valve_and_capillary_tube
16. *(PDF) INVERTER COMPRESSOR TECHNOLOGY IN AIR-CONDITIONING SYSTEM: AN OVERVIEW - ResearchGate*, acessado em abril 28, 2026. https://www.researchgate.net/publication/394875483_INVERTER_COMPRESSOR_TECHNOLOGY_IN_AIR-CONDITIONING_SYSTEM_AN_OVERVIEW
17. *Air Conditioning: 6 Signs of Compressor Failure | Beltrami Electric Cooperative*, acessado em abril 28, 2026. https://www.beltramielectric.com/air-conditioning-6-signs-compressor-failure
18. *How Inverter Driven Compressors Work | A Guide for HVAC Contractors - GREE Comfort*, acessado em abril 28, 2026. https://www.greecomfort.com/news-and-events/how-inverter-driven-compressors-work/
19. *Is your air conditioner icing up due to overcharge? - HVAC Brain*, acessado em abril 28, 2026. https://www.hvacbrain.com/blog/is-your-air-conditioner-icing-up-due-to-overcharge/
20. *Refrigerant Overcharge Can Result in Serious Problems | 2021-12-26 | ACHR News*, acessado em abril 28, 2026. https://www.achrnews.com/articles/145914-refrigerant-overcharge-can-result-in-serious-problems
21. *The Dangers of Overcharging HVAC Refrigerant - Air Quality Heating & Air Conditioning*, acessado em abril 28, 2026. https://www.airandheat.net/blog/hvac/the-dangers-of-overcharging-hvac-refrigerant/
22. *Refrigerant Charge Calculation by Line Set Length and Diameter*, acessado em abril 28, 2026. https://www.plumbingsupplyandmore.com/refrigerant-charge-calculation-by-line-set-length-diameter
23. *Common Causes of Compressor Failure - HVAC School*, acessado em abril 28, 2026. http://www.hvacrschool.com/common-causes-of-compressor-failure/
24. *Understanding the Connection Between Compressor Oil Return and Refrigeration Oil - Lemon8*, acessado em abril 28, 2026. https://www.lemon8-app.com/@yan.dong01/7525403482308968973?region=us
25. *Influence of Refrigerant Charge Amount and EEV Opening on the Performance of a Transcritical CO 2 Heat Pump Water Heater - MDPI*, acessado em abril 28, 2026. https://www.mdpi.com/1996-1073/10/10/1521
26. *Service Manual - Friedrich*, acessado em abril 28, 2026. https://www.friedrich.com/hubfs/2023%20Literature%20PDFs/Service%20Manuals/93012001_00%20Chill%20Premier%20Inverter%20Service%20Manual.pdf?hsLang=en
27. *How to activate Forced Operation mode | VRV4 - YouTube*, acessado em abril 28, 2026. https://www.youtube.com/watch?v=X1K07Aiml8s
28. *YORK Inverter Air Conditioner Compressor & IPM Failure: Error Codes F0, P2, P0, L4, P4 Explained - YouTube*, acessado em abril 28, 2026. https://www.youtube.com/watch?v=Vj5SAle_p2c
29. *VRV System air conditioner - Daikin Comfort*, acessado em abril 28, 2026. https://daikincomfort.com/docs/default-source/vrv-emerion-heat-recovery/im-reyq_aa-(3p657316-1e).pdf
30. *Engineering Data - Daikin Comfort*, acessado em abril 28, 2026. https://daikincomfort.com/docs/default-source/vrv-life/em-edus332232-d_rxsq-tb.pdf
31. *Mitsubishi City Multi (How to calculate additional refrigerant charge) - YouTube*, acessado em abril 28, 2026. https://www.youtube.com/watch?v=iitt-h34Yeo
32. *O-RPH Opteon Refrigerant Piping Handbook*, acessado em abril 28, 2026. https://www.opteon.com/en/-/media/files/opteon/o-rph-opteon-refrigerant-piping-handbook.pdf?rev=a3827b7a12dd49168cd48830e8cdc0e5
33. *vrv gas calculation / daikin vrv additional refrigerant charge / vrv - YouTube*, acessado em abril 28, 2026. https://www.youtube.com/watch?v=PhJMYcUdWv4
34. *Refrigerant Piping*, acessado em abril 28, 2026. https://s7d2.scene7.com/is/content/AlliedAirEnterprises/Product%20Materials%20Library/Commercial/Accessories/T-Series/ALLIEDCOMMERCIAL_TSERIES_REFRIGERANTPIPING_GUIDELINES.pdf
35. *Refrigerant Line Sizing: Determining Equivalent Length using Pipe ...*, acessado em abril 28, 2026. https://hvacradvisors.com/Ice-pdfs/FlowControls/Sporlan/ColdWar/41%20August%202009%20ColdWar-Line%20Sizing%20Using%20Equivalent%20Pipe%20Diameters.pdf
36. *Refrigerant Piping Design Guide - Olympic International*, acessado em abril 28, 2026. https://www.olympicinternational.com/download.php?file=AG_31-011_120407-Refrigerant-Piping-Design-Guides.pdf
37. *Table 14.7. Pressure Loss in Fittings and Valves Expressed as Equivalent Length of Tube, feet - Copper.org*, acessado em abril 28, 2026. https://copper.org/applications/plumbing/cth/technical-data/tables/cth_table7.php
38. *Equivalent Length Pipe Fittings Interactive Calculator | ... - Firgelli Automations*, acessado em abril 28, 2026. https://www.firgelliauto.com/blogs/calculators/equivalent-length-pipe-fittings-calculator
39. *THE COPPER TUBE HANDBOOK*, acessado em abril 28, 2026. https://www-eng.lbl.gov/~shuman/NEXT/MATERIALS&COMPONENTS/Pressure_vessels/copper_tube_handbook.pdf
40. *HOW TO DO Addressing, commissioning, operation IN VRF - YouTube*, acessado em abril 28, 2026. https://www.youtube.com/watch?v=kQR5CLZxqZ4
41. *Mitsubishi CITY MULTI Commissioning Report | PDF | Hvac | Electrical Engineering - Scribd*, acessado em abril 28, 2026. https://www.scribd.com/document/96305177/CM-SL-Commissioning-Report-0811
42. *DC Inverter VRF Air Conditioning System - Trane*, acessado em abril 28, 2026. https://www.trane.com/content/dam/Trane/Commercial/ap/thailand/Products/2022productliterature/apr2022/GENEliteL.pdf
43. *Electrical Definitions RLA ,MCA, MOCP, LRA – Trane Commercial ...*, acessado em abril 28, 2026. https://support.trane.com/hc/en-us/articles/23467506537613-Electrical-Definitions-RLA-MCA-MOCP-LRA
44. *Starting Amps vs Running Amps (AC): Why Your Inverter Fails at Startup - YouTube*, acessado em abril 28, 2026. https://www.youtube.com/watch?v=aFODWcR-FSw
45. *VRF-HVRF Systems*, acessado em abril 28, 2026. https://les.mitsubishielectric.it/uploads/document/VRF_HVRF_CITY_MULTI_CATALOGUE_2018_2272.pdf
46. *Attention VRF/VRV Technicians : r/HVAC - Reddit*, acessado em abril 28, 2026. https://www.reddit.com/r/HVAC/comments/10654iw/attention_vrfvrv_technicians/
47. *Mitsubishi City Multi Test Mode - YouTube*, acessado em abril 28, 2026. https://www.youtube.com/watch?v=Ifc3EUd44Rs
48. *How to Check AMPS on an HVAC System — Part 3 of 3 - YouTube*, acessado em abril 28, 2026. https://www.youtube.com/watch?v=arRHNtz6Sug
49. *Commissioning checklist VRV*, acessado em abril 28, 2026. https://www.daikin.eu/content/dam/document-library/Servicesheets/Commissioning/Commissioning%20checklist%20VRV.pdf
50. *Current and Voltage Unbalance, VUF Calculator - ActionPower*, acessado em abril 28, 2026. https://www.actionpowertest.com/calculator/current-voltage-unbalance-calculator
51. *The Impact of Voltage Unbalance - ALL-TEST Pro*, acessado em abril 28, 2026. https://alltestpro.com/effects-of-voltage-unbalance/
52. *Section IV Performance Standards Applying to All Machines Part 31 Definite Purpose Inverter-Fed Polyphase Motors - NEMA*, acessado em abril 28, 2026. https://www.nema.org/docs/default-source/standards-document-library/mg-1-part-31-watermark.pdf?sfvrsn=649fb42f_1
53. *Section II Small (Fractional) and Medium (Integral) Machines Part 12 Tests and Performance—AC and DC Motors - NEMA*, acessado em abril 28, 2026. https://www.nema.org/docs/default-source/standards-document-library/mg-1-part-12-watermark.pdf
54. *Eliminate Voltage Unbalance - Department of Energy*, acessado em abril 28, 2026. https://www.energy.gov/sites/prod/files/2014/04/f15/eliminate_voltage_unbalanced_motor_systemts7.pdf
55. *City Multi R410A System Installation and Commissioning Report*, acessado em abril 28, 2026. http://www.mitsubishitechinfo.ca/sites/default/files/CLR_PQHY-P-Z%28S%29LMU-A_201808.pdf
56. *Three-Phase Voltage Imbalances How do I calculate them? - ABB*, acessado em abril 28, 2026. https://library.e.abb.com/public/772bbffb5d6f41ffb88fc5d9da927dfd/LVD-EOTKN113U-EN_Three_Phase_Voltage_Imbalance_A.pdf
57. *Voltage Unbalance: Power Quality Issues Related Standards and Mitigation Techniques - EPRI*, acessado em abril 28, 2026. https://restservice.epri.com/publicdownload/000000000001000092/0/Product
58. *The influence of voltage unbalance on NEMA motor performance | EEP*, acessado em abril 28, 2026. https://electrical-engineering-portal.com/voltage-unbalance-nema-motor-performance
59. *Electric Motors and Power Quality Disturbances - EPRI*, acessado em abril 28, 2026. https://restservice.epri.com/publicdownload/000000000001024472/0/Product
60. *The impact of voltage variation on motor performance - Resource Library - EASA*, acessado em abril 28, 2026. https://easa.com/resources/resource-library/the-impact-of-voltage-variation-on-motor-performance-1
61. *Condenser Delta-T Explained: The Key to Fixing High Head Pressure & Overheating AC Units - MEP Academy*, acessado em abril 28, 2026. https://mepacademy.com/condenser-delta-t-explained-the-key-to-fixing-high-head-pressure-overheating-ac-units/
62. *Understanding Evaporator Delta T vs. Evaporator Temperature Difference*, acessado em abril 28, 2026. https://hvacknowitall.com/blog/delta-t-vs-temperature-difference
63. *How to Calculate HVAC System BTU Capacity - YouTube*, acessado em abril 28, 2026. https://www.youtube.com/watch?v=X0nnakn4bQ4
64. *Solving Delta T - HVAC School*, acessado em abril 28, 2026. http://www.hvacrschool.com/solving-delta-t/
65. *HVAC System Commissioning and Startup Procedures: Professional Guide for North Texas*, acessado em abril 28, 2026. https://jupitairhvac.com/blog/hvac-system-commissioning-startup-procedures-north-texas/
66. *HVAC Formulas and Calculations Field Reference Guide for Technicians: CFM, BTU, Cv, GPM, ΔT, and More | Belimo*, acessado em abril 28, 2026. https://www.belimo.com/ca/en_US/blog/hvac-formulas-and-calculations-guide
67. *Cooling Load Calculations and Principles - CEDengineering.com*, acessado em abril 28, 2026. https://www.cedengineering.com/userfiles/M06-004%20-%20Cooling%20Load%20Calculations%20and%20Principles%20-%20US.pdf
68. *Converting Heating and Cooling Loads to Air Flow - The Physics - Energy Vanguard*, acessado em abril 28, 2026. https://www.energyvanguard.com/blog/converting-heating-and-cooling-loads-air-flow-physics/
69. *AC Commissioning Report Template for HVAC Projects - Safety Culture*, acessado em abril 28, 2026. https://safetyculture.com/library/construction/ac-commissioning-report
70. *How to Create a Complete HVAC Commissioning Report for Inspection - flowdit*, acessado em abril 28, 2026. https://flowdit.com/commissioning-report-for-hvac/
71. *HVAC System Commissioning: Final Checks Before Startup — 2026 Guide*, acessado em abril 28, 2026. https://hvacprosales.com/blog/hvac-system-commissioning-final-checks-before-startup/
72. *HVAC Commissioning Checklist: Free PDF Download - ServiceTitan*, acessado em abril 28, 2026. https://www.servicetitan.com/templates/hvac/commissioning-checklist
73. *A Short Guide to HVAC Commissioning | SafetyCulture*, acessado em abril 28, 2026. https://safetyculture.com/topics/commissioning/hvac-commissioning
