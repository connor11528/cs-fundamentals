// var flightTime = 240;
// var movies = [60, 117, 121, 54, 239, 62, 120, 120, 58];

// console.log(chooseMovies(flightTime, movies));


function chooseMovies(flightLength, movieLengths){
	var hashMap = {};

	for(var i = 0; i < movieLengths.length; i++){
		(hashMap[movieLengths[i]]) ? hashMap[movieLengths[i]]+=1 : hashMap[movieLengths[i]] = 1;
	}

	for(var i = 0; i < movieLengths.length; i++){
		var difference = flightTime - movieLengths[i];

		if(hashMap[difference] && difference !== movieLengths[i]){
			return true;
		}

		if(difference == movieLengths[i] && hashMap[difference] >= 2){
			return true;
		}

	}

	return false;
}


// you're building a feature for choosing two 
// movies whose total runtimes will equal the exact 
// flight length

const flightLength = 100;
const movieLengths = [ 12, 13, 49, 49, 50, 75 ];

console.log(chooseMovies2(flightLength, movieLengths));

// O(n) time, and O(n) space
function chooseMovies2(flightLength, movieLengths){
	let movies = new Set();

	for(let i = 0; i < movieLengths.length; i++){
		const requiredLength = flightLength - movieLengths[i];

		if(movies.has(requiredLength)){
			return true;
		} else {
			movies.add(movieLengths[i]);
		}
	}

	return false;
}


