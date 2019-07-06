// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'
function rockPaperScissors (throwOne, throwTwo) {
let itemOne = {
    r: 'rock',
    p: 'paper',
    s: 'scissor'
}
let itemTwo = {
    r: 'rock',
    p: 'paper',
    s: 'scissor'
}
if (throwOne === itemOne) {
    return 'draw'
} else if (throwOne === throwOne.r && throwTwo === throwTwo.p || throwTwo.s) {
    return 'player 1'
}
}