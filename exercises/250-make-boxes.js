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
function makeBox (horizontal,vertical) {
  const star = '*';
  const space = ' ';
  let innerRow = ''
  let firstRow = star.repeat(horizontal)
  if (vertical > 1) {
    for (i=1;i<=horizontal;i++) {
      if (i < 2) {
        innerRow += star
      } else if (i <= horizontal-1) {
        innerRow += space
      } else {
        innerRow += star + '\n'
      }
    }
    return firstRow + '\n' + innerRow.repeat(vertical - 2) + firstRow;
  } else {
    return firstRow
  }
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
function makeBanner (text) {
  const star = '*';
  const space = ' ';
  let length = text.length + 4;
  let starRow = star.repeat(length);
  let stringRow = star + space + text + space + star;
  return starRow + '\n' + stringRow + '\n' + starRow;
}