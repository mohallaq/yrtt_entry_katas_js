// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice.
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases below.

// Good luck!

function singles(arr) {
  if (arr === undefined) throw new Error("array is required");
  // Your code here!
  let found;
  result = 0;
  let notRepeatedValues = [];
  for (let x = 0; x < arr.length; x++) {
    //external loop
    found = 0;
    for (let i = 0; i < arr.length; i++) {
      //internal loop
      if (arr[x] === arr[i] && x != i) {
        found = 1;
        continue;
      }
    }
    if (found === 0) {
      notRepeatedValues.push(arr[x]);
    }
  }

  result =
    notRepeatedValues.length > 0
      ? notRepeatedValues.reduce((acc, val) => acc + val, 0)
      : 0;

  return result;
}

module.exports = {
  singles,
};
