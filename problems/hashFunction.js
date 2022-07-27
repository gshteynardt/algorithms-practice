const HASH_SIZE = 1 << 10;

const hash = (str) => {
  const l = str.length;
  let hash = l;

  for (let i = 0; i < l; i++) {
    hash = hash * 17 + str.charCodeAt(i);
  }

  return hash & (HASH_SIZE - 1);
};

console.log(hash('baz'));

//get collision
//HASH_SIZE = 6; first str = 'baz'; second str = 'bar';