const getIndex = (char) => {
  return char.charCodeAt() - 'a'.charCodeAt();
};

var numMatchingSubseq = function(s, words) {
  const bucked = [...Array(26)].map(() => []);
  let counter = 0;

  for(let i = 0; i < words.length; i++) {
    const index = getIndex(words[i][0]);
    bucked[index].push(words[i]);
  }

  for(let j = 0; j < s.length; j++) {
    const index = getIndex(s[j]);
    const currentBucked = bucked[index];
    bucked[index] = [];

    for(let word of currentBucked) {
      word = word.slice(1);
      if(word.length === 0) {
        counter++;
        continue;
      };

      const index = getIndex(word[0]);
      bucked[index].push(word);
    }
  }

  return counter;
};

numMatchingSubseq("abcde", ["a","bb","acd","ace"]);