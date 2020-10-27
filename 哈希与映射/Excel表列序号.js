// 给定一个Excel表格中的列名称，返回其相应的列序号。

// 例如，

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...
// 示例 1:

// 输入: "A"
// 输出: 1
// 示例 2:

// 输入: "AB"
// 输出: 28
// 示例 3:

// 输入: "ZY"
// 输出: 701

/**
 * 使用ASCII码的方式
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let sum = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    sum += (s.charAt(i).charCodeAt() - 65 + 1) * Math.pow(26, n - 1 - i);
  }
  return sum;
};


/**
 * 使用哈希表的方式
 * @param {string} s
 * @return {number}
 */
var titleToNumber2 = function (s) {
  return dict = { 'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26 }, s.split('').reduce((pre, cur, idx) => {
    return pre + dict[cur] * Math.pow(26, s.length - idx - 1)
  }, 0)
};

console.log(titleToNumber2('ZY'))  // 701