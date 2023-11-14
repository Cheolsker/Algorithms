{
  type Fees = [number, number, number, number];

  function getMinutes(time: string) {
    const [h, m] = time.split(":");

    return +h * 60 + +m;
  }

  function getFee(fees: Fees, time: number) {
    if (time <= fees[0]) {
      return fees[1];
    }

    return fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
  }

  function solution(fees: Fees, records: string[]) {
    const answer = [];
    const acc: { [key: string]: number[] } = {};
    const nums = new Set<string>();

    for (const record of records) {
      const [time, num, stat] = record.split(" ");

      // 차량번호 기억
      nums.add(num);

      // 차량별로 누적시간 저장
      if (num in acc) {
        if (stat === "IN") {
          acc[num].push(-getMinutes(time));
        } else {
          acc[num].push(getMinutes(time));
        }
      } else {
        if (stat === "IN") {
          acc[num] = [-getMinutes(time)];
        } else {
          acc[num] = [getMinutes(time)];
        }
      }
    }

    const sortedNums = Array.from(nums).sort();

    for (const num of sortedNums) {
      if (acc[num].length % 2 === 1) {
        acc[num].push(23 * 60 + 59);
      }

      const time = acc[num].reduce((a, v) => a + v, 0);
      const result = getFee(fees, time);

      answer.push(result);
    }

    return answer;
  }

  // 테스트 케이스 1
  const fees1: Fees = [180, 5000, 10, 600];
  const records1 = [
    "05:34 5961 IN",
    "06:00 0000 IN",
    "06:34 0000 OUT",
    "07:59 5961 OUT",
    "07:59 0148 IN",
    "18:59 0000 IN",
    "19:09 0148 OUT",
    "22:59 5961 IN",
    "23:00 5961 OUT",
  ];

  const result1 = solution(fees1, records1);
  console.log(result1); // [14600, 34400, 5000]

  // 테스트 케이스 2
  const fees2: Fees = [120, 0, 60, 591];
  const records2 = [
    "16:00 3961 IN",
    "16:00 0202 IN",
    "18:00 3961 OUT",
    "18:00 0202 OUT",
    "23:58 3961 IN",
  ];

  const result2 = solution(fees2, records2);
  console.log(result2); // [0, 591]

  // 테스트 케이스 3
  const fees3: Fees = [1, 461, 1, 10];
  const records3 = ["00:00 1234 IN"];

  const result3 = solution(fees3, records3);
  console.log(result3); // [14841]
}
