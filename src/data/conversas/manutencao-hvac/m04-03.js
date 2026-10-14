// ═══════════════════════════════════════════════════════════════════════════
// CONVERSA — manutencao-hvac / m04-03
// Saúde do Compressor e Análise de Óleo
// Cenário: Bancada da Oficina (óleos MO/AB/POE/PVE, TAN, Lei de Paschen, Rx11-Flush)
// ═══════════════════════════════════════════════════════════════════════════

export default {
  schema: 1,
  cursoId: 'manutencao-hvac',
  aulaId: 'm04-03',
  versao: 1,
  status: 'publicado',
  revisao: {
    tecnica: 'Simon Souza — Revisão Técnica Integral',
    data: '2026-10-14',
  },
  cenario: 'bancada-oficina',
  elenco: ['simon', 'juninho', 'bia', 'marta'],
  estimativaMin: 13,

  beats: [
    // ── 1. ABERTURA ─────────────────────────────────────────────────────────
    {
      id: 'abertura-1',
      tipo: 'cena',
      texto: 'Na bancada da oficina, Simon coloca três frascos de amostra de óleo (um translúcido, um âmbar e um negro com cheiro ácido), um kit de teste de acidez, um cilindro de Rx11-Flush e um filtro secador de sucção.',
    },
    {
      id: 'abertura-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'serio',
      texto: 'Chegamos ao coração da máquina, turma! Se o refrigerante é o sangue do sistema, o óleo lubrificante é o exame de laboratório que diz se o compressor vai viver 20 anos ou morrer amanhã.',
    },
    {
      id: 'abertura-3',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'Olhem a Tabela 4.3.1 (Graus ISO 32 a **40°C**): o óleo Mineral (**30,0 cSt**) serve para HCFCs como R-22; já nos HFCs e HFOs modernos (**R-410A**, R-32, R-454B) reinam os sintéticos Poliól Ester — POE (**32,5 cSt**) e Polivinil Éter — PVE (**32,4 cSt**)!',
      fonte: {
        campo: 'tabelas_html',
        trecho: 'Viscosidade (40°C) Ponto de Fulgor Ponto de Fluidez Densidade (15°C) Compatibilidade de Refrigerante Óleo Mineral (MO) Suniso 3GS 30,0 cSt 168°C -40,0°C 0,91 g/cm³ CFCs, HCFCs (R-22) [8] Alquilbenzeno (AB) Zerol 150 34,0 cSt 210°C -44,0°C 0,87 g/cm³ HCFCs, Misturas de Transição [11] Poliól Ester (POE) Emkarate RL 32H 32,5 cSt 258°C -46,0°C 0,98 g/cm³ HFCs (R-410A), HFOs [14] Polivinil Éter (PVE) Daphne FVC32D 32,4 cSt',
      },
    },

    // ── 2. CONFLITO ─────────────────────────────────────────────────────────
    {
      id: 'conflito-1',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'Mestre, acabei de puxar vácuo profundo de **200 microns** num compressor novo. Posso bater o megômetro de **500V** ou **1000V** agora mesmo pra adiantar o laudo?',
      fonte: [
        {
          campo: 'infobox_campo',
          trecho: 'Nunca aplique tensões elétricas elevadas com megômetro ou hipot em compressores herméticos sob vácuo profundo [63]. A rigidez dielétrica do meio cai drasticamente sob pressões extremamente baixas (Lei de Paschen) [63]. A aplicação de 500V ou 1000V nessas condições provocará descargas em arco elétrico destrutivas através dos terminais Fusite',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Evacuação contínua em três estágios até atingir a pressão absoluta mínima de 200 microns',
        },
      ],
    },
    {
      id: 'conflito-2',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'alerta',
      texto: 'Tira a mão desse botão, Juninho! Pela Lei de Paschen, sob vácuo profundo a rigidez dielétrica despenca! Aplicar **500V** ou **1000V** em vácuo abre um arco interno nos pinos Fusite e explode a isolação do compressor novo!',
      fonte: {
        campo: 'infobox_campo',
        trecho: 'Nunca aplique tensões elétricas elevadas com megômetro ou hipot em compressores herméticos sob vácuo profundo [63]. A rigidez dielétrica do meio cai drasticamente sob pressões extremamente baixas (Lei de Paschen) [63]. A aplicação de 500V ou 1000V nessas condições provocará descargas em arco elétrico destrutivas através dos terminais Fusite',
      },
    },
    {
      id: 'conflito-3',
      tipo: 'escolha',
      pergunta: 'Um compressor scroll parado no frio apresenta leitura estável de 0,5 MΩ no megômetro (com circuito pressurizado). Qual deve ser a conduta segundo o boletim Copeland AE4-1294?',
      opcoes: [
        {
          id: 'a',
          texto: 'Ligar o aquecedor de cárter por 2 a 4 horas para evaporar o refrigerante líquido diluído no óleo antes de condenar o estator do compressor.',
          ideal: true,
          reacao: [
            {
              quem: 'marta',
              emocao: 'confiante',
              texto: 'Exato! Conforme o boletim Copeland AE4-1294, compressores scroll podem medir até 0,5 Megohm por refrigerante diluído no óleo e estar em perfeitas condições após aquecer o cárter por 2 a 4 horas!',
            },
          ],
        },
        {
          id: 'b',
          texto: 'Condenar e sucatear o compressor imediatamente sem aquecer o cárter.',
          reacao: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Erro caro! O refrigerante líquido misturado ao óleo no cárter frio reduz temporariamente a leitura de isolamento; aqueça o cárter primeiro!',
            },
          ],
        },
      ],
    },

    // ── 3. CAUSO ────────────────────────────────────────────────────────────
    {
      id: 'causo-1',
      tipo: 'causo',
      titulo: 'A Cilada da Troca Rápida que Queimou Dois Compressores Seguidos',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Um mecânico apressado trocou um compressor queimado (burnout severo, óleo negro e cheiro ácido) sem lavar a linha. Em duas semanas o compressor novo queimou igualzinho!',
        },
        {
          quem: 'bia',
          emocao: 'alerta',
          texto: 'O óleo POE sofre hidrólise com umidade (limite de **80 ppm** de água, contra **150 ppm** no mineral). Quando a acidez passa de **300 ppm** no POE (ou **50 ppm** no mineral), o ácido destrói o verniz das bobinas novas!',
          fonte: [
            {
              campo: 'conteudo_html',
              trecho: 'O limite condenatório absoluto para o óleo mineral em sistemas HCFC legados é de 50 ppm de equivalente ácido (TAN de 1,0 a 2,0 mg KOH/g) [24].',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Em sistemas POE/HFC, o limite crítico de acidez é de 300 ppm (aproximadamente 0,7 mg KOH/g) [24].',
            },
            {
              campo: 'conteudo_html',
              trecho: 'Enquanto sistemas minerais/R-22 toleram até 150 ppm de umidade, em sistemas POE o limite condenatório absoluto do fabricante (como a Tecumseh) é de 80 ppm de água no óleo [24].',
            },
          ],
        },
        {
          quem: 'marta',
          emocao: 'confiante',
          texto: 'Por isso em burnout severo isolamos os trocadores, lavamos com solvente Rx11-Flush, sopramos nitrogênio seco a **150 psig**, instalamos filtros antiácidos de líquido e sucção e puxamos vácuo triplo até **200 microns**!',
          fonte: [
            {
              campo: 'infobox_campo',
              trecho: 'Efetue o arraste do solvente e das borras insolúveis soprando nitrogênio gasoso seco a 150 psig até que o gás saia limpo e sem detritos de carvão [74].',
            },
            {
              campo: 'tabelas_html',
              trecho: 'Vácuo triplo até 200 microns.',
            },
          ],
        },
        {
          quem: 'juninho',
          emocao: 'espantado',
          texto: 'E se no óleo mineral a acidez chegar a **133 ppm**, o compressor falha em cerca de 33 horas de operação! Nunca mais troco compressor queimado sem kit de acidez e Rx11-Flush!',
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Se atingir 133 ppm, o compressor falhará em cerca de 33 hours de operação [24].',
          },
        },
      ],
    },

    // ── 4. INSIGHT ──────────────────────────────────────────────────────────
    {
      id: 'insight-1',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'Atenção à temperatura crítica do óleo: acima de **176,7°C** (**350°F**) ocorre craqueamento térmico e carbonização, fraturando as cadeias do óleo e gerando borra (*sludge*)!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Ocorre craqueamento térmico e carbonização quando as temperaturas da descarga sobem acima de 176,7°C (350°F), fraturando as longas cadeias do óleo e gerando resíduos sólidos de carbono conhecidos como borra (sludge) [22].',
      },
    },
    {
      id: 'insight-1b',
      tipo: 'fala',
      quem: 'simon',
      emocao: 'didatico',
      texto: 'Na medição a **150 mm** (6 pol.) da carcaça, o limite operacional seguro é de **107°C** (**225°F**) para compressores scroll e de **135°C a 149°C** (**275°F a 300°F**) para alternativos recíprocos!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A medição deve ser feita no tubo de cobre de descarga a uma distância de 150 mm (6 polegadas) da carcaça do compressor [22]. O limite máximo operacional seguro é de 107°C (225°F) para compressores scroll, e de 135°C a 149°C (275°F a 300°F) para compressores alternativos recíprocos [22].',
      },
    },
    {
      id: 'insight-2',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'didatico',
      texto: 'Na análise de vibração RMS Global (Tabela 4.3.2 — ISO 10816-3), para Classe II (compressores médios de **15 a 75 kW**), a Zona B vai de **1,12 - 2,80 mm/s** e a Zona C (Alerta) vai de **2,80 - 7,10 mm/s**; acima de **7,10 mm/s** já é Zona D de danos severos!',
      fonte: [
        {
          campo: 'tabelas_html',
          trecho: 'Classe II (Compressores médios de 15 a 75 kW)',
        },
        {
          campo: 'tabelas_html',
          trecho: '1,12 - 2,80 mm/s 2,80 - 7,10 mm/s',
        },
      ],
    },
    {
      id: 'insight-3',
      tipo: 'fala',
      quem: 'marta',
      emocao: 'confiante',
      texto: 'E após um burnout, devemos remover o filtro secador de sucção temporário após 48h se o teste de acidez der negativo, ou substituí-lo imediatamente se a queda de temperatura equivalente através dele exceder **1,7°C** (**3°F**)!',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'Se a queda de pressão/temperatura equivalente através dele exceder 1,7°C (3°F), substitua o filtro por saturação de resíduos [72].',
      },
    },
    {
      id: 'insight-4',
      tipo: 'fala',
      quem: 'juninho',
      emocao: 'curioso',
      texto: 'E qual núcleo de filtro secador puxa mais ácido depois de uma queima elétrica?',
    },
    {
      id: 'insight-5',
      tipo: 'fala',
      quem: 'bia',
      emocao: 'confiante',
      texto: 'Os filtros secadores antiácidos de alta capacidade combinam peneira molecular com Alumina Ativada, que adsorve especificamente os ácidos orgânicos e inorgânicos!',
    },
    {
      id: 'mito-1',
      tipo: 'mitoVerdade',
      afirmacao: 'Os óleos sintéticos Poliól Ester (POE) e Polivinil Éter (PVE) são exatamente iguais e nenhum dos dois sofre hidrólise química na presença de água.',
      verdade: false,
      explicacao: [
        {
          quem: 'simon',
          emocao: 'didatico',
          texto: 'Mito! O óleo POE sofre hidrólise (quebra da ligação éster formando ácidos carboxílicos corrosivos) na presença de umidade; já o óleo PVE não possui ligações éster e não sofre hidrólise química!',
        },
      ],
    },

    // ── 5. PRÁTICA ──────────────────────────────────────────────────────────
    {
      id: 'pratica-1',
      tipo: 'inspecao',
      titulo: 'Auditoria de Saúde de Compressores e Óleos',
      enunciado: 'Selecione qual das ações abaixo é PROIBIDA na manutenção de compressores frigoríficos:',
      pontos: [
        {
          id: 'p1',
          rotulo: 'Jamais realizar teste de megômetro (500V/1000V) com o compressor sob vácuo profundo (Lei de Paschen).',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Esta regra está correta! Só aplique **500V** ou **1000V** com o circuito pressurizado ou carregado.',
              fonte: {
                campo: 'infobox_campo',
                trecho: 'A aplicação de 500V ou 1000V nessas condições provocará descargas em arco elétrico destrutivas através dos terminais Fusite',
              },
            },
          ],
          fonte: {
            campo: 'infobox_campo',
            trecho: 'A aplicação de 500V ou 1000V nessas condições provocará descargas em arco elétrico destrutivas através dos terminais Fusite',
          },
        },
        {
          id: 'p2',
          rotulo: 'Em burnout severo, lavar com Rx11-Flush, purgar com N2 a 150 psig, instalar filtros antiácidos de líquido e sucção e puxar vácuo triplo até 200 microns.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'confiante',
              texto: 'Procedimento correto! Sopro de nitrogênio a **150 psig** e vácuo triplo até **200 microns** salvam o compressor novo.',
              fonte: [
                {
                  campo: 'infobox_campo',
                  trecho: 'Efetue o arraste do solvente e das borras insolúveis soprando nitrogênio gasoso seco a 150 psig até que o gás saia limpo e sem detritos de carvão [74].',
                },
                {
                  campo: 'tabelas_html',
                  trecho: 'Vácuo triplo até 200 microns.',
                },
              ],
            },
          ],
          fonte: [
            {
              campo: 'infobox_campo',
              trecho: 'soprando nitrogênio gasoso seco a 150 psig até que o gás saia limpo',
            },
            {
              campo: 'tabelas_html',
              trecho: 'Vácuo triplo até 200 microns.',
            },
          ],
        },
        {
          id: 'p3',
          rotulo: 'Abastecer um compressor moderno de HFC (R-410A) ou HFO com óleo Mineral Suniso 3GS (30,0 cSt).',
          correta: true,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Erro gravíssimo identificado! O óleo mineral (**30,0 cSt**) não é miscível com HFCs (**R-410A**) ou HFOs; use POE ou PVE conforme a placa!',
              fonte: {
                campo: 'tabelas_html',
                trecho: 'Óleo Mineral (MO) Suniso 3GS 30,0 cSt 168°C -40,0°C 0,91 g/cm³ CFCs, HCFCs (R-22) [8] Alquilbenzeno (AB) Zerol 150 34,0 cSt 210°C -44,0°C 0,87 g/cm³ HCFCs, Misturas de Transição [11] Poliól Ester (POE) Emkarate RL 32H 32,5 cSt 258°C -46,0°C 0,98 g/cm³ HFCs (R-410A), HFOs [14]',
              },
            },
          ],
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Óleo Mineral (MO) Suniso 3GS 30,0 cSt 168°C -40,0°C 0,91 g/cm³ CFCs, HCFCs (R-22) [8] Alquilbenzeno (AB) Zerol 150 34,0 cSt 210°C -44,0°C 0,87 g/cm³ HCFCs, Misturas de Transição [11] Poliól Ester (POE) Emkarate RL 32H 32,5 cSt 258°C -46,0°C 0,98 g/cm³ HFCs (R-410A), HFOs [14]',
          },
        },
        {
          id: 'p4',
          rotulo: 'Monitorar a queda de temperatura no filtro secador de sucção e substituí-lo se exceder 1,7°C (3°F).',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Procedimento correto! Se o diferencial exceder **1,7°C** (**3°F**), o filtro de sucção está saturado.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Se a queda de pressão/temperatura equivalente através dele exceder 1,7°C (3°F), substitua o filtro por saturação de resíduos [72].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Se a queda de pressão/temperatura equivalente através dele exceder 1,7°C (3°F), substitua o filtro por saturação de resíduos [72].',
          },
        },
      ],
    },

    // ── 6. TESTE ────────────────────────────────────────────────────────────
    {
      id: 'quiz-1',
      tipo: 'quiz',
      enunciado: 'Qual é a diferença fundamental de estabilidade química entre o óleo Poliól Ester (POE) e o óleo Polivinil Éter (PVE) na presença de umidade residual, e qual o limite condenatório de água no óleo POE?',
      opcoes: [
        {
          id: 'a',
          texto: 'O POE sofre reação de hidrólise com a água formando ácidos orgânicos corrosivos (limite condenatório de **80 ppm** de água); já o PVE não sofre hidrólise química.',
          correta: true,
          feedback: [
            {
              quem: 'simon',
              emocao: 'aprovando',
              texto: 'Acertou em cheio! O POE exige controle rigoroso abaixo de **80 ppm** de umidade para não hidrolisar e gerar ácido, enquanto o PVE é imune à hidrólise química!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Enquanto sistemas minerais/R-22 toleram até 150 ppm de umidade, em sistemas POE o limite condenatório absoluto do fabricante (como a Tecumseh) é de 80 ppm de água no óleo [24].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Enquanto sistemas minerais/R-22 toleram até 150 ppm de umidade, em sistemas POE o limite condenatório absoluto do fabricante (como a Tecumseh) é de 80 ppm de água no óleo [24].',
          },
        },
        {
          id: 'b',
          texto: 'O óleo POE não absorve umidade e pode operar com até **150 ppm** de água sem formar ácido.',
          correta: false,
          feedback: [
            {
              quem: 'bia',
              emocao: 'alerta',
              texto: '**150 ppm** é o limite do óleo mineral! O POE é altamente higroscópico e seu limite condenatório é de **80 ppm** de água.',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Enquanto sistemas minerais/R-22 toleram até 150 ppm de umidade, em sistemas POE o limite condenatório absoluto do fabricante (como a Tecumseh) é de 80 ppm de água no óleo [24].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Enquanto sistemas minerais/R-22 toleram até 150 ppm de umidade, em sistemas POE o limite condenatório absoluto do fabricante (como a Tecumseh) é de 80 ppm de água no óleo [24].',
          },
        },
        {
          id: 'c',
          texto: 'Ambos suportam temperaturas de descarga acima de **176,7°C** (**350°F**) sem sofrer craqueamento térmico.',
          correta: false,
          feedback: [
            {
              quem: 'marta',
              emocao: 'alerta',
              texto: 'Acima de **176,7°C** (**350°F**) ocorre craqueamento térmico e formação de borra de carbono (*sludge*)!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Ocorre craqueamento térmico e carbonização quando as temperaturas da descarga sobem acima de 176,7°C (350°F), fraturando as longas cadeias do óleo e gerando resíduos sólidos de carbono conhecidos como borra (sludge) [22].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Ocorre craqueamento térmico e carbonização quando as temperaturas da descarga sobem acima de 176,7°C (350°F)',
          },
        },
      ],
    },
    {
      id: 'quiz-2',
      tipo: 'quiz',
      enunciado: 'Qual é o limite máximo operacional seguro para a temperatura da tubulação de descarga (medida a 150 mm da carcaça) em compressores scroll e em compressores alternativos recíprocos?',
      fonte: {
        campo: 'conteudo_html',
        trecho: 'A medição deve ser feita no tubo de cobre de descarga a uma distância de 150 mm (6 polegadas) da carcaça do compressor [22]. O limite máximo operacional seguro é de 107°C (225°F) para compressores scroll, e de 135°C a 149°C (275°F a 300°F) para compressores alternativos recíprocos [22].',
      },
      opcoes: [
        {
          id: 'a',
          texto: 'Máximo de **107°C** (**225°F**) para compressores scroll, e de **135°C a 149°C** (**275°F a 300°F**) para alternativos recíprocos.',
          correta: true,
          feedback: [
            {
              quem: 'bia',
              emocao: 'aprovando',
              texto: 'Cravado! Medir a **150 mm** (6 polegadas) da carcaça e respeitar **107°C** (**225°F**) no scroll evita a degradação térmica do óleo!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'A medição deve ser feita no tubo de cobre de descarga a uma distância de 150 mm (6 polegadas) da carcaça do compressor [22]. O limite máximo operacional seguro é de 107°C (225°F) para compressores scroll, e de 135°C a 149°C (275°F a 300°F) para compressores alternativos recíprocos [22].',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'A medição deve ser feita no tubo de cobre de descarga a uma distância de 150 mm (6 polegadas) da carcaça do compressor [22]. O limite máximo operacional seguro é de 107°C (225°F) para compressores scroll, e de 135°C a 149°C (275°F a 300°F) para compressores alternativos recíprocos [22].',
          },
        },
        {
          id: 'b',
          texto: 'Acima de **176,7°C** (**350°F**) para todos os modelos.',
          correta: false,
          feedback: [
            {
              quem: 'simon',
              emocao: 'alerta',
              texto: 'Acima de **176,7°C** (**350°F**) o óleo sofre craqueamento térmico e carboniza!',
              fonte: {
                campo: 'conteudo_html',
                trecho: 'Ocorre craqueamento térmico e carbonização quando as temperaturas da descarga sobem acima de 176,7°C (350°F)',
              },
            },
          ],
          fonte: {
            campo: 'conteudo_html',
            trecho: 'Ocorre craqueamento térmico e carbonização quando as temperaturas da descarga sobem acima de 176,7°C (350°F)',
          },
        },
      ],
    },

    // ── 7. FILOSOFIA ────────────────────────────────────────────────────────
    {
      id: 'filosofia-1',
      tipo: 'filosofia',
      titulo: 'Trocar Compressor Sem Tratar a Causa É Assinar Garantia de Prejuízo',
      principio: 'Compressor não comete suicídio: ele é assassinado por acidez, superaquecimento, retorno de líquido ou falta de limpeza pós-queima.',
      falas: [
        {
          quem: 'simon',
          emocao: 'serio',
          texto: 'Todo compressor queimado conta a história da sua morte no óleo. Se você não testar a acidez e não descontaminar a linha, o compressor novo já nasce condenado.',
        },
        {
          quem: 'marta',
          emocao: 'confiante',
          texto: 'Com isso fechamos o Módulo 04 e toda a primeira metade do curso de Manutenção de Sistemas HVAC! Vocês agora dominam da gestão PMOC ao coração químico do compressor!',
        },
        {
          quem: 'juninho',
          emocao: 'animado',
          texto: 'Sem megômetro no vácuo, aquecedor de cárter ligado antes do diagnóstico e limpeza completa com Rx11-Flush e vácuo de **200 microns**!',
          fonte: {
            campo: 'tabelas_html',
            trecho: 'Vácuo triplo até 200 microns.',
          },
        },
      ],
    },

    // ── 8. FECHAMENTO ───────────────────────────────────────────────────────
    {
      id: 'ref-1',
      tipo: 'referencia',
      texto: 'Consulte a Tabela 4.3.1 (Propriedades dos Lubrificantes), a Tabela 4.3.2 (Severidade de Vibração ISO 10816-3) e a Tabela 4.3.3 (Matriz de Descontaminação Pós-Burnout).',
      alvo: {
        aba: 'tabelas',
      },
    },
    {
      id: 'saideira',
      tipo: 'saideira',
      pontos: [
        'Controlar umidade (**80 ppm** no POE; **150 ppm** no Mineral), acidez (**300 ppm** no POE; **50 ppm** no Mineral) e descarga a **150 mm** (**107°C** / **225°F** no scroll).',
        'Nunca aplicar megômetro (**500V** / **1000V**) sob vácuo (Lei de Paschen) e aquecer o cárter por 2 a 4 horas se o scroll medir baixa isolação por líquido diluído.',
        'Em burnout severo, lavar com Rx11-Flush, soprar N2 a **150 psig**, instalar filtros antiácidos de líquido e sucção (trocar se ΔT > **1,7°C** / **3°F**) e puxar vácuo triplo até **200 microns**.',
      ],
      proxima: 'Concluímos o Módulo 04! Prepare-se para o Desafio do Módulo 04 e siga para o Módulo 05 (Inspeção Elétrica, Contatores, Capacitores e Motores)!',
      fonte: [
        {
          campo: 'conteudo_html',
          trecho: 'O limite condenatório absoluto para o óleo mineral em sistemas HCFC legados é de 50 ppm de equivalente ácido (TAN de 1,0 a 2,0 mg KOH/g) [24].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Em sistemas POE/HFC, o limite crítico de acidez é de 300 ppm (aproximadamente 0,7 mg KOH/g) [24].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Enquanto sistemas minerais/R-22 toleram até 150 ppm de umidade, em sistemas POE o limite condenatório absoluto do fabricante (como a Tecumseh) é de 80 ppm de água no óleo [24].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'A medição deve ser feita no tubo de cobre de descarga a uma distância de 150 mm (6 polegadas) da carcaça do compressor [22]. O limite máximo operacional seguro é de 107°C (225°F) para compressores scroll, e de 135°C a 149°C (275°F a 300°F) para compressores alternativos recíprocos [22].',
        },
        {
          campo: 'infobox_campo',
          trecho: 'A aplicação de 500V ou 1000V nessas condições provocará descargas em arco elétrico destrutivas através dos terminais Fusite',
        },
        {
          campo: 'infobox_campo',
          trecho: 'Efetue o arraste do solvente e das borras insolúveis soprando nitrogênio gasoso seco a 150 psig até que o gás saia limpo e sem detritos de carvão [74].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Vácuo Triplo Profundo: Evacuação contínua em três estágios até atingir a pressão absoluta mínima de 200 microns para vaporizar solventes e remover a umidade residual [72].',
        },
        {
          campo: 'conteudo_html',
          trecho: 'Se a queda de pressão/temperatura equivalente através dele exceder 1,7°C (3°F), substitua o filtro por saturação de resíduos [72].',
        },
      ],
    },
  ],
};
