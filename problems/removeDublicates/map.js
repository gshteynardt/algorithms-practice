const readline = require('readline');
const { writeFileSync } = require('fs');

const rl = readline.createInterface({
    input: process.stdin
});

const lines = [];
let isFirstLine = true;

rl.on('line', (line) => {
  if(isFirstLine) {
    isFirstLine = false;
    return;
  }

  lines.push(line);

}).on('close', () => {
  const set = new Set(lines);

  for(let num of set) {
    console.log(num);
  }
});
