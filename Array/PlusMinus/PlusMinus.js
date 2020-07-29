const tallyArr = (array) => {
  const tally = [0, 0, 0];

  array.forEach((number) => {
    if (number < 0) {
      tally[1] += 1;
    } else if (number === 0) {
      tally[2] += 1;
    } else {
      tally[0] += 1;
    }
  });
  return tally;
};

const findFraction = (nominators, denominator) => {
  return nominators.map((nominator) =>
    Number((nominator / denominator).toFixed(6)),
  );
};

function PlusMinus(arr) {
  const denominator = arr.length;

  const nominators = tallyArr(arr);

  const fractions = findFraction(nominators, denominator);

  // fractions.map((fraction) => console.log(fraction));
  // console.log("fractions", fractions);

  return fractions;

  //todo
  //first test case passes. Explore other failings to see what went wrong.
}

module.exports = PlusMinus;
