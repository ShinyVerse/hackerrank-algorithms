const PlusMinus = require("./PlusMinus");

describe("PlusMinus", () => {
  test("simple", () => {
    const arr = [-4, 3, -9, 0, 4, 1];

    const result = PlusMinus(arr);

    const expected = [0.5, 0.333333, 0.166667];

    expect(result).toEqual(expected);
  });
  test("no zeroes", () => {
    const arr = [1, -2, -7, 9, 1, -8, -5];

    const result = PlusMinus(arr);

    const expected = [0.428571, 0.571429, 0.0];

    expect(result).toEqual(expected);
  });
});
