
s = "catsanddog"
wordDict = ["cats", "dog", "sand", "and", "cat"]

/**
 * @param {string} s
 * @param {string[]} wordDict
 */
var wordBreak = function (s, wordDict) {
  /**
   * 这个函数是用来判断字符串是否可以被拆分的，可以先验证是否可以被拆分，避免运行超时
   */
  const check = (s, wordDict) => {
    const n = s.length
    const wordSet = new Set(wordDict)
    const dp = []
    dp[0] = true

    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        const word = s.slice(j, i) // 剩余部分单词
        if (dp[j] && wordSet.has(word)) { // dp[j] 为true 表示j 之前的字符串可以被拆分
          dp[i] = true
          break
        }
      }
      if (dp[i] == undefined) {
        dp[i] = false
      }
    }
    return dp[n]
  }

  const trackback = (s, tmp) => {
    if (s.length === 0) {
      res.push(tmp.trim())
      return
    }
    console.log(check(s, wordDict))
    for (var i = 0; i < wordDict.length; i++) {
      if (check(s, wordDict) && s.startsWith(wordDict[i])) {
        const str = s.slice(wordDict[i].length)
        trackback(str, tmp + " " + wordDict[i])
      }
    }
  }

  // const checked = check(s, wordDict)
  const res = []
  trackback(s, '')
  return res

}

console.log(wordBreak(s, wordDict))