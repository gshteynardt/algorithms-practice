const readline = require('readline');

const isValid = (s) => {
  if (!s.length) return true;
  const stack = [];

  for (let ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else {
      const topElement = stack.pop();

      switch (ch) {
        case ')':
          if (topElement !== '(') return false;
          break;
        case '}':
          if (topElement !== '{') return false;
          break;
        case ']':
          if (topElement !== '[') return false;
          break;
        default: return false;
      }
    }
  }

  return stack.length === 0;
};

const rl = readline.createInterface({
  input: process.stdin
});

let N = undefined;

rl.on('line', line => {
  N = Number(line);
}).on('close', () => {
  const a = Array(N * 2).fill(null);
  const generateParentheses = (a, index) => {
    if (index === a.length) {
      const s = a.join('');

      if (isValid(s)) {
        console.log(s);
      };

      return;
    }

    a[index] = '(';
    generateParentheses(a, index + 1);
    a[index] = ')';
    generateParentheses(a, index + 1);
    a[index] = null;
  };

  generateParentheses(a, 0);
});
