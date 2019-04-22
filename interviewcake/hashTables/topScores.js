// Write a function that takes:

// 1. an array of unsortedScores
// 2. the highestPossibleScore in the game

// and returns a sorted array of scores in less than O(n log n) time.

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));

function sortScores(unsortedScores, highestPossibleScore){
	let scoreCounts = new Array(highestPossibleScore + 1).fill(0);

	unsortedScores.forEach((score)=>{
		scoreCounts[score]++;
	});

  const sortedScores = [];

  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scoreCounts[score];

    for (let time = 0; time < count; time++) {
      sortedScores.push(score);
    }
  }

  return sortedScores;
}


// Ways to get O(n) runtime:
// - Greedy Algorithm: good for grabbing specific value, not rendering whole set.
// - Counting: Build an object or array with the scores and how many times they appear.


// Fun fact: Object.keys() will sort in O(n) time
