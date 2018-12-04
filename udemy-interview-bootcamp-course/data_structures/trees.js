
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
}


module.exports = { Tree, Node };