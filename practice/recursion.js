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


// Write a function called productOfArray which takes in an array of numbers 
// and returns the product of them all

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60

// console.log(six, sixty);

function productOfArray(array){
	if(array.length === 0) return 1;

	return array.shift() * productOfArray(array);
}


// Write a function called `contains` that searches for a value in a nested object. 
// It returns true if the object contains that value.

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

// console.log(hasIt, doesntHaveIt);

function contains(obj, value){
	for(var key in obj){
		if(typeof obj[key] === 'object'){
			return contains(obj[key], value);
		}

		if (obj[key] === value){
			return true;
		}
	}
	return false;
}


// Given a multi-dimensional integer array, return the total number of integers 
// stored inside this array

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
// console.log(seven);

function totalIntegers(array){
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
}


// Write a function that sums squares of numbers in list that may contain more lists

var l = [1,2,3]; 
// console.log(SumSquares(l)); // 14

l = [[1,2],3]; 
// console.log(SumSquares(l)); // 14

l = [[[[[[[[[1]]]]]]]]] 
// console.log(SumSquares(l)); // 1

l = [10,[[10],10],[10]] 
// console.log(SumSquares(l)); // 400

function SumSquares(array){
	if(array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){
			total += SumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
		
	}
	return total;
}


// The function should return an array containing repetitions of the number argument. 
// For instance, replicate(3, 5) should return [5,5,5]. 
// If the times argument is negative, return an empty array.

// console.log(replicate(3, 5)) // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []

function replicate(times, number){
	if(times <= 0) return [];

	return [number].concat(replicate(times - 1, number));
}


// BONUS
//=======

// Write a function called search that finds a value in an array and returns the index 
// where the value is at. If the value is not found, the function should return negative 1.

search([1,2,3,4,5],5) // 4
search([1,2,3,4,5],15) // -1


// Refactor your search function to use a faster algorithm called binary search 
// https://www.youtube.com/watch?v=JQhciTuD3E8

binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],15) // -1


// Write a function called stringifyNumbers which takes in an object and finds all of the 
// values which are numbers and converts them to strings. 

var obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj)
/*/
Output: 
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
/*/