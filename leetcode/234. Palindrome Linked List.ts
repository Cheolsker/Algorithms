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
 * 1. 데크를 이용한 풀이
 */
export function isPalindrome1(head: ListNode | null): boolean {
  // S(N)
  const deque = [];
  let node = head;

  // O(N)
  while (node !== null) {
    deque.push(node.val);
    node = node.next;
  }

  // O(N/2)
  while (deque.length > 1) {
    if (deque.shift() !== deque.pop()) {
      return false;
    }
  }

  return true;
}

/**
 * 2. 러너를 이용한 풀이 (단방향 연결리스트로 해결할 수 있는 풀이)
 * 실제 코테를 볼 때, 아이디어를 떠올릴 수 있을까?
 * 직관적으로 바로 떠오르지는 않을 듯.
 */
export function isPalindrome2(head: ListNode | null): boolean {
  let fast = head,
    slow = head;

  // O(N/2)
  while (fast !== null && fast.next !== null && slow !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if (fast !== null && slow !== null) {
    slow = slow.next;
  }

  let rev: ListNode | null = null;

  // O(N/2)
  // slow 러너는 절반까지만 이동하므로
  while (slow !== null) {
    let next = slow.next;
    slow.next = rev;
    rev = slow;
    slow = next;
  }

  // O(N/2)
  while (rev !== null) {
    if (head && rev.val !== head.val) {
      return false;
    }

    rev = rev.next;

    if (head) {
      head = head.next;
    }
  }

  return true;
}

/**
 * 3. 나의 풀이
 *
 * 시간복잡도 : O(N), S(1)
 *
 * S(1)을 만족하기 위해, node의 값을 문자열에 저장
 * 그 후, O(N/2)만큼 반복문을 순회하여 팰린드롬인지 체크
 *
 * + 그 밖의 아이디어
 * 1) ListNode를 변형시켜 prev를 제공하여, 이중 연결리스트로 변형하여, 리스트.length <= 1이 될 때까지 앞과 뒤의 노드가 같으면 제거하는 것.
 * 2) ListNode의 값을 배열에 저장하여, O(N/2)만큼 반복문을 순회하여 팰린드롬인지 체크
 * 3) Head와 Last를 비교해서 같으면, 두 노드를 제거하여 리스트.length <= 1이 될 때까지 반복하는 것. 다만, 시간복잡도가 O(N^2) 소요
 */
export function isPalindrome3(head: ListNode | null): boolean {
  // S(1)
  let strNode = '';
  let node = head;

  if (!node) return true;

  strNode += node.val;

  // O(N)
  while (node.next) {
    node = node.next;
    strNode += node.val;
  }

  if (strNode.length < 2) return true;

  // (O(N/2))
  for (let i = 0; i < strNode.length / 2; i++) {
    if (strNode[i] !== strNode[strNode.length - 1 - i]) return false;
  }

  return true;
}
