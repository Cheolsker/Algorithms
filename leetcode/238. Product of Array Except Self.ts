/**
 * 임시 변수를 이용해서 모든 곱을 저장한 후,
 * result에 왼쪽에서부터의 곱과 오른쪽에서부터의 곱을 곱해서 저장
 *
 * 시간복잡도 : O(2N)
 */
export function productExceptSelf(nums: number[]): number[] {
  const result = Array.from({ length: nums.length }, () => 1);

  // O(N)
  // 왼쪽에서부터의 곱을 곱함
  let p = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= p;
    p *= nums[i];
  }

  // O(N)
  // 오른쪽에서부터의 곱을 곱함
  p = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= p;
    p *= nums[i];
  }

  // -0이 있으면 0으로 대체
  return result.map((num) => (Object.is(num, -0) ? 0 : num));
}

/**
 * 나눗셈을 사용해서 문제를 해결한 코드
 *
 * 시간복잡도 : O(2N)
 */
function productExceptSelfTry1(nums: number[]): number[] {
  let multiples = 1;
  const zeroIdxs = []; // S(1), 최악의경우 S(N)
  const answer = []; // S(N)

  // O(N)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroIdxs.push(i);
    } else {
      multiples *= nums[i];
    }
  }

  // O(N)
  for (let i = 0; i < nums.length; i++) {
    if (!zeroIdxs.length) {
      answer.push(multiples / nums[i]);
    } else if (zeroIdxs.includes(i) && zeroIdxs.length === 1) {
      answer.push(multiples);
    } else {
      answer.push(0);
    }
  }

  return answer;
}
