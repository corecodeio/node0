const fs = require('fs');
const path = require('path');

const filePath = path.join('.', path.sep, 'files', 'test', 'example.txt');
const otherFilePath = path.join('.', path.sep, 'files', 'test', 'otherExample.txt');

const content = fs.readFileSync(filePath, 'utf8');

console.log(content);

fs.writeFileSync(filePath, ' bien gracias 🍕', { flag: 'a' });

// ....

fs.writeFileSync(otherFilePath, 'Creating file...  🔕', { flag: 'a' });
