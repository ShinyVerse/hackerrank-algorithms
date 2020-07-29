const AVeryBigSum = require("./AVeryBigSum");

describe("AVeryBigSum", () => {
  test("adds up array", () => {
    const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

    const expectedResult = 5000000015;

    const result = AVeryBigSum(arr);

    expect(result).toBe(expectedResult);
  });
});
