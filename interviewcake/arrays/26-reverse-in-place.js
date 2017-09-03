// Write a function to reverse a string in-place

var string = 'hello';
console.log(reverseString(string)); // olleh

// in es6 we can also do [b,a] = [a,b];

function reverseString(str){
	var startIndex = 0;
	var endIndex = str.length - 1;
	var stringArray = str.split('');

	while(startIndex < endIndex){
		var temp = stringArray[endIndex];
		stringArray[endIndex] = stringArray[startIndex];
		stringArray[startIndex] = temp;

		// ES6 Method: Destructuring
		// [stringArray[endIndex], stringArray[startIndex]] = [stringArray[startIndex], stringArray[endIndex]]

		startIndex++;
		endIndex--;
	}

	return stringArray.join('');
}