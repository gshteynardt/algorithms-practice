const isOneBitCharacter = (bits) => {
  // let str = bits.join('');
  // const replacer = /10|11|0/;

  // while(replacer.test(str)) {
  //   if(str === '0') return true;

  //   str = str.replace(replacer, '');
  // }

  // return false;
  let i = 0;

  while (i < bits.length - 1) {
    if (bits[i] === 1) {
      i += 2;
    } else {
      i++;
    }
  }

  return bits.length !== i;
};

isOneBitCharacter([1, 1, 1, 0, 1, 0]);
