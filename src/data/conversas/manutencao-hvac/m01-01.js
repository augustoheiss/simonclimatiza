// src/data/conversas/manutencao-hvac/m01-01.js
// Roteiro "Papo de Balcão" — Curso de Manutenção HVAC · Aula m01-01 (Filosofia do TCO)
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm01-01',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Piloto G2',
    data: '2026-10-14',
  },
  cenario: 'padaria-manha',
  duracaoMin: 10,
  beats: [
    // ── 1. CHEGADA ──────────────────────────────────────────────────────────
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Terça, 7h15. Balcão da padaria. Juninho chega cabisbaixo segurando uma proposta de contrato PMOC que o síndico recusou.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Simon, o síndico disse que não vai fechar contrato preventivo porque os aparelhos estão soprando frio e manutenção é gasto inútil.',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'O cliente / síndico recusa-se a fechar um contrato PMOC porque acha que manutenção é um custo supérfluo, já que as evaporadoras estão soprando ar frio no momento.',
      },
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'ironico',
      texto: 'Deixa eu adivinhar: cê tentou vender “limpeza de filtro e reaperto de borne” pro diretor financeiro?',
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Falei de serpentina suja, contator picado e taxa de compressão… ele bocejou na segunda frase.',
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Ju, CFO não fala “termodinâmica”, ele fala **TCO** (Custo Total de Propriedade), **Payback** e **VPL**. Bora traduzir a física pro bolso dele.',
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Ao longo de 15 a 25 anos de vida útil de um sistema comercial, quanto a compra inicial da máquina (CapEx) representa do gasto total?',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Dados de ciclo de vida representativos para sitemas mecânicos comerciais ao longo de 15 a 25 anos de operação.',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Mais da metade do gasto total do edifício.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'ironico',
              texto: 'É isso que o cliente acha! Por isso ele compra o mais barato e chora na conta de luz.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Apenas 12% na compra inicial (CapEx), contra 88% na fase operacional.',
          ideal: true,
          fonte: {
            campo: 'conteudo_html',
            trecho: 'a fase operacional do ativo, que compreende energia, mão de obra, peças e inatividade, constitui impressionantes 88% do custo total do ciclo de vida',
          },
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! Só **12%** é CapEx; **88%** vai embora operando o sistema em energia, peças, mão de obra e paradas.',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'a compra do equipamento representa apenas 12% da pegada financeira de longo prazo, enquanto 88% do capital será queimado na conta de luz e reparos.',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Empata meio a meio entre compra e manutenção.',
          reacao: [
            {
              quem: 'bia',
              texto: 'Longe disso! A operação engole quase tudo. Olha a fatia que a conta de energia leva sozinha.',
            },
          ],
        },
      ],
    },

    // ── 3. PAPO RETO ────────────────────────────────────────────────────────
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Na Tabela de TCO, só os **Custos de Energia** levam **32%** de tudo, Mão de Obra **28%**, Peças **20%**, CapEx **12%** e Downtime **8%**.',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Custos de Energia 32% Consumo elétrico, eficiência em kW/TR (ou kW/ton), horas de operação, tarifas de demanda de pico. Mão de Obra de Manutenção 28% Contratos de manutenção preventiva, mão de obra de diagnóstico, chamados de emergência fora do horário comercial. Peças de Reposição 20% Consumíveis (filtros, correias), componentes principais (compressores, serpentinas, placas inversoras/inverter). Compra de Capital Inicial (CapEx) 12% Equipamento básico, içamento (rigging), aluguel de guindastes, preparação do local, dutos, comissionamento. Downtime (Inatividade) e Impacto no Negócio 8%',
      },
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'E tem a regra do “barato que sai caro”: cada R$ 1,00 que o síndico adia na preventiva vira uma **penalidade de R$ 4,00** em CapEx precoce.',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Cada R$ 1,00 que o cliente economiza ou adia em rotinas preventivas de AVAC traduz-se diretamente em uma penalidade de R$ 4,00 em custos de renovação precoce de capital (CapEx).',
      },
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mas como uma poeirinha na serpentina faz um estrago financeiro desse tamanho?',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Olha a física da sujeira: meros **1,07 mm** de incrustação na serpentina condensadora derrubam a eficiência global do sistema em **21%**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'um acúmulo de sujeira de meros 1,07 mm (0,042 polegadas) em uma serpentina condensadora reduz a eficiência global do sistema em 21%',
      },
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'bia',
      texto: 'E no evaporador, uma película de **0,5 mm** corta a transferência de calor em **15%** e estrangula o fluxo de ar em **11%**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'uma película de poeira tão fina quanto 0,5 mm (0,02 polegadas) em uma serpentina evaporadora reduzirá a eficiência de transferência de calor em 15% e estrangulará o fluxo de ar volumétrico em 11%',
      },
    },
    {
      id: 'fala-10',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Sujeira funciona como cobertor térmico na aleta: sobe a pressão de descarga, sobe a amperagem, frita o óleo e termina em quebra de compressor.',
    },
    {
      id: 'fala-11',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Ao longo de 15 anos sem manutenção, o consumo total de energia da instalação negligenciada sobe **41%** em relação à linha de base!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'no 15º ano de operação, o consumo total de energia da instalação negligenciada aumenta em impressionantes 41% em comparação com sua linha de base inicial',
      },
    },
    {
      id: 'fala-12',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Por outro lado, o estudo da JLL provou que a manutenção preventiva estruturada entrega um **ROI de 545%** e corta de **15% a 20%** da energia ao ano.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'a manutenção preventiva abrangente em sistemas de AVAC comerciais gera um impressionante Retorno sobre o Investimento (ROI) de 545%',
      },
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Iceberg Oculto e o Compressor no Pico do Verão',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Lembra daquele prédio que cortou o PMOC pra “economizar”? O compressor do VRF abriu o bico bem na semana mais quente do verão.',
        },
        {
          quem: 'bia',
          texto: 'Não foi azar: **63%** das falhas ocorrem no pico de carga, e chamado de urgência custa de **50% a 100%** mais caro na mão de obra!',
          fonte: {
            campo: 'conteudo_html',
            trecho: '63% das falhas de AVAC ocorrem durante condições de pico de carga (dias de calor extremo no verão ou frio intenso no inverno), as equipes de manutenção operam saturadas [37]. Taxas de Urgência: Chamados fora do horário comercial, fins de semana ou feriados carregam prêmios de mão de obra de 50% a 100% mais altos',
          },
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'E a peça foi só a ponta do iceberg: o custo real do downtime comercial é **4,2 vezes maior** que o conserto mecânico visível.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O custo real da inatividade do sistema de AVAC comercial é, em média, 4,2 vezes maior do que o custo visível do reparo mecânico',
          },
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Em ambientes severos (indústria, cozinhas ou litoral), um sistema sem manutenção pode perder cerca de 1% de eficiência por mês.',
      verdade: true,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'a alegação de "1% ao mês" (representando cerca de 12% de degradação anualizada) é matematicamente sólida e empiricamente observável em ambientes específicos de alto estresse.',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Verdade! Em áreas com gordura, poeira industrial ou maresia, chegar a **1,07 mm** de sujeira em 20 meses gera perda superior a **1% ao mês**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Dado a métrica estabelecida de que uma camada de sujeira de 1,07 mm causa uma redução de eficiência de 21% [13], atingir essa espessura em um período de 20 meses em um ambiente severo e sem filtragem adequada resulta diretamente em uma perda de eficiência que excede 1% ao mês.',
          },
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Num sistema VRF comercial, queimar o compressor é barato — custa menos de 10% do valor da condensadora.',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          texto: 'Mito brabo! No VRF, a falha do compressor representa de **50% a 70%** do custo de uma condensadora nova inteira.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Em sistemas avançados como o VRF, a falha do compressor frequentemente representa 50% a 70% do custo de uma unidade condensadora externa inteiramente nova',
          },
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO ────────────────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Um cliente propõe um contrato anual de R$ 25.000. Seu levantamento mostra que a preventiva vai gerar R$ 30.000/ano de economia de energia e evitar R$ 10.000/ano de reparos emergenciais. Qual é o Payback Simples desse contrato?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Se um contrato de manutenção custa R$ 25.000 por ano, mas gera comprovadamente R$ 30.000 em economia de energia e evita reparos emergenciais médios históricos de R$ 10.000, o retorno ocorre em menos de 8 meses.',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Menos de 8 meses — o contrato se paga sozinho ainda no primeiro ano.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Conta de CFO! R$ 25.000 divididos por (R$ 30.000 + R$ 10.000) de benefício anual dá retorno em **menos de 8 meses**.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Se um contrato de manutenção custa R$ 25.000 por ano, mas gera comprovadamente R$ 30.000 em economia de energia e evita reparos emergenciais médios históricos de R$ 10.000, o retorno ocorre em menos de 8 meses.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Mais de 5 anos, porque manutenção preventiva é despesa pura.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'ironico',
              texto: 'Despesa pura é trocar compressor no domingo de carnaval! Soma a economia de luz com o conserto evitado.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'O dobro do prazo de depreciação do equipamento.',
          feedback: [
            {
              quem: 'bia',
              texto: 'Usa a fórmula: Investimento ÷ (Economia Anual + Custos Evitados). Com R$ 25.000 investidos, o retorno ocorre em menos de 8 meses!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Se um contrato de manutenção custa R$ 25.000 por ano, mas gera comprovadamente R$ 30.000 em economia de energia e evita reparos emergenciais médios históricos de R$ 10.000, o retorno ocorre em menos de 8 meses.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'desafio-2',
      tipo: 'quiz',
      enunciado: 'Pela estratégia de Manutenção em Níveis (Tabela 1.2), qual deve ser a abordagem para Ativos Críticos (Nível 1: Chillers, Câmaras Frias e Centrais VRF)?',
      opcoes: [
        {
          id: 'a',
          texto: 'Reativa planejada (Run-to-fail), igual exaustor de banheiro.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Rodar Chiller ou VRF até quebrar é pedir falência! Run-to-fail é só para Nível 3 (ativos descartáveis).',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Preditiva baseada em condição e monitoramento contínuo via sensores IoT.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Perfeito! Em um hospital, parar três salas cirúrgicas pode custar mais de **R$ 400.000** numa tarde — sensores e PdM se pagam na hora.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'O cancelamento ou atraso de cirurgias em três salas de operação pode custar a um hospital mais de R$ 400.000 em uma única tarde',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Apenas lavar filtro quando o cliente reclamar de calor.',
          feedback: [
            {
              quem: 'bia',
              texto: 'Quando o cliente sente calor, os **1,07 mm** de sujeira já comeram **21%** da eficiência faz tempo.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'um acúmulo de sujeira de meros 1,07 mm (0,042 polegadas) em uma serpentina condensadora reduz a eficiência global do sistema em 21%',
              },
            },
          ],
        },
      ],
    },

    // ── 7. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer mostrar os números na reunião com o síndico ou CFO? Abre a aba **Tabelas & Parâmetros** (Tabelas 1.1, 1.2 e 1.3).',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**CapEx é só a entrada (12%):** **88%** do custo do ciclo de vida está na operação (energia **32%**, mão de obra **28%**, peças **20%**, downtime **8%**).',
        '**Sujeira tem preço exato:** **1,07 mm** na condensadora corta **21%** da eficiência; cada **R$ 1,00** adiado vira **R$ 4,00** de penalidade em CapEx.',
        '**Venda ROI, não limpeza:** manutenção preventiva entrega **545%** de ROI e reduz o consumo de energia de **15% a 20%** ao ano.',
      ],
      proxima: 'Na aula m01-02 vamos dominar a Lei Federal 13.589/2018 (PMOC), ABNT NBR 17037 e NBR 16401.',
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Custos de Energia 32% Consumo elétrico, eficiência em kW/TR (ou kW/ton), horas de operação, tarifas de demanda de pico. Mão de Obra de Manutenção 28% Contratos de manutenção preventiva, mão de obra de diagnóstico, chamados de emergência fora do horário comercial. Peças de Reposição 20% Consumíveis (filtros, correias), componentes principais (compressores, serpentinas, placas inversoras/inverter). Compra de Capital Inicial (CapEx) 12% Equipamento básico, içamento (rigging), aluguel de guindastes, preparação do local, dutos, comissionamento. Downtime (Inatividade) e Impacto no Negócio 8%',
        },
        {
          campo: 'infobox_campo',
          trecho: 'a compra do equipamento representa apenas 12% da pegada financeira de longo prazo, enquanto 88% do capital será queimado na conta de luz e reparos.',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Cada R$ 1,00 que o cliente economiza ou adia em rotinas preventivas de AVAC traduz-se diretamente em uma penalidade de R$ 4,00 em custos de renovação precoce de capital (CapEx).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'um acúmulo de sujeira de meros 1,07 mm (0,042 polegadas) em uma serpentina condensadora reduz a eficiência global do sistema em 21%',
        },
        {
          campo: 'conteudo_html',
          trecho: 'a manutenção preventiva abrangente em sistemas de AVAC comerciais gera um impressionante Retorno sobre o Investimento (ROI) de 545%',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A manutenção adequada reduz o consumo total de energia do edifício em 15% a 20% ao ano',
        },
      ],
    },
  ],
};
