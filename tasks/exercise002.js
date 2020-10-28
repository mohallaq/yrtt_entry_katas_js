// The clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make the 'past' function return the time converted to milliseconds.
// More examples in the test cases below.

function past(h, m, s) {
  // Your code here!
  return (h * 3600 + m * 60 + s) * 1000;
}

module.exports = {
  past,
};
