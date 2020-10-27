/**
 * 暴力求解
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const start = nums.indexOf(0)
    if (start < 0) break
    nums.splice(start, 1)
    nums.push(0)
  }
}

const nums = [0, 1]
moveZeroes(nums)
console.log(nums)