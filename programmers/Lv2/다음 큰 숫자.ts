function solution(n: number) {
  const getOnes = (n) => Number(n).toString(2).replace(/0/g, "");

  let answer = n + 1;

  let nBinary = getOnes(n);
  let nextBinary = getOnes(n + 1);

  while (nBinary !== nextBinary) {
    answer += 1;
    nextBinary = getOnes(answer);
  }

  return answer;
}
