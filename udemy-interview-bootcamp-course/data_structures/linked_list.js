
class Node {
	constructor(data, node = null){
		this.data = data;
		this.next = node;
	}
}

class LinkedList {
	constructor(){
		this.head = null
	}

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    let size = 0, pointer = this.head;

    while(pointer){
      pointer = pointer.next;
      size++;
    }

    return size;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    let last = this.head;
    if(!last){
      return last;
    }

    while(last){
      if(!last.next){
        return last;
      }
      last = last.next;
    }
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    if(!this.head){
      return;
    }

    this.head = this.head.next;
  }

  removeLast(){
    // if empty list, nothing to remove
    if(!this.head){
      return;
    }

    // if one node, remove it
    if(!this.head.next){
      this.head = null;
    }

    let previous = this.head;
    let node = this.head.next;

    // if three nodes continue down the list
    while(node.next){
      previous = node;
      node = node.next;
    }

    // remove pointer to the last node
    previous.next = null;
  }

  insertLast(data){
    let last = this.getLast();

    if(last){
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(int){
    let node = this.head;

    if(!node){
      return null;
    }

    for(let i = 0; i < int; i++){
      node = node.next;
    }
    return node;
  }

}

const list = new LinkedList();
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);

console.log(list.getAt(0));

module.exports = { Node, LinkedList };