import { readFile } from 'fs';

const binarySearch = (a, expectedValue) => {
  let left = 0;
  let right = a.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (a[middle] < expectedValue) {
      left = middle + 1;
    } else if (expectedValue < a[middle]) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

readFile('numbers.txt', 'utf8', function (err, data) {
  if (err) throw err.message;

  const arr = data.trim().split(' ').map(Number).sort((a, b) => a - b);

  const start = Date.now();
  const result = binarySearch(arr, 138231);
  const bench = Date.now() - start;

  console.log('bench', bench, '\n');
  console.log('result', result);
});