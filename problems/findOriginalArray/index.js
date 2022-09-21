var findOriginalArray = function (changed) {
  if (changed.length % 2 !== 0) return [];

  let maxNum = 0;

  for (const num of changed) {
    maxNum = Math.max(maxNum, num);
  }

  const freq = new Array(maxNum + 1).fill(0);

  for (const num of changed) {
    freq[num]++;
  }

  const origin = [];
  let index = 0;

  for(let num = 0; num <= maxNum; num++) {
    if(freq[num] > 0) {
      freq[num]--;

      const twice = num * 2;
      if(freq[twice] > 0) {
        freq[twice]--;
        origin[index++] = num;
        num--;
      } else {
        return [];
      }
    } 
  }

  return origin;
};

const changed = [0,0,0,0];

console.log(findOriginalArray(changed));