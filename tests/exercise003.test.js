const { rowWeights } = require("../tasks/exercise003");

// Scenario
// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.

// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

describe("rowWeights", () => {
  test("returns the sums of each team", () => {
    expect(rowWeights([80])).toEqual([80, 0]);
    expect(rowWeights([100, 50])).toEqual([100, 50]);
    expect(rowWeights([50, 60, 70, 80])).toEqual([120, 140]);
    expect(rowWeights([13, 27, 49])).toEqual([62, 27]);
    expect(rowWeights([70, 58, 75, 34, 91])).toEqual([236, 92]);
    expect(rowWeights([29, 83, 67, 53, 19, 28, 96])).toEqual([211, 164]);
    expect(rowWeights([0])).toEqual([0, 0]);
    expect(rowWeights([100, 51, 50, 100])).toEqual([150, 151]);
    expect(rowWeights([39, 84, 74, 18, 59, 72, 35, 61])).toEqual([207, 235]);
    expect(rowWeights([0, 1, 0])).toEqual([0, 1]);
  });
});
