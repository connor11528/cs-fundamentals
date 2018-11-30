
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

  getAt(index){
    let node = this.head, counter = 0;

    if(!node){
      return null;
    }

    while(node){
      if(counter === index){
        return node;
      }
      counter++;
      node = node.next;
    }

    // index was out of bounds
    return null;
  }

  // todo: review methods below
  removeAt(index){
    if(!this.head){
      return;
    }

    if(index === 0){
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if(!previous || !previous.next){
      return;
    }

    previous.next = previous.next.next;

  }

  insertAt(data, index){
    if(!this.head){
      this.head = new Node(data);
      return;
    }

    if(index === 0){
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn){
    let node = this.head;
    let counter = 0;

    while(node){
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

}

module.exports = { Node, LinkedList };