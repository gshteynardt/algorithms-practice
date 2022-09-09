import cacheDecorator from '../helpers/cacheDecorator.js';
const nums = [1, 1, 1];

// var deleteAndEarn = (nums) => {
//   const points = {};
//   let maxNum = 0;

//   for (const num of nums) {
//     points[num] = (points[num] || 0) + 1;
//     maxNum = Math.max(maxNum, num);
//   }

//   const maxPoints = cacheDecorator((num) => {
//     if (num <= 0) return 0;
//     if (num === 1) return (points[num] ?? 0);

//     return Math.max(maxPoints(num - 1), maxPoints(num - 2) + (points[num] ?? 0) * num);
//   });

//   return maxPoints(maxNum);
// };

var deleteAndEarn = (nums) => {
  const points = {};
  let maxNum = 0;

  for (const num of nums) {
    points[num] = (points[num] || 0) + 1;
    maxNum = Math.max(maxNum, num);
  }

  const dp = [0];
  dp[1] = (points[1] ?? 0);

  for(let i = 2; i <= maxNum; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + (points[i] ?? 0) * i);
  }

  return dp[maxNum];
};

console.log(deleteAndEarn(nums));
