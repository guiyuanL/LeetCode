var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) {
      return [map.get(res), i];
    } else {
      map.set(nums[i], i);
    }
  }
};

let nums = [7, 4, 6, 3, 7, 11, 15]
const target = 9
console.log(twoSum(nums, target));