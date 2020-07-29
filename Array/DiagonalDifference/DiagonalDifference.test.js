const diagonalDifference = require("./finishedDiagonalDifference");

describe("diagonalDifference", () => {
  test("this", () => {
    const arr = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ];
    const expected = 15;
    const result = diagonalDifference(arr);
    expect(result).toBe(expected);
  });
});
