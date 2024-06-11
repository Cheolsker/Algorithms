/**
 * 예제 및 985/987 케이스 통과
 * 986,987 예제에서 시간 초과
 *
 * 시간복잡도 : O(N^2) 소요
 */
function lengthOfLongestSubstring1(s: string): number {
  if (s.length < 2) return s.length;

  let answer = 1;
  let size = 2;
  let idx = 0;

  // O(N)
  while (size <= s.length) {
    idx = 0;

    // O(N)
    while (idx + size <= s.length) {
      const subStr = s.slice(idx, idx + size);
      const set = new Set(subStr);

      if (subStr.length === set.size) {
        answer = subStr.length;
        break;
      }

      idx++;
    }

    size++;
  }

  return answer;
}

/**
 * 해시맵, 슬라이딩 윈도우로 풀이
 *
 * O(N)만큼 소요
 */
function lengthOfLongestSubstring2(s: string): number {
  const map = new Map<string, number>();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  // 문자열 길이만큼 반복, O(N)
  for (const c of s) {
    // 이미 등장한 문자이고, 슬라이딩 윈도우 안쪽에 있다면 left 업데이트
    if (map.has(c) && left <= map.get(c)!) {
      left = map.get(c)! + 1;
    } else {
      // 최대 문자길이 업데이트
      maxLength = Math.max(maxLength, right - left + 1);
    }

    // 현재문자 위치 삽입
    map.set(c, right);

    // 오른쪽 포인터는 현재문자 위치에 맞게 계속 증가
    right++;
  }

  return maxLength;
}
