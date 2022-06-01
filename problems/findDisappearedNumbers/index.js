const arr = [1,1];

var findDisappearedNumbers = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const newIndex = Math.abs(nums[i]) - 1;

    if(nums[newIndex] > 0) {
      nums[newIndex] *= -1;
    }
  }

  const result = [];

  for(let j = 0; j < nums.length; j++) {
    if(nums[j] > 0) {
      result.push(j + 1);
    }
  }

  return result;
};
