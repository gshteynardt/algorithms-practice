const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

let n = undefined;

rl.on('line', line => {
  n = Number(line);
}).on('close', () => {

  const build = (open, close, s) => {
    if (close === n) {
      console.log(s);
      return;
    }

    if (open < n) {
      build(open + 1, close, s + '(');
    }

    if (close < open) {
      build(open, close + 1, s + ')');
    }
  };

  build(0, 0, '');
});