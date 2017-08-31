// Select the middle element and compare lower or higher

// O(log n)

/****** Iterative Solution *******/

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
function doSearch(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess;
    
    while(max >= min){
        guess = Math.floor((min+max)/2);

        if(array[guess] === targetValue){ 
            return guess;
        } else if(array[guess] < targetValue){
            min = guess + 1;
        } else { 
            max = guess - 1;
        }
    }
    return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var result = doSearchRecursive(primes, 73);
console.log("Found prime at index " + result);



/****** Recursive Solution (does not find index) *******/

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
// function doSearch(array, targetValue) {
// 	var min = 0;
// 	var max = array.length - 1;

//     var guess = parseInt((min + max)/2, 10);
    
//     if(array[guess] === targetValue){
//         return true;
//     }
    
//     if(array[guess] > targetValue){
//         var newArr =  array.slice(min, guess + 1);
//         return doSearchRecursive(newArr, targetValue);
//     } else if (array[guess] < targetValue){
//         var newArr = array.slice(guess + 1, max);
//         return doSearchRecursive(newArr, targetValue);
//     }

// 	return -1;
// };


