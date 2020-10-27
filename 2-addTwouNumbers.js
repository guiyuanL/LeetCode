// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
/**
 * val1: ListNode
 * val2: ListNode
 * return: ListNode
 */
function addTwoNumbers(val1, val2) {
  let node = new ListNode('head')
  let temp = node
  let add = 0
  let sum = 0

  while (val1 || val2) {
    sum = (val1 ? val1.val : 0) + (val2 ? val2.val : 0) + add
    temp.next = new ListNode(sum % 10)
    temp = temp.next
    add = sum >= 10 ? 1 : 0
    val1 && (val1 = val1.next)
    val2 && (val2 = val2.next)
  }
  add && (temp.next = new ListNode(add))
  return node.next
}
