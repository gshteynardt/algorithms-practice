import { readFile } from 'fs';

import MinBinaryHeap from './binaryHeap/minBinaryHeap.js';

readFile('numbers.txt', 'utf8', function (err, data) {
  if (err) throw err.message;
  const arr = data.trim().split(' ').map(Number);

  const heap = new MinBinaryHeap(10);

  for (let num of arr) {
    heap.insert(num);
  }

  console.log(heap.getValues());
});
