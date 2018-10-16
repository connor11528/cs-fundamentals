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
	
	for(let i = 0; i < size; i++){
		let row = '';

		for(let j = 0; j < size; j++){
			if(i >= j){
				row += '#';
			} else {
				row += ' ';
			}
			
		}
		console.log(row);
	}
}

steps(4);