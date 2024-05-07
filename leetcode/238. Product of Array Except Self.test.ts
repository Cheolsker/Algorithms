import { productExceptSelf } from "./238. Product of Array Except Self";

type Cases<NUMS, EXPECTED> = [NUMS, EXPECTED][];

const cases: Cases<number[], number[]> = [
  [
    [1, 3, 5, 7],
    [105, 35, 21, 15],
  ],
  [
    [1, 2, 3, 4],
    [24, 12, 8, 6],
  ],
  [
    [-1, 1, 0, -3, 3],
    [0, 0, 9, 0, 0],
  ],
];

const performanceTable: {
  input: string;
  productExceptSelf: number;
  best: string;
}[] = [];

describe("ProductExceptSelf", () => {
  context("ProductExceptSelf 1", () => {
    it.each(cases)("case %#", (nums, expected) => {
      console.log("result", productExceptSelf(nums));
      expect(productExceptSelf(nums)).toEqual(expected);
    });
  });

  context("performance 비교", () => {
    it.each(cases)("case %#", (nums, expected) => {
      const startTime1 = performance.now();
      const result1 = productExceptSelf(nums);
      const endTime1 = performance.now();
      const time1 = endTime1 - startTime1;

      let best;
      switch (Math.min(time1)) {
        case time1:
          best = "productExceptSelf";
          break;
        default:
          best = "productExceptSelf";
      }

      performanceTable.push({
        input: nums.length + "개",
        productExceptSelf: time1,
        best,
      });
    });
  });

  afterAll(() => {
    console.table(performanceTable);
  });
});
