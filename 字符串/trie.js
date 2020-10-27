setTimeout(function () {
  console.log(1)
}, 0)

new Promise(function (resolve) {
  console.log(2)
  for (let i = 0; i < 1000; i++) {
    if (i === 999 && resolve()) {
      console.log(3)
    }
  }
}).then(function () {
  console.log(4)
})
console.log(5)


const TrieNode = function () {
  this.next = {}
  this.isEnd = false
}

const Trie = function () {
  this.root = new TrieNode()
}


Trie.prototype.insert = function (word) {
  if (!word) {
    return false
  }
  let node = this.root
  for (let i = 0; i < word.length; i++) {
    if (!node.next[word[i]]) {
      node.next[word[i]] = new TrieNode()
    }
    node = node.next[word[i]]
  }
  node.isEnd = true
  return true
}

Trie.prototype.search = function (word) {
  if (!word) return false
  let node = this.root
  for (let i = 0; i < word.length; i++) {
    if (node.next[word[i]]) {
      node = node.next[word[i]]
    } else {
      return false
    }
  }

  return node.isEnd  // 遍历结束都满足之后需要判断isEnd（是否是一个单词）
}

Trie.prototype.startsWith = function (prefix) {
  if (!prefix) return true
  let node = this.root
  for (let i = 0; i < prefix.length; i++) {
    if (node.next[prefix[i]]) {
      node = node.next[prefix[i]]
    } else {
      return false
    }
  }
  return true
}

const trie = new Trie()
console.log(trie.insert('word'))
console.log(trie.search('wordy'))
console.log(trie.startsWith('wo'))
console.log(trie.startsWith('wiu'))


