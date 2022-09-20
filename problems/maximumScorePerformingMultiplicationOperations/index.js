import cacheDecorator from '../helpers/cacheDecorator.js';

  // const dp = (i, left) => {
  //   const n = nums.length;

  //   if(i === multipliers.length) {
  //     return 0;
  //   }

  //   if(memo[i][left] !== undefined) {
  //     return memo[i][left];
  //   }

  //   const l = nums[left] * multipliers[i] + dp(i + 1, left + 1);
  //   const r = nums[n - 1 - (i - left)] * multipliers[i] + dp(i + 1, left);
  //   memo[i][left] = Math.max(l, r);

  //   return memo[i][left];
  // };

const nums = [1, 2, 3];
const multipliers = [3, 2, 1];

var maximumScore = function (nums, multipliers) {
  const n = nums.length;

  const dp = cacheDecorator((i, left) => {
    if (i === multipliers.length) {
      return 0;
    }

    const l = nums[left] * multipliers[i] + dp(i + 1, left + 1);
    const r = nums[n - 1 - (i - left)] * multipliers[i] + dp(i + 1, left);

    return Math.max(l, r);
  });

  return dp(0, 0);
};

console.log(maximumScore(nums, multipliers));
