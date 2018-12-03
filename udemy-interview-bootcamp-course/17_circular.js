// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

const { LinkedList } = require('./data_structures/linked_list');

function circular(list){
	let slow = list.head;
	let fast = list.head;

	while(fast.next && fast.next.next){
		slow = slow.next;
		fast = fast.next.next;

		if(slow === fast){
			return true;
		}
	}

	return false;
}

let list = new LinkedList();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');

console.log(list);