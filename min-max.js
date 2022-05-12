const fs = require('fs');

fs.readFile('numbers.txt', 'utf-8', (err, data) => {
  if (err) consola.log(err);

  const arr = data.trim().split(' ').map(Number);

  let minValue = arr[0];
  let maxValue = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }

    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  console.log({ minValue }, { maxValue });
});