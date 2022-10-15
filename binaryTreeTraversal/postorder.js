//postorder traversal - recursive solution
const postorderTraversalRec = (root) => {
  const result = [];

  const traversal = (node) => {
    if (node === null) return;

    traversal(node.left);
    traversal(node.right);
    result.push(node.val);
  };

  traversal(root);
  return result;
};

//postorder traversal - iterative solution
const postorderTraversalIter = (root) => {
  if (!root) return [];

  let stack = [];
  let result = [];

  stack.push(root);
  let prev = root;

  while (stack.length) {
    const node = stack[stack.length-1];

    if (node.left !== null && node.left !== prev && node.right !== prev) {
      stack.push(node.left);
    } else if (node.right !== null && node.right !== prev) {
      stack.push(node.right);
    } else {
      prev = node;
      result.push(stack.pop().val);
    }
  }

  return result;
};
