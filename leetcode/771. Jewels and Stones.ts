/**
 * Map(해시맵)을 이용하여 풀이
 */
function numJewelsInStones1(jewels: string, stones: string): number {
  let answer = 0;
  const map = new Map<string, boolean>();

  for (const j of jewels) {
    if (!map.has(j)) {
      map.set(j, true);
    }
  }

  for (const s of stones) {
    if (map.has(s)) answer++;
  }

  return answer;
}

/**
 * Set(해시셋)을 이용하여 풀이
 */
function numJewelsInStones2(jewels: string, stones: string): number {
  let answer = 0;
  const set = new Set(jewels);

  for (const s of stones) {
    if (set.has(s)) answer++;
  }

  return answer;
}
