//30 min limit

const diagonalDifference = (arr) => {
  // 11 5 -12, 10 5 4;
  let rightDiagonals = [];
  let leftDiagonals = [];

  for (let row = 0; row <= 2; row++) {
    rightDiagonals.push(arr[row][row]);
  }

  for (let row = 2; row >= 0; row--) {
    leftDiagonals.push(arr[row][col]);
  }

  //6, 19

  //ran out of time on this

  //steps ahead:
  // find leftDiagonals => be more specific on ideas on how to.
  // minus them and return difference
  // make it dynamic to allow array row size to differ.
};

module.exports = diagonalDifference;
