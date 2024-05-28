import { threeSum1, threeSum2 } from '../15. 3Sum';

const getRandomNums = (length: number) => {
  const min = -1e5;
  const max = 1e5;

  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

const nums100 = getRandomNums(100);
const nums1000 = getRandomNums(1000);
const nums1500 = getRandomNums(1500);
const nums3000 = getRandomNums(3000);

type Cases<NUMS, EXPECTED> = [NUMS, EXPECTED][];

const cases: Cases<number[], number[][]> = [
  [
    [-1, 0, 1, 2, -1, -4],
    [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  ],
  [[0, 1, 1], []],
  [[0, 0, 0, 0], [[0, 0, 0]]],
  [nums100, threeSum2(nums100)],
  [nums1000, threeSum2(nums1000)],
  [nums1500, threeSum2(nums1500)],
  // [nums3000, threeSum2(nums3000)],
];

const performanceTable: {
  input: string;
  threeSum1: number;
  threeSum2: number;
  best: string;
}[] = [];

describe('3Sum', () => {
  context('3Sum 1', () => {
    it.each(cases)('case %#', (nums, expected) => {
      expect(threeSum1(nums)).toEqual(expect.arrayContaining(expected));
    });
  });

  context('3Sum 2', () => {
    it.each(cases)('case %#', (nums, expected) => {
      expect(threeSum2(nums)).toEqual(expect.arrayContaining(expected));
    });
  });

  context('performance 비교', () => {
    it.each(cases)('case %#', (nums, expected) => {
      const startTime1 = performance.now();
      const result1 = threeSum1(nums);
      const endTime1 = performance.now();
      const time1 = endTime1 - startTime1;

      const startTime2 = performance.now();
      const result2 = threeSum2(nums);
      const endTime2 = performance.now();
      const time2 = endTime2 - startTime2;

      let best;
      switch (Math.min(time1, time2)) {
        case time1:
          best = 'threeSum1';
          break;
        case time2:
          best = 'threeSum2';
          break;
        default:
          best = 'threeSum1';
      }

      performanceTable.push({
        input: nums.length + '개',
        threeSum1: time1,
        threeSum2: time2,
        best,
      });
    });
  });

  afterAll(() => {
    console.table(performanceTable);
  });
});
