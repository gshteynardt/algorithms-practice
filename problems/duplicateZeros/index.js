const arr = [0, 0, 0, 0, 0, 0, 0];

const shiftElements = (arr, length, slot) => {
  for (let i = length; i >= slot; i--) {
    if (i + 1 > length) continue;

    arr[i + 1] = arr[i];
  }

  if (slot > length) return;

  arr[slot] = 0;
};

const duplicateZeros = (arr) => {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) {
      shiftElements(arr, length - 1, i + 1);
      i++;
    }
  }
};

duplicateZeros(arr);
console.log(arr);