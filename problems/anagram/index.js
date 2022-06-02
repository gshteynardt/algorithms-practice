// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin
// });

import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin
});

const sorted = (str) => {
  return str.split('').sort().join();
};

let a = undefined;
let b = undefined;
let isFirstLine = true;

rl.on('line', (line) => {
  if (isFirstLine) {
    isFirstLine = false;
    a = line;
  } else {
    b = line;
  }

}).on('close', () => {
  const result = sorted(a) === sorted(b) ? 1 : 0;

  console.log(result);
});