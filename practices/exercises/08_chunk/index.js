// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const result = [];

  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (result[index] && result[index].length < size) {
      // add
      result[index].push(array[i]);
    } else {
      // create
      const child = [array[i]];
      result.push(child);
      if (result[index].length >= size) {
        index++;
      }
    }
  }

  return result;
}

module.exports = chunk;
