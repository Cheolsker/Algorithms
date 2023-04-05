function isPrime(n: number) {
  if (n < 2) return false;
  if (n === 2) return true;

  const max = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= max; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function solution(n: number, k: number) {
  const num = Number(n).toString(k);
  const answer = num.split("0").filter((n) => isPrime(+n)).length;

  return answer;
}
