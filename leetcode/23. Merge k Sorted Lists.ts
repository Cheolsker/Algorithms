{
  // 리스트 노드
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  /**
   * 시간복잡도 : O(c* N)으로 O(N)
   */
  function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists.length || lists.every((list) => !list)) return null;

    // 루트 노드를 생성, 작은 노드 순서대로 여기에 붙임
    const root = new ListNode(0);
    // 정렬된 리스트의 끝 노드
    let tail = root;

    // 리스트들의 배열이 빌 때까지 반복, O(N)
    while (lists.length) {
      let min = new ListNode(10e4 + 1);
      let minIdx = -1;

      // 리스트들을 돌면서, 가장 작은 리스트 노드 (min)를 찾음, O(N)
      for (let i = 0; i < lists.length; i++) {
        if (lists[i] && lists[i].val <= min.val) {
          min = lists[i];
          minIdx = i;
        }
      }

      // min 노드의 다음 노드가 있으면, 해당 리스트의 head는 min.next
      if (min.next) {
        lists[minIdx] = min.next;
      }
      // min 노드가 마지막 노드면, 해당 리스트는 제거
      else {
        lists.splice(minIdx, 1);
      }

      // min 노드가 존재하면, tail에 붙임
      if (minIdx > -1) {
        min.next = null;
        tail.next = min;
        tail = min;
      }
    }

    return root.next;
  }
}
