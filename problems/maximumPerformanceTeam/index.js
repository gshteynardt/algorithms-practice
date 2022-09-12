import minBinaryHeap from '../helpers/minBinaryHeap.js';

const MOD = BigInt(10 ** 9 + 7);

var maxPerformance = function(n, speed, efficiency, k) {
  const engineers = speed.map((s, i) => [efficiency[i], s]);
  engineers.sort((a, b) => b[0] - a[0]);

  let result = BigInt(0);
  let speedSum = 0;
  const heap = new minBinaryHeap(k);

  for(const [eff, speed] of engineers) {
    if(heap.isFull()) {
      speedSum -= heap.extractMin();
    }

    heap.insert(speed);
    speedSum += speed;

    const tempResult = BigInt(speedSum) * BigInt(eff);

    if(tempResult > result) {
      result = tempResult;
    }
  }

  return result % MOD;
};

const n = 6;
const speed = [2,10,3,1,5,8];
const efficiency = [5,4,3,9,7,2];
const k = 2;

console.log(maxPerformance(6, speed, efficiency, k));