// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {}

// original loop
// function vowels(str) {
//   const obj = {};

//   str.split('').map((char) => {
//     if (obj[char]) {
//       obj[char] += 1;
//     } else {
//       obj[char] = 1;
//     }
//   });

//   console.log(obj);

//   let count = 0;
//   for (key in obj) {
//     const lowerCaseKey = key.toLowerCase();
//     console.log(lowerCaseKey);
//     if (
//       lowerCaseKey === 'a' ||
//       lowerCaseKey === 'e' ||
//       lowerCaseKey === 'i' ||
//       lowerCaseKey === 'o' ||
//       lowerCaseKey === 'u'
//     ) {
//       count += obj[key];
//     }
//   }

//   return count;
// }

// original regex
// function vowels(str) {
//   console.log(str);
//   const newStr = str.replace(/[a | i | e | o | u | A | I | E | O | U]/g, '');
//   return str.length - newStr.length;
// }

// function vowels(str) {
//   console.log(str);
//   const newStr = str.replace(/[^aeiou]/gi, '');
//   console.log(newStr);
//   return newStr.length;
// }

module.exports = vowels;
