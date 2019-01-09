
// Palindrome is string that reads same forwards and backwards
// radar, toot and madam are palindromes.

function palindromeCheck(str) {
	let deque = str.split('');

	while(deque.length > 1) {
		const last  = deque.pop();
		const first = deque.shift();

		if(first !== last) {
			return false;
		}
	}

	return true;
}

console.log(palindromeCheck('radar')); // true
console.log(palindromeCheck('toot'));  // true
console.log(palindromeCheck('madam')); // true
console.log(palindromeCheck('madams')); // false
console.log(palindromeCheck('palindrome')); // false