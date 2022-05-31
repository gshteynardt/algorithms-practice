const countDigits = (num) => {
  let count = 0;

  while (num >= 1) {
    num = Math.trunc(num / 10);
    count++;
  }

  return count;
}

var findNumbers = function (nums) {
  let result = 0;

  for (let num of nums) {
    const value = countDigits(num);

    if (value % 2 === 0) {
      result++;
    }
  }

  return result;
};

console.log(findNumbers([12,345,2,6,7896]));