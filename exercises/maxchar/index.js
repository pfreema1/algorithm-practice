// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charTracker = {};

  str.split("").map(elem => {
    charTracker[elem] = charTracker[elem] + 1 || 1;
  });

  return Object.keys(charTracker).reduce((prevVal, elem) => {
    return charTracker[prevVal] < charTracker[elem] ? elem : prevVal;
  });
}

maxChar("abcccccccd");

module.exports = maxChar;
