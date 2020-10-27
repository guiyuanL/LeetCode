/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase()
  const n = str.length
  let left = 0
  let right = n - 1
  while (left < right) {
    if (str.charAt(left) == str.charAt(right)) {
      left++
      right--
      continue
    }
    return false
  }
  return true
};

const s = "A man, a plan, a canal: Panama"

console.log(isPalindrome(s))