import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin
});

let str = undefined;

rl.on('line', line => {
  if(!str) str = line;
}).on('close', () => {
  const tempCharArr = [];
  const result = [];

  for(let i = 0; i < str.length; i++) {
    if(str[i] !== ' ') {
      tempCharArr.push(str[i]);
    } else {
      result.push(tempCharArr.reverse().join(''));
      tempCharArr.length = 0;
    }
  }

  result.push(tempCharArr.reverse().join(''));
  console.log(result.join(' '));
});
