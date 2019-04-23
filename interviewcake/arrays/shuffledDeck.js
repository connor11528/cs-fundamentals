// To prove this, let's write a function to tell us if a full deck of cards 
// shuffledDeck is a single riffle of two other halves half1 and half2.

// We'll represent a stack of cards as an array of integers in the range 
// 1..52 (since there are 52 distinct cards in a deck).

// O(n^2)
function isSingleRiffle(shuffledDeck, half1, half2){
	if(shuffledDeck.length === 0){
		return true;
	}

	if(half1.length && shuffledDeck[0] === half1[0]){
		return isSingleRiffle(shuffledDeck.slice(1), half1.slice(1), half2);
	} else if (half2.length && shuffledDeck[0] === half2[0]){
		return isSingleRiffle(shuffledDeck.slice(1), half1, half2.slice(1));
	} else {
		return isSingleRiffle([], [], []);
	}

}

// O(n) time and O(1) space
function isSingleRiffle(shuffledDeck, half1, half2){
  let half1Index = 0;
  let half2Index = 0;

  for (let i = 0; i < shuffledDeck.length; i++){
  	if(half1Index < half1.length && shuffledDeck[i] === half1[half1Index]){
  		half1Index++;
  	} else if(half2Index < half2.length && shuffledDeck[i] === half2[half2Index]){
  		half2Index++;
  	} else {
  		return false;
  	}
  }

  return true;
}