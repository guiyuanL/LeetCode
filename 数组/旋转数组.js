var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    const temp = nums.pop()
    nums.unshift(temp)
    console.log(nums)
  }
}

const nums = [1, 2, 3, 4, 5, 6, 7]
const k = 3
rotate(nums, k)