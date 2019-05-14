// A tree is "superbalanced" if the difference between the depths 
// of any two leaf nodes is no greater than one.

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

// depth first or breadth first tree traversal


function isSuperbalanced(treeRoot){

	// todo: get comfortable implementing BFS and DFS
	// breadth-first uses a queue and depth-first uses a stack.
}


