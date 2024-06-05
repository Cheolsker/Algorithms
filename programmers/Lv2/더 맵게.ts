{
  /**
   * 최초 해결한 방법
   * 효율성이 좋지 않음
   *
   * 시간 복잡도 : O(N) * O(NlogN)
   */
  function solution(scovs: number[], K: number) {
    let answer = 0;
    const isComplete = () => scovs.every((val) => val >= K);

    if (isComplete()) {
      return answer;
    }

    while (scovs.length >= 2) {
      scovs.sort((a, b) => a - b);

      const scov1 = scovs.shift() as number;
      const scov2 = scovs.shift() as number;

      const newScov = scov1 + scov2 * 2;
      scovs.push(newScov);
      answer++;

      if (isComplete()) {
        return answer;
      }
    }

    return isComplete() ? answer : -1;
  }

  /**
   * 테스트 케이스
   */
  solution([1, 2, 3, 9, 10, 12], 7); // 2
  solution([1, 3, 5], 5); // 1
  solution([5, 5, 5], 5); // 0
}

{
  /**
   * 효율성 개선한 방법
   *
   * 정렬과 이진 탐색 이용
   * 시간복잡도 : O(NlogN)
   *
   * 그런데도,, 프로그래머스 사이트에서 효율성 해결이 안됨.
   */
  function solution2(scovs: number[], K: number) {
    let answer = 0;
    scovs.sort((a, b) => a - b);

    if (scovs[0] >= K) return answer;

    while (scovs.length >= 2 && scovs[0] < K) {
      const scov1 = scovs.shift() as number;
      const scov2 = scovs.shift() as number;

      const newScov = scov1 + scov2 * 2;
      binaryInsert(scovs, newScov);

      answer++;
    }

    return scovs[0] >= K ? answer : -1;
  }

  function binaryInsert(array: number[], value: number) {
    let left = 0;
    let right = array.length;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (array[mid] < value) left = mid + 1;
      else right = mid - 1;
    }

    array.splice(left, 0, value);
    return left;
  }
}
