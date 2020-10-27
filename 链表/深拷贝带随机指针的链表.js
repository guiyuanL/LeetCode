/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  // 考虑链表为空的情况
  if (!head) return null

  let p = head
  let cur = new Node(head.val)
  let node = cur
  let map = new Map()  // 保存映射关系

  // 第一次遍历：复制链表，保存映射关系
  while (p) {
    cur.next = p.next ? new Node(p.next.val) : null
    map.set(p, cur)
    cur = cur.next
    p = p.next
  }

  p = head
  cur = node
  // 第二次遍历：根据映射关系，修正随机指针指向
  while (cur) {
    cur.random = p.random ? map.get(p.random) : null
    cur = cur.next
    p = p.next
  }

  return node
}