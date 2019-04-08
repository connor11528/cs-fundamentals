
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
	for(let i = 0; i < arr.length; i++){
		let indexOfMin = i;

		for(let j = i + 1; j < arr.length; j++){
			if(arr[j] < arr[indexOfMin]){
				indexOfMin = j;
			}
		}

		if(indexOfMin !== i){
			const lesser = arr[indexOfMin];
			arr[indexOfMin] = arr[i];
			arr[i] = lesser;
		}
	}

	return arr;
}

function mergeSort(arr) {
  if(arr.length === 1){
  	return arr;
  }

  // determine centerpoint of array
  const center = Math.floor(arr.length / 2);
  const left   = arr.slice(0, center);
  const right  = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

// take two sorted arrays and merge them
// together into one sorted array
function merge(left, right) {
	let results = [];

	while(left.length && right.length){
		if(left[0] < right[0]){
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}

	return [...results, ...left, ...right];
}
