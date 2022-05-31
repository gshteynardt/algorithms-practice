const { readFileSync, writeFileSync } = require('fs');

const getArgs = () => {
  let str = '';

  try {
    str = readFileSync('input.txt', 'utf8');
  } catch (err) {
    console.log(err);
  }

  return str;
};

const getArr = str => str.trim().split(' ').map(Number);

const [a, b] = getArr(getArgs());

const result = a + b;

writeFileSync('output.txt', `${result}`);
