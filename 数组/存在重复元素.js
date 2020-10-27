var containsDuplicate = function (nums) {
  const set = new Set(nums)
  const n = set.size
  if (nums.length === n) {
    console.log(nums.length)
    return false
  }
  return true
}

nums = [1, 2, 3]
console.log(containsDuplicate(nums))