//Fibonacci Number
// var climbStairs = function(n) {
//   if(n === 1) return n;

//   let first = 1;
//   let second = 2;

//   for(let i = 3; i <= n; i++) {
//     const third = first + second;
//     first = second;
//     second = third;
//   }

//   return second;
// };
//runtime: 86ms, memory usage: 41,8 faster than 50.60%

//Fibonacci Number Brute Force
// var climbStairs = function(n) {
//   if(n <= 2) return n;

//   return climbStairs(n - 1) + climbStairs(n - 2);
// };
//Time Limit Exceeded

// Brute Force
// var climbStairs = function(n) {  
//   const climb = (i, n) => {
//     if (i > n) {
//       return 0;
//     }

//     if(i === n) {
//       return 1;
//     }

//     return climb(i + 1, n) + climb(i + 2, n);
//   };

//   return climb(0, n);
// };
//Time Limit Exceeded

//DP top-down
// var climbStairs = function(n, memo = []) {
//   if(n === 1) return 1;
//   if(n === 2) return 2;

//   if(memo[n] === undefined) {
//     memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//   }

//   return memo[n];
// };

//DP bottom-up
var climbStairs = function(n) {
  if(n === 1) return n;

  const dp = [];
  dp[1] = 1;
  dp[2] = 2;

  for(let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
