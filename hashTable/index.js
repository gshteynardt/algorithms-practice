const defaultHashTableSize = 6;

class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.size = hashTableSize;
    this.table = Array(hashTableSize).fill(undefined);
  }

  hash(str) {
    const l = str.length;
    let hash = l;
  
    for (let i = 0; i < l; i++) {
      hash = hash * 17 + str.charCodeAt(i);
    }
  
    return hash & (this.size - 1);
  }

  set(key, value) {
    const keyHash = this.hash(key);

    if(!this.table[keyHash]) {
      throw new Error('Unable to add key');
    }

    this.table[keyHash] = [key, value];
  }

  get(key) {
    const keyHash = this.hash(key);

    if(!this.table[keyHash]) return undefined;

    const [curKey, value] = this.table[keyHash];
    return key === curKey ? value : undefined;
  }

  delete(key) {
    const keyHash = this.hash(key);

    if(!this.table[keyHash]) return false;

    const [curKey, value] = this.table[keyHash];

    if(curKey !== key) throw new Error('Unable to delete');

    this.table[keyHash] = undefined;

    return value;
  }
}

const table = new HashTable();
table.set('bar', 2);

console.log(table.delete('baz'));
console.log(table.table);