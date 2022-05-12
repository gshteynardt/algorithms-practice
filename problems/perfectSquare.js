const isPerfectSquare = (num) => {
  if(num < 2) return true;

  let left = 2;
  let right = num / 2;
  let x;
  let guessSquared;

  while (left <= right) {
    x = Math.floor(left + (right - left) / 2);
    guessSquared = x * x;

    if (num === guessSquared) {
      return true;
    }

    if (guessSquared > num) {
      right = x - 1;
    } else {
      left = x + 1;
    }
  }

  return false;
};

isPerfectSquare(121);