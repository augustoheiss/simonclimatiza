// src/data/conversas/tvr-pro-co-380v/06-02.js
// Roteiro "Papo de Balcão" — Curso TVR Pro CO 380V · Tópico 06-02
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

const F_E5_TRIG = {
  campo: 'conteudo_html',
  trecho: 'Trigger: Tensão de fase 180V.',
};
const F_FASE = {
  campo: 'conteudo_html',
  trecho: 'Alimentação anormal ou fase faltando? (Medir A-N, B-N, C-N = 198-242V)',
};
const F_COMP_OHM = {
  campo: 'conteudo_html',
  trecho: 'Compressor (bobinas U-V, V-W, U-W): 0,7 — 1,5Ω',
};
const F_FAN_OHM = {
  campo: 'conteudo_html',
  trecho: 'Fan motor (bobina par a par):',
};
const F_H7 = {
  campo: 'conteudo_html',
  trecho: 'Trigger: Pressão descarga ≥ 3 MPa E temp. descarga',
};
const F_XF1 = {
  campo: 'tabelas_html',
  trecho: 'Tensão barramento DC Inverter module 350-700V xF1',
};
const F_EXV_OHM = {
  campo: 'conteudo_html',
  trecho: 'Bobina EXV com defeito? (Resistência entre fios = 40-50Ω) → Substituir',
};
const F_TAB_COMP = {
  campo: 'tabelas_html',
  trecho: 'Resistência bobinas compressor Compressor (U-V, V-W, U-W) 0,7-1,5Ω E5',
};
const F_TAB_DC = {
  campo: 'tabelas_html',
  trecho: 'Tensão barramento DC Inverter module 350-700V xF1',
};

