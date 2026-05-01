const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

// Caminho absoluto da sua pasta principal
const BASE_DIR = 'C:\\Users\\Usuario\\Desktop\\AHeiss_GoogleDrive\\02-Programacao\\projetos-IA\\simonclimatiza\\public\\images\\academia\\hvac-instalacao';

// Função para varrer pastas e subpastas (Recursão)
function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function processPptxFiles() {
    console.log('🤖 Iniciando extração ninja dos slides...\n');

    walkDir(BASE_DIR, (filePath) => {
        // Se encontrar um arquivo .pptx, ele entra em ação
        if (path.extname(filePath).toLowerCase() === '.pptx') {
            const folderPath = path.dirname(filePath);
            console.log(`[+] Processando: ${path.basename(filePath)} na pasta ${path.basename(folderPath)}`);

            try {
                const zip = new AdmZip(filePath);
                const zipEntries = zip.getEntries();

                // Filtra apenas os arquivos que estão dentro de ppt/media (onde ficam as imagens)
                const images = zipEntries.filter(entry =>
                    entry.entryName.startsWith('ppt/media/image')
                );

                if (images.length === 0) {
                    console.log(`    ⚠️ Nenhuma imagem encontrada neste arquivo.\n`);
                    return;
                }

                // O PPTX nomeia como image1.jpeg, image10.jpeg. Precisamos ordenar numericamente!
                images.sort((a, b) => {
                    const numA = parseInt(a.entryName.match(/\d+/)[0]);
                    const numB = parseInt(b.entryName.match(/\d+/)[0]);
                    return numA - numB;
                });

                // Extrai e renomeia cada imagem
                images.forEach((entry, index) => {
                    // Cria o formato 01, 02, 03...
                    const slideNumber = String(index + 1).padStart(2, '0');

                    // Pega a extensão original do PPTX (.jpeg, .png, etc)
                    const ext = path.extname(entry.entryName);

                    const newName = `slide${slideNumber}${ext}`;
                    const targetPath = path.join(folderPath, newName);

                    // Salva a imagem na mesma pasta do arquivo .pptx
                    const content = entry.getData();
                    fs.writeFileSync(targetPath, content);
                });

                console.log(`    ✅ ${images.length} slides extraídos e renomeados com sucesso!\n`);

            } catch (error) {
                console.error(`    ❌ Erro ao processar ${filePath}:`, error.message);
            }
        }
    });

    console.log('🎉 Todas as pastas foram varridas! O trabalho braçal foi aniquilado.');
}

// Executa a máquina
processPptxFiles();