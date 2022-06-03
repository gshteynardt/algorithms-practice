import { readFile } from 'fs';

readFile('numbers.txt', 'utf8', function (err, data) {
  if (err) throw err.message;

  const arr = data.trim().split(' ').map(Number);
  const resultOption = [];

  for (let n = 500_000; n <= 10_000_000; n += 500_000) {
    const newArr = arr.slice(0, n + 1);

    const start = Date.now();
    arr.sort((a, b) => a - b);
    const bench = Date.now() - start;

    resultOption.push({ n, bench, length: newArr.length });
  }


  const numbers = resultOption.map(({ n }) => n);
  const benchs = resultOption.map(({ _, bench }) => bench);
  const arrLengths = resultOption.map(({ length }) => length);

  console.log(numbers.join('\n'));
  console.log(benchs.join('\n'));
  console.log(arrLengths.join('\n'));
});
