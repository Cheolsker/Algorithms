{
  function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) return mid;
      if (nums[left] <= nums[mid]) {
        if (nums[left] <= target && target <= nums[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        if (nums[mid] <= target && target <= nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }

    return -1;
  }

  /**
   * 테스트 케이스
   */
  const res1 = search([4, 5, 6, 7, 0, 1, 2], 0); // 4
  const res2 = search([4, 5, 6, 7, 0, 1, 2], 3); // -1
  const res3 = search([1], 0); // -1
  const res4 = search([5, 1, 3], 1); // 1
  const res5 = search([4, 5, 6, 7, 8, 1, 2, 3], 8); // 4
  const res6 = search([3, 1], 3); // 0

  console.log(res1, res2, res3, res4, res5, res6);
}
