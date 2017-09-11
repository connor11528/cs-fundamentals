// Write an efficient function that checks whether any permutation
// of an input string is a palindrome

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

console.log(checkPalindrome("civic"));
console.log(checkPalindrome("ivicc"));
console.log(checkPalindrome("civil"));
console.log(checkPalindrome("livci"));

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