// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

const { LinkedList } = require('./data_structures/linked_list');

function midpoint(list){
	let slow = list.getFirst();
	let fast = list.getFirst();

	while(fast.next && fast.next.next){
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
}

let list = new LinkedList();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d');

console.log(midpoint(list));