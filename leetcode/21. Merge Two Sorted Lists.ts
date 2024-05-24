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

    // O(L*log(L))
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

  /**
   * 위의 풀이를 최적화한 방법
   *
   * 공간복잡도를 사용하지 않고,
   * while 문을 이용해서 두 연결리스트의 값을 비교한 후,
   * 하나의 연결리스트에 병합 후 반환.
   */
  function mergeTwoLists2(list1: ListNode | null, list2: ListNode | null) {
    const root = new ListNode(0);
    let tail = root;

    while (list1 || list2) {
      // list1이 없으면, tail에 list2를 모두 연결
      if (!list1) {
        tail.next = list2;
        list2 = null;
      }
      // list2가 없으면, tail에 list1을 모두 연결
      else if (!list2) {
        tail.next = list1;
        list1 = null;
      }
      // list1과 list2의 값을 비교해서 작은 값의 노드 하나를 tail에 연결
      else {
        if (list1.val <= list2.val) {
          tail.next = list1;
          list1 = list1.next;

          tail = tail.next;
        } else {
          tail.next = list2;
          list2 = list2.next;

          tail = tail.next;
        }
      }
    }

    return root.next;
  }
}
