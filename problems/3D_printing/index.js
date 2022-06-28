import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin
});

const lines = [];
const MAX_VALUE = 1_000_000;

const sum = (ink) => ink.reduce((acc, current) => {
  return acc + current;
}, 0);

const solve = (p1, p2, p3) => {
  const ink = [
    Math.min(p1[0], p2[0], p3[0]),
    Math.min(p1[1], p2[1], p3[1]),
    Math.min(p1[2], p2[2], p3[2]),
    Math.min(p1[3], p2[3], p3[3]),
  ];

  for (let i = 0; i < 4; i++) {
    const diff = sum(ink) - MAX_VALUE;

    if (diff <= 0) break;

    ink[i] -= Math.min(ink[i], diff);
  }

  return sum(ink) === MAX_VALUE ? ink.join(' ') : 'IMPOSSIBLE';
};

rl.on('line', line => {
  lines.push(line);
}).on('close', () => {
  const T = Number(lines[0]);

  const getArray = line => line.split(' ').map(Number);

  for (let t = 0; t < T; t++) {
    const printers = [];

    for (let i = 0; i < 3; i++) {
      printers.push(getArray(lines[1 + 3 * t + i]));
    }

    console.log(`Case #${t + 1}: ${solve(...printers)}`);
  }
});