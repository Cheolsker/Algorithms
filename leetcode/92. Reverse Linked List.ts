type NodeType2 = ListNode | null;

/**
 * root 노드를 만들고,
 * start, end, tmp를 이용하여 swap하여 풀이
 */
function reverseBetween1(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  // 예외 처리
  if (!head) return null;

  // 임시 노드 선언
  let root: NodeType2 = new ListNode(0);
  // 임시 노드 다음으로 노드 시작
  root.next = head;

  // 임시 노드부터 시작해 변경 필요한 위치 앞으로 이동
  let start: NodeType2 = root;
  for (let i = 0; i < left - 1; i++) {
    start = start?.next || null;
  }

  // 변경이 필요한 마지막 위치 선언
  let end = start?.next || null;

  // right-left 만큼 위치 변경 진행
  for (let i = 0; i < right - left; i++) {
    if (start && start.next && end && end.next) {
      const tmp = start?.next || null;
      start.next = end.next;
      end.next = end.next.next;
      start.next.next = tmp;
    }
  }

  // 첫 번째 노드는 임시 노드이므로 그 다음부터 결과로 리턴
  return root.next;
}

/**
 * 나의 풀이
 *
 * O(N)만큼 소요.
 */
function reverseBetween2(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let curr: NodeType2 = head;
  let reverseHead: NodeType2 = null;
  let reverseLast: NodeType2 = null;
  let leftNode: NodeType2 = null;
  let rightNode: NodeType2 = null;
  let cnt = 1;

  while (curr) {
    const next = curr.next;

    if (cnt === left - 1) {
      leftNode = curr;
    }
    if (cnt === right) {
      rightNode = curr.next;
    }

    if (cnt >= left && cnt <= right) {
      if (!reverseHead) {
        curr.next = null;
        reverseLast = curr;
        reverseHead = curr;
      } else {
        curr.next = reverseHead;
        reverseHead = curr;
      }
    }

    curr = next;
    cnt++;
  }

  if (leftNode) {
    leftNode.next = reverseHead;
  }
  if (rightNode && reverseLast) {
    reverseLast.next = rightNode;
  }
  if (left === 1) {
    head = reverseHead;
  }

  return head;
}
