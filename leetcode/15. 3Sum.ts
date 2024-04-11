function binarySearch(array: number[], target: number, start: number) {
  let left = start;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) return mid;
    else if (array[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
}

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const answer = [];
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;

    const target = -nums[i];

    for (let j = i + 1; j < length; j++) {
      if (j > i + 1 && nums[j - 1] === nums[j]) continue;

      const idx = binarySearch(nums, target - nums[j], j + 1);

      if (idx) {
        answer.push([nums[i], nums[j], nums[idx]]);
      }
    }
  }

  return answer;
}
