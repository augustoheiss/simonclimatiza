import test from 'node:test';
import assert from 'node:assert/strict';
import { LEITURAS_CAMPO } from '../src/data/leituraCampo.js';
import { SERVICOS } from '../src/data/servicos.js';
import { SIMON_FIELD_POSTS } from '../src/data/instagramSimonArchive.js';
import {
  META_VACUO_MICRONS,
  IDS_AUTORIZADOS_HOME,
  LAUDO_EXEMPLO,
  medicoesVisiveis,
} from '../src/data/laudoExemplo.js';
import { METODO_FOTOS } from '../src/data/metodoFotos.js';
import { CHECKLIST_ITENS } from '../src/data/checklistPmoc.js';
import { TEXTOS_PARA_REVISAO } from '../src/data/textosParaRevisao.js';

const semAcento = (s) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
const vacuo = LEITURAS_CAMPO.find((l) => l.id === 'vacuo');

test('as medições do laudo vêm de leituraCampo.js', () => {
  assert.equal(LAUDO_EXEMPLO.medicoes.length, 3);
  for (const m of LAUDO_EXEMPLO.medicoes) {
    const linha = vacuo.linhas.find((l) => l.valor === m.valor && l.unidade === m.unidade);
    assert.ok(linha, `medição "${m.rotulo}" (${m.valor} ${m.unidade}) não existe em leituraCampo.js`);
  }
});

test('META_VACUO_MICRONS é 500 e a medição de vácuo está abaixo dela', () => {
  assert.equal(META_VACUO_MICRONS, 500);
  const medicao = LAUDO_EXEMPLO.medicoes.find((m) => m.id === 'vacuo');
  assert.ok(Number(medicao.valor) < META_VACUO_MICRONS);
});

test('toda caixa de destaque cabe dentro da foto', () => {
  for (const m of LAUDO_EXEMPLO.medicoes) {
    const [esq, topo, larg, alt] = m.caixa;
    assert.ok(esq >= 0 && topo >= 0, `${m.id}: origem negativa`);
    assert.ok(esq + larg <= 100, `${m.id}: estoura a largura`);
    assert.ok(topo + alt <= 100, `${m.id}: estoura a altura`);
  }
});

test('o checklist tem 5 itens e cada um aponta a origem em servicos.js', () => {
  assert.equal(CHECKLIST_ITENS.length, 5);
  for (const item of CHECKLIST_ITENS) {
    assert.match(item.origem, /^servicos\.pmoc\.protocolo\[[0-4]\]$/);
  }
});

test('o texto de cada item do checklist está contido no protocolo de PMOC de servicos.js', () => {
  const pmoc = SERVICOS.find((s) => s.id === 'pmoc');
  CHECKLIST_ITENS.forEach((item) => {
    const n = Number(item.origem.match(/\[(\d)\]/)[1]);
    const origem = semAcento(pmoc.protocolo[n]);
    const palavras = semAcento(item.texto).split(/\W+/).filter((p) => p.length > 3).slice(0, 3);
    assert.ok(palavras.length >= 2, `item ${n}: texto curto demais para conferir`);
    for (const p of palavras) {
      assert.ok(origem.includes(p), `item ${n}: "${p}" não aparece em "${pmoc.protocolo[n]}"`);
    }
  });
});

const todosOsTextos = () => [
  ...JSON.stringify(LAUDO_EXEMPLO).match(/"[^"]*"/g),
  ...JSON.stringify(METODO_FOTOS).match(/"[^"]*"/g),
  ...TEXTOS_PARA_REVISAO.map((t) => t.texto),
];

test('nenhum texto novo descreve o formato do display da balança', () => {
  for (const t of todosOsTextos()) {
    assert.doesNotMatch(t, /10\.820|display (usa|mostra|exibe|aceso com)|sem ponto decimal/i, `texto proibido: ${t}`);
  }
});

test('nenhum texto novo promete laudo real nem diz "o que falta"', () => {
  for (const t of todosOsTextos()) {
    assert.doesNotMatch(t, /laudo (entregue|que você recebe)|vêm preenchidos|o que falta/i, `texto proibido: ${t}`);
  }
});

test('os ids autorizados existem no acervo e não estão na lista de bloqueio', () => {
  const ids = new Set(SIMON_FIELD_POSTS.map((p) => p.id));
  for (const id of IDS_AUTORIZADOS_HOME) {
    assert.ok(ids.has(id), `${id} não existe em SIMON_FIELD_POSTS`);
    assert.ok(!['post-13', 'extra-01', 'extra-03'].includes(id), `${id} está bloqueado na galeria pública`);
  }
});

test('toda foto do método e do laudo aponta para um post que existe', () => {
  const ids = new Set(SIMON_FIELD_POSTS.map((p) => p.id));
  for (const f of METODO_FOTOS) assert.ok(ids.has(f.origemId), `${f.origemId} não existe`);
  for (const m of LAUDO_EXEMPLO.medicoes) assert.ok(ids.has(m.fotoId), `${m.fotoId} não existe`);
});

test('medicoesVisiveis devolve as 3 medições e marca semFoto pela lista de ids', () => {
  const com = medicoesVisiveis(LAUDO_EXEMPLO, ['post-01']);
  assert.equal(com.length, 3);
  assert.deepEqual(com.map((m) => m.semFoto), [false, false, false]);

  const vazia = medicoesVisiveis(LAUDO_EXEMPLO, []);
  assert.equal(vazia.length, 3);
  assert.deepEqual(vazia.map((m) => m.semFoto), [true, true, true]);

  const inexistente = medicoesVisiveis(LAUDO_EXEMPLO, ['post-99']);
  assert.deepEqual(inexistente.map((m) => m.semFoto), [true, true, true]);
});

test('TEXTOS_PARA_REVISAO lista cada texto técnico novo com arquivo e campo', () => {
  assert.ok(TEXTOS_PARA_REVISAO.length >= 10);
  for (const t of TEXTOS_PARA_REVISAO) {
    assert.ok(t.arquivo && t.campo && t.texto, `entrada incompleta: ${JSON.stringify(t)}`);
  }
  assert.ok(TEXTOS_PARA_REVISAO.some((t) => t.arquivo === 'laudoExemplo.js'));
  assert.ok(TEXTOS_PARA_REVISAO.some((t) => t.arquivo === 'metodoFotos.js'));
  assert.ok(TEXTOS_PARA_REVISAO.some((t) => t.arquivo === 'checklistPmoc.js'));
});
