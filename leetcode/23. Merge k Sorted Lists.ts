class ListNode23 {
  val: number;
  next: ListNode23 | null;
  constructor(val?: number, next?: ListNode23 | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode23 | null>): ListNode23 | null {
  if (!lists.length || lists.every((list) => !list)) return null;

  const root = new ListNode23(0);
  let tail = root;

  while (lists.length) {
    let min = new ListNode23(10e4 + 1);
    let minIdx = -1;

    for (let i = 0; i < lists.length; i++) {
      if (lists[i] && lists[i].val <= min.val) {
        min = lists[i];
        minIdx = i;
      }
    }

    if (min.next) {
      lists[minIdx] = min.next;
    } else {
      lists.splice(minIdx, 1);
    }

    if (minIdx > -1) {
      min.next = null;
      tail.next = min;
      tail = min;
    }
  }

  return root.next;
}
