type NodeType = ListNode | null;

/**
 * 짝수노드와 짝수노드의 다음이 있을 때,
 * 홀수노드와 짝수노드의 다음을 업데이트하는 풀이
 *
 * S(1), O(N/2)만큼 소요
 */
function oddEvenList1(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let odd: NodeType = head;
  let even: NodeType = head.next;
  let evenHead: NodeType = even;

  while (odd && odd.next && even && even.next) {
    // 홀짝 노드의 다음 노드로 다음+다음 노드 지정
    odd.next = odd.next.next;
    even.next = even.next.next;

    // 홀짝 노드를 한 칸씩 이동
    odd = odd.next;
    even = even.next;
  }

  if (odd) {
    odd.next = evenHead;
  }

  return head;
}

/**
 * 나의 풀이
 *
 * S(1), O(N)만큼 소요
 */
function oddEvenList2(head: ListNode | null): ListNode | null {
  let curr = head;
  let oddHead: NodeType = head;
  let oddLast: NodeType = head;
  let evenHead: NodeType = head?.next ?? null;
  let evenLast: NodeType = head?.next ?? null;
  let cnt = 1;

  while (curr) {
    if (cnt % 2 === 1) {
      if (cnt > 1 && oddLast) {
        oddLast.next = curr;
        oddLast = curr;
      }
    } else {
      if (cnt > 2 && evenLast) {
        evenLast.next = curr;
        evenLast = curr;
      }
    }

    curr = curr.next;
    cnt++;
  }

  if (evenLast && evenLast.next) {
    evenLast.next = null;
  }
  if (oddLast) {
    oddLast.next = evenHead;
  }

  return oddHead;
}
