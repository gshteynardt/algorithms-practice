// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin
// });

import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin
});

let current = undefined;
let isFirstLine = true;
const result = [];

rl.on('line', (line) => {
  if(isFirstLine) {
    isFirstLine = false;
    return;
  }

  if(current !== line) {
    result.push(line);
    current = line;
  }
}).on('close', () => {
  console.log(result.join('\n'));
});