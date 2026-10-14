// src/data/conversas/tvr-pro-co-380v/02-01.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 02-01
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

const F_COMP = {
  campo: 'conteudo_html',
  trecho: '1 — Compressor: Componente motor do ciclo frigorígeno. Comprime o gás refrigerante R-410A de baixa pressão para alta pressão. No chassi 8-16HP, há 1 compressor; nos chassi 18-22HP e 24-30HP, há 2 compressores.',
};
const F_CLASSE_A = {
  campo: 'conteudo_html',
  trecho: 'Chassi Classe A — Unidades de 8 a 16HP',
};
const F_CLASSE_B = {
  campo: 'conteudo_html',
  trecho: 'Chassi Classe B — Unidades de 18 a 22HP',
};
const F_CLASSE_C = {
  campo: 'conteudo_html',
  trecho: 'Chassi Classe C — Unidades de 24 a 30HP',
};
const F_MULTI = {
  campo: 'conteudo_html',
  trecho: 'Os sistemas multi-módulo (32-90HP) utilizam réplicas desses mesmos chassi interligados.',
};
const F_PERIGO = {
  campo: 'infobox_campo',
  trecho: 'Os compressores (item 1) operam com tensão de alimentação de 380V e as tubulações de descarga podem atingir temperaturas superiores a 100°C.',
};
const F_SENS_DESC = {
  campo: 'infobox_campo',
  trecho: 'Nas unidades de 18 a 30HP, existem 2 sensores de temperatura de descarga (item 2), um para cada compressor.',
};

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '02-01',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 11,
  beats: [
    // ── 1. CHEGADA ──────────────────────────────────────────────────────────
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Sexta, 8h00. No pátio de treinamento, Simon e Bia removeram os painéis frontais de três condensadoras das Classes A, B e C.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'Rapaz, com a tampa aberta dá pra ver a diferença! Na primeira só tem um compressor, e nas outras duas tem dois compressores lado a lado!',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Primeira regra antes de pôr a mão, Ju: os compressores (item 1) rodam em **380V** e os tubos de descarga passam fácil de **100°C**!',
      fonte: F_PERIGO,
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Toda a família de módulos individuais (8 a **30HP**) e até os multi-módulos (**32-90HP**) se resumem a apenas 3 classes de chassi: Classe A, Classe B e Classe C.',
      fonte: [F_CLASSE_C, F_MULTI],
    },
    {
      id: 'fala-3b',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Então se eu decorar o layout interno dessas 3 classes de chassi, eu conheço todas as condensadoras da linha?',
    },
    {
      id: 'fala-3c',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Exatamente! Do menor módulo individual até o maior conjunto triplo no telhado, tudo é construído sobre esses mesmos 3 gabinetes.',
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Você abre uma condensadora de 22HP (Chassi Classe B, 18-22HP) para checar os sensores de temperatura de descarga (item 2). Quantos compressores e quantos sensores de descarga você deve encontrar?',
      fonte: [F_COMP, F_SENS_DESC, F_CLASSE_B],
      opcoes: [
        {
          id: 'a',
          texto: '2 compressores e 2 sensores de temperatura de descarga (um para cada compressor).',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Perfeito! Nos chassis **18-22HP** e **24-30HP**, há 2 compressores e 2 sensores de descarga (item 2), um dedicado a cada compressor.',
              fonte: [F_COMP, F_SENS_DESC],
            },
          ],
        },
        {
          id: 'b',
          texto: '1 compressor e 1 sensor de descarga compartilhado.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: '1 compressor é só no chassi **8-16HP** (Classe A)! Nas unidades de 18 a **30HP**, são sempre 2 compressores e 2 sensores de descarga.',
              fonte: [F_COMP, F_SENS_DESC],
            },
          ],
        },
        {
          id: 'c',
          texto: '2 compressores, mas apenas 1 sensor na linha comum.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Se tivesse 1 sensor só, a placa não saberia qual dos dois compressores passou de **100°C**! Por isso há 2 sensores de descarga (item 2) nas unidades de 18 a **30HP**.',
              fonte: [F_PERIGO, F_SENS_DESC],
            },
          ],
        },
      ],
    },

    // ── 3. PAPO RETO ────────────────────────────────────────────────────────
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'neutro',
      texto: 'Vamos mapear os 10 componentes internos: o item 1 é o compressor de R-410A (1 no chassi **8-16HP**; 2 nos chassis **18-22HP** e **24-30HP**).',
      fonte: F_COMP,
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'O item 2 é o sensor de temperatura de descarga no topo do compressor. O item 3 é o sensor de alta pressão e o item 4 é o pressostato de alta pressão.',
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Por que tem tanto um sensor de alta pressão (item 3) quanto um pressostato de alta pressão (item 4)? Não fazem a mesma coisa?',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Redundância de segurança! O sensor (item 3) manda leitura contínua pra placa modular ventilador e compressor. O pressostato (item 4) é a chave física de corte de emergência.',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Seguindo o circuito: item 5 é o separador de óleo, item 6 é o trocador de calor, item 7 é a válvula de expansão eletrônica EXVA e item 8 são as válvulas de serviço.',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'neutro',
      texto: 'Fechando os 10 itens: o item 9 é o acumulador de sucção (protege contra golpe de líquido) e o item 10 é a solenoide de retorno de óleo!',
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Conector Trocado dos Dois Sensores de Descarga',
      fonte: F_SENS_DESC,
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Numa máquina de **30HP**, um técnico trocou os dois sensores de descarga (item 2), mas inverteu os conectores na placa entre o compressor A e o compressor B.',
          fonte: F_SENS_DESC,
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Nossa! Quando o compressor A esquentava acima de **100°C**, a placa achava que era o compressor B!',
          fonte: F_PERIGO,
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Exatamente. A placa reduzia a frequência do compressor errado enquanto o outro fervia até desarmar por proteção. Em chassi dual (18 a **30HP**), cada sensor tem dono!',
          fonte: F_SENS_DESC,
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Nos sistemas multi-módulo de 32-90HP existem chassis especiais gigantes com 3 ou 4 compressores dentro do mesmo gabinete.',
      verdade: false,
      fonte: [F_COMP, F_MULTI],
      explicacao: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Mito! Os sistemas multi-módulo (**32-90HP**) utilizam réplicas dos mesmos 3 chassis interligados: **8-16HP** (1 compressor) ou **18-22HP** / **24-30HP** (2 compressores).',
          fonte: [F_COMP, F_MULTI],
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Nas unidades de 18 a 30HP, existem 2 sensores de temperatura de descarga (item 2), um dedicado a cada compressor.',
      verdade: true,
      fonte: F_SENS_DESC,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Verdade! Como os chassis de 18 a **30HP** possuem 2 compressores independentes, cada um exige seu próprio sensor de temperatura de descarga (item 2).',
          fonte: F_SENS_DESC,
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO + INTERAÇÃO ────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Qual é a diferença estrutural de compressores entre o Chassi Classe A (8-16HP) e os Chassis Classe B (18-22HP) e Classe C (24-30HP)?',
      fonte: F_COMP,
      opcoes: [
        {
          id: 'a',
          texto: 'No chassi 8-16HP há 1 compressor; nos chassis 18-22HP e 24-30HP há 2 compressores.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Certíssimo! Chassi **8-16HP** é single compressor (1 compressor); chassis **18-22HP** e **24-30HP** são dual compressor (2 compressores).',
              fonte: F_COMP,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Todos os chassis possuem 2 compressores, mudando apenas o tamanho do gabinete.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Errado! No chassi **8-16HP** (Classe A) há apenas 1 compressor.',
              fonte: F_COMP,
            },
          ],
        },
        {
          id: 'c',
          texto: 'O chassi 24-30HP possui 3 compressores internos.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Nenhum gabinete individual tem 3 compressores: nos chassis **18-22HP** e **24-30HP** há 2 compressores.',
              fonte: F_COMP,
            },
          ],
        },
      ],
    },
    {
      id: 'insp-1',
      tipo: 'inspecao',
      titulo: 'Inspeção Visual com Gabinete Aberto',
      enunciado: 'Antes de tocar na tubulação interna após desligar uma condensadora TVR Pro CO de 380V, qual ponto exige cuidado imediato contra queimadura grave?',
      fonte: F_PERIGO,
      pontos: [
        {
          id: 'p1',
          rotulo: 'Tubulação de descarga do compressor (item 1) — pode superar 100°C',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Isso mesmo! Os compressores operam em **380V** e as tubulações de descarga podem atingir temperaturas superiores a **100°C**.',
              fonte: F_PERIGO,
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Acumulador de sucção (item 9) — lado de baixa pressão',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'neutro',
              texto: 'O acumulador de sucção trabalha frio; quem passa de **100°C** é a tubulação de descarga na saída do compressor.',
              fonte: F_PERIGO,
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Painel externo pintado do gabinete',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'neutro',
              texto: 'O risco térmico real de passar de **100°C** está nos tubos de descarga dos compressores (item 1).',
              fonte: F_PERIGO,
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'Conhecer a Anatomia Antes do Bisturi',
      principio: 'Princípio de Ofício: Quem sabe o nome e a função de cada peça enxerga o defeito antes de ligar o multímetro.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Quando o técnico da minha fornalha chega perguntando onde fica o termostato do forno, eu já sei que veio aprender na minha máquina.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'E o cliente percebe na hora, Dona Marta. Abrir o painel e reconhecer de cara os 10 componentes nos 3 chassis é o que separa o especialista do curioso.',
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer ver a tabela comparativa dos 10 componentes nas Classes A, B e C? Acesse a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**3 Classes de Chassi:** Classe A (**8-16HP**, 1 compressor), Classe B (**18-22HP**, 2 compressores) e Classe C (**24-30HP**, 2 compressores).',
        '**Sensores dedicados:** nas unidades de 18 a **30HP**, há 2 sensores de temperatura de descarga (item 2), um por compressor.',
        '**Segurança em campo:** alimentação de **380V** e tubulação de descarga podendo superar **100°C** exigem bloqueio elétrico e espera de resfriamento.',
      ],
      proxima: 'No Tópico 02-02 vamos seguir o diagrama de tubulação refrigerante: T3, T4, T6A, T6B, SV2, SV4, SV7 e o subcooler!',
      fonte: [F_COMP, F_SENS_DESC, F_PERIGO],
    },
  ],
};
