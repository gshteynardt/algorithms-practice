class HeapSort {
  #swap(arr, indexOne, indexTwo) {
    const temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
  }

  heapify(arr, size, index) {
    let largest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    if (left < size && arr[left] >= arr[largest]) {
      largest = left;
    }

    if (right < size && arr[right] >= arr[largest]) {
      largest = right;
    }

    if (largest !== index) {
      this.#swap(arr, index, largest);
      this.heapify(arr, size, largest);
    }
  }

  sort(arr) {
    for (let i = (arr.length << 1) - 1; i >= 0; i--) {
      this.heapify(arr, arr.length, i);
    }

    for(let i = arr.length - 1; i >= 0; i--) {
      this.#swap(arr, i, 0)
      this.heapify(arr, i, 0);
    }
  }
}

// const arr = [1, 12, 9, 5, 6, 10];

// var findKthLargest = function (nums, k) {
//   const heapSort = new HeapSort();
//   heapSort.sort(nums);

//   return arr[nums.length - k];
// };

// console.log(findKthLargest(arr, 2));
