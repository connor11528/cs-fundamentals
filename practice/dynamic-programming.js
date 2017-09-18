// https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/dynamic-programming

// memoization = 'storing' the result of an expensive function 
// Memoization is implemented by maintaining a lookup table of previous solved sub-problems

// tabulation you solve the by solving all related sub-problems first

// Video from CTCI - Algorithms: Memoization and Dynamic Programming - https://www.youtube.com/watch?v=P8Xa2BitN3I

// Lots of extra dynammic programming problems - http://www.geeksforgeeks.org/dynamic-programming/

//=======

// Knapsack Problem
// given a set of positive integers, 3, 5, 6, 10, 34 say, find a subset that sums 
// to exactly to a given value, such as 50.
var ints = [3, 5, 6, 10, 34]
var value = 50

console.log(knapsack(ints, value)); // [6, 10, 34]

function knapsack(arr, value){

}

// Change Making Problem
// https://www.interviewcake.com/question/javascript/coin


// Fibonacci Sequence
// [0,1,1,2,3,5,8,13,21]

// console.log(fib(9));

function fib(i){
	let dict = {}, output = Array(i).fill(0); output[1] = 1;

	for(let j = 2; j < output.length; j++){
		if(output[j] == 0){
			output[j] = output[j-1] + output[j-2]
		}
	}
	return output;

}