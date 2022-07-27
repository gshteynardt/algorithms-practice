class Heap {
  constructor(compareFunction, size) {
    this.compare = compareFunction;
    this.heapContainer = [];
  }

  getLeftChildIndex(parentIndex) {
    return this.heapContainer[parentIndex * 2];
  }

  getRightChildIndex(parentIndex) {
    return this.heapContainer[parentIndex * 2 + 1];
  }

  getParentIndex(childIndex) {
    return Math.floor(childIndex / 2);
  }

  hasLeftChildren(parentIndex) {
    return this.getLeftChildIndex(parentIndex * 2) < this.heapContainer.length;
  }

  hasRightChildren(parentIndex) {
    return this.getRightChildIndex(parentIndex * 2 + 1) < this.heapContainer.length;
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 1;
  }

  getLeftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  getRightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  getParent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  swap(indexOne, indexTwo) {
    const temp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = temp;
  }

  heapifyUp(customStartIndex) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    while(this.hasParent(currentIndex) &&
      !this.pairIsInCorrectOrder(this.getParent(currentIndex), this.heapContainer[currentIndex])
    ) {
      this.swap(this.getParentIndex(currentIndex), currentIndex);
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  add (item) {
    this.heapContainer.push(item);
    this.heapifyUp();
  }

  pairIsInCorrectOrder(firstElement, lastElement) {
    return this.compare(firstElement, lastElement);
  }
}