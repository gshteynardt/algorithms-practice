//inorder traversal - recursive solution
const inorderTraversalRec = (root) => {
  let result = [];

  const traversal = (node) => {
    if (node === null) return;

    traversal(root.left);
    result.push(root.val);
    traversal(root.right)
  }

  traversal(root);

  return result;
};

//inorder traversal - iterative solution
const inorderTraversalIter = (root) => {
  const stack = [];
  const result = [];
  let curr = root;

  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }

  return result;
};
