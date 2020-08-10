const FindOddAmountOfTimes = (array) => {
  const tally = {};
  let oddNum = null;

  for (let i = 0; i < array.length; i++) {
    const arrayItem = array[i];
    if (!tally[arrayItem]) {
      tally[arrayItem] = 1;
    } else {
      tally[arrayItem] += 1;
    }
  }
  for (const key in tally) {
    if (tally[key] % 2 !== 0) {
      oddNum = Number(key);
    }
  }
  return oddNum;
};

module.exports = FindOddAmountOfTimes;
