//bottom-up
// const rob = (nums) => {
//   if(nums.length === 1) return nums[0];

//   const dp = [];
//   dp[0] = nums[0];
//   dp[1] = Math.max(dp[0], dp[1]);

//   for(let i = 2; i < nums.length; i++) {
//     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
//   }

//   return dp[nums.length - 1];
// };

//top-down
// const rob = (nums) => {
//   const memo = [];

//   const dp = (i) => {
//     if (i === 0) return nums[0];
//     if (i === 1) return Math.max(nums[0], nums[1]);

//     if (memo[i] === undefined) {
//       memo[i] = Math.max(dp(i - 1), dp(i - 2) + nums[i]);
//     }

//     return memo[i];
//   };

//   return dp(nums.length - 1);
// };

const nums = [114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223, 58, 170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187, 69, 129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240];

const cachingDecorator = (func) => {
  const cache = new Map();

  return function (i) {
    if (!cache.has(i)) {
      const result = func(i);
      cache.set(i, result);
    }

    return cache.get(i);
  }
};

const rob = (nums) => {
  const dp = (i) => {
    if (i === 0) return nums[0];
    if (i === 1) return Math.max(nums[0], nums[1]);

    return Math.max(dp(i - 1), dp(i - 2) + nums[i]);
  };

  const cachingDP = cachingDecorator(dp);
  return cachingDP(nums.length - 1);
};

console.log(rob(nums));
