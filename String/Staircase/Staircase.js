const staircase = (steps) => {
  const result = [];

  for (let step = 1; step <= steps; step++) {
    let newStep = "#".repeat(step);

    if (step + 1 <= steps) {
      const spaces = " ".repeat(steps - step);
      newStep = `${spaces}${newStep}`;

      result.push(newStep);
    } else {
      result.push(newStep);
    }
  }

  return result.join("\n");
};

//all tests pass in hacker rank: type of test:
// const { staircase } = require("./Staircase");

// describe.only("make a staircase", () => {
//   test("make a staircase", () => {
//     const result = staircase(2);
//     const expectedResult = ` #
//     ##`;
//     expect(result).toBe(expectedResult);
//   });
// });

//unable here due to spacing issue.

module.exports = { staircase };
