// const s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
// const wordDict = ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]
const s = 'leetcode'
const wordDict = ['leet', 'code']

/**
 * DFS 回溯
 * @param {*} s 
 * @param {*} wordDict 
 */
function wordBreak1(s, wordDict) {
  const len = s.length
  const wordSet = new Set(wordDict)

  const check = (start) => {
    if (start > len - 1) {
      return true
    }
    for (let i = start; i < len; i++) {
      const word = s.slice(start, i + 1)
      if (wordSet.has(word) && check(i + 1)) {
        return true
      }
    }
    return false
  }

  return check(0)
}

// console.log(wordBreak(s, wordDict))
/*
以上方法运行时间超时==========================================================================
*/

/**
 * 现在利用增加空间复杂度的方式减少时间复杂度
 */
/**
 * DFS + 记忆化
 * @param {*} s 
 * @param {*} wordDict 
 */
function wordBreak2(s, wordDict) {
  const len = s.length
  const wordSet = new Set(wordDict)
  const mome = new Array(len)

  const check = (start) => {
    if (start > len - 1) {
      return true
    }

    if (mome[start] !== undefined) {
      return mome[start]
    }
    for (let i = start; i < len; i++) {
      const word = s.slice(start, i + 1)
      if (wordSet.has(word) && check(i + 1)) {
        mome[i] = true
        return mome[i]
      }
    }
    mome[start] = false
    return mome[start]
  }

  return check(0)
}

console.log(wordBreak2(s, wordDict))

/**
 * 动态规划 dp 
 * @param {*} s 
 * @param {*} wordDict 
 */
function wordBreak3(s, wordDict) {
  const n = s.length
  const wordDictSet = new Set(wordDict)
  const dp = new Array(n + 1).fill(false)
  dp[0] = true

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDictSet.has(s.slice(j, i))) {
        dp[i] = true
        break
      }
    }
  }
  return dp[n]
}

console.log(wordBreak3(s, wordDict))

/**
 * BFS 广度优先搜索  这个方法有些例子会超时
 * @param {*} s 
 * @param {*} wordDict 
 */
function wordBreak4(s, wordDict) {
  const n = s.length
  const wordDictSet = new Set(wordDict)
  const queue = []
  queue.push(0)  // 0 是搜索根节点

  while (queue.length) {
    const start = queue.pop()
    for (let i = start + 1; i < n; i++) {
      const word = s.slice(start, i)
      if (wordDictSet.has(word)) {
        if (i < n) {
          queue.push(i)
        } else {
          return true
        }
      }
    }
  }
  return false
}

// console.log(wordBreak4(s, wordDict))

/**
 * BFS + 记忆化
 * @param {*} s 
 * @param {*} wordDict 
 */
function wordBreak5(s, wordDict) {
  const n = s.length
  const wordDictSet = new Set(wordDict)
  const visited = new Array(n).fill(false)
  const queue = []
  queue.push(0)  // 0 是搜索根节点

  while (queue.length) {
    const start = queue.pop()
    if (visited[start]) {
      continue
    }
    visited[start] = true

    for (let i = start + 1; i <= n; i++) {
      const word = s.slice(start, i)
      if (wordDictSet.has(word)) {
        if (i < n) {
          queue.push(i)
        } else {
          return true
        }
      }
    }
  }
  return false
}

console.log(wordBreak5(s, wordDict))
