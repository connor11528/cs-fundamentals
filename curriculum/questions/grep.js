/*
function int[] grep(string haystack, string needle)
haystack = "aaabbbccccbbccbbbbbcdef"
needle = "bbb" 
[3,14,15,16]
*/

// Time complexity: m O(n*m)
// where n is haystack length and m is needle length
function grep(haystack, needle) {
  const haystackArr = haystack.split('');
  let needleLength  = needle.length;
  let result        = [];
  
  for(let i = 0; i < haystackArr.length; i++) {
    let testNeedle = haystack.substr(i, needleLength);
        
    if(testNeedle === needle){
      result.push(i);
    }
  }
  
  return result;
}

console.log(grep("aaabbbccccbbccbbbbbcdef", "bbb"))