const strs = ["flower","flow","flower"];

var longestCommonPrefix = function(strs) {
  let prefix = strs[0];

  for(let i = 1; i < strs.length; i++) {
    console.log(strs[i].indexOf(prefix))
    while(strs[i].indexOf(prefix) !== 0 ) {
      prefix = prefix.slice(0, prefix.length - 1);
      if(prefix.length === 0) return '';
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(strs));