// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'
function longLongVowels (string) {

    const vowels = ['a','e','i','o','u'];
    let stringLetterArray = string.split('')
    let returnArr = [];
    
    for (i=0; i<string.length; i++) {
    if (stringLetterArray.charAt(i) == "a" || stringLetterArray.charAt(i) == "e" || stringLetterArray.charAt(i) == "i" || stringLetterArray.charAt(i) == "o" || stringLetterArray.charAt(i) == "u") {
      returnArr.push(stringLetterArray.charAt(i))
    }

    }
    
    return returnArr
    
    }
    
    longLongVowels ('Hello from the other side')