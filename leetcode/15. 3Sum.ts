function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const answer = [];
  const length = nums.length;

  for (let i = 0; i < length - 2; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;

    let j = i + 1;
    let k = length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        answer.push([nums[i], nums[j], nums[k]]);

        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
        j++;
        k--;
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return answer;
}
