// Write a function "max" that takes an array of numbers returns the highest
// number in the array.
function max (arrayOfNumbers) {
    if (arrayOfNumbers.length === 0) {
      return 0
    } else {
      let newArrayOfNumbers = arrayOfNumbers.sort((a,b) => a-b)
      let lastNumber = newArrayOfNumbers.pop() 
      return lastNumber
    }
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
function sumNumbers (arrayOfNumbers) {
    return arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue,
    0)
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []
function positives (arrayOfNumbers) {
  let newArrayOfNumbers = arrayOfNumbers.filter(val => val > 0);
  return newArrayOfNumbers
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js
function evens (arrayOfNumbers) {
  let newArrayOfNumbers = arrayOfNumbers.filter(val => val % 2 === 0);
  return newArrayOfNumbers
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js
function odds (arrayOfNumbers) {
  let newArrayOfNumbers = arrayOfNumbers.filter(val => val % 2 !== 0);
  return newArrayOfNumbers
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]
function integers (arrayOfNumbers) {
  let newArrayOfNumbers = [];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (Number.isInteger(arrayOfNumbers[i]) === true) {
      newArrayOfNumbers.push(arrayOfNumbers[i]);
    }
  }
  return newArrayOfNumbers
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
function squareDance (arrayOfNumbers) {
  return arrayOfNumbers.map(x => x * x)
}