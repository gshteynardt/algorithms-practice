const removeDuplicates = (nums) => {
  const numsMap = new Set (nums);

  const uniqArray = Array.from(numsMap.keys());
  const emptySlotLength = nums.length - uniqArray.length;

  return !emptySlotLength ? uniqArray : uniqArray.concat(Array(emptySlotLength).fill('_'));
};

console.log(removeDuplicates([1,1,2]));
