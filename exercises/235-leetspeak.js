// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"
function leetspeak (string) {
let leetAlpha = {
    A : '4',
    B : 'B',
    C : 'C',
    D : 'D',
    E : '3',
    F : 'F',
    G : '6',
    H : 'H',
    I : '1',
    J : 'J',
    K : 'K',
    L : 'L',
    M : 'M',
    N : 'N',
    O : '0',
    P : 'P',
    Q : 'Q',
    R : 'R',
    S : '5',
    T : '7',
    U : 'U',
    V : 'V',
    W : 'W',
    X : 'X',
    Y : 'Y',
    Z : 'Z'
}
let stringArr = string.toUpperCase().split('')
for (let i in stringArr) {
    stringArr[i] = leetAlpha[stringArr[i]]
}
return stringArr.join('').toLowerCase()
}