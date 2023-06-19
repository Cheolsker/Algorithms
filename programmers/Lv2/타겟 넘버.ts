function solution(numbers: number[], target: number) {
  const n = numbers.length;
  let answer = 0;

  function DFS(level: number, sum: number) {
    if (level === n) {
      if (sum === target) answer++;
      return;
    }

    DFS(level + 1, sum + numbers[level]);
    DFS(level + 1, sum - numbers[level]);
  }

  DFS(0, 0);
  return answer;
}

// test

// case 1
const answer1 = solution([1, 1, 1, 1, 1], 3); // 5
console.log(answer1);

// case 2
const answer2 = solution([4, 1, 2, 1], 4); // 2
console.log(answer2);
