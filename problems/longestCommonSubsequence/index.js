//bottom-up
//Time O(m*n);
//Space O(m*n);
var longestCommonSubsequence = function (text1, text2) {
  if (text1 === '' && text2 === '') return 0;

  const dp = new Array(text2.length + 1)
    .fill(0)
    .map(() => new Array(text1.length + 1));

  for (let row = 0; row < dp.length; row++) {
    for (let col = 0; col < dp[0].length; col++) {
      if (row === 0 || col === 0) {
        dp[row][col] = 0;
      } else if (text1[col - 1] === text2[row - 1]) {
        dp[row][col] = dp[row - 1][col - 1] + 1;
      } else {
        dp[row][col] = Math.max(dp[row - 1][col], dp[row][col - 1]);
      }
    }
  }

  return dp[text2.length][text1.length];
};

//top-down
var longestCommonSubsequence = function (text1, text2) {
  if (text1 === '' && text2 === '') return 0;

  const memo = new Array(text2.length + 1)
    .fill(0)
    .map(() => new Array(text1.length + 1));

  const dp = (i, j) => {
    if(i < 0 || j < 0) {
      return 0;
    }

    if(i === 0 && j === 0) {
      memo[i][j] = 0;

      return memo[i][j];
    }
  
    let res;

    if(text1[i] === text2[j]){
      res = dp(i - 1, j - 1) + 1;
    } else {
      res = Math.max(dp(i, j - 1), dp(i - 1, j));
    }

    memo[i][j] = res;

    return res;
  }

  return dp(text2.length - 1, text2.length - 1);
};
