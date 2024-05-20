{
  // Definition for singly-linked list.
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  /**
   * list1의 갯수를 N, list2의 갯수를, M이라고 한다면,
   * L = N+M
   *
   * 시간 복잡도 : O(L*log(N))
   * 공간 복잡도 : S(L)
   *
   * 두 리스트의 값을 스택(배열)에 저장하고, 스택을 정렬.
   * 그 후, 스택의 값을 꺼내서 노드를 만들어 연결하는 방식으로 풀이.
   *
   */
  function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
  ): ListNode | null {
    const stack = [];

    // O(N)
    while (list1) {
      stack.push(list1.val);
      list1 = list1.next;
    }

    // O(M)
    while (list2) {
      stack.push(list2.val);
      list2 = list2.next;
    }

    // O(L*log(N))
    stack.sort((a, b) => a - b);

    if (!stack.length) return null;
    // O(L)
    else {
      const head = new ListNode(undefined, null);
      let last: ListNode | null = null;

      for (const val of stack) {
        if (!head.val) {
          head.val = val;
          last = head;
        } else {
          const node = new ListNode(val, null);

          if (last) {
            last.next = node;
            last = node;
          }
        }
      }

      return head;
    }
  }
}
