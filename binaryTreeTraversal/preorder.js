//preorder traversal - recursive solution
const preorderTraversalRec = (root) => {
  const result = [];

  const traversal = (node) => {
    if (node === null) return;

    result.push(node.val);
    traversal(node.left);
    traversal(node.right);
  };

  traversal(root);
  return result;
};

//preorder traversal - iterative solution
const preorderTraversalIter = (root) => {
  const stack = [];
  const result = [];

  if (root !== null) {
    stack.push(root);
  }

  let cur;

  while (stack.length > 0) {
    cur = stack.pop();
    result.push(cur.val);

    if (cur.right !== null) {
      stack.push(cur.right);
    }

    if (cur.left !== null) {
      stack.push(cur.left);
    }
  }

  return result;
};

const preorderTraversalIterShort = (node) => {
  if (!node) {
    return [];
  }

  return [node.val]
    .concat(preorderTraversalIterShort(node.left))
    .concat(preorderTraversalIterShort(node.right));
};

