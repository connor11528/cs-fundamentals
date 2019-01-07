// write an algorithm that will read a string of parentheses from left to right and decide whether the symbols are balanced

function balancedParentheses(str) {
	let stack = [];
	const OPENING = '(';
	const CLOSING = ')';

	for(let char of str){
		if(char === OPENING) {
			stack.push(char);
		} else if(char === CLOSING) {
			const removedChar = stack.pop();

			if(typeof removedChar === 'undefined'){
				return false;
			}
		}
	}

	return (stack.length === 0);
}

// console.log(balancedParentheses('(()()()())')); // true
// console.log(balancedParentheses('((((((())'));  // false
// console.log(balancedParentheses('((((((())'));  // false
// console.log(balancedParentheses('()))'));       // false
// console.log(balancedParentheses('(()()(()'));  // false

const PAIRINGS = {
	'(' : ')',
	'[' : ']',
	'{' : '}'
};

function isBalanced(str) {
	let stack      = [];
	const openings = Object.keys(PAIRINGS);
	const endings  = Object.values(PAIRINGS);

	for(let char of str) {
		if(openings.includes(char)) {
			stack.push(char);
		}

		if(endings.includes(char)) {
			const removedChar = stack.pop();

			if(typeof removedChar === 'undefined'){
				return false;
			}

			if(char !== PAIRINGS[removedChar]){
				return false;
			}
		}

	}

	return stack.length === 0;
}

console.log(isBalanced('{ { ( [ ] [ ] ) } ( ) }')); // true
console.log(isBalanced('[ [ { { ( ( ) ) } } ] ]')); // true
console.log(isBalanced('[ ] [ ] [ ] ( ) { }'));     // true
console.log(isBalanced('( [ ) ]'));                 // false
console.log(isBalanced('( ( ( ) ] ) )'));           // false
console.log(isBalanced('[ { ( ) ]'));               // false














