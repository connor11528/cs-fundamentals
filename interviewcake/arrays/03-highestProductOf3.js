// Given an array of integers, find the highest product you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.

var integers = [40, 1, 3, 2, 22, 39, 1, -12]; // 34320
var negatives = [ 2, -10, -10, 1, 3]; // 300

console.log(highetProductOfThree(negatives));

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


