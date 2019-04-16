const myArray = [3, 4, 6, 10, 11, 12, 15, 22];
const alicesArray = [1, 5, 8, 12, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]


// O(n) solution
function mergeArrays(array1, array2){
	let result = [];
	let index1 = 0;
	let index2 = 0;
	let resultIndex = 0;
	
	while(resultIndex < (array1.length + array2.length)){

		const array1Empty = index1 >= array1.length;
		const array2Empty = index2 >= array2.length;

		// check if arrays are empty
		if(array1Empty){
			result[resultIndex] = array2[index2];
			index2++;
		} else if(array2Empty){
			result[resultIndex] = array1[index1];
			index1++;

		// if not empty push in the smallest element
		} else if(array1[index1] < array2[index2]){
			result[resultIndex] = array1[index1];
			index1++;
		} else {
			result[resultIndex] = array2[index2];
			index2++
		}

		resultIndex++;

	}

	return result;
}


// O(n log n)
// Does not take advantage of fact that arrays are already sorted
function mergeInefficient(array1, array2){
	return array1.concat(array2).sort((a, b)=>{
		return a - b;
	})
}