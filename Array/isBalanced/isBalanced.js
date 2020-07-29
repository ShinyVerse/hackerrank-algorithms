function isBalanced(string) {
  if (string.length % 2 !== 0) {
    return "NO";
  }
  const reg1 = new RegExp(/\[\]/, "g");
  const reg2 = new RegExp(/\{\}/, "g");
  const reg3 = new RegExp(/\(\)/, "g");

  const regs = [reg1, reg2, reg3];

  const CanRemoveFlatOccurances = () => {
    const updated = regs.map((reg) => {
      if (string.match(reg)) {
        string = string.replace(reg, "");
        return true;
      }
    });
    if (updated.indexOf(true) == -1) {
      return false;
    } else {
      return true;
    }
  };

  while (CanRemoveFlatOccurances()) {
    CanRemoveFlatOccurances();
  }

  if (string.length >= 1) {
    return "NO";
  }
  return "YES";
}

// const brackets = string.split("");
// const set = new Set(brackets);
// const setAsAnArray = Array.from(set).sort();
// const openRoundBracketIndexes = [];
// brackets.map((bracket, index) => {});

// const findNumberOfOccurances = (type) => {
//   const regex = new RegExp(`\\${type}`, "g");
//   return string.match(regex);
// };

// const tally = {};

// setAsAnArray.map((type) => {
//   tally[type] = findNumberOfOccurances(type).length;
//   return;
// });

// for (let i = 0; i <= setAsAnArray.length; i += 2) {
//   if (tally[setAsAnArray[i]] != tally[setAsAnArray[i + 1]]) {
//     return "NO";
//   }
// }
// return "YES";

module.exports = { isBalanced };
