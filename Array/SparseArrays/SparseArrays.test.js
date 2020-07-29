const { SparseArrays } = require("./SparseArrays");

describe("SparseArrays", () => {
  test("case 1", () => {
    const strings = ["aba", "baba", "aba", "xzxb"];
    const queries = ["aba", "xzxb", "ab"];
    const result = SparseArrays(strings, queries);
    expect(result).toEqual([2, 1, 0]);
  });
});
