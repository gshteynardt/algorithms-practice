// var minCostClimbingStairs = function(cost) {
//   const dp = [];
//   dp[0] = cost[0];
//   dp[1] = cost[1];

//   for(let i = 2; i <= cost.length; i++) {
//     dp[i] = Math.min(dp[i - 1], dp[i - 2]) + (i == cost.length ? 0 : cost[i]);
//   }

//   return dp[dp.length - 1];
// };
const cost = [1,100,1,1,1,100,1,1,100,1];

// var minCostClimbingStairs = function (cost) {
//   let prevPrev = cost[0];
//   let prev = cost[1];

//   for (let i = 2; i <= cost.length; i++) {
//     const step = Math.min(prevPrev, prev) + (i == cost.length ? 0 : cost[i]);
//     const temp = prev;
//     prev = step;
//     prevPrev = temp;
//   }

//   return Math.min(prev, prevPrev);
// };

var minCostClimbingStairs = function (cost) {
  const length = cost.length - 1;
  let prevPrev = cost[length];
  let prev = cost[length - 1];

  for (let i = length - 2; i >= 0; i--) {
    const step = Math.min(prevPrev, prev) + cost[i];

    const temp = prev;
    prev = step;
    prevPrev = temp;
  }

  return Math.min(prev, prevPrev);
};

// var minCostClimbingStairs = function (cost) {
//   const memo = [];

//   const minimumCost = (i, cost) => {
//     if(i <= 1) {
//       return 0;
//     }

//     if(memo[i] === undefined) {
//       const takeOneStep = cost[i - 1] + minimumCost(i - 1, cost);
//       const takeTwoStep = cost[i - 2] + minimumCost(i - 2, cost);
//       memo[i] = Math.min(takeOneStep, takeTwoStep);
//     }

//     return memo[i];
//   };

//   return minimumCost(cost.length, cost);
// };

console.log(minCostClimbingStairs(cost));
