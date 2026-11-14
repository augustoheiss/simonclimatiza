// Lista, gerada a partir dos próprios arquivos de dados, de todo texto técnico novo da Home que o Simon
// precisa revisar antes de o recurso ir para a `main` (Gate G-G do plano de 2026-11-14).
// Não digite texto aqui: edite no arquivo de origem. Esta lista nunca diverge porque é calculada.

import { LAUDO_EXEMPLO } from './laudoExemplo.js';
import { METODO_FOTOS } from './metodoFotos.js';
import { CHECKLIST_ITENS } from './checklistPmoc.js';

const item = (arquivo, campo, texto) => ({ arquivo, campo, texto });

export const TEXTOS_PARA_REVISAO = [
  item('laudoExemplo.js', 'aviso', LAUDO_EXEMPLO.aviso),
  item('laudoExemplo.js', 'instrumentos', LAUDO_EXEMPLO.instrumentos),
  item('laudoExemplo.js', 'foto.vacuo.alt', LAUDO_EXEMPLO.fotos.vacuo.alt),
  item('laudoExemplo.js', 'foto.carga.alt', LAUDO_EXEMPLO.fotos.carga.alt),
  ...LAUDO_EXEMPLO.medicoes.flatMap((m) => [
    item('laudoExemplo.js', `medicao.${m.id}.resultado`, m.resultado),
    item('laudoExemplo.js', `medicao.${m.id}.legenda`, m.legenda),
  ]),
  ...METODO_FOTOS.flatMap((f) => [
    item('metodoFotos.js', `etapa${f.etapa}.alt`, f.alt),
    item('metodoFotos.js', `etapa${f.etapa}.legenda`, f.legenda),
  ]),
  ...CHECKLIST_ITENS.map((c) => item('checklistPmoc.js', `item.${c.id}`, c.texto)),
];
