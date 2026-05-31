const fs = require('fs');
const path = require('path');

const base = '/just-plaster';
const dist = path.resolve('dist');
const known = ['/', '/about/', '/contact/', '/privacy/', '/services/', '/blog/'];

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(p));
    else if (p.endsWith('.html')) files.push(p);
  }
  return files;
}

let fixed = 0;
for (const file of walk(dist)) {
  let html = fs.readFileSync(file, 'utf-8');
  let changed = false;

  // Fix canonical URLs still pointing to justplaster.com.au
  if (html.includes('justplaster.com.au')) {
    html = html.replace(/https:\/\/justplaster\.com\.au\/just-plaster\//g, 'https://sylvgira.github.io/just-plaster/');
    changed = true;
  }

  // Prefix internal absolute hrefs with the base path
  for (const p of known) {
    const pattern = `href="${p}`;
    const replacement = `href="${base}${p}`;
    // Only replace if not already prefixed
    const re = new RegExp('href="(?!' + base.replace(/\//g, '\\/') + ')' + p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    html = html.replace(re, replacement);
    if (html.includes(replacement)) changed = true;
  }

  // Fix any relative "just-plaster/" links that lost their leading slash
  html = html.replace(/href="just-plaster\//g, `href="${base}/`);

  if (changed) {
    fs.writeFileSync(file, html);
    fixed++;
  }
}

console.log(`Fixed ${fixed} HTML files for GitHub Pages subpath (${base})`);
