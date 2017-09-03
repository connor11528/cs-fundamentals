var flightTime = 240;
var movies = [60, 117, 121, 54, 239, 62, 120, 120, 58];

console.log(chooseMovies(flightTime, movies));


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


// Brute force solution is for every movie go through and compare
// if any other movie adds up to flightLength
// function chooseMovies(flightLength, movieLengths){

// 	for(var i = 0; i < movieLengths.length; i++){
// 		var movie = movieLengths[i];

// 		for(var j = 0; j < movieLengths.length; j++){
// 			var compare = movieLengths[j];

// 			if(movie + compare === flightLength && i !== j) {
// 				return true;
// 			}
// 		}
// 	}
// 	return false;
// }