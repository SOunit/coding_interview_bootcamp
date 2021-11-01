// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {}

// original
// 0, 1, 2
// 0, 1, 2

// 0, 1, 2, 3, 4
// 0, 1, 2, 3, 4
// 0, 1, 2, 3, 4

// 0, 1, 2, 3, 4, 5, 6
// 0, 1, 2, 3, 4, 5, 6
// 0, 1, 2, 3, 4, 5, 6
// 0, 1, 2, 3, 4, 5, 6

// function pyramid(n) {
//   str = '';
//   const columnLength = getLength(n);
//   const middle = (columnLength - 1) / 2;

//   //   console.log(columnLength);
//   for (let j = 0; j < n; j++) {
//     const row = j;
//     for (let i = 0; i < columnLength; i++) {
//       const column = i;

//       const distance = Math.abs(middle - column);
//       if (distance <= row) {
//         str += '#';
//       } else {
//         str += ' ';
//       }
//     }
//     console.log(str);
//     str = '';
//   }
// }

// function getLength(n) {
//   // 1, 1, 0
//   // 2, 3, 1
//   // 3, 5, 2
//   // 4, 7, 3
//   return n + (n - 1);
// }

module.exports = pyramid;
