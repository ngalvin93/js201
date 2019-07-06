// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'
function rockPaperScissors (throwOne, throwTwo) {
    const rock = 'rock'
    const paper = 'paper'
    const scissors = 'scissors'
if (throwOne === throwTwo) {
    return 'draw'
} else if (throwOne === rock && throwTwo === scissors) {
    return 'player 1'
} else if (throwOne === paper && throwTwo === rock) {
    return 'player 1'
} else if (throwOne === scissors && throwTwo === paper) {
    return 'player 1'
} else if (throwOne === rock && throwTwo === paper) {
    return 'player 2'
} else if (throwOne === paper && throwTwo === scissors) {
    return 'player 2'
}  else if (throwOne === scissors && throwTwo === rock) {
    return 'player 2'
}
}