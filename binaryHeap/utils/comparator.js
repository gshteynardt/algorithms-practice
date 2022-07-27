class Comparator {
  constructor() {
    this.compare = Comparator.defaultCompare;
  }

  static defaultCompare (a, b) {
    if(a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  equal (a, b) {
    return this.compare(a, b) === 0;
  }

  lessThan (a, b) {
    return this.compare(a, b) < 0;
  }

  greaterThan (a, b) {
    return this.compare(a, b) > 0;
  }

  lassThenOrEqual (a, b) {
    return this.compare(a, b) < 0 || this.equal(a, b);
  }

  greateThanOrEqual (a, b) {
    return this.compare(a, b) > 0 || this.equal(a, b);
  }
}