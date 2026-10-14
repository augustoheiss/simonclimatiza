// src/data/conversas/tvr-pro-co-380v/01-01.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 01-01
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '01-01',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Piloto G2',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 10,
  beats: [
    // ── 1. CHEGADA ──────────────────────────────────────────────────────────
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Quarta, 7h15. Café na bancada com a planta baixa de um prédio comercial aberta. Três condensadoras Trane TVR Pro CO 380V acabaram de chegar no pátio.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'projetada para operar com gás refrigerante R410A e alimentação elétrica 380V.',
      },
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, olha essa planta: tá cheio de sigla nas salas — `Q1`, `Q4`, `T1`, `FA` — e lá no topo pede um sistema de **90HP**! Como uma máquina chega nisso tudo?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'atingem até 90HP em configurações de três módulos combinados.',
      },
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Bem-vindo ao mundo VRF pesado, Ju. O TVR Pro CO roda com **R410A** em **380V**, e ninguém fabrica um trambolho único de **90HP** pra subir no guindaste.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O sistema TRANE TVR Pro CO Series é uma plataforma de climatização comercial VRF (Variable Refrigerant Flow) de alta capacidade, projetada para operar com gás refrigerante R410A e alimentação elétrica 380V. O manual de serviço abrange 12 modelos de unidades externas, com nomenclaturas que vão de 4TVY0077HE000AA (8HP) até 4TVY0290HE000AA (30HP) como módulos individuais, e atingem até 90HP em configurações de três módulos combinados.',
      },
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      texto: 'Os módulos individuais vão de **8HP** (`4TVY0077HE000AA`) até **30HP** (`4TVY0290HE000AA`). Pra bater **90HP**, a gente combina até três módulos!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'nomenclaturas que vão de 4TVY0077HE000AA (8HP) até 4TVY0290HE000AA (30HP) como módulos individuais, e atingem até 90HP em configurações de três módulos combinados.',
      },
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Você bate o olho numa condensadora TVR Pro CO no telhado e vê que o gabinete tem APENAS 1 ventilador no topo (single fan). Qual é a faixa de capacidade e a Classe desse chassi?',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Classe A 8, 10, 12, 14, 16 HP 1 ventilador (single fan) Gabinete compacto Classe B 18, 20, 22 HP 2 ventiladores (dual fans) Gabinete médio Classe C 24, 26, 28, 30 HP 2 ventiladores (dual fans) Gabinete grande',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'De 8 a 16HP (Classe A — gabinete compacto com 1 ventilador).',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Olho clínico! Contou 1 ventilador, é **Classe A** (**8 a 16HP**). Passou para **18 a 22HP** ou **24 a 30HP**, são sempre 2 ventiladores.',
              fonte: {
                campo: 'conteudo_html',
                trecho: '8 a 16HP: gabinete com ventilador único (single fan). 18 a 22HP: gabinete com ventiladores duplos (dual fans). 24 a 30HP: gabinete maior com ventiladores duplos (dual fans).',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'De 24 a 30HP (Classe C — alta potência).',
          reacao: [
            {
              quem: 'bia',
              texto: 'De **24 a 30HP** é Classe C, gabinete grande com 2 ventiladores (dual fans). Um ventilador só vai de **8 a 16HP**!',
              fonte: {
                campo: 'conteudo_html',
                trecho: '8 a 16HP: gabinete com ventilador único (single fan). 18 a 22HP: gabinete com ventiladores duplos (dual fans). 24 a 30HP: gabinete maior com ventiladores duplos (dual fans).',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Todas as unidades externas têm 1 ventilador só.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'ironico',
              texto: 'Só até **16HP**, Ju! De **18 a 22HP** pra cima o gabinete ganha dois ventiladores pra dar conta de rejeitar o calor.',
              fonte: {
                campo: 'conteudo_html',
                trecho: '8 a 16HP: gabinete com ventilador único (single fan). 18 a 22HP: gabinete com ventiladores duplos (dual fans).',
              },
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
      texto: 'Agora vamos decifrar a planta baixa: o sistema suporta **9 tipos de unidades internas padrão**, cada uma com seu código.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O sistema TVR Pro CO suporta 9 tipos de unidades internas padrão',
      },
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Na sala de reunião tá escrito `Q4`? É **Cassete de 4 vias**. No corredor estreito tá `Q1`? **Cassete de 1 via**, que vai de **1.8 kW a 7.1 kW**.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A unidade Q1 (Cassete 1 via) é a mais limitada, disponível apenas de 18 a 71 (1.8 kW a 7.1 kW).',
      },
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'bia',
      texto: 'E quando o projeto pede pancada de vazão num salão de convenções, entra a `T1` (**Duto de Alta Pressão**): vai de **7.1 kW a 56.0 kW / 20HP**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A unidade T1 (Duto de Alta Pressão) é a mais versátil em potência, cobrindo de 71 até 560 (7.1 kW a 56.0 kW / 20HP).',
      },
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E as siglas `G`, `DL`, `FA` e `HRV` que aparecem no memorial?',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      texto: '`G` é **Hi-Wall** (**2.2 kW a 9.0 kW**) e `DL` é **Piso-Teto** (**3.6 kW a 16.0 kW**). Já a `FA` é a unidade de **Ar Novo** (**12.5 kW** a **56 kW**).',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Unidades G (Hi-Wall) cobrem de 22 a 90 (2.2 kW a 9.0 kW), representando a faixa residencial e de pequenos escritórios. Unidades DL (Piso-Teto) vão de 36 a 160 (3.6 kW a 16.0 kW)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'As unidades FA operam de 12.5 kW (125) a 56 kW (560), com sete opções de capacidade.',
        },
      ],
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      texto: 'E o **HRV** é o ventilador recuperador de calor, de **200 m³/h até 2000 m³/h**, que troca calor entre o ar que sai e o ar novo que entra.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Os HRVs estão disponíveis em 8 opções de vazão, de 200 m³/h até 2000 m³/h.',
      },
    },
    {
      id: 'fala-10',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Agora atenção máxima no escalamento das condensadoras: de **8HP a 30HP** é módulo único. Passou disso, entra a combinação Mestre + Escravos!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Faixa 1 — Módulo Único (8HP a 30HP)',
      },
    },
    {
      id: 'fala-11',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'De **32HP a 60HP** (2 módulos) é obrigatório o kit **`TODK02UTHP`**. De **62HP a 90HP** (3 módulos), o kit obrigatório é o **`TODK03UTHP`**.',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Kit para 2 módulos TODK02UTHP Sistemas de 32HP a 60HP 2 Kit para 3 módulos TODK03UTHP Sistemas de 62HP a 90HP 3',
      },
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Zé Gambiarra e o VRF de 62HP “Sem Kit”',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Exemplo de Engenharia — Sistema de 62HP Combinação: 30HP + 16HP + 16HP (um módulo grande + dois módulos menores) Modelo do sistema: 4TVY0600HE000AA Capacidade total: 175.0 kW Kit de junção obrigatório: TODK03UTHP',
      },
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Numa obra de **62HP** (`30HP + 16HP + 16HP`), o comprador esqueceu de pedir o kit **`TODK03UTHP`** porque achou que já vinha dentro da caixa da condensadora.',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'E o manual avisa em vermelho: os kits `TODK02UTHP` e `TODK03UTHP` são vendidos separadamente e trazem os headers e conectores entre Mestre e Escravos!',
          fonte: {
            campo: 'infobox_campo',
            trecho: 'Todo sistema com 2 ou mais módulos de unidade externa OBRIGATORIAMENTE requer o kit de junção de derivação correspondente (TODK02UTHP ou TODK03UTHP). Esses kits são vendidos separadamente e não estão incluídos no fornecimento padrão da unidade externa.',
          },
        },
        {
          quem: 'simon',
          texto: 'O Zé tentou fazer um “T” de cobre no braço. Resultado: falha de comunicação entre módulos, desequilíbrio de óleo e obra parada até chegar o kit oficial.',
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Quando combinamos múltiplos módulos no TVR Pro CO (ex.: 62HP), todos os gabinetes precisam ter exatamente a mesma potência em HP.',
      verdade: false,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Exemplo de Engenharia — Sistema de 62HP Combinação: 30HP + 16HP + 16HP (um módulo grande + dois módulos menores) Modelo do sistema: 4TVY0600HE000AA Capacidade total: 175.0 kW',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Mito! O sistema de **62HP** (`4TVY0600HE000AA`, **175.0 kW**) combina **30HP + 16HP + 16HP**: um chassi grande de 2 ventiladores com dois chassis de 1 ventilador!',
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Um sistema de 32HP (combinação 16HP + 16HP, 90.0 kW) exige obrigatoriamente o kit de junção TODK02UTHP.',
      verdade: true,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Exemplo de Engenharia — Sistema de 32HP Combinação: 16HP + 16HP (dois módulos iguais) Modelo do sistema: 4TVY0310HE000AA Capacidade total: 90.0 kW Kit de junção obrigatório: TODK02UTHP',
      },
      explicacao: [
        {
          quem: 'simon',
          texto: 'Verdade absoluta! Juntou dois gabinetes (**32HP a 60HP**), tem que ter o **`TODK02UTHP`** unificando tubulação e comunicação Mestre/Escravo.',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Kit para 2 módulos TODK02UTHP Sistemas de 32HP a 60HP 2',
          },
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO ────────────────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'O projeto especifica o sistema topo de linha de 90HP (modelo 4TVY0870HE000AA, capacidade total de 255.0 kW). Qual é a combinação de módulos e o kit de junção obrigatório?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Exemplo de Engenharia — Sistema de 90HP Combinação: 30HP + 30HP + 30HP (três módulos iguais de capacidade máxima) Modelo do sistema: 4TVY0870HE000AA Capacidade total: 255.0 kW Kit de junção obrigatório: TODK03UTHP',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Dois módulos de 30HP com o kit TODK02UTHP.',
          feedback: [
            {
              quem: 'bia',
              texto: 'Dois módulos de **30HP** somam **60HP** (`30HP + 30HP`). Para chegar a **90HP** são necessários três módulos de **30HP**!',
              fonte: [
                {
                  campo: 'tabelas_html',
                  trecho: '60 4TVY0580HE000AA 30HP + 30HP',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Exemplo de Engenharia — Sistema de 90HP Combinação: 30HP + 30HP + 30HP',
                },
              ],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Três módulos de 30HP (30HP + 30HP + 30HP) + kit obrigatório TODK03UTHP.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Cravou! Três chassis Classe C de **30HP** (1 Mestre + 2 Escravos) interligados pelo kit **`TODK03UTHP`**, entregando **255.0 kW**.',
            },
          ],
        },
        {
          id: 'c',
          texto: 'Três módulos de 30HP sem kit, ligados direto na linha principal.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Sem o **`TODK03UTHP`** os módulos não equalizam nem se comunicam. Regra inegociável!',
            },
          ],
        },
      ],
    },
    {
      id: 'desafio-2',
      tipo: 'quiz',
      enunciado: 'Na planta de um centro de convenções há um salão que exige uma única unidade interna dutada de 20HP (56.0 kW, índice 560) para climatização interna. Qual código de evaporadora atende essa capacidade?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A unidade T1 (Duto de Alta Pressão) é a mais versátil em potência, cobrindo de 71 até 560 (7.1 kW a 56.0 kW / 20HP).',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Código T1 — Duto de Alta Pressão Estática (cobre de 7.1 kW a 56.0 kW / 20HP).',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Na mosca! A **T1** é a única unidade interna padrão que alcança capacidades industriais até **56.0 kW / 20HP**.',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Código Q4C — Cassete Compacto de 4 vias.',
          feedback: [
            {
              quem: 'bia',
              texto: 'O `Q4C` vai só de **2.2 kW a 4.5 kW**, feito para salas pequenas e médias.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'O Cassete Q4C (Compacto de 4 vias) opera na faixa de 22 a 45 (2.2 kW a 4.5 kW)',
              },
            },
          ],
        },
        {
          id: 'c',
          texto: 'Código G — Hi-Wall de parede.',
          feedback: [
            {
              quem: 'simon',
              texto: 'Hi-Wall (`G`) para no índice 90 (**2.2 kW a 9.0 kW**). Pra essa potência industrial tem que ser dutado `T1`!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Unidades G (Hi-Wall) cobrem de 22 a 90 (2.2 kW a 9.0 kW)',
              },
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'O Respeito à Matriz Antes da Promessa',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'No meu café, se eu misturo grãos de safras incompatíveis no mesmo moinho sem olhar a torra, estrago o lote inteiro. No telhado é igual: não se junta máquina no improviso.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Assino embaixo, Dona Marta. Engenharia de verdade começa na humildade de abrir a tabela de combinação do fabricante antes de prometer ampliação ao cliente.',
        },
      ],
      principio: 'Princípio de Ofício: Quem respeita a matriz de projeto nunca assina gambiarra no manifold.',
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Precisa conferir a tabela completa de combinações de **8HP** a **90HP** e a matriz de unidades internas? Abre a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
      fonte: {
        campo: 'conteudo_html',
        trecho: 'nomenclaturas que vão de 4TVY0077HE000AA (8HP) até 4TVY0290HE000AA (30HP) como módulos individuais, e atingem até 90HP em configurações de três módulos combinados.',
      },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Identificação visual no telhado:** 1 ventilador = **Classe A** (**8 a 16HP**); 2 ventiladores = **Classe B** (**18 a 22HP**) ou **Classe C** (**24 a 30HP**).',
        '**Kits de junção são obrigatórios:** 2 módulos (**32HP a 60HP**) exigem **`TODK02UTHP`**; 3 módulos (**62HP a 90HP**) exigem **`TODK03UTHP`** (1 Mestre + Escravos).',
        '**Leitura rápida de projeto:** de `Q1` (**1.8 kW a 7.1 kW**) até o gigante dutado `T1` (**7.1 kW a 56.0 kW / 20HP**), além de `FA` e `HRV` (**200 m³/h até 2000 m³/h**).',
      ],
      proxima: 'No Tópico 01-02 vamos decodificar dígito por dígito a nomenclatura de 15 caracteres das unidades TVR Pro CO.',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: '8 a 16HP: gabinete com ventilador único (single fan). 18 a 22HP: gabinete com ventiladores duplos (dual fans). 24 a 30HP: gabinete maior com ventiladores duplos (dual fans).',
        },
        {
          campo: 'tabelas_html',
          trecho: 'Kit para 2 módulos TODK02UTHP Sistemas de 32HP a 60HP 2 Kit para 3 módulos TODK03UTHP Sistemas de 62HP a 90HP 3',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A unidade Q1 (Cassete 1 via) é a mais limitada, disponível apenas de 18 a 71 (1.8 kW a 7.1 kW).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A unidade T1 (Duto de Alta Pressão) é a mais versátil em potência, cobrindo de 71 até 560 (7.1 kW a 56.0 kW / 20HP).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Os HRVs estão disponíveis em 8 opções de vazão, de 200 m³/h até 2000 m³/h.',
        },
      ],
    },
  ],
};
