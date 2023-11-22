const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [] as any[];

rl.on("line", function (line: string) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map((v: string) => +v);
  let limits = [] as number[];
  let tests = [] as number[];
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    const [size, speed] = input[i].split(" ").map((v: string) => +v);

    const arr = new Array(size).fill(speed);
    limits = [...limits, ...arr];
  }

  for (let i = n + 1; i <= n + m; i++) {
    const [size, speed] = input[i].split(" ").map((v: string) => +v);

    const arr = new Array(size).fill(speed);
    tests = [...tests, ...arr];
  }

  for (let i = 0; i < limits.length; i++) {
    if (limits[i] < tests[i]) {
      answer = Math.max(answer, tests[i] - limits[i]);
    }
  }

  console.log(answer);
  process.exit();
});
