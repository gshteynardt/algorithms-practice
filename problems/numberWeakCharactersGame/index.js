const properties = [[1,1],[2,1],[2,2],[1,2]];

var numberOfWeakCharacters = function(properties) {
  properties.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);

  let maxDefense = 0;
  let weakCharacters = 0;

  for(let i = properties.length - 1; i >= 0; i--) {
    if(properties[i][1] < maxDefense) {
      weakCharacters++;
    }

    maxDefense = Math.max(properties[i][1], maxDefense);
  }

  return weakCharacters;
};

console.log(numberOfWeakCharacters(properties));