// Fotos da seção "Como o trabalho é feito" (Home). Os três textos das etapas continuam em
// src/components/home/BridgeProcessSection.jsx; aqui ficam só as fotos e suas legendas.
//
// `origemId` é o id da publicação no acervo (src/data/instagramSimonArchive.js). A foto só aparece
// se o id estiver em IDS_AUTORIZADOS_HOME (src/data/laudoExemplo.js).
// Nenhum texto descreve o formato do display da balança. Os textos aguardam revisão do Simon.

export const METODO_FOTOS = [
  {
    etapa: 1,
    origemId: 'post-09',
    src: '/images/laudo/metodo-1.webp',
    largura: 615,
    altura: 610,
    alt: 'Tablet de serviço ligado à condensadora de um sistema VRV III, com a tela de monitoramento de parâmetros',
    legenda:
      'Diagnóstico em tempo real: tablet de serviço ligado à condensadora de um VRV III, lendo pressões, temperaturas e correntes.',
  },
  {
    etapa: 2,
    origemId: 'post-01',
    src: '/images/laudo/metodo-2.webp',
    largura: 1082,
    altura: 862,
    alt: 'Seis fotos do mesmo serviço: bomba de vácuo ligada à condensadora, tela do Testo com 436 mícrons, curva da evacuação, cilindro de R410A, balança digital e manifold',
    legenda: 'Um serviço, três registros: vácuo de 436 mícrons, curva da evacuação e carga pesada na balança.',
  },
  {
    etapa: 3,
    origemId: 'post-08',
    src: '/images/laudo/metodo-3.webp',
    largura: 968,
    altura: 835,
    alt: 'Gráfico de tendência da corrente do compressor de um chiller, em porcentagem da corrente nominal, ao longo do dia',
    legenda: 'Histórico da corrente do compressor de um chiller, em % da corrente nominal, ao longo do dia.',
  },
];

const TOTAL_ETAPAS = 3;

// Decide, para cada uma das 3 etapas, qual foto aparece (ou nenhuma), dados os ids de foto autorizados.
//  - fotoPorEtapa: 3 posições, na ordem das etapas; `null` onde não há foto autorizada.
//  - etapaInicial: índice (0 a 2) da primeira etapa que TEM foto, ou null se nenhuma tem.
//  - temFoto: false significa que a seção volta ao layout só de texto, sem botão e sem aria-pressed.
export function etapasComFoto(fotos, idsAutorizados) {
  const liberados = new Set(idsAutorizados);
  const fotoPorEtapa = Array.from({ length: TOTAL_ETAPAS }, (_, i) => {
    const foto = fotos.find((f) => f.etapa === i + 1 && liberados.has(f.origemId));
    return foto ?? null;
  });
  const primeira = fotoPorEtapa.findIndex((f) => f !== null);
  return {
    fotoPorEtapa,
    etapaInicial: primeira === -1 ? null : primeira,
    temFoto: primeira !== -1,
  };
}
