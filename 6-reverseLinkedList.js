/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 遍历迭代链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 排除空链表和只有一个节点的情况
  // if (head === null || head.next === null) return head

  // 遍历链表，找到最后一个节点
  let pre = null
  let cur = head
  while (cur != null) {
    const nextTemp = cur.next
    cur.next = pre
    pre = cur
    cur = nextTemp
  }
  return pre

};



/**
 * 递归反转链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 排除空链表和只有一个节点的情况
  if (head === null || head.next === null) return head

  let p = reverseList(head.next)
  head.next.next = head
  head.next = null
  return p
};