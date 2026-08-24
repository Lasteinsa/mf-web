const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = [
  { from: /\btext-white\b/g, to: 'text-slate-900' },
  { from: /\btext-slate-400\b/g, to: 'text-slate-600' },
  { from: /\btext-slate-300\b/g, to: 'text-slate-700' },
  { from: /\bbg-white\/5\b/g, to: 'bg-slate-900/5' },
  { from: /\bbg-white\/10\b/g, to: 'bg-slate-900/10' },
  { from: /\bbg-white\/15\b/g, to: 'bg-slate-900/15' },
  { from: /\bbg-white\/20\b/g, to: 'bg-slate-900/20' },
  { from: /\bbg-white\/30\b/g, to: 'bg-slate-900/30' },
  { from: /\bhower:bg-white\/10\b/g, to: 'hover:bg-slate-900/10' },
  { from: /\bborder-white\/10\b/g, to: 'border-slate-900/10' },
  { from: /\bborder-white\/15\b/g, to: 'border-slate-900/15' },
  { from: /\bborder-white\/20\b/g, to: 'border-slate-900/20' },
  { from: /\bborder-white\/30\b/g, to: 'border-slate-900/30' },
  { from: /\bbg-neutral-900\/80\b/g, to: 'bg-white/80' },
  { from: /\bhover:bg-neutral-800\/80\b/g, to: 'hover:bg-slate-100/80' },
  { from: /\bbg-\[\#0a0a0a\]\/70\b/g, to: 'bg-white/70' },
  { from: /\bbg-\[\#0a0a0a\]\/90\b/g, to: 'bg-white/90' },
  { from: /\bbg-\[\#0a0a0a\]\b/g, to: 'bg-white' },
  { from: /\bbg-black\b/g, to: 'bg-slate-50' },
  { from: /\bshadow-white\/20\b/g, to: 'shadow-slate-900/10' },
  { from: /\bfrom-blue-500\/10\b/g, to: 'from-blue-500/20' },
  { from: /\bto-purple-500\/10\b/g, to: 'to-purple-500/20' },
  { from: /\bfrom-indigo-500\/10\b/g, to: 'from-indigo-500/20' },
  { from: /\btext-black\b/g, to: 'text-white' },
  { from: /\btext-neutral-500\b/g, to: 'text-neutral-500' }, // Just to keep it explicit if needed
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      replacements.forEach(rep => {
        content = content.replace(rep.from, rep.to);
      });
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    }
  });
}

processDirectory(directoryPath);
console.log('Migration complete.');
