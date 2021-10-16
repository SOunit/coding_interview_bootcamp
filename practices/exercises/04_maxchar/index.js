// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const charToCount = new Map();

//   str.split('').forEach((element) => {
//     if (charToCount.has(element)) {
//       let count = charToCount.get(element);
//       count++;
//       charToCount.set(element, count);
//     } else {
//       charToCount.set(element, 1);
//     }
//   });

//   console.log(charToCount);

//   let max = 0;
//   let maxKey = '';
//   charToCount.forEach((value, key) => {
//     if (value > max) {
//       max = value;
//       maxKey = key;
//     }
//   });

//   return maxKey;
// }

function maxChar(str) {
  let obj = {};
  str.split('').forEach((element) => {
    console.log(element);
    if (obj[element]) {
      obj[element]++;
    } else {
      obj[element] = 1;
    }
  });

  let max = 0;
  let maxKey = '';
  Object.keys(obj).forEach((key) => {
    const count = obj[key];
    if (count > max) {
      max = count;
      maxKey = key;
    }
  });

  return maxKey;
}

module.exports = maxChar;
