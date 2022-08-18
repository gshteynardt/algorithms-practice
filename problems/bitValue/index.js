class BitValue {
  #value = 0;

  setBit(i) {
    this.#value |= (1 << i);
  }

  clearBit(i) {
    this.#value &= (~(1 << i));
  }

  getBit(i) {
    return (this.#value >> i) & 1 ;
  }

  assignBit(i, newValue) {
    if(this.#value & (1 << i)) {
      this.clearBit(i);
    } else {
      this.getBit(i);
    }
  }
}

const bitValue = new BitValue();
bitValue.setBit(4);
bitValue.setBit(5);
console.log(bitValue.getBit(3));
