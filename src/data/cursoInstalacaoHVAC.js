// src/data/cursoInstalacaoHVAC.js
// ──────────────────────────────────────────────────────────────────────────────
// REGRA DE OURO: 100% FIDELIDADE ao conteúdo original da pasta /treinamento
// Cada módulo, aula, link de vídeo e apresentação foram transcritos fielmente.
// ──────────────────────────────────────────────────────────────────────────────

export const cursoInstalacaoHVAC = {
  id: "instalacao-hvac",
  titulo: "Treinamento Completo de Instalação HVAC",
  subtitulo: "Padrão Simon Climatização",
  descricao:
    "O treinamento de instalação HVAC mais completo do Brasil. Da teoria termodinâmica à execução em campo, domine cada etapa com a metodologia de elite da Simon Climatização.",

  // ──────────────────────────────────────────────────────────────────────────
  // APRESENTAÇÃO DA APOSTILA
  // ──────────────────────────────────────────────────────────────────────────
  apresentacao: {
    id: "apresentacao",
    titulo: "APRESENTAÇÃO DA APOSTILA 01 - INSTALAÇÃO HVAC",
    subtitulo: "Padrão Simon Climatização",
    modulo: "APRESENTAÇÃO",
    link_video: "https://youtu.be/pjdsyHmdCZg",
    link_podcast: "https://youtu.be/wsChq0ahLDA",
    total_slides: 15,
    fontes_imagens: Array.from({ length: 24 }, (_, i) =>
      `/images/academia/hvac-instalacao/aula01-apresentacao/Apostila-Instalacao-${String(i + 1).padStart(2, '0')}.jpg`
    ),
    conteudo_html: `
<h2>Apostila Completa: O Padrão Simon Climatização</h2>
<p>Esta apostila representa o manual definitivo de engenharia de campo da Simon Climatização. Ela unifica as melhores práticas termodinâmicas, elétricas, hidrônicas e de diagnóstico digital desenvolvidas pela nossa equipe.</p>

<h2>Módulo 1 — Fundamentos da Engenharia Térmica de Elite</h2>
<p><strong>Erradicando o Conceito de "Frio":</strong> Amadores fazem coisas ficarem geladas; técnicos de elite removem calor usando a física de precisão. O frio não existe na física; ele é apenas uma ilusão biológica, ou seja, a ausência de calor. Um ar-condicionado opera como um elevador térmico de alta potência, transportando calor de um corpo de menor temperatura para rejeitá-lo forçosamente para o exterior.</p>
<p><strong>A Metáfora da Esponja:</strong> O fluido refrigerante funciona como uma esponja térmica. A evaporadora absorve o calor (a esponja suga a água), o compressor comprime o vapor quente (espreme a esponja com força mecânica), a condensadora rejeita o calor no exterior (a esponja derrama o calor na rua e condensa) e a válvula de expansão reduz a pressão instantaneamente (a esponja se abre novamente e esfria).</p>
<p><strong>Calor Sensível vs. Calor Latente:</strong> O sensível é o detectável pelo termômetro (temperatura de bulbo seco). O latente é a energia da umidade (remoção invisível de água por condensação na serpentina). Equipamentos sobredimensionados reduzem o calor sensível rápido demais e desligam antes de processar o calor latente, deixando o ar úmido e propenso a mofo.</p>
<p><strong>Sobreaquecimento e Subarrefecimento:</strong> Sobreaquecimento (sucção) protege o compressor contra golpes de líquido (deve ser maior que zero). Subarrefecimento (líquido) garante que o fluido esteja totalmente condensado em líquido denso antes de atingir a válvula de expansão, evitando ebulição prematura (flash gas).</p>
<p><strong>Óleo POE e Hidrólise:</strong> Óleos de poliéster são altamente higroscópicos. A presença de umidade causa hidrólise: <code>Éster + Água ⇌ Ácido Carboxílico + Álcool</code>. O ácido resultante corrói o verniz dielétrico e o cobre interno, causando travamento mecânico por copper plating.</p>

<h2>Módulo 2 — Pré-Instalação, Dimensionamento e Infraestrutura</h2>
<p><strong>Cálculo de Carga Térmica:</strong> O dimensionamento correto evita o short-cycling (ligar e desligar frequente). O short-cycling acelera o desgaste mecânico e impede o fluxo de retorno de óleo para o cárter. A modulação de rotação em compressores Inverter adapta a vazão do ciclo dinamicamente à carga térmica real.</p>
<p><strong>Posicionamento de Condensadoras:</strong> Evita o curto-circuito de ar (sucção do próprio ar quente expelido) que eleva a head pressure e desliga a máquina por proteção térmica. O isolamento acústico exige coxins de borracha para rotações acima de 1000 RPM, e isoladores de mola helicoidal de aço para baixas rotações (compressores pesados de Chillers/VRF).</p>
<p><strong>Hidrodinâmica de Drenagem:</strong> Em evaporadoras de pressão negativa (Draw-Through), o ventilador suga ar pelo dreno se não houver sifão, retendo a água na bandeja. O sifão P-Trap e a instalação de respiro (vent) após o sifão garantem o escoamento contínuo por gravidade. Em bombas de condensado, o intertravamento passa o circuito de 24V pela boia de segurança para desligar a evaporadora em caso de transbordamento.</p>

<h2>Módulo 3 — O Circuito Frigorífico e a Maestria do Cobre</h2>
<p><strong>Preparação de Linhas:</strong> É proibido o uso de serras normais devido às limalhas que provocam abrasão interna nas válvulas e curto dielétrico. Deve-se escarear verticalmente voltado para baixo. Cotovelos soldados de 90° geram perda de carga acentuada (Vórtices de Dean); curvadores mecânicos devem ser priorizados. Flanges devem ser polidas com flangeador excêntrico de embreagem e Nylog na face, mantendo a rosca seca para não falsear o torquímetro (preservando a deformação elástica do cobre pela Lei de Hooke).</p>
<p><strong>Solda e Brasagem Limpa:</strong> Aquecer o cobre acima de 600°C sem nitrogênio gera óxido cúprico interno (fuligem preta). O óleo POE sintético lava essa fuligem e obstrui as EEVs. O protocolo de brasagem exige expurgo inicial com nitrogênio seco e fluxo contínuo a 2-5 SCFH (sussurro de proteção) até o resfriamento completo ao toque.</p>
<p><strong>Isolamento e Armadura Térmica:</strong> O roubo térmico nas linhas de sucção eleva a temperatura de descarga acima de 107°C, carbonizando o óleo. Não aperte isolantes com abraçadeiras plásticas (enforca-gato) para não degradar a resistência térmica das bolhas de ar e causar condensação. Cole as juntas com Wet Seal de forma contínua e proteja isolamentos externos contra UV.</p>

<h2>Módulo 4 — Rigor Elétrico e Comunicação de Dados</h2>
<p><strong>Dimensionamento e Proteção:</strong> Bitola calculada pelo MCA (Minimum Circuit Ampacity) e proteção por MOCP (Maximum Overcurrent Protection). O desequilíbrio de tensão trifásico não deve exceder 1% (NEMA MG-1); o aquecimento do enrolamento cresce de forma quadrática com o desequilíbrio: <code>2 × desequilíbrio²</code>.</p>
<p><strong>Conexões Confiáveis:</strong> Fios flexíveis decapados sob parafusos sofrem esmagamento (bird-caging), elevando a resistência por Efeito Joule e sofrendo fluência a frio (cold flow). Ao desligar, o cobre deforma permanentemente e afrouxa a conexão, abrindo micro-arcos. É obrigatório crimpar terminais tubulares ilhós/olhais com alicate catraca; a estanhagem é proibida.</p>
<p><strong>Comunicação RS-485:</strong> A alta frequência do inversor gera EMI (ruído). Eletrodutos de dados e força devem ser separados. Use a topologia Daisy-Chain (unidades ligadas em série); emendas em T (T-Tap) provocam ecos digitais. A malha blindada do cabo STP deve ser aterrada em ponto único (na condensadora) para evitar loops de terra (ground loops).</p>

<h2>Módulo 5 — Arquitetura de Instalação de Alto Padrão</h2>
<p><strong>Clima Invisível:</strong> Unidades Cassete usam o Efeito Coanda para espalhar o ar frio junto ao teto. Barreiras mecânicas quebram o efeito e provocam curto-circuito de retorno. Built-in dutados requerem lonas flexíveis esticadas para manter a vazão aerodinâmica (TESP); plenum de retorno aberto (Open Plenum) no entreforro é proibido por razões de qualidade do ar (Legionella e gases VOCs).</p>
<p><strong>Projeto VRF:</strong> Os Refnets de ramificação de óleo/líquido devem ser instalados perfeitamente planos na horizontal ou vertical (tolerância máxima de ±15°). Desvios causam afogamento de líquido nas evaporadoras inferiores, escassez de óleo no compressor e caça de fluxo (hunting) nas superiores. Mantenha trechos retos de 50 cm antes e depois de Refnets.</p>
<p><strong>Walk-ins e Câmaras Frias:</strong> A barreira de vapor em juntas de poliuretano deve ser selada do lado quente do isolamento para evitar o congelamento intersticial que rompe a estrutura de aço. Pisos congelados a -20°C exigem cabos de aquecimento (heat trace) para evitar o frost heave da terra. Válvulas PRV regulam pressões de portas de congelados e devem ser eletricamente aquecidas.</p>

<h2>Módulo 6 — O Protocolo "Vazamento Zero"</h2>
<p><strong>Pressurização e Gay-Lussac:</strong> Ensaio de estanqueidade de 24h a 550-600 PSI usando nitrogênio seco (OFN). A pressão varia termodinamicamente em 1.4 PSI por 1°C de queda térmica (0.8 PSI por 1°F); use Gay-Lussac para deduzir variações. Ative o modo teste para abrir todas as EEVs. Não use sabões com amônia (provocam trincas de latão); use líquidos viscoelásticos Big Blu, ultrassom (40 kHz) ou Forming Gas (95% N₂ / 5% H₂).</p>
<p><strong>Evacuação Profunda:</strong> Alcance 500 microns estável (teste de decaimento por 15 minutos). Remova as agulhas Schrader com ferramentas extratoras VCRT e use mangueiras de 1/2" (pulando de 0.2 CFM para 3.0-4.0 CFM). Evite o flash-freeze da água residual aplicando o Triplo Vácuo (vácuo a 1500 mícrons, quebra com calor sensível de N₂, vácuo a 1000 mícrons, nova quebra, vácuo final abaixo de 500 mícrons).</p>

<h2>Módulo 7 — Comissionamento, Diagnóstico e Handover</h2>
<p><strong>Partida e Trim Charge:</strong> A carga deve ser ajustada por pesagem em balança digital com base no diâmetro e comprimento equivalente da linha de líquido (incluindo o arrasto equivalente de cotovelos). Fluido zeotrópico (como R-454B) deve ser carregado estritamente em fase líquida pela linha de alta pressão.</p>
<p><strong>Telemetria e Laudo PMOC:</strong> Colete baselines conectando notebooks às placas OEM (D-Checker, Maintenance Tool) por pelo menos 2 horas e cruze com leituras de Smart Probes. O comissionamento digital gera o Birth Certificate (Certidão de Nascimento Digital) com logs de nitrogênio, decaimento de vácuo, peso da carga, fotos dielétricas e baseline térmica.</p>
<p>Este relatório fornece blindagem de responsabilidade civil para a empresa e atua como ferramenta comercial para converter a venda da instalação em contratos mensais recorrentes de manutenção PMOC (Lei Federal 13.589/2018), baseando o monitoramento na comparação contínua contra os dados do Birth Certificate.</p>
`,
    tabelas_html: `
<h2>Parâmetros Técnicos e Limites Operacionais</h2>
<p>Consulte as tabelas abaixo para garantir a conformidade com as tolerâncias físicas, elétricas e de montagem exigidas no protocolo de elite da Simon Climatização.</p>

<h3>1. Isolamento Mecânico de Vibração e Ruído</h3>
<table>
<thead>
<tr><th>Tipo de Equipamento</th><th>Faixa de Rotação (RPM)</th><th>Isolador Recomendado</th><th>Deflexão de Projeto (mm)</th></tr>
</thead>
<tbody>
<tr><td>Mini-Splits e Evaporadoras Fancoil</td><td>&gt; 1.000 RPM</td><td>Coxins de Borracha / Elastômeros</td><td>2 — 7 mm</td></tr>
<tr><td>Chillers Industriais e VRFs Pesados</td><td>&lt; 500 RPM</td><td>Molas Helicoidais de Aço</td><td>25 — 50 mm</td></tr>
<tr><td>Unidades de Climatização em Lajes Flexíveis</td><td>Todas as faixas</td><td>Base de Inércia sobre Molas de Aço</td><td>&gt; 50 mm (Base = 2.5× peso da máquina)</td></tr>
</tbody>
</table>

<h3>2. Regras de Alinhamento e Trajeto de Tubulações VRF (Refnets)</h3>
<table>
<thead>
<tr><th>Parâmetro de Tubulação</th><th>Valor Exigido</th><th>Tolerância Máxima</th><th>Causa Raiz de Falha</th></tr>
</thead>
<tbody>
<tr><td>Inclinação de Y-Branches (Refnets)</td><td>Perfeitamente horizontal ou vertical</td><td>±15°</td><td>Afogamento de líquido ou falta de óleo no cárter</td></tr>
<tr><td>Trecho Reto Antes/Depois do Refnet</td><td>≥ 50 cm (20 polegadas)</td><td>Sem desvios</td><td>Vórtices de Dean (turbulência por força centrífuga)</td></tr>
<tr><td>Distância Mínima Entre Dois Refnets</td><td>≥ 100 cm (40 polegadas)</td><td>Sem desvios</td><td>Desequilíbrio de vazão e caça de fluxo (hunting)</td></tr>
</tbody>
</table>

<h3>3. Desequilíbrio Trifásico de Tensão (NEMA MG-1)</h3>
<table>
<thead>
<tr><th>Desequilíbrio de Tensão (%)</th><th>Elevação de Temp. Enrolamento (%)</th><th>Risco Operacional</th><th>Garantia de Fábrica</th></tr>
</thead>
<tbody>
<tr><td><strong>0.0% — 1.0%</strong></td><td>0.0% — 2.0%</td><td>✅ Operação segura e estável</td><td>Ativa e Homologada</td></tr>
<tr><td><strong>1.5% — 2.0%</strong></td><td>4.5% — 8.0%</td><td>⚠️ Aquecimento moderado nos enrolamentos</td><td>Sob monitoramento rígido</td></tr>
<tr><td><strong>3.0%</strong></td><td>18.0%</td><td>🚨 Risco elevado de degradação do verniz dielétrico</td><td>❌ Cancelada (Risco de queima)</td></tr>
<tr><td><strong>&gt; 4.0%</strong></td><td>&gt; 32.0%</td><td>💥 Burnout elétrico iminente do compressor</td><td>❌ Cancelada (Quebra por assimetria)</td></tr>
</tbody>
</table>
<p><small>Fórmula NEMA: Elevação de Temperatura = 2 × (Percentual de Desequilíbrio)²</small></p>

<h3>4. Relação de Vácuo, Ebulição da Água e Estados Físicos</h3>
<table>
<thead>
<tr><th>Nível de Vácuo (Microns)</th><th>Pressão Absoluta (PSIA)</th><th>Ponto de Ebulição da Água (°C)</th><th>Ação Química Requerida</th></tr>
</thead>
<tbody>
<tr><td><strong>100.000</strong></td><td>1.934</td><td>+51.7 °C (125 °F)</td><td>Líquida na tubulação (impossível extrair)</td></tr>
<tr><td><strong>20.000</strong></td><td>0.387</td><td>+22.2 °C (72 °F)</td><td>Água ferve apenas em dias muito quentes</td></tr>
<tr><td><strong>5.000</strong></td><td>0.096</td><td>+1.7 °C (35 °F)</td><td>Risco de congelamento da umidade residual</td></tr>
<tr><td><strong>1.500</strong></td><td>0.029</td><td>-11.7 °C (11 °F)</td><td>Primeira quebra do Triplo Vácuo com Nitrogênio</td></tr>
<tr><td><strong>500</strong></td><td>0.009</td><td>-24.4 °C (-12 °F)</td><td>✅ Desidratação completa e vácuo homologado</td></tr>
</tbody>
</table>

<h3>5. Compensação Térmica de Nitrogênio Seco (Gay-Lussac)</h3>
<table>
<thead>
<tr><th>Temperatura Ambiente (°C)</th><th>Pressão Teórica (PSI)</th><th>Diferença de Pressão (PSI)</th><th>Veredicto de Estanqueidade</th></tr>
</thead>
<tbody>
<tr><td><strong>32 °C (Início às 14h)</strong></td><td>600.0 PSI</td><td>0.0 PSI (Baseline)</td><td>Pressurização inicial estabelecida</td></tr>
<tr><td><strong>26 °C (Noite)</strong></td><td>591.6 PSI</td><td>-8.4 PSI</td><td>Queda puramente térmica (Gay-Lussac)</td></tr>
<tr><td><strong>20 °C (Manhã às 8h)</strong></td><td>583.2 PSI</td><td>-16.8 PSI</td><td>✅ Estanque (Sem vazamento físico)</td></tr>
<tr><td><strong>20 °C (Manhã se furado)</strong></td><td>&lt; 550.0 PSI</td><td>&gt; -50.0 PSI</td><td>🚨 Vazamento físico (Microfissura ativa)</td></tr>
</tbody>
</table>
<p><small>Regra de Campo: Variação aproximada de 1.4 PSI para cada 1°C (ou 0.8 PSI por 1°F).</small></p>
`,
    infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Padrão Simon Climatização</h2>

<div class="infobox-warning">
<h3>🚨 O CÂNCER DA UMIDADE — Hidrólise do Óleo Sintético POE</h3>
<p>Os fluidos refrigerantes modernos (A2L e misturas zeotrópicas) exigem óleos de poliéster altamente higroscópicos. A presença de umidade dentro da tubulação reage com o éster sob o calor do compressor, gerando <strong>Ácido Carboxílico</strong> e <strong>Álcool</strong>. O ácido corrói o cobre internamente (Corrosão Formicária) e ataca o isolamento dielétrico das bobinas do compressor, provocando curtos-circuitos elétricos fulminantes e travamento mecânico por deposição de cobre (copper plating).</p>
</div>

<div class="infobox-warning">
<h3>🚨 PRESSURIZAÇÃO EM VÁCUO — Evite Contaminações</h3>
<p>Nunca tente localizar vazamentos realizando vácuo profundo em sistemas suspeitos de furos. Ao criar pressão negativa interna, você suga ativamente o ar e a umidade do ambiente externo para dentro do circuito frigorífico, saturando o óleo POE de água e inviabilizando a desidratação. O único método válido para teste de vazamentos é a pressurização positiva com <strong>Nitrogênio Seco (OFN)</strong> de 550 a 600 PSI.</p>
</div>

<div class="infobox-warning">
<h3>🚨 INSTALAÇÃO DE REFNETS — Ângulos Críticos no VRF</h3>
<p>Refnets devem ser mantidos perfeitamente nivelados no plano horizontal ou vertical, com desvio máximo tolerado de <strong>±15°</strong>. Inclinações maiores provocam a separação por gravidade da mistura bifásica: o refrigerante líquido denso e o óleo do compressor escorrem para a ramificação inferior, enquanto o ramal superior recebe apenas vapor. Isso gera superaquecimento do compressor no telhado por falta de óleo e caça de fluxo (hunting) nas evaporadoras superiores.</p>
</div>

<div class="infobox-tip">
<h3>👋 Limpeza de Tubos: Proibição de Serras Manuais</h3>
<p>É terminantemente proibida a utilização de serras-sabre ou arcos de serra comuns para o corte de tubos de cobre. O corte mecânico por desgaste gera limalhas e lascas microscópicas que circulam pelo sistema em alta velocidade, atuando como jato abrasivo sobre as válvulas do compressor e danificando a proteção dielétrica do motor elétrico. Use apenas cortadores de tubo de roldana com aperto suave gradual.</p>
</div>

<div class="infobox-tip">
<h3>👋 Carga por Balança Digital e Carga Zeotrópica</h3>
<p>Carregue sistemas modernos de climatização exclusivamente por pesagem em balança digital, calculando a carga com base no diâmetro e comprimento equivalente da linha de líquido. Em fluidos zeotrópicos com deslizamento de temperatura (como R-454B), a carga de refrigerante deve ser introduzida <strong>exclusivamente em fase líquida</strong> pelo lado de alta pressão para prevenir o fracionamento químico da mistura.</p>
</div>
`
  },

  // ──────────────────────────────────────────────────────────────────────────
  // MÓDULOS DO TREINAMENTO
  // ──────────────────────────────────────────────────────────────────────────
  modulos: [
    // ════════════════════════════════════════════════════════════════════════
    // MÓDULO 01 - Fundamentos da Refrigeração e Termodinâmica
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 1,
      titulo: "MÓDULO 01 — Fundamentos da Refrigeração e Termodinâmica",
      descricao:
        "O alicerce teórico de toda instalação de excelência. Do ciclo de refrigeração à segurança com fluidos A2L.",
      icone: "thermometer",
      cor: "sky",
      aulas: [
        {
          id: "01-01",
          titulo: "A mecânica do ciclo de refrigeração profissional",
          modulo: "MÓDULO 01 - 01",
          videos: [
            {
              titulo:
                "A mecânica do ciclo de refrigeração profissional - MÓDULO 01 - 01",
              link: "https://youtu.be/TVXb-LQWNlg",
              tipo: "videoaula",
            },
            {
              titulo: "A Arte da Percepção - MÓDULO 01 - 01",
              link: "https://youtu.be/iBN6_9WwZqk",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-01/Module01-01-HVAC Refrigeration Cycle Masterclass.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/TVXb-LQWNlg",
          link_podcast: "https://youtu.be/iBN6_9WwZqk",
          total_slides: 15,
          fontes_imagens: Array.from({ length: 16 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo01/modulo01-01/Module01-01-HVAC Refrigeration Cycle Masterclass-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>Erradicando o Conceito de "Frio"</h2>
<p><strong>Amadores fazem coisas ficarem frias; técnicos de elite removem calor usando física de precisão.</strong></p>
<p>Esta mudança fundamental de paradigma separa os trocadores-de-peças dos verdadeiros diagnosticistas na indústria HVAC/R. O leigo percebe um bloco de gelo como "frio" e uma brasa incandescente como "quente", mas o técnico de elite entende que ambos contêm calor; "frio" é meramente uma percepção biológica de um ambiente que possui uma quantidade menor de energia térmica do que uma referência de base.</p>
<p>Um sistema de ar condicionado não gera ar frio, assim como um interruptor de luz não gera escuridão. Em vez disso, um sistema de refrigeração opera como um <strong>elevador térmico avançado</strong>, absorvendo ativamente calor de um espaço condicionado designado e rejeitando-o forçosamente para outro ambiente.</p>

<h2>As Leis da Termodinâmica no Ciclo</h2>
<p>A <strong>Primeira Lei da Termodinâmica</strong> estabelece que energia não pode ser criada ou destruída, apenas transferida ou transformada. No contexto do ciclo de compressão de vapor, isto significa que o calor removido do interior do edifício, combinado com o trabalho mecânico adicionado pelo compressor, deve exatamente igualar o calor total rejeitado para o ambiente externo pelo condensador. Se estas contas termodinâmicas não fecham, o técnico sabe imediatamente que o ciclo está comprometido.</p>
<p>A <strong>Segunda Lei da Termodinâmica</strong> dita que calor flui naturalmente apenas de um corpo mais quente para um corpo mais frio. Para reverter este fluxo natural — mover calor de um espaço mais frio para um ambiente externo mais quente — trabalho mecânico é absolutamente necessário.</p>

<h2>Entalpia: A Verdadeira Medida do Trabalho</h2>
<p>Entalpia é o trabalho total que o sistema está realizando, contabilizando tanto o calor sensível (mudança de temperatura detectável) quanto o calor latente (mudança de fase invisível e remoção de umidade). Entalpia (Delta-h), medida em BTU/lb de ar seco, fornece a métrica diagnóstica abrangente.</p>
<p>Um sistema de conforto funcionando adequadamente geralmente exibirá uma diferença de entalpia entre <strong>5.5 e 8.0 BTU/lb</strong>:</p>
<ul>
<li><strong>Entalpia muito baixa (ex.: 4.2 BTU/lb):</strong> falha dentro do ciclo de refrigeração — subcarga, compressor ineficiente, ou dispositivo de medição restrito.</li>
<li><strong>Entalpia muito alta (ex.: 9.5 BTU/lb):</strong> deficiência de fluxo de ar — motor de blower falhando, dutos obstruídos ou filtração restrita.</li>
</ul>

<h2>Entropia: A Arquitetura Molecular das Mudanças de Fase</h2>
<p>Enquanto entalpia mede a energia total, entropia mede o grau de desordem ou energia indisponível dentro do sistema termodinâmico. Dentro do ciclo de compressão de vapor, a entropia é manipulada intencionalmente através de mudanças de fase:</p>
<ul>
<li>No <strong>evaporador</strong>: o líquido ferve em vapor, aumentando dramaticamente a entropia (absorção de energia).</li>
<li>No <strong>compressor</strong>: o processo é idealmente isentrópico, mas compressores reais introduzem ganhos leves de entropia.</li>
<li>No <strong>condensador</strong>: o gás condensa em líquido, representando uma diminuição localizada de entropia.</li>
</ul>

<h2>Os Quatro Pilares do Ciclo — Anatomia Funcional</h2>
<h3>Home Plate: O Compressor (O Coração Biológico)</h3>
<p>Se o refrigerante é o sangue vital do sistema, o compressor é o coração humano. Sua função primária e inegociável é circular o fluido e estabelecer o diferencial de pressão vital. Compressores são projetados puramente para bombear vapor; líquidos são mecanicamente incompressíveis. Se refrigerante líquido violar as válvulas de admissão — uma condição destrutiva conhecida como <strong>slugging de líquido</strong> — as forças mecânicas obliterarão as válvulas internas, pistões ou placas de scroll.</p>

<h3>Primeira Base: O Condensador (O Rejeitador de Calor)</h3>
<p>O condensador realiza sua missão através de três processos internos sequenciais:</p>
<ol>
<li><strong>Dessuperaquecimento:</strong> Remove calor sensível adicionado pelo compressor, sem mudar o estado do vapor.</li>
<li><strong>Condensação:</strong> Mudança de fase latente de vapor para líquido a temperatura constante.</li>
<li><strong>Sub-resfriamento:</strong> Remove calor sensível adicional, baixando a temperatura do líquido saturado abaixo de seu ponto de ebulição.</li>
</ol>

<h3>Segunda Base: O Dispositivo de Medição (A Comporta)</h3>
<p>O dispositivo de medição atua como uma comporta mecânica precisa. Quando o líquido de alta pressão é forçado pelo orifício microscópico, experimenta uma queda de pressão catastrófica e instantânea — o fenômeno conhecido como <strong>"flashing"</strong>.</p>
<p>A <strong>TXV</strong> (Válvula de Expansão Termostática) equilibra três forças: bulbo sensor, linha equalizadora externa e mola de tensão interna calibrada.</p>

<h3>Terceira Base: O Evaporador (A Esponja Térmica)</h3>
<p>O refrigerante entra como mistura bifásica de baixa pressão e baixa temperatura. O líquido ferve furiosamente a temperaturas tão baixas quanto 4.4°C (40°F), absorvendo quantidades massivas de calor latente. Após completa vaporização, as passagens finais adicionam <strong>sobreaquecimento (superheat)</strong>, garantindo que o vapor está completamente seco e protegendo o compressor.</p>

<h2>Refrigerantes A2L e Misturas Zeotrópicas</h2>
<p>R-454B é uma mistura zeotrópica (68.9% R-32 + 31.1% R-1234yf) que experimenta <strong>deslizamento de temperatura</strong> (temperature glide). O técnico deve usar:</p>
<ul>
<li><strong>Ponto de Bolha (Bubble Point):</strong> para calcular Sub-resfriamento.</li>
<li><strong>Ponto de Orvalho (Dew Point):</strong> para calcular Sobreaquecimento.</li>
</ul>
<p>Limites de carga liberável (m1, m2, m3) baseados no volume do espaço condicionado são obrigatórios para segurança. Se a carga exceder o limite m2, sistemas de ventilação ativados por vazamento tornam-se legalmente obrigatórios.</p>
          `,
          tabelas_html: `
<h2>Matriz de Assinaturas de Diagnóstico do Sistema</h2>
<p>Ao cruzar o sobreaquecimento e o sub-resfriamento com as pressões do sistema, os técnicos podem definitivamente isolar a causa raiz de uma falha de ciclo sem desmontagens invasivas.</p>
<table>
<thead>
<tr><th>FALHA DE SISTEMA</th><th>PS (Sucção)</th><th>PD (Descarga)</th><th>SA (Sobreaq.)</th><th>SC (Sub-resf.)</th><th>ΔT</th></tr>
</thead>
<tbody>
<tr><td><strong>Subcarga</strong></td><td style="color:#3b82f6">↓</td><td style="color:#3b82f6">↓</td><td style="color:#ef4444">↑</td><td style="color:#3b82f6">↓</td><td style="color:#3b82f6">↓</td></tr>
<tr><td><strong>Sobrecarga</strong></td><td style="color:#ef4444">↑</td><td style="color:#ef4444">↑</td><td style="color:#3b82f6">↓</td><td style="color:#ef4444">↑</td><td style="color:#3b82f6">↓</td></tr>
<tr><td><strong>Restrição</strong></td><td style="color:#3b82f6">↓</td><td style="color:#3b82f6">↓</td><td style="color:#ef4444">↑</td><td style="color:#ef4444">↑</td><td style="color:#3b82f6">↓</td></tr>
<tr><td><strong>Baixo Fluxo de Ar Interior</strong></td><td style="color:#3b82f6">↓</td><td style="color:#3b82f6">↓</td><td style="color:#3b82f6">↓</td><td style="color:#ef4444">↑</td><td style="color:#ef4444">↑</td></tr>
<tr><td><strong>Condensador Sujo</strong></td><td style="color:#ef4444">↑</td><td style="color:#ef4444">↑</td><td style="color:#3b82f6">↓</td><td style="color:#3b82f6">↓</td><td style="color:#3b82f6">↓</td></tr>
</tbody>
</table>
<p><small><strong>PS</strong> = Pressão de Sucção &nbsp;|&nbsp; <strong>PD</strong> = Pressão de Descarga &nbsp;|&nbsp; <strong>SA</strong> = Sobreaquecimento &nbsp;|&nbsp; <strong>SC</strong> = Sub-resfriamento &nbsp;|&nbsp; <strong>ΔT</strong> = Diferença de Temperatura (Delta T)</small></p>

<h3>Diferenciação Crítica: Subcarga vs. Restrição</h3>
<p>Note como subcarga e restrição na linha de líquido mimetizam uma à outra com baixa pressão de sucção, baixa pressão de cabeça e alto sobreaquecimento. O <strong>único</strong> fator diferenciador é o sub-resfriamento: subcarga resulta em <em>baixo</em> sub-resfriamento, enquanto uma restrição causa <em>alto</em> sub-resfriamento (líquido se acumulando atrás do bloqueio).</p>

<h3>Cálculos de Sobreaquecimento e Sub-resfriamento</h3>
<table>
<thead>
<tr><th>Métrica</th><th>Fórmula</th><th>O que indica</th></tr>
</thead>
<tbody>
<tr><td><strong>Sobreaquecimento</strong></td><td>T<sub>sucção real</sub> − T<sub>saturação (lado baixo)</sub></td><td>Conta a história do evaporador — se está faminto ou inundado de refrigerante</td></tr>
<tr><td><strong>Sub-resfriamento</strong></td><td>T<sub>saturação (lado alto)</sub> − T<sub>linha líquida real</sub></td><td>Conta a história do condensador — se está construindo um selo protetor de líquido sólido</td></tr>
</tbody>
</table>

<h3>Faixa Ideal de Entalpia para Conforto</h3>
<table>
<thead>
<tr><th>Parâmetro</th><th>Faixa Normal</th><th>Ação se Fora</th></tr>
</thead>
<tbody>
<tr><td>Diferença de Entalpia (Δh)</td><td>5.5 — 8.0 BTU/lb</td><td>Investigar ciclo ou fluxo de ar</td></tr>
<tr><td>Sobreaquecimento (TXV)</td><td>8 — 14 °F</td><td>Verificar carga, TXV, bulbo sensor</td></tr>
<tr><td>Sub-resfriamento</td><td>8 — 14 °F</td><td>Verificar carga, condensador, restrições</td></tr>
<tr><td>Temp. Linha de Sucção</td><td>≤ 65 °F (18°C)</td><td>Se quente: subcarga ou restrição</td></tr>
</tbody>
</table>
          `,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo</h2>

<div class="infobox-warning">
<h3>🚨 SLUGGING DE LÍQUIDO — Risco de Destruição Imediata</h3>
<p>Compressores são projetados <strong>puramente para bombear vapor</strong>. Se refrigerante líquido violar as válvulas de admissão, as forças mecânicas obliterarão hidraulicamente as válvulas internas, pistões ou placas de scroll. <strong>Nunca</strong> permita sobreaquecimento próximo de zero na linha de sucção. O sobreaquecimento é a blindagem que protege o compressor.</p>
</div>

<div class="infobox-warning">
<h3>🔥 TXV — O Componente Mais Mal-Diagnosticado do HVAC/R</h3>
<p>Técnicos amadores frequentemente confundem falhas de TXV com problemas de carga de refrigerante, agravando a falha do sistema. Antes de tocar na carga, execute o <strong>teste manual do bulbo</strong>: desacoplar, segurar na mão, e observar se a pressão de sucção sobe e o sobreaquecimento cai previsivelmente. Se sim, a válvula é funcional — o problema está no posicionamento/isolamento do bulbo.</p>
</div>

<div class="infobox-tip">
<h3>👋 Leitura Tátil das Linhas de Cobre</h3>
<ul>
<li><strong>Linha de Sucção fria + suando:</strong> ✅ Sistema operando corretamente</li>
<li><strong>Linha de Sucção morna/ambiente:</strong> ❌ Subcarga, restrição no dispositivo de medição, ou evaporador faminto</li>
<li><strong>Linha de Líquido moderadamente quente:</strong> ✅ Normal (10-15°F acima da temperatura ambiente)</li>
<li><strong>Linha de Líquido excessivamente quente:</strong> ❌ Pressão de cabeça perigosamente alta (condensador sujo, sobrecarga, ventilador do condensador falhando)</li>
<li><strong>Linha de Líquido fria / queda brusca de temperatura:</strong> ❌ Restrição severa (filtro secador ou junta brasada)</li>
</ul>
</div>

<div class="infobox-tip">
<h3>👃 Diagnóstico Olfativo</h3>
<ul>
<li><strong>Ozônio + isolamento queimando:</strong> 🚨 Burnout de motor de compressor iminente ou recente</li>
<li><strong>Borracha queimada:</strong> Correia deslizando ou mancal falhando</li>
<li><strong>Óleo lubrificante adocicado perto de juntas:</strong> 🚨 Vazamento de refrigerante lento — o refrigerante de alta pressão carrega gotas microscópicas de óleo para fora do circuito</li>
</ul>
</div>

<div class="infobox-tip">
<h3>🔊 Diagnóstico Acústico Rápido</h3>
<ul>
<li><strong>Hum suave e estável:</strong> ✅ Compressor saudável</li>
<li><strong>Batidas/Clanking:</strong> ❌ Mola quebrada, falha mecânica interna, slugging de líquido</li>
<li><strong>Chiado agudo:</strong> ❌ Rolamentos de motor, atrito metal, correia deslizando</li>
<li><strong>Assobio localizado em linhas de cobre:</strong> 🚨 Vazamento de refrigerante de alta pressão</li>
<li><strong>Cliques repetidos:</strong> ❌ Contator trepidando, relé de controle falhando</li>
</ul>
</div>
          `,
        },
        {
          id: "01-02",
          titulo:
            "Diagnóstico técnico de sobreaquecimento e subarrefecimento",
          modulo: "MÓDULO 01 - 02",
          videos: [
            {
              titulo:
                "Diagnóstico técnico de sobreaquecimento e subarrefecimento MÓDULO 01 - 02",
              link: "https://youtu.be/t-FhNUtV7Lk",
              tipo: "videoaula",
            },
            {
              titulo: "O Segredo por Trás do Conforto - MÓDULO 01 - 02",
              link: "https://youtu.be/ozPi-Z9IitQ",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-01/Module01-02-HVAC Thermodynamics Training Guide.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/t-FhNUtV7Lk",
          link_podcast: "https://youtu.be/ozPi-Z9IitQ",
          total_slides: 15,
          fontes_imagens: Array.from({ length: 22 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo01/modulo01-02/Module01-02-HVAC Thermodynamics Training Guide-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>A Revolução Termodinâmica na Bancada de Campo</h2>
<p>As metodologias legadas do passado — o teste tátil "beer-can cold" nas linhas de sucção, o carregamento de refrigerante "por pressão" — foram <strong>definitivamente substituídas</strong> pela necessidade absoluta de dados empíricos, psicrometria digital e diagnóstico preciso do circuito de refrigerante.</p>
<p>Sistemas modernos de alta eficiência são maravilhas da engenharia: compressores inversores de velocidade variável, trocadores de calor microcanal e Válvulas de Expansão Eletrônicas (EEVs) controladas por microprocessador. Nesses ambientes, uma carga de refrigerante calibrada incorretamente ou uma anomalia termodinâmica mal diagnosticada não resulta meramente em perda de conforto — pode resultar em <strong>falha catastrófica de equipamento</strong>, degradação severa de eficiência energética e qualidade do ar interior gravemente comprometida.</p>

<h2>Parte I: Calor Sensível versus Calor Latente</h2>
<h3>Calor Sensível: A Mudança de Temperatura</h3>
<p>Calor sensível é a energia térmica que, quando adicionada ou removida, resulta em uma <strong>mudança diretamente quantificável na temperatura</strong> sem alterar o estado físico da substância. É o calor que pode ser fisicamente "sentido" pela pele humana ou medido com um termômetro de bulbo seco.</p>
<p>No contexto HVAC, a capacidade de resfriamento sensível é a quantidade de energia dedicada exclusivamente a <strong>baixar a temperatura de bulbo seco</strong> do ar ambiente dentro do espaço condicionado.</p>

<h3>Calor Latente: A Mudança de Fase</h3>
<p>Calor latente representa a energia térmica necessária para facilitar uma <strong>mudança de fase física</strong> — sólido para líquido (fusão), líquido para gás (evaporação), gás para líquido (condensação) — <strong>sem nenhuma mudança na temperatura sensível</strong>. Toda a energia é consumida na quebra ou formação de ligações intermoleculares.</p>
<p>A capacidade de resfriamento latente de um sistema HVAC refere-se à sua capacidade de <strong>remover vapor de água</strong> do ar condicionado. Conforme ar úmido contata um evaporador operando abaixo do ponto de orvalho, o vapor de água condensa em gotículas de água nas aletas da serpentina — forçando a desumidificação.</p>

<h3>A Analogia do Deserto vs. Sala de Vapor</h3>
<p>Considere dois ambientes a 100°F:</p>
<ul>
<li><strong>Deserto seco (Arizona):</strong> o suor evapora rapidamente → absorve calor latente massivo da pele → técnico se sente relativamente fresco apesar de 100°F.</li>
<li><strong>Sala de vapor (100% umidade relativa):</strong> o suor <em>não pode</em> evaporar → nenhum calor latente é absorvido → técnico rapidamente superaquece, sentindo-se sufocado e perigosamente quente.</li>
</ul>
<p>Esta analogia explica por que equipamentos <strong>superdimensionados</strong> falham: possuem tanta capacidade sensível que satisfazem o termostato antes de ter tempo de funcionamento para remover umidade, deixando os ocupantes "frios e úmidos".</p>

<h2>Parte II: Sobreaquecimento e Subarrefecimento — Os Sinais Vitais</h2>
<p>Se voltagem, amperagem e resistência representam a <strong>neurologia elétrica</strong> de um sistema HVAC, sobreaquecimento e subarrefecimento representam seus <strong>sinais vitais cardiovasculares</strong>. Leituras de pressão de um manifold são efetivamente inúteis sem dados de temperatura de linha correspondentes.</p>

<h3>Sobreaquecimento: A Blindagem do Compressor</h3>
<p>Sobreaquecimento é a temperatura do vapor de refrigerante <strong>acima de sua temperatura de saturação</strong> (ebulição) em uma dada pressão. É medido no <strong>lado de baixa pressão (sucção)</strong> do sistema.</p>
<ul>
<li><strong>Sobreaquecimento = 0°:</strong> Refrigerante não ferveu completamente → mistura líquida viajando ao compressor → <strong>risco de slugging de líquido</strong> (destruição mecânica imediata).</li>
<li><strong>Sobreaquecimento excessivo:</strong> Vapor carece de densidade para resfriar o motor do compressor → superaquecimento dos enrolamentos → quebra química do óleo → falha prematura por sobrecarga térmica.</li>
</ul>
<p><strong>Fórmula:</strong> Sobreaquecimento = T<sub>linha de sucção</sub> − T<sub>saturação do evaporador</sub></p>

<h3>Subarrefecimento: O Garantidor da Integridade Líquida</h3>
<p>Subarrefecimento é a temperatura do refrigerante líquido <strong>abaixo de sua temperatura de saturação</strong> (condensação). É medido na <strong>linha de líquido de alta pressão</strong> saindo do condensador.</p>
<p>Se o subarrefecimento é zero, o líquido está precisamente em seu ponto de ebulição. Qualquer queda mínima de pressão na linha de líquido causará o líquido a prematuramente flashear em vapor inútil antes de alcançar a válvula de expansão.</p>
<p><strong>Fórmula:</strong> Subarrefecimento = T<sub>saturação do condensador</sub> − T<sub>linha de líquido</sub></p>

<h2>Parte III: Dispositivos de Medição e Protocolos de Carga</h2>
<h3>Orifício Fixo (Pistão / Tubo Capilar)</h3>
<p>Dispositivo passivo com abertura estática — incapaz de reagir a cargas térmicas variáveis. Para estes sistemas, <strong>sobreaquecimento é a métrica primária para ajustar a carga de refrigerante</strong>.</p>
<p>O conceito de carregar todo sistema para 10°F flat é um <strong>mito perigoso</strong>. O técnico deve calcular um Sobreaquecimento Alvo dinâmico:</p>
<p><strong>Fórmula: Target Superheat = (3 × WB − 80 − DB) ÷ 2</strong></p>
<p>Onde WB = Bulbo Úmido interior e DB = Bulbo Seco exterior.</p>

<h3>Válvula de Expansão Termostática (TXV)</h3>
<p>Dispositivo mecânico ativo que mantém sobreaquecimento estável via equilíbrio de três forças: bulbo sensor, pressão de equalização e mola calibrada.</p>
<p><strong>Regra absoluta:</strong> Sistemas TXV devem ser carregados e avaliados usando <strong>Subarrefecimento</strong> — não sobreaquecimento. O alvo está na plaqueta de dados da unidade externa, geralmente <strong>10°F a 12°F</strong>.</p>

<h3>Válvula de Expansão Eletrônica (EEV)</h3>
<p>O ápice do controle de fluxo moderno. Usa termistores eletrônicos + transdutores digitais + motor stepper de precisão para modular o pintle em incrementos microscópicos. Antecipa mudanças de carga antes que se manifestem — eliminando o "hunting" inerente às TXVs mecânicas. Necessidade absoluta em sistemas VRF e inversores.</p>

<h2>Parte IV: A Anomalia Microcanal</h2>
<p>Serpentinas microcanal encolhem o volume interno em até <strong>49%</strong> — tornando o sistema extremamente sensível a variações de carga. Meras onças de sobrecarga ou subcarga causam oscilações descontroladas.</p>
<p><strong>Duas regras inegociáveis:</strong></p>
<ol>
<li><strong>Nunca fazer "pump down" em condensador microcanal</strong> — a pressão hidráulica romperá os tubos planos de alumínio. Recuperar para cilindro externo.</li>
<li><strong>Ajustar carga em incrementos minúsculos</strong> e aguardar mínimo de <strong>15 minutos</strong> para estabilização antes de reavaliar.</li>
</ol>

<h2>Parte V: A Matriz de Troubleshooting dos 4 Quadrantes</h2>
<p>Ao cruzar Alto/Baixo Sobreaquecimento com Alto/Baixo Subarrefecimento, toda falha hidráulica ou termodinâmica pode ser mapeada em <strong>4 quadrantes diagnósticos</strong> distintos:</p>
<ul>
<li><strong>Q1 — Alto SA + Baixo SC = Subcarga (Vazamento):</strong> Evaporador faminto, condensador vazio. Iniciar detecção de vazamento antes de recarregar.</li>
<li><strong>Q2 — Baixo SA + Alto SC = Sobrecarga:</strong> Excesso de líquido inundou condensador. Linha de sucção suando fria, linha de líquido excessivamente quente. Recuperar refrigerante excedente.</li>
<li><strong>Q3 — Alto SA + Alto SC = Restrição:</strong> Líquido acumulando atrás de bloqueio (filtro secador, strainer). Rastrear linha de líquido com clamp de temperatura — queda súbita localiza a restrição.</li>
<li><strong>Q4 — Baixo SA + Baixo SC = Dispositivo de Medição Aberto:</strong> TXV emperrada aberta, válvula superdimensionada ou bulbo com contato deficiente.</li>
</ul>

<h2>Parte VI: Gases Não-Condensáveis (NCGs)</h2>
<p>Ar, nitrogênio, argônio ou oxigênio preso no circuito — entram por práticas desleixadas (vácuo inadequado, falta de N₂ na brasagem). NCGs <strong>não condensam</strong> sob pressões normais, ficando presos no topo do condensador e deslocando refrigerante real.</p>
<p><strong>Sintomas:</strong> pressões de cabeça excessivamente altas, subarrefecimento anormalmente alto, descarga superaquecida, agulha do manifold oscilando.</p>

<h2>Parte VII: Fluxo de Ar e o Split de Temperatura</h2>
<p>O técnico de elite <strong>verifica o fluxo de ar antes de conectar o manifold</strong>. Se o fluxo está comprometido, sobreaquecimento e subarrefecimento distorcerão, levando a diagnósticos inteiramente falsos.</p>
<ul>
<li><strong>400 CFM/ton:</strong> Regra padrão (SHR ~70% sensível / 30% latente).</li>
<li><strong>350 CFM/ton:</strong> Climas úmidos e costeiros — aumenta capacidade latente.</li>
<li><strong>450 CFM/ton:</strong> Climas desérticos secos — maximiza resfriamento sensível.</li>
</ul>
<p><strong>Delta T dinâmico:</strong> 14°F–23°F (não o mito dos 20°F fixos). Depende da carga de umidade do ar de retorno.</p>
<p><strong>DTD (Design Temperature Difference):</strong> Saturação do evaporador deve estar ~35°F (±5°F) abaixo da temp. do ar de retorno a 400 CFM/ton. Se desalinhado → restrição severa de fluxo de ar.</p>
          `,
          tabelas_html: `
<h2>Matriz Dinâmica de Sobreaquecimento Alvo (Orifício Fixo)</h2>
<p>Para sistemas com dispositivo de medição fixo (pistão/capilar), o sobreaquecimento alvo <strong>não é estático</strong> — ele flutua com base nas condições psicrométricas. Valores abaixo de 5°F indicam <strong>risco extremo de slugging do compressor</strong>.</p>
<table>
<thead>
<tr><th>Bulbo Seco Exterior (°F)</th><th>WB Interior 62°F</th><th>WB Interior 64°F</th><th>WB Interior 66°F</th><th>WB Interior 68°F</th></tr>
</thead>
<tbody>
<tr><td><strong>80</strong></td><td>13</td><td>16</td><td>19</td><td>22</td></tr>
<tr><td><strong>90</strong></td><td>8</td><td>11</td><td>14</td><td>17</td></tr>
<tr><td><strong>96</strong></td><td style="color:#f59e0b;font-weight:bold">5</td><td>8</td><td>11</td><td>14</td></tr>
<tr><td><strong>100</strong></td><td style="color:#ef4444;font-weight:bold">3 ⚠️</td><td style="color:#f59e0b;font-weight:bold">6</td><td>9</td><td>12</td></tr>
</tbody>
</table>
<p><small><strong>Fórmula:</strong> Target SH = (3 × WB − 80 − DB) ÷ 2 &nbsp;|&nbsp; Tolerância: ±2°F &nbsp;|&nbsp; ⚠️ = Risco de slugging em climas secos/quentes</small></p>

<h3>Tabela de Referência: Alvos por Tipo de Sistema</h3>
<table>
<thead>
<tr><th>Tipo de Sistema</th><th>Sobreaquecimento Alvo</th><th>Subarrefecimento Alvo</th><th>Uso Diagnóstico Primário</th></tr>
</thead>
<tbody>
<tr><td><strong>A/C Alta Eficiência (TXV/EEV)</strong></td><td>10°F – 15°F (regulado pela válvula)</td><td>10°F – 12°F (plaqueta de dados)</td><td>Subarrefecimento indica carga</td></tr>
<tr><td><strong>Orifício Fixo (Pistão/Capilar)</strong></td><td>Dinâmico (cálculo via WB/DB)</td><td>N/A (altamente variável)</td><td>Sobreaquecimento indica carga</td></tr>
<tr><td><strong>Refrigeração Média Temp.</strong></td><td>5°F – 10°F</td><td>Consultar fabricante</td><td>Controle de temperatura em coolers</td></tr>
<tr><td><strong>Refrigeração Baixa Temp.</strong></td><td>4°F – 10°F</td><td>Consultar fabricante</td><td>Prevenir slugging durante degelo</td></tr>
<tr><td><strong>Compressor Copeland (Inlet)</strong></td><td>Mínimo 20°F (a 15cm do inlet)</td><td>N/A</td><td>Motor cooling + vapor puro</td></tr>
</tbody>
</table>

<h3>Matriz de Diagnóstico dos 4 Quadrantes</h3>
<table>
<thead>
<tr><th>Quadrante</th><th>Sobreaquecimento</th><th>Subarrefecimento</th><th>Diagnóstico</th><th>Ação</th></tr>
</thead>
<tbody>
<tr><td><strong>Q1</strong></td><td style="color:#ef4444">↑ Alto</td><td style="color:#3b82f6">↓ Baixo</td><td>Subcarga (Vazamento)</td><td>Detecção de vazamento eletrônico + ultrassônico</td></tr>
<tr><td><strong>Q2</strong></td><td style="color:#3b82f6">↓ Baixo</td><td style="color:#ef4444">↑ Alto</td><td>Sobrecarga</td><td>Recuperar refrigerante excedente</td></tr>
<tr><td><strong>Q3</strong></td><td style="color:#ef4444">↑ Alto</td><td style="color:#ef4444">↑ Alto</td><td>Restrição na Linha de Líquido</td><td>Rastrear com clamp de temperatura</td></tr>
<tr><td><strong>Q4</strong></td><td style="color:#3b82f6">↓ Baixo</td><td style="color:#3b82f6">↓ Baixo</td><td>Dispositivo de Medição Aberto</td><td>Inspecionar TXV / EEV / Pistão</td></tr>
</tbody>
</table>

<h3>Delta T Dinâmico do Evaporador</h3>
<table>
<thead>
<tr><th>Condição do Ar</th><th>Delta T Esperado</th><th>CFM/ton</th><th>Observação</th></tr>
</thead>
<tbody>
<tr><td>Ar úmido (litoral, tropical)</td><td>14°F – 16°F</td><td>350</td><td>Maioria da capacidade vai para calor latente (desumidificação)</td></tr>
<tr><td>Ar padrão (clima misto)</td><td>17°F – 20°F</td><td>400</td><td>Equilíbrio sensível/latente (SHR ~0.70)</td></tr>
<tr><td>Ar seco (deserto, semi-árido)</td><td>20°F – 23°F</td><td>450</td><td>100% da capacidade ataca calor sensível</td></tr>
</tbody>
</table>
          `,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 01-02</h2>

<div class="infobox-warning">
<h3>🚨 REGRA DE OURO: TXV ≠ Sobreaquecimento para Carga</h3>
<p>O erro mais perigoso e estatisticamente comum no campo é tentar verificar a carga de refrigerante de um sistema TXV observando o sobreaquecimento. A TXV <strong>mascara</strong> subcarga: se o sistema está faminto, a válvula simplesmente abre mais largo para manter o sobreaquecimento "perfeito", enquanto o sistema morre de fome silenciosamente.</p>
<p><strong>Protocolo correto:</strong> Em sistemas TXV/EEV, <strong>SEMPRE use Subarrefecimento</strong> para avaliar a carga total do sistema. O sobreaquecimento serve apenas para avaliar a saúde mecânica da própria válvula.</p>
</div>

<div class="infobox-warning">
<h3>🚨 SERPENTINAS MICROCANAL — Nunca Fazer Pump Down!</h3>
<p>Serpentinas microcanal possuem volume interno até <strong>49% menor</strong> que serpentinas convencionais de cobre. Tentar forçar a carga inteira do sistema para dentro do condensador microcanal fará a pressão hidráulica exceder o limiar de ruptura dos tubos planos de alumínio — causando <strong>ruptura imediata e catastrófica</strong>.</p>
<p><strong>Protocolo:</strong> Sempre recuperar a carga integralmente para um cilindro externo. Ao ajustar carga, adicionar em incrementos minúsculos e aguardar <strong>≥15 minutos</strong> para estabilização.</p>
</div>

<div class="infobox-warning">
<h3>🚨 O MITO DOS "10°F FLAT" — Orifício Fixo</h3>
<p>Carregar todo sistema de orifício fixo para 10°F de sobreaquecimento é um <strong>mito que destrói compressores</strong>. Em climas com alto Bulbo Seco e baixo Bulbo Úmido (ex: Arizona a 100°F DB / 62°F WB), o sobreaquecimento alvo calculado pela fórmula é apenas <strong>3°F</strong> — perigosamente próximo de zero.</p>
<p>Nesses cenários, o técnico deve deliberadamente ajustar o sobreaquecimento ligeiramente acima do alvo ou recomendar <strong>upgrade para TXV</strong> ou instalação de acumulador de sucção.</p>
</div>

<div class="infobox-tip">
<h3>🔬 Teste de Campo para Gases Não-Condensáveis (Lei de Dalton)</h3>
<ol>
<li>Desligar compressor, manter ventilador do condensador ligado.</li>
<li>Aguardar equilíbrio térmico completo (ar de saída do condensador = temperatura ambiente).</li>
<li>Ler pressão do lado alto nos manômetros.</li>
<li>Converter para temperatura de saturação via carta PT.</li>
<li><strong>Se T<sub>saturação</sub> ≈ T<sub>ambiente</sub> (±2-3°F):</strong> refrigerante puro ✅</li>
<li><strong>Se T<sub>saturação</sub> >> T<sub>ambiente</sub>:</strong> gases não-condensáveis presentes 🚨 → Recuperar carga completa, tripla evacuação sub-500µ, recarga virgem.</li>
</ol>
</div>

<div class="infobox-tip">
<h3>📐 Checklist de Medição: Sobreaquecimento em 5 Passos</h3>
<ol>
<li>Conectar manômetro calibrado de baixa perda ao port de sucção. Purgar mangueiras.</li>
<li>Converter pressão medida → Temperatura de Saturação do Evaporador (carta PT / manifold digital).</li>
<li>Fixar termopar pipe clamp na linha de sucção, ~15cm do compressor. Limpar tubo + isolar sonda do ar externo.</li>
<li>Aguardar 10-15 minutos para estabilização térmica.</li>
<li>SA = T<sub>linha sucção</sub> − T<sub>saturação evaporador</sub></li>
</ol>
</div>

<div class="infobox-tip">
<h3>📐 Checklist de Medição: Subarrefecimento em 5 Passos</h3>
<ol>
<li>Conectar manômetro de alta pressão ao port de serviço da linha de líquido. Purgar mangueiras.</li>
<li>Converter pressão de descarga → Temperatura de Saturação do Condensador.</li>
<li>Fixar termopar pipe clamp na linha de líquido de alta pressão, poucos cm da válvula de serviço. Isolar da descarga quente do condensador.</li>
<li>Aguardar ~10 minutos para estabilização.</li>
<li>SC = T<sub>saturação condensador</sub> − T<sub>linha de líquido</sub></li>
</ol>
</div>
          `,
        },
        {
          id: "01-03",
          titulo: "Por que a umidade destrói sistemas A2L",
          modulo: "MÓDULO 01 - 03",
          videos: [
            {
              titulo:
                "Por que a umidade destrói sistemas A2L - MÓDULO 01 - 03",
              link: "https://youtu.be/YcFZdTr6ARo",
              tipo: "videoaula",
            },
            {
              titulo: "Masterclass Fluidos A2L - MÓDULO 01 - 03",
              link: "https://youtu.be/usHZa6TiltY",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-01/Module01-03-Modern Refrigerant Handling Protocols.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/YcFZdTr6ARo",
          link_podcast: "https://youtu.be/usHZa6TiltY",
          total_slides: 15,
          fontes_imagens: Array.from({ length: 22 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo01/modulo01-03/Module01-03-Modern Refrigerant Handling Protocols-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>A Mudança de Paradigma Químico na Indústria HVAC/R</h2>
<p>A indústria global de HVAC/R está passando por uma mudança de paradigma permanente. Impulsionada pela <strong>Emenda Kigali ao Protocolo de Montreal</strong> e pelo <strong>AIM Act</strong> da EPA, o setor está eliminando HFCs de alto GWP. A partir de janeiro de 2025, novos equipamentos devem utilizar refrigerantes com <strong>GWP abaixo de 700</strong>.</p>
<p>A indústria se consolidou em dois sucessores A2L (levemente inflamáveis): <strong>R-32</strong> (puro, componente único) e <strong>R-454B</strong> (mistura zeotrópica). Esta transição exige reformulação fundamental de projeto de sistemas, protocolos de manuseio químico, arquitetura de segurança e proficiência do técnico.</p>

<h2>Parte I: Perfis Termodinâmicos dos Refrigerantes Modernos</h2>
<h3>O Legado de Referência: R-410A</h3>
<p>Mistura quase-azeotrópica (50% R-32 + 50% R-125) que dominou por duas décadas. <strong>GWP de 2.088</strong> — grosseiramente incompatível com mandatos modernos. Permanecerá relevante em campo pela massiva base instalada global.</p>

<h3>R-32: O Padrão de Componente Único</h3>
<p>Difluorometano (CH₂F₂) — constitui metade da molécula R-410A. Como refrigerante puro independente:</p>
<ul>
<li><strong>GWP 675</strong> — abaixo do limiar regulatório de 700, ODP zero</li>
<li><strong>Capacidade de resfriamento +10%</strong> e <strong>eficiência +7%</strong> vs. R-410A</li>
<li><strong>Carga até 40% menor</strong> para mesma capacidade térmica</li>
<li><strong>Glide = 0K</strong> — fluido puro, ebulição/condensação a temperatura constante</li>
<li>Pode ser carregado em <strong>líquida ou vapor</strong> sem fracionamento</li>
<li><strong>Temperatura de descarga mais alta</strong> — pode necessitar injeção de líquido em condições extremas</li>
</ul>

<h3>R-454B: A Alternativa Zeotrópica (Opteon™ XL41)</h3>
<p>Mistura de <strong>68,9% R-32 + 31,1% R-1234yf</strong> (HFO ultra-baixo GWP):</p>
<ul>
<li><strong>GWP 466</strong> — redução de ~78% vs. R-410A</li>
<li>Capacidade térmica ~97% do R-410A — queda praticamente imperceptível</li>
<li>Temperaturas de descarga mais baixas que R-32 puro</li>
<li><strong>Glide = 1,0K a 1,3K (~2°F)</strong> — moléculas com pontos de ebulição diferentes</li>
<li>🚨 <strong>OBRIGATÓRIO carregar em fase LÍQUIDA exclusivamente</strong> — em estado bifásico, a fase vapor contém proporção desproporcional de R-32, causando <strong>fracionamento permanente e irreparável</strong></li>
</ul>

<h2>Parte II: Química de Lubrificação — Óleos Sintéticos</h2>
<h3>POE (Polyolester): A Vulnerabilidade da Hidrólise</h3>
<p>Lubrificante padrão para R-410A e maioria dos A2Ls. Alta polaridade = <strong>agressivamente higroscópico</strong> — absorve até <strong>2.500 ppm</strong> de água (100× mais que óleos minerais).</p>
<p>Quando POE absorve umidade, ocorre a reação de <strong>hidrólise</strong> — a reversão química do próprio processo de fabricação:</p>
<p><strong>Éster + Água ⇌ Ácido Carboxílico + Álcool</strong></p>
<p>O ácido carboxílico resultante destrói rigidez dielétrica do óleo, ataca metalurgia interna, causa <strong>corrosão fórmica</strong> (furos microscópicos na serpentina) e <strong>copper plating</strong> (deposição de cobre nos mancais do compressor → travamento mecânico catastrófico).</p>

<h3>PVE (Polyvinyl Ether): A Vantagem da Ligação Éter</h3>
<p>Adotado em mini-splits ductless e VRV/VRF. Absorve até <strong>6.500 ppm</strong> (260× mineral), mas possui ligações éter em vez de éster — <strong>risco zero de hidrólise</strong>. Nunca produzirá ácidos carboxílicos. Porém, umidade pode congelar nos orifícios de TXV/EEV → protocolos de desidratação continuam obrigatórios.</p>

<h2>Parte III: Protocolos Elite de Evacuação e Desidratação</h2>
<h3>A Física da Desidratação por Vácuo Profundo</h3>
<p>Bomba de vácuo reduz pressão interna → ponto de ebulição da água cai → umidade ferve e vaporiza à temperatura ambiente. Padrão: alcançar <strong>500 mícrons</strong> (0,019 PSIA), onde água ferve a <strong>-12°F</strong>.</p>

<h3>A Armadilha da Sublimação</h3>
<p>Vácuo rápido demais → evaporação rouba calor latente → água restante <strong>congela em gelo sólido</strong> dentro da tubulação. Gelo sublima lentamente → leitura <em>falsa</em> de 500µ enquanto cristais permanecem. Na partida, refrigerante quente derrete o gelo → hidrólise imediata.</p>
<p><strong>Solução:</strong> Protocolo de <strong>Tripla Evacuação</strong> com sweeps de Nitrogênio Seco Livre de Oxigênio (OFDN) entre evacuações.</p>

<h2>Parte IV: Arquitetura de Segurança Ativa A2L</h2>
<h3>Classificação ASHRAE Standard 34</h3>
<p><strong>"A"</strong> = Baixa Toxicidade | <strong>"2L"</strong> = Flamabilidade Inferior (velocidade de queima <10 cm/s, alta energia mínima de ignição). Difíceis de inflamar, mas acúmulo em espaço confinado atingindo o <strong>LFL (Lower Flammability Limit)</strong> = perigo real.</p>

<h3>Sistemas de Detecção de Refrigerante (RDS)</h3>
<p>UL 60335-2-40 mandatado por código. RDS monitora continuamente e aciona mitigação a 20-25% do LFL. Duas tecnologias: <strong>NDIR</strong> (infravermelho, preciso, estável, caro) e <strong>MOS</strong> (semicondutor, barato, propenso a drift e falsos positivos).</p>

<h3>Lógica de Mitigação em 4 Passos (Automática, 30 segundos)</h3>
<ol>
<li><strong>Desenergiza compressor</strong> — isola o vazamento cortando entrega de refrigerante à serpentina interna</li>
<li><strong>Blower indoor na velocidade máxima</strong> — extrai e dilui refrigerante vazado por todo o sistema de dutos</li>
<li><strong>Desliga resistências elétricas/combustão</strong> — elimina fontes de ignição auxiliares</li>
<li><strong>Abre todos os dampers de zona</strong> — maximiza expansão volumétrica do gás disperso</li>
</ol>
<p>Sequência inalterável — técnicos <strong>não podem bypassar</strong>. Se RDS falhar ou for desconectado → <strong>lockout permanente</strong>.</p>

<h2>Parte V: Ferramentas Especializadas A2L</h2>
<h3>Cilindros com Rosca Reversa (Left-Hand Thread)</h3>
<p>Todos os cilindros A2L usam <strong>roscas esquerdas</strong> — barreira física que impede conexão acidental de equipamento A1 spark-producing. Identificação visual: <strong>bandas vermelhas</strong> no domo, válvulas de alívio resettáveis em vez de discos de ruptura.</p>

<h3>Equipamento Spark-Proof Obrigatório</h3>
<p>Bombas de vácuo, máquinas de recuperação e detectores eletrônicos devem ser redesenhados com motores <strong>DC brushless</strong> (zero sparking), relés hermeticamente selados e chaves solid-state. Manifolds devem ter firmware com curvas PT específicas para R-32/R-454B.</p>

<h2>Parte VI: Conformidade Regulatória Global</h2>
<h3>EPA Section 608 (EUA)</h3>
<ul>
<li><strong>Proibição absoluta de ventilação</strong> de A2Ls — recuperar para cilindros DOT-approved</li>
<li>Limites de vazamento: IPR 30%, Comercial 20%, <strong>Conforto-Resfriamento apenas 10%</strong></li>
<li>Certificação Section 608 obrigatória para compra, instalação ou manuseio</li>
</ul>
<h3>Diretivas Internacionais</h3>
<ul>
<li><strong>UE (F-Gas EU 2024/573):</strong> Ban em splits GWP >750 até Jan/2029. Ban >150 GWP em splits >12kW até Jan/2033</li>
<li><strong>Austrália (ARC):</strong> Licenciamento individual obrigatório para A2/A2L. Destruição total mandatória</li>
<li><strong>EUA (IMC/IBC 2024):</strong> Linhas A2L penetrando ≥2 pavimentos devem ser encasadas em shaft ventilado e fire-rated</li>
</ul>
          `,
          tabelas_html: `
<h2>Comparativo de Refrigerantes: R-410A vs. R-32 vs. R-454B</h2>
<table>
<thead>
<tr><th>Propriedade</th><th>R-410A (Legado)</th><th>R-32</th><th>R-454B</th></tr>
</thead>
<tbody>
<tr><td><strong>Tipo</strong></td><td>Quase-Azeotrópico</td><td>Fluido Puro</td><td>Mistura Zeotrópica</td></tr>
<tr><td><strong>Classe de Segurança</strong></td><td>A1 (Não-Inflamável)</td><td>A2L (Lev. Inflamável)</td><td>A2L (Lev. Inflamável)</td></tr>
<tr><td><strong>GWP Direto</strong></td><td style="color:#ef4444;font-weight:bold">2.088</td><td style="color:#f59e0b;font-weight:bold">675</td><td style="color:#22c55e;font-weight:bold">466</td></tr>
<tr><td><strong>P. Sucção a 40°F (PSIG)</strong></td><td>118</td><td>121</td><td>107</td></tr>
<tr><td><strong>P. Condensação a 120°F (PSIG)</strong></td><td>418</td><td>429</td><td>384</td></tr>
<tr><td><strong>Glide de Temperatura</strong></td><td>~0,1K (Near-Azeotropic)</td><td><strong>0K</strong> (None)</td><td>1,0K – 1,3K (~2°F)</td></tr>
<tr><td><strong>Carga Líquida Obrigatória?</strong></td><td>Não (líq. ou vapor)</td><td>Não (líq. ou vapor)</td><td style="color:#ef4444;font-weight:bold">SIM — Somente Líquida</td></tr>
</tbody>
</table>

<h3>Classificação de Lubrificantes HVAC</h3>
<table>
<thead>
<tr><th>Lubrificante</th><th>Base Química</th><th>Risco Hidrólise</th><th>Absorção Máx. (PPM)</th><th>Aplicação</th></tr>
</thead>
<tbody>
<tr><td><strong>Óleo Mineral</strong></td><td>Naftênico/Parafínico</td><td>Nenhum</td><td>25</td><td>CFC/HCFC legados (R-12, R-22)</td></tr>
<tr><td><strong>Alkylbenzene (AB)</strong></td><td>Hidrocarboneto Sintético</td><td>Nenhum</td><td>Baixo</td><td>HCFC baixa temp., mistura c/ mineral</td></tr>
<tr><td><strong>Polyolester (POE)</strong></td><td>Éster Sintético</td><td style="color:#ef4444;font-weight:bold">ALTO (Produz Ácidos)</td><td>2.500</td><td>HFC (R-410A) e A2L modernos (R-32, R-454B)</td></tr>
<tr><td><strong>Polyvinyl Ether (PVE)</strong></td><td>Éter Sintético</td><td style="color:#22c55e;font-weight:bold">Nenhum (Estável)</td><td>6.500</td><td>VRV/VRF, Mini-Splits Ductless</td></tr>
<tr><td><strong>PAG</strong></td><td>Glicol Sintético</td><td>Nenhum</td><td>10.000</td><td>Automotivo R-134a e R-1234yf</td></tr>
</tbody>
</table>

<h3>Protocolo de Tripla Evacuação (6 Fases)</h3>
<table>
<thead>
<tr><th>Fase</th><th>Ação</th><th>Dwell Time</th><th>Propósito Físico</th></tr>
</thead>
<tbody>
<tr><td><strong>1. Drawdown Inicial</strong></td><td>Evacuar a 1.000µ</td><td>N/A</td><td>Remove ar atmosférico, inicia vaporização de umidade superficial</td></tr>
<tr><td><strong>2. 1º Sweep N₂</strong></td><td>Quebrar vácuo c/ OFDN a 3-5 PSIG</td><td>5-10 min</td><td>N₂ seco mistura com vapor d'água residual; aquece gelo localizado</td></tr>
<tr><td><strong>3. 2º Drawdown</strong></td><td>Evacuar a 500µ</td><td>N/A</td><td>Extrai mistura N₂/vapor, penetra sumps de óleo</td></tr>
<tr><td><strong>4. 2º Sweep N₂</strong></td><td>Quebrar vácuo c/ OFDN a 3-5 PSIG</td><td>5-10 min</td><td>Fratura bolsões de umidade residual agarrados ao POE</td></tr>
<tr><td><strong>5. Evacuação Final</strong></td><td>Evacuar a 200-300µ (terminal)</td><td>N/A</td><td>Vácuo profundo definitivo — desidratação absoluta</td></tr>
<tr><td><strong>6. Decay Test</strong></td><td>Isolar bomba, monitorar micron gauge</td><td>≥10 min</td><td>Certificação: pressão NÃO sobe >500µ. Subida rápida = vazamento. Subida lenta >500 = umidade</td></tr>
</tbody>
</table>

<h3>Equipamento A2L: Legado vs. Moderno</h3>
<table>
<thead>
<tr><th>Equipamento</th><th>Legado A1</th><th>Moderno A2L</th><th>Segurança Crítica</th></tr>
</thead>
<tbody>
<tr><td><strong>Cilindros de Recuperação</strong></td><td>Rosca Direita, Disco de Ruptura, Cinza/Rosa</td><td>Rosca Esquerda, Válvula de Alívio, Faixa Vermelha</td><td>Impede conexão de equipamento spark-producing</td></tr>
<tr><td><strong>Bombas de Vácuo</strong></td><td>AC escovado, chaves mecânicas</td><td>DC brushless, solid-state, spark-proof</td><td>Elimina arco de comutador como fonte de ignição</td></tr>
<tr><td><strong>Máquinas de Recuperação</strong></td><td>Relés padrão, cutoffs mecânicos</td><td>Wiring intrinsecamente seguro, certificação A2L</td><td>Processa vapores inflamáveis sem ignição</td></tr>
<tr><td><strong>Manifold Gauges</strong></td><td>PT charts R-410A, dials analógicos</td><td>Firmware digital R-32/R-454B</td><td>Conversões PT precisas para carga correta</td></tr>
</tbody>
</table>

<h3>Quadro Regulatório Global: Prazos de Phasedown</h3>
<table>
<thead>
<tr><th>Jurisdição</th><th>Regulamento</th><th>Mandato-Chave</th><th>Prazo</th></tr>
</thead>
<tbody>
<tr><td><strong>EUA</strong></td><td>EPA AIM Act / Section 608</td><td>GWP < 700 para novos equipamentos</td><td>Jan 2025</td></tr>
<tr><td><strong>UE</strong></td><td>F-Gas (EU 2024/573)</td><td>Ban splits GWP >750</td><td>Jan 2029</td></tr>
<tr><td><strong>UE</strong></td><td>F-Gas (EU 2024/573)</td><td>Ban splits >12kW com GWP >150</td><td style="color:#ef4444">Jan 2033</td></tr>
<tr><td><strong>Austrália</strong></td><td>ARC Licensing</td><td>Licenciamento individual para A2/A2L</td><td>Em vigor</td></tr>
<tr><td><strong>EUA (Codes)</strong></td><td>IMC/IBC 2024</td><td>Linhas A2L ≥2 pavimentos em shaft fire-rated</td><td>Em adoção</td></tr>
</tbody>
</table>
          `,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 01-03</h2>

<div class="infobox-warning">
<h3>🚨 R-454B: Carga SOMENTE em Fase Líquida!</h3>
<p>O R-454B é uma mistura zeotrópica. Se carregado pela fase vapor do cilindro, a fase gasosa escapará com proporção <strong>desproporcionalmente alta de R-32</strong> (mais volátil), alterando permanente e irreparavelmente a composição química do refrigerante no sistema e no cilindro remanescente.</p>
<p><strong>Resultado:</strong> Fracionamento → pressões operacionais erráticas, eficiência destruída, diagnósticos inválidos, necessidade de recuperação total e recarga com produto virgem.</p>
<p><strong>Protocolo:</strong> Sempre inverter o cilindro R-454B ou utilizar tubo pescador (dip tube) para garantir remoção 100% líquida. R-32, por ser puro, aceita carga em ambas as fases.</p>
</div>

<div class="infobox-warning">
<h3>🚨 A Cascata Destrutiva do POE: Umidade → Ácido → Morte do Compressor</h3>
<p>A cadeia de falha é inevitável e irreversível uma vez iniciada:</p>
<ol>
<li>Umidade entra no sistema (evacuação insuficiente, tubo aberto, óleo mal armazenado)</li>
<li>POE higroscópico absorve água → <strong>hidrólise</strong> (Éster + H₂O → Ácido Carboxílico + Álcool)</li>
<li>Ácido destrói rigidez dielétrica → curto nos enrolamentos do motor</li>
<li>Ácido dissolve íons de cobre da tubulação → <strong>copper plating</strong> nos mancais do compressor</li>
<li>Folga dos mancais → zero → <strong>travamento mecânico catastrófico</strong></li>
</ol>
<p><strong>Se ácido for detectado:</strong> NÃO basta trocar o óleo. Substituir integralmente filtros secadores, acumuladores e strainers — óxidos e aditivos clumped ocluirão dispositivos de medição.</p>
</div>

<div class="infobox-warning">
<h3>🚨 A Armadilha da Sublimação — Gelo Invisível na Evacuação</h3>
<p>Se a bomba puxa vácuo rápido demais (especialmente em clima frio), a evaporação rápida rouba calor latente das gotas de água restantes → <strong>congelamento instantâneo</strong> em cristais de gelo microscópicos dentro da tubulação.</p>
<p>Gelo sublima muito lentamente → leitura <em>falsa</em> de 500µ enquanto gelo permanece preso. Na partida, refrigerante quente derrete o gelo → água bruta mistura com POE → <strong>hidrólise imediata</strong>.</p>
<p><strong>Solução:</strong> Tripla Evacuação com sweeps de N₂ seco entre fases. O nitrogênio pressurizado aquece gelo de volta a líquido e mistura com vapor d'água via pressões parciais.</p>
</div>

<div class="infobox-warning">
<h3>🚨 RDS: Bypass = Lockout Permanente</h3>
<p>O sistema de detecção de refrigerante (RDS) é mandatado por UL 60335-2-40. Técnicos <strong>não podem bypassar</strong> a placa de mitigação A2L. Se o sensor RDS falhar ou for desconectado, o sistema entra em <strong>lockout permanente</strong> até que um substituto certificado seja instalado.</p>
<p>A sequência de mitigação (desliga compressor → blower max → desliga resistências → abre dampers) executa em <strong>30 segundos</strong> e é inalterável pelo técnico.</p>
</div>

<div class="infobox-tip">
<h3>🔍 Identificação Visual Rápida de Cilindros A2L</h3>
<ul>
<li><strong>Cilindro A1 (R-410A, R-22):</strong> Rosca direita (righty-tighty), cor cinza/rosa, disco de ruptura descartável</li>
<li><strong>Cilindro A2L (R-32, R-454B):</strong> <strong>Rosca esquerda</strong> (lefty-tighty!), <strong>faixa vermelha</strong> proeminente no domo, válvula de alívio resettável</li>
<li>Se a mangueira padrão "não encaixa" → provavelmente cilindro A2L → usar adaptador reverse-thread (1/4" LH, 1/2" ACME LH, ou 5/16" LH)</li>
</ul>
</div>

<div class="infobox-tip">
<h3>📐 Standing Pressure Test — Pré-Evacuação</h3>
<p>Antes de qualquer evacuação, verificar integridade sistêmica com nitrogênio seco:</p>
<ul>
<li><strong>R-32 (protocolo Daikin):</strong> Pressurizar com N₂ a <strong>450 PSIG</strong>, manter por mínimo <strong>15 minutos</strong></li>
<li><strong>R-454B (protocolo Trane):</strong> Pressurizar a <strong>150-250 PSIG</strong>, utilizar detectores eletrônicos calibrados para A2L + teste de bolhas nas flares</li>
</ul>
<p>Queda de pressão durante o hold period = vazamento. Localizar e reparar <strong>antes</strong> de evacuar.</p>
</div>

<div class="infobox-tip">
<h3>📋 Limites de Vazamento EPA Section 608 (Atualizados)</h3>
<table>
<thead><tr><th>Categoria</th><th>Limite Anterior</th><th>Limite Atual</th></tr></thead>
<tbody>
<tr><td>Industrial Process Refrigeration (IPR)</td><td>35%</td><td style="font-weight:bold">30%</td></tr>
<tr><td>Refrigeração Comercial</td><td>—</td><td style="font-weight:bold">20%</td></tr>
<tr><td>Conforto-Resfriamento (Comfort Cooling)</td><td>15%</td><td style="color:#ef4444;font-weight:bold">10%</td></tr>
</tbody>
</table>
<p>Se o limiar for ultrapassado em sistemas com ≥50 lbs de refrigerante, é <strong>obrigação legal</strong> localizar, verificar e selar o vazamento dentro dos prazos regulatórios, ou enfrentar decomissionamento mandatório.</p>
</div>
          `,
        },
        {
          id: "01-04",
          titulo: "Por que 500 mícrons salvam o compressor",
          modulo: "MÓDULO 01 - 04",
          videos: [
            {
              titulo:
                "Por que 500 mícrons salvam o compressor - MÓDULO 01 - 04",
              link: "https://youtu.be/GCV_GrRBTac",
              tipo: "videoaula",
            },
            {
              titulo: "O Padrão de Elite em HVAC R - MÓDULO 01 - 04",
              link: "https://youtu.be/CSy4sDQy4Wk",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-01/Module01-04-Elite HVAC_ Digital Tools, Safety, Conduct.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/GCV_GrRBTac",
          link_podcast: "https://youtu.be/CSy4sDQy4Wk",
          total_slides: 15,
          fontes_imagens: Array.from({ length: 20 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo01/modulo01-04/Module01-04-Elite HVAC_ Digital Tools, Safety, Conduct-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>A Transição para a Engenharia Termodinâmica de Precisão</h2>
<p><strong>A refrigeração profissional moderna não tolera mais "regras de bolso" ou adivinhações analógicas.</strong></p>
<p>A transição de sistemas eletromecânicos tradicionais para sistemas inverter complexos com microcanais de alta eficiência reduziu severamente as margens de erro aceitáveis no campo. Procedimentos Operacionais Padrão (SOPs) bem estruturados atuam como a engrenagem que garante consistência e repetibilidade na execução técnica.</p>

<h2>1. A Obsolescência da Instrumentação Analógica</h2>
<p>O manifold analógico com tubo de Bourdon é uma ferramenta obsoleta para o comissionamento de sistemas modernos por três motivos fundamentais:</p>
<ul>
  <li><strong>Deriva da Referência Atmosférica:</strong> O referencial de pressão zero flutua com a pressão barométrica local, impedindo medições repetíveis.</li>
  <li><strong>Erros de Resolução e Paralaxe:</strong> A agulha analógica cobre uma escala de pressão gigante (de 30 polegadas de mercúrio de vácuo até mais de 800 PSI) em uma circunferência metálica de poucas polegadas. A espessura do ponteiro cobre vários PSI, e o erro de paralaxe altera a leitura visual dependendo do ângulo de visão do técnico.</li>
  <li><strong>Ausência de Cálculos Automatizados:</strong> Exige a conversão manual via tabela P-T e clamps tipo K menos precisos, elevando a probabilidade de falhas de cálculo.</li>
</ul>

<h2>1.2 O Vazamento Fantasma (Phantom Leak)</h2>
<p>Toda conexão de um manifold de 1/4" convencional purga refrigerante (aproximadamente 0,28 oz de refrigerante líquido por pé em cada mangueira de 1/4"). Manutenções preventivas semestrais ao longo de 7 anos removem refrigerante suficiente para simular um vazamento real, o que é catastrófico em serpentinas microcanal de baixo volume.</p>
<p><strong>Protocolo de Elite:</strong> Sistemas operando normalmente devem ser avaliados via medição não-invasiva de fluxo de ar e Delta T. Se medições de pressão forem estritamente necessárias, devem ser obtidas por meio de sondas sem fio de acoplamento direto.</p>

<h2>2. A Regra dos 500 Mícrons e a Física da Ebulição</h2>
<p>Para desidratar o circuito, a umidade residual deve ferver e se transformar em vapor seco para ser extraída pela bomba de vácuo. Conforme a pressão absoluta cai, a temperatura de ebulição da água cai proporcionalmente:</p>
<ul>
  <li>Ao nível do mar (760.000 mícrons), a água ferve a 212°F (100°C).</li>
  <li>A 1.000 mícrons, a água ferve a 1°F (-17,2°C). Em climas frios, a água congela em gelo, que sublima de forma extremamente lenta, produzindo vácuo falso.</li>
  <li>A 500 mícrons, a água ferve a -12°F (-24,4°C), garantindo a vaporização e remoção rápida de toda a umidade do circuito.</li>
</ul>

<h2>3. A Química Destrutiva do POE e a Hidrólise</h2>
<p>Os lubrificantes sintéticos Polyolester (POE) são polares e higroscópicos, retendo até 2.500 ppm de umidade. Quando exposto à umidade residual sob a alta temperatura da descarga do compressor, o óleo POE sofre <strong>hidrólise</strong>, quebrando suas ligações éster e convertendo-se em álcool e ácido carboxílico (ácido acético):</p>
<p style="text-align: center; font-weight: bold; margin: 20px 0;">Éster (POE) + Água ⇌ Ácido Carboxílico + Álcool</p>
<p>O ácido acético ataca as paredes de cobre, causando <strong>corrosão fórmica</strong> (micro-túneis invisíveis nas serpentinas) e <strong>copper plating</strong> (deposição de cobre nos mancais de aço do compressor, reduzindo a folga a zero). Também consome o verniz dielétrico dos enrolamentos do estator, provocando curtos e queima do compressor (burnout).</p>

<h2>4. Gases Não-Condensáveis (NCGs) e Perda de Eficiência</h2>
<p>Pela Lei de Dalton, gases como nitrogênio e oxigênio não condensam e se acumulam no topo do condensador, isolando a serpentina e elevando a pressão de descarga. Estudos da ACEEE comprovam que apenas 0,3% de nitrogênio na carga (0,3 oz em um sistema de 102 oz) reduz o EER/SEER em 13% e aumenta o consumo do compressor em 6%. Em locais úmidos, a perda de capacidade latente impede a desumidificação adequada do espaço.</p>
          `,
          tabelas_html: `
<h2>NFPA 70E: Categorias de EPI para Risco de Arco Elétrico</h2>
<p>Painéis energizados de 380V/480V trifásicos expõem os técnicos a riscos severos de arco elétrico (arc flash). A tabela abaixo estabelece as categorias de proteção térmica necessárias:</p>
<table>
  <thead>
    <tr>
      <th>Categoria</th>
      <th>Classificação Mínima</th>
      <th>Energia Incidente</th>
      <th>EPIs e Garmentos Obrigatórios</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Categoria 1</strong></td>
      <td>4 cal/cm²</td>
      <td>1,2 a 4 cal/cm²</td>
      <td>Camisa/calça AR ou macacão AR de camada única, protetor facial AR com balaclava AR (ou capuz integral), luvas isolantes de borracha com protetor de couro, óculos de segurança, capacete classe B, botas de couro.</td>
    </tr>
    <tr>
      <td><strong>Categoria 2</strong></td>
      <td>8 cal/cm²</td>
      <td>4 a 8 cal/cm²</td>
      <td>Camisa/calça AR (ou macacão AR), protetor facial AR com balaclava AR (ou capuz integral), luvas isolantes de borracha com protetor de couro, óculos de segurança, capacete classe B, proteção auditiva, botas de couro.</td>
    </tr>
    <tr>
      <td><strong>Categoria 3</strong></td>
      <td>25 cal/cm²</td>
      <td>8 a 25 cal/cm²</td>
      <td>Roupa de arco (arc flash suit) jaqueta + calça AR (ou macacão AR), capuz de proteção AR integral cobrindo toda a cabeça (protetor facial simples não é permitido), luvas isolantes de borracha com protetor de couro, capacete classe B, proteção auditiva, botas de couro.</td>
    </tr>
    <tr>
      <td><strong>Categoria 4</strong></td>
      <td>40 cal/cm²</td>
      <td>25 a 40 cal/cm²</td>
      <td>Jaqueta e calça de proteção (arc flash suit) rated para no mínimo 40 cal/cm², capuz de proteção AR integral, luvas isolantes de borracha com protetor de couro, óculos de segurança, capacete classe B, proteção auditiva, botas de couro.</td>
    </tr>
  </tbody>
</table>

<h3>A física das mangueiras de evacuação e bottlenecks</h3>
<table>
  <thead>
    <tr>
      <th>Diâmetro da Conexão</th>
      <th>Vazão Relativa</th>
      <th>Tempo de Evacuação Est. (10 TR)</th>
      <th>Bottleneck Comum</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Mangueira de 1/4" com Schrader</strong></td>
      <td>1x (Referência)</td>
      <td>~40 minutos</td>
      <td>Miolo de válvula Schrader obstrui fluxo total</td>
    </tr>
    <tr>
      <td><strong>Mangueira de 1/2" com VCRT</strong></td>
      <td>16x superior</td>
      <td>~3 minutos</td>
      <td>Remoção de Schrader abre fluxo de diâmetro total</td>
    </tr>
  </tbody>
</table>
          `,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 01-04</h2>

<div class="infobox-warning">
  <h3>🚨 A Armadilha da Sublimação (Vácuo Falso em Regiões Frias)</h3>
  <p>Puxar vácuo rápido demais ou em climas frios faz a água congelar em cristais de gelo, que sublimam de forma extremamente lenta. O vacuômetro pode indicar 500 mícrons de forma errônea. No startup, o calor derrete o gelo e a água contamina o óleo POE. <strong>Sempre utilize o método de Tripla Evacuação com varreduras de Nitrogênio (N₂)</strong> para aquecer o sistema e absorver a umidade residual.</p>
</div>

<div class="infobox-warning">
  <h3>🚨 LOTO Digital Obrigatório</h3>
  <p>Normas OSHA 29 CFR 1910.147 de Lockout/Tagout salvam lives. Nunca inicie reparos sem executar as 6 etapas estruturadas de desenergização e dissipação de energias acumuladas. No padrão de elite, a ordem de serviço só é destravada no CMMS (OxMaint) após envio de foto-verificação do bloqueio físico no disjuntor/válvula.</p>
</div>

<div class="infobox-warning">
  <h3>🚨 Degasagem do Óleo POE</h3>
  <p>Evacuar o sistema abaixo de 100 mícrons inicia o processo de ebulição (degas) das frações leves do próprio óleo POE, alterando sua composição química e degradando permanentemente a viscosidade do lubrificante. <strong>Mantenha a meta de isolamento terminal entre 200 e 500 mícrons.</strong></p>
</div>

<div class="infobox-tip">
  <h3>👋 Setup de Alta Condutância (Bypass do Manifold)</h3>
  <p>Nunca tente puxar vácuo profundo através do manifold de diagnóstico. Conecte mangueiras de 1/2" diretamente da bomba para as VCRTs instaladas nos ports de serviço de alta e baixa do sistema, removendo previamente os miolos Schrader. Conecte o vacuômetro digital no port lateral da VCRT da sucção, longe da bomba, para medir o equilíbrio real de todo o sistema.</p>
</div>
          `,
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // MÓDULO 02 - Planejamento e Infraestrutura
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 2,
      titulo: "MÓDULO 02 — Planejamento e Infraestrutura",
      descricao:
        "A engenharia por trás do posicionamento perfeito. Carga térmica, drenagem e dimensionamento.",
      icone: "ruler",
      cor: "blue",
      aulas: [
        {
          id: "02-01",
          titulo: "A física invisível do ar condicionado",
          modulo: "MÓDULO 02 - 01",
          videos: [
            {
              titulo:
                "A física invisível do ar condicionado - MÓDULO 02 - 01",
              link: "https://youtu.be/IN2WxdIdtNs",
              tipo: "videoaula",
            },
            {
              titulo: "Masterclass Térmica - MÓDULO 02 - 01",
              link: "https://youtu.be/f62rtWwcdRA",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-02/Module02-01-Precision HVAC Load Sizing Masterclass.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/IN2WxdIdtNs",
          link_podcast: "https://youtu.be/f62rtWwcdRA",
          total_slides: 13,
          fontes_imagens: Array.from({ length: 20 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo02/modulo02-01/Module02-01-Precision HVAC Load Sizing Masterclass-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>A Desconstrução da "Regra de Bolso"</h2>
<p><strong>A climatização profissional moderna exige dimensionamento baseado em física aplicada, não em tabelas de áreas simplistas.</strong></p>
<p>Por décadas, o dimensionamento de sistemas de refrigeração e climatização foi refém de estimativas informais que determinavam a capacidade do equipamento multiplicando a área útil do piso por coeficientes estáticos. Esse modelo de estimativa empírica desconsidera a inércia térmica dos materiais construtivos, a orientação geográfica e o ganho térmico dos ocupantes e equipamentos modernos, induzindo ao erro sistemático.</p>

<h2>1. A Patologia do Superdimensionamento</h2>
<p>Instalar uma máquina de capacidade excessiva para o espaço não acelera o resfriamento nem melhora a estabilidade térmica. Ao contrário, gera uma falha dinâmica conhecida como <strong>short-cycling</strong> (ciclos de operação curtos), operando em liga/desliga constante de 3 a 5 minutos. Isto acarreta:</p>
<ul>
  <li><strong>Sobrecarga Mecânica e Elétrica:</strong> Durante a partida de um compressor de velocidade fixa, a corrente elétrica atinge a marca LRA (corrente de rotor travado), demandando de 6 a 10 vezes a corrente de trabalho normal. Um compressor em short-cycling pode registrar de 30 a 50 partidas diárias (em comparação a 6 ou 8 em um dimensionamento correto), o que eleva a fadiga dos enrolamentos do estator e acelera a quebra dos contatores e capacitores.</li>
  <li><strong>Flashing de Óleo e Perda de Lubrificação:</strong> Na partida, a despressurização instantânea na linha de sucção causa a ebulição violenta (flashing) do refrigerante líquido misturado ao óleo, arremessando lubrificante para a tubulação. Como o ciclo de operação é muito curto, o compressor desliga antes que o refrigerante atinja velocidade de arraste estável para trazer o óleo de volta ao cárter. O compressor trabalha sem lubrificação, abrindo margem para travamento mecânico.</li>
</ul>

<h2>1.2 A Umidade e a Sensação de "Frio e Úmido"</h2>
<p>A remoção de umidade (carga latente) ocorre por condensação do vapor nas aletas frias do evaporador. Esta serpentina precisa permanecer abaixo do ponto de orvalho por um período prolongado para coletar e drenar a umidade do ar. Se o compressor desliga precocemente devido ao excesso de capacidade sensível, a umidade relativa do ambiente permanecerá acima de 60%, causando desconforto térmico, odores desagradáveis e proliferação de agentes patológicos como fungos e bolor.</p>

<h2>2. Evolução Normativa: Manual J e ISO 52016-1</h2>
<p>Para erradicar o superdimensionamento bias-driven, a engenharia de refrigeração estabeleceu padrões técnicos de relevância internacional:</p>
<ul>
  <li><strong>ACCA Manual J (8ª Edição):</strong> O padrão norte-americano realiza um cálculo minucioso de cargas de aquecimento e resfriamento, avaliando as propriedades de condutância e insolação cômodo por cômodo sob piores condições ambientais de pico.</li>
  <li><strong>EN ISO 52016-1:</strong> O padrão europeu de simulação dinâmica calcula o balanço térmico sensível e latente da edificação hora a hora ao longo das 8.760 horas do ano, modelando o comportamento das zonas térmicas de forma realista.</li>
</ul>

<h2>3. Elementos do Envelope Térmico e Radiação</h2>
<p>O Arquiteto Térmico calcula o ganho de calor do envelope baseado em equações de transferência de calor por condução e radiação:</p>
<ul>
  <li><strong>Condução Térmica:</strong> Calculada pela fórmula $Q_c = U \times A \times \\text{TD}$, onde $U$ é a transmitância térmica da parede/teto e $A$ a área de exposição.</li>
  <li><strong>Ganho Solar por Vidros (Fenestração):</strong> O Coeficiente de Ganho de Calor Solar (SHGC) determina a radiação solar transmitida. A orientação cardinal (azimuth) deve ser especificada com exatidão no software, pois janelas voltadas para o Oeste recebem a irradiância térmica máxima no período crítico da tarde.</li>
  <li><strong>Infiltração de Ar:</strong> A taxa de infiltração deve basear-se em dados de testes físicos de estanqueidade de portas (Blower Door) e não em estimativas aleatórias, evitando superestimar a carga latente no cálculo.</li>
</ul>
          `,
          tabelas_html: `
<h2>ASHRAE e NFPA: Parâmetros de Carga Interna e Segurança</h2>
<p>Os ganhos de calor internos (Internal Heat Gains) provenientes de ocupantes e equipamentos elétricos representam cargas térmicas significativas que devem ser mapeadas de forma rigorosa:</p>
<table>
  <thead>
    <tr>
      <th>Fonte de Calor</th>
      <th>Componente Sensível</th>
      <th>Componente Latente</th>
      <th>Padrão Normativo / Referência</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Ocupante (Escritório / Sentado)</strong></td>
      <td>245 BTU/h (72W)</td>
      <td>155 BTU/h (45W)</td>
      <td>ASHRAE Fundamentals - Tabela 8.18</td>
    </tr>
    <tr>
      <td><strong>Ocupante (Fábrica / Trabalho Pesado)</strong></td>
      <td>580 BTU/h (170W)</td>
      <td>870 BTU/h (255W)</td>
      <td>ASHRAE Fundamentals - Tabela 8.18</td>
    </tr>
    <tr>
      <td><strong>Computador / Estação CAD (100W)</strong></td>
      <td>341 BTU/h (100W)</td>
      <td>0 BTU/h (Sensível Puro)</td>
      <td>Conversão Física: 1W = 3,412 BTU/h</td>
    </tr>
    <tr>
      <td><strong>Servidor de Rack Comercial (750W)</strong></td>
      <td>2.559 BTU/h (750W)</td>
      <td>0 BTU/h (Sensível Puro)</td>
      <td>Conversão Física: 1W = 3,412 BTU/h</td>
    </tr>
    <tr>
      <td><strong>Densidade de Sala de Computadores</strong></td>
      <td>&gt; 20 W/ft² (215 W/m²)</td>
      <td>Requer resfriamento de precisão (CRAC)</td>
      <td>ASHRAE 90.1-2019 (Threshold)</td>
    </tr>
  </tbody>
</table>

<h3>A Desvalorização da Capacidade Nominal (Manual S)</h3>
<p>A tabela abaixo exemplifica como a capacidade real de resfriamento sofre desvios em relação à capacidade comercial nominal devido às condições ambientais reais de campo:</p>
<table>
  <thead>
    <tr>
      <th>Parâmetro de Teste</th>
      <th>Condição Padrão AHRI (Nominal)</th>
      <th>Condição de Projeto Real (Campo)</th>
      <th>Efeito Termodinâmico</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Temperatura Interna (DB)</strong></td>
      <td>80°F (26,7°C)</td>
      <td>75°F (23,9°C)</td>
      <td>Redução na capacidade de extração de calor sensível pelo evaporador</td>
    </tr>
    <tr>
      <td><strong>Umidade Relativa Interna</strong></td>
      <td>50% (Saturação a 67°F WB)</td>
      <td>50% (Saturação a 62,5°F WB)</td>
      <td>Menor volume de umidade disponível para troca latente inicial</td>
    </tr>
    <tr>
      <td><strong>Temperatura Externa (DB)</strong></td>
      <td>95°F (35,0°C)</td>
      <td>105°F (40,5°C) (Climas Quentes)</td>
      <td>Elevação na pressão de descarga, reduzindo a eficiência do condensador</td>
    </tr>
  </tbody>
</table>
          `,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 02-01</h2>

<div class="infobox-warning">
  <h3>🚨 O Erro Fatal do Manual S</h3>
  <p>Nunca selecione um equipamento baseado apenas no bloco de carga total do Manual J. Um sistema pode ter capacidade total de 36.000 BTU/h, mas se o seu evaporador fornecer apenas 24.000 BTU/h de resfriamento sensível e a sua edificação exigir 26.000 BTU/h sensíveis, o sistema operará de forma contínua e falhará em satisfazer a temperatura de projeto do termostato. <strong>Sempre cruze a carga sensível e latente calculadas com as tabelas de desempenho expandido dos fabricantes.</strong></p>
</div>

<div class="infobox-warning">
  <h3>🚨 Curto-Circuito de Ar (Short-Circuiting) em Pé-Direito Duplo</h3>
  <p>A insuflação de ar quente por difusores de teto em ambientes com pé-direito elevado com baixa velocidade de fluxo cria curto-circuito térmico: o ar quente flutua diretamente para os retornos superiores sem se misturar com o ar frio do piso. O termostato, montado na zona baixa, detectará frio e manterá o sistema ligado ininterruptamente. Mantenha velocidades de sopro elevadas para romper o gradiente térmico ou instale ventiladores desestratificadores.</p>
</div>

<div class="infobox-tip">
  <h3>👋 Razão de Calor Sensível (SHR) em Centrais de Processamento de Dados</h3>
  <p>Salas com alta densidade de equipamentos eletrônicos (CPDs) possuem SHR muito próximo a 1.0, pois as máquinas eletrônicas dissipam apenas calor sensível seco. Utilizar sistemas de conforto padrão nesses ambientes causa desumidificação excessiva e desperdício de energia. Devem ser selecionados aparelhos de climatização de precisão (CRAC) projetados com alta vazão de ar por TR para tratar calor sensível seco puro.</p>
</div>
          `,
        },
        {
          id: "02-02",
          titulo: "Engenharia de precisão nas instalações de AVAC",
          modulo: "MÓDULO 02 - 02",
          videos: [
            {
              titulo:
                "Engenharia de precisão nas instalações de AVAC - MÓDULO 02 - 02",
              link: "https://youtu.be/uMYsE3rc7bw",
              tipo: "videoaula",
            },
            {
              titulo: "Estratégias de Elite HVAC - MÓDULO 02 - 02",
              link: "https://youtu.be/AS6771THshs",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-02/Module02-02-Elite HVAC Equipment Placement Training.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/uMYsE3rc7bw",
          link_podcast: "https://youtu.be/AS6771THshs",
          total_slides: 15,
          fontes_imagens: Array.from({ length: 20 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo02/modulo02-02/Module02-02-Elite HVAC Equipment Placement Training-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>A Engenharia por trás da Fixação Física de Equipamentos</h2>
<p><strong>A demarcação entre uma instalação de AVAC comum e uma obra-prima de engenharia térmica reside na precisão absoluta de sua fixação, posicionamento e desacoplamento físico.</strong></p>
<p>Em sistemas VRF/VRV de alta tonelagem, chillers industriais casco e tubos e fancoils de grande vazão, a tolerância para desvios de montagem aproxima-se de zero. O instalador de elite deve dominar três grandes pilares mecânicos: a física de circulação do ar e rejeição de calor, os mecanismos de desacoplamento vibratório/acústico e a mentalidade de acessibilidade para manutenção preventiva ao longo de todo o ciclo de vida do ativo.</p>

<h3>1. Aerodinâmica Aplicada a Condensadores: Leis de Conservação</h3>
<p>A física envolvida no fluxo de ar sobre as serpentinas de troca térmica externa baseia-se diretamente nas leis da mecânica dos fluidos:</p>
<ul>
  <li><strong>Equação da Continuidade (Conservação da Massa):</strong> A vazão mássica que entra em um canal deve ser igual à que sai ($V_1 \\times A_1 = V_2 \\times A_2$). Ao reduzir a área de captação (sucção) ou descarga de um condensador com barreiras físicas, a velocidade local do ar sobe artificialmente, aumentando as perdas de carga por atrito e estrangulando o volume total de ar (CFM) movimentado.</li>
  <li><strong>Teorema de Bernoulli (Conservação de Energia):</strong> A diferença de pressão estática entre dois pontos equivale às perdas de atrito da linha. Se a unidade externa for montada muito próxima de uma parede ou platibanda, o ventilador operará contra uma contrapressão elevada (dynamic head), consumindo mais potência elétrica para deslocar menos massa de ar.</li>
  <li><strong>Conservação do Momento Linear:</strong> A descarga quente de ar do ventilador tende a manter sua direção. Se o jato colidir contra barreiras muito próximas, seu momento de fluxo se rompe, gerando turbulência e um vórtice térmico de baixa pressão local que succiona o ar quente de volta para a serpentina. Esse fenômeno é conhecido como <strong>Curto-Circuito de Ar (Air Short-Circuiting)</strong>.</li>
</ul>

<h3>1.2 O Curto-Circuito Térmico e Desvios no Diagrama P-H</h3>
<p>O curto-circuito térmico destrói a eficiência termodinâmica da máquina. Em bancos de condensadoras VRF instaladas de forma compacta e sem distanciamento adequado, o ar de admissão do condensador sobe rapidamente de 95°F (35°C) para 115°F (46°C) ou mais. No diagrama Pressão-Entalpia (P-H), os desvios causados são graves:</p>
<ol>
  <li><strong>Elevação da Pressão de Condensação:</strong> A Temperatura de Saturação de Condensação (SCT) desloca-se verticalmente para cima no diagrama para que o condensador consiga rejeitar calor contra uma atmosfera local superaquecida.</li>
  <li><strong>Redução do Efeito Refrigerante Líquido:</strong> O refrigerante entra na válvula de expansão (TXV/EEV) em alta entalpia. Isso eleva a fração de gás instantâneo (flash gas) na expansão, restando menos líquido disponível na serpentina interna para realizar o resfriamento sensível do ar.</li>
  <li><strong>Aumento do Trabalho de Compressão:</strong> O compressor opera sob maior relação de pressões, gerando sobrecorrente (amperagem acima do limite normal do motor) e superaquecimento físico do motor. Sob temperaturas elevadas de descarga, o lubrificante POE/PVE perde viscosidade, carboniza os mancais e danifica as válvulas do compressor por desgaste mecânico prematuro.</li>
</ol>

<h3>2. Desacoplamento Estrutural e Controle Acústico</h3>
<p>O conforto acústico é um requisito crítico em edificações de alto padrão. O instalador profissional projeta o amortecimento mecânico para conter a propagação de duas categorias de ruído:</p>
<ul>
  <li><strong>Ruído Aéreo (Airborne):</strong> Propaga-se diretamente através do ar e das paredes metálicas de dutos. Sua atenuação exige dutos de seção circular (alta resistência a flexões que evitam a vibração das paredes do duto), baixas velocidades de fluxo e a divisão de ramos em bifurcações (reduzindo a potência acústica em <strong>3 dB</strong> por ramal).</li>
  <li><strong>Ruído Estrutural (Structure-borne):</strong> As vibrações mecânicas da máquina viajam pelas conexões rígidas (tubulações de cobre, suportes metálicos, lajes) sem atenuação significativa. Ao atingir superfícies de drywall, forros de gesso ou pisos rígidos, a estrutura atua como um diafragma de alto-falante, gerando zumbidos audíveis de baixa frequência (20 Hz a 200 Hz).</li>
</ul>

<h3>2.1 Dimensionamento da Atenuação</h3>
<p>Para barrar o ruído estrutural, deve-se aplicar amortecedores sob a base da máquina capazes de oferecer uma <strong>eficiência de isolamento vibratório superior a 90%</strong>. A rigidez dos coxins deve ser calculada baseando-se no peso dinâmico e na rotação (RPM) de operação. As duas tecnologias principais são:</p>
<ul>
  <li><strong>Isoladores Elastoméricos (Borracha/Neoprene):</strong> Absorvem alta frequência por cisalhamento e atrito molecular. Possuem limitação física de deflexão estática (<strong>3 a 7 mm</strong>). Devido ao comportamento de "Dynamic Stiffness" (aumento da rigidez em vibrações rápidas), são ideais apenas para equipamentos leves de alta velocidade (<strong>acima de 1.000 RPM</strong>), como fancoletes suspensos e splits em suportes de parede.</li>
  <li><strong>Isoladores de Mola de Aço Helicoidal:</strong> Possuem deflexão estática elevada (<strong>12 a 50 mm</strong>) e mantêm comportamento linear independente da frequência de perturbação. São obrigatórios para máquinas pesadas de baixa rotação (<strong>abaixo de 500 RPM</strong>), como chillers modulares e compressores parafusos, pois o aço cria o deslocamento físico necessário para dissipar as perturbações de onda longa sem endurecer dinamicamente.</li>
</ul>
<p>Para bombas centrífugas de grande porte, utiliza-se uma <strong>Base de Inércia de Concreto</strong>. Trata-se de uma plataforma flutuante apoiada por isoladores de mola cujo peso deve ser no mínimo <strong>2,5 vezes</strong> o peso operacional do equipamento. Ela estabiliza o centro de gravidade, absorve o torque brusco de partida e protege as tubulações contra desalinhamento dinâmico.</p>

<h3>3. A Mentalidade de Manutenção Profissional (Serviceability)</h3>
<p>A engenharia de instalação não se encerra no comissionamento; ela engloba todo o ciclo de vida do ativo técnico. Prover acessibilidade é um compromisso ético do instalador profissional:</p>
<ul>
  <li><strong>Painéis e Disjuntores (NEC 110.26):</strong> Devem possuir uma área livre frontal de trabalho tridimensional (profundidade mínima de 90 cm / 36 polegadas, largura mínima de 76 cm / 30 polegadas e altura livre de 2 metros / 6,5 pés). Em instalações críticas, as portas de caixas de controle elétrico devem abrir a **180 graus** para anular o risco de bloqueio físico em caso de fuga por arco elétrico (arc flash).</li>
  <li><strong>Manutenção de Chillers Casco e Tubos:</strong> Salas de chillers de grande porte devem prever a área livre linear externa correspondente à <strong>extração de tubos de cobre (Tube Pull Clearance)</strong>, que tipicamente varia de 4,3 a 5 metros em paralelo ao casco. Bloquear essa área com paredes ou painéis exige demolições estruturais brutas quando for necessária a escovação interna para limpeza de incrustações na serpentina do condensador.</li>
  <li><strong>Acessibilidade de Caixas Selectoras VRF:</strong> Placas eletrônicas de controle e blocos de solenoides operam em alta temperatura interna e devem ser instalados com alçapões generosos de inspeção em tetos decorativos. A falta deste acesso impede o uso seguro de chaves de aperto de tubos e a realização de brasagens reparativas.</li>
</ul>
`,
          tabelas_html: `
<h3>Categorias de EPI para Risco Elétrico (NFPA 70E)</h3>
<p>A tabela abaixo detalha as classes de proteção térmica exigidas para trabalhos em painéis energizados e disjuntores de controle em sistemas de AVAC comerciais de alta tensão:</p>
<table>
  <thead>
    <tr>
      <th>Categoria de Risco (PPE)</th>
      <th>Energia Incidente Limite (cal/cm²)</th>
      <th>Equipamentos de Proteção Requeridos (EPIs)</th>
      <th>Nível de Risco Típico de Campo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Categoria 1</strong></td>
      <td>&ge; 1,2 a &lt; 4 cal/cm²</td>
      <td>Camisa e calça resistentes ao arco, protetor facial classificado, luvas de couro e óculos de segurança.</td>
      <td>Painéis de controle de baixa tensão e acoplamentos simples de contatores.</td>
    </tr>
    <tr>
      <td><strong>Categoria 2</strong></td>
      <td>&ge; 4 a &lt; 8 cal/cm²</td>
      <td>Macacão completo resistente ao arco, capuz balaclava para arco elétrico, protetor facial e luvas com classificação.</td>
      <td>Medições de tensão ao vivo em disjuntores gerais de fancoils industriais.</td>
    </tr>
    <tr>
      <td><strong>Categoria 3</strong></td>
      <td>&ge; 8 a &lt; 25 cal/cm²</td>
      <td>Traje completo de arco (arc flash suit) com capuz integrado de classificação mínima de 25 cal/cm², luvas e calçados dielétricos.</td>
      <td>Manutenção ativa em painéis de chillers e inversores de compressores de grande porte.</td>
    </tr>
    <tr>
      <td><strong>Categoria 4</strong></td>
      <td>&ge; 25 a &lt; 40 cal/cm²</td>
      <td>Traje de arco completo com capuz integrado de classificação mínima de 40 cal/cm², proteção auditiva, óculos, luvas dielétricas e ferramentas isoladas.</td>
      <td>Intervenções principais em barramentos de distribuição secundária e chaves de força energizadas.</td>
    </tr>
  </tbody>
</table>

<h3>Comparativo de Isoladores de Vibração: Elastômeros vs. Molas de Aço</h3>
<p>A correta especificação do suporte base previne ruídos estruturais propagados através da laje e paredes do edifício:</p>
<table>
  <thead>
    <tr>
      <th>Parâmetro Técnico</th>
      <th>Amortecedores Elastoméricos (Borracha/Neoprene)</th>
      <th>Isoladores de Mola de Aço Helicoidal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Deflexão Estática Típica</strong></td>
      <td>3 a 7 mm (0,1 a 0,3 polegadas)</td>
      <td>12 a 50 mm (0,5 a 2,0 polegadas)</td>
    </tr>
    <tr>
      <td><strong>Frequência de Perturbação Ideal</strong></td>
      <td>Equipamentos de alta velocidade (rotação &gt; 1.000 RPM)</td>
      <td>Equipamentos de baixa velocidade (rotação &lt; 500 RPM)</td>
    </tr>
    <tr>
      <td><strong>Dinâmica de Rigidez (Stiffness)</strong></td>
      <td>Não linear. Aumenta dinamicamente sob frequências altas.</td>
      <td>Linear. A rigidez dinâmica permanece igual à estática.</td>
    </tr>
    <tr>
      <td><strong>Aplicações Típicas de AVAC</strong></td>
      <td>Fancoletes suspensos (FCUs), bombas leves em linha, splits em suportes.</td>
      <td>Chillers centrífugos, compressores de parafuso, bombas sobre laje suspensa.</td>
    </tr>
    <tr>
      <td><strong>Vantagem em Transientes</strong></td>
      <td>Excelente atenuação e controle amortecido no liga/desliga.</td>
      <td>Pode requerer amortecedores viscosos externos contra torque rotacional.</td>
    </tr>
  </tbody>
</table>

<h3>Hidrônica de Precisão: Trechos Retos para Sensores de Fluxo</h3>
<p>Dimensionamento de trechos retos de tubulação necessários para garantir a estabilidade do fluxo de água gelada e prevenir falsos desarmes por perda de vazão:</p>
<table>
  <thead>
    <tr>
      <th>Posição do Sensor</th>
      <th>Distância Mínima Requerida (D = Diâmetro da Tubulação)</th>
      <th>Função Hidráulica Fundamental</th>
      <th>Consequência Física de Violação do Espaço</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>A Montante (Upstream)</strong></td>
      <td>&ge; 10D (Ex: Tubo de 4" exige 1 metro de trecho reto)</td>
      <td>Estabilizar as perturbações, redemoinhos e turbulências induzidas por curvas ou conexões.</td>
      <td>Leituras flutuantes de vazão e desarme intermitente do chiller ("Flow Loss Trip").</td>
    </tr>
    <tr>
      <td><strong>A Jusante (Downstream)</strong></td>
      <td>&ge; 5D (Ex: Tubo de 4" exige 50 cm de trecho reto)</td>
      <td>Prevenir a propagação reversa de redemoinhos de pressão causados por válvulas ou restrições à frente.</td>
      <td>Redução na precisão de medição de energia térmica (&Delta;T de água) no microprocessador.</td>
    </tr>
  </tbody>
</table>
`,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 02-02</h2>

<div class="infobox-warning">
  <h3>🚨 O Perigo da Ressonância Estrutural</h3>
  <p>Se a frequência de vibração gerada pelo compressor coincidir com a frequência natural da laje ou parede de suporte, a amplitude das vibrações se multiplicará exponencialmente. Isso gera zumbidos insuportáveis de baixa frequência (20 Hz a 200 Hz) que penetram facilmente em paredes de gesso e isolamentos termoacústicos comuns. <strong>Sempre utilize amortecedores especificados de acordo com a rotação (RPM) e o peso dinâmico de operação do equipamento para evitar esse acoplamento.</strong></p>
</div>

<div class="infobox-tip">
  <h3>⚡ Abertura de Portas a 180° (Padrão de Elite)</h3>
  <p>Enquanto a norma NEC exige abertura mínima de 90° para painéis elétricos sob tensão, projetos de elite (como os padrões governamentais UFC e VA para instalações de missão crítica) especificam portas de painéis com dobradiças de 180° de abertura. Isso reduz severamente o risco de aprisionamento do técnico em caso de <strong>arc flash</strong> (arco elétrico) e facilita a evacuação emergencial rápida, além de permitir o manuseio livre de ferramentas e componentes pesados.</p>
</div>

<div class="infobox-warning">
  <h3>🚨 Acessibilidade das Caixas Branch Selector (BS) em Sistemas VRF</h3>
  <p>Caixas Branch Selector (BS) contêm placas eletrônicas e solenoides que operam em ciclos constantes de modulação térmica. Selar essas caixas permanentemente no forro de gesso é uma negligência grave. É obrigatório instalar alçapões ou portinholas de acesso com dimensões amplas (mínimo de 60x60 cm). O espaço livre abaixo da caixa BS deve permitir que o técnico utilize chaves de aperto de tubo simultaneamente em conexões flangeadas, realize brasagem e retire placas eletrônicas para diagnóstico sem danificar a estrutura decorativa.</p>
</div>
`,
        },
        {
          id: "02-03",
          titulo: "O cano barato que destrói servidores",
          modulo: "MÓDULO 02 - 03",
          videos: [
            {
              titulo:
                "O cano barato que destrói servidores - MÓDULO 02 - 03",
              link: "https://youtu.be/c_KmGKR4wbE",
              tipo: "videoaula",
            },
            {
              titulo: "Masterclass Drenagem HVAC - MÓDULO 02 - 03",
              link: "https://youtu.be/z480QxJ9BrQ",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-02/Module02-03-Elite HVAC Condensate Drainage Masterclass.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/c_KmGKR4wbE",
          link_podcast: "https://youtu.be/z480QxJ9BrQ",
          total_slides: 15,
          fontes_imagens: Array.from({ length: 20 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo02/modulo02-03/Module02-03-Elite HVAC Condensate Drainage Masterclass-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>O Cano Barato de 3/4" que Protege Projetos de Milhões</h2>
<p><strong>A drenagem de condensado é uma disciplina hidráulica crítica que exige precisão de engenharia, e não um mero detalhe de encanamento secundário.</strong></p>
<p>Na climatização de alta performance, a negligência no projeto de descarte do condensador é a principal causa de vazamentos internos e acionamentos de seguro por danos de água. Estatísticas prediais apontam que danos por infiltração são a segunda maior causa de prejuízos segurados, com indenizações que facilmente superam de $10.000 a $14.000 em residências e podem ultrapassar $85.000 em salas de servidores e CPDs comerciais devido ao tempo de inatividade.</p>

<h3>1. Psicrometria e Equilíbrio Hidrostático no Sifão (P-Trap)</h3>
<p>Durante o resfriamento ativo, o ar úmido que passa pelo evaporador sofre resfriamento latente, condensando vapor de água nas aletas de alumínio da serpentina. A remoção confiável desse volume de líquido depende do correto sifonamento da linha, especialmente em sistemas que operam sob pressão negativa (configurações <strong>Draw-Through</strong>, onde o evaporador fica antes da sucção do ventilador):</p>
<ul>
  <li><strong>A Barreira Aerodinâmica de Sucção:</strong> Sem um P-trap devidamente dimensionado, a pressão interna na bandeja de dreno é menor do que a pressão atmosférica externa. O ar externo corre violento para dentro do cano de dreno, agindo como um bloqueio que impede a saída do condensado. A água fica retida e transborda pelas bordas da bandeja, caindo diretamente nos componentes eletrônicos ou forros inferiores.</li>
  <li><strong>O Princípio do Selo Hidrostático:</strong> O sifão cria um bloqueio em forma de "U". A coluna de água retida no ramo de entrada do sifão deve gerar uma pressão hidrostática de queda maior do que o vácuo interno criado pelo ventilador para que o escoamento por gravidade ocorra livremente.</li>
</ul>

<h3>1.2 Sifões Mecânicos a Seco (Waterless Air-Traps)</h3>
<p>Os sifões tradicionais à base de coluna de água possuem a patologia crônica da <strong>evaporação do selo líquido</strong> durante o inverno ou shoulder seasons (períodos de inoperação). Com o sifão seco, ocorre a recirculação de ar não tratado para a câmara, além da sucção de odores desagradáveis e patógenos biológicos da rede de esgoto indireta.</p>
<p>Para anular esse risco, projetos de elite especificam <strong>sifões mecânicos a seco (como os da Des Champs Technologies)</strong>. Esses dispositivos possuem uma esfera interna que se assenta hermeticamente sobre um anel de vedação sob a sucção do ventilador quando secos, bloqueando totalmente o refluxo de gases e ar. Ao receber condensado, o peso da água flutua a esfera, liberando o escoamento contínuo. Eles evitam congelamento, acúmulo de lodo biológico nas curvas e atendem plenamente à seção M307.2.4.1 do IMC.</p>

<h3>2. Geometria de Declividade e Dimensionamento Hidráulico</h3>
<p>O escoamento pluvial/condensado pós-sifão rege-se pelas leis de gravidade simples. O dimensionamento deve seguir rigorosamente a norma <strong>IMC Seção 307.2</strong>, definindo diâmetros nominais baseados na capacidade em TR do sistema. A declividade mínima ditada em código é de 1% (1/8" por pé linear), porém o padrão recomendado de engenharia é de <strong>2% de queda contínua (1/4" por pé)</strong>. Esse gradiente impede a acomodação e garante a velocidade de arraste necessária para manter a parede interna do PVC livre de sedimentos.</p>
<p>Devido à maleabilidade e relaxamento mecânico (creep) do PVC em sótãos quentes, a sustentação horizontal deve ocorrer rigidamente a cada **4 pés (1,2 metros)**, e a fixação vertical a cada **10 pés (3 metros)** sob pena de gerar flechas (barrigas) que resultam em <strong>duplo sifonamento</strong>.</p>

<h3>3. Respiros (Vents) e o Perigo do Duplo Sifonamento</h3>
<p>A hidrodinâmica de queda em descidas longas cria zonas de vácuo (efeito pistão) que podem esvaziar o sifão primário por sucção. Para quebrar este vácuo, instala-se um respiro vertical aberto à atmosfera:</p>
<ul>
  <li><strong>Posicionamento do Respiro:</strong> O respiro deve obrigatoriamente ser posicionado <strong>a jusante (depois) do sifão</strong>. Se colocado antes (entre a bandeja e o sifão), ele anula o selo, puxando ar direto da atmosfera e mantendo a água retida na bandeja.</li>
  <li><strong>Altura de Segurança:</strong> O topo do tubo do respiro deve subir acima do nível superior da bandeja interna de dreno da evaporadora para prevenir o transbordo em casos de entupimentos na rede de descarte pluvial principal.</li>
  <li><strong>A Paralisia por Duplo Sifonamento (Double Trapping):</strong> Ocorre quando existem dois sifões consecutivos sem ventilação intermediária (seja por erro de montagem ou sags na linha). O ar contido no tubo entre os dois sifões é comprimido e cria um colchão pneumático intransponível pela gravidade do condensado. A linha para de drenar mesmo estando limpa e sem barreiras físicas.</li>
</ul>

<h3>4. Transporte Forçado por Bombas de Condensado</h3>
<p>Quando a gravidade é inviabilizada por limitações de altura, adota-se o transporte mecanizado por bombas elétricas centrífugas de condensado. A instalação profissional exige o cumprimento de protocolos rígidos:</p>
<ul>
  <li><strong>Isolamento de Vibrações:</strong> A bomba de condensado opera em altas rotações e nunca deve ser acoplada rigidamente contra painéis de drywall ou carcaças metálicas para evitar ressonâncias sonoras nas paredes do edifício. Devem ser usados isoladores de suspensão de borracha ou mantas amortecedoras.</li>
  <li><strong>Controle de Ciclos (Short-Cycling):</strong> A coluna vertical de água de descarte que permanece na mangueira de vinil pós-bombeamento tende a retornar por gravidade à boia da bomba quando o motor desliga. Isso inicia partidas consecutivas desnecessárias que queimam o motor. É mandatório o uso de uma <strong>válvula de retenção (check valve)</strong> na descarga.</li>
  <li><strong>Lógica de Intertravamento (Safety Interlock):</strong> O microinterruptor interno do sensor de nível alto da bomba deve ser ligado em série na linha de alimentação de 24V de controle do termostato ou contactora do compressor (fios R ou Y). Se a bomba falhar ou entupir, o circuito abre, desarmando o compressor imediatamente e cessando a geração de condensado no evaporador.</li>
</ul>
`,
          tabelas_html: `
<h3>Tabela de Dimensionamento de Tubulação de Condensado (IMC 307.2)</h3>
<p>Diâmetro nominal interno mínimo requerido com base na capacidade térmica total de refrigeração instalada:</p>
<table>
  <thead>
    <tr>
      <th>Capacidade de Refrigeração (TR)</th>
      <th>Capacidade de Refrigeração (kW / BTU/h)</th>
      <th>Diâmetro Interno Mínimo Requerido (pol)</th>
      <th>Diâmetro Comercial Comum (PVC)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Até 20 TR</strong></td>
      <td>Até 70 kW / 240.000 BTU/h</td>
      <td>3/4 polegada (0,75")</td>
      <td>25 mm (externo)</td>
    </tr>
    <tr>
      <td><strong>De 21 a 40 TR</strong></td>
      <td>70 a 140 kW / 240.000 a 480.000 BTU/h</td>
      <td>1 polegada (1,00")</td>
      <td>32 mm (externo)</td>
    </tr>
    <tr>
      <td><strong>De 41 a 90 TR</strong></td>
      <td>140 a 315 kW / 480.000 a 1.080.000 BTU/h</td>
      <td>1 1/4 polegadas (1,25")</td>
      <td>40 mm (externo)</td>
    </tr>
    <tr>
      <td><strong>De 91 a 125 TR</strong></td>
      <td>315 a 440 kW / 1.080.000 a 1.500.000 BTU/h</td>
      <td>1 1/2 polegadas (1,50")</td>
      <td>50 mm (externo)</td>
    </tr>
    <tr>
      <td><strong>De 126 a 250 TR</strong></td>
      <td>440 a 880 kW / 1.500.000 a 3.000.000 BTU/h</td>
      <td>2 polegadas (2,00")</td>
      <td>60 mm (externo)</td>
    </tr>
  </tbody>
</table>

<h3>Guia Paramétrico de Sifonamento em Pressão Negativa (Draw-Through)</h3>
<p>Geometria e profundidades do P-trap indexadas pela Pressão Estática Externa Total (TESP) da câmara:</p>
<table>
  <thead>
    <tr>
      <th>Pressão Estática da Câmara (TESP)</th>
      <th>Fator de Segurança Mínimo</th>
      <th>Profundidade Vertical da Mola (Selo)</th>
      <th>Altura da Borda de Saída (H)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>0,50 polegadas w.c. (125 Pa)</strong></td>
      <td>+ 1,00" (Selo) / + 0,50" (H)</td>
      <td>1,50 polegada (38 mm)</td>
      <td>1,00 polegada (25 mm)</td>
    </tr>
    <tr>
      <td><strong>0,75 polegadas w.c. (187 Pa)</strong></td>
      <td>+ 1,00" (Selo) / + 0,50" (H)</td>
      <td>2,00 polegadas (50 mm)</td>
      <td>1,50 polegada (38 mm)</td>
    </tr>
    <tr>
      <td><strong>1,00 polegada w.c. (250 Pa)</strong></td>
      <td>+ 1,00" (Selo) / + 0,50" (H)</td>
      <td>2,50 polegadas (63 mm)</td>
      <td>2,00 polegadas (50 mm)</td>
    </tr>
    <tr>
      <td><strong>1,50 polegadas w.c. (373 Pa)</strong></td>
      <td>+ 1,00" (Selo) / + 0,50" (H)</td>
      <td>3,00 polegadas (76 mm)</td>
      <td>2,50 polegadas (63 mm)</td>
    </tr>
  </tbody>
</table>

<h3>Norma de Espaçamento de Suporte e Sustentação de Dreno (IMC / SMACNA)</h3>
<p>Espaçamentos máximos de fixação física para evitar flambagens e sags mecânicos na tubulação:</p>
<table>
  <thead>
    <tr>
      <th>Material da Tubulação</th>
      <th>Orientação do Duto</th>
      <th>Espaçamento Máximo Permitido (Código)</th>
      <th>Acessórios de Fixação Homologados</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Polyvinyl Chloride (PVC)</strong></td>
      <td>Horizontal</td>
      <td>4 pés (1,2 metros)</td>
      <td>Abraçadeiras tipo gota, cavaletes metálicos rígidos ou calhas plásticas.</td>
    </tr>
    <tr>
      <td><strong>Polyvinyl Chloride (PVC)</strong></td>
      <td>Vertical</td>
      <td>10 pés (3,0 metros)</td>
      <td>Abraçadeiras de ancoragem rígidas contra elements estruturais.</td>
    </tr>
    <tr>
      <td><strong>Cobre Comercial</strong></td>
      <td>Horizontal</td>
      <td>5 a 6 pés (1,5 a 1,8 metros)</td>
      <td>Suportes metálicos com isolamento elastomérico integrado para evitar fricção.</td>
    </tr>
    <tr>
      <td><strong>Cobre Comercial</strong></td>
      <td>Vertical</td>
      <td>10 pés (3,0 metros)</td>
      <td>Riser clamps estruturais nas passagens de laje ou prumadas.</td>
    </tr>
  </tbody>
</table>
`,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 02-03</h2>

<div class="infobox-warning">
  <h3>🚨 A Malprática Gravíssima do Agrupamento (Line-Set Bundling)</h3>
  <p>Agrupar a tubulação plástica de dreno de PVC amarrada diretamente contra a tubulação fria de sucção de cobre do refrigerante (o line-set) é estritamente proibido. O resfriamento por condução térmica gela o PVC, fazendo a parede plástica condensar umidade externa e gotejar ("suar") de forma contínua no interior de forros decorativos de gesso. Além disso, a baixa temperatura interna estimula o crescimento acelerado de algas e biofilmes bacterianos. <strong>Roteie e apoie as tubulações de dreno em suportes independentes.</strong></p>
</div>

<div class="infobox-warning">
  <h3>🚨 O Perigo da Ligação Direta no Esgoto (DWV Sewer Connection)</h3>
  <p>Nunca realize uma conexão direta ou fechada da linha de condensado na rede de esgoto sanitário do prédio. Se o sifão de água secar (evaporação normal), a pressão negativa de sucção do evaporador aspirará gases de esgoto tóxicos e inflamáveis (metano), bem como patógenos biológicos suspensos na rede pluvial para dentro do sistema de climatização, dispersando-os na respiração dos ocupantes. <strong>A terminação deve descarregar com folga física de ar (Air Gap) acima da borda de um ralo ou pia de captação indireta.</strong></p>
</div>

<div class="infobox-tip">
  <h3>⚡ O Intertravamento Elétrico Vital (Safety Float Switch)</h3>
  <p>Conectar uma bomba de condensado ou um sensor de bandeja à rede elétrica sem associar seus contatos de nível alto na fiação de baixa tensão é um erro grave. O microinterruptor de segurança do sensor de boia deve ser cabeado em série com o circuito de controle de 24V (linhas R ou Y). Se a drenagem falhar, o circuito abre, desligando instantaneamente o compressor externo e parando a condensação ativa de umidade na serpentina. Isso transforma um transbordamento iminente catastrófico em um simples chamado de manutenção programada.</p>
</div>
`,
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // MÓDULO 03 - Tubulação e Brasagem
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 3,
      titulo: "MÓDULO 03 — Tubulação e Brasagem",
      descricao:
        "Domine a arte da tubulação de cobre, brasagem com nitrogênio e isolamento térmico profissional.",
      icone: "flame",
      cor: "orange",
      aulas: [
        {
          id: "03-01",
          titulo: "Como rebarbas de cobre matam compressores",
          modulo: "MÓDULO 03 - 01",
          videos: [
            {
              titulo:
                "Como rebarbas de cobre matam compressores - MÓDULO 03 - 01",
              link: "https://youtu.be/dQgd6PHp9zw",
              tipo: "videoaula",
            },
            {
              titulo: "Protocolos de Elite HVAC / R - MÓDULO 03 - 01",
              link: "https://youtu.be/ZBNRydbk27I",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-03/Module03-01-Advanced HVAC Copper Tubing Mastery.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/dQgd6PHp9zw",
          link_podcast: "https://youtu.be/ZBNRydbk27I",
          total_slides: 15,
          fontes_imagens: Array.from({ length: 20 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo03/modulo03-01/Module03-01-Advanced HVAC Copper Tubing Mastery-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>Como Rebarbas de Cobre Matam Compressores</h2>
<p><strong>Na climatização de alta performance, a tubulação de cobre deve ser encarada como o sistema vascular do ciclo frigorífico. O compressor é o coração, o refrigerante é o sangue e o óleo sintético POE/PVE é o plasma vital de lubrificação.</strong></p>
<p>Qualquer contaminação física ou estrangulamento fluidodinâmico na tubulação atua exatamente como um coágulo circulatório. Em sistemas modernos de R-410A ou R-32 que operam sob pressões extremas de 400 a 500 PSI, o escareamento inadequado do tubo de cobre reduz a eficiência do sistema, impede o retorno de óleo e gera micropartículas que destroem o motor do compressor por curto-circuito ou desgaste por atrito seco.</p>

<h3>1. A Metalurgia do Tubo de Cobre e a Física do Corte</h3>
<p>A tubulação padrão em refrigeração é feita de <strong>Cobre Desoxidado com Fósforo (Cu-DHP)</strong>, com uma estrutura cristalina cúbica de faces centradas (CFC). O metal possui grande ductilidade porque seus planos atômicos deslizam facilmente uns sobre os outros.</p>
<ul>
  <li><strong>O Fenômeno do Encruamento (Work Hardening):</strong> Quando cortamos o tubo apertando a lâmina circular do cortador de forma muito rápida e agressiva, a força de compressão eleva a densidade de discordâncias atômicas localizadas para até $10^{11}$ ou $10^{12} \text{ cm/cm}^3$. Este acúmulo de deformações microscópicas enrijece e fragiliza o metal. Quando o técnico tenta flangear essa extremidade endurecida, a falta de ductilidade causa rasgos e trincas radiais (splitting), gerando vazamentos invisíveis a curto prazo.</li>
  <li><strong>Corte Progressivo de Elite:</strong> Para mitigar o encruamento, a lâmina do cortador deve ser girada com paciência, aplicando apenas microajustes graduais ao parafuso de avanço após cada volta completa, garantindo o cisalhamento limpo e gradual do cobre.</li>
</ul>

<h3>2. A Patologia da Rebarba e o Arraste de Óleo (Oil Logging)</h3>
<p>O corte por compressão gera inevitavelmente um lábio afiado voltado para dentro: a <strong>rebarba</strong>. Essa rebarba age como uma placa de orifício que estrangula o fluxo:</p>
<ul>
  <li><strong>Turbulência e Queda de Velocidade:</strong> O fluxo de vapor sofre separação da camada limite e gera remoinhos downstream da rebarba (Vórtices de Dean). Como o óleo lubrificante sintético não corre dissolvido no vapor, ele depende unicamente da velocidade cinética do gás nas paredes para retornar ao cárter.</li>
  <li><strong>Pane por Falta de Retorno de Óleo:</strong> A ASHRAE exige velocidades mínimas de vapor de 700 a 800 FPM em trechos horizontais e de 1.000 a 1.500 FPM em risers verticais. A turbulência pós-rebarba reduz localmente a velocidade abaixo desse limite, acumulando óleo na linha (<strong>oil logging</strong>). Um compressor de 5 TR pode bombear todo o óleo do seu cárter para a linha em 50 minutos. Se o óleo ficar preso por má geometria, em 2 a 5 horas de operação ocorre o travamento térmico e destruição dos mancais por fricção seca.</li>
</ul>

<h3>3. Mecanismos de Quebra por Cavacos Metálicos</h3>
<p>Se as rebarbas de cobre forem limpas com o tubo voltado para cima, as limalhas resultantes cairão dentro do ciclo frigorífico. Essa contaminação destrói o compressor por três vias distintas:</p>
<ol>
  <li><strong>Curto-circuito no Estator:</strong> As limalhas entram com o fluxo de sucção sobre o estator elétrico. Sob vibração contínua das partidas, esses cavacos afiados desgastam o esmalte isolante de poliimida dos enrolamentos de cobre, provocando um curto-circuito direto para a carcaça ou entre espiras e queimando o estator.</li>
  <li><strong>Destruição das Placas de Válvulas:</strong> As palhetas de aço mola das válvulas reed sofrem esmagamento contra as sedes caso uma limalha fique presa no fechamento, quebrando o flap ou riscando a vedação (causando blow-back e perda de eficiência volumétrica).</li>
  <li><strong>Cobreado Químico (Copper Plating):</strong> A umidade reage com o óleo POE gerando ácidos que dissolvem os cavacos de cobre. O cobre em solução precipita-se nas superfícies mais quentes e sob atrito do compressor (como os mancais de aço polido). A deposição metálica contínua (plaqueamento) anula as folgas de projeto das peças móveis, travando o compressor por atrito mecânico.</li>
</ol>

<h3>4. Tribologia e Mecânica dos Flanges</h3>
<p>Trabalhar com R-410A ou R-32 exige flanges de geometria perfeita, mais profundos e largos. A conformação profissional do flange requer o domínio de regras físicas:</p>
<ul>
  <li><strong>Flangeamento Excêntrico Orbital:</strong> Substitui a fricção concêntrica de deslizamento (que causa solda a frio de asperidades e riscos na parede, fenômeno chamado de *galling*) por um rolamento orbital suave. O cone amassa e pole a boca do cobre gradualmente de forma contínua, deixando a parede interna lisa e espelhada.</li>
  <li><strong>Limitador de Torque por Embreagem (Clutch):</strong> Evita a extrusão mecânica do cobre. Sem a embreagem, o aperto excessivo estica o metal além do ponto de escoamento, afinando severamente a parede no pescoço do flange e propiciando rasgos ao aplicar a chave de boca.</li>
  <li><strong>Lubrificação de Flanges:</strong> É recomendável aplicar uma gota de óleo POE ou vedante Nylog na face cônica interna e no ombro traseiro da flange para lubrificar o contato rotativo com a porca de latão. <strong>É terminantemente proibido aplicar lubrificantes nas roscas</strong>, pois reduz o coeficiente de atrito de projeto, fazendo o técnico aplicar um torque de compressão excessivo no flange mesmo sob a mesma medição no torquímetro.</li>
  <li><strong>Preservação do Regime Elástico (Hooke's Law):</strong> O flange sob compressão adequada age como uma mola metálica elástica. Durante as ciclagens térmicas (frio de 4°C e calor de 60°C), os metais dilatam e contraem de forma diferencial. Se o flange foi deformado na faixa elástica, ele expande ou contrai acompanhando as peças, assegurando vedação contínua. Flanges esmagados por excesso de aperto sofrem deformação plástica, perdem elasticidade e abrem microvazamentos invisíveis na primeira ciclagem fria.</li>
</ul>
`,
          tabelas_html: `
<h3>ASHRAE - Velocidades Mínimas de Vapor para Arraste de Óleo</h3>
<p>Parâmetros hidrodinâmicos mínimos para garantir a suspensão e condução das gotículas de óleo sintético até o cárter do compressor:</p>
<table>
  <thead>
    <tr>
      <th>Disposição da Linha de Sucção</th>
      <th>Velocidade Mínima de Arraste (FPM)</th>
      <th>Velocidade de Projeto Recomendada (FPM)</th>
      <th>Finalidade e Comportamento Físico</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Tubulações Horizontais</strong></td>
      <td>500 a 700 FPM (2,5 a 3,5 m/s)</td>
      <td>800 a 1.000 FPM (4,0 a 5,0 m/s)</td>
      <td>Garantir o cisalhamento e rolamento do filme de óleo sob a parede do tubo de cobre.</td>
    </tr>
    <tr>
      <td><strong>Risers Verticais (Subidas)</strong></td>
      <td>1.000 FPM (5,0 m/s)</td>
      <td>1.200 a 1.500 FPM (6,0 a 7,5 m/s)</td>
      <td>Superar a força de gravidade reversa sobre as gotículas de óleo poe/pve acumuladas.</td>
    </tr>
    <tr>
      <td><strong>Velocidades Máximas Gerais</strong></td>
      <td>-</td>
      <td>Máximo 3.000 a 4.000 FPM</td>
      <td>Prevenir ruídos acústicos aéreos agressivos e desgaste erosivo interno das curvas de cobre.</td>
    </tr>
  </tbody>
</table>

<h3>Equivalência de Perda de Carga por Método de Curvatura (pés de tubo reto)</h3>
<p>Restrição de fluxo expressa no comprimento teórico de tubo reto que gera a mesma perda de carga e formação de Vórtices de Dean:</p>
<table>
  <thead>
    <tr>
      <th>Diâmetro Nominal Externo (pol)</th>
      <th>Cotovelo 90° Raio Curto (Brazado - R/D = 1.0)</th>
      <th>Cotovelo 90° Raio Longo (Brazado - R/D = 1.5)</th>
      <th>Sweeping por Curvador Mecânico (R/D &ge; 2.0)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>3/8"</strong></td>
      <td>1,40 ft (0,42 m)</td>
      <td>0,90 ft (0,27 m)</td>
      <td><strong>0,72 ft (0,22 m)</strong></td>
    </tr>
    <tr>
      <td><strong>1/2"</strong></td>
      <td>1,60 ft (0,48 m)</td>
      <td>1,00 ft (0,30 m)</td>
      <td><strong>0,80 ft (0,24 m)</strong></td>
    </tr>
    <tr>
      <td><strong>5/8"</strong></td>
      <td>2,00 ft (0,60 m)</td>
      <td>1,40 ft (0,42 m)</td>
      <td><strong>1,12 ft (0,34 m)</strong></td>
    </tr>
    <tr>
      <td><strong>7/8"</strong></td>
      <td>2,60 ft (0,79 m)</td>
      <td>1,70 ft (0,51 m)</td>
      <td><strong>1,36 ft (0,41 m)</strong></td>
    </tr>
    <tr>
      <td><strong>1 1/8"</strong></td>
      <td>3,30 ft (1,00 m)</td>
      <td>2,30 ft (0,70 m)</td>
      <td><strong>1,84 ft (0,56 m)</strong></td>
    </tr>
  </tbody>
</table>

<h3>Especificações de Torque para Flanges em Alta Pressão (R-410A / R-32)</h3>
<p>Faixas de aperto mecânico recomendadas em roscas secas para manter o cobre no regime de deformação elástica:</p>
<table>
  <thead>
    <tr>
      <th>Diâmetro Externo do Tubo (pol)</th>
      <th>Torque Mínimo Recomendado</th>
      <th>Torque Máximo Recomendado</th>
      <th>Ferramenta de Aplicação Indicada</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1/4"</strong></td>
      <td>13 ft·lbs (18 N·m)</td>
      <td>18 ft·lbs (25 N·m)</td>
      <td>Torquímetro de garra de precisão (Double Wrenching).</td>
    </tr>
    <tr>
      <td><strong>3/8"</strong></td>
      <td>25 ft·lbs (33 N·m)</td>
      <td>30 ft·lbs (41 N·m)</td>
      <td>Torquímetro de garra de precisão (Double Wrenching).</td>
    </tr>
    <tr>
      <td><strong>1/2"</strong></td>
      <td>36 ft·lbs (50 N·m)</td>
      <td>42 ft·lbs (58 N·m)</td>
      <td>Torquímetro de garra de precisão (Double Wrenching).</td>
    </tr>
    <tr>
      <td><strong>5/8"</strong></td>
      <td>46 ft·lbs (63 N·m)</td>
      <td>55 ft·lbs (75 N·m)</td>
      <td>Torquímetro de garra de precisão (Double Wrenching).</td>
    </tr>
    <tr>
      <td><strong>3/4"</strong></td>
      <td>73 ft·lbs (99 N·m)</td>
      <td>85 ft·lbs (115 N·m)</td>
      <td>Torquímetro de garra de precisão (Double Wrenching).</td>
    </tr>
  </tbody>
</table>
`,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 03-01</h2>

<div class="infobox-warning">
  <h3>🚨 O Perigo Oculto das Serras Elétricas (Sandblasting do Compressor)</h3>
  <p>Cortar tubulações de cobre com serras sabre, serras manuais ou serras de fita é terminantemente proibido. O atrito dos dentes da serra contra a parede de cobre arranca milhares de microscopic shards (shrapnel de cobre) que se espalham pelas linhas. A circulação desses fragmentos metálicos funciona como um processo de jateamento de areia interna (sandblasting), destruindo vedações de expansão eletrônica (EEVs) e riscando as espiras dos compressores scroll.</p>
</div>

<div class="infobox-warning">
  <h3>🚨 O Erro Fatal da Lubrificação de Roscas de Latão</h3>
  <p>Enquanto aplicar lubrificante na face e ombro da flange de cobre é recomendável para evitar a torção do tubo, aplicar óleo sintético ou Nylog nas roscas de latão é uma malprática grave. A lubrificação das roscas reduz severamente o atrito de projeto. Ao aplicar o torquímetro, a porca girará excessivamente para alcançar o valor medido, esmagando plasticamente o flange de cobre. O cobre sofrerá extrusão, perderá o efeito mola e vazará refrigerante nas primeiras ciclagens térmicas.</p>
</div>

<div class="infobox-tip">
  <h3>👋 Purga Ativa de Nitrogênio Durante o Escareamento</h3>
  <p>O escareamento deve idealmente ocorrer com a extremidade do tubo de cobre apontada a 90° para o solo para que a gravidade retire todas as limalhas. Em casos onde o duto já esteja chumbado horizontalmente ou voltado para cima, é obrigatório injetar uma purga de nitrogênio de baixa pressão da extremidade oposta durante o reame. O fluxo constante de gás soprará as rebarbas cortadas para fora, preservando a limpeza do sistema vascular.</p>
</div>
`,
        },
        {
          id: "03-02",
          titulo: "Solda com nitrogênio evita falhas no VRF",
          modulo: "MÓDULO 03 - 02",
          videos: [
            {
              titulo:
                "Solda com nitrognio evita falhas no VRF - MÓDULO 03 - 02",
              link: "https://youtu.be/QSG4T2pe1TQ",
              tipo: "videoaula",
            },
            {
              titulo: "Masterclass VRF: Nitrogênio - MÓDULO 03 - 02",
              link: "https://youtu.be/u_3EKCj4XNc",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-03/Module03-02-Nitrogen Brazing Masterclass for HVAC.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/QSG4T2pe1TQ",
          link_podcast: "https://youtu.be/u_3EKCj4XNc",
          total_slides: 15,
          fontes_imagens: Array.from({ length: 18 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo03/modulo03-02/Module03-02-Nitrogen Brazing Masterclass for HVAC-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>A Sabotagem Mecânica da Brasagem sem Nitrogênio</h2>
<p><strong>Brazar tubulações de cobre sem circular nitrogênio é um ato latente de sabotagem mecânica.</strong> Na arquitetura complexa, integrada e eletronicamente densa de sistemas de Fluxo de Refrigerante Variável (VRF) e unidades de climatização inverter modernas, a ausência de um gás inerte de arraste para deslocar o oxigênio atmosférico durante o aquecimento gera uma reação de oxidação interna catastrófica.</p>
<p>O que se inicia como uma alteração térmica localizada na parede interna do tubo de cobre evolui rapidamente para uma contaminação sistêmica insolúvel. A fuligem abrasiva desprendida circulará livremente pelo ciclo frigorífico, provocando o travamento mecânico de atuadores de precisão de micrômetros, entupimento de filtros e a degradação catalítica e química dos lubrificantes sintéticos. As tolerâncias mecânicas internas atuais exigem esterilidade microscópica; não há margem para a fuligem de oxidação de brasagem.</p>

<h2>A Metalurgia e a Química da Contaminação Interna</h2>
<p>Durante o processo de brasagem, o cobre é aquecido a temperaturas extremas, variando de <strong>590°C a 815°C (1100°F a 1500°F)</strong>, para que a liga de brasagem de prata (como a liga <em>StaySilv 15</em>) atinja fluidez ideal por capilaridade.</p>
<p>Nesse patamar de calor, o oxigênio atmosférico (21% no ar) no interior da tubulação não purgada reage violentamente com a superfície do metal. O cobre possui dois estados de oxidação estáveis comuns: óxido cuproso (Cu<sub>2</sub>O, película avermelhada/marrom) e óxido cúprico (CuO). Sob o calor intenso da brasagem e na presença de excesso de oxigênio, ocorre a oxidação total para o óxido cúprico (CuO):</p>
<p style="text-align: center; font-size: 1.25em; margin: 1.5rem 0;"><strong>2Cu + O<sub>2</sub> &rarr; 2CuO</strong></p>
<p>Esta reação de síntese gera o óxido cúprico, uma estrutura cristalina monoclínica que assume a forma de uma <strong>casca preta, áspera e quebradiça</strong> sobre a parede interna do tubo de cobre.</p>
<p>Enquanto a casca externa de óxido cúprico pode ser removida por abrasão manual, a casca gerada na parede interna permanece inacessível. O maior perigo físico ocorre durante o resfriamento da junta. O cobre metálico possui um elevado coeficiente de dilatação térmica linear e se contrai rapidamente ao esfriar. A rígida e frágil malha cristalina do óxido cúprico (CuO), no entanto, não acompanha essa contração do substrato de cobre. Essa contração diferencial gera severas tensões mecânicas de cisalhamento na interface de fusão entre o óxido e o metal, fazendo com que a casca sofra fraturas, descame e se desprenda sob a forma de pequenos flocos ou poeira preta de óxido (a "fuligem de brasagem").</p>

<h2>A Catástrofe Tribológica: Óleos Sintéticos vs. Óxido Cúprico</h2>
<p>O impacto da fuligem interna foi amplificado na transição de sistemas antigos de R-22 com óleos minerais para fluidos modernos de alta eficiência (R-410A, R-32) com óleos sintéticos.</p>
<p>O óleo mineral antigo é apolar e quimicamente inerte perante o óxido cúprico. A fuligem gerada tendia a permanecer estática, depositada nos trechos horizontais inferiores das tubulações. Em contraste, os óleos sintéticos <strong>Polioléster (POE)</strong> e <strong>Polivinil Éter (PVE)</strong> possuem uma estrutura molecular altamente polar. Esta polaridade atua como um solvente de limpeza ativo de alta afinidade química pelas superfícies metálicas. Conforme o lubrificante POE ou PVE corre pelo circuito arrastado pelo fluxo de refrigerante, a sua polaridade limpa quimicamente as paredes internas de cobre, desprendendo a película de fuligem de óxido cúprico (CuO) e dispersando-a no lubrificante, o que transforma o óleo protetor em uma pasta ou lodo abrasivo circulante.</p>
<ul>
  <li><strong>Hidrólise Catalisada por Cobre no POE:</strong> Os lubrificantes POE são sintéticos produzidos por esterificação, um processo químico reversível por meio da hidrólise. O POE é altamente higroscópico, absorvendo umidade rapidamente. Na presença de umidade, a molécula de POE sofre hidrólise, quebrando-se de volta em álcool e ácidos orgânicos corrosivos (ácidos carboxílicos). A poeira de óxido cúprico (CuO) e os íons de cobre dissolvidos agem como potentes catalisadores metálicos para esta reação química de degradação, elevando rapidamente o TAN (Total Acid Number) do lubrificante. A acidez resultante ataca o verniz de isolamento elétrico dos enrolamentos do estator do compressor, desencadeando queima por curto-circuito.</li>
  <li><strong>Complicações do PVE:</strong> Embora os éteres (PVE) não sofram hidrólise, o PVE continua sendo altamente polar e remove a fuligem das paredes com igual agressividade. Além disso, o PVE possui elevada tensão superficial, retendo as partículas abrasivas de óxido cúprico e a umidade de forma tenaz, impedindo a sua eliminação completa durante a desidratação por vácuo e retardando o alcance do patamar de 500 microns.</li>
</ul>

<h2>A Destruição da Válvula de Expansão Eletrônica (EEV)</h2>
<p>O componente de maior precisão e o mais vulnerável à circulação do lodo de óxido cúprico é a <strong>Válvula de Expansão Eletrônica (EEV)</strong>, que modula dinamicamente a injeção de refrigerante na evaporadora para controle de superaquecimento preciso em cargas parciais.</p>
<p>A EEV de precisão é composta por uma bobina estatora externa, um rotor magnético hermeticamente blindado no fluxo de refrigerante, um eixo roscado micrométrico de bronze (lead screw) e uma agulha cônica de latão que obstrui ou abre o micro-orifício de controle. A resolução dessas válvulas varia de <strong>480 a 2000 micro-passos</strong> do fechamento total à abertura total. As folgas de projeto nas roscas de bronze do lead screw e o canal anular da agulha são medidos na escala de micrômetros (microns).</p>
<p>Quando o lodo de óleo e óxido cúprico penetra na EEV, as partículas rígidas e pontiagudas de óxido se fixam nos filetes da micro-rosca do lead screw ou alojam-se ao redor do rotor magnético. Como a rotação do rotor ocorre em passos elétricos discretos baseados em pulsos eletromagnéticos de baixo torque, qualquer resistência por atrito impede o giro, travando a válvula mecanicamente (o efeito "Dropped Domino"):</p>
<ul>
  <li><strong>Travamento na Posição Aberta (Flooding):</strong> O evaporador é inundado por vazão excessiva de líquido. O superaquecimento cai a zero e ocorre o retorno de fluido refrigerante líquido ao compressor, resultando em calço hidráulico e quebra das espiras ou pistões.</li>
  <li><strong>Travamento na Posição Fechada (Starving):</strong> O evaporador é privado de fluido. A pressão de sucção cai severamente, o superaquecimento do ar de retorno sobe acentuadamente e o motor do compressor sofre superaquecimento por falta de refrigeração gasosa de sucção.</li>
</ul>

<h2>Procedimento Operacional Padrão: Purga e Fluxo de Nitrogênio</h2>
<p>A única metodologia capaz de mitigar a formação interna de óxido cúprico é a substituição do oxigênio atmosférico por <strong>Nitrogênio Livre de Oxigênio (OFN)</strong> durante a brasagem. Sendo um gás inerte, o nitrogênio impede a oxidação térmica do cobre. O procedimento exige duas fases:</p>
<ol>
  <li><strong>Fase 1: Purga Volumétrica Inicial (Oxygen Displacement):</strong> Antes de acender o maçarico, o ar acumulado no interior da tubulação deve ser deslocado por purga de nitrogênio injetado em alta vazão temporária para varrer volumetricamente o oxigênio e a umidade interna para fora da tubulação aberta.</li>
  <li><strong>Fase 2: Transição para Fluxo de Brasagem (Brazing Flow):</strong> Após o deslocamento volumétrico inicial e antes de iniciar o aquecimento, o fluxômetro deve ser imediatamente reduzido para um patamar de <strong>2 a 5 SCFH (equivalente a 1,5 a 2,0 PSI)</strong>. Se o técnico tentar soldar a junta com nitrogênio em alta velocidade, o fluxo interno agirá como um resfriador térmico (heat sink), forçando o sobreaquecimento da parede externa e gerando cavidades (pitting) ou soprando o metal líquido da brasagem de StaySilv para fora do canal capilar, criando microfuros (pinholes). O fluxo ideal de 2 a 5 SCFH gera apenas um leve sopro positivo contínuo que impede a entrada de oxigênio sem esfriar a junta.</li>
</ol>
<p>O fluxo de nitrogênio deve continuar ativo durante todo o processo de resfriamento. Desligar o gás assim que a solda é concluída gera vácuo por contração térmica, succionando oxigênio e oxidando a parede ainda superaquecida. Mantenha o fluxo ativo até que o tubo possa ser tocado diretamente com as mãos.</p>
          `,
          tabelas_html: `
<h3>Comparativo de Lubrificantes e Comportamento com Óxido Cúprico (CuO)</h3>
<p>Parâmetros físico-químicos das principais tecnologias de lubrificação de compressores:</p>
<table>
  <thead>
    <tr>
      <th>Propriedade de Campo</th>
      <th>Óleo Mineral Clássico (Apolar)</th>
      <th>Óleo Polioléster - POE (Polar)</th>
      <th>Óleo Polivinil Éter - PVE (Polar)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Compatibilidade de Fluidos</strong></td>
      <td>CFC / HCFC (Ex: R-22)</td>
      <td>HFC / HFO (Ex: R-410A / R-32)</td>
      <td>HFC / HFO (Daikin / VRF)</td>
    </tr>
    <tr>
      <td><strong>Polaridade Molecular</strong></td>
      <td>Não-polar (Baixa afinidade)</td>
      <td>Altamente polar</td>
      <td>Altamente polar</td>
    </tr>
    <tr>
      <td><strong>Ação de Arraste sobre CuO</strong></td>
      <td>Baixa (Óxido decanta e fica estático)</td>
      <td>Altíssima (Desprende e mobiliza o óxido)</td>
      <td>Altíssima (Desprende e mobiliza o óxido)</td>
    </tr>
    <tr>
      <td><strong>Higiene Higroscópica (Água)</strong></td>
      <td>Baixa absorção de umidade</td>
      <td>Altíssima absorção de umidade</td>
      <td>Altíssima absorção de umidade</td>
    </tr>
    <tr>
      <td><strong>Risco de Hidrólise (Acidez)</strong></td>
      <td>Nenhum</td>
      <td>Altíssimo (Reversão para ácido carboxílico)</td>
      <td>Nenhum (Estrutura de éter estável)</td>
    </tr>
    <tr>
      <td><strong>Tensão Superficial de Linha</strong></td>
      <td>Normal</td>
      <td>Normal</td>
      <td>Altíssima (Retém água e dificulta vácuo)</td>
    </tr>
  </tbody>
</table>

<h3>Métodos de Diagnóstico e Comissionamento de Linhas Frigoríficas</h3>
<p>Ensaios técnicos aplicados no comissionamento de duto de refrigeração e detecção de anomalias:</p>
<table>
  <thead>
    <tr>
      <th>Método de Diagnóstico</th>
      <th>Parâmetro Alvo / Defeito Detectado</th>
      <th>Estado Requerido do Sistema</th>
      <th>Descrição Operacional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Ensaio de Pressurização OFN</strong></td>
      <td>Vazamento físico macroscópico na solda</td>
      <td>Pre-comissionamento (Desenergizado)</td>
      <td>Pressurização estática a 500 PSI com Nitrogênio por 24 horas.</td>
    </tr>
    <tr>
      <td><strong>Vácuo Abaixo de 500 Microns</strong></td>
      <td>Presença de umidade livre na linha</td>
      <td>Pre-comissionamento (Estático)</td>
      <td>Estabilização duradoura da leitura de vácuo após isolar a bomba.</td>
    </tr>
    <tr>
      <td><strong>Teste de Bissecção de Junta</strong></td>
      <td>Presença de fuligem CuO e pitting interno</td>
      <td>Auditoria de Juntas (Corte físico)</td>
      <td>Corte e inspeção visual da seção longitudinal de soldas aleatórias.</td>
    </tr>
    <tr>
      <td><strong>Análise Acústica de EEV</strong></td>
      <td>Travamento mecânico do rotor/lead screw</td>
      <td>Operação Ativa (Energizado)</td>
      <td>Verificação de pulso de ruído de clique de inicialização da bobina.</td>
    </tr>
    <tr>
      <td><strong>Desvio de Superaquecimento</strong></td>
      <td>Restrição de vazão na sede da agulha EEV</td>
      <td>Operação Ativa (Compressor On)</td>
      <td>Leituras de temperatura e pressão na saída de fancoils VRF.</td>
    </tr>
  </tbody>
</table>
          `,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 03-02</h2>

<div class="infobox-warning">
  <h3>🚨 O ERRO DA PURGA EM ALTA VELOCIDADE (Resfriamento e Pitting)</h3>
  <p>Brasar tubulações com fluxo de nitrogênio em alta velocidade cria um efeito de dissipador de calor (heat sink) interno severo. Isso força o técnico a superaquecer o tubo externamente, gerando cavidades destrutivas na parede do cobre (wall pitting). Além disso, a contrapressão sopra a liga de brasagem fundida para fora do canal capilar da conexão, criando porosidades e microfuros (pinholes) propensos a vazamento de refrigerante. <strong>Mantenha o fluxo estritamente entre 2 a 5 SCFH (1,5 a 2,0 PSI) durante o aquecimento.</strong></p>
</div>

<div class="infobox-warning">
  <h3>🚨 OXIDAÇÃO NO RESFRIAMENTO (Interrupção Precoce do Gás)</h3>
  <p>Cortar o fluxo de nitrogênio imediatamente após apagar a chama do maçarico é um erro crítico. O rápido resfriamento gera um vácuo térmico interno no duto que puxa ar atmosférico (e consequentemente oxigênio) para dentro do tubo superaquecido, gerando oxidação instantânea. <strong>O fluxo de nitrogênio deve continuar circulando até que a tubulação resfrie o suficiente para ser tocada com a mão.</strong></p>
</div>

<div class="infobox-tip">
  <h3>⚡ AUDITORIA POR BISSECÇÃO DE JUNTAS (Norma ABNT NBR 16655-2)</h3>
  <p>Em projetos comerciais de grande porte de VRF, as equipes fiscalizadoras realizam cortes aleatórios (tipicamente até 5%) de juntas prontas para inspeção longitudinal destrutiva. A detecção de cascas escuras de óxido cúprico (CuO) ou ranhuras por excesso de calor qualifica a instalação como não conforme, podendo obrigar a construtora a refazer trechos inteiros da linha frigorífica por sua conta. Purga de nitrogênio adequada é norma e lei técnica.</p>
</div>
          `,
        },
        {
          id: "03-03",
          titulo: "Como o isolamento térmico salva o compressor",
          modulo: "MÓDULO 03 - 03",
          videos: [
            {
              titulo:
                "Como o isolamento térmico salva o compressor - MÓDULO 03 - 03",
              link: "https://youtu.be/_VAXB7KN7wc",
              tipo: "videoaula",
            },
            {
              titulo: "Blindagem Térmica HVAC - MÓDULO 03 - 03",
              link: "https://youtu.be/Q-kxqciG1XM",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-03/Module03-03-Elite HVAC Insulation Masterclass Draft.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/_VAXB7KN7wc",
          link_podcast: "https://youtu.be/Q-kxqciG1XM",
          total_slides: 15,
          fontes_imagens: Array.from({ length: 19 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo03/modulo03-03/Module03-03-Elite HVAC Insulation Masterclass Draft-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>A Sabotagem Silenciosa do Isolamento Mal Projetado</h2>
<p><strong>Na engenharia de sistemas de AVAC-R, o isolamento térmico da linha de sucção deve ser encarado como a "Blindagem Térmica" (Thermal Armor) do sistema.</strong> Rebaixar o isolamento ao nível de mero acabamento estético é um erro primário grave que expõe o compressor à morte prematura por estresse mecânico e térmico, além de induzir danos estruturais catastróficos nas edificações por condensação psicrométrica.</p>

<h2>Parte I: A Física do Roubo Térmico e a Sobrevivência do Compressor</h2>
<p>A linha de sucção tem a função existencial de transportar o gás refrigerante frio e em baixa pressão de volta ao compressor. Esse gás frio é o único meio ativo de resfriamento do motor elétrico nos compressores scroll ou alternativos herméticos e semi-herméticos atuais.</p>
<p>Quando o isolamento térmico da linha é inadequado ou inexistente, ocorre o fenômeno do <strong>"Roubo Térmico" (Thermal Theft)</strong>: o calor do ar ambiente (especialmente em shafts prediais ou sótãos quentes) invade a linha de cobre devido ao elevado gradiente de temperatura. O gás refrigerante atinge o compressor superaquecido, comprometendo a troca de calor no estator do motor.</p>
<ul>
  <li><strong>A Regra dos 225°F (107°C) de Sobrevivência:</strong> A temperatura da linha de descarga, medida a 15 cm da saída do compressor, nunca deve ultrapassar <strong>225°F (107°C)</strong>. Se atingir esse patamar, as partes internas na placa de válvulas estarão a 300°F (149°C) ou mais.</li>
  <li><strong>Vaporização e Carbonização do Óleo:</strong> Acima de 350°F, os lubrificantes sintéticos (como o POE) quebram quimicamente, perdendo a viscosidade. Isso gera desgaste mecânico severo de metal contra metal nos pistons/mancais e carbonização (formação de carvão) nas sedes das palhetas, impedindo seu fechamento hermético (refluxo do gás ou <em>blow-by</em>).</li>
  <li><strong>Degradação Ácida e Burnout:</strong> A hidrólise catalisada por calor decompõe o POE em ácidos orgânicos corrosivos que roem a camada de verniz isolante das bobinas elétricas, detonando a queima por curto-circuito (burnout) do estator.</li>
</ul>

<h2>Parte II: A Psicrometria da Condensação e o Efeito Ponte Térmica</h2>
<p>O ponto de orvalho (dew point) é a temperatura limite na qual a umidade contida no ar atinge 100% de saturação física. Se a temperatura da parede do tubo de cobre estiver abaixo do ponto de orvalho, ocorre a condensação imediata (suor).</p>
<p>Em climas moderadamente úmidos — como o de <strong>Ferraz de Vasconcelos, São Paulo</strong>, cuja umidade média é de 75% e o ponto de orvalho situa-se frequentemente em 59°F (15°C) —, um tubo de cobre de sucção operando a 40°F (4,4°C) condensará umidade externa intensamente em toda a sua extensão.</p>
<p>Qualquer costura mal selada ou amassado cria uma <strong>Ponte Térmica (Thermal Bridge)</strong>. O frio do cobre desvia o isolamento e condensa vapor de água ativamente. Pela ação da gravidade, a água acumulada pinga silenciosamente em forros de gesso e drywalls, degradando a estrutura predial, gerando manchas marrons e promovendo a proliferação biológica de mofo preto e fungos.</p>

<h2>Parte III: Ciência dos Materiais (ASTM C534) e a Deformação por Compressão</h2>
<p>O isolamento de espuma elastomérica pré-formada rege-se pela norma <strong>ASTM C534</strong>, que padroniza os tipos Tubular (Type I) e Manta (Type II). O material é composto por células fechadas que aprisionam milhões de bolhas de gás inerte com baixíssima condutividade (valor K entre 0,235 e 0,280). Diferente de isolamentos porosos (célula aberta), a célula fechada dispensa barreira de vapor metálica secundária porque a própria estrutura celular impede a penetração de umidade.</p>
<p>O poder isolante reside no diâmetro do duto de ar estático aprisionado. Por isso, a <strong>compressão mecânica do isolamento é terminantemente proibida</strong>:</p>
<ul>
  <li><strong>Colapso Celular:</strong> Pressionar ou esticar a espuma esmaga as células de gás, reduzindo a espessura física e transformando a borracha maciça em uma ponte térmica condutiva de calor. Por exemplo, comprimir o isolamento nominal de 6,25 polegadas (R-19) em um espaço de 3,5 polegadas derruba sua resistência de <strong>R-19 para R-13</strong> (perda de 31%).</li>
  <li><strong>Proibição de Abraçadeiras Plásticas (Zip-Ties):</strong> Usar abraçadeiras de nylon apertadas diretamente sobre a espuma esmaga o elastômero até a espessura zero, gerando pontes térmicas localizadas circunferenciais e vazamento de condensado nestes pontos.</li>
  <li><strong>Suportes Rígidos Pré-Isolados:</strong> Em locais de fixação ou pendurais, utilizam-se insertos rígidos como <strong>K-FLEX 360</strong> ou <strong>ArmaFix</strong> (compostos de poliuretano PUR de alta densidade ou PET estrutural e clad metálico) colados quimicamente às espumas adjacentes, mantendo a espessura de parede intacta e sem deformações.</li>
</ul>

<h2>Parte IV: Protocolo de Selagem Química por Adesão Úmida (Wet Seal)</h2>
<p>A Blindagem Térmica exige estanqueidade integral de 100% contra a pressão de vapor (vapor drive). O uso de fitas isolantes ou de alumínio comuns como selante primário de juntas é inadequado. As oscilações térmicas causam a expansão/contração da espuma, descolando fitas simples em poucos meses e permitindo infiltração de umidade.</p>
<p>O único método homologado de junção é o <strong>Adesivo Químico de Contato (ArmaFlex 520, ArmaFlex Ultima 700 ou K-FLEX)</strong>. O adesivo derrete superficialmente e solda a borracha a nível molecular (soldagem a frio):</p>
<ol>
  <li><strong>Preparação:</strong> Limpe os lábios da junta com álcool isopropílico para retirar impurezas e poeiras de talco.</li>
  <li><strong>Aplicação:</strong> Aplique uma camada fina e uniforme de cola em ambas as faces a serem soldadas.</li>
  <li><strong>Flash-off:</strong> Aguarde o solvente secar ao toque de forma a ficar apenas pegajoso (tacky).</li>
  <li><strong>Golden Rule:</strong> Nunca estique o isolamento para fechar emendas. Corte as espumas 5 a 10 mm mais longas e empurre-as sob compressão lateral (bunching positivo) para compensar a memória elástica do material durante a cura, prevenindo rachaduras futuras.</li>
</ol>
          `,
          tabelas_html: `
<h3>Perda de Eficiência Térmica por Compressão Física do Isolamento</h3>
<p>Redução da resistência térmica equivalente (R-Value) sob compressão de cavidade estrutural:</p>
<table>
  <thead>
    <tr>
      <th>Espessura Nominal Loteada</th>
      <th>Resistência Original Rotulada (R-Value)</th>
      <th>Espessura Comprimida no Ponto de Aperto</th>
      <th>Resistência Térmica Resultante</th>
      <th>Perda Percentual de Eficiência</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>6,25 polegadas (158 mm)</strong></td>
      <td>R-19</td>
      <td>3,50 polegadas (89 mm)</td>
      <td>R-13</td>
      <td style="color:#ef4444">31,5% de perda térmica</td>
    </tr>
    <tr>
      <td><strong>5,50 polegadas (140 mm)</strong></td>
      <td>R-21</td>
      <td>3,50 polegadas (89 mm)</td>
      <td>R-14</td>
      <td style="color:#ef4444">33,3% de perda térmica</td>
    </tr>
    <tr>
      <td><strong>3,50 polegadas (89 mm)</strong></td>
      <td>R-11</td>
      <td>2,00 polegadas (50 mm)</td>
      <td>R-7,6</td>
      <td style="color:#ef4444">30,9% de perda térmica</td>
    </tr>
    <tr>
      <td><strong>1,00 polegada (25 mm)</strong></td>
      <td>R-4,2</td>
      <td>0,25 polegada (6 mm)</td>
      <td>R-1,1</td>
      <td style="color:#ef4444">73,8% de perda térmica</td>
    </tr>
  </tbody>
</table>

<h3>Espessura Mínima de Isolamento Requerida (ASHRAE 90.1-2019)</h3>
<p>Espessuras de parede nominal exigidas em conformidade com as diretrizes internacionais:</p>
<table>
  <thead>
    <tr>
      <th>Diâmetro Nominal da Tubulação de Cobre</th>
      <th>Espessura Mínima de Isolamento Requerida</th>
      <th>Resistência Mínima Requerida (R-Value)</th>
      <th>Código de Conformidade de Projeto</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>3/8" a 5/8"</strong></td>
      <td>1/2 polegada (13 mm)</td>
      <td>R-4,0</td>
      <td>ASHRAE 90.1-2019 / IECC</td>
    </tr>
    <tr>
      <td><strong>3/4" a 1 1/8"</strong></td>
      <td>3/4 polegada (19 mm)</td>
      <td>R-6,0</td>
      <td>ASHRAE 90.1-2019 / IECC</td>
    </tr>
    <tr>
      <td><strong>1 3/8" a 2 1/8"</strong></td>
      <td>1,0 polegada (25 mm)</td>
      <td>R-8,0</td>
      <td>ASHRAE 90.1-2019 / IECC</td>
    </tr>
    <tr>
      <td><strong>Acima de 2 1/8"</strong></td>
      <td>1 1/2 polegadas (38 mm)</td>
      <td>R-12,0</td>
      <td>ASHRAE 90.1-2019 / IECC</td>
    </tr>
  </tbody>
</table>

<h3>Comparativo de Tecnologias de Jaquetas Protetoras Externas</h3>
<table>
  <thead>
    <tr>
      <th>Categoria de Proteção</th>
      <th>Resistência Mecânica (Puncionamento)</th>
      <th>Resistência Química e Solar (UV)</th>
      <th>Ciclo de Manutenção Requerido</th>
      <th>Vantagens de Instalação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Pinturas Aerocoat / ArmaFinish</strong></td>
      <td>Baixa (Sensível a quedas de ferramentas)</td>
      <td>Excelente (Reflete UV ativamente)</td>
      <td>Renovação recomendada a cada 3 a 5 anos</td>
      <td>Fácil aplicação com rolo/pincel em curvas e manifolds complexos.</td>
    </tr>
    <tr>
      <td><strong>Chapas de Alumínio Clad</strong></td>
      <td>Altíssima (Resiste a granizo e ferramentas)</td>
      <td>Imbatível (Blindagem metálica total)</td>
      <td>Livre de manutenção por até 15 anos</td>
      <td>Proteção máxima física de longo prazo, mas exige calandra técnica e parafusos de costura.</td>
    </tr>
    <tr>
      <td><strong>Jaquetas de PVC Rígido UV</strong></td>
      <td>Média-Alta (Resiste a chuva e bicadas de aves)</td>
      <td>Excelente (Formulação especial UV)</td>
      <td>Livre de manutenção por 8 a 10 anos</td>
      <td>Acabamento estético clean, encaixe rápido com cola de PVC nas conexões.</td>
    </tr>
  </tbody>
</table>
          `,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 03-03</h2>

<div class="infobox-warning">
  <h3>🚨 A PROIBIÇÃO CRÍTICA DO USO DE ABRAÇADEIRAS PLÁSTICAS (ZIP-TIES)</h3>
  <p>Envelopar tubos frios com abraçadeiras de nylon apertadas diretamente sobre a espuma de isolamento flexível esmaga as células microscópicas de gás a zero. Isso anula o poder isolante do elastômero e cria uma ponte térmica circunferencial. Sob umidade, essa ponte irá suar e gotejar de forma contínua, estragando placas de gesso e drywalls. <strong>Para fixar tubos suspensos, utilize suportes rígidos pré-isolados com inserções de poliuretano (como ArmaFix ou K-FLEX 360).</strong></p>
</div>

<div class="infobox-warning">
  <h3>🚨 COMPRESSÃO E "COMPRESSION SET" EM CURVAS FECHADAS</h3>
  <p>Ao contornar curvas de cobre em 90 graus, puxar a espuma com força estica a parede externa e achata a parede interna contra o tubo, colapsando as células de gás. A deformação resultante compromete o valor R do isolamento e destrói o poder de contenção de orvalho na curva. <strong>Sempre execute cortes meia-esquadria precisos de 45 graus usando facas lisas bem afiadas, unindo as faces com adesivo de contato sem tensionar o material.</strong></p>
</div>

<div class="infobox-tip">
  <h3>⚡ CÓDIGO IECC E A PROIBIÇÃO DE FITAS ADESIVAS EXTERNAS</h3>
  <p>De acordo com o código internacional IECC e a norma ASHRAE 90.1, tubulações externas expostas no telhado não podem ser protegidas com fitas adesivas (isolantes ou de alumínio). Sob dilatação térmica constante e radiação solar direta, essas fitas sofrem degradação rápida, descascando e permitindo infiltrações de água. <strong>Para instalações ao ar livre, utilize duas demãos de tintas elastoméricas com bloqueio UV (como Aerocoat ou ArmaFinish) ou envelope o isolante em jaquetas rígidas de alumínio ou PVC.</strong></p>
</div>
          `,
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // MÓDULO 04 - Elétrica e Cabeamento
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 4,
      titulo: "MÓDULO 04 — Elétrica e Cabeamento",
      descricao:
        "Segurança elétrica, terminais de alta precisão e cabeamento de dados VRF/VRV.",
      icone: "zap",
      cor: "yellow",
      aulas: [
        {
          id: "04-01",
          titulo: "Como evitar a queima do VRF",
          modulo: "MÓDULO 04 - 01",
          videos: [
            {
              titulo: "Como evitar a queima do VRF - MÓDULO 04 - 01",
              link: "https://youtu.be/ncOLg-3EMpU",
              tipo: "videoaula",
            },
            {
              titulo: "O Sabotador Invisível - MÓDULO 04 - 01",
              link: "https://youtu.be/eBP3YSGMSsY",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-04/Modulo-04-01-Advanced HVAC Power Safety Grounding.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/ncOLg-3EMpU",
          link_podcast: "https://youtu.be/eBP3YSGMSsY",
          total_slides: 14,
          fontes_imagens: Array.from({ length: 22 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo04/modulo04-01/Modulo-04-01-Advanced HVAC Power Safety Grounding-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>A Inversão Tecnológica: O Condensador como Central Eletrônica</h2>
<p><strong>A indústria de AVAC-R passou por uma revolução silenciosa.</strong> O condensador convencional, composto por contatos brutos e partida direta (Across-the-line) que drenavam de 5 a 7 vezes a corrente nominal (Locked Rotor Amps - LRA), foi substituído pela tecnologia Inverter. Hoje, as condensadoras VRF e Multi-Split são <strong>verdadeiras centrais computadorizadas de processamento de energia</strong>.</p>
<p>Diferente de equipamentos clássicos, a eletrônica de potência do inversor converte e sintetiza a eletricidade da concessionária em três estágios térmicos:</p>
<ol>
  <li><strong>Retificação:</strong> A ponte de diodos (seis diodos em redes trifásicas) retifica a corrente alternada (AC) da rede em corrente contínua (DC) pulsante, funcionando como válvulas de retenção eletrônica.</li>
  <li><strong>DC Link (Barramento Contínuo):</strong> Capacitores eletrolíticos de alta capacidade e bobinas (DC chokes) suavizam e filtram a tensão contínua pulsante em um pool energético de alta tensão e estabilidade.</li>
  <li><strong>Inversão:</strong> Transistores bipolares de porta isolada (IGBTs) ou modernos MOSFETs de Carboneto de Silício (SiC) chaveiam a energia do barramento DC milhares de vezes por segundo via modulação por largura de pulso (PWM), modulando de forma precisa a frequência e velocidade do compressor.</li>
</ol>
<p>Enquanto a potência chaveada mede-se em centenas de volts, a placa controladora opera sob lógica digital microprocessada de <strong>3,3V, 5V e 12V</strong>. Essa proximidade extrema torna o sistema altamente sensível a ruídos, desequilíbrios e falhas na qualidade de energia.</p>

<h2>Parte I: Dimensionamento de Circuitos de Proteção (Artigo 440 do NEC)</h2>
<p>Para evitar superaquecimento e desligamentos acidentais (<em>nuisance tripping</em>), a fiação e os disjuntores de aparelhos de refrigeração comercial devem obedecer a cálculos específicos de plaqueta:</p>
<ul>
  <li><strong>Capacidade Mínima do Circuito (MCA):</strong> Define a bitola mínima da fiação para prevenir a fusão térmica da isolação do cabo em regime contínuo. Sua fórmula de projeto estabelece:<br>
  <p style="text-align: center; font-weight: bold; margin: 1rem 0;">MCA = 1,25 &times; RLA<sub>maior compressor</sub> + &sum; FLA<sub>outros motores</sub> + Aquecedores</p>
  O multiplicador de 1,25 (125%) provê a margem de segurança contra a deterioração do isolamento THHN de cobre.</li>
  <li><strong>Proteção Máxima de Sobrecorrente (MOCP):</strong> Configura o limite máximo do disjuntor para barrar correntes severas de curto-circuito sem desarmar perante flutuações de partida normais:<br>
  <p style="text-align: center; font-weight: bold; margin: 1rem 0;">MOCP = 2,25 &times; RLA<sub>maior compressor</sub> + &sum; FLA<sub>outros motores</sub> + Aquecedores</p>
  O valor resultante é arredondado para baixo para o padrão de mercado imediatamente inferior, não podendo ficar abaixo do MCA.</li>
  <li><strong>A Regulação UL 60335-2-40:</strong> Nos inversores modernos (com aceleração suave do compressor), não há inrush de partida em LRA. No entanto, ensaios de segurança recentes sob a norma UL 60335-2-40 (focados na acomodação de refrigerantes A2L) inflaram os valores de MCA. Técnicos de elite devem dimensionar os cabos pelo MCA nominal, mas ajustar o disjuntor dentro de limites práticos recomendados pelo fabricante para evitar disjuntores desproporcionais ao consumo real.</li>
</ul>

<h2>Parte II: O Desequilíbrio de Tensão e a Degradação do Inversor</h2>
<p>Em sistemas comerciais trifásicos, a assimetria na rede de alimentação (causada por distribuição irregular de cargas monofásicas ou falhas na concessionária) reduz drasticamente a longevidade dos inversores. Embora o motor do compressor seja blindado pelo barramento DC do inversor, os componentes eletrônicos frontais sofrem desgaste severo:</p>
<ol>
  <li><strong>Destruição de Diodos Retificadores:</strong> Para manter a potência no barramento DC, o circuito extrai corrente de forma desequilibrada das fases de maior tensão. Isso sobrecarrega termicamente os diodos retificadores destas fases, queimando as junções semicondutoras.</li>
  <li><strong>Evaporação Eletrolítica em Capacitores:</strong> A assimetria introduz uma forte oscilação (ripple) de baixa frequência (120 Hz) no barramento DC. Os capacitores do DC Link sofrem ciclos frenéticos de carregamento e descarregamento, gerando calor interno que ferve o eletrólito líquido, estufando e explodindo as placas eletrônicas.</li>
</ol>
<p>Um desequilíbrio de tensão na rede de apenas 1% causa um desequilíbrio de corrente de <strong>6% a 10%</strong> nos semicondutores. Limites acima de 3% de desequilíbrio exigem a instalação de reatores de linha (AC reactors) em série antes do inversor.</p>

<h2>Parte III: Aterramento de Alta Frequência e Proteção Contra Correntes Parasitas</h2>
<p>Nos inversores de frequência modernos, o aterramento desempenha duas funções cruciais além da segurança pessoal contra choques elétricos:</p>
<ul>
  <li><strong>Âncora de Zero Volts:</strong> Os chips lógicos da placa controladora necessitam de um ponto de referência absoluto de 0V (zero volts) estável. Conexões de terra oxidadas ou flutuantes geram flutuações de potencial (Ground Shift), induzindo erros de processamento e travamento de sistemas.</li>
  <li><strong>Tensão de Modo Comum (Vcm) em RS-485:</strong> A rede de comunicação serial (F1/F2) do VRF funciona por transmissão diferencial. Se a condensadora externa no telhado e as evaporadoras internas possuírem potenciais de aterramento diferentes, gera-se uma diferença de tensão entre as carcaças (Vcm). Se essa tensão exceder a janela de <strong>-7V a +12V</strong>, os transceptores das placas sofrem colapso por "latch-up", queimando e interrompendo a comunicação predial.</li>
  <li><strong>Fluting e Usinagem por Descarga Elétrica (EDM):</strong> O chaveamento rápido de alta frequência dos IGBTs (variação acentuada de dv/dt) induz correntes parasitas capacitivas no rotor do motor. A corrente acumula-se no eixo e descarrega na forma de arcos elétricos (micro-raios) através dos rolamentos metálicos de aço para a carcaça. Este processo de erosão elétrica funde pontos microscópicos na pista metálica dos rolamentos, gerando ranhuras paralelas (<em>fluting</em>). Os rolamentos passam a vibrar e fazer ruídos excessivos, travando o motor mecânica e termicamente em poucos meses.</li>
</ul>
<p>Para barrar a erosão de mancais e ruídos de EMI, as instalações de elite utilizam condutores de terra simétricos blindados em cabos de força, malhas de terra planas (cordoalhas) para vencer o Efeito Pelicular (Skin Effect) de alta frequência e anéis de aterramento de eixo (SGR) por microfibras condutoras.</p>
          `,
          tabelas_html: `
<h3>Parâmetros de Aceitação de Rede Elétrica e Aterramento</h3>
<p>Valores limite exigidos para o funcionamento seguro de sistemas VRF Inverter:</p>
<table>
  <thead>
    <tr>
      <th>Parâmetro Físico de Medição</th>
      <th>Faixa Ideal de Conformidade</th>
      <th>Limite Máximo de Tolerância</th>
      <th>Ação Corretiva se Violado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Diferença Neutro-Terra (N-PE)</strong></td>
      <td>0,0V a 0,5V AC</td>
      <td>&lt; 1,5V AC</td>
      <td>Apertar conexões de neutro e barramento de terra no quadro predial.</td>
    </tr>
    <tr>
      <td><strong>Desequilíbrio de Tensão Trifásica</strong></td>
      <td>&lt; 1,0%</td>
      <td>Máximo 3,0%</td>
      <td>Redistribuir cargas monofásicas ou instalar reatores de linha (AC chokes).</td>
    </tr>
    <tr>
      <td><strong>Resistência da Haste de Terra</strong></td>
      <td>&lt; 5 &Omega; (Ohm)</td>
      <td>Máximo 10 &Omega; (Norma)</td>
      <td>Adicionar hastes de terra em paralelo e realizar tratamento químico do solo.</td>
    </tr>
    <tr>
      <td><strong>Tensão de Modo Comum (Vcm) RS-485</strong></td>
      <td>0V AC/DC</td>
      <td>-7V a +12V DC (Limites IC)</td>
      <td>Equalizar terras, usar cabos blindados e instalar isoladores ópticos de sinal.</td>
    </tr>
  </tbody>
</table>

<h3>Matriz de Dimensionamento de Circuitos: Inverter vs. Motores Comuns</h3>
<p>Comparação de diretrizes elétricas e comportamento físico de partida:</p>
<table>
  <thead>
    <tr>
      <th>Parâmetro Técnico</th>
      <th>Compressores Inverter Modernos (UL 60335-2-40)</th>
      <th>Motores Trifásicos de Indução Comuns (Across-The-Line)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Fórmula Básica de Cabos (MCA)</strong></td>
      <td>1,25 &times; RLA + &sum; FLA</td>
      <td>1,25 &times; FLA (Motor único)</td>
    </tr>
    <tr>
      <td><strong>Fórmula de Disjuntor (MOCP)</strong></td>
      <td>2,25 &times; RLA + &sum; FLA (Arredonda p/ baixo)</td>
      <td>2,50 &times; FLA (Disjuntor de tempo inverso)</td>
    </tr>
    <tr>
      <td><strong>Presença de Inrush (Corrente Partida)</strong></td>
      <td>Quase nula (Rampa de aceleração variável)</td>
      <td>Altíssima (5 &times; a 7 &times; a corrente FLA de placa)</td>
    </tr>
    <tr>
      <td><strong>Comportamento sob Sobrecarga</strong></td>
      <td>Monitorado eletronicamente por sensores na placa controladora.</td>
      <td>Confiado unicamente ao relé térmico de proteção do contator.</td>
    </tr>
  </tbody>
</table>

<h3>Aterramentos em Instalações de AVAC: Baixa vs. Alta Frequência</h3>
<table>
  <thead>
    <tr>
      <th>Característica de Aterramento</th>
      <th>Condutor de Proteção Redondo Comum (60 Hz)</th>
      <th>Cordoalha Plana de Cobre Trançado (EMI/HF)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Foco de Proteção Principal</strong></td>
      <td>Segurança Humana (Vida/Choques elétricos)</td>
      <td>Dissipação de ruído eletromagnético e altas frequências.</td>
    </tr>
    <tr>
      <td><strong>Comportamento de Impedância</strong></td>
      <td>Baixa impedância a 60 Hz; alta a frequências de kHz/MHz.</td>
      <td>Baixíssima impedância a altas frequências devido à grande área superficial.</td>
    </tr>
    <tr>
      <td><strong>Efeito Pelicular (Skin Effect)</strong></td>
      <td>Ignorado (Corrente flui por todo o cobre)</td>
      <td>Aproveitado (Corrente HF flui na superfície externa da trança)</td>
    </tr>
    <tr>
      <td><strong>Conectores de Interface</strong></td>
      <td>Olhais comuns de compressão ou parafusos simples.</td>
      <td>Abraçadeiras metálicas periféricas de contato 360° sem emendas.</td>
    </tr>
  </tbody>
</table>
          `,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 04-01</h2>

<div class="infobox-warning">
  <h3>🚨 O PERIGO DO ATERRAMENTO FLUTUANTE (Fusão dos Filtros EMI)</h3>
  <p>As placas eletrônicas de VRF contam com filtros EMI dotados de capacitores Y conectados diretamente entre as fases e a carcaça metálica. Se o equipamento estiver com aterramento flutuante (sem conexão física com a malha predial), as cargas elétricas de ruído acumulam-se nos capacitores Y. Sem rota de fuga, esses capacitores superaquecem e entram em curto destrutivo, provocando a queima das placas de filtro e do inversor em cascata. <strong>Nunca energize inversores sem o condutor de terra conectado.</strong></p>
</div>

<div class="infobox-warning">
  <h3>🚨 LATCH-UP E QUEIMA DE PORTAS RS-485</h3>
  <p>Uma diferença de potencial de terra entre a evaporadora interna e a condensadora no telhado gera uma tensão de modo comum (Vcm) que cruza as linhas F1/F2 de comunicação. Se a diferença exceder a janela de -7V a +12V DC, o chip transceptor RS-485 entra em estado de curto elétrico interno permanente (latch-up), derretendo o circuito integrado. <strong>Assegure a equipotencialidade do aterramento elétrico em toda a instalação de climatização.</strong></p>
</div>

<div class="infobox-tip">
  <h3>⚡ TESTE DE INTEGRIDADE NEUTRO-TERRA</h3>
  <p>Antes de comissionar qualquer condensador VRF ou Multi-Split Inverter, meça com o multímetro a tensão em corrente alternada (AC) entre o condutor de Neutro e o de Terra na chave de desconexão local. <strong>O valor deve ser inferior a 0,5V AC.</strong> Leituras acima de 1,5V indicam loops de terra severos, reaperto deficiente nos barramentos do quadro de distribuição ou haste de aterramento predial ineficiente.</p>
</div>
          `,
        },
        {
          id: "04-02",
          titulo: "Como erros milimétricos destroem máquinas gigantes",
          modulo: "MÓDULO 04 - 02",
          videos: [
            {
              titulo:
                "Como erros milimétricos destroem máquinas gigantes - MÓDULO 04 - 02",
              link: "https://youtu.be/2U8NkMfv_Nk",
              tipo: "videoaula",
            },
            {
              titulo: "Regra do Terminal Elétrico - MÓDULO 04 - 02",
              link: "https://youtu.be/5Vb2ETSK63k",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-04/Modulo-04-02-HVAC Wire Termination Masterclass.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/2U8NkMfv_Nk",
          link_podcast: "https://youtu.be/5Vb2ETSK63k",
          total_slides: 13,
          fontes_imagens: Array.from({ length: 18 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo04/modulo04-02/Modulo-04-02-HVAC Wire Termination Masterclass-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>Introdução: O Fio Stranded Decapado como Ponto Crítico de Falha</h2>
<p><strong>Fio flexível multifilar (stranded) desencapado e esmagado queima placas e incendeia painéis.</strong> Esta verdade imutável constitui a premissa fundamental dos protocols elétricos de elite em AVAC-R. Em sistemas industriais e comerciais modernos de Fluxo de Refrigerante Variável (VRF), chillers de grande porte e centrais de automação predial, dezenas de panes graves e acidentes com fogo em painéis de alta potência ocorrem devido à terminação elétrica inadequada.</p>
<p>A disparidade entre a engenharia sofisticada de inversores de frequência e a prática comum de esmagar condutores flexíveis sob parafusos de bornes é a maior vulnerabilidade dessas instalações. Uma central controladora microprocessada de última geração torna-se inútil ou pode entrar em curto-circuito catastrófico se os fios de alimentação ou comando forem mal crimpados.</p>

<h2>Parte I: A Física do Contato Elétrico e a Deformação por Esmagamento</h2>
<p>O condutor flexível é composto por finos filamentos de cobre entrelaçados para garantir a flexibilidade necessária para absorver as vibrações mecânicas constantes geradas por compressores e ventiladores, evitando a fadiga por cisalhamento que rompe cabos rígidos. Contudo, essa flexibilidade é uma fragilidade mecânica severa quando o cabo flexível é inserido desencapado diretamente sob um parafuso de borne:</p>
<ol>
  <li><strong>Espalhamento (Splay):</strong> À medida que o parafuso desce aplicando torque rotacional e compressão, as vias de cobre, livres do isolamento, espalham-se para as laterais do borne para escapar da zona de maior pressão.</li>
  <li><strong>Redução da Área de Contato:</strong> Em uma junta perfeita, 100% da seção transversal do cabo faz contato mecânico plano com o barramento do borne. No esmagamento livre de fios nus, essa área de contato efetiva cai para **60% a 80%**, deixando vias de cobre soltas fora do ponto de aperto.</li>
  <li><strong>Fadiga Mecânica:</strong> O atrito rotacional dos fios do parafuso contra o cobre esmaga e rompe as vias externas (bird-caging). Isso diminui a capacidade de condução de corrente (ampacidade) e cria vias para curtos-circuitos entre bornes adjacentes.</li>
</ol>

<h2>Parte II: O Ciclo Termodinâmico de uma Conexão Degradada</h2>
<p>A pane provocada por uma terminação inadequada desenvolve-se progressivamente ao longo de um ciclo de realimentação destrutiva:</p>
<ul>
  <li><strong>Resistência de Contato e Efeito Joule:</strong> A resistência no ponto de união é dada pela área de contato real microscópica. Com a área de contato do fio esmagado reduzida, a resistência de contato (Rc) é muito alta. Pela lei de Joule (P = I² &times; Rc), a corrente ao atravessar esse gargalo resistivo gera um ponto quente localizado (hot spot).</li>
  <li><strong>Dilatação Térmica Diferencial (DTE):</strong> Os metais do borne possuem coeficientes de dilatação térmica (CTE) diferentes. O cabo é de cobre, enquanto o borne/parafuso é de aço ou latão. Com o calor, o cobre expande-se a taxas e volumes maiores, gerando um estresse de compressão mecânica extremo dentro do borne.</li>
  <li><strong>Fluência Metalúrgica (Creep / Cold Flow):</strong> Sob calor e alta pressão, o cobre sofre fluência metalúrgica (creep), sofrendo deformação plástica permanente. Os átomos de cobre escorrem para fora da zona de maior pressão do parafuso (achatamento).</li>
  <li><strong>Relaxamento por Acomodação (Embedment Relaxation):</strong> Quando o sistema esfria, os metais contraem-se. Como o cobre sofreu deformação plástica irreversível enquanto quente, cria-se uma folga microscópica sob o parafuso. No próximo ciclo, o contato estará mais frouxo, a resistência será maior e o calor mais intenso.</li>
</ul>

<h2>Parte III: Micro-Arcos Elétricos, Carbonização e Explosão por Arc Flash</h2>
<p>Com o afrouxamento mecânico progressivo da terminação, surge uma fresta de ar entre o cobre e o borne. Quando a fresta é microscópica, o campo elétrico ioniza as moléculas de ar, criando um canal de plasma condutivo e iniciando micro-arcos contínuos.</p>
<p>A temperatura no núcleo do arco de plasma supera **10.000 Kelvin**, derretendo os fios de cobre e vaporizando o estanho. Sob esse calor extremo, a moldura de plástico de sustentação do borne (polímero de engenharia) sofre pirólise (decomposição térmica), transformando o plástico isolante em um resíduo sólido de carbono altamente condutivo (fenômeno do <strong>arc tracking / carbon tracking</strong>).</p>
<p>A trilha de carbono encurta o isolamento elétrico entre bornes vizinhos ou carcaça, aumentando a corrente de fuga em um ciclo destrutivo rápido que culmina em curto-circuito total e explosão por <strong>Arc Flash</strong>, destruindo o quadro elétrico e gerando sérios incêndios prediais.</p>

<h2>Parte IV: A Física da Conexão Hermética (Gas-Tight) e o Erro da Soldagem</h2>
<p>A única forma de impedir a formação de óxido de cobre (altamente isolante) e a degradação termomecânica do cabo flexível é garantir uma conexão estanque ao gás (gas-tight):</p>
<ol>
  <li><strong>Crimpagem Estanque ao Gás:</strong> A crimpagem de nível industrial deforma o terminal e o cabo em uma seção poligonal densa, eliminando os espaços vazios e soldando a frio os filamentos em uma única massa metálica homogênea impermeável a oxigênio, umidade ou salinidade.</li>
  <li><strong>Proibição de Estanhagem de Pontas (Tinning):</strong> Aplicar solda de estanho na ponta do cabo flexível antes de inseri-lo em bornes de parafuso ou pressão é estritamente proibido. O estanho é um metal mole de baixo ponto de fusão que sofre fluência rápida sob a pressão mecânica fria do parafuso, afrouxando a conexão em pouco tempo.</li>
</ol>

<h2>Parte V: Tipologias de Terminais: Ilhós (Ferrules), Olhais e Garfos</h2>
<p>Para adequar o cabo flexível ao borne correspondente, o instalador deve utilizar terminais apropriados:</p>
<ul>
  <li><strong>Terminal Ilhós (Bootlace Ferrule):</strong> Manga fina de cobre estanhado com gola plástica de isolamento que encapsula 100% dos filamentos do cabo. Garante área de contato total sob o borne, protege os filamentos e permite conexões/desconexões repetidas sem desgaste mecânico (atende às normas <strong>UL 486F</strong> e <strong>DIN 46228</strong>).</li>
  <li><strong>Terminal Olhal (Ring Lug):</strong> Anel metálico fechado fixado sob parafusos de bornes ou prisioneiros. É a conexão de segurança máxima para alta vibração (como contatores de compressores), pois permanece acoplada ao parafuso mesmo em caso de afrouxamento leve.</li>
  <li><strong>Terminal Garfo (Spade/Fork):</strong> Extremidade aberta em "U" que agiliza as manutenções em bornes de comando, permitindo inserção ou retirada sem remover o parafuso por completo, apenas afrouxando-o.</li>
</ul>

<h2>Parte VI: Procedimento Operacional Padrão (SOP) de Terminação Elétrica</h2>
<p>A execução de conexões elétricas profissionais exige os seguintes passos sequenciais em campo:</p>
<ol>
  <li><strong>Desenergização LOTO:</strong> Desligar a seccionadora, realizar o travamento com cadeado e etiqueta e testar a ausência de tensão no circuito.</li>
  <li><strong>Uso de Alicates Catracados:</strong> Alicates de pressão comuns ou universais de eletricista são estritamente proibidos. A crimpagem exige alicates com catraca de segurança que impedem a abertura do alicate até que a pressão calibrada de amassamento seja atingida por completo.</li>
  <li><strong>Decapagem Adequada:</strong> Decapar o isolamento do cabo na profundidade exata da luva metálica do terminal usando decapadores calibrados para evitar cortes ou riscos nos fios de cobre.</li>
  <li><strong>Aperto Controlado (Torque):</strong> Apertar os bornes usando chaves de torque dinamométricas calibradas de acordo com as especificações de projeto de fábrica, evitando o aperto por sensibilidade manual.</li>
  <li><strong>Lacre de Torque (Witness Marks):</strong> Aplicar uma marcação visual contínua (torque seal) na cabeça do parafuso e estrutura do borne. Qualquer rotação física de afrouxamento quebrará o lacre, denunciando a falha em vistorias visuais.</li>
</ol>
          `,
          tabelas_html: `
<h3>Resistência Mecânica à Tração Exigida para Terminais (UL 486F)</h3>
<p>Valores mínimos de força de tração (pull-out) exigidos para aceitação de conexões crimpadas em campo:</p>
<table>
  <thead>
    <tr>
      <th>Bitola do Cabo Elétrico (AWG)</th>
      <th>Seção Equivalente do Conductor (mm²)</th>
      <th>Força de Tração Mínima Exigida (Newtons)</th>
      <th>Força de Tração Mínima Exigida (Libras-força)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>AWG 22</strong></td>
      <td>0,34 mm²</td>
      <td>15 N</td>
      <td>3,4 lbf</td>
    </tr>
    <tr>
      <td><strong>AWG 20</strong></td>
      <td>0,50 mm²</td>
      <td>20 N</td>
      <td>4,5 lbf</td>
    </tr>
    <tr>
      <td><strong>AWG 18</strong></td>
      <td>0,75 mm²</td>
      <td>30 N</td>
      <td>6,7 lbf</td>
    </tr>
    <tr>
      <td><strong>AWG 16</strong></td>
      <td>1,50 mm²</td>
      <td>40 N</td>
      <td>9,0 lbf</td>
    </tr>
    <tr>
      <td><strong>AWG 14</strong></td>
      <td>2,50 mm²</td>
      <td>50 N</td>
      <td>11,2 lbf</td>
    </tr>
    <tr>
      <td><strong>AWG 12</strong></td>
      <td>4,00 mm²</td>
      <td>60 N</td>
      <td>13,5 lbf</td>
    </tr>
    <tr>
      <td><strong>AWG 10</strong></td>
      <td>6,00 mm²</td>
      <td>90 N</td>
      <td>20,2 lbf</td>
    </tr>
    <tr>
      <td><strong>AWG 8</strong></td>
      <td>10,00 mm²</td>
      <td>100 N</td>
      <td>22,5 lbf</td>
    </tr>
  </tbody>
</table>

<h3>Comparativo Técnico de Bornes e Métodos de Acoplamento</h3>
<p>Relação de desempenho físico de acordo com o design do borne:</p>
<table>
  <thead>
    <tr>
      <th>Tipo de Borne</th>
      <th>Vibração e Expansão Térmica</th>
      <th>Tempo de Instalação</th>
      <th>Riscos de Bare Wire</th>
      <th>Terminal Recomendado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Bornes de Parafuso Direto</strong></td>
      <td>Ruim (Afrouxamento crônico por DTE)</td>
      <td>Médio</td>
      <td>Extremo (Parafuso guilhotina e splaya fios)</td>
      <td>Terminal Ilhós (Ferrule)</td>
    </tr>
    <tr>
      <td><strong>Bornes de Placa de Pressão</strong></td>
      <td>Regular (Exige reapertos frequentes)</td>
      <td>Médio</td>
      <td>Alto (Splayamento nas laterais da placa)</td>
      <td>Terminal Ilhós ou Fork</td>
    </tr>
    <tr>
      <td><strong>Bornes de Conexão de Mola</strong></td>
      <td>Excelente (Mola compensa a contração mecânica)</td>
      <td>Rápido</td>
      <td>Médio (Dificuldade de inserção sem ferrolho)</td>
      <td>Terminal Ilhós (Ferrule)</td>
    </tr>
    <tr>
      <td><strong>Pinos de Prisioneiro (Studs)</strong></td>
      <td>Excelente (Aperto plano por porca de latão)</td>
      <td>Lento</td>
      <td>Inviável</td>
      <td>Terminal Olhal (Ring Lug)</td>
    </tr>
  </tbody>
</table>

<h3>Tabela Diagnóstica: Classificação Térmica de Conexões Elétricas</h3>
<p>Matriz de avaliação preditiva de juntas suspeitas via análise termográfica:</p>
<table>
  <thead>
    <tr>
      <th>Diferença de Temperatura (&Delta;T)</th>
      <th>Classificação de Risco</th>
      <th>Ação Corretiva Recomendada</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1°C a 3°C</strong></td>
      <td>Anomalia Leve (Estágio Inicial)</td>
      <td>Realizar reaperto na próxima parada de manutenção preventiva.</td>
    </tr>
    <tr>
      <td><strong>4°C a 15°C</strong></td>
      <td>Anomalia Moderada</td>
      <td>Agendar desmontagem, limpeza física e recrimpagem com terminal adequado.</td>
    </tr>
    <tr>
      <td><strong>16°C a 30°C</strong></td>
      <td>Anomalia Severa</td>
      <td>Intervenção urgente. Risco iminente de carbonização e danos à carcaça do borne.</td>
    </tr>
    <tr>
      <td><strong>Acima de 30°C</strong></td>
      <td>Crítico / Emergência</td>
      <td>Desligamento imediato do equipamento. Perigo iminente de incêndio e arc flash.</td>
    </tr>
  </tbody>
</table>
          `,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 04-02</h2>

<div class="infobox-warning">
  <h3>🚨 A PROIBIÇÃO CRÍTICA DO CABO STRANDED NU (Fios Soltos sob Bornes)</h3>
  <p>Jamais introduza pontas de fios flexíveis desencapados sob os parafusos diretos de bornes de contato ou contatoras. O esmagamento mecânico corta os fios externos (bird-caging), espalha os filamentos laterais e reduz a área real de contato para níveis perigosos de 60%. Isso inicia um ciclo térmico resistivo destrutivo que queima o borne por pirólise do plástico. <strong>O uso de terminais ilhós (ferrules) ou olhais crimpados a frio é obrigatório.</strong></p>
</div>

<div class="infobox-warning">
  <h3>🚨 A PROIBIÇÃO DA ESTANHAGEM DE PONTAS (Solda mole em Borne)</h3>
  <p>Estanhar a ponta do cabo flexível com solda antes de prendê-lo sob parafusos de aperto é uma malprática grave. A liga de solda sofre fluência fria (creep) com extrema facilidade, achatando-se permanentemente sob a pressão contínua do parafuso. Isso afrouxa a conexão em poucos meses, gerando micro-arcos contínuos que podem atingir temperaturas de 10.000 Kelvin. <strong>Sempre utilize compressão a frio (crimpagem catracada) de terminais metálicos.</strong></p>
</div>

<div class="infobox-tip">
  <h3>⚡ FERRAMENTAL RATINHO (Alicate de Catraca Obrigatório)</h3>
  <p>Nunca aperte terminais elétricos com alicates comuns de eletricista ou alicates de pressão. A deformação estanque de ar (gas-tight) exige que o metal atinja o ponto de escoamento homogêneo. Utilize apenas alicates crimpadores catracados dotados de matriz marcada. A catraca trava e impede a liberação do terminal até que a pressão total de calibração seja atingida, eliminando o erro humano por fadiga.</p>
</div>
          `,
        },
        {
          id: "04-03",
          titulo: "Como cabos de dados explodem compressores",
          modulo: "MÓDULO 04 - 03",
          videos: [
            {
              titulo:
                "Como cabos de dados explodem compressores - MÓDULO 04 - 03",
              link: "https://youtu.be/IwuB4gA8KCM",
              tipo: "videoaula",
            },
            {
              titulo: "Fiação de Dados VRF / VRV - MÓDULO 04 - 03",
              link: "https://youtu.be/d8if0sQCG34",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-04/Modulo-04-03-VRF_VRV Data Wiring Masterclass.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/IwuB4gA8KCM",
          link_podcast: "https://youtu.be/d8if0sQCG34",
          total_slides: 13,
          fontes_imagens: Array.from({ length: 19 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo04/modulo04-03/Modulo-04-03-VRF_VRV Data Wiring Masterclass-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>Introdução: O Inverter como Sistema Nervoso Distribuído</h2>
<p>Nos sistemas de climatização residenciais e comerciais clássicos, a comunicação limitava-se a simples contatores liga/desliga de 24VAC ou comandos termostáticos rudimentares. O compressor operava em velocidade constante e as válvulas de expansão eram puramente mecânicas, respondendo a pressões e temperaturas locais de forma autônoma. Os sistemas modernos de Fluxo de Refrigerante Variável (VRF) e Volume de Refrigerante Variável (VRV) alteraram completamente essa realidade. Uma condensadora externa (ODU) não é mais apenas uma unidade de rejeição de calor; é um <strong>computador termodinâmico distribuído de alta complexidade</strong>. Nesse ecossistema, as tubulações de cobre constituem o sistema circulatório de fluido refrigerante, enquanto as linhas de comunicação serial representam o <strong>sistema nervoso central</strong> da instalação.</p>

<h2>Parte I: A Conexão Crítica EEV-Compressor e as Consequências da Perda de Pacotes</h2>
<p>Em um sistema VRF, dezenas de evaporadoras (IDUs) modulam sua capacidade térmica de forma independente e simultânea. O compressor inverter ajusta continuamente sua rotação (modulando de <strong>6% a 100%</strong> de sua frequência nominal, normalmente controlada em Hertz) com base na demanda agregada reportada pelas IDUs. O dispositivo de expansão mecânica tradicional (TXV) foi substituído pela <strong>Válvula de Expansão Eletrônica (EEV)</strong>, acionada por um motor de passo síncrono que divide uma rotação completa em centenas de passos microscópicos.</p>
<p>Se ocorrer ruído eletromagnético ou desconexão física na fiação, os pacotes de dados são corrompidos ou perdidos. Perante a perda de comunicação, o microcontrolador da IDU continua operando temporariamente com a última instrução recebida. Se a carga térmica no ambiente cair repentinamente e a EEV permanecer paralisada indevidamente em alta abertura devido à cegueira de dados (data blindness), o refrigerante líquido não encontrará calor suficiente no evaporador e passará direto para o estado líquido de volta ao compressor.</p>
<p>Como os compressores herméticos são dimensionados para comprimir estritamente vapores gasosos, a entrada de líquido cria duas falhas catastróficas imediatas: o <strong>Golpe de Líquido (Slugging)</strong>, choque hidrostático violento que quebra instantaneamente as espirais do conjunto scroll ou as válvulas de admissão, e a <strong>Lavagem de Óleo (Oil Washout)</strong>, onde o refrigerante líquido atua como solvente químico lavando a película de óleo éster ou éter das placas do scroll e mancais metálicos, provocando escoriação mecânica (galling), superaquecimento interno por atrito e aprisionamento (seccionamento) do motor do compressor.</p>

<h2>Parte II: A Física da Camada Física RS-485</h2>
<p>Embora os fabricantes utilizem codificações lógicas proprietárias, a camada física eletromagnética de base é derivada da norma industrial <strong>EIA/RS-485</strong>. A resiliência física do barramento RS-485 contra induções externas reside no método de <strong>sinalização diferencial</strong>. A linha RS-485 utiliza dois fios condutores (Data A e Data B) de polaridade oposta. O chip receptor decodifica a informação baseando-se estritamente na <strong>diferença de potencial (V_A - V_B)</strong> entre os dois fios, ignorando flutuações simultâneas em relação à terra.</p>
<p>Um dos maiores erros cometidos em campo é considerar que barramentos RS-485 necessitam apenas de 2 fios para comunicação. Na prática, a especificação técnica do padrão estabelece limites estritos para a <strong>Tensão de Modo Comum (Vcm)</strong> entre os transceptores, que deve situar-se estritamente entre <strong>-7V e +12V</strong>. Sem uma terceira conexão física para equipotencializar os drivers de dados (Signal Ground / Common), o desalinhamento de potencial de terra de locais distantes cria tensões que rompem a barreira dielétrica interna dos transceptores por <strong>Latch-up</strong>, destruindo permanentemente a porta serial da placa controladora.</p>

<h2>Parte III: Ruídos de Alta Frequência, Inversores de Frequência (VFDs) e Leis de Indução</h2>
<p>Os transistores IGBT do inversor de frequência alteram a tensão em alta velocidade (tempos inferiores a 100 nanoseconds), gerando transientes elétricos abruptos e altíssimas variações de tensão no tempo (dv/dt). Essa flutuação induz correntes parasitas que fluem capacitivamente para o chassi de aterramento e para o ar na forma de interferência eletromagnética (EMI).</p>
<p>Quando os cabos de controle e dados são colocados paralelos e próximos a cabos de alimentação elétrica de alta potência AC e PWM, o campo magnético oscilante da fiação de potência acopla-se à fiação lógica, regido pela <strong>Lei da Indução de Faraday</strong>. Devido à proximidade de fiação física, o acoplamento magnético cria uma <strong>Indutância Mútua (M)</strong>, induzindo tensões indesejadas na linha de comunicação que corrompem os pacotes de dados. Portanto, o afastamento mecânico é a defesa principal contra o ruído. A Mitsubishi Electric, por exemplo, exige uma separação física mínima absoluta de <strong>50 mm</strong> entre cabos M-Net e fiação de força, e proíbe a passagem de cabos de dados dentro do mesmo eletroduto que contém fios de alimentação AC.</p>

<h2>Parte IV: A Geometria e Material Science do Shielded Twisted Pair (STP)</h2>
<p>Para proteger a linha serial contra a penetração de ruídos EMI, utiliza-se a arquitetura de cabos <strong>Par Trançado Blindado (STP - Shielded Twisted Pair)</strong>. A trança geométrica dos fios Data A e Data B é o elemento primário de rejeição de ruído: qualquer campo magnético externo intercepta ambos os condutores com a mesma intensidade e polaridade, anulando-se matematicamente no cálculo diferencial do receptor. Desfazer a trança do cabo por mais de 50 mm em bornes de conexão destrói essa simetria física, tornando o ponto vulnerável a captação de ruídos de alta frequência.</p>
<p>Envolvendo o par trançado há uma blindagem metálica de alumínio (foil) ou trança de cobre, que funciona como uma <strong>Gaiola de Faraday</strong>, bloqueando ruídos eletrostáticos e radiofrequência (RF) externos. As correntes parasitas interceptadas pela blindagem devem ser escoadas para a terra, limpando o caminho lógico.</p>

<h2>Parte V: Arquitetura e Engenharia de Topologia Linear (Daisy-Chain)</h2>
<p>Em redes seriais VRF de alta frequência, a fiação deve ser instalada de forma estritamente linear (topologia <strong>Daisy-Chain</strong>), partindo da ODU para a primeira IDU, desta para a segunda, sucessivamente, até alcançar o último dispositivo. Isso cria uma linha de transmissão contínua com impedância característica uniforme (tipicamente de <strong>120 ohms</strong>).</p>
<p>O uso de topologia em estrela ou derivações em T (T-Tap) é proibido. A alteração física cria desalinhamentos de impedância drásticos e faz com que parte da energia das ondas de dados seja refletida de volta em direção à fonte (<strong>Reflexão de Sinal</strong>). As ondas refletidas colidem com novos pulsos gerando distorções de overshoot e ringing, que corrompem as leituras digitais. Para evitar reflexões nas pontas físicas abertas da fiação, é obrigatório o uso de <strong>Resistores de Terminação de 120 ohms</strong> exclusivamente nas duas extremidades físicas da linha (o primeiro e o último nó).</p>

<h2>Parte VI: O Efeito Antena de Loop de Terra e Blindagem Eletromagnética</h2>
<p>A blindagem metálica (shield) do cabo STP exige a aplicação rigorosa da <strong>Regra de Aterramento em Único Ponto (One-End Grounding)</strong>. O dreno do shield metálico deve ser emendado sequencialmente de forma contínua em cada evaporadora ao longo da rede, mas <strong>nunca deve ser conectado ao chassi metálico de nenhuma evaporadora</strong> (IDU). O shield deve ser mantido flutuante e isolado nas IDUs. A blindagem metálica deve ser aterrada em <strong>uma única extremidade física</strong>, especificamente no borne de aterramento dedicado da condensadora central (ODU).</p>
<p>Se o shield for aterrado em duas pontas distintas, cria-se um <strong>Ground Loop</strong> (loop de terra) devido a pequenas diferenças de potencial elétrico entre as hastes de aterramento do prédio. Essa diferença de potencial força uma corrente elétrica circulante a percorrer a blindagem metálica do cabo de dados. A fiação de sinal aterrada em múltiplos pontos forma uma grande espira condutora fechada que funciona como uma <strong>Antena de Loop Gigante</strong>, interceptando campos magnéticos de 50/60 Hz adjacentes e induzindo ruídos destrutivos diretamente no par trançado de dados.</p>

<h2>Parte VII: Filosofias OEM de Engenharia: Daikin vs. Mitsubishi Electric</h2>
<p>A <strong>Daikin D-Bus (DIII-NET)</strong> recomenda o uso de cabo de duas vias flexível multifilar (stranded), bitola de <strong>16 a 18 AWG, sem blindagem metálica (unshielded)</strong>. O objetivo é eliminar o erro humano comum em campo de aterrar shields em duas pontas e criar loops de terra destrutivos. O protocolo opera em corrente contínua modulada de alta amplitude (16VDC). Para manter a integridade, exige fios stranded, cuja maior área superficial minimiza a atenuação por efeito pelicular (skin effect). Se o shield for exigido por códigos locais, deve ser conectado à terra apenas na condensadora ODU.</p>
<p>A <strong>Mitsubishi M-Net</strong> exige estritamente o uso de cabos blindados de duas vias, bitola de <strong>1,25 mm² (16 AWG)</strong>, padrão <strong>CVVS/CPEVS</strong>. As placas Mitsubishi possuem bornes dedicados marcados com a letra <strong>"S"</strong> (Shield) que funcionam como um barramento interno de continuidade isolado do chassi de terra em todas as IDUs, devendo ser aterrados apenas na ODU central.</p>

<h2>Parte VIII: Matrizes Diagnósticas e Identificação de Erros Crônicos</h2>
<p>Quando ocorrem falhas de sinalização, o sistema gera códigos de erro para interromper o funcionamento e salvar os compressores: o <strong>Código H0</strong> (Trane/Midea/TVR) indica perda de dados entre a placa central e a placa do inversor do compressor (se persistir por 2 minutos, força parada geral de proteção); o <strong>Código F6</strong> indica falha de feedback da EEV (no receptor de pulsos do motor de passo síncrono). Nesses cenários, a ferramenta <strong>EEVMATE</strong> permite isolar a causa ativando o <strong>"Turbo Mode"</strong>: acionando a EEV de forma direta e rápida a 10x de velocidade. Se a válvula responder normalmente, a falha é confirmada como de comunicação eletromagnética exclusiva (presença de ground loops, derivações inadequadas ou EMI).</p>
          `,
          tabelas_html: `
<h2>Matriz Comparativa de Protocolos de Comunicação VRF</h2>
<table>
  <thead>
    <tr>
      <th>Parâmetro de Comparação</th>
      <th>Daikin DIII-NET (D-Bus)</th>
      <th>Mitsubishi M-Net</th>
      <th>Padrão Industrial RS-485</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Tensão do Barramento</strong></td>
      <td>16 VDC (Pulsado)</td>
      <td>22 a 30 VDC</td>
      <td>Diferencial (-7V a +12V Vcm)</td>
    </tr>
    <tr>
      <td><strong>Tipo de Cabo Padrão</strong></td>
      <td>16-18 AWG Stranded, Sem Blindagem</td>
      <td>1.25 mm² (16 AWG) Blindado CVVS</td>
      <td>22-24 AWG STP com dreno</td>
    </tr>
    <tr>
      <td><strong>Topologia Permitida</strong></td>
      <td>Daisy-Chain Linear</td>
      <td>Daisy-Chain Linear (estrito)</td>
      <td>Daisy-Chain com resistores term.</td>
    </tr>
    <tr>
      <td><strong>Ponto de Aterramento</strong></td>
      <td>Somente condensadora (se usar shield)</td>
      <td>Borne "S" em IDUs, aterrado em ODU</td>
      <td>ODU ou mestre da rede predial</td>
    </tr>
    <tr>
      <td><strong>Filosofia de Segurança</strong></td>
      <td>Eliminação de erros de loops em campo</td>
      <td>Blindagem total e barramento de continuidade</td>
      <td>Equipotencialização de terras prediais</td>
    </tr>
  </tbody>
</table>

<h3>Matriz Diagnóstica de Falhas Físicas na Rede de Dados</h3>
<table>
  <thead>
    <tr>
      <th>Sintoma Detectado</th>
      <th>Causa Física Provável</th>
      <th>Impacto Térmico no Ciclo</th>
      <th>Código Comum de Erro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Derivação em T-Tap na Linha</strong></td>
      <td>Reflexão de sinal e ruído de ringing</td>
      <td>EEV blindada emperra aberta; compressor destrói por slugging</td>
      <td><strong>U4</strong> (Daikin) / <strong>6607</strong> (Mitsubishi)</td>
    </tr>
    <tr>
      <td><strong>Aterramento em Duas Pontas</strong></td>
      <td>Loop de terra e efeito antena de loop</td>
      <td>Corrupção de pacotes lógica; queima física de transceptor</td>
      <td><strong>U4</strong> (Daikin) / <strong>H0</strong> (Trane)</td>
    </tr>
    <tr>
      <td><strong>Falta de Referência de Terra</strong></td>
      <td>Diferença de tensão de modo comum</td>
      <td>Colapso interno de chips por Latch-up eletrostático</td>
      <td><strong>U4</strong> (Daikin) / <strong>6607</strong> (Mitsubishi)</td>
    </tr>
    <tr>
      <td><strong>Instalação Paralela a Cabo Força</strong></td>
      <td>Indução magnética (Faraday)</td>
      <td>Parada súbita do compressor sob alta aceleração</td>
      <td><strong>H0</strong> / <strong>F6</strong> (TVR/Midea)</td>
    </tr>
    <tr>
      <td><strong>Resistor de Terminação Faltante</strong></td>
      <td>Sinal rebate nas pontas abertas</td>
      <td>Queda intermitente de IDUs; erro na leitura de sensores</td>
      <td><strong>6607</strong> (Mitsubishi) / <strong>U4</strong> (Daikin)</td>
    </tr>
  </tbody>
</table>
          `,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 04-03</h2>

<div class="infobox-warning">
  <h3>🚨 A RELAÇÃO CABO-COMPRESSOR — Falha de Rede Destrói o Motor</h3>
  <p>Entenda que um cabo de comunicação serial mal conectado ou com ruído não causa apenas um transtorno digital. Se o sinal falhar, as placas lógicas das evaporadoras perdem a sincronia com a condensadora. A EEV pode travar aberta enquanto o compressor acelera, forçando o retorno de refrigerante líquido à sucção. O compressor sofrerá <strong>Golpe de Líquido (slugging) ou Lavagem de Óleo (washout)</strong>, fundindo mecanicamente a espiral scroll em minutos. <strong>Trate cabos de rede com o mesmo rigor mecânico de linhas frigorígenas.</strong></p>
</div>

<div class="infobox-warning">
  <h3>🚨 O EFEITO ANTENA DE LOOP DE TERRA — Nunca Aterre Duas Pontas</h3>
  <p>Jamais realize a fixação física do shield ou cabo de dreno em estruturas metálicas ou carcaças das evaporadoras e condensadoras simultaneamente. Aterrar a blindagem nas duas pontas cria um loop de terra predial que converte o cabo em uma antena receptora gigante de ruídos de 50/60 Hz de motores, elevadores e fiação AC. <strong>A regra de ouro é: interligue os drenos sequencialmente em bornes isolados e realize a conexão de aterramento em apenas uma extremidade (no borne da condensadora).</strong></p>
</div>

<div class="infobox-tip">
  <h3>⚡ PROCEDIMENTO PARA TESTE DE RESISTÊNCIA DE EEV E ISOLAMENTO</h3>
  <p>Caso suspeite de falha física em uma Válvula de Expansão Eletrônica (EEV): meça a resistência com o ohmímetro nos terminais do plugue do motor de passo (normalmente pinos adjacentes exibem de 40 a 50 &Omega;). Se a medição estiver conforme, utilize uma ferramenta de teste como o <strong>EEVMATE</strong> em "Turbo Mode" para injetar pulsos diretos a 10x de velocidade na válvula. Se ela abrir e fechar livremente, o problema reside estritamente na corrupção de pacotes lógicos da rede física de dados (ground loops ou proximidade de calhas de potência).</p>
</div>
          `,
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // MÓDULO 05 - Aplicações Comerciais e Industriais
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 5,
      titulo: "MÓDULO 05 — Aplicações Comerciais e Industriais",
      descricao:
        "HVAC comercial de elite, tubulação VRF avançada, câmaras frias e o padrão Zero Leak.",
      icone: "building",
      cor: "indigo",
      aulas: [
        {
          id: "05-01",
          titulo: "Engenharia de precisão na climatização comercial",
          modulo: "MÓDULO 05 - 01",
          videos: [
            {
              titulo:
                "Engenharia de precisão na climatização comercial - MÓDULO 05 - 01",
              link: "https://youtu.be/lwRTD350DAM",
              tipo: "videoaula",
            },
            {
              titulo: "HVAC Comercial de Elite - MÓDULO 05 - 01",
              link: "https://youtu.be/Z_6xAQuAz9k",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-05/Modulo-05-01-Elite Commercial HVAC Installation Training.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/lwRTD350DAM",
          link_podcast: "https://youtu.be/Z_6xAQuAz9k",
          total_slides: 15,
          fontes_imagens: Array.from({ length: 16 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo05/modulo05-01/Modulo-05-01-Elite Commercial HVAC Installation Training-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>Introdução: O Limiar entre a Eficiência e a Patologia Predial</h2>
<p>Em ambientes corporativos B2B, hotelaria de luxo e varejo de alto padrão, a climatização não se resume a reduzir a temperatura marcada em um termostato. O ocupante de uma sala de reuniões executiva, de um quarto de hotel de luxo ou de uma loja de grife exige uma experiência atmosférica invisível e silenciosa. O fluxo de ar deve ser imperceptível, a acústica deve ser de estúdio de gravação e a qualidade do ar interior (IAQ) deve ser impecável. Sistemas comerciais de grande porte (como evaporadoras do tipo cassete de 4 vias ou dutados comerciais embutidos) se instalados de forma inadequada sofrem falhas mecânicas crônicas, provocam danos estruturais imediatos no forro e geram graves passivos de saúde pública predial.</p>

<h2>Parte I: Serpentina de 4 Vias e a Aerodinâmica do Efeito Coanda</h2>
<p>As evaporadoras de cassete aproveitam o <strong>Efeito Coanda</strong> (patenteado por Henri Coandă em 1934 e formalizado na comunidade científica por Theodore von Kármán) para descarregar o ar de forma homogênea no ambiente. Quando o ar condicionado é insuflado em alta velocidade paralelamente ao forro plano, ele entorta e arrasta o ar estático ao redor, criando uma zona de <strong>baixa pressão localizada</strong> entre o teto e o jato de ar. A pressão atmosférica abaixo força o jato de ar frio a "grudar" no teto e percorrer distâncias substanciais antes de perder velocidade mecânica e descer suavemente por gravidade sobre a zona ocupada.</p>
<p>Os principais benefícios são a <strong>eliminação de drafts (correntes frias de ar sobre os ocupantes)</strong>, a <strong>uniformidade térmica vertical</strong> e a <strong>redução de ruídos de turbulência</strong> (pois o ventilador pode operar com velocidades de insuflamento menores). No entanto, o Efeito Coanda é frágil e qualquer barreira física (luminárias suspensas, vigas estruturais ou rebaixamentos de gesso) rompe a zona de vácuo parcial, descolando o fluxo de ar e fazendo-o despencar como uma corrente fria concentrada.</p>
<p>Para evitar essa quebra de camada, exige-se distância de 500mm a 1000mm de qualquer obstáculo. Se a evaporadora ficar em cantos, kits de bloqueio físico de fábrica devem vedar os louvers adjacentes à parede e a placa eletrônica deve ser programada para operar em 3 ou 2 vias. Além disso, as configurações de altura do teto devem ser ajustadas no controle remoto com fio (ex: Daikin BRC) para regular a vazão e velocidade de insuflamento ideal de acordo com o pé-direito do local (ex: Daikin FCAHG71 requer ajuste para &lt;2.7m, 2.7-3.0m ou até 3.5m).</p>

<h2>Parte II: Gerenciamento Hidráulico de Condensado e Nivelamento Dinâmico</h2>
<p>As unidades cassete operam com bombas centrífugas internas capazes de elevar a água condensada verticalmente em <strong>850 mm a 910 mm</strong> acima da bandeja. O acionamento da bomba é ditado por um sensor de boia magnética (Float Switch). Quando a boia sobe com a água, fecha-se o contato que ativa a bomba centrífuga. Se a água subir excessivamente por pane elétrica, a boia atinge o ponto máximo abrindo o circuito que desliga o ciclo de refrigeração.</p>
<p>Se a unidade cassete for montada fora de nível:</p>
<ol>
  <li><strong>Travamento da Boia:</strong> A boia raspará lateralmente na haste guia, travando no topo (causando dry running e queima térmica da bomba por calor) ou travando na base (causando vazamento imediato sobre o forro gesso).</li>
  <li><strong>Pooling Oposto:</strong> A inclinação afasta a água do bocal de sucção da bomba centrífuga, acumulando-se no lado oposto até transbordar sobre o ambiente, sem ativar o interruptor de nível, ou fazendo a bomba succionar ar, gerando cavitação e ruído.</li>
</ol>
<p>A linha de descarga do dreno deve subir verticalmente logo na saída da boia antes de inclinar horizontalmente com no mínimo <strong>1% (1:100)</strong> de declive em direção à tubulação de dreno por gravidade geral. Reduza curvas de 90° para atenuar as perdas por atrito estático da bomba.</p>

<h2>Parte III: Conceitos Avançados para Dutados Embutidos e Dinâmica de Fluidos</h2>
<p>A vazão de ar condicionado em condutos metálicos ou flexíveis depende do motor vencer a resistência de atrito estático das paredes, conexões e grelhas. Essa carga resistiva é a <strong>Pressão Estática Externa Total (TESP)</strong>. Motores PSC convencionais expostos a excessos de pressão estática sofrem colapso de fluxo de ar, congelando a serpentina e provocando retorno de refrigerante líquido ao compressor. Motores ECM modernos reagem elevando excessivamente o giro (RPM) para manter a vazão calibrada, gerando ruído intenso e queima térmica imediata da placa eletrônica de potência por sobrecorrente.</p>
<p>Os técnicos devem projetar baseados no <strong>Comprimento Efetivo Total (TEL)</strong>, acumulando o comprimento linear real e os comprimentos equivalentes dinâmicos de cada conexão (curva de 90° rígida acrescenta o equivalente a 24-30 metros de duto retilíneo; curvas flexíveis acrescentam 3-5 metros). A perda estática final é comparada aos limites nominais da máquina para dimensionamento exato da fita de fricção.</p>

<h2>Parte IV: Acoplamento Acústico e o Impacto Físico de Conectores Canvas Flexíveis</h2>
<p>As vibrações geradas pelos motores dos ventiladores propagam-se através dos dutos metálicos se houver acoplamento rígido. Para neutralizar esse ruído mecânico predial, usam-se juntas de lona flexível retardantes de chamas conhecidas como <strong>Conectores Canvas</strong>. Eles devem ter classificação UL 723 (propagação de chama &lt;25; fumaça &lt;50), comprimento menor que 250 mm (10 polegadas) e estar perfeitamente alinhados, sem suportar carga mecânica (dutos e aparelhos suspensos de forma independente).</p>
<p>Se o conector flexível for instalado desalinhado ou com excesso de folga (slack): no insuflamento o tecido inflará restringindo a saída da turbina, e no retorno murchará funcionando como uma barreira física direta (efeito baffle). Uma compressão de apenas 4% em condutos flexíveis reduz o fluxo de ar em 36%; um enrugamento de 15% restringe a vazão em 63%, sobrecarregando o motor ECM e anulando o amortecimento acústico.</p>

<h2>Parte V: A Proibição Crítica do Retorno por Plenum de Entreforro Aberto</h2>
<p>Utilizar o espaço acima do gesso rebaixado (plenum) como retorno coletivo sem condutos dedicados é um grave erro sanitário e energético. O vácuo de sucção da evaporadora dutada em zonas sujas extrai materiais de alta toxicidade que são recirculados no ambiente condicionado: microfibras de lã de vidro desprendidas por fluxo turbulento; gases voláteis nocivos (como formaldeídos de colas e isolamentos); e esporos fúngicos (mofo) nascidos de condensação em tubulações frias não isoladas. O retorno <strong>100% dutado e estanque</strong> é obrigatório para isolar essas patologias biológicas e permitir a sanitização adequada da rede.</p>
`,
          tabelas_html: `
<h2>Parâmetros Aerodinâmicos e de Projeto de Dutos (NBR 16401)</h2>
<table>
  <thead>
    <tr>
      <th>Elemento Dinâmico</th>
      <th>Velocidade Recomendada (m/s)</th>
      <th>Velocidade Limite (Acoustic)</th>
      <th>Perda de Pressão Alvo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Dutos de Insuflamento Principal</strong></td>
      <td>4,0 a 6,0 m/s</td>
      <td>Máximo 7,5 m/s</td>
      <td>0,8 a 1,0 Pa/m</td>
    </tr>
    <tr>
      <td><strong>Ramais de Distribuição</strong></td>
      <td>3,0 a 4,5 m/s</td>
      <td>Máximo 5,0 m/s</td>
      <td>0,6 Pa/m</td>
    </tr>
    <tr>
      <td><strong>Dutos de Retorno Principal</strong></td>
      <td>3,5 a 5,0 m/s</td>
      <td>Máximo 6,0 m/s</td>
      <td>0,8 Pa/m</td>
    </tr>
    <tr>
      <td><strong>Velocidade de Face (Grelha Insufl.)</strong></td>
      <td>1,5 a 2,5 m/s</td>
      <td>Máximo 3,0 m/s</td>
      <td>&lt; 15 Pa (Grelha)</td>
    </tr>
    <tr>
      <td><strong>Velocidade de Face (Grelha Retorno)</strong></td>
      <td>1,5 a 2,0 m/s</td>
      <td>Máximo 2,5 m/s</td>
      <td>&lt; 12 Pa (Grelha)</td>
    </tr>
  </tbody>
</table>

<h3>Matriz Diagnóstica: Anomalias Hidráulicas e de Fluxo de Ar</h3>
<table>
  <thead>
    <tr>
      <th>Sintoma Clínico Detectado</th>
      <th>Causa Raiz Física</th>
      <th>Consequência Térmica no Ciclo</th>
      <th>Ação Corretiva Recomendada</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Bomba centrífuga rodando sem parar</strong></td>
      <td>Boia do Float Switch presa na haste guia</td>
      <td>Burnout elétrico da bomba por atrito seco</td>
      <td>Ajustar nivelamento tridimensional da evaporadora.</td>
    </tr>
    <tr>
      <td><strong>Gelo na serpentina + Baixo Delta T</strong></td>
      <td>Elevada TESP por duto flexível estrangulado</td>
      <td>Congelamento por falta de vazão; quebra do compressor</td>
      <td>Redimensionar TEL dos dutos e esticar canvas canvas.</td>
    </tr>
    <tr>
      <td><strong>Vazamento de água em canto oposto</strong></td>
      <td>Inclinação do cassete no sentido inverso da bomba</td>
      <td>Inundação do forro e danos em aparelhos inferiores</td>
      <td>Nivelar unidade usando mangueira de água em diagonal.</td>
    </tr>
    <tr>
      <td><strong>Temperatura ciclando rápido (Short-cycling)</strong></td>
      <td>Air Short-Circuiting (Cassete muito rente à parede)</td>
      <td>Compressor opera sem desumidificar; queima rápida do motor</td>
      <td>Bloquear louver adjacente e programar placa para 3 vias.</td>
    </tr>
    <tr>
      <td><strong>Odor de mofo persistente no ambiente</strong></td>
      <td>Retorno por Plenum de Entreforro Aberto</td>
      <td>Aspiração de esporos fúngicos e alérgenos de gesso/cimento</td>
      <td>Instalar duto de retorno estanque acoplado direto à grelha.</td>
    </tr>
  </tbody>
</table>
`,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 05-01</h2>

<div class="infobox-warning">
  <h3>🚨 COMPRESSÃO DE DUTOS FLEXÍVEIS — Perdas Drásticas Invisíveis</h3>
  <p>Dutos flexíveis de alumínio sanfonados são grandes geradores de perda de carga se não forem puxados com estiramento mecânico total. Uma folga mínima que crie rugosidade interna pode quadruplicar o fator de atrito equivalente do tubo. Limite o uso de dutos flexíveis a ramais finais de no máximo <strong>1,5 metros</strong> para acoplamento final a difusores, mantendo o restante da rede em duto rígido de chapa ou poliuretano (P3).</p>
</div>

<div class="infobox-warning">
  <h3>🚨 CAVITAÇÃO E ACÚMULO DE LODOS NA BANDEJA</h3>
  <p>A bandeja de dreno do cassete opera acumulando poeira e microrganismos da purificação do ar. O acúmulo de lodo biológico obstrui a boia de dreno e bloqueia a bomba. Adicione pastilhas bactericidas periódicas de liberação lenta na bandeja e realize o teste de purga manual derramando pelo menos <strong>700 ml</strong> de água limpa na extremidade da bandeja durante a manutenção preventiva.</p>
</div>
`,
        },
        {
          id: "05-02",
          titulo: "Por que 15 graus destroem o VRF",
          modulo: "MÓDULO 05 - 02",
          videos: [
            {
              titulo:
                "Por que 15 graus destroem o VRF - MÓDULO 05 - 02",
              link: "https://youtu.be/N0LsVV054og",
              tipo: "videoaula",
            },
            {
              titulo: "A Física da Tubulação - MÓDULO 05 - 02",
              link: "https://youtu.be/IXPgTIE0Dvc",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-05/Modulo-05-02-VRF Piping Masterclass_ Fluid Dynamics.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/N0LsVV054og",
          link_podcast: "https://youtu.be/IXPgTIE0Dvc",
          total_slides: 15,
          fontes_imagens: Array.from({ length: 18 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo05/modulo05-02/Modulo-05-02-VRF Piping Masterclass_ Fluid Dynamics-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>Introdução: O Axioma da Sobrevivência do VRF</h2>
<p>Existe uma máxima consagrada entre engenheiros mecânicos e projetistas de climatização comercial de alto desempenho: <strong>sistemas VRF/VRV não morrem de velhice; eles morrem por erros de geometria na tubulação de cobre.</strong> Ao migrar de splits hi-wall simples ou chillers para a tecnologia de Fluxo de Refrigerante Variável, o instalador assume uma responsabilidade termodinâmica sem precedentes. A condensadora externa central (ODU) com compressor inverter empurra continuamente uma mistura complexa e bifásica de fluido refrigerante líquido, vapor superaquecido e <strong>óleo lubrificante</strong> por distâncias imensas. O óleo (geralmente PVE ou POE) deve circular misturado ao refrigerante e retornar ao compressor continuamente. Se a tubulação sofrer desvios geométricos microscópicos, o óleo separa-se do fluido, acumula-se nas evaporadoras e cega as válvulas de expansão eletrônicas (EEVs), matando o compressor por <strong>inanição de óleo</strong>.</p>

<h2>Parte I: A Dinâmica de Transporte de Óleo Lubrificante e Fluidos</h2>
<p>Os compressores scroll inverter modulam sua velocidade continuamente (10 Hz a mais de 100 Hz). Os rolamentos e espirais do scroll necessitam de uma película microscópica constante de óleo lubrificante para evitar desgaste metálico direto. Durante o funcionamento, uma porcentagem do óleo do cárter (<strong>0,5% a 1%</strong> da massa) é arrastada com o refrigerante. Em sistemas comerciais, toda a carga de óleo do compressor pode ser bombeada para fora em menos de <strong>50 minutos</strong> de operação. Se a tubulação não favorecer o retorno de óleo, o compressor sofrerá burnout mecânico rapidamente.</p>
<p>Os sistemas modernos utilizam majoritariamente óleo sintético <strong>PVE (Polyvinyl Ether)</strong>. Ele é miscível com HFC/HFO e não forma ácidos corrosivos por hidrólise como o POE. No entanto, o PVE é extremamente higroscópico. Em presença de umidade, o PVE absorve a água e transforma-se em um <strong>lodo gelatinoso espesso e viscoso</strong>. Este lodo bloqueia os filtros strainers e as portas das EEVs. Para arrastar o óleo viscoso, a velocidade do vapor deve manter-se alta, criando o regime de <strong>Escoamento Anular (Annular Flow)</strong>, onde o líquido e o óleo coatam as paredes internas do tubo de cobre como um filme uniforme, evitando o escoamento estratificado (onde o óleo corre lentamente no fundo do tubo).</p>

<h2>Parte II: A Física dos Refnets e a Regra Crítica de Inclinação de ±15 Graus</h2>
<p>Diferente de conexões em T (Tee Joint) comuns que provocam quedas violentas de pressão, turbulências e má distribuição de fase (enviando líquido para um lado e vapor para o outro), o <strong>Refnet</strong> (Y-Joint) é projetado com transições suaves que dividem simetricamente o filme líquido e o vapor. Para garantir essa divisão simétrica, os Refnets instalados de forma horizontal nas linhas principais devem respeitar uma tolerância geométrica estrita: <strong>nunca inclinar mais de ±15° em relação ao plano horizontal da edificação.</strong></p>
<p>Se o Refnet for inclinado a 20° ou 30°, a gravidade puxa o líquido denso e o óleo lubrificante para a ramificação inferior, enquanto o vapor leve sobe pelo ramal superior, transformando o distribuidor em um separador mecânico de fases involuntário.</p>

<h2>Parte III: O Efeito Dominó de Falhas: Flooding, Hunting e Queima</h2>
<p>A inclinação inadequada de um Refnet horizontal desencadeia uma reação termodinâmica destrutiva em cascata:</p>
<ol>
  <li><strong>O Ramal Inferior Inundado:</strong> A evaporadora correspondente recebe excesso de líquido. Os sensores medem sobreaquecimento nulo (SH = 0K). Para proteger o compressor, a controladora da IDU fecha a sua EEV. Com a velocidade local do fluido zerada, o óleo PVE/POE perde arraste e fica retido na serpentina.</li>
  <li><strong>O Ramal Superior Faminto:</strong> A evaporadora superior recebe apenas vapor. O vapor tem baixa capacidade de refrigeração; o ambiente esquenta e os sensores registram alto sobreaquecimento. A IDU abre totalmente sua EEV para tentar resfriar a sala, mas a gravidade impede que o líquido suba. A EEV entra em <strong>hunting (oscilação errática)</strong> de abertura e fechamento a seco, travando o motor de passo.</li>
  <li><strong>A Queima do Compressor:</strong> O compressor central funciona em velocidade máxima para resfriar a IDU faminta. Ele envia mais óleo para a rede, mas o óleo fica represado na IDU inundada. Com o cárter vazio, as espirais e mancais rodam sem lubrificação, derretendo o motor e provocando travamento mecânico por rotor bloqueado (LRA).</li>
</ol>

<h2>Parte IV: A Regra 20/40 para Fluxos Laminares</h2>
<p>Para garantir que o refrigerante entre de forma simétrica no Refnet, o fluxo deve ser laminar. Curvas ou reduções a menos de <strong>500 mm (20 polegadas)</strong> antes ou depois do Refnet jogam o líquido contra as paredes do tubo por força centrífuga, desregulando a divisão. É mandatório manter 500 mm retos antes e depois. Entre dois Refnets instalados em sequência, o trecho retilíneo mínimo deve ser de <strong>1000 mm (40 polegadas)</strong> para dissipar turbulências.</p>

<h2>Parte V: Limites Dimensionais de Projeto do Ciclo Termodinâmico</h2>
<p>O volume e perda de carga impõem restrições geométricas severas à rede de tubulação de cobre:</p>
<ul>
  <li><strong>Comprimento Efetivo Total (TEL):</strong> Soma de tubos físicos e perdas equivalentes de conexões (ex: sifão adiciona 3.4m). Capped em <strong>1000 metros</strong> para evitar excesso de carga de refrigerante.</li>
  <li><strong>Distância ODU ao Farthest IDU:</strong> Limitada a <strong>165 metros reais</strong>. Distâncias maiores causam queda de pressão estática na sucção, superaquecendo o óleo e forçando taxas de compressão extremas da condensadora.</li>
  <li><strong>Desníveis Verticais:</strong> ODU acima das IDUs é limitada a <strong>50 metros</strong> verticais. ODU abaixo das IDUs é limitada a <strong>40 metros</strong> para evitar a perda de pressão hidrostática que causa evaporação precoce (Flash Gas na linha de líquido). O desnível máximo entre IDUs é limitado a 15-30 metros.</li>
</ul>

<h2>Parte VI: Risers Verticais, Horizontal Pitching e Sifões de Óleo</h2>
<p>Em subidas verticais de sucção superiores a 7.5 metros, deve-se instalar um <strong>sifão de óleo (P-trap)</strong> na base do riser e a cada 6 metros verticais. O sifão acumula uma quantidade de óleo no seu fundo em "U", reduzindo a seção livre do tubo e aumentando a velocidade local do gás para soprar o plugue de óleo para a seção de subida seguinte (como uma escada aerodinâmica). Em trechos horizontais com mais de 6 metros de extensão, mantenha uma declividade descendente mínima de <strong>1%</strong> no sentido do fluxo para a condensadora.</p>

<h2>Parte VII: Branch Selector (BS) Boxes nos Sistemas de Recuperação de Calor</h2>
<p>Os sistemas VRF de Recuperação de Calor (simultaneous heating/cooling) utilizam rede de 3 tubos (sucção de baixa, descarga de gás quente e linha de líquido). A <strong>Branch Selector (BS) Box</strong> atua como um direcionador mecânico com solenoides e sensores. Se uma IDU pede aquecimento, ela recebe gás de descarga quente, condensa o gás na serpentina interna e a BS box desvia este líquido gerado diretamente para a evaporadora adjacente que pede resfriamento. Para garantir que o líquido vá denso e sem flash gas, a BS box integra um trocador de placas brasadas de subresfriamento que resfria o fluxo principal abaixo de 26°C.</p>
`,
          tabelas_html: `
<h2>Matriz de Limites Geométricos de Tubulações VRF Comerciais</h2>
<table>
  <thead>
    <tr>
      <th>Parâmetro de Geometria da Rede</th>
      <th>Limite Máximo Recomendado (Daikin/Mitsubishi)</th>
      <th>Consequência Termodinâmica da Violação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Comprimento Efetivo Total (TEL)</strong></td>
      <td>1000 metros</td>
      <td>Sobrecarga hidrostática do sistema; transbordo de acumulador</td>
    </tr>
    <tr>
      <td><strong>ODU ao Farthest IDU (Linear Real)</strong></td>
      <td>165 metros</td>
      <td>Queda acentuada de pressão de sucção; superaquecimento</td>
    </tr>
    <tr>
      <td><strong>Desnível ODU acima das IDUs</strong></td>
      <td>50 metros</td>
      <td>Incapacidade de arraste de óleo na vertical</td>
    </tr>
    <tr>
      <td><strong>Desnível ODU abaixo das IDUs</strong></td>
      <td>40 metros</td>
      <td>Queda de pressão hidrostática; geração de Flash Gas no líquido</td>
    </tr>
    <tr>
      <td><strong>Desnível IDU-to-IDU Máximo</strong></td>
      <td>15 metros</td>
      <td>Diferencial hidrostático excessivo entre evaporadores</td>
    </tr>
    <tr>
      <td><strong>Inclinação Horizontal do Refnet</strong></td>
      <td>Máximo ± 15°</td>
      <td>Separação de fase líquida/vapor; falta de óleo; queima do scroll</td>
    </tr>
  </tbody>
</table>

<h3>Matriz Diagnóstica: Falhas de Geometria e Lubrificação em Campo</h3>
<table>
  <thead>
    <tr>
      <th>Anomalia Identificada</th>
      <th>Mecanismo Físico Associado</th>
      <th>Sintoma Dinâmico no Ciclo</th>
      <th>Procedimento de Correção</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Refnet inclinado a &gt; 20°</strong></td>
      <td>Separação gravitacional de fase líquida</td>
      <td>IDU inferior SH=0 (EEV fecha); IDU superior faminta (EEV hunt)</td>
      <td>Substituir trecho e nivelar Refnet horizontalmente.</td>
    </tr>
    <tr>
      <td><strong>Conexão curva colada ao Refnet</strong></td>
      <td>Desequilíbrio de fluxo por força centrífuga</td>
      <td>Divisão assimétrica de fluido e perda de capacidade</td>
      <td>Inserir tubo reto de 500 mm antes da bifurcação.</td>
    </tr>
    <tr>
      <td><strong>Riser vertical sem P-Traps</strong></td>
      <td>Falha de arraste vertical por gravidade</td>
      <td>Falta de óleo no cárter; travamento por rotor bloqueado</td>
      <td>Instalar sifão na base e a cada 6m de subida vertical.</td>
    </tr>
    <tr>
      <td><strong>Sludge no cárter e strainers</strong></td>
      <td>Absorção de umidade por óleo PVE higroscópico</td>
      <td>Bloqueio de strainers e portas de EEV; travamento de agulhas</td>
      <td>Substituir óleo; limpar strainers; vácuo triplo &lt;500µ.</td>
    </tr>
  </tbody>
</table>
`,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 05-02</h2>

<div class="infobox-warning">
  <h3>🚨 PURGA DE NITROGÊNIO OBRIGATÓRIA DURANTE A BRASAGEM</h3>
  <p>Durante todo o processo de brasagem com oxiacetileno (foscoper ou prata), é obrigatório purgar o interior da tubulação com nitrogênio seco a baixo fluxo (2 a 3 CFH). Sem a purga, o oxigênio interno reage com o calor gerando óxido cúprico (fuligem abrasiva preta). O refrigerante varrerá essa poeira fina que entupirá strainers e danificará as agulhas das EEVs e placas das caixas BS.</p>
</div>

<div class="infobox-warning">
  <h3>🚨 TESTE DE ESTANQUEIDADE A 550 PSI</h3>
  <p>Devido às altas pressões dos fluidos R-410A e R-32, as linhas brasadas devem passar por teste de estanqueidade pressurizadas com nitrogênio a <strong>550 PSI por pelo menos 24 horas</strong>. Corrija as medições de variação térmica ambiente no manômetro (1°C altera aproximadamente 1.47 PSI) para evitar leituras de falso vazamento.</p>
</div>
`,
        },
        {
          id: "05-03",
          titulo: "A física das câmaras frias industriais",
          modulo: "MÓDULO 05 - 03",
          videos: [
            {
              titulo:
                "A física das câmaras frias industriais - MÓDULO 05 - 03",
              link: "https://youtu.be/yx9l7J4fnAo",
              tipo: "videoaula",
            },
            {
              titulo: "Falha e Perfeição Térmica - MÓDULO 05 - 03",
              link: "https://youtu.be/MvVJBudEOcg",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-05/Modulo-05-03-Cold Room Engineering and Refrigeration Standards.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/yx9l7J4fnAo",
          link_podcast: "https://youtu.be/MvVJBudEOcg",
          total_slides: 15,
          fontes_imagens: Array.from({ length: 20 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo05/modulo05-03/Modulo-05-03-Cold Room Engineering and Refrigeration Standards-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>Introdução: O Conceito de Cofre Térmico Laboratorial</h2>
<p>A engenharia de câmaras frias comerciais e industriais diverge fundamentalmente dos sistemas de climatização de conforto humano. Enquanto o ar condicionado convencional gerencia deltas moderados de temperatura para manter o bem-estar térmico, as câmaras frias industriais operam sob condições de severo estresse termodinâmico. Estas estruturas devem ser projetadas e construídas não simplesmente como salas refrigeradas, mas como <strong>cofres térmicos laboratoriais</strong>. O payload (carga útil) contido nestes espaços — que varia de alimentos perecíveis de alta rotatividade a produtos biofarmacêuticos, vacinas e culturas celulares insubstituíveis — frequentemente representa centenas de milhares ou milhões de dólares em inventário. Qualquer falha de projeto, ponte térmica estrutural ou descalibração mecânica pode resultar na perda catastrófica desse payload.</p>
<p>Para atingir a estabilidade térmica exigida por agências reguladoras como a <strong>FDA (Food and Drug Administration)</strong> americana e a <strong>OMS (Organização Mundial da Saúde)</strong>, o projeto de câmaras frias deve seguir protocolos físicos rigorosos. A conformidade para armazenamento farmacêutico inicia-se com a norma <strong>FDA 21 CFR 203.32</strong>, que exige que fabricantes e distribuidores mantenham amostras de medicamentos sob condições que garantam sua estabilidade, integridade e eficácia. Esta validação técnica requer protocolos exaustivos de comissionamento: Qualificação de Instalação (IQ) para verificar especificações de equipamentos; Qualificação Operacional (OQ) para testar alarmes e estabilidade da câmara vazia; e Qualificação de Desempenho (PQ) que exige estudos de mapeamento térmico com no mínimo 9 pontos de medição em unidades do tipo walk-in.</p>

<h2>Parte I: Montagem Arquitetônica de Painéis Isolantes</h2>
<p>A integridade do cofre térmico começa no envelope estrutural. O principal mecanismo de transferência de calor através do envelope é a condução térmica, impulsionada pelas leis da termodinâmica que buscam igualar a alta energia térmica externa com a baixa energia interna. Para defender essa condução, são utilizados painéis metálicos isolantes de alto valor R (<strong>IMPs - Insulated Metal Panels</strong>). A construção modular moderna baseia-se em três materiais principais para o núcleo isolante: Poliestireno Expandido (EPS), Poliuretano (PUR) e Poliisocianurato (PIR).</p>
<ul>
  <li><strong>Poliestireno Expandido (EPS):</strong> Conhecido comercialmente como Isopor, é um plástico celular leve e de baixo custo. Embora ofereça moderada resistência à umidade e seja usado em depósitos de média temperatura, possui a menor eficiência térmica (R-value por polegada) dos três materiais. Para igualar o isolamento dos poliuretanos, os painéis de EPS precisam ser quase duas vezes mais espessos, reduzindo o espaço útil. O EPS apresenta também maior inflamabilidade e menor rigidez estrutural, sendo inadequado para tetos com vãos elevados.</li>
  <li><strong>Poliuretano (PUR):</strong> É um termofixo gerado pela reação de um poliol com um isocianato. Nas formulações de PUR, os grupos hidroxila (OH) do poliol reagem com os grupos isocianato (NCO) formando ligações de uretano altamente estáveis. Os painéis são fabricados em processo contínuo de injeção ("foamed-in-place"), onde a espuma expande-se e cola quimicamente nas chapas de aço ou alumínio externas, gerando uma colagem monolítica de alta resistência à compressão (150 a 200 kPa) que suporta fortes pressões internas ou vácuo.</li>
  <li><strong>Poliisocianurato (PIR):</strong> Representa a evolução química do PUR. Em sua formulação, utiliza-se um excesso de isocianato sob temperaturas elevadas, provocando uma reação de trimerização dos isocianatos em anéis isocianuratos extremamente estáveis. O PIR possui estabilidade térmica superior e excelente comportamento contra o fogo, obtendo a classificação de reação ao fogo <strong>B-s2,d0</strong> sob a norma europeia EN 13501-1. Enquanto o PUR comum começa a se degradar termicamente a 90°C, o PIR tolera exposição contínua a até 120°C.</li>
</ul>
<p>Os painéis são unidos por encaixes macho-fêmea interlocking acionados por travas mecânicas internas chamadas <strong>cam-locks</strong>. Um ponto crítico de falha em campo é a <strong>ponte térmica</strong>. Os quadros estruturais perimetrais dos painéis, que frequentemente alojam os cam-locks, podem utilizar materiais mais densos que o núcleo de espuma, como madeira de alta densidade ou plásticos rígidos. Como materiais densos conduzem calor com mais facilidade devido ao arranjo molecular compacto, um quadro perimetral de madeira pode transferir <strong>até seis vezes mais calor</strong> que o núcleo de poliuretano. Se as juntas do painel forem mal vedadas ou desalinhadas, essas pontes térmicas permitirão infiltração de calor rápida, condensação localizada e formação de gelo (frosting) nas costuras. Os oficiais de instalação exigem que a câmara esteja perfeitamente nivelada e no prumo. Todos os cam-locks devem ser totalmente travados e as aberturas vedadas com botões plásticos. Microfissuras ou folgas no ângulo do piso devem ser hermeticamente seladas com silicone elastomérico pesado para evitar o desvio de ar e vapor.</p>
<p>Para payloads biológicos ou farmacêuticos, as câmaras devem exceder os padrões alimentares comuns para cumprir normas de sala limpa (ISO Classes 2 a 9, cGMP, GLP e USP 797). Nesses ambientes, as chapas internas dos painéis são revestidas com laminados de uPVC ou tintas com aditivos baseados em <strong>íons de prata ativos</strong>. Estes íons impedem a replicação celular de patógenos como <em>E. Coli</em>, <em>Influenza</em> e <em>MRSA</em>. Adicionalmente, cantos internos de 90° são proibidos. Os painéis devem possuir perfis arredondados (<strong>cantoneiras sanitárias ou perfis coved</strong>), transições de canto de três vias e juntas soldadas a frio ou a quente. Isso gera superfícies contínuas e livres de trincas que impedem o acúmulo de umidade, poeira e proliferação bacteriana, suportando limpezas agressivas com agentes esporicidas e ácidos desinfetantes sem sofrer corrosão.</p>

<h2>Parte II: A Física Absoluta das Barreiras de Vapor</h2>
<p>O elemento mais crítico e frequentemente mal compreendido na arquitetura de câmaras frias é a <strong>barreira de vapor</strong>. O vapor d'água presente na atmosfera desloca-se por difusão molecular gasosa, operando independentemente dos fluxos de vazamento de ar macroscópicos. O ar quente possui uma capacidade exponencialmente maior de reter umidade do que o ar frio. A pressão de saturação de vapor d'água cresce exponencialmente com a temperatura, uma relação governada pela <strong>equação de Clausius-Clapeyron</strong> e calculada empiricamente pela <strong>fórmula de Antoine</strong>. Em uma câmara fria industrial, a temperatura interna é muito menor que o ambiente externo quente e úmido. Isso gera um gradiente permanente e implacável de pressão de vapor — medido em milhares de Pascals — que força a umidade de fora para dentro. Como o fluxo de vapor desloca-se de fora (quente) para dentro (frio), a <strong>Camada de Controle de Ar e Vapor (AVCL)</strong> deve ser posicionada estritamente no <strong>lado quente (exterior) da isolação</strong>. Nos painéis metálicos isolantes (IMPs), as próprias chapas de aço externas funcionam como uma barreira de vapor perfeita com taxa de permeabilidade nula, desde que todas as juntas e transições externas sejam vedadas perfeitamente com selantes impermeáveis. A instalação de uma barreira de vapor no lado frio interno é um erro de engenharia fatal, pois aprisiona a umidade que migra dentro da parede, impedindo que ela seque em direção ao evaporador interno.</p>
<p>Se a barreira de vapor externa falhar ou for perfurada, a umidade migrará pela isolação. Ao penetrar e resfriar, o vapor atinge seu <strong>ponto de orvalho</strong> (a temperatura de saturação onde ocorre a liquefação). A água líquida resultante libera calor latente no isolamento, reduz a resistência térmica (valor R) e sobrecarrega a refrigeração. Em câmaras de congelados, a situação é mais destrutiva: a umidade líquida continua migrando em direção ao interior até cruzar a <strong>isóterma de 0°C (limite de congelamento)</strong>. Ao congelar, a água expande cerca de <strong>9% em volume</strong>. Este fenômeno de congelamento intersticial acumula lentes de gelo espessas no interior da espuma. Estudos micromecânicos de estruturas porosas mostram que a água confinada sob congelamento gera forças hidrostáticas severas, formando protuberâncias capilares que se rompem sob ângulos de contato críticos de aproximadamente 135°. Na macroestrutura do painel, esse ciclo contínuo de congelamento e expansão deforma e descola a chapa metálica da espuma de poliuretano, destruindo a rigidez estrutural da parede e rompendo os cam-locks.</p>

<h2>Parte III: Termodinâmica do Subpiso e o Fenômeno do Frost Heave</h2>
<p>As forças termodinâmicas de uma câmara de congelamento estendem-se para o subsolo. Freezers operando em temperaturas negativas funcionam como sorvedouros térmicos permanentes, extraindo calor da terra situada abaixo do piso de concreto. Com o tempo, o gradiente térmico penetra o isolamento do piso e congela a umidade da terra subjacente. A frente de congelamento atrai água capilar de lençóis freáticos inferiores mais profundos em direção à zona de gelo. Este fornecimento contínuo de água alimenta e expande grandes blocos de gelo subterrâneos. A expansão gera uma pressão geotécnica colossal de elevação chamada <strong>frost heave</strong>. O solo congelante pode elevar o piso de concreto em <strong>15 a 30 cm</strong>, trincando as lajes, desalinhando colunas do prédio, entortando trilhos de portas e condenando estruturalmente o edifício.</p>
<p>Para neutralizar o frost heave, as lajes devem conter isolamento robusto (como placas de poliestireno extrudado XPS de 100 a 150 mm) associado a sistemas de <strong>aquecimento ativo do solo</strong> posicionados abaixo da barreira de vapor. Existem duas soluções principais: tubulação de glicol aquecido (circulando propilenoglicol aquecido entre 13°C e 24°C, aproveitando o calor de rejeição do compressor) ou cabos elétricos de aquecimento autorrreguláveis instalados dentro de conduítes metálicos na base de areia sob a isolação. O dimensionamento energético dos cabos geralmente exige uma densidade de potência de <strong>2 a 7 Btu/h/ft² (6 a 22 W/m²)</strong> para equilibrar a taxa de calor extraída pela câmara fria sem superaquecer o isolamento.</p>

<h2>Parte IV: Dimensionamento e Cálculo da Carga Térmica</h2>
<p>O dimensionamento de uma planta de refrigeração exige o levantamento rigoroso de todas as fontes de calor que entram no espaço térmico. A carga térmica total é dividida em quatro componentes principais:</p>
<ol>
  <li><strong>Carga de Transmissão Estática:</strong> Representa o calor que flui pelas superfícies por condução ($q = U \\cdot A \\cdot \\Delta T \\cdot 24 \\text{ horas}$).</li>
  <li><strong>Carga de Infiltração de Ar:</strong> Refere-se ao calor sensível e latente introduzido pela abertura de portas, gerando condensamento e acúmulo de gelo nas aletas do evaporador.</li>
  <li><strong>Carga do Produto:</strong> Geralmente constitui a maior fração da carga térmica (resfriamento sensível acima do congelamento, calor latente de fusão para cristalização e resfriamento sensível abaixo do ponto de congelamento). O congelamento rápido (blast freezing) é projetado para formar microcristais de gelo que não rompem as paredes celulares dos tecidos biológicos e proteínas.</li>
  <li><strong>Calor de Respiração e Cargas Metabólicas:</strong> Produtos hortifrutis frescos colhidos continuam respirando e liberando calor metabólico de respiração. Em processos de fermentação biotecnológica (SSF), microrganismos liberam até <strong>250 W/kg</strong> de biomassa seca, provocando picos de calor interno de até 20 K que requerem sistemas sofisticados de remoção térmica.</li>
</ol>
<p>Para inertes como vacinas, a carga foca na manutenção da janela estrita de 2°C a 8°C. Vacinas com adjuvantes de alumínio perdem eficácia permanentemente sob congelamento, enquanto calor excessivo desnatura as proteínas. O uso de barreiras térmicas de balastro (colocação de garrafas de água cobrindo 10% a 15% do volume útil) é adotado como segurança térmica contra quedas de energia.</p>

<h2>Parte V: Comissionamento Mecânico: Ajuste de Superaquecimento e Válvulas MOP</h2>
<p>O ciclo de refrigeração deve ser balanceado para extrair calor com máxima eficiência e segurança. O superaquecimento da sucção garante que 100% do refrigerante que entra no compressor esteja no estado gasoso, eliminando o risco de golpe de líquido (liquid slugging). O controle é feito pela Válvula de Expansão Termostática (TXV) ou Eletrônica (EEV).</p>
<p>A medição de superaquecimento em congelados exige um protocolo de duplo ponto:</p>
<ul>
  <li><strong>Superaquecimento do Evaporador (Útil):</strong> Medido na saída do evaporador, adjacente ao bulbo da TXV. Deve situar-se entre <strong>6°F e 12°F (3,3K a 6,6K)</strong>, com mínimo de 4°F (2,2K).</li>
  <li><strong>Superaquecimento do Compressor (Total):</strong> Medido a 15-20 cm antes do compressor. Deve situar-se entre <strong>25°F e 35°F (14K a 19K)</strong> para assegurar o resfriamento seguro dos enrolamentos do motor.</li>
</ul>
<p>A haste da TXV regula a tensão da mola: girar no sentido horário restringe o fluxo (aumenta o superaquecimento, evaporador faminto); girar no sentido anti-horário abre o fluxo (diminui o superaquecimento, evaporador inundado). Os ajustes devem ser microscópicos (1/2 volta por vez), aguardando-se 15 a 30 minutos de estabilização do ciclo. Em partidas a frio pós-degelo (pull-down quente), utilizam-se válvulas com carga limitada MOP (Maximum Operating Pressure) que fecham parcialmente ao ultrapassar um limite de pressão de sucção, impedindo a sobrecarga elétrica do motor.</p>

<h2>Parte VI: Gestão de Pressão Barométrica e Portas de Alívio (PRVs)</h2>
<p>Câmaras de congelados operam hermeticamente fechadas e sofrem pressões severas decorrentes de variações rápidas de temperatura. Ao fechar a porta pesada, o evaporador resfria o ar quente introduzido rapidamente. A contração do volume do ar gera um vácuo interno intenso. A diferença de pressão atmosférica gera uma força implosiva colossal. Por exemplo, em uma porta de 2,0 x 1,2 m com vácuo de 0,05 bar, cria-se uma força de sucção externa de <strong>1.200 kgf (1,2 tonelada)</strong>, travando a porta. Degelos geram efeito inverso, com expansão rápida que empurra e abre as portas, quebrando os selos. Para neutralizar isso, utilizam-se Válvulas de Alívio de Pressão (PRVs) bidirecionais de ação rápida com resistência elétrica integrada (15-25W) para evitar o congelamento dos flapes pelo acúmulo de umidade.</p>
`,
          tabelas_html: `
<h2>Propriedades Térmicas de Produtos Selecionados (ASHRAE Data)</h2>
<table>
  <thead>
    <tr>
      <th>Produto Alimentar</th>
      <th>Teor de Umidade (%)</th>
      <th>Ponto Inicial de Congelamento (°C)</th>
      <th>Calor Específico Acima (°C) (kJ/kg·K)</th>
      <th>Calor Específico Abaixo (°C) (kJ/kg·K)</th>
      <th>Calor Latente de Fusão (kJ/kg)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Aspargos</strong></td>
      <td>92,40%</td>
      <td>-0,6 °C</td>
      <td>4,03</td>
      <td>1,79</td>
      <td>309</td>
    </tr>
    <tr>
      <td><strong>Repolho</strong></td>
      <td>92,15%</td>
      <td>-0,9 °C</td>
      <td>4,02</td>
      <td>1,85</td>
      <td>308</td>
    </tr>
    <tr>
      <td><strong>Cenouras</strong></td>
      <td>87,79%</td>
      <td>-1,4 °C</td>
      <td>3,92</td>
      <td>2,00</td>
      <td>293</td>
    </tr>
    <tr>
      <td><strong>Alho</strong></td>
      <td>58,58%</td>
      <td>-0,8 °C</td>
      <td>3,17</td>
      <td>2,19</td>
      <td>196</td>
    </tr>
    <tr>
      <td><strong>Milho Doce</strong></td>
      <td>75,96%</td>
      <td>-0,6 °C</td>
      <td>3,62</td>
      <td>1,98</td>
      <td>254</td>
    </tr>
  </tbody>
</table>

<h3>Matriz de Comparação de Núcleos Isolantes (IMPs)</h3>
<table>
  <thead>
    <tr>
      <th>Núcleo Isolante</th>
      <th>Processo de Fabricação</th>
      <th>Resistência à Compressão</th>
      <th>Classificação de Incêndio</th>
      <th>Eficiência de Isolamento (Valor R)</th>
      <th>Aplicação Típica</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Poliestireno (EPS)</strong></td>
      <td>Moldagem de pérolas pré-expandidas</td>
      <td>Baixa (60 - 100 kPa)</td>
      <td>Alta (Classe E/F)</td>
      <td>Média (R-3.8 a R-4.2/in)</td>
      <td>Galpões de climatização leve</td>
    </tr>
    <tr>
      <td><strong>Poliuretano (PUR)</strong></td>
      <td>Injeção in-situ química</td>
      <td>Alta (150 - 200 kPa)</td>
      <td>Moderada (Classe D/E, até 90°C)</td>
      <td>Elevada (R-6.2 a R-6.8/in)</td>
      <td>Câmaras comerciais médias</td>
    </tr>
    <tr>
      <td><strong>Poliisocianurato (PIR)</strong></td>
      <td>Reação química com trimerização</td>
      <td>Altíssima (180 - 220 kPa)</td>
      <td>Superior (Classe B-s2,d0, até 120°C)</td>
      <td>Máxima (R-7.0 a R-7.6/in)</td>
      <td>Laboratórios, deep-freezers</td>
    </tr>
  </tbody>
</table>

<h3>Matriz Diagnóstica de Anomalias em Câmaras Frias</h3>
<table>
  <thead>
    <tr>
      <th>Sintoma em Campo</th>
      <th>Mecanismo Físico</th>
      <th>Consequência Operacional</th>
      <th>Ação Corretiva Recomendada</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Gelo nas juntas externas</strong></td>
      <td>Rompimento da barreira de vapor externa</td>
      <td>Infiltração de vapor; perda de R-value</td>
      <td>Aplicar silicone elástico pesado nas juntas externas.</td>
    </tr>
    <tr>
      <td><strong>Piso trincado e abaulado</strong></td>
      <td>Congelamento subterrâneo (Frost Heave)</td>
      <td>Danos graves estruturais à laje predial</td>
      <td>Instalar aquecimento ativo de solo (glicol ou cabo).</td>
    </tr>
    <tr>
      <td><strong>Flapes da PRV congelados</strong></td>
      <td>Falha na resistência da porta de alívio</td>
      <td>Vácuo implosivo deforma portas e painéis</td>
      <td>Testar a resistência elétrica da PRV; trocar resistor (23W).</td>
    </tr>
    <tr>
      <td><strong>Evaporador com gelo rápido</strong></td>
      <td>Infiltração de ar úmido pelas portas</td>
      <td>Degelos frequentes; aumento do consumo elétrico</td>
      <td>Substituir gaxetas magnéticas; instalar cortinas de ar/plásticas.</td>
    </tr>
    <tr>
      <td><strong>Superaquecimento baixo (&lt; 15°F)</strong></td>
      <td>Sobrecarga de líquido no retorno do compressor</td>
      <td>Risco eminente de golpe de líquido (slugging)</td>
      <td>Fechar a haste da TXV em frações de 1/2 volta.</td>
    </tr>
  </tbody>
</table>
`,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 05-03</h2>

<div class="infobox-warning">
  <h3>🚨 POSICIONAMENTO DA BARREIRA DE VAPOR</h3>
  <p>Nunca instale ou vede películas impermeáveis adicionais no lado interno da câmara fria (lado frio). O vapor d'água atmosférico é impulsionado de fora para dentro pelo gradiente de pressão. A isolação deve poder "secar" em direção ao evaporador interno. Selar o lado frio irá aprisionar a umidade que consegue cruzar o envelope, gerando condensamento oculto, perda de capacidade de isolamento e gelo intersticial destrutivo.</p>
</div>

<div class="infobox-warning">
  <h3>🚨 TEMPO DE ESTABILIZAÇÃO PARA AJUSTE DE EXPANSÃO</h3>
  <p>Nunca realize ajustes sucessivos na mola de controle da TXV sem respeitar o período de estabilização térmica do fluido. A refrigeração de câmaras frias industriais lida com grandes volumes de refrigerante e possui alta inércia de resposta. Alterações na haste de ajuste devem aguardar de 15 a 30 minutos com a câmara fechada antes de ler a temperatura e pressão na sucção. Ajustes precipitados provocam oscilações cíclicas severas (hunting) e danos mecânicos permanentes.</p>
</div>
`,
        },
        {
          id: "05-04",
          titulo: "Como atingir o padrão Zero Leak",
          modulo: "MÓDULO 05 - 04",
          videos: [
            {
              titulo:
                "Como atingir o padrão Zero Leak - MÓDULO 05 - 04",
              link: "https://youtu.be/FmL_bZWTz30",
              tipo: "videoaula",
            },
            {
              titulo: "O Padrão Vazamento Zero - MÓDULO 05 - 04",
              link: "https://youtu.be/Pw0anv8rJ4k",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-05/Modulo-05-04-Nitrogen Leak Testing_ Zero-Leak Standard.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/FmL_bZWTz30",
          link_podcast: "https://youtu.be/Pw0anv8rJ4k",
          total_slides: 15,
          fontes_imagens: Array.from({ length: 15 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo06/modulo06-01/Modulo-06-01-Nitrogen Leak Testing_ Zero-Leak Standard-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>Introdução: O Princípio do Padrão "Vazamento Zero"</h2>
<p>Um sistema que vaza é um sistema que nunca foi realmente concluído. No setor de climatização comercial de alta tecnologia, especialmente em redes de <strong>Fluxo de Refrigerante Variável (VRF)</strong> e plantas industriais de alta pressão, a tolerância para vazamentos é nula. As redes de cobre de sistemas VRF são malhas complexas que se estendem por centenas de metros e atraem dezenas de conexões brasadas, conexões flangeadas roscadas e distribuidores (caixas Branch Selector e Refnets). Nesses sistemas, o fluido refrigerante circula sob pressões dinâmicas extremas, que frequentemente superam <strong>400 a 500 PSIG</strong> durante a operação em modo de aquecimento ou em ambientes com alta temperatura de condensação.</p>
<p>Sob este regime constante de estresse mecânico e vibração, qualquer microfissura em uma junta de solda ou em um flange roscado resultará no esvaziamento lento da carga de refrigerante, provocando redução da eficiência, queima por inanição (burnout) do compressor por falta de lubrificante, e impacto ecológico severo. Para erradicar essas falhas, a engenharia de refrigeração internacional adotou o padrão <strong>Zero Leak (Vazamento Zero)</strong>, referenciado por normas rigorosas como a <strong>ISO 14903</strong>. Atingir esse nível de confiabilidade exige abandonar testes rudimentares e seguir um protocolo científico em múltiplas etapas, fundamentado no teste de pressurização com nitrogênio seco.</p>

<h2>Parte I: A Falácia do Teste de Vazamento por Vácuo</h2>
<p>Um erro primário e recorrente em campo é utilizar a bomba de vácuo e o teste de estanqueidade por micronização (vacuum decay) como principal ferramenta para certificar a ausência de vazamentos estruturais. Confiar na bomba de vácuo para este propósito demonstra incompreensão da física de pressões e compromete a integridade mecânica do sistema.</p>
<p>Quando o sistema é evacuado a um vácuo profundo de <strong>500 mícrons</strong>, a pressão interna da tubulação aproxima-se de zero absoluto. Enquanto isso, a pressão atmosférica externa sobre as paredes de cobre permanece estática a aproximadamente <strong>14,7 PSI (1 bar)</strong>. Portanto, o diferencial de pressão máximo exercido nas juntas do cobre durante um teste de vácuo é de apenas <strong>14,7 PSI</strong>, com uma força direcionada <strong>de fora para dentro</strong>.</p>
<p>Esta força de compressão interna é totalmente incapaz de simular o estresse real de operação. Um sistema VRF operando com fluido R-410A ou R-32 trabalha com pressões de descarga superiores a <strong>550 PSIG</strong> direcionadas <strong>de dentro para fora</strong>. Uma trinca em um flange ou poro na solda pode manter-se perfeitamente estanque a 14,7 PSI de pressão interna (pois a atmosfera empurra e comprime as superfícies da junta), ou o vácuo pode sugar resíduos de óleo e fluxo para o interior da fenda, vedando temporariamente o vazamento. Porém, no instante em que o sistema é pressurizado positivamente pela operação do refrigerante, essa barreira temporária se rompe violentamente, iniciando o vazamento.</p>
<p>Além da ineficácia diagnóstica, realizar vácuo em um sistema com vazamento físico introduz umidade atmosférica no circuito refrigerante. Os óleos lubrificantes sintéticos de compressores VRF (PVE ou POE) são altamente higroscópicos. Quando a bomba de vácuo puxa o ar atmosférico úmido pelo ponto de vazamento para dentro da tubulação de cobre, a água livre mistura-se ao lubrificante sob calor de fricção, desencadeando a <strong>hidrólise</strong>. Esta reação química decompõe o óleo lubrificante sintético em ácidos orgânicos corrosivos e lodo espesso, que causam curto-circuito interno no compressor e travamento de agulhas e strainers das EEVs.</p>
<p>Além disso, o teste de vácuo gera dúvidas diagnósticas entre vazamentos físicos e <strong>vazamentos virtuais</strong> (liberação lenta de gases e vaporização de umidade aprisionada sob o óleo). Um vazamento virtual faz com que os microns estabilizem acima do setpoint (ex: travando em 1500 microns), enquanto um vazamento físico provoca subida contínua e linear até restabelecer a pressão atmosférica.</p>

<h2>Parte II: A Física da Pressurização com Nitrogênio e a Lei dos Gases Ideais</h2>
<p>O nitrogênio seco e inerte é o meio padrão de pressurização. Contudo, seu comportamento físico é estritamente regido pelas leis da termodinâmica, especificamente a lei de Gay-Lussac para volume constante ($P_1/T_1 = P_2/T_2$). As tubulações externas expostas em telhados passam por oscilações diárias térmicas severas de 24 horas. Se o manômetro registrar queda de pressão em um dia frio, ou alta em um dia quente, o técnico precisa aplicar uma fórmula de correção de temperatura para evitar diagnósticos errados (phantom leaks).</p>
<p>A aproximação prática em campo indica que a pressão do nitrogênio varia aproximadamente <strong>0,80 PSI para cada 1°F</strong> de alteração na temperatura ambiente (ou ~0,1 bar por 1°C):</p>
<p style="text-align: center; font-weight: bold;">Pressão de Queda Esperada = (T_inicial - T_final) * 0.80</p>
<p>Qualquer queda registrada além desta variação constitui um vazamento físico confirmado que exige localização e reparo.</p>

<h2>Parte III: Padrões de Pressão das Principais Fabricantes (OEM)</h2>
<p>Os parâmetros de teste de pressão para VRF comerciais requerem pressurização estática mantida por 24 horas nas seguintes pressões de pico:</p>
<ul>
  <li><strong>Daikin VRV:</strong> 550 PSIG (3.8 MPa) por 24 horas (reduzir para 450 PSIG caso contenha unidades internas FXTQ para evitar deformação nas serpentinas).</li>
  <li><strong>LG Multi V:</strong> 550 PSIG por 24 horas (nunca exceder 551.1 PSIG para evitar danos em componentes mecânicos e sensores).</li>
  <li><strong>Mitsubishi City Multi:</strong> 600 PSIG (4.15 MPa) por 24 horas em todas as tubulações de campo.</li>
</ul>

<h2>Parte IV: Protocolo de Pressurização em Três Etapas (Staged Pressurization)</h2>
<p>Introduzir pressões elevadas de forma abrupta é ineficiente e arriscado. O teste deve ser realizado de forma progressiva:</p>
<ol>
  <li><strong>Varredura e Sweeping:</strong> Realizar uma purga inicial com nitrogênio seco a baixo fluxo (1 a 3 PSIG) para expelir todo o ar atmosférico úmido das tubulações, impedindo a condensação de gotículas de água sob alta pressão.</li>
  <li><strong>Abertura de EEVs:</strong> Válvulas de Expansão Eletrônicas fechadas isolam serpentinas inteiras. Garanta que as evaporadoras permaneçam desligadas (mantendo as EEVs abertas fisicamente na posição de fábrica) ou force a abertura mecânica total via chaves DIP switch no modo de evacuação da unidade condensadora.</li>
  <li><strong>Estágio 1 (150 PSIG por 5 minutos):</strong> Projetado para localizar vazamentos massivos e óbvios (flanges frouxos, soldas não concluídas) sem desperdiçar nitrogênio ou criar perigos mecânicos.</li>
  <li><strong>Estágio 2 (300-325 PSIG por 15 minutos):</strong> Investigação intermediária e auditoria preliminar de ruídos.</li>
  <li><strong>Estágio 3 (550-600 PSIG por 24 horas):</strong> Submete a rede ao limite máximo de estresse de fadiga. Aguarde uma janela de 10 a 15 minutos para dissipar o calor de compressão antes de iniciar a contagem oficial.</li>
</ol>

<h2>Parte V: Métodos Avançados de Localização de Vazamentos</h2>
<p>Ao constatar uma queda real de pressão, a detecção do local exato deve empregar as seguintes ferramentas profissionais:</p>
<ul>
  <li><strong>Detecção Acústica Ultrassônica:</strong> Captura o ruído turbulento de alta frequência (40 kHz) gerado pelo escape de gás. Por meio de heterodinação eletrônica, o detector converte o som para a faixa audível. Por ser imune ao vento, é ideal para coberturas e áreas externas.</li>
  <li><strong>Gás Formador (Forming Gas 95/5):</strong> Utiliza uma mistura segura de 95% de nitrogênio e 5% de hidrogênio (ISO 10156). O átomo de hidrogênio é a menor molécula conhecida, permitindo a difusão rápida e escape fácil por microporos. Detectores eletrônicos de hidrogênio (sniffers) captam essas fugas com alta sensibilidade.</li>
  <li><strong>Líquidos Viscoelásticos Formadores de Casulo (Cocooning):</strong> Sabão comum de louça causa corrosão galvânica no cobre/latão devido à presença de amônia e cloretos. Deve-se aplicar líquidos viscoelásticos profissionais (Big Blu). Pincelado de forma homogênea e aguardando de 10 a 30 minutos, o gás nitrogenado expande o gel sem romper as bolhas, acumulando e formando um casulo espumoso estável.</li>
</ul>
`,
          tabelas_html: `
<h2>Limites e Parâmetros Físicos de Gases de Teste</h2>
<table>
  <thead>
    <tr>
      <th>Gás Utilizado no Teste</th>
      <th>Tamanho Molecular Relativo</th>
      <th>Viscosidade Dinâmica (μPa·s a 20°C)</th>
      <th>Reação Química com Metais / Óleo</th>
      <th>Finalidade Principal em Campo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Nitrogênio Seco ($N_2$)</strong></td>
      <td>3,64 Å (Referência)</td>
      <td>17,6</td>
      <td>Inerte (Previne oxidação interna do cobre)</td>
      <td>Pressurização primária de alta pressão e teste de estanqueidade de 24h.</td>
    </tr>
    <tr>
      <td><strong>Gás Formador ($N_2$/$H_2$)</strong></td>
      <td>2,89 Å (Muito menor)</td>
      <td>16,8</td>
      <td>Inerte (Totalmente seguro e não tóxico)</td>
      <td>Localização rápida de microvazamentos invisíveis com sniffer eletrônico.</td>
    </tr>
    <tr>
      <td><strong>Oxigênio ($O_2$) [PROIBIDO]</strong></td>
      <td>3,46 Å</td>
      <td>20,4</td>
      <td>Altamente oxidante; combustível explosivo em presença de óleo</td>
      <td><strong>NUNCA UTILIZAR.</strong> Risco iminente de explosão e oxidação severa interna das linhas.</td>
    </tr>
  </tbody>
</table>

<h3>Matriz Diagnóstica: Localização e Reparo de Vazamentos</h3>
<table>
  <thead>
    <tr>
      <th>Método de Diagnóstico</th>
      <th>Tipo de Vazamento Indicado</th>
      <th>Restrição Ambiental ou Limitação Física</th>
      <th>Procedimento Prático Recomendado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Queda Estática no Manômetro</strong></td>
      <td>Vazamento geral em algum ponto da rede</td>
      <td>Não aponta a localização física do ponto de fuga</td>
      <td>Aplicar a fórmula de correção de temperatura; se confirmada queda real, iniciar divisão de ramais.</td>
    </tr>
    <tr>
      <td><strong>Detector Ultrassônico (40 kHz)</strong></td>
      <td>Vazamentos de alta pressão em soldas e curvas</td>
      <td>Menos eficaz em vazamentos muito pequenos e de baixa pressão</td>
      <td>Scannear com ganho alto em "varredura grossa", afunilar a busca com cone acústico ajustando o ganho para baixo.</td>
    </tr>
    <tr>
      <td><strong>Sniffer de Hidrogênio</strong></td>
      <td>Microvazamentos de solda invisíveis</td>
      <td>Vento forte em coberturas dispersa as moléculas rapidamente</td>
      <td>Injetar mistura 95/5 a 600 PSI; scannear o sensor eletrônico lentamente imediatamente acima dos tubos.</td>
    </tr>
    <tr>
      <td><strong>Líquido Viscoelástico Professional</strong></td>
      <td>Todos os vazamentos, especialmente microfissuras de flange</td>
      <td>Exige contato visual direto com a conexão de cobre</td>
      <td>Pincelar uma fina película do líquido; aguardar até 30 min por casulo espumoso sem bolhas falsas.</td>
    </tr>
  </tbody>
</table>
`,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 05-04</h2>

<div class="infobox-warning">
  <h3>🚨 PROIBIÇÃO DE OXIGÊNIO E AR COMPRIMIDO</h3>
  <p>Nunca, sob qualquer hipótese, utilize ar comprimido de compressores comuns ou garrafas de oxigênio para pressurizar sistemas de refrigeração. O oxigênio sob alta pressão misturado a vestígios de óleo lubrificante sintético mineral ou PVE/POE do compressor forma uma mistura altamente inflamável e explosiva capaz de causar explosões severas. O ar comprimido também introduz água líquida corrosiva irreversível dentro da tubulação.</p>
</div>

<div class="infobox-warning">
  <h3>🚨 ISOLAÇÃO DO COMPRESSOR E COMPONENTES ESPECÍFICOS</h3>
  <p>Ao realizar o teste de estanqueidade a 550 ou 600 PSIG, as válvulas de serviço de sucção e de descarga da condensadora (ODU) devem permanecer totalmente fechadas se a condensadora já estiver pré-carregada de refrigerante de fábrica. Submeter as válvulas e componentes internos da condensadora a pressões externas superiores ao projeto pode deformar as palhetas e vedações de descarga internas do compressor scroll inverter, provocando vazamentos internos irreparáveis na central da ODU.</p>
</div>
`,
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // MÓDULO 06 - Vácuo e Desidratação
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 6,
      titulo: "MÓDULO 06 — Vácuo e Desidratação",
      descricao:
        "Evacuação de alto desempenho e a ciência por trás do vácuo profundo.",
      icone: "gauge",
      cor: "teal",
      aulas: [
        {
          id: "06-01",
          titulo: "Bomba de vácuo HVAC não suga água",
          modulo: "MÓDULO 06 - 01",
          videos: [
            {
              titulo:
                "Bomba de vácuo HVAC no suga água - MODULO 06 - 01",
              link: "https://youtu.be/DN9T4eGBdEQ",
              tipo: "videoaula",
            },
            {
              titulo: "Evacuação de Alto Desempenho - MÓDULO 06 - 01",
              link: "https://youtu.be/nQrrEyFHsoQ",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-06/Modulo-06-01-Elite HVAC Vacuum Mastery Masterclass.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/DN9T4eGBdEQ",
          link_podcast: "https://youtu.be/nQrrEyFHsoQ",
          total_slides: 15,
          fontes_imagens: Array.from({ length: 20 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo06/modulo06-01/Modulo-06-02-Elite HVAC Vacuum Mastery Masterclass-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>Introdução: A Termodinâmica da Desidratação de Sistemas</h2>
<p>Existe um equívoco conceitual persistente em toda a indústria de HVAC/R sobre a função física e mecânica de uma bomba de vácuo. Para atingir a excelência operacional no comissionamento de sistemas, o instalador deve desmistificar uma crença comum: <strong>a bomba de vácuo não "suga" água líquida para fora do circuito frigorígeno.</strong> A bomba de vácuo opera inteiramente sob os princípios da termodinâmica de mudança de fase. Ela é uma máquina projetada para reduzir a pressão interna na tubulação de cobre até que a pressão de vapor da água líquida exceda a pressão do ambiente interno, forçando a água a entrar em <strong>ebulição espontânea à temperatura ambiente</strong> para que seja extraída de forma gasosa (vapor d'água).</p>
<p>Ao nível do mar, a atmosfera exerce uma pressão absoluta de <strong>14,696 PSIA (760.000 mícrons)</strong>. Esta pressão funciona como uma "tampa invisível" pesada, mantendo as moléculas de água agregadas em estado líquido. Para induzir a fervura da água dentro de um sistema real sem aquecer a tubulação predial a 100°C, reduz-se a pressão absoluta interna do sistema. Isso simula o topo de montanhas elevadas onde a água ferve a temperaturas muito menores. O vácuo profundo da bomba faz a umidade residual entrar em ebulição instantânea na temperatura ambiente em que a tubulação se encontra, mudando de fase para vapor d'água, único estado em que a bomba consegue extraí-la e expeli-la.</p>

<h2>Parte I: Medição Quantitativa de Vácuo e a Regra dos 500 Mícrons</h2>
<p>A desidratação em refrigeração é definida por limites de pressão estritos sob a <strong>Regra dos 500 Mícrons</strong>. Nenhum refrigerante deve ser injetado em uma rede frigorígena que não consiga atingir e sustentar 500 mícrons de mercúrio ou menos em estado de isolamento. O mícron é um milionésimo de metro de coluna de mercúrio. A atmosfera ao nível do mar equivale a 759.968 mícrons, de modo que atingir 500 mícrons representa remover <strong>99,93% da atmosfera interna</strong>.</p>
<p>A meta dos 500 mícrons baseia-se no comportamento de mudança de fase da água. Se a temperatura ambiente externa for de 10°C em um dia frio, realizar vácuo até 10.000 mícrons é ineficiente porque a água interna não ferve a essa pressão. A 500 mícrons, o ponto de ebulição da água desaba para <strong>-23,9°C</strong>, garantindo que a água vire vapor e seja extraída mesmo sob temperaturas invernais de campo.</p>
<p>Esta leitura precisa é inviável em vacuômetros analógicos baseados em Bourdon. Manômetros analógicos sofrem interferência das variações de pressão atmosférica local e possuem escalas mecânicas comprimidas (a distância do ponteiro entre 1.000 e 500 mícrons é menor que 0,4 mm). Diferenciar 5.000 de 500 mícrons no ponteiro é impossível, induzindo o técnico a aceitar sistemas repletos de água líquida. O uso de <strong>vacuômetros digitais baseados em termistores absolutos</strong> é mandatório.</p>

<h2>Parte II: A Ameaça Química da Hidrólise nos Óleos Sintéticos POE/PVE</h2>
<p>Os refrigerantes modernos HFC/A2L (como R-410A e R-32) utilizam lubrificantes sintéticos <strong>POE (Polyolester)</strong> ou <strong>PVE (Polyvinyl Ether)</strong>. O óleo mineral antigo saturava com apenas 25 ppm de água. O óleo POE, por sua polaridade eletrônica, é altamente higroscópico, atraindo umidade e retendo até <strong>2.500 ppm de água</strong> (100 vezes mais). As fabricantes de compressores exigem um limite de umidade estrito <strong>abaixo de 100 ppm</strong>.</p>
<p>Quando o óleo POE úmido é submetido às altas temperaturas mecânicas do compressor Scroll, ocorre a <strong>hidrólise</strong>. A umidade retida reage termoquimicamente com o éster do óleo, quebrando-o de volta em álcool e ácidos orgânicos corrosivos (como ácido acético). O vapor de ácido acético ataca as paredes de cobre e corrói o isolamento das bobinas elétricas do motor, levando ao curto-circuitos à terra e à queima do compressor (burnout). A água retida no óleo POE não sai facilmente por vácuo simples, provocando plateaus elevados (1.000-1.500 mícrons) no vacuômetro. Exige-se vácuo abaixo de 500 mícrons associado a <strong>filtros secadores de linha de líquido com peneira molecular</strong>.</p>

<h2>Parte III: Dinâmica de Fluidos de Alta Evacuação (Hagen-Poiseuille)</h2>
<p>Vácuos lentos são frequentemente provocados pelo gargalo de mangueiras estreitas. De acordo com a lei de Hagen-Poiseuille, a condutância (capacidade de fluxo de gás) de uma mangueira cilíndrica é proporcional ao seu <strong>diâmetro interno elevado à quarta potência ($d^4$)</strong> e inversamente proporcional ao seu comprimento ($L$).</p>
<p>Uma mangueira comum de 1/4" restringe e estrangula o fluxo de sucção a cerca de <strong>0,2 CFM</strong>, enquanto uma mangueira de 3/8" oferece fluxo 5 vezes maior, e uma mangueira dedicada de 1/2" oferece fluxo <strong>16 vezes maior</strong> que a de 1/4". Ligar uma bomba potente de 10 CFM com mangueira de 1/4" faz o técnico usar apenas 10% da sua capacidade. Mangueiras de grande diâmetro e comprimento reduzido reduzem processos de 3 horas para menos de 15 minutos.</p>
<p>Esse gargalo acentua-se abaixo de 1.000 mícrons, quando o regime de gás entra em <strong>Escoamento Molecular Livre</strong> (onde o número de Knudsen $Kn > 1,0$). As moléculas de ar remanescentes colidem apenas com as paredes do tubo em trajetórias erráticas, sem viscosidade coletiva. Em mangueiras finas de 1/4", as paredes atuam como labirintos obstrutivos; já mangueiras largas de 1/2" fornecem uma via desimpedida de alta probabilidade geométrica de exaustão.</p>

<h2>Parte IV: O Gargalo dos Batentes: A Obrigação do Uso da Ferramenta VCRT</h2>
<p>O maior gargalo físico em campo é a <strong>válvula Schrader</strong> de acesso de serviço. O pino interno, a mola e o vedador reduzem a abertura livre a meros 5 mm, gerando atrito e bloqueando até 90% do fluxo. Evacuar através de uma Schrader limita a vazão da bomba a no máximo 0,2 CFM.</p>
<p>Para contornar esse gargalo, é mandatório o uso da <strong>VCRT (Valve Core Removal Tool)</strong> para sacar mecanicamente o miolo Schrader antes do vácuo. Ao abrir o diâmetro total do bocal de serviço e acoplar mangueiras de 1/2", a vazão de vácuo salta para <strong>3,0 a 4,0 CFM</strong>. O vacuômetro digital deve ser posicionado na VCRT oposta ao lado de sucção da bomba para medir a pressão real estável do evaporador, evitando falsas leituras geradas pela aspiração da bomba.</p>

<h2>Parte V: O Risco do Flash Freezing e o Protocolo de Degelo por Pressão (Triple Evacuation)</h2>
<p>Vácuos ultra-rápidos aplicados em tubulações com acúmulos expressivos de água líquida provocam ebulição tão violenta que extrai calor latente do próprio líquido, reduzindo a temperatura da água abaixo de 0°C. Ocorre o <strong>Flash Freezing</strong> (congelamento instantâneo da umidade em gelo cristalino interno).</p>
<p>O gelo confinado não evapora por arraste convencional, precisando sofrer sublimação (fase sólida direta para vapor). A -40°C, a pressão de vapor de sublimação do gelo cai a <strong>96 mícrons</strong>. O vacuômetro registrará 150 mícrons e o técnico julgará que o sistema está desidratado, mas na verdade abriga blocos de gelo dormentes. Para evitar esse erro de comissionamento, aplica-se a <strong>Tríplice Evacuação (ASHRAE Standard 147)</strong>:</p>
<ol>
  <li>Evacuar inicialmente até 1.500 mícrons e isolar a bomba.</li>
  <li>Quebrar o vácuo pressurizando com Nitrogênio Seco a 2-5 PSIG por 10-15 minutos. O nitrogênio transfere calor sensível externo para fundir o gelo em líquido, e a purga mecânica arrasta as gotículas em suspensão.</li>
  <li>Efetuar o segundo vácuo até 1.000 mícrons, quebrando com nitrogênio novamente.</li>
  <li>Puxar o vácuo final abaixo de 500 mícrons e realizar o teste de estanqueidade digital de declínio.</li>
</ol>

<h2>Parte VI: O Teste de Estanqueidade por Micronização (Vacuum Decay Test)</h2>
<p>A comprovação de estanqueidade e secagem do sistema requer a execução do <strong>Teste de Declínio de Vácuo (Vacuum Decay Test)</strong>. Isola-se a bomba fechando as válvulas esfera das VCRTs e monitora-se a subida de pressão no vacuômetro digital. Após uma leve elevação de estabilização, o vacuômetro registrará uma de três curvas diagnósticas:</p>
<ol>
  <li><strong>Sistema Seco e Hermético (Pass):</strong> A leitura estabiliza abaixo de 500 mícrons e permanece estável por 15 minutos.</li>
  <li><strong>Presença de Umidade Residual (Fail):</strong> A leitura sobe rápido de início e estabiliza (plateau) na faixa de 1.000 a 2.000 mícrons devido à vaporização lenta da água ligada ao óleo. Exige retomar o vácuo com calor ou repetir o nitrogênio.</li>
  <li><strong>Vazamento Físico de Campo (Fail):</strong> A leitura sobe de forma linear e ininterrupta até restabelecer a pressão atmosférica. Exige teste de pressão de nitrogênio a 550 PSI para localizar trincas.</li>
</ol>
`,
          tabelas_html: `
<h2>Comportamento Micronizado e Matriz Diagnóstica de Vácuo (Decay Test)</h2>
<table>
  <thead>
    <tr>
      <th>Comportamento da Curva Micronizada</th>
      <th>Diagnóstico Clínico do Sistema</th>
      <th>Causa Física Associada</th>
      <th>Ação Técnica Recomendada</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Estabiliza abaixo de 500 mícrons por 15 minutos</strong></td>
      <td><strong>Sistema Seco e Hermético (Pass)</strong></td>
      <td>Ausência de vazamentos e desidratação total das linhas e do cárter de óleo.</td>
      <td>Concluir comissionamento e proceder com a liberação de fluido refrigerante.</td>
    </tr>
    <tr>
      <td><strong>Sobe rápido e estabiliza em plateau entre 1.000 e 2.000 mícrons</strong></td>
      <td><strong>Presença de Umidade Residual (Fail)</strong></td>
      <td>Água líquida ou umidade ligada quimicamente ao óleo sintético evaporando devagar (*outgassing*).</td>
      <td>Retomar vácuo profundo; aplicar calor externo ou efetuar nova purga de nitrogênio seco.</td>
    </tr>
    <tr>
      <td><strong>Sobe de forma contínua e linear rumo ao valor atmosférico</strong></td>
      <td><strong>Vazamento Físico de Campo (Fail)</strong></td>
      <td>Junção de brasagem trincada, rosca de flange frouxa ou anel O-ring de serviço rompido.</td>
      <td>Interromper o processo; pressurizar o circuito com nitrogênio seco a 550 PSI e localizar vazamento.</td>
    </tr>
  </tbody>
</table>

<h3>Condutância Equivalente de Mangueiras e Restrições de Serviço</h3>
<table>
  <thead>
    <tr>
      <th>Diâmetro Nominal da Conexão / Mangueira</th>
      <th>Restrição de Fluxo Adicional</th>
      <th>Limite de Vazão Efetivo em Vácuo Profundo</th>
      <th>Tempo Estimado de Efeito de Vácuo (Câmara de 10 TR)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Mangueira de 1/4" padrão</strong></td>
      <td>Válvula Schrader intacta + depressor de pino</td>
      <td><strong>0,20 CFM</strong> (Grande perda de carga estática)</td>
      <td>Superior a 4 horas com alto risco de retenção interna de umidade.</td>
    </tr>
    <tr>
      <td><strong>Mangueira de 1/4" padrão</strong></td>
      <td>Sem núcleo Schrader (Uso de VCRT)</td>
      <td><strong>0,75 CFM</strong></td>
      <td>Aproximadamente 90 a 120 minutos.</td>
    </tr>
    <tr>
      <td><strong>Mangueira de 3/8" profissional</strong></td>
      <td>Sem núcleo Schrader (Uso de VCRT)</td>
      <td><strong>1,80 CFM</strong></td>
      <td>Aproximadamente 40 a 60 minutos.</td>
    </tr>
    <tr>
      <td><strong>Mangueira de 1/2" a vácuo</strong></td>
      <td>Sem núcleo Schrader (Uso de VCRT)</td>
      <td><strong>3,50 CFM</strong> (Fluxo máximo desimpedido)</td>
      <td><strong>15 a 20 minutos</strong> com desidratação homogênea garantida.</td>
    </tr>
  </tbody>
</table>
`,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 06-01</h2>

<div class="infobox-warning">
  <h3>🚨 POSICIONAMENTO DO VACUÔMETRO DIGITAL</h3>
  <p>Nunca instale o vacuômetro digital acoplado diretamente à carcaça ou ao bocal de sucção da bomba de vácuo. Esta configuração medirá apenas a pressão de aspiração interna da própria bomba. O vacuômetro deve ser conectado no ponto de serviço mais distante da bomba de vácuo (por exemplo, na linha de líquido, enquanto a bomba puxa pela linha de sucção). Isso garante que o medidor registre a pressão estática real de todo o trocador de calor.</p>
</div>

<div class="infobox-warning">
  <h3>🚨 VERIFICAÇÃO DE VAZAMENTOS OCULTOS DE GELOS EM CLIMAS FRIOS</h3>
  <p>Em instalações externas sob temperaturas ambientes abaixo de 4°C, o teste de vácuo de etapa única pode ocultar lentes de gelo espessas devido ao fenômeno do flash freezing acelerado. Se a pressão despencar rápido e estabilizar abaixo de 200 mícrons de forma suspeita, quebre o vácuo com nitrogênio seco a 5 PSI e aguarde 15 minutos. Caso a umidade tenha congelado, o nitrogênio derreterá o gelo, provocando elevação acentuada na leitura de mícrons ao reiniciar o vácuo, confirmando a necessidade de repetir o ciclo de secagem.</p>
</div>
`,
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════════
    // MÓDULO 07 - Comissionamento e Handover Digital
    // ════════════════════════════════════════════════════════════════════════
    {
      id: 7,
      titulo: "MÓDULO 07 — Comissionamento e Handover Digital",
      descricao:
        "O fim do achismo. Carga de refrigerante, startup profissional e telemetria digital.",
      icone: "rocket",
      cor: "emerald",
      aulas: [
        {
          id: "07-01",
          titulo: "O fim do achismo no comissionamento VRF",
          modulo: "MÓDULO 07 - 01",
          videos: [
            {
              titulo:
                "O fim do achismo no comissionamento VRF - MÓDULO 07 - 01",
              link: "https://youtu.be/iHrgHOs3NDo",
              tipo: "videoaula",
            },
            {
              titulo: "Comissionamento de Elite - MÓDULO 07 - 01",
              link: "https://youtu.be/I-23XCEq--w",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-07/Modulo-07-01-Elite Refrigerant Charging and Startup Protocols.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/iHrgHOs3NDo",
          link_podcast: "https://youtu.be/I-23XCEq--w",
          total_slides: 23,
          fontes_imagens: Array.from({ length: 23 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo07/modulo07-01/Modulo-07-01-Elite Refrigerant Charging and Startup Protocols-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>Introdução: O Momento da Verdade: Comissionamento como Teste Definitivo</h2>
<p>Na instalação de sistemas de Fluxo de Refrigerante Variável (VRF), redes de recuperação de calor e resfriadores de líquido inverter, a era dos ajustes baseados em estimativas empíricas foi superada pela necessidade de protocolos rígidos de engenharia. O comissionamento desses sistemas representa o verdadeiro <strong>"Momento da Verdade"</strong>. Não se trata apenas de energizar os equipamentos e verificar se fornecem ar frio, mas sim de um processo estruturado de testes e calibrações que substitui qualquer tipo de adivinhação por medições elétricas e termodinâmicas precisas.</p>
<p>A execução rigorosa dessas etapas resulta na criação da <strong>"Certidão de Nascimento"</strong> do sistema — um relatório técnico detalhado que documenta os parâmetros operacionais da máquina no primeiro dia de funcionamento. Este registro inicial é fundamental por dois motivos principais:</p>
<ol>
  <li><strong>Referência Diagnóstica:</strong> Serve como base de comparação para toda a vida útil do equipamento. Manutenções futuras dependem de comparar dados de operação atuais com essa linha de base para detectar perdas graduais de eficiência (como incrustação de bobinas, degradação do isolamento do compressor ou microvazamentos).</li>
  <li><strong>Validação de Garantia:</strong> Fabricantes de sistemas VRF exigem universalmente o envio desses dados de comissionamento — testes de pressão, vácuo de declínio, cargas calculadas por balanço de massa e simetria elétrica — como condição para validar garantias estendidas de compressores. Falhas nessa precisão inicial expõem o instalador ao custo financeiro de substituições de compressores de frequência variável e placas inversoras.</li>
</ol>

<h2>Parte I: A Falácia Termodinâmica do Diagnóstico Heurístico: Aposentando o Método "Beer-Can Cold"</h2>
<p>Para adotar protocolos de precisão, é necessário afastar práticas ultrapassadas que ainda ocorrem na periferia do setor de refrigeração. A mais danosa delas é o método informal conhecido como <em>"beer-can cold"</em> (linha de sucção fria ao toque como uma lata de bebida).</p>
<p>Surgida em meados do século XX, quando os sistemas de refrigeração eram superdimensionados e de velocidade fixa, a avaliação do fluxo pelo tato na linha de sucção (esperando algo em torno de 1,7°C a 4,4°C) funcionava apenas devido à grande tolerância dessas máquinas antigas. Elas operavam com compressores alternativos robustos, separadores de líquido volumosos e dispositivos de expansão do tipo pistão fixo. Contudo, a percepção térmica pelo toque é subjetiva e ignora variáveis ambientais como calor latente, umidade absoluta e vazão de ar no evaporador.</p>
<p>Aplicar essa técnica de carga por sensação térmica a um sistema VRF com compressores inverter e Válvulas de Expansão Eletrônicas (EEVs) leva a falhas graves. Os compressores inverter variam sua rotação por VFD para adaptar-se à carga térmica em tempo real, enquanto as EEVs modulam ativamente a abertura para manter o superaquecimento constante. Ao carregar fluido baseado na temperatura da sucção, o técnico adiciona excesso de refrigerante líquido porque o sistema tenta compensar fechando as EEVs para manter o superaquecimento programado. Isso gera uma sequência progressiva de falhas mecânicas e elétricas: inundação do condensador, subresfriamento excessivo (&gt;30°F / 16,6K), elevação da pressão de alta (SCT), superaquecimento do compressor (&gt;121°C / 250°F), degradação e quebra térmica do lubrificante sintético (POE/PVE), oscilações cíclicas da EEV (hunting), retorno de líquido em estado puro (slugging) e, por fim, queima elétrica do motor do compressor ou estouro por sobrecarga térmica dos transistores IGBT da placa inversora (IPM).</p>

<h2>Parte II: Gestão de Massa e Cálculo da Carga Adicional via Comprimento Equivalente</h2>
<p>Nos sistemas VRF, a quantidade de refrigerante fornecida de fábrica nas condensadoras cobre apenas a unidade externa e comprimentos mínimos de tubulação de líquido (geralmente de 0 a 7,5 metros). Toda a malha de tubulações de interligação deve ter seu volume calculado matematicamente para determinar a carga adicional pesada por meio de balanças digitais de precisão. Como a densidade do fluido em fase líquida é dezenas de vezes superior à densidade em fase de vapor, o cálculo de massa se concentra estritamente na <strong>linha de líquido</strong>.</p>
<p>Apenas medir o comprimento linear real ($L_{real}$) subestima o volume e a perda de carga do sistema. As curvas, desvios e conexões T (Refnets) aumentam a turbulência do fluido. Para corrigir esse comportamento físico, a engenharia utiliza o concept de <strong>Comprimento Equivalente ($L_{eq}$)</strong>, que converte a resistência e o volume de retenção de cada conexão em metros equivalentes de tubo reto. O comprimento efetivo total ($L_{eff}$) é determinado por $L_{eff} = L_{real} + \\sum L_{eq}$.</p>
<p>O comprimento equivalente de uma conexão decorre de sua geometria de perda localizada, calculada a partir de seu coeficiente de perda menor ($k$), diâmetro interno ($d$) e fator de fricção ($f$): $L_{eq} = \\frac{k \\cdot d}{f}$. Para obter a carga total de projeto, soma-se a carga fracionada calculada da tubulação (ex: multiplicando o $L_{eff}$ pelo fator de peso por pé, como 0,55 oz/ft para tubos de 3/8") à carga fixa baseada na capacidade térmica acumulada das evaporadoras conectadas (ex: adicionando 53 oz para capacidades de até 27.000 BTUs).</p>

<h2>Parte III: Pré-requisitos Fundamentais: Triple Evacuation e Decomposição Termodinâmica</h2>
<p>Antes de realizar a injeção do refrigerante líquido, a tubulação deve passar por testes estruturais e secagem profunda para assegurar a pureza do circuito frigorígeno:</p>
<ol>
  <li><strong>Ensaio de Estanqueidade de 24h:</strong> O sistema de cobre é pressurizado com nitrogênio seco a pressões elevadas (geralmente acima de 500 PSIG / 34,5 bar) por um período de 24 horas, visando certificar a ausência de vazamentos microscópicos em bolsas de solda ou flanges de latão.</li>
  <li><strong>Protocolo Tríplice Evacuação:</strong>
    <ul>
      <li><strong>Primeira Etapa:</strong> Evacuar o sistema até que a leitura digital estabilize em 4.000 mícrons. Fechar os registros e quebrar o vácuo introduzindo nitrogênio seco até atingir uma pressão positiva leve de 2 a 3 PSIG. Este fluxo gasoso inerte atua retendo e varrendo a umidade dispersa.</li>
      <li><strong>Segunda Etapa:</strong> Reiniciar a bomba e evacuar até 1.500 mícrons. Repetir a quebra de vácuo com nitrogênio seco a 2-3 PSIG, aguardando de 10 a 15 minutos para que eventuais acúmulos de água líquida em sifões se vaporizem pelo contato com o gás seco.</li>
      <li><strong>Terceira Etapa:</strong> Evacuação final até atingir 500 mícrons ou menos. O teste de estanqueidade digital (decay test) monitora a sustentação da pressão absoluta em isolamento por 1 hora, provando a remoção de gases não condensáveis e a secagem da tubulação.</li>
    </ul>
  </li>
</ol>

<h2>Parte IV: Estabelecendo a Baseline Elétrica no Startup</h2>
<p>A ativação do sistema requer o levantamento e registro das variáveis elétricas para comprovar o equilíbrio eletromecânico e criar a documentação de partida. Os inversores de frequência dos compressores VRF realizam conversões sucessivas de energia: a tensão AC trifásica da rede é convertida por retificadores em uma linha contínua de alta tensão (DC Bus), que atinge valores acima de 300 VDC em redes de 220V. A partir do barramento contínuo, a placa eletrônica ativa os transistores IGBT via modulação por largura de pulso (PWM) para gerar uma onda senoidal sintetizada de frequência variável, controlando a velocidade de rotação do compressor.</p>
<p>Durante a partida em modo de teste forçado a 100% de capacidade (Forced Test Mode), devem ser monitorados e documentados os seguintes parâmetros:</p>
<ul>
  <li><strong>RLA (Rated Load Amps):</strong> A corrente nominal de operação contínua registrada quando o compressor trabalha sob sua máxima capacidade de refrigeração de projeto.</li>
  <li><strong>MCA (Minimum Circuit Ampacity):</strong> Corrente mínima de dimensionamento elétrico dos condutores de fiação, calculada por $125\\% \\times RLA + 100\\%$ das demais cargas simultâneas.</li>
  <li><strong>MOCP (Maximum Overcurrent Protection):</strong> Limite do disjuntor para prevenção de curtos-circuitos.</li>
  <li><strong>LRA (Locked Rotor Amps):</strong> Corrente de partida de rotor bloqueado, drasticamente reduzida em acionamentos inverter com soft-starters integrados.</li>
</ul>

<h2>Parte V: Padrões NEMA MG-1 e Simetria de Tensão</h2>
<p>A longevidade do motor elétrico trifásico do compressor é altamente influenciada pela qualidade do equilíbrio das tensões fornecidas em cada fase da rede local. A norma <strong>NEMA MG-1</strong> define que a assimetria ou desequilíbrio entre as tensões de linha aplicadas nas três fases não deve superar o limite de <strong>1%</strong>.</p>
<p>O desequilíbrio é calculado a partir do desvio máximo das fases em relação à tensão média. Assimetrias de tensão induzem <strong>correntes de sequência negativa</strong> nos enrolamentos do estator. Essas correntes geram campos magnéticos reversos que funcionam como freios eletromagnéticos contínuos, produzindo vibrações mecânicas severas e calor excessivo. O aumento da temperatura interna dos enrolamentos de um motor sob assimetria de tensão é modelado pela expressão: $\\Delta T\\% = 2 \\times (\\% \\text{ Desequilíbrio de Tensão})^2$. Uma assimetria de 3% eleva em 18% a temperatura interna, degradando logaritmicamente o isolamento elétrico das bobinas do compressor e levando ao curto-circuito interno.</p>

<h2>Parte VI: Comprovação da Capacidade Termodinâmica e Cálculo de Enthalpia Split</h2>
<p>A validação final de comissionamento exige comprovar que o sistema realiza as taxas de transferência de calor projetadas, avaliando a temperatura diferencial (Delta-T ou $\\Delta T$) e a variação de entalpia no fluxo de ar das serpentinas de troca.</p>
<ul>
  <li><strong>Evaporador (Indoor Coil):</strong> O diferencial de bulbo seco ideal situa-se no intervalo de 16°F a 20°F (8,9K a 11,1K). Delta-T muito baixo indica falta de fluido ou vazão excessiva de ar; Delta-T muito elevado (&gt;22°F a 25°F) acusa fluxo restrito de ar com alto risco de congelamento. A capacidade sensível e total são calculadas por:
    <ul>
      <li>$q_{sens\\acute{i}vel} = 1,08 \\times CFM \\times \\Delta T_{bs}$</li>
      <li>$q_{total} = 4,5 \\times CFM \\times \\Delta h$</li>
    </ul>
  </li>
  <li><strong>Condensador (Outdoor Coil):</strong> A temperatura diferencial de bulbo seco do exaustor superior deve situar-se entre 15°F e 25°F (8,3K a 13,9K). Diferenciais baixos indicam compressores ineficientes ou carga incompleta; diferenciais altos indicam inundação por excesso de carga ou bobinas sujas.</li>
</ul>
`,
          tabelas_html: `
<h2>Tabela de Comprimento Equivalente de Conexões de Cobre</h2>
<table>
  <thead>
    <tr>
      <th>Diâmetro Nominal (OD)</th>
      <th>Cotovelo 90° Padrão</th>
      <th>Cotovelo 90° Longo Raio</th>
      <th>Cotovelo 45° Padrão</th>
      <th>Junção T Ramal (Branch Tee)</th>
      <th>Junção T Reta (Straight Tee)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>3/8" (9,52 mm)</strong></td>
      <td>0,5 ft (0,15 m)</td>
      <td>0,3 ft (0,09 m)</td>
      <td>0,5 ft (0,15 m)</td>
      <td>1,5 ft (0,46 m)</td>
      <td>0,5 ft (0,15 m)</td>
    </tr>
    <tr>
      <td><strong>1/2" (12,7 mm)</strong></td>
      <td>1,0 ft (0,30 m)</td>
      <td>0,6 ft (0,18 m)</td>
      <td>0,5 ft (0,15 m)</td>
      <td>2,0 ft (0,61 m)</td>
      <td>0,5 ft (0,15 m)</td>
    </tr>
    <tr>
      <td><strong>5/8" (15,87 mm)</strong></td>
      <td>1,5 ft (0,46 m)</td>
      <td>1,0 ft (0,30 m)</td>
      <td>0,5 ft (0,15 m)</td>
      <td>2,5 ft (0,76 m)</td>
      <td>0,5 ft (0,15 m)</td>
    </tr>
    <tr>
      <td><strong>3/4" (19,05 mm)</strong></td>
      <td>2,0 ft (0,61 m)</td>
      <td>1,3 ft (0,40 m)</td>
      <td>0,5 ft (0,15 m)</td>
      <td>3,0 ft (0,91 m)</td>
      <td>0,5 ft (0,15 m)</td>
    </tr>
    <tr>
      <td><strong>1-1/8" (28,58 mm)</strong></td>
      <td>2,5 ft (0,76 m)</td>
      <td>1,6 ft (0,49 m)</td>
      <td>1,0 ft (0,30 m)</td>
      <td>4,5 ft (1,37 m)</td>
      <td>0,5 ft (0,15 m)</td>
    </tr>
    <tr>
      <td><strong>1-5/8" (41,27 mm)</strong></td>
      <td>4,0 ft (1,22 m)</td>
      <td>2,6 ft (0,79 m)</td>
      <td>1,5 ft (0,46 m)</td>
      <td>7,0 ft (2,13 m)</td>
      <td>0,5 ft (0,15 m)</td>
    </tr>
  </tbody>
</table>

<h3>Matriz de Diagnóstico Clínico de Parâmetros de Partida VRF</h3>
<table>
  <thead>
    <tr>
      <th>Parâmetro Medido</th>
      <th>Condição Lida em Campo</th>
      <th>Diagnóstico Termodinâmico / Elétrico</th>
      <th>Causa Raiz do Problema</th>
      <th>Ação Corretiva Recomendada</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Superaquecimento (Sucção)</strong></td>
      <td>Baixo (&lt; 4°F / 2,2K)</td>
      <td>Risco iminente de retorno de líquido e golpe mecânico</td>
      <td>EEV excessivamente aberta ou sensor de temperatura avariado no tubo</td>
      <td>Substituir sensor termistor (NTC) ou ajustar calibração de superaquecimento da placa</td>
    </tr>
    <tr>
      <td><strong>Subresfriamento (Líquido)</strong></td>
      <td>Elevado (&gt; 30°F / 16,6K)</td>
      <td>Condensador inundado; alta pressão interna</td>
      <td>Carga de refrigerante realizada em excesso (overcharge)</td>
      <td>Recolher fluido de forma gradual usando estação de recuperação e balança</td>
    </tr>
    <tr>
      <td><strong>Temperatura de Descarga</strong></td>
      <td>Elevada (&gt; 110°C / 230°F)</td>
      <td>Sobrecarga mecânica do compressor; degradação do óleo POE</td>
      <td>Baixa carga de refrigerante no sistema ou EEV estrangulada</td>
      <td>Corrigir microvazamentos ou substituir a bobina elétrica atuadora da EEV</td>
    </tr>
    <tr>
      <td><strong>Corrente do Compressor</strong></td>
      <td>Elevada (&gt; RLA nominal)</td>
      <td>Sobrecarga de potência elétrica e risco de queima do inversor</td>
      <td>Redução drástica da troca térmica na condensadora ou excesso de fluido</td>
      <td>Efetuar higienização profunda das aletas externas da condensadora</td>
    </tr>
    <tr>
      <td><strong>Desequilíbrio de Tensão</strong></td>
      <td>Elevado (&gt; 1% NEMA MG-1)</td>
      <td>Geração de correntes de sequência negativa e calor no estator</td>
      <td>Conexões de força frouxas ou má distribuição de cargas monofásicas</td>
      <td>Reapertar contatos elétricos no quadro ou equilibrar as fases da instalação</td>
    </tr>
    <tr>
      <td><strong>Delta-T Bulbo Seco (Evap.)</strong></td>
      <td>Baixo (&lt; 12°F / 6,6K)</td>
      <td>Baixa eficiência de resfriamento e falta de absorção de calor</td>
      <td>Fluxo de ar muito rápido devido a velocidade excessiva no blower</td>
      <td>Ajustar as configurações do ventilador interno (CFM) via controle remoto</td>
    </tr>
  </tbody>
</table>
`,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 07-01</h2>

<div class="infobox-warning">
  <h3>🚨 POSICIONAMENTO DE INSTRUMENTOS DE MEDIÇÃO</h3>
  <p>Para que os dados coletados na baseline de partida sejam fisicamente representativos, os transdutores de pressão de serviço e os termopares tipo pinça de precisão devem ser montados diretamente nos tubos de cobre próximos às saídas de serviço das unidades, utilizando pastas térmicas nas conexões de termopares e isolação sob fita elastomérica. Leituras de pressão em mangueiras soltas causam erros que descalibram o cálculo dinâmico de superaquecimento útil.</p>
</div>

<div class="infobox-warning">
  <h3>🚨 ATENÇÃO À QUALIDADE DO BARRAMENTO DC (BUS CONTINUOUS)</h3>
  <p>Ao efetuar testes elétricos na placa inversora do compressor VRF, certifique-se de aguardar no mínimo 10 minutos após o desligamento da alimentação geral antes de interagir com componentes internos. Os capacitores de eletrólise do barramento contínuo DC retêm altas tensões perigosas (excedendo 300 VDC) que não dissipam instantaneamente, gerando riscos severos de choque elétrico ou danos irreparáveis ao módulo de potência (IPM) em caso de curto acidental de ferramentas nas trilhas da placa principal.</p>
</div>
`,
        },
        {
          id: "07-02",
          titulo: "Telemetria digital blinda contratos de manutenção",
          modulo: "MÓDULO 07 - 02",
          videos: [
            {
              titulo:
                "Telemetria digital blinda contratos de manutenção - MÓDULO 07 - 02",
              link: "https://youtu.be/SBstN6pmD2Y",
              tipo: "videoaula",
            },
            {
              titulo: "HVAC  O Handover Digital - MÓDULO 07 - 02",
              link: "https://youtu.be/2IpTJxTCXNQ",
              tipo: "podcast",
            },
          ],
          apresentacao:
            "/base_conhecimento_treinamento/landing_page/Modulo-07/Modulo-07-02-Elite HVAC Digital Handover Masterclass.pdf",
          // ── Expanded Schema Fields (7-Tab LessonReaderView) ──
          link_video: "https://youtu.be/SBstN6pmD2Y",
          link_podcast: "https://youtu.be/2IpTJxTCXNQ",
          total_slides: 16,
          fontes_imagens: Array.from({ length: 16 }, (_, i) =>
            `/images/academia/hvac-instalacao/modulo07/modulo07-02/Modulo-07-02-Elite HVAC Digital Handover Masterclass-${String(i + 1).padStart(2, '0')}.jpg`
          ),
          conteudo_html: `
<h2>Introdução: O Paradigma dos Sistemas HVAC como Computadores Industriais</h2>
<p>"Se você não pode provar com dados digitais, isso não aconteceu." Esta regra define o limite entre empresas de climatização de elite e os instaladores convencionais no setor comercial de médio e grande porte. Historicamente, a refrigeração era governada por diagnósticos analógicos — técnicos utilizando manômetros de latão, avaliando superaquecimento pela temperatura sentida com as mãos e confiando na audição para julgar a integridade mecânica de um compressor. Hoje, esse método analógico em equipamentos de Fluxo de Refrigerante Variável (VRF/VRV) e resfriadores de líquido (chillers) é ineficiente e perigoso.</p>
<p>As centrais de climatização modernas não são meros loops termodinâmicos mecânicos. Trata-se de computadores industriais que circulam fluido refrigerante, governados por microprocessadores avançados de alta velocidade que realizam leituras de dezenas de termistores e transdutores de pressão. Eles ajustam conversores de frequência (VFDs) e motores de passo de expansão centenas de vezes por segundo para manter a estabilidade térmica das instalações. Assim, diagnosticar essas máquinas exige o estabelecimento de conexões digitais diretas com as placas de controle principais, utilizando computadores e softwares dedicados de telemetria.</p>
<p>Conectar manômetros analógicos tradicionais a portas de serviço de sistemas VRF é um erro de procedimento grave. Toda conexão mecânica de mangueiras purga pequenas frações de fluido refrigerante. Em sistemas VRF críticos de carga fracionada precisa, a remoção de algumas onças de refrigerante nas mangueiras do manômetro pode desestabilizar a equalização de superaquecimento dinâmico controlada pelas EEVs, alterando os padrões de baseline. A telemetria digital elimina esses problemas: ao conectar um computador à placa principal (via barramento de comunicação e interfaces de conversão como RS-232, USB ou Bluetooth), o profissional obtém dados em tempo real (posição de EEVs, frequência de compressores, correntes elétricas e desvios de temperatura de sensores) mantendo o sistema em ciclo hermético fechado.</p>

<h2>Parte I: Desvendando a Máquina: Softwares de Diagnóstico das Principais Fabricantes (OEM)</h2>
<p>A realização de diagnósticos de excelência baseia-se na interpretação de relatórios gráficos de dados gerados pelos softwares de serviço proprietários de cada fabricante:</p>
<ul>
  <li><strong>Daikin Service Checker (D-Checker):</strong> No ecossistema Daikin VRV, o D-Checker é a ferramenta utilizada para coletar a telemetria do sistema direto do barramento de dados. A conexão física é estabelecida via interface BTSC/i2S, que se comunica por Bluetooth com um computador ou tablet rodando Windows, iOS ou Android. O software monitora pressões, frequências de operação dos compressores inverter (em Hertz) e as aberturas das Válvulas de Expansão Eletrônicas (EEV) em passos de pulso. As EEVs das evaporadoras acopladas a caixas Branch Provider (BP) operam tipicamente na faixa de 0 a 2000 pulses (mapeadas localmente em escalas de 0 a 480 pulses). Durante o ciclo automático de retorno de óleo (Oil Return Operation) em uma unidade VRV-III, por exemplo, a EEV principal (EVH) deve abrir-se exatamente em 600 pulses, a EEV de desvio líquido (EVL) a 760 pulses, as linhas de controle de subresfriamento (EVHS/EVLS) a 480 pulses, e a válvula de desvio de gás quente (EVSC) deve ser vedada a 0 pulses. Desvios nestes limites indicam travamentos mecânicos da válvula ou falhas nas bobinas dos motores de passo.</li>
  <li><strong>Mitsubishi Maintenance Tool 2 (CMS-MNG-E):</strong> As redes VRF City Multi da Mitsubishi transmitem dados digitais utilizando o protocolo M-NET. O software conecta-se ao conversor M-NET (modelos CMS-MNF, CMS-MNF-B ou CMS-MNG-E) via USB/RS-232 ou LAN (AE-200E) usando TCP/IP. Ele apresenta o superaquecimento calculado e os graus de subresfriamento do circuito. O destaque é a função <em>Pre-error Data Monitoring</em>, que funciona como uma caixa-preta de aviação gravando os dados operacionais em intervalos de 1 minuto. Em falhas intermitentes como o Código de Erro 1500 (tradicionalmente indicado em tabelas rápidas como "excesso de carga", mas que na verdade representa um alarme de baixo superaquecimento na sucção), o pré-alarme permite verificar se a falha decorreu de uma descalibração do termistor do tubo (leituras fantasmas) ou de uma EEV travada aberta inundando o compressor, evitando que o técnico recolha fluido desnecessariamente do sistema.</li>
  <li><strong>Softwares de Serviço para Chillers e Gêmeos Digitais:</strong> Em centrais de água gelada (chillers), softwares como o <em>Trane Tracer TU</em> conectam-se via protocolo BACnet (portas 80/443) aos controladores AdaptiView ou Symbio 800. A telemetria contínua alimenta modelos de <strong>Gêmeos Digitais (Digital Twins)</strong> que comparam o comportamento real da máquina com simulações preditivas guiadas por IA. Algoritmos de análise (como o Airedale Cloud Diagnostics) cruzam o superaquecimento e subresfriamento com as temperaturas de água gelada, identificando microvazamentos de fluido ou incrustações iniciais em serpentinas antes que ocorram falhas mecânicas severas, integrando avisos automáticos a sistemas ERP (SAP).</li>
</ul>

<h2>Parte II: Telemetria Digital Auxiliar: O Uso de Smart Probes Sem Fio</h2>
<p>Além dos sensores nativos dos equipamentos, o protocolo de comissionamento exige auditoria externa com instrumentos de medição de campo digitais e sem fio (Smart Probes). Sensores internos podem sofrer descalibração por oxidação ou fadiga, enviando dados incorretos à placa-mãe. Smart probes fornecem a "verdade física" das pressões e temperaturas de forma independente.</p>
<p>Os ecossistemas mais utilizados em campo são o <strong>Fieldpiece Job Link</strong> e o <strong>Testo Smart Probes</strong>. Ambos utilizam conexões vedadas com o-rings de borracha para evitar perda de fluido refrigerante ao acoplar o instrumento na válvula de serviço de 1/4". O Fieldpiece Job Link destaca-se por seus transmissores Bluetooth de alta potência que penetram barreiras físicas espessas (como paredes corta-fogo e portas de salas de máquinas) e pinças de temperatura com tecnologia <em>Rapid Rail</em> de leitura condutiva (livre de lag térmico). O Testo Smart Probes oferece menor fator de forma para locais confinados e sensores destacáveis de fluxo de ar para psicrometria de dutos. Ao cruzar os dados dos sensores externos com a telemetria reportada pela placa no D-Checker ou Maintenance Tool, o engenheiro consegue identificar imediatamente sensores internos avariados.</p>

<h2>Parte III: A Estratégia do Handover 100% Digital e a Emissão do "Birth Certificate"</h2>
<p>O encerramento de uma obra ou a entrega de uma instalação de climatização comercial não deve ser feito apenas com a entrega física das chaves da casa de máquinas ou manuais em papel. A entrega profissional moderna exige o <strong>Handover 100% Digital</strong>. Este protocolo consiste na compilação estruturada de todas as medições coletadas durante os ensaios de campo, gerando um documento digital inviolável que atua como a <strong>"Certidão de Nascimento"</strong> do sistema climatizado. Ele deve conter obrigatoriamente:</p>
<ol>
  <li><strong>Registros de Ensaio com Nitrogênio Seco:</strong> Gráficos obtidos via manômetros digitais registrando a pressurização contínua a 600 PSIG (41,3 bar) durante 24 horas, com a correspondente tabela de correção de pressão conforme a variação da temperatura ambiente.</li>
  <li><strong>Screenshots Qualificados do Teste de Vácuo (Decay Test):</strong> Capturas de tela dos aplicativos de medição contendo o timestamp (data/hora), comprovando vácuo final abaixo de 500 mícrons estável em estado de isolamento da bomba, atestando a desidratação das linhas.</li>
  <li><strong>Memória de Cálculo de Carga de Fluido (Trim Charge):</strong> Detalhamento matemático de todas as linhas de líquido físicas instaladas por diâmetro e conexões equivalentes adicionadas, confrontando a carga teórica calculada com o registro de peso introduzido via balança digital.</li>
  <li><strong>Gravação da Baseline de Operação OEM:</strong> Gravação contínua de no mínimo 2 horas extraída do software do fabricante (D-Checker, Maintenance Tool ou Tracer), exibindo a assinatura operacional inicial das evaporadoras e condensadoras trabalhando sob carga total nominal (EEVs, Hz de compressores, correntes elétricas e pressões de trabalho estáveis). Os fabricantes de VRF exigem o envio desses dados de comissionamento em janelas de 21 a 90 dias para homologação e ativação dos contratos de garantia de compressores. Também deve constar a verificação de pré-aquecimento do cárter por 12 horas antes da partida.</li>
  <li><strong>Relatório Fotográfico da Instalação:</strong> Imagens das linhas de cobre montadas com isolamento individualizado, suportes estruturais posicionados e, essencialmente, a especificação técnica do cabeamento elétrico blindado (cabo de par trançado blindado de bitola 16 AWG com malha de terra aterrada em ponto único, requerido para o M-NET ou barramento K/H da Daikin) para atestar a blindagem contra interferências eletromagnéticas.</li>
</ol>
<p>A compilação de dados do Handover Digital serve como um escudo legal contra processos de responsabilidade civil para a empresa instaladora. Se o sistema falhar por falta de manutenção, adulteração de parâmetros da placa, obstruções de fluxo por poeira ou surtos elétricos da edificação, a empresa instaladora blinda-se contra litígios baseando-se nas medições da certidão de nascimento do equipamento.</p>

<h2>Parte IV: O Marco Legal do PMOC no Brasil: Lei Federal 13.589/2018</h2>
<p>O Handover Digital serve como ponte comercial para a contratação dos serviços de manutenção preventiva obrigatórios por lei. No Brasil, edifícios públicos ou comerciais com sistemas de climatização artificial devem implantar o <strong>Plano de Manutenção, Operação e Controle (PMOC)</strong>, em conformidade com as seguintes diretrizes:</p>
<ul>
  <li><strong>Lei Federal nº 13.589/2018 e Portaria nº 3.523/GM do Ministério da Saúde:</strong> Obrigatório para edifícios públicos ou coletivos cuja soma das capacidades de refrigeração instaladas atinja ou ultrapasse o limite de <strong>60.000 BTU/h (5 TR)</strong>.</li>
  <li><strong>Responsabilidade Técnica Habilitada:</strong> O responsável técnico pela emissão do Termo de Responsabilidade Técnica (TRT) ou Anotação de Responsabilidade Técnica (ART) do PMOC deve ser um profissional registrado no <strong>CREA</strong> ou no <strong>CFT</strong>, habilitado nas áreas de engenharia mecânica, refrigeração ou eletromecânica.</li>
  <li><strong>Qualidade do Ar ANVISA RE 09/2003:</strong> Exige vistorias técnicas periódicas semestrais que incluem a amostragem física de fungos, bactérias, partículas de poeira e taxas de CO₂ em circulação. A ANVISA RE 09/2003 estabelece que a empresa responsável pela amostragem laboratorial e análise microbiológica do ar interno **não pode ter vínculo de propriedade ou controle** com a empresa que realiza a manutenção mecânica e limpeza física dos dutos e aparelhos de refrigeração. Isso assegura a isenção de interesses na emissão dos laudos de qualidade do ar.</li>
  <li><strong>Fiscalização e Penalidades da Vigilância Sanitária:</strong> A ausência do documento PMOC atualizado mantido em campo ou a falta das análises de ar semestrais configuram infração sanitária sujeita a autuações imediatas da Vigilância Sanitária estadual ou municipal, com multas significativas e potencial suspensão do alvará de funcionamento do estabelecimento.</li>
</ul>

<h2>Parte V: A Transição Comercial para o Contrato PMOC de Telemetria</h2>
<p>O instalador de elite utiliza os baselines do comissionamento digital para fechar contratos recorrentes de manutenção. Apresentar um relatório contendo a telemetria, gráficos de vácuo digitais e dados de pressão do sistema posiciona a empresa como autoridade tecnológica e parceira de dados do cliente. Em vez de propor uma limpeza simples de filtros de ar, a equipe técnica apresenta uma proposta de <strong>Contrato PMOC Habilitado por Telemetria</strong>.</p>
<p>A estratégia dita que o PMOC seja proposto como um "Acordo de Serviço Habilitado por Telemetria". O cliente entende que as visitas mensais da equipe técnica não servem apenas para limpar gabinetes, mas para conectar a Maintenance Tool ou o D-Checker, extrair a telemetria periódica e comparar as variáveis de subresfriamento, pressões de trabalho e corrente do motor contra a baseline original do Birth Certificate. Pequenas derivas identificadas antecipam microvazamentos de fluido ou incrustações térmicas nas serpentinas. Isso reduz falhas catastróficas, garante total conformidade legal contra fiscalizações da Vigilância Sanitária, e mantém o cliente blindado contra ofertas de concorrentes que não possuem o histórico detalhado da planta.</p>
`,
          tabelas_html: `
<h2>Parâmetros de Protocolos de Comunicação das Principais OEMs</h2>
<table>
  <thead>
    <tr>
      <th>Fabricante do Sistema</th>
      <th>Protocolo de Comunicação Nativo</th>
      <th>Interface de Conversão Requerida</th>
      <th>Software de Telemetria Oficial</th>
      <th>Modo Diagnóstico Avançado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Daikin VRV</strong></td>
      <td>Barramento de Dados Daikin (P1/P2 ou F1/F2)</td>
      <td>BTSC / i2S Bluetooth Link</td>
      <td><strong>D-Checker</strong> (Service Checker)</td>
      <td>Monitoramento de EEVs (0-2000 pulses) e Hertz</td>
    </tr>
    <tr>
      <td><strong>Mitsubishi City Multi</strong></td>
      <td>M-NET Protocol</td>
      <td>Conversor CMS-MNG-E ou LAN AE-200E</td>
      <td><strong>Maintenance Tool 2</strong></td>
      <td>*Pre-error Data* (Buffer de 1 minuto antes do erro)</td>
    </tr>
    <tr>
      <td><strong>Trane Chillers</strong></td>
      <td>BACnet Link</td>
      <td>Tracer UC800 / Symbio 800 Controller</td>
      <td><strong>Tracer TU</strong></td>
      <td>Integração com Gêmeos Digitais e IA de vazamentos</td>
    </tr>
  </tbody>
</table>

<h3>Resumo de Aberturas EEV no Oil Return Operation (Daikin VRV-III)</h3>
<table>
  <thead>
    <tr>
      <th>Válvula de Expansão</th>
      <th>Abertura Alvo no Oil Return</th>
      <th>Finalidade do Circuito</th>
      <th>Diagnóstico de Desvio / Falha no D-Checker</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>EVH</strong></td>
      <td>600 Pulsos</td>
      <td>Linha de expansão principal externa</td>
      <td>Válvula travada mecanicamente ou perda de passo eletrônico</td>
    </tr>
    <tr>
      <td><strong>EVL</strong></td>
      <td>760 Pulsos</td>
      <td>Linha de desvio de líquido de retorno</td>
      <td>Queima do motor de passo ou curto na saída triac da placa</td>
    </tr>
    <tr>
      <td><strong>EVHS / EVLS</strong></td>
      <td>480 Pulsos</td>
      <td>Subresfriador do permutador térmico</td>
      <td>Subresfriamento incorreto; contaminação de poeira no filtro da EEV</td>
    </tr>
    <tr>
      <td><strong>EVSC</strong></td>
      <td>0 Pulsos (Fechada)</td>
      <td>Desvio de gás quente bypass</td>
      <td>Vazamento de gás quente injetando na sucção e reduzindo capacidade</td>
    </tr>
  </tbody>
</table>
`,
          infobox_campo: `
<h2>⚠️ Alertas Críticos de Campo — Módulo 07-02</h2>

<div class="infobox-warning">
  <h3>🚨 COMPENSAÇÃO DE TEMPERATURA NO ENSAIO DE ESTANQUEIDADE</h3>
  <p>Ao realizar o ensaio de estanqueidade a 600 PSIG com nitrogênio seco em sistemas expostos a variações térmicas de 24h, utilize a regra prática de campo de compensação: a pressão varia aproximadamente <strong>0,80 PSI para cada 1°F</strong> (ou 0,1 bar por 1°C). Se as leituras do manômetro caírem na manhã seguinte com o resfriamento ambiente, aplique o cálculo de correção de Gay-Lussac antes de suspeitar de vazamentos físicos na rede de cobre.</p>
</div>

<div class="infobox-warning">
  <h3>🚨 ATERRAMENTO DA REDE DE COMUNICAÇÃO (M-NET / P1-P2)</h3>
  <p>Cabos de transmissão digital de dados do VRF/VRV operam em baixas tensões sensíveis a ruídos eletromagnéticos gerados pelas frequências de comutação das placas inversoras de compressores e motores de ventiladores VFD. Utilize estritamente cabo blindado de par trançado classe <strong>16 AWG</strong> e certifique-se de que a blindagem (shield) do cabo seja aterrada em um único ponto, conforme especificado nos manuais de comissionamento. Aterramentos em múltiplos pontos criam loops de terra (ground loops) que causam falhas cíclicas de comunicação e travamento de sistemas.</p>
</div>
`,
        },
      ],
    },
  ],
};
