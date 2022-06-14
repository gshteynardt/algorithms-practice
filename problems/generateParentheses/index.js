const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

let N = undefined;

rl.on('line', line => {
  N = Number(line);
}).on('close', () => {
  const a = Array(N * 2).fill(null);

  const generateParentheses = (open, close, index) => {
    if (index === a.length) {
      console.log(a.join(''));
      return;
    }

    if(open < N) {
      a[index] = '(';
      generateParentheses(open + 1, close, index + 1);
    }

    if(close < open) {
      a[index] = ')';
      generateParentheses(open, close + 1, index + 1);
    }
  };

  generateParentheses(0, 0, 0);
});
