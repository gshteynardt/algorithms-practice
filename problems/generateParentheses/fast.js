const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

let n = undefined;

rl.on('line', line => {
  n = Number(line);
}).on('close', () => {
  var generateParenthesis = function (n) {
    if(!n) return '';

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
    }

    build(1, 0, '(');
  };

  generateParenthesis(n);
});