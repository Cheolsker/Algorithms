type Process = {
  order: number;
  idx: number;
};

function solution(priorities: number[], location: number) {
  const processes = priorities.map((v, i) => ({
    order: v,
    idx: i,
  }));
  const orders = priorities.sort((a, b) => b - a);
  let cnt = 0;
  let flag = 1;

  while (flag) {
    const process = processes.shift() as Process;

    if (orders[0] !== process.order) {
      processes.push(process);
    }

    if (orders[0] === process.order) {
      orders.shift();
      cnt++;

      if (process.idx === location) {
        flag = 0;
      }
    }
  }

  return cnt;
}

// 테스트 케이스 1
const priorities1 = [2, 1, 3, 2];
const location1 = 2;

const result1 = solution(priorities1, location1);
console.log(result1); // 1

// 테스트 케이스 2
const priorities2 = [1, 1, 9, 1, 1, 1];
const location2 = 0;

const result2 = solution(priorities2, location2); // 5
console.log(result2);
