function compareTriplets(personA, personB) {
  let personAFinalScore = 0;
  let personBFinalScore = 0;

  personA.map((scoreA, index) => {
    if (scoreA > personB[index]) {
      personAFinalScore += 1;
    }
    if (scoreA < personB[index]) {
      personBFinalScore += 1;
    }
  });

  return [personAFinalScore, personBFinalScore];
}

module.exports = { compareTriplets };
