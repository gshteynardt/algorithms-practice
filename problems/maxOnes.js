const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let count = 0;
let maxCount = 0
let isFirstLine = true;

rl.on('line', (line) => {

  if (isFirstLine) {
    isFirstLine = false;
    return;
  };

  const num = Number(line.trim());

  if (num === 1) {
    count++;
  } else {
    maxCount = Math.max(count, maxCount);
    count = 0;
  }

}).on('close', () => {
  console.log(Math.max(count, maxCount));
});