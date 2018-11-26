/*

Given a string, return a new string with the reversed
order of characters

reverse('apple') => 'elppa'
*/

function reverse(str){
	let result = '';
	for(var i = str.length; i >= 0; i--){
		result += str.charAt(i);
	}
	return result;
}

// use built in array and string 
function reverseSolution1(str){
	return str.split('')
			.reverse()
			.join('');
}

// use for ... of and prepend
function reverseSolution2(str){
	let result = '';
	for(let char of str){
		result = char + result;
	}
	return result;
}

// use array reduce
function reverseSolution3(str){
	return str
		.split('')
		.reduce((result, letter)=> letter + result, '');
}

console.log(reverseSolution3('hello'));

module.exports = reverse;