
var sorted = [1,2,3,4,5,6,7,8,400];
console.log(findInOrderedSet(sorted, 69));

// binary search
function findInOrderedSet(sorted, num){
	var min = 0;
	var max = sorted.length - 1;
	var guess;

	while(max >= min){
		guess = Math.floor((max+min)/2);

		if(sorted[guess] == num) return true;
		
		if(sorted[guess] > num){
			max = guess - 1;
		} else if (sorted[guess] < num) {
			min = guess + 1;
		}
	}

	return false;
}

// brute force would be loop through array 
// and check if # is current