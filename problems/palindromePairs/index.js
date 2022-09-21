const words = ["abcd","dcba","lls","s","sssll"];

const isPal = (word, i = 0, j = word.length - 1) => {
  while (i < j) {
    if(word[i] !== word[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

var palindromePairs = function(words) {
  const hashMap = new Map();
  const result = [];

  for(let i = 0; i < words.length; i++) {
    hashMap.set(words[i], i);
  }

  for(let i = 0; i < words.length; i++) {
    if(words[i] === '') {
      for(let j = 0; j < words.length; j++) {
        if(isPal(words[j]) && j !== i) {
          result.push([i, j], [j, i]);
        }
        continue;
      }
    }

    const backwards = words[i].split('').reverse().join('');
    const match = hashMap.get(backwards);

    if(match !== undefined && match !== i) {
      result.push([i, match]);
    }

    for(let j = 1; j < backwards.length; j++) {
      if(isPal(backwards, 0, j - 1)) {
        const math = hashMap.get(backwards.slice(j));
        if(math !== undefined) {
          result.push([i, math]);
        }
      }

      if(isPal(backwards, j)) {
        const math = hashMap.get(backwards.slice(0, j));

        if(math !== undefined) {
          result.push([i, math]);
        }
      }
    }
  }

  return result;
};

console.log(palindromePairs(words));
