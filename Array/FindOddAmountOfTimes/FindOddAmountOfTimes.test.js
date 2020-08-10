const FindOddAmountOfTimes = require("./FindOddAmountOfTimes");

describe("FindOddAmountOfTimes", () => {
  test("finds odd in simple array", () => {
    const arr = [1, 2, 1];
    expect(FindOddAmountOfTimes(arr)).toBe(2);
  });
  test("finds odd in long array", () => {
    const arr = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
    expect(FindOddAmountOfTimes(arr)).toBe(5);
  });
  test("handles empty array", () => {
    const arr = [];
    expect(FindOddAmountOfTimes(arr)).toBe(null);
  });
});
