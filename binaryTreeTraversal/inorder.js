//inorder traversal - recursive solution
const inorderTraversalRec = (root) => {
  const result = [];

  const traversal = (node) => {
    if(node === null) return;

    traversal(node.left);
    result.push(node.val);
    traversal(node.right);
  };

  traversal(root);
  return result;
};

//inorder traversal - iterative solution
const inorderTraversalIter = (root) => {
  const stack = [];
  const result = [];
  let curr = root;

  while(curr !== null || stack.length) {
      while(curr !== null) {
          stack.push(curr);
          curr = curr.left;
      }
      
      curr = stack.pop();
      result.push(curr.val);
      curr = curr.right;
  }
  
  return result;
};
