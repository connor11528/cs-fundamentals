// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	let count = 0;

	str.split('').map((letter)=>{
		letter = letter.toLowerCase() || null;
		if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
			count++;
		}
	});

	return count;
}




// Could uss a for ... of loop 
function vowels(str) {
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}




// or a regular expression:
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}



console.log(vowels('Why do you ask?'));