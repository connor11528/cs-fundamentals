// Wite a program to detect if a string is an anagram. 

// anagram: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

// Problem source: https://bradfieldcs.com/algos/analysis/an-anagram-detection-example/


// (On^2) solution
function anagramCheckingOff (string1, string2) {
  if (string1.length !== string2.length) return false

  const string2ToCheckOff = string2.split('')

  for (let i = 0; i < string1.length; i++) {
    let letterFound = false
    for (let j = 0; j < string2ToCheckOff.length; j++) {
      if (string1[i] === string2ToCheckOff[j]) {
        string2ToCheckOff[j] = null
        letterFound = true
        break
      }
    }
    if (!letterFound) return false
  }

  return true
}

// either O(n^2) or O(n log n) depending on the sorting algorithm
// most likely O(n log n), depends on browser
function anagramSortAndCompare (string1, string2) {
  if (string1.length !== string2.length) return false

  const sortedString1 = string1.split('').sort()
  const sortedString2 = string2.split('').sort()

  for (let i = 0; i < sortedString1.length; i++) {
    if (sortedString1[i] !== sortedString2[i]) return false
  }

  return true
}

// O(n) solution
function anagramCountCompare (string1, string2) {

  function getLetterPosition (letter) {
    return letter.charCodeAt() - 'a'.charCodeAt()
  }

  const string1LetterCounts = new Array(26).fill(0)
  const string2LetterCounts = new Array(26).fill(0)

  for (let i = 0; i < string1.length; i++) {
    const letterPosition = getLetterPosition(string1[i])
    string1LetterCounts[letterPosition]++
  }

  for (let i = 0; i < string2.length; i++) {
    const letterPosition = getLetterPosition(string2[i])
    string2LetterCounts[letterPosition]++
  }

  for (let i = 0; i < string1LetterCounts.length; i++) {
    if (string1LetterCounts[i] !== string2LetterCounts[i]) {
      return false
    }
  }

  return true
}

// O(n) solution
// would need to understand time complexity of Array.reduce method
// this solution does take up more space to store the 26 character alphabet
function anagramCountCompareWithReduce (string1, string2) {

  function letterCountReducer (letterCounts, letter) {
    if (letterCounts[letter]) {
      letterCounts[letter]++
    } else {
      letterCounts[letter] = 1
    }
    return letterCounts
  }

  const string1LetterCounts = string1.split('').reduce(letterCountReducer, {})
  const string2LetterCounts = string2.split('').reduce(letterCountReducer, {})


  for (let letter in string1LetterCounts) {
    if (string1LetterCounts[letter] !== string2LetterCounts[letter]) {
      return false
    }
  }

  return string1.length === string2.length
}


