const { hourglassSum } = require("./hourglassSum");

describe("hourglassSum", () => {
  // test("sums up smallest case", () => {
  //   const arr = [
  //     [1, 1, 1],
  //     [0, 1, 0],
  //     [1, 1, 1],
  //   ];
  //   const result = hourglassSum(arr);
  // });
  //   expect(result).toBe(7);
  // });
  // test("sums up smallest case in form of hourglass", () => {
  //   const arr = [
  //     [1, 1, 1],
  //     [2, 1, 2],
  //     [1, 1, 1],
  //   ];
  //   const result = hourglassSum(arr);

  //   expect(result).toBe(7);
  // });
  // test("handles double hourglass array, returning highest sum", () => {
  //   const arr = [
  //     [1, 1, 1, 2],
  //     [2, 1, 2, 1],
  //     [1, 1, 1, 2],
  //   ];
  //   const result = hourglassSum(arr);

  //   expect(result).toBe(10);
  // });
  // test("splits top row into a collection", () => {
  //   const arr = [
  //     [1, 1, 1, 2],
  //     [2, 1, 2, 1],
  //     [1, 1, 1, 2],
  //   ];
  //   const result = hourglassSum(arr);

  //   expect(result).toEqual([
  //     [1, 1, 1],
  //     [1, 1, 2],
  //   ]);
  // });

  // test("splits top row of 3 sets into a collection", () => {
  //   const arr = [
  //     [1, 1, 1, 2, 2],
  //     [2, 1, 2, 1, 2],
  //     [1, 1, 1, 2, 2],
  //   ];
  //   const result = hourglassSum(arr);

  //   expect(result).toEqual([
  //     [1, 1, 1],
  //     [1, 1, 2],
  //     [1, 2, 2],
  //   ]);
  // });
  // test("handles collection of middle row", () => {
  //   const arr = [
  //     [1, 1, 1, 2, 2],
  //     [2, 1, 2, 1, 2],
  //     [1, 1, 1, 2, 2],
  //   ];
  //   const result = hourglassSum(arr);

  //   expect(result).toEqual([[1], [2], [1]]);
  // });
  // test("handle summing up top row collections", () => {
  //   const arr = [
  //     [1, 1, 1, 2, 2],
  //     [2, 1, 2, 1, 2],
  //     [1, 1, 1, 2, 2],
  //   ];
  //   const result = hourglassSum(arr);

  //   expect(result).toEqual([3, 4, 5]);
  // });
  // test("handle summing up all row collections into final collection", () => {
  //   const arr = [
  //     [1, 1, 1, 2, 2],
  //     [2, 1, 2, 1, 2],
  //     [1, 1, 1, 2, 2],
  //   ];
  //   const result = hourglassSum(arr);

  //   expect(result).toEqual([
  //     [3, 4, 5],
  //     [1, 2, 1],
  //     [3, 4, 5],
  //   ]);
  // });
  // test("return array of total sum of each collection", () => {
  //   const arr = [
  //     [1, 1, 1, 2, 2],
  //     [2, 1, 2, 1, 2],
  //     [1, 1, 1, 2, 2],
  //   ];
  //   const result = hourglassSum(arr);

  //   expect(result).toEqual([7, 10, 11]);
  // });
  test("return highest hourglass sum", () => {
    const arr = [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0],
    ];
    const result = hourglassSum(arr);

    expect(result).toEqual(19);
  });
});
