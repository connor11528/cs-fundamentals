// Queue = container. enter in one end and exit on the other.
// First In, First Out (FIFO)

// Methods:
// enqueue - add to queue
// dequeue - remove from queue

class Queue {
	constructor(){
		this.queue = [];
	}
	add(item){
		this.queue.unshift(item);
	}

	remove(){
		return this.queue.pop();
	}


	// View the next element to be removed from the queue
	peek(){
		return this.queue[this.queue.length - 1];
	}
}

// const queue = new Queue();
// queue.add(6);
// queue.add(5);
// queue.remove();

// console.log(queue.peek());

module.exports = Queue;