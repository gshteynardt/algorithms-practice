const checkWord = (A, B) => {
  const Bfreq = Array(26).fill(0);
  const check = Array(26).fill(0);
  let cmax = 0;
  const ans = [];

  for(let i = 0; i < B.length; i++) {
    const word = B[i];

    for(let j = 0; j < word.length; j++) {
      check[word.charCodeAt(j) - 97]++;
    }

    for(let j = 0; j < 26; j++) {
      const diff = check[j] - Bfreq[j];

      if(diff > 0) {
        Bfreq[j] += diff;
        cmax+=diff;
      }

      if(cmax > 10) return ans;
    }

    check.fill(0);
  }

  for(let i = 0; i < A.length; i++) {
    const word = A[i];
    if(word.length < cmax) {
      continue;
    }

    for(let j = 0; j < word.length; j++) {
      check[word.charCodeAt(j) - 97]++;
    }

    for(let j = 0; j <= 26; j++) {
      if(check[j] < Bfreq[j]) {
        break;
      }

      if(j === 26) {
        ans.push(word);
      }
    }

    check.fill(0);
  }

  return ans;
};

console.log(checkWord(["amazon","apple","facebook","google","leetcode"], ['co', "e", 'o', 'ee']));
//aaabb
//bbbaa
