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
	const midpoint = Math.floor((2 * height - 1) / 2);
	

	for(var row = 0; row < height; row++){
		let block = '';

		for(var column = 0; column < 2 * height - 1; column++){

			block += (midpoint - row <= column && midpoint + row >= column) ? '#' : ' ';
		}
		console.log(block);
	}

}


function pyramidsRecursive(height, row = 0, level = ''){
	if(row === height) return;

	if(level.length === 2 * height - 1){
		console.log(level);
		return pyramidsRecursive(height, row + 1);
	}

	const midpoint = Math.floor((2 * height - 1) / 2);
	let add;

	if(midpoint - row <= level.length && midpoint + row >= level.length){
		add = '#';
	} else {
		add = ' ';
	}

	pyramidsRecursive(height, row, level + add);

}

pyramidsRecursive(3);