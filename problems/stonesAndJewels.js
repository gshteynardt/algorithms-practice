const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [J, S] = lines;
  
  const hashMap = {};

  for(let i = 0; i < J.length; i++) {
    hashMap[J[i]] = 0;
  }

  for(let j = 0; j < S.length; j++) {
    if(S[j] in hashMap) {
      hashMap[S[j]]++;
    }
  }

  console.log(Object.values(hashMap).reduce((acc, num) => acc + num, 0));
});