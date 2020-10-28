const { past } = require("../tasks/exercise002");

// The clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

// Your task is to make the 'past' function return the time converted to milliseconds.

// More examples in the test cases below.

xdescribe("past", () => {
  test("returns the time past midnight converted to milliseconds", () => {
    expect(past(0, 1, 1)).toBe(61000);
    expect(past(1, 1, 1)).toBe(3661000);
    expect(past(0, 0, 0)).toBe(0);
    expect(past(1, 0, 1)).toBe(3601000);
    expect(past(1, 0, 0)).toBe(3600000);
  });
});
