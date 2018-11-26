// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str){
	const middle = Math.floor(str.length/2);

	const firsthalf  = str.substring(0, middle);
	const secondhalf = (str.length % 2 === 0)? str.substring(middle) : str.substring(middle + 1);
	
	return (firsthalf === reverse(secondhalf));
}

function reverse(str){
	return str.split('').reduce((accum, letter)=> letter + accum, '');
}


// first solution. No need for splitting the terms into halves!
function palindromeSolution1(str){
	const reversed = str.split('').reduce((accum, letter)=> letter + accum, '');
	return reversed === str;
}


// second solution: compare each letter from beginning and end of array
function palindromeSolution2(str){
	return str.split('').every((current, index, arr)=>{
		return (current === arr[arr.length - index - 1]);
	});
}

console.log(palindromeSolution2("abba"));
console.log(palindromeSolution2("abcdefg"));