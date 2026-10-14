// src/data/conversas/tvr-pro-co-380v/05-01.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 05-01
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

const F_SENS = {
  campo: 'conteudo_html',
  trecho: 'Portas de Sensores (0-5V DC)',
};
const F_COMM = {
  campo: 'conteudo_html',
  trecho: 'Portas de Comunicação (2.5-2.7V DC)',
};
const F_CN70 = {
  campo: 'conteudo_html',
  trecho: 'CN70: Drive da EXVA — 0V ou 12V DC',
};
const F_CN41 = {
  campo: 'conteudo_html',
  trecho: 'CN41/CN43/CN46: Drive das válvulas solenoides (SV2, SV4, SV7) — 0V ou 220V AC',
};
const F_CN30 = {
  campo: 'conteudo_html',
  trecho: 'CN30: Entrada de alimentação principal — 220V AC ou 380V AC',
};
const F_N26 = {
  campo: 'conteudo_html',
  trecho: 'n26 — Backup run: Apenas dual compressor (18-30HP). Se 1 falhar, outro opera até 4 dias',
};
const F_N41 = {
  campo: 'conteudo_html',
  trecho: '7 níveis de limitação de capacidade: n41 (100%), n42 (90%), n43 (80%), n44 (70%), n45 (60%), n46 (50%), n47 (40%).',
};
const F_DSP1 = {
  campo: 'conteudo_html',
  trecho: 'DSP1=1: Unit capacity (0=8HP a C=30HP)',
};
const F_TAB_8_16 = {
  campo: 'tabelas_html',
  trecho: '8-16HP Main PCB + Filter + Terminals + 2× Inductor 1× Inverter + 1× Reactor + 1× Fan module',
};
const F_TAB_18_30 = {
  campo: 'tabelas_html',
  trecho: '18-30HP Main PCB + Filter + Terminals + 2× Inductor 2× Inverter + 2× Reactor + 2× Fan module',
};
const F_CAP_DC = {
  campo: 'infobox_campo',
  trecho: 'A tensão nos capacitores pode atingir 485-645V DC mesmo após desligar o disjuntor.',
};

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '05-01',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'bancada-oficina',
  duracaoMin: 12,
  beats: [
    // ── 1. CHEGADA ──────────────────────────────────────────────────────────
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Terça, 8h00. A tampa da caixa elétrica da condensadora está aberta na bancada, revelando a Main PCB no andar superior e os módulos de potência no andar inferior.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Mão no bolso antes de chegar perto da caixa elétrica, Ju! A tensão nos capacitores eletrolíticos pode atingir **485-645V** DC mesmo após desligar o disjuntor!',
      fonte: F_CAP_DC,
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'Repara na arquitetura de dois andares: na camada superior fica a Main PCB; na inferior ficam os módulos inverter, reatores e fan modules (1 conjunto em **8-16HP**, 2 conjuntos em **18-30HP**).',
      fonte: [F_TAB_8_16, F_TAB_18_30],
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'surpreso',
      texto: 'E na Main PCB tem conector pra todo lado (`CN30`, `CN41`, `CN70`) e quatro botões (`SW3`, `SW4`, `SW5`, `SW6`) do lado do display!',
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Sexta-feira, 17h, num hospital com uma condensadora de 30HP (dual compressor, 18-30HP). Um dos dois compressores trava. Qual função do menu da Main PCB salva o fim de semana do hospital?',
      fonte: [F_N26, F_DSP1],
      opcoes: [
        {
          id: 'a',
          texto: 'Ativar a função n26 (Backup run), exclusiva para unidades dual compressor (18-30HP), permitindo que o compressor bom opere por até 4 dias.',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Herói do plantão! A função `n26` (Backup run) em unidades de **18-30HP** isola o compressor avariado e mantém o outro operando por até 4 dias até a peça chegar!',
              fonte: F_N26,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Ligar o compressor travado direto na chave contatora sem passar pelo inverter.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Compressor inverter DC nunca pode ser ligado direto na rede! O recurso oficial de fábrica é o menu `n26` (até 4 dias em **18-30HP**).',
              fonte: F_N26,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Ativar a função n26 em uma condensadora de 8HP (single compressor).',
          reacao: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Se só tem 1 compressor (**8-16HP**), não tem quem faça backup! O `n26` é exclusivo para dual compressor (**18-30HP**).',
              fonte: [F_TAB_8_16, F_N26],
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
      texto: 'Vamos dominar as tensões das portas da Main PCB com o multímetro: as portas de sensores trabalham em **0-5V** DC, e as portas de comunicação RS-485 em **2.5-2.7V** DC.',
      fonte: [F_SENS, F_COMM],
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Nas saídas de acionamento: a `CN70` alimenta o motor de passo da `EXVA` com **0V** ou **12V** DC, enquanto `CN41`/`CN43`/`CN46` acionam as solenoides `SV2`, `SV4` e `SV7` com **0V** ou **220V** AC!',
      fonte: [F_CN70, F_CN41],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'neutro',
      texto: 'Já a `CN30` recebe a alimentação principal da placa (**220V** AC ou **380V** AC). Sabendo essas tensões, você testa se a placa mandou comando ou se a bobina queimou!',
      fonte: F_CN30,
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E aqueles códigos `n11` até `n47` que a gente navega nos botões `SW4` (Menu) e `SW5` (OK)?',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'O Grupo 1 é manutenção: `n11` (snow Proofing), `n12` (auto vacumm/evacuação com todas as válvulas abertas!), `n13` (refrigerant charging), `n14` (check/autoteste) e `n16` (pump down).',
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'E o Grupo 4 limita a potência máxima para gestão de demanda elétrica em 7 níveis: `n41` (**100%**), `n42` (**90%**), `n43` (**80%**), `n44` (**70%**), `n45` (**60%**), `n46` (**50%**) e `n47` (**40%**)!',
      fonte: F_N41,
    },
    {
      id: 'fala-9b',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'animado',
      texto: 'E o botão `SW3` (UP) / `SW6` (DOWN) no modo Spot Check mostra os parâmetros em tempo real nos displays `DSP1` e `DSP2`!',
    },
    {
      id: 'fala-9c',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Isso mesmo! São 37 parâmetros de consulta rápida, desde a capacidade configurada até temperaturas, abertura de EXVA, corrente e histórico de erros.',
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Vácuo sem n12 que Deixou Ar Preso Antes da EXVA',
      fonte: [F_CN70, F_DSP1],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num retrofit de uma condensadora de **30HP**, a equipe trocou um trecho de linha, engatou a bomba de vácuo com a máquina desligada e não ativou o menu `n12` (auto vacumm).',
          fonte: F_DSP1,
        },
        {
          quem: 'juninho',
          emocao: 'surpreso',
          texto: 'E as válvulas internas estavam fechadas bloqueando um trecho do circuito, Simon?',
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Exato! Sem o `n12`, a placa não mandou os **12V** DC na `CN70` nem abriu as solenoides em **220V** AC. Ficou umidade presa debaixo das válvulas fechadas!',
          fonte: [F_CN70, F_CN41],
        },
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Quando ativamos o `n12` pelo botão `SW4`/`SW5`, todas as EXVs e solenoides abriram e a bomba puxou o gás incondensável que estava escondido!',
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'As portas CN41, CN43 e CN46 acionam as válvulas solenoides SV2, SV4 e SV7 com tensão de 220V AC (quando ligadas), enquanto a porta CN70 aciona a EXVA com 12V DC.',
      verdade: true,
      fonte: [F_CN70, F_CN41],
      explicacao: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Verdade! Solenoides (`CN41`/`CN43`/`CN46`) operam em **0V** ou **220V** AC; já o motor de passo da `EXVA` (`CN70`) opera em **0V** ou **12V** DC.',
          fonte: [F_CN70, F_CN41],
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'A função n26 (Backup run) permite que um compressor avariado em uma unidade single de 8HP continue rodando por 30 dias sem parar.',
      verdade: false,
      fonte: [F_DSP1, F_N26],
      explicacao: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Mito! O `n26` funciona apenas em unidades dual compressor (**18-30HP**), não em **8HP**, e permite que o compressor saudável opere por até 4 dias.',
          fonte: [F_DSP1, F_N26],
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO + INTERAÇÃO ────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Um cliente precisa limitar o consumo elétrico da condensadora para exatamente 60% da capacidade máxima via menu da Main PCB. Qual código do Grupo 4 deve ser selecionado?',
      fonte: F_N41,
      opcoes: [
        {
          id: 'a',
          texto: 'Código n45 (60% de capacidade máxima).',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Exato! Pela tabela do Grupo 4: `n41` (**100%**), `n42` (**90%**), `n43` (**80%**), `n44` (**70%**), `n45` (**60%**), `n46` (**50%**) e `n47` (**40%**).',
              fonte: F_N41,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Código n41 (100% de capacidade máxima).',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: '`n41` libera **100%** da capacidade. Para **60%**, o código correto é `n45`.',
              fonte: F_N41,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Código n47 (40% de capacidade máxima).',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: '`n47` derruba para **40%**. Para **60%**, use o `n45`.',
              fonte: F_N41,
            },
          ],
        },
      ],
    },
    {
      id: 'insp-1',
      tipo: 'inspecao',
      titulo: 'Diagnóstico de Tensões nas Portas da Main PCB',
      enunciado: 'A válvula solenoide SV2 não abre mesmo quando a descarga sobe além do limite térmico. Qual medição na porta CN41/CN43/CN46 da Main PCB confirma que a placa ESTÁ enviando comando de abertura?',
      fonte: [F_CN41, F_CN70, F_SENS],
      pontos: [
        {
          id: 'p1',
          rotulo: 'Presença de 220V AC na porta CN41/CN43/CN46 correspondente (bobina da solenoide interrompida)',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Diagnóstico certeiro! Se a Main PCB entrega **220V** AC na porta e a solenoide não atraca, o defeito está no chicote ou na bobina da válvula.',
              fonte: F_CN41,
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Presença de 12V DC na porta CN70',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'neutro',
              texto: 'A `CN70` (**0V** ou **12V** DC) é o drive da válvula `EXVA`, não das solenoides.',
              fonte: F_CN70,
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Presença de 0-5V DC nas portas de sensores',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: '**0-5V** DC é a faixa dos sensores NTC/transdutores; as solenoides são acionadas em **220V** AC nas portas `CN41`/`CN43`/`CN46`.',
              fonte: [F_SENS, F_CN41],
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'Medir a Porta Antes de Condenar a Placa',
      principio: 'Princípio de Ofício: Placa eletrônica só se condena com o multímetro na porta e a tabela de tensões na mão.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Quando a lâmpada do balcão apaga, eu testo primeiro se queimou o bocal ou o interruptor antes de mandar quebrar o teto.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'E no VRF tem gente que condena uma Main PCB caríssima sem medir se saem os **220V** AC na `CN41` ou os **12V** DC na `CN70`, Dona Marta!',
          fonte: [F_CN41, F_CN70],
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer o mapa completo das portas CN, menus `n11`-`n47` e códigos do Spot Check (`DSP1`/`DSP2`)? Abra a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Tensões nas portas da Main PCB:** Sensores = **0-5V** DC; Comunicação = **2.5-2.7V** DC; `CN70` (`EXVA`) = **0V** ou **12V** DC; `CN41`/`CN43`/`CN46` (Solenoides) = **0V** ou **220V** AC.',
        '**Menus que salvam a obra:** `n12` (auto vacumm), `n16` (pump down), `n26` (backup run por até 4 dias em **18-30HP**) e `n41` (**100%**) a `n47` (**40%**).',
        '**Perigo letal:** os capacitores armazenam **485-645V** DC mesmo após desligar o disjuntor.',
      ],
      proxima: 'No Tópico 05-02 vamos descer para o andar inferior da caixa elétrica: Módulo Inverter do Compressor e Placa do Ventilador (Fan Module)!',
      fonte: [F_SENS, F_COMM, F_CN70, F_CN41, F_N26, F_N41, F_CAP_DC],
    },
  ],
};
