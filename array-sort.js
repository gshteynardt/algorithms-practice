const fs = require('fs');

fs.readFile('numbers.txt', 'utf8', function (err, data) {
  if (err) throw err.message;

  const arr = data.trim().split(' ').map(Number);

  const start = Date.now();

  arr.sort((a, b) => a - b);

  const bench = Date.now() - start;

  console.log(`${bench} ms`);
  console.log(arr.join(' '));
});
