// Given an array a that contains only numbers in the range from 1 to a.length, find the first 
// duplicate number for which the second occurrence has the minimal index. In other words, if 
// there are more than 1 duplicated numbers, return the number for which the second occurrence 
// has a smaller index than the second occurrence of the other number does. If there are no such 
// elements, return -1.

// Example

// For a = [2, 3, 3, 1, 5, 2], the output should be
// firstDuplicate(a) = 3.

// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than than second occurrence of 2 does, so the answer is 3.

// For a = [2, 4, 3, 5, 1], the output should be
// firstDuplicate(a) = -1.


function firstDuplicate(arr) {

    // find duplicates
    var counts = arr.map((a, i)=>{
        return { name: a, count: 1, index: i};
    });
    
    var totals = counts.reduce(function(a, b, i){
        // handle >1 occurence
        if(typeof a[b.name] === 'object'){
            return a;
        }
            
        if(a[b.name]){
            a[b.name] = { count: a[b.name] + b.count, index: b.index }; 
        } else {
            a[b.name] = b.count;
        }

        return a;
    }, {});

    var hasDuplicates = false;
    var counts = [];
    
    for(var item in totals){
        if(typeof totals[item] === 'object'){
            hasDuplicates = true;
            counts.push(Object.assign({name: item }, totals[item]));
        }       
    }
    
    // if no duplicates return -1
    if(!hasDuplicates) return -1;
    
    var minimal = arr.length;
    
    // get lowest index for duplicate
    counts.forEach((d)=>{
        if(d.index < minimal)
            minimal = d.index;
    });
    
    return arr[minimal];
}



// Given a string s, find and return the first instance of a non-repeating character in it. 
// If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. 
// Return c since it appears in the string first.


function firstNotRepeatingCharacter(str) {
    var repeats = [];
    for(var i = 0; i < str.length; i++){
        repeats.push({ letter: str[i], count: 1 });
    }
    
    var counts = repeats.reduce(function(a, b){
        
        if(a[b.letter])
            a[b.letter] += b.count;
        else
            a[b.letter] = 1;
        return a;
    }, {});
    
    var nonrepeats = [];
    for (var k in counts){
        if(counts[k] === 1)
            nonrepeats.push(k)
    }
    
    if (nonrepeats.length === 0)
        return '_';
    
    var firstNonRepeater = str.length;
    nonrepeats.forEach(function(n){
        if(str.indexOf(n) < firstNonRepeater)
            firstNonRepeater = n;
    });
    return firstNonRepeater;
}

// You are given an n x n 2D matrix that represents an image. Rotate the image 
// by 90 degrees (clockwise).

// Example

// For

// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
// the output should be

// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]


function rotateImage(img) {
    var output = [];
    var max = img[0].length;
    for(var i = 0; i < max; i++){
        output.push([...Array(max)]);
    }
    
    for(var i = 0; i < max; i++){
        var row = img[i];
        
        for(var j = 0; j < max; j++){
            output[j][i] = img[i][j]
        }
    }
    
    return output.map(function(row){
        return row.reverse();
    });
    
    // 0,0 -> 0,2
    // 0,1 -> 1,2
    // 0,2 -> 2,2
    // 
    // 1,0 -> 0,1
    // 1,1 -> 1,1
    // 1,2 -> 2,1
    // 
    // 2,0 -> 0,0
    // 2,1 -> 1,0
    // 2,2 -> 2,0
}


