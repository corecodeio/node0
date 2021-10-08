const path = require('path');

// separator
const sep = path.sep;
console.log(sep);

// join 
const filePath = path.join(sep, 'files\\', 'test', 'example.txt');
console.log(filePath);

// basename
console.log(path.basename(filePath));

// resolve
// relativo: \files\test\example.txt
// absoluto: C:\user\yosef\Node\ecoub\enode0\02path.js
const absolute = path.resolve(__dirname, 'files', 'test', 'example.txt');
console.log(absolute);
