// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice.
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases below.

// Good luck!

function singles(arr) {
  if (arr === undefined) throw new Error("array is required");
  // Your code here!
  let repeatedTwice; // will be set to 1 if the item ocurred twice and
  result = 0; // the addition result of non repeated numbers
  let notRepeatedValues = []; // will hold an array of the 2 non-repeated values

  //external loop
  for (let x = 0; x < arr.length; x++) {
    repeatedTwice = 0; //initia the variable in the external loop
    //internal loop
    for (let i = 0; i < arr.length; i++) {
      if (arr[x] === arr[i] && x != i) {
        // check if repeated item then will skip the internal loop the continue searching next item in the external loop
        repeatedTwice = 1;
        continue;
      }
    }
    if (repeatedTwice === 0) {
      // Building up the array of non-repeated items
      notRepeatedValues.push(arr[x]);
    }
  }

  // when empty array then return 0 otherwise return the sum of the non-repeated values
  result =
    notRepeatedValues.length > 0
      ? notRepeatedValues.reduce((acc, val) => acc + val, 0)
      : 0;

  return result;
}

module.exports = {
  singles,
};
