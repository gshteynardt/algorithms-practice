const getMaxSubSum = (nums) => {
  let maxNum = 0;
  let tempSum = 0;

  for(let num of nums) {
    tempSum += num;
    maxNum = Math.max(maxNum, tempSum);

    if(tempSum < 0) {
      tempSum = 0;
    }
  }

  return maxNum;
};
