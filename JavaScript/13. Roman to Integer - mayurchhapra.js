/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(input) {
  const romanToNumMap = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

  let sum = 0;
  const romanToNumMapKeys = Object.keys(romanToNumMap);
  for (let i = 0; i < input.length; i++) {
    const [currentVal, preVal] = [input[i], input[i-1]]

    if (preVal) {
      const prevValIndex = romanToNumMapKeys.indexOf(preVal);
      const currValIndex = romanToNumMapKeys.indexOf(currentVal);

      if (prevValIndex < currValIndex) {
        sum = sum - (romanToNumMap[romanToNumMapKeys[prevValIndex]] * 2)
      }
    }
    sum = sum + romanToNumMap[currentVal];

  }
  return sum;
};