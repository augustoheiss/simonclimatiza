// Gera versões WebP das fotos do site, ao lado dos originais (que não são alterados).
// Uso: npm run otimizar:imagens
import { readdir, stat } from 'node:fs/promises';
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

// Confirma que nada além do esperado foi gerado.
const arquivos = await readdir(RAIZ);
console.log(`\n${arquivos.filter((f) => f.endsWith('.webp')).length} arquivos .webp em public/images`);
