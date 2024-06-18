const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const filePath = join(__dirname, './words.txt');
const fileContent = readFileSync(filePath, 'utf-8');


const wordList = fileContent.split('\n')
  .map(word => word.trim().toUpperCase())
  .filter(word => word.length === 5);

if (wordList.length === 0) {
  throw new Error('No se encontraron palabras de 5 caracteres en el archivo');
}

console.log('Word list loaded:', wordList.length, 'words');
console.log('First 10 words:', wordList);
const getRandomWord = () => {
  return wordList[Math.floor(Math.random() * wordList.length)];
};

const saveWordList = () => {
  const outputFilePath = join(__dirname, 'filteredWords.ts');

  const content = `const filteredWords = () => [\n  '${wordList.join("',\n  '")}'\n];\nexport default filteredWords;\n`;

  writeFileSync(outputFilePath, content, 'utf-8');

  console.log(`Archivo ${outputFilePath} creado con éxito.`);
};

module.exports = saveWordList;
module.exports = getRandomWord;
saveWordList();