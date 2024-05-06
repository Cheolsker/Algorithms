import { trap1, trap2 } from "./42. Trapping Rain Water";

type Cases<NUMS, EXPECTED> = [NUMS, EXPECTED][];

const cases: Cases<number[], number> = [
  [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
  [[4, 2, 0, 3, 2, 5], 9],
];

const performanceTable: {
  input: string;
  trap1: number;
  trap2: number;
  best: string;
}[] = [];

describe("Trap", () => {
  context("Trap 1", () => {
    it.each(cases)("case %#", (nums, expected) => {
      expect(trap1(nums)).toEqual(expected);
    });
  });

  context("Trap 2", () => {
    it.each(cases)("case %#", (nums, expected) => {
      expect(trap2(nums)).toEqual(expected);
    });
  });

  context("performance 비교", () => {
    it.each(cases)("case %#", (nums, expected) => {
      const startTime1 = performance.now();
      const result1 = trap1(nums);
      const endTime1 = performance.now();
      const time1 = endTime1 - startTime1;

      const startTime2 = performance.now();
      const result2 = trap2(nums);
      const endTime2 = performance.now();
      const time2 = endTime2 - startTime2;

      let best;
      switch (Math.min(time1, time2)) {
        case time1:
          best = "trap1";
          break;
        case time2:
          best = "trap2";
          break;
        default:
          best = "trap1";
      }

      performanceTable.push({
        input: nums.length + "개",
        trap1: time1,
        trap2: time2,
        best,
      });
    });
  });

  afterAll(() => {
    console.table(performanceTable);
  });
});
