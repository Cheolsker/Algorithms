{
  function binarySearch(
    nums: number[],
    target: number,
    start: number,
    end: number
  ) {
    let left = start;
    let right = end;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) return mid;
      else if (nums[mid] > target) right = mid - 1;
      else left = mid + 1;
    }

    return -1;
  }

  function search(nums: number[], target: number): number {
    let pivot = -1;

    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        pivot = i;
      }
    }

    if (pivot > -1) {
      const res1 = binarySearch(nums, target, 0, pivot);
      const res2 = binarySearch(nums, target, pivot + 1, nums.length - 1);

      if (res1 > -1) {
        return res1;
      } else {
        return res2;
      }
    } else {
      const res3 = binarySearch(nums, target, 0, nums.length - 1);

      return res3;
    }
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
