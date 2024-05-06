/**
 * 완전탐색으로 해결
 * 시간초과 발생
 *
 * 시간복잡도 : O(N^3)
 */
export function threeSum1(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const answer = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;

    for (let j = i + 1; j < nums.length - 1; j++) {
      if (j > i + 1 && nums[j - 1] === nums[j]) continue;

      for (let k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k - 1] === nums[k]) continue;

        if (nums[i] + nums[j] + nums[k] === 0) {
          answer.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  return answer;
}

/**
 * nums를 정렬한 후, 반복문을 돌면서
 * 투포인터를 이용해서 문제해결
 *
 * 시간복잡도 : O(N) * O(N) = O(N^2)
 */
export function threeSum2(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  let l = 0,
    r = 0,
    sum = 0;
  const answer = [];

  // O(N)만큼 반복문 실행
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;

    l = i + 1;
    r = nums.length - 1;

    // O(N)만큼 투포인터를 이용한 로직 실행
    while (l < r) {
      sum = nums[i] + nums[l] + nums[r];

      if (sum < 0) l++;
      else if (sum > 0) r--;
      else {
        answer.push([nums[i], nums[l], nums[r]]);

        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;

        l++;
        r--;
      }
    }
  }

  return answer;
}
