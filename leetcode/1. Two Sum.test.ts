import { twoSum1, twoSum2, twoSum3 } from "./1. Two Sum";

const getRandomNums = (length: number) => {
  const min = -1e9;
  const max = 1e9;

  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

const nums100 = getRandomNums(100);
const nums1000 = getRandomNums(1000);
const nums10000 = getRandomNums(10000);

type Cases<NUMS, TARGET, EXPECTED> = [NUMS, TARGET, EXPECTED][];

const cases: Cases<number[], number, [number, number]> = [
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 3], 6, [0, 1]],
  [nums100, nums100[2] + nums100[97], [2, 97]],
  [nums1000, nums1000[33] + nums1000[578], [33, 578]],
  [nums10000, nums10000[565] + nums10000[9578], [565, 9578]],
];

const performanceTable: {
  input: string;
  twoSum1: number;
  twoSum2: number;
  twoSum3: number;
  best: string;
}[] = [];

describe("Two Sum", () => {
  context("twoSum 1", () => {
    it.each(cases)("case %#", (nums, target, expected) => {
      expect(twoSum1(nums, target)).toEqual(expect.arrayContaining(expected));
    });
  });

  context("twoSum 2", () => {
    it.each(cases)("case %#", (nums, target, expected) => {
      expect(twoSum2(nums, target)).toEqual(expect.arrayContaining(expected));
    });
  });

  context("twoSum 3", () => {
    it.each(cases)("case %#", (nums, target, expected) => {
      expect(twoSum3(nums, target)).toEqual(expect.arrayContaining(expected));
    });
  });

  context("performance 비교", () => {
    it.each(cases)("case %#", (nums, target, expected) => {
      const startTime1 = performance.now();
      const result1 = twoSum1(nums, target);
      const endTime1 = performance.now();
      const time1 = endTime1 - startTime1;

      const startTime2 = performance.now();
      const result2 = twoSum2(nums, target);
      const endTime2 = performance.now();
      const time2 = endTime2 - startTime2;

      const startTime3 = performance.now();
      const result3 = twoSum3(nums, target);
      const endTime3 = performance.now();
      const time3 = endTime3 - startTime3;

      let best;
      switch (Math.min(time1, time2, time3)) {
        case time1:
          best = "twoSum1";
          break;
        case time2:
          best = "twoSum2";
          break;
        case time3:
          best = "twoSum3";
          break;
        default:
          best = "twoSum1";
      }

      performanceTable.push({
        input: nums.length + "개",
        twoSum1: time1,
        twoSum2: time2,
        twoSum3: time3,
        best,
      });
    });
  });

  afterAll(() => {
    console.table(performanceTable);
  });
});
