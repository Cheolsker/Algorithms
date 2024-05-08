import { maxProfit1, maxProfit2 } from "./121. Best Time to Buy and Sell Stock";

import { getRandomNumsArray } from "./utils/nums";

type Cases<NUMS, EXPECTED> = [NUMS, EXPECTED][];

const MIN = 0;
const MAX = 1e4;

const nums1000 = getRandomNumsArray(1000, MIN, MAX);
const nums10000 = getRandomNumsArray(10000, MIN, MAX);
const nums25000 = getRandomNumsArray(25000, MIN, MAX);

const cases: Cases<number[], number> = [
  [[7, 1, 5, 3, 6, 4], 5],
  [[7, 6, 4, 3, 1], 0],
  [nums1000, maxProfit2(nums1000)],
  [nums10000, maxProfit2(nums10000)],
  [nums25000, maxProfit2(nums25000)],
];

const performanceTable: {
  input: string;
  maxProfit1: number;
  maxProfit2: number;
  best: string;
}[] = [];

describe("maxProfit", () => {
  context("maxProfit1", () => {
    it.each(cases)("case %#", (nums, expected) => {
      expect(maxProfit1(nums)).toEqual(expected);
    });
  });

  context("maxProfit2", () => {
    it.each(cases)("case %#", (nums, expected) => {
      expect(maxProfit2(nums)).toEqual(expected);
    });
  });

  context("performance 비교", () => {
    it.each(cases)("case %#", (nums, expected) => {
      const startTime1 = performance.now();
      const result1 = maxProfit1(nums);
      const endTime1 = performance.now();
      const time1 = endTime1 - startTime1;

      const startTime2 = performance.now();
      const result2 = maxProfit2(nums);
      const endTime2 = performance.now();
      const time2 = endTime2 - startTime2;

      let best;
      switch (Math.min(time1, time2)) {
        case time1:
          best = "maxProfit1";
          break;
        case time2:
          best = "maxProfit2";
          break;
        default:
          best = "maxProfit1";
      }

      performanceTable.push({
        input: nums.length + "개",
        maxProfit1: time1,
        maxProfit2: time2,
        best,
      });
    });
  });

  afterAll(() => {
    console.table(performanceTable);
  });
});
