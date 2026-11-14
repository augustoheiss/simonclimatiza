// Gera versões WebP das fotos do site, ao lado dos originais (que não são alterados).
// Uso: npm run otimizar:imagens
import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');

// Largura máxima em pixels por arquivo. O logo fica de fora (precisa de nitidez e é pequeno).
const ALVOS = {
  'home-servicos.jpg': 1600,
  'home-servicos-02.jpg': 1600,
  'home-servicos-03.jpg': 1600,
  'home-manutencao-01.jpeg': 1600,
  'home-manutencao-02.jpeg': 1600,
  'home-manutencao-03.jpeg': 1600,
  'camerafria-contatos.jpg': 1200,
  'industria-contatos-02.jpg': 1200,
  'solucao-clima-perfeito.jpg': 1600,
};

const kb = (n) => `${Math.round(n / 1024)} KB`;

for (const [arquivo, largura] of Object.entries(ALVOS)) {
  const origem = path.join(RAIZ, arquivo);
  const destino = origem.replace(/\.(jpe?g)$/i, '.webp');
  await sharp(origem)
    .resize({ width: largura, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(destino);
  const [antes, depois] = await Promise.all([stat(origem), stat(destino)]);
  console.log(`${arquivo}: ${kb(antes.size)} -> ${kb(depois.size)}`);
}

// Recortes das fotos do acervo para o laudo de exemplo e para o método (plano de 2026-11-14, Apêndice B).
// Origem em public/images/instagram/ (não é alterada). Coordenadas em pixels sobre a imagem ORIGINAL.
// O script confere a largura da origem: se a foto foi trocada, ele para em vez de cortar a região errada.
const ACERVO = path.join(RAIZ, 'instagram');
const DESTINO_RECORTES = path.join(RAIZ, 'laudo');
const RECORTES = [
  { origem: 'post-01-DYz_yx9nd0D.jpg', largura: 1440, saida: 'laudo-vacuo.webp', x: 545, y: 387, w: 715, h: 421 },
  { origem: 'post-01-DYz_yx9nd0D.jpg', largura: 1440, saida: 'laudo-carga.webp', x: 545, y: 826, w: 715, h: 422 },
  { origem: 'post-01-DYz_yx9nd0D.jpg', largura: 1440, saida: 'metodo-2.webp', x: 178, y: 386, w: 1082, h: 862 },
  { origem: 'post-09-DIbtdjvRnHG.jpg', largura: 1152, saida: 'metodo-1.webp', x: 0, y: 480, w: 615, h: 610 },
  { origem: 'post-08-DIouVpkRKlX.jpg', largura: 1152, saida: 'metodo-3.webp', x: 0, y: 255, w: 968, h: 835 },
];

await mkdir(DESTINO_RECORTES, { recursive: true });
console.log('\nRecortes do acervo:');
for (const r of RECORTES) {
  const origem = path.join(ACERVO, r.origem);
  const meta = await sharp(origem).metadata();
  if (meta.width !== r.largura) {
    throw new Error(`${r.origem} tem largura ${meta.width}, esperado ${r.largura}. Refaça as coordenadas do recorte antes de gerar.`);
  }
  const destino = path.join(DESTINO_RECORTES, r.saida);
  await sharp(origem)
    .extract({ left: r.x, top: r.y, width: r.w, height: r.h })
    .webp({ quality: 78 })
    .toFile(destino);
  console.log(`${r.saida}: ${r.w}x${r.h} em (${r.x},${r.y}) de ${r.origem} -> ${kb((await stat(destino)).size)}`);
}

// Confirma que nada além do esperado foi gerado.
const arquivos = await readdir(RAIZ);
console.log(`\n${arquivos.filter((f) => f.endsWith('.webp')).length} arquivos .webp em public/images`);
console.log(`${(await readdir(DESTINO_RECORTES)).filter((f) => f.endsWith('.webp')).length} recortes .webp em public/images/laudo`);