export default {
  schema: 1,
  cursoId: 'tvr-pro-co-380v',
  aulaId: '06-02',
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
      texto: 'Sexta, 8h00. Na bancada da oficina, Simon e Bia preparam o multímetro para ensinar Juninho a testar bobinas de compressor, motor de ventilador e bobina da EXVA.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, o código `E7` monitora o sensor de topo do compressor solto ou dessincronizado. Como é que a placa descobre sozinha que o sensor escapou do poço térmico sem ter câmera lá dentro?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'Pergunta de ouro, Ju! A placa cruza dois sensores: se a pressão de descarga já bateu ≥ **3 MPa** e a temperatura de descarga continua marcando < 15 graus por 2 minutos, é impossível o compressor estar gelado!',
      fonte: F_H7,
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Ou o sensor `T7C1`/`T7C2` caiu do domo do compressor e está lendo o ar frio, ou os conectores dos sensores dos dois compressores foram trocados entre si!',
      fonte: F_H7,
    },

    // ── 2. APOSTA ───────────────────────────────────────────────────────────
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Você está investigando um erro E5 e decide medir a tensão fase-neutro (A-N, B-N, C-N) e a resistência ôhmica das bobinas do compressor (U-V, V-W, U-W). Quais são os valores de referência normais?',
      fonte: [F_E5_TRIG, F_FASE, F_COMP_OHM, F_TAB_COMP, F_EXV_OHM, F_FAN_OHM],
      opcoes: [
        {
          id: 'a',
          texto: 'Tensão fase-neutro A-N, B-N, C-N = 198-242V AC e resistência das bobinas do compressor U-V, V-W, U-W = 0,7-1,5Ω.',
          ideal: true,
          reacao: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Na mosca! O erro `E5` dispara se a fase cair abaixo de 165 volts (recupera > **180V**), a faixa saudável fase-neutro é **198-242V** e as bobinas do compressor medem **0,7-1,5Ω**!',
              fonte: [F_E5_TRIG, F_FASE, F_TAB_COMP],
            },
          ],
        },
        {
          id: 'b',
          texto: 'Tensão fase-neutro fora da faixa e resistência das bobinas de 40-50Ω.',
          reacao: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: '**40-50Ω** é a resistência da bobina da válvula de expansão `EXV`! No compressor (`U-V`, `V-W`, `U-W`), a resistência normal é de **0,7-1,5Ω**.',
              fonte: [F_EXV_OHM, F_TAB_COMP],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Tensão fase-neutro abaixo de 165 volts e resistência de 0 ohm.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Tensão abaixo de 165 volts é o gatilho do erro `E5`, e 0 ohm indica curto-circuito! A resistência saudável do compressor é **0,7-1,5Ω**.',
              fonte: [F_E5_TRIG, F_FAN_OHM, F_TAB_COMP],
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
      texto: 'Vamos passar a régua nos erros de sensores `E4` (`T3`/`T4`), `E6` (`T6A`/`T6B`) e `E7` (`T7C1`/`T7C2`): circuito aberto ou em curto nos NTCs trava o diagnóstico na hora.',
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'E atenção ao erro `xE9` (EEPROM mismatch): nunca desligue e religue o disjuntor rápido demais! Espere sempre o display apagar completamente antes de religar.',
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'alerta',
      texto: 'Já o `xH4` é o código guarda-chuva mais crítico: significa 3 proteções consecutivas do módulo inverter, exigindo abrir o histórico `n31` ou contar as piscadas do `LED1`!',
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E como a gente testa a bobina do motor do ventilador DC, a bobina da `EXVA` e o erro `xF1` do barramento DC?',
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'animado',
      texto: 'No motor do ventilador (par a par), a resistência deve ser < 10 ohms (sendo 0 ohm = curto). Já na bobina da `EXV`, a resistência entre qualquer par dos 5 fios deve bater **40-50Ω**!',
      fonte: [F_FAN_OHM, F_EXV_OHM],
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'neutro',
      texto: 'E o erro `xF1` monitora o barramento DC do módulo inverter: a faixa normal é **350-700V**; se cair abaixo de **350V** ou passar de **700V** por 10 segundos, ele desarma!',
      fonte: F_TAB_DC,
    },
    {
      id: 'fala-9b',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E quando a gente reconecta o plugue da `EXVA` na porta `CN70` depois de medir os **40-50Ω**, o que acontece no display?',
      fonte: F_EXV_OHM,
    },
    {
      id: 'fala-9c',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'O código `F6` pisca no display avisando que reconectou, mas exige reset manual desligando e religando a energia!',
    },

    // ── 4. CAUSO DE OBRA ────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Sensor T7C1 Pendurado no Ar Após a Lavagem Química',
      fonte: [F_H7, F_EXV_OHM],
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Depois de uma lavagem química pesada numa condensadora, a máquina começou a parar exatamente 2 minutos depois de o compressor ganhar pressão.',
          fonte: F_H7,
        },
        {
          quem: 'juninho',
          emocao: 'surpreso',
          texto: 'O jato de água arrancou o sensor do topo do compressor, Simon?',
        },
        {
          quem: 'simon',
          emocao: 'animado',
          texto: 'Na mosca! O grampo da mola escapou e o sensor de descarga ficou pendurado no vento marcando menos de 15 graus, enquanto a pressão de alta já passava de **3 MPa**!',
          fonte: F_H7,
        },
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Encaixamos o sensor de volta no poço com pasta térmica, conferimos a mola e ainda medimos a bobina da `EXV` (**40-50Ω**) na revisão. Problema resolvido em 5 minutos!',
          fonte: F_EXV_OHM,
        },
      ],
    },

    // ── 5. MITO OU VERDADE ──────────────────────────────────────────────────
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'O código de erro xF1 monitora o barramento DC do módulo inverter, cuja faixa normal de operação na tabela de referência é de 350-700V.',
      verdade: true,
      fonte: F_TAB_DC,
      explicacao: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Verdade! A janela operacional do DC bus monitorada pelo `xF1` é de **350-700V**; sair dessa faixa por 10s dispara o alarme.',
          fonte: F_TAB_DC,
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Ao medir as bobinas de um compressor inverter saudável (U-V, V-W, U-W), o multímetro deve indicar entre 40-50Ω.',
      verdade: false,
      fonte: [F_TAB_COMP, F_EXV_OHM],
      explicacao: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Mito! **40-50Ω** é a resistência da bobina da válvula de expansão `EXV`. As bobinas do compressor (`U-V`, `V-W`, `U-W`) medem entre **0,7-1,5Ω**!',
          fonte: [F_TAB_COMP, F_EXV_OHM],
        },
      ],
    },

    // ── 6. DESAFIO DO BALCÃO + INTERAÇÃO ────────────────────────────────────
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Qual condição combinada durante 2 minutos faz a placa principal disparar o alarme de sensor de descarga incoerente (E7)?',
      fonte: [F_H7, F_E5_TRIG, F_TAB_DC],
      opcoes: [
        {
          id: 'a',
          texto: 'Pressão de descarga ≥ 3 MPa E temperatura de descarga < 15 graus por 2 minutos.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Lógica pura! Pressão ≥ **3 MPa** com temperatura lida < 15 graus por 2 minutos prova que o sensor não está lendo o tubo de descarga real.',
              fonte: F_H7,
            },
          ],
        },
        {
          id: 'b',
          texto: 'Tensão de fase < 165 volts por 2 minutos.',
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: 'Tensão de fase < 165 volts (recuperando acima de **180V**) é o gatilho do erro `E5`!',
              fonte: F_E5_TRIG,
            },
          ],
        },
        {
          id: 'c',
          texto: 'Barramento DC fora da faixa de 350-700V por 10 segundos.',
          feedback: [
            {
              quem: 'simon',
              emocao: 'serio',
              texto: 'Barramento DC fora de **350-700V** por 10s é o gatilho do erro `xF1`!',
              fonte: F_TAB_DC,
            },
          ],
        },
      ],
    },
    {
      id: 'insp-1',
      tipo: 'inspecao',
      titulo: 'Bancada de Testes Ôhmicos (Compressor, Fan e EXV)',
      enunciado: 'Você mediu três componentes desligados com o ohmímetro. Qual conjunto de leituras confirma que os três componentes estão dentro da faixa normal do fabricante?',
      fonte: [F_TAB_COMP, F_FAN_OHM, F_EXV_OHM],
      pontos: [
        {
          id: 'p1',
          rotulo: 'Compressor (U-V/V-W/U-W) = 0,7-1,5Ω | Fan motor (par a par) < 10 ohms | Bobina EXV = 40-50Ω',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Trio de ouro memorizado! Compressor **0,7-1,5Ω**, Fan < 10 ohms (sem ser 0 ohm) e bobina da EXV **40-50Ω**.',
              fonte: [F_TAB_COMP, F_FAN_OHM, F_EXV_OHM],
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Fan motor medindo exatamente 0 ohm entre fases',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'No motor do ventilador, 0 ohm significa curto-circuito entre enrolamentos!',
              fonte: F_FAN_OHM,
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Bobina da EXV medindo 0,7-1,5Ω entre os fios',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: '**0,7-1,5Ω** é para o compressor; uma bobina de EXV saudável deve medir **40-50Ω**.',
              fonte: [F_TAB_COMP, F_EXV_OHM],
            },
          ],
        },
      ],
    },

    // ── 7. FILOSOFIA DE BALCÃO ──────────────────────────────────────────────
    {
      id: 'filo-1',
      tipo: 'filosofia',
      titulo: 'Não Resete um Lockout Sem Curar a Causa',
      principio: 'Princípio de Ofício: Resetar disjuntor em erro H5, H6 ou C7 sem investigar a falha é empurrar o compressor para o abismo.',
      falas: [
        {
          quem: 'marta',
          emocao: 'filosofico',
          texto: 'Se a massa azedou três vezes seguidas, não adianta jogar mais açúcar por cima; tem que limpar a masseira e descobrir o que contaminou.',
        },
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'É a regra do lockout em `H5`, `H6`, `H9` e `C7`, Dona Marta. Se a máquina travou depois de 3 reincidências, ela exige diagnóstico real, não dedo nervoso no disjuntor.',
        },
      ],
    },

    // ── 8. SAIDEIRA ─────────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Quer a tabela completa de medições ôhmicas e de tensão para os códigos E4 a C7? Veja a aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Tensão e DC Bus:** `E5` atua com fase < 165 volts (recupera > **180V**, normal A-N/B-N/C-N = **198-242V**); `xF1` atua com DC bus < **350V** ou > **700V** por 10s.',
        '**Resistências ôhmicas de bolso:** Compressor (`U-V`, `V-W`, `U-W`) = **0,7-1,5Ω**; Fan motor = < 10 ohms (0 ohm = curto); Bobina da `EXV` = **40-50Ω**.',
        '**Lógica cruzada e Lockout:** `E7` dispara se descarga ≥ **3 MPa** com temperatura < 15 graus por 2 min; `H5`, `H6`, `H9` e `C7` travam o sistema após reincidência.',
      ],
      proxima: 'No Tópico 06-03 vamos mergulhar nos códigos de proteção P1 a PP, falhas de inversor xL0 a xL5, carga de óleo FV50S e tabelas NTC!',
      fonte: [F_E5_TRIG, F_FASE, F_XF1, F_TAB_COMP, F_FAN_OHM, F_EXV_OHM, F_H7],
    },
  ],
};
