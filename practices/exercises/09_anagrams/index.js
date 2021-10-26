// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const formatedA = stringA.replace(/[^\w]/g, '').toLowerCase();
  const formatedB = stringB.replace(/[^\w]/g, '').toLowerCase();
  if (formatedA.length !== formatedB.length) {
    return false;
  }

  const aObj = {};
  formatedA.split('').map((elem) => {
    if (aObj[elem]) {
      aObj[elem] += 1;
    } else {
      aObj[elem] = 1;
    }
  });

  const bObj = {};
  formatedB.split('').map((elm) => {
    if (bObj[elm]) {
      bObj[elm] += 1;
    } else {
      bObj[elm] = 1;
    }
  });

  console.log(aObj);
  console.log(bObj);

  for (key in aObj) {
    if (aObj[key] && bObj[key] && aObj[key] !== bObj[key]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
