export function arrayPairSum(nums: number[]): number {
  let answer = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    answer += nums[i];
  }

  return answer;
}
