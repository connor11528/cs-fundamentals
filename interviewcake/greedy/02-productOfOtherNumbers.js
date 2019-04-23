// You have an array of integers, and for each index you want 
// to find the product of every integer except the integer at that index.
// given   [1, 7, 3, 4]
// returns [84, 12, 28, 21] 

// it is product of all other values
// so [ 7*3*4, 1*3*4, 1*7*4, 1*7*3]

// Do not use division in your solution.

var nums = [10, 7, 3, 4]; // [84, 12, 28, 21] 
var nums2 = [2, 4, 10]; //  

var output = getProductsOfAllIntsExceptAtIndex(nums2);
console.log(output);

function getProductsOfAllIntsExceptAtIndex(intArray){

	// product of all integers before each index
	var beforeIndexValues = [];

	var accumulator = 1;

	for (var i = 0; i < intArray.length; i++) {
		beforeIndexValues[i] = accumulator;
		accumulator *= intArray[i];
	}

	var afterIndexValues = [];
	accumulator = 1;

	// product of all integers after each index
	for(var i = intArray.length - 1; i >= 0; i--){
		afterIndexValues[i] = accumulator;
		accumulator *= intArray[i];
	}

	// multiply them together
	return beforeIndexValues.map((num, i) => {
		return num * afterIndexValues[i];
	});
}



// brute force approach is to walk through the array and for each element
// walk through the array again and multiply all integers besides the given 
// element and store that value in a new array.

// function getProductsOfAllIntsExceptAtIndex(integers){
// 	var output = [];

// 	for(var i = 0; i < integers.length; i++){
// 		var current = integers[0];
// 		var product = 1;

// 		for(var j = 0; j < integers.length; j++){
// 			if(j !== i){
// 				product = product * integers[j];
// 			}
// 		}
// 		output.push(product);
// 	}
// 	return output;
// }

