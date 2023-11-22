{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input: any[] = [];

  rl.on("line", function (line: string) {
    input.push(line);
    rl.close();
  });

  rl.on("close", function () {
    const n = Number(input[0]);
    const stones = input[1].split(" ").map((v) => +v);
    const arr = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (stones[j] < stones[i]) {
          arr[i] = Math.max(arr[i], arr[j] + 1);
        }
      }
    }

    console.log(Math.max(...arr));
    process.exit();
  });
}
