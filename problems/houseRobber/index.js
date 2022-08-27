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
const rob = (nums) => {
  const memo = [];

  const dp = (i) => {
    if(i === 0) return nums[0];
    if(i === 1) return Math.max(nums[0], nums[1]);

    if(memo[i] === undefined) {
      memo[i] = Math.max(dp(i - 1), dp(i - 2) + nums[i]);
    }

    return memo[i];
  };

  return dp(nums.length - 1);
};