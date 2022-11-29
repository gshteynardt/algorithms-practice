const levelOrderRec = (root) => {
  if(root === null) {
    return [];
  }

  const levels = [];

  const helper = (node, level) => {
    if(levels.length === level) {
      levels[level] = [];
    };

    levels[level].push(node.value);

    if(node.left !== null) {
      helper(node.left, level + 1);
    }

    if(node.right !== null) {
      helper(node.right, level + 1);
    }
  }

  return levels;
};

const levelOrder = (root) => {
  if(root === null) {
    return [];
  }

  const queue = [root];
  const values = [];

  while(queue.length > 0) {
    const length = queue.length;
    const level = [];

    for(let i = 0; i < length; i++) {
      const node = queue.shift();
      level.push(node.val);

      if(node.left !== null) {
        queue.push(node.left);
      }

      if(node.right !== null) {
        queue.push(node.right);
      }
    }

    values.push(level);
  }

  return values;
};
