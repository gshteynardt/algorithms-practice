const tokens = [81, 91, 31];
const power = 73;

//p 42 score
var bagOfTokensScore = function (tokens, power) {
  let start = 0;
  let end = tokens.length - 1;
  let score = 0;
  tokens.sort((a, b) => a - b);

  while (start <= end) {
    if (tokens[start] <= power) {
      power -= tokens[start];
      score++;
      start++;
    } else {
      if (end - start >= 1 && score > 0) {
        power += tokens[end];
        score--;
        end--;
      } else break;
    }
  }

  return score;
};

console.log(bagOfTokensScore(tokens, power));
