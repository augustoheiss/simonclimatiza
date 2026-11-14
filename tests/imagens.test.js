import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { LAUDO_EXEMPLO } from '../src/data/laudoExemplo.js';
import { METODO_FOTOS } from '../src/data/metodoFotos.js';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images', 'laudo');

// Dimensões dos recortes (Apêndice B do plano de 2026-11-14) e teto de peso em KB.
const ESPERADO = {
  'laudo-vacuo.webp': { w: 715, h: 421, kb: 80 },
  'laudo-carga.webp': { w: 715, h: 422, kb: 80 },
  'metodo-1.webp': { w: 615, h: 610, kb: 120 },
  'metodo-2.webp': { w: 1082, h: 862, kb: 120 },
  'metodo-3.webp': { w: 968, h: 835, kb: 120 },
};

for (const [nome, { w, h, kb }] of Object.entries(ESPERADO)) {
  test(`${nome} existe, é WebP, mede ${w}x${h} e pesa até ${kb} KB`, async () => {
    const arquivo = path.join(RAIZ, nome);
    assert.ok(fs.existsSync(arquivo), `${nome} não existe em public/images/laudo/`);
    const bytes = fs.readFileSync(arquivo);
    assert.equal(bytes.subarray(0, 4).toString('ascii'), 'RIFF');
    assert.equal(bytes.subarray(8, 12).toString('ascii'), 'WEBP');
    assert.ok(bytes.length <= kb * 1024, `${nome} pesa ${Math.round(bytes.length / 1024)} KB (teto ${kb} KB)`);
    const meta = await sharp(arquivo).metadata();
    assert.equal(`${meta.width}x${meta.height}`, `${w}x${h}`);
  });
}

test('todo src referenciado nos dados aponta para um arquivo que existe', () => {
  const usados = [
    ...Object.values(LAUDO_EXEMPLO.fotos).map((f) => f.src),
    ...METODO_FOTOS.map((f) => f.src),
  ];
  assert.equal(usados.length, 5);
  for (const src of usados) {
    const arquivo = path.join(RAIZ, path.basename(src));
    assert.ok(fs.existsSync(arquivo), `${src} não existe no disco`);
    assert.ok(src.startsWith('/images/laudo/'), `${src} fora de /images/laudo/`);
  }
});

test('as dimensões declaradas nos dados batem com as do arquivo', async () => {
  const declaradas = [...Object.values(LAUDO_EXEMPLO.fotos), ...METODO_FOTOS];
  for (const f of declaradas) {
    const meta = await sharp(path.join(RAIZ, path.basename(f.src))).metadata();
    assert.equal(`${f.largura}x${f.altura}`, `${meta.width}x${meta.height}`, `${f.src}`);
  }
});
