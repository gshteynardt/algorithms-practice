var removeElement = function (nums, val) {
  let i = 0;
  let r = nums.length;

  while(i < r) {
    if(nums[i] === val) {
      nums[i] = nums[r - 1];
      r--;
    } else {
      i++
    }
  }

  return r;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

console.log('result', removeElement(nums, val));
console.log({ nums });