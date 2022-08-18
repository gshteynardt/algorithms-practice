// const partition = (arr, l, r) => {
//   const partitionIndex = (r + l) >> 1;
//   const pivot = arr[partitionIndex];
//   let i = l;
//   let j = r;

//   while (i <= j) {
//     while (arr[i] < pivot) {
//       i++;
//     }

//     while (arr[j] > pivot) {
//       j--;
//     }

//     if (i >= j) {
//       break;
//     }

//     swap(arr, i, j);
//     i++;
//     j--;
//   }

//   return j;
// };

// const partition = (arr, l, r) => {
//   const pIndex = Math.floor((r - l + 1) * Math.random()) + l;
//   const pivot = arr[pIndex];
//   let m1 = l;
//   let m2 = r;
//   let i = l;

//   while (i <= m2) {
//     if (arr[i] < pivot) {
//       [arr[i], arr[m1]] = [arr[m1], arr[i]];
//       m1++;
//       i++;
//     } else if (arr[i] > pivot) {
//       [arr[i], arr[m2]] = [arr[m2], arr[i]];
//       m2--;
//     } else {
//       i++;
//     }
//   }

//   return { m1, m2 };
// };

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const partition = (arr, l, r) => {
  const pIndex = Math.floor((r - l + 1) * Math.random()) + l;
  const pivot = arr[pIndex];
  let storeIndex = l;

  swap(arr, pIndex, r);
  
  for(let i = l; i < r; i++) {
    if(arr[i] < pivot) {
      swap(arr, storeIndex, i);
      storeIndex++;
    }
  }

  swap(arr,storeIndex, r);
  return storeIndex;
};

const quickSelect = (arr, left, right, kSmallest) => {
  if(left === right) {
    return arr[left];
  }

  const pivotIndex = partition(arr, left, right);

  if(kSmallest === pivotIndex) {
    return arr[kSmallest];
  }

  if(kSmallest < pivotIndex) {
    return quickSelect(arr, left, pivotIndex, kSmallest);
  } else {
    return quickSelect(arr, pivotIndex + 1, right, kSmallest);
  }
};

var findKthLargest = function(nums, k) {
  let target = nums.length - k;
  return quickSelect(nums, 0, nums.length - 1, target);
};

const arr = [5, 2, 4, 1, 3, 6, 0];

console.log(findKthLargest(arr, 4));
