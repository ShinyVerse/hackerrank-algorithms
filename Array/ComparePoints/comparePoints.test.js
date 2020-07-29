const { compareTriplets } = require("./comparePoints");

describe("comparePoints", () => {
  test("with one each in their array", () => {
    const personA = [1];
    const personB = [99];

    const result = compareTriplets(personA, personB);

    expect(result).toEqual([0, 1]);
  });
  test("with two each in their array", () => {
    const personA = [1, 5];
    const personB = [99, 2];

    const result = compareTriplets(personA, personB);

    expect(result).toEqual([1, 1]);
  });
  test("with three each in their array", () => {
    const personA = [17, 28, 30];
    const personB = [99, 16, 8];

    const result = compareTriplets(personA, personB);

    expect(result).toEqual([2, 1]);
  });

  test("with tie", () => {
    const personA = [17, 17, 17];
    const personB = [17, 17, 17];

    const result = compareTriplets(personA, personB);

    expect(result).toEqual([0, 0]);
  });
});
