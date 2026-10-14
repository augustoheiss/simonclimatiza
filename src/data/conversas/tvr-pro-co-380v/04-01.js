// src/data/conversas/tvr-pro-co-380v/04-01.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 04-01
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

const F_ENC2 = {
  campo: 'conteudo_html',
  trecho: 'Posições de 0 (8HP) a B (30HP). O ENC2 é configurado em fábrica e NÃO deve ser alterado em campo.',
};
const F_ENC5_8 = {
  campo: 'conteudo_html',
  trecho: 'ENC5=8: Super silent 1 — capacidade máxima 80%',
};
const F_ENC5_9 = {
  campo: 'conteudo_html',
  trecho: 'ENC5=9: Super silent 2 — capacidade máxima 70%',
};
const F_ENC5_A = {
  campo: 'conteudo_html',
  trecho: 'ENC5=A: Super silent 3 — capacidade máxima 60%',
};
const F_ENC5_B = {
  campo: 'conteudo_html',
  trecho: 'ENC5=B: Super silent 4 — capacidade máxima 50%',
};
const F_PC_35 = {
  campo: 'conteudo_html',
  trecho: 'Nota de segurança: Se a pressão de descarga (Pc) ultrapassar 3.5 MPa, o sistema sai automaticamente do modo silencioso para proteger o compressor.',
};
const F_TAB_ENC2 = {
  campo: 'tabelas_html',
  trecho: 'Posição 0 1 2 3 4 5 6 7 8 9 A B HP 8 10 12 14 16 18 20 22 24 26 28 30',
};

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '04-01',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'bancada-oficina',
  duracaoMin: 11,
  beats: [
    // ── 1. CHEGADA ──────────────────────────────────────────────────────────
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Segunda, 8h00. Na bancada da oficina, Simon aponta com uma chave de precisão para as chaves rotativas ENC1, ENC2, ENC5 e os DIP switches S4 da placa principal.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, o síndico do prédio vizinho ao nosso cliente reclamou do barulho da condensadora à noite. Dá pra amansar o ruído direto nessas chavinhas da placa?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Dá sim, Ju! Mas antes de encostar a chave na placa, grava a regra de ouro: no `ENC2` (capacidade de **8HP** na posição 0 até **30HP** na posição B) ninguém mexe em campo!',
      fonte: F_ENC2,
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Já o `ENC1` define o endereço da condensadora (0 para Master, 1 e 2 para Slaves), e para silenciar a máquina nós usamos o `S4` e o seletor rotativo `ENC5`!',
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Um hospital pediu redução máxima de ruído usando o Modo Super Silencioso Nível 4 (`ENC5=B`), mas o engenheiro clínico perguntou: "E o que perdemos na capacidade máxima com ENC5=B?"',
      fonte: [F_ENC5_8, F_ENC5_9, F_ENC5_A, F_ENC5_B],
      opcoes: [
        {
          id: 'a',
          texto: 'No nível Super silent 4 (ENC5=B), a capacidade máxima fica limitada a 50% da nominal.',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Transparência técnica nota dez! `ENC5=8` limita a **80%**, `ENC5=9` a **70%**, `ENC5=A` a **60%** e `ENC5=B` (Super silent 4) corta a capacidade máxima para **50%**!',
              fonte: [F_ENC5_8, F_ENC5_9, F_ENC5_A, F_ENC5_B],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Não perde nada de capacidade; apenas desliga os LEDs da placa.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Não existe mágica acústica sem limitar rotação! Em `ENC5=B`, a capacidade máxima cai para **50%**.',
              fonte: F_ENC5_B,
            },
          ],
        },
        {
          id: 'c',
          texto: 'A capacidade máxima sobe para 80% durante a madrugada.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: '**80%** é no nível mais leve (`ENC5=8`, Super silent 1). No nível 4 (`ENC5=B`), o teto cai para **50%**.',
              fonte: [F_ENC5_8, F_ENC5_B],
            },
          ],
        },
      ],
    },

    // ── 3. PAPO RETO ────────────────────────────────────────────────────────
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'Se o cliente só precisa de silêncio à noite e quer potência total de dia, usamos o Modo Silencioso Noturno Automático nos DIP switches `S4-1` e `S4-2`!',
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'neutro',
      texto: 'A placa mede a evolução da temperatura ambiente externa (`T4`) pra descobrir sozinha o pico de calor da tarde! Depois ela espera X horas após o pico e entra em modo noturno por Y horas.',
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'São 4 combinações de `S4-1`/`S4-2`: 6h após o pico por 10h de silêncio (`00`), 6h/12h (`01`), 8h/8h (`10`) ou 8h/10h (`11`).',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E se a gente ativar o Modo Super Silencioso no `ENC5` (`8`, `9`, `A` ou `B`) num dia muito abafado e a pressão de alta subir demais?',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Aí entra a proteção inteligente: se a pressão de descarga (`Pc`) ultrapassar **3.5 MPa**, o sistema sai automaticamente do modo silencioso e acelera o ventilador para salvar o compressor!',
      fonte: F_PC_35,
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'serio',
      texto: 'E lembre-se da tabela do `ENC2`: vai da posição 0 (**8HP**) até a posição B (**30HP**), gravada em fábrica. Girar o `ENC2` em campo bagunça toda a curva do inverter!',
      fonte: [F_ENC2, F_TAB_ENC2],
    },
    {
      id: 'fala-9b',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E se a gente substituir uma placa Main PCB queimada por uma placa nova de reposição vinda da caixa?',
    },
    {
      id: 'fala-9c',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Aí sim é a única situação em que você copia exatamente a posição do `ENC2` da placa antiga (conferindo na plaqueta do chassi) antes de energizar!',
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Curioso que Girou o ENC2 Achando que Era o Modo Silencioso',
      fonte: [F_ENC2, F_ENC5_B],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num hotel boutique, o técnico foi colocar a condensadora de **30HP** em modo silencioso, mas em vez de girar o `ENC5`, girou o `ENC2` da posição B (**30HP**) para a posição 0 (**8HP**)!',
          fonte: F_ENC2,
        },
        {
          quem: 'juninho',
          emocao: 'surpreso',
          texto: 'A máquina de **30HP** passou a achar que tinha apenas **8HP**?!',
          fonte: F_ENC2,
        },
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Virou um caos! O prédio inteiro reclamando de calor e erro de capacidade. Outro colega ainda tinha deixado outra máquina travada em `ENC5=B` (**50%** de capacidade máxima) ao meio-dia!',
          fonte: F_ENC5_B,
        },
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Devolvemos o `ENC2` para B (**30HP**), tiramos o `ENC5` do bloqueio fixo e ativamos o modo noturno automático no `S4`. Silêncio à noite e potência total de dia!',
          fonte: F_ENC2,
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Se a pressão de descarga (Pc) ultrapassar 3.5 MPa durante o modo silencioso, o sistema sai automaticamente do modo silencioso para proteger o compressor.',
      verdade: true,
      fonte: F_PC_35,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Verdade! Segurança vem antes do silêncio: passou de `Pc` > **3.5 MPa**, a placa cancela a limitação do ventilador para baixar a pressão.',
          fonte: F_PC_35,
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Para aumentar a potência de uma condensadora de 8HP em campo, basta girar a chave ENC2 da posição 0 para a posição B (30HP).',
      verdade: false,
      fonte: F_ENC2,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Mito perigoso! O `ENC2` (0 = **8HP** a B = **30HP**) é configurado em fábrica conforme o hardware real do chassi e NÃO deve ser alterado em campo.',
          fonte: F_ENC2,
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO + INTERAÇÃO ────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Quais são os limites máximos de capacidade do sistema nos 4 níveis de Modo Super Silencioso configurados na chave ENC5 (posições 8, 9, A e B)?',
      fonte: [F_ENC5_8, F_ENC5_9, F_ENC5_A, F_ENC5_B],
      opcoes: [
        {
          id: 'a',
          texto: 'ENC5=8: 80% | ENC5=9: 70% | ENC5=A: 60% | ENC5=B: 50%.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Escadinha perfeita de 10 em 10: `8` = **80%**, `9` = **70%**, `A` = **60%** e `B` = **50%**!',
              fonte: [F_ENC5_8, F_ENC5_9, F_ENC5_A, F_ENC5_B],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Todos os níveis mantêm 80% da capacidade máxima.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: '**80%** é apenas em `ENC5=8` (Super silent 1). Nos níveis `9`, `A` e `B` cai para **70%**, **60%** e **50%**.',
              fonte: [F_ENC5_8, F_ENC5_9, F_ENC5_A, F_ENC5_B],
            },
          ],
        },
        {
          id: 'c',
          texto: 'ENC5=8: 50% e ENC5=B: 80%.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Está invertido: quanto mais alto o nível de silêncio (`8` → `B`), menor o teto de capacidade (**80%** → **50%**).',
              fonte: [F_ENC5_8, F_ENC5_B],
            },
          ],
        },
      ],
    },
    {
      id: 'insp-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Chaves Rotativas na Placa Principal',
      enunciado: 'Uma condensadora de 30HP está entregando apenas metade da capacidade térmica ao meio-dia sem apresentar código de erro. Qual configuração no painel explica essa limitação?',
      fonte: [F_ENC2, F_ENC5_B, F_PC_35],
      pontos: [
        {
          id: 'p1',
          rotulo: 'Chave ENC5 posicionada em "B" (Super silent 4 — capacidade máxima 50%)',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Matou! Com `ENC5=B`, a máquina fica permanentemente limitada a **50%** da capacidade máxima.',
              fonte: F_ENC5_B,
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Chave ENC2 posicionada em "B" (configuração de fábrica para 30HP)',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'neutro',
              texto: 'Na unidade de **30HP**, a posição B no `ENC2` é a posição correta de fábrica!',
              fonte: F_ENC2,
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Pressão de descarga Pc acima de 3.5 MPa cancelando o modo silencioso',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Quando `Pc` passa de **3.5 MPa**, o sistema sai do modo silencioso para proteger o compressor, não para limitar a **50%**.',
              fonte: [F_PC_35, F_ENC5_B],
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'Explicar o Trade-off Antes de Virar a Chave',
      principio: 'Princípio de Ofício: Toda configuração especial tem um preço físico; o bom técnico explica a conta antes de girar o seletor.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Se o freguês pede pra eu baixar o fogo do forno pra não esquentar a loja, eu aviso na hora: o pão vai demorar o dobro pra assar.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Idêntico no VRF, Dona Marta. Quer Super Silencioso 4 (`ENC5=B`)? Vai ter silêncio, mas a máquina fica limitada a **50%**. Alinhar isso por escrito evita dor de cabeça.',
          fonte: F_ENC5_B,
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer ver a tabela completa de posições de `ENC1`, `ENC2`, `ENC5` e `S4`? Confira a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**ENC2 intocável em campo:** posições de 0 (**8HP**) a B (**30HP**) vêm gravadas de fábrica conforme o chassi.',
        '**4 Níveis de Super Silencioso (`ENC5`):** `ENC5=8` (**80%**), `ENC5=9` (**70%**), `ENC5=A` (**60%**) e `ENC5=B` (**50%** de capacidade máxima).',
        '**Saída de segurança:** se a pressão de descarga `Pc` ultrapassar **3.5 MPa**, a placa sai automaticamente do modo silencioso.',
      ],
      proxima: 'Na Parte 5 (Tópico 05-01) vamos abrir a caixa de controle elétrico e dominar a Placa Principal (Main PCB), portas CN, botões SW e menus n11 a n47!',
      fonte: [F_ENC2, F_ENC5_8, F_ENC5_9, F_ENC5_A, F_ENC5_B, F_PC_35],
    },
  ],
};
