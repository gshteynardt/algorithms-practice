import { readFile } from 'fs';

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

readFile('numbers.txt', 'utf8', function (err, data) {
  if (err) throw err.message;

  const arr = data.trim().split(' ').map(Number);
  const resultOption = [];

  for (let n = 500_000; n <= 10_000_000; n += 500_000) {
    const newArr = arr.slice(0, n + 1);

    const start = Date.now();
    quickSort(newArr, 0, newArr.length - 1);
    const bench = Date.now() - start;

    resultOption.push({ n, bench, length: newArr.length });
  }


  const numbers = resultOption.map(({ n }) => n);
  const benchs = resultOption.map(({ _, bench }) => bench);
  const arrLengths = resultOption.map(({ length}) => length);

  console.log(numbers.join('\n'));
  console.log(benchs.join('\n'));
  console.log(arrLengths.join('\n'));
});