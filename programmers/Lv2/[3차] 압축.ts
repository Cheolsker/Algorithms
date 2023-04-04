function solution(msg: string) {
  const answer = [];
  const dict = new Map();

  for (let i = 65; i <= 90; i++) {
    const char = String.fromCharCode(i);
    dict.set(char, i - 64);
  }

  msg.split("").reduce((acc, char, idx, arr) => {
    const w = acc + char;
    const wc = w + arr[idx + 1];

    if (dict.get(wc)) {
      return w;
    } else {
      answer.push(dict.get(w));
      dict.set(wc, dict.size + 1);
      return "";
    }
  }, "");

  return answer;
}
