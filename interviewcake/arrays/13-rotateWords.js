  var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

console.log(rotateWords(words));

function rotateWords(wordList){
	var max = wordList.length - 1;
	var min = 0;
	var guess;

	while(max >= min){
		guess = Math.floor((max+min)/2);

		if(wordList[guess] >wordList[max]) ){
			console.log()
		}
	}

}