// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// Memoization: 
// store the arguments of each
// function call along with the result.
// If function is called with the same
// arguments return the precompiled result
function fib(n){
	if(n < 2){
		return n;
	}

	return fib(n - 2) + fib(n - 1, {});
}

function memoize(fn){
	const cache = {};

	return function(...args){
		if(cache[args]){
			return cache[args];
		}

		const result = fn.apply(this, args);
		cache[args] = result;

		return result;
	}
}

fib = memoize(fib);

// Recursive solution
// runtime complexity: exponential (really bad)
// for every increase in n we're going to get a dramatic increase in the number of function calls
// function fib(n){
// 	if(n == 0) return 0;
// 	if(n == 1) return 1;

// 	return fib(n - 2) + fib(n - 1);
// }

// iterative solution
// runtime complexity: linear
// 
// function fib(n){
// 	const sequence = [0, 1];

// 	for(let i = 2; i <= n; i++){
// 		const entry = sequence[i - 2] + sequence[i - 1];
// 		sequence.push(entry);
// 	}
// 	return entry;
// }

console.log(fib(4));
console.log(fib(9));