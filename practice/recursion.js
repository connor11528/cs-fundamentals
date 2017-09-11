// Write a function called `sumRange`. It will take a number and return 
//the sum of all numbers from 1 up to the number passed in. 

// sumRange(3) returns 6, since 1 + 2 + 3 = 6.

var output = sumRange(3)
// console.log(output);

function sumRange(num){
	if(num == 1) return 1;

	return num + sumRange(num - 1);
}


// Write a function called `power` which takes in a base and an exponent. If 
// the exponent is 0, return 1. 

// You can think of it in terms of this example:
// 2^4 = 2 * 2^3;
// 2^3 = 2 * 2^2;
// 2^2 = 2 * 2^1;
// 2^1 = 2 * 2^0; // once our exponent is 0 we KNOW that the value is always 1!

// console.log(power(2, 4));
// console.log(power(2, 3));
// console.log(power(2, 2));
// console.log(power(2, 1));
// console.log(power(2, 0));

function power(base, exponent){
	if(exponent == 0) return 1;
	return base * power(base, exponent - 1);
}


// Write a function that returns the `factorial` of a number. As a quick refresher, 
// a factorial of a number is the result of that number multiplied by the number 
// before it, and the number before that number, and so on, until you reach 1. 
// The factorial of 1 is just 1. For example:

factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

function factorial(num){
	if(num == 1) return 1;

	return num * factorial(num - 1); // pending multiplier
}


// Write a function called `all` which accepts an array and a callback and returns 
// true if every value in the array returns true when passed as parameter to the 
// callback function

var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

// console.log(allAreLessThanSeven);

function all(array, callback){
	var copy = copy || array.slice(); // shallow copies array

	if(copy.length === 0) return true;

	if(callback(copy[0])){
		copy.shift(); // remove first element from array
		return all(copy, callback);
	} else {
		return false;
	}
}


