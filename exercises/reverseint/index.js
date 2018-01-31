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
  let revNum = n
    .toString()
    .split("")
    .reduce((prevVal, elem) => elem + prevVal);

  if (revNum.charAt(revNum.length - 1) === "-") {
    revNum = "-" + revNum.slice(0, revNum.length - 1);
    console.log(parseInt(revNum));
    return parseInt(revNum);
  } else {
    console.log(revNum);
    return parseInt(revNum);
  }

  console.log(revNum);
}

reverseInt(123);
reverseInt(-15);

module.exports = reverseInt;
