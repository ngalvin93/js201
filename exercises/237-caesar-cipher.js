// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb
function cipher (str, shift) {
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let splitStr = str.toLowerCase().split('');
    let returnArr = [];
    for (let i=0;i<splitStr.length;i++) {
      if (alpha.indexOf(splitStr[i])===-1) {
        returnArr.push(splitStr[i])
      } else {
        for (let j=0;j<alpha.length;j++) {
          if (splitStr[i]===alpha[j]) {
            returnArr.push(alpha[(j+shift) % alpha.length])
          }
        }
      }
    }
    return returnArr.join('')
    }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'
function decipher (str, shift) {
  let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let splitStr = str.toLowerCase().split('');
  let returnArr = [];
  for (let i=0;i<splitStr.length;i++) {
    if (alpha.indexOf(splitStr[i])===-1) {
      returnArr.push(splitStr[i])
    } else {
      for (let j=0;j<alpha.length;j++) {
        if (splitStr[i]===alpha[j]) {
          returnArr.push(alpha[(j-shift) % alpha.length])
        }
      }
    }
  }
  return returnArr.join('')
  }