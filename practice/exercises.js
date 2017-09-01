function checkTen(array){
    for(var i = 0; i < array.length; i++){
        console.log(array.indexOf(array[i]));

        // if(array.indexOf(array[i])){
        //     return false;
        // }


    }
    return true;
}

console.log(checkTen([1,1,2,3,4,5,6,7,8,9]))


// // Given an array a that contains only numbers in the range from 1 to a.length, find the first 
// // duplicate number for which the second occurrence has the minimal index. In other words, if 
// // there are more than 1 duplicated numbers, return the number for which the second occurrence 
// // has a smaller index than the second occurrence of the other number does. If there are no such 
// // elements, return -1.
// // Source: Codefights

// function firstDuplicate(arr) {

//     // find duplicates
//     var counts = arr.map((a, i)=>{
//         return { name: a, count: 1, index: i};
//     });
    
//     var totals = counts.reduce(function(a, b, i){
//         // handle >1 occurence
//         if(typeof a[b.name] === 'object'){
//             return a;
//         }
            
//         if(a[b.name]){
//             a[b.name] = { count: a[b.name] + b.count, index: b.index }; 
//         } else {
//             a[b.name] = b.count;
//         }

//         return a;
//     }, {});

//     var hasDuplicates = false;
//     var counts = [];
    
//     for(var item in totals){
//         if(typeof totals[item] === 'object'){
//             hasDuplicates = true;
//             counts.push(Object.assign({name: item }, totals[item]));
//         }       
//     }
    
//     // if no duplicates return -1
//     if(!hasDuplicates) return -1;
    
//     var minimal = arr.length;
    
//     // get lowest index for duplicate
//     counts.forEach((d)=>{
//         if(d.index < minimal)
//             minimal = d.index;
//     });
    
//     return arr[minimal];
// }

// // Given a string s, find and return the first instance of a non-repeating character in it. 
// // If there is no such character, return '_'.
// // Source: Codefights

// function firstNotRepeatingCharacter(str) {
//     var repeats = [];
//     for(var i = 0; i < str.length; i++){
//         repeats.push({ letter: str[i], count: 1 });
//     }
    
//     var counts = repeats.reduce(function(a, b){
        
//         if(a[b.letter])
//             a[b.letter] += b.count;
//         else
//             a[b.letter] = 1;
//         return a;
//     }, {});
    
//     var nonrepeats = [];
//     for (var k in counts){
//         if(counts[k] === 1)
//             nonrepeats.push(k)
//     }
    
//     if (nonrepeats.length === 0)
//         return '_';
    
//     var firstNonRepeater = str.length;
//     nonrepeats.forEach(function(n){
//         if(str.indexOf(n) < firstNonRepeater)
//             firstNonRepeater = n;
//     });
//     return firstNonRepeater;
// }

// // You are given an n x n 2D matrix that represents an image. Rotate the image 
// // by 90 degrees (clockwise).
// // Source: Codefights

// function rotateImage(img) {
//     var output = [];
//     var max = img[0].length;
//     for(var i = 0; i < max; i++){
//         output.push([...Array(max)]);
//     }
    
//     for(var i = 0; i < max; i++){
//         var row = img[i];
        
//         for(var j = 0; j < max; j++){
//             output[j][i] = img[i][j]
//         }
//     }
    
//     return output.map(function(row){
//         return row.reverse();
//     });
// }

// // Return the number (count) of vowels in the given string.
// // Source: Codewars

// function getCount(str) {
//   var vowelsCount = 0;
//   str = str.toLowerCase();
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
  
//   for(let s of str){
     
//      if(vowels.includes(s)) vowelsCount += 1;
//   }
  
//   return vowelsCount;
// }

// // Return the next square if sq if a perfect square, -1 otherwise
// // Source: Codewars

// function findNextSquare(sq) {
    
//   if (!Number.isInteger(Math.sqrt(sq))) return -1;
  
//   var i = sq + 1;
  
//   while(!Number.isInteger(Math.sqrt(i))){
//     i++;
//   }

//   return i;
// }

// // Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// // Source: Codewars

// function solution(number){
//   let sum = 0;
//   number -= 1;
//   while(number > 0){
//     if(number % 3 == 0 || number % 5 == 0){
//       sum += number;
//     }
//     number--;
//   }
  
