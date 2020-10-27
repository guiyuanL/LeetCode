/**
 * @param {string} s
 * @return {string[][]}
 */
// var partition = function (s) {
//   const res = []
//   const n = s.length
//   for (let pre = 0; pre < n; pre++) {
//     let suf = pre
//     let i = pre
//     let j = suf
//     const str = s.slice(i, j + 1).toLocaleLowerCase()
//     while (i <= j) {
//       if (str.charAt(i) == str.charAt(j)) {
//         i++
//         j--
//         continue
//       }
//       break
//     }
//     res.push(str)
//   }
//   return res
// };

/**
 * 判断是否回文串
 * @param {*} s 
 */
var isPalindrome = function (s) {
  // const str = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase()
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

/**
 * 
 * @param {*} s 
 */
var partition = function (s) {
  const res = []
  let temp = []
  const n = s.length
  for (let pre = 0; pre < n; pre++) {
    for (let suf = n; suf > pre; suf--) {
      let i = pre
      let j = suf
      let flag = true
      const str = s.slice(i, j + 1).toLocaleLowerCase()
      while (i < j) {
        if (str.charAt(i) == str.charAt(j)) {
          i++
          j--
          continue
        }
        flag = false
        break
      }
      if (flag) {
        temp.push(str)
        res.push(temp)
      }
    }
  }
  return res
};

const s = 'aab'
console.log(partition(s))