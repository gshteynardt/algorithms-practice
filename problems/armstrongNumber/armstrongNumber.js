const getSumOfDigits = (n, k) => {
  let result = 0;
  let tempNum = n;

  while(tempNum !== 0) {
    result = result + Math.pow(tempNum % 10, k);
    tempNum = Math.trunc(tempNum / 10);
  }

  return result;
};

const isArmstrong = (n) => {
  if(n < 10) return true;

  const sumOfDigids = getSumOfDigits(n, String(n).length);

  return sumOfDigids === n;
};
