class MinBinaryHeap {
  constructor(size) {
    this.size = size;
    this.heap = [null];
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex << 1;
  }

  getRightChildIndex(parentIndex) {
    return (parentIndex << 1) + 1;
  }

  getParentIndex(childIndex) {
    return childIndex >> 1;
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 1;
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heap.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heap.length;
  }

  isFull() {
    return this.heap.length - 1 === this.size;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  insert(item) {
    if (this.isFull()) {
      return false;
    }

    this.heap.push(item);
    this.heapifyUp();
    return true;
  }

  extractMin(item) {
    if (this.isEmpty() || item < this.heap[1]) return;

    this.heap[1] = item;
    this.heapifyDown();
  }

  heapifyUp(customStartIndex) {
    let currentIndex = customStartIndex || this.heap.length - 1;

    while (this.hasParent(currentIndex)) {
      const parentIndex = this.getParentIndex(currentIndex);
      const child = this.heap[currentIndex];
      const parent = this.heap[parentIndex];
      if (child >= parent) break;

      this.heap[parentIndex] = child;
      this.heap[currentIndex] = parent;
      currentIndex = parentIndex;
    }
  }

  heapifyDown(customStartIndex = 1) {
    let currentIndex = customStartIndex;
    let nextIndex;

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        this.heap[this.getLeftChildIndex(currentIndex)] >= this.heap[this.getRightChildIndex(currentIndex)]
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (this.heap[currentIndex] < this.heap[nextIndex]) {
        break;
      }

      const parent = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[nextIndex];
      this.heap[nextIndex] = parent;
      currentIndex = nextIndex;
    }
  }
}

export default MinBinaryHeap;
