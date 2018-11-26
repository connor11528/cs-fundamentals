// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(string1, string2){
	let sorted1 = string1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
	let sorted2 = string2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

	return (sorted1 === sorted2);

}

// console.log(anagrams('rail safety', 'fairy tales'));   // true
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); // true
// console.log(anagrams('Hi there', 'Bye there'));        // false

// Regular Expressions: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// string.replace(/[^\w]/g, "") --> removes any non-alphanumeric characters

// Object.keys(obj).length      --> gets the number of keys in a JS object


function anagramsSolution1(string1, string2){
	let obj1 = {},
	obj2     = {},
	s1       = string1.replace(/[^\w]/g, '').toLowerCase().split('');
	s2       = string2.replace(/[^\w]/g, '').toLowerCase().split('');

	if(s1.length !== s2.length) return false;

	s1.forEach((letter)=>{
		obj1[letter] = (obj1[letter]) ? obj1[letter] + 1 : 1;
	});

	s2.forEach((letter)=>{
		obj2[letter] = (obj2[letter]) ? obj2[letter] + 1 : 1;
	});

	for(var char in obj1){
		if(obj1[char] !== obj2[char]) return false;
	}

	return true;
}



console.log(anagramsSolution1('rail safety', 'fairy tales'));   //True
console.log(anagramsSolution1('RAIL! SAFETY!', 'fairy tales')); // True
console.log(anagramsSolution1('Hi there', 'Bye there'));        // False






















