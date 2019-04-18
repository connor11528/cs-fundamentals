// Write an efficient function that checks whether any permutation
// of an input string is a palindrome

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

// console.log(checkPalindrome("civic"));
// console.log(checkPalindrome("ivicc"));
// console.log(checkPalindrome("civil"));
// console.log(checkPalindrome("livci"));

function checkPalindrome(str){
	var hashMap = {};

	for(var i = 0; i< str.length; i++){
		(hashMap[str[i]]) ? hashMap[str[i]] += 1 : hashMap[str[i]] = 1;
	}

	var countsGreaterThanOne = 0;
	var oneCounts = 0;

	for(var k in hashMap){
		var count = hashMap[k];
		if(count == 1) oneCounts += 1;
	}

	return (oneCounts >= 2 ) ? false : true;


}


// Write an efficient function that checks whether any permutation
// of an input string is a palindrome.

console.log(checkPalindrome2("civic")); // true
console.log(checkPalindrome2("ivicc")); // true
console.log(checkPalindrome2("civil")); // false
console.log(checkPalindrome2("livci")); // false
console.log(checkPalindrome2("aabbbccccaccccbbbaa")); // true

// O(2 * n) time, O(2 * n) space
function checkPalindrome2(str){
	let hashMap = {};
	let splitted = str.split('');
	let oddCount = 0;

	for(let i = 0; i < splitted.length; i++){
		if(hashMap[splitted[i]]){
			hashMap[splitted[i]] += 1;
		} else {
			hashMap[splitted[i]] = 1;
		}
	}

	for(let letter in hashMap){
		if(hashMap[letter] % 2 !== 0){
			oddCount += 1;
		}
	}

    return (oddCount <= 1);
}

// O(n) time, O(n) space
function checkPalindromeFimal(str){
	let unmatchedChar = new Set();

	for(let char of str){
		if(unmatchedChar.has(char)){
			unmatchedChar.delete(char);
		} else {
			unmatchedChar.add(char);
		}
	}

	return (unmatchedChar.size <= 1);
}






























