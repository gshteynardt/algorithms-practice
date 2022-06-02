// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin
// });

import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin
});

let a = undefined;
let b = undefined;
let isFirstLine = true;
let table = Array.from({ length: 26 }, i => 0);

const codeA = 'a'.charCodeAt(0);

rl.on('line', (line) => {
  if (isFirstLine) {
    isFirstLine = false;
    a = line;
  } else {
    b = line;
  }

}).on('close', () => {
  if(a.length !== b.length) return console.log(0);

  for (let i of a) {
    table[i.charCodeAt(0) - codeA]++;
  }

  for (let j of b) {
    const index = j.charCodeAt(0) - codeA;
    table[index]--;

    if(table[index] < 0) {
      return console.log(0);
    }
  }

  return console.log(1);
});