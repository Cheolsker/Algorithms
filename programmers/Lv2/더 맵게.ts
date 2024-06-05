{
  function solution(scovs: number[], K: number) {
    let answer = 0;
    const isComplete = () => scovs.every((val) => val >= K);

    if (isComplete()) {
      return answer;
    }

    while (scovs.length >= 2) {
      scovs.sort((a, b) => a - b);

      const scov1 = scovs.shift() as number;
      const scov2 = scovs.shift() as number;

      const newScov = scov1 + scov2 * 2;
      scovs.push(newScov);
      answer++;

      if (isComplete()) {
        return answer;
      }
    }

    return isComplete() ? answer : -1;
  }

  /**
   * 테스트 케이스
   */
  solution([1, 2, 3, 9, 10, 12], 7); // 2
  solution([1, 3, 5], 5); // 1
  solution([5, 5, 5], 5); // 0
}
