/**
 * 완전탐색(브루트포스)로 해결
 *
 * 시간복잡도 O(N^2)
 */
export function twoSum1(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

/**
 * 해시맵을 이용해서 문제해결
 *
 * 시간복잡도 O(N) + O(N) = O(2N)
 */
export function twoSum2(nums: number[], target: number): number[] {
  const map = new Map();

  // O(N)
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  // O(N)
  for (let i = 0; i < nums.length; i++) {
    let other = target - nums[i];

    if (map.has(other) && map.get(other) !== i) {
      return [i, map.get(other)];
    }
  }

  return [];
}

/**
 * 해시맵을 이용해서 문제해결
 * twoSum2를 개선한 방법
 *
 * O(N)만큼 nums를 한번 돌면서 해시맵에 미리 넣고, target을 찾는 대신에
 * nums를 돌면서, target을 못 찾으면 해당 숫자를 해시맵에 집어넣는 방법
 *
 * 반환하는 배열 요소의 순서가 필요없기 때문에, target에 해당하는 두 수의 합을 이 방법으로 사용할 수 있음
 *
 * 시간복잡도
 * O(N)
 */

export function twoSum3(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const other = target - nums[i];

    if (map.has(other) && map.get(other) !== i) {
      return [i, map.get(other)];
    }

    map.set(nums[i], i);
  }

  return [];
}
