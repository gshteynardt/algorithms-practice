// var leafSimilar = function(root1, root2) {

//   const stack1 = [root1];
//   const stack2 = [root2];

//   while(stack1.length > 0 || stack2.length > 0) {
//     let tempNode1 = stack1.pop();

//     while(tempNode1 !== null && (tempNode1.left !== null && tempNode1.right !== null)) {
//       stack1.push(tempNode1.left);
//       stack1.push(tempNode1.right);
//     }

//     let tempNode2 = stack2.pop();

//     while(tempNode2 !== null && (tempNode2.left !== null && tempNode2.right !== null)) {
//       stack2.push(tempNode2.left);
//       stack2.push(tempNode2.right);
//     }

//     if(tempNode1 === null && tempNode2 !== null) {
//       return false;
//     }

//     if(tempNode1 !== null && tempNode2 === null) {
//       return false;
//     }

//     if(tempNode1 !== null && tempNode2 !== null) {
//       if(tempNode1.val !== tempNode2.val) {
//         return false;
//       }
//     }
//   }

//   return true;
// };

const leafSimilar = (root1, root2) => {
  const dfs = (node, leaves) => {
    if(node !== null) {
      if(node.left === null && node.right === null) {
        leaves.push(node.val);
      }

      dfs(node.left, leaves);
      dfs(node.right, leaves);
    }
  };

  const leaves1 = [];
  const leaves2 = [];
  dfs(root1, leaves1);
  dfs(root2, leaves2);

  return leaves1.join('#') === leaves2.join('#');
};
