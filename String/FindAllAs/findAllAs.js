const findAllAs = (string, num) => {
  const foundAs = string.match(/a/g);
  if (string.length === 0 || foundAs === null) {
    return 0;
  }
  if (string.length === 1) {
    return num;
  }
  const times = num / string.length;
  const remainder = num % string.length;
  const remainderAs = string.slice(0, remainder).match(/a/g) || [];

  let final = foundAs.length * Math.floor(times);
  if (remainder) {
    return final + remainderAs.length;
  }
  return final;
};

module.exports = { findAllAs };
