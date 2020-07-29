const { isBalanced } = require("./isBalanced");

describe("isBalanced", () => {
  const NO = "NO";
  const YES = "YES";

  it("Should return 'NO' if uneven", () => {
    expect(isBalanced("[}]")).toBe(NO);
  });

  it("Should return 'YES' if bracket matches on one level deep", () => {
    expect(isBalanced("[]")).toBe(YES);
  });

  it("Should return 'YES' if brackets match on two levels deep", () => {
    expect(isBalanced("[{}]")).toBe(YES);
  });
  it("Should return 'NO' if brackets don't match on two levels deep", () => {
    expect(isBalanced("[{)]")).toBe(NO);
  });
  it("Should return 'YES' if brackets match on three levels deep", () => {
    expect(isBalanced("[{()}]")).toBe(YES);
  });

  it("Should return 'YES' if brackets have a match, but aren't symmetric", () => {
    expect(isBalanced("{(([])[])[]}")).toBe(YES);
  });
  it("Should return 'NO' if brackets don't have a match and aren't symmetric", () => {
    expect(isBalanced("{(([])[])[]]}")).toBe(NO);
  });

  it("Should return 'NO' if brackets don't close properly and aren't symmetric", () => {
    expect(isBalanced("{{)[](}}")).toBe(NO);
  });
});
