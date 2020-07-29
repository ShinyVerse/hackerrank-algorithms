function SparseArrays(strings, queries) {
  const tallyArray = new Array(queries.length).fill(0);

  //loop through strings
  strings.forEach((string) => {
    queries.forEach((query, index) => {
      if (string == query) {
        tallyArray[index] += 1;
      }
    });
  });
  return tallyArray;
}

module.exports = { SparseArrays };
