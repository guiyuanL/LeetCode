/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function () {
  return this.nums
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function () {
  let arr = this.nums.slice(0)
  let n = arr.length - 1, i
  while (n > 0) {
    i = Math.floor((n + 1) * Math.random());  // n + 1 是为了每次的概率相同
    [arr[i], arr[n]] = [arr[n], arr[i]]
    n--
  }
  return arr
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/



let nums = [3, 1, 2, 5, 4]
const solution = new Solution(nums)
console.log(solution.nums)
console.log(solution.shuffle())
console.log(solution.reset())
