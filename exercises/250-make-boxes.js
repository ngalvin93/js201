// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****
function makeSquare (num) {
    let star = '*';
    let final = '';
    for (i=0;i<num;i++) {
        if (i<num-1) {
            final+=star.repeat(num) + '\n'
        } else {
            final+=star.repeat(num)
        }
    }
    return final
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******
function makeBox() {

}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner() {

}