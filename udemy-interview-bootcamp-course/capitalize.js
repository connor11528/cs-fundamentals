// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
// capitalize('a short sentence') --> 'A Short Sentence'
// capitalize('a lazy fox') --> 'A Lazy Fox'
// capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(string){
	return string.split(' ').map((word)=>{
		return word.substr(0, 1).toUpperCase() + word.substr(1);
	}).join(' ');
}


// console.log(capitalize('a short sentence'));     //'A Short Sentence'
// console.log(capitalize('a lazy fox'));           // 'A Lazy Fox'
// console.log(capitalize('look, it is working!')); // 'Look, It Is Working!'


function capitalizeSolution1(string){
	if(string.length === 0) return '';

	let result = string[0].toUpperCase();

	for(let i = 1; i < string.length; i++){
		if(result[i-1] === " "){
			result += string[i].toUpperCase();
		} else {
			result += string[i];
		}
	}

	return result;
}

console.log(capitalizeSolution1('a short sentence'));     //'A Short Sentence'
console.log(capitalizeSolution1('a lazy fox'));           // 'A Lazy Fox'
console.log(capitalizeSolution1('look, it is working!')); // 'Look, It Is Working!'
