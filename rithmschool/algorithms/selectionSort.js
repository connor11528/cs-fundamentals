// Find the smallest card. Swap it with the first card.
// Find the second-smallest card. Swap it with the second card.
// Find the third-smallest card. Swap it with the third card.
// Repeat finding the next-smallest card, and swapping it into the correct position until the array is sorted.
// This algorithm is called selection sort because it repeatedly selects the next-smallest element and swaps it into place.

// O(n^2)

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[secondIndex];
    array[secondIndex] = array[firstIndex];
	array[firstIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) { 
    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = startIndex + 1; i < array.length; i++){
        if(array[i] < minValue) { 
            minValue = array[i]; 
            minIndex = i; 
        }
    }
    
    return minIndex;
}; 

var selectionSort = function(array) {
    for(var i = 0; i< array.length; i++){
        var min = indexOfMinimum(array, i);
        swap(array, i, min);
    }
    return array;
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log("Array after sorting:  " + array);


