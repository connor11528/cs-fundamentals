// Given an array of integers, find the highest product you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.

var integers = [40, 1, 3, 2, 22, 39, 1, -12]; // 34320
var negatives = [ 2, -10, -10, 1, 3]; // 300

console.log(highetProductOfThree1(integers));


// O(n) time, O(1) space
function highetProductOfThree1(integers){
	let first = 0;
	let second = 1;
	let third = 2;

	let highestProductOfThree = integers[0] * integers[1] * integers[2];

	for(let i = 3; i < integers.length; i++){
		const current = integers[i];

		const test1 = current * integers[first] * integers[second];
		const test2 = current * integers[second] * integers[third];
		const test3 = current * integers[first] * integers[third];

		highestProductOfThree = Math.max(test1, test2, highestProductOfThree);

		if(highestProductOfThree === test1){
			[first, second, third] = [i, first, second];
		} else if(highestProductOfThree === test2){
			[first, second, third] = [i, second, third];
		} else if(highestProductOfThree === test3){
			[first, second, third] = [i, first, third]
		}
	}

	return highestProductOfThree;
}






function highetProductOfThree(integers){
	var highestOf3 = integers[0] * integers[1] * integers[2];

	var highestOf2 = integers[0] * integers[1];
	var lowestOf2 = integers[0] * integers[1];

	var highest = Math.max(integers[0], integers[1]);
	var lowest = Math.min(integers[0], integers[1]);

	for(var i = 2; i < integers.length; i++){
		var current = integers[i];

		// do we have new highest of 3?
		highestOf3 = Math.max(
			highestOf3,
			current * highestOf2,
			current * lowestOf2
		);

		// new highest of 2?
		highestOf2 = Math.max(
			highestOf2, 
			current * highest, 
			current * lowest 
		);

		// new lowest of 2?
		lowestOf2 = Math.max( 
			lowestOf2, 
			current * highest, 
			current * lowest
		);

		// new highest?
		highest = Math.max(highest, current);

		// new lowest?
		lowest = Math.max(lowest, current);
	}

	return highestOf3;
}


