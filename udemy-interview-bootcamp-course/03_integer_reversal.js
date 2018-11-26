
// reverseInteger(500) === 5
// reverseInteger(981) === 189
// reverseInteger(-15) === -51
// reverseInteger(-90) === -9

function reverseInteger(integer) {
	let isNegative = false;

	if(integer < 0) isNegative = true;

	const reversed = String(integer).split('').reverse().join('');

	return (isNegative) ? parseInt(`-${reversed}`) : parseInt(`${reversed}`);
}



// You can use Math.sign to determine the +/- of a number
// (could use reverse function as above)

function reverseIntegerSolution(integer){
	const reversed = integer.toString().split('').reduce((current, accum)=>{
		return accum + current;
	}, '');

	return Math.sign(integer) * parseInt(reversed);
}

console.log(reverseIntegerSolution(-15));
