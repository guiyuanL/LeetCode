// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

/**
 * 滑动窗口法
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const set = new Set()
  const len = s.length
  // 定义右指针
  let rp = -1, ans = 0
  for (let i = 0; i < len; i++) {
    if (i != 0) { // i 可以看成左指针
      // i 向右移动一位， set删除一个字符
      set.delete(s.charAt(i - 1))
    }
    while (rp + 1 < len && !set.has(s.charAt(rp + 1))) {
      // 满足条件，则右指针不断往右移动
      set.add(s.charAt(rp + 1))
      rp++
    }
    ans = Math.max(ans, rp - i + 1)
  }
  return ans
};
