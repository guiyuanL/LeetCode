/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = []
  let temp = 1
  for (let i = 0; i < nums.length; i++) {
    res[i] = temp
    temp *= nums[i]
  }
  console.log(res)
  let temp2 = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= temp2
    temp2 *= nums[i]
  }
  return res
}

let nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums))
