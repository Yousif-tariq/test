// Node.js Build Script for Vercel Deployment
// Ensures all static assets, HTML files, styles, and bundles exist both at root and in dist/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function build() {
  console.log('🚀 Starting build process for Vercel...');

  const distDir = path.join(__dirname, 'dist');
  fs.mkdirSync(distDir, { recursive: true });

  // Files to copy into dist/
  const filesToCopy = [
    'index.html',
    'admin.html',
    '404.html',
    '500.html',
    'robots.txt',
    'sitemap.xml',
    'health.json',
    'vercel.json'
  ];

  for (const file of filesToCopy) {
    const src = path.join(__dirname, file);
    const dest = path.join(distDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`  ✓ Copied ${file} -> dist/${file}`);
    }
  }

  // Folders to copy into dist/
  const foldersToCopy = ['img', 'src'];
  for (const folder of foldersToCopy) {
    const src = path.join(__dirname, folder);
    const dest = path.join(distDir, folder);
    if (fs.existsSync(src)) {
      copyDirSync(src, dest);
      console.log(`  ✓ Synced folder ${folder} -> dist/${folder}`);
    }
  }

  // Make sure dist/dist has the bundles if referenced relatively
  const nestedDist = path.join(distDir, 'dist');
  fs.mkdirSync(nestedDist, { recursive: true });
  if (fs.existsSync(path.join(distDir, 'bundle.js'))) {
    fs.copyFileSync(path.join(distDir, 'bundle.js'), path.join(nestedDist, 'bundle.js'));
  }
  if (fs.existsSync(path.join(distDir, 'adminBundle.js'))) {
    fs.copyFileSync(path.join(distDir, 'adminBundle.js'), path.join(nestedDist, 'adminBundle.js'));
  }

  console.log('✅ Build completed successfully! All assets prepared for Vercel.');
}

build();
