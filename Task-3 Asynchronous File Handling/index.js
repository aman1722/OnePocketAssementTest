const fs = require('fs');

function countWords(text) {
  const words = text.split(" ");
  const wordCount = words.reduce((count, word) => {
    if (word.trim() !== "") {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
  return wordCount;
}

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    const wordCount = countWords(data);
    console.log('Total word count:', wordCount);
  }
});
