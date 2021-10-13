const fs = require('fs');
const path = require('path');

const filePath = path.join('.', path.sep, 'files', 'test', 'example.txt');
const yetAnotherFilePath = path.join('.', path.sep, 'files', 'test', 'yetAnotherExample.txt');

console.log('Firts');

fs.readFile(filePath, 'utf8', (err, data) => {
  if(err) return console.log(error);
  console.log(data);
});

console.log('?????');

fs.writeFile(yetAnotherFilePath, 'This file is new 🍟', (err, result) => {
  if(err) return console.log(error);
  console.log('The file was created');
});

console.log('!!!!!!');