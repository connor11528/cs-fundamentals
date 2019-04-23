// Try writing something that just walks through a file system and prints all the file names.

const fs = require('fs');

function printFileNames(dirpath){
	let file;
	const fileNames = fs.readdirSync(dirpath);
	const fileObj   = {};
	let duplicates  = [];

	for(let i = 0; i < fileNames.length; i++){

		try {
		  file = fs.readFileSync(`${dirpath}/${fileNames[i]}`, 'utf8');
		} catch(e){
			// trying to read a directory
			continue;
		}
		
		if(!fileObj[file]){
			fileObj[file] = fileNames[i];
		} else {
			console.log('found duplicate file!');

			duplicates.push([fileNames[i], fileObj[file]])

		}


	}

	return duplicates;
}


console.log(printFileNames('.'));