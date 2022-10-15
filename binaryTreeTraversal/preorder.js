//preorder traversal - recursive solution
const preorderTraversalRec = (root) => {
  const result = [];

  const traversal = (node) => {
    if(node === null) return;

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

  if(root !== null) {
    stack.push(root);
  }

  let cur;

  while(stack.length > 0) {
    cur = stack.pop();
    result.push(cur.val);

    if(cur.right !== null) {
      stack.push(cur.right);
    }

    if(cur.left !== null) {
      stack.push(cur.left);
    }
  }

  return result;
};

var postorderTraversal = function(root) {
    if (!root) return [];
    let stack = [], res = [];
    stack.push(root);
    while (stack.length) {
        let node = stack[stack.length-1];
        if (node.left) {
            stack.push(node.left);
            node.left = null;
        }
        else if (node.right) {
            stack.push(node.right);
            node.right = null;
        }
        else res.push(stack.pop().val);
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};
