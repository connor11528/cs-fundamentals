// Write a function reverseWords() that takes a message as an array of 
// characters and reverses the order of the words in place


// O(n) time and O(1) space!
function reverseWords(message){
  let leftIndex = 0;
  let rightIndex = message.length - 1;

  // reverse the whole array so we get "laets dnuop ekac"
  reverse(message, leftIndex, rightIndex);

  // first word starts at the beginning
  let currentWordStart = 0;

  for(let i = 0; i <= message.length; i++){

  	if(i == message.length || message[i] === ' '){
  		// reverse the word
  		reverse(message, currentWordStart, i - 1);
  		
  		// move on to the next word
  		currentWordStart = i + 1;
  	}
  }
}

// helper function to reverse elements in an array
function reverse(message, leftIndex, rightIndex){
  while (leftIndex < rightIndex) {

    const temp          = message[leftIndex];
    message[leftIndex]  = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}

const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join('')); // 'steal pound cake'


// Lesson:

// Solve a simpler version of the problem (in this case, reversing the characters instead of the words), 
// and see if that gets us closer to a solution for the original problem.
