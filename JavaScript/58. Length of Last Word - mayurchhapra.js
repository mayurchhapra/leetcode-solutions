/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const trimmedChar = s.trim().split(' ');
  return trimmedChar[trimmedChar.length-1].length;
};