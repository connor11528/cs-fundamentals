// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	let currentChunk = 0;
	let result       = [];
	let chunk        = [];

	for(var i = 0; i < array.length; i++){
		if(currentChunk == size){
			result.push(chunk);
			currentChunk = 0;
			chunk        = [];
		}

		currentChunk++;
		chunk.push(array[i]);
	}

	if(chunk.length) result.push(chunk);

	return result;
}


function chunkSolution1(array, size){
	// create empty array to hold all other arrays
	const chunked = [];

	for(let element of array){
		// retrieve the last element in the chunked array
		const last = chunked[chunked.length - 1];

		// if there is no last element or it's length is the size
		if(!last || last.length === size){

			// add a new chunk with the current element
			chunked.push([element]);
		} else {
			// add the current element into the chunk
			last.push(element);
		}
	}

	return chunked;
}


// Rolling window with startIndex variable
// Good practice for using Array.prototype.slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
function chunkSolution2(array, size){
	let startIndex = 0;
	let output     = [];

	while(startIndex < array.length){

		output.push(array.slice(startIndex, startIndex + size));

		startIndex += size;
	}

	return output;	
}



console.log(chunkSolution2([1, 2, 3, 4], 2));
console.log(chunkSolution2([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunkSolution2([1, 2, 3, 4, 5], 4));
