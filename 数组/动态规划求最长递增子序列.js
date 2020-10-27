/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  const longest = []
  let count
  for (let i = 0; i < nums.length; i++) {
    count = 1
    for (let j = 0; j < longest.length; j++) {
      if (nums[i] > nums[j] && count <= longest[j]) {
        count = longest[j] + 1
      }
    }
    longest.push(count)

    if (count >= 3) {
      return true
    }
  }
  return false
};

let nums = [10, 22, 9, 33, 21, 50, 41, 60]
console.log(increasingTriplet(nums))