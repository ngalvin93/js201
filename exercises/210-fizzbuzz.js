// Write a function "fizzbuzz" that returns the fizzbuzz string for an input number.
// A fizzbuzz string is defined as the following:
// For every number from 1 to the input number
// - if that number is not a multiple of 3 or 5, add a period "." to the fizzbuzz string
// - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
// - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
// - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
//
// Examples:
// fizzbuzz(3) --> '..fizz'
// fizzbuzz(15) --> '..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz'
function fizzbuzz (number) {

let arrOut = []
for (let i = 1; i <= number; i++) {
    arrOut.push(i)
}
function checkThings (arrOut) {
    if (arrOut / 5 !== 0 || arrOut / 3 !== 0) {
        return "."
    } else if (arrOut / 5 !== 0 && arrOut / 3 === 0) {
         return "fizz"
    } else if (arrOut / 5 === 0 && arrOut / 3 !== 0) {
        return "buzz"
    } else if (arrOut / 5 === 0 && arrOut / 3 === 0) {
        return "fizzbuzz"
    } 
}
return checkThings()
}
// accumilation!