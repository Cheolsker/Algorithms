function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let l1Str = '';
  let l2Str = '';
  let currNode: ListNode | null = null;

  const sumListNode: ListNode | null = new ListNode(undefined, null);
  let lastNode: ListNode | null = null;

  currNode = l1;

  while (currNode) {
    l1Str = currNode.val + l1Str;
    currNode = currNode.next;
  }

  currNode = l2;

  while (currNode) {
    l2Str = currNode.val + l2Str;
    currNode = currNode.next;
  }

  let sumStr = String(BigInt(l1Str) + BigInt(l2Str));

  sumListNode.val = Number(sumStr[sumStr.length - 1]);
  lastNode = sumListNode;

  for (let i = sumStr.length - 2; i >= 0; i--) {
    const node = new ListNode(Number(sumStr[i]), null);

    lastNode.next = node;
    lastNode = node;
  }

  return sumListNode;
}
