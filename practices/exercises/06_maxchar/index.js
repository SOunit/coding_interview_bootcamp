// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = str.split('');

  let charToCount = {};
  for (let char of chars) {
    if (charToCount[char]) {
      charToCount[char]++;
    } else {
      charToCount[char] = 1;
    }
  }
  console.log(charToCount);

  let maxCount = 0;
  let maxChar = '';
  for (let char in charToCount) {
    if (charToCount[char] > maxCount) {
      maxCount = charToCount[char];
      maxChar = char;
    }
  }

  console.log(maxChar);

  return maxChar;
}

module.exports = maxChar;
