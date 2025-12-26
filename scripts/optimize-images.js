const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dirs = [
  'public/assets/images',
  'public/assets/brand',
  'public/teams'
];

async function convertImages() {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const inputPath = path.join(dir, file);
        const outputPath = path.join(dir, file.replace(/\.(png|jpg|jpeg)$/, '.webp'));
        
        console.log(`Converting ${inputPath} to ${outputPath}`);
        
        try {
          await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
          console.log(`Successfully converted ${file}`);
        } catch (err) {
          console.error(`Error converting ${file}:`, err);
        }
      }
    }
  }
}

convertImages();
