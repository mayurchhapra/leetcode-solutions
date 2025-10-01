/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // output array
    let output;

    // loop the array
    nums.forEach((num, indexI) => {
      nums.forEach((num, indexJ) => {
        if (indexI !== indexJ) {
          if (target === (nums[indexI] + nums[indexJ]))
            output = [indexI, indexJ];
        }
      })
    })
    return output
};