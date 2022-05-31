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

console.log(isValid("()[]{}"));