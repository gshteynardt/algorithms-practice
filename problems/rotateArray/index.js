const next = (i, k, n) => {
  return (i + k) % n;
};

var rotate = function(nums, k) {
  const n = nums.length;
  k %= n;
  let count = 0;
  
  for(let start = 0; count < nums.length; start++) {
    let prev = nums[start];
    let current = start;

    do {
      const nexIndex = next(current, k, n);
      const temp = nums[nexIndex];
      nums[nexIndex] = prev;
      prev = temp;
      current = nexIndex;
      count++
    } while (start !== current);
  }
};

const nums = [1,2,3,4,5,6,7];
const k = 3;

rotate(nums, k);