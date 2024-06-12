/**
 * O(N)으로 해결
 *
 * 완주자들을 해시맵에 담고,
 * 참가자중에서 해시맵에 포함이 안된 사람을 리턴
 */
function solution(participant: string[], completion: string[]) {
  const map = new Map();

  // O(N)
  for (const c of completion) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }

  // O(N)
  for (const p of participant) {
    if (map.has(p)) {
      if (map.get(p) > 1) {
        map.set(p, map.get(p) - 1);
      } else {
        map.delete(p);
      }
    } else {
      return p;
    }
  }
}
