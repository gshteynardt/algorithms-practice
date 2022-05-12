const fs = require('fs');

fs.readFile('numbers.txt', 'utf-8', (err, data) => {
  if (err) consola.log(err);

  const arr = data.trim().split(' ').map(Number);
  console.log(`count elements = ${arr.length}`);
  
  const start = Date.now();
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSorted = false;
      }
    }
  }

  const bench = Date.now() - start;
  console.log(`${bench} ms`);
  console.log(arr.join(' '));
});