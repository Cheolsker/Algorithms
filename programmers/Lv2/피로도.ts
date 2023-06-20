function solution(k: number, dungeons: [number, number][]) {
  const n = dungeons.length;
  const check = Array.from({ length: n }, () => 0);
  let answer = 0;

  function enter(lv: number, k: number, cnt: number) {
    if (lv === n) {
      answer = Math.max(answer, cnt);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (check[i] === 0 && k >= dungeons[i][0]) {
        check[i] = 1;
        enter(lv + 1, k - dungeons[i][1], cnt + 1);
        check[i] = 0;
      } else {
        answer = Math.max(answer, cnt);
      }
    }
  }

  enter(0, k, 0);

  return answer;
}

// test

// case 1
console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); // answer : 3

// case 2
console.log(
  solution(40, [
    [40, 20],
    [10, 10],
    [10, 10],
    [10, 10],
    [10, 10],
  ])
); // answer : 4

// case 3
console.log(
  solution(100, [
    [100, 1],
    [99, 1],
    [99, 1],
    [99, 1],
    [99, 1],
    [99, 1],
    [99, 1],
  ])
); // answer : 2
