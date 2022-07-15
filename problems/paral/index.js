// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin
// });

import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin
});

let n = undefined;
let arr = [];

rl.on('line', line => {
  if (!n) {
    n = Number(line);
    return;
  }

  if (n) {
    const points = line.split(' ').map(Number);
    const coord = [];

    for (let i = 1; i < points.length; i++) {
      const point = { x: Number(points[i - 1]), y: Number(points[i]) };
      coord.push(point);
      i++;
    }

    arr.push(coord);

    n--;
    return;
  }
}).on('close', () => {

  const isSegmentsParallel = ([a, b, c, d]) => {
    const k1 = (b.y - a.y) * (d.x - c.x) - (d.y - c.y) * (b.x - a.x) === 0;
    const l1 = (b.y - a.y) ** 2 + (b.x - a.x) ** 2 === (d.y - c.y) ** 2 + (d.x - c.x) ** 2;

    const k2 = (c.y - a.y) * (d.x - b.x) - (d.y - b.y) * (c.x - a.x) === 0;
    const l2 = ((c.y - a.y) ** 2 + (c.x - a.x) ** 2) === (d.y - b.y) ** 2 + (d.x - b.x) ** 2;

    const k3 = (c.y - b.y) * (d.x - a.x) - (d.y - a.y) * (c.x - b.x) === 0;
    const l3 = ((c.y - b.y) ** 2 + (c.x - b.x) ** 2) === (d.y - a.y) ** 2 + (d.x - a.x) ** 2;
    
    return (k1 && l1 && k2 && l2) || ( k1 && l1 && k3 && l3) || ( k2 && l2 && k3 && l3);
  };

  arr.forEach(line => console.log(isSegmentsParallel(line) ? 'YES' : 'NO'));
});