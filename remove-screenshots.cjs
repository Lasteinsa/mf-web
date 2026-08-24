const fs = require('fs');
const path = require('path');

function removeScreenshots(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      removeScreenshots(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove ExpandableImageGroup import
      content = content.replace(/import ExpandableImageGroup.*?\n/g, '');
      
      // Remove ExpandableImageGroup component block entirely
      content = content.replace(/<ExpandableImageGroup>[\s\S]*?<\/ExpandableImageGroup>/g, '');
      
      // Also remove staggered variants if they are now unused
      if (!content.includes('staggerImages') && content.includes('const staggerImages = {')) {
         content = content.replace(/const staggerImages = {[\s\S]*?};\n/g, '');
      }

      fs.writeFileSync(fullPath, content);
    }
  }
}

removeScreenshots(path.join(__dirname, 'src/pages/guide'));
console.log('Removed screenshots from guide pages');
