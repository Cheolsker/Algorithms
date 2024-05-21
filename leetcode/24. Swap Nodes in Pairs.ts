function swapPairs(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let next: ListNode | null = null;
  let node: ListNode | null = head;
  let cnt = 1;

  while (node) {
    next = node.next;

    if (cnt % 2 === 1) {
      if (next) {
        node.next = next.next;
        next.next = node;

        [next, node] = [node, next];

        if (prev) {
          prev.next = node;
        }
      }
    }

    prev = node;
    node = next;

    if (cnt === 1) head = prev;
    cnt++;
  }

  return head;
}
