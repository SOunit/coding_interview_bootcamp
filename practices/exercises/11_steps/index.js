// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    const row = i + 1;
    for (let j = 0; j < n; j++) {
      const column = j + 1;
      if (column <= row) {
        str += '#';
      } else {
        str += ' ';
      }
    }
    console.log(str);
    str = '';
  }
}

// original 2020/10/28
// 1. create #
// 2. add ' ' until n
// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let str = '';
//     for (let j = 0; j < i + 1; j++) {
//       str += '#';
//     }
//     str = format(str, n);
//     console.log(str);
//     str = '';
//   }
// }

// function format(str, n) {
//   while (str.length < n) {
//     str += ' ';
//   }
//   return str;
// }

module.exports = steps;
