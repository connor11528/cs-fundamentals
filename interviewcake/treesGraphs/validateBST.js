// Write a function to check that a binary tree is a valid binary search tree

// Sample BST class:

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

const rootNode = new BinaryTreeNode(7);
rootNode.insertRight(8);
rootNode.insertLeft(10);

console.log(isValidBST(rootNode))


function isValidBST(rootNode){

	// todo
}









