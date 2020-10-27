// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL
// 示例 2:

// 输入: 0->1->2->NULL, k = 4
// 输出: 2->0->1->NULL
// 解释:
// 向右旋转 1 步: 2->0->1->NULL
// 向右旋转 2 步: 1->2->0->NULL
// 向右旋转 3 步: 0->1->2->NULL
// 向右旋转 4 步: 2->0->1->NULL
class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
class LinkedList {
  constructor(list) {
    this.head = null
    this.size = 0
    list.forEach(val => this.push(val))
  }
  // 在尾部追加元素
  push(val) {
    let node = new ListNode(val)
    let current = null
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.size++
  }
  // 查看链表
  toString() {
    if (!this.head) return this.head
    let str = this.head.val
    let current = this.head
    for (let i = 0; i < this.size; i++) {
      str += `->${current.val}`
      current = current.next
    }
    return str
  }
}
var rotateRight = function (head, k) {
  // 避免掉 空和只有一个元素的情况
  if (!head || !head.next) return head
  let size = 1
  let cur = head
  // 获取长度
  while (cur.next) {
    cur = cur.next
    size++
  }
  // 因为当k 大于长度时, 又是一个轮回, 所以对长度取余
  let _k = k % size
  // 排除k==0或为size的整数倍的情况
  if (_k === 0) return head
  let pre = head
  for (let i = 0; i < size - _k - 1; i++) {
    pre = pre.next
  }
  let vnode = pre.next
  pre.next = null
  cur.next = head
  return vnode
};

let list = [1, 2, 3, 4, 5], k = 3
let head = new LinkedList(list).head
console.log(rotateRight(head, k), '结果')
