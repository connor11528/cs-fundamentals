// The integers are in the range 1..n
// The array has a length of n+1
// our array has at least one integer which appears at least twice

// Write a function which finds an integer that appears more than once in our array

const integers = [1,1,2,3,2,2];
console.log(findRepeats1(integers));

// optimized for space
// O(1) space. O(n log n) for time
function findRepeats1(integers){
	// sort array in place. Takes O(n log n) time and O(1) space
	integers.sort((a, b) => {
		return a - b;
	});

	for(let i = 0; i < integers.length; i++){
		if(integers[i] === integers[i - 1]){
			return integers[i];
		}
	}

	return 'Error no duplicates';
}

// O(n) for space. O(n) for time
// This returns all duplicates
function findRepeats(integers){

	const set = new Set();
	const duplicates = new Set();

	for(let i = 0; i < integers.length; i++){
		if(set.has(integers[i])){
			duplicates.add(integers[i])
		}

		set.add(integers[i]);
	}

	return duplicates;
}