//   return sum;
// }


// // You are going to be given an array of integers. Your job is to take that array and find an index N 
// // where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
// // If there is no index that would make this happen, return -1.
// // Source: Codewars

// function sum(arr){
//   return arr.reduce(function(sum, value){
//     return sum + value;
//   }, 0);
// }

// function findEvenIndex(arr)
// {
//   for(var i=0; i < arr.length; i++){
//     let left = arr.slice(0, i);
//     let right = arr.slice(i+1, arr.length);
        
//     if (sum(left) == sum(right)) return i;
//   }
//   return -1;
// }


// // The new "Avengers" movie has just been released! There are a lot of people at the cinema 
// // box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. 
// // A "Avengers" ticket costs 25 dollars. Can Vasya sell a ticket to each person and give the 
// // change if he initially has no money and sells the tickets strictly in the order people follow in the line?
// // Source: Codewars

// function tickets(peopleInLine){
//   let revenue = 0;
//   let bills = {'25': 0, '50': 0, '100': 0};
  
//   for(var i = 0; i < peopleInLine.length; i++){
//     var person = peopleInLine[i], 
//         change = person - 25;
    
//     bills[person] += 1;
    
//     revenue = revenue + 25 - change;
//     if(revenue < 0){
//       return 'NO';
//     } else {
//       // give change
//       if(change == 25){ 
//         if(bills[25] >= 1){ 
//           bills[25] -= 1;
//         } else {
//           return 'NO';
//         }
//       } 
      
//       if (change == 50){ 
//         if (bills[50] != 0){
//           bills[50] -= 1;
//         } else if (bills[25] >= 2) {
//           bills[25] -= 2;
//         } else {
//           return 'NO';
//         }
//       }
      
//       if (change == 75){ 
//         if (bills[25] >= 1 && bills[50] >= 1) {
//           bills[25] -= 1;
//           bills[50] -= 1;
//         } else if (bills[25] >= 3){
//           bills[25] -= 3;
//         } else {
//           return 'NO';
//         }
//       }
//     }
//   };
//   return 'YES';  
// }


// // Implement the function unique_in_order which takes as argument a 
// // sequence and returns a list of items without any elements with the same value 
// // next to each other and preserving the original order of elements

// var uniqueInOrder=function(iterable){
//   let output = [];
//   for(var i = 0; i < iterable.length; i++){
//     if(iterable[i] !== iterable[i-1]){
//       output.push(iterable[i]);
//     }
//   }
//   return output;
// }


// //Given two arrays a and b write a function comp(a, b) that checks whether the two arrays have the 
// // "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are 
// // the elements in a squared, regardless of the order.

// function comp(array1, array2){
//   try {
//     array1.sort((a,b) => a-b); array2.sort((a,b) => a-b);
//   } catch(e) { return false; }
  
//   for(var i = 0; i < array1.length; i++){
//     if((array1[i] * array1[i]) !== array2[i]){
//       return false;
//     }
//   }
//   return true;
// }


// // accum("abcd");    // "A-Bb-Ccc-Dddd"
// // accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// // accum("cwAt");    // "C-Ww-Aaa-Tttt"
// function accum(s) {
//   let output = [], i = 0;
  
//   for(letter of s){
//     output.push(letter.toUpperCase() + letter.toLowerCase().repeat(i));
//     i++;
//   }
//   return output.join('-');
// }


// // In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// // You have function with one side of the DNA; you need to get the other complementary side. 
// // DNA strand is never empty or there is no DNA at all

// function DNAStrand(dna){
//   var DNA = Array.of(...dna);
  
//   return DNA.map((curr, i)=>{
//     if(curr == 'A') return 'T';
    
//     if(curr == 'T') return 'A';
    
//     if(curr == 'C') return 'G';
    
//     if(curr == 'G') return 'C';
//   }).join('');
// }

// // Write a method that takes an array of consecutive (increasing) letters as input and 
// // that returns the missing letter in the array.

// function findMissingLetter(array){
//   for(var i = 0; i < array.length; i++){
//     var currentPlusOne = array[i].charCodeAt(0) + 1;
//     var next = array[i+1].charCodeAt(0);
    
//     if(currentPlusOne !== next){
//       return String.fromCharCode(currentPlusOne);
//     }
//   }
// }

