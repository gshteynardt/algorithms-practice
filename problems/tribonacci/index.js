import cacheDecorator from '../helpers/cacheDecorator';

var tribonacci = cacheDecorator((n) => {
  if (n < 2) return n;
  if (n === 2) return 1;
  if (n === 3) return 2;

  return 2 * tribonacci(n - 1) - tribonacci(n - 4);
});

console.log(tribonacci(25));
