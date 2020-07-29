const funWithAnagrams = (strings) => {
  const found = [];
  const amount = strings.shift();

  if (amount !== strings.length) {
    return found;
  }

  const alphabeticalStrings = strings.map((word) =>
    word.split("").sort().join(""),
  );

  const differingStrings = new Set(alphabeticalStrings);

  const indexes = Array.from(differingStrings).map((word) =>
    alphabeticalStrings.indexOf(word),
  );
  const anagrams = indexes.map((index) => strings[index]);

  return anagrams.sort();
};

module.exports = funWithAnagrams;
