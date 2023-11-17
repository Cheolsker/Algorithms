{
  // isBadVersion은 구현이 되었다고 가정

  /**
   * The knows API is defined in the parent class Relation.
   * isBadVersion(version: number): boolean {
   *     ...
   * };
   */

  // 2^20부터 badVersion이라고 가정
  const FIRST_BAD_VERSION = Math.pow(2, 20);

  function isBadVersion(n: number) {
    if (n >= FIRST_BAD_VERSION) return true;

    return false;
  }

  function solution(isBadVersion: any) {
    return function (n: number): number {
      let left = 1;
      let right = n;
      let answer = n;

      while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (isBadVersion(mid)) {
          answer = mid;
          right = mid - 1;
        } else left = mid + 1;
      }

      return answer;
    };
  }

  // 테스트 케이스
  const n = Math.pow(2, 30);
  const result = solution(isBadVersion)(n);

  console.log(result); // 2^20인 1048576이 출력됨
}
