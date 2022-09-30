var reverseWords = function(s) {
  const strArray = [...s];
  let lastSpaceIndex = -1;
  const length = strArray.length;

  for(let strtIdx = 0; strtIdx <= length; strtIdx++) {
    if(strtIdx === length || strArray[strtIdx] === ' ') {
      let start = lastSpaceIndex + 1;
      let end = strtIdx - 1;

      while(start < end) {
        const temp = strArray[start];
        strArray[start] = strArray[end];
        strArray[end] = temp;
        start++;
        end--;
      }

      lastSpaceIndex = strtIdx;
    }
  }

  return strArray.join('');
};

const s = "Let's take LeetCode contest";

console.log(reverseWords(s));
