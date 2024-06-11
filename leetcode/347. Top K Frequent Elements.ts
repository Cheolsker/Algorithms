/**
 * O(NlogN)
 *
 * 숫자들의 빈도를 해시맵에 기록
 * 해시맵을 배열로 변환시켜 빈도수에 따라 정렬
 * k개 만큼 배열을 slice해서 리턴
 */
function topKFrequent1(nums: number[], k: number): number[] {
  const map = new Map();

  // O(N)
  for (const n of nums) {
    if (!map.has(n)) {
      map.set(n, 1);
    } else {
      map.set(n, map.get(n) + 1);
    }
  }

  // O(NlogN)
  const sortedArray = Array.from(map).sort((a, b) => {
    const [k1, v1] = a;
    const [k2, v2] = b;

    return v1 > v2 ? -1 : 1;
  });

  // O(k)
  return sortedArray.slice(0, k).map(([k, _]) => k);
}

/**
 * O(N)
 *
 * 엘리먼트:빈도수 해시맵과 빈도수:엘리먼트[] 해시맵을 이용하여 문제풀이
 */
function topKFrequent2(nums: number[], k: number): number[] {
  // 엘리먼트 => 빈도수
  const freqMap = new Map<number, number>();
  // 빈도수 => 엘리먼트[]
  const buckets = new Map<number, number[]>();
  const result: number[] = [];
  let index = 0;

  /**
   * O(N), 엘리먼트의 빈도수 저장
   */
  for (const n of nums) {
    freqMap.set(n, freqMap.has(n) ? freqMap.get(n)! + 1 : 1);
  }

  /**
   * O(N), 버킷에 빈도수에 따른 엘리먼트[] 저장
   */
  for (const [elem, freq] of freqMap) {
    const elems = buckets.has(freq) ? buckets.get(freq)! : [];

    elems.push(elem);
    buckets.set(freq, elems);
  }

  /**
   * O(N), 엘리먼트 갯수만큼 반복하여 빈도수에 따른 엘리먼트를 result에 저장
   */
  for (let freq = nums.length; freq >= 0 && index < k; freq--) {
    if (buckets.has(freq)) {
      for (const elem of buckets.get(freq)!) {
        result.push(elem);
        index++;
      }
    }
  }

  return result;
}
