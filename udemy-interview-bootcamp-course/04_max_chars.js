// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let map      = {};
	let maxCount = 0;
	let letter;

	str.split('').forEach((letter)=>{
		map[letter] = (map[letter]) ? map[letter] + 1 : 1;
	});

	for(key in map){
		if(map[key] > maxCount){
			maxCount = map[key];
			letter   = key;
		}
		
	}

	return letter;
}



function maxCharSolution(str){
	const charMap = {};
	let max       = 0;
	let maxChar   = '';

	for(let char of str) {
		if(charMap[char]){
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	for(char in charMap){
		if(charMap[char] > max){
			max     = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}

console.log(maxCharSolution("abcccccccd"));


/******************
Most common string questions:

- What is the most common character in this string?
- Does string A have the same characters as string B? (anagram)
- Does the string have any repeating characters in it?
******************/