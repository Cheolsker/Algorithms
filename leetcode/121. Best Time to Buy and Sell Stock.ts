/**
 * O(N)만큼 prices를 순회하면서,
 * prices[j]-prices[i]를 통해 최대 이익을 max에 저장
 *
 * 시간복잡도 : O(N^2)
 */
export function maxProfit1(prices: number[]): number {
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      profit = Math.max(prices[j] - prices[i], profit);
    }
  }

  return profit;
}

/**
 * 반복문을 prices 뒤에서부터 순회하면서,
 * 가장 큰 price를 max에 저장하고,
 * max-prices[i]를 통해 최대이익 profit을 구함
 *
 * 시간복잡도 : O(N)
 */
export function maxProfit2(prices: number[]): number {
  let profit = 0;
  let max = prices[prices.length - 1];

  for (let i = prices.length - 1; i >= 0; i--) {
    if (i < prices.length - 1) {
      max = Math.max(prices[i + 1], max);
    }

    profit = Math.max(max - prices[i], profit);
  }

  return profit;
}
