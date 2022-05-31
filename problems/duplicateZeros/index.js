const arr = [1, 0, 2, 3, 0, 4, 5, 0];

// var duplicateZeros = (arr) => {
//   let possibleZeros = 0;
//   let length = arr.length - 1;

//   for(let left = 0; left <= length - possibleZeros; left++) {
//     if (arr[left] === 0) {
//       if(left === length - possibleZeros) {
//         arr[length] = 0;
//         length--;
//         break;
//       }

//       possibleZeros++;
//     }
//   }

//   const last = length - possibleZeros;

//   for(let i = last; i >= 0; i--) {
//     if(arr[i] === 0) {
//       arr[i + possibleZeros] = 0;
//       possibleZeros--;
//       arr[i + possibleZeros] = 0;
//     } else {
//       arr[i + possibleZeros] = arr[i];
//     }
//   }
// };

var duplicateZeros = (arr) => {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) {
      i++;
      arr.splice(i, 0, 0);
    }
  }

  arr.splice(length + 1);
};

duplicateZeros(arr);
console.log(arr);