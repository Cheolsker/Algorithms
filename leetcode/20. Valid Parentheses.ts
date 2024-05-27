/**
 * 스택을 이용해서, 유효한 괄호인지 체크
 *
 * 시간복잡도: O(N), 공간복잡도: S(N)
 */
export function isValid(s: string): boolean {
  if (s.length % 2 === 1) return false;

  const stack: string[] = [];
  const pairs = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  for (const w of s) {
    if (!pairs.has(w)) {
      stack.push(w);
    } else {
      if (pairs.get(w) !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
