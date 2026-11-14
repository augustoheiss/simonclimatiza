// Itens do checklist de PMOC da Home. O texto é o do protocolo do serviço "Manutenção HVAC & PMOC" em
// src/data/servicos.js (campo `protocolo`), SEM paráfrase: o checklist diz ao visitante o que a Simon executa,
// então as palavras são as dela. `origem` aponta o item de origem.
//
// Por que o texto está copiado aqui e não importado: servicos.js tem o texto de TODOS os serviços (8 KB) e só a
// página /servicos, que carrega sob demanda, o usa. Importá-lo levaria esse texto para todo visitante da Home só
// para ler 5 frases. A cópia não pode divergir: tests/pacoteDaHome.test.js compara cada item com servicos.js e
// falha se mudarem. Mudou o protocolo em servicos.js? Mude aqui também; o teste avisa.
//
// IMPORTANTE: estes itens são o protocolo da Simon, NÃO um mínimo legal. A seção diz isso ao visitante;
// o item 4 ("quando exigido pelo porte") depende do porte do edifício.
// Os textos aguardam revisão do Simon.

export const CHECKLIST_ITENS = [
  {
    id: 'cadastro',
    texto: 'Cadastramento e tagueamento individual (QR Code) de todo o parque de climatização',
    origem: 'servicos.pmoc.protocolo[0]',
  },
  {
    id: 'higienizacao',
    texto: 'Higienização bactericida e fungicida certificada de serpentinas, bandejas e turbinas',
    origem: 'servicos.pmoc.protocolo[1]',
  },
  {
    id: 'medicoes',
    texto: 'Medição periódica de corrente elétrica, tensão, delta-T e pressões de trabalho',
    origem: 'servicos.pmoc.protocolo[2]',
  },
  {
    id: 'ar-interior',
    texto: 'Coleta e análise laboratorial da qualidade do ar interior (quando exigido pelo porte)',
    origem: 'servicos.pmoc.protocolo[3]',
  },
  {
    id: 'relatorios',
    texto: 'Emissão mensal de relatórios digitais assinados por Engenheiro Responsável + ART anual',
    origem: 'servicos.pmoc.protocolo[4]',
  },
];
