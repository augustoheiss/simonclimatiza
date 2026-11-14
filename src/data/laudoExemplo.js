// Conteúdo do laudo de exemplo da Home. Os componentes só desenham; tudo que é texto, valor,
// posição de destaque e id de foto fica aqui.
//
// REGRAS (plano de 2026-11-14):
// - Os valores medidos vêm de src/data/leituraCampo.js (bloco "vacuo"). Não digite valor novo à mão.
// - Nenhum texto descreve o formato do display da balança (ponto ou vírgula): a foto não permite afirmar.
// - Nenhum texto diz como é o laudo real do Simon. Este é um modelo ilustrativo.
// - Os textos técnicos abaixo aguardam a revisão do Simon (lista em textosParaRevisao.js).

// Meta de vácuo, em mícrons. Existe também, como texto, em src/data/servicos.js ("abaixo de 500 microns")
// e em src/components/home/BridgeProcessSection.jsx ("abaixo de 500"). Mudou a meta? Mude nos três lugares.
export const META_VACUO_MICRONS = 500;

// A lista de fotos autorizadas mora em ./fotosAutorizadas.js (pequena, usada também fora do laudo). É reexportada
// aqui para quem já importava deste arquivo. Quem roda no pacote de entrada da Home deve importar de lá.
import { IDS_AUTORIZADOS_HOME } from './fotosAutorizadas.js';
export { IDS_AUTORIZADOS_HOME };

// Caixa de destaque: [esquerda, topo, largura, altura], em % da foto.
// Medida sobre os recortes de public/images/laudo/ (ver scripts/otimizar-imagens.mjs).
// Trocou a foto ou o recorte? Refaça a caixa e confira olhando os três destaques.
export const LAUDO_EXEMPLO = {
  titulo: 'Evacuação e carga de fluido refrigerante (R410A)',
  tipo: 'Laudo de serviço',
  selo: 'Exemplo de laudo',
  aviso:
    'Modelo ilustrativo. As leituras e as fotos são de um serviço real, publicado no perfil @simonclimatiza. Os campos de identificação ficam em branco neste modelo.',
  instrumentos: 'Testo 552i (vacuômetro digital) e balança digital',
  campos: [
    { rotulo: 'Cliente', valor: 'em branco neste modelo' },
    { rotulo: 'Unidade atendida', valor: 'em branco neste modelo' },
    { rotulo: 'Data do serviço', valor: 'em branco neste modelo' },
    { rotulo: 'Engenheiro responsável', valor: 'em branco neste modelo' },
    { rotulo: 'ART nº', valor: 'em branco neste modelo' },
  ],
  assinatura: 'Assinatura do engenheiro responsável (em branco neste modelo)',
  fotos: {
    vacuo: {
      src: '/images/laudo/laudo-vacuo.webp',
      largura: 715,
      altura: 421,
      alt: 'Tela do aplicativo do Testo 552i: medidor em 436 mícrons, desvio da pressão baixa em 0 mícron e curva da evacuação',
    },
    carga: {
      src: '/images/laudo/laudo-carga.webp',
      largura: 715,
      altura: 422,
      alt: 'Balança digital com o display aceso e, ao lado, o manifold com os dois manômetros',
    },
  },
  medicoes: [
    {
      id: 'vacuo',
      rotulo: 'Vácuo atingido',
      valor: '436',
      unidade: 'mícrons',
      resultado: 'Dentro da meta (abaixo de 500)',
      fotoId: 'post-01',
      foto: 'vacuo',
      caixa: [16.5, 8.5, 15.4, 23.8],
      legenda:
        'Quanto menor o número, mais seco está o circuito. O padrão Simon é abaixo de 500 mícrons.',
      meta: { limite: META_VACUO_MICRONS, escala: 600 },
    },
    {
      id: 'retencao',
      rotulo: 'Variação de pressão depois de isolar',
      valor: '0',
      unidade: 'mícron',
      resultado: 'Sem variação',
      fotoId: 'post-01',
      foto: 'vacuo',
      caixa: [1.7, 63.2, 45.5, 19.0],
      legenda: 'Depois de isolar a bomba, a pressão não subiu. É o teste de retenção do vácuo.',
    },
    {
      id: 'carga',
      rotulo: 'Carga de R410A, medida por massa',
      valor: '10,820',
      unidade: 'kg',
      resultado: 'Registrada',
      fotoId: 'post-01',
      foto: 'carga',
      caixa: [13.7, 20.1, 17.3, 15.9],
      legenda: 'A carga é pesada na balança, não estimada.',
    },
  ],
};

// Devolve TODAS as medições. `semFoto` é true quando a foto da medição não está autorizada para a Home:
// o laudo abre do mesmo jeito, só sem a imagem e sem o destaque.
export function medicoesVisiveis(laudo, idsAutorizados) {
  const liberados = new Set(idsAutorizados);
  return laudo.medicoes.map((m) => ({ ...m, semFoto: !liberados.has(m.fotoId) }));
}
