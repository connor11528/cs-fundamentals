// You have an array of integers, and for each index you want 
// to find the product of every integer except the integer at that index.
// given   [1, 7, 3, 4]
// returns [84, 12, 28, 21] 

// it is product of all other values
// so [ 7*3*4, 1*3*4, 1*7*4, 1*7*3]

// Do not use division in your solution.

var nums = [1, 7, 3, 4]; // [84, 12, 28, 21] 
var nums2 = [2, 4, 10]; //  

var output = getProductsOfAllIntsExceptAtIndex1(nums);
console.log(output);

// O(n) time and O(n) space
function getProductsOfAllIntsExceptAtIndex1(integers){
	const result      = [];
	let beforeProduct = 1;
	let afterProduct  = 1;

	for(let i = 0; i < integers.length; i++){
		result[i] = beforeProduct;
		beforeProduct *= integers[i];
	}

	for(let j = integers.length - 1; j >= 0; j--){
		result[j] *= afterProduct;
		afterProduct *= integers[j];
	}

	return result;
}



function getProductsOfAllIntsExceptAtIndex(intArray){

	var beforeIndexValues = [];

	var accumulator = 1;

	for (var i = 0; i < intArray.length; i++) {
		beforeIndexValues[i] = accumulator;
		accumulator *= intArray[i];
	}

	var afterIndexValues = [];
	accumulator = 1;

	for(var i = intArray.length - 1; i >= 0; i--){
		afterIndexValues[i] = accumulator;
		accumulator *= intArray[i];
	}

	return beforeIndexValues.map((num, i) => {
		return num * afterIndexValues[i];
	});
}

