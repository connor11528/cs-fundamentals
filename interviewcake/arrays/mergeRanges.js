// Write a function mergeRanges() that takes an array of multiple meeting time ranges 
// and returns an array of condensed ranges.

const input = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
];

// Expected output:
// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]


const input2 = [{ startTime: 2, endTime: 4 }, { startTime: 1, endTime: 3 }]
// Expected output2:
//[{ startTime: 1, endTime: 4 }]


// Complexity: O(nlgn) time and O(n) space.
function mergeRanges(meetings) {


  // sorting takes O(nlgn) time
	const sortedMeetings = meetings.sort(function(a, b){
		return a.startTime - b.startTime;
	});

	let mergedMeetings = [sortedMeetings[0]];

	for(let i = 1; i < sortedMeetings.length; i++){

	 const currentMeeting    = sortedMeetings[i];
	 const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

	 // if meetings overlap use the later of the two as endTime
	 if(currentMeeting.startTime <= lastMergedMeeting.endTime){
	 	lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
	 } else {
	 	// add the current meeting since it doesn't overlap
	 	mergedMeetings.push(currentMeeting);
	 }
	}
  
  // in the worst case no meetings overlap so we'd take up O(n) space
	return mergedMeetings;
}

console.log(mergeRanges(input));