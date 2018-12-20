
class Node {
  constructor(data){
    this.data     = data;
    this.children = [];
  }

  add(data){
    this.children.push(new Node(data));
  }

  remove(data){
    this.children = this.children.filter((node)=>{
      return node.data !== data;
    });
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  breadthFirstTraverse(){
    const queue = [this.root]; // first in, first out

    while(queue.length){
      // remove first element from queue
      const first = queue.shift();

      // log out the element
      console.log(first.data);

      // ES6 Spread syntax example:
      //===========================
      // var parts = ['shoulders', 'knees']; 
      // var lyrics = ['head', ...parts, 'and', 'toes']; 
      // outputs: ["head", "shoulders", "knees", "and", "toes"]

      // add each element of children into the queue
      queue.push(...first.children);

    }

  }

  depthFirstTraverse(){
    const stack = [this.root];

    while(stack.length){
      const first = stack.shift();

      console.log(first.data);

      stack.unshift(...first.children);
    }
    
  }
}

const t = new Tree();
t.root= new Node('a');
t.root.add('b');
t.root.add('d');
t.root.children[0].add('c');


t.depthFirstTraverse();

module.exports = { Tree, Node };