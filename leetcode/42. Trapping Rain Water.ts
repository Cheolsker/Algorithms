/**
 * 공간복잡도를 2N만큼 사용해서, 요소 하나당 양옆의 최대벽 높이를 기록
 *
 * O(N)만큼 반복문을 돌 때, 양옆의 벽의 크기가 요소보다 높으면,
 * min(왼쪽벽, 오른쪽벽) - 요소높이 만큼이 빗물을 저장한 크기
 *
 * 시간복잡도 : O(N) + O(N) + O(N) = O(3N)
 */
export function trap1(heights: number[]): number {
  let answer = 0;

  const maxLHeights = Array.from({ length: heights.length }, () => 0);
  const maxRHeights = Array.from({ length: heights.length }, () => 0);

  for (let i = 1; i < heights.length; i++) {
    maxLHeights[i] = Math.max(maxLHeights[i - 1], heights[i - 1]);
  }

  for (let i = heights.length - 2; i >= 0; i--) {
    maxRHeights[i] = Math.max(maxRHeights[i + 1], heights[i + 1]);
  }

  for (let i = 0; i < heights.length; i++) {
    if (maxLHeights[i] > heights[i] && maxRHeights[i] > heights[i]) {
      answer += Math.min(maxLHeights[i], maxRHeights[i]) - heights[i];
    }
  }

  return answer;
}

/**
 * 책에서 투포인터로 해결한 풀이
 *
 * 시간복잡도 : O(N)
 */
export function trap2(heights: number[]): number {
  let volume = 0;
  let left = 0;
  let right = heights.length - 1;
  let leftMax = heights[left];
  let rightMax = heights[right];

  // 투 포인터가 서로 겹칠 때까지 반복
  while (left < right) {
    leftMax = Math.max(heights[left], leftMax);
    rightMax = Math.max(heights[right], rightMax);

    // 더 높은 쪽을 향해 투 포인터 이동
    if (leftMax <= rightMax) {
      // 왼쪽 막대 최대 높이와의 차이를 더하고 왼쪽 포인터 이동
      volume += leftMax - heights[left];
      left += 1;
    } else {
      // 오른쪽 막대 최대 높이와의 차이를 더하고 오른쪽 포인터 이동
      volume += rightMax - heights[right];
      right -= 1;
    }
  }

  return volume;
}

// 투포인터 l과 r을 정한다. height[l] > 0, height[r] > 0
// height[r] >= height[l] 이 될 때까지 r을 이동시킨다.
// 위 조건을 만족하면, l+1 ~ r-1까지 min(height[l], height[r]) - height[i]를 answer에 더한다.
// l = r이 되고, r = l+1
function trapFail1(height: number[]): number {
  let answer = 0,
    l = 0,
    r = 0;

  while (height[l] < 1) l++;
  r = l + 1;

  while (l < height.length && r < height.length) {
    let maxHeightR = 0;

    while (height[l] > height[r] && r < height.length) {
      maxHeightR = Math.max(maxHeightR, height[r]);
      console.log(`${l},${r} | `, maxHeightR);
      r++;
    }

    if (r < height.length) {
      maxHeightR = height[r];

      console.log(`maxHeightR | `, maxHeightR);
      console.log(`for ${l + 1}~${r - 1}`);

      for (let i = l + 1; i < r; i++) {
        const min = Math.min(height[l], maxHeightR);
        answer += min - height[i];
      }
    }

    console.log(`answer | `, answer);

    if (r < height.length) {
      l = r;
      r = l + 1;
    } else {
      l++;
      r = l + 1;
    }
  }

  return answer;
}
