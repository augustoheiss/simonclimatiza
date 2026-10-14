// ═══════════════════════════════════════════════════════════════════════════
// CONVERSA — manutencao-hvac / m02-01
// O Método de Diagnóstico dos 5 Sentidos
// Cenário: Casa de Máquinas (inspeção multissensorial, APTA, árvores lógicas)
// ═══════════════════════════════════════════════════════════════════════════

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm02-01',
  versao: 1,
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  elenco: ['simon', 'juninho', 'bia', 'marta'],
  estimativaMin: 11,

  beats: [
    // ── 1. ABERTURA ─────────────────────────────────────────────────────────
    {
      id: 'abertura-1',
      tipo: 'cena',
      texto: 'Diante de um split comercial que parou de resfriar a sala de reuniões, Juninho já tira o manifold da maleta para rosquear na válvula de serviço.',
    },
    {
      id: 'abertura-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Alto lá, Juninho! Guarda esse manifold! O maior erro de campo é espetar manômetro na máquina antes de usar os 5 sentidos e olhar o fluxo de ar.',
    },
    {
      id: 'abertura-3',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'espantado',
      texto: 'Ué, Seu Simon, mas a tubulação está congelando! Não é falta de gás na certa?',
    },

    // ── 2. CONFLITO E APOSTA ────────────────────────────────────────────────
    {
      id: 'conflito-1',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'Olha a Tabela 2.1.1, Juninho: quando o filtro ou a serpentina estão entupidos, a pressão de sucção também cai e congela, mas o diferencial de temperatura do ar no evaporador fica muito alto, acima de **13°C**!',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Diferencial de temperatura do ar no evaporador muito alto (>13&deg;C); pressão de sucção baixa; serpentina congelando. Vazão de ar insuficiente.',
      },
    },
    {
      id: 'conflito-2',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'serio',
      texto: 'Se você não olha o filtro sujo e injeta mais refrigerante achando que é subcarga, você provoca retorno de líquido (liquid slugging) e destrói o compressor do cliente!',
    },
    {
      id: 'conflito-3',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'Exato! No protocolo Simon, primeiro vêm os 5 sentidos e depois a sequência APTA: Amperagem, Pressão, Temperatura e Fluxo de Ar.',
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Como diferenciar visualmente na serpentina evaporadora um problema de falta de fluxo de ar de uma subcarga de refrigerante?',
      opcoes: [
        {
          id: 'a',
          texto: 'Não há diferença visual; ambos congelam apenas a linha de descarga.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Pelo contrário! O padrão visual do gelo na evaporadora entrega a causa na hora.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Fluxo de ar obstruído gera congelamento uniforme na serpentina até a sucção; subcarga congela em faixas apenas nas primeiras curvas após a expansão.',
          ideal: true,
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Na mosca! Gelo em faixas logo na entrada é falta de fluido; bloco uniforme na serpentina toda é falta de ar!',
            },
          ],
        },
      ],
    },

    // ── 3. CAUSO ────────────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Martelamento de 80 dB e o Cheiro Ácido da Morte do Compressor',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num supermercado, um rapaz completou carga num sistema que só tinha filtro de retorno colapsado. Quando o gelo derreteu, o fluido líquido voltou direto pro cárter!',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'O compressor começou a dar pancadas metálicas violentas de até 80 dB (*liquid slugging*)! Como líquido é incompressível, o choque hidráulico quebrou bielas, pistões e placas de válvulas!',
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'E quando ocorre queima elétrica dos enrolamentos (*motor burnout*), sobe aquele cheiro ácido picante de HF e HCl. Se trocar o compressor sem limpeza química com solvente e filtro de sucção, o novo queima rápido!',
        },
      ],
    },

    // ── 4. INSIGHT ──────────────────────────────────────────────────────────
    {
      id: 'insight-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'pensativo',
      texto: 'Então ouvir batida metálica no compressor é sinal de desligar a chave imediatamente! E quando o contator no painel fica vibrando e chocalhando alto?',
    },
    {
      id: 'insight-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'O chocalho do contator (60/120 Hz) tem três causas clássicas: subtensão na bobina de controle (**24V** ou **220V**), sujeira nas faces do núcleo magnético ou espira de sombra quebrada!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Ele utiliza uma bobina de controle (geralmente 24V ou 220V) que, ao ser energizada, gera um fluxo magnético que fecha os contatos de potência contra a força de uma mola [42].',
      },
    },
    {
      id: 'insight-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'confiante',
      texto: 'Na Árvore Lógica Categoria A (Tabela 2.1.1): se o ΔT do ar for alto (>**13°C**), corrija o fluxo de ar; se o ΔT for baixo (<**8°C**) com vazão nominal, avance para a termodinâmica.',
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Diferencial de temperatura do ar no evaporador muito alto (>13&deg;C); pressão de sucção baixa; serpentina congelando. Vazão de ar insuficiente.',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Diferencial de temperatura do ar no evaporador muito baixo (<8&deg;C); vazão de ar nominal. Fluxo de ar adequado; desvio está no circuito termodinâmico.',
        },
      ],
    },
    {
      id: 'insight-4',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'confiante',
      texto: 'E na Árvore Lógica Categoria B (quando o compressor não liga): primeiro checamos se há tensão na entrada (**220V/380V**) e se a bobina recebe sinal (**24V** ou **220V**).',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Tensão presente na entrada da contatora (220V/380V); tensão na saída da contatora é zero. Bobina da contatora recebe 0V do controle. Falha no circuito de comando. O controle não envia sinal para fechamento do circuito de potência. Fusível de controle queimado, transformador de 24V danificado, sensor de dreno aberto por nível de água alto, ou termostato com defeito [46]. Tensão presente na entrada da contatora; bobina recebe tensão de sinal (24V ou 220V), mas a contatora não fecha (ou vibra violento).',
      },
    },
    {
      id: 'insight-5',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'Se a contatora recebe **0V** na bobina, não culpe o compressor! Olhe fusível de comando, transformador de **24V**, termostato ou boia de dreno aberta por nível de água alto.',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Bobina da contatora recebe 0V do controle. Falha no circuito de comando. O controle não envia sinal para fechamento do circuito de potência. Fusível de controle queimado, transformador de 24V danificado, sensor de dreno aberto por nível de água alto, ou termostato com defeito [46].',
      },
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Quando o compressor gira, mas a pressão de sucção fica alta, a pressão de descarga fica baixa e a amperagem fica muito baixa, o diagnóstico é falha mecânica interna do compressor.',
      verdade: true,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'aprovando',
          texto: 'Verdade! Na Tabela 2.1.1, se o motor gira com corrente muito baixa e não cria diferencial de pressão, as válvulas internas ou espirais scroll quebraram.',
        },
      ],
    },

    // ── 5. PRÁTICA ──────────────────────────────────────────────────────────
    {
      id: 'pratica-1',
      tipo: 'inspecao',
      titulo: 'Diagnóstico Sensorial e Árvores Lógicas em Campo',
      enunciado: 'Analise os quatro sintomas encontrados na vistoria da casa de máquinas e marque o ÚNICO diagnóstico tecnicamente correto segundo o protocolo Simon:',
      pontos: [
        {
          id: 'p1',
          rotulo: 'ΔT do ar no evaporador acima de 13°C com pressão de sucção baixa e serpentina congelando → Fluxo de ar insuficiente (filtros/ventilador/serpentina suja).',
          correta: true,
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Diferencial de temperatura do ar no evaporador muito alto (>13&deg;C); pressão de sucção baixa; serpentina congelando. Vazão de ar insuficiente.',
          },
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Exato! Pouco ar passando pela serpentina faz o ar que passa esfriar demais (ΔT > **13°C**), derrubando a sucção.',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'Diferencial de temperatura do ar no evaporador muito alto (>13&deg;C); pressão de sucção baixa; serpentina congelando. Vazão de ar insuficiente.',
              },
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Contator vibrando e chocalhando alto → Falta de gás refrigerante na linha de líquido.',
          correta: false,
          feedback: [
            {
              quem: 'marta',
              emocao: 'serio',
              texto: 'Nada a ver! Chocalho no contator (60/120 Hz) é subtensão na bobina, sujeira nas faces do núcleo magnético ou espira de sombra partida.',
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Ruído metálico violento de martelamento no compressor → Operação normal de alta eficiência.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Perigo! Martelamento metálico (até 80 dB) é retorno de líquido (*liquid slugging*); desenergize na hora!',
            },
          ],
        },
        {
          id: 'p4',
          rotulo: 'Odor ácido e picante no óleo do compressor queimado → Trocar apenas o compressor sem lavar a tubulação nem instalar filtro de sucção.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Errado! Odor ácido indica *burnout* com ácidos HF e HCl; sem limpeza química e filtro de sucção, o compressor novo queima rápido.',
            },
          ],
        },
      ],
    },

    // ── 6. TESTE ────────────────────────────────────────────────────────────
    {
      id: 'pergunta-1',
      tipo: 'quiz',
      enunciado: 'Na Tabela 2.1.1 (Categoria A: O sistema funciona, mas não resfria o suficiente), você mede vazão de ar nominal, ΔT do ar abaixo de 8°C, pressão de sucção baixa, superaquecimento alto e subresfriamento muito alto. Qual é o diagnóstico?',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Diferencial de temperatura do ar no evaporador muito baixo (<8&deg;C); vazão de ar nominal. Fluxo de ar adequado; desvio está no circuito termodinâmico.',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Restrição na linha de líquido (filtro secador entupido ou válvula de expansão travada fechada).',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Cravado! Com ΔT < **8°C** e vazão nominal, o problema é termodinâmico: subresfriamento muito alto com superaquecimento alto prova fluido retido no condensador por restrição.',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'Diferencial de temperatura do ar no evaporador muito baixo (<8&deg;C); vazão de ar nominal.',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Vazamento de refrigerante (perda de carga).',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'didatico',
              texto: 'No vazamento o superaquecimento também é alto, mas o subresfriamento fica baixo ou zero por falta de fluido no condensador.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Filtro de ar obstruído ou duto de retorno amassado.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Falta de ar gera ΔT do ar muito alto (acima de **13°C**), e aqui a vazão de ar está nominal com ΔT abaixo de **8°C**.',
              fonte: [
                {
                  campo: 'tabelas_html',
                  trecho: 'Diferencial de temperatura do ar no evaporador muito alto (>13&deg;C); pressão de sucção baixa; serpentina congelando.',
                },
                {
                  campo: 'tabelas_html',
                  trecho: 'Diferencial de temperatura do ar no evaporador muito baixo (<8&deg;C); vazão de ar nominal.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'pergunta-2',
      tipo: 'quiz',
      enunciado: 'Na Tabela 2.1.2 (Categoria B: O compressor não liga), há 220V/380V na entrada da contatora, mas a saída está em zero porque a bobina recebe 0V do controle. Onde está a falha?',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Tensão presente na entrada da contatora (220V/380V); tensão na saída da contatora é zero. Bobina da contatora recebe 0V do controle.',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'No circuito de comando: fusível de controle queimado, transformador de **24V** danificado, sensor de nível de dreno aberto ou termostato.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Perfeito! Se a bobina recebe **0V**, a contatora nunca vai atracar — tem um dispositivo de segurança ou comando aberto.',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'Tensão presente na entrada da contatora (220V/380V); tensão na saída da contatora é zero. Bobina da contatora recebe 0V do controle. Falha no circuito de comando. O controle não envia sinal para fechamento do circuito de potência. Fusível de controle queimado, transformador de 24V danificado, sensor de dreno aberto por nível de água alto, ou termostato com defeito [46].',
              },
            },
          ],
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Fusível de controle queimado, transformador de 24V danificado, sensor de dreno aberto por nível de água alto, ou termostato com defeito [46].',
          },
        },
        {
          id: 'b',
          texto: 'O compressor está com o rotor travado e consumindo corrente LRA.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'didatico',
              texto: 'Para o motor consumir LRA, a contatora precisa fechar e entregar tensão nos bornes do compressor.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'A espira de sombra do núcleo da contatora está quebrada.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'A espira de sombra quebrada faz a contatora vibrar violento quando a bobina recebe tensão (**24V** ou **220V**), mas aqui a bobina está com **0V**.',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'Bobina da contatora recebe 0V do controle. Falha no circuito de comando. O controle não envia sinal para fechamento do circuito de potência. Fusível de controle queimado, transformador de 24V danificado, sensor de dreno aberto por nível de água alto, ou termostato com defeito [46]. Tensão presente na entrada da contatora; bobina recebe tensão de sinal (24V ou 220V), mas a contatora não fecha (ou vibra violento).',
              },
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA ────────────────────────────────────────────────────────
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Olhos, Ouvidos e Fluxo de Ar Antes do Manifold',
      principio: 'Conectar manômetros sem antes inspecionar filtros, serpentina e amperagem é o caminho mais curto para diagnosticar errado e quebrar o compressor.',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'A máquina conversa com a gente pelo gelo nas curvas, pelo som da carcaça, pelo cheiro do óleo e pela temperatura dos tubos.',
        },
        {
          quem: 'bia',
          emocao: 'confiante',
          texto: 'E seguindo a sequência APTA (Amperagem, Pressão, Temperatura e Fluxo de Ar), nós isolamos a causa raiz em minutos.',
        },
        {
          quem: 'juninho',
          emocao: 'empolgado',
          texto: 'Prometo, Seu Simon: meu manifold só sai da bolsa depois que eu checar o filtro, o ventilador e o ΔT do ar!',
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte na aba **Tabelas & Parâmetros** as Tabelas 2.1.1 (Árvore Lógica Categoria A — Resfriamento Insuficiente) e 2.1.2 (Categoria B — Compressor Não Liga).',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Protocolo APTA:** inspecione fluxo de ar e sentidos primeiro, depois meça Amperagem, Pressão, Temperatura e Fluxo de Ar.',
        '**Fluxo vs. Termodinâmica:** ΔT do ar > **13°C** com gelo indica falta de ar; ΔT < **8°C** com vazão nominal leva ao diagnóstico de carga ou restrição.',
        '**Alertas vitais:** batida metálica no compressor = *liquid slugging* (desligar já!); cheiro ácido = *burnout*; bobina em **0V** = falha no comando de **24V**/**220V**.',
      ],
      proxima: 'Na aula m02-02 vamos dominar a Análise Avançada Pressão-Temperatura, o Diagrama P-H, o glide do R-454B e os 3 estudos de caso práticos!',
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Diferencial de temperatura do ar no evaporador muito alto (>13&deg;C); pressão de sucção baixa; serpentina congelando.',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Diferencial de temperatura do ar no evaporador muito baixo (<8&deg;C); vazão de ar nominal.',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Bobina da contatora recebe 0V do controle. Falha no circuito de comando. O controle não envia sinal para fechamento do circuito de potência. Fusível de controle queimado, transformador de 24V danificado, sensor de dreno aberto por nível de água alto, ou termostato com defeito [46]. Tensão presente na entrada da contatora; bobina recebe tensão de sinal (24V ou 220V), mas a contatora não fecha (ou vibra violento).',
        },
      ],
    },
  ],
};
