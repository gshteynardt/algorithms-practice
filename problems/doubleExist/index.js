
var checkIfExist = function (arr) {
  // const map = {};

  // const doubleExist = (x) => {
  //   return (x * 2 in map) || (x / 2 in map);
  // };

  // for (const num of arr) {
  //   if (num !== 0 && doubleExist(num)) {
  //     return true;
  //   }

  //   map[num] = (map[num] || 0) + 1;

  //   if(num === 0 && (map[num] || 0) > 1) {
  //     return true;
  //   }
  // }

  for(let i = 0; i < arr.length; i++) {
    const double = arr[i] * 2;
    const index = arr.indexOf(double);

    if(index !== -1 && index !== i) return true;
  }

  return false;
};

