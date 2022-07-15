const nums = [0,1,0,3,12];

var moveZeroes = function(nums) {
  let nonZeroIndex = 0;

  // for(let i = 0; i < nums.length; i++) {
  //   if(nums[i] !== 0) {
  //     nums[nonZeroIndex++] = nums[i];
  //   }
  // }

  // for(let j = nonZeroIndex; j < nums.length; j++) {
  //   nums[nonZeroIndex++] = 0;
  // }

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      const tempNum = nums[nonZeroIndex];
      nums[nonZeroIndex++] = nums[i];
      nums[i] = tempNum;
    }
  }
};

console.log(moveZeroes(nums));
console.log(nums);