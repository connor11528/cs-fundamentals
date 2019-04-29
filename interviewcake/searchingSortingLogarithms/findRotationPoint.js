// Write a function for finding the index of the "rotation point," 
// which is where I started working from the beginning of the dictionary. 

// This array is huge (there are lots of words I don't know) so we want 
// to be efficient here.

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here! 5
  'babka',
  'banoffee',
  'engender',
  'endgame',
  'ester',
  'entello',
  'karpatka',
  'othellolagkage',
];

console.log(findRotationPoint(words));

// O(log n) space complexity. Every time we go through loop we cut the length in half
// O(1) space to store the indices
function findRotationPoint(wordsArray){
  const firstWord = wordsArray[0];

	let floorIndex   = 0;
	let ceilingIndex = wordsArray.length - 1;

	while(floorIndex < ceilingIndex){

	  const guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

    if(wordsArray[guessIndex] >= firstWord){
      // Look right
      floorIndex = guessIndex;
    } else {
      // Look left
      ceilingIndex = guessIndex;
    }

    if(floorIndex + 1 === ceilingIndex){
      break;
    }
	}

  return ceilingIndex;
}
