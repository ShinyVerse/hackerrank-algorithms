const funWithAnagrams = require("./funWithAnagrams");

describe("funWithAnagrams", () => {
  test("returns if strings array is empty", () => {
    const strings = [];

    const result = funWithAnagrams(strings);

    expect(result).toEqual([]);
  });
  test("returns empty array if only initial number given", () => {
    const strings = [3];

    const result = funWithAnagrams(strings);

    expect(result).toEqual([]);
  });
  test("returns empty array if number doesn't match the given amount of following strings", () => {
    const strings = [1, "code", "aaagmnrs", "doce"];

    const result = funWithAnagrams(strings);

    expect(result).toEqual([]);
  });
  test("returns collection of first instance of anagrams", () => {
    const strings = [4, "code", "aaagmnrs", "anagrams", "doce"];

    const result = funWithAnagrams(strings);

    expect(result).toEqual(["aaagmnrs", "code"]);
  });

  test("returns collection of first instance of anagrams when there are duplicates", () => {
    const strings = [6, "code", "aaagmnrs", "anagrams", "doce", "code", "doce"];

    const result = funWithAnagrams(strings);

    expect(result).toEqual(["aaagmnrs", "code"]);
  });
});
