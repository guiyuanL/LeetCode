// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//  

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * 排序和双指针法
* @param {number[]} nums
* @return {number[][]}
*/
var threeSum = function (nums) {
  const n = nums.length
  const ans = []
  if (nums === null || n < 3) return ans

  nums.sort((a, b) => a - b)
  if (nums[0] > 0 || nums[n - 1] < 0) return ans

  for (let first = 0; first < n; first++) {
    if (first > 0 && nums[first - 1] === nums[first]) continue
    let third = n - 1
    let target = -nums[first]
    for (let second = first + 1; second < n; second++) {
      if (second > first + 1 && nums[second - 1] === nums[second]) continue
      // 保证second在third左侧
      while (second < third && nums[second] + nums[third] > target) {
        third--
      }
      if (second === third) break
      if (nums[second] + nums[third] === target) ans.push([nums[first], nums[second], nums[third]])
    }
  }
  return ans
}

const nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))