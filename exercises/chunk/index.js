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
  //create arrays
  let answerArray = [];
  let tempSubArray = [];

  for (let i = 0; i < array.length; i++) {
    tempSubArray.push(array[i]);

    if (tempSubArray.length === size) {
      //push the tempSubArray onto answerArray and reset it!
      answerArray.push(tempSubArray);
      tempSubArray = [];
    } else if (i + 1 === array.length) {
      //case:  we are on the last array item and perhaps we havent pushed the subArray that has length < size
      answerArray.push(tempSubArray);
    }
  }

  return answerArray;
}

chunk([1, 2, 3, 4], 2);
chunk([1, 2, 3, 4, 5], 2);
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
chunk([1, 2, 3, 4, 5], 4);

module.exports = chunk;
