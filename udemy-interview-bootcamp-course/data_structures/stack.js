// Stack - FILO - First In, Last Out

// pushing - add to stack
// popping - remove from stack

class Stack {
	constructor(){
		this.data = [];
	}

  push(item){
    this.data.push(item);
  }

  pop(){
    return this.data.pop();
  }

  peek(){
    return this.data[this.data.length - 1];
  }

}

module.exports = Stack;