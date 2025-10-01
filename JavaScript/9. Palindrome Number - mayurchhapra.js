/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // make x string
  x = x.toString();

  let rev = '';
  for (let i = x.length-1; i >= 0; i--) {
    rev = rev + x[i]
  }
  return rev === x;
};