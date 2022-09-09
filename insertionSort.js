const insertionSort = (arr) => {
  for(let i = 1; i < arr.length; i++) {
    let j = i - 1;

    while(j >= 0 && arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      j--;
    }
  }

  return arr;
};

const arr = [2, 5, 4, 3, 1];

const a =[1, 2, 3, 4, 5, 6];
const b = [2, 6, 7, 8, 9, 10];

const mergeArr = (a, b) => {
  const n = a.length;
  const m = b.length;
  const c = [];
  let i = 0;
  let j = 0;

  while((i + j) < (n + m)) {
    if(j === m || (i < n && a[i] < b[j])) {
      c[i + j] = a[i];
      i++;
    } else {
      c[i + j] = b[j];
      j++;
    }
  }

  return c;
};

console.log(mergeArr(a, b));
