// src/data/conversas/instalacao-hvac/01-03.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 01-03
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '01-03',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'bancada-oficina',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Quarta, 7h30. Bancada da oficina. Dois cilindros com faixa vermelha no domo e uma lata de óleo POE lacrada sobre a mesa.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'Simon, fui rosquear minha mangueira comum nesse cilindro de R-32 com faixa vermelha e a porca gira em falso! A rosca veio espanada de fábrica?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'risada',
      texto: 'Para tudo antes que você pegue o alicate de pressão, Ju! Cilindro **A2L** tem **rosca esquerda** (*lefty-tighty*) de propósito pra impedir ferramenta que solta faísca!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Cilindro A2L (R-32, R-454B): Rosca esquerda (lefty-tighty!), faixa vermelha proeminente no domo, válvula de alívio resettável',
      },
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Bem-vindo à nova era química, Juninho. A Emenda de Kigali e o AIM Act impuseram limite de GWP abaixo de **700**, aposentando o antigo **R-410A** (que tinha GWP de **2.088**).',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'A partir de janeiro de 2025, novos equipamentos devem utilizar refrigerantes com GWP abaixo de 700.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'O Legado de Referência: R-410A Mistura quase-azeotrópica (50% R-32 + 50% R-125) que dominou por duas décadas. GWP de 2.088 — grosseiramente incompatível com mandatos modernos.',
        },
      ],
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Os dois grandes titulares agora são classe **A2L** (levemente inflamáveis): o **R-32** puro (GWP **675**) e a mistura zeotrópica **R-454B** (GWP **466**).',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'GWP Direto 2.088 675 466',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Na hora de completar carga em campo: qual a diferença crítica de manuseio entre uma botija de R-32 e uma botija de R-454B?',
      opcoes: [
        {
          id: 'a',
          texto: 'Nenhuma, ambos são misturas e só podem entrar em fase vapor.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Errado! Se carregar R-454B em vapor, você destrói a mistura no cilindro e na máquina.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'O R-32 é substância pura (Glide 0K, aceita líquido ou vapor), mas o R-454B é mistura zeotrópica e exige carga SOMENTE em fase líquida.',
          ideal: true,
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Na mosca! O R-454B tem **68,9%** de R-32 e **31,1%** de R-1234yf. Se carregar em vapor, o R-32 escapa primeiro e fraciona a mistura para sempre!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Mistura de 68,9% R-32 + 31,1% R-1234yf (HFO ultra-baixo GWP):',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'O R-454B pode ser ventilado para a atmosfera sem recuperadora.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Jamais! A EPA Section 608 proíbe terminantemente ventilar fluidos A2L.',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Olha a vantagem do **R-32**: por ser componente único, tem Glide de **0K**, entrega **+10%** de capacidade e pede carga até **40%** menor que o R-410A, mas trabalha com descarga mais quente.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Capacidade de resfriamento +10% e eficiência +7% vs. R-410A Carga até 40% menor para mesma capacidade térmica Glide = 0K — fluido puro, ebulição/condensação a temperatura constante',
      },
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Já o **R-454B** entrega capacidade térmica de **~97%** do R-410A com descarga mais fresca, porém tem Glide de **1,0K a 1,3K** (**~2°F**). Por isso, carga nele é **100%** líquida!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Capacidade térmica ~97% do R-410A — queda praticamente imperceptível Temperaturas de descarga mais baixas que R-32 puro Glide = 1,0K a 1,3K (~2°F) — moléculas com pontos de ebulição diferentes',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Protocolo: Sempre inverter o cilindro R-454B ou utilizar tubo pescador (dip tube) para garantir remoção 100% líquida.',
        },
      ],
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E essa lata de óleo POE lacrada aí, Simon? Por que você trata ela como se fosse nitroglicerina?',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Porque o óleo **POE** absorve até **2.500 ppm** de água — cem vezes mais que o óleo mineral antigo (que saturava em **25** ppm)!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Alta polaridade = agressivamente higroscópico — absorve até 2.500 ppm de água (100× mais que óleos minerais).',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Óleo Mineral Naftênico/Parafínico Nenhum 25 CFC/HCFC legados',
        },
      ],
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Quando o POE bebe umidade, ocorre a **hidrólise**: Éster + Água vira **Ácido Carboxílico + Álcool**. O ácido destrói o verniz, fura a serpentina e faz *copper plating* nos mancais.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Quando POE absorve umidade, ocorre a reação de hidrólise — a reversão química do próprio processo de fabricação: Éster + Água ⇌ Ácido Carboxílico + Álcool',
      },
    },
    {
      id: 'fala-10',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Já o óleo **PVE** (usado em muitos VRFs e splits) absorve até **6.500 ppm**, mas tem ligação éter: risco zero de hidrólise ácida, embora a água ainda congele na EEV se não evacuar!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Absorve até 6.500 ppm (260× mineral), mas possui ligações éter em vez de éster — risco zero de hidrólise.',
      },
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e o “Bypass” no Sensor RDS',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Numa obra nova com fluido A2L, o Zé achou que o sensor de vazamento **RDS** na evaporadora era “frescura eletrônica” e puxou o plugue da placa.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Pela norma UL 60335-2-40, o RDS aciona mitigação entre **20-25%** do LFL em **30** segundos: corta o compressor, joga o blower no máximo, desliga resistências e abre os dampers.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'RDS monitora continuamente e aciona mitigação a 20-25% do LFL.',
          },
        },
        {
          quem: 'simon',
          texto: 'Resultado: assim que o Zé desconectou o sensor, a placa entrou em **lockout permanente**! Teve que voltar com o rabo entre as pernas e reconectar o sensor certificado.',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Se o sensor RDS falhar ou for desconectado, o sistema entra em lockout permanente até que um substituto certificado seja instalado.',
          },
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Puxar vácuo rápido demais em dia frio pode congelar as gotas de água dentro do tubo, dando leitura falsa de 500 mícrons por sublimação lenta.',
      verdade: true,
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Se a bomba puxa vácuo rápido demais (especialmente em clima frio), a evaporação rápida rouba calor latente das gotas de água restantes → congelamento instantâneo em cristais de gelo microscópicos dentro da tubulação. Gelo sublima muito lentamente → leitura falsa de 500µ',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Verdade! É a **Armadilha da Sublimação**. Para derreter esse gelo invisível, usamos a Tripla Evacuação quebrando o vácuo com nitrogênio seco (OFDN) a **3-5 PSIG**.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Quebrar vácuo c/ OFDN a 3-5 PSIG 5-10 min N₂ seco mistura com vapor d\'água residual; aquece gelo localizado',
          },
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Para trabalhar com R-32 e R-454B, qualquer bomba de vácuo antiga com motor de escovas e chave mecânica comum atende às normas A2L.',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          texto: 'Mito perigoso! Fluidos A2L exigem equipamento **spark-proof** (à prova de faísca), com motores DC brushless e chaves solid-state seladas.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Bombas de vácuo, máquinas de recuperação e detectores eletrônicos devem ser redesenhados com motores DC brushless (zero sparking), relés hermeticamente selados e chaves solid-state.',
          },
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Pelas regras atualizadas da EPA Section 608 para sistemas maiores, qual é o limite máximo de taxa de vazamento anual permitido para Conforto-Resfriamento (Comfort Cooling)?',
      opcoes: [
        {
          id: 'a',
          texto: 'Apenas 10% ao ano (reduzido do limite anterior de 15%).',
          correta: true,
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Conforto-Resfriamento (Comfort Cooling) 15% 10%',
          },
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Exato! O teto caiu de **15%** para **10%** em Conforto-Resfriamento (sendo **20%** em Comercial e **30%** em Processos Industriais IPR).',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'Limites de vazamento: IPR 30%, Comercial 20%, Conforto-Resfriamento apenas 10%',
                },
                {
                  campo: 'infobox_campo',
                  trecho: 'Conforto-Resfriamento (Comfort Cooling) 15% 10%',
                },
              ],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Até 30% ao ano para qualquer split ou chiller de escritório.',
          onte: {
            campo: 'conteudo_html',
            trecho: 'Limites de vazamento: IPR 30%, Comercial 20%, Conforto-Resfriamento apenas 10%',
          },
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Limites de vazamento: IPR 30%, Comercial 20%, Conforto-Resfriamento apenas 10%',
          },
          feedback: [
            {
              quem: 'simon',
              texto: 'O limite de **30%** é restrito a Processos Industriais (IPR); conforto caiu para **10%**!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Limites de vazamento: IPR 30%, Comercial 20%, Conforto-Resfriamento apenas 10%',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Calculadora Química — GWP Direto do R-454B vs. Limite 700',
      formula: 'GWP_R454B = 466 (< 700 mandato 2025)',
      enunciado: 'Pela tabela comparativa de refrigerantes da aula, o **R-410A** possui GWP de **2.088** e o **R-32** possui GWP de **675**. Qual é o valor exato de **GWP Direto** da mistura zeotrópica **R-454B**?',
      leituras: [
        { rotulo: 'GWP R-410A (Legado)', valor: '2.088' },
        { rotulo: 'GWP R-32 (Puro A2L)', valor: '675' },
        { rotulo: 'Composição R-454B', valor: '68,9% R-32 + 31,1% R-1234yf' },
      ],
      unidade: 'GWP',
      respostaCorreta: 466,
      tolerancia: 0,
      opcoesRapidas: [466, 675, 700, 2088],
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'GWP Direto 2.088 675 466',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Mistura de 68,9% R-32 + 31,1% R-1234yf (HFO ultra-baixo GWP): GWP 466 — redução de ~78% vs. R-410A',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Cravado! Com GWP **466**, o R-454B representa uma redução de **~78%** frente ao R-410A (**2.088**), ficando com folga abaixo do teto de **700**.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'A partir de janeiro de 2025, novos equipamentos devem utilizar refrigerantes com GWP abaixo de 700.',
            },
            {
              campo: 'conteudo_html',
              trecho: 'GWP 466 — redução de ~78% vs. R-410A',
            },
            {
              campo: 'tabelas_html',
              trecho: 'GWP Direto 2.088 675 466',
            },
          ],
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Olhe na tabela comparativa: R-410A é **2.088**, R-32 é **675** e o R-454B tem GWP de **466**.',
          fonte: [
            {
              campo: 'tabelas_html',
              trecho: 'Comparativo de Refrigerantes: R-410A vs. R-32 vs. R-454B',
            },
            {
              campo: 'tabelas_html',
              trecho: 'GWP Direto 2.088 675 466',
            },
          ],
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Bancada — Protocolo A2L e Óleo POE',
      enunciado: 'Observe o painel de protocolos modernos da Aula 01-03 e aponte qual procedimento está **100% correto** para trabalhar com R-454B e óleo POE:',
      imagem: '/images/academia/hvac-instalacao/modulo01/modulo01-03/Module01-03-Modern Refrigerant Handling Protocols-01.jpg',
      legendaImagem: 'Módulo 01-03 — Protocolos de Manuseio de Fluidos Modernos A2L',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Inverter o cilindro de R-454B (ou usar dip tube) para carga 100% líquida com adaptador de rosca esquerda e ferramentas brushless spark-proof.',
          correta: true,
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Protocolo: Sempre inverter o cilindro R-454B ou utilizar tubo pescador (dip tube) para garantir remoção 100% líquida.',
          },
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Padrão ouro! Carga **100%** líquida previne o fracionamento da mistura zeotrópica e o ferramental spark-proof garante segurança A2L.',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'Protocolo: Sempre inverter o cilindro R-454B ou utilizar tubo pescador (dip tube) para garantir remoção 100% líquida.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Deixar a lata de óleo POE aberta na bancada e carregar R-454B em fase vapor para ir mais rápido.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Crime duplo! O POE absorve até **2.500 ppm** de água do ar gerando ácido, e carregar R-454B em vapor destrói a proporção química da mistura.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Alta polaridade = agressivamente higroscópico — absorve até 2.500 ppm de água (100× mais que óleos minerais).',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'O Pacto Silencioso com a Química',
      falas: [
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Sabe o que mais me impressiona na química do circuito, Ju? Uma gota de umidade que entra no óleo POE hoje não faz barulho nenhum na partida.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Ela espera meses em silêncio para virar ácido carboxílico e roer o verniz do estator por dentro. Caprichar na desidratação hoje é fazer um pacto de lealdade com o futuro da obra.',
        },
      ],
      principio: 'A química não tem pressa nem aceita desculpas: proteja o óleo e o fluido hoje para o compressor sobreviver amanhã.',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte a tabela comparativa **R-410A vs. R-32 vs. R-454B** e as 6 fases da Tripla Evacuação na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Comparativo de Refrigerantes: R-410A vs. R-32 vs. R-454B',
      },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**R-32 vs. R-454B:** ambos são A2L (rosca esquerda e ferramentas *spark-proof*); R-32 é puro (GWP **675**), enquanto R-454B é zeotrópico (GWP **466**, carga **100%** líquida).',
        '**Inimigo nº 1 do POE:** absorve até **2.500 ppm** de umidade e sofre hidrólise formando ácido carboxílico e *copper plating*.',
        '**Segurança ativa RDS:** aciona mitigação entre **20-25%** do LFL; desconectar ou tentar bypass trava o sistema em *lockout* permanente.',
      ],
      proxima: 'Na Aula 01-04 vamos dominar segurança NFPA 70E, LOTO, a obsolescência do manifold analógico e o setup de alta condutância.',
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'GWP Direto 2.088 675 466',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Protocolo: Sempre inverter o cilindro R-454B ou utilizar tubo pescador (dip tube) para garantir remoção 100% líquida.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Alta polaridade = agressivamente higroscópico — absorve até 2.500 ppm de água (100× mais que óleos minerais).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'RDS monitora continuamente e aciona mitigação a 20-25% do LFL.',
        },
      ],
    },
  ],
};
