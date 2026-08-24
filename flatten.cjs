const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const classRegexes = [
  // Remove shadows
  /\bshadow-(sm|md|lg|xl|2xl|inner|none)\b/g,
  /\bhover:shadow-(sm|md|lg|xl|2xl|none)\b/g,
  /\bshadow-slate-[a-zA-Z0-9/-]+\b/g,
  /\bhover:shadow-slate-[a-zA-Z0-9/-]+\b/g,
  /\bshadow-white\/[0-9]+\b/g,
  /\bhover:shadow-white\/[0-9]+\b/g,
  // base shadow class
  /(?<=[\s"'])shadow(?=[\s"'])/g,
  /(?<=[\s"'])hover:shadow(?=[\s"'])/g,

  // Borders
  /(?<=[\s"'])border(?=[\s"'])/g,
  /\bhover:border-[a-zA-Z0-9/-]+\b/g,
  /\bborder-[0-9]+\b/g,
  /\bborder-slate-[a-zA-Z0-9/-]+\b/g,
  /\bborder-white\/[0-9]+\b/g,
  /\bborder-orange-[a-zA-Z0-9/-]+\b/g,
  /\bborder-amber-[a-zA-Z0-9/-]+\b/g,
  /\bborder-red-[a-zA-Z0-9/-]+\b/g,
  /\bborder-indigo-[a-zA-Z0-9/-]+\b/g,
  /\bborder-\[.*?\]\b/g,
  /\bborder-[tblrxy](-[0-9]+)?\b/g,
  /\bborder-transparent\b/g,
  
  // Remove ring as well if we want flat design, ring is often used for borders
  /\bring-[a-zA-Z0-9/-]+\b/g,
  /\bhover:ring-[a-zA-Z0-9/-]+\b/g,
  /(?<=[\s"'])ring(?=[\s"'])/g,
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
      
      classRegexes.forEach(regex => {
        content = content.replace(regex, ' ');
      });
      
      content = content.replace(/ +/g, ' ').replace(/" /g, '"').replace(/ "/g, '"').replace(/' /g, "'").replace(/ '/g, "'");
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    }
  });
}

processDirectory(directoryPath);
console.log('Flattening complete.');
