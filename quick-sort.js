const fs = require('fs');

const quickSort = (arr, left, right) => {
  const pivot = arr[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  do {
    while (arr[i] < pivot) {
      i++;
    }

    while (pivot < arr[j]) {
      j--;
    }

    if (i <= j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  } while (i <= j);

  if (i < right) quickSort(arr, i, right);
  if (left < j) quickSort(arr, left, j);
};

fs.readFile('numbers.txt', 'utf8', function (err, data) {
  if (err) throw err.message;

  const arr = data.trim().split(' ').map(Number);

  const start = Date.now();

  quickSort(arr, 0, arr.length - 1);

  const bench = Date.now() - start;

  console.log(`${bench} ms`);
  console.log(arr.join(' '));
});