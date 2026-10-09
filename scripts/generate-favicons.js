const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const svgBuffer = fs.readFileSync(path.join(rootDir, 'public', 'app-icon.svg'));

async function generateFavicons() {
  console.log('Generating favicons from app-icon.svg...');

  // 1. 32x32 icon.png for App router
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(rootDir, 'app', 'icon.png'));
  console.log('Created app/icon.png (32x32)');

  // 2. 180x180 apple-icon.png for iOS
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(rootDir, 'app', 'apple-icon.png'));
  console.log('Created app/apple-icon.png (180x180)');

  // 3. 512x512 app-icon.png for PWA / Manifest / Download CTA
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(rootDir, 'public', 'app-icon.png'));
  console.log('Created public/app-icon.png (512x512)');

  // 4. public/favicon.ico (32x32)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(rootDir, 'public', 'favicon.ico'));
  console.log('Created public/favicon.ico (32x32)');

  // 5. Copy vector svg favicon
  fs.copyFileSync(
    path.join(rootDir, 'public', 'app-icon.svg'),
    path.join(rootDir, 'public', 'favicon.svg')
  );
  console.log('Created public/favicon.svg');
}

generateFavicons()
  .then(() => console.log('Favicons generated successfully!'))
  .catch((err) => {
    console.error('Error generating favicons:', err);
    process.exit(1);
  });
