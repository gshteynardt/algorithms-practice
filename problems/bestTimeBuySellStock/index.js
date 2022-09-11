var maxProfit = function(prices) {
  let minBuy = prices[0];
  let maxProfit = 0;

  for(let i = 1; i < prices.length; i++) {
    if(minBuy < prices[i]) {
      const tempProfit = prices[i] - minBuy;
      maxProfit = Math.max(maxProfit, tempProfit);
    }

    if(prices[i] < minBuy) {
      minBuy = prices[i];
    }
  }

  return maxProfit;
};

const prices = [7,1,5,3,6,4];

console.log(maxProfit(prices));

