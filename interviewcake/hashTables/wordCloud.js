console.log(wordCloud("After the beating the eggs step, Dana read the next step:"));
console.log(wordCloud("Add milk and eggs, then add flour and sugar."));


// todo: make improvements to runtime and space
function wordCloud(str){
	let splitted = stripPunctuation(str).split(' ');
	let hashMap = {};

	for(word of splitted){
		const lowered = word.toLowerCase();

		if(hashMap[lowered]){
			hashMap[lowered] += 1;
		} else {
			hashMap[lowered] = 1;
		}
	}

	return hashMap;
}


function stripPunctuation(str){
	let result = '';

	for(char of str){
		if(char == ':' || char == ',' || char == '.' || char == ';'){

		} else {
			result += char;
		}
	}

	return result;

}