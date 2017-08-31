var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

// we want to know if 67 is prime, if it is in the array then it is prime

function isInPrimes(num, arr){
	var min = 0, max = arr.length - 1;
	var guess = parseInt((min+max)/2);

	// number not in array
	if(arr.length == 1 && arr[guess] != num) return false;

	if(arr[guess] == num){
		// if number is in array return true
		return true;
	} else if(arr[guess] > num){
		var newArr = arr.slice(min, guess); // create new array from begin to end (end not included)
		return isInPrimes(num, newArr); // recursive call to self in order to return a value
	} else if (arr[guess] < num){
		var newArr = arr.slice(guess + 1, max + 1);
		return isInPrimes(num, newArr);
	}

}

console.log(isInPrimes(40, primes));