// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./data_structures/stack');

class Queue {
	constructor(){
		this.stack1 = new Stack();
		this.stack2 = new Stack();
	}

	add(item){
		this.stack1.push(item);
	}

	remove(){

    while(this.stack1.peek()){
      this.stack2.push(this.stack1.pop())
    }

    const toRemove = this.stack2.pop();

    while(this.stack2.peek()){
      this.stack1.push(this.stack2.pop());
    }

    return toRemove;

	}

	peek(){
    
    while(this.stack1.peek()){
      this.stack2.push(this.stack1.pop());
    }

    const toShow = this.stack2.peek();

    while(this.stack2.peek()){
      this.stack1.push(this.stack2.pop());
    }

    return toShow;

	}
}

// const q = new Queue();
// q.add(1);
// q.add(2);
// console.log(q.peek());  // returns 1
// console.log(q.remove()); // returns 1
// console.log(q.remove()); // returns 2

module.exports = Queue;