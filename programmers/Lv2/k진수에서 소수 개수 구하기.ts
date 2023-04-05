function isPrime(n: number) {
  if (n === 1) return false;
  if (n === 2) return true;

  const max = Math.floor(Math.sqrt(n));
  let cnt = 0;

  for (let i = 2; i <= max; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function solution(n: number, k: number) {
  const num = Number(n).toString(k);
  const arr = num.split("0").filter((n) => n);
  let answer = 0;

  arr.forEach((n) => {
    if (isPrime(+n)) answer += 1;
  });

  return answer;
}
