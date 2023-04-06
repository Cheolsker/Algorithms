function solution(n: number, t: number, m: number, p: number) {
  let answer = "";
  let str = "";
  let cnt = 0;

  while (answer.length != t) {
    str += Number(cnt).toString(n);

    if (str.length >= m) {
      answer += str[p - 1];
      str = str.slice(m);
    }

    cnt++;
  }

  return answer.toUpperCase();
}
