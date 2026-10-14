// src/data/conversas/instalacao-hvac/07-02.js
// Roteiro "Papo de Balcão" — Curso de Instalação HVAC · Aula 07-02
// Todos os dados numéricos possuem âncora literal verificada por `npm run validar:conversas`.

export default {
  schema: 1,
  cursoId: 'instalacao-hvac',
  aulaId: '07-02',
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'casa-de-maquinas',
  duracaoMin: 10,
  beats: [
    {
      id: 'cena-1',
      tipo: 'cena',
      texto: 'Sexta, 16h00. Sala de controle da cobertura. Simon e Bia conectam o notebook ao barramento digital da central VRF para exportar a gravação da baseline e fechar o Handover Digital.',
    },
    {
      id: 'fala-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Simon, por que nas centrais VRF modernas você proíbe espetar o manifold analógico de latão nas válvulas de serviço para fazer diagnóstico de rotina?',
    },
    {
      id: 'fala-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Porque toda mangueira analógica rouba fluido refrigerante ao conectar e desconectar, Ju! Em VRF, perder algumas onças já bagunça a equalização dinâmica das EEVs.',
    },
    {
      id: 'fala-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'animado',
      texto: 'Centrais VRF são computadores industriais! Conectando o **Daikin D-Checker** ou o **Mitsubishi Maintenance Tool 2** direto no barramento de dados, lemos tudo sem abrir o circuito hermético!',
    },
    {
      id: 'fala-4',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Veja o poder do **D-Checker** no ciclo de retorno de óleo (*Oil Return*) de um VRV-III: a EEV principal (**EVH**) abre exatamente em **600 pulses**, a **EVL** em **760 pulses**, **EVHS/EVLS** em **480 pulses** e a **EVSC** fecha em **0 pulses**!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'As EEVs das evaporadoras acopladas a caixas Branch Provider (BP) operam tipicamente na faixa de 0 a 2000 pulses (mapeadas localmente em escalas de 0 a 480 pulses). Durante o ciclo automático de retorno de óleo (Oil Return Operation) em uma unidade VRV-III, por exemplo, a EEV principal (EVH) deve abrir-se exatamente em 600 pulses, a EEV de desvio líquido (EVL) a 760 pulses, as linhas de controle de subresfriamento (EVHS/EVLS) a 480 pulses, e a válvula de desvio de gás quente (EVSC) deve ser vedada a 0 pulses.',
      },
    },
    {
      id: 'fala-5',
      tipo: 'fala',
      quem: 'bia',
      texto: 'E no **Maintenance Tool 2** da Mitsubishi, o *Pre-error Data Monitoring* grava a caixa-preta em intervalos de **1 minuto** antes do **Código de Erro 1500**, mostrando se foi sensor avariado ou EEV travada!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'O destaque é a função Pre-error Data Monitoring, que funciona como uma caixa-preta de aviação gravando os dados operacionais em intervalos de 1 minuto. Em falhas intermitentes como o Código de Erro 1500',
      },
    },
    {
      id: 'aposta-1',
      tipo: 'escolha',
      pergunta: 'Para emitir a Certidão de Nascimento Digital (Birth Certificate) no Handover da obra e homologar a garantia dos compressores VRF junto ao fabricante, o que é obrigatório entregar?',
      opcoes: [
        {
          id: 'a',
          texto: 'Apenas o termo de entrega assinado pelo síndico e a nota fiscal dos equipamentos.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Sem os gráficos digitais de pressão, vácuo, balanço de massa e telemetria OEM, nenhum fabricante homologa a garantia estendida dos compressores VRF!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Dossiê digital com ensaio a 600 PSIG por 24 horas, vácuo < 500 mícrons, memória de carga, 12 horas de pré-aquecimento de cárter e gravação de 2 horas de telemetria OEM enviado em 21 a 90 dias.',
          ideal: true,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Registros de Ensaio com Nitrogênio Seco: Gráficos obtidos via manômetros digitais registrando a pressurização contínua a 600 PSIG (41,3 bar) durante 24 horas',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Screenshots Qualificados do Teste de Vácuo (Decay Test): Capturas de tela dos aplicativos de medição contendo o timestamp (data/hora), comprovando vácuo final abaixo de 500 mícrons',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Gravação da Baseline de Operação OEM: Gravação contínua de no mínimo 2 horas extraída do software do fabricante (D-Checker, Maintenance Tool ou Tracer), exibindo a assinatura operacional inicial das evaporadoras e condensadoras trabalhando sob carga total nominal (EEVs, Hz de compressores, correntes elétricas e pressões de trabalho estáveis). Os fabricantes de VRF exigem o envio desses dados de comissionamento em janelas de 21 a 90 dias para homologação e ativação dos contratos de garantia de compressores. Também deve constar a verificação de pré-aquecimento do cárter por 12 horas antes da partida.',
            },
          ],
          reacao: [
            {
              quem: 'bia',
              emocao: 'animado',
              texto: 'Padrão ouro! Com **600 PSIG por 24 horas**, **< 500 mícrons**, **12 horas** de cárter aquecido e **2 horas** de telemetria enviada em **21 a 90 dias**, a obra fica blindada!',
              fonte: [
                {
                  campo: 'conteudo_html',
                  trecho: 'Registros de Ensaio com Nitrogênio Seco: Gráficos obtidos via manômetros digitais registrando a pressurização contínua a 600 PSIG (41,3 bar) durante 24 horas',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Screenshots Qualificados do Teste de Vácuo (Decay Test): Capturas de tela dos aplicativos de medição contendo o timestamp (data/hora), comprovando vácuo final abaixo de 500 mícrons',
                },
                {
                  campo: 'conteudo_html',
                  trecho: 'Gravação da Baseline de Operação OEM: Gravação contínua de no mínimo 2 horas extraída do software do fabricante (D-Checker, Maintenance Tool ou Tracer), exibindo a assinatura operacional inicial das evaporadoras e condensadoras trabalhando sob carga total nominal (EEVs, Hz de compressores, correntes elétricas e pressões de trabalho estáveis). Os fabricantes de VRF exigem o envio desses dados de comissionamento em janelas de 21 a 90 dias para homologação e ativação dos contratos de garantia de compressores. Também deve constar a verificação de pré-aquecimento do cárter por 12 horas antes da partida.',
                },
              ],
            },
          ],
        },
        {
          id: 'c',
          texto: 'Deixar para coletar a telemetria somente quando o sistema apresentar defeito.',
          reacao: [
            {
              quem: 'simon',
              texto: 'Sem a *baseline* do primeiro dia, você nunca terá a referência original para provar que a instalação nasceu perfeita!',
            },
          ],
        },
      ],
    },
    {
      id: 'fala-6',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E na foto do cabeamento de comunicação M-NET ou P1/P2 para o Handover Digital, Simon, qual é o detalhe do cabo **16 AWG** que todo auditor confere?',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Utilize estritamente cabo blindado de par trançado classe 16 AWG e certifique-se de que a blindagem (shield) do cabo seja aterrada em um único ponto, conforme especificado nos manuais de comissionamento.',
      },
    },
    {
      id: 'fala-7',
      tipo: 'fala',
      quem: 'simon',
      texto: 'Cabo de par trançado blindado bitola **16 AWG** com a malha de blindagem (*shield*) aterrada em **um único ponto**! Aterrar a malha nas duas pontas cria *ground loops* que derrubam a comunicação.',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Utilize estritamente cabo blindado de par trançado classe 16 AWG e certifique-se de que a blindagem (shield) do cabo seja aterrada em um único ponto, conforme especificado nos manuais de comissionamento.',
      },
    },
    {
      id: 'fala-8',
      tipo: 'fala',
      quem: 'bia',
      texto: 'E no fechamento comercial, usamos o Handover Digital para assinar o contrato **PMOC**! Pela **Lei Federal nº 13.589/2018** e **Portaria nº 3.523/GM**, o PMOC é obrigatório a partir de **60.000 BTU/h (5 TR)** somados.',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Lei Federal nº 13.589/2018 e Portaria nº 3.523/GM do Ministério da Saúde: Obrigatório para edifícios públicos ou coletivos cuja soma das capacidades de refrigeração instaladas atinja ou ultrapasse o limite de 60.000 BTU/h (5 TR).',
      },
    },
    {
      id: 'fala-9',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Além disso, pela **ANVISA RE 09/2003**, a análise microbiológica semestral do ar deve ser feita por laboratório independente, sem vínculo societário com a empresa que faz a manutenção mecânica!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Qualidade do Ar ANVISA RE 09/2003: Exige vistorias técnicas periódicas semestrais que incluem a amostragem física de fungos, bactérias, partículas de poeira e taxas de CO₂ em circulação.',
      },
    },
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'O Erro 1500 que Quase Fez o Técnico Recolher Gás à Toa',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Num prédio corporativo, um VRF deu **Código de Erro 1500**. Olhando uma tabelinha resumida de bolso, o técnico achou que era “excesso de carga” e já ia recolher refrigerante!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O destaque é a função Pre-error Data Monitoring, que funciona como uma caixa-preta de aviação gravando os dados operacionais em intervalos de 1 minuto. Em falhas intermitentes como o Código de Erro 1500',
          },
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'Plugar o **Maintenance Tool 2** salvou o dia: puxamos o *Pre-error Data* gravado de **1 em 1 minuto** e vimos que a carga estava perfeita; era apenas um termistor descalibrado acusando baixo superaquecimento!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'O destaque é a função Pre-error Data Monitoring, que funciona como uma caixa-preta de aviação gravando os dados operacionais em intervalos de 1 minuto. Em falhas intermitentes como o Código de Erro 1500',
          },
        },
        {
          quem: 'simon',
          texto: 'Trocamos o sensor em vinte minutos sem tocar em uma grama de fluido refrigerante. Quem tem telemetria não chuta diagnóstico!',
        },
      ],
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Pela Lei Federal nº 13.589/2018 e Portaria nº 3.523/GM, o PMOC só se torna obrigatório quando um único equipamento individual possui mais de 60.000 BTU/h (5 TR).',
      verdade: false,
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Lei Federal nº 13.589/2018 e Portaria nº 3.523/GM do Ministério da Saúde: Obrigatório para edifícios públicos ou coletivos cuja soma das capacidades de refrigeração instaladas atinja ou ultrapasse o limite de 60.000 BTU/h (5 TR).',
      },
      explicacao: [
        {
          quem: 'bia',
          texto: 'Mito! A lei considera a **soma** das capacidades instaladas no edifício: se a soma atingir ou passar de **60.000 BTU/h (5 TR)**, o PMOC com TRT/ART é obrigatório!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Lei Federal nº 13.589/2018 e Portaria nº 3.523/GM do Ministério da Saúde: Obrigatório para edifícios públicos ou coletivos cuja soma das capacidades de refrigeração instaladas atinja ou ultrapasse o limite de 60.000 BTU/h (5 TR).',
          },
        },
      ],
    },
    {
      id: 'mito-2',
      tipo: 'mitoVerdade',
      afirmacao: 'Durante a operação automática de retorno de óleo (Oil Return Operation) em uma unidade Daikin VRV-III, a válvula de expansão principal (EVH) deve abrir em 600 pulsos e a EVSC permanecer em 0 pulsos.',
      verdade: true,
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'EVH 600 Pulsos Linha de expansão principal externa',
        },
        {
          campo: 'tabelas_html',
          trecho: 'EVSC 0 Pulsos (Fechada) Desvio de gás quente bypass',
        },
      ],
      explicacao: [
        {
          quem: 'simon',
          texto: 'Verdade! No *Oil Return* do VRV-III, **EVH = 600 Pulsos**, **EVL = 760 Pulsos**, **EVHS/EVLS = 480 Pulsos** e **EVSC = 0 Pulsos**.',
          fonte: [
            {
              campo: 'tabelas_html',
              trecho: 'EVH 600 Pulsos Linha de expansão principal externa',
            },
            {
              campo: 'tabelas_html',
              trecho: 'EVL 760 Pulsos Linha de desvio de líquido de retorno',
            },
            {
              campo: 'tabelas_html',
              trecho: 'EVHS / EVLS 480 Pulsos Subresfriador do permutador térmico',
            },
            {
              campo: 'tabelas_html',
              trecho: 'EVSC 0 Pulsos (Fechada) Desvio de gás quente bypass',
            },
          ],
        },
      ],
    },
    {
      id: 'desafio-1',
      tipo: 'quiz',
      enunciado: 'Ao finalizar a entrega técnica digital (Handover) de uma instalação comercial que soma mais de 60.000 BTU/h (5 TR), como converter a entrega em contrato recorrente de alto valor?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Lei Federal nº 13.589/2018 e Portaria nº 3.523/GM do Ministério da Saúde: Obrigatório para edifícios públicos ou coletivos cuja soma das capacidades de refrigeração instaladas atinja ou ultrapasse o limite de 60.000 BTU/h (5 TR).',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Apresentar o Birth Certificate Digital e propor um Contrato PMOC Habilitado por Telemetria, comparando mensalmente os dados do D-Checker/Maintenance Tool contra a baseline original.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Jogada de mestre! Você garante a conformidade com a **Lei 13.589/2018** (**60.000 BTU/h / 5 TR**) e fideliza o cliente pela telemetria proprietária.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Lei Federal nº 13.589/2018 e Portaria nº 3.523/GM do Ministério da Saúde: Obrigatório para edifícios públicos ou coletivos cuja soma das capacidades de refrigeração instaladas atinja ou ultrapasse o limite de 60.000 BTU/h (5 TR).',
              },
            },
          ],
        },
        {
          id: 'b',
          texto: 'Entregar apenas a chave da casa de máquinas e esperar o cliente ligar quando quebrar.',
          feedback: [
            {
              quem: 'bia',
              texto: 'Sem PMOC o cliente fica exposto a multas da Vigilância Sanitária e sua empresa perde a receita recorrente mensal!',
            },
          ],
        },
      ],
    },
    {
      id: 'calc-1',
      tipo: 'calculadora',
      titulo: 'Gatilho Legal do PMOC — Lei Federal 13.589/2018 (TR)',
      formula: 'Limite Mínimo Somado PMOC = 60.000 BTU/h = 5 TR',
      enunciado: 'Pela **Lei Federal nº 13.589/2018** e **Portaria nº 3.523/GM**, edifícios cuja soma das capacidades atinja **60.000 BTU/h** exigem PMOC. A quantas **TR** equivalem **60.000 BTU/h**?',
      leituras: [
        { rotulo: 'Capacidade Térmica Limite', valor: '60.000 BTU/h' },
        { rotulo: 'Gravação Baseline OEM', valor: '2 horas (12h cárter)' },
        { rotulo: 'Abertura EVH Oil Return', valor: '600 Pulsos' },
      ],
      unidade: 'TR',
      respostaCorreta: 5,
      tolerancia: 0,
      opcoesRapidas: [2, 5, 12, 24],
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'Gravação da Baseline de Operação OEM: Gravação contínua de no mínimo 2 horas extraída do software do fabricante (D-Checker, Maintenance Tool ou Tracer)',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Também deve constar a verificação de pré-aquecimento do cárter por 12 horas antes da partida.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Registros de Ensaio com Nitrogênio Seco: Gráficos obtidos via manômetros digitais registrando a pressurização contínua a 600 PSIG (41,3 bar) durante 24 horas',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Lei Federal nº 13.589/2018 e Portaria nº 3.523/GM do Ministério da Saúde: Obrigatório para edifícios públicos ou coletivos cuja soma das capacidades de refrigeração instaladas atinja ou ultrapasse o limite de 60.000 BTU/h (5 TR).',
        },
        {
          campo: 'tabelas_html',
          trecho: 'EVH 600 Pulsos Linha de expansão principal externa',
        },
      ],
      explicacaoSucesso: [
        {
          quem: 'bia',
          emocao: 'animado',
          texto: 'Cravado! **60.000 BTU/h** equivalem a **5 TR**, o gatilho oficial da **Lei Federal nº 13.589/2018** para o PMOC obrigatório.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Lei Federal nº 13.589/2018 e Portaria nº 3.523/GM do Ministério da Saúde: Obrigatório para edifícios públicos ou coletivos cuja soma das capacidades de refrigeração instaladas atinja ou ultrapasse o limite de 60.000 BTU/h (5 TR).',
          },
        },
      ],
      explicacaoErro: [
        {
          quem: 'simon',
          emocao: 'alerta',
          texto: 'Lembre-se da conversão legal na Portaria 3.523/GM e Lei 13.589/2018: **60.000 BTU/h** equivalem a **5 TR**.',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Lei Federal nº 13.589/2018 e Portaria nº 3.523/GM do Ministério da Saúde: Obrigatório para edifícios públicos ou coletivos cuja soma das capacidades de refrigeração instaladas atinja ou ultrapasse o limite de 60.000 BTU/h (5 TR).',
          },
        },
      ],
    },
    {
      id: 'inspecao-1',
      tipo: 'inspecao',
      titulo: 'Inspeção de Handover Digital — Telemetria OEM e PMOC',
      enunciado: 'Observe o slide de Entrega Técnica Digital da Aula 07-02 e selecione o protocolo completo de fechamento de obra:',
      imagem: '/images/academia/hvac-instalacao/modulo07/modulo07-02/Modulo-07-02-Elite HVAC Digital Handover Masterclass-01.jpg',
      legendaImagem: 'Módulo 07-02 — Telemetria D-Checker / Maintenance Tool, Birth Certificate e PMOC',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Birth Certificate com logs de 600 PSIG (24 horas), < 500 mícrons, 2 horas de telemetria OEM, cabo 16 AWG aterrado em ponto único e contrato PMOC (5 TR).',
          correta: true,
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Registros de Ensaio com Nitrogênio Seco: Gráficos obtidos via manômetros digitais registrando a pressurização contínua a 600 PSIG (41,3 bar) durante 24 horas',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Screenshots Qualificados do Teste de Vácuo (Decay Test): Capturas de tela dos aplicativos de medição contendo o timestamp (data/hora), comprovando vácuo final abaixo de 500 mícrons',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Gravação da Baseline de Operação OEM: Gravação contínua de no mínimo 2 horas extraída do software do fabricante',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Lei Federal nº 13.589/2018 e Portaria nº 3.523/GM do Ministério da Saúde: Obrigatório para edifícios públicos ou coletivos cuja soma das capacidades de refrigeração instaladas atinja ou ultrapasse o limite de 60.000 BTU/h (5 TR).',
            },
            {
              campo: 'infobox_campo',
              trecho: 'Utilize estritamente cabo blindado de par trançado classe 16 AWG e certifique-se de que a blindagem (shield) do cabo seja aterrada em um único ponto',
            },
          ],
          feedback: [
            {
              quem: 'simon',
              emocao: 'animado',
              texto: 'Entrega 100% Digital! Garantia homologada, blindagem jurídica total e contrato PMOC recorrente assinado.',
            },
          ],
        },
        {
          id: 'p2',
          rotulo: 'Diagnóstico invasivo com manômetro analógico, blindagem aterrada nas duas pontas e entrega sem registro de baseline.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              texto: 'Purga fluido da rede, cria *ground loop* no barramento de dados e deixa a instaladora sem prova técnica de partida!',
            },
          ],
        },
      ],
    },
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Se Você Não Pode Provar com Dados Digitais, Não Aconteceu',
      falas: [
        {
          quem: 'simon',
          emocao: 'filosofico',
          texto: 'Durante sete módulos vimos que a engenharia de climatização de elite não aceita improviso: da broca diamantada na viga ao pulso eletrônico da EEV no **D-Checker**.',
        },
        {
          quem: 'bia',
          emocao: 'filosofico',
          texto: 'Emitir a **Certidão de Nascimento Digital** (**600 PSIG**, **< 500 mícrons**, **2 horas** de telemetria) e assinar o **PMOC** (**60.000 BTU/h / 5 TR**) é coroar o trabalho técnico com respeito e valor.',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'Registros de Ensaio com Nitrogênio Seco: Gráficos obtidos via manômetros digitais registrando a pressurização contínua a 600 PSIG (41,3 bar) durante 24 horas',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Screenshots Qualificados do Teste de Vácuo (Decay Test): Capturas de tela dos aplicativos de medição contendo o timestamp (data/hora), comprovando vácuo final abaixo de 500 mícrons',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Gravação da Baseline de Operação OEM: Gravação contínua de no mínimo 2 horas extraída do software do fabricante',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Lei Federal nº 13.589/2018 e Portaria nº 3.523/GM do Ministério da Saúde: Obrigatório para edifícios públicos ou coletivos cuja soma das capacidades de refrigeração instaladas atinja ou ultrapasse o limite de 60.000 BTU/h (5 TR).',
            },
          ],
        },
      ],
      principio: 'Se não está provado em dados digitais, não aconteceu: documente a Certidão de Nascimento e lidere pelo PMOC.',
    },
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte os protocolos **OEM** (**D-Checker** e **Maintenance Tool 2**) e os pulsos do **Oil Return** (**EVH = 600 Pulsos**) na aba **Tabelas & Parâmetros**.',
      alvo: { aba: 'tabelas' },
      fonte: {
        campo: 'tabelas_html',
        trecho: 'EVH 600 Pulsos Linha de expansão principal externa',
      },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        '**Telemetria Não-Invasiva:** use **D-Checker** (**EVH = 600 Pulsos** no *Oil Return*) e **Maintenance Tool 2** (*Pre-error Data* de **1 minuto**) + Smart Probes.',
        '**Birth Certificate Digital:** gráficos de **600 PSIG (24 horas)**, vácuo **< 500 mícrons**, **12 horas** de cárter e **2 horas** de baseline OEM enviados em **21 a 90 dias**.',
        '**PMOC por Telemetria:** obrigatório a partir de **60.000 BTU/h (5 TR)** somados (**Lei 13.589/2018**), com análise de ar isenta (**ANVISA RE 09/2003**) e cabo **16 AWG** aterrado em ponto único.',
      ],
      proxima: 'Parabéns! Você concluiu todas as 20 aulas técnicas do Curso de Instalação e Manutenção de Climatização no Papo de Balcão!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'O destaque é a função Pre-error Data Monitoring, que funciona como uma caixa-preta de aviação gravando os dados operacionais em intervalos de 1 minuto.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Registros de Ensaio com Nitrogênio Seco: Gráficos obtidos via manômetros digitais registrando a pressurização contínua a 600 PSIG (41,3 bar) durante 24 horas',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Screenshots Qualificados do Teste de Vácuo (Decay Test): Capturas de tela dos aplicativos de medição contendo o timestamp (data/hora), comprovando vácuo final abaixo de 500 mícrons',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Gravação da Baseline de Operação OEM: Gravação contínua de no mínimo 2 horas extraída do software do fabricante (D-Checker, Maintenance Tool ou Tracer), exibindo a assinatura operacional inicial das evaporadoras e condensadoras trabalhando sob carga total nominal (EEVs, Hz de compressores, correntes elétricas e pressões de trabalho estáveis). Os fabricantes de VRF exigem o envio desses dados de comissionamento em janelas de 21 a 90 dias para homologação e ativação dos contratos de garantia de compressores. Também deve constar a verificação de pré-aquecimento do cárter por 12 horas antes da partida.',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Lei Federal nº 13.589/2018 e Portaria nº 3.523/GM do Ministério da Saúde: Obrigatório para edifícios públicos ou coletivos cuja soma das capacidades de refrigeração instaladas atinja ou ultrapasse o limite de 60.000 BTU/h (5 TR).',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Qualidade do Ar ANVISA RE 09/2003: Exige vistorias técnicas periódicas semestrais',
        },
        {
          campo: 'tabelas_html',
          trecho: 'EVH 600 Pulsos Linha de expansão principal externa',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Utilize estritamente cabo blindado de par trançado classe 16 AWG e certifique-se de que a blindagem (shield) do cabo seja aterrada em um único ponto',
        },
      ],
    },
  ],
};
