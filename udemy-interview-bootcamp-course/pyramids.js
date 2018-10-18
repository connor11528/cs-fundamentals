// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramids(height){
	const midpoint = Math.floor((height + height - 1) / 2);
	

	for(var row = 0; row < height; row++){
		let block = '';

		for(var column = 0; column < height + height - 1; column++){

			block += (midpoint - row <= column && midpoint + row >= column) ? '#' : ' ';
		}
		console.log(block);
	}

}


function pyramidsRecursive(height){
	

}

pyramids(3);