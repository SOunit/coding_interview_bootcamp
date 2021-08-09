// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const isMinus = n < 0 ? true : false;

  if (isMinus) {
    n = n * -1;
  }

  const strNum = '' + n;
  let reversed = strNum.split('').reverse().join('');

  if (isMinus) {
    reversed = '-' + reversed;
  }

  return parseInt(reversed);
}

module.exports = reverseInt;
