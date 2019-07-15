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
  const vowels = 'aeiou';
  let newString = ''
  for (i=0; i<string.length; i++) {
    if (vowels.includes(string[i]) && string[i] === string[i+1]) {
      newString += string[i].repeat(4)
    } else {
      newString += string[i]
    }
  }
return newString
  }