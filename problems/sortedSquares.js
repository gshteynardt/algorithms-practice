var sortedSquares = function (nums) {
  const n = nums.length;
  let left = 0;
  let right = nums.length - 1;
  const result = [];

  for (let i = n -1; i >= 0; i--) {
    let square = 0;

    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      square = nums[right];
      right--;
    } else {
      square = nums[left];
      left++;
    }

    result[i] = square * square;
  }

  return result;
};

console.log(sortedSquares([-4,-1,0,3,10]));