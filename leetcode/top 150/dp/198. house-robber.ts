{
  /**
   * 1번쨰 풀이.
   *
   * 시간 복잡도: O(n)
   * 공간 복잡도: O(n)
   *
   * << 아이디어 >>
   * sums[i]는 이전집들의 최대합 VS sums[i-2]+a[i] 중의 큰값이다.
   */
  function rob(nums: number[]): number {
    if (nums.length === 1) {
      return nums[0];
    }
    if (nums.length === 2) {
      return Math.max(nums[0], nums[1]);
    }

    // S[i] = Max(S[i-1], S[i-2]+a[i]);
    const sums = Array.from({ length: nums.length }, () => 0);

    sums[0] = nums[0];
    sums[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
      sums[i] = Math.max(sums[i - 1], sums[i - 2] + nums[i]);
    }

    return sums[nums.length - 1];
  }

  /**
   * 2번째 풀이.
   *
   * 시간 복잡도: O(N)
   * 공간 복잡도: O(1)
   *
   * << 아이디어 >>
   * 1번째 풀이와 동일하지만, 변수 몇 개만을 사용해서 공간복잡도를 줄임.
   *
   */
  function rob(nums: number[]): number {
    let temp = 0; // Max값 판단
    let r1 = 0; // 이전까지의 합
    let r2 = 0; // 최대합 저장

    for (const n of nums) {
      temp = Math.max(r1 + n, r2);
      r1 = r2; // 밀어내기
      r2 = temp; // 밀어내기
    }

    return r2;
  }
}
