//30 min limit

const finishedDiagonalDifference = (arr) => {
  // 11 5 -12, 10 5 4;
  const reversedArr = [...arr].reverse();
  const add = (a, b) => a + b;

  const rightDiagonals = [];
  const leftDiagonals = [];

  for (let row = 0; row <= arr.length - 1; row++) {
    rightDiagonals.push(arr[row][row]);
    leftDiagonals.push(reversedArr[row][row]);
  }

  const rightDiagonalsSum = rightDiagonals.reduce(add);
  const leftDiagonalsSum = leftDiagonals.reduce(add);

  return Math.abs(rightDiagonalsSum - leftDiagonalsSum);
};

module.exports = finishedDiagonalDifference;
