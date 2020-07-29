const { findAllAs } = require("./findAllAs");

describe("find all A's", () => {
  test("returns same num as string if string one letter", () => {
    const result = findAllAs("a", 10);

    expect(result).toBe(10);
  });

  test("returns 0 when string empty", () => {
    const result = findAllAs("", 10);

    expect(result).toBe(0);
  });
  // test("repeats string if it's length lower than num", () => {
  //   const result = findAllAs("aaa", 6);

  //   expect(result).toBe("aaaaaa");
  // });

  test("returns the correct amount of a's found in string", () => {
    const result = findAllAs("aba", 10);

    expect(result).toBe(7);
  });
  test("returns 0 if no a's found", () => {
    const result = findAllAs("ceebbcb", 817723);

    expect(result).toBe(0);
  });

  test("long test, high num", () => {
    const result = findAllAs(
      "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm",
      736778906400,
    );

    expect(result).toBe(51574523448);
  });
  test("short string, high num", () => {
    const result = findAllAs("gfcaaaecbg", 547602);

    expect(result).toBe(164280);
  });
});
