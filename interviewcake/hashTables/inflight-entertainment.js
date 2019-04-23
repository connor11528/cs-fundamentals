// https://www.interviewcake.com/question/python/inflight-entertainment

// Write a function that takes an integer flight_length (in minutes) and a list of 
// integers movie_lengths (in minutes) and returns a boolean indicating whether there 
// are two numbers in movie_lengths whose sum equals flight_length.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory


// Brute force O(n^2)
function twoMoviesInFlight(flight_length, movie_lengths) {

	for(var i = 0; i < movie_lengths.length; i++){
		for(var j = 0; j < movie_lengths.length; j++){
			if (j === i){ continue; }

			if(movie_lengths[i] + movie_lengths[j] === 100){
				return true;
			}
		}
	}

	return false;
}

// Optimal solution O(n)
function twoMoviesInFlight(flight_length, movie_lengths){

	const moviesSet = new Set();

	for(var i = 0; i < movie_lengths.length; i++){

		const secondMovieLength = flight_length - movie_lengths[i];

		if(moviesSet.has(secondMovieLength)){
			return true;
		}

		moviesSet.add(movie_lengths[i]);
	}

	return false;
}

console.log(twoMoviesInFlight(100, [101, 49, 51, 12, 3]));
console.log(twoMoviesInFlight(100, [101, 50, 50, 12, 3]));
console.log(twoMoviesInFlight(100, [101, 60, 32, 12, 9]));