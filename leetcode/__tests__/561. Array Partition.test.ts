import { arrayPairSum as arrayPairSum1 } from '../561. Array Partition';

type Cases<NUMS, EXPECTED> = [NUMS, EXPECTED][];

const cases: Cases<number[], number> = [
  [[1, 4, 3, 2], 4],
  [[6, 2, 6, 5, 1, 2], 9],
];

const performanceTable: {
  input: string;
  arrayPairSum1: number;
  best: string;
}[] = [];

describe('ArrayPairSum', () => {
  context('ArrayPairSum 1', () => {
    it.each(cases)('case %#', (nums, expected) => {
      expect(arrayPairSum1(nums)).toEqual(expected);
    });
  });

  context('performance 비교', () => {
    it.each(cases)('case %#', (nums, expected) => {
      const startTime1 = performance.now();
      const result1 = arrayPairSum1(nums);
      const endTime1 = performance.now();
      const time1 = endTime1 - startTime1;

      let best;
      switch (Math.min(time1)) {
        case time1:
          best = 'arrayPairSum1';
          break;
        default:
          best = 'arrayPairSum1';
      }

      performanceTable.push({
        input: nums.length + '개',
        arrayPairSum1: time1,
        best,
      });
    });
  });

  afterAll(() => {
    console.table(performanceTable);
  });
});
