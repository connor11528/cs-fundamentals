// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz


function fizzBuzz(integer){
	let output = '';
	for(var i = 1; i <= integer; i++){
		if(i % 3 === 0 && i % 5 === 0){
			output = "fizzbuzz";
		} else if (i % 3 === 0){
			output = "fizz";
		} else if (i % 5 === 0){
			output = "buzz";
		} else {
			output = i;
		}
		console.log(output);
	}
}

fizzBuzz(15);