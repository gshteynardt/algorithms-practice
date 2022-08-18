const isPowerOfTwo = (number) => {
  return (number & (number - 1)) === 0;
};

class SegmentTrees {
  constructor(arr) {
    this.arr = arr;
    this.tree = this.initSegmentTree(arr.length);
    this.buildSegmentTree(this.arr, 1, 0, arr.length - 1);
  }

  merge(a, b) {
    return a + b;
  }

  initSegmentTree(arrayLength) {
    return new Array(isPowerOfTwo(arrayLength) ? arrayLength << 1 : arrayLength << 2).fill(0);
  }

  #getLeftChildIndex(parentIndex) {
    return parentIndex << 1;
  }

  #getRightChildIndex(parentIndex) {
    return (parentIndex << 1) + 1;
  }

  buildSegmentTree(arr, treeIndex, lo, hi) {
    if (lo === hi) {
      this.tree[treeIndex] = arr[lo];
      return;
    }

    const mid = (lo + hi) >> 1;

    this.buildSegmentTree(arr, this.#getLeftChildIndex(treeIndex), lo, mid);
    this.buildSegmentTree(arr, this.#getRightChildIndex(treeIndex), mid + 1, hi);

    this.tree[treeIndex] = this.merge(
      this.tree[this.#getLeftChildIndex(treeIndex)],
      this.tree[this.#getRightChildIndex(treeIndex)],
    )
  }

  rangeQuery(queryLeftIndex, queryRightIndex) {
    const leftIndex = 0;
    const rightIndex = this.arr.length - 1;
    const treeIndex = 1;

    return this.#rangeQueryRecursive({
      queryLeftIndex,
      queryRightIndex,
      leftIndex,
      rightIndex,
      treeIndex,
    });
  }

  #rangeQueryRecursive({ queryLeftIndex, queryRightIndex, leftIndex, rightIndex, treeIndex }) {
    if (queryLeftIndex > rightIndex || queryRightIndex < leftIndex) {
      return 0;
    }

    if (queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex) {
      return this.tree[treeIndex];
    }

    const mid = (leftIndex + rightIndex) >> 1;

    const leftResult = this.#rangeQueryRecursive({
      queryLeftIndex,
      queryRightIndex,
      leftIndex,
      rightIndex: mid,
      treeIndex: this.#getLeftChildIndex(treeIndex),
    });

    const rightResult = this.#rangeQueryRecursive({
      queryLeftIndex,
      queryRightIndex,
      leftIndex: mid + 1,
      rightIndex,
      treeIndex: this.#getRightChildIndex(treeIndex),
    });

    return this.merge(leftResult, rightResult);
  }

  update(arrayIndex, val) {
    const leftIndex = 0;
    const rightIndex = this.arr.length - 1;
    const treeIndex = 1;

    this.#updateRecursive({
      treeIndex,
      leftIndex,
      rightIndex,
      arrayIndex,
      val,
    });
  }

  #updateRecursive({ treeIndex, leftIndex, rightIndex, arrayIndex, val }) {
    if (leftIndex === rightIndex) {
      this.tree[treeIndex] = val;
      return;
    }

    const mid = (leftIndex + rightIndex) >> 1;

    if (mid < arrayIndex) {
      this.#updateRecursive({
        treeIndex: this.#getRightChildIndex(treeIndex),
        leftIndex: mid + 1,
        rightIndex,
        arrayIndex,
        val,
      })
    } else {
      this.#updateRecursive({
        treeIndex: this.#getLeftChildIndex(treeIndex),
        leftIndex,
        rightIndex: mid,
        arrayIndex,
        val,
      })
    }

    this.tree[treeIndex] = this.merge(
      this.tree[this.#getLeftChildIndex(treeIndex)],
      this.tree[this.#getRightChildIndex(treeIndex)]
    );
  }
}

const tree = new SegmentTrees([18, 17, 13, 19, 15, 11, 20, 12, 33, 25]);

console.log(tree.tree);
console.log(tree.rangeQuery(4, -1));
console.log(tree.update(1, 18));
console.log(tree.tree);
