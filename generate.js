const N = 50_000_000;
const MIN = -500_000;
const MAX = 500_000;

const getRandomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

for(let i = 0; i < N; i++) {
  process.stdout.write(`${getRandomInteger(MIN, MAX)} `);
}
