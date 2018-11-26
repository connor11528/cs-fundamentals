// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(size){
	
	for(let row = 0; row < size; row++){
		let step = '';

		for(let column = 0; column < size; column++){
			if(row >= column){
				step += '#';
			} else {
				step += ' ';
			}
			
		}
		console.log(step);
	}
}

function stepsRecursive(size, row = 0, step = ''){
	// base case
	if(size === row){
		return;
	}

	// move on to next row
	if(size === step.length){
		console.log(step);
		return stepsRecursive(size, row + 1);
	}

	// build current row
	step += (step.length <= row) ? '#' : ' ';

	stepsRecursive(size, row, step);
}

stepsRecursive(4);


