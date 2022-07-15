import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin
});

const MAX_VALUE = Number.MAX_SAFE_INTEGER;

//кол-во городов
let n = undefined;
//координаты городов
const a = [];
//максимальное расстояние
let k = undefined;
//start
let start = undefined;
//finish
let finish = undefined;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  dist(p) {
    return Math.abs(this.x - p.x) + Math.abs(this.y - p.y);
  }
}

const getInitArr = () => {
  return Array.from(Array(a.length).keys());
};

rl.on('line', line => {
  if (n === undefined) {
    n = Number(line);
    return;
  }

  if (n > 0) {
    const [x, y] = line.split(' ').map(Number);

    const point = new Point(x, y);
    a.push(point);
    n--;
    return;
  }

  if (!k) {
    k = Number(line);
    return;
  }

  const [s, f] = line.split(' ').map(Number);

  start = s - 1;
  finish = f - 1;
}).on('close', () => {
  const Q = getInitArr();
  const d = getInitArr().map(i => i === start ? 0 : MAX_VALUE);

  const extractMin = () => {
    let minValue = MAX_VALUE;
    let index = undefined;
    let result = undefined;

    for (let i = 0; i < Q.length; i++) {
      const elem = Q[i];

      if (minValue > d[elem] && d[elem] !== MAX_VALUE) {
        minValue = d[elem];
        index = i;
        result = Q[i];
      }
    }

    if (index !== undefined) {
      Q.splice(index, 1);
    }

    return result !== undefined ? result : -1;
  };

  while (Q.length) {
    const u = extractMin();

    if (u === -1) {
      console.log(u);
      return;
    }

    const point = a[u];

    for (let v of Q) {
      if (point.dist(a[v]) <= k) {
        if (d[v] > d[u] + 1) {
          d[v] = d[u] + 1;
        }
      }
    }

    if (u === finish) {
      console.log(d[finish]);
    }
  }
});
