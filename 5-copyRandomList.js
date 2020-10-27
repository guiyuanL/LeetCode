// 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。

// 要求返回这个链表的 深拷贝。

// 我们用一个由 n 个节点组成的链表来表示输入 / 输出中的链表。每个节点用一个[val, random_index] 表示：

// val：一个表示 Node.val 的整数。
// random_index：随机指针指向的节点索引（范围从 0 到 n - 1）；如果不指向任何节点，则为  null 。

// 输入：head = [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]
// 输出：[[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]

// 输入：head = [[1, 1], [2, 1]]
// 输出：[[1, 1], [2, 1]]

// 输入：head = [[3, null], [3, 0], [3, null]]
// 输出：[[3, null], [3, 0], [3, null]]

// 输入：head = []
// 输出：[]
// 解释：给定的链表为空（空指针），因此返回 null。

// 提示：

// -10000 <= Node.val <= 10000
// Node.random 为空（null）或指向链表中的节点。
// 节点数目不超过 1000 。

// Definition for a Node.
class Node {
  constructor(val, next, random) {
    this.val = val
    this.next = next
    this.random = random
  }
}



/**
 * 回溯递归法 ----> 遍历并复制旧链表
 * @param {Node} head
 * @return {Node}
 */
// 定义一个Map, 键 => 旧节点， 值 => 新节点, 用于记录被访问过的节点，以免被重复拷贝和避免可能的死循环
const visitedMap = new Map()
var copyRandomList = function (head) {
  // 考虑输入指针为空的情况
  if (head == null) return null

  if (visitedMap.has(head)) {
    return visitedMap.get(head)
  }

  // 创建一个新节点
  const node = new Node(head.val, null, null)

  visitedMap.set(head, node)

  node.next = copyRandomList(head.next)
  node.random = copyRandomList(head.random)

  return node
};




/**
 * 空间迭代法 -- > 遍历迭代链表
 * @param {Node} head
 * @return {Node}
 */
const visitedMap = new Map()

let getCloneNode = function (node) {
  // 判断函数输入节点是否存在
  if (node != null) {
    // 判断节点是否被访问过（复制过）
    if (!visitedMap.has(node)) {
      // 还没有被访问过，没有被复制，则创建新的节点
      const newNode = new Node(node.val, null, null)
      visitedMap.set(node, newNode)
    }
    // 到这里的时候，node节点已经被访问过，直接返回对应节点引用
    return visitedMap.get(node)
  }
  // 输入节点为null, 直接返回null
  return null
}

var copyRandomList = function (head) {
  // 考虑输入指针为空的情况
  if (head == null) return null

  // 创建一个新头部head节点
  let oldNode = head
  let newNode = new Node(oldNode.val, null, null)

  visitedMap.set(oldNode, newNode)

  // 遍历链表，将所有节点进行复制
  while (oldNode != null) {
    newNode.next = getCloneNode(oldNode.next)
    newNode.random = getCloneNode(oldNode.random)
    oldNode = oldNode.next
    newNode = newNode.next
  }

  return visitedMap.get(head)
};




/**
 * 新旧节点交替链表法
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  // 考虑输入指针为空的情况
  if (head == null) return null
  let oldNode = head
  // 构造新旧节点交替的链表
  while (oldNode != null) {
    const newNode = new Node(oldNode.val)

    newNode.next = oldNode.next
    oldNode.next = newNode
    oldNode = newNode.next
  }

  oldNode = head //head现在是新旧节点交替的链表
  // 将新建节点的random指针指向正确节点
  while (oldNode != null) {
    oldNode.next.random = (oldNode.random != null) ? oldNode.random.next : null
    oldNode = oldNode.next.next
  }

  let oldList = head // 旧链表指针
  let newList = head.next // 新链表指针
  let copyNewList = head.next // 复制的链表

  while (oldList != null) {
    oldList.next = oldList.next.next
    newList.next = (newList.next != null) ? newList.next.next : null
    oldList = oldList.next
    newList = newList.next
  }
  return copyNewList
};