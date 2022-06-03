import { readFile } from 'fs';

readFile('numbers.txt', 'utf8', function (err, data) {
  if (err) throw err.message;

  const arr = data.trim().split(' ').map(Number).sort((a, b) => a - b);

  const start = Date.now();
  const result = arr.indexOf(138231);
  const bench = Date.now() - start;


  console.log('result', result);
  console.log('bench', bench);
});
