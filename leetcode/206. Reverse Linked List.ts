// ListNode
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 나의 풀이
 *
 * 시간 복잡도 : O(N)
 *
 * reverseHead, current, node, node.next 를 이용해서
 * 연결리스트를 거꾸로 뒤집음.
 */
function reverseList(head: ListNode | null): ListNode | null {
  let reverseHead: ListNode | null = null;
  let current = head;

  while (current) {
    const node = new ListNode(current.val, null);

    if (!reverseHead) {
      reverseHead = node;
    } else {
      node.next = reverseHead;
      reverseHead = node;
    }

    current = current.next;
  }

  return reverseHead;
}
