// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
function reverse (word) {
    return word.split('').reverse().join('')
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
function findLongestWord (string) {
    let stringArray = string.split(' ');
    let longestWord = '';
    for(let i = 0 ; i < stringArray.length; i++) {
        if (stringArray[i].length > longestWord.length) {
        longestWord = stringArray[i];
        }
    }
    return longestWord
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
// funtion nicer (string) {
// let forbiddenWords = ['heck', 'darn', 'dang', 'crappy'];
// let stringSplit = string.split()
// let cleanSentence = [];
function nicer(sentence){
    var myBadWords = ['darn', 'heck', 'dang', 'crappy']
    var newSentence = []
    var splitSentence = sentence.split(' ')
    for (var i = 0; i < splitSentence.length; i++){
      if (myBadWords.includes(splitSentence[i]) != true) {
        newSentence.push(splitSentence[i])
      }
    }
 return newSentence.join(' ')
 }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
function capitalizeAll (sentence) {
    let sentenceSplit = sentence.toLowerCase().split(' ');
    for (var i=0; i < sentenceSplit.length; i++) {
        sentenceSplit[i] = sentenceSplit[i][0].toUpperCase() + sentenceSplit[i].slice(1);
    }
    return sentenceSplit.join(' ');
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

//  Different methods of approach:
//      - EX1: looping (for) through using charAt() and substr()
//      - EX2: regular expressions (RegEx) to find and replace
//      - EX3: while loop with index of delimitter on the string

//  EX1
function split (string, delimiter) {
    let results = [];
    let delimiterLength = delimeter.length;
    for (var index=0; index < string.length; index++) {
        let characters = string.substr(index, delimeterLength);
        // let chunkStart =
        // let chunkEnd
        //console.log(characters, index)
        if (characters === delimiter) {
            //console.log(string.substr(0,index))
        }
    }
    return results
}

//  Working example from StackOverflow
// function CustomSplit(str, delimiter, removeEmptyItems) {
//     if (!delimiter || delimiter.length === 0) return [str];
//     if (!str || str.length === 0) return [];
//     var result = [];
//     var j = 0;
//     var lastStart = 0;
//     for (var i=0;i<=str.length;) {
//       if (i == str.length || str.substr(i,delimiter.length) == delimiter)
//       {
//         if (!removeEmptyItems || lastStart != i)
//         {
//             result[j++] = str.substr(lastStart, i-lastStart);
//         }
//         lastStart = i+delimiter.length;
//         i += delimiter.length;    
//       } else i++;
//     }
//     return result;
//   }